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
  const {
    canvas,
    openSeadragonViewer,
    activeManifest,
    token,
    annotationServer,
  } = props;

  const [active, setActive] = useState(false);
  const [editor, setEditor] = useState<any>();
  const editorDispatch: any = useEditorDispatch();
  const editorState = useEditorState();
  const { annotations } = editorState;

  const activeCanvas = canvas.id;
  const fragmentUnit = "pixel";
  const fetchAnnotationRan = useRef(false);

  // fetch annotations
  useEffect(() => {
    if (!fetchAnnotationRan.current) {
      fetchAnnotations(token, annotationServer).then((response) => {
        console.log("AnnotationEditor fetch annotations", editor);

        editorDispatch({
          type: "updateAnnotations",
          annotations: response,
        });
      });
    }

    return () => {
      fetchAnnotationRan.current = true;
    };
  }, []);

  // create Annotorious instance for each openSeadragonViewer instance
  useEffect(() => {
    if (!openSeadragonViewer) return;
    console.log("set up Annotorious");

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
    setEditor(annotoriousInstance);

    // destroy Annotorious instance
    return () => {
      annotoriousInstance.destroy();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openSeadragonViewer]);

  // add annotations to annotorious
  useEffect(() => {
    if (editor && annotations.length > 0) {
      console.log("annotorious.addAnnotation()");
      annotations.forEach((annotation) => {
        try {
          if (annotation.target.source.id === activeCanvas) {
            editor.addAnnotation(
              convertIIIFAnnotationToWebAnnotation(annotation, "pixel"),
            );
          }
        } catch (error) {
          console.log(error);
        }
      });
    }
  }, [annotations, editor, activeCanvas]);

  function clickHandler() {
    editor.setDrawingTool("rect");
    editor.setDrawingEnabled(!active);
    setActive(!active);
  }

  if (!editor) return <></>;

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
