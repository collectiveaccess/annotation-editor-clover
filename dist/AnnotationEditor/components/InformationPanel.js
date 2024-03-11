import "../../assets/InformationPanel.css";
import { jsxs as C, jsx as e } from "react/jsx-runtime";
import { useState as s, useEffect as c } from "react";
import { useEditorState as y } from "../context/annotation-editor-context.js";
import T from "./AnnotationItem.js";
const b = "_container_1tymf_1", v = {
  container: b
}, E = ({
  annotations: p,
  activeManifest: l,
  canvas: h,
  viewerConfigOptions: m,
  openSeadragonViewer: d,
  useViewerDispatch: f,
  useViewerState: u,
  token: i,
  annotationServer: o
}) => {
  const [g, j] = s(), [n, r] = s(p), A = y(), { clippingsUpdatedAt: a } = A;
  return c(() => {
    fetch(o, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${i}`
      }
    }).then((t) => t.json()).then((t) => {
      r(t.items);
    });
  }, []), c(() => {
    a && fetch(o, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${i}`
      }
    }).then((t) => t.json()).then((t) => {
      r(t.items);
    });
  }, [a]), /* @__PURE__ */ C("div", { className: v.container, children: [
    /* @__PURE__ */ e("p", { children: "Use the button to make a clipping. Clippings from this record is available below." }),
    /* @__PURE__ */ e("p", { children: /* @__PURE__ */ e("a", { href: "", children: "View all clippings." }) }),
    /* @__PURE__ */ e("p", { children: "Clippings from this record" }),
    n == null ? void 0 : n.map((t) => /* @__PURE__ */ e(
      T,
      {
        annotation: t,
        activeManifest: l,
        canvas: h,
        viewerConfigOptions: m,
        openSeadragonViewer: d,
        useViewerState: u,
        useViewerDispatch: f,
        activeTarget: g,
        setActiveTarget: j
      },
      t.id
    ))
  ] });
};
export {
  E as InfomationPanel,
  E as default
};
