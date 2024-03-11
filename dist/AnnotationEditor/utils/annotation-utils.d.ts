import { AnnotationForEditor, AnnotationFromAnnotorious, AnnotationPageForEditor, AnnotationForAnnotorious } from "../types/annotation";
export declare function saveAnnotation(webAnnotation: AnnotationFromAnnotorious, manifestId: string, activeCanvas: string, unit: "pixel" | "percent", token?: string, annotationServer?: string): Promise<void>;
export declare function fetchAnnotations(activeCanvas: string, unit: "pixel" | "percent", token?: string, annotationServer?: string): Promise<AnnotationForAnnotorious[]>;
export declare function deleteAnnotation(webAnnotation: AnnotationFromAnnotorious, manifestId: string, activeCanvas: string, unit: "pixel" | "percent", token?: string, annotationServer?: string): Promise<void>;
export declare function updateAnnotation(webAnnotation: AnnotationFromAnnotorious, manifestId: string, activeCanvas: string, unit: "pixel" | "percent", token?: string, annotationServer?: string): Promise<void>;
export declare function convertWebAnnotationToIIIFAnnotation(webAnnotation: AnnotationFromAnnotorious, manifestId: string, canvasId: string, unit: "pixel" | "percent"): AnnotationForEditor;
export declare function convertIIIFAnnotationPageToWebAnnotations(savedAnnotation: AnnotationPageForEditor, unit: "pixel" | "percent"): AnnotationForAnnotorious[];
