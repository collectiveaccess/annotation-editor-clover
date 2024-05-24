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

const AnnotationEditor: React.FC<PropType> = (props: PropType) => {
  const { canvas, useViewerState, token, annotationServer } = props;

  const viewerState = useViewerState();
  const { openSeadragonViewer, activeManifest } = viewerState;

  const [active, setActive] = useState(false);
  const [viewerId, setViewerId] = useState(openSeadragonViewer?.id);

  const editorDispatch: any = useEditorDispatch();
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
        });
      },
    );

    // set menu button to inactive after drawing selectionbox
    annotoriousInstance.on("createSelection", () => {
      setActive(false);
    });

    editorDispatch({
      type: "updateAnnotorious",
      annotorious: annotoriousInstance,
    });
    setViewerId(openSeadragonViewer.id);

    // destroy Annotorious instance
    return () => {
      console.log("annotoriousInstance.destroy");
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
  }

  if (!annotorious) return <></>;

  return (
    <button
      onClick={clickHandler}
      className={`${active && styles.active} ${styles.toolbarBtn}`}
    >
      <svg viewBox="0 0 80 80">
        <g>
          <rect x="18" y="25" width="46" height="30"></rect>
          <g className="handles">
            <circle cx="18" cy="25" r="5"></circle>
            <circle cx="64" cy="25" r="5"></circle>
            <circle cx="18" cy="55" r="5"></circle>
            <circle cx="64" cy="55" r="5"></circle>
          </g>
        </g>
      </svg>
    </button>
  );
};

export default AnnotationEditor;
