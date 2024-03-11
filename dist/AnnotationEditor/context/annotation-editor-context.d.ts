import React from "react";
export type ConfigOptions = {
    [k: string]: any;
};
export interface EditorContextStore {
    configOptions: ConfigOptions;
    clippingsUpdatedAt: string;
}
export declare const defaultState: EditorContextStore;
interface EditorProviderProps {
    initialState?: EditorContextStore;
    children: React.ReactNode;
}
declare const EditorProvider: React.FC<EditorProviderProps>;
declare function useEditorState(): EditorContextStore;
declare function useEditorDispatch(): EditorContextStore;
export { EditorProvider, useEditorState, useEditorDispatch };
