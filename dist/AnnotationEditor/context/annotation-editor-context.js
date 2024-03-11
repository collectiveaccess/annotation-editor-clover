import { jsx as i } from "react/jsx-runtime";
import o, { useReducer as u } from "react";
const n = {}, r = {
  configOptions: n,
  clippingsUpdatedAt: ""
}, d = o.createContext(r), s = o.createContext(r);
function a(t, e) {
  switch (e.type) {
    case "updateConfigOptions":
      return {
        ...t,
        configOptions: {
          ...n,
          ...e.configOptions
        }
      };
    case "updateClippingsUpdatedAt":
      return {
        ...t,
        clippingsUpdatedAt: e.clippingsUpdatedAt
      };
    default:
      throw new Error(`Unhandled action type: ${e.type}`);
  }
}
const h = ({
  initialState: t = r,
  children: e
}) => {
  const [c, p] = u(a, t);
  return /* @__PURE__ */ i(d.Provider, { value: c, children: /* @__PURE__ */ i(
    s.Provider,
    {
      value: p,
      children: e
    }
  ) });
};
function l() {
  const t = o.useContext(d);
  if (t === void 0)
    throw new Error("useEditorState must be used within a EditorProvider");
  return t;
}
function x() {
  const t = o.useContext(s);
  if (t === void 0)
    throw new Error("useEditorDispatch must be used within a EditorProvider");
  return t;
}
export {
  h as EditorProvider,
  r as defaultState,
  x as useEditorDispatch,
  l as useEditorState
};
