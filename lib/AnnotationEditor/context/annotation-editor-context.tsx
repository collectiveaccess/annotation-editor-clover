import React, { useReducer } from "react";

export interface EditorContextStore {
  zoomLevel: number;
  annotationsUpdatedAt: string;
  annotations: any;
}

interface EditorAction {
  type: string;
  annotationsUpdatedAt: string;
  annotations: any;
}

// eslint-disable-next-line react-refresh/only-export-components
export const defaultState: EditorContextStore = {
  zoomLevel: 2,
  annotationsUpdatedAt: "",
  annotations: [],
};

const EditorStateContext =
  React.createContext<EditorContextStore>(defaultState);
const EditorDispatchContext =
  React.createContext<EditorContextStore>(defaultState);

function EditorReducer(state: EditorContextStore, action: EditorAction) {
  switch (action.type) {
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
