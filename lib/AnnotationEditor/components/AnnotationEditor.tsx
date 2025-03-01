import React, { useEffect, useState, useRef } from "react";
import Annotorious from "@recogito/annotorious-openseadragon";
import "@recogito/annotorious-openseadragon/dist/annotorious.min.css";
import {
  saveAnnotation,
  deleteAnnotation,
  updateAnnotation,
  convertIIIFAnnotationToWebAnnotation,
} from "../utils/annotation-utils";
import { type Plugin } from "@samvera/clover-iiif";
import {
  useEditorDispatch,
  useEditorState,
} from "../context/annotation-editor-context";
import styles from "./AnnotationEditor.module.css";
import { AnnotationFromAnnotorious } from "../types/annotation";
import { fetchAnnotations } from "../utils/annotation-utils";

interface PropType extends Plugin {
  token?: string;
  annotationServer?: string;
}

let annotation_count = 0;

const AnnotationEditor: React.FC<PropType> = (props: PropType) => {
  const { canvas, useViewerState, token, annotationServer, useViewerDispatch } = props;

  const viewerState = useViewerState() as any;	// need "informationPanelCounts" which is defined in patched GRPL version of Clover but not library plugin links to at compile time
  const { openSeadragonViewer, activeManifest, informationPanelCounts } = viewerState;

  const [active, setActive] = useState(false);
  const [viewerId, setViewerId] = useState(openSeadragonViewer?.id);

  const editorDispatch: any = useEditorDispatch();
  const viewerDispatch: any = useViewerDispatch();
  const editorState = useEditorState();
  const { annotations, annotorious } = editorState;
  
  const activeCanvas = canvas.id;
  const fragmentUnit = "pixel";
  const fetchAnnotationRan = useRef(false);

  // fetch annotations on page load
  useEffect(() => {
    if (!fetchAnnotationRan.current && annotations.length === 0) {
      fetchAnnotations(token, annotationServer).then((response) => {
        editorDispatch({
          type: "updateAnnotations",
          annotations: response,
        });
        annotation_count = response.length;
        viewerDispatch({
		  count: annotation_count,
		  panel: "AnnotationEditor",
		  type: "updateInformationPanelCount",
		});
      });
    }

    return () => {
      fetchAnnotationRan.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // create Annotorious instance if there is new openSeadragonViewer instance
  useEffect(() => {
    if (!openSeadragonViewer) return;
    if (openSeadragonViewer.id == viewerId) return;

    // set up Annotorious
    const options = {
      allowEmpty: true,
      fragmentUnit: fragmentUnit,
      widgets: ["COMMENT"],
      messages: {
		  "Add a comment...": "Notes (optional)",
		  "Add a reply...": "Notes (optional)",
		  "Add tag...": "Tags",
		  "Cancel": "Cancel",
		  "Close": "Close",
		  "Edit": "Edit",
		  "Delete": "Delete",
		  "Ok": "Save"
		}
    };
    const annotoriousInstance = Annotorious(openSeadragonViewer, options);

    // set up CRUD
    annotoriousInstance.on(
      "createAnnotation",
      (annotation: AnnotationFromAnnotorious) => {
        saveAnnotation(
          annotation,
          activeManifest,
          canvas.id,
          fragmentUnit,
          token,
          annotationServer,
        ).then(() => {
          editorDispatch({
            type: "annotationsUpdatedAt",
            annotationsUpdatedAt: new Date().getTime(),
          });
          
        	annotation_count = informationPanelCounts['AnnotationEditor'] + 1;
			viewerDispatch({
			  count: annotation_count,
			  panel: "AnnotationEditor",
			  type: "updateInformationPanelCount",
			});
        });
      },
    );
    annotoriousInstance.on(
      "updateAnnotation",
      (annotation: AnnotationFromAnnotorious) => {
        updateAnnotation(
          annotation,
          activeManifest,
          activeCanvas,
          fragmentUnit,
          token,
          annotationServer,
        ).then(() => {
          editorDispatch({
            type: "annotationsUpdatedAt",
            annotationsUpdatedAt: new Date().getTime(),
          });
        });
      },
    );
    annotoriousInstance.on(
      "deleteAnnotation",
      (annotation: AnnotationFromAnnotorious) => {
        deleteAnnotation(
          annotation,
          activeManifest,
          activeCanvas,
          fragmentUnit,
          token,
          annotationServer,
        ).then(() => {
          editorDispatch({
            type: "annotationsUpdatedAt",
            annotationsUpdatedAt: new Date().getTime(),
          });
          
        annotation_count = informationPanelCounts['AnnotationEditor'] - 1;
        viewerDispatch({
		  count: annotation_count,
		  panel: "AnnotationEditor",
		  type: "updateInformationPanelCount",
		});
        });
      },
    );

    // set menu button to inactive after drawing selectionbox
    annotoriousInstance.on("createSelection", () => {
      setActive(false);
      document.body.style.cursor = 'auto';
    });

    editorDispatch({
      type: "updateAnnotorious",
      annotorious: annotoriousInstance,
    });
    setViewerId(openSeadragonViewer.id);

    // destroy Annotorious instance
    return () => {
      annotoriousInstance.destroy();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openSeadragonViewer]);

  // add annotations for current canvas to annotorious
  useEffect(() => {
    if (annotorious && annotations.length > 0) {
      annotations.forEach((annotation: any) => {
        try {
          if (annotation.target.source.id === activeCanvas) {
            annotorious.addAnnotation(
              convertIIIFAnnotationToWebAnnotation(annotation, "pixel"),
            );
          }
        } catch (error) {
          console.log(error);
        }
      });
    }
  }, [annotations, annotorious, activeCanvas]);

  function clickHandler() {
    if (!annotorious) return;

    annotorious.setDrawingTool("rect");
    annotorious.setDrawingEnabled(!active);
    setActive(!active);
	document.body.style.cursor = 'crosshair';
  }

  if (!annotorious) return <></>;

  return (
    <button
      onClick={clickHandler}
      className={`${active && styles.active} ${styles.toolbarBtn}`}
    >
      <i className="fas fa-cut fa-sm"></i>
    </button>
  );
};

export default AnnotationEditor;
