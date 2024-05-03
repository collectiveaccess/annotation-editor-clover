import React, { useState, useEffect } from "react";
import {
  type PluginInformationPanel,
  type AnnotationTargetExtended,
} from "@samvera/clover-iiif";
import styles from "./InformationPanel.module.css";
import {
  useEditorState,
  useEditorDispatch,
} from "../context/annotation-editor-context";
import AnnotationItem from "./AnnotationItem";
import { fetchAnnotations } from "../utils/annotation-utils";

interface PropType extends PluginInformationPanel {
  token: string;
  annotationServer: string;
}

export const InfomationPanel: React.FC<PropType> = ({
  activeManifest,
  canvas,
  viewerConfigOptions,
  openSeadragonViewer,
  useViewerDispatch,
  useViewerState,
  token,
  annotationServer,
}) => {
  const [activeTarget, setActiveTarget] = useState<
    AnnotationTargetExtended | string
  >();

  const editorState = useEditorState();
  const { annotationsUpdatedAt, annotations } = editorState;
  const dispatch: any = useEditorDispatch();

  // fetch annotations when there is a change in annotationsUpdatedAt
  useEffect(() => {
    if (!annotationsUpdatedAt) return;

    fetchAnnotations(token, annotationServer).then((response) => {
      console.log("InfomationPanel fetchAnnotations", response);
      dispatch({
        type: "updateAnnotations",
        annotations: response,
      });
      dispatch({
        type: "annotationsUpdatedAt",
        annotationsUpdatedAt: undefined,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [annotationsUpdatedAt]);

  return (
    <div className={styles.container}>
      <p>
        Use the button to make a clipping. Clippings from this record is
        available below.
      </p>
      <p>
        <a href="">View all clippings.</a>
      </p>
      <p>Clippings from this record</p>

      {annotations?.map((annotation) => (
        <AnnotationItem
          key={annotation.id}
          annotation={annotation}
          activeManifest={activeManifest}
          canvas={canvas}
          viewerConfigOptions={viewerConfigOptions}
          openSeadragonViewer={openSeadragonViewer}
          useViewerState={useViewerState}
          useViewerDispatch={useViewerDispatch}
          activeTarget={activeTarget}
          setActiveTarget={setActiveTarget}
        />
      ))}
    </div>
  );
};

export default InfomationPanel;
