var au = Object.defineProperty;
var cu = (e, t, n) => t in e ? au(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var se = (e, t, n) => (cu(e, typeof t != "symbol" ? t + "" : t, n), n);
import { saveAnnotation as An, deleteAnnotation as _n, updateAnnotation as Mn, fetchAnnotations as Pn, convertWebAnnotationToIIIFAnnotation as mr, convertIIIFAnnotationPageToWebAnnotations as In } from "./annotation-utils.js";
import { a as uu, c as Wr, g as lu } from "../../_commonjsHelpers-CT_km90n.js";
function He(e, t, n) {
  const o = typeof e;
  if (!n.includes(o))
    throw new TypeError(`${t} value must be ${n.join(" or ")}, received "${o}"`);
}
function io(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function fu(e) {
  return e === Object.prototype || e === Function.prototype || e === RegExp.prototype;
}
function Gn(e) {
  return Object.prototype.toString.apply(e).slice(8, -1);
}
function pu(e, t) {
  const n = typeof t == "function" ? t : (o) => t.add(o);
  Object.getOwnPropertyNames(e).forEach(n), Object.getOwnPropertySymbols(e).forEach(n);
}
function Pi(e) {
  const t = /* @__PURE__ */ new Set();
  return fu(e) ? [] : (pu(e, t), Array.from(t));
}
const Ii = { forceWritable: !1 };
function ko(e, t = Ii) {
  return Vr(e, /* @__PURE__ */ new WeakMap(), t);
}
function Vr(e, t, n = Ii) {
  let o, r;
  if (t.has(e))
    return t.get(e);
  if (Array.isArray(e)) {
    for (r = Array(o = e.length), t.set(e, r); o--; )
      r[o] = Vr(e[o], t, n);
    return r;
  }
  if (Object.prototype.toString.call(e) === "[object Object]") {
    r = Object.create(Object.getPrototypeOf(e)), t.set(e, r);
    const s = Pi(e);
    for (const i of s) {
      const a = Object.getOwnPropertyDescriptor(e, i);
      if (!a)
        continue;
      const c = Vr(e[i], t, n);
      "get" in a ? Object.defineProperty(r, i, {
        ...a,
        get() {
          return c;
        }
      }) : Object.defineProperty(r, i, {
        ...a,
        writable: n.forceWritable ? !0 : a.writable,
        value: c
      });
    }
    return r;
  }
  return e;
}
function hu(e, t, n = void 0) {
  const o = t.replace(/\[(\d+)\]/g, ".$1").split(".");
  let r = e;
  for (const s of o)
    if (r = Object(r)[s], r === void 0)
      return n;
  return r;
}
function Ro() {
  let e = null, t = null;
  const n = new Promise((o, r) => {
    e = o, t = r;
  });
  return n.resolve = e, n.reject = t, n;
}
var gt = {}, ao = { exports: {} };
ao.exports;
(function(e) {
  const n = (s = 0) => (i) => `\x1B[${38 + s};5;${i}m`, o = (s = 0) => (i, a, c) => `\x1B[${38 + s};2;${i};${a};${c}m`;
  function r() {
    const s = /* @__PURE__ */ new Map(), i = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        overline: [53, 55],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        // Bright color
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    i.color.gray = i.color.blackBright, i.bgColor.bgGray = i.bgColor.bgBlackBright, i.color.grey = i.color.blackBright, i.bgColor.bgGrey = i.bgColor.bgBlackBright;
    for (const [a, c] of Object.entries(i)) {
      for (const [l, f] of Object.entries(c))
        i[l] = {
          open: `\x1B[${f[0]}m`,
          close: `\x1B[${f[1]}m`
        }, c[l] = i[l], s.set(f[0], f[1]);
      Object.defineProperty(i, a, {
        value: c,
        enumerable: !1
      });
    }
    return Object.defineProperty(i, "codes", {
      value: s,
      enumerable: !1
    }), i.color.close = "\x1B[39m", i.bgColor.close = "\x1B[49m", i.color.ansi256 = n(), i.color.ansi16m = o(), i.bgColor.ansi256 = n(10), i.bgColor.ansi16m = o(10), Object.defineProperties(i, {
      rgbToAnsi256: {
        value: (a, c, l) => a === c && c === l ? a < 8 ? 16 : a > 248 ? 231 : Math.round((a - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(a / 255 * 5) + 6 * Math.round(c / 255 * 5) + Math.round(l / 255 * 5),
        enumerable: !1
      },
      hexToRgb: {
        value: (a) => {
          const c = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(a.toString(16));
          if (!c)
            return [0, 0, 0];
          let { colorString: l } = c.groups;
          l.length === 3 && (l = l.split("").map((u) => u + u).join(""));
          const f = Number.parseInt(l, 16);
          return [
            f >> 16 & 255,
            f >> 8 & 255,
            f & 255
          ];
        },
        enumerable: !1
      },
      hexToAnsi256: {
        value: (a) => i.rgbToAnsi256(...i.hexToRgb(a)),
        enumerable: !1
      }
    }), i;
  }
  Object.defineProperty(e, "exports", {
    enumerable: !0,
    get: r
  });
})(ao);
var mu = ao.exports, et = {};
Object.defineProperty(et, "__esModule", {
  value: !0
});
et.printIteratorEntries = yu;
et.printIteratorValues = gu;
et.printListItems = bu;
et.printObjectProperties = wu;
const du = (e, t) => {
  const n = Object.keys(e), o = t !== null ? n.sort(t) : n;
  return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((r) => {
    Object.getOwnPropertyDescriptor(e, r).enumerable && o.push(r);
  }), o;
};
function yu(e, t, n, o, r, s, i = ": ") {
  let a = "", c = 0, l = e.next();
  if (!l.done) {
    a += t.spacingOuter;
    const f = n + t.indent;
    for (; !l.done; ) {
      if (a += f, c++ === t.maxWidth) {
        a += "…";
        break;
      }
      const u = s(
        l.value[0],
        t,
        f,
        o,
        r
      ), p = s(
        l.value[1],
        t,
        f,
        o,
        r
      );
      a += u + i + p, l = e.next(), l.done ? t.min || (a += ",") : a += `,${t.spacingInner}`;
    }
    a += t.spacingOuter + n;
  }
  return a;
}
function gu(e, t, n, o, r, s) {
  let i = "", a = 0, c = e.next();
  if (!c.done) {
    i += t.spacingOuter;
    const l = n + t.indent;
    for (; !c.done; ) {
      if (i += l, a++ === t.maxWidth) {
        i += "…";
        break;
      }
      i += s(c.value, t, l, o, r), c = e.next(), c.done ? t.min || (i += ",") : i += `,${t.spacingInner}`;
    }
    i += t.spacingOuter + n;
  }
  return i;
}
function bu(e, t, n, o, r, s) {
  let i = "";
  if (e.length) {
    i += t.spacingOuter;
    const a = n + t.indent;
    for (let c = 0; c < e.length; c++) {
      if (i += a, c === t.maxWidth) {
        i += "…";
        break;
      }
      c in e && (i += s(e[c], t, a, o, r)), c < e.length - 1 ? i += `,${t.spacingInner}` : t.min || (i += ",");
    }
    i += t.spacingOuter + n;
  }
  return i;
}
function wu(e, t, n, o, r, s) {
  let i = "";
  const a = du(e, t.compareKeys);
  if (a.length) {
    i += t.spacingOuter;
    const c = n + t.indent;
    for (let l = 0; l < a.length; l++) {
      const f = a[l], u = s(f, t, c, o, r), p = s(e[f], t, c, o, r);
      i += `${c + u}: ${p}`, l < a.length - 1 ? i += `,${t.spacingInner}` : t.min || (i += ",");
    }
    i += t.spacingOuter + n;
  }
  return i;
}
var st = {};
Object.defineProperty(st, "__esModule", {
  value: !0
});
st.test = st.serialize = st.default = void 0;
var Fo = et, dr = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
const vu = typeof dr == "function" && dr.for ? dr.for("jest.asymmetricMatcher") : 1267621, Cn = " ", Ci = (e, t, n, o, r, s) => {
  const i = e.toString();
  if (i === "ArrayContaining" || i === "ArrayNotContaining")
    return ++o > t.maxDepth ? `[${i}]` : `${i + Cn}[${(0, Fo.printListItems)(
      e.sample,
      t,
      n,
      o,
      r,
      s
    )}]`;
  if (i === "ObjectContaining" || i === "ObjectNotContaining")
    return ++o > t.maxDepth ? `[${i}]` : `${i + Cn}{${(0, Fo.printObjectProperties)(
      e.sample,
      t,
      n,
      o,
      r,
      s
    )}}`;
  if (i === "StringMatching" || i === "StringNotMatching" || i === "StringContaining" || i === "StringNotContaining")
    return i + Cn + s(e.sample, t, n, o, r);
  if (typeof e.toAsymmetricMatcher != "function")
    throw new Error(
      `Asymmetric matcher ${e.constructor.name} does not implement toAsymmetricMatcher()`
    );
  return e.toAsymmetricMatcher();
};
st.serialize = Ci;
const Ni = (e) => e && e.$$typeof === vu;
st.test = Ni;
const Eu = {
  serialize: Ci,
  test: Ni
};
var Su = Eu;
st.default = Su;
var it = {};
Object.defineProperty(it, "__esModule", {
  value: !0
});
it.test = it.serialize = it.default = void 0;
var Do = et;
const Tu = " ", ji = ["DOMStringMap", "NamedNodeMap"], xu = /^(HTML\w*Collection|NodeList)$/, $u = (e) => ji.indexOf(e) !== -1 || xu.test(e), ki = (e) => e && e.constructor && !!e.constructor.name && $u(e.constructor.name);
it.test = ki;
const Ou = (e) => e.constructor.name === "NamedNodeMap", Ri = (e, t, n, o, r, s) => {
  const i = e.constructor.name;
  return ++o > t.maxDepth ? `[${i}]` : (t.min ? "" : i + Tu) + (ji.indexOf(i) !== -1 ? `{${(0, Do.printObjectProperties)(
    Ou(e) ? Array.from(e).reduce((a, c) => (a[c.name] = c.value, a), {}) : {
      ...e
    },
    t,
    n,
    o,
    r,
    s
  )}}` : `[${(0, Do.printListItems)(
    Array.from(e),
    t,
    n,
    o,
    r,
    s
  )}]`);
};
it.serialize = Ri;
const Au = {
  serialize: Ri,
  test: ki
};
var _u = Au;
it.default = _u;
var at = {}, ke = {}, co = {};
Object.defineProperty(co, "__esModule", {
  value: !0
});
co.default = Mu;
function Mu(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(ke, "__esModule", {
  value: !0
});
ke.printText = ke.printProps = ke.printElementAsLeaf = ke.printElement = ke.printComment = ke.printChildren = void 0;
var Fi = Pu(co);
function Pu(e) {
  return e && e.__esModule ? e : { default: e };
}
const Iu = (e, t, n, o, r, s, i) => {
  const a = o + n.indent, c = n.colors;
  return e.map((l) => {
    const f = t[l];
    let u = i(f, n, a, r, s);
    return typeof f != "string" && (u.indexOf(`
`) !== -1 && (u = n.spacingOuter + a + u + n.spacingOuter + o), u = `{${u}}`), `${n.spacingInner + o + c.prop.open + l + c.prop.close}=${c.value.open}${u}${c.value.close}`;
  }).join("");
};
ke.printProps = Iu;
const Cu = (e, t, n, o, r, s) => e.map(
  (i) => t.spacingOuter + n + (typeof i == "string" ? Di(i, t) : s(i, t, n, o, r))
).join("");
ke.printChildren = Cu;
const Di = (e, t) => {
  const n = t.colors.content;
  return n.open + (0, Fi.default)(e) + n.close;
};
ke.printText = Di;
const Nu = (e, t) => {
  const n = t.colors.comment;
  return `${n.open}<!--${(0, Fi.default)(e)}-->${n.close}`;
};
ke.printComment = Nu;
const ju = (e, t, n, o, r) => {
  const s = o.colors.tag;
  return `${s.open}<${e}${t && s.close + t + o.spacingOuter + r + s.open}${n ? `>${s.close}${n}${o.spacingOuter}${r}${s.open}</${e}` : `${t && !o.min ? "" : " "}/`}>${s.close}`;
};
ke.printElement = ju;
const ku = (e, t) => {
  const n = t.colors.tag;
  return `${n.open}<${e}${n.close} …${n.open} />${n.close}`;
};
ke.printElementAsLeaf = ku;
Object.defineProperty(at, "__esModule", {
  value: !0
});
at.test = at.serialize = at.default = void 0;
var kt = ke;
const Ru = 1, Bi = 3, Li = 8, qi = 11, Fu = /^((HTML|SVG)\w*)?Element$/, Du = (e) => {
  try {
    return typeof e.hasAttribute == "function" && e.hasAttribute("is");
  } catch {
    return !1;
  }
}, Bu = (e) => {
  const t = e.constructor.name, { nodeType: n, tagName: o } = e, r = typeof o == "string" && o.includes("-") || Du(e);
  return n === Ru && (Fu.test(t) || r) || n === Bi && t === "Text" || n === Li && t === "Comment" || n === qi && t === "DocumentFragment";
}, zi = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.name) && Bu(e);
};
at.test = zi;
function Lu(e) {
  return e.nodeType === Bi;
}
function qu(e) {
  return e.nodeType === Li;
}
function yr(e) {
  return e.nodeType === qi;
}
const Wi = (e, t, n, o, r, s) => {
  if (Lu(e))
    return (0, kt.printText)(e.data, t);
  if (qu(e))
    return (0, kt.printComment)(e.data, t);
  const i = yr(e) ? "DocumentFragment" : e.tagName.toLowerCase();
  return ++o > t.maxDepth ? (0, kt.printElementAsLeaf)(i, t) : (0, kt.printElement)(
    i,
    (0, kt.printProps)(
      yr(e) ? [] : Array.from(e.attributes, (a) => a.name).sort(),
      yr(e) ? {} : Array.from(e.attributes).reduce((a, c) => (a[c.name] = c.value, a), {}),
      t,
      n + t.indent,
      o,
      r,
      s
    ),
    (0, kt.printChildren)(
      Array.prototype.slice.call(e.childNodes || e.children),
      t,
      n + t.indent,
      o,
      r,
      s
    ),
    t,
    n
  );
};
at.serialize = Wi;
const zu = {
  serialize: Wi,
  test: zi
};
var Wu = zu;
at.default = Wu;
var ct = {};
Object.defineProperty(ct, "__esModule", {
  value: !0
});
ct.test = ct.serialize = ct.default = void 0;
var pn = et;
const Vu = "@@__IMMUTABLE_ITERABLE__@@", Uu = "@@__IMMUTABLE_LIST__@@", Ku = "@@__IMMUTABLE_KEYED__@@", Gu = "@@__IMMUTABLE_MAP__@@", Bo = "@@__IMMUTABLE_ORDERED__@@", Ju = "@@__IMMUTABLE_RECORD__@@", Yu = "@@__IMMUTABLE_SEQ__@@", Hu = "@@__IMMUTABLE_SET__@@", Xu = "@@__IMMUTABLE_STACK__@@", Wt = (e) => `Immutable.${e}`, tr = (e) => `[${e}]`, hn = " ", Lo = "…", Qu = (e, t, n, o, r, s, i) => ++o > t.maxDepth ? tr(Wt(i)) : `${Wt(i) + hn}{${(0, pn.printIteratorEntries)(
  e.entries(),
  t,
  n,
  o,
  r,
  s
)}}`;
function Zu(e) {
  let t = 0;
  return {
    next() {
      if (t < e._keys.length) {
        const n = e._keys[t++];
        return {
          done: !1,
          value: [n, e.get(n)]
        };
      }
      return {
        done: !0,
        value: void 0
      };
    }
  };
}
const el = (e, t, n, o, r, s) => {
  const i = Wt(e._name || "Record");
  return ++o > t.maxDepth ? tr(i) : `${i + hn}{${(0, pn.printIteratorEntries)(
    Zu(e),
    t,
    n,
    o,
    r,
    s
  )}}`;
}, tl = (e, t, n, o, r, s) => {
  const i = Wt("Seq");
  return ++o > t.maxDepth ? tr(i) : e[Ku] ? `${i + hn}{${// from Immutable collection of entries or from ECMAScript object
  e._iter || e._object ? (0, pn.printIteratorEntries)(
    e.entries(),
    t,
    n,
    o,
    r,
    s
  ) : Lo}}` : `${i + hn}[${e._iter || // from Immutable collection of values
  e._array || // from ECMAScript array
  e._collection || // from ECMAScript collection in immutable v4
  e._iterable ? (0, pn.printIteratorValues)(
    e.values(),
    t,
    n,
    o,
    r,
    s
  ) : Lo}]`;
}, gr = (e, t, n, o, r, s, i) => ++o > t.maxDepth ? tr(Wt(i)) : `${Wt(i) + hn}[${(0, pn.printIteratorValues)(
  e.values(),
  t,
  n,
  o,
  r,
  s
)}]`, Vi = (e, t, n, o, r, s) => e[Gu] ? Qu(
  e,
  t,
  n,
  o,
  r,
  s,
  e[Bo] ? "OrderedMap" : "Map"
) : e[Uu] ? gr(
  e,
  t,
  n,
  o,
  r,
  s,
  "List"
) : e[Hu] ? gr(
  e,
  t,
  n,
  o,
  r,
  s,
  e[Bo] ? "OrderedSet" : "Set"
) : e[Xu] ? gr(
  e,
  t,
  n,
  o,
  r,
  s,
  "Stack"
) : e[Yu] ? tl(e, t, n, o, r, s) : el(e, t, n, o, r, s);
ct.serialize = Vi;
const Ui = (e) => e && (e[Vu] === !0 || e[Ju] === !0);
ct.test = Ui;
const nl = {
  serialize: Vi,
  test: Ui
};
var rl = nl;
ct.default = rl;
var ut = {}, Ur = { exports: {} }, ue = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qo;
function ol() {
  if (qo)
    return ue;
  qo = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function v(h) {
    if (typeof h == "object" && h !== null) {
      var A = h.$$typeof;
      switch (A) {
        case e:
          switch (h = h.type, h) {
            case n:
            case r:
            case o:
            case l:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case i:
                case c:
                case p:
                case u:
                case s:
                  return h;
                default:
                  return A;
              }
          }
        case t:
          return A;
      }
    }
  }
  return ue.ContextConsumer = i, ue.ContextProvider = s, ue.Element = e, ue.ForwardRef = c, ue.Fragment = n, ue.Lazy = p, ue.Memo = u, ue.Portal = t, ue.Profiler = r, ue.StrictMode = o, ue.Suspense = l, ue.SuspenseList = f, ue.isAsyncMode = function() {
    return !1;
  }, ue.isConcurrentMode = function() {
    return !1;
  }, ue.isContextConsumer = function(h) {
    return v(h) === i;
  }, ue.isContextProvider = function(h) {
    return v(h) === s;
  }, ue.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, ue.isForwardRef = function(h) {
    return v(h) === c;
  }, ue.isFragment = function(h) {
    return v(h) === n;
  }, ue.isLazy = function(h) {
    return v(h) === p;
  }, ue.isMemo = function(h) {
    return v(h) === u;
  }, ue.isPortal = function(h) {
    return v(h) === t;
  }, ue.isProfiler = function(h) {
    return v(h) === r;
  }, ue.isStrictMode = function(h) {
    return v(h) === o;
  }, ue.isSuspense = function(h) {
    return v(h) === l;
  }, ue.isSuspenseList = function(h) {
    return v(h) === f;
  }, ue.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === r || h === o || h === l || h === f || h === w || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === u || h.$$typeof === s || h.$$typeof === i || h.$$typeof === c || h.$$typeof === b || h.getModuleId !== void 0);
  }, ue.typeOf = v, ue;
}
var le = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zo;
function sl() {
  return zo || (zo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), b = !1, v = !1, h = !1, A = !1, M = !1, F;
    F = Symbol.for("react.module.reference");
    function k(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === n || O === r || M || O === o || O === l || O === f || A || O === w || b || v || h || typeof O == "object" && O !== null && (O.$$typeof === p || O.$$typeof === u || O.$$typeof === s || O.$$typeof === i || O.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === F || O.getModuleId !== void 0));
    }
    function N(O) {
      if (typeof O == "object" && O !== null) {
        var ce = O.$$typeof;
        switch (ce) {
          case e:
            var oe = O.type;
            switch (oe) {
              case n:
              case r:
              case o:
              case l:
              case f:
                return oe;
              default:
                var ye = oe && oe.$$typeof;
                switch (ye) {
                  case a:
                  case i:
                  case c:
                  case p:
                  case u:
                  case s:
                    return ye;
                  default:
                    return ce;
                }
            }
          case t:
            return ce;
        }
      }
    }
    var U = i, B = s, G = e, ae = c, V = n, xe = p, we = u, $e = t, Pe = r, Fe = o, Ie = l, Ne = f, De = !1, m = !1;
    function T(O) {
      return De || (De = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function x(O) {
      return m || (m = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function P(O) {
      return N(O) === i;
    }
    function j(O) {
      return N(O) === s;
    }
    function D(O) {
      return typeof O == "object" && O !== null && O.$$typeof === e;
    }
    function I(O) {
      return N(O) === c;
    }
    function $(O) {
      return N(O) === n;
    }
    function q(O) {
      return N(O) === p;
    }
    function K(O) {
      return N(O) === u;
    }
    function J(O) {
      return N(O) === t;
    }
    function ne(O) {
      return N(O) === r;
    }
    function Z(O) {
      return N(O) === o;
    }
    function H(O) {
      return N(O) === l;
    }
    function re(O) {
      return N(O) === f;
    }
    le.ContextConsumer = U, le.ContextProvider = B, le.Element = G, le.ForwardRef = ae, le.Fragment = V, le.Lazy = xe, le.Memo = we, le.Portal = $e, le.Profiler = Pe, le.StrictMode = Fe, le.Suspense = Ie, le.SuspenseList = Ne, le.isAsyncMode = T, le.isConcurrentMode = x, le.isContextConsumer = P, le.isContextProvider = j, le.isElement = D, le.isForwardRef = I, le.isFragment = $, le.isLazy = q, le.isMemo = K, le.isPortal = J, le.isProfiler = ne, le.isStrictMode = Z, le.isSuspense = H, le.isSuspenseList = re, le.isValidElementType = k, le.typeOf = N;
  }()), le;
}
process.env.NODE_ENV === "production" ? Ur.exports = ol() : Ur.exports = sl();
var il = Ur.exports;
Object.defineProperty(ut, "__esModule", {
  value: !0
});
ut.test = ut.serialize = ut.default = void 0;
var $t = al(il), Nn = ke;
function Ki(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Ki = function(o) {
    return o ? n : t;
  })(e);
}
function al(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = Ki(t);
  if (n && n.has(e))
    return n.get(e);
  var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var i = r ? Object.getOwnPropertyDescriptor(e, s) : null;
      i && (i.get || i.set) ? Object.defineProperty(o, s, i) : o[s] = e[s];
    }
  return o.default = e, n && n.set(e, o), o;
}
const Gi = (e, t = []) => (Array.isArray(e) ? e.forEach((n) => {
  Gi(n, t);
}) : e != null && e !== !1 && t.push(e), t), Wo = (e) => {
  const t = e.type;
  if (typeof t == "string")
    return t;
  if (typeof t == "function")
    return t.displayName || t.name || "Unknown";
  if ($t.isFragment(e))
    return "React.Fragment";
  if ($t.isSuspense(e))
    return "React.Suspense";
  if (typeof t == "object" && t !== null) {
    if ($t.isContextProvider(e))
      return "Context.Provider";
    if ($t.isContextConsumer(e))
      return "Context.Consumer";
    if ($t.isForwardRef(e)) {
      if (t.displayName)
        return t.displayName;
      const n = t.render.displayName || t.render.name || "";
      return n !== "" ? `ForwardRef(${n})` : "ForwardRef";
    }
    if ($t.isMemo(e)) {
      const n = t.displayName || t.type.displayName || t.type.name || "";
      return n !== "" ? `Memo(${n})` : "Memo";
    }
  }
  return "UNDEFINED";
}, cl = (e) => {
  const { props: t } = e;
  return Object.keys(t).filter((n) => n !== "children" && t[n] !== void 0).sort();
}, Ji = (e, t, n, o, r, s) => ++o > t.maxDepth ? (0, Nn.printElementAsLeaf)(Wo(e), t) : (0, Nn.printElement)(
  Wo(e),
  (0, Nn.printProps)(
    cl(e),
    e.props,
    t,
    n + t.indent,
    o,
    r,
    s
  ),
  (0, Nn.printChildren)(
    Gi(e.props.children),
    t,
    n + t.indent,
    o,
    r,
    s
  ),
  t,
  n
);
ut.serialize = Ji;
const Yi = (e) => e != null && $t.isElement(e);
ut.test = Yi;
const ul = {
  serialize: Ji,
  test: Yi
};
var ll = ul;
ut.default = ll;
var lt = {};
Object.defineProperty(lt, "__esModule", {
  value: !0
});
lt.test = lt.serialize = lt.default = void 0;
var jn = ke, br = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
const fl = typeof br == "function" && br.for ? br.for("react.test.json") : 245830487, pl = (e) => {
  const { props: t } = e;
  return t ? Object.keys(t).filter((n) => t[n] !== void 0).sort() : [];
}, Hi = (e, t, n, o, r, s) => ++o > t.maxDepth ? (0, jn.printElementAsLeaf)(e.type, t) : (0, jn.printElement)(
  e.type,
  e.props ? (0, jn.printProps)(
    pl(e),
    e.props,
    t,
    n + t.indent,
    o,
    r,
    s
  ) : "",
  e.children ? (0, jn.printChildren)(
    e.children,
    t,
    n + t.indent,
    o,
    r,
    s
  ) : "",
  t,
  n
);
lt.serialize = Hi;
const Xi = (e) => e && e.$$typeof === fl;
lt.test = Xi;
const hl = {
  serialize: Hi,
  test: Xi
};
var ml = hl;
lt.default = ml;
Object.defineProperty(gt, "__esModule", {
  value: !0
});
gt.default = gt.DEFAULT_OPTIONS = void 0;
var Xe = gt.format = ca, uo = gt.plugins = void 0, dl = Mt(mu), en = et, yl = Mt(
  st
), gl = Mt(it), bl = Mt(at), wl = Mt(ct), vl = Mt(ut), El = Mt(
  lt
);
function Mt(e) {
  return e && e.__esModule ? e : { default: e };
}
const Qi = Object.prototype.toString, Sl = Date.prototype.toISOString, Tl = Error.prototype.toString, Vo = RegExp.prototype.toString, wr = (e) => typeof e.constructor == "function" && e.constructor.name || "Object", xl = (e) => typeof window < "u" && e === window, $l = /^Symbol\((.*)\)(.*)$/, Ol = /\n/gi;
let Zi = class extends Error {
  constructor(t, n) {
    super(t), this.stack = n, this.name = this.constructor.name;
  }
};
function Al(e) {
  return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
}
function _l(e) {
  return Object.is(e, -0) ? "-0" : String(e);
}
function Ml(e) {
  return `${e}n`;
}
function Uo(e, t) {
  return t ? `[Function ${e.name || "anonymous"}]` : "[Function]";
}
function Ko(e) {
  return String(e).replace($l, "Symbol($1)");
}
function Go(e) {
  return `[${Tl.call(e)}]`;
}
function ea(e, t, n, o) {
  if (e === !0 || e === !1)
    return `${e}`;
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const r = typeof e;
  if (r === "number")
    return _l(e);
  if (r === "bigint")
    return Ml(e);
  if (r === "string")
    return o ? `"${e.replace(/"|\\/g, "\\$&")}"` : `"${e}"`;
  if (r === "function")
    return Uo(e, t);
  if (r === "symbol")
    return Ko(e);
  const s = Qi.call(e);
  return s === "[object WeakMap]" ? "WeakMap {}" : s === "[object WeakSet]" ? "WeakSet {}" : s === "[object Function]" || s === "[object GeneratorFunction]" ? Uo(e, t) : s === "[object Symbol]" ? Ko(e) : s === "[object Date]" ? isNaN(+e) ? "Date { NaN }" : Sl.call(e) : s === "[object Error]" ? Go(e) : s === "[object RegExp]" ? n ? Vo.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : Vo.call(e) : e instanceof Error ? Go(e) : null;
}
function ta(e, t, n, o, r, s) {
  if (r.indexOf(e) !== -1)
    return "[Circular]";
  r = r.slice(), r.push(e);
  const i = ++o > t.maxDepth, a = t.min;
  if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == "function" && !s)
    return rt(e.toJSON(), t, n, o, r, !0);
  const c = Qi.call(e);
  return c === "[object Arguments]" ? i ? "[Arguments]" : `${a ? "" : "Arguments "}[${(0, en.printListItems)(
    e,
    t,
    n,
    o,
    r,
    rt
  )}]` : Al(c) ? i ? `[${e.constructor.name}]` : `${a || !t.printBasicPrototype && e.constructor.name === "Array" ? "" : `${e.constructor.name} `}[${(0, en.printListItems)(
    e,
    t,
    n,
    o,
    r,
    rt
  )}]` : c === "[object Map]" ? i ? "[Map]" : `Map {${(0, en.printIteratorEntries)(
    e.entries(),
    t,
    n,
    o,
    r,
    rt,
    " => "
  )}}` : c === "[object Set]" ? i ? "[Set]" : `Set {${(0, en.printIteratorValues)(
    e.values(),
    t,
    n,
    o,
    r,
    rt
  )}}` : i || xl(e) ? `[${wr(e)}]` : `${a || !t.printBasicPrototype && wr(e) === "Object" ? "" : `${wr(e)} `}{${(0, en.printObjectProperties)(
    e,
    t,
    n,
    o,
    r,
    rt
  )}}`;
}
function Pl(e) {
  return e.serialize != null;
}
function na(e, t, n, o, r, s) {
  let i;
  try {
    i = Pl(e) ? e.serialize(t, n, o, r, s, rt) : e.print(
      t,
      (a) => rt(a, n, o, r, s),
      (a) => {
        const c = o + n.indent;
        return c + a.replace(Ol, `
${c}`);
      },
      {
        edgeSpacing: n.spacingOuter,
        min: n.min,
        spacing: n.spacingInner
      },
      n.colors
    );
  } catch (a) {
    throw new Zi(a.message, a.stack);
  }
  if (typeof i != "string")
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`
    );
  return i;
}
function ra(e, t) {
  for (let n = 0; n < e.length; n++)
    try {
      if (e[n].test(t))
        return e[n];
    } catch (o) {
      throw new Zi(o.message, o.stack);
    }
  return null;
}
function rt(e, t, n, o, r, s) {
  const i = ra(t.plugins, e);
  if (i !== null)
    return na(i, e, t, n, o, r);
  const a = ea(
    e,
    t.printFunctionName,
    t.escapeRegex,
    t.escapeString
  );
  return a !== null ? a : ta(
    e,
    t,
    n,
    o,
    r,
    s
  );
}
const lo = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, oa = Object.keys(lo), Il = (e) => e, Ve = Il({
  callToJSON: !0,
  compareKeys: void 0,
  escapeRegex: !1,
  escapeString: !0,
  highlight: !1,
  indent: 2,
  maxDepth: 1 / 0,
  maxWidth: 1 / 0,
  min: !1,
  plugins: [],
  printBasicPrototype: !0,
  printFunctionName: !0,
  theme: lo
});
gt.DEFAULT_OPTIONS = Ve;
function Cl(e) {
  if (Object.keys(e).forEach((t) => {
    if (!Object.prototype.hasOwnProperty.call(Ve, t))
      throw new Error(`pretty-format: Unknown option "${t}".`);
  }), e.min && e.indent !== void 0 && e.indent !== 0)
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.'
    );
  if (e.theme !== void 0) {
    if (e.theme === null)
      throw new Error('pretty-format: Option "theme" must not be null.');
    if (typeof e.theme != "object")
      throw new Error(
        `pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`
      );
  }
}
const Nl = (e) => oa.reduce((t, n) => {
  const o = e.theme && e.theme[n] !== void 0 ? e.theme[n] : lo[n], r = o && dl.default[o];
  if (r && typeof r.close == "string" && typeof r.open == "string")
    t[n] = r;
  else
    throw new Error(
      `pretty-format: Option "theme" has a key "${n}" whose value "${o}" is undefined in ansi-styles.`
    );
  return t;
}, /* @__PURE__ */ Object.create(null)), jl = () => oa.reduce((e, t) => (e[t] = {
  close: "",
  open: ""
}, e), /* @__PURE__ */ Object.create(null)), sa = (e) => (e == null ? void 0 : e.printFunctionName) ?? Ve.printFunctionName, ia = (e) => (e == null ? void 0 : e.escapeRegex) ?? Ve.escapeRegex, aa = (e) => (e == null ? void 0 : e.escapeString) ?? Ve.escapeString, Jo = (e) => ({
  callToJSON: (e == null ? void 0 : e.callToJSON) ?? Ve.callToJSON,
  colors: e != null && e.highlight ? Nl(e) : jl(),
  compareKeys: typeof (e == null ? void 0 : e.compareKeys) == "function" || (e == null ? void 0 : e.compareKeys) === null ? e.compareKeys : Ve.compareKeys,
  escapeRegex: ia(e),
  escapeString: aa(e),
  indent: e != null && e.min ? "" : kl((e == null ? void 0 : e.indent) ?? Ve.indent),
  maxDepth: (e == null ? void 0 : e.maxDepth) ?? Ve.maxDepth,
  maxWidth: (e == null ? void 0 : e.maxWidth) ?? Ve.maxWidth,
  min: (e == null ? void 0 : e.min) ?? Ve.min,
  plugins: (e == null ? void 0 : e.plugins) ?? Ve.plugins,
  printBasicPrototype: (e == null ? void 0 : e.printBasicPrototype) ?? !0,
  printFunctionName: sa(e),
  spacingInner: e != null && e.min ? " " : `
`,
  spacingOuter: e != null && e.min ? "" : `
`
});
function kl(e) {
  return new Array(e + 1).join(" ");
}
function ca(e, t) {
  if (t && (Cl(t), t.plugins)) {
    const o = ra(t.plugins, e);
    if (o !== null)
      return na(o, e, Jo(t), "", 0, []);
  }
  const n = ea(
    e,
    sa(t),
    ia(t),
    aa(t)
  );
  return n !== null ? n : ta(e, Jo(t), "", 0, []);
}
const Rl = {
  AsymmetricMatcher: yl.default,
  DOMCollection: gl.default,
  DOMElement: bl.default,
  Immutable: wl.default,
  ReactElement: vl.default,
  ReactTestComponent: El.default
};
uo = gt.plugins = Rl;
var Fl = ca;
gt.default = Fl;
var Kr = { exports: {} };
const Dl = {}, Bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dl
}, Symbol.toStringTag, { value: "Module" })), Ll = /* @__PURE__ */ uu(Bl);
(function(e, t) {
  (function(n, o) {
    o(t);
  })(Wr, function(n) {
    function o(d) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? o = function(g) {
        return typeof g;
      } : o = function(g) {
        return g && typeof Symbol == "function" && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g;
      }, o(d);
    }
    function r(d, g) {
      return s(d) || i(d, g) || a(d, g) || l();
    }
    function s(d) {
      if (Array.isArray(d))
        return d;
    }
    function i(d, g) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(d)))) {
        var _ = [], L = !0, z = !1, ee = void 0;
        try {
          for (var ie = d[Symbol.iterator](), me; !(L = (me = ie.next()).done) && (_.push(me.value), !(g && _.length === g)); L = !0)
            ;
        } catch (Ce) {
          z = !0, ee = Ce;
        } finally {
          try {
            !L && ie.return != null && ie.return();
          } finally {
            if (z)
              throw ee;
          }
        }
        return _;
      }
    }
    function a(d, g) {
      if (d) {
        if (typeof d == "string")
          return c(d, g);
        var _ = Object.prototype.toString.call(d).slice(8, -1);
        if (_ === "Object" && d.constructor && (_ = d.constructor.name), _ === "Map" || _ === "Set")
          return Array.from(d);
        if (_ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))
          return c(d, g);
      }
    }
    function c(d, g) {
      (g == null || g > d.length) && (g = d.length);
      for (var _ = 0, L = new Array(g); _ < g; _++)
        L[_] = d[_];
      return L;
    }
    function l() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var f = {
      bold: ["1", "22"],
      dim: ["2", "22"],
      italic: ["3", "23"],
      underline: ["4", "24"],
      // 5 & 6 are blinking
      inverse: ["7", "27"],
      hidden: ["8", "28"],
      strike: ["9", "29"],
      // 10-20 are fonts
      // 21-29 are resets for 1-9
      black: ["30", "39"],
      red: ["31", "39"],
      green: ["32", "39"],
      yellow: ["33", "39"],
      blue: ["34", "39"],
      magenta: ["35", "39"],
      cyan: ["36", "39"],
      white: ["37", "39"],
      brightblack: ["30;1", "39"],
      brightred: ["31;1", "39"],
      brightgreen: ["32;1", "39"],
      brightyellow: ["33;1", "39"],
      brightblue: ["34;1", "39"],
      brightmagenta: ["35;1", "39"],
      brightcyan: ["36;1", "39"],
      brightwhite: ["37;1", "39"],
      grey: ["90", "39"]
    }, u = {
      special: "cyan",
      number: "yellow",
      bigint: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      symbol: "green",
      date: "magenta",
      regexp: "red"
    }, p = "…";
    function w(d, g) {
      var _ = f[u[g]] || f[g];
      return _ ? "\x1B[".concat(_[0], "m").concat(String(d), "\x1B[").concat(_[1], "m") : String(d);
    }
    function b() {
      var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, g = d.showHidden, _ = g === void 0 ? !1 : g, L = d.depth, z = L === void 0 ? 2 : L, ee = d.colors, ie = ee === void 0 ? !1 : ee, me = d.customInspect, Ce = me === void 0 ? !0 : me, Oe = d.showProxy, We = Oe === void 0 ? !1 : Oe, Tt = d.maxArrayLength, pr = Tt === void 0 ? 1 / 0 : Tt, Qt = d.breakLength, jt = Qt === void 0 ? 1 / 0 : Qt, Zt = d.seen, ou = Zt === void 0 ? [] : Zt, No = d.truncate, su = No === void 0 ? 1 / 0 : No, jo = d.stylize, iu = jo === void 0 ? String : jo, hr = {
        showHidden: !!_,
        depth: Number(z),
        colors: !!ie,
        customInspect: !!Ce,
        showProxy: !!We,
        maxArrayLength: Number(pr),
        breakLength: Number(jt),
        truncate: Number(su),
        seen: ou,
        stylize: iu
      };
      return hr.colors && (hr.stylize = w), hr;
    }
    function v(d, g) {
      var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : p;
      d = String(d);
      var L = _.length, z = d.length;
      return L > g && z > L ? _ : z > g && z > L ? "".concat(d.slice(0, g - L)).concat(_) : d;
    }
    function h(d, g, _) {
      var L = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ", ";
      _ = _ || g.inspect;
      var z = d.length;
      if (z === 0)
        return "";
      for (var ee = g.truncate, ie = "", me = "", Ce = "", Oe = 0; Oe < z; Oe += 1) {
        var We = Oe + 1 === d.length, Tt = Oe + 2 === d.length;
        Ce = "".concat(p, "(").concat(d.length - Oe, ")");
        var pr = d[Oe];
        g.truncate = ee - ie.length - (We ? 0 : L.length);
        var Qt = me || _(pr, g) + (We ? "" : L), jt = ie.length + Qt.length, Zt = jt + Ce.length;
        if (We && jt > ee && ie.length + Ce.length <= ee || !We && !Tt && Zt > ee || (me = We ? "" : _(d[Oe + 1], g) + (Tt ? "" : L), !We && Tt && Zt > ee && jt + me.length > ee))
          break;
        if (ie += Qt, !We && !Tt && jt + me.length >= ee) {
          Ce = "".concat(p, "(").concat(d.length - Oe - 1, ")");
          break;
        }
        Ce = "";
      }
      return "".concat(ie).concat(Ce);
    }
    function A(d) {
      return d.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? d : JSON.stringify(d).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
    }
    function M(d, g) {
      var _ = r(d, 2), L = _[0], z = _[1];
      return g.truncate -= 2, typeof L == "string" ? L = A(L) : typeof L != "number" && (L = "[".concat(g.inspect(L, g), "]")), g.truncate -= L.length, z = g.inspect(z, g), "".concat(L, ": ").concat(z);
    }
    function F(d, g) {
      var _ = Object.keys(d).slice(d.length);
      if (!d.length && !_.length)
        return "[]";
      g.truncate -= 4;
      var L = h(d, g);
      g.truncate -= L.length;
      var z = "";
      return _.length && (z = h(_.map(function(ee) {
        return [ee, d[ee]];
      }), g, M)), "[ ".concat(L).concat(z ? ", ".concat(z) : "", " ]");
    }
    var k = Function.prototype.toString, N = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/, U = 512;
    function B(d) {
      if (typeof d != "function")
        return null;
      var g = "";
      if (typeof Function.prototype.name > "u" && typeof d.name > "u") {
        var _ = k.call(d);
        if (_.indexOf("(") > U)
          return g;
        var L = _.match(N);
        L && (g = L[1]);
      } else
        g = d.name;
      return g;
    }
    var G = B, ae = function(g) {
      return typeof Buffer == "function" && g instanceof Buffer ? "Buffer" : g[Symbol.toStringTag] ? g[Symbol.toStringTag] : G(g.constructor);
    };
    function V(d, g) {
      var _ = ae(d);
      g.truncate -= _.length + 4;
      var L = Object.keys(d).slice(d.length);
      if (!d.length && !L.length)
        return "".concat(_, "[]");
      for (var z = "", ee = 0; ee < d.length; ee++) {
        var ie = "".concat(g.stylize(v(d[ee], g.truncate), "number")).concat(ee === d.length - 1 ? "" : ", ");
        if (g.truncate -= ie.length, d[ee] !== d.length && g.truncate <= 3) {
          z += "".concat(p, "(").concat(d.length - d[ee] + 1, ")");
          break;
        }
        z += ie;
      }
      var me = "";
      return L.length && (me = h(L.map(function(Ce) {
        return [Ce, d[Ce]];
      }), g, M)), "".concat(_, "[ ").concat(z).concat(me ? ", ".concat(me) : "", " ]");
    }
    function xe(d, g) {
      var _ = d.toJSON();
      if (_ === null)
        return "Invalid Date";
      var L = _.split("T"), z = L[0];
      return g.stylize("".concat(z, "T").concat(v(L[1], g.truncate - z.length - 1)), "date");
    }
    function we(d, g) {
      var _ = G(d);
      return _ ? g.stylize("[Function ".concat(v(_, g.truncate - 11), "]"), "special") : g.stylize("[Function]", "special");
    }
    function $e(d, g) {
      var _ = r(d, 2), L = _[0], z = _[1];
      return g.truncate -= 4, L = g.inspect(L, g), g.truncate -= L.length, z = g.inspect(z, g), "".concat(L, " => ").concat(z);
    }
    function Pe(d) {
      var g = [];
      return d.forEach(function(_, L) {
        g.push([L, _]);
      }), g;
    }
    function Fe(d, g) {
      var _ = d.size - 1;
      return _ <= 0 ? "Map{}" : (g.truncate -= 7, "Map{ ".concat(h(Pe(d), g, $e), " }"));
    }
    var Ie = Number.isNaN || function(d) {
      return d !== d;
    };
    function Ne(d, g) {
      return Ie(d) ? g.stylize("NaN", "number") : d === 1 / 0 ? g.stylize("Infinity", "number") : d === -1 / 0 ? g.stylize("-Infinity", "number") : d === 0 ? g.stylize(1 / d === 1 / 0 ? "+0" : "-0", "number") : g.stylize(v(d, g.truncate), "number");
    }
    function De(d, g) {
      var _ = v(d.toString(), g.truncate - 1);
      return _ !== p && (_ += "n"), g.stylize(_, "bigint");
    }
    function m(d, g) {
      var _ = d.toString().split("/")[2], L = g.truncate - (2 + _.length), z = d.source;
      return g.stylize("/".concat(v(z, L), "/").concat(_), "regexp");
    }
    function T(d) {
      var g = [];
      return d.forEach(function(_) {
        g.push(_);
      }), g;
    }
    function x(d, g) {
      return d.size === 0 ? "Set{}" : (g.truncate -= 7, "Set{ ".concat(h(T(d), g), " }"));
    }
    var P = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), j = {
      "\b": "\\b",
      "	": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      "'": "\\'",
      "\\": "\\\\"
    }, D = 16, I = 4;
    function $(d) {
      return j[d] || "\\u".concat("0000".concat(d.charCodeAt(0).toString(D)).slice(-I));
    }
    function q(d, g) {
      return P.test(d) && (d = d.replace(P, $)), g.stylize("'".concat(v(d, g.truncate - 2), "'"), "string");
    }
    function K(d) {
      return "description" in Symbol.prototype ? d.description ? "Symbol(".concat(d.description, ")") : "Symbol()" : d.toString();
    }
    var J = function() {
      return "Promise{…}";
    };
    try {
      var ne = process.binding("util"), Z = ne.getPromiseDetails, H = ne.kPending, re = ne.kRejected;
      Array.isArray(Z(Promise.resolve())) && (J = function(g, _) {
        var L = Z(g), z = r(L, 2), ee = z[0], ie = z[1];
        return ee === H ? "Promise{<pending>}" : "Promise".concat(ee === re ? "!" : "", "{").concat(_.inspect(ie, _), "}");
      });
    } catch {
    }
    var O = J;
    function ce(d, g) {
      var _ = Object.getOwnPropertyNames(d), L = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(d) : [];
      if (_.length === 0 && L.length === 0)
        return "{}";
      if (g.truncate -= 4, g.seen = g.seen || [], g.seen.indexOf(d) >= 0)
        return "[Circular]";
      g.seen.push(d);
      var z = h(_.map(function(me) {
        return [me, d[me]];
      }), g, M), ee = h(L.map(function(me) {
        return [me, d[me]];
      }), g, M);
      g.seen.pop();
      var ie = "";
      return z && ee && (ie = ", "), "{ ".concat(z).concat(ie).concat(ee, " }");
    }
    var oe = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
    function ye(d, g) {
      var _ = "";
      return oe && oe in d && (_ = d[oe]), _ = _ || G(d.constructor), (!_ || _ === "_class") && (_ = "<Anonymous Class>"), g.truncate -= _.length, "".concat(_).concat(ce(d, g));
    }
    function qe(d, g) {
      return d.length === 0 ? "Arguments[]" : (g.truncate -= 13, "Arguments[ ".concat(h(d, g), " ]"));
    }
    var fr = ["stack", "line", "column", "name", "message", "fileName", "lineNumber", "columnNumber", "number", "description"];
    function E(d, g) {
      var _ = Object.getOwnPropertyNames(d).filter(function(ie) {
        return fr.indexOf(ie) === -1;
      }), L = d.name;
      g.truncate -= L.length;
      var z = "";
      typeof d.message == "string" ? z = v(d.message, g.truncate) : _.unshift("message"), z = z ? ": ".concat(z) : "", g.truncate -= z.length + 5;
      var ee = h(_.map(function(ie) {
        return [ie, d[ie]];
      }), g, M);
      return "".concat(L).concat(z).concat(ee ? " { ".concat(ee, " }") : "");
    }
    function S(d, g) {
      var _ = r(d, 2), L = _[0], z = _[1];
      return g.truncate -= 3, z ? "".concat(g.stylize(L, "yellow"), "=").concat(g.stylize('"'.concat(z, '"'), "string")) : "".concat(g.stylize(L, "yellow"));
    }
    function C(d, g) {
      return h(d, g, R, `
`);
    }
    function R(d, g) {
      var _ = d.getAttributeNames(), L = d.tagName.toLowerCase(), z = g.stylize("<".concat(L), "special"), ee = g.stylize(">", "special"), ie = g.stylize("</".concat(L, ">"), "special");
      g.truncate -= L.length * 2 + 5;
      var me = "";
      _.length > 0 && (me += " ", me += h(_.map(function(We) {
        return [We, d.getAttribute(We)];
      }), g, S, " ")), g.truncate -= me.length;
      var Ce = g.truncate, Oe = C(d.children, g);
      return Oe && Oe.length > Ce && (Oe = "".concat(p, "(").concat(d.children.length, ")")), "".concat(z).concat(me).concat(ee).concat(Oe).concat(ie);
    }
    var y = typeof Symbol == "function" && typeof Symbol.for == "function", X = y ? Symbol.for("chai/inspect") : "@@chai/inspect", ve = !1;
    try {
      var Ee = Ll;
      ve = Ee.inspect ? Ee.inspect.custom : !1;
    } catch {
      ve = !1;
    }
    function Be() {
      this.key = "chai/loupe__" + Math.random() + Date.now();
    }
    Be.prototype = {
      // eslint-disable-next-line object-shorthand
      get: function(g) {
        return g[this.key];
      },
      // eslint-disable-next-line object-shorthand
      has: function(g) {
        return this.key in g;
      },
      // eslint-disable-next-line object-shorthand
      set: function(g, _) {
        Object.isExtensible(g) && Object.defineProperty(g, this.key, {
          // eslint-disable-next-line object-shorthand
          value: _,
          configurable: !0
        });
      }
    };
    var Y = new (typeof WeakMap == "function" ? WeakMap : Be)(), W = {}, Q = {
      undefined: function(g, _) {
        return _.stylize("undefined", "undefined");
      },
      null: function(g, _) {
        return _.stylize(null, "null");
      },
      boolean: function(g, _) {
        return _.stylize(g, "boolean");
      },
      Boolean: function(g, _) {
        return _.stylize(g, "boolean");
      },
      number: Ne,
      Number: Ne,
      bigint: De,
      BigInt: De,
      string: q,
      String: q,
      function: we,
      Function: we,
      symbol: K,
      // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
      Symbol: K,
      Array: F,
      Date: xe,
      Map: Fe,
      Set: x,
      RegExp: m,
      Promise: O,
      // WeakSet, WeakMap are totally opaque to us
      WeakSet: function(g, _) {
        return _.stylize("WeakSet{…}", "special");
      },
      WeakMap: function(g, _) {
        return _.stylize("WeakMap{…}", "special");
      },
      Arguments: qe,
      Int8Array: V,
      Uint8Array: V,
      Uint8ClampedArray: V,
      Int16Array: V,
      Uint16Array: V,
      Int32Array: V,
      Uint32Array: V,
      Float32Array: V,
      Float64Array: V,
      Generator: function() {
        return "";
      },
      DataView: function() {
        return "";
      },
      ArrayBuffer: function() {
        return "";
      },
      Error: E,
      HTMLCollection: C,
      NodeList: C
    }, te = function(g, _, L) {
      return X in g && typeof g[X] == "function" ? g[X](_) : ve && ve in g && typeof g[ve] == "function" ? g[ve](_.depth, _) : "inspect" in g && typeof g.inspect == "function" ? g.inspect(_.depth, _) : "constructor" in g && Y.has(g.constructor) ? Y.get(g.constructor)(g, _) : W[L] ? W[L](g, _) : "";
    }, ge = Object.prototype.toString;
    function _e(d, g) {
      g = b(g), g.inspect = _e;
      var _ = g, L = _.customInspect, z = d === null ? "null" : o(d);
      if (z === "object" && (z = ge.call(d).slice(8, -1)), Q[z])
        return Q[z](d, g);
      if (L && d) {
        var ee = te(d, g, z);
        if (ee)
          return typeof ee == "string" ? ee : _e(ee, g);
      }
      var ie = d ? Object.getPrototypeOf(d) : !1;
      return ie === Object.prototype || ie === null ? ce(d, g) : d && typeof HTMLElement == "function" && d instanceof HTMLElement ? R(d, g) : "constructor" in d ? d.constructor !== Object ? ye(d, g) : ce(d, g) : d === Object(d) ? ce(d, g) : g.stylize(String(d), z);
    }
    function nt(d, g) {
      return Y.has(d) ? !1 : (Y.set(d, g), !0);
    }
    function Nt(d, g) {
      return d in W ? !1 : (W[d] = g, !0);
    }
    var ze = X;
    n.custom = ze, n.default = _e, n.inspect = _e, n.registerConstructor = nt, n.registerStringTag = Nt, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(Kr, Kr.exports);
var ua = Kr.exports;
const {
  AsymmetricMatcher: ql,
  DOMCollection: zl,
  DOMElement: Wl,
  Immutable: Vl,
  ReactElement: Ul,
  ReactTestComponent: Kl
} = uo, Yo = [
  Kl,
  Ul,
  Wl,
  zl,
  Vl,
  ql
];
function Qe(e, t = 10, { maxLength: n, ...o } = {}) {
  const r = n ?? 1e4;
  let s;
  try {
    s = Xe(e, {
      maxDepth: t,
      escapeString: !1,
      // min: true,
      plugins: Yo,
      ...o
    });
  } catch {
    s = Xe(e, {
      callToJSON: !1,
      maxDepth: t,
      escapeString: !1,
      // min: true,
      plugins: Yo,
      ...o
    });
  }
  return s.length >= r && t > 1 ? Qe(e, Math.floor(t / 2)) : s;
}
const Gl = /%[sdjifoOcj%]/g;
function la(...e) {
  if (typeof e[0] != "string") {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Ft(e[i], { depth: 0, colors: !1, compact: 3 }));
    return s.join(" ");
  }
  const t = e.length;
  let n = 1;
  const o = e[0];
  let r = String(o).replace(Gl, (s) => {
    if (s === "%%")
      return "%";
    if (n >= t)
      return s;
    switch (s) {
      case "%s": {
        const i = e[n++];
        return typeof i == "bigint" ? `${i.toString()}n` : typeof i == "number" && i === 0 && 1 / i < 0 ? "-0" : typeof i == "object" && i !== null ? Ft(i, { depth: 0, colors: !1, compact: 3 }) : String(i);
      }
      case "%d": {
        const i = e[n++];
        return typeof i == "bigint" ? `${i.toString()}n` : Number(i).toString();
      }
      case "%i": {
        const i = e[n++];
        return typeof i == "bigint" ? `${i.toString()}n` : Number.parseInt(String(i)).toString();
      }
      case "%f":
        return Number.parseFloat(String(e[n++])).toString();
      case "%o":
        return Ft(e[n++], { showHidden: !0, showProxy: !0 });
      case "%O":
        return Ft(e[n++]);
      case "%c":
        return n++, "";
      case "%j":
        try {
          return JSON.stringify(e[n++]);
        } catch (i) {
          const a = i.message;
          if (
            // chromium
            a.includes("circular structure") || a.includes("cyclic structures") || a.includes("cyclic object")
          )
            return "[Circular]";
          throw i;
        }
      default:
        return s;
    }
  });
  for (let s = e[n]; n < t; s = e[++n])
    s === null || typeof s != "object" ? r += ` ${s}` : r += ` ${Ft(s)}`;
  return r;
}
function Ft(e, t = {}) {
  return t.truncate === 0 && (t.truncate = Number.POSITIVE_INFINITY), ua.inspect(e, t);
}
function Jl(e, t = {}) {
  typeof t.truncate > "u" && (t.truncate = 40);
  const n = Ft(e, t), o = Object.prototype.toString.call(e);
  if (t.truncate && n.length >= t.truncate)
    if (o === "[object Function]") {
      const r = e;
      return !r.name || r.name === "" ? "[Function]" : `[Function: ${r.name}]`;
    } else {
      if (o === "[object Array]")
        return `[ Array(${e.length}) ]`;
      if (o === "[object Object]") {
        const r = Object.keys(e);
        return `{ Object (${r.length > 2 ? `${r.splice(0, 2).join(", ")}, ...` : r.join(", ")}) }`;
      } else
        return n;
    }
  return n;
}
const Ho = Symbol("vitest:SAFE_TIMERS"), Yl = Symbol("vitest:SAFE_COLORS"), Hl = {
  bold: ["\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"],
  dim: ["\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"],
  italic: ["\x1B[3m", "\x1B[23m"],
  underline: ["\x1B[4m", "\x1B[24m"],
  inverse: ["\x1B[7m", "\x1B[27m"],
  hidden: ["\x1B[8m", "\x1B[28m"],
  strikethrough: ["\x1B[9m", "\x1B[29m"],
  black: ["\x1B[30m", "\x1B[39m"],
  red: ["\x1B[31m", "\x1B[39m"],
  green: ["\x1B[32m", "\x1B[39m"],
  yellow: ["\x1B[33m", "\x1B[39m"],
  blue: ["\x1B[34m", "\x1B[39m"],
  magenta: ["\x1B[35m", "\x1B[39m"],
  cyan: ["\x1B[36m", "\x1B[39m"],
  white: ["\x1B[37m", "\x1B[39m"],
  gray: ["\x1B[90m", "\x1B[39m"],
  bgBlack: ["\x1B[40m", "\x1B[49m"],
  bgRed: ["\x1B[41m", "\x1B[49m"],
  bgGreen: ["\x1B[42m", "\x1B[49m"],
  bgYellow: ["\x1B[43m", "\x1B[49m"],
  bgBlue: ["\x1B[44m", "\x1B[49m"],
  bgMagenta: ["\x1B[45m", "\x1B[49m"],
  bgCyan: ["\x1B[46m", "\x1B[49m"],
  bgWhite: ["\x1B[47m", "\x1B[49m"]
}, Xl = Object.entries(Hl);
function fo(e) {
  return String(e);
}
fo.open = "";
fo.close = "";
const Ql = /* @__PURE__ */ Xl.reduce((e, [t]) => (e[t] = fo, e), { isColorSupported: !1 });
function po() {
  return globalThis[Yl] || Ql;
}
function nr() {
  const {
    setTimeout: e,
    setInterval: t,
    clearInterval: n,
    clearTimeout: o,
    setImmediate: r,
    clearImmediate: s
  } = globalThis[Ho] || globalThis, {
    nextTick: i
  } = globalThis[Ho] || globalThis.process || { nextTick: (a) => a() };
  return {
    nextTick: i,
    setTimeout: e,
    setInterval: t,
    clearInterval: n,
    clearTimeout: o,
    setImmediate: r,
    clearImmediate: s
  };
}
function Zl(e) {
  const { message: t = "error", stackTraceLimit: n = 1 } = e || {}, o = Error.stackTraceLimit, r = Error.prepareStackTrace;
  Error.stackTraceLimit = n, Error.prepareStackTrace = (a) => a.stack;
  const i = new Error(t).stack || "";
  return Error.prepareStackTrace = r, Error.stackTraceLimit = o, i;
}
var fa;
fa = /\r?\n|[\r\u2028\u2029]/y;
RegExp(fa.source);
var pa = {
  keyword: [
    "break",
    "case",
    "catch",
    "continue",
    "debugger",
    "default",
    "do",
    "else",
    "finally",
    "for",
    "function",
    "if",
    "return",
    "switch",
    "throw",
    "try",
    "var",
    "const",
    "while",
    "with",
    "new",
    "this",
    "super",
    "class",
    "extends",
    "export",
    "import",
    "null",
    "true",
    "false",
    "in",
    "instanceof",
    "typeof",
    "void",
    "delete"
  ],
  strict: [
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "yield"
  ]
};
new Set(pa.keyword);
new Set(pa.strict);
var ha = {};
Object.defineProperty(ha, "__esModule", {
  value: !0
});
var Xo = ha.default = rf;
const cn = "diff-sequences", je = 0, mn = (e, t, n, o, r) => {
  let s = 0;
  for (; e < t && n < o && r(e, n); )
    e += 1, n += 1, s += 1;
  return s;
}, dn = (e, t, n, o, r) => {
  let s = 0;
  for (; e <= t && n <= o && r(t, o); )
    t -= 1, o -= 1, s += 1;
  return s;
}, vr = (e, t, n, o, r, s, i) => {
  let a = 0, c = -e, l = s[a], f = l;
  s[a] += mn(
    l + 1,
    t,
    o + l - c + 1,
    n,
    r
  );
  const u = e < i ? e : i;
  for (a += 1, c += 2; a <= u; a += 1, c += 2) {
    if (a !== e && f < s[a])
      l = s[a];
    else if (l = f + 1, t <= l)
      return a - 1;
    f = s[a], s[a] = l + mn(l + 1, t, o + l - c + 1, n, r);
  }
  return i;
}, Qo = (e, t, n, o, r, s, i) => {
  let a = 0, c = e, l = s[a], f = l;
  s[a] -= dn(
    t,
    l - 1,
    n,
    o + l - c - 1,
    r
  );
  const u = e < i ? e : i;
  for (a += 1, c -= 2; a <= u; a += 1, c -= 2) {
    if (a !== e && s[a] < f)
      l = s[a];
    else if (l = f - 1, l < t)
      return a - 1;
    f = s[a], s[a] = l - dn(
      t,
      l - 1,
      n,
      o + l - c - 1,
      r
    );
  }
  return i;
}, ef = (e, t, n, o, r, s, i, a, c, l, f) => {
  const u = o - t, p = n - t, b = r - o - p, v = -b - (e - 1), h = -b + (e - 1);
  let A = je;
  const M = e < a ? e : a;
  for (let F = 0, k = -e; F <= M; F += 1, k += 2) {
    const N = F === 0 || F !== e && A < i[F], U = N ? i[F] : A, B = N ? U : U + 1, G = u + B - k, ae = mn(
      B + 1,
      n,
      G + 1,
      r,
      s
    ), V = B + ae;
    if (A = i[F], i[F] = V, v <= k && k <= h) {
      const xe = (e - 1 - (k + b)) / 2;
      if (xe <= l && c[xe] - 1 <= V) {
        const we = u + U - (N ? k + 1 : k - 1), $e = dn(
          t,
          U,
          o,
          we,
          s
        ), Pe = U - $e, Fe = we - $e, Ie = Pe + 1, Ne = Fe + 1;
        f.nChangePreceding = e - 1, e - 1 === Ie + Ne - t - o ? (f.aEndPreceding = t, f.bEndPreceding = o) : (f.aEndPreceding = Ie, f.bEndPreceding = Ne), f.nCommonPreceding = $e, $e !== 0 && (f.aCommonPreceding = Ie, f.bCommonPreceding = Ne), f.nCommonFollowing = ae, ae !== 0 && (f.aCommonFollowing = B + 1, f.bCommonFollowing = G + 1);
        const De = V + 1, m = G + ae + 1;
        return f.nChangeFollowing = e - 1, e - 1 === n + r - De - m ? (f.aStartFollowing = n, f.bStartFollowing = r) : (f.aStartFollowing = De, f.bStartFollowing = m), !0;
      }
    }
  }
  return !1;
}, tf = (e, t, n, o, r, s, i, a, c, l, f) => {
  const u = r - n, p = n - t, b = r - o - p, v = b - e, h = b + e;
  let A = je;
  const M = e < l ? e : l;
  for (let F = 0, k = e; F <= M; F += 1, k -= 2) {
    const N = F === 0 || F !== e && c[F] < A, U = N ? c[F] : A, B = N ? U : U - 1, G = u + B - k, ae = dn(
      t,
      B - 1,
      o,
      G - 1,
      s
    ), V = B - ae;
    if (A = c[F], c[F] = V, v <= k && k <= h) {
      const xe = (e + (k - b)) / 2;
      if (xe <= a && V - 1 <= i[xe]) {
        const we = G - ae;
        if (f.nChangePreceding = e, e === V + we - t - o ? (f.aEndPreceding = t, f.bEndPreceding = o) : (f.aEndPreceding = V, f.bEndPreceding = we), f.nCommonPreceding = ae, ae !== 0 && (f.aCommonPreceding = V, f.bCommonPreceding = we), f.nChangeFollowing = e - 1, e === 1)
          f.nCommonFollowing = 0, f.aStartFollowing = n, f.bStartFollowing = r;
        else {
          const $e = u + U - (N ? k - 1 : k + 1), Pe = mn(
            U,
            n,
            $e,
            r,
            s
          );
          f.nCommonFollowing = Pe, Pe !== 0 && (f.aCommonFollowing = U, f.bCommonFollowing = $e);
          const Fe = U + Pe, Ie = $e + Pe;
          e - 1 === n + r - Fe - Ie ? (f.aStartFollowing = n, f.bStartFollowing = r) : (f.aStartFollowing = Fe, f.bStartFollowing = Ie);
        }
        return !0;
      }
    }
  }
  return !1;
}, nf = (e, t, n, o, r, s, i, a, c) => {
  const l = o - t, f = r - n, u = n - t, p = r - o, w = p - u;
  let b = u, v = u;
  if (i[0] = t - 1, a[0] = n, w % 2 === 0) {
    const h = (e || w) / 2, A = (u + p) / 2;
    for (let M = 1; M <= A; M += 1)
      if (b = vr(M, n, r, l, s, i, b), M < h)
        v = Qo(M, t, o, f, s, a, v);
      else if (
        // If a reverse path overlaps a forward path in the same diagonal,
        // return a division of the index intervals at the middle change.
        tf(
          M,
          t,
          n,
          o,
          r,
          s,
          i,
          b,
          a,
          v,
          c
        )
      )
        return;
  } else {
    const h = ((e || w) + 1) / 2, A = (u + p + 1) / 2;
    let M = 1;
    for (b = vr(M, n, r, l, s, i, b), M += 1; M <= A; M += 1)
      if (v = Qo(
        M - 1,
        t,
        o,
        f,
        s,
        a,
        v
      ), M < h)
        b = vr(M, n, r, l, s, i, b);
      else if (
        // If a forward path overlaps a reverse path in the same diagonal,
        // return a division of the index intervals at the middle change.
        ef(
          M,
          t,
          n,
          o,
          r,
          s,
          i,
          b,
          a,
          v,
          c
        )
      )
        return;
  }
  throw new Error(
    `${cn}: no overlap aStart=${t} aEnd=${n} bStart=${o} bEnd=${r}`
  );
}, Gr = (e, t, n, o, r, s, i, a, c, l) => {
  if (r - o < n - t) {
    if (s = !s, s && i.length === 1) {
      const { foundSubsequence: V, isCommon: xe } = i[0];
      i[1] = {
        foundSubsequence: (we, $e, Pe) => {
          V(we, Pe, $e);
        },
        isCommon: (we, $e) => xe($e, we)
      };
    }
    const G = t, ae = n;
    t = o, n = r, o = G, r = ae;
  }
  const { foundSubsequence: f, isCommon: u } = i[s ? 1 : 0];
  nf(
    e,
    t,
    n,
    o,
    r,
    u,
    a,
    c,
    l
  );
  const {
    nChangePreceding: p,
    aEndPreceding: w,
    bEndPreceding: b,
    nCommonPreceding: v,
    aCommonPreceding: h,
    bCommonPreceding: A,
    nCommonFollowing: M,
    aCommonFollowing: F,
    bCommonFollowing: k,
    nChangeFollowing: N,
    aStartFollowing: U,
    bStartFollowing: B
  } = l;
  t < w && o < b && Gr(
    p,
    t,
    w,
    o,
    b,
    s,
    i,
    a,
    c,
    l
  ), v !== 0 && f(v, h, A), M !== 0 && f(M, F, k), U < n && B < r && Gr(
    N,
    U,
    n,
    B,
    r,
    s,
    i,
    a,
    c,
    l
  );
}, Zo = (e, t) => {
  if (typeof t != "number")
    throw new TypeError(`${cn}: ${e} typeof ${typeof t} is not a number`);
  if (!Number.isSafeInteger(t))
    throw new RangeError(`${cn}: ${e} value ${t} is not a safe integer`);
  if (t < 0)
    throw new RangeError(`${cn}: ${e} value ${t} is a negative integer`);
}, es = (e, t) => {
  const n = typeof t;
  if (n !== "function")
    throw new TypeError(`${cn}: ${e} typeof ${n} is not a function`);
};
function rf(e, t, n, o) {
  Zo("aLength", e), Zo("bLength", t), es("isCommon", n), es("foundSubsequence", o);
  const r = mn(0, e, 0, t, n);
  if (r !== 0 && o(r, 0, 0), e !== r || t !== r) {
    const s = r, i = r, a = dn(
      s,
      e - 1,
      i,
      t - 1,
      n
    ), c = e - a, l = t - a, f = r + a;
    e !== f && t !== f && Gr(
      0,
      s,
      c,
      i,
      l,
      !1,
      [
        {
          foundSubsequence: o,
          isCommon: n
        }
      ],
      [je],
      [je],
      {
        aCommonFollowing: je,
        aCommonPreceding: je,
        aEndPreceding: je,
        aStartFollowing: je,
        bCommonFollowing: je,
        bCommonPreceding: je,
        bEndPreceding: je,
        bStartFollowing: je,
        nChangeFollowing: je,
        nChangePreceding: je,
        nCommonFollowing: je,
        nCommonPreceding: je
      }
    ), a !== 0 && o(a, c, l);
  }
}
function ts(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  if (Array.isArray(e))
    return "array";
  if (typeof e == "boolean")
    return "boolean";
  if (typeof e == "function")
    return "function";
  if (typeof e == "number")
    return "number";
  if (typeof e == "string")
    return "string";
  if (typeof e == "bigint")
    return "bigint";
  if (typeof e == "object") {
    if (e != null) {
      if (e.constructor === RegExp)
        return "regexp";
      if (e.constructor === Map)
        return "map";
      if (e.constructor === Set)
        return "set";
      if (e.constructor === Date)
        return "date";
    }
    return "object";
  } else if (typeof e == "symbol")
    return "symbol";
  throw new Error(`value of unknown type: ${e}`);
}
const Vt = -1, Ut = 1, zn = 0;
class tn {
  constructor(t, n) {
    se(this, 0);
    se(this, 1);
    this[0] = t, this[1] = n;
  }
}
const ma = "Compared values have no visual difference.", of = "Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.";
function sf(e, t) {
  return e.replace(/\s+$/, (n) => t(n));
}
function ho(e, t, n, o, r, s) {
  return e.length !== 0 ? n(
    `${o} ${sf(e, r)}`
  ) : o !== " " ? n(o) : t && s.length !== 0 ? n(`${o} ${s}`) : "";
}
function da(e, t, {
  aColor: n,
  aIndicator: o,
  changeLineTrailingSpaceColor: r,
  emptyFirstOrLastLinePlaceholder: s
}) {
  return ho(
    e,
    t,
    n,
    o,
    r,
    s
  );
}
function ya(e, t, {
  bColor: n,
  bIndicator: o,
  changeLineTrailingSpaceColor: r,
  emptyFirstOrLastLinePlaceholder: s
}) {
  return ho(
    e,
    t,
    n,
    o,
    r,
    s
  );
}
function ga(e, t, {
  commonColor: n,
  commonIndicator: o,
  commonLineTrailingSpaceColor: r,
  emptyFirstOrLastLinePlaceholder: s
}) {
  return ho(
    e,
    t,
    n,
    o,
    r,
    s
  );
}
function ns(e, t, n, o, { patchColor: r }) {
  return r(
    `@@ -${e + 1},${t - e} +${n + 1},${o - n} @@`
  );
}
function af(e, t) {
  const n = e.length, o = t.contextLines, r = o + o;
  let s = n, i = !1, a = 0, c = 0;
  for (; c !== n; ) {
    const k = c;
    for (; c !== n && e[c][0] === zn; )
      c += 1;
    if (k !== c)
      if (k === 0)
        c > o && (s -= c - o, i = !0);
      else if (c === n) {
        const N = c - k;
        N > o && (s -= N - o, i = !0);
      } else {
        const N = c - k;
        N > r && (s -= N - r, a += 1);
      }
    for (; c !== n && e[c][0] !== zn; )
      c += 1;
  }
  const l = a !== 0 || i;
  a !== 0 ? s += a + 1 : i && (s += 1);
  const f = s - 1, u = [];
  let p = 0;
  l && u.push("");
  let w = 0, b = 0, v = 0, h = 0;
  const A = (k) => {
    const N = u.length;
    u.push(ga(k, N === 0 || N === f, t)), v += 1, h += 1;
  }, M = (k) => {
    const N = u.length;
    u.push(da(k, N === 0 || N === f, t)), v += 1;
  }, F = (k) => {
    const N = u.length;
    u.push(ya(k, N === 0 || N === f, t)), h += 1;
  };
  for (c = 0; c !== n; ) {
    let k = c;
    for (; c !== n && e[c][0] === zn; )
      c += 1;
    if (k !== c)
      if (k === 0) {
        c > o && (k = c - o, w = k, b = k, v = w, h = b);
        for (let N = k; N !== c; N += 1)
          A(e[N][1]);
      } else if (c === n) {
        const N = c - k > o ? k + o : c;
        for (let U = k; U !== N; U += 1)
          A(e[U][1]);
      } else {
        const N = c - k;
        if (N > r) {
          const U = k + o;
          for (let G = k; G !== U; G += 1)
            A(e[G][1]);
          u[p] = ns(
            w,
            v,
            b,
            h,
            t
          ), p = u.length, u.push("");
          const B = N - r;
          w = v + B, b = h + B, v = w, h = b;
          for (let G = c - o; G !== c; G += 1)
            A(e[G][1]);
        } else
          for (let U = k; U !== c; U += 1)
            A(e[U][1]);
      }
    for (; c !== n && e[c][0] === Vt; )
      M(e[c][1]), c += 1;
    for (; c !== n && e[c][0] === Ut; )
      F(e[c][1]), c += 1;
  }
  return l && (u[p] = ns(w, v, b, h, t)), u.join(`
`);
}
function cf(e, t) {
  return e.map((n, o, r) => {
    const s = n[1], i = o === 0 || o === r.length - 1;
    switch (n[0]) {
      case Vt:
        return da(s, i, t);
      case Ut:
        return ya(s, i, t);
      default:
        return ga(s, i, t);
    }
  }).join(`
`);
}
const rs = (e) => e, ba = 5;
function uf() {
  const e = po();
  return {
    aAnnotation: "Expected",
    aColor: e.green,
    aIndicator: "-",
    bAnnotation: "Received",
    bColor: e.red,
    bIndicator: "+",
    changeColor: e.inverse,
    changeLineTrailingSpaceColor: rs,
    commonColor: e.dim,
    commonIndicator: " ",
    commonLineTrailingSpaceColor: rs,
    compareKeys: void 0,
    contextLines: ba,
    emptyFirstOrLastLinePlaceholder: "",
    expand: !0,
    includeChangeCounts: !1,
    omitAnnotationLines: !1,
    patchColor: e.yellow
  };
}
function lf(e) {
  return e && typeof e == "function" ? e : void 0;
}
function ff(e) {
  return typeof e == "number" && Number.isSafeInteger(e) && e >= 0 ? e : ba;
}
function En(e = {}) {
  return {
    ...uf(),
    ...e,
    compareKeys: lf(e.compareKeys),
    contextLines: ff(e.contextLines)
  };
}
function Bt(e) {
  return e.length === 1 && e[0].length === 0;
}
function pf(e) {
  let t = 0, n = 0;
  return e.forEach((o) => {
    switch (o[0]) {
      case Vt:
        t += 1;
        break;
      case Ut:
        n += 1;
        break;
    }
  }), { a: t, b: n };
}
function hf({
  aAnnotation: e,
  aColor: t,
  aIndicator: n,
  bAnnotation: o,
  bColor: r,
  bIndicator: s,
  includeChangeCounts: i,
  omitAnnotationLines: a
}, c) {
  if (a)
    return "";
  let l = "", f = "";
  if (i) {
    const w = String(c.a), b = String(c.b), v = o.length - e.length, h = " ".repeat(Math.max(0, v)), A = " ".repeat(Math.max(0, -v)), M = b.length - w.length, F = " ".repeat(Math.max(0, M)), k = " ".repeat(Math.max(0, -M));
    l = `${h}  ${n} ${F}${w}`, f = `${A}  ${s} ${k}${b}`;
  }
  const u = `${n} ${e}${l}`, p = `${s} ${o}${f}`;
  return `${t(u)}
${r(p)}

`;
}
function wa(e, t) {
  return hf(t, pf(e)) + (t.expand ? cf(e, t) : af(e, t));
}
function mo(e, t, n) {
  return wa(
    va(
      Bt(e) ? [] : e,
      Bt(t) ? [] : t
    ),
    En(n)
  );
}
function mf(e, t, n, o, r) {
  if (Bt(e) && Bt(n) && (e = [], n = []), Bt(t) && Bt(o) && (t = [], o = []), e.length !== n.length || t.length !== o.length)
    return mo(e, t, r);
  const s = va(n, o);
  let i = 0, a = 0;
  return s.forEach((c) => {
    switch (c[0]) {
      case Vt:
        c[1] = e[i], i += 1;
        break;
      case Ut:
        c[1] = t[a], a += 1;
        break;
      default:
        c[1] = t[a], i += 1, a += 1;
    }
  }), wa(s, En(r));
}
function va(e, t) {
  const n = e.length, o = t.length, r = (f, u) => e[f] === t[u], s = [];
  let i = 0, a = 0;
  const c = (f, u, p) => {
    for (; i !== u; i += 1)
      s.push(new tn(Vt, e[i]));
    for (; a !== p; a += 1)
      s.push(new tn(Ut, t[a]));
    for (; f !== 0; f -= 1, i += 1, a += 1)
      s.push(new tn(zn, t[a]));
  };
  for ((Xo.default || Xo)(n, o, r, c); i !== n; i += 1)
    s.push(new tn(Vt, e[i]));
  for (; a !== o; a += 1)
    s.push(new tn(Ut, t[a]));
  return s;
}
function Jr(e, t) {
  const { commonColor: n } = En(t);
  return n(e);
}
const {
  AsymmetricMatcher: df,
  DOMCollection: yf,
  DOMElement: gf,
  Immutable: bf,
  ReactElement: wf,
  ReactTestComponent: vf
} = uo, Ea = [
  vf,
  wf,
  gf,
  yf,
  bf,
  df
], Yr = {
  plugins: Ea
}, Sa = {
  callToJSON: !1,
  maxDepth: 10,
  plugins: Ea
};
function yn(e, t, n) {
  if (Object.is(e, t))
    return "";
  const o = ts(e);
  let r = o, s = !1;
  if (o === "object" && typeof e.asymmetricMatch == "function") {
    if (e.$$typeof !== Symbol.for("jest.asymmetricMatcher") || typeof e.getExpectedType != "function")
      return null;
    r = e.getExpectedType(), s = r === "string";
  }
  if (r !== ts(t)) {
    const { aAnnotation: i, aColor: a, aIndicator: c, bAnnotation: l, bColor: f, bIndicator: u } = En(n), p = Hr(Sa, n), w = Xe(e, p), b = Xe(t, p), v = `${a(`${c} ${i}:`)} 
${w}`, h = `${f(`${u} ${l}:`)} 
${b}`;
    return `${v}

${h}`;
  }
  if (s)
    return null;
  switch (o) {
    case "string":
      return mo(e.split(`
`), t.split(`
`), n);
    case "boolean":
    case "number":
      return Ef(e, t, n);
    case "map":
      return Er(os(e), os(t), n);
    case "set":
      return Er(ss(e), ss(t), n);
    default:
      return Er(e, t, n);
  }
}
function Ef(e, t, n) {
  const o = Xe(e, Yr), r = Xe(t, Yr);
  return o === r ? "" : mo(o.split(`
`), r.split(`
`), n);
}
function os(e) {
  return new Map(Array.from(e.entries()).sort());
}
function ss(e) {
  return new Set(Array.from(e.values()).sort());
}
function Er(e, t, n) {
  let o, r = !1;
  try {
    const i = Hr(Yr, n);
    o = is(e, t, i, n);
  } catch {
    r = !0;
  }
  const s = Jr(ma, n);
  if (o === void 0 || o === s) {
    const i = Hr(Sa, n);
    o = is(e, t, i, n), o !== s && !r && (o = `${Jr(
      of,
      n
    )}

${o}`);
  }
  return o;
}
function Hr(e, t) {
  const { compareKeys: n } = En(t);
  return {
    ...e,
    compareKeys: n
  };
}
function is(e, t, n, o) {
  const r = { ...n, indent: 0 }, s = Xe(e, r), i = Xe(t, r);
  if (s === i)
    return Jr(ma, o);
  {
    const a = Xe(e, n), c = Xe(t, n);
    return mf(
      a.split(`
`),
      c.split(`
`),
      s.split(`
`),
      i.split(`
`),
      o
    );
  }
}
const Sf = "@@__IMMUTABLE_RECORD__@@", Tf = "@@__IMMUTABLE_ITERABLE__@@";
function xf(e) {
  return e && (e[Tf] || e[Sf]);
}
const $f = Object.getPrototypeOf({});
function as(e) {
  return e instanceof Error ? `<unserializable>: ${e.message}` : typeof e == "string" ? `<unserializable>: ${e}` : "<unserializable>";
}
function un(e, t = /* @__PURE__ */ new WeakMap()) {
  if (!e || typeof e == "string")
    return e;
  if (typeof e == "function")
    return `Function<${e.name || "anonymous"}>`;
  if (typeof e == "symbol")
    return e.toString();
  if (typeof e != "object")
    return e;
  if (xf(e))
    return un(e.toJSON(), t);
  if (e instanceof Promise || e.constructor && e.constructor.prototype === "AsyncFunction")
    return "Promise";
  if (typeof Element < "u" && e instanceof Element)
    return e.tagName;
  if (typeof e.asymmetricMatch == "function")
    return `${e.toString()} ${la(e.sample)}`;
  if (t.has(e))
    return t.get(e);
  if (Array.isArray(e)) {
    const n = new Array(e.length);
    return t.set(e, n), e.forEach((o, r) => {
      try {
        n[r] = un(o, t);
      } catch (s) {
        n[r] = as(s);
      }
    }), n;
  } else {
    const n = /* @__PURE__ */ Object.create(null);
    t.set(e, n);
    let o = e;
    for (; o && o !== $f; )
      Object.getOwnPropertyNames(o).forEach((r) => {
        if (!(r in n))
          try {
            n[r] = un(e[r], t);
          } catch (s) {
            delete n[r], n[r] = as(s);
          }
      }), o = Object.getPrototypeOf(o);
    return n;
  }
}
function cs(e) {
  return e.replace(/__(vite_ssr_import|vi_import)_\d+__\./g, "");
}
function Of(e, t) {
  if (!e || typeof e != "object")
    return { message: e };
  if (e.stack && (e.stackStr = String(e.stack)), e.name && (e.nameStr = String(e.name)), e.showDiff || e.showDiff === void 0 && e.expected !== void 0 && e.actual !== void 0) {
    const n = ko(e.actual, { forceWritable: !0 }), o = ko(e.expected, { forceWritable: !0 }), { replacedActual: r, replacedExpected: s } = Ta(n, o);
    e.diff = yn(s, r, { ...t, ...e.diffOptions });
  }
  typeof e.expected != "string" && (e.expected = Qe(e.expected, 10)), typeof e.actual != "string" && (e.actual = Qe(e.actual, 10));
  try {
    typeof e.message == "string" && (e.message = cs(e.message)), typeof e.cause == "object" && typeof e.cause.message == "string" && (e.cause.message = cs(e.cause.message));
  } catch {
  }
  try {
    return un(e);
  } catch (n) {
    return un(new Error(`Failed to fully serialize error: ${n == null ? void 0 : n.message}
Inner error message: ${e == null ? void 0 : e.message}`));
  }
}
function us(e) {
  return Gn(e) === "Object" && typeof e.asymmetricMatch == "function";
}
function ls(e, t) {
  const n = Gn(e), o = Gn(t);
  return n === o && (n === "Object" || n === "Array");
}
function Ta(e, t, n = /* @__PURE__ */ new WeakSet(), o = /* @__PURE__ */ new WeakSet()) {
  return ls(e, t) ? n.has(e) || o.has(t) ? { replacedActual: e, replacedExpected: t } : (n.add(e), o.add(t), Pi(t).forEach((r) => {
    const s = t[r], i = e[r];
    if (us(s))
      s.asymmetricMatch(i) && (e[r] = s);
    else if (us(i))
      i.asymmetricMatch(s) && (t[r] = i);
    else if (ls(i, s)) {
      const a = Ta(
        i,
        s,
        n,
        o
      );
      e[r] = a.replacedActual, t[r] = a.replacedExpected;
    }
  }), {
    replacedActual: e,
    replacedExpected: t
  }) : { replacedActual: e, replacedExpected: t };
}
function xa(e, t) {
  function n(r) {
    const s = function(...i) {
      return t.apply(r, i);
    };
    Object.assign(s, t), s.withContext = () => s.bind(r), s.setContext = (i, a) => {
      r[i] = a;
    }, s.mergeContext = (i) => {
      Object.assign(r, i);
    };
    for (const i of e)
      Object.defineProperty(s, i, {
        get() {
          return n({ ...r, [i]: !0 });
        }
      });
    return s;
  }
  const o = n({});
  return o.fn = t, o;
}
function $a(e) {
  const t = [e.name];
  let n = e;
  for (; n != null && n.suite || n != null && n.file; )
    n = n.suite || n.file, n != null && n.name && t.unshift(n.name);
  return t;
}
const Af = /^[A-Za-z]:\//;
function _f(e = "") {
  return e && e.replace(/\\/g, "/").replace(Af, (t) => t.toUpperCase());
}
const Mf = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function Pf() {
  return typeof process < "u" && typeof process.cwd == "function" ? process.cwd().replace(/\\/g, "/") : "/";
}
const If = function(...e) {
  e = e.map((o) => _f(o));
  let t = "", n = !1;
  for (let o = e.length - 1; o >= -1 && !n; o--) {
    const r = o >= 0 ? e[o] : Pf();
    !r || r.length === 0 || (t = `${r}/${t}`, n = fs(r));
  }
  return t = Cf(t, !n), n && !fs(t) ? `/${t}` : t.length > 0 ? t : ".";
};
function Cf(e, t) {
  let n = "", o = 0, r = -1, s = 0, i = null;
  for (let a = 0; a <= e.length; ++a) {
    if (a < e.length)
      i = e[a];
    else {
      if (i === "/")
        break;
      i = "/";
    }
    if (i === "/") {
      if (!(r === a - 1 || s === 1))
        if (s === 2) {
          if (n.length < 2 || o !== 2 || n[n.length - 1] !== "." || n[n.length - 2] !== ".") {
            if (n.length > 2) {
              const c = n.lastIndexOf("/");
              c === -1 ? (n = "", o = 0) : (n = n.slice(0, c), o = n.length - 1 - n.lastIndexOf("/")), r = a, s = 0;
              continue;
            } else if (n.length > 0) {
              n = "", o = 0, r = a, s = 0;
              continue;
            }
          }
          t && (n += n.length > 0 ? "/.." : "..", o = 2);
        } else
          n.length > 0 ? n += `/${e.slice(r + 1, a)}` : n = e.slice(r + 1, a), o = a - r - 1;
      r = a, s = 0;
    } else
      i === "." && s !== -1 ? ++s : s = -1;
  }
  return n;
}
const fs = function(e) {
  return Mf.test(e);
}, Nf = /* @__PURE__ */ new WeakMap(), Oa = /* @__PURE__ */ new WeakMap(), Aa = /* @__PURE__ */ new WeakMap();
function jf(e, t) {
  Nf.set(e, t);
}
function kf(e, t) {
  Oa.set(e, t);
}
function Rf(e) {
  return Oa.get(e);
}
function Ff(e, t) {
  Aa.set(e, t);
}
function Df(e) {
  return Aa.get(e);
}
class Bf extends Error {
  constructor(n, o) {
    super(n);
    se(this, "code", "VITEST_PENDING");
    se(this, "taskId");
    this.message = n, this.taskId = o.id;
  }
}
const ln = {
  tasks: [],
  currentSuite: null
};
function Lf(e) {
  var t;
  (t = ln.currentSuite) == null || t.tasks.push(e);
}
async function qf(e, t) {
  const n = ln.currentSuite;
  ln.currentSuite = e, await t(), ln.currentSuite = n;
}
function _a(e, t, n = !1) {
  if (t <= 0 || t === Number.POSITIVE_INFINITY)
    return e;
  const { setTimeout: o, clearTimeout: r } = nr();
  return (...s) => Promise.race([e(...s), new Promise((i, a) => {
    var c;
    const l = o(() => {
      r(l), a(new Error(Wf(n, t)));
    }, t);
    (c = l.unref) == null || c.call(l);
  })]);
}
function zf(e, t) {
  var n;
  const o = function() {
    throw new Error("done() callback is deprecated, use promise instead");
  };
  return o.task = e, o.skip = () => {
    throw e.pending = !0, new Bf("test is skipped; abort execution", e);
  }, o.onTestFailed = (r) => {
    e.onFailed || (e.onFailed = []), e.onFailed.push(r);
  }, o.onTestFinished = (r) => {
    e.onFinished || (e.onFinished = []), e.onFinished.push(r);
  }, ((n = t.extendTaskContext) == null ? void 0 : n.call(t, o)) || o;
}
function Wf(e, t) {
  return `${e ? "Hook" : "Test"} timed out in ${t}ms.
If this is a long-running ${e ? "hook" : "test"}, pass a timeout value as the last argument or configure it globally with "${e ? "hookTimeout" : "testTimeout"}".`;
}
function Vf(e, t = {}) {
  const n = ["auto"], o = Object.entries(e).map(([r, s]) => {
    const i = { value: s };
    return Array.isArray(s) && s.length >= 2 && io(s[1]) && Object.keys(s[1]).some((a) => n.includes(a)) && (Object.assign(i, s[1]), i.value = s[0]), i.prop = r, i.isFn = typeof i.value == "function", i;
  });
  return Array.isArray(t.fixtures) ? t.fixtures = t.fixtures.concat(o) : t.fixtures = o, o.forEach((r) => {
    if (r.isFn) {
      const s = Ia(r.value);
      s.length && (r.deps = t.fixtures.filter(({ prop: i }) => i !== r.prop && s.includes(i)));
    }
  }), t;
}
const Sr = /* @__PURE__ */ new Map(), Tr = /* @__PURE__ */ new Map();
function Ma(e, t) {
  return (n) => {
    const o = n || t;
    if (!o)
      return e({});
    const r = Rf(o);
    if (!(r != null && r.length))
      return e(o);
    const s = Ia(e), i = r.some(({ auto: p }) => p);
    if (!s.length && !i)
      return e(o);
    Sr.get(o) || Sr.set(o, /* @__PURE__ */ new Map());
    const a = Sr.get(o);
    Tr.has(o) || Tr.set(o, []);
    const c = Tr.get(o), l = r.filter(({ prop: p, auto: w }) => w || s.includes(p)), f = Pa(l);
    if (!f.length)
      return e(o);
    async function u() {
      for (const p of f) {
        if (a.has(p))
          continue;
        const w = p.isFn ? await Uf(p.value, o, c) : p.value;
        o[p.prop] = w, a.set(p, w), c.unshift(() => {
          a.delete(p);
        });
      }
    }
    return u().then(() => e(o));
  };
}
async function Uf(e, t, n) {
  const o = Ro();
  let r = !1;
  const s = e(t, async (i) => {
    r = !0, o.resolve(i);
    const a = Ro();
    n.push(async () => {
      a.resolve(), await s;
    }), await a;
  }).catch((i) => {
    if (!r) {
      o.reject(i);
      return;
    }
    throw i;
  });
  return o;
}
function Pa(e, t = /* @__PURE__ */ new Set(), n = []) {
  return e.forEach((o) => {
    if (!n.includes(o)) {
      if (!o.isFn || !o.deps) {
        n.push(o);
        return;
      }
      if (t.has(o))
        throw new Error(`Circular fixture dependency detected: ${o.prop} <- ${[...t].reverse().map((r) => r.prop).join(" <- ")}`);
      t.add(o), Pa(o.deps, t, n), n.push(o), t.clear();
    }
  }), n;
}
function Ia(e) {
  const t = e.toString().match(/[^(]*\(([^)]*)/);
  if (!t)
    return [];
  const n = ps(t[1]);
  if (!n.length)
    return [];
  const o = n[0];
  if (!(o.startsWith("{") && o.endsWith("}")))
    throw new Error(`The first argument inside a fixture must use object destructuring pattern, e.g. ({ test } => {}). Instead, received "${o}".`);
  const r = o.slice(1, -1).replace(/\s/g, ""), s = ps(r).map((a) => a.replace(/\:.*|\=.*/g, "")), i = s.at(-1);
  if (i && i.startsWith("..."))
    throw new Error(`Rest parameters are not supported in fixtures, received "${i}".`);
  return s;
}
function ps(e) {
  const t = [], n = [];
  let o = 0;
  for (let s = 0; s < e.length; s++)
    if (e[s] === "{" || e[s] === "[")
      n.push(e[s] === "{" ? "}" : "]");
    else if (e[s] === n[n.length - 1])
      n.pop();
    else if (!n.length && e[s] === ",") {
      const i = e.substring(o, s).trim();
      i && t.push(i), o = s + 1;
    }
  const r = e.substring(o).trim();
  return r && t.push(r), t;
}
let Kf;
function Gf() {
  return Kf;
}
const sn = Zf(), Jf = yo(
  function(e, t, n) {
    rr().test.fn.call(this, Kt(e), t, n);
  }
), Yt = sn, Se = Jf;
let an, Yf;
function Hf() {
  return an;
}
function rr() {
  return ln.currentSuite || Yf;
}
function Xf() {
  return {
    beforeAll: [],
    afterAll: [],
    beforeEach: [],
    afterEach: []
  };
}
function Jn(e, t) {
  let n = {}, o = () => {
  };
  if (typeof t == "object") {
    if (typeof e == "object")
      throw new TypeError("Cannot use two objects as arguments. Please provide options and a function callback in that order.");
    n = t;
  } else
    typeof t == "number" ? n = { timeout: t } : typeof e == "object" && (n = e);
  if (typeof e == "function") {
    if (typeof t == "function")
      throw new TypeError("Cannot use two functions as arguments. Please use the second argument for options.");
    o = e;
  } else
    typeof t == "function" && (o = t);
  return {
    options: n,
    handler: o
  };
}
function Qf(e, t = () => {
}, n, o, r, s) {
  const i = [], a = [];
  let c;
  w();
  const l = function(h = "", A = {}) {
    const M = {
      id: "",
      name: h,
      suite: void 0,
      each: A.each,
      fails: A.fails,
      context: void 0,
      type: "custom",
      retry: A.retry ?? an.config.retry,
      repeats: A.repeats,
      mode: A.only ? "only" : A.skip ? "skip" : A.todo ? "todo" : "run",
      meta: A.meta ?? /* @__PURE__ */ Object.create(null)
    }, F = A.handler;
    (A.concurrent || !A.sequential && an.config.sequence.concurrent) && (M.concurrent = !0), o && (M.shuffle = !0);
    const k = zf(M, an);
    return Object.defineProperty(M, "context", {
      value: k,
      enumerable: !1
    }), kf(k, A.fixtures), F && jf(M, _a(
      Ma(F, k),
      (A == null ? void 0 : A.timeout) ?? an.config.testTimeout
    )), i.push(M), M;
  }, f = yo(function(h, A, M) {
    let { options: F, handler: k } = Jn(
      A,
      M
    );
    typeof s == "object" && (F = Object.assign({}, s, F)), F.concurrent = this.concurrent || !this.sequential && (F == null ? void 0 : F.concurrent), F.sequential = this.sequential || !this.concurrent && (F == null ? void 0 : F.sequential);
    const N = l(
      Kt(h),
      { ...this, ...F, handler: k }
    );
    N.type = "test";
  }), u = {
    type: "collector",
    name: e,
    mode: n,
    options: s,
    test: f,
    tasks: i,
    collect: v,
    task: l,
    clear: b,
    on: p
  };
  function p(h, ...A) {
    Df(c)[h].push(...A);
  }
  function w() {
    typeof s == "number" && (s = { timeout: s }), c = {
      id: "",
      type: "suite",
      name: e,
      mode: n,
      each: r,
      shuffle: o,
      tasks: [],
      meta: /* @__PURE__ */ Object.create(null),
      projectName: ""
    }, Ff(c, Xf());
  }
  function b() {
    i.length = 0, a.length = 0, w();
  }
  async function v(h) {
    a.length = 0, t && await qf(u, () => t(f));
    const A = [];
    for (const M of [...a, ...i])
      A.push(M.type === "collector" ? await M.collect(h) : M);
    return c.file = h, c.tasks = A, A.forEach((M) => {
      M.suite = c, h && (M.file = h);
    }), c;
  }
  return Lf(u), u;
}
function Zf() {
  function e(t, n, o = {}) {
    const r = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run", s = rr();
    let { options: i, handler: a } = Jn(
      n,
      o
    );
    return s != null && s.options && (i = { ...s.options, ...i }), i.concurrent = this.concurrent || !this.sequential && (i == null ? void 0 : i.concurrent), i.sequential = this.sequential || !this.concurrent && (i == null ? void 0 : i.sequential), Qf(Kt(t), a, r, this.shuffle, this.each, i);
  }
  return e.each = function(t, ...n) {
    const o = this.withContext();
    return this.setContext("each", !0), Array.isArray(t) && n.length && (t = Ca(t, n)), (r, s, i) => {
      const a = Kt(r), c = t.every(Array.isArray), { options: l, handler: f } = Jn(
        s,
        i
      );
      t.forEach((u, p) => {
        const w = Array.isArray(u) ? u : [u];
        c ? o(Yn(a, w, p), l, () => f(...w)) : o(Yn(a, w, p), l, () => f(u));
      }), this.setContext("each", void 0);
    };
  }, e.skipIf = (t) => t ? sn.skip : sn, e.runIf = (t) => t ? sn : sn.skip, xa(
    ["concurrent", "sequential", "shuffle", "skip", "only", "todo"],
    e
  );
}
function ep(e, t) {
  const n = e;
  n.each = function(r, ...s) {
    const i = this.withContext();
    return this.setContext("each", !0), Array.isArray(r) && s.length && (r = Ca(r, s)), (a, c, l) => {
      const f = Kt(a), u = r.every(Array.isArray), { options: p, handler: w } = Jn(
        c,
        l
      );
      r.forEach((b, v) => {
        const h = Array.isArray(b) ? b : [b];
        u ? i(Yn(f, h, v), p, () => w(...h)) : i(Yn(f, h, v), p, () => w(b));
      }), this.setContext("each", void 0);
    };
  }, n.skipIf = function(r) {
    return r ? this.skip : this;
  }, n.runIf = function(r) {
    return r ? this : this.skip;
  }, n.extend = function(r) {
    const s = Vf(r, t);
    return yo(function(a, c, l) {
      rr().test.fn.call(this, Kt(a), c, l);
    }, s);
  };
  const o = xa(
    ["concurrent", "sequential", "skip", "only", "todo", "fails"],
    n
  );
  return t && o.mergeContext(t), o;
}
function yo(e, t) {
  return ep(e, t);
}
function Kt(e) {
  return typeof e == "string" ? e : e instanceof Function ? e.name || "<anonymous>" : String(e);
}
function Yn(e, t, n) {
  e.includes("%#") && (e = e.replace(/%%/g, "__vitest_escaped_%__").replace(/%#/g, `${n}`).replace(/__vitest_escaped_%__/g, "%%"));
  const o = e.split("%").length - 1;
  let r = la(e, ...t.slice(0, o));
  return io(t[0]) && (r = r.replace(
    /\$([$\w_.]+)/g,
    // https://github.com/chaijs/chai/pull/1490
    (s, i) => {
      var a, c;
      return Jl(hu(t[0], i), { truncate: (c = (a = void 0) == null ? void 0 : a.chaiConfig) == null ? void 0 : c.truncateThreshold });
    }
  )), r;
}
function Ca(e, t) {
  const n = e.join("").trim().replace(/ /g, "").split(`
`).map((r) => r.split("|"))[0], o = [];
  for (let r = 0; r < Math.floor(t.length / n.length); r++) {
    const s = {};
    for (let i = 0; i < n.length; i++)
      s[n[i]] = t[r * n.length + i];
    o.push(s);
  }
  return o;
}
function tp() {
  return Hf().config.hookTimeout;
}
function go(e, t) {
  return rr().on("afterEach", _a(Ma(e), t ?? tp(), !0));
}
function bo() {
  const e = globalThis.__vitest_worker__;
  if (!e) {
    const t = `Vitest failed to access its internal state.

One of the following is possible:
- "vitest" is imported directly without running "vitest" command
- "vitest" is imported inside "globalSetup" (to fix this, use "setupFiles" instead, because "globalSetup" runs in a different context)
- Otherwise, it might be a Vitest bug. Please report it to https://github.com/vitest-dev/vitest/issues
`;
    throw new Error(t);
  }
  return e;
}
function np() {
  const e = bo();
  return e == null ? void 0 : e.environment.name;
}
var xr = {};
/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */
/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */
function Na() {
  var e = [].slice.call(arguments);
  function t(n, o) {
    Object.keys(o).forEach(function(r) {
      ~e.indexOf(r) || (n[r] = o[r]);
    });
  }
  return function() {
    for (var o = [].slice.call(arguments), r = 0, s = {}; r < o.length; r++)
      t(s, o[r]);
    return s;
  };
}
/*!
 * Primary Exports
 */
var ja = _t;
function _t(e, t, n) {
  var o = Na("name", "message", "stack", "constructor", "toJSON"), r = o(t || {});
  this.message = e || "Unspecified AssertionError", this.showDiff = !1;
  for (var s in r)
    this[s] = r[s];
  if (n = n || _t, Error.captureStackTrace)
    Error.captureStackTrace(this, n);
  else
    try {
      throw new Error();
    } catch (i) {
      this.stack = i.stack;
    }
}
/*!
 * Inherit from Error.prototype
 */
_t.prototype = Object.create(Error.prototype);
/*!
 * Statically set name
 */
_t.prototype.name = "AssertionError";
/*!
 * Ensure correct constructor
 */
_t.prototype.constructor = _t;
_t.prototype.toJSON = function(e) {
  var t = Na("constructor", "toJSON", "stack"), n = t({ name: this.name }, this);
  return e !== !1 && this.stack && (n.stack = this.stack), n;
};
var fe = {};
function ka(e, t) {
  return typeof e > "u" || e === null ? !1 : t in Object(e);
}
function Ra(e) {
  var t = e.replace(/([^\\])\[/g, "$1.["), n = t.match(/(\\\.|[^.]+?)+/g);
  return n.map(function(r) {
    if (r === "constructor" || r === "__proto__" || r === "prototype")
      return {};
    var s = /^\[(\d+)\]$/, i = s.exec(r), a = null;
    return i ? a = { i: parseFloat(i[1]) } : a = { p: r.replace(/\\([.[\]])/g, "$1") }, a;
  });
}
function hs(e, t, n) {
  var o = e, r = null;
  n = typeof n > "u" ? t.length : n;
  for (var s = 0; s < n; s++) {
    var i = t[s];
    o && (typeof i.p > "u" ? o = o[i.i] : o = o[i.p], s === n - 1 && (r = o));
  }
  return r;
}
function rp(e, t, n) {
  for (var o = e, r = n.length, s = null, i = 0; i < r; i++) {
    var a = null, c = null;
    if (s = n[i], i === r - 1)
      a = typeof s.p > "u" ? s.i : s.p, o[a] = t;
    else if (typeof s.p < "u" && o[s.p])
      o = o[s.p];
    else if (typeof s.i < "u" && o[s.i])
      o = o[s.i];
    else {
      var l = n[i + 1];
      a = typeof s.p > "u" ? s.i : s.p, c = typeof l.p > "u" ? [] : {}, o[a] = c, o = o[a];
    }
  }
}
function Fa(e, t) {
  var n = Ra(t), o = n[n.length - 1], r = {
    parent: n.length > 1 ? hs(e, n, n.length - 1) : e,
    name: o.p || o.i,
    value: hs(e, n)
  };
  return r.exists = ka(r.parent, r.name), r;
}
function op(e, t) {
  var n = Fa(e, t);
  return n.value;
}
function sp(e, t, n) {
  var o = Ra(t);
  return rp(e, n, o), e;
}
var ip = {
  hasProperty: ka,
  getPathInfo: Fa,
  getPathValue: op,
  setPathValue: sp
};
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Ye = function(t, n, o) {
  var r = t.__flags || (t.__flags = /* @__PURE__ */ Object.create(null));
  if (arguments.length === 3)
    r[n] = o;
  else
    return r[n];
};
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var ap = Ye, cp = function(t, n) {
  var o = ap(t, "negate"), r = n[0];
  return o ? !r : r;
}, Da = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(Wr, function() {
    var n = typeof Promise == "function", o = typeof self == "object" ? self : Wr, r = typeof Symbol < "u", s = typeof Map < "u", i = typeof Set < "u", a = typeof WeakMap < "u", c = typeof WeakSet < "u", l = typeof DataView < "u", f = r && typeof Symbol.iterator < "u", u = r && typeof Symbol.toStringTag < "u", p = i && typeof Set.prototype.entries == "function", w = s && typeof Map.prototype.entries == "function", b = p && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries()), v = w && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries()), h = f && typeof Array.prototype[Symbol.iterator] == "function", A = h && Object.getPrototypeOf([][Symbol.iterator]()), M = f && typeof String.prototype[Symbol.iterator] == "function", F = M && Object.getPrototypeOf(""[Symbol.iterator]()), k = 8, N = -1;
    function U(B) {
      var G = typeof B;
      if (G !== "object")
        return G;
      if (B === null)
        return "null";
      if (B === o)
        return "global";
      if (Array.isArray(B) && (u === !1 || !(Symbol.toStringTag in B)))
        return "Array";
      if (typeof window == "object" && window !== null) {
        if (typeof window.location == "object" && B === window.location)
          return "Location";
        if (typeof window.document == "object" && B === window.document)
          return "Document";
        if (typeof window.navigator == "object") {
          if (typeof window.navigator.mimeTypes == "object" && B === window.navigator.mimeTypes)
            return "MimeTypeArray";
          if (typeof window.navigator.plugins == "object" && B === window.navigator.plugins)
            return "PluginArray";
        }
        if ((typeof window.HTMLElement == "function" || typeof window.HTMLElement == "object") && B instanceof window.HTMLElement) {
          if (B.tagName === "BLOCKQUOTE")
            return "HTMLQuoteElement";
          if (B.tagName === "TD")
            return "HTMLTableDataCellElement";
          if (B.tagName === "TH")
            return "HTMLTableHeaderCellElement";
        }
      }
      var ae = u && B[Symbol.toStringTag];
      if (typeof ae == "string")
        return ae;
      var V = Object.getPrototypeOf(B);
      return V === RegExp.prototype ? "RegExp" : V === Date.prototype ? "Date" : n && V === Promise.prototype ? "Promise" : i && V === Set.prototype ? "Set" : s && V === Map.prototype ? "Map" : c && V === WeakSet.prototype ? "WeakSet" : a && V === WeakMap.prototype ? "WeakMap" : l && V === DataView.prototype ? "DataView" : s && V === v ? "Map Iterator" : i && V === b ? "Set Iterator" : h && V === A ? "Array Iterator" : M && V === F ? "String Iterator" : V === null ? "Object" : Object.prototype.toString.call(B).slice(k, N);
    }
    return U;
  });
})(Da);
var or = Da.exports;
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var up = ja, $r = Ye, lp = or, fp = function(t, n) {
  var o = $r(t, "message"), r = $r(t, "ssfi");
  o = o ? o + ": " : "", t = $r(t, "object"), n = n.map(function(a) {
    return a.toLowerCase();
  }), n.sort();
  var s = n.map(function(a, c) {
    var l = ~["a", "e", "i", "o", "u"].indexOf(a.charAt(0)) ? "an" : "a", f = n.length > 1 && c === n.length - 1 ? "or " : "";
    return f + l + " " + a;
  }).join(", "), i = lp(t).toLowerCase();
  if (!n.some(function(a) {
    return i === a;
  }))
    throw new up(
      o + "object tested must be " + s + ", but " + i + " given",
      void 0,
      r
    );
};
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Ba = function(t, n) {
  return n.length > 4 ? n[4] : t._obj;
}, pp = Function.prototype.toString, hp = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/, mp = 512;
function dp(e) {
  if (typeof e != "function")
    return null;
  var t = "";
  if (typeof Function.prototype.name > "u" && typeof e.name > "u") {
    var n = pp.call(e);
    if (n.indexOf("(") > mp)
      return t;
    var o = n.match(hp);
    o && (t = o[1]);
  } else
    t = e.name;
  return t;
}
var La = dp, Ht = {
  /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {Boolean}
   * @api public
   */
  includeStack: !1,
  /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {Boolean}
   * @api public
   */
  showDiff: !0,
  /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded, for
   * example for large data structures, the value is replaced with something
   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   * This is especially userful when doing assertions on arrays: having this
   * set to a reasonable large value makes the failure messages readily
   * inspectable.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {Number}
   * @api public
   */
  truncateThreshold: 40,
  /**
   * ### config.useProxy
   *
   * User configurable property, defines if chai will use a Proxy to throw
   * an error when a non-existent property is read, which protects users
   * from typos when using property-based assertions.
   *
   * Set it to false if you want to disable this feature.
   *
   *     chai.config.useProxy = false;  // disable use of Proxy
   *
   * This feature is automatically disabled regardless of this config value
   * in environments that don't support proxies.
   *
   * @param {Boolean}
   * @api public
   */
  useProxy: !0,
  /**
   * ### config.proxyExcludedKeys
   *
   * User configurable property, defines which properties should be ignored
   * instead of throwing an error if they do not exist on the assertion.
   * This is only applied if the environment Chai is running in supports proxies and
   * if the `useProxy` configuration setting is enabled.
   * By default, `then` and `inspect` will not throw an error if they do not exist on the
   * assertion object because the `.inspect` property is read by `util.inspect` (for example, when
   * using `console.log` on the assertion object) and `.then` is necessary for promise type-checking.
   *
   *     // By default these keys will not throw an error if they do not exist on the assertion object
   *     chai.config.proxyExcludedKeys = ['then', 'inspect'];
   *
   * @param {Array}
   * @api public
   */
  proxyExcludedKeys: ["then", "catch", "inspect", "toJSON"],
  /**
   * ### config.deepEqual
   *
   * User configurable property, defines which a custom function to use for deepEqual
   * comparisons.
   * By default, the function used is the one from the `deep-eql` package without custom comparator.
   *
   *     // use a custom comparator
   *     chai.config.deepEqual = (expected, actual) => {
   *        return chai.util.eql(expected, actual, {
   *           comparator: (expected, actual) => {
   *              // for non number comparison, use the default behavior
   *              if(typeof expected !== 'number') return null;
   *              // allow a difference of 10 between compared numbers
   *              return typeof actual === 'number' && Math.abs(actual - expected) < 10
   *           }
   *        })
   *     };
   *
   * @param {Function}
   * @api public
   */
  deepEqual: null
}, yp = ua, ms = Ht, wo = gp;
function gp(e, t, n, o) {
  var r = {
    colors: o,
    depth: typeof n > "u" ? 2 : n,
    showHidden: t,
    truncate: ms.truncateThreshold ? ms.truncateThreshold : 1 / 0
  };
  return yp.inspect(e, r);
}
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var bp = wo, ds = Ht, qa = function(t) {
  var n = bp(t), o = Object.prototype.toString.call(t);
  if (ds.truncateThreshold && n.length >= ds.truncateThreshold) {
    if (o === "[object Function]")
      return !t.name || t.name === "" ? "[Function]" : "[Function: " + t.name + "]";
    if (o === "[object Array]")
      return "[ Array(" + t.length + ") ]";
    if (o === "[object Object]") {
      var r = Object.keys(t), s = r.length > 2 ? r.splice(0, 2).join(", ") + ", ..." : r.join(", ");
      return "{ Object (" + s + ") }";
    } else
      return n;
  } else
    return n;
};
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var Or = Ye, wp = Ba, Ar = qa, vp = function(t, n) {
  var o = Or(t, "negate"), r = Or(t, "object"), s = n[3], i = wp(t, n), a = o ? n[2] : n[1], c = Or(t, "message");
  return typeof a == "function" && (a = a()), a = a || "", a = a.replace(/#\{this\}/g, function() {
    return Ar(r);
  }).replace(/#\{act\}/g, function() {
    return Ar(i);
  }).replace(/#\{exp\}/g, function() {
    return Ar(s);
  }), c ? c + ": " + a : a;
};
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Pt = function(t, n, o) {
  var r = t.__flags || (t.__flags = /* @__PURE__ */ Object.create(null));
  n.__flags || (n.__flags = /* @__PURE__ */ Object.create(null)), o = arguments.length === 3 ? o : !0;
  for (var s in r)
    (o || s !== "object" && s !== "ssfi" && s !== "lockSsfi" && s != "message") && (n.__flags[s] = r[s]);
}, vo = { exports: {} };
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var ys = or;
function za() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
za.prototype = {
  get: function(t) {
    return t[this._key];
  },
  set: function(t, n) {
    Object.isExtensible(t) && Object.defineProperty(t, this._key, {
      value: n,
      configurable: !0
    });
  }
};
var Eo = typeof WeakMap == "function" ? WeakMap : za;
/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/
function gs(e, t, n) {
  if (!n || Gt(e) || Gt(t))
    return null;
  var o = n.get(e);
  if (o) {
    var r = o.get(t);
    if (typeof r == "boolean")
      return r;
  }
  return null;
}
/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/
function kn(e, t, n, o) {
  if (!(!n || Gt(e) || Gt(t))) {
    var r = n.get(e);
    r ? r.set(t, o) : (r = new Eo(), r.set(t, o), n.set(e, r));
  }
}
/*!
 * Primary Export
 */
vo.exports = sr;
vo.exports.MemoizeMap = Eo;
function sr(e, t, n) {
  if (n && n.comparator)
    return bs(e, t, n);
  var o = Wa(e, t);
  return o !== null ? o : bs(e, t, n);
}
function Wa(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && // eslint-disable-line no-self-compare
  t !== t ? !0 : Gt(e) || Gt(t) ? !1 : null;
}
/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/
function bs(e, t, n) {
  n = n || {}, n.memoize = n.memoize === !1 ? !1 : n.memoize || new Eo();
  var o = n && n.comparator, r = gs(e, t, n.memoize);
  if (r !== null)
    return r;
  var s = gs(t, e, n.memoize);
  if (s !== null)
    return s;
  if (o) {
    var i = o(e, t);
    if (i === !1 || i === !0)
      return kn(e, t, n.memoize, i), i;
    var a = Wa(e, t);
    if (a !== null)
      return a;
  }
  var c = ys(e);
  if (c !== ys(t))
    return kn(e, t, n.memoize, !1), !1;
  kn(e, t, n.memoize, !0);
  var l = Ep(e, t, c, n);
  return kn(e, t, n.memoize, l), l;
}
function Ep(e, t, n, o) {
  switch (n) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return sr(e.valueOf(), t.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return e === t;
    case "Error":
      return Va(e, t, ["name", "message", "code"], o);
    case "Arguments":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "Array":
      return At(e, t, o);
    case "RegExp":
      return Sp(e, t);
    case "Generator":
      return Tp(e, t, o);
    case "DataView":
      return At(new Uint8Array(e.buffer), new Uint8Array(t.buffer), o);
    case "ArrayBuffer":
      return At(new Uint8Array(e), new Uint8Array(t), o);
    case "Set":
      return ws(e, t, o);
    case "Map":
      return ws(e, t, o);
    case "Temporal.PlainDate":
    case "Temporal.PlainTime":
    case "Temporal.PlainDateTime":
    case "Temporal.Instant":
    case "Temporal.ZonedDateTime":
    case "Temporal.PlainYearMonth":
    case "Temporal.PlainMonthDay":
      return e.equals(t);
    case "Temporal.Duration":
      return e.total("nanoseconds") === t.total("nanoseconds");
    case "Temporal.TimeZone":
    case "Temporal.Calendar":
      return e.toString() === t.toString();
    default:
      return $p(e, t, o);
  }
}
/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */
function Sp(e, t) {
  return e.toString() === t.toString();
}
/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function ws(e, t, n) {
  if (e.size !== t.size)
    return !1;
  if (e.size === 0)
    return !0;
  var o = [], r = [];
  return e.forEach(function(i, a) {
    o.push([i, a]);
  }), t.forEach(function(i, a) {
    r.push([i, a]);
  }), At(o.sort(), r.sort(), n);
}
/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function At(e, t, n) {
  var o = e.length;
  if (o !== t.length)
    return !1;
  if (o === 0)
    return !0;
  for (var r = -1; ++r < o; )
    if (sr(e[r], t[r], n) === !1)
      return !1;
  return !0;
}
/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function Tp(e, t, n) {
  return At(Xr(e), Xr(t), n);
}
/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */
function xp(e) {
  return typeof Symbol < "u" && typeof e == "object" && typeof Symbol.iterator < "u" && typeof e[Symbol.iterator] == "function";
}
/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
function vs(e) {
  if (xp(e))
    try {
      return Xr(e[Symbol.iterator]());
    } catch {
      return [];
    }
  return [];
}
/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */
function Xr(e) {
  for (var t = e.next(), n = [t.value]; t.done === !1; )
    t = e.next(), n.push(t.value);
  return n;
}
/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */
function Es(e) {
  var t = [];
  for (var n in e)
    t.push(n);
  return t;
}
function Ss(e) {
  for (var t = [], n = Object.getOwnPropertySymbols(e), o = 0; o < n.length; o += 1) {
    var r = n[o];
    Object.getOwnPropertyDescriptor(e, r).enumerable && t.push(r);
  }
  return t;
}
/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function Va(e, t, n, o) {
  var r = n.length;
  if (r === 0)
    return !0;
  for (var s = 0; s < r; s += 1)
    if (sr(e[n[s]], t[n[s]], o) === !1)
      return !1;
  return !0;
}
/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function $p(e, t, n) {
  var o = Es(e), r = Es(t), s = Ss(e), i = Ss(t);
  if (o = o.concat(s), r = r.concat(i), o.length && o.length === r.length)
    return At(Ts(o).sort(), Ts(r).sort()) === !1 ? !1 : Va(e, t, o, n);
  var a = vs(e), c = vs(t);
  return a.length && a.length === c.length ? (a.sort(), c.sort(), At(a, c, n)) : o.length === 0 && a.length === 0 && r.length === 0 && c.length === 0;
}
/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */
function Gt(e) {
  return e === null || typeof e != "object";
}
function Ts(e) {
  return e.map(function(n) {
    return typeof n == "symbol" ? n.toString() : n;
  });
}
var Op = vo.exports, Ap = Ht;
/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var ir = function() {
  return Ap.useProxy && typeof Proxy < "u" && typeof Reflect < "u";
};
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var _r, xs;
function _p() {
  if (xs)
    return _r;
  xs = 1;
  var e = It(), t = Ye, n = ir, o = Pt;
  return _r = function(s, i, a) {
    a = a === void 0 ? function() {
    } : a, Object.defineProperty(
      s,
      i,
      {
        get: function c() {
          !n() && !t(this, "lockSsfi") && t(this, "ssfi", c);
          var l = a.call(this);
          if (l !== void 0)
            return l;
          var f = new e.Assertion();
          return o(this, f), f;
        },
        configurable: !0
      }
    );
  }, _r;
}
var Mp = Object.getOwnPropertyDescriptor(function() {
}, "length");
/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var ar = function(t, n, o) {
  return Mp.configurable && Object.defineProperty(t, "length", {
    get: function() {
      throw Error(o ? "Invalid Chai property: " + n + '.length. Due to a compatibility issue, "length" cannot directly follow "' + n + '". Use "' + n + '.lengthOf" instead.' : "Invalid Chai property: " + n + '.length. See docs for proper usage of "' + n + '".');
    }
  }), t;
};
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Pp = function(t) {
  var n = Object.getOwnPropertyNames(t);
  function o(s) {
    n.indexOf(s) === -1 && n.push(s);
  }
  for (var r = Object.getPrototypeOf(t); r !== null; )
    Object.getOwnPropertyNames(r).forEach(o), r = Object.getPrototypeOf(r);
  return n;
}, Ip = Ht, $s = Ye, Cp = Pp, Np = ir;
/*!
 * Chai - proxify utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Os = ["__flags", "__methods", "_obj", "assert"], cr = function(t, n) {
  return Np() ? new Proxy(t, {
    get: function o(r, s) {
      if (typeof s == "string" && Ip.proxyExcludedKeys.indexOf(s) === -1 && !Reflect.has(r, s)) {
        if (n)
          throw Error("Invalid Chai property: " + n + "." + s + '. See docs for proper usage of "' + n + '".');
        var i = null, a = 4;
        throw Cp(r).forEach(function(c) {
          if (!Object.prototype.hasOwnProperty(c) && Os.indexOf(c) === -1) {
            var l = jp(
              s,
              c,
              a
            );
            l < a && (i = c, a = l);
          }
        }), Error(i !== null ? "Invalid Chai property: " + s + '. Did you mean "' + i + '"?' : "Invalid Chai property: " + s);
      }
      return Os.indexOf(s) === -1 && !$s(r, "lockSsfi") && $s(r, "ssfi", o), Reflect.get(r, s);
    }
  }) : t;
};
function jp(e, t, n) {
  if (Math.abs(e.length - t.length) >= n)
    return n;
  for (var o = [], r = 0; r <= e.length; r++)
    o[r] = Array(t.length + 1).fill(0), o[r][0] = r;
  for (var s = 0; s < t.length; s++)
    o[0][s] = s;
  for (var r = 1; r <= e.length; r++)
    for (var i = e.charCodeAt(r - 1), s = 1; s <= t.length; s++) {
      if (Math.abs(r - s) >= n) {
        o[r][s] = n;
        continue;
      }
      o[r][s] = Math.min(
        o[r - 1][s] + 1,
        o[r][s - 1] + 1,
        o[r - 1][s - 1] + (i === t.charCodeAt(s - 1) ? 0 : 1)
      );
    }
  return o[e.length][t.length];
}
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Mr, As;
function kp() {
  if (As)
    return Mr;
  As = 1;
  var e = ar, t = It(), n = Ye, o = cr, r = Pt;
  return Mr = function(i, a, c) {
    var l = function() {
      n(this, "lockSsfi") || n(this, "ssfi", l);
      var f = c.apply(this, arguments);
      if (f !== void 0)
        return f;
      var u = new t.Assertion();
      return r(this, u), u;
    };
    e(l, a, !1), i[a] = o(l, a);
  }, Mr;
}
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Pr, _s;
function Rp() {
  if (_s)
    return Pr;
  _s = 1;
  var e = It(), t = Ye, n = ir, o = Pt;
  return Pr = function(s, i, a) {
    var c = Object.getOwnPropertyDescriptor(s, i), l = function() {
    };
    c && typeof c.get == "function" && (l = c.get), Object.defineProperty(
      s,
      i,
      {
        get: function f() {
          !n() && !t(this, "lockSsfi") && t(this, "ssfi", f);
          var u = t(this, "lockSsfi");
          t(this, "lockSsfi", !0);
          var p = a(l).call(this);
          if (t(this, "lockSsfi", u), p !== void 0)
            return p;
          var w = new e.Assertion();
          return o(this, w), w;
        },
        configurable: !0
      }
    );
  }, Pr;
}
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Ir, Ms;
function Fp() {
  if (Ms)
    return Ir;
  Ms = 1;
  var e = ar, t = It(), n = Ye, o = cr, r = Pt;
  return Ir = function(i, a, c) {
    var l = i[a], f = function() {
      throw new Error(a + " is not a function");
    };
    l && typeof l == "function" && (f = l);
    var u = function() {
      n(this, "lockSsfi") || n(this, "ssfi", u);
      var p = n(this, "lockSsfi");
      n(this, "lockSsfi", !0);
      var w = c(f).apply(this, arguments);
      if (n(this, "lockSsfi", p), w !== void 0)
        return w;
      var b = new t.Assertion();
      return r(this, b), b;
    };
    e(u, a, !1), i[a] = o(u, a);
  }, Ir;
}
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Cr, Ps;
function Dp() {
  if (Ps)
    return Cr;
  Ps = 1;
  /*!
   * Module dependencies
   */
  var e = ar, t = It(), n = Ye, o = cr, r = Pt;
  /*!
   * Module variables
   */
  var s = typeof Object.setPrototypeOf == "function", i = function() {
  }, a = Object.getOwnPropertyNames(i).filter(function(f) {
    var u = Object.getOwnPropertyDescriptor(i, f);
    return typeof u != "object" ? !0 : !u.configurable;
  }), c = Function.prototype.call, l = Function.prototype.apply;
  return Cr = function(u, p, w, b) {
    typeof b != "function" && (b = function() {
    });
    var v = {
      method: w,
      chainingBehavior: b
    };
    u.__methods || (u.__methods = {}), u.__methods[p] = v, Object.defineProperty(
      u,
      p,
      {
        get: function() {
          v.chainingBehavior.call(this);
          var A = function() {
            n(this, "lockSsfi") || n(this, "ssfi", A);
            var k = v.method.apply(this, arguments);
            if (k !== void 0)
              return k;
            var N = new t.Assertion();
            return r(this, N), N;
          };
          if (e(A, p, !0), s) {
            var M = Object.create(this);
            M.call = c, M.apply = l, Object.setPrototypeOf(A, M);
          } else {
            var F = Object.getOwnPropertyNames(u);
            F.forEach(function(k) {
              if (a.indexOf(k) === -1) {
                var N = Object.getOwnPropertyDescriptor(u, k);
                Object.defineProperty(A, k, N);
              }
            });
          }
          return r(this, A), o(A);
        },
        configurable: !0
      }
    );
  }, Cr;
}
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Nr, Is;
function Bp() {
  if (Is)
    return Nr;
  Is = 1;
  var e = It(), t = Pt;
  return Nr = function(o, r, s, i) {
    var a = o.__methods[r], c = a.chainingBehavior;
    a.chainingBehavior = function() {
      var u = i(c).call(this);
      if (u !== void 0)
        return u;
      var p = new e.Assertion();
      return t(this, p), p;
    };
    var l = a.method;
    a.method = function() {
      var u = s(l).apply(this, arguments);
      if (u !== void 0)
        return u;
      var p = new e.Assertion();
      return t(this, p), p;
    };
  }, Nr;
}
/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var Cs = wo, Lp = function(t, n) {
  return Cs(t) < Cs(n) ? -1 : 1;
};
/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Ua = function(t) {
  return typeof Object.getOwnPropertySymbols != "function" ? [] : Object.getOwnPropertySymbols(t).filter(function(n) {
    return Object.getOwnPropertyDescriptor(t, n).enumerable;
  });
};
/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var qp = Ua, zp = function(t) {
  return Object.keys(t).concat(qp(t));
}, jr = La;
function Wp(e, t) {
  return t instanceof Error && e === t;
}
function Vp(e, t) {
  return t instanceof Error ? e.constructor === t.constructor || e instanceof t.constructor : t.prototype instanceof Error || t === Error ? e.constructor === t || e instanceof t : !1;
}
function Up(e, t) {
  var n = typeof e == "string" ? e : e.message;
  return t instanceof RegExp ? t.test(n) : typeof t == "string" ? n.indexOf(t) !== -1 : !1;
}
function Kp(e) {
  var t = e;
  if (e instanceof Error)
    t = jr(e.constructor);
  else if (typeof e == "function" && (t = jr(e), t === "")) {
    var n = jr(new e());
    t = n || t;
  }
  return t;
}
function Gp(e) {
  var t = "";
  return e && e.message ? t = e.message : typeof e == "string" && (t = e), t;
}
var Jp = {
  compatibleInstance: Wp,
  compatibleConstructor: Vp,
  compatibleMessage: Up,
  getMessage: Gp,
  getConstructorName: Kp
};
/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
function Yp(e) {
  return e !== e;
}
var Hp = Number.isNaN || Yp, Xp = or, Ns = Ye;
function Qp(e) {
  var t = Xp(e), n = ["Array", "Object", "function"];
  return n.indexOf(t) !== -1;
}
var Zp = function(t, n) {
  var o = Ns(t, "operator"), r = Ns(t, "negate"), s = n[3], i = r ? n[2] : n[1];
  if (o)
    return o;
  if (typeof i == "function" && (i = i()), i = i || "", !!i && !/\shave\s/.test(i)) {
    var a = Qp(s);
    return /\snot\s/.test(i) ? a ? "notDeepStrictEqual" : "notStrictEqual" : a ? "deepStrictEqual" : "strictEqual";
  }
};
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var js;
function eh() {
  if (js)
    return fe;
  js = 1;
  /*!
   * Dependencies that are used for multiple exports are required here only once
   */
  var e = ip;
  /*!
   * test utility
   */
  fe.test = cp;
  /*!
   * type utility
   */
  fe.type = or;
  /*!
   * expectTypes utility
   */
  fe.expectTypes = fp;
  /*!
   * message utility
   */
  fe.getMessage = vp;
  /*!
   * actual utility
   */
  fe.getActual = Ba;
  /*!
   * Inspect util
   */
  fe.inspect = wo;
  /*!
   * Object Display util
   */
  fe.objDisplay = qa;
  /*!
   * Flag utility
   */
  fe.flag = Ye;
  /*!
   * Flag transferring utility
   */
  fe.transferFlags = Pt;
  /*!
   * Deep equal utility
   */
  fe.eql = Op;
  /*!
   * Deep path info
   */
  fe.getPathInfo = e.getPathInfo;
  /*!
   * Check if a property exists
   */
  fe.hasProperty = e.hasProperty;
  /*!
   * Function name
   */
  fe.getName = La;
  /*!
   * add Property
   */
  fe.addProperty = _p();
  /*!
   * add Method
   */
  fe.addMethod = kp();
  /*!
   * overwrite Property
   */
  fe.overwriteProperty = Rp();
  /*!
   * overwrite Method
   */
  fe.overwriteMethod = Fp();
  /*!
   * Add a chainable method
   */
  fe.addChainableMethod = Dp();
  /*!
   * Overwrite chainable method
   */
  fe.overwriteChainableMethod = Bp();
  /*!
   * Compare by inspect method
   */
  fe.compareByInspect = Lp;
  /*!
   * Get own enumerable property symbols method
   */
  fe.getOwnEnumerablePropertySymbols = Ua;
  /*!
   * Get own enumerable properties method
   */
  fe.getOwnEnumerableProperties = zp;
  /*!
   * Checks error against a given set of criteria
   */
  fe.checkError = Jp;
  /*!
   * Proxify util
   */
  fe.proxify = cr;
  /*!
   * addLengthGuard util
   */
  fe.addLengthGuard = ar;
  /*!
   * isProxyEnabled helper
   */
  fe.isProxyEnabled = ir;
  /*!
   * isNaN method
   */
  fe.isNaN = Hp;
  /*!
   * getOperator method
   */
  return fe.getOperator = Zp, fe;
}
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var xt = Ht, th = function(e, t) {
  /*!
   * Module dependencies.
   */
  var n = e.AssertionError, o = t.flag;
  /*!
   * Module export.
   */
  e.Assertion = r;
  /*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   *   contain `numKittens` so that the `equal` assertion can reference it when
   *   needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   *   prepended to the error message that's generated by the assertion when it
   *   fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   *   contains a function reference that serves as the starting point for
   *   removing frames from the stack trace of the error that's created by the
   *   assertion when it fails. The goal is to provide a cleaner stack trace to
   *   end users by removing Chai's internal functions. Note that it only works
   *   in environments that support `Error.captureStackTrace`, and only when
   *   `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   *   should retain its current value, even as assertions are chained off of
   *   this object. This is usually set to `true` when creating a new assertion
   *   from within another assertion. It's also temporarily set to `true` before
   *   an overwritten assertion gets called by the overwriting assertion.
   *
   * - `eql`: This flag contains the deepEqual function to be used by the assertion.
   *
   * @param {Mixed} obj target of the assertion
   * @param {String} msg (optional) custom error message
   * @param {Function} ssfi (optional) starting point for removing stack frames
   * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
   * @api private
   */
  function r(s, i, a, c) {
    return o(this, "ssfi", a || r), o(this, "lockSsfi", c), o(this, "object", s), o(this, "message", i), o(this, "eql", xt.deepEqual || t.eql), t.proxify(this);
  }
  Object.defineProperty(r, "includeStack", {
    get: function() {
      return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), xt.includeStack;
    },
    set: function(s) {
      console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), xt.includeStack = s;
    }
  }), Object.defineProperty(r, "showDiff", {
    get: function() {
      return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), xt.showDiff;
    },
    set: function(s) {
      console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), xt.showDiff = s;
    }
  }), r.addProperty = function(s, i) {
    t.addProperty(this.prototype, s, i);
  }, r.addMethod = function(s, i) {
    t.addMethod(this.prototype, s, i);
  }, r.addChainableMethod = function(s, i, a) {
    t.addChainableMethod(this.prototype, s, i, a);
  }, r.overwriteProperty = function(s, i) {
    t.overwriteProperty(this.prototype, s, i);
  }, r.overwriteMethod = function(s, i) {
    t.overwriteMethod(this.prototype, s, i);
  }, r.overwriteChainableMethod = function(s, i, a) {
    t.overwriteChainableMethod(this.prototype, s, i, a);
  }, r.prototype.assert = function(s, i, a, c, l, f) {
    var u = t.test(this, arguments);
    if (f !== !1 && (f = !0), c === void 0 && l === void 0 && (f = !1), xt.showDiff !== !0 && (f = !1), !u) {
      i = t.getMessage(this, arguments);
      var p = t.getActual(this, arguments), w = {
        actual: p,
        expected: c,
        showDiff: f
      }, b = t.getOperator(this, arguments);
      throw b && (w.operator = b), new n(
        i,
        w,
        xt.includeStack ? this.assert : o(this, "ssfi")
      );
    }
  };
  /*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */
  Object.defineProperty(
    r.prototype,
    "_obj",
    {
      get: function() {
        return o(this, "object");
      },
      set: function(s) {
        o(this, "object", s);
      }
    }
  );
};
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var nh = function(e, t) {
  var n = e.Assertion, o = e.AssertionError, r = t.flag;
  [
    "to",
    "be",
    "been",
    "is",
    "and",
    "has",
    "have",
    "with",
    "that",
    "which",
    "at",
    "of",
    "same",
    "but",
    "does",
    "still",
    "also"
  ].forEach(function(m) {
    n.addProperty(m);
  }), n.addProperty("not", function() {
    r(this, "negate", !0);
  }), n.addProperty("deep", function() {
    r(this, "deep", !0);
  }), n.addProperty("nested", function() {
    r(this, "nested", !0);
  }), n.addProperty("own", function() {
    r(this, "own", !0);
  }), n.addProperty("ordered", function() {
    r(this, "ordered", !0);
  }), n.addProperty("any", function() {
    r(this, "any", !0), r(this, "all", !1);
  }), n.addProperty("all", function() {
    r(this, "all", !0), r(this, "any", !1);
  });
  function s(m, T) {
    T && r(this, "message", T), m = m.toLowerCase();
    var x = r(this, "object"), P = ~["a", "e", "i", "o", "u"].indexOf(m.charAt(0)) ? "an " : "a ";
    this.assert(
      m === t.type(x).toLowerCase(),
      "expected #{this} to be " + P + m,
      "expected #{this} not to be " + P + m
    );
  }
  n.addChainableMethod("an", s), n.addChainableMethod("a", s);
  function i(m, T) {
    return t.isNaN(m) && t.isNaN(T) || m === T;
  }
  function a() {
    r(this, "contains", !0);
  }
  function c(m, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), P = t.type(x).toLowerCase(), j = r(this, "message"), D = r(this, "negate"), I = r(this, "ssfi"), $ = r(this, "deep"), q = $ ? "deep " : "", K = $ ? r(this, "eql") : i;
    j = j ? j + ": " : "";
    var J = !1;
    switch (P) {
      case "string":
        J = x.indexOf(m) !== -1;
        break;
      case "weakset":
        if ($)
          throw new o(
            j + "unable to use .deep.include with WeakSet",
            void 0,
            I
          );
        J = x.has(m);
        break;
      case "map":
        x.forEach(function(re) {
          J = J || K(re, m);
        });
        break;
      case "set":
        $ ? x.forEach(function(re) {
          J = J || K(re, m);
        }) : J = x.has(m);
        break;
      case "array":
        $ ? J = x.some(function(re) {
          return K(re, m);
        }) : J = x.indexOf(m) !== -1;
        break;
      default:
        if (m !== Object(m))
          throw new o(
            j + "the given combination of arguments (" + P + " and " + t.type(m).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + t.type(m).toLowerCase(),
            void 0,
            I
          );
        var ne = Object.keys(m), Z = null, H = 0;
        if (ne.forEach(function(re) {
          var O = new n(x);
          if (t.transferFlags(this, O, !0), r(O, "lockSsfi", !0), !D || ne.length === 1) {
            O.property(re, m[re]);
            return;
          }
          try {
            O.property(re, m[re]);
          } catch (ce) {
            if (!t.checkError.compatibleConstructor(ce, o))
              throw ce;
            Z === null && (Z = ce), H++;
          }
        }, this), D && ne.length > 1 && H === ne.length)
          throw Z;
        return;
    }
    this.assert(
      J,
      "expected #{this} to " + q + "include " + t.inspect(m),
      "expected #{this} to not " + q + "include " + t.inspect(m)
    );
  }
  n.addChainableMethod("include", c, a), n.addChainableMethod("contain", c, a), n.addChainableMethod("contains", c, a), n.addChainableMethod("includes", c, a), n.addProperty("ok", function() {
    this.assert(
      r(this, "object"),
      "expected #{this} to be truthy",
      "expected #{this} to be falsy"
    );
  }), n.addProperty("true", function() {
    this.assert(
      r(this, "object") === !0,
      "expected #{this} to be true",
      "expected #{this} to be false",
      !r(this, "negate")
    );
  }), n.addProperty("false", function() {
    this.assert(
      r(this, "object") === !1,
      "expected #{this} to be false",
      "expected #{this} to be true",
      !!r(this, "negate")
    );
  }), n.addProperty("null", function() {
    this.assert(
      r(this, "object") === null,
      "expected #{this} to be null",
      "expected #{this} not to be null"
    );
  }), n.addProperty("undefined", function() {
    this.assert(
      r(this, "object") === void 0,
      "expected #{this} to be undefined",
      "expected #{this} not to be undefined"
    );
  }), n.addProperty("NaN", function() {
    this.assert(
      t.isNaN(r(this, "object")),
      "expected #{this} to be NaN",
      "expected #{this} not to be NaN"
    );
  });
  function l() {
    var m = r(this, "object");
    this.assert(
      m != null,
      "expected #{this} to exist",
      "expected #{this} to not exist"
    );
  }
  n.addProperty("exist", l), n.addProperty("exists", l), n.addProperty("empty", function() {
    var m = r(this, "object"), T = r(this, "ssfi"), x = r(this, "message"), P;
    switch (x = x ? x + ": " : "", t.type(m).toLowerCase()) {
      case "array":
      case "string":
        P = m.length;
        break;
      case "map":
      case "set":
        P = m.size;
        break;
      case "weakmap":
      case "weakset":
        throw new o(
          x + ".empty was passed a weak collection",
          void 0,
          T
        );
      case "function":
        var j = x + ".empty was passed a function " + t.getName(m);
        throw new o(j.trim(), void 0, T);
      default:
        if (m !== Object(m))
          throw new o(
            x + ".empty was passed non-string primitive " + t.inspect(m),
            void 0,
            T
          );
        P = Object.keys(m).length;
    }
    this.assert(
      P === 0,
      "expected #{this} to be empty",
      "expected #{this} not to be empty"
    );
  });
  function f() {
    var m = r(this, "object"), T = t.type(m);
    this.assert(
      T === "Arguments",
      "expected #{this} to be arguments but got " + T,
      "expected #{this} to not be arguments"
    );
  }
  n.addProperty("arguments", f), n.addProperty("Arguments", f);
  function u(m, T) {
    T && r(this, "message", T);
    var x = r(this, "object");
    if (r(this, "deep")) {
      var P = r(this, "lockSsfi");
      r(this, "lockSsfi", !0), this.eql(m), r(this, "lockSsfi", P);
    } else
      this.assert(
        m === x,
        "expected #{this} to equal #{exp}",
        "expected #{this} to not equal #{exp}",
        m,
        this._obj,
        !0
      );
  }
  n.addMethod("equal", u), n.addMethod("equals", u), n.addMethod("eq", u);
  function p(m, T) {
    T && r(this, "message", T);
    var x = r(this, "eql");
    this.assert(
      x(m, r(this, "object")),
      "expected #{this} to deeply equal #{exp}",
      "expected #{this} to not deeply equal #{exp}",
      m,
      this._obj,
      !0
    );
  }
  n.addMethod("eql", p), n.addMethod("eqls", p);
  function w(m, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), P = r(this, "doLength"), j = r(this, "message"), D = j ? j + ": " : "", I = r(this, "ssfi"), $ = t.type(x).toLowerCase(), q = t.type(m).toLowerCase(), K, J = !0;
    if (P && $ !== "map" && $ !== "set" && new n(x, j, I, !0).to.have.property("length"), !P && $ === "date" && q !== "date")
      K = D + "the argument to above must be a date";
    else if (q !== "number" && (P || $ === "number"))
      K = D + "the argument to above must be a number";
    else if (!P && $ !== "date" && $ !== "number") {
      var ne = $ === "string" ? "'" + x + "'" : x;
      K = D + "expected " + ne + " to be a number or a date";
    } else
      J = !1;
    if (J)
      throw new o(K, void 0, I);
    if (P) {
      var Z = "length", H;
      $ === "map" || $ === "set" ? (Z = "size", H = x.size) : H = x.length, this.assert(
        H > m,
        "expected #{this} to have a " + Z + " above #{exp} but got #{act}",
        "expected #{this} to not have a " + Z + " above #{exp}",
        m,
        H
      );
    } else
      this.assert(
        x > m,
        "expected #{this} to be above #{exp}",
        "expected #{this} to be at most #{exp}",
        m
      );
  }
  n.addMethod("above", w), n.addMethod("gt", w), n.addMethod("greaterThan", w);
  function b(m, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), P = r(this, "doLength"), j = r(this, "message"), D = j ? j + ": " : "", I = r(this, "ssfi"), $ = t.type(x).toLowerCase(), q = t.type(m).toLowerCase(), K, J = !0;
    if (P && $ !== "map" && $ !== "set" && new n(x, j, I, !0).to.have.property("length"), !P && $ === "date" && q !== "date")
      K = D + "the argument to least must be a date";
    else if (q !== "number" && (P || $ === "number"))
      K = D + "the argument to least must be a number";
    else if (!P && $ !== "date" && $ !== "number") {
      var ne = $ === "string" ? "'" + x + "'" : x;
      K = D + "expected " + ne + " to be a number or a date";
    } else
      J = !1;
    if (J)
      throw new o(K, void 0, I);
    if (P) {
      var Z = "length", H;
      $ === "map" || $ === "set" ? (Z = "size", H = x.size) : H = x.length, this.assert(
        H >= m,
        "expected #{this} to have a " + Z + " at least #{exp} but got #{act}",
        "expected #{this} to have a " + Z + " below #{exp}",
        m,
        H
      );
    } else
      this.assert(
        x >= m,
        "expected #{this} to be at least #{exp}",
        "expected #{this} to be below #{exp}",
        m
      );
  }
  n.addMethod("least", b), n.addMethod("gte", b), n.addMethod("greaterThanOrEqual", b);
  function v(m, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), P = r(this, "doLength"), j = r(this, "message"), D = j ? j + ": " : "", I = r(this, "ssfi"), $ = t.type(x).toLowerCase(), q = t.type(m).toLowerCase(), K, J = !0;
    if (P && $ !== "map" && $ !== "set" && new n(x, j, I, !0).to.have.property("length"), !P && $ === "date" && q !== "date")
      K = D + "the argument to below must be a date";
    else if (q !== "number" && (P || $ === "number"))
      K = D + "the argument to below must be a number";
    else if (!P && $ !== "date" && $ !== "number") {
      var ne = $ === "string" ? "'" + x + "'" : x;
      K = D + "expected " + ne + " to be a number or a date";
    } else
      J = !1;
    if (J)
      throw new o(K, void 0, I);
    if (P) {
      var Z = "length", H;
      $ === "map" || $ === "set" ? (Z = "size", H = x.size) : H = x.length, this.assert(
        H < m,
        "expected #{this} to have a " + Z + " below #{exp} but got #{act}",
        "expected #{this} to not have a " + Z + " below #{exp}",
        m,
        H
      );
    } else
      this.assert(
        x < m,
        "expected #{this} to be below #{exp}",
        "expected #{this} to be at least #{exp}",
        m
      );
  }
  n.addMethod("below", v), n.addMethod("lt", v), n.addMethod("lessThan", v);
  function h(m, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), P = r(this, "doLength"), j = r(this, "message"), D = j ? j + ": " : "", I = r(this, "ssfi"), $ = t.type(x).toLowerCase(), q = t.type(m).toLowerCase(), K, J = !0;
    if (P && $ !== "map" && $ !== "set" && new n(x, j, I, !0).to.have.property("length"), !P && $ === "date" && q !== "date")
      K = D + "the argument to most must be a date";
    else if (q !== "number" && (P || $ === "number"))
      K = D + "the argument to most must be a number";
    else if (!P && $ !== "date" && $ !== "number") {
      var ne = $ === "string" ? "'" + x + "'" : x;
      K = D + "expected " + ne + " to be a number or a date";
    } else
      J = !1;
    if (J)
      throw new o(K, void 0, I);
    if (P) {
      var Z = "length", H;
      $ === "map" || $ === "set" ? (Z = "size", H = x.size) : H = x.length, this.assert(
        H <= m,
        "expected #{this} to have a " + Z + " at most #{exp} but got #{act}",
        "expected #{this} to have a " + Z + " above #{exp}",
        m,
        H
      );
    } else
      this.assert(
        x <= m,
        "expected #{this} to be at most #{exp}",
        "expected #{this} to be above #{exp}",
        m
      );
  }
  n.addMethod("most", h), n.addMethod("lte", h), n.addMethod("lessThanOrEqual", h), n.addMethod("within", function(m, T, x) {
    x && r(this, "message", x);
    var P = r(this, "object"), j = r(this, "doLength"), D = r(this, "message"), I = D ? D + ": " : "", $ = r(this, "ssfi"), q = t.type(P).toLowerCase(), K = t.type(m).toLowerCase(), J = t.type(T).toLowerCase(), ne, Z = !0, H = K === "date" && J === "date" ? m.toISOString() + ".." + T.toISOString() : m + ".." + T;
    if (j && q !== "map" && q !== "set" && new n(P, D, $, !0).to.have.property("length"), !j && q === "date" && (K !== "date" || J !== "date"))
      ne = I + "the arguments to within must be dates";
    else if ((K !== "number" || J !== "number") && (j || q === "number"))
      ne = I + "the arguments to within must be numbers";
    else if (!j && q !== "date" && q !== "number") {
      var re = q === "string" ? "'" + P + "'" : P;
      ne = I + "expected " + re + " to be a number or a date";
    } else
      Z = !1;
    if (Z)
      throw new o(ne, void 0, $);
    if (j) {
      var O = "length", ce;
      q === "map" || q === "set" ? (O = "size", ce = P.size) : ce = P.length, this.assert(
        ce >= m && ce <= T,
        "expected #{this} to have a " + O + " within " + H,
        "expected #{this} to not have a " + O + " within " + H
      );
    } else
      this.assert(
        P >= m && P <= T,
        "expected #{this} to be within " + H,
        "expected #{this} to not be within " + H
      );
  });
  function A(m, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), P = r(this, "ssfi"), j = r(this, "message");
    try {
      var D = x instanceof m;
    } catch ($) {
      throw $ instanceof TypeError ? (j = j ? j + ": " : "", new o(
        j + "The instanceof assertion needs a constructor but " + t.type(m) + " was given.",
        void 0,
        P
      )) : $;
    }
    var I = t.getName(m);
    I === null && (I = "an unnamed constructor"), this.assert(
      D,
      "expected #{this} to be an instance of " + I,
      "expected #{this} to not be an instance of " + I
    );
  }
  n.addMethod("instanceof", A), n.addMethod("instanceOf", A);
  function M(m, T, x) {
    x && r(this, "message", x);
    var P = r(this, "nested"), j = r(this, "own"), D = r(this, "message"), I = r(this, "object"), $ = r(this, "ssfi"), q = typeof m;
    if (D = D ? D + ": " : "", P) {
      if (q !== "string")
        throw new o(
          D + "the argument to property must be a string when using nested syntax",
          void 0,
          $
        );
    } else if (q !== "string" && q !== "number" && q !== "symbol")
      throw new o(
        D + "the argument to property must be a string, number, or symbol",
        void 0,
        $
      );
    if (P && j)
      throw new o(
        D + 'The "nested" and "own" flags cannot be combined.',
        void 0,
        $
      );
    if (I == null)
      throw new o(
        D + "Target cannot be null or undefined.",
        void 0,
        $
      );
    var K = r(this, "deep"), J = r(this, "negate"), ne = P ? t.getPathInfo(I, m) : null, Z = P ? ne.value : I[m], H = K ? r(this, "eql") : (ce, oe) => ce === oe, re = "";
    K && (re += "deep "), j && (re += "own "), P && (re += "nested "), re += "property ";
    var O;
    j ? O = Object.prototype.hasOwnProperty.call(I, m) : P ? O = ne.exists : O = t.hasProperty(I, m), (!J || arguments.length === 1) && this.assert(
      O,
      "expected #{this} to have " + re + t.inspect(m),
      "expected #{this} to not have " + re + t.inspect(m)
    ), arguments.length > 1 && this.assert(
      O && H(T, Z),
      "expected #{this} to have " + re + t.inspect(m) + " of #{exp}, but got #{act}",
      "expected #{this} to not have " + re + t.inspect(m) + " of #{act}",
      T,
      Z
    ), r(this, "object", Z);
  }
  n.addMethod("property", M);
  function F(m, T, x) {
    r(this, "own", !0), M.apply(this, arguments);
  }
  n.addMethod("ownProperty", F), n.addMethod("haveOwnProperty", F);
  function k(m, T, x) {
    typeof T == "string" && (x = T, T = null), x && r(this, "message", x);
    var P = r(this, "object"), j = Object.getOwnPropertyDescriptor(Object(P), m), D = r(this, "eql");
    j && T ? this.assert(
      D(T, j),
      "expected the own property descriptor for " + t.inspect(m) + " on #{this} to match " + t.inspect(T) + ", got " + t.inspect(j),
      "expected the own property descriptor for " + t.inspect(m) + " on #{this} to not match " + t.inspect(T),
      T,
      j,
      !0
    ) : this.assert(
      j,
      "expected #{this} to have an own property descriptor for " + t.inspect(m),
      "expected #{this} to not have an own property descriptor for " + t.inspect(m)
    ), r(this, "object", j);
  }
  n.addMethod("ownPropertyDescriptor", k), n.addMethod("haveOwnPropertyDescriptor", k);
  function N() {
    r(this, "doLength", !0);
  }
  function U(m, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), P = t.type(x).toLowerCase(), j = r(this, "message"), D = r(this, "ssfi"), I = "length", $;
    switch (P) {
      case "map":
      case "set":
        I = "size", $ = x.size;
        break;
      default:
        new n(x, j, D, !0).to.have.property("length"), $ = x.length;
    }
    this.assert(
      $ == m,
      "expected #{this} to have a " + I + " of #{exp} but got #{act}",
      "expected #{this} to not have a " + I + " of #{act}",
      m,
      $
    );
  }
  n.addChainableMethod("length", U, N), n.addChainableMethod("lengthOf", U, N);
  function B(m, T) {
    T && r(this, "message", T);
    var x = r(this, "object");
    this.assert(
      m.exec(x),
      "expected #{this} to match " + m,
      "expected #{this} not to match " + m
    );
  }
  n.addMethod("match", B), n.addMethod("matches", B), n.addMethod("string", function(m, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), P = r(this, "message"), j = r(this, "ssfi");
    new n(x, P, j, !0).is.a("string"), this.assert(
      ~x.indexOf(m),
      "expected #{this} to contain " + t.inspect(m),
      "expected #{this} to not contain " + t.inspect(m)
    );
  });
  function G(m) {
    var T = r(this, "object"), x = t.type(T), P = t.type(m), j = r(this, "ssfi"), D = r(this, "deep"), I, $ = "", q, K = !0, J = r(this, "message");
    J = J ? J + ": " : "";
    var ne = J + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
    if (x === "Map" || x === "Set")
      $ = D ? "deeply " : "", q = [], T.forEach(function(ye, qe) {
        q.push(qe);
      }), P !== "Array" && (m = Array.prototype.slice.call(arguments));
    else {
      switch (q = t.getOwnEnumerableProperties(T), P) {
        case "Array":
          if (arguments.length > 1)
            throw new o(ne, void 0, j);
          break;
        case "Object":
          if (arguments.length > 1)
            throw new o(ne, void 0, j);
          m = Object.keys(m);
          break;
        default:
          m = Array.prototype.slice.call(arguments);
      }
      m = m.map(function(ye) {
        return typeof ye == "symbol" ? ye : String(ye);
      });
    }
    if (!m.length)
      throw new o(J + "keys required", void 0, j);
    var Z = m.length, H = r(this, "any"), re = r(this, "all"), O = m, ce = D ? r(this, "eql") : (ye, qe) => ye === qe;
    if (!H && !re && (re = !0), H && (K = O.some(function(ye) {
      return q.some(function(qe) {
        return ce(ye, qe);
      });
    })), re && (K = O.every(function(ye) {
      return q.some(function(qe) {
        return ce(ye, qe);
      });
    }), r(this, "contains") || (K = K && m.length == q.length)), Z > 1) {
      m = m.map(function(ye) {
        return t.inspect(ye);
      });
      var oe = m.pop();
      re && (I = m.join(", ") + ", and " + oe), H && (I = m.join(", ") + ", or " + oe);
    } else
      I = t.inspect(m[0]);
    I = (Z > 1 ? "keys " : "key ") + I, I = (r(this, "contains") ? "contain " : "have ") + I, this.assert(
      K,
      "expected #{this} to " + $ + I,
      "expected #{this} to not " + $ + I,
      O.slice(0).sort(t.compareByInspect),
      q.sort(t.compareByInspect),
      !0
    );
  }
  n.addMethod("keys", G), n.addMethod("key", G);
  function ae(m, T, x) {
    x && r(this, "message", x);
    var P = r(this, "object"), j = r(this, "ssfi"), D = r(this, "message"), I = r(this, "negate") || !1;
    new n(P, D, j, !0).is.a("function"), (m instanceof RegExp || typeof m == "string") && (T = m, m = null);
    var $;
    try {
      P();
    } catch (oe) {
      $ = oe;
    }
    var q = m === void 0 && T === void 0, K = !!(m && T), J = !1, ne = !1;
    if (q || !q && !I) {
      var Z = "an error";
      m instanceof Error ? Z = "#{exp}" : m && (Z = t.checkError.getConstructorName(m)), this.assert(
        $,
        "expected #{this} to throw " + Z,
        "expected #{this} to not throw an error but #{act} was thrown",
        m && m.toString(),
        $ instanceof Error ? $.toString() : typeof $ == "string" ? $ : $ && t.checkError.getConstructorName($)
      );
    }
    if (m && $) {
      if (m instanceof Error) {
        var H = t.checkError.compatibleInstance($, m);
        H === I && (K && I ? J = !0 : this.assert(
          I,
          "expected #{this} to throw #{exp} but #{act} was thrown",
          "expected #{this} to not throw #{exp}" + ($ && !I ? " but #{act} was thrown" : ""),
          m.toString(),
          $.toString()
        ));
      }
      var re = t.checkError.compatibleConstructor($, m);
      re === I && (K && I ? J = !0 : this.assert(
        I,
        "expected #{this} to throw #{exp} but #{act} was thrown",
        "expected #{this} to not throw #{exp}" + ($ ? " but #{act} was thrown" : ""),
        m instanceof Error ? m.toString() : m && t.checkError.getConstructorName(m),
        $ instanceof Error ? $.toString() : $ && t.checkError.getConstructorName($)
      ));
    }
    if ($ && T !== void 0 && T !== null) {
      var O = "including";
      T instanceof RegExp && (O = "matching");
      var ce = t.checkError.compatibleMessage($, T);
      ce === I && (K && I ? ne = !0 : this.assert(
        I,
        "expected #{this} to throw error " + O + " #{exp} but got #{act}",
        "expected #{this} to throw error not " + O + " #{exp}",
        T,
        t.checkError.getMessage($)
      ));
    }
    J && ne && this.assert(
      I,
      "expected #{this} to throw #{exp} but #{act} was thrown",
      "expected #{this} to not throw #{exp}" + ($ ? " but #{act} was thrown" : ""),
      m instanceof Error ? m.toString() : m && t.checkError.getConstructorName(m),
      $ instanceof Error ? $.toString() : $ && t.checkError.getConstructorName($)
    ), r(this, "object", $);
  }
  n.addMethod("throw", ae), n.addMethod("throws", ae), n.addMethod("Throw", ae);
  function V(m, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), P = r(this, "itself"), j = typeof x == "function" && !P ? x.prototype[m] : x[m];
    this.assert(
      typeof j == "function",
      "expected #{this} to respond to " + t.inspect(m),
      "expected #{this} to not respond to " + t.inspect(m)
    );
  }
  n.addMethod("respondTo", V), n.addMethod("respondsTo", V), n.addProperty("itself", function() {
    r(this, "itself", !0);
  });
  function xe(m, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), P = m(x);
    this.assert(
      P,
      "expected #{this} to satisfy " + t.objDisplay(m),
      "expected #{this} to not satisfy" + t.objDisplay(m),
      !r(this, "negate"),
      P
    );
  }
  n.addMethod("satisfy", xe), n.addMethod("satisfies", xe);
  function we(m, T, x) {
    x && r(this, "message", x);
    var P = r(this, "object"), j = r(this, "message"), D = r(this, "ssfi");
    if (new n(P, j, D, !0).is.a("number"), typeof m != "number" || typeof T != "number") {
      j = j ? j + ": " : "";
      var I = T === void 0 ? ", and a delta is required" : "";
      throw new o(
        j + "the arguments to closeTo or approximately must be numbers" + I,
        void 0,
        D
      );
    }
    this.assert(
      Math.abs(P - m) <= T,
      "expected #{this} to be close to " + m + " +/- " + T,
      "expected #{this} not to be close to " + m + " +/- " + T
    );
  }
  n.addMethod("closeTo", we), n.addMethod("approximately", we);
  function $e(m, T, x, P, j) {
    if (!P) {
      if (m.length !== T.length)
        return !1;
      T = T.slice();
    }
    return m.every(function(D, I) {
      if (j)
        return x ? x(D, T[I]) : D === T[I];
      if (!x) {
        var $ = T.indexOf(D);
        return $ === -1 ? !1 : (P || T.splice($, 1), !0);
      }
      return T.some(function(q, K) {
        return x(D, q) ? (P || T.splice(K, 1), !0) : !1;
      });
    });
  }
  n.addMethod("members", function(m, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), P = r(this, "message"), j = r(this, "ssfi");
    new n(x, P, j, !0).to.be.an("array"), new n(m, P, j, !0).to.be.an("array");
    var D = r(this, "contains"), I = r(this, "ordered"), $, q, K;
    D ? ($ = I ? "an ordered superset" : "a superset", q = "expected #{this} to be " + $ + " of #{exp}", K = "expected #{this} to not be " + $ + " of #{exp}") : ($ = I ? "ordered members" : "members", q = "expected #{this} to have the same " + $ + " as #{exp}", K = "expected #{this} to not have the same " + $ + " as #{exp}");
    var J = r(this, "deep") ? r(this, "eql") : void 0;
    this.assert(
      $e(m, x, J, D, I),
      q,
      K,
      m,
      x,
      !0
    );
  });
  function Pe(m, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), P = r(this, "message"), j = r(this, "ssfi"), D = r(this, "contains"), I = r(this, "deep"), $ = r(this, "eql");
    new n(m, P, j, !0).to.be.an("array"), D ? this.assert(
      m.some(function(q) {
        return x.indexOf(q) > -1;
      }),
      "expected #{this} to contain one of #{exp}",
      "expected #{this} to not contain one of #{exp}",
      m,
      x
    ) : I ? this.assert(
      m.some(function(q) {
        return $(x, q);
      }),
      "expected #{this} to deeply equal one of #{exp}",
      "expected #{this} to deeply equal one of #{exp}",
      m,
      x
    ) : this.assert(
      m.indexOf(x) > -1,
      "expected #{this} to be one of #{exp}",
      "expected #{this} to not be one of #{exp}",
      m,
      x
    );
  }
  n.addMethod("oneOf", Pe);
  function Fe(m, T, x) {
    x && r(this, "message", x);
    var P = r(this, "object"), j = r(this, "message"), D = r(this, "ssfi");
    new n(P, j, D, !0).is.a("function");
    var I;
    T ? (new n(m, j, D, !0).to.have.property(T), I = m[T]) : (new n(m, j, D, !0).is.a("function"), I = m()), P();
    var $ = T == null ? m() : m[T], q = T == null ? I : "." + T;
    r(this, "deltaMsgObj", q), r(this, "initialDeltaValue", I), r(this, "finalDeltaValue", $), r(this, "deltaBehavior", "change"), r(this, "realDelta", $ !== I), this.assert(
      I !== $,
      "expected " + q + " to change",
      "expected " + q + " to not change"
    );
  }
  n.addMethod("change", Fe), n.addMethod("changes", Fe);
  function Ie(m, T, x) {
    x && r(this, "message", x);
    var P = r(this, "object"), j = r(this, "message"), D = r(this, "ssfi");
    new n(P, j, D, !0).is.a("function");
    var I;
    T ? (new n(m, j, D, !0).to.have.property(T), I = m[T]) : (new n(m, j, D, !0).is.a("function"), I = m()), new n(I, j, D, !0).is.a("number"), P();
    var $ = T == null ? m() : m[T], q = T == null ? I : "." + T;
    r(this, "deltaMsgObj", q), r(this, "initialDeltaValue", I), r(this, "finalDeltaValue", $), r(this, "deltaBehavior", "increase"), r(this, "realDelta", $ - I), this.assert(
      $ - I > 0,
      "expected " + q + " to increase",
      "expected " + q + " to not increase"
    );
  }
  n.addMethod("increase", Ie), n.addMethod("increases", Ie);
  function Ne(m, T, x) {
    x && r(this, "message", x);
    var P = r(this, "object"), j = r(this, "message"), D = r(this, "ssfi");
    new n(P, j, D, !0).is.a("function");
    var I;
    T ? (new n(m, j, D, !0).to.have.property(T), I = m[T]) : (new n(m, j, D, !0).is.a("function"), I = m()), new n(I, j, D, !0).is.a("number"), P();
    var $ = T == null ? m() : m[T], q = T == null ? I : "." + T;
    r(this, "deltaMsgObj", q), r(this, "initialDeltaValue", I), r(this, "finalDeltaValue", $), r(this, "deltaBehavior", "decrease"), r(this, "realDelta", I - $), this.assert(
      $ - I < 0,
      "expected " + q + " to decrease",
      "expected " + q + " to not decrease"
    );
  }
  n.addMethod("decrease", Ne), n.addMethod("decreases", Ne);
  function De(m, T) {
    T && r(this, "message", T);
    var x = r(this, "deltaMsgObj"), P = r(this, "initialDeltaValue"), j = r(this, "finalDeltaValue"), D = r(this, "deltaBehavior"), I = r(this, "realDelta"), $;
    D === "change" ? $ = Math.abs(j - P) === Math.abs(m) : $ = I === Math.abs(m), this.assert(
      $,
      "expected " + x + " to " + D + " by " + m,
      "expected " + x + " to not " + D + " by " + m
    );
  }
  n.addMethod("by", De), n.addProperty("extensible", function() {
    var m = r(this, "object"), T = m === Object(m) && Object.isExtensible(m);
    this.assert(
      T,
      "expected #{this} to be extensible",
      "expected #{this} to not be extensible"
    );
  }), n.addProperty("sealed", function() {
    var m = r(this, "object"), T = m === Object(m) ? Object.isSealed(m) : !0;
    this.assert(
      T,
      "expected #{this} to be sealed",
      "expected #{this} to not be sealed"
    );
  }), n.addProperty("frozen", function() {
    var m = r(this, "object"), T = m === Object(m) ? Object.isFrozen(m) : !0;
    this.assert(
      T,
      "expected #{this} to be frozen",
      "expected #{this} to not be frozen"
    );
  }), n.addProperty("finite", function(m) {
    var T = r(this, "object");
    this.assert(
      typeof T == "number" && isFinite(T),
      "expected #{this} to be a finite number",
      "expected #{this} to not be a finite number"
    );
  });
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var rh = function(e, t) {
  e.expect = function(n, o) {
    return new e.Assertion(n, o);
  }, e.expect.fail = function(n, o, r, s) {
    throw arguments.length < 2 && (r = n, n = void 0), r = r || "expect.fail()", new e.AssertionError(r, {
      actual: n,
      expected: o,
      operator: s
    }, e.expect.fail);
  };
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var oh = function(e, t) {
  var n = e.Assertion;
  function o() {
    function r() {
      return this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol == "function" && this instanceof Symbol || typeof BigInt == "function" && this instanceof BigInt ? new n(this.valueOf(), null, r) : new n(this, null, r);
    }
    function s(a) {
      Object.defineProperty(this, "should", {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      });
    }
    Object.defineProperty(Object.prototype, "should", {
      set: s,
      get: r,
      configurable: !0
    });
    var i = {};
    return i.fail = function(a, c, l, f) {
      throw arguments.length < 2 && (l = a, a = void 0), l = l || "should.fail()", new e.AssertionError(l, {
        actual: a,
        expected: c,
        operator: f
      }, i.fail);
    }, i.equal = function(a, c, l) {
      new n(a, l).to.equal(c);
    }, i.Throw = function(a, c, l, f) {
      new n(a, f).to.Throw(c, l);
    }, i.exist = function(a, c) {
      new n(a, c).to.exist;
    }, i.not = {}, i.not.equal = function(a, c, l) {
      new n(a, l).to.not.equal(c);
    }, i.not.Throw = function(a, c, l, f) {
      new n(a, f).to.not.Throw(c, l);
    }, i.not.exist = function(a, c) {
      new n(a, c).to.not.exist;
    }, i.throw = i.Throw, i.not.throw = i.not.Throw, i;
  }
  e.should = o, e.Should = o;
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var sh = function(e, t) {
  /*!
   * Chai dependencies.
   */
  var n = e.Assertion, o = t.flag;
  /*!
   * Module export.
   */
  var r = e.assert = function(s, i) {
    var a = new n(null, null, e.assert, !0);
    a.assert(
      s,
      i,
      "[ negation message unavailable ]"
    );
  };
  r.fail = function(s, i, a, c) {
    throw arguments.length < 2 && (a = s, s = void 0), a = a || "assert.fail()", new e.AssertionError(a, {
      actual: s,
      expected: i,
      operator: c
    }, r.fail);
  }, r.isOk = function(s, i) {
    new n(s, i, r.isOk, !0).is.ok;
  }, r.isNotOk = function(s, i) {
    new n(s, i, r.isNotOk, !0).is.not.ok;
  }, r.equal = function(s, i, a) {
    var c = new n(s, a, r.equal, !0);
    c.assert(
      i == o(c, "object"),
      "expected #{this} to equal #{exp}",
      "expected #{this} to not equal #{act}",
      i,
      s,
      !0
    );
  }, r.notEqual = function(s, i, a) {
    var c = new n(s, a, r.notEqual, !0);
    c.assert(
      i != o(c, "object"),
      "expected #{this} to not equal #{exp}",
      "expected #{this} to equal #{act}",
      i,
      s,
      !0
    );
  }, r.strictEqual = function(s, i, a) {
    new n(s, a, r.strictEqual, !0).to.equal(i);
  }, r.notStrictEqual = function(s, i, a) {
    new n(s, a, r.notStrictEqual, !0).to.not.equal(i);
  }, r.deepEqual = r.deepStrictEqual = function(s, i, a) {
    new n(s, a, r.deepEqual, !0).to.eql(i);
  }, r.notDeepEqual = function(s, i, a) {
    new n(s, a, r.notDeepEqual, !0).to.not.eql(i);
  }, r.isAbove = function(s, i, a) {
    new n(s, a, r.isAbove, !0).to.be.above(i);
  }, r.isAtLeast = function(s, i, a) {
    new n(s, a, r.isAtLeast, !0).to.be.least(i);
  }, r.isBelow = function(s, i, a) {
    new n(s, a, r.isBelow, !0).to.be.below(i);
  }, r.isAtMost = function(s, i, a) {
    new n(s, a, r.isAtMost, !0).to.be.most(i);
  }, r.isTrue = function(s, i) {
    new n(s, i, r.isTrue, !0).is.true;
  }, r.isNotTrue = function(s, i) {
    new n(s, i, r.isNotTrue, !0).to.not.equal(!0);
  }, r.isFalse = function(s, i) {
    new n(s, i, r.isFalse, !0).is.false;
  }, r.isNotFalse = function(s, i) {
    new n(s, i, r.isNotFalse, !0).to.not.equal(!1);
  }, r.isNull = function(s, i) {
    new n(s, i, r.isNull, !0).to.equal(null);
  }, r.isNotNull = function(s, i) {
    new n(s, i, r.isNotNull, !0).to.not.equal(null);
  }, r.isNaN = function(s, i) {
    new n(s, i, r.isNaN, !0).to.be.NaN;
  }, r.isNotNaN = function(s, i) {
    new n(s, i, r.isNotNaN, !0).not.to.be.NaN;
  }, r.exists = function(s, i) {
    new n(s, i, r.exists, !0).to.exist;
  }, r.notExists = function(s, i) {
    new n(s, i, r.notExists, !0).to.not.exist;
  }, r.isUndefined = function(s, i) {
    new n(s, i, r.isUndefined, !0).to.equal(void 0);
  }, r.isDefined = function(s, i) {
    new n(s, i, r.isDefined, !0).to.not.equal(void 0);
  }, r.isFunction = function(s, i) {
    new n(s, i, r.isFunction, !0).to.be.a("function");
  }, r.isNotFunction = function(s, i) {
    new n(s, i, r.isNotFunction, !0).to.not.be.a("function");
  }, r.isObject = function(s, i) {
    new n(s, i, r.isObject, !0).to.be.a("object");
  }, r.isNotObject = function(s, i) {
    new n(s, i, r.isNotObject, !0).to.not.be.a("object");
  }, r.isArray = function(s, i) {
    new n(s, i, r.isArray, !0).to.be.an("array");
  }, r.isNotArray = function(s, i) {
    new n(s, i, r.isNotArray, !0).to.not.be.an("array");
  }, r.isString = function(s, i) {
    new n(s, i, r.isString, !0).to.be.a("string");
  }, r.isNotString = function(s, i) {
    new n(s, i, r.isNotString, !0).to.not.be.a("string");
  }, r.isNumber = function(s, i) {
    new n(s, i, r.isNumber, !0).to.be.a("number");
  }, r.isNotNumber = function(s, i) {
    new n(s, i, r.isNotNumber, !0).to.not.be.a("number");
  }, r.isFinite = function(s, i) {
    new n(s, i, r.isFinite, !0).to.be.finite;
  }, r.isBoolean = function(s, i) {
    new n(s, i, r.isBoolean, !0).to.be.a("boolean");
  }, r.isNotBoolean = function(s, i) {
    new n(s, i, r.isNotBoolean, !0).to.not.be.a("boolean");
  }, r.typeOf = function(s, i, a) {
    new n(s, a, r.typeOf, !0).to.be.a(i);
  }, r.notTypeOf = function(s, i, a) {
    new n(s, a, r.notTypeOf, !0).to.not.be.a(i);
  }, r.instanceOf = function(s, i, a) {
    new n(s, a, r.instanceOf, !0).to.be.instanceOf(i);
  }, r.notInstanceOf = function(s, i, a) {
    new n(s, a, r.notInstanceOf, !0).to.not.be.instanceOf(i);
  }, r.include = function(s, i, a) {
    new n(s, a, r.include, !0).include(i);
  }, r.notInclude = function(s, i, a) {
    new n(s, a, r.notInclude, !0).not.include(i);
  }, r.deepInclude = function(s, i, a) {
    new n(s, a, r.deepInclude, !0).deep.include(i);
  }, r.notDeepInclude = function(s, i, a) {
    new n(s, a, r.notDeepInclude, !0).not.deep.include(i);
  }, r.nestedInclude = function(s, i, a) {
    new n(s, a, r.nestedInclude, !0).nested.include(i);
  }, r.notNestedInclude = function(s, i, a) {
    new n(s, a, r.notNestedInclude, !0).not.nested.include(i);
  }, r.deepNestedInclude = function(s, i, a) {
    new n(s, a, r.deepNestedInclude, !0).deep.nested.include(i);
  }, r.notDeepNestedInclude = function(s, i, a) {
    new n(s, a, r.notDeepNestedInclude, !0).not.deep.nested.include(i);
  }, r.ownInclude = function(s, i, a) {
    new n(s, a, r.ownInclude, !0).own.include(i);
  }, r.notOwnInclude = function(s, i, a) {
    new n(s, a, r.notOwnInclude, !0).not.own.include(i);
  }, r.deepOwnInclude = function(s, i, a) {
    new n(s, a, r.deepOwnInclude, !0).deep.own.include(i);
  }, r.notDeepOwnInclude = function(s, i, a) {
    new n(s, a, r.notDeepOwnInclude, !0).not.deep.own.include(i);
  }, r.match = function(s, i, a) {
    new n(s, a, r.match, !0).to.match(i);
  }, r.notMatch = function(s, i, a) {
    new n(s, a, r.notMatch, !0).to.not.match(i);
  }, r.property = function(s, i, a) {
    new n(s, a, r.property, !0).to.have.property(i);
  }, r.notProperty = function(s, i, a) {
    new n(s, a, r.notProperty, !0).to.not.have.property(i);
  }, r.propertyVal = function(s, i, a, c) {
    new n(s, c, r.propertyVal, !0).to.have.property(i, a);
  }, r.notPropertyVal = function(s, i, a, c) {
    new n(s, c, r.notPropertyVal, !0).to.not.have.property(i, a);
  }, r.deepPropertyVal = function(s, i, a, c) {
    new n(s, c, r.deepPropertyVal, !0).to.have.deep.property(i, a);
  }, r.notDeepPropertyVal = function(s, i, a, c) {
    new n(s, c, r.notDeepPropertyVal, !0).to.not.have.deep.property(i, a);
  }, r.ownProperty = function(s, i, a) {
    new n(s, a, r.ownProperty, !0).to.have.own.property(i);
  }, r.notOwnProperty = function(s, i, a) {
    new n(s, a, r.notOwnProperty, !0).to.not.have.own.property(i);
  }, r.ownPropertyVal = function(s, i, a, c) {
    new n(s, c, r.ownPropertyVal, !0).to.have.own.property(i, a);
  }, r.notOwnPropertyVal = function(s, i, a, c) {
    new n(s, c, r.notOwnPropertyVal, !0).to.not.have.own.property(i, a);
  }, r.deepOwnPropertyVal = function(s, i, a, c) {
    new n(s, c, r.deepOwnPropertyVal, !0).to.have.deep.own.property(i, a);
  }, r.notDeepOwnPropertyVal = function(s, i, a, c) {
    new n(s, c, r.notDeepOwnPropertyVal, !0).to.not.have.deep.own.property(i, a);
  }, r.nestedProperty = function(s, i, a) {
    new n(s, a, r.nestedProperty, !0).to.have.nested.property(i);
  }, r.notNestedProperty = function(s, i, a) {
    new n(s, a, r.notNestedProperty, !0).to.not.have.nested.property(i);
  }, r.nestedPropertyVal = function(s, i, a, c) {
    new n(s, c, r.nestedPropertyVal, !0).to.have.nested.property(i, a);
  }, r.notNestedPropertyVal = function(s, i, a, c) {
    new n(s, c, r.notNestedPropertyVal, !0).to.not.have.nested.property(i, a);
  }, r.deepNestedPropertyVal = function(s, i, a, c) {
    new n(s, c, r.deepNestedPropertyVal, !0).to.have.deep.nested.property(i, a);
  }, r.notDeepNestedPropertyVal = function(s, i, a, c) {
    new n(s, c, r.notDeepNestedPropertyVal, !0).to.not.have.deep.nested.property(i, a);
  }, r.lengthOf = function(s, i, a) {
    new n(s, a, r.lengthOf, !0).to.have.lengthOf(i);
  }, r.hasAnyKeys = function(s, i, a) {
    new n(s, a, r.hasAnyKeys, !0).to.have.any.keys(i);
  }, r.hasAllKeys = function(s, i, a) {
    new n(s, a, r.hasAllKeys, !0).to.have.all.keys(i);
  }, r.containsAllKeys = function(s, i, a) {
    new n(s, a, r.containsAllKeys, !0).to.contain.all.keys(i);
  }, r.doesNotHaveAnyKeys = function(s, i, a) {
    new n(s, a, r.doesNotHaveAnyKeys, !0).to.not.have.any.keys(i);
  }, r.doesNotHaveAllKeys = function(s, i, a) {
    new n(s, a, r.doesNotHaveAllKeys, !0).to.not.have.all.keys(i);
  }, r.hasAnyDeepKeys = function(s, i, a) {
    new n(s, a, r.hasAnyDeepKeys, !0).to.have.any.deep.keys(i);
  }, r.hasAllDeepKeys = function(s, i, a) {
    new n(s, a, r.hasAllDeepKeys, !0).to.have.all.deep.keys(i);
  }, r.containsAllDeepKeys = function(s, i, a) {
    new n(s, a, r.containsAllDeepKeys, !0).to.contain.all.deep.keys(i);
  }, r.doesNotHaveAnyDeepKeys = function(s, i, a) {
    new n(s, a, r.doesNotHaveAnyDeepKeys, !0).to.not.have.any.deep.keys(i);
  }, r.doesNotHaveAllDeepKeys = function(s, i, a) {
    new n(s, a, r.doesNotHaveAllDeepKeys, !0).to.not.have.all.deep.keys(i);
  }, r.throws = function(s, i, a, c) {
    (typeof i == "string" || i instanceof RegExp) && (a = i, i = null);
    var l = new n(s, c, r.throws, !0).to.throw(i, a);
    return o(l, "object");
  }, r.doesNotThrow = function(s, i, a, c) {
    (typeof i == "string" || i instanceof RegExp) && (a = i, i = null), new n(s, c, r.doesNotThrow, !0).to.not.throw(i, a);
  }, r.operator = function(s, i, a, c) {
    var l;
    switch (i) {
      case "==":
        l = s == a;
        break;
      case "===":
        l = s === a;
        break;
      case ">":
        l = s > a;
        break;
      case ">=":
        l = s >= a;
        break;
      case "<":
        l = s < a;
        break;
      case "<=":
        l = s <= a;
        break;
      case "!=":
        l = s != a;
        break;
      case "!==":
        l = s !== a;
        break;
      default:
        throw c = c && c + ": ", new e.AssertionError(
          c + 'Invalid operator "' + i + '"',
          void 0,
          r.operator
        );
    }
    var f = new n(l, c, r.operator, !0);
    f.assert(
      o(f, "object") === !0,
      "expected " + t.inspect(s) + " to be " + i + " " + t.inspect(a),
      "expected " + t.inspect(s) + " to not be " + i + " " + t.inspect(a)
    );
  }, r.closeTo = function(s, i, a, c) {
    new n(s, c, r.closeTo, !0).to.be.closeTo(i, a);
  }, r.approximately = function(s, i, a, c) {
    new n(s, c, r.approximately, !0).to.be.approximately(i, a);
  }, r.sameMembers = function(s, i, a) {
    new n(s, a, r.sameMembers, !0).to.have.same.members(i);
  }, r.notSameMembers = function(s, i, a) {
    new n(s, a, r.notSameMembers, !0).to.not.have.same.members(i);
  }, r.sameDeepMembers = function(s, i, a) {
    new n(s, a, r.sameDeepMembers, !0).to.have.same.deep.members(i);
  }, r.notSameDeepMembers = function(s, i, a) {
    new n(s, a, r.notSameDeepMembers, !0).to.not.have.same.deep.members(i);
  }, r.sameOrderedMembers = function(s, i, a) {
    new n(s, a, r.sameOrderedMembers, !0).to.have.same.ordered.members(i);
  }, r.notSameOrderedMembers = function(s, i, a) {
    new n(s, a, r.notSameOrderedMembers, !0).to.not.have.same.ordered.members(i);
  }, r.sameDeepOrderedMembers = function(s, i, a) {
    new n(s, a, r.sameDeepOrderedMembers, !0).to.have.same.deep.ordered.members(i);
  }, r.notSameDeepOrderedMembers = function(s, i, a) {
    new n(s, a, r.notSameDeepOrderedMembers, !0).to.not.have.same.deep.ordered.members(i);
  }, r.includeMembers = function(s, i, a) {
    new n(s, a, r.includeMembers, !0).to.include.members(i);
  }, r.notIncludeMembers = function(s, i, a) {
    new n(s, a, r.notIncludeMembers, !0).to.not.include.members(i);
  }, r.includeDeepMembers = function(s, i, a) {
    new n(s, a, r.includeDeepMembers, !0).to.include.deep.members(i);
  }, r.notIncludeDeepMembers = function(s, i, a) {
    new n(s, a, r.notIncludeDeepMembers, !0).to.not.include.deep.members(i);
  }, r.includeOrderedMembers = function(s, i, a) {
    new n(s, a, r.includeOrderedMembers, !0).to.include.ordered.members(i);
  }, r.notIncludeOrderedMembers = function(s, i, a) {
    new n(s, a, r.notIncludeOrderedMembers, !0).to.not.include.ordered.members(i);
  }, r.includeDeepOrderedMembers = function(s, i, a) {
    new n(s, a, r.includeDeepOrderedMembers, !0).to.include.deep.ordered.members(i);
  }, r.notIncludeDeepOrderedMembers = function(s, i, a) {
    new n(s, a, r.notIncludeDeepOrderedMembers, !0).to.not.include.deep.ordered.members(i);
  }, r.oneOf = function(s, i, a) {
    new n(s, a, r.oneOf, !0).to.be.oneOf(i);
  }, r.changes = function(s, i, a, c) {
    arguments.length === 3 && typeof i == "function" && (c = a, a = null), new n(s, c, r.changes, !0).to.change(i, a);
  }, r.changesBy = function(s, i, a, c, l) {
    if (arguments.length === 4 && typeof i == "function") {
      var f = c;
      c = a, l = f;
    } else
      arguments.length === 3 && (c = a, a = null);
    new n(s, l, r.changesBy, !0).to.change(i, a).by(c);
  }, r.doesNotChange = function(s, i, a, c) {
    return arguments.length === 3 && typeof i == "function" && (c = a, a = null), new n(s, c, r.doesNotChange, !0).to.not.change(i, a);
  }, r.changesButNotBy = function(s, i, a, c, l) {
    if (arguments.length === 4 && typeof i == "function") {
      var f = c;
      c = a, l = f;
    } else
      arguments.length === 3 && (c = a, a = null);
    new n(s, l, r.changesButNotBy, !0).to.change(i, a).but.not.by(c);
  }, r.increases = function(s, i, a, c) {
    return arguments.length === 3 && typeof i == "function" && (c = a, a = null), new n(s, c, r.increases, !0).to.increase(i, a);
  }, r.increasesBy = function(s, i, a, c, l) {
    if (arguments.length === 4 && typeof i == "function") {
      var f = c;
      c = a, l = f;
    } else
      arguments.length === 3 && (c = a, a = null);
    new n(s, l, r.increasesBy, !0).to.increase(i, a).by(c);
  }, r.doesNotIncrease = function(s, i, a, c) {
    return arguments.length === 3 && typeof i == "function" && (c = a, a = null), new n(s, c, r.doesNotIncrease, !0).to.not.increase(i, a);
  }, r.increasesButNotBy = function(s, i, a, c, l) {
    if (arguments.length === 4 && typeof i == "function") {
      var f = c;
      c = a, l = f;
    } else
      arguments.length === 3 && (c = a, a = null);
    new n(s, l, r.increasesButNotBy, !0).to.increase(i, a).but.not.by(c);
  }, r.decreases = function(s, i, a, c) {
    return arguments.length === 3 && typeof i == "function" && (c = a, a = null), new n(s, c, r.decreases, !0).to.decrease(i, a);
  }, r.decreasesBy = function(s, i, a, c, l) {
    if (arguments.length === 4 && typeof i == "function") {
      var f = c;
      c = a, l = f;
    } else
      arguments.length === 3 && (c = a, a = null);
    new n(s, l, r.decreasesBy, !0).to.decrease(i, a).by(c);
  }, r.doesNotDecrease = function(s, i, a, c) {
    return arguments.length === 3 && typeof i == "function" && (c = a, a = null), new n(s, c, r.doesNotDecrease, !0).to.not.decrease(i, a);
  }, r.doesNotDecreaseBy = function(s, i, a, c, l) {
    if (arguments.length === 4 && typeof i == "function") {
      var f = c;
      c = a, l = f;
    } else
      arguments.length === 3 && (c = a, a = null);
    return new n(s, l, r.doesNotDecreaseBy, !0).to.not.decrease(i, a).by(c);
  }, r.decreasesButNotBy = function(s, i, a, c, l) {
    if (arguments.length === 4 && typeof i == "function") {
      var f = c;
      c = a, l = f;
    } else
      arguments.length === 3 && (c = a, a = null);
    new n(s, l, r.decreasesButNotBy, !0).to.decrease(i, a).but.not.by(c);
  };
  /*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */
  r.ifError = function(s) {
    if (s)
      throw s;
  }, r.isExtensible = function(s, i) {
    new n(s, i, r.isExtensible, !0).to.be.extensible;
  }, r.isNotExtensible = function(s, i) {
    new n(s, i, r.isNotExtensible, !0).to.not.be.extensible;
  }, r.isSealed = function(s, i) {
    new n(s, i, r.isSealed, !0).to.be.sealed;
  }, r.isNotSealed = function(s, i) {
    new n(s, i, r.isNotSealed, !0).to.not.be.sealed;
  }, r.isFrozen = function(s, i) {
    new n(s, i, r.isFrozen, !0).to.be.frozen;
  }, r.isNotFrozen = function(s, i) {
    new n(s, i, r.isNotFrozen, !0).to.not.be.frozen;
  }, r.isEmpty = function(s, i) {
    new n(s, i, r.isEmpty, !0).to.be.empty;
  }, r.isNotEmpty = function(s, i) {
    new n(s, i, r.isNotEmpty, !0).to.not.be.empty;
  };
  /*!
   * Aliases.
   */
  (function s(i, a) {
    return r[a] = r[i], s;
  })("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")("isEmpty", "empty")("isNotEmpty", "notEmpty");
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var ks;
function It() {
  return ks || (ks = 1, function(e) {
    var t = [];
    /*!
     * Chai version
     */
    e.version = "4.3.8";
    /*!
     * Assertion Error
     */
    e.AssertionError = ja;
    /*!
     * Utils for plugins (not exported)
     */
    var n = eh();
    e.use = function(l) {
      return ~t.indexOf(l) || (l(e, n), t.push(l)), e;
    };
    /*!
     * Utility Functions
     */
    e.util = n;
    /*!
     * Configuration
     */
    var o = Ht;
    e.config = o;
    /*!
     * Primary `Assertion` prototype
     */
    var r = th;
    e.use(r);
    /*!
     * Core Assertions
     */
    var s = nh;
    e.use(s);
    /*!
     * Expect interface
     */
    var i = rh;
    e.use(i);
    /*!
     * Should interface
     */
    var a = oh;
    e.use(a);
    /*!
     * Assert interface
     */
    var c = sh;
    e.use(c);
  }(xr)), xr;
}
var ih = It();
const Ze = /* @__PURE__ */ lu(ih), kr = Ze.expect;
Ze.version;
Ze.Assertion;
Ze.AssertionError;
const Hn = Ze.util;
Ze.config;
const Sn = Ze.use;
Ze.should;
const ah = Ze.assert;
Ze.core;
var gn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ch(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Wn(e, t) {
  if (!e)
    throw new Error(t);
}
function Lt(e, t) {
  return typeof t === e;
}
function uh(e) {
  return e instanceof Promise;
}
function Qr(e, t, n) {
  Object.defineProperty(e, t, n);
}
function qt(e, t, n) {
  Object.defineProperty(e, t, { value: n });
}
var fn = Symbol.for("tinyspy:spy"), lh = /* @__PURE__ */ new Set(), fh = (e) => {
  e.called = !1, e.callCount = 0, e.calls = [], e.results = [], e.next = [];
}, ph = (e) => (Qr(e, fn, { value: { reset: () => fh(e[fn]) } }), e[fn]), Zr = (e) => e[fn] || ph(e);
function hh(e) {
  Wn(Lt("function", e) || Lt("undefined", e), "cannot spy on a non-function value");
  let t = function(...o) {
    let r = Zr(t);
    r.called = !0, r.callCount++, r.calls.push(o);
    let s = r.next.shift();
    if (s) {
      r.results.push(s);
      let [l, f] = s;
      if (l === "ok")
        return f;
      throw f;
    }
    let i, a = "ok";
    if (r.impl)
      try {
        new.target ? i = Reflect.construct(r.impl, o, new.target) : i = r.impl.apply(this, o), a = "ok";
      } catch (l) {
        throw i = l, a = "error", r.results.push([a, l]), l;
      }
    let c = [a, i];
    if (uh(i)) {
      let l = i.then((f) => c[1] = f).catch((f) => {
        throw c[0] = "error", c[1] = f, f;
      });
      Object.assign(l, i), i = l;
    }
    return r.results.push(c), i;
  };
  qt(t, "_isMockFunction", !0), qt(t, "length", e ? e.length : 0), qt(t, "name", e && e.name || "spy");
  let n = Zr(t);
  return n.reset(), n.impl = e, t;
}
var Rs = (e, t) => Object.getOwnPropertyDescriptor(e, t), Fs = (e, t) => {
  t != null && typeof t == "function" && t.prototype != null && Object.setPrototypeOf(e.prototype, t.prototype);
};
function Ka(e, t, n) {
  Wn(!Lt("undefined", e), "spyOn could not find an object to spy upon"), Wn(Lt("object", e) || Lt("function", e), "cannot spyOn on a primitive value");
  let [o, r] = (() => {
    if (!Lt("object", t))
      return [t, "value"];
    if ("getter" in t && "setter" in t)
      throw new Error("cannot spy on both getter and setter");
    if ("getter" in t)
      return [t.getter, "get"];
    if ("setter" in t)
      return [t.setter, "set"];
    throw new Error("specify getter or setter to spy on");
  })(), s = Rs(e, o), i = Object.getPrototypeOf(e), a = i && Rs(i, o), c = s || a;
  Wn(c || o in e, `${String(o)} does not exist`);
  let l = !1;
  r === "value" && c && !c.value && c.get && (r = "get", l = !0, n = c.get());
  let f;
  c ? f = c[r] : r !== "value" ? f = () => e[o] : f = e[o], n || (n = f);
  let u = hh(n);
  r === "value" && Fs(u, f);
  let p = (v) => {
    let { value: h, ...A } = c || {
      configurable: !0,
      writable: !0
    };
    r !== "value" && delete A.writable, A[r] = v, Qr(e, o, A);
  }, w = () => c ? Qr(e, o, c) : p(f), b = u[fn];
  return qt(b, "restore", w), qt(b, "getOriginal", () => l ? f() : f), qt(b, "willCall", (v) => (b.impl = v, u)), p(l ? () => (Fs(u, n), u) : u), lh.add(u), u;
}
const Vn = /* @__PURE__ */ new Set();
function Ga(e) {
  return typeof e == "function" && "_isMockFunction" in e && e._isMockFunction;
}
function mh(e, t, n) {
  const r = n ? { [{
    get: "getter",
    set: "setter"
  }[n]]: t } : t, s = Ka(e, r);
  return Ja(s);
}
let dh = 0;
function Ja(e) {
  const t = e;
  let n, o = [], r = [];
  const s = Zr(e), i = {
    get calls() {
      return s.calls;
    },
    get instances() {
      return o;
    },
    get invocationCallOrder() {
      return r;
    },
    get results() {
      return s.results.map(([p, w]) => ({ type: p === "error" ? "throw" : "return", value: w }));
    },
    get lastCall() {
      return s.calls[s.calls.length - 1];
    }
  };
  let a = [], c = !1;
  function l(...p) {
    return o.push(this), r.push(++dh), (c ? n : a.shift() || n || s.getOriginal() || (() => {
    })).apply(this, p);
  }
  let f = t.name;
  t.getMockName = () => f || "vi.fn()", t.mockName = (p) => (f = p, t), t.mockClear = () => (s.reset(), o = [], r = [], t), t.mockReset = () => (t.mockClear(), n = () => {
  }, a = [], t), t.mockRestore = () => (t.mockReset(), s.restore(), n = void 0, t), t.getMockImplementation = () => n, t.mockImplementation = (p) => (n = p, s.willCall(l), t), t.mockImplementationOnce = (p) => (a.push(p), t);
  function u(p, w) {
    const b = n;
    n = p, s.willCall(l), c = !0;
    const v = () => {
      n = b, c = !1;
    }, h = w();
    return h instanceof Promise ? h.then(() => (v(), t)) : (v(), t);
  }
  return t.withImplementation = u, t.mockReturnThis = () => t.mockImplementation(function() {
    return this;
  }), t.mockReturnValue = (p) => t.mockImplementation(() => p), t.mockReturnValueOnce = (p) => t.mockImplementationOnce(() => p), t.mockResolvedValue = (p) => t.mockImplementation(() => Promise.resolve(p)), t.mockResolvedValueOnce = (p) => t.mockImplementationOnce(() => Promise.resolve(p)), t.mockRejectedValue = (p) => t.mockImplementation(() => Promise.reject(p)), t.mockRejectedValueOnce = (p) => t.mockImplementationOnce(() => Promise.reject(p)), Object.defineProperty(t, "mock", {
    get: () => i
  }), s.willCall(l), Vn.add(t), t;
}
function yh(e) {
  const t = Ja(Ka({ spy: e || (() => {
  }) }, "spy"));
  return e && t.mockImplementation(e), t;
}
const Xn = Symbol.for("matchers-object"), Tn = Symbol.for("$$jest-matchers-object"), xn = Symbol.for("expect-global"), So = Symbol.for("asymmetric-matchers-object");
if (!Object.prototype.hasOwnProperty.call(globalThis, Xn)) {
  const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ Object.create(null), n = [], o = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(globalThis, Xn, {
    get: () => e
  }), Object.defineProperty(globalThis, Tn, {
    configurable: !0,
    get: () => ({
      state: e.get(globalThis[xn]),
      matchers: t,
      customEqualityTesters: n
    })
  }), Object.defineProperty(globalThis, So, {
    get: () => o
  });
}
function zt(e) {
  return globalThis[Xn].get(e);
}
function Rr(e, t) {
  const n = globalThis[Xn], o = n.get(t) || {};
  Object.assign(o, e), n.set(t, o);
}
function Ya() {
  const e = () => po(), t = e().green, n = e().red, o = e().inverse, r = e().bold, s = e().dim;
  function i(u, p = "received", w = "expected", b = {}) {
    const {
      comment: v = "",
      isDirectExpectCall: h = !1,
      // seems redundant with received === ''
      isNot: A = !1,
      promise: M = "",
      secondArgument: F = "",
      expectedColor: k = t,
      receivedColor: N = n,
      secondArgumentColor: U = t
    } = b;
    let B = "", G = "expect";
    return !h && p !== "" && (B += s(`${G}(`) + N(p), G = ")"), M !== "" && (B += s(`${G}.`) + M, G = ""), A && (B += `${s(`${G}.`)}not`, G = ""), u.includes(".") ? G += u : (B += s(`${G}.`) + u, G = ""), w === "" ? G += "()" : (B += s(`${G}(`) + k(w), F && (B += s(", ") + U(F)), G = ")"), v !== "" && (G += ` // ${v}`), G !== "" && (B += s(G)), B;
  }
  const a = "·", c = (u) => u.replace(/\s+$/gm, (p) => a.repeat(p.length));
  return {
    EXPECTED_COLOR: t,
    RECEIVED_COLOR: n,
    INVERTED_COLOR: o,
    BOLD_WEIGHT: r,
    DIM_COLOR: s,
    matcherHint: i,
    printReceived: (u) => n(c(Qe(u))),
    printExpected: (u) => t(c(Qe(u)))
  };
}
function gh(e) {
  if (!Array.isArray(e))
    throw new TypeError(
      `expect.customEqualityTesters: Must be set to an array of Testers. Was given "${Gn(
        e
      )}"`
    );
  globalThis[Tn].customEqualityTesters.push(
    ...e
  );
}
function To() {
  return globalThis[Tn].customEqualityTesters;
}
function de(e, t, n, o) {
  return n = n || [], Ha(e, t, [], [], n, o ? Xa : wh);
}
function Ds(e) {
  return !!e && typeof e == "object" && "asymmetricMatch" in e && Je("Function", e.asymmetricMatch);
}
function bh(e, t) {
  const n = Ds(e), o = Ds(t);
  if (!(n && o)) {
    if (n)
      return e.asymmetricMatch(t);
    if (o)
      return t.asymmetricMatch(e);
  }
}
function Ha(e, t, n, o, r, s) {
  let i = !0;
  const a = bh(e, t);
  if (a !== void 0)
    return a;
  const c = { equals: de };
  for (let b = 0; b < r.length; b++) {
    const v = r[b].call(c, e, t, r);
    if (v !== void 0)
      return v;
  }
  if (e instanceof Error && t instanceof Error)
    return e.message === t.message;
  if (typeof URL == "function" && e instanceof URL && t instanceof URL)
    return e.href === t.href;
  if (Object.is(e, t))
    return !0;
  if (e === null || t === null)
    return e === t;
  const l = Object.prototype.toString.call(e);
  if (l !== Object.prototype.toString.call(t))
    return !1;
  switch (l) {
    case "[object Boolean]":
    case "[object String]":
    case "[object Number]":
      return typeof e != typeof t ? !1 : typeof e != "object" && typeof t != "object" ? Object.is(e, t) : Object.is(e.valueOf(), t.valueOf());
    case "[object Date]": {
      const b = +e, v = +t;
      return b === v || Number.isNaN(b) && Number.isNaN(v);
    }
    case "[object RegExp]":
      return e.source === t.source && e.flags === t.flags;
  }
  if (typeof e != "object" || typeof t != "object")
    return !1;
  if (Ls(e) && Ls(t))
    return e.isEqualNode(t);
  let f = n.length;
  for (; f--; ) {
    if (n[f] === e)
      return o[f] === t;
    if (o[f] === t)
      return !1;
  }
  if (n.push(e), o.push(t), l === "[object Array]" && e.length !== t.length)
    return !1;
  const u = Bs(e, s);
  let p, w = u.length;
  if (Bs(t, s).length !== w)
    return !1;
  for (; w--; )
    if (p = u[w], i = s(t, p) && Ha(e[p], t[p], n, o, r, s), !i)
      return !1;
  return n.pop(), o.pop(), i;
}
function Bs(e, t) {
  const n = [];
  for (const o in e)
    t(e, o) && n.push(o);
  return n.concat(
    Object.getOwnPropertySymbols(e).filter(
      (o) => Object.getOwnPropertyDescriptor(e, o).enumerable
    )
  );
}
function wh(e, t) {
  return Xa(e, t) && e[t] !== void 0;
}
function Xa(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Je(e, t) {
  return Object.prototype.toString.apply(t) === `[object ${e}]`;
}
function Ls(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number" && "nodeName" in e && typeof e.nodeName == "string" && "isEqualNode" in e && typeof e.isEqualNode == "function";
}
const vh = "@@__IMMUTABLE_KEYED__@@", Eh = "@@__IMMUTABLE_SET__@@", Qa = "@@__IMMUTABLE_ORDERED__@@";
function Sh(e) {
  return !!(e && e[vh] && !e[Qa]);
}
function Th(e) {
  return !!(e && e[Eh] && !e[Qa]);
}
const Za = Symbol.iterator;
function qs(e) {
  return !!(e != null && e[Za]);
}
function Le(e, t, n = [], o = [], r = []) {
  if (typeof e != "object" || typeof t != "object" || Array.isArray(e) || Array.isArray(t) || !qs(e) || !qs(t))
    return;
  if (e.constructor !== t.constructor)
    return !1;
  let s = o.length;
  for (; s--; )
    if (o[s] === e)
      return r[s] === t;
  o.push(e), r.push(t);
  const i = [
    ...n.filter((l) => l !== Le),
    a
  ];
  function a(l, f) {
    return Le(
      l,
      f,
      [...i],
      [...o],
      [...r]
    );
  }
  if (e.size !== void 0) {
    if (e.size !== t.size)
      return !1;
    if (Je("Set", e) || Th(e)) {
      let l = !0;
      for (const f of e)
        if (!t.has(f)) {
          let u = !1;
          for (const p of t)
            de(f, p, i) === !0 && (u = !0);
          if (u === !1) {
            l = !1;
            break;
          }
        }
      return o.pop(), r.pop(), l;
    } else if (Je("Map", e) || Sh(e)) {
      let l = !0;
      for (const f of e)
        if (!t.has(f[0]) || !de(f[1], t.get(f[0]), i)) {
          let u = !1;
          for (const p of t) {
            const w = de(f[0], p[0], i);
            let b = !1;
            w === !0 && (b = de(f[1], p[1], i)), b === !0 && (u = !0);
          }
          if (u === !1) {
            l = !1;
            break;
          }
        }
      return o.pop(), r.pop(), l;
    }
  }
  const c = t[Za]();
  for (const l of e) {
    const f = c.next();
    if (f.done || !de(l, f.value, i))
      return !1;
  }
  return c.next().done ? (o.pop(), r.pop(), !0) : !1;
}
function ec(e, t) {
  return !e || typeof e != "object" || e === Object.prototype ? !1 : Object.prototype.hasOwnProperty.call(e, t) || ec(Object.getPrototypeOf(e), t);
}
function zs(e) {
  return io(e) && !(e instanceof Error) && !Array.isArray(e) && !(e instanceof Date);
}
function $n(e, t, n = []) {
  const o = n.filter((s) => s !== $n), r = (s = /* @__PURE__ */ new WeakMap()) => (i, a) => {
    if (zs(a))
      return Object.keys(a).every((c) => {
        if (zs(a[c])) {
          if (s.has(a[c]))
            return de(i[c], a[c], o);
          s.set(a[c], !0);
        }
        const l = i != null && ec(i, c) && de(i[c], a[c], [
          ...o,
          r(s)
        ]);
        return s.delete(a[c]), l;
      });
  };
  return r()(e, t);
}
function Ws(e, t) {
  if (!(e == null || t == null || e.constructor === t.constructor))
    return !1;
}
function Vs(e, t) {
  let n = e, o = t;
  if (!(e instanceof DataView && t instanceof DataView)) {
    if (!(e instanceof ArrayBuffer) || !(t instanceof ArrayBuffer))
      return;
    try {
      n = new DataView(e), o = new DataView(t);
    } catch {
      return;
    }
  }
  if (n.byteLength !== o.byteLength)
    return !1;
  for (let r = 0; r < n.byteLength; r++)
    if (n.getUint8(r) !== o.getUint8(r))
      return !1;
  return !0;
}
function eo(e, t, n = []) {
  if (!Array.isArray(e) || !Array.isArray(t))
    return;
  const o = Object.keys(e), r = Object.keys(t), s = n.filter((i) => i !== eo);
  return de(e, t, s, !0) && de(o, r);
}
function xh(e, t = "#{this}", n = "#{exp}") {
  const o = `expected ${t} to be ${n} // Object.is equality`;
  return ["toStrictEqual", "toEqual"].includes(e) ? `${o}

If it should pass with deep equality, replace "toBe" with "${e}"

Expected: ${t}
Received: serializes to the same string
` : o;
}
function $h(e, t) {
  return `${t} ${e}${t === 1 ? "" : "s"}`;
}
let St = class {
  constructor(t, n = !1) {
    // should have "jest" to be compatible with its ecosystem
    se(this, "$$typeof", Symbol.for("jest.asymmetricMatcher"));
    this.sample = t, this.inverse = n;
  }
  getMatcherContext(t) {
    return {
      ...zt(t || globalThis[xn]),
      equals: de,
      isNot: this.inverse,
      customTesters: To(),
      utils: {
        ...Ya(),
        diff: yn,
        stringify: Qe,
        iterableEquality: Le,
        subsetEquality: $n
      }
    };
  }
  // implement custom chai/loupe inspect for better AssertionError.message formatting
  // https://github.com/chaijs/loupe/blob/9b8a6deabcd50adc056a64fb705896194710c5c6/src/index.ts#L29
  [Symbol.for("chai/inspect")](t) {
    const n = Qe(this, t.depth, { min: !0 });
    return n.length <= t.truncate ? n : `${this.toString()}{…}`;
  }
};
class Us extends St {
  constructor(t, n = !1) {
    if (!Je("String", t))
      throw new Error("Expected is not a string");
    super(t, n);
  }
  asymmetricMatch(t) {
    const n = Je("String", t) && t.includes(this.sample);
    return this.inverse ? !n : n;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "string";
  }
}
class Oh extends St {
  asymmetricMatch(t) {
    return t != null;
  }
  toString() {
    return "Anything";
  }
  toAsymmetricMatcher() {
    return "Anything";
  }
}
class Ks extends St {
  constructor(t, n = !1) {
    super(t, n);
  }
  getPrototype(t) {
    return Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.constructor.prototype === t ? null : t.constructor.prototype;
  }
  hasProperty(t, n) {
    return t ? Object.prototype.hasOwnProperty.call(t, n) ? !0 : this.hasProperty(this.getPrototype(t), n) : !1;
  }
  asymmetricMatch(t) {
    if (typeof this.sample != "object")
      throw new TypeError(
        `You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`
      );
    let n = !0;
    const o = this.getMatcherContext();
    for (const r in this.sample)
      if (!this.hasProperty(t, r) || !de(this.sample[r], t[r], o.customTesters)) {
        n = !1;
        break;
      }
    return this.inverse ? !n : n;
  }
  toString() {
    return `Object${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "object";
  }
}
class Gs extends St {
  constructor(t, n = !1) {
    super(t, n);
  }
  asymmetricMatch(t) {
    if (!Array.isArray(this.sample))
      throw new TypeError(
        `You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`
      );
    const n = this.getMatcherContext(), o = this.sample.length === 0 || Array.isArray(t) && this.sample.every(
      (r) => t.some((s) => de(r, s, n.customTesters))
    );
    return this.inverse ? !o : o;
  }
  toString() {
    return `Array${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "array";
  }
}
class Ah extends St {
  constructor(t) {
    if (typeof t > "u")
      throw new TypeError(
        "any() expects to be passed a constructor function. Please pass one or use anything() to match any object."
      );
    super(t);
  }
  fnNameFor(t) {
    if (t.name)
      return t.name;
    const o = Function.prototype.toString.call(t).match(/^(?:async)?\s*function\s*\*?\s*([\w$]+)\s*\(/);
    return o ? o[1] : "<anonymous>";
  }
  asymmetricMatch(t) {
    return this.sample === String ? typeof t == "string" || t instanceof String : this.sample === Number ? typeof t == "number" || t instanceof Number : this.sample === Function ? typeof t == "function" || t instanceof Function : this.sample === Boolean ? typeof t == "boolean" || t instanceof Boolean : this.sample === BigInt ? typeof t == "bigint" || t instanceof BigInt : this.sample === Symbol ? typeof t == "symbol" || t instanceof Symbol : this.sample === Object ? typeof t == "object" : t instanceof this.sample;
  }
  toString() {
    return "Any";
  }
  getExpectedType() {
    return this.sample === String ? "string" : this.sample === Number ? "number" : this.sample === Function ? "function" : this.sample === Object ? "object" : this.sample === Boolean ? "boolean" : this.fnNameFor(this.sample);
  }
  toAsymmetricMatcher() {
    return `Any<${this.fnNameFor(this.sample)}>`;
  }
}
class Js extends St {
  constructor(t, n = !1) {
    if (!Je("String", t) && !Je("RegExp", t))
      throw new Error("Expected is not a String or a RegExp");
    super(new RegExp(t), n);
  }
  asymmetricMatch(t) {
    const n = Je("String", t) && this.sample.test(t);
    return this.inverse ? !n : n;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Matching`;
  }
  getExpectedType() {
    return "string";
  }
}
class Ys extends St {
  constructor(n, o = 2, r = !1) {
    if (!Je("Number", n))
      throw new Error("Expected is not a Number");
    if (!Je("Number", o))
      throw new Error("Precision is not a Number");
    super(n);
    se(this, "precision");
    this.inverse = r, this.precision = o;
  }
  asymmetricMatch(n) {
    if (!Je("Number", n))
      return !1;
    let o = !1;
    return n === Number.POSITIVE_INFINITY && this.sample === Number.POSITIVE_INFINITY || n === Number.NEGATIVE_INFINITY && this.sample === Number.NEGATIVE_INFINITY ? o = !0 : o = Math.abs(this.sample - n) < 10 ** -this.precision / 2, this.inverse ? !o : o;
  }
  toString() {
    return `Number${this.inverse ? "Not" : ""}CloseTo`;
  }
  getExpectedType() {
    return "number";
  }
  toAsymmetricMatcher() {
    return [
      this.toString(),
      this.sample,
      `(${$h("digit", this.precision)})`
    ].join(" ");
  }
}
const _h = (e, t) => {
  t.addMethod(
    e.expect,
    "anything",
    () => new Oh()
  ), t.addMethod(
    e.expect,
    "any",
    (n) => new Ah(n)
  ), t.addMethod(
    e.expect,
    "stringContaining",
    (n) => new Us(n)
  ), t.addMethod(
    e.expect,
    "objectContaining",
    (n) => new Ks(n)
  ), t.addMethod(
    e.expect,
    "arrayContaining",
    (n) => new Gs(n)
  ), t.addMethod(
    e.expect,
    "stringMatching",
    (n) => new Js(n)
  ), t.addMethod(
    e.expect,
    "closeTo",
    (n, o) => new Ys(n, o)
  ), e.expect.not = {
    stringContaining: (n) => new Us(n, !0),
    objectContaining: (n) => new Ks(n, !0),
    arrayContaining: (n) => new Gs(n, !0),
    stringMatching: (n) => new Js(n, !0),
    closeTo: (n, o) => new Ys(n, o, !0)
  };
};
function Hs(e, t) {
  return e && t instanceof Promise && (t = t.finally(() => {
    const n = e.promises.indexOf(t);
    n !== -1 && e.promises.splice(n, 1);
  }), e.promises || (e.promises = []), e.promises.push(t)), t;
}
function tc(e, t) {
  return function(...n) {
    var o;
    const r = e.flag(this, "vitest-test");
    if (!(r != null && r.context._local ? r.context.expect.getState() : zt(globalThis[xn])).soft)
      return t.apply(this, n);
    if (!r)
      throw new Error("expect.soft() can only be used inside a test");
    try {
      return t.apply(this, n);
    } catch (i) {
      r.result || (r.result = { state: "fail" }), r.result.state = "fail", (o = r.result).errors || (o.errors = []), r.result.errors.push(Of(i));
    }
  };
}
const Mh = (e, t) => {
  const { AssertionError: n } = e, o = () => po(), r = To();
  function s(u, p) {
    const w = (b) => {
      const v = tc(t, p);
      t.addMethod(e.Assertion.prototype, b, v), t.addMethod(globalThis[Tn].matchers, b, v);
    };
    Array.isArray(u) ? u.forEach((b) => w(b)) : w(u);
  }
  ["throw", "throws", "Throw"].forEach((u) => {
    t.overwriteMethod(e.Assertion.prototype, u, (p) => function(...w) {
      const b = t.flag(this, "promise"), v = t.flag(this, "object"), h = t.flag(this, "negate");
      if (b === "rejects")
        t.flag(this, "object", () => {
          throw v;
        });
      else if (b === "resolves" && typeof v != "function") {
        if (h)
          return;
        {
          const A = t.flag(this, "message") || "expected promise to throw an error, but it didn't", M = {
            showDiff: !1
          };
          throw new n(A, M, t.flag(this, "ssfi"));
        }
      }
      p.apply(this, w);
    });
  }), s("withTest", function(u) {
    return t.flag(this, "vitest-test", u), this;
  }), s("toEqual", function(u) {
    const p = t.flag(this, "object"), w = de(
      p,
      u,
      [...r, Le]
    );
    return this.assert(
      w,
      "expected #{this} to deeply equal #{exp}",
      "expected #{this} to not deeply equal #{exp}",
      u,
      p
    );
  }), s("toStrictEqual", function(u) {
    const p = t.flag(this, "object"), w = de(
      p,
      u,
      [
        ...r,
        Le,
        Ws,
        eo,
        Vs
      ],
      !0
    );
    return this.assert(
      w,
      "expected #{this} to strictly equal #{exp}",
      "expected #{this} to not strictly equal #{exp}",
      u,
      p
    );
  }), s("toBe", function(u) {
    const p = this._obj, w = Object.is(p, u);
    let b = "";
    return w || (de(
      p,
      u,
      [
        ...r,
        Le,
        Ws,
        eo,
        Vs
      ],
      !0
    ) ? b = "toStrictEqual" : de(
      p,
      u,
      [...r, Le]
    ) && (b = "toEqual")), this.assert(
      w,
      xh(b),
      "expected #{this} not to be #{exp} // Object.is equality",
      u,
      p
    );
  }), s("toMatchObject", function(u) {
    const p = this._obj;
    return this.assert(
      de(p, u, [...r, Le, $n]),
      "expected #{this} to match object #{exp}",
      "expected #{this} to not match object #{exp}",
      u,
      p
    );
  }), s("toMatch", function(u) {
    return typeof u == "string" ? this.include(u) : this.match(u);
  }), s("toContain", function(u) {
    const p = this._obj;
    if (typeof Node < "u" && p instanceof Node) {
      if (!(u instanceof Node))
        throw new TypeError(`toContain() expected a DOM node as the argument, but got ${typeof u}`);
      return this.assert(
        p.contains(u),
        "expected #{this} to contain element #{exp}",
        "expected #{this} not to contain element #{exp}",
        u,
        p
      );
    }
    if (typeof DOMTokenList < "u" && p instanceof DOMTokenList) {
      He(u, "class name", ["string"]);
      const b = t.flag(this, "negate") ? p.value.replace(u, "").trim() : `${p.value} ${u}`;
      return this.assert(
        p.contains(u),
        `expected "${p.value}" to contain "${u}"`,
        `expected "${p.value}" not to contain "${u}"`,
        b,
        p.value
      );
    }
    return p != null && typeof p != "string" && t.flag(this, "object", Array.from(p)), this.contain(u);
  }), s("toContainEqual", function(u) {
    const p = t.flag(this, "object"), w = Array.from(p).findIndex((b) => de(b, u, r));
    this.assert(
      w !== -1,
      "expected #{this} to deep equally contain #{exp}",
      "expected #{this} to not deep equally contain #{exp}",
      u
    );
  }), s("toBeTruthy", function() {
    const u = t.flag(this, "object");
    this.assert(
      !!u,
      "expected #{this} to be truthy",
      "expected #{this} to not be truthy",
      u,
      !1
    );
  }), s("toBeFalsy", function() {
    const u = t.flag(this, "object");
    this.assert(
      !u,
      "expected #{this} to be falsy",
      "expected #{this} to not be falsy",
      u,
      !1
    );
  }), s("toBeGreaterThan", function(u) {
    const p = this._obj;
    return He(p, "actual", ["number", "bigint"]), He(u, "expected", ["number", "bigint"]), this.assert(
      p > u,
      `expected ${p} to be greater than ${u}`,
      `expected ${p} to be not greater than ${u}`,
      p,
      u,
      !1
    );
  }), s("toBeGreaterThanOrEqual", function(u) {
    const p = this._obj;
    return He(p, "actual", ["number", "bigint"]), He(u, "expected", ["number", "bigint"]), this.assert(
      p >= u,
      `expected ${p} to be greater than or equal to ${u}`,
      `expected ${p} to be not greater than or equal to ${u}`,
      p,
      u,
      !1
    );
  }), s("toBeLessThan", function(u) {
    const p = this._obj;
    return He(p, "actual", ["number", "bigint"]), He(u, "expected", ["number", "bigint"]), this.assert(
      p < u,
      `expected ${p} to be less than ${u}`,
      `expected ${p} to be not less than ${u}`,
      p,
      u,
      !1
    );
  }), s("toBeLessThanOrEqual", function(u) {
    const p = this._obj;
    return He(p, "actual", ["number", "bigint"]), He(u, "expected", ["number", "bigint"]), this.assert(
      p <= u,
      `expected ${p} to be less than or equal to ${u}`,
      `expected ${p} to be not less than or equal to ${u}`,
      p,
      u,
      !1
    );
  }), s("toBeNaN", function() {
    return this.be.NaN;
  }), s("toBeUndefined", function() {
    return this.be.undefined;
  }), s("toBeNull", function() {
    return this.be.null;
  }), s("toBeDefined", function() {
    const u = t.flag(this, "negate");
    return t.flag(this, "negate", !1), u ? this.be.undefined : this.not.be.undefined;
  }), s("toBeTypeOf", function(u) {
    const p = typeof this._obj, w = u === p;
    return this.assert(
      w,
      "expected #{this} to be type of #{exp}",
      "expected #{this} not to be type of #{exp}",
      u,
      p
    );
  }), s("toBeInstanceOf", function(u) {
    return this.instanceOf(u);
  }), s("toHaveLength", function(u) {
    return this.have.length(u);
  }), s("toHaveProperty", function(...u) {
    Array.isArray(u[0]) && (u[0] = u[0].map((k) => String(k).replace(/([.[\]])/g, "\\$1")).join("."));
    const p = this._obj, [w, b] = u, v = () => Object.prototype.hasOwnProperty.call(p, w) ? { value: p[w], exists: !0 } : t.getPathInfo(p, w), { value: h, exists: A } = v(), M = A && (u.length === 1 || de(b, h, r)), F = u.length === 1 ? "" : ` with value ${t.objDisplay(b)}`;
    return this.assert(
      M,
      `expected #{this} to have property "${w}"${F}`,
      `expected #{this} to not have property "${w}"${F}`,
      b,
      A ? h : void 0
    );
  }), s("toBeCloseTo", function(u, p = 2) {
    const w = this._obj;
    let b = !1, v = 0, h = 0;
    return u === Number.POSITIVE_INFINITY && w === Number.POSITIVE_INFINITY || u === Number.NEGATIVE_INFINITY && w === Number.NEGATIVE_INFINITY ? b = !0 : (v = 10 ** -p / 2, h = Math.abs(w - u), b = h < v), this.assert(
      b,
      `expected #{this} to be close to #{exp}, received difference is ${h}, but expected ${v}`,
      `expected #{this} to not be close to #{exp}, received difference is ${h}, but expected ${v}`,
      u,
      w,
      !1
    );
  });
  const i = (u) => {
    if (!Ga(u._obj))
      throw new TypeError(`${t.inspect(u._obj)} is not a spy or a call to a spy!`);
  }, a = (u) => (i(u), u._obj), c = (u) => {
    const p = u % 10, w = u % 100;
    return p === 1 && w !== 11 ? `${u}st` : p === 2 && w !== 12 ? `${u}nd` : p === 3 && w !== 13 ? `${u}rd` : `${u}th`;
  }, l = (u, p, w) => (u.mock.calls && (p += o().gray(`

Received: 

${u.mock.calls.map((b, v) => {
    let h = o().bold(`  ${c(v + 1)} ${u.getMockName()} call:

`);
    return w ? h += yn(w, b, { omitAnnotationLines: !0 }) : h += Qe(b).split(`
`).map((A) => `    ${A}`).join(`
`), h += `
`, h;
  }).join(`
`)}`)), p += o().gray(`

Number of calls: ${o().bold(u.mock.calls.length)}
`), p), f = (u, p, w) => (p += o().gray(`

Received: 

${u.mock.results.map((b, v) => {
    let h = o().bold(`  ${c(v + 1)} ${u.getMockName()} call return:

`);
    return w ? h += yn(w, b.value, { omitAnnotationLines: !0 }) : h += Qe(b).split(`
`).map((A) => `    ${A}`).join(`
`), h += `
`, h;
  }).join(`
`)}`), p += o().gray(`

Number of calls: ${o().bold(u.mock.calls.length)}
`), p);
  s(["toHaveBeenCalledTimes", "toBeCalledTimes"], function(u) {
    const p = a(this), w = p.getMockName(), b = p.mock.calls.length;
    return this.assert(
      b === u,
      `expected "${w}" to be called #{exp} times, but got ${b} times`,
      `expected "${w}" to not be called #{exp} times`,
      u,
      b,
      !1
    );
  }), s("toHaveBeenCalledOnce", function() {
    const u = a(this), p = u.getMockName(), w = u.mock.calls.length;
    return this.assert(
      w === 1,
      `expected "${p}" to be called once, but got ${w} times`,
      `expected "${p}" to not be called once`,
      1,
      w,
      !1
    );
  }), s(["toHaveBeenCalled", "toBeCalled"], function() {
    const u = a(this), p = u.getMockName(), w = u.mock.calls.length, b = w > 0, v = t.flag(this, "negate");
    let h = t.getMessage(
      this,
      [
        b,
        `expected "${p}" to be called at least once`,
        `expected "${p}" to not be called at all, but actually been called ${w} times`,
        !0,
        b
      ]
    );
    if (b && v && (h = l(u, h)), b && v || !b && !v)
      throw new n(h);
  }), s(["toHaveBeenCalledWith", "toBeCalledWith"], function(...u) {
    const p = a(this), w = p.getMockName(), b = p.mock.calls.some((A) => de(A, u, [...r, Le])), v = t.flag(this, "negate"), h = t.getMessage(
      this,
      [
        b,
        `expected "${w}" to be called with arguments: #{exp}`,
        `expected "${w}" to not be called with arguments: #{exp}`,
        u
      ]
    );
    if (b && v || !b && !v)
      throw new n(l(p, h, u));
  }), s(["toHaveBeenNthCalledWith", "nthCalledWith"], function(u, ...p) {
    const w = a(this), b = w.getMockName(), v = w.mock.calls[u - 1];
    this.assert(
      de(v, p, [...r, Le]),
      `expected ${c(u)} "${b}" call to have been called with #{exp}`,
      `expected ${c(u)} "${b}" call to not have been called with #{exp}`,
      p,
      v
    );
  }), s(["toHaveBeenLastCalledWith", "lastCalledWith"], function(...u) {
    const p = a(this), w = p.getMockName(), b = p.mock.calls[p.mock.calls.length - 1];
    this.assert(
      de(b, u, [...r, Le]),
      `expected last "${w}" call to have been called with #{exp}`,
      `expected last "${w}" call to not have been called with #{exp}`,
      u,
      b
    );
  }), s(["toThrow", "toThrowError"], function(u) {
    if (typeof u == "string" || typeof u > "u" || u instanceof RegExp)
      return this.throws(u);
    const p = this._obj, w = t.flag(this, "promise"), b = t.flag(this, "negate");
    let v = null;
    if (w === "rejects")
      v = p;
    else if (w === "resolves" && typeof p != "function") {
      if (b)
        return;
      {
        const h = t.flag(this, "message") || "expected promise to throw an error, but it didn't", A = {
          showDiff: !1
        };
        throw new n(h, A, t.flag(this, "ssfi"));
      }
    } else {
      let h = !1;
      try {
        p();
      } catch (A) {
        h = !0, v = A;
      }
      if (!h && !b) {
        const A = t.flag(this, "message") || "expected function to throw an error, but it didn't", M = {
          showDiff: !1
        };
        throw new n(A, M, t.flag(this, "ssfi"));
      }
    }
    if (typeof u == "function") {
      const h = u.name || u.prototype.constructor.name;
      return this.assert(
        v && v instanceof u,
        `expected error to be instance of ${h}`,
        `expected error not to be instance of ${h}`,
        u,
        v
      );
    }
    if (u instanceof Error)
      return this.assert(
        v && u.message === v.message,
        `expected error to have message: ${u.message}`,
        `expected error not to have message: ${u.message}`,
        u.message,
        v && v.message
      );
    if (typeof u == "object" && "asymmetricMatch" in u && typeof u.asymmetricMatch == "function") {
      const h = u;
      return this.assert(
        v && h.asymmetricMatch(v),
        "expected error to match asymmetric matcher",
        "expected error not to match asymmetric matcher",
        h,
        v
      );
    }
    throw new Error(`"toThrow" expects string, RegExp, function, Error instance or asymmetric matcher, got "${typeof u}"`);
  }), s(["toHaveReturned", "toReturn"], function() {
    const u = a(this), p = u.getMockName(), w = u.mock.calls.length > 0 && u.mock.results.some(({ type: b }) => b !== "throw");
    this.assert(
      w,
      `expected "${p}" to be successfully called at least once`,
      `expected "${p}" to not be successfully called`,
      w,
      !w,
      !1
    );
  }), s(["toHaveReturnedTimes", "toReturnTimes"], function(u) {
    const p = a(this), w = p.getMockName(), b = p.mock.results.reduce((v, { type: h }) => h === "throw" ? v : ++v, 0);
    this.assert(
      b === u,
      `expected "${w}" to be successfully called ${u} times`,
      `expected "${w}" to not be successfully called ${u} times`,
      `expected number of returns: ${u}`,
      `received number of returns: ${b}`,
      !1
    );
  }), s(["toHaveReturnedWith", "toReturnWith"], function(u) {
    const p = a(this), w = p.getMockName(), b = p.mock.results.some(({ type: A, value: M }) => A === "return" && de(u, M)), v = t.flag(this, "negate"), h = t.getMessage(
      this,
      [
        b,
        `expected "${w}" to return with: #{exp} at least once`,
        `expected "${w}" to not return with: #{exp}`,
        u
      ]
    );
    if (b && v || !b && !v)
      throw new n(f(p, h, u));
  }), s(["toHaveLastReturnedWith", "lastReturnedWith"], function(u) {
    const p = a(this), w = p.getMockName(), { value: b } = p.mock.results[p.mock.results.length - 1], v = de(b, u);
    this.assert(
      v,
      `expected last "${w}" call to return #{exp}`,
      `expected last "${w}" call to not return #{exp}`,
      u,
      b
    );
  }), s(["toHaveNthReturnedWith", "nthReturnedWith"], function(u, p) {
    const w = a(this), b = w.getMockName(), v = t.flag(this, "negate"), { type: h, value: A } = w.mock.results[u - 1], M = `${c(u)} call`;
    !v && h === "throw" && e.assert.fail(`expected ${M} to return #{exp}, but instead it threw an error`);
    const F = de(A, p);
    this.assert(
      F,
      `expected ${M} "${b}" call to return #{exp}`,
      `expected ${M} "${b}" call to not return #{exp}`,
      p,
      A
    );
  }), s("toSatisfy", function(u, p) {
    return this.be.satisfy(u, p);
  }), t.addProperty(e.Assertion.prototype, "resolves", function() {
    const p = new Error("resolves");
    t.flag(this, "promise", "resolves"), t.flag(this, "error", p);
    const w = t.flag(this, "vitest-test"), b = t.flag(this, "object");
    if (typeof (b == null ? void 0 : b.then) != "function")
      throw new TypeError(`You must provide a Promise to expect() when using .resolves, not '${typeof b}'.`);
    const v = new Proxy(this, {
      get: (h, A, M) => {
        const F = Reflect.get(h, A, M);
        return typeof F != "function" ? F instanceof e.Assertion ? v : F : async (...k) => {
          const N = b.then(
            (U) => (t.flag(this, "object", U), F.call(this, ...k)),
            (U) => {
              const B = new n(
                `promise rejected "${t.inspect(U)}" instead of resolving`,
                { showDiff: !1 }
              );
              throw B.cause = U, B.stack = p.stack.replace(p.message, B.message), B;
            }
          );
          return Hs(w, N);
        };
      }
    });
    return v;
  }), t.addProperty(e.Assertion.prototype, "rejects", function() {
    const p = new Error("rejects");
    t.flag(this, "promise", "rejects"), t.flag(this, "error", p);
    const w = t.flag(this, "vitest-test"), b = t.flag(this, "object"), v = typeof b == "function" ? b() : b;
    if (typeof (v == null ? void 0 : v.then) != "function")
      throw new TypeError(`You must provide a Promise to expect() when using .rejects, not '${typeof v}'.`);
    const h = new Proxy(this, {
      get: (A, M, F) => {
        const k = Reflect.get(A, M, F);
        return typeof k != "function" ? k instanceof e.Assertion ? h : k : async (...N) => {
          const U = v.then(
            (B) => {
              const G = new n(
                `promise resolved "${t.inspect(B)}" instead of rejecting`,
                { showDiff: !0, expected: new Error("rejected promise"), actual: B }
              );
              throw G.stack = p.stack.replace(p.message, G.message), G;
            },
            (B) => (t.flag(this, "object", B), k.call(this, ...N))
          );
          return Hs(w, U);
        };
      }
    });
    return h;
  });
};
function Ph(e, t) {
  const n = e._obj, o = Hn.flag(e, "negate"), r = Hn.flag(e, "promise") || "", s = {
    ...Ya(),
    diff: yn,
    stringify: Qe,
    iterableEquality: Le,
    subsetEquality: $n
  };
  return {
    state: {
      ...zt(t),
      customTesters: To(),
      isNot: o,
      utils: s,
      promise: r,
      equals: de,
      // needed for built-in jest-snapshots, but we don't use it
      suppressedErrors: []
    },
    isNot: o,
    obj: n
  };
}
class Xs extends Error {
  constructor(t, n, o) {
    super(t), this.actual = n, this.expected = o;
  }
}
function Ih(e, t) {
  return (n, o) => {
    Object.entries(t).forEach(([r, s]) => {
      function i(...f) {
        const { state: u, isNot: p, obj: w } = Ph(this, e), b = s.call(u, w, ...f);
        if (b && typeof b == "object" && b instanceof Promise)
          return b.then(({ pass: F, message: k, actual: N, expected: U }) => {
            if (F && p || !F && !p)
              throw new Xs(k(), N, U);
          });
        const { pass: v, message: h, actual: A, expected: M } = b;
        if (v && p || !v && !p)
          throw new Xs(h(), A, M);
      }
      const a = tc(o, i);
      o.addMethod(globalThis[Tn].matchers, r, a), o.addMethod(n.Assertion.prototype, r, a);
      class c extends St {
        constructor(u = !1, ...p) {
          super(p, u);
        }
        asymmetricMatch(u) {
          const { pass: p } = s.call(
            this.getMatcherContext(e),
            u,
            ...this.sample
          );
          return this.inverse ? !p : p;
        }
        toString() {
          return `${this.inverse ? "not." : ""}${r}`;
        }
        getExpectedType() {
          return "any";
        }
        toAsymmetricMatcher() {
          return `${this.toString()}<${this.sample.map(String).join(", ")}>`;
        }
      }
      const l = (...f) => new c(!1, ...f);
      Object.defineProperty(e, r, {
        configurable: !0,
        enumerable: !0,
        value: l,
        writable: !0
      }), Object.defineProperty(e.not, r, {
        configurable: !0,
        enumerable: !0,
        value: (...f) => new c(!0, ...f),
        writable: !0
      }), Object.defineProperty(globalThis[So], r, {
        configurable: !0,
        enumerable: !0,
        value: l,
        writable: !0
      });
    });
  };
}
const Ch = (e, t) => {
  t.addMethod(e.expect, "extend", (n, o) => {
    e.use(Ih(n, o));
  });
};
var bt = {}, xo = { exports: {} };
xo.exports;
(function(e) {
  const n = (s = 0) => (i) => `\x1B[${38 + s};5;${i}m`, o = (s = 0) => (i, a, c) => `\x1B[${38 + s};2;${i};${a};${c}m`;
  function r() {
    const s = /* @__PURE__ */ new Map(), i = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        overline: [53, 55],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        // Bright color
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    i.color.gray = i.color.blackBright, i.bgColor.bgGray = i.bgColor.bgBlackBright, i.color.grey = i.color.blackBright, i.bgColor.bgGrey = i.bgColor.bgBlackBright;
    for (const [a, c] of Object.entries(i)) {
      for (const [l, f] of Object.entries(c))
        i[l] = {
          open: `\x1B[${f[0]}m`,
          close: `\x1B[${f[1]}m`
        }, c[l] = i[l], s.set(f[0], f[1]);
      Object.defineProperty(i, a, {
        value: c,
        enumerable: !1
      });
    }
    return Object.defineProperty(i, "codes", {
      value: s,
      enumerable: !1
    }), i.color.close = "\x1B[39m", i.bgColor.close = "\x1B[49m", i.color.ansi256 = n(), i.color.ansi16m = o(), i.bgColor.ansi256 = n(10), i.bgColor.ansi16m = o(10), Object.defineProperties(i, {
      rgbToAnsi256: {
        value: (a, c, l) => a === c && c === l ? a < 8 ? 16 : a > 248 ? 231 : Math.round((a - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(a / 255 * 5) + 6 * Math.round(c / 255 * 5) + Math.round(l / 255 * 5),
        enumerable: !1
      },
      hexToRgb: {
        value: (a) => {
          const c = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(a.toString(16));
          if (!c)
            return [0, 0, 0];
          let { colorString: l } = c.groups;
          l.length === 3 && (l = l.split("").map((u) => u + u).join(""));
          const f = Number.parseInt(l, 16);
          return [
            f >> 16 & 255,
            f >> 8 & 255,
            f & 255
          ];
        },
        enumerable: !1
      },
      hexToAnsi256: {
        value: (a) => i.rgbToAnsi256(...i.hexToRgb(a)),
        enumerable: !1
      }
    }), i;
  }
  Object.defineProperty(e, "exports", {
    enumerable: !0,
    get: r
  });
})(xo);
var Nh = xo.exports, tt = {};
Object.defineProperty(tt, "__esModule", {
  value: !0
});
tt.printIteratorEntries = kh;
tt.printIteratorValues = Rh;
tt.printListItems = Fh;
tt.printObjectProperties = Dh;
const jh = (e, t) => {
  const n = Object.keys(e), o = t !== null ? n.sort(t) : n;
  return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((r) => {
    Object.getOwnPropertyDescriptor(e, r).enumerable && o.push(r);
  }), o;
};
function kh(e, t, n, o, r, s, i = ": ") {
  let a = "", c = 0, l = e.next();
  if (!l.done) {
    a += t.spacingOuter;
    const f = n + t.indent;
    for (; !l.done; ) {
      if (a += f, c++ === t.maxWidth) {
        a += "…";
        break;
      }
      const u = s(
        l.value[0],
        t,
        f,
        o,
        r
      ), p = s(
        l.value[1],
        t,
        f,
        o,
        r
      );
      a += u + i + p, l = e.next(), l.done ? t.min || (a += ",") : a += `,${t.spacingInner}`;
    }
    a += t.spacingOuter + n;
  }
  return a;
}
function Rh(e, t, n, o, r, s) {
  let i = "", a = 0, c = e.next();
  if (!c.done) {
    i += t.spacingOuter;
    const l = n + t.indent;
    for (; !c.done; ) {
      if (i += l, a++ === t.maxWidth) {
        i += "…";
        break;
      }
      i += s(c.value, t, l, o, r), c = e.next(), c.done ? t.min || (i += ",") : i += `,${t.spacingInner}`;
    }
    i += t.spacingOuter + n;
  }
  return i;
}
function Fh(e, t, n, o, r, s) {
  let i = "";
  if (e.length) {
    i += t.spacingOuter;
    const a = n + t.indent;
    for (let c = 0; c < e.length; c++) {
      if (i += a, c === t.maxWidth) {
        i += "…";
        break;
      }
      c in e && (i += s(e[c], t, a, o, r)), c < e.length - 1 ? i += `,${t.spacingInner}` : t.min || (i += ",");
    }
    i += t.spacingOuter + n;
  }
  return i;
}
function Dh(e, t, n, o, r, s) {
  let i = "";
  const a = jh(e, t.compareKeys);
  if (a.length) {
    i += t.spacingOuter;
    const c = n + t.indent;
    for (let l = 0; l < a.length; l++) {
      const f = a[l], u = s(f, t, c, o, r), p = s(e[f], t, c, o, r);
      i += `${c + u}: ${p}`, l < a.length - 1 ? i += `,${t.spacingInner}` : t.min || (i += ",");
    }
    i += t.spacingOuter + n;
  }
  return i;
}
var ft = {};
Object.defineProperty(ft, "__esModule", {
  value: !0
});
ft.test = ft.serialize = ft.default = void 0;
var Qs = tt, Fr = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
const Bh = typeof Fr == "function" && Fr.for ? Fr.for("jest.asymmetricMatcher") : 1267621, Rn = " ", nc = (e, t, n, o, r, s) => {
  const i = e.toString();
  if (i === "ArrayContaining" || i === "ArrayNotContaining")
    return ++o > t.maxDepth ? `[${i}]` : `${i + Rn}[${(0, Qs.printListItems)(
      e.sample,
      t,
      n,
      o,
      r,
      s
    )}]`;
  if (i === "ObjectContaining" || i === "ObjectNotContaining")
    return ++o > t.maxDepth ? `[${i}]` : `${i + Rn}{${(0, Qs.printObjectProperties)(
      e.sample,
      t,
      n,
      o,
      r,
      s
    )}}`;
  if (i === "StringMatching" || i === "StringNotMatching" || i === "StringContaining" || i === "StringNotContaining")
    return i + Rn + s(e.sample, t, n, o, r);
  if (typeof e.toAsymmetricMatcher != "function")
    throw new Error(
      `Asymmetric matcher ${e.constructor.name} does not implement toAsymmetricMatcher()`
    );
  return e.toAsymmetricMatcher();
};
ft.serialize = nc;
const rc = (e) => e && e.$$typeof === Bh;
ft.test = rc;
const Lh = {
  serialize: nc,
  test: rc
};
var qh = Lh;
ft.default = qh;
var pt = {};
Object.defineProperty(pt, "__esModule", {
  value: !0
});
pt.test = pt.serialize = pt.default = void 0;
var Zs = tt;
const zh = " ", oc = ["DOMStringMap", "NamedNodeMap"], Wh = /^(HTML\w*Collection|NodeList)$/, Vh = (e) => oc.indexOf(e) !== -1 || Wh.test(e), sc = (e) => e && e.constructor && !!e.constructor.name && Vh(e.constructor.name);
pt.test = sc;
const Uh = (e) => e.constructor.name === "NamedNodeMap", ic = (e, t, n, o, r, s) => {
  const i = e.constructor.name;
  return ++o > t.maxDepth ? `[${i}]` : (t.min ? "" : i + zh) + (oc.indexOf(i) !== -1 ? `{${(0, Zs.printObjectProperties)(
    Uh(e) ? Array.from(e).reduce((a, c) => (a[c.name] = c.value, a), {}) : {
      ...e
    },
    t,
    n,
    o,
    r,
    s
  )}}` : `[${(0, Zs.printListItems)(
    Array.from(e),
    t,
    n,
    o,
    r,
    s
  )}]`);
};
pt.serialize = ic;
const Kh = {
  serialize: ic,
  test: sc
};
var Gh = Kh;
pt.default = Gh;
var ht = {}, Re = {}, $o = {};
Object.defineProperty($o, "__esModule", {
  value: !0
});
$o.default = Jh;
function Jh(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(Re, "__esModule", {
  value: !0
});
Re.printText = Re.printProps = Re.printElementAsLeaf = Re.printElement = Re.printComment = Re.printChildren = void 0;
var ac = Yh($o);
function Yh(e) {
  return e && e.__esModule ? e : { default: e };
}
const Hh = (e, t, n, o, r, s, i) => {
  const a = o + n.indent, c = n.colors;
  return e.map((l) => {
    const f = t[l];
    let u = i(f, n, a, r, s);
    return typeof f != "string" && (u.indexOf(`
`) !== -1 && (u = n.spacingOuter + a + u + n.spacingOuter + o), u = `{${u}}`), `${n.spacingInner + o + c.prop.open + l + c.prop.close}=${c.value.open}${u}${c.value.close}`;
  }).join("");
};
Re.printProps = Hh;
const Xh = (e, t, n, o, r, s) => e.map(
  (i) => t.spacingOuter + n + (typeof i == "string" ? cc(i, t) : s(i, t, n, o, r))
).join("");
Re.printChildren = Xh;
const cc = (e, t) => {
  const n = t.colors.content;
  return n.open + (0, ac.default)(e) + n.close;
};
Re.printText = cc;
const Qh = (e, t) => {
  const n = t.colors.comment;
  return `${n.open}<!--${(0, ac.default)(e)}-->${n.close}`;
};
Re.printComment = Qh;
const Zh = (e, t, n, o, r) => {
  const s = o.colors.tag;
  return `${s.open}<${e}${t && s.close + t + o.spacingOuter + r + s.open}${n ? `>${s.close}${n}${o.spacingOuter}${r}${s.open}</${e}` : `${t && !o.min ? "" : " "}/`}>${s.close}`;
};
Re.printElement = Zh;
const em = (e, t) => {
  const n = t.colors.tag;
  return `${n.open}<${e}${n.close} …${n.open} />${n.close}`;
};
Re.printElementAsLeaf = em;
Object.defineProperty(ht, "__esModule", {
  value: !0
});
ht.test = ht.serialize = ht.default = void 0;
var Rt = Re;
const tm = 1, uc = 3, lc = 8, fc = 11, nm = /^((HTML|SVG)\w*)?Element$/, rm = (e) => {
  try {
    return typeof e.hasAttribute == "function" && e.hasAttribute("is");
  } catch {
    return !1;
  }
}, om = (e) => {
  const t = e.constructor.name, { nodeType: n, tagName: o } = e, r = typeof o == "string" && o.includes("-") || rm(e);
  return n === tm && (nm.test(t) || r) || n === uc && t === "Text" || n === lc && t === "Comment" || n === fc && t === "DocumentFragment";
}, pc = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.name) && om(e);
};
ht.test = pc;
function sm(e) {
  return e.nodeType === uc;
}
function im(e) {
  return e.nodeType === lc;
}
function Dr(e) {
  return e.nodeType === fc;
}
const hc = (e, t, n, o, r, s) => {
  if (sm(e))
    return (0, Rt.printText)(e.data, t);
  if (im(e))
    return (0, Rt.printComment)(e.data, t);
  const i = Dr(e) ? "DocumentFragment" : e.tagName.toLowerCase();
  return ++o > t.maxDepth ? (0, Rt.printElementAsLeaf)(i, t) : (0, Rt.printElement)(
    i,
    (0, Rt.printProps)(
      Dr(e) ? [] : Array.from(e.attributes, (a) => a.name).sort(),
      Dr(e) ? {} : Array.from(e.attributes).reduce((a, c) => (a[c.name] = c.value, a), {}),
      t,
      n + t.indent,
      o,
      r,
      s
    ),
    (0, Rt.printChildren)(
      Array.prototype.slice.call(e.childNodes || e.children),
      t,
      n + t.indent,
      o,
      r,
      s
    ),
    t,
    n
  );
};
ht.serialize = hc;
const am = {
  serialize: hc,
  test: pc
};
var cm = am;
ht.default = cm;
var mt = {};
Object.defineProperty(mt, "__esModule", {
  value: !0
});
mt.test = mt.serialize = mt.default = void 0;
var bn = tt;
const um = "@@__IMMUTABLE_ITERABLE__@@", lm = "@@__IMMUTABLE_LIST__@@", fm = "@@__IMMUTABLE_KEYED__@@", pm = "@@__IMMUTABLE_MAP__@@", ei = "@@__IMMUTABLE_ORDERED__@@", hm = "@@__IMMUTABLE_RECORD__@@", mm = "@@__IMMUTABLE_SEQ__@@", dm = "@@__IMMUTABLE_SET__@@", ym = "@@__IMMUTABLE_STACK__@@", Jt = (e) => `Immutable.${e}`, ur = (e) => `[${e}]`, wn = " ", ti = "…", gm = (e, t, n, o, r, s, i) => ++o > t.maxDepth ? ur(Jt(i)) : `${Jt(i) + wn}{${(0, bn.printIteratorEntries)(
  e.entries(),
  t,
  n,
  o,
  r,
  s
)}}`;
function bm(e) {
  let t = 0;
  return {
    next() {
      if (t < e._keys.length) {
        const n = e._keys[t++];
        return {
          done: !1,
          value: [n, e.get(n)]
        };
      }
      return {
        done: !0,
        value: void 0
      };
    }
  };
}
const wm = (e, t, n, o, r, s) => {
  const i = Jt(e._name || "Record");
  return ++o > t.maxDepth ? ur(i) : `${i + wn}{${(0, bn.printIteratorEntries)(
    bm(e),
    t,
    n,
    o,
    r,
    s
  )}}`;
}, vm = (e, t, n, o, r, s) => {
  const i = Jt("Seq");
  return ++o > t.maxDepth ? ur(i) : e[fm] ? `${i + wn}{${// from Immutable collection of entries or from ECMAScript object
  e._iter || e._object ? (0, bn.printIteratorEntries)(
    e.entries(),
    t,
    n,
    o,
    r,
    s
  ) : ti}}` : `${i + wn}[${e._iter || // from Immutable collection of values
  e._array || // from ECMAScript array
  e._collection || // from ECMAScript collection in immutable v4
  e._iterable ? (0, bn.printIteratorValues)(
    e.values(),
    t,
    n,
    o,
    r,
    s
  ) : ti}]`;
}, Br = (e, t, n, o, r, s, i) => ++o > t.maxDepth ? ur(Jt(i)) : `${Jt(i) + wn}[${(0, bn.printIteratorValues)(
  e.values(),
  t,
  n,
  o,
  r,
  s
)}]`, mc = (e, t, n, o, r, s) => e[pm] ? gm(
  e,
  t,
  n,
  o,
  r,
  s,
  e[ei] ? "OrderedMap" : "Map"
) : e[lm] ? Br(
  e,
  t,
  n,
  o,
  r,
  s,
  "List"
) : e[dm] ? Br(
  e,
  t,
  n,
  o,
  r,
  s,
  e[ei] ? "OrderedSet" : "Set"
) : e[ym] ? Br(
  e,
  t,
  n,
  o,
  r,
  s,
  "Stack"
) : e[mm] ? vm(e, t, n, o, r, s) : wm(e, t, n, o, r, s);
mt.serialize = mc;
const dc = (e) => e && (e[um] === !0 || e[hm] === !0);
mt.test = dc;
const Em = {
  serialize: mc,
  test: dc
};
var Sm = Em;
mt.default = Sm;
var dt = {}, to = { exports: {} }, pe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ni;
function Tm() {
  if (ni)
    return pe;
  ni = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function v(h) {
    if (typeof h == "object" && h !== null) {
      var A = h.$$typeof;
      switch (A) {
        case e:
          switch (h = h.type, h) {
            case n:
            case r:
            case o:
            case l:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case i:
                case c:
                case p:
                case u:
                case s:
                  return h;
                default:
                  return A;
              }
          }
        case t:
          return A;
      }
    }
  }
  return pe.ContextConsumer = i, pe.ContextProvider = s, pe.Element = e, pe.ForwardRef = c, pe.Fragment = n, pe.Lazy = p, pe.Memo = u, pe.Portal = t, pe.Profiler = r, pe.StrictMode = o, pe.Suspense = l, pe.SuspenseList = f, pe.isAsyncMode = function() {
    return !1;
  }, pe.isConcurrentMode = function() {
    return !1;
  }, pe.isContextConsumer = function(h) {
    return v(h) === i;
  }, pe.isContextProvider = function(h) {
    return v(h) === s;
  }, pe.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, pe.isForwardRef = function(h) {
    return v(h) === c;
  }, pe.isFragment = function(h) {
    return v(h) === n;
  }, pe.isLazy = function(h) {
    return v(h) === p;
  }, pe.isMemo = function(h) {
    return v(h) === u;
  }, pe.isPortal = function(h) {
    return v(h) === t;
  }, pe.isProfiler = function(h) {
    return v(h) === r;
  }, pe.isStrictMode = function(h) {
    return v(h) === o;
  }, pe.isSuspense = function(h) {
    return v(h) === l;
  }, pe.isSuspenseList = function(h) {
    return v(h) === f;
  }, pe.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === r || h === o || h === l || h === f || h === w || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === u || h.$$typeof === s || h.$$typeof === i || h.$$typeof === c || h.$$typeof === b || h.getModuleId !== void 0);
  }, pe.typeOf = v, pe;
}
var he = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ri;
function xm() {
  return ri || (ri = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), b = !1, v = !1, h = !1, A = !1, M = !1, F;
    F = Symbol.for("react.module.reference");
    function k(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === n || O === r || M || O === o || O === l || O === f || A || O === w || b || v || h || typeof O == "object" && O !== null && (O.$$typeof === p || O.$$typeof === u || O.$$typeof === s || O.$$typeof === i || O.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === F || O.getModuleId !== void 0));
    }
    function N(O) {
      if (typeof O == "object" && O !== null) {
        var ce = O.$$typeof;
        switch (ce) {
          case e:
            var oe = O.type;
            switch (oe) {
              case n:
              case r:
              case o:
              case l:
              case f:
                return oe;
              default:
                var ye = oe && oe.$$typeof;
                switch (ye) {
                  case a:
                  case i:
                  case c:
                  case p:
                  case u:
                  case s:
                    return ye;
                  default:
                    return ce;
                }
            }
          case t:
            return ce;
        }
      }
    }
    var U = i, B = s, G = e, ae = c, V = n, xe = p, we = u, $e = t, Pe = r, Fe = o, Ie = l, Ne = f, De = !1, m = !1;
    function T(O) {
      return De || (De = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function x(O) {
      return m || (m = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function P(O) {
      return N(O) === i;
    }
    function j(O) {
      return N(O) === s;
    }
    function D(O) {
      return typeof O == "object" && O !== null && O.$$typeof === e;
    }
    function I(O) {
      return N(O) === c;
    }
    function $(O) {
      return N(O) === n;
    }
    function q(O) {
      return N(O) === p;
    }
    function K(O) {
      return N(O) === u;
    }
    function J(O) {
      return N(O) === t;
    }
    function ne(O) {
      return N(O) === r;
    }
    function Z(O) {
      return N(O) === o;
    }
    function H(O) {
      return N(O) === l;
    }
    function re(O) {
      return N(O) === f;
    }
    he.ContextConsumer = U, he.ContextProvider = B, he.Element = G, he.ForwardRef = ae, he.Fragment = V, he.Lazy = xe, he.Memo = we, he.Portal = $e, he.Profiler = Pe, he.StrictMode = Fe, he.Suspense = Ie, he.SuspenseList = Ne, he.isAsyncMode = T, he.isConcurrentMode = x, he.isContextConsumer = P, he.isContextProvider = j, he.isElement = D, he.isForwardRef = I, he.isFragment = $, he.isLazy = q, he.isMemo = K, he.isPortal = J, he.isProfiler = ne, he.isStrictMode = Z, he.isSuspense = H, he.isSuspenseList = re, he.isValidElementType = k, he.typeOf = N;
  }()), he;
}
process.env.NODE_ENV === "production" ? to.exports = Tm() : to.exports = xm();
var $m = to.exports;
Object.defineProperty(dt, "__esModule", {
  value: !0
});
dt.test = dt.serialize = dt.default = void 0;
var Ot = Om($m), Fn = Re;
function yc(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (yc = function(o) {
    return o ? n : t;
  })(e);
}
function Om(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = yc(t);
  if (n && n.has(e))
    return n.get(e);
  var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var i = r ? Object.getOwnPropertyDescriptor(e, s) : null;
      i && (i.get || i.set) ? Object.defineProperty(o, s, i) : o[s] = e[s];
    }
  return o.default = e, n && n.set(e, o), o;
}
const gc = (e, t = []) => (Array.isArray(e) ? e.forEach((n) => {
  gc(n, t);
}) : e != null && e !== !1 && t.push(e), t), oi = (e) => {
  const t = e.type;
  if (typeof t == "string")
    return t;
  if (typeof t == "function")
    return t.displayName || t.name || "Unknown";
  if (Ot.isFragment(e))
    return "React.Fragment";
  if (Ot.isSuspense(e))
    return "React.Suspense";
  if (typeof t == "object" && t !== null) {
    if (Ot.isContextProvider(e))
      return "Context.Provider";
    if (Ot.isContextConsumer(e))
      return "Context.Consumer";
    if (Ot.isForwardRef(e)) {
      if (t.displayName)
        return t.displayName;
      const n = t.render.displayName || t.render.name || "";
      return n !== "" ? `ForwardRef(${n})` : "ForwardRef";
    }
    if (Ot.isMemo(e)) {
      const n = t.displayName || t.type.displayName || t.type.name || "";
      return n !== "" ? `Memo(${n})` : "Memo";
    }
  }
  return "UNDEFINED";
}, Am = (e) => {
  const { props: t } = e;
  return Object.keys(t).filter((n) => n !== "children" && t[n] !== void 0).sort();
}, bc = (e, t, n, o, r, s) => ++o > t.maxDepth ? (0, Fn.printElementAsLeaf)(oi(e), t) : (0, Fn.printElement)(
  oi(e),
  (0, Fn.printProps)(
    Am(e),
    e.props,
    t,
    n + t.indent,
    o,
    r,
    s
  ),
  (0, Fn.printChildren)(
    gc(e.props.children),
    t,
    n + t.indent,
    o,
    r,
    s
  ),
  t,
  n
);
dt.serialize = bc;
const wc = (e) => e != null && Ot.isElement(e);
dt.test = wc;
const _m = {
  serialize: bc,
  test: wc
};
var Mm = _m;
dt.default = Mm;
var yt = {};
Object.defineProperty(yt, "__esModule", {
  value: !0
});
yt.test = yt.serialize = yt.default = void 0;
var Dn = Re, Lr = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
const Pm = typeof Lr == "function" && Lr.for ? Lr.for("react.test.json") : 245830487, Im = (e) => {
  const { props: t } = e;
  return t ? Object.keys(t).filter((n) => t[n] !== void 0).sort() : [];
}, vc = (e, t, n, o, r, s) => ++o > t.maxDepth ? (0, Dn.printElementAsLeaf)(e.type, t) : (0, Dn.printElement)(
  e.type,
  e.props ? (0, Dn.printProps)(
    Im(e),
    e.props,
    t,
    n + t.indent,
    o,
    r,
    s
  ) : "",
  e.children ? (0, Dn.printChildren)(
    e.children,
    t,
    n + t.indent,
    o,
    r,
    s
  ) : "",
  t,
  n
);
yt.serialize = vc;
const Ec = (e) => e && e.$$typeof === Pm;
yt.test = Ec;
const Cm = {
  serialize: vc,
  test: Ec
};
var Nm = Cm;
yt.default = Nm;
Object.defineProperty(bt, "__esModule", {
  value: !0
});
bt.default = bt.DEFAULT_OPTIONS = void 0;
var jm = bt.format = Nc, Sc = bt.plugins = void 0, km = Ct(Nh), nn = tt, Rm = Ct(
  ft
), Fm = Ct(pt), Dm = Ct(ht), Bm = Ct(mt), Lm = Ct(dt), qm = Ct(
  yt
);
function Ct(e) {
  return e && e.__esModule ? e : { default: e };
}
const Tc = Object.prototype.toString, zm = Date.prototype.toISOString, Wm = Error.prototype.toString, si = RegExp.prototype.toString, qr = (e) => typeof e.constructor == "function" && e.constructor.name || "Object", Vm = (e) => typeof window < "u" && e === window, Um = /^Symbol\((.*)\)(.*)$/, Km = /\n/gi;
class xc extends Error {
  constructor(t, n) {
    super(t), this.stack = n, this.name = this.constructor.name;
  }
}
function Gm(e) {
  return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
}
function Jm(e) {
  return Object.is(e, -0) ? "-0" : String(e);
}
function Ym(e) {
  return `${e}n`;
}
function ii(e, t) {
  return t ? `[Function ${e.name || "anonymous"}]` : "[Function]";
}
function ai(e) {
  return String(e).replace(Um, "Symbol($1)");
}
function ci(e) {
  return `[${Wm.call(e)}]`;
}
function $c(e, t, n, o) {
  if (e === !0 || e === !1)
    return `${e}`;
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const r = typeof e;
  if (r === "number")
    return Jm(e);
  if (r === "bigint")
    return Ym(e);
  if (r === "string")
    return o ? `"${e.replace(/"|\\/g, "\\$&")}"` : `"${e}"`;
  if (r === "function")
    return ii(e, t);
  if (r === "symbol")
    return ai(e);
  const s = Tc.call(e);
  return s === "[object WeakMap]" ? "WeakMap {}" : s === "[object WeakSet]" ? "WeakSet {}" : s === "[object Function]" || s === "[object GeneratorFunction]" ? ii(e, t) : s === "[object Symbol]" ? ai(e) : s === "[object Date]" ? isNaN(+e) ? "Date { NaN }" : zm.call(e) : s === "[object Error]" ? ci(e) : s === "[object RegExp]" ? n ? si.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : si.call(e) : e instanceof Error ? ci(e) : null;
}
function Oc(e, t, n, o, r, s) {
  if (r.indexOf(e) !== -1)
    return "[Circular]";
  r = r.slice(), r.push(e);
  const i = ++o > t.maxDepth, a = t.min;
  if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == "function" && !s)
    return ot(e.toJSON(), t, n, o, r, !0);
  const c = Tc.call(e);
  return c === "[object Arguments]" ? i ? "[Arguments]" : `${a ? "" : "Arguments "}[${(0, nn.printListItems)(
    e,
    t,
    n,
    o,
    r,
    ot
  )}]` : Gm(c) ? i ? `[${e.constructor.name}]` : `${a || !t.printBasicPrototype && e.constructor.name === "Array" ? "" : `${e.constructor.name} `}[${(0, nn.printListItems)(
    e,
    t,
    n,
    o,
    r,
    ot
  )}]` : c === "[object Map]" ? i ? "[Map]" : `Map {${(0, nn.printIteratorEntries)(
    e.entries(),
    t,
    n,
    o,
    r,
    ot,
    " => "
  )}}` : c === "[object Set]" ? i ? "[Set]" : `Set {${(0, nn.printIteratorValues)(
    e.values(),
    t,
    n,
    o,
    r,
    ot
  )}}` : i || Vm(e) ? `[${qr(e)}]` : `${a || !t.printBasicPrototype && qr(e) === "Object" ? "" : `${qr(e)} `}{${(0, nn.printObjectProperties)(
    e,
    t,
    n,
    o,
    r,
    ot
  )}}`;
}
function Hm(e) {
  return e.serialize != null;
}
function Ac(e, t, n, o, r, s) {
  let i;
  try {
    i = Hm(e) ? e.serialize(t, n, o, r, s, ot) : e.print(
      t,
      (a) => ot(a, n, o, r, s),
      (a) => {
        const c = o + n.indent;
        return c + a.replace(Km, `
${c}`);
      },
      {
        edgeSpacing: n.spacingOuter,
        min: n.min,
        spacing: n.spacingInner
      },
      n.colors
    );
  } catch (a) {
    throw new xc(a.message, a.stack);
  }
  if (typeof i != "string")
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`
    );
  return i;
}
function _c(e, t) {
  for (let n = 0; n < e.length; n++)
    try {
      if (e[n].test(t))
        return e[n];
    } catch (o) {
      throw new xc(o.message, o.stack);
    }
  return null;
}
function ot(e, t, n, o, r, s) {
  const i = _c(t.plugins, e);
  if (i !== null)
    return Ac(i, e, t, n, o, r);
  const a = $c(
    e,
    t.printFunctionName,
    t.escapeRegex,
    t.escapeString
  );
  return a !== null ? a : Oc(
    e,
    t,
    n,
    o,
    r,
    s
  );
}
const Oo = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, Mc = Object.keys(Oo), Xm = (e) => e, Ue = Xm({
  callToJSON: !0,
  compareKeys: void 0,
  escapeRegex: !1,
  escapeString: !0,
  highlight: !1,
  indent: 2,
  maxDepth: 1 / 0,
  maxWidth: 1 / 0,
  min: !1,
  plugins: [],
  printBasicPrototype: !0,
  printFunctionName: !0,
  theme: Oo
});
bt.DEFAULT_OPTIONS = Ue;
function Qm(e) {
  if (Object.keys(e).forEach((t) => {
    if (!Object.prototype.hasOwnProperty.call(Ue, t))
      throw new Error(`pretty-format: Unknown option "${t}".`);
  }), e.min && e.indent !== void 0 && e.indent !== 0)
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.'
    );
  if (e.theme !== void 0) {
    if (e.theme === null)
      throw new Error('pretty-format: Option "theme" must not be null.');
    if (typeof e.theme != "object")
      throw new Error(
        `pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`
      );
  }
}
const Zm = (e) => Mc.reduce((t, n) => {
  const o = e.theme && e.theme[n] !== void 0 ? e.theme[n] : Oo[n], r = o && km.default[o];
  if (r && typeof r.close == "string" && typeof r.open == "string")
    t[n] = r;
  else
    throw new Error(
      `pretty-format: Option "theme" has a key "${n}" whose value "${o}" is undefined in ansi-styles.`
    );
  return t;
}, /* @__PURE__ */ Object.create(null)), ed = () => Mc.reduce((e, t) => (e[t] = {
  close: "",
  open: ""
}, e), /* @__PURE__ */ Object.create(null)), Pc = (e) => (e == null ? void 0 : e.printFunctionName) ?? Ue.printFunctionName, Ic = (e) => (e == null ? void 0 : e.escapeRegex) ?? Ue.escapeRegex, Cc = (e) => (e == null ? void 0 : e.escapeString) ?? Ue.escapeString, ui = (e) => ({
  callToJSON: (e == null ? void 0 : e.callToJSON) ?? Ue.callToJSON,
  colors: e != null && e.highlight ? Zm(e) : ed(),
  compareKeys: typeof (e == null ? void 0 : e.compareKeys) == "function" || (e == null ? void 0 : e.compareKeys) === null ? e.compareKeys : Ue.compareKeys,
  escapeRegex: Ic(e),
  escapeString: Cc(e),
  indent: e != null && e.min ? "" : td((e == null ? void 0 : e.indent) ?? Ue.indent),
  maxDepth: (e == null ? void 0 : e.maxDepth) ?? Ue.maxDepth,
  maxWidth: (e == null ? void 0 : e.maxWidth) ?? Ue.maxWidth,
  min: (e == null ? void 0 : e.min) ?? Ue.min,
  plugins: (e == null ? void 0 : e.plugins) ?? Ue.plugins,
  printBasicPrototype: (e == null ? void 0 : e.printBasicPrototype) ?? !0,
  printFunctionName: Pc(e),
  spacingInner: e != null && e.min ? " " : `
`,
  spacingOuter: e != null && e.min ? "" : `
`
});
function td(e) {
  return new Array(e + 1).join(" ");
}
function Nc(e, t) {
  if (t && (Qm(t), t.plugins)) {
    const o = _c(t.plugins, e);
    if (o !== null)
      return Ac(o, e, ui(t), "", 0, []);
  }
  const n = $c(
    e,
    Pc(t),
    Ic(t),
    Cc(t)
  );
  return n !== null ? n : Oc(e, ui(t), "", 0, []);
}
const nd = {
  AsymmetricMatcher: Rm.default,
  DOMCollection: Fm.default,
  DOMElement: Dm.default,
  Immutable: Bm.default,
  ReactElement: Lm.default,
  ReactTestComponent: qm.default
};
Sc = bt.plugins = nd;
var rd = Nc;
bt.default = rd;
function od(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jc = { exports: {} };
/*
 * @version    1.4.0
 * @date       2015-10-26
 * @stability  3 - Stable
 * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
 * @license    MIT License
 */
var li = function(e, t) {
  var n, o, r = 1, s = 0, i = 0, a = String.alphabet;
  function c(l, f, u) {
    if (u) {
      for (n = f; u = c(l, n), u < 76 && u > 65; )
        ++n;
      return +l.slice(f - 1, n);
    }
    return u = a && a.indexOf(l.charAt(f)), u > -1 ? u + 76 : (u = l.charCodeAt(f) || 0, u < 45 || u > 127 ? u : u < 46 ? 65 : u < 48 ? u - 1 : u < 58 ? u + 18 : u < 65 ? u - 11 : u < 91 ? u + 11 : u < 97 ? u - 37 : u < 123 ? u + 5 : u - 63);
  }
  if ((e += "") != (t += "")) {
    for (; r; )
      if (o = c(e, s++), r = c(t, i++), o < 76 && r < 76 && o > 66 && r > 66 && (o = c(e, s, s), r = c(t, i, s = n), i = n), o != r)
        return o < r ? -1 : 1;
  }
  return 0;
};
try {
  jc.exports = li;
} catch {
  String.naturalCompare = li;
}
var sd = jc.exports, id = /* @__PURE__ */ od(sd);
function kc(e) {
  return e != null;
}
function ad(e) {
  return e === null || typeof e != "function" && typeof e != "object";
}
function Un(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function cd(e) {
  let t = -1, n = null, o = 0, r = 0, s = null;
  for (; t <= e.length; ) {
    s = e[t], t++;
    const i = e[t];
    if ((i === '"' || i === "'" || i === "`") && s !== "\\" && (n === i ? n = null : n || (n = i)), n || (i === "(" && o++, i === ")" && r++), o && r && o === r)
      return t;
  }
  return null;
}
let ud = () => "Promise{…}";
try {
  const { getPromiseDetails: e, kPending: t, kRejected: n } = process.binding("util");
  Array.isArray(e(Promise.resolve())) && (ud = (o, r) => {
    const [s, i] = e(o);
    return s === t ? "Promise{<pending>}" : `Promise${s === n ? "!" : ""}{${r.inspect(i, r)}}`;
  });
} catch {
}
let fi = !1;
try {
  const e = require("util");
  fi = e.inspect ? e.inspect.custom : !1;
} catch {
  fi = !1;
}
const Ao = /\r?\n/;
function ld(e, t, n) {
  const o = e.split(Ao), r = /\r\n/.test(e) ? 2 : 1;
  let s = 0;
  if (t > o.length)
    return e.length;
  for (let i = 0; i < t - 1; i++)
    s += o[i].length + r;
  return s + n;
}
function fd(e, t) {
  if (t > e.length)
    throw new Error(
      `offset is longer than source length! offset ${t} > length ${e.length}`
    );
  const n = e.split(Ao), o = /\r\n/.test(e) ? 2 : 1;
  let r = 0, s = 0;
  for (; s < n.length; s++) {
    const i = n[s].length + o;
    if (r + i >= t)
      break;
    r += i;
  }
  return s + 1;
}
var Rc;
Rc = /\r?\n|[\r\u2028\u2029]/y;
RegExp(Rc.source);
var Fc = {
  keyword: [
    "break",
    "case",
    "catch",
    "continue",
    "debugger",
    "default",
    "do",
    "else",
    "finally",
    "for",
    "function",
    "if",
    "return",
    "switch",
    "throw",
    "try",
    "var",
    "const",
    "while",
    "with",
    "new",
    "this",
    "super",
    "class",
    "extends",
    "export",
    "import",
    "null",
    "true",
    "false",
    "in",
    "instanceof",
    "typeof",
    "void",
    "delete"
  ],
  strict: [
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "yield"
  ]
};
new Set(Fc.keyword);
new Set(Fc.strict);
const pd = (e, t, n, o, r, s) => {
  const i = e.getMockName(), a = i === "vi.fn()" ? "" : ` ${i}`;
  let c = "";
  if (e.mock.calls.length !== 0) {
    const l = n + t.indent;
    c = ` {${t.spacingOuter}${l}"calls": ${s(e.mock.calls, t, l, o, r)}${t.min ? ", " : ","}${t.spacingOuter}${l}"results": ${s(e.mock.results, t, l, o, r)}${t.min ? "" : ","}${t.spacingOuter}${n}}`;
  }
  return `[MockFunction${a}]${c}`;
}, hd = (e) => e && !!e._isMockFunction, md = { serialize: pd, test: hd }, {
  DOMCollection: dd,
  DOMElement: yd,
  Immutable: gd,
  ReactElement: bd,
  ReactTestComponent: wd,
  AsymmetricMatcher: vd
} = Sc;
let no = [
  wd,
  bd,
  yd,
  dd,
  gd,
  vd,
  md
];
function Ed(e) {
  no = [e].concat(no);
}
function Sd() {
  return no;
}
function Td(e, t) {
  return `${e} ${t}`;
}
function xd(e) {
  if (!/ \d+$/.test(e))
    throw new Error("Snapshot keys must end with a number.");
  return e.replace(/ \d+$/, "");
}
function $d(e, t) {
  const n = t.updateSnapshot, o = /* @__PURE__ */ Object.create(null);
  let r = "", s = !1;
  if (e != null)
    try {
      r = e, new Function("exports", r)(o);
    } catch {
    }
  return (n === "all" || n === "new") && r && (s = !0), { data: o, dirty: s };
}
function Od(e) {
  return e.includes(`
`) ? `
${e}
` : e;
}
function pi(e) {
  return e.length > 2 && e.startsWith(`
`) && e.endsWith(`
`) ? e.slice(1, -1) : e;
}
const Ad = !0, _d = !1;
function Md(e, t = 2, n = {}) {
  return _o(
    jm(e, {
      escapeRegex: Ad,
      indent: t,
      plugins: Sd(),
      printFunctionName: _d,
      ...n
    })
  );
}
function Pd(e) {
  return e.replace(/`|\\|\${/g, "\\$&");
}
function hi(e) {
  return `\`${Pd(e)}\``;
}
function _o(e) {
  return e.replace(/\r\n|\r/g, `
`);
}
async function Id(e, t, n) {
  const o = Object.keys(t).sort(id).map(
    (a) => `exports[${hi(a)}] = ${hi(_o(t[a]))};`
  ), r = `${e.getHeader()}

${o.join(`

`)}
`, s = await e.readSnapshotFile(n);
  s != null && s === r || await e.saveSnapshotFile(
    n,
    r
  );
}
function mi(e) {
  function t() {
    var r, s;
    const i = /^( +)}\s+$/m.exec(e || ""), a = (r = i == null ? void 0 : i[1]) == null ? void 0 : r.length;
    if (a)
      return a;
    const c = /^\n( +)"/.exec(e || "");
    return ((s = c == null ? void 0 : c[1]) == null ? void 0 : s.length) || 0;
  }
  const n = t();
  let o = e == null ? void 0 : e.trim();
  return n && (o = o == null ? void 0 : o.replace(new RegExp(`^${" ".repeat(n)}`, "gm"), "").replace(/ +}$/, "}")), o;
}
function ro(e = [], t = []) {
  const n = Array.from(e);
  return t.forEach((o, r) => {
    const s = n[r];
    Array.isArray(e[r]) ? n[r] = ro(e[r], o) : Un(s) ? n[r] = Mo(e[r], o) : n[r] = o;
  }), n;
}
function Mo(e, t) {
  if (Un(e) && Un(t)) {
    const n = { ...e };
    return Object.keys(t).forEach((o) => {
      Un(t[o]) && !t[o].$$typeof ? o in e ? n[o] = Mo(e[o], t[o]) : Object.assign(n, { [o]: t[o] }) : Array.isArray(t[o]) ? n[o] = ro(e[o], t[o]) : Object.assign(n, { [o]: t[o] });
    }), n;
  } else if (Array.isArray(e) && Array.isArray(t))
    return ro(e, t);
  return e;
}
const Cd = 44, di = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Nd = new Uint8Array(64), Dc = new Uint8Array(128);
for (let e = 0; e < di.length; e++) {
  const t = di.charCodeAt(e);
  Nd[e] = t, Dc[t] = e;
}
function jd(e) {
  const t = new Int32Array(5), n = [];
  let o = 0;
  do {
    const r = kd(e, o), s = [];
    let i = !0, a = 0;
    t[0] = 0;
    for (let c = o; c < r; c++) {
      let l;
      c = rn(e, c, t, 0);
      const f = t[0];
      f < a && (i = !1), a = f, yi(e, c, r) ? (c = rn(e, c, t, 1), c = rn(e, c, t, 2), c = rn(e, c, t, 3), yi(e, c, r) ? (c = rn(e, c, t, 4), l = [f, t[1], t[2], t[3], t[4]]) : l = [f, t[1], t[2], t[3]]) : l = [f], s.push(l);
    }
    i || Rd(s), n.push(s), o = r + 1;
  } while (o <= e.length);
  return n;
}
function kd(e, t) {
  const n = e.indexOf(";", t);
  return n === -1 ? e.length : n;
}
function rn(e, t, n, o) {
  let r = 0, s = 0, i = 0;
  do {
    const c = e.charCodeAt(t++);
    i = Dc[c], r |= (i & 31) << s, s += 5;
  } while (i & 32);
  const a = r & 1;
  return r >>>= 1, a && (r = -2147483648 | -r), n[o] += r, t;
}
function yi(e, t, n) {
  return t >= n ? !1 : e.charCodeAt(t) !== Cd;
}
function Rd(e) {
  e.sort(Fd);
}
function Fd(e, t) {
  return e[0] - t[0];
}
const Dd = /^[\w+.-]+:\/\//, Bd = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/, Ld = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
var Me;
(function(e) {
  e[e.Empty = 1] = "Empty", e[e.Hash = 2] = "Hash", e[e.Query = 3] = "Query", e[e.RelativePath = 4] = "RelativePath", e[e.AbsolutePath = 5] = "AbsolutePath", e[e.SchemeRelative = 6] = "SchemeRelative", e[e.Absolute = 7] = "Absolute";
})(Me || (Me = {}));
function qd(e) {
  return Dd.test(e);
}
function zd(e) {
  return e.startsWith("//");
}
function Bc(e) {
  return e.startsWith("/");
}
function Wd(e) {
  return e.startsWith("file:");
}
function gi(e) {
  return /^[.?#]/.test(e);
}
function Bn(e) {
  const t = Bd.exec(e);
  return Lc(t[1], t[2] || "", t[3], t[4] || "", t[5] || "/", t[6] || "", t[7] || "");
}
function Vd(e) {
  const t = Ld.exec(e), n = t[2];
  return Lc("file:", "", t[1] || "", "", Bc(n) ? n : "/" + n, t[3] || "", t[4] || "");
}
function Lc(e, t, n, o, r, s, i) {
  return {
    scheme: e,
    user: t,
    host: n,
    port: o,
    path: r,
    query: s,
    hash: i,
    type: Me.Absolute
  };
}
function bi(e) {
  if (zd(e)) {
    const n = Bn("http:" + e);
    return n.scheme = "", n.type = Me.SchemeRelative, n;
  }
  if (Bc(e)) {
    const n = Bn("http://foo.com" + e);
    return n.scheme = "", n.host = "", n.type = Me.AbsolutePath, n;
  }
  if (Wd(e))
    return Vd(e);
  if (qd(e))
    return Bn(e);
  const t = Bn("http://foo.com/" + e);
  return t.scheme = "", t.host = "", t.type = e ? e.startsWith("?") ? Me.Query : e.startsWith("#") ? Me.Hash : Me.RelativePath : Me.Empty, t;
}
function Ud(e) {
  if (e.endsWith("/.."))
    return e;
  const t = e.lastIndexOf("/");
  return e.slice(0, t + 1);
}
function Kd(e, t) {
  qc(t, t.type), e.path === "/" ? e.path = t.path : e.path = Ud(t.path) + e.path;
}
function qc(e, t) {
  const n = t <= Me.RelativePath, o = e.path.split("/");
  let r = 1, s = 0, i = !1;
  for (let c = 1; c < o.length; c++) {
    const l = o[c];
    if (!l) {
      i = !0;
      continue;
    }
    if (i = !1, l !== ".") {
      if (l === "..") {
        s ? (i = !0, s--, r--) : n && (o[r++] = l);
        continue;
      }
      o[r++] = l, s++;
    }
  }
  let a = "";
  for (let c = 1; c < r; c++)
    a += "/" + o[c];
  (!a || i && !a.endsWith("/..")) && (a += "/"), e.path = a;
}
function Gd(e, t) {
  if (!e && !t)
    return "";
  const n = bi(e);
  let o = n.type;
  if (t && o !== Me.Absolute) {
    const s = bi(t), i = s.type;
    switch (o) {
      case Me.Empty:
        n.hash = s.hash;
      case Me.Hash:
        n.query = s.query;
      case Me.Query:
      case Me.RelativePath:
        Kd(n, s);
      case Me.AbsolutePath:
        n.user = s.user, n.host = s.host, n.port = s.port;
      case Me.SchemeRelative:
        n.scheme = s.scheme;
    }
    i > o && (o = i);
  }
  qc(n, o);
  const r = n.query + n.hash;
  switch (o) {
    case Me.Hash:
    case Me.Query:
      return r;
    case Me.RelativePath: {
      const s = n.path.slice(1);
      return s ? gi(t || e) && !gi(s) ? "./" + s + r : s + r : r || ".";
    }
    case Me.AbsolutePath:
      return n.path + r;
    default:
      return n.scheme + "//" + n.user + n.host + n.port + n.path + r;
  }
}
function wi(e, t) {
  return t && !t.endsWith("/") && (t += "/"), Gd(e, t);
}
function Jd(e) {
  if (!e)
    return "";
  const t = e.lastIndexOf("/");
  return e.slice(0, t + 1);
}
const wt = 0, Yd = 1, Hd = 2, Xd = 3, Qd = 4;
function Zd(e, t) {
  const n = vi(e, 0);
  if (n === e.length)
    return e;
  t || (e = e.slice());
  for (let o = n; o < e.length; o = vi(e, o + 1))
    e[o] = ty(e[o], t);
  return e;
}
function vi(e, t) {
  for (let n = t; n < e.length; n++)
    if (!ey(e[n]))
      return n;
  return e.length;
}
function ey(e) {
  for (let t = 1; t < e.length; t++)
    if (e[t][wt] < e[t - 1][wt])
      return !1;
  return !0;
}
function ty(e, t) {
  return t || (e = e.slice()), e.sort(ny);
}
function ny(e, t) {
  return e[wt] - t[wt];
}
let Qn = !1;
function ry(e, t, n, o) {
  for (; n <= o; ) {
    const r = n + (o - n >> 1), s = e[r][wt] - t;
    if (s === 0)
      return Qn = !0, r;
    s < 0 ? n = r + 1 : o = r - 1;
  }
  return Qn = !1, n - 1;
}
function oy(e, t, n) {
  for (let o = n + 1; o < e.length && e[o][wt] === t; n = o++)
    ;
  return n;
}
function sy(e, t, n) {
  for (let o = n - 1; o >= 0 && e[o][wt] === t; n = o--)
    ;
  return n;
}
function iy() {
  return {
    lastKey: -1,
    lastNeedle: -1,
    lastIndex: -1
  };
}
function ay(e, t, n, o) {
  const { lastKey: r, lastNeedle: s, lastIndex: i } = n;
  let a = 0, c = e.length - 1;
  if (o === r) {
    if (t === s)
      return Qn = i !== -1 && e[i][wt] === t, i;
    t >= s ? a = i === -1 ? 0 : i : c = i;
  }
  return n.lastKey = o, n.lastNeedle = t, n.lastIndex = ry(e, t, a, c);
}
const cy = "`line` must be greater than 0 (lines start at line 1)", uy = "`column` must be greater than or equal to 0 (columns start at column 0)", Ei = -1, ly = 1;
let Si, zc;
class fy {
  constructor(t, n) {
    const o = typeof t == "string";
    if (!o && t._decodedMemo)
      return t;
    const r = o ? JSON.parse(t) : t, { version: s, file: i, names: a, sourceRoot: c, sources: l, sourcesContent: f } = r;
    this.version = s, this.file = i, this.names = a || [], this.sourceRoot = c, this.sources = l, this.sourcesContent = f;
    const u = wi(c || "", Jd(n));
    this.resolvedSources = l.map((w) => wi(w || "", u));
    const { mappings: p } = r;
    typeof p == "string" ? (this._encoded = p, this._decoded = void 0) : (this._encoded = void 0, this._decoded = Zd(p, o)), this._decodedMemo = iy(), this._bySources = void 0, this._bySourceMemos = void 0;
  }
}
Si = (e) => e._decoded || (e._decoded = jd(e._encoded)), zc = (e, { line: t, column: n, bias: o }) => {
  if (t--, t < 0)
    throw new Error(cy);
  if (n < 0)
    throw new Error(uy);
  const r = Si(e);
  if (t >= r.length)
    return Ln(null, null, null, null);
  const s = r[t], i = py(s, e._decodedMemo, t, n, o || ly);
  if (i === -1)
    return Ln(null, null, null, null);
  const a = s[i];
  if (a.length === 1)
    return Ln(null, null, null, null);
  const { names: c, resolvedSources: l } = e;
  return Ln(l[a[Yd]], a[Hd] + 1, a[Xd], a.length === 5 ? c[a[Qd]] : null);
};
function Ln(e, t, n, o) {
  return { source: e, line: t, column: n, name: o };
}
function py(e, t, n, o, r) {
  let s = ay(e, o, t, n);
  return Qn ? s = (r === Ei ? oy : sy)(e, o, s) : r === Ei && s++, s === -1 || s === e.length ? -1 : s;
}
const Wc = /^\s*at .*(\S+:\d+|\(native\))/m, hy = /^(eval@)?(\[native code])?$/, my = [
  "node:internal",
  /\/packages\/\w+\/dist\//,
  /\/@vitest\/\w+\/dist\//,
  "/vitest/dist/",
  "/vitest/src/",
  "/vite-node/dist/",
  "/vite-node/src/",
  "/node_modules/chai/",
  "/node_modules/tinypool/",
  "/node_modules/tinyspy/",
  "/deps/chai.js",
  /__vitest_browser__/
];
function Vc(e) {
  if (!e.includes(":"))
    return [e];
  const n = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/^\(|\)$/g, ""));
  if (!n)
    return [e];
  let o = n[1];
  return (o.startsWith("http:") || o.startsWith("https:")) && (o = new URL(o).pathname), o.startsWith("/@fs/") && (o = o.slice(typeof process < "u" && process.platform === "win32" ? 5 : 4)), [o, n[2] || void 0, n[3] || void 0];
}
function dy(e) {
  let t = e.trim();
  if (hy.test(t) || (t.includes(" > eval") && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), !t.includes("@") && !t.includes(":")))
    return null;
  const n = /((.*".+"[^@]*)?[^@]*)(?:@)/, o = t.match(n), r = o && o[1] ? o[1] : void 0, [s, i, a] = Vc(t.replace(n, ""));
  return !s || !i || !a ? null : {
    file: s,
    method: r || "",
    line: Number.parseInt(i),
    column: Number.parseInt(a)
  };
}
function yy(e) {
  let t = e.trim();
  if (!Wc.test(t))
    return null;
  t.includes("(eval ") && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
  let n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const o = n.match(/ (\(.+\)$)/);
  n = o ? n.replace(o[0], "") : n;
  const [r, s, i] = Vc(o ? o[1] : n);
  let a = o && n || "", c = r && ["eval", "<anonymous>"].includes(r) ? void 0 : r;
  return !c || !s || !i ? null : (a.startsWith("async ") && (a = a.slice(6)), c.startsWith("file://") && (c = c.slice(7)), c = If(c), a && (a = a.replace(/__vite_ssr_import_\d+__\./g, "")), {
    method: a,
    file: c,
    line: Number.parseInt(s),
    column: Number.parseInt(i)
  });
}
function gy(e, t = {}) {
  const { ignoreStackEntries: n = my } = t;
  let o = Wc.test(e) ? wy(e) : by(e);
  return n.length && (o = o.filter((r) => !n.some((s) => r.file.match(s)))), o.map((r) => {
    var s;
    const i = (s = t.getSourceMap) == null ? void 0 : s.call(t, r.file);
    if (!i || typeof i != "object" || !i.version)
      return r;
    const a = new fy(i), { line: c, column: l } = zc(a, r);
    return c != null && l != null ? { ...r, line: c, column: l } : r;
  });
}
function by(e) {
  return e.split(`
`).map((t) => dy(t)).filter(kc);
}
function wy(e) {
  return e.split(`
`).map((t) => yy(t)).filter(kc);
}
function vy(e, t = {}) {
  if (!e || ad(e))
    return [];
  if (e.stacks)
    return e.stacks;
  const n = e.stack || e.stackStr || "";
  let o = gy(n, t);
  return t.frameFilter && (o = o.filter((r) => t.frameFilter(e, r) !== !1)), e.stacks = o, o;
}
async function Ey(e, t) {
  const n = (await import("../../magic-string.es-irX7syie.js")).default, o = new Set(t.map((r) => r.file));
  await Promise.all(Array.from(o).map(async (r) => {
    const s = t.filter((l) => l.file === r), i = await e.readSnapshotFile(r), a = new n(i);
    for (const l of s) {
      const f = ld(i, l.line, l.column);
      Oy(i, a, f, l.snapshot);
    }
    const c = a.toString();
    c !== i && await e.saveSnapshotFile(r, c);
  }));
}
const Sy = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\S\s]*\*\/\s*|\/\/.*\s+)*\s*({)/m;
function Ty(e, t, n, o) {
  let r = e.slice(n);
  const s = Sy.exec(r);
  if (!s)
    return !1;
  r = r.slice(s.index);
  let i = cd(r);
  if (i === null)
    return !1;
  i += n + s.index;
  const a = n + s.index + s[0].length, c = xy(e, a), l = `, ${Uc(o, e, n)}`;
  return c === i ? t.appendLeft(i, l) : t.overwrite(c, i, l), !0;
}
function xy(e, t) {
  let n = 1, o = 0;
  for (; n !== o && t < e.length; ) {
    const r = e[t++];
    r === "{" ? n++ : r === "}" && o++;
  }
  return t;
}
function Uc(e, t, n) {
  const o = fd(t, n), s = t.split(Ao)[o - 1].match(/^\s*/)[0] || "", i = s.includes("	") ? `${s}	` : `${s}  `, a = e.trim().replace(/\\/g, "\\\\").split(/\n/g), c = a.length <= 1, l = "`";
  return c ? `${l}${a.join(`
`).replace(/`/g, "\\`").replace(/\${/g, "\\${")}${l}` : `${l}
${a.map((f) => f ? i + f : "").join(`
`).replace(/`/g, "\\`").replace(/\${/g, "\\${")}
${s}${l}`;
}
const $y = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\S\s]*\*\/\s*|\/\/.*\s+)*\s*[\w_$]*(['"`\)])/m;
function Oy(e, t, n, o) {
  const r = e.slice(n), s = $y.exec(r), i = /toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot/.exec(r);
  if (!s || s.index !== (i == null ? void 0 : i.index))
    return Ty(e, t, n, o);
  const a = s[1], c = n + s.index + s[0].length, l = Uc(o, e, n);
  if (a === ")")
    return t.appendRight(c - 1, l), !0;
  const u = new RegExp(`(?:^|[^\\\\])${a}`).exec(e.slice(c));
  if (!u)
    return !1;
  const p = c + u.index + u[0].length;
  return t.overwrite(c - 1, p, l), !0;
}
const Ay = /^([^\S\n]*)\S/m;
function Ti(e) {
  const t = e.match(Ay);
  if (!t || !t[1])
    return e;
  const n = t[1], o = e.split(/\n/g);
  if (o.length <= 2 || o[0].trim() !== "" || o[o.length - 1].trim() !== "")
    return e;
  for (let r = 1; r < o.length - 1; r++)
    if (o[r] !== "") {
      if (o[r].indexOf(n) !== 0)
        return e;
      o[r] = o[r].substring(n.length);
    }
  return o[o.length - 1] = "", e = o.join(`
`), e;
}
async function _y(e, t) {
  await Promise.all(t.map(async (n) => {
    n.readonly || await e.saveSnapshotFile(n.file, n.snapshot);
  }));
}
class Po {
  constructor(t, n, o, r) {
    se(this, "_counters");
    se(this, "_dirty");
    se(this, "_updateSnapshot");
    se(this, "_snapshotData");
    se(this, "_initialData");
    se(this, "_inlineSnapshots");
    se(this, "_rawSnapshots");
    se(this, "_uncheckedKeys");
    se(this, "_snapshotFormat");
    se(this, "_environment");
    se(this, "_fileExists");
    se(this, "added");
    se(this, "expand");
    se(this, "matched");
    se(this, "unmatched");
    se(this, "updated");
    this.testFilePath = t, this.snapshotPath = n;
    const { data: s, dirty: i } = $d(
      o,
      r
    );
    this._fileExists = o != null, this._initialData = s, this._snapshotData = s, this._dirty = i, this._inlineSnapshots = [], this._rawSnapshots = [], this._uncheckedKeys = new Set(Object.keys(this._snapshotData)), this._counters = /* @__PURE__ */ new Map(), this.expand = r.expand || !1, this.added = 0, this.matched = 0, this.unmatched = 0, this._updateSnapshot = r.updateSnapshot, this.updated = 0, this._snapshotFormat = {
      printBasicPrototype: !1,
      escapeString: !1,
      ...r.snapshotFormat
    }, this._environment = r.snapshotEnvironment;
  }
  static async create(t, n) {
    const o = await n.snapshotEnvironment.resolvePath(t), r = await n.snapshotEnvironment.readSnapshotFile(o);
    return new Po(t, o, r, n);
  }
  get environment() {
    return this._environment;
  }
  markSnapshotsAsCheckedForTest(t) {
    this._uncheckedKeys.forEach((n) => {
      xd(n) === t && this._uncheckedKeys.delete(n);
    });
  }
  _inferInlineSnapshotStack(t) {
    const n = t.findIndex((r) => r.method.match(/__VITEST_(RESOLVES|REJECTS)__/));
    if (n !== -1)
      return t[n + 3];
    const o = t.findIndex((r) => r.method.includes("__INLINE_SNAPSHOT__"));
    return o !== -1 ? t[o + 2] : null;
  }
  _addSnapshot(t, n, o) {
    if (this._dirty = !0, o.isInline) {
      const r = vy(o.error || new Error("snapshot"), { ignoreStackEntries: [] }), s = this._inferInlineSnapshotStack(r);
      if (!s)
        throw new Error(
          `@vitest/snapshot: Couldn't infer stack frame for inline snapshot.
${JSON.stringify(r)}`
        );
      s.column--, this._inlineSnapshots.push({
        snapshot: n,
        ...s
      });
    } else
      o.rawSnapshot ? this._rawSnapshots.push({
        ...o.rawSnapshot,
        snapshot: n
      }) : this._snapshotData[t] = n;
  }
  clear() {
    this._snapshotData = this._initialData, this._counters = /* @__PURE__ */ new Map(), this.added = 0, this.matched = 0, this.unmatched = 0, this.updated = 0, this._dirty = !1;
  }
  async save() {
    const t = Object.keys(this._snapshotData).length, n = this._inlineSnapshots.length, o = this._rawSnapshots.length, r = !t && !n && !o, s = {
      deleted: !1,
      saved: !1
    };
    return (this._dirty || this._uncheckedKeys.size) && !r ? (t && (await Id(this._environment, this._snapshotData, this.snapshotPath), this._fileExists = !0), n && await Ey(this._environment, this._inlineSnapshots), o && await _y(this._environment, this._rawSnapshots), s.saved = !0) : !t && this._fileExists && (this._updateSnapshot === "all" && (await this._environment.removeSnapshotFile(this.snapshotPath), this._fileExists = !1), s.deleted = !0), s;
  }
  getUncheckedCount() {
    return this._uncheckedKeys.size || 0;
  }
  getUncheckedKeys() {
    return Array.from(this._uncheckedKeys);
  }
  removeUncheckedKeys() {
    this._updateSnapshot === "all" && this._uncheckedKeys.size && (this._dirty = !0, this._uncheckedKeys.forEach((t) => delete this._snapshotData[t]), this._uncheckedKeys.clear());
  }
  match({
    testName: t,
    received: n,
    key: o,
    inlineSnapshot: r,
    isInline: s,
    error: i,
    rawSnapshot: a
  }) {
    this._counters.set(t, (this._counters.get(t) || 0) + 1);
    const c = Number(this._counters.get(t));
    o || (o = Td(t, c)), s && this._snapshotData[o] !== void 0 || this._uncheckedKeys.delete(o);
    let l = a && typeof n == "string" ? n : Md(n, void 0, this._snapshotFormat);
    a || (l = Od(l)), a && a.content && a.content.match(/\r\n/) && !l.match(/\r\n/) && (a.content = _o(a.content));
    const f = s ? r : a ? a.content : this._snapshotData[o], u = mi(f), p = u === mi(l), w = f !== void 0, b = s || this._fileExists || a && a.content != null;
    return p && !s && !a && (this._snapshotData[o] = l), w && this._updateSnapshot === "all" || (!w || !b) && (this._updateSnapshot === "new" || this._updateSnapshot === "all") ? (this._updateSnapshot === "all" ? p ? this.matched++ : (w ? this.updated++ : this.added++, this._addSnapshot(o, l, { error: i, isInline: s, rawSnapshot: a })) : (this._addSnapshot(o, l, { error: i, isInline: s, rawSnapshot: a }), this.added++), {
      actual: "",
      count: c,
      expected: "",
      key: o,
      pass: !0
    }) : p ? (this.matched++, {
      actual: "",
      count: c,
      expected: "",
      key: o,
      pass: !0
    }) : (this.unmatched++, {
      actual: pi(l),
      count: c,
      expected: u !== void 0 ? pi(u) : void 0,
      key: o,
      pass: !1
    });
  }
  async pack() {
    const t = {
      filepath: this.testFilePath,
      added: 0,
      fileDeleted: !1,
      matched: 0,
      unchecked: 0,
      uncheckedKeys: [],
      unmatched: 0,
      updated: 0
    }, n = this.getUncheckedCount(), o = this.getUncheckedKeys();
    n && this.removeUncheckedKeys();
    const r = await this.save();
    return t.fileDeleted = r.deleted, t.added = this.added, t.matched = this.matched, t.unmatched = this.unmatched, t.updated = this.updated, t.unchecked = r.deleted ? 0 : n, t.uncheckedKeys = Array.from(o), t;
  }
}
function xi(e, t, n, o) {
  const r = new Error(e);
  return Object.defineProperty(r, "actual", {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }), Object.defineProperty(r, "expected", {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }), Object.defineProperty(r, "diffOptions", { value: { expand: t } }), r;
}
class My {
  constructor(t = {}) {
    se(this, "filepath");
    se(this, "name");
    se(this, "snapshotState");
    se(this, "snapshotStateMap", /* @__PURE__ */ new Map());
    this.options = t;
  }
  async startCurrentRun(t, n, o) {
    var r;
    this.filepath = t, this.name = n, ((r = this.snapshotState) == null ? void 0 : r.testFilePath) !== t && (await this.finishCurrentRun(), this.getSnapshotState(t) || this.snapshotStateMap.set(
      t,
      await Po.create(
        t,
        o
      )
    ), this.snapshotState = this.getSnapshotState(t));
  }
  getSnapshotState(t) {
    return this.snapshotStateMap.get(t);
  }
  clearTest() {
    this.filepath = void 0, this.name = void 0;
  }
  skipTestSnapshots(t) {
    var n;
    (n = this.snapshotState) == null || n.markSnapshotsAsCheckedForTest(t);
  }
  assert(t) {
    var n, o, r, s;
    const {
      filepath: i = this.filepath,
      name: a = this.name,
      message: c,
      isInline: l = !1,
      properties: f,
      inlineSnapshot: u,
      error: p,
      errorMessage: w,
      rawSnapshot: b
    } = t;
    let { received: v } = t;
    if (!i)
      throw new Error("Snapshot cannot be used outside of test");
    if (typeof f == "object") {
      if (typeof v != "object" || !v)
        throw new Error("Received value must be an object when the matcher has properties");
      try {
        if (((o = (n = this.options).isEqual) == null ? void 0 : o.call(n, v, f)) ?? !1)
          v = Mo(v, f);
        else
          throw xi("Snapshot properties mismatched", (r = this.snapshotState) == null ? void 0 : r.expand, v, f);
      } catch (U) {
        throw U.message = w || "Snapshot mismatched", U;
      }
    }
    const h = [
      a,
      ...c ? [c] : []
    ].join(" > "), A = this.getSnapshotState(i), { actual: M, expected: F, key: k, pass: N } = A.match({
      testName: h,
      received: v,
      isInline: l,
      error: p,
      inlineSnapshot: u,
      rawSnapshot: b
    });
    if (!N)
      throw xi(`Snapshot \`${k || "unknown"}\` mismatched`, (s = this.snapshotState) == null ? void 0 : s.expand, M == null ? void 0 : M.trim(), F == null ? void 0 : F.trim());
  }
  async assertRaw(t) {
    if (!t.rawSnapshot)
      throw new Error("Raw snapshot is required");
    const {
      filepath: n = this.filepath,
      rawSnapshot: o
    } = t;
    if (o.content == null) {
      if (!n)
        throw new Error("Snapshot cannot be used outside of test");
      const r = this.getSnapshotState(n);
      t.filepath || (t.filepath = n), o.file = await r.environment.resolveRawPath(n, o.file), o.content = await r.environment.readSnapshotFile(o.file) || void 0;
    }
    return this.assert(t);
  }
  async finishCurrentRun() {
    if (!this.snapshotState)
      return null;
    const t = await this.snapshotState.pack();
    return this.snapshotState = void 0, t;
  }
  clear() {
    this.snapshotStateMap.clear();
  }
}
function Py(e, t = " > ") {
  return $a(e).join(t);
}
function Iy(e = "") {
  return !e || !e.includes("\\") ? e : e.replace(/\\/g, "/");
}
const Cy = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function Ny() {
  return typeof process < "u" ? process.cwd().replace(/\\/g, "/") : "/";
}
const jy = function(...e) {
  e = e.map((o) => Iy(o));
  let t = "", n = !1;
  for (let o = e.length - 1; o >= -1 && !n; o--) {
    const r = o >= 0 ? e[o] : Ny();
    !r || r.length === 0 || (t = `${r}/${t}`, n = $i(r));
  }
  return t = ky(t, !n), n && !$i(t) ? `/${t}` : t.length > 0 ? t : ".";
};
function ky(e, t) {
  let n = "", o = 0, r = -1, s = 0, i = null;
  for (let a = 0; a <= e.length; ++a) {
    if (a < e.length)
      i = e[a];
    else {
      if (i === "/")
        break;
      i = "/";
    }
    if (i === "/") {
      if (!(r === a - 1 || s === 1))
        if (s === 2) {
          if (n.length < 2 || o !== 2 || n[n.length - 1] !== "." || n[n.length - 2] !== ".") {
            if (n.length > 2) {
              const c = n.lastIndexOf("/");
              c === -1 ? (n = "", o = 0) : (n = n.slice(0, c), o = n.length - 1 - n.lastIndexOf("/")), r = a, s = 0;
              continue;
            } else if (n.length > 0) {
              n = "", o = 0, r = a, s = 0;
              continue;
            }
          }
          t && (n += n.length > 0 ? "/.." : "..", o = 2);
        } else
          n.length > 0 ? n += `/${e.slice(r + 1, a)}` : n = e.slice(r + 1, a), o = a - r - 1;
      r = a, s = 0;
    } else
      i === "." && s !== -1 ? ++s : s = -1;
  }
  return n;
}
const $i = function(e) {
  return Cy.test(e);
}, Oi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ry = new Uint8Array(64), Fy = new Uint8Array(128);
for (let e = 0; e < Oi.length; e++) {
  const t = Oi.charCodeAt(e);
  Ry[e] = t, Fy[t] = e;
}
var Ai;
(function(e) {
  e[e.Empty = 1] = "Empty", e[e.Hash = 2] = "Hash", e[e.Query = 3] = "Query", e[e.RelativePath = 4] = "RelativePath", e[e.AbsolutePath = 5] = "AbsolutePath", e[e.SchemeRelative = 6] = "SchemeRelative", e[e.Absolute = 7] = "Absolute";
})(Ai || (Ai = {}));
const Kc = /^\s*at .*(\S+:\d+|\(native\))/m, Dy = /^(eval@)?(\[native code])?$/;
function Gc(e) {
  if (!e.includes(":"))
    return [e];
  const n = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/^\(|\)$/g, ""));
  if (!n)
    return [e];
  let o = n[1];
  return (o.startsWith("http:") || o.startsWith("https:")) && (o = new URL(o).pathname), o.startsWith("/@fs/") && (o = o.slice(typeof process < "u" && process.platform === "win32" ? 5 : 4)), [o, n[2] || void 0, n[3] || void 0];
}
function By(e) {
  let t = e.trim();
  if (Dy.test(t) || (t.includes(" > eval") && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), !t.includes("@") && !t.includes(":")))
    return null;
  const n = /((.*".+"[^@]*)?[^@]*)(?:@)/, o = t.match(n), r = o && o[1] ? o[1] : void 0, [s, i, a] = Gc(t.replace(n, ""));
  return !s || !i || !a ? null : {
    file: s,
    method: r || "",
    line: Number.parseInt(i),
    column: Number.parseInt(a)
  };
}
function Ly(e) {
  const t = e.trim();
  return Kc.test(t) ? qy(t) : By(t);
}
function qy(e) {
  let t = e.trim();
  if (!Kc.test(t))
    return null;
  t.includes("(eval ") && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
  let n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const o = n.match(/ (\(.+\)$)/);
  n = o ? n.replace(o[0], "") : n;
  const [r, s, i] = Gc(o ? o[1] : n);
  let a = o && n || "", c = r && ["eval", "<anonymous>"].includes(r) ? void 0 : r;
  return !c || !s || !i ? null : (a.startsWith("async ") && (a = a.slice(6)), c.startsWith("file://") && (c = c.slice(7)), c = jy(c), a && (a = a.replace(/__vite_ssr_import_\d+__\./g, "")), {
    method: a,
    file: c,
    line: Number.parseInt(s),
    column: Number.parseInt(i)
  });
}
function Jc() {
  return typeof process < "u" && !!process.send;
}
const Ge = Date;
let oo = null;
class vt extends Ge {
  constructor(t, n, o, r, s, i, a) {
    super();
    let c;
    switch (arguments.length) {
      case 0:
        oo !== null ? c = new Ge(oo.valueOf()) : c = new Ge();
        break;
      case 1:
        c = new Ge(t);
        break;
      default:
        o = typeof o > "u" ? 1 : o, r = r || 0, s = s || 0, i = i || 0, a = a || 0, c = new Ge(t, n, o, r, s, i, a);
        break;
    }
    return Object.setPrototypeOf(c, vt.prototype), c;
  }
}
vt.UTC = Ge.UTC;
vt.now = function() {
  return new vt().valueOf();
};
vt.parse = function(e) {
  return Ge.parse(e);
};
vt.toString = function() {
  return Ge.toString();
};
function zy(e) {
  const t = new Ge(e.valueOf());
  if (Number.isNaN(t.getTime()))
    throw new TypeError(`mockdate: The time set is an invalid date: ${e}`);
  globalThis.Date = vt, oo = t.valueOf();
}
function Wy() {
  globalThis.Date = Ge;
}
function Vy(e, t = !1) {
  const n = [
    // Vitest
    /\/vitest\/dist\//,
    /\/vite-node\/dist\//,
    // yarn's .store folder
    /vitest-virtual-\w+\/dist/,
    // cnpm
    /@vitest\/dist/,
    // don't clear mocks
    ...t ? [] : [/^mock:/]
  ];
  e.forEach((o, r) => {
    n.some((s) => s.test(r)) || e.invalidateModule(o);
  });
}
function Uy() {
  const { setTimeout: e } = nr();
  return new Promise((t) => e(t, 0));
}
async function Yc() {
  await Uy();
  const e = bo(), t = [];
  let n = 0;
  for (const o of e.moduleCache.values())
    o.promise && !o.evaluated && t.push(o.promise), o.resolving && n++;
  !t.length && !n || (await Promise.allSettled(t), await Yc());
}
function Ky(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Hc = { exports: {} };
(function(e, t) {
  (function() {
    (function(n) {
      return typeof Ky == "function" ? e.exports = n : chai.use(n);
    })(function(n, o) {
      var r = n.Assertion, s = r.prototype;
      r.addMethod("containSubset", function(a) {
        var c = o.flag(this, "object"), l = n.config.showDiff;
        s.assert.call(
          this,
          i(a, c),
          "expected #{act} to contain subset #{exp}",
          "expected #{act} to not contain subset #{exp}",
          a,
          c,
          l
        );
      }), n.assert.containSubset = function(a, c, l) {
        new n.Assertion(a, l).to.be.containSubset(c);
      };
      function i(a, c) {
        if (a === c)
          return !0;
        if (typeof c != typeof a)
          return !1;
        if (typeof a != "object" || a === null)
          return a === c;
        if (a && !c)
          return !1;
        if (Array.isArray(a)) {
          if (typeof c.length != "number")
            return !1;
          var l = Array.prototype.slice.call(c);
          return a.every(function(f) {
            return l.some(function(u) {
              return i(f, u);
            });
          });
        }
        return a instanceof Date ? c instanceof Date ? a.getTime() === c.getTime() : !1 : Object.keys(a).every(function(f) {
          var u = a[f], p = c[f];
          return typeof u == "object" && u !== null && p !== null ? i(u, p) : typeof u == "function" ? u(p) : p === u;
        });
      }
    });
  }).call(gn);
})(Hc);
var Gy = Hc.exports, Jy = /* @__PURE__ */ ch(Gy);
const _i = Symbol.for("matchers-object"), Yy = Symbol.for("$$jest-matchers-object"), Hy = Symbol.for("expect-global"), Xy = Symbol.for("asymmetric-matchers-object");
if (!Object.prototype.hasOwnProperty.call(globalThis, _i)) {
  const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ Object.create(null), n = [], o = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(globalThis, _i, {
    get: () => e
  }), Object.defineProperty(globalThis, Yy, {
    configurable: !0,
    get: () => ({
      state: e.get(globalThis[Hy]),
      matchers: t,
      customEqualityTesters: n
    })
  }), Object.defineProperty(globalThis, Xy, {
    get: () => o
  });
}
function Qy(e, t) {
  return e && t instanceof Promise && (t = t.finally(() => {
    const n = e.promises.indexOf(t);
    n !== -1 && e.promises.splice(n, 1);
  }), e.promises || (e.promises = []), e.promises.push(t)), t;
}
let zr;
function on() {
  return zr || (zr = new My({
    isEqual: (e, t) => de(e, t, [Le, $n])
  })), zr;
}
function Mi(e, t) {
  if (typeof e != "function") {
    if (!t)
      throw new Error(`expected must be a function, received ${typeof e}`);
    return e;
  }
  try {
    e();
  } catch (n) {
    return n;
  }
  throw new Error("snapshot function didn't throw");
}
const Zy = (e, t) => {
  const n = (o) => {
    var r;
    return o ? {
      filepath: (r = o.file) == null ? void 0 : r.filepath,
      name: $a(o).slice(1).join(" > ")
    } : {};
  };
  for (const o of ["matchSnapshot", "toMatchSnapshot"])
    t.addMethod(
      e.Assertion.prototype,
      o,
      function(r, s) {
        const i = t.flag(this, "object"), a = t.flag(this, "vitest-test");
        typeof r == "string" && typeof s > "u" && (s = r, r = void 0);
        const c = t.flag(this, "message");
        on().assert({
          received: i,
          message: s,
          isInline: !1,
          properties: r,
          errorMessage: c,
          ...n(a)
        });
      }
    );
  t.addMethod(
    e.Assertion.prototype,
    "toMatchFileSnapshot",
    function(o, r) {
      const s = t.flag(this, "object"), i = t.flag(this, "vitest-test"), a = t.flag(this, "message"), c = on().assertRaw({
        received: s,
        message: r,
        isInline: !1,
        rawSnapshot: {
          file: o
        },
        errorMessage: a,
        ...n(i)
      });
      return Qy(i, c);
    }
  ), t.addMethod(
    e.Assertion.prototype,
    "toMatchInlineSnapshot",
    function(r, s, i) {
      var a;
      const c = t.flag(this, "vitest-test");
      if (c && (c.each || ((a = c.suite) == null ? void 0 : a.each)))
        throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
      const f = t.flag(this, "object"), u = t.flag(this, "error");
      typeof r == "string" && (i = s, s = r, r = void 0), s && (s = Ti(s));
      const p = t.flag(this, "message");
      on().assert({
        received: f,
        message: i,
        isInline: !0,
        properties: r,
        inlineSnapshot: s,
        error: u,
        errorMessage: p,
        ...n(c)
      });
    }
  ), t.addMethod(
    e.Assertion.prototype,
    "toThrowErrorMatchingSnapshot",
    function(o) {
      const r = t.flag(this, "object"), s = t.flag(this, "vitest-test"), i = t.flag(this, "promise"), a = t.flag(this, "message");
      on().assert({
        received: Mi(r, i),
        message: o,
        errorMessage: a,
        ...n(s)
      });
    }
  ), t.addMethod(
    e.Assertion.prototype,
    "toThrowErrorMatchingInlineSnapshot",
    function(r, s) {
      var i;
      const a = t.flag(this, "vitest-test");
      if (a && (a.each || ((i = a.suite) == null ? void 0 : i.each)))
        throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
      const l = t.flag(this, "object"), f = t.flag(this, "error"), u = t.flag(this, "promise"), p = t.flag(this, "message");
      r && (r = Ti(r)), on().assert({
        received: Mi(l, u),
        message: s,
        inlineSnapshot: r,
        isInline: !0,
        error: f,
        errorMessage: p,
        ...n(a)
      });
    }
  ), t.addMethod(
    e.expect,
    "addSnapshotSerializer",
    Ed
  );
};
Sn(Ch);
Sn(Mh);
Sn(Jy);
Sn(Zy);
Sn(_h);
function eg(e) {
  var t;
  const n = (i, a) => {
    const { assertionCalls: c } = zt(n);
    Rr({ assertionCalls: c + 1, soft: !1 }, n);
    const l = kr(i, a), f = e || Gf();
    return f ? l.withTest(f) : l;
  };
  Object.assign(n, kr), Object.assign(n, globalThis[So]), n.getState = () => zt(n), n.setState = (i) => Rr(i, n);
  const o = zt(globalThis[xn]) || {};
  Rr({
    // this should also add "snapshotState" that is added conditionally
    ...o,
    assertionCalls: 0,
    isExpectingAssertions: !1,
    isExpectingAssertionsError: null,
    expectedAssertionsNumber: null,
    expectedAssertionsNumberErrorGen: null,
    environment: np(),
    testPath: e ? (t = e.suite.file) == null ? void 0 : t.filepath : o.testPath,
    currentTestName: e ? Py(e) : o.currentTestName
  }, n), n.extend = (i) => kr.extend(n, i), n.addEqualityTesters = (i) => gh(i), n.soft = (...i) => {
    const a = n(...i);
    return n.setState({
      soft: !0
    }), a;
  }, n.unreachable = (i) => {
    ah.fail(`expected${i ? ` "${i}" ` : " "}not to be reached`);
  };
  function r(i) {
    const a = () => new Error(`expected number of assertions to be ${i}, but got ${n.getState().assertionCalls}`);
    Error.captureStackTrace && Error.captureStackTrace(a(), r), n.setState({
      expectedAssertionsNumber: i,
      expectedAssertionsNumberErrorGen: a
    });
  }
  function s() {
    const i = new Error("expected any number of assertion, but got none");
    Error.captureStackTrace && Error.captureStackTrace(i, s), n.setState({
      isExpectingAssertions: !0,
      isExpectingAssertionsError: i
    });
  }
  return Hn.addMethod(n, "assertions", r), Hn.addMethod(n, "hasAssertions", s), n;
}
const be = eg();
Object.defineProperty(globalThis, xn, {
  value: be,
  writable: !0,
  configurable: !0
});
var Kn;
typeof gn < "u" ? Kn = gn : typeof window < "u" ? Kn = window : Kn = self;
var tg = Kn;
let so;
try {
  ({}).__proto__, so = !1;
} catch {
  so = !0;
}
var ng = so, rg = Function.call, og = ng, Xc = [
  // ignore size because it throws from Map
  "size",
  "caller",
  "callee",
  "arguments"
];
og && Xc.push("__proto__");
var Xt = function(t) {
  return Object.getOwnPropertyNames(t).reduce(
    function(n, o) {
      return Xc.includes(o) || typeof t[o] != "function" || (n[o] = rg.bind(t[o])), n;
    },
    /* @__PURE__ */ Object.create(null)
  );
}, sg = Xt, lr = sg(Array.prototype), ig = lr.every;
function ag(e, t) {
  return e[t.id] === void 0 && (e[t.id] = 0), e[t.id] < t.callCount;
}
function cg(e, t, n, o) {
  var r = !0;
  return n !== o.length - 1 && (r = t.calledBefore(o[n + 1])), ag(e, t) && r ? (e[t.id] += 1, !0) : !1;
}
function ug(e) {
  var t = {}, n = arguments.length > 1 ? arguments : e;
  return ig(n, cg.bind(null, t));
}
var lg = ug, Qc = function(t) {
  if (!t)
    return "";
  try {
    return t.displayName || t.name || // Use function decomposition as a last resort to get function
    // name. Does not rely on function decomposition to work - if it
    // doesn't debugging will be slightly less informative
    // (i.e. toString will say 'spy' rather than 'myFunc').
    (String(t).match(/function ([^\s(]+)/) || [])[1];
  } catch {
    return "";
  }
}, fg = Qc;
function pg(e) {
  return e.constructor && e.constructor.name || // The next branch is for IE11 support only:
  // Because the name property is not set on the prototype
  // of the Function object, we finally try to grab the
  // name from its definition. This will never be reached
  // in node, so we are not able to test this properly.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
  typeof e.constructor == "function" && /* istanbul ignore next */
  fg(e.constructor) || null;
}
var hg = pg, Zc = {};
(function(e) {
  e.wrap = function(t, n) {
    var o = function() {
      return e.printWarning(n), t.apply(this, arguments);
    };
    return t.prototype && (o.prototype = t.prototype), o;
  }, e.defaultMsg = function(t, n) {
    return `${t}.${n} is deprecated and will be removed from the public API in a future version of ${t}.`;
  }, e.printWarning = function(t) {
    typeof process == "object" && process.emitWarning ? process.emitWarning(t) : console.info ? console.info(t) : console.log(t);
  };
})(Zc);
var mg = function(t, n) {
  var o = !0;
  try {
    t.forEach(function() {
      if (!n.apply(this, arguments))
        throw new Error();
    });
  } catch {
    o = !1;
  }
  return o;
}, dg = lr.sort, yg = lr.slice;
function gg(e, t) {
  var n = e.getCall(0), o = t.getCall(0), r = n && n.callId || -1, s = o && o.callId || -1;
  return r < s ? -1 : 1;
}
function bg(e) {
  return dg(yg(e), gg);
}
var wg = bg, vg = Xt, Eg = vg(Function.prototype), Sg = Xt, Tg = Sg(Map.prototype), xg = Xt, $g = xg(Object.prototype), Og = Xt, Ag = Og(Set.prototype), _g = Xt, Mg = _g(String.prototype), Pg = {
  array: lr,
  function: Eg,
  map: Tg,
  object: $g,
  set: Ag,
  string: Mg
}, eu = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(gn, function() {
    var n = typeof Promise == "function", o = typeof self == "object" ? self : gn, r = typeof Symbol < "u", s = typeof Map < "u", i = typeof Set < "u", a = typeof WeakMap < "u", c = typeof WeakSet < "u", l = typeof DataView < "u", f = r && typeof Symbol.iterator < "u", u = r && typeof Symbol.toStringTag < "u", p = i && typeof Set.prototype.entries == "function", w = s && typeof Map.prototype.entries == "function", b = p && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries()), v = w && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries()), h = f && typeof Array.prototype[Symbol.iterator] == "function", A = h && Object.getPrototypeOf([][Symbol.iterator]()), M = f && typeof String.prototype[Symbol.iterator] == "function", F = M && Object.getPrototypeOf(""[Symbol.iterator]()), k = 8, N = -1;
    function U(B) {
      var G = typeof B;
      if (G !== "object")
        return G;
      if (B === null)
        return "null";
      if (B === o)
        return "global";
      if (Array.isArray(B) && (u === !1 || !(Symbol.toStringTag in B)))
        return "Array";
      if (typeof window == "object" && window !== null) {
        if (typeof window.location == "object" && B === window.location)
          return "Location";
        if (typeof window.document == "object" && B === window.document)
          return "Document";
        if (typeof window.navigator == "object") {
          if (typeof window.navigator.mimeTypes == "object" && B === window.navigator.mimeTypes)
            return "MimeTypeArray";
          if (typeof window.navigator.plugins == "object" && B === window.navigator.plugins)
            return "PluginArray";
        }
        if ((typeof window.HTMLElement == "function" || typeof window.HTMLElement == "object") && B instanceof window.HTMLElement) {
          if (B.tagName === "BLOCKQUOTE")
            return "HTMLQuoteElement";
          if (B.tagName === "TD")
            return "HTMLTableDataCellElement";
          if (B.tagName === "TH")
            return "HTMLTableHeaderCellElement";
        }
      }
      var ae = u && B[Symbol.toStringTag];
      if (typeof ae == "string")
        return ae;
      var V = Object.getPrototypeOf(B);
      return V === RegExp.prototype ? "RegExp" : V === Date.prototype ? "Date" : n && V === Promise.prototype ? "Promise" : i && V === Set.prototype ? "Set" : s && V === Map.prototype ? "Map" : c && V === WeakSet.prototype ? "WeakSet" : a && V === WeakMap.prototype ? "WeakMap" : l && V === DataView.prototype ? "DataView" : s && V === v ? "Map Iterator" : i && V === b ? "Set Iterator" : h && V === A ? "Array Iterator" : M && V === F ? "String Iterator" : V === null ? "Object" : Object.prototype.toString.call(B).slice(k, N);
    }
    return U;
  });
})(eu);
var Ig = eu.exports, Cg = Ig, Ng = function(t) {
  return Cg(t).toLowerCase();
};
function jg(e) {
  return e && e.toString ? e.toString() : String(e);
}
var kg = jg, Rg = {
  global: tg,
  calledInOrder: lg,
  className: hg,
  deprecated: Zc,
  every: mg,
  functionName: Qc,
  orderByFirstCall: wg,
  prototypes: Pg,
  typeOf: Ng,
  valueToString: kg
};
const tu = Rg.global;
let Dt;
if (typeof __vitest_required__ < "u")
  try {
    Dt = __vitest_required__.timers;
  } catch {
  }
function Io(e) {
  const t = Math.pow(2, 31) - 1, n = 1e12, o = function() {
  }, r = function() {
    return [];
  }, s = e.setTimeout(o, 0), i = typeof s == "object", a = e.process && typeof e.process.hrtime == "function", c = a && typeof e.process.hrtime.bigint == "function", l = e.process && typeof e.process.nextTick == "function", f = e.process && e.__vitest_required__ && e.__vitest_required__.util.promisify, u = e.performance && typeof e.performance.now == "function", p = e.Performance && (typeof e.Performance).match(/^(function|object)$/), w = e.performance && e.performance.constructor && e.performance.constructor.prototype, b = e.hasOwnProperty("queueMicrotask"), v = e.requestAnimationFrame && typeof e.requestAnimationFrame == "function", h = e.cancelAnimationFrame && typeof e.cancelAnimationFrame == "function", A = e.requestIdleCallback && typeof e.requestIdleCallback == "function", M = e.cancelIdleCallback && typeof e.cancelIdleCallback == "function", F = e.setImmediate && typeof e.setImmediate == "function", k = e.Intl && typeof e.Intl == "object";
  e.clearTimeout(s);
  const N = e.Date, U = e.Intl;
  let B = n;
  function G(E) {
    return Number.isFinite ? Number.isFinite(E) : isFinite(E);
  }
  let ae = !1;
  function V(E, S) {
    E.loopLimit && S === E.loopLimit - 1 && (ae = !0);
  }
  function xe() {
    ae = !1;
  }
  function we(E) {
    if (!E)
      return 0;
    const S = E.split(":"), C = S.length;
    let R = C, y = 0, X;
    if (C > 3 || !/^(\d\d:){0,2}\d\d?$/.test(E))
      throw new Error(
        "tick only understands numbers, 'm:s' and 'h:m:s'. Each part must be two digits"
      );
    for (; R--; ) {
      if (X = parseInt(S[R], 10), X >= 60)
        throw new Error(`Invalid time ${E}`);
      y += X * Math.pow(60, C - R - 1);
    }
    return y * 1e3;
  }
  function $e(E) {
    const C = E * 1e6 % 1e6, R = C < 0 ? C + 1e6 : C;
    return Math.floor(R);
  }
  function Pe(E) {
    if (!E)
      return 0;
    if (typeof E.getTime == "function")
      return E.getTime();
    if (typeof E == "number")
      return E;
    throw new TypeError("now should be milliseconds since UNIX epoch");
  }
  function Fe(E, S, C) {
    return C && C.callAt >= E && C.callAt <= S;
  }
  function Ie(E, S) {
    const C = new Error(
      `Aborting after running ${E.loopLimit} timers, assuming an infinite loop!`
    );
    if (!S.error)
      return C;
    const R = /target\.*[<|(|[].*?[>|\]|)]\s*/;
    let y = new RegExp(
      String(Object.keys(E).join("|"))
    );
    i && (y = new RegExp(
      `\\s+at (Object\\.)?(?:${Object.keys(E).join("|")})\\s+`
    ));
    let X = -1;
    S.error.stack.split(`
`).some(function(Ee, Be) {
      return Ee.match(R) ? (X = Be, !0) : Ee.match(y) ? (X = Be, !1) : X >= 0;
    });
    const ve = `${C}
${S.type || "Microtask"} - ${S.func.name || "anonymous"}
${S.error.stack.split(`
`).slice(X + 1).join(`
`)}`;
    try {
      Object.defineProperty(C, "stack", {
        value: ve
      });
    } catch {
    }
    return C;
  }
  function Ne(E, S) {
    let C;
    for (C in S)
      S.hasOwnProperty(C) && (E[C] = S[C]);
    return S.now ? E.now = function() {
      return E.clock.now;
    } : delete E.now, S.toSource ? E.toSource = function() {
      return S.toSource();
    } : delete E.toSource, E.toString = function() {
      return S.toString();
    }, E.prototype = S.prototype, E.parse = S.parse, E.UTC = S.UTC, E.prototype.toUTCString = S.prototype.toUTCString, E.isFake = !0, E;
  }
  function De() {
    function E(S, C, R, y, X, ve, Ee) {
      if (!(this instanceof E))
        return new N(E.clock.now).toString();
      switch (arguments.length) {
        case 0:
          return new N(E.clock.now);
        case 1:
          return new N(S);
        case 2:
          return new N(S, C);
        case 3:
          return new N(S, C, R);
        case 4:
          return new N(S, C, R, y);
        case 5:
          return new N(S, C, R, y, X);
        case 6:
          return new N(
            S,
            C,
            R,
            y,
            X,
            ve
          );
        default:
          return new N(
            S,
            C,
            R,
            y,
            X,
            ve,
            Ee
          );
      }
    }
    return Ne(E, N);
  }
  function m() {
    const E = { ...U };
    return E.DateTimeFormat = function(...S) {
      const C = new U.DateTimeFormat(...S), R = {};
      return ["formatRange", "formatRangeToParts", "resolvedOptions"].forEach(
        (y) => {
          R[y] = C[y].bind(C);
        }
      ), ["format", "formatToParts"].forEach((y) => {
        R[y] = function(X) {
          return C[y](X || E.clock.now);
        };
      }), R;
    }, E.DateTimeFormat.prototype = Object.create(
      U.DateTimeFormat.prototype
    ), E.DateTimeFormat.supportedLocalesOf = U.DateTimeFormat.supportedLocalesOf, E;
  }
  function T(E, S) {
    E.jobs || (E.jobs = []), E.jobs.push(S);
  }
  function x(E) {
    if (E.jobs) {
      for (let S = 0; S < E.jobs.length; S++) {
        const C = E.jobs[S];
        if (C.func.apply(null, C.args), V(E, S), E.loopLimit && S > E.loopLimit)
          throw Ie(E, C);
      }
      xe(), E.jobs = [];
    }
  }
  function P(E, S) {
    if (S.func === void 0)
      throw new Error("Callback must be provided to timer calls");
    if (i && typeof S.func != "function")
      throw new TypeError(
        `[ERR_INVALID_CALLBACK]: Callback must be a function. Received ${S.func} of type ${typeof S.func}`
      );
    if (ae && (S.error = new Error()), S.type = S.immediate ? "Immediate" : "Timeout", S.hasOwnProperty("delay") && (typeof S.delay != "number" && (S.delay = parseInt(S.delay, 10)), G(S.delay) || (S.delay = 0), S.delay = S.delay > t ? 1 : S.delay, S.delay = Math.max(0, S.delay)), S.hasOwnProperty("interval") && (S.type = "Interval", S.interval = S.interval > t ? 1 : S.interval), S.hasOwnProperty("animation") && (S.type = "AnimationFrame", S.animation = !0), S.hasOwnProperty("idleCallback") && (S.type = "IdleCallback", S.idleCallback = !0), E.timers || (E.timers = {}), S.id = B++, S.createdAt = E.now, S.callAt = E.now + (parseInt(S.delay) || (E.duringTick ? 1 : 0)), E.timers[S.id] = S, i) {
      const C = {
        refed: !0,
        ref: function() {
          return this.refed = !0, C;
        },
        unref: function() {
          return this.refed = !1, C;
        },
        hasRef: function() {
          return this.refed;
        },
        refresh: function() {
          return S.callAt = E.now + (parseInt(S.delay) || (E.duringTick ? 1 : 0)), E.timers[S.id] = S, C;
        },
        [Symbol.toPrimitive]: function() {
          return S.id;
        }
      };
      return C;
    }
    return S.id;
  }
  function j(E, S) {
    if (E.callAt < S.callAt)
      return -1;
    if (E.callAt > S.callAt)
      return 1;
    if (E.immediate && !S.immediate)
      return -1;
    if (!E.immediate && S.immediate)
      return 1;
    if (E.createdAt < S.createdAt)
      return -1;
    if (E.createdAt > S.createdAt)
      return 1;
    if (E.id < S.id)
      return -1;
    if (E.id > S.id)
      return 1;
  }
  function D(E, S, C) {
    const R = E.timers;
    let y = null, X, ve;
    for (X in R)
      R.hasOwnProperty(X) && (ve = Fe(S, C, R[X]), ve && (!y || j(y, R[X]) === 1) && (y = R[X]));
    return y;
  }
  function I(E) {
    const S = E.timers;
    let C = null, R;
    for (R in S)
      S.hasOwnProperty(R) && (!C || j(C, S[R]) === 1) && (C = S[R]);
    return C;
  }
  function $(E) {
    const S = E.timers;
    let C = null, R;
    for (R in S)
      S.hasOwnProperty(R) && (!C || j(C, S[R]) === -1) && (C = S[R]);
    return C;
  }
  function q(E, S) {
    if (typeof S.interval == "number" ? E.timers[S.id].callAt += S.interval : delete E.timers[S.id], typeof S.func == "function")
      S.func.apply(null, S.args);
    else {
      const C = eval;
      (function() {
        C(S.func);
      })();
    }
  }
  function K(E) {
    return E === "IdleCallback" || E === "AnimationFrame" ? `cancel${E}` : `clear${E}`;
  }
  function J(E) {
    return E === "IdleCallback" || E === "AnimationFrame" ? `request${E}` : `set${E}`;
  }
  function ne() {
    let E = 0;
    return function(S) {
      !E++ && console.warn(S);
    };
  }
  const Z = ne();
  function H(E, S, C) {
    if (!S)
      return;
    E.timers || (E.timers = {});
    const R = Number(S);
    if (Number.isNaN(R) || R < n) {
      const y = K(C);
      if (E.shouldClearNativeTimers === !0) {
        const X = E[`_${y}`];
        return typeof X == "function" ? X(S) : void 0;
      }
      Z(
        `FakeTimers: ${y} was invoked to clear a native timer instead of one created by this library.
To automatically clean-up native timers, use \`shouldClearNativeTimers\`.`
      );
    }
    if (E.timers.hasOwnProperty(R)) {
      const y = E.timers[R];
      if (y.type === C || y.type === "Timeout" && C === "Interval" || y.type === "Interval" && C === "Timeout")
        delete E.timers[R];
      else {
        const X = K(C), ve = J(y.type);
        throw new Error(
          `Cannot clear timer: timer created with ${ve}() but cleared with ${X}()`
        );
      }
    }
  }
  function re(E, S) {
    let C, R, y;
    const X = "_hrtime", ve = "_nextTick";
    for (R = 0, y = E.methods.length; R < y; R++) {
      if (C = E.methods[R], C === "hrtime" && e.process)
        e.process.hrtime = E[X];
      else if (C === "nextTick" && e.process)
        e.process.nextTick = E[ve];
      else if (C === "performance") {
        const Ee = Object.getOwnPropertyDescriptor(
          E,
          `_${C}`
        );
        Ee && Ee.get && !Ee.set ? Object.defineProperty(
          e,
          C,
          Ee
        ) : Ee.configurable && (e[C] = E[`_${C}`]);
      } else if (e[C] && e[C].hadOwnProperty)
        e[C] = E[`_${C}`];
      else
        try {
          delete e[C];
        } catch {
        }
      if (E.timersModuleMethods !== void 0)
        for (let Ee = 0; Ee < E.timersModuleMethods.length; Ee++) {
          const Be = E.timersModuleMethods[Ee];
          Dt[Be.methodName] = Be.original;
        }
    }
    return S.shouldAdvanceTime === !0 && e.clearInterval(E.attachedInterval), E.methods = [], E.timers ? Object.keys(E.timers).map(function(Be) {
      return E.timers[Be];
    }) : [];
  }
  function O(E, S, C) {
    if (C[S].hadOwnProperty = Object.prototype.hasOwnProperty.call(
      E,
      S
    ), C[`_${S}`] = E[S], S === "Date") {
      const R = Ne(C[S], E[S]);
      E[S] = R;
    } else if (S === "Intl")
      E[S] = C[S];
    else if (S === "performance") {
      const R = Object.getOwnPropertyDescriptor(
        E,
        S
      );
      if (R && R.get && !R.set) {
        Object.defineProperty(
          C,
          `_${S}`,
          R
        );
        const y = Object.getOwnPropertyDescriptor(
          C,
          S
        );
        Object.defineProperty(E, S, y);
      } else
        E[S] = C[S];
    } else
      E[S] = function() {
        return C[S].apply(C, arguments);
      }, Object.defineProperties(
        E[S],
        Object.getOwnPropertyDescriptors(C[S])
      );
    E[S].clock = C;
  }
  function ce(E, S) {
    E.tick(S);
  }
  const oe = {
    setTimeout: e.setTimeout,
    clearTimeout: e.clearTimeout,
    setInterval: e.setInterval,
    clearInterval: e.clearInterval,
    Date: e.Date
  };
  F && (oe.setImmediate = e.setImmediate, oe.clearImmediate = e.clearImmediate), a && (oe.hrtime = e.process.hrtime), l && (oe.nextTick = e.process.nextTick), u && (oe.performance = e.performance), v && (oe.requestAnimationFrame = e.requestAnimationFrame), b && (oe.queueMicrotask = !0), h && (oe.cancelAnimationFrame = e.cancelAnimationFrame), A && (oe.requestIdleCallback = e.requestIdleCallback), M && (oe.cancelIdleCallback = e.cancelIdleCallback), k && (oe.Intl = e.Intl);
  const ye = e.setImmediate || e.setTimeout;
  function qe(E, S) {
    E = Math.floor(Pe(E)), S = S || 1e3;
    let C = 0;
    const R = [0, 0];
    if (N === void 0)
      throw new Error(
        "The global scope doesn't have a `Date` object (see https://github.com/sinonjs/sinon/issues/1852#issuecomment-419622780)"
      );
    const y = {
      now: E,
      Date: De(),
      loopLimit: S
    };
    y.Date.clock = y;
    function X() {
      return 16 - (y.now - E) % 16;
    }
    function ve(Y) {
      const W = y.now - R[0] - E, Q = Math.floor(W / 1e3), te = (W - Q * 1e3) * 1e6 + C - R[1];
      if (Array.isArray(Y)) {
        if (Y[1] > 1e9)
          throw new TypeError(
            "Number of nanoseconds can't exceed a billion"
          );
        const ge = Y[0];
        let _e = te - Y[1], nt = Q - ge;
        return _e < 0 && (_e += 1e9, nt -= 1), [nt, _e];
      }
      return [Q, te];
    }
    function Ee() {
      const Y = ve();
      return Y[0] * 1e3 + Y[1] / 1e6;
    }
    c && (ve.bigint = function() {
      const Y = ve();
      return BigInt(Y[0]) * BigInt(1e9) + BigInt(Y[1]);
    }), k && (y.Intl = m(), y.Intl.clock = y), y.requestIdleCallback = function(W, Q) {
      let te = 0;
      y.countTimers() > 0 && (te = 50);
      const ge = P(y, {
        func: W,
        args: Array.prototype.slice.call(arguments, 2),
        delay: typeof Q > "u" ? te : Math.min(Q, te),
        idleCallback: !0
      });
      return Number(ge);
    }, y.cancelIdleCallback = function(W) {
      return H(y, W, "IdleCallback");
    }, y.setTimeout = function(W, Q) {
      return P(y, {
        func: W,
        args: Array.prototype.slice.call(arguments, 2),
        delay: Q
      });
    }, typeof e.Promise < "u" && f && (y.setTimeout[f.custom] = function(W, Q) {
      return new e.Promise(function(ge) {
        P(y, {
          func: ge,
          args: [Q],
          delay: W
        });
      });
    }), y.clearTimeout = function(W) {
      return H(y, W, "Timeout");
    }, y.nextTick = function(W) {
      return T(y, {
        func: W,
        args: Array.prototype.slice.call(arguments, 1),
        error: ae ? new Error() : null
      });
    }, y.queueMicrotask = function(W) {
      return y.nextTick(W);
    }, y.setInterval = function(W, Q) {
      return Q = parseInt(Q, 10), P(y, {
        func: W,
        args: Array.prototype.slice.call(arguments, 2),
        delay: Q,
        interval: Q
      });
    }, y.clearInterval = function(W) {
      return H(y, W, "Interval");
    }, F && (y.setImmediate = function(W) {
      return P(y, {
        func: W,
        args: Array.prototype.slice.call(arguments, 1),
        immediate: !0
      });
    }, typeof e.Promise < "u" && f && (y.setImmediate[f.custom] = function(W) {
      return new e.Promise(
        function(te) {
          P(y, {
            func: te,
            args: [W],
            immediate: !0
          });
        }
      );
    }), y.clearImmediate = function(W) {
      return H(y, W, "Immediate");
    }), y.countTimers = function() {
      return Object.keys(y.timers || {}).length + (y.jobs || []).length;
    }, y.requestAnimationFrame = function(W) {
      const Q = P(y, {
        func: W,
        delay: X(),
        get args() {
          return [Ee()];
        },
        animation: !0
      });
      return Number(Q);
    }, y.cancelAnimationFrame = function(W) {
      return H(y, W, "AnimationFrame");
    }, y.runMicrotasks = function() {
      x(y);
    };
    function Be(Y, W, Q, te) {
      const ge = typeof Y == "number" ? Y : we(Y), _e = Math.floor(ge), nt = $e(ge);
      let Nt = C + nt, ze = y.now + _e;
      if (ge < 0)
        throw new TypeError("Negative ticks are not supported");
      Nt >= 1e6 && (ze += 1, Nt -= 1e6), C = Nt;
      let d = y.now, g = y.now, _, L, z, ee, ie, me;
      y.duringTick = !0, z = y.now, x(y), z !== y.now && (d += y.now - z, ze += y.now - z);
      function Ce() {
        for (_ = D(y, d, ze); _ && d <= ze; ) {
          if (y.timers[_.id]) {
            d = _.callAt, y.now = _.callAt, z = y.now;
            try {
              x(y), q(y, _);
            } catch (Oe) {
              L = L || Oe;
            }
            if (W) {
              ye(ee);
              return;
            }
            ie();
          }
          me();
        }
        if (z = y.now, x(y), z !== y.now && (d += y.now - z, ze += y.now - z), y.duringTick = !1, _ = D(y, d, ze), _)
          try {
            y.tick(ze - y.now);
          } catch (Oe) {
            L = L || Oe;
          }
        else
          y.now = ze, C = Nt;
        if (L)
          throw L;
        if (W)
          Q(y.now);
        else
          return y.now;
      }
      return ee = W && function() {
        try {
          ie(), me(), Ce();
        } catch (Oe) {
          te(Oe);
        }
      }, ie = function() {
        z !== y.now && (d += y.now - z, ze += y.now - z, g += y.now - z);
      }, me = function() {
        _ = D(y, g, ze), g = d;
      }, Ce();
    }
    return y.tick = function(W) {
      return Be(W, !1);
    }, typeof e.Promise < "u" && (y.tickAsync = function(W) {
      return new e.Promise(function(Q, te) {
        ye(function() {
          try {
            Be(W, !0, Q, te);
          } catch (ge) {
            te(ge);
          }
        });
      });
    }), y.next = function() {
      x(y);
      const W = I(y);
      if (!W)
        return y.now;
      y.duringTick = !0;
      try {
        return y.now = W.callAt, q(y, W), x(y), y.now;
      } finally {
        y.duringTick = !1;
      }
    }, typeof e.Promise < "u" && (y.nextAsync = function() {
      return new e.Promise(function(W, Q) {
        ye(function() {
          try {
            const te = I(y);
            if (!te) {
              W(y.now);
              return;
            }
            let ge;
            y.duringTick = !0, y.now = te.callAt;
            try {
              q(y, te);
            } catch (_e) {
              ge = _e;
            }
            y.duringTick = !1, ye(function() {
              ge ? Q(ge) : W(y.now);
            });
          } catch (te) {
            Q(te);
          }
        });
      });
    }), y.runAll = function() {
      let W, Q;
      for (x(y), Q = 0; Q < y.loopLimit; Q++) {
        if (!y.timers || (W = Object.keys(y.timers).length, W === 0))
          return xe(), y.now;
        y.next(), V(y, Q);
      }
      const te = I(y);
      throw Ie(y, te);
    }, y.runToFrame = function() {
      return y.tick(X());
    }, typeof e.Promise < "u" && (y.runAllAsync = function() {
      return new e.Promise(function(W, Q) {
        let te = 0;
        function ge() {
          ye(function() {
            try {
              let _e;
              if (te < y.loopLimit) {
                if (!y.timers) {
                  xe(), W(y.now);
                  return;
                }
                if (_e = Object.keys(
                  y.timers
                ).length, _e === 0) {
                  xe(), W(y.now);
                  return;
                }
                y.next(), te++, ge(), V(y, te);
                return;
              }
              const nt = I(y);
              Q(Ie(y, nt));
            } catch (_e) {
              Q(_e);
            }
          });
        }
        ge();
      });
    }), y.runToLast = function() {
      const W = $(y);
      return W ? y.tick(W.callAt - y.now) : (x(y), y.now);
    }, typeof e.Promise < "u" && (y.runToLastAsync = function() {
      return new e.Promise(function(W, Q) {
        ye(function() {
          try {
            const te = $(y);
            te || W(y.now), W(y.tickAsync(te.callAt - y.now));
          } catch (te) {
            Q(te);
          }
        });
      });
    }), y.reset = function() {
      C = 0, y.timers = {}, y.jobs = [], y.now = E;
    }, y.setSystemTime = function(W) {
      const Q = Pe(W), te = Q - y.now;
      let ge, _e;
      R[0] = R[0] + te, R[1] = R[1] + C, y.now = Q, C = 0;
      for (ge in y.timers)
        y.timers.hasOwnProperty(ge) && (_e = y.timers[ge], _e.createdAt += te, _e.callAt += te);
    }, y.jump = function(W) {
      const Q = typeof W == "number" ? W : we(W), te = Math.floor(Q);
      for (const ge of Object.values(y.timers))
        y.now + te > ge.callAt && (ge.callAt = y.now + te);
      y.tick(te);
    }, u && (y.performance = /* @__PURE__ */ Object.create(null), y.performance.now = Ee), a && (y.hrtime = ve), y;
  }
  function fr(E) {
    if (arguments.length > 1 || E instanceof Date || Array.isArray(E) || typeof E == "number")
      throw new TypeError(
        `FakeTimers.install called with ${String(
          E
        )} install requires an object parameter`
      );
    if (e.Date.isFake === !0)
      throw new TypeError(
        "Can't install fake timers twice on the same global object."
      );
    if (E = typeof E < "u" ? E : {}, E.shouldAdvanceTime = E.shouldAdvanceTime || !1, E.advanceTimeDelta = E.advanceTimeDelta || 20, E.shouldClearNativeTimers = E.shouldClearNativeTimers || !1, E.target)
      throw new TypeError(
        "config.target is no longer supported. Use `withGlobal(target)` instead."
      );
    let S, C;
    const R = qe(E.now, E.loopLimit);
    if (R.shouldClearNativeTimers = E.shouldClearNativeTimers, R.uninstall = function() {
      return re(R, E);
    }, R.methods = E.toFake || [], R.methods.length === 0 && (R.methods = Object.keys(oe).filter(function(y) {
      return y !== "nextTick" && y !== "queueMicrotask";
    })), E.shouldAdvanceTime === !0) {
      const y = ce.bind(
        null,
        R,
        E.advanceTimeDelta
      ), X = e.setInterval(
        y,
        E.advanceTimeDelta
      );
      R.attachedInterval = X;
    }
    if (R.methods.includes("performance")) {
      const y = (() => {
        if (w)
          return e.performance.constructor.prototype;
        if (p)
          return e.Performance.prototype;
      })();
      if (y)
        Object.getOwnPropertyNames(y).forEach(function(X) {
          X !== "now" && (R.performance[X] = X.indexOf("getEntries") === 0 ? r : o);
        });
      else if ((E.toFake || []).includes("performance"))
        throw new ReferenceError(
          "non-existent performance object cannot be faked"
        );
    }
    for (e === tu && Dt && (R.timersModuleMethods = []), S = 0, C = R.methods.length; S < C; S++) {
      const y = R.methods[S];
      if (y === "hrtime" ? e.process && typeof e.process.hrtime == "function" && O(e.process, y, R) : y === "nextTick" ? e.process && typeof e.process.nextTick == "function" && O(e.process, y, R) : O(e, y, R), R.timersModuleMethods !== void 0 && Dt[y]) {
        const X = Dt[y];
        R.timersModuleMethods.push({
          methodName: y,
          original: X
        }), Dt[y] = e[y];
      }
    }
    return R;
  }
  return {
    timers: oe,
    createClock: qe,
    install: fr,
    withGlobal: Io
  };
}
const Co = Io(tu);
Co.timers;
Co.createClock;
Co.install;
var Fg = Io;
class Dg {
  constructor({
    global: t,
    config: n
  }) {
    se(this, "_global");
    se(this, "_clock");
    se(this, "_fakingTime");
    se(this, "_fakingDate");
    se(this, "_fakeTimers");
    se(this, "_userConfig");
    se(this, "_now", Ge.now);
    this._userConfig = n, this._fakingDate = !1, this._fakingTime = !1, this._fakeTimers = Fg(t), this._global = t;
  }
  clearAllTimers() {
    this._fakingTime && this._clock.reset();
  }
  dispose() {
    this.useRealTimers();
  }
  runAllTimers() {
    this._checkFakeTimers() && this._clock.runAll();
  }
  async runAllTimersAsync() {
    this._checkFakeTimers() && await this._clock.runAllAsync();
  }
  runOnlyPendingTimers() {
    this._checkFakeTimers() && this._clock.runToLast();
  }
  async runOnlyPendingTimersAsync() {
    this._checkFakeTimers() && await this._clock.runToLastAsync();
  }
  advanceTimersToNextTimer(t = 1) {
    if (this._checkFakeTimers())
      for (let n = t; n > 0 && (this._clock.next(), this._clock.tick(0), this._clock.countTimers() !== 0); n--)
        ;
  }
  async advanceTimersToNextTimerAsync(t = 1) {
    if (this._checkFakeTimers())
      for (let n = t; n > 0 && (await this._clock.nextAsync(), this._clock.tick(0), this._clock.countTimers() !== 0); n--)
        ;
  }
  advanceTimersByTime(t) {
    this._checkFakeTimers() && this._clock.tick(t);
  }
  async advanceTimersByTimeAsync(t) {
    this._checkFakeTimers() && await this._clock.tickAsync(t);
  }
  runAllTicks() {
    this._checkFakeTimers() && this._clock.runMicrotasks();
  }
  useRealTimers() {
    this._fakingDate && (Wy(), this._fakingDate = !1), this._fakingTime && (this._clock.uninstall(), this._fakingTime = !1);
  }
  useFakeTimers() {
    var t, n, o;
    if (this._fakingDate)
      throw new Error(
        '"setSystemTime" was called already and date was mocked. Reset timers using `vi.useRealTimers()` if you want to use fake timers again.'
      );
    if (!this._fakingTime) {
      const r = Object.keys(this._fakeTimers.timers).filter((i) => i !== "nextTick");
      if ((n = (t = this._userConfig) == null ? void 0 : t.toFake) != null && n.includes("nextTick") && Jc())
        throw new Error("process.nextTick cannot be mocked inside child_process");
      const s = (((o = this._userConfig) == null ? void 0 : o.toFake) || r).filter((i) => {
        switch (i) {
          case "setImmediate":
          case "clearImmediate":
            return i in this._global && this._global[i];
          default:
            return !0;
        }
      });
      this._clock = this._fakeTimers.install({
        now: Date.now(),
        ...this._userConfig,
        toFake: s
      }), this._fakingTime = !0;
    }
  }
  reset() {
    if (this._checkFakeTimers()) {
      const { now: t } = this._clock;
      this._clock.reset(), this._clock.setSystemTime(t);
    }
  }
  setSystemTime(t) {
    this._fakingTime ? this._clock.setSystemTime(t) : (zy(t ?? this.getRealSystemTime()), this._fakingDate = !0);
  }
  getRealSystemTime() {
    return this._now();
  }
  getTimerCount() {
    return this._checkFakeTimers() ? this._clock.countTimers() : 0;
  }
  configure(t) {
    this._userConfig = t;
  }
  isFakeTimers() {
    return this._fakingTime;
  }
  _checkFakeTimers() {
    if (!this._fakingTime)
      throw new Error(
        'Timers are not mocked. Try calling "vi.useFakeTimers()" first.'
      );
    return this._fakingTime;
  }
}
function nu(e, t) {
  return t.stack !== void 0 && (e.stack = t.stack.replace(t.message, e.message)), e;
}
function Bg(e, t = {}) {
  const { setTimeout: n, setInterval: o, clearTimeout: r, clearInterval: s } = nr(), { interval: i = 50, timeout: a = 1e3 } = typeof t == "number" ? { timeout: t } : t, c = new Error("STACK_TRACE_ERROR");
  return new Promise((l, f) => {
    let u, p = "idle", w, b;
    const v = (M) => {
      w && r(w), b && s(b), l(M);
    }, h = () => {
      let M = u;
      M || (M = nu(new Error("Timed out in waitFor!"), c)), f(M);
    }, A = () => {
      if (Zn.isFakeTimers() && Zn.advanceTimersByTime(i), p !== "pending")
        try {
          const M = e();
          if (M !== null && typeof M == "object" && typeof M.then == "function") {
            const F = M;
            p = "pending", F.then(
              (k) => {
                p = "resolved", v(k);
              },
              (k) => {
                p = "rejected", u = k;
              }
            );
          } else
            return v(M), !0;
        } catch (M) {
          u = M;
        }
    };
    A() !== !0 && (w = n(h, a), b = o(A, i));
  });
}
function Lg(e, t = {}) {
  const { setTimeout: n, setInterval: o, clearTimeout: r, clearInterval: s } = nr(), { interval: i = 50, timeout: a = 1e3 } = typeof t == "number" ? { timeout: t } : t, c = new Error("STACK_TRACE_ERROR");
  return new Promise((l, f) => {
    let u = "idle", p, w;
    const b = (A) => {
      A || (A = nu(new Error("Timed out in waitUntil!"), c)), f(A);
    }, v = (A) => {
      if (A)
        return p && r(p), w && s(w), l(A), !0;
    }, h = () => {
      if (Zn.isFakeTimers() && Zn.advanceTimersByTime(i), u !== "pending")
        try {
          const A = e();
          if (A !== null && typeof A == "object" && typeof A.then == "function") {
            const M = A;
            u = "pending", M.then(
              (F) => {
                u = "resolved", v(F);
              },
              (F) => {
                u = "rejected", b(F);
              }
            );
          } else
            return v(A);
        } catch (A) {
          b(A);
        }
    };
    h() !== !0 && (p = n(b, a), w = o(h, i));
  });
}
function qg() {
  const e = typeof __vitest_mocker__ < "u" ? __vitest_mocker__ : new Proxy({}, {
    get(l, f) {
      throw new Error(
        `Vitest mocker was not initialized in this environment. vi.${String(f)}() is forbidden.`
      );
    }
  });
  let t = null, n = null;
  const o = bo(), r = new Dg({
    global: globalThis,
    config: o.config.fakeTimers
  }), s = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = () => {
    const f = Zl({ stackTraceLimit: 4 }).split(`
`)[4], u = Ly(f);
    return (u == null ? void 0 : u.file) || "";
  }, c = {
    useFakeTimers(l) {
      var f, u, p, w;
      if (Jc() && ((f = l == null ? void 0 : l.toFake) != null && f.includes("nextTick") || (w = (p = (u = o.config) == null ? void 0 : u.fakeTimers) == null ? void 0 : p.toFake) != null && w.includes("nextTick")))
        throw new Error(
          'vi.useFakeTimers({ toFake: ["nextTick"] }) is not supported in node:child_process. Use --pool=threads if mocking nextTick is required.'
        );
      return l ? r.configure({ ...o.config.fakeTimers, ...l }) : r.configure(o.config.fakeTimers), r.useFakeTimers(), c;
    },
    isFakeTimers() {
      return r.isFakeTimers();
    },
    useRealTimers() {
      return r.useRealTimers(), t = null, c;
    },
    runOnlyPendingTimers() {
      return r.runOnlyPendingTimers(), c;
    },
    async runOnlyPendingTimersAsync() {
      return await r.runOnlyPendingTimersAsync(), c;
    },
    runAllTimers() {
      return r.runAllTimers(), c;
    },
    async runAllTimersAsync() {
      return await r.runAllTimersAsync(), c;
    },
    runAllTicks() {
      return r.runAllTicks(), c;
    },
    advanceTimersByTime(l) {
      return r.advanceTimersByTime(l), c;
    },
    async advanceTimersByTimeAsync(l) {
      return await r.advanceTimersByTimeAsync(l), c;
    },
    advanceTimersToNextTimer() {
      return r.advanceTimersToNextTimer(), c;
    },
    async advanceTimersToNextTimerAsync() {
      return await r.advanceTimersToNextTimerAsync(), c;
    },
    getTimerCount() {
      return r.getTimerCount();
    },
    setSystemTime(l) {
      const f = l instanceof Date ? l : new Date(l);
      return t = f, r.setSystemTime(f), c;
    },
    getMockedSystemTime() {
      return t;
    },
    getRealSystemTime() {
      return r.getRealSystemTime();
    },
    clearAllTimers() {
      return r.clearAllTimers(), c;
    },
    // mocks
    spyOn: mh,
    fn: yh,
    waitFor: Bg,
    waitUntil: Lg,
    hoisted(l) {
      return He(l, '"vi.hoisted" factory', ["function"]), l();
    },
    mock(l, f) {
      const u = a();
      e.queueMock(
        l,
        u,
        f ? () => f(() => e.importActual(l, u, e.getMockContext().callstack)) : void 0,
        !0
      );
    },
    unmock(l) {
      e.queueUnmock(l, a());
    },
    doMock(l, f) {
      const u = a();
      e.queueMock(
        l,
        u,
        f ? () => f(() => e.importActual(l, u, e.getMockContext().callstack)) : void 0,
        !1
      );
    },
    doUnmock(l) {
      e.queueUnmock(l, a());
    },
    async importActual(l) {
      return e.importActual(
        l,
        a(),
        e.getMockContext().callstack
      );
    },
    async importMock(l) {
      return e.importMock(l, a());
    },
    // this is typed in the interface so it's not necessary to type it here
    mocked(l, f = {}) {
      return l;
    },
    isMockFunction(l) {
      return Ga(l);
    },
    clearAllMocks() {
      return Vn.forEach((l) => l.mockClear()), c;
    },
    resetAllMocks() {
      return Vn.forEach((l) => l.mockReset()), c;
    },
    restoreAllMocks() {
      return Vn.forEach((l) => l.mockRestore()), c;
    },
    stubGlobal(l, f) {
      return s.has(l) || s.set(l, Object.getOwnPropertyDescriptor(globalThis, l)), Object.defineProperty(globalThis, l, {
        value: f,
        writable: !0,
        configurable: !0,
        enumerable: !0
      }), c;
    },
    stubEnv(l, f) {
      return i.has(l) || i.set(l, process.env[l]), process.env[l] = f, c;
    },
    unstubAllGlobals() {
      return s.forEach((l, f) => {
        l ? Object.defineProperty(globalThis, f, l) : Reflect.deleteProperty(globalThis, f);
      }), s.clear(), c;
    },
    unstubAllEnvs() {
      return i.forEach((l, f) => {
        l === void 0 ? delete process.env[f] : process.env[f] = l;
      }), i.clear(), c;
    },
    resetModules() {
      return Vy(o.moduleCache), c;
    },
    async dynamicImportSettled() {
      return Yc();
    },
    setConfig(l) {
      n || (n = { ...o.config }), Object.assign(o.config, l);
    },
    resetConfig() {
      n && Object.assign(o.config, n);
    }
  };
  return c;
}
const zg = qg(), Zn = zg, Et = {
  "@context": "http://www.w3.org/ns/anno.jsonld",
  type: "Annotation",
  body: [{ type: "TextualBody", value: "first", purpose: "commenting" }],
  target: {
    source: "http://example.com/1",
    selector: {
      type: "FragmentSelector",
      conformsTo: "http://www.w3.org/TR/media-frags/",
      value: "xywh=pixel:10,20,30,40"
    }
  },
  id: "123abc"
}, Ae = (e, t) => ({
  type: "Annotation",
  body: { type: "TextualBody", value: "first", format: "text/plain" },
  motivation: "commenting",
  target: {
    type: "SpecificResource",
    source: {
      id: t,
      type: "Canvas",
      partOf: [
        {
          id: e,
          type: "Manifest"
        }
      ]
    },
    selector: {
      type: "FragmentSelector",
      conformsTo: "http://www.w3.org/TR/media-frags/",
      value: "xywh=10,20,30,40"
    }
  },
  id: "123abc"
}), er = {
  "@context": "http://www.w3.org/ns/anno.jsonld",
  type: "Annotation",
  body: [{ type: "TextualBody", value: "second", purpose: "commenting" }],
  target: {
    source: "http://example.com/2",
    selector: {
      type: "FragmentSelector",
      conformsTo: "http://www.w3.org/TR/media-frags/",
      value: "xywh=pixel:15,25,35,45"
    }
  },
  id: "456def"
}, Ke = (e, t) => ({
  type: "Annotation",
  body: { type: "TextualBody", value: "second", format: "text/plain" },
  motivation: "commenting",
  target: {
    type: "SpecificResource",
    source: {
      id: t,
      type: "Canvas",
      partOf: [
        {
          id: e,
          type: "Manifest"
        }
      ]
    },
    selector: {
      type: "FragmentSelector",
      conformsTo: "http://www.w3.org/TR/media-frags/",
      value: "xywh=15,25,35,45"
    }
  },
  id: "456def"
}), vn = {
  "@context": "http://www.w3.org/ns/anno.jsonld",
  type: "Annotation",
  body: [
    { type: "TextualBody", value: "second b", purpose: "commenting" },
    { type: "TextualBody", value: "second c", purpose: "commenting" }
  ],
  target: {
    source: "http://example.com/1",
    selector: {
      type: "FragmentSelector",
      conformsTo: "http://www.w3.org/TR/media-frags/",
      value: "xywh=pixel:10,20,30,40"
    }
  },
  id: "123abc"
}, On = (e, t) => ({
  type: "Annotation",
  body: [
    { type: "TextualBody", value: "second b", format: "text/plain" },
    { type: "TextualBody", value: "second c", format: "text/plain" }
  ],
  motivation: "commenting",
  target: {
    type: "SpecificResource",
    source: {
      id: t,
      type: "Canvas",
      partOf: [
        {
          id: e,
          type: "Manifest"
        }
      ]
    },
    selector: {
      type: "FragmentSelector",
      conformsTo: "http://www.w3.org/TR/media-frags/",
      value: "xywh=10,20,30,40"
    }
  },
  id: "123abc"
}), Wg = {
  "@context": "http://www.w3.org/ns/anno.jsonld",
  type: "Annotation",
  body: [],
  target: {
    source: "http://example.com/canvas/1",
    selector: {
      type: "FragmentSelector",
      conformsTo: "http://www.w3.org/TR/media-frags/",
      value: "xywh=pixel:10,20,30,40"
    }
  },
  id: "123abc"
}, ru = (e, t) => ({
  type: "Annotation",
  motivation: "commenting",
  target: {
    selector: {
      conformsTo: "http://www.w3.org/TR/media-frags/",
      type: "FragmentSelector",
      value: "xywh=10,20,30,40"
    },
    source: {
      id: t,
      partOf: [
        {
          id: e,
          type: "Manifest"
        }
      ],
      type: "Canvas"
    },
    type: "SpecificResource"
  },
  id: "123abc"
}), qn = (e) => ({
  "@context": "http://iiif.io/api/presentation/3/context.json",
  id: "http://localhost:3000/api/annotationsByCanvas/1?action=GET",
  type: "AnnotationPage",
  items: e
}), Te = "pixel";
Yt("saveAnnotation with guest user", () => {
  go(() => {
    localStorage.clear();
  }), Se("saves annotation when there are no saved annotation", () => {
    const e = "canvas1", t = "manifest";
    An(Et, t, e, Te);
    const n = localStorage.getItem("annotations"), o = JSON.stringify({
      [e]: {
        "@context": "http://iiif.io/api/presentation/3/context.json",
        id: e,
        items: [Ae(t, e)],
        type: "AnnotationPage"
      }
    });
    be(n).toStrictEqual(o);
  }), Se("saves annotation when there are saved annotation", () => {
    const e = "canvas1", t = "manifest";
    localStorage.setItem(
      "annotations",
      JSON.stringify({
        [e]: {
          "@context": "http://iiif.io/api/presentation/3/context.json",
          id: e,
          items: [Ae(t, e)],
          type: "AnnotationPage"
        }
      })
    ), An(er, t, e, Te);
    const n = localStorage.getItem("annotations"), o = JSON.stringify({
      [e]: {
        "@context": "http://iiif.io/api/presentation/3/context.json",
        id: e,
        items: [Ae(t, e), Ke(t, e)],
        type: "AnnotationPage"
      }
    });
    be(n).toStrictEqual(o);
  }), Se("saves annotation when there are saved annotation with multiple canvas", () => {
    const e = "canvas1", t = "canvas2", n = "manifest";
    localStorage.setItem(
      "annotations",
      JSON.stringify({
        [e]: {
          "@context": "http://iiif.io/api/presentation/3/context.json",
          id: e,
          items: [Ae(n, e)],
          type: "AnnotationPage"
        }
      })
    ), An(er, n, t, Te);
    const o = localStorage.getItem("annotations"), r = JSON.stringify({
      [e]: {
        "@context": "http://iiif.io/api/presentation/3/context.json",
        id: e,
        items: [Ae(n, e)],
        type: "AnnotationPage"
      },
      [t]: {
        "@context": "http://iiif.io/api/presentation/3/context.json",
        id: t,
        items: [Ke(n, t)],
        type: "AnnotationPage"
      }
    });
    be(o).toStrictEqual(r);
  }), Se("saves annotation with multiple bodies", () => {
    const e = "canvas1", t = "manifest";
    An(vn, t, e, Te);
    const n = localStorage.getItem("annotations"), o = JSON.stringify({
      [e]: {
        "@context": "http://iiif.io/api/presentation/3/context.json",
        id: e,
        items: [On(t, e)],
        type: "AnnotationPage"
      }
    });
    be(n).toStrictEqual(o);
  });
});
Yt("deleteAnnotation with guest user", () => {
  go(() => {
    localStorage.clear();
  }), Se("deletes annotation when there is one annotation", () => {
    const e = "canvas1", t = "manifest";
    localStorage.setItem(
      "annotations",
      JSON.stringify({
        [e]: {
          id: e,
          items: [Ae(t, e)],
          type: "AnnotationPage"
        }
      })
    ), _n(Et, t, e, Te);
    const n = localStorage.getItem("annotations"), o = JSON.stringify({
      [e]: { id: e, items: [], type: "AnnotationPage" }
    });
    be(n).toStrictEqual(o);
  }), Se("deletes annotation when there are multiple annotations", () => {
    const e = "canvas1", t = "manifest";
    localStorage.setItem(
      "annotations",
      JSON.stringify({
        [e]: {
          id: e,
          items: [Ae(t, e), Ke(t, e)],
          type: "AnnotationPage"
        }
      })
    ), _n(Et, t, e, Te);
    const n = localStorage.getItem("annotations"), o = JSON.stringify({
      [e]: {
        id: e,
        items: [Ke(t, e)],
        type: "AnnotationPage"
      }
    });
    be(n).toStrictEqual(o);
  }), Se("deletes annotation when multiple canvases", () => {
    const e = "canvas1", t = "canvas2", n = "manifest";
    localStorage.setItem(
      "annotations",
      JSON.stringify({
        [e]: {
          id: e,
          items: [Ae(n, e)],
          type: "AnnotationPage"
        },
        [t]: {
          id: t,
          items: [Ke(n, t)],
          type: "AnnotationPage"
        }
      })
    ), _n(er, n, t, Te);
    const o = localStorage.getItem("annotations"), r = JSON.stringify({
      [e]: {
        id: e,
        items: [Ae(n, e)],
        type: "AnnotationPage"
      },
      [t]: {
        id: t,
        items: [],
        type: "AnnotationPage"
      }
    });
    be(o).toStrictEqual(r);
  }), Se("does nothing if canvas for annotation does not match saved annotations", () => {
    const e = "canvas1", t = "canvas2", n = "manifest";
    localStorage.setItem(
      "annotations",
      JSON.stringify({
        [e]: {
          id: e,
          items: [Ae(n, e)],
          type: "AnnotationPage"
        },
        [t]: {
          id: t,
          items: [Ke(n, t)],
          type: "AnnotationPage"
        }
      })
    ), _n(er, n, e, Te);
    const o = localStorage.getItem("annotations"), r = JSON.stringify({
      [e]: {
        id: e,
        items: [Ae(n, e)],
        type: "AnnotationPage"
      },
      [t]: {
        id: t,
        items: [Ke(n, t)],
        type: "AnnotationPage"
      }
    });
    be(o).toStrictEqual(r);
  });
});
Yt("updateAnnotation with guest user", () => {
  go(() => {
    localStorage.clear();
  }), Se("updates annotation when there is one annotation", () => {
    const e = "canvas1", t = "manifest";
    localStorage.setItem(
      "annotations",
      JSON.stringify({
        [e]: {
          id: e,
          items: [Ae(t, e)],
          type: "AnnotationPage"
        }
      })
    ), Mn({
      "@context": "http://www.w3.org/ns/anno.jsonld",
      type: "Annotation",
      body: [{ type: "TextualBody", value: "updated", purpose: "commenting" }],
      target: {
        source: "http://example.com/1",
        selector: {
          type: "FragmentSelector",
          conformsTo: "http://www.w3.org/TR/media-frags/",
          value: "xywh=100,200,300,400"
        }
      },
      id: "123abc"
    }, t, e, Te);
    const o = localStorage.getItem("annotations"), r = JSON.stringify({
      [e]: {
        id: e,
        items: [
          {
            type: "Annotation",
            body: {
              type: "TextualBody",
              value: "updated",
              format: "text/plain"
            },
            motivation: "commenting",
            target: {
              type: "SpecificResource",
              source: {
                id: e,
                type: "Canvas",
                partOf: [
                  {
                    id: t,
                    type: "Manifest"
                  }
                ]
              },
              selector: {
                type: "FragmentSelector",
                conformsTo: "http://www.w3.org/TR/media-frags/",
                value: "xywh=100,200,300,400"
              }
            },
            id: "123abc"
          }
        ],
        type: "AnnotationPage"
      }
    });
    be(o).toStrictEqual(r);
  }), Se("updates annotation when there are multiple annotations", () => {
    const e = "canvas1", t = "manifest";
    localStorage.setItem(
      "annotations",
      JSON.stringify({
        [e]: {
          id: e,
          items: [Ae(t, e), Ke(t, e)],
          type: "AnnotationPage"
        }
      })
    );
    const n = {
      ...Et,
      body: [{ type: "TextualBody", value: "updated", purpose: "commenting" }]
    };
    Mn(n, t, e, Te);
    const o = localStorage.getItem("annotations"), r = JSON.stringify({
      [e]: {
        id: e,
        items: [
          {
            ...Ae(t, e),
            body: {
              type: "TextualBody",
              value: "updated",
              format: "text/plain"
            }
          },
          Ke(t, e)
        ],
        type: "AnnotationPage"
      }
    });
    be(o).toStrictEqual(r);
  }), Se("does nothing if canvas for annotation does not match saved annotations", () => {
    const e = "canvas1", t = "canvas2", n = "manifest";
    localStorage.setItem(
      "annotations",
      JSON.stringify({
        [e]: {
          id: e,
          items: [Ae(n, e)],
          type: "AnnotationPage"
        },
        [t]: {
          id: t,
          items: [Ke(n, t)],
          type: "AnnotationPage"
        }
      })
    );
    const o = {
      ...Et,
      body: [{ type: "TextualBody", value: "updated", purpose: "commenting" }]
    };
    Mn(o, n, t, Te);
    const r = localStorage.getItem("annotations"), s = JSON.stringify({
      [e]: {
        id: e,
        items: [Ae(n, e)],
        type: "AnnotationPage"
      },
      [t]: {
        id: t,
        items: [Ke(n, t)],
        type: "AnnotationPage"
      }
    });
    be(r).toStrictEqual(s);
  }), Se("update annotation when there are multiple bodies", () => {
    const e = "canvas1", t = "manifest";
    localStorage.setItem(
      "annotations",
      JSON.stringify({
        [e]: {
          id: e,
          items: [Ae(t, e)],
          type: "AnnotationPage"
        }
      })
    ), Mn(vn, t, e, Te);
    const n = localStorage.getItem("annotations"), o = JSON.stringify({
      [e]: {
        id: e,
        items: [On(t, e)],
        type: "AnnotationPage"
      }
    });
    be(n).toStrictEqual(o);
  });
});
Yt("fetchAnnotations with guest user", () => {
  Se("returns empty array if no saved annotations", async () => {
    const t = await Pn("canvas1", Te), n = [];
    be(t).toStrictEqual(n);
  }), Se("returns web annotations for a given canvas", async () => {
    const e = "canvas1", t = "manifest";
    localStorage.setItem(
      "annotations",
      JSON.stringify({
        [e]: {
          id: e,
          items: [Ae(t, e)],
          type: "AnnotationPage"
        }
      })
    );
    const n = await Pn(e, Te), o = [
      {
        ...Et,
        target: {
          ...Et.target,
          source: {
            id: e,
            partOf: [{ id: t, type: "Manifest" }],
            type: "Canvas"
          }
        }
      }
    ];
    be(n).toStrictEqual(o);
  }), Se("returns empty array if canvas does not match saved annotation", async () => {
    const e = "canvas1", t = "canvas2", n = "manifest";
    localStorage.setItem(
      "annotations",
      JSON.stringify({
        [e]: {
          id: e,
          items: [Ae(n, e)],
          type: "AnnotationPage"
        }
      })
    );
    const o = await Pn(t, Te), r = [];
    be(o).toStrictEqual(r);
  }), Se("returns annotations with multiple bodies", async () => {
    const e = "canvas1", t = "manifest";
    localStorage.setItem(
      "annotations",
      JSON.stringify({
        [e]: {
          id: e,
          items: [On(t, e)],
          type: "AnnotationPage"
        }
      })
    );
    const n = await Pn(e, Te), o = [
      {
        ...vn,
        target: {
          ...vn.target,
          source: {
            id: e,
            partOf: [{ id: t, type: "Manifest" }],
            type: "Canvas"
          }
        }
      }
    ];
    be(n).toStrictEqual(o);
  });
});
Yt("convertWebAnnotationToIIIFAnnotation", () => {
  Se("converts web annoatation to IIIF annotation", () => {
    const e = "canvas1", t = "manifest", n = mr(
      Et,
      t,
      e,
      Te
    );
    be(n).toStrictEqual(Ae(t, e));
  }), Se("handles web annotation with multiple bodies", () => {
    const e = vn, t = "canvas1", n = "manifest", o = mr(
      e,
      n,
      t,
      Te
    );
    be(o).toStrictEqual(On(n, t));
  }), Se("handles web annotation with empty body", () => {
    const e = Wg, t = "canvas1", n = "manifest", o = mr(
      e,
      n,
      t,
      Te
    );
    be(o).toStrictEqual(ru(n, t));
  });
});
Yt("convertIIIFAnnotationPageToWebAnnotations", () => {
  Se("converts annotation page to format compatible with Annotorious", () => {
    const e = "canvas1", t = "manifest", n = qn([Ae(t, e)]), o = In(n, Te), r = [
      {
        "@context": "http://www.w3.org/ns/anno.jsonld",
        type: "Annotation",
        body: [{ type: "TextualBody", value: "first", purpose: "commenting" }],
        target: {
          source: {
            id: e,
            type: "Canvas",
            partOf: [
              {
                id: t,
                type: "Manifest"
              }
            ]
          },
          selector: {
            type: "FragmentSelector",
            conformsTo: "http://www.w3.org/TR/media-frags/",
            value: "xywh=pixel:10,20,30,40"
          }
        },
        id: "123abc"
      }
    ];
    be(o).toStrictEqual(r);
  }), Se("handles annotation page with multiple annotations", () => {
    const e = "canvas1", t = "manifest", n = qn([
      Ae(t, e),
      Ke(t, e)
    ]), o = In(n, Te), r = [
      {
        "@context": "http://www.w3.org/ns/anno.jsonld",
        type: "Annotation",
        body: [{ type: "TextualBody", value: "first", purpose: "commenting" }],
        target: {
          source: {
            id: e,
            type: "Canvas",
            partOf: [
              {
                id: t,
                type: "Manifest"
              }
            ]
          },
          selector: {
            type: "FragmentSelector",
            conformsTo: "http://www.w3.org/TR/media-frags/",
            value: "xywh=pixel:10,20,30,40"
          }
        },
        id: "123abc"
      },
      {
        "@context": "http://www.w3.org/ns/anno.jsonld",
        type: "Annotation",
        body: [{ type: "TextualBody", value: "second", purpose: "commenting" }],
        target: {
          source: {
            id: e,
            type: "Canvas",
            partOf: [
              {
                id: t,
                type: "Manifest"
              }
            ]
          },
          selector: {
            type: "FragmentSelector",
            conformsTo: "http://www.w3.org/TR/media-frags/",
            value: "xywh=pixel:15,25,35,45"
          }
        },
        id: "456def"
      }
    ];
    be(o).toStrictEqual(r);
  }), Se("handles annotation page with annotation with multiple bodies", () => {
    const e = "canvas1", t = "manifest", n = qn([
      On(t, e)
    ]), o = In(n, Te), r = [
      {
        "@context": "http://www.w3.org/ns/anno.jsonld",
        type: "Annotation",
        body: [
          { type: "TextualBody", value: "second b", purpose: "commenting" },
          { type: "TextualBody", value: "second c", purpose: "commenting" }
        ],
        target: {
          source: {
            id: e,
            type: "Canvas",
            partOf: [
              {
                id: t,
                type: "Manifest"
              }
            ]
          },
          selector: {
            type: "FragmentSelector",
            conformsTo: "http://www.w3.org/TR/media-frags/",
            value: "xywh=pixel:10,20,30,40"
          }
        },
        id: "123abc"
      }
    ];
    be(o).toStrictEqual(r);
  }), Se("handles annotation page with annotation with no body", () => {
    const e = "canvas1", t = "manifest", n = qn([ru(t, e)]), o = In(n, Te), r = [
      {
        "@context": "http://www.w3.org/ns/anno.jsonld",
        type: "Annotation",
        body: [],
        target: {
          source: {
            id: e,
            type: "Canvas",
            partOf: [
              {
                id: t,
                type: "Manifest"
              }
            ]
          },
          selector: {
            type: "FragmentSelector",
            conformsTo: "http://www.w3.org/TR/media-frags/",
            value: "xywh=pixel:10,20,30,40"
          }
        },
        id: "123abc"
      }
    ];
    be(o).toStrictEqual(r);
  });
});
