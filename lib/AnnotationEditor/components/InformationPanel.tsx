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
  annotationDownloadUrl: string;
  annotationDownloadLabel: string;
}

export const InfomationPanel: React.FC<PropType> = ({
  canvas,
  useViewerDispatch,
  useViewerState,
  token,
  annotationServer,
  annotationDownloadUrl,
  annotationDownloadLabel
}) => {
  const [activeTarget, setActiveTarget] = useState<
    AnnotationTargetExtended | string
  >();
  const editorState = useEditorState();
  const { annotationsUpdatedAt, annotations, annotorious } = editorState;
  const dispatch: any = useEditorDispatch();
  const vdispatch: any = useViewerDispatch();

  // fetch annotations when there is a change in annotationsUpdatedAt
  useEffect(() => {
    if (!annotationsUpdatedAt) return;

    fetchAnnotations(token, annotationServer).then((response) => {
      dispatch({
        type: "updateAnnotations",
        annotations: response,
      });
      dispatch({
        type: "annotationsUpdatedAt",
        annotationsUpdatedAt: undefined,
      });
       dispatch({
        type: "updateAnnotorious",
        annotorious: annotorious,
      });
      
      if(annotations) {
		  vdispatch({
			  count: annotations.length,
			  panel: "AnnotationEditor",
			  type: "updateInformationPanelCount",
			});
		}
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [annotationsUpdatedAt]);
  
  // Pass annotation count to viewer for display in panel tab
  useEffect(() => {
	  if(annotations) {
		  vdispatch({
			  count: annotations.length,
			  panel: "AnnotationEditor",
			  type: "updateInformationPanelCount",
			});
		}
  }, [annotations]);

  const msg = (annotationDownloadUrl && annotationDownloadLabel) ? <form action={annotationDownloadUrl} className="clippingDownload"><button className="clippingDownloadLink">{annotationDownloadLabel}</button></form> : '';
  
  return (annotations?.length === 0) ? 
  	( <div className={styles.container}>
  		No clippings defined
  	  </div>
  	)
  	:
  	(
    <div className={styles.container}>
    	{msg}
      {annotations?.map((annotation: any) => (
        <AnnotationItem
          key={annotation.id}
          annotation={annotation}
          canvas={canvas}
          useViewerState={useViewerState}
          useViewerDispatch={useViewerDispatch}
          activeTarget={activeTarget}
          setActiveTarget={setActiveTarget}
          token={token}
          annotationServer={annotationServer}
          downloadUrl={annotationDownloadUrl}
        />
      ))}
    </div>
  );
};

export default InfomationPanel;