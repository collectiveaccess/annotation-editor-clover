import React from "react";
import { type PluginInformationPanel } from "@samvera/clover-iiif";
import { AnnotationForEditor } from "../types/annotation";
interface PropType extends PluginInformationPanel {
    token: string;
    annotationServer: string;
    annotations: AnnotationForEditor[];
}
export declare const InfomationPanel: React.FC<PropType>;
export default InfomationPanel;
