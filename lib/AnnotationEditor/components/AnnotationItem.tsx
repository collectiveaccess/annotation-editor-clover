import React, { useEffect } from "react";
import { createOpenSeadragonRect } from "@samvera/clover-iiif/openseadragon-helpers";
import { parseAnnotationTarget } from "@samvera/clover-iiif/annotation-helpers";
import {
  type PluginInformationPanel,
  type AnnotationTargetExtended,
} from "@samvera/clover-iiif";
import {
  AnnotationForEditor,
  AnnotationBodyForEditor,
} from "../types/annotation";
import { useEditorState } from "../context/annotation-editor-context";

interface PropType extends PluginInformationPanel {
  annotation: AnnotationForEditor;
  setActiveTarget: React.Dispatch<
    React.SetStateAction<AnnotationTargetExtended | string | undefined>
  >;
  activeTarget?: AnnotationTargetExtended | string;
}

const AnnotationItem: React.FC<PropType> = ({
  annotation,
  canvas,
  useViewerDispatch,
  setActiveTarget,
  activeTarget,
  useViewerState,
}) => {
  const dispatch: any = useViewerDispatch();
  const viewerState = useViewerState();
  const { OSDImageLoaded, openSeadragonViewer } = viewerState;
  const editorState = useEditorState();
  const { zoomLevel } = editorState;

  // zoom to activeTarget when openSeadragonViewer changes
  useEffect(() => {
    if (!OSDImageLoaded) return;
    if (!openSeadragonViewer) return;
    if (!annotation.target) return;
    if (annotation.target != activeTarget) return;

    const parsedAnnotationTarget = parseAnnotationTarget(annotation.target);
    const { rect, id } = parsedAnnotationTarget;

    if (rect) {
      if (canvas.id === id) {
        const rect2 = createOpenSeadragonRect(
          canvas,
          parsedAnnotationTarget,
          zoomLevel,
        );
        openSeadragonViewer?.viewport.fitBounds(rect2);
        highlightAnnotation(annotation);
        setActiveTarget(undefined);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openSeadragonViewer.id, OSDImageLoaded]);

  function handleClick() {
    if (!annotation.target) return;

    const target = Array.isArray(annotation.target)
      ? annotation.target[0]
      : annotation.target;
    const parsedAnnotationTarget = parseAnnotationTarget(target);
    const { rect, id } = parsedAnnotationTarget;

    if (rect) {
      if (canvas.id === id) {
        const rect2 = createOpenSeadragonRect(
          canvas,
          parsedAnnotationTarget,
          zoomLevel,
        );
        openSeadragonViewer?.viewport.fitBounds(rect2);
        highlightAnnotation(annotation);
      } else {
        dispatch({
          type: "updateOSDImageLoaded",
          OSDImageLoaded: false,
        });
        dispatch({
          type: "updateActiveCanvas",
          canvasId: id,
        });

        setActiveTarget(target);
      }
    }
  }

  function highlightAnnotation(annotation: AnnotationForEditor) {
    const allAnnotationEls = document.querySelectorAll(".a9s-annotation");
    if (allAnnotationEls) {
      allAnnotationEls.forEach((el) => el.classList.remove("selected"));
    }

    const annotationEl = document.querySelector(`[data-id='${annotation.id}']`);
    if (annotationEl) {
      annotationEl.classList.add("selected");
    }
  }

  function renderBody(body: AnnotationBodyForEditor, i: number) {
    if (typeof body === "string") {
      return (
        <div key={i} className="clipping-text">
          {body}
        </div>
      );
    } else if (body.type === "Image") {
      return <img src={body.value} key={i} className="clipping-image" />;
    } else if (body.type === "TextualBody") {
      return (
        <div key={i} className="clipping-text">
          {body.value}
        </div>
      );
    }
  }

  function processBody(
    body: AnnotationBodyForEditor | AnnotationBodyForEditor[],
  ) {
    if (Array.isArray(body)) {
      return body.map((body, i: number) => {
        return renderBody(body, i);
      });
    } else {
      return renderBody(body, 0);
    }
  }

  if (!annotation.body) return <></>;

  return (
    <div className="clipping" onClick={handleClick}>
      <button>{processBody(annotation.body)}</button>
    </div>
  );
};

export default AnnotationItem;
