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
} from "../../types/annotation";

interface PropType extends PluginInformationPanel {
  annotation: AnnotationForEditor;
  setActiveTarget: React.Dispatch<
    React.SetStateAction<AnnotationTargetExtended | string | undefined>
  >;
  activeTarget?: AnnotationTargetExtended | string;
}

const AnnotationItem: React.FC<PropType> = ({
  annotation,
  viewerConfigOptions,
  canvas,
  openSeadragonViewer,
  useViewerDispatch,
  setActiveTarget,
  activeTarget,
}) => {
  const dispatch: any = useViewerDispatch();

  // zoom to activeTarget when openSeadragonViewer changes
  useEffect(() => {
    if (!openSeadragonViewer) return;
    if (annotation.target != activeTarget) return;
    const zoomLevel = viewerConfigOptions.annotationOverlays?.zoomLevel || 1;

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
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openSeadragonViewer]);

  function handleClick() {
    if (!annotation.target) return;

    const zoomLevel = viewerConfigOptions.annotationOverlays?.zoomLevel || 1;

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
      } else {
        dispatch({
          type: "updateActiveCanvas",
          canvasId: id,
        });

        setActiveTarget(annotation.target);
      }
    }
  }

  function renderItem(body: any, i: number) {
    if (body.format === "image/jpeg") {
      return <img key={i} src={body.id} />;
    } else if (body.type === "TextualBody") {
      return <div key={i}>{body.value}</div>;
    }
  }

  return (
    <div onClick={handleClick}>
      {annotation.body.map((body: any, i: number) => renderItem(body, i))}
    </div>
  );
};

export default AnnotationItem;
