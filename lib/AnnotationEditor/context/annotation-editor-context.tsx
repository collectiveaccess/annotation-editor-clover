import React, { useReducer } from "react";

export type ConfigOptions = {
  [k: string]: any;
};

const defaultConfigOptions: ConfigOptions = {};

export interface EditorContextStore {
  configOptions: ConfigOptions;
  annotationsUpdatedAt: string;
  annotations: any;
}

interface EditorAction {
  type: string;
  configOptions: ConfigOptions;
  annotationsUpdatedAt: string;
  annotations: any;
}

export const defaultState: EditorContextStore = {
  configOptions: defaultConfigOptions,
  annotationsUpdatedAt: "",
  annotations: [],
};

const EditorStateContext =
  React.createContext<EditorContextStore>(defaultState);
const EditorDispatchContext =
  React.createContext<EditorContextStore>(defaultState);

function EditorReducer(state: EditorContextStore, action: EditorAction) {
  switch (action.type) {
    case "updateConfigOptions": {
      return {
        ...state,
        configOptions: {
          ...defaultConfigOptions,
          ...action.configOptions,
        },
      };
    }
    case "annotationsUpdatedAt": {
      return {
        ...state,
        annotationsUpdatedAt: action.annotationsUpdatedAt,
      };
    }
    case "updateAnnotations": {
      return {
        ...state,
        annotations: action.annotations,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

interface EditorProviderProps {
  initialState?: EditorContextStore;
  children: React.ReactNode;
}

const EditorProvider: React.FC<EditorProviderProps> = ({
  initialState = defaultState,
  children,
}) => {
  const [state, dispatch] = useReducer<
    React.Reducer<EditorContextStore, EditorAction>
  >(EditorReducer, initialState);

  return (
    <EditorStateContext.Provider value={state}>
      <EditorDispatchContext.Provider
        value={dispatch as unknown as EditorContextStore}
      >
        {children}
      </EditorDispatchContext.Provider>
    </EditorStateContext.Provider>
  );
};

function useEditorState() {
  const context = React.useContext(EditorStateContext);
  if (context === undefined) {
    throw new Error("useEditorState must be used within a EditorProvider");
  }
  return context;
}

function useEditorDispatch() {
  const context = React.useContext(EditorDispatchContext);
  if (context === undefined) {
    throw new Error("useEditorDispatch must be used within a EditorProvider");
  }
  return context;
}

export { EditorProvider, useEditorState, useEditorDispatch };
