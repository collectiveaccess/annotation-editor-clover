async function f(e, r, t, s, o, n) {
  if (o && n)
    await fetch(n, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${o}`
      },
      body: JSON.stringify({
        canvas: t,
        annotation: l(
          e,
          r,
          t,
          s
        )
      })
    });
  else if (!o) {
    let i = {};
    const a = window.localStorage.getItem("annotations");
    if (a) {
      const c = JSON.parse(a);
      c[t] == null && (c[t] = {
        "@context": "http://iiif.io/api/presentation/3/context.json",
        id: t,
        items: [],
        type: "AnnotationPage"
      }), c[t].items.push(
        l(
          e,
          r,
          t,
          s
        )
      ), i = c;
    } else
      i[t] = {
        "@context": "http://iiif.io/api/presentation/3/context.json",
        id: t,
        items: [
          l(
            e,
            r,
            t,
            s
          )
        ],
        type: "AnnotationPage"
      };
    window.localStorage.setItem("annotations", JSON.stringify(i));
  }
}
async function g(e, r, t, s) {
  let o = [];
  if (t && s) {
    const n = await fetch(s + "?action=GET", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${t}`
      },
      body: JSON.stringify({
        canvas: e
      })
    });
    if (n.ok) {
      const i = await n.json();
      o = d(
        i,
        r
      );
    } else {
      const i = await n.json();
      console.error(i);
    }
  } else if (!t) {
    const n = window.localStorage.getItem("annotations");
    if (n) {
      const i = JSON.parse(n)[e];
      i && (o = d(
        i,
        r
      ));
    }
  }
  return o;
}
async function u(e, r, t, s, o, n) {
  if (o && n)
    await fetch(n, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${o}`
      },
      body: JSON.stringify({
        canvas: t,
        annotation: l(
          e,
          r,
          t,
          s
        )
      })
    });
  else if (!o) {
    const i = window.localStorage.getItem("annotations");
    if (i) {
      const a = JSON.parse(i), c = a[t];
      if (c) {
        const p = c.items.filter(
          (y) => y.id !== e.id
        );
        a[t] = {
          id: t,
          items: p,
          type: "AnnotationPage"
        }, window.localStorage.setItem("annotations", JSON.stringify(a));
      }
    }
  }
}
async function h(e, r, t, s, o, n) {
  if (o && n)
    await fetch(n, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${o}`
      },
      body: JSON.stringify({
        canvas: t,
        annotation: l(
          e,
          r,
          t,
          s
        )
      })
    });
  else if (!o) {
    const i = window.localStorage.getItem("annotations");
    if (i) {
      const a = JSON.parse(i), c = a[t];
      if (c) {
        const p = [];
        c.items.forEach((y) => {
          y.id === e.id ? p.push(
            l(
              e,
              r,
              t,
              s
            )
          ) : p.push(y);
        }), a[t] = {
          id: t,
          items: p,
          type: "AnnotationPage"
        }, window.localStorage.setItem("annotations", JSON.stringify(a));
      }
    }
  }
}
function l(e, r, t, s) {
  var n;
  const o = {};
  return o.type = "Annotation", Array.isArray(e.body) && (e.body.length == 1 ? o.body = {
    type: e.body[0].type,
    value: e.body[0].value,
    format: "text/plain"
  } : e.body.length > 1 && (o.body = e.body.map((i) => ({
    type: i.type,
    value: i.value,
    format: "text/plain"
  })))), o.motivation = e.body[0] ? e.body[0].purpose : "commenting", o.target = {
    type: "SpecificResource",
    source: {
      id: t,
      type: "Canvas",
      partOf: [
        {
          id: r,
          type: "Manifest"
        }
      ]
    },
    selector: {
      type: (n = e.target) == null ? void 0 : n.selector.type,
      conformsTo: e.target.selector.conformsTo,
      value: e.target.selector.value.replace(`${s}:`, "")
    }
  }, o.id = e.id, o;
}
function d(e, r) {
  var s;
  const t = [];
  return (s = e.items) == null || s.forEach((o) => {
    const n = o.body;
    let i;
    n ? Array.isArray(n) ? i = n.map((a) => ({ purpose: "commenting", type: a.type, value: a.value })) : i = [
      {
        purpose: "commenting",
        type: n.type,
        value: n.value
      }
    ] : i = [], t.push({
      "@context": "http://www.w3.org/ns/anno.jsonld",
      type: "Annotation",
      body: i,
      target: {
        source: o.target.source,
        selector: {
          type: o.target.selector.type,
          conformsTo: o.target.selector.conformsTo,
          value: o.target.selector.value.replace("xywh=", `xywh=${r}:`)
        }
      },
      id: o.id
    });
  }), t;
}
export {
  d as convertIIIFAnnotationPageToWebAnnotations,
  l as convertWebAnnotationToIIIFAnnotation,
  u as deleteAnnotation,
  g as fetchAnnotations,
  f as saveAnnotation,
  h as updateAnnotation
};
