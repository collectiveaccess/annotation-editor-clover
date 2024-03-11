import "../../assets/InformationPanel.css";
import { jsxs as v, jsx as e } from "react/jsx-runtime";
import { useState as o, useEffect as A } from "react";
import { useEditorState as C } from "../context/annotation-editor-context.js";
import b from "./AnnotationItem.js";
const x = "_container_1tymf_1", y = {
  container: x
}, I = ({
  annotations: r,
  activeManifest: a,
  canvas: s,
  viewerConfigOptions: c,
  openSeadragonViewer: p,
  useViewerDispatch: l,
  useViewerState: m,
  token: d,
  annotationServer: f
}) => {
  const [h, u] = o(), [n, g] = o(r), j = C(), { clippingsUpdatedAt: i } = j;
  return A(() => {
    i && fetch(f, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${d}`
      }
    }).then((t) => t.json()).then((t) => {
      g(t.items);
    });
  }, [i]), /* @__PURE__ */ v("div", { className: y.container, children: [
    /* @__PURE__ */ e("p", { children: "Use the button to make a clipping. Clippings from this record is available below." }),
    /* @__PURE__ */ e("p", { children: /* @__PURE__ */ e("a", { href: "", children: "View all clippings." }) }),
    /* @__PURE__ */ e("p", { children: "Clippings from this record" }),
    n == null ? void 0 : n.map((t) => /* @__PURE__ */ e(
      b,
      {
        annotation: t,
        activeManifest: a,
        canvas: s,
        viewerConfigOptions: c,
        openSeadragonViewer: p,
        useViewerState: m,
        useViewerDispatch: l,
        activeTarget: h,
        setActiveTarget: u
      },
      t.id
    ))
  ] });
};
export {
  I as InfomationPanel,
  I as default
};
