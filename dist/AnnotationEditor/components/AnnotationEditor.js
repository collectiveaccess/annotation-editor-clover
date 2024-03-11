import "../../assets/AnnotationEditor.css";
import { jsx as At, Fragment as zx, jsxs as hd } from "react/jsx-runtime";
import { useState as dd, useEffect as jx } from "react";
import { c as Ts, g as Ux } from "../../_commonjsHelpers-CT_km90n.js";
import { saveAnnotation as Vx, updateAnnotation as Wx, deleteAnnotation as Gx, fetchAnnotations as qx } from "../utils/annotation-utils.js";
import { useEditorDispatch as $x } from "../context/annotation-editor-context.js";
var gd = { exports: {} };
(function(vr, yr) {
  (function(Vt, Pt) {
    vr.exports = Pt();
  })(Ts, function() {
    var Vt = Object.defineProperty, Pt = (t, i, e) => i in t ? Vt(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[i] = e, P = (t, i, e) => (Pt(t, typeof i != "symbol" ? i + "" : i, e), e), Ze, W, Tn, at, ni, Wt, Gt, Ke = {}, ii = [], As = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function Te(t, i) {
      for (var e in i)
        t[e] = i[e];
      return t;
    }
    function lt(t) {
      var i = t.parentNode;
      i && i.removeChild(t);
    }
    function ye(t, i, e) {
      var n, r, o, s = {};
      for (o in i)
        o == "key" ? n = i[o] : o == "ref" ? r = i[o] : s[o] = i[o];
      if (arguments.length > 2 && (s.children = arguments.length > 3 ? Ze.call(arguments, 2) : e), typeof t == "function" && t.defaultProps != null)
        for (o in t.defaultProps)
          s[o] === void 0 && (s[o] = t.defaultProps[o]);
      return Dt(t, s, n, r, null);
    }
    function Dt(t, i, e, n, r) {
      var o = { type: t, props: i, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r ?? ++Tn };
      return r == null && W.vnode != null && W.vnode(o), o;
    }
    function Er() {
      return { current: null };
    }
    function qe(t) {
      return t.children;
    }
    function we(t, i) {
      this.props = t, this.context = i;
    }
    function qt(t, i) {
      if (i == null)
        return t.__ ? qt(t.__, t.__.__k.indexOf(t) + 1) : null;
      for (var e; i < t.__k.length; i++)
        if ((e = t.__k[i]) != null && e.__e != null)
          return e.__e;
      return typeof t.type == "function" ? qt(t) : null;
    }
    function Ps(t) {
      var i, e;
      if ((t = t.__) != null && t.__c != null) {
        for (t.__e = t.__c.base = null, i = 0; i < t.__k.length; i++)
          if ((e = t.__k[i]) != null && e.__e != null) {
            t.__e = t.__c.base = e.__e;
            break;
          }
        return Ps(t);
      }
    }
    function wr(t) {
      (!t.__d && (t.__d = !0) && at.push(t) && !ri.__r++ || Wt !== W.debounceRendering) && ((Wt = W.debounceRendering) || ni)(ri);
    }
    function ri() {
      for (var t; ri.__r = at.length; )
        t = at.sort(function(i, e) {
          return i.__v.__b - e.__v.__b;
        }), at = [], t.some(function(i) {
          var e, n, r, o, s, a;
          i.__d && (s = (o = (e = i).__v).__e, (a = e.__P) && (n = [], (r = Te({}, o)).__v = o.__v + 1, br(a, o, r, e.__n, a.ownerSVGElement !== void 0, o.__h != null ? [s] : null, n, s ?? qt(o), o.__h), Ms(n, o), o.__e != s && Ps(o)));
        });
    }
    function Ds(t, i, e, n, r, o, s, a, l, u) {
      var c, h, d, m, y, S, b, A = n && n.__k || ii, p = A.length;
      for (e.__k = [], c = 0; c < i.length; c++)
        if ((m = e.__k[c] = (m = i[c]) == null || typeof m == "boolean" ? null : typeof m == "string" || typeof m == "number" || typeof m == "bigint" ? Dt(null, m, null, null, m) : Array.isArray(m) ? Dt(qe, { children: m }, null, null, null) : m.__b > 0 ? Dt(m.type, m.props, m.key, null, m.__v) : m) != null) {
          if (m.__ = e, m.__b = e.__b + 1, (d = A[c]) === null || d && m.key == d.key && m.type === d.type)
            A[c] = void 0;
          else
            for (h = 0; h < p; h++) {
              if ((d = A[h]) && m.key == d.key && m.type === d.type) {
                A[h] = void 0;
                break;
              }
              d = null;
            }
          br(t, m, d = d || Ke, r, o, s, a, l, u), y = m.__e, (h = m.ref) && d.ref != h && (b || (b = []), d.ref && b.push(d.ref, null, m), b.push(h, m.__c || y, m)), y != null ? (S == null && (S = y), typeof m.type == "function" && m.__k === d.__k ? m.__d = l = Os(m, l, t) : l = Rs(t, m, d, A, y, l), typeof e.type == "function" && (e.__d = l)) : l && d.__e == l && l.parentNode != t && (l = qt(d));
        }
      for (e.__e = S, c = p; c--; )
        A[c] != null && (typeof e.type == "function" && A[c].__e != null && A[c].__e == e.__d && (e.__d = qt(n, c + 1)), Ls(A[c], A[c]));
      if (b)
        for (c = 0; c < b.length; c++)
          Is(b[c], b[++c], b[++c]);
    }
    function Os(t, i, e) {
      for (var n, r = t.__k, o = 0; r && o < r.length; o++)
        (n = r[o]) && (n.__ = t, i = typeof n.type == "function" ? Os(n, i, e) : Rs(e, n, n, r, n.__e, i));
      return i;
    }
    function ut(t, i) {
      return i = i || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(e) {
        ut(e, i);
      }) : i.push(t)), i;
    }
    function Rs(t, i, e, n, r, o) {
      var s, a, l;
      if (i.__d !== void 0)
        s = i.__d, i.__d = void 0;
      else if (e == null || r != o || r.parentNode == null)
        e:
          if (o == null || o.parentNode !== t)
            t.appendChild(r), s = null;
          else {
            for (a = o, l = 0; (a = a.nextSibling) && l < n.length; l += 2)
              if (a == r)
                break e;
            t.insertBefore(r, o), s = o;
          }
      return s !== void 0 ? s : r.nextSibling;
    }
    function fd(t, i, e, n, r) {
      var o;
      for (o in e)
        o === "children" || o === "key" || o in i || oi(t, o, null, e[o], n);
      for (o in i)
        r && typeof i[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || e[o] === i[o] || oi(t, o, i[o], e[o], n);
    }
    function ks(t, i, e) {
      i[0] === "-" ? t.setProperty(i, e) : t[i] = e == null ? "" : typeof e != "number" || As.test(i) ? e : e + "px";
    }
    function oi(t, i, e, n, r) {
      var o;
      e:
        if (i === "style")
          if (typeof e == "string")
            t.style.cssText = e;
          else {
            if (typeof n == "string" && (t.style.cssText = n = ""), n)
              for (i in n)
                e && i in e || ks(t.style, i, "");
            if (e)
              for (i in e)
                n && e[i] === n[i] || ks(t.style, i, e[i]);
          }
        else if (i[0] === "o" && i[1] === "n")
          o = i !== (i = i.replace(/Capture$/, "")), i = i.toLowerCase() in t ? i.toLowerCase().slice(2) : i.slice(2), t.l || (t.l = {}), t.l[i + o] = e, e ? n || t.addEventListener(i, o ? Fs : Bs, o) : t.removeEventListener(i, o ? Fs : Bs, o);
        else if (i !== "dangerouslySetInnerHTML") {
          if (r)
            i = i.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
          else if (i !== "href" && i !== "list" && i !== "form" && i !== "tabIndex" && i !== "download" && i in t)
            try {
              t[i] = e ?? "";
              break e;
            } catch {
            }
          typeof e == "function" || (e != null && (e !== !1 || i[0] === "a" && i[1] === "r") ? t.setAttribute(i, e) : t.removeAttribute(i));
        }
    }
    function Bs(t) {
      this.l[t.type + !1](W.event ? W.event(t) : t);
    }
    function Fs(t) {
      this.l[t.type + !0](W.event ? W.event(t) : t);
    }
    function br(t, i, e, n, r, o, s, a, l) {
      var u, c, h, d, m, y, S, b, A, p, E, T = i.type;
      if (i.constructor !== void 0)
        return null;
      e.__h != null && (l = e.__h, a = i.__e = e.__e, i.__h = null, o = [a]), (u = W.__b) && u(i);
      try {
        e:
          if (typeof T == "function") {
            if (b = i.props, A = (u = T.contextType) && n[u.__c], p = u ? A ? A.props.value : u.__ : n, e.__c ? S = (c = i.__c = e.__c).__ = c.__E : ("prototype" in T && T.prototype.render ? i.__c = c = new T(b, p) : (i.__c = c = new we(b, p), c.constructor = T, c.render = vd), A && A.sub(c), c.props = b, c.state || (c.state = {}), c.context = p, c.__n = n, h = c.__d = !0, c.__h = []), c.__s == null && (c.__s = c.state), T.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Te({}, c.__s)), Te(c.__s, T.getDerivedStateFromProps(b, c.__s))), d = c.props, m = c.state, h)
              T.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
            else {
              if (T.getDerivedStateFromProps == null && b !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(b, p), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(b, c.__s, p) === !1 || i.__v === e.__v) {
                c.props = b, c.state = c.__s, i.__v !== e.__v && (c.__d = !1), c.__v = i, i.__e = e.__e, i.__k = e.__k, i.__k.forEach(function(C) {
                  C && (C.__ = i);
                }), c.__h.length && s.push(c);
                break e;
              }
              c.componentWillUpdate != null && c.componentWillUpdate(b, c.__s, p), c.componentDidUpdate != null && c.__h.push(function() {
                c.componentDidUpdate(d, m, y);
              });
            }
            c.context = p, c.props = b, c.state = c.__s, (u = W.__r) && u(i), c.__d = !1, c.__v = i, c.__P = t, u = c.render(c.props, c.state, c.context), c.state = c.__s, c.getChildContext != null && (n = Te(Te({}, n), c.getChildContext())), h || c.getSnapshotBeforeUpdate == null || (y = c.getSnapshotBeforeUpdate(d, m)), E = u != null && u.type === qe && u.key == null ? u.props.children : u, Ds(t, Array.isArray(E) ? E : [E], i, e, n, r, o, s, a, l), c.base = i.__e, i.__h = null, c.__h.length && s.push(c), S && (c.__E = c.__ = null), c.__e = !1;
          } else
            o == null && i.__v === e.__v ? (i.__k = e.__k, i.__e = e.__e) : i.__e = md(e.__e, i, e, n, r, o, s, l);
        (u = W.diffed) && u(i);
      } catch (C) {
        i.__v = null, (l || o != null) && (i.__e = a, i.__h = !!l, o[o.indexOf(a)] = null), W.__e(C, i, e);
      }
    }
    function Ms(t, i) {
      W.__c && W.__c(i, t), t.some(function(e) {
        try {
          t = e.__h, e.__h = [], t.some(function(n) {
            n.call(e);
          });
        } catch (n) {
          W.__e(n, e.__v);
        }
      });
    }
    function md(t, i, e, n, r, o, s, a) {
      var l, u, c, h = e.props, d = i.props, m = i.type, y = 0;
      if (m === "svg" && (r = !0), o != null) {
        for (; y < o.length; y++)
          if ((l = o[y]) && "setAttribute" in l == !!m && (m ? l.localName === m : l.nodeType === 3)) {
            t = l, o[y] = null;
            break;
          }
      }
      if (t == null) {
        if (m === null)
          return document.createTextNode(d);
        t = r ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, d.is && d), o = null, a = !1;
      }
      if (m === null)
        h === d || a && t.data === d || (t.data = d);
      else {
        if (o = o && Ze.call(t.childNodes), u = (h = e.props || Ke).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !a) {
          if (o != null)
            for (h = {}, y = 0; y < t.attributes.length; y++)
              h[t.attributes[y].name] = t.attributes[y].value;
          (c || u) && (c && (u && c.__html == u.__html || c.__html === t.innerHTML) || (t.innerHTML = c && c.__html || ""));
        }
        if (fd(t, d, h, r, a), c)
          i.__k = [];
        else if (y = i.props.children, Ds(t, Array.isArray(y) ? y : [y], i, e, n, r && m !== "foreignObject", o, s, o ? o[0] : e.__k && qt(e, 0), a), o != null)
          for (y = o.length; y--; )
            o[y] != null && lt(o[y]);
        a || ("value" in d && (y = d.value) !== void 0 && (y !== h.value || y !== t.value || m === "progress" && !y) && oi(t, "value", y, h.value, !1), "checked" in d && (y = d.checked) !== void 0 && y !== t.checked && oi(t, "checked", y, h.checked, !1));
      }
      return t;
    }
    function Is(t, i, e) {
      try {
        typeof t == "function" ? t(i) : t.current = i;
      } catch (n) {
        W.__e(n, e);
      }
    }
    function Ls(t, i, e) {
      var n, r;
      if (W.unmount && W.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || Is(n, null, i)), (n = t.__c) != null) {
        if (n.componentWillUnmount)
          try {
            n.componentWillUnmount();
          } catch (o) {
            W.__e(o, i);
          }
        n.base = n.__P = null;
      }
      if (n = t.__k)
        for (r = 0; r < n.length; r++)
          n[r] && Ls(n[r], i, typeof t.type != "function");
      e || t.__e == null || lt(t.__e), t.__e = t.__d = void 0;
    }
    function vd(t, i, e) {
      return this.constructor(t, e);
    }
    function An(t, i, e) {
      var n, r, o;
      W.__ && W.__(t, i), r = (n = typeof e == "function") ? null : e && e.__k || i.__k, o = [], br(i, t = (!n && e || i).__k = ye(qe, null, [t]), r || Ke, Ke, i.ownerSVGElement !== void 0, !n && e ? [e] : r ? null : i.firstChild ? Ze.call(i.childNodes) : null, o, !n && e ? e : r ? r.__e : i.firstChild, n), Ms(o, t);
    }
    function Ns(t, i) {
      An(t, i, Ns);
    }
    function yd(t, i, e) {
      var n, r, o, s = Te({}, t.props);
      for (o in i)
        o == "key" ? n = i[o] : o == "ref" ? r = i[o] : s[o] = i[o];
      return arguments.length > 2 && (s.children = arguments.length > 3 ? Ze.call(arguments, 2) : e), Dt(t.type, s, n || t.key, r || t.ref, null);
    }
    function Pn(t, i) {
      var e = { __c: i = "__cC" + Gt++, __: t, Consumer: function(n, r) {
        return n.children(r);
      }, Provider: function(n) {
        var r, o;
        return this.getChildContext || (r = [], (o = {})[i] = this, this.getChildContext = function() {
          return o;
        }, this.shouldComponentUpdate = function(s) {
          this.props.value !== s.value && r.some(wr);
        }, this.sub = function(s) {
          r.push(s);
          var a = s.componentWillUnmount;
          s.componentWillUnmount = function() {
            r.splice(r.indexOf(s), 1), a && a.call(s);
          };
        }), n.children;
      } };
      return e.Provider.__ = e.Consumer.contextType = e;
    }
    Ze = ii.slice, W = { __e: function(t, i) {
      for (var e, n, r; i = i.__; )
        if ((e = i.__c) && !e.__)
          try {
            if ((n = e.constructor) && n.getDerivedStateFromError != null && (e.setState(n.getDerivedStateFromError(t)), r = e.__d), e.componentDidCatch != null && (e.componentDidCatch(t), r = e.__d), r)
              return e.__E = e;
          } catch (o) {
            t = o;
          }
      throw t;
    } }, Tn = 0, we.prototype.setState = function(t, i) {
      var e;
      e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Te({}, this.state), typeof t == "function" && (t = t(Te({}, e), this.props)), t && Te(e, t), t != null && this.__v && (i && this.__h.push(i), wr(this));
    }, we.prototype.forceUpdate = function(t) {
      this.__v && (this.__e = !0, t && this.__h.push(t), wr(this));
    }, we.prototype.render = qe, at = [], ni = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ri.__r = 0, Gt = 0;
    var Ot, Ae, Hs, $t = 0, xr = [], zs = W.__b, js = W.__r, Us = W.diffed, Vs = W.__c, Ws = W.unmount;
    function Xt(t, i) {
      W.__h && W.__h(Ae, t, $t || i), $t = 0;
      var e = Ae.__H || (Ae.__H = { __: [], __h: [] });
      return t >= e.__.length && e.__.push({}), e.__[t];
    }
    function ct(t) {
      return $t = 1, Sr(Xs, t);
    }
    function Sr(t, i, e) {
      var n = Xt(Ot++, 2);
      return n.t = t, n.__c || (n.__ = [e ? e(i) : Xs(void 0, i), function(r) {
        var o = n.t(n.__[0], r);
        n.__[0] !== o && (n.__ = [o, n.__[1]], n.__c.setState({}));
      }], n.__c = Ae), n.__;
    }
    function Rt(t, i) {
      var e = Xt(Ot++, 3);
      !W.__s && Tr(e.__H, i) && (e.__ = t, e.__H = i, Ae.__H.__h.push(e));
    }
    function _r(t, i) {
      var e = Xt(Ot++, 4);
      !W.__s && Tr(e.__H, i) && (e.__ = t, e.__H = i, Ae.__h.push(e));
    }
    function Je(t) {
      return $t = 5, ht(function() {
        return { current: t };
      }, []);
    }
    function Gs(t, i, e) {
      $t = 6, _r(function() {
        typeof t == "function" ? t(i()) : t && (t.current = i());
      }, e == null ? e : e.concat(t));
    }
    function ht(t, i) {
      var e = Xt(Ot++, 7);
      return Tr(e.__H, i) && (e.__ = t(), e.__H = i, e.__h = t), e.__;
    }
    function Qe(t, i) {
      return $t = 8, ht(function() {
        return t;
      }, i);
    }
    function Dn(t) {
      var i = Ae.context[t.__c], e = Xt(Ot++, 9);
      return e.c = t, i ? (e.__ == null && (e.__ = !0, i.sub(Ae)), i.props.value) : t.__;
    }
    function qs(t, i) {
      W.useDebugValue && W.useDebugValue(i ? i(t) : t);
    }
    function Ed(t) {
      var i = Xt(Ot++, 10), e = ct();
      return i.__ = t, Ae.componentDidCatch || (Ae.componentDidCatch = function(n) {
        i.__ && i.__(n), e[1](n);
      }), [e[0], function() {
        e[1](void 0);
      }];
    }
    function wd() {
      var t;
      for (xr.sort(function(i, e) {
        return i.__v.__b - e.__v.__b;
      }); t = xr.pop(); )
        if (t.__P)
          try {
            t.__H.__h.forEach(si), t.__H.__h.forEach(Cr), t.__H.__h = [];
          } catch (i) {
            t.__H.__h = [], W.__e(i, t.__v);
          }
    }
    W.__b = function(t) {
      Ae = null, zs && zs(t);
    }, W.__r = function(t) {
      js && js(t), Ot = 0;
      var i = (Ae = t.__c).__H;
      i && (i.__h.forEach(si), i.__h.forEach(Cr), i.__h = []);
    }, W.diffed = function(t) {
      Us && Us(t);
      var i = t.__c;
      i && i.__H && i.__H.__h.length && (xr.push(i) !== 1 && Hs === W.requestAnimationFrame || ((Hs = W.requestAnimationFrame) || function(e) {
        var n, r = function() {
          clearTimeout(o), $s && cancelAnimationFrame(n), setTimeout(e);
        }, o = setTimeout(r, 100);
        $s && (n = requestAnimationFrame(r));
      })(wd)), Ae = null;
    }, W.__c = function(t, i) {
      i.some(function(e) {
        try {
          e.__h.forEach(si), e.__h = e.__h.filter(function(n) {
            return !n.__ || Cr(n);
          });
        } catch (n) {
          i.some(function(r) {
            r.__h && (r.__h = []);
          }), i = [], W.__e(n, e.__v);
        }
      }), Vs && Vs(t, i);
    }, W.unmount = function(t) {
      Ws && Ws(t);
      var i, e = t.__c;
      e && e.__H && (e.__H.__.forEach(function(n) {
        try {
          si(n);
        } catch (r) {
          i = r;
        }
      }), i && W.__e(i, e.__v));
    };
    var $s = typeof requestAnimationFrame == "function";
    function si(t) {
      var i = Ae, e = t.__c;
      typeof e == "function" && (t.__c = void 0, e()), Ae = i;
    }
    function Cr(t) {
      var i = Ae;
      t.__c = t.__(), Ae = i;
    }
    function Tr(t, i) {
      return !t || t.length !== i.length || i.some(function(e, n) {
        return e !== t[n];
      });
    }
    function Xs(t, i) {
      return typeof i == "function" ? i(t) : i;
    }
    function Ys(t, i) {
      for (var e in i)
        t[e] = i[e];
      return t;
    }
    function Ar(t, i) {
      for (var e in t)
        if (e !== "__source" && !(e in i))
          return !0;
      for (var n in i)
        if (n !== "__source" && t[n] !== i[n])
          return !0;
      return !1;
    }
    function On(t) {
      this.props = t;
    }
    function Zs(t, i) {
      function e(r) {
        var o = this.props.ref, s = o == r.ref;
        return !s && o && (o.call ? o(null) : o.current = null), i ? !i(this.props, r) || !s : Ar(this.props, r);
      }
      function n(r) {
        return this.shouldComponentUpdate = e, ye(t, r);
      }
      return n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n;
    }
    (On.prototype = new we()).isPureReactComponent = !0, On.prototype.shouldComponentUpdate = function(t, i) {
      return Ar(this.props, t) || Ar(this.state, i);
    };
    var Ks = W.__b;
    W.__b = function(t) {
      t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Ks && Ks(t);
    };
    var bd = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
    function Pr(t) {
      function i(e, n) {
        var r = Ys({}, e);
        return delete r.ref, t(r, (n = e.ref || n) && (typeof n != "object" || "current" in n) ? n : null);
      }
      return i.$$typeof = bd, i.render = i, i.prototype.isReactComponent = i.__f = !0, i.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", i;
    }
    var Js = function(t, i) {
      return t == null ? null : ut(ut(t).map(i));
    }, Qs = { map: Js, forEach: Js, count: function(t) {
      return t ? ut(t).length : 0;
    }, only: function(t) {
      var i = ut(t);
      if (i.length !== 1)
        throw "Children.only";
      return i[0];
    }, toArray: ut }, xd = W.__e;
    W.__e = function(t, i, e) {
      if (t.then) {
        for (var n, r = i; r = r.__; )
          if ((n = r.__c) && n.__c)
            return i.__e == null && (i.__e = e.__e, i.__k = e.__k), n.__c(t, i);
      }
      xd(t, i, e);
    };
    var ea = W.unmount;
    function Rn() {
      this.__u = 0, this.t = null, this.__b = null;
    }
    function ta(t) {
      var i = t.__.__c;
      return i && i.__e && i.__e(t);
    }
    function na(t) {
      var i, e, n;
      function r(o) {
        if (i || (i = t()).then(function(s) {
          e = s.default || s;
        }, function(s) {
          n = s;
        }), n)
          throw n;
        if (!e)
          throw i;
        return ye(e, o);
      }
      return r.displayName = "Lazy", r.__f = !0, r;
    }
    function Yt() {
      this.u = null, this.o = null;
    }
    W.unmount = function(t) {
      var i = t.__c;
      i && i.__R && i.__R(), i && t.__h === !0 && (t.type = null), ea && ea(t);
    }, (Rn.prototype = new we()).__c = function(t, i) {
      var e = i.__c, n = this;
      n.t == null && (n.t = []), n.t.push(e);
      var r = ta(n.__v), o = !1, s = function() {
        o || (o = !0, e.__R = null, r ? r(a) : a());
      };
      e.__R = s;
      var a = function() {
        if (!--n.__u) {
          if (n.state.__e) {
            var u = n.state.__e;
            n.__v.__k[0] = function h(d, m, y) {
              return d && (d.__v = null, d.__k = d.__k && d.__k.map(function(S) {
                return h(S, m, y);
              }), d.__c && d.__c.__P === m && (d.__e && y.insertBefore(d.__e, d.__d), d.__c.__e = !0, d.__c.__P = y)), d;
            }(u, u.__c.__P, u.__c.__O);
          }
          var c;
          for (n.setState({ __e: n.__b = null }); c = n.t.pop(); )
            c.forceUpdate();
        }
      }, l = i.__h === !0;
      n.__u++ || l || n.setState({ __e: n.__b = n.__v.__k[0] }), t.then(s, s);
    }, Rn.prototype.componentWillUnmount = function() {
      this.t = [];
    }, Rn.prototype.render = function(t, i) {
      if (this.__b) {
        if (this.__v.__k) {
          var e = document.createElement("div"), n = this.__v.__k[0].__c;
          this.__v.__k[0] = function o(s, a, l) {
            return s && (s.__c && s.__c.__H && (s.__c.__H.__.forEach(function(u) {
              typeof u.__c == "function" && u.__c();
            }), s.__c.__H = null), (s = Ys({}, s)).__c != null && (s.__c.__P === l && (s.__c.__P = a), s.__c = null), s.__k = s.__k && s.__k.map(function(u) {
              return o(u, a, l);
            })), s;
          }(this.__b, e, n.__O = n.__P);
        }
        this.__b = null;
      }
      var r = i.__e && ye(qe, null, t.fallback);
      return r && (r.__h = null), [ye(qe, null, i.__e ? null : t.children), r];
    };
    var ia = function(t, i, e) {
      if (++e[1] === e[0] && t.o.delete(i), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
        for (e = t.u; e; ) {
          for (; e.length > 3; )
            e.pop()();
          if (e[1] < e[0])
            break;
          t.u = e = e[2];
        }
    };
    function Sd(t) {
      return this.getChildContext = function() {
        return t.context;
      }, t.children;
    }
    function _d(t) {
      var i = this, e = t.i;
      i.componentWillUnmount = function() {
        An(null, i.l), i.l = null, i.i = null;
      }, i.i && i.i !== e && i.componentWillUnmount(), t.__v ? (i.l || (i.i = e, i.l = { nodeType: 1, parentNode: e, childNodes: [], appendChild: function(n) {
        this.childNodes.push(n), i.i.appendChild(n);
      }, insertBefore: function(n, r) {
        this.childNodes.push(n), i.i.appendChild(n);
      }, removeChild: function(n) {
        this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), i.i.removeChild(n);
      } }), An(ye(Sd, { context: i.context }, t.__v), i.l)) : i.l && i.componentWillUnmount();
    }
    function Dr(t, i) {
      return ye(_d, { __v: t, i });
    }
    (Yt.prototype = new we()).__e = function(t) {
      var i = this, e = ta(i.__v), n = i.o.get(t);
      return n[0]++, function(r) {
        var o = function() {
          i.props.revealOrder ? (n.push(r), ia(i, t, n)) : r();
        };
        e ? e(o) : o();
      };
    }, Yt.prototype.render = function(t) {
      this.u = null, this.o = /* @__PURE__ */ new Map();
      var i = ut(t.children);
      t.revealOrder && t.revealOrder[0] === "b" && i.reverse();
      for (var e = i.length; e--; )
        this.o.set(i[e], this.u = [1, 0, this.u]);
      return t.children;
    }, Yt.prototype.componentDidUpdate = Yt.prototype.componentDidMount = function() {
      var t = this;
      this.o.forEach(function(i, e) {
        ia(t, e, i);
      });
    };
    var ra = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Cd = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Td = typeof document < "u", Ad = function(t) {
      return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
    };
    function oa(t, i, e) {
      return i.__k == null && (i.textContent = ""), An(t, i), typeof e == "function" && e(), t ? t.__c : null;
    }
    function sa(t, i, e) {
      return Ns(t, i), typeof e == "function" && e(), t ? t.__c : null;
    }
    we.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
      Object.defineProperty(we.prototype, t, { configurable: !0, get: function() {
        return this["UNSAFE_" + t];
      }, set: function(i) {
        Object.defineProperty(this, t, { configurable: !0, writable: !0, value: i });
      } });
    });
    var aa = W.event;
    function Pd() {
    }
    function Dd() {
      return this.cancelBubble;
    }
    function Od() {
      return this.defaultPrevented;
    }
    W.event = function(t) {
      return aa && (t = aa(t)), t.persist = Pd, t.isPropagationStopped = Dd, t.isDefaultPrevented = Od, t.nativeEvent = t;
    };
    var la, ua = { configurable: !0, get: function() {
      return this.class;
    } }, ca = W.vnode;
    W.vnode = function(t) {
      var i = t.type, e = t.props, n = e;
      if (typeof i == "string") {
        var r = i.indexOf("-") === -1;
        for (var o in n = {}, e) {
          var s = e[o];
          Td && o === "children" && i === "noscript" || o === "value" && "defaultValue" in e && s == null || (o === "defaultValue" && "value" in e && e.value == null ? o = "value" : o === "download" && s === !0 ? s = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + i) && !Ad(e.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : r && Cd.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : s === null && (s = void 0), n[o] = s);
        }
        i == "select" && n.multiple && Array.isArray(n.value) && (n.value = ut(e.children).forEach(function(a) {
          a.props.selected = n.value.indexOf(a.props.value) != -1;
        })), i == "select" && n.defaultValue != null && (n.value = ut(e.children).forEach(function(a) {
          a.props.selected = n.multiple ? n.defaultValue.indexOf(a.props.value) != -1 : n.defaultValue == a.props.value;
        })), t.props = n, e.class != e.className && (ua.enumerable = "className" in e, e.className != null && (n.class = e.className), Object.defineProperty(n, "className", ua));
      }
      t.$$typeof = ra, ca && ca(t);
    };
    var ha = W.__r;
    W.__r = function(t) {
      ha && ha(t), la = t.__c;
    };
    var da = { ReactCurrentDispatcher: { current: { readContext: function(t) {
      return la.__n[t.__c].props.value;
    } } } }, Rd = "17.0.2";
    function pa(t) {
      return ye.bind(null, t);
    }
    function Or(t) {
      return !!t && t.$$typeof === ra;
    }
    function ga(t) {
      return Or(t) ? yd.apply(null, arguments) : t;
    }
    function fa(t) {
      return !!t.__k && (An(null, t), !0);
    }
    function ma(t) {
      return t && (t.base || t.nodeType === 1 && t) || null;
    }
    var va = function(t, i) {
      return t(i);
    }, ya = function(t, i) {
      return t(i);
    }, kd = qe, B = { useState: ct, useReducer: Sr, useEffect: Rt, useLayoutEffect: _r, useRef: Je, useImperativeHandle: Gs, useMemo: ht, useCallback: Qe, useContext: Dn, useDebugValue: qs, version: "17.0.2", Children: Qs, render: oa, hydrate: sa, unmountComponentAtNode: fa, createPortal: Dr, createElement: ye, createContext: Pn, createFactory: pa, cloneElement: ga, createRef: Er, Fragment: qe, isValidElement: Or, findDOMNode: ma, Component: we, PureComponent: On, memo: Zs, forwardRef: Pr, flushSync: ya, unstable_batchedUpdates: va, StrictMode: qe, Suspense: Rn, SuspenseList: Yt, lazy: na, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: da }, Rr = Object.freeze({ __proto__: null, [Symbol.toStringTag]: "Module", default: B, version: Rd, Children: Qs, render: oa, hydrate: sa, unmountComponentAtNode: fa, createPortal: Dr, createFactory: pa, cloneElement: ga, isValidElement: Or, findDOMNode: ma, PureComponent: On, memo: Zs, forwardRef: Pr, flushSync: ya, unstable_batchedUpdates: va, StrictMode: kd, Suspense: Rn, SuspenseList: Yt, lazy: na, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: da, createElement: ye, createContext: Pn, createRef: Er, Fragment: qe, Component: we, useState: ct, useReducer: Sr, useEffect: Rt, useLayoutEffect: _r, useRef: Je, useImperativeHandle: Gs, useMemo: ht, useCallback: Qe, useContext: Dn, useDebugValue: qs, useErrorBoundary: Ed }), dt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof Ts < "u" ? Ts : typeof self < "u" ? self : {};
    function Bd(t) {
      return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    }
    function kr(t) {
      if (t.__esModule)
        return t;
      var i = Object.defineProperty({}, "__esModule", { value: !0 });
      return Object.keys(t).forEach(function(e) {
        var n = Object.getOwnPropertyDescriptor(t, e);
        Object.defineProperty(i, e, n.get ? n : { enumerable: !0, get: function() {
          return t[e];
        } });
      }), i;
    }
    var Br = { exports: {} };
    function Fr() {
    }
    Fr.prototype = { on: function(t, i, e) {
      var n = this.e || (this.e = {});
      return (n[t] || (n[t] = [])).push({ fn: i, ctx: e }), this;
    }, once: function(t, i, e) {
      var n = this;
      function r() {
        n.off(t, r), i.apply(e, arguments);
      }
      return r._ = i, this.on(t, r, e);
    }, emit: function(t) {
      var i = [].slice.call(arguments, 1), e = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, r = e.length;
      for (n; n < r; n++)
        e[n].fn.apply(e[n].ctx, i);
      return this;
    }, off: function(t, i) {
      var e = this.e || (this.e = {}), n = e[t], r = [];
      if (n && i)
        for (var o = 0, s = n.length; o < s; o++)
          n[o].fn !== i && n[o].fn._ !== i && r.push(n[o]);
      return r.length ? e[t] = r : delete e[t], this;
    } }, Br.exports = Fr, Br.exports.TinyEmitter = Fr;
    var ai = Br.exports, li = { exports: {} }, Ea = {}, Zt = kr(Rr), kn = { exports: {} }, Fd = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Md = Fd, Id = Md;
    function wa() {
    }
    function ba() {
    }
    ba.resetWarningCache = wa;
    var Ld = function() {
      function t(n, r, o, s, a, l) {
        if (l !== Id) {
          var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw u.name = "Invariant Violation", u;
        }
      }
      t.isRequired = t;
      function i() {
        return t;
      }
      var e = { array: t, bigint: t, bool: t, func: t, number: t, object: t, string: t, symbol: t, any: t, arrayOf: i, element: t, elementType: t, instanceOf: i, node: t, objectOf: i, oneOf: i, oneOfType: i, shape: i, exact: i, checkPropTypes: ba, resetWarningCache: wa };
      return e.PropTypes = e, e;
    };
    kn.exports = Ld();
    function xa(t) {
      var i, e, n = "";
      if (typeof t == "string" || typeof t == "number")
        n += t;
      else if (typeof t == "object")
        if (Array.isArray(t))
          for (i = 0; i < t.length; i++)
            t[i] && (e = xa(t[i])) && (n && (n += " "), n += e);
        else
          for (i in t)
            t[i] && (n && (n += " "), n += i);
      return n;
    }
    function Sa() {
      for (var t, i, e = 0, n = ""; e < arguments.length; )
        (t = arguments[e++]) && (i = xa(t)) && (n && (n += " "), n += i);
      return n;
    }
    var Nd = Object.freeze({ __proto__: null, [Symbol.toStringTag]: "Module", clsx: Sa, default: Sa }), Hd = kr(Nd), me = {}, et = {};
    Object.defineProperty(et, "__esModule", { value: !0 }), et.dontSetMe = Wd, et.findInArray = zd, et.int = Vd, et.isFunction = jd, et.isNum = Ud;
    function zd(t, i) {
      for (let e = 0, n = t.length; e < n; e++)
        if (i.apply(i, [t[e], e, t]))
          return t[e];
    }
    function jd(t) {
      return typeof t == "function" || Object.prototype.toString.call(t) === "[object Function]";
    }
    function Ud(t) {
      return typeof t == "number" && !isNaN(t);
    }
    function Vd(t) {
      return parseInt(t, 10);
    }
    function Wd(t, i, e) {
      if (t[i])
        return new Error("Invalid prop ".concat(i, " passed to ").concat(e, " - do not set this, set it on the child."));
    }
    var kt = {};
    Object.defineProperty(kt, "__esModule", { value: !0 }), kt.browserPrefixToKey = Ca, kt.browserPrefixToStyle = Gd, kt.default = void 0, kt.getPrefix = _a;
    const Mr = ["Moz", "Webkit", "O", "ms"];
    function _a() {
      var t;
      let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
      if (typeof window > "u")
        return "";
      const e = (t = window.document) === null || t === void 0 || (t = t.documentElement) === null || t === void 0 ? void 0 : t.style;
      if (!e || i in e)
        return "";
      for (let n = 0; n < Mr.length; n++)
        if (Ca(i, Mr[n]) in e)
          return Mr[n];
      return "";
    }
    function Ca(t, i) {
      return i ? "".concat(i).concat(qd(t)) : t;
    }
    function Gd(t, i) {
      return i ? "-".concat(i.toLowerCase(), "-").concat(t) : t;
    }
    function qd(t) {
      let i = "", e = !0;
      for (let n = 0; n < t.length; n++)
        e ? (i += t[n].toUpperCase(), e = !1) : t[n] === "-" ? e = !0 : i += t[n];
      return i;
    }
    kt.default = _a(), Object.defineProperty(me, "__esModule", { value: !0 }), me.addClassName = Da, me.addEvent = Yd, me.addUserSelectStyles = sp, me.createCSSTransform = np, me.createSVGTransform = ip, me.getTouch = rp, me.getTouchIdentifier = op, me.getTranslation = Ir, me.innerHeight = Qd, me.innerWidth = ep, me.matchesSelector = Pa, me.matchesSelectorAndParentsTo = Xd, me.offsetXYFromParent = tp, me.outerHeight = Kd, me.outerWidth = Jd, me.removeClassName = Oa, me.removeEvent = Zd, me.removeUserSelectStyles = ap;
    var He = et, Ta = $d(kt);
    function Aa(t) {
      if (typeof WeakMap != "function")
        return null;
      var i = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap();
      return (Aa = function(n) {
        return n ? e : i;
      })(t);
    }
    function $d(t, i) {
      if (!i && t && t.__esModule)
        return t;
      if (t === null || typeof t != "object" && typeof t != "function")
        return { default: t };
      var e = Aa(i);
      if (e && e.has(t))
        return e.get(t);
      var n = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in t)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(t, o)) {
          var s = r ? Object.getOwnPropertyDescriptor(t, o) : null;
          s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = t[o];
        }
      return n.default = t, e && e.set(t, n), n;
    }
    let ui = "";
    function Pa(t, i) {
      return ui || (ui = (0, He.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(e) {
        return (0, He.isFunction)(t[e]);
      })), (0, He.isFunction)(t[ui]) ? t[ui](i) : !1;
    }
    function Xd(t, i, e) {
      let n = t;
      do {
        if (Pa(n, i))
          return !0;
        if (n === e)
          return !1;
        n = n.parentNode;
      } while (n);
      return !1;
    }
    function Yd(t, i, e, n) {
      if (!t)
        return;
      const r = { capture: !0, ...n };
      t.addEventListener ? t.addEventListener(i, e, r) : t.attachEvent ? t.attachEvent("on" + i, e) : t["on" + i] = e;
    }
    function Zd(t, i, e, n) {
      if (!t)
        return;
      const r = { capture: !0, ...n };
      t.removeEventListener ? t.removeEventListener(i, e, r) : t.detachEvent ? t.detachEvent("on" + i, e) : t["on" + i] = null;
    }
    function Kd(t) {
      let i = t.clientHeight;
      const e = t.ownerDocument.defaultView.getComputedStyle(t);
      return i += (0, He.int)(e.borderTopWidth), i += (0, He.int)(e.borderBottomWidth), i;
    }
    function Jd(t) {
      let i = t.clientWidth;
      const e = t.ownerDocument.defaultView.getComputedStyle(t);
      return i += (0, He.int)(e.borderLeftWidth), i += (0, He.int)(e.borderRightWidth), i;
    }
    function Qd(t) {
      let i = t.clientHeight;
      const e = t.ownerDocument.defaultView.getComputedStyle(t);
      return i -= (0, He.int)(e.paddingTop), i -= (0, He.int)(e.paddingBottom), i;
    }
    function ep(t) {
      let i = t.clientWidth;
      const e = t.ownerDocument.defaultView.getComputedStyle(t);
      return i -= (0, He.int)(e.paddingLeft), i -= (0, He.int)(e.paddingRight), i;
    }
    function tp(t, i, e) {
      const n = i === i.ownerDocument.body ? { left: 0, top: 0 } : i.getBoundingClientRect(), r = (t.clientX + i.scrollLeft - n.left) / e, o = (t.clientY + i.scrollTop - n.top) / e;
      return { x: r, y: o };
    }
    function np(t, i) {
      const e = Ir(t, i, "px");
      return { [(0, Ta.browserPrefixToKey)("transform", Ta.default)]: e };
    }
    function ip(t, i) {
      return Ir(t, i, "");
    }
    function Ir(t, i, e) {
      let { x: n, y: r } = t, o = "translate(".concat(n).concat(e, ",").concat(r).concat(e, ")");
      if (i) {
        const s = "".concat(typeof i.x == "string" ? i.x : i.x + e), a = "".concat(typeof i.y == "string" ? i.y : i.y + e);
        o = "translate(".concat(s, ", ").concat(a, ")") + o;
      }
      return o;
    }
    function rp(t, i) {
      return t.targetTouches && (0, He.findInArray)(t.targetTouches, (e) => i === e.identifier) || t.changedTouches && (0, He.findInArray)(t.changedTouches, (e) => i === e.identifier);
    }
    function op(t) {
      if (t.targetTouches && t.targetTouches[0])
        return t.targetTouches[0].identifier;
      if (t.changedTouches && t.changedTouches[0])
        return t.changedTouches[0].identifier;
    }
    function sp(t) {
      if (!t)
        return;
      let i = t.getElementById("react-draggable-style-el");
      i || (i = t.createElement("style"), i.type = "text/css", i.id = "react-draggable-style-el", i.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, i.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, t.getElementsByTagName("head")[0].appendChild(i)), t.body && Da(t.body, "react-draggable-transparent-selection");
    }
    function ap(t) {
      if (t)
        try {
          if (t.body && Oa(t.body, "react-draggable-transparent-selection"), t.selection)
            t.selection.empty();
          else {
            const i = (t.defaultView || window).getSelection();
            i && i.type !== "Caret" && i.removeAllRanges();
          }
        } catch {
        }
    }
    function Da(t, i) {
      t.classList ? t.classList.add(i) : t.className.match(new RegExp("(?:^|\\s)".concat(i, "(?!\\S)"))) || (t.className += " ".concat(i));
    }
    function Oa(t, i) {
      t.classList ? t.classList.remove(i) : t.className = t.className.replace(new RegExp("(?:^|\\s)".concat(i, "(?!\\S)"), "g"), "");
    }
    var tt = {};
    Object.defineProperty(tt, "__esModule", { value: !0 }), tt.canDragX = cp, tt.canDragY = hp, tt.createCoreData = pp, tt.createDraggableData = gp, tt.getBoundPosition = lp, tt.getControlPosition = dp, tt.snapToGrid = up;
    var ze = et, Kt = me;
    function lp(t, i, e) {
      if (!t.props.bounds)
        return [i, e];
      let { bounds: n } = t.props;
      n = typeof n == "string" ? n : fp(n);
      const r = Lr(t);
      if (typeof n == "string") {
        const { ownerDocument: o } = r, s = o.defaultView;
        let a;
        if (n === "parent" ? a = r.parentNode : a = o.querySelector(n), !(a instanceof s.HTMLElement))
          throw new Error('Bounds selector "' + n + '" could not find an element.');
        const l = a, u = s.getComputedStyle(r), c = s.getComputedStyle(l);
        n = { left: -r.offsetLeft + (0, ze.int)(c.paddingLeft) + (0, ze.int)(u.marginLeft), top: -r.offsetTop + (0, ze.int)(c.paddingTop) + (0, ze.int)(u.marginTop), right: (0, Kt.innerWidth)(l) - (0, Kt.outerWidth)(r) - r.offsetLeft + (0, ze.int)(c.paddingRight) - (0, ze.int)(u.marginRight), bottom: (0, Kt.innerHeight)(l) - (0, Kt.outerHeight)(r) - r.offsetTop + (0, ze.int)(c.paddingBottom) - (0, ze.int)(u.marginBottom) };
      }
      return (0, ze.isNum)(n.right) && (i = Math.min(i, n.right)), (0, ze.isNum)(n.bottom) && (e = Math.min(e, n.bottom)), (0, ze.isNum)(n.left) && (i = Math.max(i, n.left)), (0, ze.isNum)(n.top) && (e = Math.max(e, n.top)), [i, e];
    }
    function up(t, i, e) {
      const n = Math.round(i / t[0]) * t[0], r = Math.round(e / t[1]) * t[1];
      return [n, r];
    }
    function cp(t) {
      return t.props.axis === "both" || t.props.axis === "x";
    }
    function hp(t) {
      return t.props.axis === "both" || t.props.axis === "y";
    }
    function dp(t, i, e) {
      const n = typeof i == "number" ? (0, Kt.getTouch)(t, i) : null;
      if (typeof i == "number" && !n)
        return null;
      const r = Lr(e), o = e.props.offsetParent || r.offsetParent || r.ownerDocument.body;
      return (0, Kt.offsetXYFromParent)(n || t, o, e.props.scale);
    }
    function pp(t, i, e) {
      const n = !(0, ze.isNum)(t.lastX), r = Lr(t);
      return n ? { node: r, deltaX: 0, deltaY: 0, lastX: i, lastY: e, x: i, y: e } : { node: r, deltaX: i - t.lastX, deltaY: e - t.lastY, lastX: t.lastX, lastY: t.lastY, x: i, y: e };
    }
    function gp(t, i) {
      const e = t.props.scale;
      return { node: i.node, x: t.state.x + i.deltaX / e, y: t.state.y + i.deltaY / e, deltaX: i.deltaX / e, deltaY: i.deltaY / e, lastX: t.state.x, lastY: t.state.y };
    }
    function fp(t) {
      return { left: t.left, top: t.top, right: t.right, bottom: t.bottom };
    }
    function Lr(t) {
      const i = t.findDOMNode();
      if (!i)
        throw new Error("<DraggableCore>: Unmounted during event!");
      return i;
    }
    var ci = {}, hi = {};
    Object.defineProperty(hi, "__esModule", { value: !0 }), hi.default = mp;
    function mp() {
    }
    Object.defineProperty(ci, "__esModule", { value: !0 }), ci.default = void 0;
    var Nr = yp(Zt), Le = zr(kn.exports), vp = zr(Zt), ke = me, wt = tt, Hr = et, Bn = zr(hi);
    function zr(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function Ra(t) {
      if (typeof WeakMap != "function")
        return null;
      var i = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap();
      return (Ra = function(n) {
        return n ? e : i;
      })(t);
    }
    function yp(t, i) {
      if (!i && t && t.__esModule)
        return t;
      if (t === null || typeof t != "object" && typeof t != "function")
        return { default: t };
      var e = Ra(i);
      if (e && e.has(t))
        return e.get(t);
      var n = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in t)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(t, o)) {
          var s = r ? Object.getOwnPropertyDescriptor(t, o) : null;
          s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = t[o];
        }
      return n.default = t, e && e.set(t, n), n;
    }
    function Ie(t, i, e) {
      return i = Ep(i), i in t ? Object.defineProperty(t, i, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : t[i] = e, t;
    }
    function Ep(t) {
      var i = wp(t, "string");
      return typeof i == "symbol" ? i : String(i);
    }
    function wp(t, i) {
      if (typeof t != "object" || t === null)
        return t;
      var e = t[Symbol.toPrimitive];
      if (e !== void 0) {
        var n = e.call(t, i || "default");
        if (typeof n != "object")
          return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(t);
    }
    const Xe = { touch: { start: "touchstart", move: "touchmove", stop: "touchend" }, mouse: { start: "mousedown", move: "mousemove", stop: "mouseup" } };
    let bt = Xe.mouse;
    class di extends Nr.Component {
      constructor() {
        super(...arguments), Ie(this, "dragging", !1), Ie(this, "lastX", NaN), Ie(this, "lastY", NaN), Ie(this, "touchIdentifier", null), Ie(this, "mounted", !1), Ie(this, "handleDragStart", (i) => {
          if (this.props.onMouseDown(i), !this.props.allowAnyClick && typeof i.button == "number" && i.button !== 0)
            return !1;
          const e = this.findDOMNode();
          if (!e || !e.ownerDocument || !e.ownerDocument.body)
            throw new Error("<DraggableCore> not mounted on DragStart!");
          const { ownerDocument: n } = e;
          if (this.props.disabled || !(i.target instanceof n.defaultView.Node) || this.props.handle && !(0, ke.matchesSelectorAndParentsTo)(i.target, this.props.handle, e) || this.props.cancel && (0, ke.matchesSelectorAndParentsTo)(i.target, this.props.cancel, e))
            return;
          i.type === "touchstart" && i.preventDefault();
          const r = (0, ke.getTouchIdentifier)(i);
          this.touchIdentifier = r;
          const o = (0, wt.getControlPosition)(i, r, this);
          if (o == null)
            return;
          const { x: s, y: a } = o, l = (0, wt.createCoreData)(this, s, a);
          (0, Bn.default)("DraggableCore: handleDragStart: %j", l), (0, Bn.default)("calling", this.props.onStart), !(this.props.onStart(i, l) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, ke.addUserSelectStyles)(n), this.dragging = !0, this.lastX = s, this.lastY = a, (0, ke.addEvent)(n, bt.move, this.handleDrag), (0, ke.addEvent)(n, bt.stop, this.handleDragStop));
        }), Ie(this, "handleDrag", (i) => {
          const e = (0, wt.getControlPosition)(i, this.touchIdentifier, this);
          if (e == null)
            return;
          let { x: n, y: r } = e;
          if (Array.isArray(this.props.grid)) {
            let s = n - this.lastX, a = r - this.lastY;
            if ([s, a] = (0, wt.snapToGrid)(this.props.grid, s, a), !s && !a)
              return;
            n = this.lastX + s, r = this.lastY + a;
          }
          const o = (0, wt.createCoreData)(this, n, r);
          if ((0, Bn.default)("DraggableCore: handleDrag: %j", o), this.props.onDrag(i, o) === !1 || this.mounted === !1) {
            try {
              this.handleDragStop(new MouseEvent("mouseup"));
            } catch {
              const s = document.createEvent("MouseEvents");
              s.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(s);
            }
            return;
          }
          this.lastX = n, this.lastY = r;
        }), Ie(this, "handleDragStop", (i) => {
          if (!this.dragging)
            return;
          const e = (0, wt.getControlPosition)(i, this.touchIdentifier, this);
          if (e == null)
            return;
          let { x: n, y: r } = e;
          if (Array.isArray(this.props.grid)) {
            let a = n - this.lastX || 0, l = r - this.lastY || 0;
            [a, l] = (0, wt.snapToGrid)(this.props.grid, a, l), n = this.lastX + a, r = this.lastY + l;
          }
          const o = (0, wt.createCoreData)(this, n, r);
          if (this.props.onStop(i, o) === !1 || this.mounted === !1)
            return !1;
          const s = this.findDOMNode();
          s && this.props.enableUserSelectHack && (0, ke.removeUserSelectStyles)(s.ownerDocument), (0, Bn.default)("DraggableCore: handleDragStop: %j", o), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, s && ((0, Bn.default)("DraggableCore: Removing handlers"), (0, ke.removeEvent)(s.ownerDocument, bt.move, this.handleDrag), (0, ke.removeEvent)(s.ownerDocument, bt.stop, this.handleDragStop));
        }), Ie(this, "onMouseDown", (i) => (bt = Xe.mouse, this.handleDragStart(i))), Ie(this, "onMouseUp", (i) => (bt = Xe.mouse, this.handleDragStop(i))), Ie(this, "onTouchStart", (i) => (bt = Xe.touch, this.handleDragStart(i))), Ie(this, "onTouchEnd", (i) => (bt = Xe.touch, this.handleDragStop(i)));
      }
      componentDidMount() {
        this.mounted = !0;
        const i = this.findDOMNode();
        i && (0, ke.addEvent)(i, Xe.touch.start, this.onTouchStart, { passive: !1 });
      }
      componentWillUnmount() {
        this.mounted = !1;
        const i = this.findDOMNode();
        if (i) {
          const { ownerDocument: e } = i;
          (0, ke.removeEvent)(e, Xe.mouse.move, this.handleDrag), (0, ke.removeEvent)(e, Xe.touch.move, this.handleDrag), (0, ke.removeEvent)(e, Xe.mouse.stop, this.handleDragStop), (0, ke.removeEvent)(e, Xe.touch.stop, this.handleDragStop), (0, ke.removeEvent)(i, Xe.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && (0, ke.removeUserSelectStyles)(e);
        }
      }
      findDOMNode() {
        var i, e;
        return (i = this.props) !== null && i !== void 0 && i.nodeRef ? (e = this.props) === null || e === void 0 || (e = e.nodeRef) === null || e === void 0 ? void 0 : e.current : vp.default.findDOMNode(this);
      }
      render() {
        return Nr.cloneElement(Nr.Children.only(this.props.children), { onMouseDown: this.onMouseDown, onMouseUp: this.onMouseUp, onTouchEnd: this.onTouchEnd });
      }
    }
    ci.default = di, Ie(di, "displayName", "DraggableCore"), Ie(di, "propTypes", { allowAnyClick: Le.default.bool, children: Le.default.node.isRequired, disabled: Le.default.bool, enableUserSelectHack: Le.default.bool, offsetParent: function(t, i) {
      if (t[i] && t[i].nodeType !== 1)
        throw new Error("Draggable's offsetParent must be a DOM Node.");
    }, grid: Le.default.arrayOf(Le.default.number), handle: Le.default.string, cancel: Le.default.string, nodeRef: Le.default.object, onStart: Le.default.func, onDrag: Le.default.func, onStop: Le.default.func, onMouseDown: Le.default.func, scale: Le.default.number, className: Hr.dontSetMe, style: Hr.dontSetMe, transform: Hr.dontSetMe }), Ie(di, "defaultProps", { allowAnyClick: !1, disabled: !1, enableUserSelectHack: !0, onStart: function() {
    }, onDrag: function() {
    }, onStop: function() {
    }, onMouseDown: function() {
    }, scale: 1 }), function(t) {
      Object.defineProperty(t, "__esModule", { value: !0 }), Object.defineProperty(t, "DraggableCore", { enumerable: !0, get: function() {
        return l.default;
      } }), t.default = void 0;
      var i = d(Zt), e = c(kn.exports), n = c(Zt), r = c(Hd), o = me, s = tt, a = et, l = c(ci), u = c(hi);
      function c(p) {
        return p && p.__esModule ? p : { default: p };
      }
      function h(p) {
        if (typeof WeakMap != "function")
          return null;
        var E = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap();
        return (h = function(C) {
          return C ? T : E;
        })(p);
      }
      function d(p, E) {
        if (!E && p && p.__esModule)
          return p;
        if (p === null || typeof p != "object" && typeof p != "function")
          return { default: p };
        var T = h(E);
        if (T && T.has(p))
          return T.get(p);
        var C = {}, O = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var D in p)
          if (D !== "default" && Object.prototype.hasOwnProperty.call(p, D)) {
            var F = O ? Object.getOwnPropertyDescriptor(p, D) : null;
            F && (F.get || F.set) ? Object.defineProperty(C, D, F) : C[D] = p[D];
          }
        return C.default = p, T && T.set(p, C), C;
      }
      function m() {
        return m = Object.assign ? Object.assign.bind() : function(p) {
          for (var E = 1; E < arguments.length; E++) {
            var T = arguments[E];
            for (var C in T)
              Object.prototype.hasOwnProperty.call(T, C) && (p[C] = T[C]);
          }
          return p;
        }, m.apply(this, arguments);
      }
      function y(p, E, T) {
        return E = S(E), E in p ? Object.defineProperty(p, E, { value: T, enumerable: !0, configurable: !0, writable: !0 }) : p[E] = T, p;
      }
      function S(p) {
        var E = b(p, "string");
        return typeof E == "symbol" ? E : String(E);
      }
      function b(p, E) {
        if (typeof p != "object" || p === null)
          return p;
        var T = p[Symbol.toPrimitive];
        if (T !== void 0) {
          var C = T.call(p, E || "default");
          if (typeof C != "object")
            return C;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (E === "string" ? String : Number)(p);
      }
      class A extends i.Component {
        static getDerivedStateFromProps(E, T) {
          let { position: C } = E, { prevPropsPosition: O } = T;
          return C && (!O || C.x !== O.x || C.y !== O.y) ? ((0, u.default)("Draggable: getDerivedStateFromProps %j", { position: C, prevPropsPosition: O }), { x: C.x, y: C.y, prevPropsPosition: { ...C } }) : null;
        }
        constructor(E) {
          super(E), y(this, "onDragStart", (T, C) => {
            if ((0, u.default)("Draggable: onDragStart: %j", C), this.props.onStart(T, (0, s.createDraggableData)(this, C)) === !1)
              return !1;
            this.setState({ dragging: !0, dragged: !0 });
          }), y(this, "onDrag", (T, C) => {
            if (!this.state.dragging)
              return !1;
            (0, u.default)("Draggable: onDrag: %j", C);
            const O = (0, s.createDraggableData)(this, C), D = { x: O.x, y: O.y, slackX: 0, slackY: 0 };
            if (this.props.bounds) {
              const { x: F, y: I } = D;
              D.x += this.state.slackX, D.y += this.state.slackY;
              const [H, j] = (0, s.getBoundPosition)(this, D.x, D.y);
              D.x = H, D.y = j, D.slackX = this.state.slackX + (F - D.x), D.slackY = this.state.slackY + (I - D.y), O.x = D.x, O.y = D.y, O.deltaX = D.x - this.state.x, O.deltaY = D.y - this.state.y;
            }
            if (this.props.onDrag(T, O) === !1)
              return !1;
            this.setState(D);
          }), y(this, "onDragStop", (T, C) => {
            if (!this.state.dragging || this.props.onStop(T, (0, s.createDraggableData)(this, C)) === !1)
              return !1;
            (0, u.default)("Draggable: onDragStop: %j", C);
            const O = { dragging: !1, slackX: 0, slackY: 0 };
            if (this.props.position) {
              const { x: D, y: F } = this.props.position;
              O.x = D, O.y = F;
            }
            this.setState(O);
          }), this.state = { dragging: !1, dragged: !1, x: E.position ? E.position.x : E.defaultPosition.x, y: E.position ? E.position.y : E.defaultPosition.y, prevPropsPosition: { ...E.position }, slackX: 0, slackY: 0, isElementSVG: !1 }, E.position && !(E.onDrag || E.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
        }
        componentDidMount() {
          typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({ isElementSVG: !0 });
        }
        componentWillUnmount() {
          this.setState({ dragging: !1 });
        }
        findDOMNode() {
          var E, T;
          return (E = (T = this.props) === null || T === void 0 || (T = T.nodeRef) === null || T === void 0 ? void 0 : T.current) !== null && E !== void 0 ? E : n.default.findDOMNode(this);
        }
        render() {
          const { axis: E, bounds: T, children: C, defaultPosition: O, defaultClassName: D, defaultClassNameDragging: F, defaultClassNameDragged: I, position: H, positionOffset: j, scale: z, ...q } = this.props;
          let $ = {}, Q = null;
          const J = !H || this.state.dragging, te = H || O, oe = { x: (0, s.canDragX)(this) && J ? this.state.x : te.x, y: (0, s.canDragY)(this) && J ? this.state.y : te.y };
          this.state.isElementSVG ? Q = (0, o.createSVGTransform)(oe, j) : $ = (0, o.createCSSTransform)(oe, j);
          const pe = (0, r.default)(C.props.className || "", D, { [F]: this.state.dragging, [I]: this.state.dragged });
          return i.createElement(l.default, m({}, q, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }), i.cloneElement(i.Children.only(C), { className: pe, style: { ...C.props.style, ...$ }, transform: Q }));
        }
      }
      t.default = A, y(A, "displayName", "Draggable"), y(A, "propTypes", { ...l.default.propTypes, axis: e.default.oneOf(["both", "x", "y", "none"]), bounds: e.default.oneOfType([e.default.shape({ left: e.default.number, right: e.default.number, top: e.default.number, bottom: e.default.number }), e.default.string, e.default.oneOf([!1])]), defaultClassName: e.default.string, defaultClassNameDragging: e.default.string, defaultClassNameDragged: e.default.string, defaultPosition: e.default.shape({ x: e.default.number, y: e.default.number }), positionOffset: e.default.shape({ x: e.default.oneOfType([e.default.number, e.default.string]), y: e.default.oneOfType([e.default.number, e.default.string]) }), position: e.default.shape({ x: e.default.number, y: e.default.number }), className: a.dontSetMe, style: a.dontSetMe, transform: a.dontSetMe }), y(A, "defaultProps", { ...l.default.defaultProps, axis: "both", bounds: !1, defaultClassName: "react-draggable", defaultClassNameDragging: "react-draggable-dragging", defaultClassNameDragged: "react-draggable-dragged", defaultPosition: { x: 0, y: 0 }, scale: 1 });
    }(Ea);
    const { default: ka, DraggableCore: bp } = Ea;
    li.exports = ka, li.exports.default = ka, li.exports.DraggableCore = bp;
    var xp = li.exports, Sp = ["second", "minute", "hour", "day", "week", "month", "year"];
    function _p(t, i) {
      if (i === 0)
        return ["just now", "right now"];
      var e = Sp[Math.floor(i / 2)];
      return t > 1 && (e += "s"), [t + " " + e + " ago", "in " + t + " " + e];
    }
    var Cp = ["秒", "分钟", "小时", "天", "周", "个月", "年"];
    function Tp(t, i) {
      if (i === 0)
        return ["刚刚", "片刻后"];
      var e = Cp[~~(i / 2)];
      return [t + " " + e + "前", t + " " + e + "后"];
    }
    var jr = {}, fe = function(t, i) {
      jr[t] = i;
    }, Ba = function(t) {
      return jr[t] || jr.en_US;
    }, Bt = [60, 60, 24, 7, 365 / 7 / 12, 12];
    function Fa(t) {
      return t instanceof Date ? t : !isNaN(t) || /^\d+$/.test(t) ? new Date(parseInt(t)) : (t = (t || "").trim().replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([+-]\d\d):?(\d\d)/, " $1$2"), new Date(t));
    }
    function Ma(t, i) {
      var e = t < 0 ? 1 : 0;
      t = Math.abs(t);
      for (var n = t, r = 0; t >= Bt[r] && r < Bt.length; r++)
        t /= Bt[r];
      return t = Math.floor(t), r *= 2, t > (r === 0 ? 9 : 1) && (r += 1), i(t, r, n)[e].replace("%s", t.toString());
    }
    function Ia(t, i) {
      var e = i ? Fa(i) : /* @__PURE__ */ new Date();
      return (+e - +Fa(t)) / 1e3;
    }
    function Ap(t) {
      for (var i = 1, e = 0, n = Math.abs(t); t >= Bt[e] && e < Bt.length; e++)
        t /= Bt[e], i *= Bt[e];
      return n = n % i, n = n ? i - n : i, Math.ceil(n);
    }
    var Pp = function(t, i, e) {
      var n = Ia(t, e && e.relativeDate);
      return Ma(n, Ba(i));
    }, La = "timeago-id";
    function Dp(t) {
      return t.getAttribute("datetime");
    }
    function Op(t, i) {
      t.setAttribute(La, i);
    }
    function Na(t) {
      return parseInt(t.getAttribute(La));
    }
    var Ur = {}, Vr = function(t) {
      clearTimeout(t), delete Ur[t];
    };
    function Ha(t, i, e, n) {
      Vr(Na(t));
      var r = n.relativeDate, o = n.minInterval, s = Ia(i, r);
      t.innerText = Ma(s, e);
      var a = setTimeout(function() {
        Ha(t, i, e, n);
      }, Math.min(Math.max(Ap(s), o || 1) * 1e3, 2147483647));
      Ur[a] = 0, Op(t, a);
    }
    function za(t) {
      t ? Vr(Na(t)) : Object.keys(Ur).forEach(Vr);
    }
    function Rp(t, i, e) {
      var n = t.length ? t : [t];
      return n.forEach(function(r) {
        Ha(r, Dp(r), Ba(i), e || {});
      }), n;
    }
    fe("en_US", _p), fe("zh_CN", Tp);
    var kp = globalThis && globalThis.__extends || /* @__PURE__ */ function() {
      var t = function(i, e) {
        return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
          n.__proto__ = r;
        } || function(n, r) {
          for (var o in r)
            r.hasOwnProperty(o) && (n[o] = r[o]);
        }, t(i, e);
      };
      return function(i, e) {
        t(i, e);
        function n() {
          this.constructor = i;
        }
        i.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
      };
    }(), Wr = globalThis && globalThis.__assign || function() {
      return Wr = Object.assign || function(t) {
        for (var i, e = 1, n = arguments.length; e < n; e++) {
          i = arguments[e];
          for (var r in i)
            Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
        }
        return t;
      }, Wr.apply(this, arguments);
    }, Bp = globalThis && globalThis.__rest || function(t, i) {
      var e = {};
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && i.indexOf(n) < 0 && (e[n] = t[n]);
      if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++)
          i.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[r]) && (e[n[r]] = t[n[r]]);
      return e;
    }, Fp = function(t) {
      return "" + (t instanceof Date ? t.getTime() : t);
    }, Mp = function(t) {
      kp(i, t);
      function i() {
        var e = t !== null && t.apply(this, arguments) || this;
        return e.dom = null, e;
      }
      return i.prototype.componentDidMount = function() {
        this.renderTimeAgo();
      }, i.prototype.componentDidUpdate = function() {
        this.renderTimeAgo();
      }, i.prototype.renderTimeAgo = function() {
        var e = this.props, n = e.live, r = e.datetime, o = e.locale, s = e.opts;
        za(this.dom), n !== !1 && (this.dom.setAttribute("datetime", Fp(r)), Rp(this.dom, o, s));
      }, i.prototype.componentWillUnmount = function() {
        za(this.dom);
      }, i.prototype.render = function() {
        var e = this, n = this.props, r = n.datetime;
        n.live;
        var o = n.locale, s = n.opts, a = Bp(n, ["datetime", "live", "locale", "opts"]);
        return ye("time", Wr({ ref: function(l) {
          e.dom = l;
        } }, a), Pp(r, o, s));
      }, i.defaultProps = { live: !0, className: "" }, i;
    }(On);
    function Ip(t, i) {
      const e = (n) => {
        t.current && !t.current.contains(event.target) && i();
      };
      Rt(() => (document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)));
    }
    var ja = Object.prototype.toString, Ua = function(t) {
      var i = ja.call(t), e = i === "[object Arguments]";
      return e || (e = i !== "[object Array]" && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && ja.call(t.callee) === "[object Function]"), e;
    }, Va;
    if (!Object.keys) {
      var pi = Object.prototype.hasOwnProperty, Wa = Object.prototype.toString, Lp = Ua, Ga = Object.prototype.propertyIsEnumerable, Np = !Ga.call({ toString: null }, "toString"), Hp = Ga.call(function() {
      }, "prototype"), gi = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], Gr = function(t) {
        var i = t.constructor;
        return i && i.prototype === t;
      }, zp = { $applicationCache: !0, $console: !0, $external: !0, $frame: !0, $frameElement: !0, $frames: !0, $innerHeight: !0, $innerWidth: !0, $onmozfullscreenchange: !0, $onmozfullscreenerror: !0, $outerHeight: !0, $outerWidth: !0, $pageXOffset: !0, $pageYOffset: !0, $parent: !0, $scrollLeft: !0, $scrollTop: !0, $scrollX: !0, $scrollY: !0, $self: !0, $webkitIndexedDB: !0, $webkitStorageInfo: !0, $window: !0 }, jp = function() {
        if (typeof window > "u")
          return !1;
        for (var t in window)
          try {
            if (!zp["$" + t] && pi.call(window, t) && window[t] !== null && typeof window[t] == "object")
              try {
                Gr(window[t]);
              } catch {
                return !0;
              }
          } catch {
            return !0;
          }
        return !1;
      }(), Up = function(t) {
        if (typeof window > "u" || !jp)
          return Gr(t);
        try {
          return Gr(t);
        } catch {
          return !1;
        }
      };
      Va = function(t) {
        var i = t !== null && typeof t == "object", e = Wa.call(t) === "[object Function]", n = Lp(t), r = i && Wa.call(t) === "[object String]", o = [];
        if (!i && !e && !n)
          throw new TypeError("Object.keys called on a non-object");
        var s = Hp && e;
        if (r && t.length > 0 && !pi.call(t, 0))
          for (var a = 0; a < t.length; ++a)
            o.push(String(a));
        if (n && t.length > 0)
          for (var l = 0; l < t.length; ++l)
            o.push(String(l));
        else
          for (var u in t)
            !(s && u === "prototype") && pi.call(t, u) && o.push(String(u));
        if (Np)
          for (var c = Up(t), h = 0; h < gi.length; ++h)
            !(c && gi[h] === "constructor") && pi.call(t, gi[h]) && o.push(gi[h]);
        return o;
      };
    }
    var Vp = Va, Wp = Array.prototype.slice, Gp = Ua, qa = Object.keys, fi = qa ? function(t) {
      return qa(t);
    } : Vp, $a = Object.keys;
    fi.shim = function() {
      if (Object.keys) {
        var t = function() {
          var i = Object.keys(arguments);
          return i && i.length === arguments.length;
        }(1, 2);
        t || (Object.keys = function(i) {
          return Gp(i) ? $a(Wp.call(i)) : $a(i);
        });
      } else
        Object.keys = fi;
      return Object.keys || fi;
    };
    var qp = fi, Xa = function() {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return !1;
      if (typeof Symbol.iterator == "symbol")
        return !0;
      var t = {}, i = Symbol("test"), e = Object(i);
      if (typeof i == "string" || Object.prototype.toString.call(i) !== "[object Symbol]" || Object.prototype.toString.call(e) !== "[object Symbol]")
        return !1;
      var n = 42;
      t[i] = n;
      for (i in t)
        return !1;
      if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
        return !1;
      var r = Object.getOwnPropertySymbols(t);
      if (r.length !== 1 || r[0] !== i || !Object.prototype.propertyIsEnumerable.call(t, i))
        return !1;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var o = Object.getOwnPropertyDescriptor(t, i);
        if (o.value !== n || o.enumerable !== !0)
          return !1;
      }
      return !0;
    }, Ya = typeof Symbol < "u" && Symbol, $p = Xa, Za = function() {
      return typeof Ya != "function" || typeof Symbol != "function" || typeof Ya("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : $p();
    }, Ka = { foo: {} }, Xp = Object, Yp = function() {
      return { __proto__: Ka }.foo === Ka.foo && !({ __proto__: null } instanceof Xp);
    }, Zp = "Function.prototype.bind called on incompatible ", Kp = Object.prototype.toString, Jp = Math.max, Qp = "[object Function]", Ja = function(t, i) {
      for (var e = [], n = 0; n < t.length; n += 1)
        e[n] = t[n];
      for (var r = 0; r < i.length; r += 1)
        e[r + t.length] = i[r];
      return e;
    }, eg = function(t, i) {
      for (var e = [], n = i || 0, r = 0; n < t.length; n += 1, r += 1)
        e[r] = t[n];
      return e;
    }, tg = function(t, i) {
      for (var e = "", n = 0; n < t.length; n += 1)
        e += t[n], n + 1 < t.length && (e += i);
      return e;
    }, ng = function(t) {
      var i = this;
      if (typeof i != "function" || Kp.apply(i) !== Qp)
        throw new TypeError(Zp + i);
      for (var e = eg(arguments, 1), n, r = function() {
        if (this instanceof n) {
          var u = i.apply(this, Ja(e, arguments));
          return Object(u) === u ? u : this;
        }
        return i.apply(t, Ja(e, arguments));
      }, o = Jp(0, i.length - e.length), s = [], a = 0; a < o; a++)
        s[a] = "$" + a;
      if (n = Function("binder", "return function (" + tg(s, ",") + "){ return binder.apply(this,arguments); }")(r), i.prototype) {
        var l = function() {
        };
        l.prototype = i.prototype, n.prototype = new l(), l.prototype = null;
      }
      return n;
    }, ig = ng, mi = Function.prototype.bind || ig, rg = Function.prototype.call, og = Object.prototype.hasOwnProperty, sg = mi, ag = sg.call(rg, og), ne, Jt = SyntaxError, Qa = Function, Qt = TypeError, qr = function(t) {
      try {
        return Qa('"use strict"; return (' + t + ").constructor;")();
      } catch {
      }
    }, Ft = Object.getOwnPropertyDescriptor;
    if (Ft)
      try {
        Ft({}, "");
      } catch {
        Ft = null;
      }
    var $r = function() {
      throw new Qt();
    }, lg = Ft ? function() {
      try {
        return arguments.callee, $r;
      } catch {
        try {
          return Ft(arguments, "callee").get;
        } catch {
          return $r;
        }
      }
    }() : $r, en = Za(), ug = Yp(), Se = Object.getPrototypeOf || (ug ? function(t) {
      return t.__proto__;
    } : null), tn = {}, cg = typeof Uint8Array > "u" || !Se ? ne : Se(Uint8Array), Mt = { "%AggregateError%": typeof AggregateError > "u" ? ne : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? ne : ArrayBuffer, "%ArrayIteratorPrototype%": en && Se ? Se([][Symbol.iterator]()) : ne, "%AsyncFromSyncIteratorPrototype%": ne, "%AsyncFunction%": tn, "%AsyncGenerator%": tn, "%AsyncGeneratorFunction%": tn, "%AsyncIteratorPrototype%": tn, "%Atomics%": typeof Atomics > "u" ? ne : Atomics, "%BigInt%": typeof BigInt > "u" ? ne : BigInt, "%BigInt64Array%": typeof BigInt64Array > "u" ? ne : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array > "u" ? ne : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? ne : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": typeof Float32Array > "u" ? ne : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? ne : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? ne : FinalizationRegistry, "%Function%": Qa, "%GeneratorFunction%": tn, "%Int8Array%": typeof Int8Array > "u" ? ne : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? ne : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? ne : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": en && Se ? Se(Se([][Symbol.iterator]())) : ne, "%JSON%": typeof JSON == "object" ? JSON : ne, "%Map%": typeof Map > "u" ? ne : Map, "%MapIteratorPrototype%": typeof Map > "u" || !en || !Se ? ne : Se((/* @__PURE__ */ new Map())[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? ne : Promise, "%Proxy%": typeof Proxy > "u" ? ne : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": typeof Reflect > "u" ? ne : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? ne : Set, "%SetIteratorPrototype%": typeof Set > "u" || !en || !Se ? ne : Se((/* @__PURE__ */ new Set())[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? ne : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": en && Se ? Se(""[Symbol.iterator]()) : ne, "%Symbol%": en ? Symbol : ne, "%SyntaxError%": Jt, "%ThrowTypeError%": lg, "%TypedArray%": cg, "%TypeError%": Qt, "%Uint8Array%": typeof Uint8Array > "u" ? ne : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? ne : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? ne : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? ne : Uint32Array, "%URIError%": URIError, "%WeakMap%": typeof WeakMap > "u" ? ne : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? ne : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? ne : WeakSet };
    if (Se)
      try {
        null.error;
      } catch (t) {
        var hg = Se(Se(t));
        Mt["%Error.prototype%"] = hg;
      }
    var dg = function t(i) {
      var e;
      if (i === "%AsyncFunction%")
        e = qr("async function () {}");
      else if (i === "%GeneratorFunction%")
        e = qr("function* () {}");
      else if (i === "%AsyncGeneratorFunction%")
        e = qr("async function* () {}");
      else if (i === "%AsyncGenerator%") {
        var n = t("%AsyncGeneratorFunction%");
        n && (e = n.prototype);
      } else if (i === "%AsyncIteratorPrototype%") {
        var r = t("%AsyncGenerator%");
        r && Se && (e = Se(r.prototype));
      }
      return Mt[i] = e, e;
    }, el = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, Fn = mi, vi = ag, pg = Fn.call(Function.call, Array.prototype.concat), gg = Fn.call(Function.apply, Array.prototype.splice), tl = Fn.call(Function.call, String.prototype.replace), yi = Fn.call(Function.call, String.prototype.slice), fg = Fn.call(Function.call, RegExp.prototype.exec), mg = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, vg = /\\(\\)?/g, yg = function(t) {
      var i = yi(t, 0, 1), e = yi(t, -1);
      if (i === "%" && e !== "%")
        throw new Jt("invalid intrinsic syntax, expected closing `%`");
      if (e === "%" && i !== "%")
        throw new Jt("invalid intrinsic syntax, expected opening `%`");
      var n = [];
      return tl(t, mg, function(r, o, s, a) {
        n[n.length] = s ? tl(a, vg, "$1") : o || r;
      }), n;
    }, Eg = function(t, i) {
      var e = t, n;
      if (vi(el, e) && (n = el[e], e = "%" + n[0] + "%"), vi(Mt, e)) {
        var r = Mt[e];
        if (r === tn && (r = dg(e)), typeof r > "u" && !i)
          throw new Qt("intrinsic " + t + " exists, but is not available. Please file an issue!");
        return { alias: n, name: e, value: r };
      }
      throw new Jt("intrinsic " + t + " does not exist!");
    }, be = function(t, i) {
      if (typeof t != "string" || t.length === 0)
        throw new Qt("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof i != "boolean")
        throw new Qt('"allowMissing" argument must be a boolean');
      if (fg(/^%?[^%]*%?$/, t) === null)
        throw new Jt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var e = yg(t), n = e.length > 0 ? e[0] : "", r = Eg("%" + n + "%", i), o = r.name, s = r.value, a = !1, l = r.alias;
      l && (n = l[0], gg(e, pg([0, 1], l)));
      for (var u = 1, c = !0; u < e.length; u += 1) {
        var h = e[u], d = yi(h, 0, 1), m = yi(h, -1);
        if ((d === '"' || d === "'" || d === "`" || m === '"' || m === "'" || m === "`") && d !== m)
          throw new Jt("property names with quotes must have matching quotes");
        if ((h === "constructor" || !c) && (a = !0), n += "." + h, o = "%" + n + "%", vi(Mt, o))
          s = Mt[o];
        else if (s != null) {
          if (!(h in s)) {
            if (!i)
              throw new Qt("base intrinsic for " + t + " exists, but the property is not available.");
            return;
          }
          if (Ft && u + 1 >= e.length) {
            var y = Ft(s, h);
            c = !!y, c && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[h];
          } else
            c = vi(s, h), s = s[h];
          c && !a && (Mt[o] = s);
        }
      }
      return s;
    }, wg = be, Xr = wg("%Object.defineProperty%", !0), Yr = function() {
      if (Xr)
        try {
          return Xr({}, "a", { value: 1 }), !0;
        } catch {
          return !1;
        }
      return !1;
    };
    Yr.hasArrayLengthDefineBug = function() {
      if (!Yr())
        return null;
      try {
        return Xr([], "length", { value: 1 }).length !== 1;
      } catch {
        return !0;
      }
    };
    var Zr = Yr, bg = qp, xg = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", Sg = Object.prototype.toString, _g = Array.prototype.concat, nl = Object.defineProperty, Cg = function(t) {
      return typeof t == "function" && Sg.call(t) === "[object Function]";
    }, Tg = Zr(), il = nl && Tg, Ag = function(t, i, e, n) {
      if (i in t) {
        if (n === !0) {
          if (t[i] === e)
            return;
        } else if (!Cg(n) || !n())
          return;
      }
      il ? nl(t, i, { configurable: !0, enumerable: !1, value: e, writable: !0 }) : t[i] = e;
    }, rl = function(t, i) {
      var e = arguments.length > 2 ? arguments[2] : {}, n = bg(i);
      xg && (n = _g.call(n, Object.getOwnPropertySymbols(i)));
      for (var r = 0; r < n.length; r += 1)
        Ag(t, n[r], i[n[r]], e[n[r]]);
    };
    rl.supportsDescriptors = !!il;
    var nn = rl, Mn = { exports: {} }, Pg = be, Ei = Pg("%Object.getOwnPropertyDescriptor%", !0);
    if (Ei)
      try {
        Ei([], "length");
      } catch {
        Ei = null;
      }
    var ol = Ei, Dg = Zr(), Kr = be, In = Dg && Kr("%Object.defineProperty%", !0);
    if (In)
      try {
        In({}, "a", { value: 1 });
      } catch {
        In = !1;
      }
    var Og = Kr("%SyntaxError%"), rn = Kr("%TypeError%"), sl = ol, Rg = function(t, i, e) {
      if (!t || typeof t != "object" && typeof t != "function")
        throw new rn("`obj` must be an object or a function`");
      if (typeof i != "string" && typeof i != "symbol")
        throw new rn("`property` must be a string or a symbol`");
      if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
        throw new rn("`nonEnumerable`, if provided, must be a boolean or null");
      if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
        throw new rn("`nonWritable`, if provided, must be a boolean or null");
      if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
        throw new rn("`nonConfigurable`, if provided, must be a boolean or null");
      if (arguments.length > 6 && typeof arguments[6] != "boolean")
        throw new rn("`loose`, if provided, must be a boolean");
      var n = arguments.length > 3 ? arguments[3] : null, r = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, a = !!sl && sl(t, i);
      if (In)
        In(t, i, { configurable: o === null && a ? a.configurable : !o, enumerable: n === null && a ? a.enumerable : !n, value: e, writable: r === null && a ? a.writable : !r });
      else if (s || !n && !r && !o)
        t[i] = e;
      else
        throw new Og("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
    }, al = be, ll = Rg, kg = Zr(), ul = ol, cl = al("%TypeError%"), Bg = al("%Math.floor%"), Fg = function(t, i) {
      if (typeof t != "function")
        throw new cl("`fn` is not a function");
      if (typeof i != "number" || i < 0 || i > 4294967295 || Bg(i) !== i)
        throw new cl("`length` must be a positive 32-bit integer");
      var e = arguments.length > 2 && !!arguments[2], n = !0, r = !0;
      if ("length" in t && ul) {
        var o = ul(t, "length");
        o && !o.configurable && (n = !1), o && !o.writable && (r = !1);
      }
      return (n || r || !e) && (kg ? ll(t, "length", i, !0, !0) : ll(t, "length", i)), t;
    };
    (function(t) {
      var i = mi, e = be, n = Fg, r = e("%TypeError%"), o = e("%Function.prototype.apply%"), s = e("%Function.prototype.call%"), a = e("%Reflect.apply%", !0) || i.call(s, o), l = e("%Object.defineProperty%", !0), u = e("%Math.max%");
      if (l)
        try {
          l({}, "a", { value: 1 });
        } catch {
          l = null;
        }
      t.exports = function(h) {
        if (typeof h != "function")
          throw new r("a function is required");
        var d = a(i, s, arguments);
        return n(d, 1 + u(0, h.length - (arguments.length - 1)), !0);
      };
      var c = function() {
        return a(i, o, arguments);
      };
      l ? l(t.exports, "apply", { value: c }) : t.exports.apply = c;
    })(Mn);
    var hl = be, dl = Mn.exports, Mg = dl(hl("String.prototype.indexOf")), pt = function(t, i) {
      var e = hl(t, !!i);
      return typeof e == "function" && Mg(t, ".prototype.") > -1 ? dl(e) : e;
    }, Ig = be, Lg = Ig("%TypeError%"), Ng = function(t, i) {
      if (t == null)
        throw new Lg(i || "Cannot call method on " + t);
      return t;
    }, Ln = Ng, Hg = be, pl = Hg("%Array%"), zg = !pl.isArray && pt("Object.prototype.toString"), jg = pl.isArray || function(t) {
      return zg(t) === "[object Array]";
    }, Ug = jg, gl = be, Vg = pt, Wg = gl("%TypeError%"), Gg = Ug, qg = gl("%Reflect.apply%", !0) || Vg("Function.prototype.apply"), $g = function(t, i) {
      var e = arguments.length > 2 ? arguments[2] : [];
      if (!Gg(e))
        throw new Wg("Assertion failed: optional `argumentsList`, if provided, must be a List");
      return qg(t, i, e);
    }, Xg = {}, Yg = Object.freeze({ __proto__: null, [Symbol.toStringTag]: "Module", default: Xg }), Zg = kr(Yg), Jr = typeof Map == "function" && Map.prototype, Qr = Object.getOwnPropertyDescriptor && Jr ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, wi = Jr && Qr && typeof Qr.get == "function" ? Qr.get : null, fl = Jr && Map.prototype.forEach, eo = typeof Set == "function" && Set.prototype, to = Object.getOwnPropertyDescriptor && eo ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, bi = eo && to && typeof to.get == "function" ? to.get : null, ml = eo && Set.prototype.forEach, Kg = typeof WeakMap == "function" && WeakMap.prototype, Nn = Kg ? WeakMap.prototype.has : null, Jg = typeof WeakSet == "function" && WeakSet.prototype, Hn = Jg ? WeakSet.prototype.has : null, Qg = typeof WeakRef == "function" && WeakRef.prototype, vl = Qg ? WeakRef.prototype.deref : null, ef = Boolean.prototype.valueOf, tf = Object.prototype.toString, nf = Function.prototype.toString, rf = String.prototype.match, no = String.prototype.slice, xt = String.prototype.replace, of = String.prototype.toUpperCase, yl = String.prototype.toLowerCase, El = RegExp.prototype.test, wl = Array.prototype.concat, nt = Array.prototype.join, sf = Array.prototype.slice, bl = Math.floor, io = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, ro = Object.getOwnPropertySymbols, oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, on = typeof Symbol == "function" && typeof Symbol.iterator == "object", Be = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === on || !0) ? Symbol.toStringTag : null, xl = Object.prototype.propertyIsEnumerable, Sl = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
      return t.__proto__;
    } : null);
    function _l(t, i) {
      if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || El.call(/e/, i))
        return i;
      var e = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof t == "number") {
        var n = t < 0 ? -bl(-t) : bl(t);
        if (n !== t) {
          var r = String(n), o = no.call(i, r.length + 1);
          return xt.call(r, e, "$&_") + "." + xt.call(xt.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return xt.call(i, e, "$&_");
    }
    var so = Zg, Cl = so.custom, Tl = Dl(Cl) ? Cl : null, af = function t(i, e, n, r) {
      var o = e || {};
      if (St(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double")
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      if (St(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null))
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      var s = St(o, "customInspect") ? o.customInspect : !0;
      if (typeof s != "boolean" && s !== "symbol")
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      if (St(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0))
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      if (St(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      var a = o.numericSeparator;
      if (typeof i > "u")
        return "undefined";
      if (i === null)
        return "null";
      if (typeof i == "boolean")
        return i ? "true" : "false";
      if (typeof i == "string")
        return Rl(i, o);
      if (typeof i == "number") {
        if (i === 0)
          return 1 / 0 / i > 0 ? "0" : "-0";
        var l = String(i);
        return a ? _l(i, l) : l;
      }
      if (typeof i == "bigint") {
        var u = String(i) + "n";
        return a ? _l(i, u) : u;
      }
      var c = typeof o.depth > "u" ? 5 : o.depth;
      if (typeof n > "u" && (n = 0), n >= c && c > 0 && typeof i == "object")
        return ao(i) ? "[Array]" : "[Object]";
      var h = Cf(o, n);
      if (typeof r > "u")
        r = [];
      else if (Ol(r, i) >= 0)
        return "[Circular]";
      function d(q, $, Q) {
        if ($ && (r = sf.call(r), r.push($)), Q) {
          var J = { depth: o.depth };
          return St(o, "quoteStyle") && (J.quoteStyle = o.quoteStyle), t(q, J, n + 1, r);
        }
        return t(q, o, n + 1, r);
      }
      if (typeof i == "function" && !Pl(i)) {
        var m = mf(i), y = xi(i, d);
        return "[Function" + (m ? ": " + m : " (anonymous)") + "]" + (y.length > 0 ? " { " + nt.call(y, ", ") + " }" : "");
      }
      if (Dl(i)) {
        var S = on ? xt.call(String(i), /^(Symbol\(.*\))_[^)]*$/, "$1") : oo.call(i);
        return typeof i == "object" && !on ? zn(S) : S;
      }
      if (xf(i)) {
        for (var b = "<" + yl.call(String(i.nodeName)), A = i.attributes || [], p = 0; p < A.length; p++)
          b += " " + A[p].name + "=" + Al(lf(A[p].value), "double", o);
        return b += ">", i.childNodes && i.childNodes.length && (b += "..."), b += "</" + yl.call(String(i.nodeName)) + ">", b;
      }
      if (ao(i)) {
        if (i.length === 0)
          return "[]";
        var E = xi(i, d);
        return h && !_f(E) ? "[" + uo(E, h) + "]" : "[ " + nt.call(E, ", ") + " ]";
      }
      if (cf(i)) {
        var T = xi(i, d);
        return !("cause" in Error.prototype) && "cause" in i && !xl.call(i, "cause") ? "{ [" + String(i) + "] " + nt.call(wl.call("[cause]: " + d(i.cause), T), ", ") + " }" : T.length === 0 ? "[" + String(i) + "]" : "{ [" + String(i) + "] " + nt.call(T, ", ") + " }";
      }
      if (typeof i == "object" && s) {
        if (Tl && typeof i[Tl] == "function" && so)
          return so(i, { depth: c - n });
        if (s !== "symbol" && typeof i.inspect == "function")
          return i.inspect();
      }
      if (vf(i)) {
        var C = [];
        return fl && fl.call(i, function(q, $) {
          C.push(d($, i, !0) + " => " + d(q, i));
        }), kl("Map", wi.call(i), C, h);
      }
      if (wf(i)) {
        var O = [];
        return ml && ml.call(i, function(q) {
          O.push(d(q, i));
        }), kl("Set", bi.call(i), O, h);
      }
      if (yf(i))
        return lo("WeakMap");
      if (bf(i))
        return lo("WeakSet");
      if (Ef(i))
        return lo("WeakRef");
      if (df(i))
        return zn(d(Number(i)));
      if (gf(i))
        return zn(d(io.call(i)));
      if (pf(i))
        return zn(ef.call(i));
      if (hf(i))
        return zn(d(String(i)));
      if (typeof window < "u" && i === window)
        return "{ [object Window] }";
      if (i === dt)
        return "{ [object globalThis] }";
      if (!uf(i) && !Pl(i)) {
        var D = xi(i, d), F = Sl ? Sl(i) === Object.prototype : i instanceof Object || i.constructor === Object, I = i instanceof Object ? "" : "null prototype", H = !F && Be && Object(i) === i && Be in i ? no.call(_t(i), 8, -1) : I ? "Object" : "", j = F || typeof i.constructor != "function" ? "" : i.constructor.name ? i.constructor.name + " " : "", z = j + (H || I ? "[" + nt.call(wl.call([], H || [], I || []), ": ") + "] " : "");
        return D.length === 0 ? z + "{}" : h ? z + "{" + uo(D, h) + "}" : z + "{ " + nt.call(D, ", ") + " }";
      }
      return String(i);
    };
    function Al(t, i, e) {
      var n = (e.quoteStyle || i) === "double" ? '"' : "'";
      return n + t + n;
    }
    function lf(t) {
      return xt.call(String(t), /"/g, "&quot;");
    }
    function ao(t) {
      return _t(t) === "[object Array]" && (!Be || !(typeof t == "object" && Be in t));
    }
    function uf(t) {
      return _t(t) === "[object Date]" && (!Be || !(typeof t == "object" && Be in t));
    }
    function Pl(t) {
      return _t(t) === "[object RegExp]" && (!Be || !(typeof t == "object" && Be in t));
    }
    function cf(t) {
      return _t(t) === "[object Error]" && (!Be || !(typeof t == "object" && Be in t));
    }
    function hf(t) {
      return _t(t) === "[object String]" && (!Be || !(typeof t == "object" && Be in t));
    }
    function df(t) {
      return _t(t) === "[object Number]" && (!Be || !(typeof t == "object" && Be in t));
    }
    function pf(t) {
      return _t(t) === "[object Boolean]" && (!Be || !(typeof t == "object" && Be in t));
    }
    function Dl(t) {
      if (on)
        return t && typeof t == "object" && t instanceof Symbol;
      if (typeof t == "symbol")
        return !0;
      if (!t || typeof t != "object" || !oo)
        return !1;
      try {
        return oo.call(t), !0;
      } catch {
      }
      return !1;
    }
    function gf(t) {
      if (!t || typeof t != "object" || !io)
        return !1;
      try {
        return io.call(t), !0;
      } catch {
      }
      return !1;
    }
    var ff = Object.prototype.hasOwnProperty || function(t) {
      return t in this;
    };
    function St(t, i) {
      return ff.call(t, i);
    }
    function _t(t) {
      return tf.call(t);
    }
    function mf(t) {
      if (t.name)
        return t.name;
      var i = rf.call(nf.call(t), /^function\s*([\w$]+)/);
      return i ? i[1] : null;
    }
    function Ol(t, i) {
      if (t.indexOf)
        return t.indexOf(i);
      for (var e = 0, n = t.length; e < n; e++)
        if (t[e] === i)
          return e;
      return -1;
    }
    function vf(t) {
      if (!wi || !t || typeof t != "object")
        return !1;
      try {
        wi.call(t);
        try {
          bi.call(t);
        } catch {
          return !0;
        }
        return t instanceof Map;
      } catch {
      }
      return !1;
    }
    function yf(t) {
      if (!Nn || !t || typeof t != "object")
        return !1;
      try {
        Nn.call(t, Nn);
        try {
          Hn.call(t, Hn);
        } catch {
          return !0;
        }
        return t instanceof WeakMap;
      } catch {
      }
      return !1;
    }
    function Ef(t) {
      if (!vl || !t || typeof t != "object")
        return !1;
      try {
        return vl.call(t), !0;
      } catch {
      }
      return !1;
    }
    function wf(t) {
      if (!bi || !t || typeof t != "object")
        return !1;
      try {
        bi.call(t);
        try {
          wi.call(t);
        } catch {
          return !0;
        }
        return t instanceof Set;
      } catch {
      }
      return !1;
    }
    function bf(t) {
      if (!Hn || !t || typeof t != "object")
        return !1;
      try {
        Hn.call(t, Hn);
        try {
          Nn.call(t, Nn);
        } catch {
          return !0;
        }
        return t instanceof WeakSet;
      } catch {
      }
      return !1;
    }
    function xf(t) {
      return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
    }
    function Rl(t, i) {
      if (t.length > i.maxStringLength) {
        var e = t.length - i.maxStringLength, n = "... " + e + " more character" + (e > 1 ? "s" : "");
        return Rl(no.call(t, 0, i.maxStringLength), i) + n;
      }
      var r = xt.call(xt.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Sf);
      return Al(r, "single", i);
    }
    function Sf(t) {
      var i = t.charCodeAt(0), e = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[i];
      return e ? "\\" + e : "\\x" + (i < 16 ? "0" : "") + of.call(i.toString(16));
    }
    function zn(t) {
      return "Object(" + t + ")";
    }
    function lo(t) {
      return t + " { ? }";
    }
    function kl(t, i, e, n) {
      var r = n ? uo(e, n) : nt.call(e, ", ");
      return t + " (" + i + ") {" + r + "}";
    }
    function _f(t) {
      for (var i = 0; i < t.length; i++)
        if (Ol(t[i], `
`) >= 0)
          return !1;
      return !0;
    }
    function Cf(t, i) {
      var e;
      if (t.indent === "	")
        e = "	";
      else if (typeof t.indent == "number" && t.indent > 0)
        e = nt.call(Array(t.indent + 1), " ");
      else
        return null;
      return { base: e, prev: nt.call(Array(i + 1), e) };
    }
    function uo(t, i) {
      if (t.length === 0)
        return "";
      var e = `
` + i.prev + i.base;
      return e + nt.call(t, "," + e) + `
` + i.prev;
    }
    function xi(t, i) {
      var e = ao(t), n = [];
      if (e) {
        n.length = t.length;
        for (var r = 0; r < t.length; r++)
          n[r] = St(t, r) ? i(t[r], t) : "";
      }
      var o = typeof ro == "function" ? ro(t) : [], s;
      if (on) {
        s = {};
        for (var a = 0; a < o.length; a++)
          s["$" + o[a]] = o[a];
      }
      for (var l in t)
        !St(t, l) || e && String(Number(l)) === l && l < t.length || on && s["$" + l] instanceof Symbol || (El.call(/[^\w$]/, l) ? n.push(i(l, t) + ": " + i(t[l], t)) : n.push(l + ": " + i(t[l], t)));
      if (typeof ro == "function")
        for (var u = 0; u < o.length; u++)
          xl.call(t, o[u]) && n.push("[" + i(o[u]) + "]: " + i(t[o[u]], t));
      return n;
    }
    var Bl = function(t) {
      return typeof t == "string" || typeof t == "symbol";
    }, Tf = function(t) {
      if (t === null)
        return "Null";
      if (typeof t > "u")
        return "Undefined";
      if (typeof t == "function" || typeof t == "object")
        return "Object";
      if (typeof t == "number")
        return "Number";
      if (typeof t == "boolean")
        return "Boolean";
      if (typeof t == "string")
        return "String";
    }, Af = Tf, jn = function(t) {
      return typeof t == "symbol" ? "Symbol" : typeof t == "bigint" ? "BigInt" : Af(t);
    }, Pf = be, Fl = Pf("%TypeError%"), Df = af, Of = Bl, Rf = jn, Ml = function(t, i) {
      if (Rf(t) !== "Object")
        throw new Fl("Assertion failed: Type(O) is not Object");
      if (!Of(i))
        throw new Fl("Assertion failed: IsPropertyKey(P) is not true, got " + Df(i));
      return t[i];
    }, kf = be, Il = kf("%TypeError%"), Bf = Bl, Ff = jn, Mf = function(t, i) {
      if (Ff(t) !== "Object")
        throw new Il("Assertion failed: `O` must be an Object");
      if (!Bf(i))
        throw new Il("Assertion failed: `P` must be a Property Key");
      return i in t;
    }, Ll = Function.prototype.toString, sn = typeof Reflect == "object" && Reflect !== null && Reflect.apply, co, Si;
    if (typeof sn == "function" && typeof Object.defineProperty == "function")
      try {
        co = Object.defineProperty({}, "length", { get: function() {
          throw Si;
        } }), Si = {}, sn(function() {
          throw 42;
        }, null, co);
      } catch (t) {
        t !== Si && (sn = null);
      }
    else
      sn = null;
    var If = /^\s*class\b/, ho = function(t) {
      try {
        var i = Ll.call(t);
        return If.test(i);
      } catch {
        return !1;
      }
    }, po = function(t) {
      try {
        return ho(t) ? !1 : (Ll.call(t), !0);
      } catch {
        return !1;
      }
    }, _i = Object.prototype.toString, Lf = "[object Object]", Nf = "[object Function]", Hf = "[object GeneratorFunction]", zf = "[object HTMLAllCollection]", jf = "[object HTML document.all class]", Uf = "[object HTMLCollection]", Vf = typeof Symbol == "function" && !!Symbol.toStringTag, Wf = !(0 in [,]), go = function() {
      return !1;
    };
    if (typeof document == "object") {
      var Gf = document.all;
      _i.call(Gf) === _i.call(document.all) && (go = function(t) {
        if ((Wf || !t) && (typeof t > "u" || typeof t == "object"))
          try {
            var i = _i.call(t);
            return (i === zf || i === jf || i === Uf || i === Lf) && t("") == null;
          } catch {
          }
        return !1;
      });
    }
    var Nl = sn ? function(t) {
      if (go(t))
        return !0;
      if (!t || typeof t != "function" && typeof t != "object")
        return !1;
      try {
        sn(t, null, co);
      } catch (i) {
        if (i !== Si)
          return !1;
      }
      return !ho(t) && po(t);
    } : function(t) {
      if (go(t))
        return !0;
      if (!t || typeof t != "function" && typeof t != "object")
        return !1;
      if (Vf)
        return po(t);
      if (ho(t))
        return !1;
      var i = _i.call(t);
      return i !== Nf && i !== Hf && !/^\[object HTML/.test(i) ? !1 : po(t);
    }, qf = Nl, $f = Number.MAX_SAFE_INTEGER || 9007199254740991, Xf = function(t) {
      return t === null || typeof t != "function" && typeof t != "object";
    }, Yf = function(t) {
      return t === null || typeof t != "function" && typeof t != "object";
    }, Zf = Xa, fo = function() {
      return Zf() && !!Symbol.toStringTag;
    }, Kf = Date.prototype.getDay, Jf = function(t) {
      try {
        return Kf.call(t), !0;
      } catch {
        return !1;
      }
    }, Qf = Object.prototype.toString, em = "[object Date]", tm = fo(), nm = function(t) {
      return typeof t != "object" || t === null ? !1 : tm ? Jf(t) : Qf.call(t) === em;
    }, mo = { exports: {} }, im = Object.prototype.toString, rm = Za();
    if (rm) {
      var om = Symbol.prototype.toString, sm = /^Symbol\(.*\)$/, am = function(t) {
        return typeof t.valueOf() != "symbol" ? !1 : sm.test(om.call(t));
      };
      mo.exports = function(t) {
        if (typeof t == "symbol")
          return !0;
        if (im.call(t) !== "[object Symbol]")
          return !1;
        try {
          return am(t);
        } catch {
          return !1;
        }
      };
    } else
      mo.exports = function(t) {
        return !1;
      };
    var lm = typeof Symbol == "function" && typeof Symbol.iterator == "symbol", vo = Yf, Hl = Nl, um = nm, zl = mo.exports, cm = function(t, i) {
      if (typeof t > "u" || t === null)
        throw new TypeError("Cannot call method on " + t);
      if (typeof i != "string" || i !== "number" && i !== "string")
        throw new TypeError('hint must be "string" or "number"');
      var e = i === "string" ? ["toString", "valueOf"] : ["valueOf", "toString"], n, r, o;
      for (o = 0; o < e.length; ++o)
        if (n = t[e[o]], Hl(n) && (r = n.call(t), vo(r)))
          return r;
      throw new TypeError("No default value");
    }, hm = function(t, i) {
      var e = t[i];
      if (e !== null && typeof e < "u") {
        if (!Hl(e))
          throw new TypeError(e + " returned for property " + i + " of object " + t + " is not a function");
        return e;
      }
    }, dm = function(t) {
      if (vo(t))
        return t;
      var i = "default";
      arguments.length > 1 && (arguments[1] === String ? i = "string" : arguments[1] === Number && (i = "number"));
      var e;
      if (lm && (Symbol.toPrimitive ? e = hm(t, Symbol.toPrimitive) : zl(t) && (e = Symbol.prototype.valueOf)), typeof e < "u") {
        var n = e.call(t, i);
        if (vo(n))
          return n;
        throw new TypeError("unable to convert exotic object to primitive");
      }
      return i === "default" && (um(t) || zl(t)) && (i = "string"), cm(t, i === "default" ? "number" : i);
    }, jl = dm, pm = function(t) {
      return arguments.length > 1 ? jl(t, arguments[1]) : jl(t);
    }, yo = pt, Ul = fo(), Vl, Wl, Eo, wo;
    if (Ul) {
      Vl = yo("Object.prototype.hasOwnProperty"), Wl = yo("RegExp.prototype.exec"), Eo = {};
      var bo = function() {
        throw Eo;
      };
      wo = { toString: bo, valueOf: bo }, typeof Symbol.toPrimitive == "symbol" && (wo[Symbol.toPrimitive] = bo);
    }
    var gm = yo("Object.prototype.toString"), fm = Object.getOwnPropertyDescriptor, mm = "[object RegExp]", vm = Ul ? function(t) {
      if (!t || typeof t != "object")
        return !1;
      var i = fm(t, "lastIndex"), e = i && Vl(i, "value");
      if (!e)
        return !1;
      try {
        Wl(t, wo);
      } catch (n) {
        return n === Eo;
      }
    } : function(t) {
      return !t || typeof t != "object" && typeof t != "function" ? !1 : gm(t) === mm;
    }, ym = pt, Em = be, wm = vm, bm = ym("RegExp.prototype.exec"), xm = Em("%TypeError%"), Sm = function(t) {
      if (!wm(t))
        throw new xm("`regex` must be a RegExp");
      return function(i) {
        return bm(t, i) !== null;
      };
    }, Gl = be, _m = Gl("%String%"), Cm = Gl("%TypeError%"), ql = function(t) {
      if (typeof t == "symbol")
        throw new Cm("Cannot convert a Symbol value to a string");
      return _m(t);
    }, Tm = Ln, Am = ql, Pm = pt, $l = Pm("String.prototype.replace"), Xl = /^\s$/.test("᠎"), Dm = Xl ? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/ : /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/, Om = Xl ? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/ : /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/, Yl = function() {
      var t = Am(Tm(this));
      return $l($l(t, Dm, ""), Om, "");
    }, Rm = Yl, Zl = "​", an = "᠎", Kl = function() {
      return String.prototype.trim && Zl.trim() === Zl && an.trim() === an && ("_" + an).trim() === "_" + an && (an + "_").trim() === an + "_" ? String.prototype.trim : Rm;
    }, km = nn, Bm = Kl, Fm = function() {
      var t = Bm();
      return km(String.prototype, { trim: t }, { trim: function() {
        return String.prototype.trim !== t;
      } }), t;
    }, Mm = Mn.exports, Im = nn, Lm = Ln, Nm = Yl, Jl = Kl, Hm = Fm, zm = Mm(Jl()), Ql = function(t) {
      return Lm(t), zm(t);
    };
    Im(Ql, { getPolyfill: Jl, implementation: Nm, shim: Hm });
    var eu = Ql, Ci = be, xo = Ci("%Number%"), jm = Ci("%RegExp%"), Um = Ci("%TypeError%"), tu = Ci("%parseInt%"), Vm = pt, Ti = Sm, nu = Vm("String.prototype.slice"), Wm = Ti(/^0b[01]+$/i), Gm = Ti(/^0o[0-7]+$/i), qm = Ti(/^[-+]0x[0-9a-f]+$/i), $m = ["", "​", "￾"].join(""), Xm = new jm("[" + $m + "]", "g"), Ym = Ti(Xm), Zm = eu, Km = jn, Jm = function t(i) {
      if (Km(i) !== "String")
        throw new Um("Assertion failed: `argument` is not a String");
      if (Wm(i))
        return xo(tu(nu(i, 2), 2));
      if (Gm(i))
        return xo(tu(nu(i, 2), 8));
      if (Ym(i) || qm(i))
        return NaN;
      var e = Zm(i);
      return e !== i ? t(e) : xo(i);
    }, iu = be, ru = iu("%TypeError%"), ou = iu("%Number%"), Qm = Xf, e0 = pm, t0 = Jm, n0 = function(t) {
      var i = Qm(t) ? t : e0(t, ou);
      if (typeof i == "symbol")
        throw new ru("Cannot convert a Symbol value to a number");
      if (typeof i == "bigint")
        throw new ru("Conversion from 'BigInt' to 'number' is not allowed.");
      return typeof i == "string" ? t0(i) : ou(i);
    }, i0 = jn, r0 = Math.floor, o0 = function(t) {
      return i0(t) === "BigInt" ? t : r0(t);
    }, s0 = be, su = o0, a0 = s0("%TypeError%"), l0 = function(t) {
      if (typeof t != "number" && typeof t != "bigint")
        throw new a0("argument must be a Number or a BigInt");
      var i = t < 0 ? -su(-t) : su(t);
      return i === 0 ? 0 : i;
    }, au = Number.isNaN || function(t) {
      return t !== t;
    }, u0 = au, c0 = function(t) {
      return (typeof t == "number" || typeof t == "bigint") && !u0(t) && t !== 1 / 0 && t !== -1 / 0;
    }, h0 = n0, d0 = l0, p0 = au, g0 = c0, f0 = function(t) {
      var i = h0(t);
      return p0(i) || i === 0 ? 0 : g0(i) ? d0(i) : i;
    }, lu = $f, m0 = f0, v0 = function(t) {
      var i = m0(t);
      return i <= 0 ? 0 : i > lu ? lu : i;
    }, y0 = be, E0 = y0("%TypeError%"), w0 = Ml, b0 = v0, x0 = jn, S0 = function(t) {
      if (x0(t) !== "Object")
        throw new E0("Assertion failed: `obj` must be an Object");
      return b0(w0(t, "length"));
    }, _0 = be, C0 = _0("%Object%"), T0 = Ln, A0 = function(t) {
      return T0(t), C0(t);
    }, P0 = String.prototype.valueOf, D0 = function(t) {
      try {
        return P0.call(t), !0;
      } catch {
        return !1;
      }
    }, O0 = Object.prototype.toString, R0 = "[object String]", k0 = fo(), B0 = function(t) {
      return typeof t == "string" ? !0 : typeof t != "object" ? !1 : k0 ? D0(t) : O0.call(t) === R0;
    }, F0 = be, M0 = pt, I0 = F0("%TypeError%"), L0 = $g, N0 = Ml, H0 = Mf, z0 = qf, j0 = S0, U0 = A0, V0 = ql, W0 = B0, G0 = M0("String.prototype.split"), uu = Object("a"), q0 = uu[0] !== "a" || !(0 in uu), cu = function(t) {
      var i = U0(this), e = q0 && W0(this) ? G0(this, "") : i, n = j0(e);
      if (!z0(t))
        throw new I0("Array.prototype.forEach callback must be a function");
      var r;
      arguments.length > 1 && (r = arguments[1]);
      for (var o = 0; o < n; ) {
        var s = V0(o), a = H0(e, s);
        if (a) {
          var l = N0(e, s);
          L0(t, r, [l, o, e]);
        }
        o += 1;
      }
    }, $0 = function(t) {
      var i = !0, e = !0, n = !1;
      if (typeof t == "function") {
        try {
          t.call("f", function(r, o, s) {
            typeof s != "object" && (i = !1);
          }), t.call([null], function() {
            "use strict";
            e = typeof this == "string";
          }, "x");
        } catch {
          n = !0;
        }
        return !n && i && e;
      }
      return !1;
    }, X0 = $0, Y0 = cu, hu = function() {
      var t = Array.prototype.forEach;
      return X0(t) ? t : Y0;
    }, Z0 = nn, K0 = hu, J0 = function() {
      var t = K0();
      return Z0(Array.prototype, { forEach: t }, { forEach: function() {
        return Array.prototype.forEach !== t;
      } }), t;
    }, Q0 = nn, ev = Mn.exports, tv = pt, nv = Ln, iv = cu, du = hu, rv = du(), ov = J0, sv = tv("Array.prototype.slice"), av = ev.apply(rv), pu = function(t, i) {
      return nv(t), av(t, sv(arguments, 1));
    };
    Q0(pu, { getPolyfill: du, implementation: iv, shim: ov });
    var lv = pu, uv = Ln, gu = pt, cv = gu("Object.prototype.propertyIsEnumerable"), hv = gu("Array.prototype.push"), fu = function(t) {
      var i = uv(t), e = [];
      for (var n in i)
        cv(i, n) && hv(e, [n, i[n]]);
      return e;
    }, dv = fu, mu = function() {
      return typeof Object.entries == "function" ? Object.entries : dv;
    }, pv = mu, gv = nn, fv = function() {
      var t = pv();
      return gv(Object, { entries: t }, { entries: function() {
        return Object.entries !== t;
      } }), t;
    }, mv = nn, vv = Mn.exports, yv = fu, vu = mu, Ev = fv, yu = vv(vu(), Object);
    mv(yu, { getPolyfill: vu, implementation: yv, shim: Ev });
    var wv = yu, bv = mi, xv = bv.call(Function.call, Object.prototype.hasOwnProperty), Ai = lv, So = wv, Eu = xv, Sv = eu, _v = function(t) {
    }, wu = String.prototype.replace, bu = String.prototype.split, Pi = "||||", _o = function(t) {
      var i = t % 100, e = i % 10;
      return i !== 11 && e === 1 ? 0 : 2 <= e && e <= 4 && !(i >= 12 && i <= 14) ? 1 : 2;
    }, xu = { pluralTypes: { arabic: function(t) {
      if (t < 3)
        return t;
      var i = t % 100;
      return i >= 3 && i <= 10 ? 3 : i >= 11 ? 4 : 5;
    }, bosnian_serbian: _o, chinese: function() {
      return 0;
    }, croatian: _o, french: function(t) {
      return t >= 2 ? 1 : 0;
    }, german: function(t) {
      return t !== 1 ? 1 : 0;
    }, russian: _o, lithuanian: function(t) {
      return t % 10 === 1 && t % 100 !== 11 ? 0 : t % 10 >= 2 && t % 10 <= 9 && (t % 100 < 11 || t % 100 > 19) ? 1 : 2;
    }, czech: function(t) {
      return t === 1 ? 0 : t >= 2 && t <= 4 ? 1 : 2;
    }, polish: function(t) {
      if (t === 1)
        return 0;
      var i = t % 10;
      return 2 <= i && i <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2;
    }, icelandic: function(t) {
      return t % 10 !== 1 || t % 100 === 11 ? 1 : 0;
    }, slovenian: function(t) {
      var i = t % 100;
      return i === 1 ? 0 : i === 2 ? 1 : i === 3 || i === 4 ? 2 : 3;
    }, romanian: function(t) {
      if (t === 1)
        return 0;
      var i = t % 100;
      return t === 0 || i >= 2 && i <= 19 ? 1 : 2;
    } }, pluralTypeToLanguages: { arabic: ["ar"], bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"], chinese: ["id", "id-ID", "ja", "ko", "ko-KR", "lo", "ms", "th", "th-TH", "zh"], croatian: ["hr", "hr-HR"], german: ["fa", "da", "de", "en", "es", "fi", "el", "he", "hi-IN", "hu", "hu-HU", "it", "nl", "no", "pt", "sv", "tr"], french: ["fr", "tl", "pt-br"], russian: ["ru", "ru-RU"], lithuanian: ["lt"], czech: ["cs", "cs-CZ", "sk"], polish: ["pl"], icelandic: ["is", "mk"], slovenian: ["sl-SL"], romanian: ["ro"] } };
    function Cv(t) {
      var i = {};
      return Ai(So(t), function(e) {
        var n = e[0], r = e[1];
        Ai(r, function(o) {
          i[o] = n;
        });
      }), i;
    }
    function Tv(t, i) {
      var e = Cv(t.pluralTypeToLanguages);
      return e[i] || e[bu.call(i, /-/, 1)[0]] || e.en;
    }
    function Av(t, i, e) {
      return t.pluralTypes[i](e);
    }
    function Pv() {
      var t = {};
      return function(i, e) {
        var n = t[e];
        return n && !i.pluralTypes[n] && (n = null, t[e] = n), n || (n = Tv(i, e), n && (t[e] = n)), n;
      };
    }
    function Su(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function Dv(t) {
      var i = t && t.prefix || "%{", e = t && t.suffix || "}";
      if (i === Pi || e === Pi)
        throw new RangeError('"' + Pi + '" token is reserved for pluralization');
      return new RegExp(Su(i) + "(.*?)" + Su(e), "g");
    }
    var Ov = Pv(), Rv = /%\{(.*?)\}/g;
    function Co(t, i, e, n, r, o) {
      if (typeof t != "string")
        throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
      if (i == null)
        return t;
      var s = t, a = n || Rv, l = o || wu, u = typeof i == "number" ? { smart_count: i } : i;
      if (u.smart_count != null && t) {
        var c = r || xu, h = bu.call(t, Pi), d = e || "en", m = Ov(c, d), y = Av(c, m, u.smart_count);
        s = Sv(h[y] || h[0]);
      }
      return s = l.call(s, a, function(S, b) {
        return !Eu(u, b) || u[b] == null ? S : u[b];
      }), s;
    }
    function gt(t) {
      var i = t || {};
      this.phrases = {}, this.extend(i.phrases || {}), this.currentLocale = i.locale || "en";
      var e = i.allowMissing ? Co : null;
      this.onMissingKey = typeof i.onMissingKey == "function" ? i.onMissingKey : e, this.warn = i.warn || _v, this.replaceImplementation = i.replace || wu, this.tokenRegex = Dv(i.interpolation), this.pluralRules = i.pluralRules || xu;
    }
    gt.prototype.locale = function(t) {
      return t && (this.currentLocale = t), this.currentLocale;
    }, gt.prototype.extend = function(t, i) {
      Ai(So(t || {}), function(e) {
        var n = e[0], r = e[1], o = i ? i + "." + n : n;
        typeof r == "object" ? this.extend(r, o) : this.phrases[o] = r;
      }, this);
    }, gt.prototype.unset = function(t, i) {
      typeof t == "string" ? delete this.phrases[t] : Ai(So(t || {}), function(e) {
        var n = e[0], r = e[1], o = i ? i + "." + n : n;
        typeof r == "object" ? this.unset(r, o) : delete this.phrases[o];
      }, this);
    }, gt.prototype.clear = function() {
      this.phrases = {};
    }, gt.prototype.replace = function(t) {
      this.clear(), this.extend(t);
    }, gt.prototype.t = function(t, i) {
      var e, n, r = i ?? {};
      if (typeof this.phrases[t] == "string")
        e = this.phrases[t];
      else if (typeof r._ == "string")
        e = r._;
      else if (this.onMissingKey) {
        var o = this.onMissingKey;
        n = o(t, r, this.currentLocale, this.tokenRegex, this.pluralRules, this.replaceImplementation);
      } else
        this.warn('Missing translation for key: "' + t + '"'), n = t;
      return typeof e == "string" && (n = Co(e, r, this.currentLocale, this.tokenRegex, this.pluralRules, this.replaceImplementation)), n;
    }, gt.prototype.has = function(t) {
      return Eu(this.phrases, t);
    }, gt.transformPhrase = function(t, i, e) {
      return Co(t, i, e);
    };
    var kv = gt, Bv = { "Add a comment...": "إضافة تعليق", "Add a reply...": "إضافة رد", "Add tag...": "إضافة علامة", Cancel: "إلغاء", Close: "إغلاق", Edit: "Edit", Delete: "Delete", Ok: "تم" }, Fv = { "Add a comment...": "Napsat komentář...", "Add a reply...": "Odpovědět...", "Add tag...": "Přidat štítek...", Cancel: "Zrušit", Close: "Zavřít", Edit: "Upravit", Delete: "Smazat", Ok: "Ok" }, Mv = { "Add a comment...": "Kommentar schreiben...", "Add a reply...": "Antwort schreiben...", "Add tag...": "Tag...", Cancel: "Abbrechen", Close: "Schliessen", Edit: "Bearbeiten", Delete: "Löschen", Ok: "Ok" }, Iv = { "Add a comment...": "Σχολίασε...", "Add a reply...": "Απάντησε...", "Add tag...": "Πρόσθεσε tag...", Cancel: "Άκυρο", Close: "Κλείσιμο", Edit: "Επεξεργασία", Delete: "Διαγραφή", Ok: "Ok" }, Lv = { "Add a comment...": "Agregar un comentario...", "Add a reply...": "Agregar una respuesta...", "Add tag...": "Etiquetar...", Cancel: "Cancelar", Close: "Cerrar", Edit: "Editar", Delete: "Eliminar", Ok: "Ok" }, Nv = { "Add a comment...": "Lisää kommentti", "Add a reply...": "Lisää vastaus", "Add tag...": "Lisää tunniste", Cancel: "Peruuta", Close: "Sulje", Edit: "Muokkaa", Delete: "Poista", Ok: "Ok" }, Hv = { "Add a comment...": "Ajouter un commentaire...", "Add a reply...": "Ajouter une réponse...", "Add tag...": "Ajouter une étiquette...", Cancel: "Annuler", Close: "Fermer", Edit: "Éditer", Delete: "Supprimer", Ok: "Ok" }, zv = { "Add a comment...": "Engadir un comentario...", "Add a reply...": "Engadir unha resposta...", "Add tag...": "Etiquetar...", Cancel: "Cancelar", Close: "Pechar", Edit: "Edit", Delete: "Delete", Ok: "Ok" }, jv = { "Add a comment...": "टिप्पणी जोड़ें", "Add a reply...": "जवाब दें", "Add tag...": "टैग लगाएँ", Cancel: "रद्द करें", Close: "बंद करें", Edit: "संपादित करें", Delete: "हटाएँ", Ok: "ठीक है" }, Uv = { "Add a comment...": "Commenta...", "Add a reply...": "Rispondi...", "Add tag...": "Aggiungi tag...", Cancel: "Annulla", Close: "Chiudi", Edit: "Edit", Delete: "Delete", Ok: "Ok" }, Vv = { "Add a comment...": "コメントを追加する...", "Add a reply...": "返信する...", "Add tag...": "タグを追加する...", Cancel: "キャンセル", Close: "閉じる", Edit: "編集", Delete: "削除", Ok: "Ok" }, Wv = { "Add a comment...": "댓글 추가", "Add a reply...": "답글 추가", "Add tag...": "태그 추가", Cancel: "취소", Close: "닫기", Edit: "수정", Delete: "삭제", Ok: "확인" }, Gv = { "Add a comment...": "Commentaar toevoegen...", "Add a reply...": "Antwoord toevoegen...", "Add tag...": "Tag toevoegen...", Cancel: "Afbreken", Close: "Sluiten", Edit: "Bewerken", Delete: "Verwijderen", Ok: "Ok" }, qv = { "Add a comment...": "Adicionar um comentário...", "Add a reply...": "Adicionar uma resposta...", "Add tag...": "Etiquetar...", Cancel: "Cancelar", Close: "Fechar", Edit: "Editar", Delete: "Apagar", Ok: "Ok" }, $v = { "Add a comment...": "Добавить комментарий...", "Add a reply...": "Добавить ответ...", "Add tag...": "Добавить тэг...", Cancel: "Отмена", Close: "Закрыть", Edit: "Редактировать", Delete: "Удалить", Ok: "Ок" }, Xv = { "Add a comment...": "Skriv en kommentar...", "Add a reply...": "Skriv ett svar...", "Add tag...": "Tagg...", Cancel: "Cancel", Close: "Stäng", Edit: "Edit", Delete: "Delete", Ok: "Ok" }, Yv = { "Add a comment...": "เพิ่มคอมเมนต์...", "Add a reply...": "ตอบกลับ...", "Add tag...": "เพิ่มแท็ก...", Cancel: "ยกเลิก", Close: "ปิด", Edit: "แก้ไข", Delete: "ลบ", Ok: "ตกลง" }, Zv = { "Add a comment...": "Yorum ekle...", "Add a reply...": "Cevap ekle...", "Add tag...": "Tag Ekle...", Cancel: "İptal", Close: "Kapat", Edit: "Düzenle", Delete: "Sil", Ok: "Tamam" }, Kv = { "Add a comment...": "تبصرہ کریں", "Add a reply...": "جواب دیں", "Add tag...": "ٹیگ لگائیں", Cancel: "منسوخ کریں", Close: "بند کریں", Edit: "ترمیم کریں", Delete: "ہٹائیں", Ok: "ٹھیک ہے" }, Jv = { "Add a comment...": "添加注释...", "Add a reply...": "添加回复...", "Add tag...": "标签...", Cancel: "取消", Close: "关闭", Edit: "编辑", Delete: "删除", Ok: "确认" }, Qv = { "Add a comment...": "添加评论...", "Add a reply...": "添加回复...", "Add tag...": "添加标签...", Cancel: "取消", Close: "关闭", Edit: "编辑", Delete: "删除", Ok: "确认" }, ey = { "Add a comment...": "添加評論...", "Add a reply...": "添加回覆...", "Add tag...": "添加標籤...", Cancel: "取消", Close: "關閉", Edit: "編輯", Delete: "刪除", Ok: "確認" }, _u = {};
    Object.defineProperty(_u, "__esModule", { value: !0 });
    var To = [["ثانية", "ثانيتين", "%s ثوان", "%s ثانية"], ["دقيقة", "دقيقتين", "%s دقائق", "%s دقيقة"], ["ساعة", "ساعتين", "%s ساعات", "%s ساعة"], ["يوم", "يومين", "%s أيام", "%s يوماً"], ["أسبوع", "أسبوعين", "%s أسابيع", "%s أسبوعاً"], ["شهر", "شهرين", "%s أشهر", "%s شهراً"], ["عام", "عامين", "%s أعوام", "%s عاماً"]];
    function ty(t, i) {
      return i < 3 ? To[t][i - 1] : i >= 3 && i <= 10 ? To[t][2] : To[t][3];
    }
    function ny(t, i) {
      if (i === 0)
        return ["منذ لحظات", "بعد لحظات"];
      var e = ty(Math.floor(i / 2), t);
      return ["منذ " + e, "بعد " + e];
    }
    var iy = _u.default = ny, Cu = {};
    Object.defineProperty(Cu, "__esModule", { value: !0 });
    function ry(t, i) {
      var e = 0, n = i == 1 || i == 3 || i == 5 || i == 7 || i == 9 || i == 11 || i == 13;
      return n && t >= 5 && (e = 1), [[["právě teď", "právě teď"]], [["před %s vteřinami", "za %s vteřiny"], ["před %s vteřinami", "za %s vteřin"]], [["před minutou", "za minutu"]], [["před %s minutami", "za %s minuty"], ["před %s minutami", "za %s minut"]], [["před hodinou", "za hodinu"]], [["před %s hodinami", "za %s hodiny"], ["před %s hodinami", "za %s hodin"]], [["včera", "zítra"]], [["před %s dny", "za %s dny"], ["před %s dny", "za %s dnů"]], [["minulý týden", "příští týden"]], [["před %s týdny", "za %s týdny"], ["před %s týdny", "za %s týdnů"]], [["minulý měsíc", "přístí měsíc"]], [["před %s měsíci", "za %s měsíce"], ["před %s měsíci", "za %s měsíců"]], [["před rokem", "přístí rok"]], [["před %s lety", "za %s roky"], ["před %s lety", "za %s let"]]][i][e];
    }
    var oy = Cu.default = ry, Tu = {};
    Object.defineProperty(Tu, "__esModule", { value: !0 });
    function sy(t, i) {
      return [["gerade eben", "vor einer Weile"], ["vor %s Sekunden", "in %s Sekunden"], ["vor 1 Minute", "in 1 Minute"], ["vor %s Minuten", "in %s Minuten"], ["vor 1 Stunde", "in 1 Stunde"], ["vor %s Stunden", "in %s Stunden"], ["vor 1 Tag", "in 1 Tag"], ["vor %s Tagen", "in %s Tagen"], ["vor 1 Woche", "in 1 Woche"], ["vor %s Wochen", "in %s Wochen"], ["vor 1 Monat", "in 1 Monat"], ["vor %s Monaten", "in %s Monaten"], ["vor 1 Jahr", "in 1 Jahr"], ["vor %s Jahren", "in %s Jahren"]][i];
    }
    var ay = Tu.default = sy, Au = {};
    Object.defineProperty(Au, "__esModule", { value: !0 });
    function ly(t, i) {
      return [["μόλις τώρα", "σε λίγο"], ["%s δευτερόλεπτα πριν", "σε %s δευτερόλεπτα"], ["1 λεπτό πριν", "σε 1 λεπτό"], ["%s λεπτά πριν", "σε %s λεπτά"], ["1 ώρα πριν", "σε 1 ώρα"], ["%s ώρες πριν", "σε %s ώρες"], ["1 μέρα πριν", "σε 1 μέρα"], ["%s μέρες πριν", "σε %s μέρες"], ["1 εβδομάδα πριν", "σε 1 εβδομάδα"], ["%s εβδομάδες πριν", "σε %s εβδομάδες"], ["1 μήνα πριν", "σε 1 μήνα"], ["%s μήνες πριν", "σε %s μήνες"], ["1 χρόνο πριν", "σε 1 χρόνο"], ["%s χρόνια πριν", "σε %s χρόνια"]][i];
    }
    var uy = Au.default = ly, Pu = {};
    Object.defineProperty(Pu, "__esModule", { value: !0 });
    function cy(t, i) {
      return [["justo ahora", "en un rato"], ["hace %s segundos", "en %s segundos"], ["hace 1 minuto", "en 1 minuto"], ["hace %s minutos", "en %s minutos"], ["hace 1 hora", "en 1 hora"], ["hace %s horas", "en %s horas"], ["hace 1 día", "en 1 día"], ["hace %s días", "en %s días"], ["hace 1 semana", "en 1 semana"], ["hace %s semanas", "en %s semanas"], ["hace 1 mes", "en 1 mes"], ["hace %s meses", "en %s meses"], ["hace 1 año", "en 1 año"], ["hace %s años", "en %s años"]][i];
    }
    var hy = Pu.default = cy, Du = {};
    Object.defineProperty(Du, "__esModule", { value: !0 });
    function dy(t, i) {
      return [["juuri äsken", "juuri nyt"], ["%s sekuntia sitten", "%s sekunnin päästä"], ["minuutti sitten", "minuutin päästä"], ["%s minuuttia sitten", "%s minuutin päästä"], ["tunti sitten", "tunnin päästä"], ["%s tuntia sitten", "%s tunnin päästä"], ["päivä sitten", "päivän päästä"], ["%s päivää sitten", "%s päivän päästä"], ["viikko sitten", "viikon päästä"], ["%s viikkoa sitten", "%s viikon päästä"], ["kuukausi sitten", "kuukauden päästä"], ["%s kuukautta sitten", "%s kuukauden päästä"], ["vuosi sitten", "vuoden päästä"], ["%s vuotta sitten", "%s vuoden päästä"]][i];
    }
    var py = Du.default = dy, Ou = {};
    Object.defineProperty(Ou, "__esModule", { value: !0 });
    function gy(t, i) {
      return [["à l'instant", "dans un instant"], ["il y a %s secondes", "dans %s secondes"], ["il y a 1 minute", "dans 1 minute"], ["il y a %s minutes", "dans %s minutes"], ["il y a 1 heure", "dans 1 heure"], ["il y a %s heures", "dans %s heures"], ["il y a 1 jour", "dans 1 jour"], ["il y a %s jours", "dans %s jours"], ["il y a 1 semaine", "dans 1 semaine"], ["il y a %s semaines", "dans %s semaines"], ["il y a 1 mois", "dans 1 mois"], ["il y a %s mois", "dans %s mois"], ["il y a 1 an", "dans 1 an"], ["il y a %s ans", "dans %s ans"]][i];
    }
    var fy = Ou.default = gy, Ru = {};
    Object.defineProperty(Ru, "__esModule", { value: !0 });
    function my(t, i) {
      return [["xusto agora", "daquí a un pouco"], ["hai %s segundos", "en %s segundos"], ["hai 1 minuto", "nun minuto"], ["hai %s minutos", "en %s minutos"], ["hai 1 hora", "nunha hora"], ["hai %s horas", "en %s horas"], ["hai 1 día", "nun día"], ["hai %s días", "en %s días"], ["hai 1 semana", "nunha semana"], ["hai %s semanas", "en %s semanas"], ["hai 1 mes", "nun mes"], ["hai %s meses", "en %s meses"], ["hai 1 ano", "nun ano"], ["hai %s anos", "en %s anos"]][i];
    }
    var vy = Ru.default = my, ku = {};
    Object.defineProperty(ku, "__esModule", { value: !0 });
    function yy(t, i) {
      return [["अभी", "कुछ समय"], ["%s सेकंड पहले", "%s सेकंड में"], ["1 मिनट पहले", "1 मिनट में"], ["%s मिनट पहले", "%s मिनट में"], ["1 घंटे पहले", "1 घंटे में"], ["%s घंटे पहले", "%s घंटे में"], ["1 दिन पहले", "1 दिन में"], ["%s दिन पहले", "%s दिनों में"], ["1 सप्ताह पहले", "1 सप्ताह में"], ["%s हफ्ते पहले", "%s हफ्तों में"], ["1 महीने पहले", "1 महीने में"], ["%s महीने पहले", "%s महीनों में"], ["1 साल पहले", "1 साल में"], ["%s साल पहले", "%s साल में"]][i];
    }
    var Ey = ku.default = yy, Bu = {};
    Object.defineProperty(Bu, "__esModule", { value: !0 });
    function wy(t, i) {
      return [["poco fa", "fra poco"], ["%s secondi fa", "fra %s secondi"], ["un minuto fa", "fra un minuto"], ["%s minuti fa", "fra %s minuti"], ["un'ora fa", "fra un'ora"], ["%s ore fa", "fra %s ore"], ["un giorno fa", "fra un giorno"], ["%s giorni fa", "fra %s giorni"], ["una settimana fa", "fra una settimana"], ["%s settimane fa", "fra %s settimane"], ["un mese fa", "fra un mese"], ["%s mesi fa", "fra %s mesi"], ["un anno fa", "fra un anno"], ["%s anni fa", "fra %s anni"]][i];
    }
    var by = Bu.default = wy, Fu = {};
    Object.defineProperty(Fu, "__esModule", { value: !0 });
    function xy(t, i) {
      return [["すこし前", "すぐに"], ["%s秒前", "%s秒以内"], ["1分前", "1分以内"], ["%s分前", "%s分以内"], ["1時間前", "1時間以内"], ["%s時間前", "%s時間以内"], ["1日前", "1日以内"], ["%s日前", "%s日以内"], ["1週間前", "1週間以内"], ["%s週間前", "%s週間以内"], ["1ヶ月前", "1ヶ月以内"], ["%sヶ月前", "%sヶ月以内"], ["1年前", "1年以内"], ["%s年前", "%s年以内"]][i];
    }
    var Sy = Fu.default = xy, Mu = {};
    Object.defineProperty(Mu, "__esModule", { value: !0 });
    function _y(t, i) {
      return [["방금", "곧"], ["%s초 전", "%s초 후"], ["1분 전", "1분 후"], ["%s분 전", "%s분 후"], ["1시간 전", "1시간 후"], ["%s시간 전", "%s시간 후"], ["1일 전", "1일 후"], ["%s일 전", "%s일 후"], ["1주일 전", "1주일 후"], ["%s주일 전", "%s주일 후"], ["1개월 전", "1개월 후"], ["%s개월 전", "%s개월 후"], ["1년 전", "1년 후"], ["%s년 전", "%s년 후"]][i];
    }
    var Cy = Mu.default = _y, Iu = {};
    Object.defineProperty(Iu, "__esModule", { value: !0 });
    function Ty(t, i) {
      return [["recent", "binnenkort"], ["%s seconden geleden", "binnen %s seconden"], ["1 minuut geleden", "binnen 1 minuut"], ["%s minuten geleden", "binnen %s minuten"], ["1 uur geleden", "binnen 1 uur"], ["%s uur geleden", "binnen %s uur"], ["1 dag geleden", "binnen 1 dag"], ["%s dagen geleden", "binnen %s dagen"], ["1 week geleden", "binnen 1 week"], ["%s weken geleden", "binnen %s weken"], ["1 maand geleden", "binnen 1 maand"], ["%s maanden geleden", "binnen %s maanden"], ["1 jaar geleden", "binnen 1 jaar"], ["%s jaar geleden", "binnen %s jaar"]][i];
    }
    var Ay = Iu.default = Ty, Lu = {};
    Object.defineProperty(Lu, "__esModule", { value: !0 });
    function Py(t, i) {
      return [["agora mesmo", "agora"], ["há %s segundos", "em %s segundos"], ["há um minuto", "em um minuto"], ["há %s minutos", "em %s minutos"], ["há uma hora", "em uma hora"], ["há %s horas", "em %s horas"], ["há um dia", "em um dia"], ["há %s dias", "em %s dias"], ["há uma semana", "em uma semana"], ["há %s semanas", "em %s semanas"], ["há um mês", "em um mês"], ["há %s meses", "em %s meses"], ["há um ano", "em um ano"], ["há %s anos", "em %s anos"]][i];
    }
    var Dy = Lu.default = Py, Nu = {};
    Object.defineProperty(Nu, "__esModule", { value: !0 });
    function It(t, i, e, n, r) {
      var o = r % 10, s = n;
      return r === 1 ? s = t : o === 1 && r > 20 ? s = i : o > 1 && o < 5 && (r > 20 || r < 10) && (s = e), s;
    }
    var Hu = It.bind(null, "секунду", "%s секунду", "%s секунды", "%s секунд"), zu = It.bind(null, "минуту", "%s минуту", "%s минуты", "%s минут"), ju = It.bind(null, "час", "%s час", "%s часа", "%s часов"), Uu = It.bind(null, "день", "%s день", "%s дня", "%s дней"), Vu = It.bind(null, "неделю", "%s неделю", "%s недели", "%s недель"), Wu = It.bind(null, "месяц", "%s месяц", "%s месяца", "%s месяцев"), Gu = It.bind(null, "год", "%s год", "%s года", "%s лет");
    function Oy(t, i) {
      switch (i) {
        case 0:
          return ["только что", "через несколько секунд"];
        case 1:
          return [Hu(t) + " назад", "через " + Hu(t)];
        case 2:
        case 3:
          return [zu(t) + " назад", "через " + zu(t)];
        case 4:
        case 5:
          return [ju(t) + " назад", "через " + ju(t)];
        case 6:
          return ["вчера", "завтра"];
        case 7:
          return [Uu(t) + " назад", "через " + Uu(t)];
        case 8:
        case 9:
          return [Vu(t) + " назад", "через " + Vu(t)];
        case 10:
        case 11:
          return [Wu(t) + " назад", "через " + Wu(t)];
        case 12:
        case 13:
          return [Gu(t) + " назад", "через " + Gu(t)];
        default:
          return ["", ""];
      }
    }
    var Ry = Nu.default = Oy, qu = {};
    Object.defineProperty(qu, "__esModule", { value: !0 });
    function ky(t, i) {
      return [["just nu", "om en stund"], ["%s sekunder sedan", "om %s sekunder"], ["1 minut sedan", "om 1 minut"], ["%s minuter sedan", "om %s minuter"], ["1 timme sedan", "om 1 timme"], ["%s timmar sedan", "om %s timmar"], ["1 dag sedan", "om 1 dag"], ["%s dagar sedan", "om %s dagar"], ["1 vecka sedan", "om 1 vecka"], ["%s veckor sedan", "om %s veckor"], ["1 månad sedan", "om 1 månad"], ["%s månader sedan", "om %s månader"], ["1 år sedan", "om 1 år"], ["%s år sedan", "om %s år"]][i];
    }
    var By = qu.default = ky, $u = {};
    Object.defineProperty($u, "__esModule", { value: !0 });
    function Fy(t, i) {
      return [["เมื่อสักครู่นี้", "อีกสักครู่"], ["%s วินาทีที่แล้ว", "ใน %s วินาที"], ["1 นาทีที่แล้ว", "ใน 1 นาที"], ["%s นาทีที่แล้ว", "ใน %s นาที"], ["1 ชั่วโมงที่แล้ว", "ใน 1 ชั่วโมง"], ["%s ชั่วโมงที่แล้ว", "ใน %s ชั่วโมง"], ["1 วันที่แล้ว", "ใน 1 วัน"], ["%s วันที่แล้ว", "ใน %s วัน"], ["1 อาทิตย์ที่แล้ว", "ใน 1 อาทิตย์"], ["%s อาทิตย์ที่แล้ว", "ใน %s อาทิตย์"], ["1 เดือนที่แล้ว", "ใน 1 เดือน"], ["%s เดือนที่แล้ว", "ใน %s เดือน"], ["1 ปีที่แล้ว", "ใน 1 ปี"], ["%s ปีที่แล้ว", "ใน %s ปี"]][i];
    }
    var My = $u.default = Fy, Xu = {};
    Object.defineProperty(Xu, "__esModule", { value: !0 });
    function Iy(t, i) {
      return [["az önce", "şimdi"], ["%s saniye önce", "%s saniye içinde"], ["1 dakika önce", "1 dakika içinde"], ["%s dakika önce", "%s dakika içinde"], ["1 saat önce", "1 saat içinde"], ["%s saat önce", "%s saat içinde"], ["1 gün önce", "1 gün içinde"], ["%s gün önce", "%s gün içinde"], ["1 hafta önce", "1 hafta içinde"], ["%s hafta önce", "%s hafta içinde"], ["1 ay önce", "1 ay içinde"], ["%s ay önce", "%s ay içinde"], ["1 yıl önce", "1 yıl içinde"], ["%s yıl önce", "%s yıl içinde"]][i];
    }
    var Ly = Xu.default = Iy, Yu = {};
    Object.defineProperty(Yu, "__esModule", { value: !0 });
    var Ny = ["秒", "分钟", "小时", "天", "周", "个月", "年"];
    function Hy(t, i) {
      if (i === 0)
        return ["刚刚", "片刻后"];
      var e = Ny[~~(i / 2)];
      return [t + " " + e + "前", t + " " + e + "后"];
    }
    var Zu = Yu.default = Hy, Ku = {};
    Object.defineProperty(Ku, "__esModule", { value: !0 });
    function zy(t, i) {
      return [["剛剛", "片刻後"], ["%s 秒前", "%s 秒後"], ["1 分鐘前", "1 分鐘後"], ["%s 分鐘前", "%s 分鐘後"], ["1 小時前", "1 小時後"], ["%s 小時前", "%s 小時後"], ["1 天前", "1 天後"], ["%s 天前", "%s 天後"], ["1 週前", "1 週後"], ["%s 週前", "%s 週後"], ["1 個月前", "1 個月後"], ["%s 個月前", "%s 個月後"], ["1 年前", "1 年後"], ["%s 年前", "%s 年後"]][i];
    }
    var jy = Ku.default = zy;
    const ln = { ar: Bv, cs: Fv, de: Mv, el: Iv, es: Lv, fi: Nv, fr: Hv, gl: zv, hi: jv, it: Uv, ja: Vv, ko: Wv, nl: Gv, pt: qv, ru: $v, sv: Xv, th: Yv, tr: Zv, ur: Kv, zh: Jv, "zh-CN": Qv, "zh-TW": ey }, Uy = Object.keys(ln), Lt = new kv({ allowMissing: !0 });
    Lt.init = (t, i) => {
      Lt.clear(), t && (Lt.locale(t), Lt.extend(ln[t])), i && Lt.extend(i);
    }, fe("ar", iy), fe("cs", oy), fe("de", ay), fe("el", uy), fe("es", hy), fe("fi", py), fe("fr", fy), fe("gl", vy), fe("hi", Ey), fe("it", by), fe("ja", Sy), fe("ko", Cy), fe("nl", Ay), fe("pt", Dy), fe("ru", Ry), fe("sv", By), fe("th", My), fe("tr", Ly), fe("zh", Zu), fe("zh-CN", Zu), fe("zh-TW", jy), Lt.registerMessages = (t, i) => {
      ln[t] ? ln[t] = { ...ln[t], ...i } : ln[t] = i;
    };
    var je = Lt, Vy = (t) => {
      const i = Je();
      return Ip(i, () => t.onClickOutside()), B.createElement("ul", { ref: i, className: "r6o-comment-dropdown-menu" }, B.createElement("li", { onClick: t.onEdit }, je.t("Edit")), B.createElement("li", { onClick: t.onDelete }, je.t("Delete")));
    }, Ju = {}, Ao = {}, Po = { exports: {} };
    /*!
    	autosize 4.0.4
    	license: MIT
    	http://www.jacklmoore.com/autosize
    */
    (function(t, i) {
      (function(e, n) {
        n(t, i);
      })(dt, function(e, n) {
        var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : /* @__PURE__ */ function() {
          var c = [], h = [];
          return { has: function(d) {
            return c.indexOf(d) > -1;
          }, get: function(d) {
            return h[c.indexOf(d)];
          }, set: function(d, m) {
            c.indexOf(d) === -1 && (c.push(d), h.push(m));
          }, delete: function(d) {
            var m = c.indexOf(d);
            m > -1 && (c.splice(m, 1), h.splice(m, 1));
          } };
        }(), o = function(c) {
          return new Event(c, { bubbles: !0 });
        };
        try {
          new Event("test");
        } catch {
          o = function(c) {
            var h = document.createEvent("Event");
            return h.initEvent(c, !0, !1), h;
          };
        }
        function s(c) {
          if (!c || !c.nodeName || c.nodeName !== "TEXTAREA" || r.has(c))
            return;
          var h = null, d = null, m = null;
          function y() {
            var C = window.getComputedStyle(c, null);
            C.resize === "vertical" ? c.style.resize = "none" : C.resize === "both" && (c.style.resize = "horizontal"), C.boxSizing === "content-box" ? h = -(parseFloat(C.paddingTop) + parseFloat(C.paddingBottom)) : h = parseFloat(C.borderTopWidth) + parseFloat(C.borderBottomWidth), isNaN(h) && (h = 0), p();
          }
          function S(C) {
            {
              var O = c.style.width;
              c.style.width = "0px", c.offsetWidth, c.style.width = O;
            }
            c.style.overflowY = C;
          }
          function b(C) {
            for (var O = []; C && C.parentNode && C.parentNode instanceof Element; )
              C.parentNode.scrollTop && O.push({ node: C.parentNode, scrollTop: C.parentNode.scrollTop }), C = C.parentNode;
            return O;
          }
          function A() {
            if (c.scrollHeight !== 0) {
              var C = b(c), O = document.documentElement && document.documentElement.scrollTop;
              c.style.height = "", c.style.height = c.scrollHeight + h + "px", d = c.clientWidth, C.forEach(function(D) {
                D.node.scrollTop = D.scrollTop;
              }), O && (document.documentElement.scrollTop = O);
            }
          }
          function p() {
            A();
            var C = Math.round(parseFloat(c.style.height)), O = window.getComputedStyle(c, null), D = O.boxSizing === "content-box" ? Math.round(parseFloat(O.height)) : c.offsetHeight;
            if (D < C ? O.overflowY === "hidden" && (S("scroll"), A(), D = O.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(c, null).height)) : c.offsetHeight) : O.overflowY !== "hidden" && (S("hidden"), A(), D = O.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(c, null).height)) : c.offsetHeight), m !== D) {
              m = D;
              var F = o("autosize:resized");
              try {
                c.dispatchEvent(F);
              } catch {
              }
            }
          }
          var E = function() {
            c.clientWidth !== d && p();
          }, T = (function(C) {
            window.removeEventListener("resize", E, !1), c.removeEventListener("input", p, !1), c.removeEventListener("keyup", p, !1), c.removeEventListener("autosize:destroy", T, !1), c.removeEventListener("autosize:update", p, !1), Object.keys(C).forEach(function(O) {
              c.style[O] = C[O];
            }), r.delete(c);
          }).bind(c, { height: c.style.height, resize: c.style.resize, overflowY: c.style.overflowY, overflowX: c.style.overflowX, wordWrap: c.style.wordWrap });
          c.addEventListener("autosize:destroy", T, !1), "onpropertychange" in c && "oninput" in c && c.addEventListener("keyup", p, !1), window.addEventListener("resize", E, !1), c.addEventListener("input", p, !1), c.addEventListener("autosize:update", p, !1), c.style.overflowX = "hidden", c.style.wordWrap = "break-word", r.set(c, { destroy: T, update: p }), y();
        }
        function a(c) {
          var h = r.get(c);
          h && h.destroy();
        }
        function l(c) {
          var h = r.get(c);
          h && h.update();
        }
        var u = null;
        typeof window > "u" || typeof window.getComputedStyle != "function" ? (u = function(c) {
          return c;
        }, u.destroy = function(c) {
          return c;
        }, u.update = function(c) {
          return c;
        }) : (u = function(c, h) {
          return c && Array.prototype.forEach.call(c.length ? c : [c], function(d) {
            return s(d);
          }), c;
        }, u.destroy = function(c) {
          return c && Array.prototype.forEach.call(c.length ? c : [c], a), c;
        }, u.update = function(c) {
          return c && Array.prototype.forEach.call(c.length ? c : [c], l), c;
        }), n.default = u, e.exports = n.default;
      });
    })(Po, Po.exports);
    var Wy = function(t, i, e) {
      return e = window.getComputedStyle, (e ? e(t) : t.currentStyle)[i.replace(/-(\w)/gi, function(n, r) {
        return r.toUpperCase();
      })];
    }, Gy = Wy, Do = Gy;
    function qy(t) {
      var i = Do(t, "line-height"), e = parseFloat(i, 10);
      if (i === e + "") {
        var n = t.style.lineHeight;
        t.style.lineHeight = i + "em", i = Do(t, "line-height"), e = parseFloat(i, 10), n ? t.style.lineHeight = n : delete t.style.lineHeight;
      }
      if (i.indexOf("pt") !== -1 ? (e *= 4, e /= 3) : i.indexOf("mm") !== -1 ? (e *= 96, e /= 25.4) : i.indexOf("cm") !== -1 ? (e *= 96, e /= 2.54) : i.indexOf("in") !== -1 ? e *= 96 : i.indexOf("pc") !== -1 && (e *= 16), e = Math.round(e), i === "normal") {
        var r = t.nodeName, o = document.createElement(r);
        o.innerHTML = "&nbsp;", r.toUpperCase() === "TEXTAREA" && o.setAttribute("rows", "1");
        var s = Do(t, "font-size");
        o.style.fontSize = s, o.style.padding = "0px", o.style.border = "0px";
        var a = document.body;
        a.appendChild(o);
        var l = o.offsetHeight;
        e = l, a.removeChild(o);
      }
      return e;
    }
    var $y = qy, Xy = dt && dt.__extends || function() {
      var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, e) {
        i.__proto__ = e;
      } || function(i, e) {
        for (var n in e)
          e.hasOwnProperty(n) && (i[n] = e[n]);
      };
      return function(i, e) {
        t(i, e);
        function n() {
          this.constructor = i;
        }
        i.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
      };
    }(), Oo = dt && dt.__assign || Object.assign || function(t) {
      for (var i, e = 1, n = arguments.length; e < n; e++) {
        i = arguments[e];
        for (var r in i)
          Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
      }
      return t;
    }, Yy = dt && dt.__rest || function(t, i) {
      var e = {};
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && i.indexOf(n) < 0 && (e[n] = t[n]);
      if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++)
          i.indexOf(n[r]) < 0 && (e[n[r]] = t[n[r]]);
      return e;
    };
    Ao.__esModule = !0;
    var Di = Zt, Un = kn.exports, Oi = Po.exports, Zy = $y, Ky = Zy, Qu = "autosize:resized", Jy = function(t) {
      Xy(i, t);
      function i() {
        var e = t !== null && t.apply(this, arguments) || this;
        return e.state = { lineHeight: null }, e.textarea = null, e.onResize = function(n) {
          e.props.onResize && e.props.onResize(n);
        }, e.updateLineHeight = function() {
          e.textarea && e.setState({ lineHeight: Ky(e.textarea) });
        }, e.onChange = function(n) {
          var r = e.props.onChange;
          e.currentValue = n.currentTarget.value, r && r(n);
        }, e;
      }
      return i.prototype.componentDidMount = function() {
        var e = this, n = this.props, r = n.maxRows, o = n.async;
        typeof r == "number" && this.updateLineHeight(), typeof r == "number" || o ? setTimeout(function() {
          return e.textarea && Oi(e.textarea);
        }) : this.textarea && Oi(this.textarea), this.textarea && this.textarea.addEventListener(Qu, this.onResize);
      }, i.prototype.componentWillUnmount = function() {
        this.textarea && (this.textarea.removeEventListener(Qu, this.onResize), Oi.destroy(this.textarea));
      }, i.prototype.render = function() {
        var e = this, n = this, r = n.props;
        r.onResize;
        var o = r.maxRows;
        r.onChange;
        var s = r.style;
        r.innerRef;
        var a = r.children, l = Yy(r, ["onResize", "maxRows", "onChange", "style", "innerRef", "children"]), u = n.state.lineHeight, c = o && u ? u * o : null;
        return Di.createElement("textarea", Oo({}, l, { onChange: this.onChange, style: c ? Oo({}, s, { maxHeight: c }) : s, ref: function(h) {
          e.textarea = h, typeof e.props.innerRef == "function" ? e.props.innerRef(h) : e.props.innerRef && (e.props.innerRef.current = h);
        } }), a);
      }, i.prototype.componentDidUpdate = function() {
        this.textarea && Oi.update(this.textarea);
      }, i.defaultProps = { rows: 1, async: !1 }, i.propTypes = { rows: Un.number, maxRows: Un.number, onResize: Un.func, innerRef: Un.any, async: Un.bool }, i;
    }(Di.Component);
    Ao.TextareaAutosize = Di.forwardRef(function(t, i) {
      return Di.createElement(Jy, Oo({}, t, { innerRef: i }));
    }), function(t) {
      t.__esModule = !0;
      var i = Ao;
      t.default = i.TextareaAutosize;
    }(Ju);
    var Qy = Bd(Ju);
    class ec extends we {
      constructor(i) {
        super(i), P(this, "onKeyDown", (e) => {
          e.which === 13 && e.ctrlKey && this.props.onSaveAndClose();
        }), P(this, "onKeyUp", (e) => {
          e.which === 46 && e.stopPropagation();
        }), this.element = Er();
      }
      componentDidMount() {
        this.props.focus && this.element.current && this.element.current.focus({ preventScroll: !0 });
      }
      render() {
        return B.createElement(Qy, { ref: this.element, className: "r6o-editable-text", value: this.props.content, placeholder: this.props.placeholder || je.t("Add a comment..."), disabled: !this.props.editable, onChange: this.props.onChange, onKeyUp: this.onKeyUp, onKeyDown: this.onKeyDown });
      }
    }
    function Z() {
      return Z = Object.assign ? Object.assign.bind() : function(t) {
        for (var i = 1; i < arguments.length; i++) {
          var e = arguments[i];
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        }
        return t;
      }, Z.apply(this, arguments);
    }
    function e1(t) {
      if (t.sheet)
        return t.sheet;
      for (var i = 0; i < document.styleSheets.length; i++)
        if (document.styleSheets[i].ownerNode === t)
          return document.styleSheets[i];
    }
    function t1(t) {
      var i = document.createElement("style");
      return i.setAttribute("data-emotion", t.key), t.nonce !== void 0 && i.setAttribute("nonce", t.nonce), i.appendChild(document.createTextNode("")), i.setAttribute("data-s", ""), i;
    }
    var n1 = function() {
      function t(e) {
        var n = this;
        this._insertTag = function(r) {
          var o;
          n.tags.length === 0 ? n.insertionPoint ? o = n.insertionPoint.nextSibling : n.prepend ? o = n.container.firstChild : o = n.before : o = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(r, o), n.tags.push(r);
        }, this.isSpeedy = e.speedy === void 0 ? !0 : e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null;
      }
      var i = t.prototype;
      return i.hydrate = function(e) {
        e.forEach(this._insertTag);
      }, i.insert = function(e) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(t1(this));
        var n = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var r = e1(n);
          try {
            r.insertRule(e, r.cssRules.length);
          } catch {
          }
        } else
          n.appendChild(document.createTextNode(e));
        this.ctr++;
      }, i.flush = function() {
        this.tags.forEach(function(e) {
          return e.parentNode && e.parentNode.removeChild(e);
        }), this.tags = [], this.ctr = 0;
      }, t;
    }(), Fe = "-ms-", Ri = "-moz-", le = "-webkit-", tc = "comm", Ro = "rule", ko = "decl", i1 = "@import", nc = "@keyframes", r1 = "@layer", o1 = Math.abs, ki = String.fromCharCode, s1 = Object.assign;
    function a1(t, i) {
      return Pe(t, 0) ^ 45 ? (((i << 2 ^ Pe(t, 0)) << 2 ^ Pe(t, 1)) << 2 ^ Pe(t, 2)) << 2 ^ Pe(t, 3) : 0;
    }
    function ic(t) {
      return t.trim();
    }
    function l1(t, i) {
      return (t = i.exec(t)) ? t[0] : t;
    }
    function ue(t, i, e) {
      return t.replace(i, e);
    }
    function Bo(t, i) {
      return t.indexOf(i);
    }
    function Pe(t, i) {
      return t.charCodeAt(i) | 0;
    }
    function Vn(t, i, e) {
      return t.slice(i, e);
    }
    function it(t) {
      return t.length;
    }
    function Fo(t) {
      return t.length;
    }
    function Bi(t, i) {
      return i.push(t), t;
    }
    function u1(t, i) {
      return t.map(i).join("");
    }
    var Fi = 1, un = 1, rc = 0, Ne = 0, Ee = 0, cn = "";
    function Mi(t, i, e, n, r, o, s) {
      return { value: t, root: i, parent: e, type: n, props: r, children: o, line: Fi, column: un, length: s, return: "" };
    }
    function Wn(t, i) {
      return s1(Mi("", null, null, "", null, null, 0), t, { length: -t.length }, i);
    }
    function c1() {
      return Ee;
    }
    function h1() {
      return Ee = Ne > 0 ? Pe(cn, --Ne) : 0, un--, Ee === 10 && (un = 1, Fi--), Ee;
    }
    function Ue() {
      return Ee = Ne < rc ? Pe(cn, Ne++) : 0, un++, Ee === 10 && (un = 1, Fi++), Ee;
    }
    function rt() {
      return Pe(cn, Ne);
    }
    function Ii() {
      return Ne;
    }
    function Gn(t, i) {
      return Vn(cn, t, i);
    }
    function qn(t) {
      switch (t) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
          return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
          return 4;
        case 58:
          return 3;
        case 34:
        case 39:
        case 40:
        case 91:
          return 2;
        case 41:
        case 93:
          return 1;
      }
      return 0;
    }
    function oc(t) {
      return Fi = un = 1, rc = it(cn = t), Ne = 0, [];
    }
    function sc(t) {
      return cn = "", t;
    }
    function Li(t) {
      return ic(Gn(Ne - 1, Mo(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
    }
    function d1(t) {
      for (; (Ee = rt()) && Ee < 33; )
        Ue();
      return qn(t) > 2 || qn(Ee) > 3 ? "" : " ";
    }
    function p1(t, i) {
      for (; --i && Ue() && !(Ee < 48 || Ee > 102 || Ee > 57 && Ee < 65 || Ee > 70 && Ee < 97); )
        ;
      return Gn(t, Ii() + (i < 6 && rt() == 32 && Ue() == 32));
    }
    function Mo(t) {
      for (; Ue(); )
        switch (Ee) {
          case t:
            return Ne;
          case 34:
          case 39:
            t !== 34 && t !== 39 && Mo(Ee);
            break;
          case 40:
            t === 41 && Mo(t);
            break;
          case 92:
            Ue();
            break;
        }
      return Ne;
    }
    function g1(t, i) {
      for (; Ue() && t + Ee !== 57 && !(t + Ee === 84 && rt() === 47); )
        ;
      return "/*" + Gn(i, Ne - 1) + "*" + ki(t === 47 ? t : Ue());
    }
    function f1(t) {
      for (; !qn(rt()); )
        Ue();
      return Gn(t, Ne);
    }
    function m1(t) {
      return sc(Ni("", null, null, null, [""], t = oc(t), 0, [0], t));
    }
    function Ni(t, i, e, n, r, o, s, a, l) {
      for (var u = 0, c = 0, h = s, d = 0, m = 0, y = 0, S = 1, b = 1, A = 1, p = 0, E = "", T = r, C = o, O = n, D = E; b; )
        switch (y = p, p = Ue()) {
          case 40:
            if (y != 108 && Pe(D, h - 1) == 58) {
              Bo(D += ue(Li(p), "&", "&\f"), "&\f") != -1 && (A = -1);
              break;
            }
          case 34:
          case 39:
          case 91:
            D += Li(p);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            D += d1(y);
            break;
          case 92:
            D += p1(Ii() - 1, 7);
            continue;
          case 47:
            switch (rt()) {
              case 42:
              case 47:
                Bi(v1(g1(Ue(), Ii()), i, e), l);
                break;
              default:
                D += "/";
            }
            break;
          case 123 * S:
            a[u++] = it(D) * A;
          case 125 * S:
          case 59:
          case 0:
            switch (p) {
              case 0:
              case 125:
                b = 0;
              case 59 + c:
                A == -1 && (D = ue(D, /\f/g, "")), m > 0 && it(D) - h && Bi(m > 32 ? lc(D + ";", n, e, h - 1) : lc(ue(D, " ", "") + ";", n, e, h - 2), l);
                break;
              case 59:
                D += ";";
              default:
                if (Bi(O = ac(D, i, e, u, c, r, a, E, T = [], C = [], h), o), p === 123)
                  if (c === 0)
                    Ni(D, i, O, O, T, o, h, a, C);
                  else
                    switch (d === 99 && Pe(D, 3) === 110 ? 100 : d) {
                      case 100:
                      case 108:
                      case 109:
                      case 115:
                        Ni(t, O, O, n && Bi(ac(t, O, O, 0, 0, r, a, E, r, T = [], h), C), r, C, h, a, n ? T : C);
                        break;
                      default:
                        Ni(D, O, O, O, [""], C, 0, a, C);
                    }
            }
            u = c = m = 0, S = A = 1, E = D = "", h = s;
            break;
          case 58:
            h = 1 + it(D), m = y;
          default:
            if (S < 1) {
              if (p == 123)
                --S;
              else if (p == 125 && S++ == 0 && h1() == 125)
                continue;
            }
            switch (D += ki(p), p * S) {
              case 38:
                A = c > 0 ? 1 : (D += "\f", -1);
                break;
              case 44:
                a[u++] = (it(D) - 1) * A, A = 1;
                break;
              case 64:
                rt() === 45 && (D += Li(Ue())), d = rt(), c = h = it(E = D += f1(Ii())), p++;
                break;
              case 45:
                y === 45 && it(D) == 2 && (S = 0);
            }
        }
      return o;
    }
    function ac(t, i, e, n, r, o, s, a, l, u, c) {
      for (var h = r - 1, d = r === 0 ? o : [""], m = Fo(d), y = 0, S = 0, b = 0; y < n; ++y)
        for (var A = 0, p = Vn(t, h + 1, h = o1(S = s[y])), E = t; A < m; ++A)
          (E = ic(S > 0 ? d[A] + " " + p : ue(p, /&\f/g, d[A]))) && (l[b++] = E);
      return Mi(t, i, e, r === 0 ? Ro : a, l, u, c);
    }
    function v1(t, i, e) {
      return Mi(t, i, e, tc, ki(c1()), Vn(t, 2, -2), 0);
    }
    function lc(t, i, e, n) {
      return Mi(t, i, e, ko, Vn(t, 0, n), Vn(t, n + 1, -1), n);
    }
    function hn(t, i) {
      for (var e = "", n = Fo(t), r = 0; r < n; r++)
        e += i(t[r], r, t, i) || "";
      return e;
    }
    function y1(t, i, e, n) {
      switch (t.type) {
        case r1:
          if (t.children.length)
            break;
        case i1:
        case ko:
          return t.return = t.return || t.value;
        case tc:
          return "";
        case nc:
          return t.return = t.value + "{" + hn(t.children, n) + "}";
        case Ro:
          t.value = t.props.join(",");
      }
      return it(e = hn(t.children, n)) ? t.return = t.value + "{" + e + "}" : "";
    }
    function E1(t) {
      var i = Fo(t);
      return function(e, n, r, o) {
        for (var s = "", a = 0; a < i; a++)
          s += t[a](e, n, r, o) || "";
        return s;
      };
    }
    function w1(t) {
      return function(i) {
        i.root || (i = i.return) && t(i);
      };
    }
    function b1(t) {
      var i = /* @__PURE__ */ Object.create(null);
      return function(e) {
        return i[e] === void 0 && (i[e] = t(e)), i[e];
      };
    }
    var x1 = function(t, i, e) {
      for (var n = 0, r = 0; n = r, r = rt(), n === 38 && r === 12 && (i[e] = 1), !qn(r); )
        Ue();
      return Gn(t, Ne);
    }, S1 = function(t, i) {
      var e = -1, n = 44;
      do
        switch (qn(n)) {
          case 0:
            n === 38 && rt() === 12 && (i[e] = 1), t[e] += x1(Ne - 1, i, e);
            break;
          case 2:
            t[e] += Li(n);
            break;
          case 4:
            if (n === 44) {
              t[++e] = rt() === 58 ? "&\f" : "", i[e] = t[e].length;
              break;
            }
          default:
            t[e] += ki(n);
        }
      while (n = Ue());
      return t;
    }, _1 = function(t, i) {
      return sc(S1(oc(t), i));
    }, uc = /* @__PURE__ */ new WeakMap(), C1 = function(t) {
      if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
        for (var i = t.value, e = t.parent, n = t.column === e.column && t.line === e.line; e.type !== "rule"; )
          if (e = e.parent, !e)
            return;
        if (!(t.props.length === 1 && i.charCodeAt(0) !== 58 && !uc.get(e)) && !n) {
          uc.set(t, !0);
          for (var r = [], o = _1(i, r), s = e.props, a = 0, l = 0; a < o.length; a++)
            for (var u = 0; u < s.length; u++, l++)
              t.props[l] = r[a] ? o[a].replace(/&\f/g, s[u]) : s[u] + " " + o[a];
        }
      }
    }, T1 = function(t) {
      if (t.type === "decl") {
        var i = t.value;
        i.charCodeAt(0) === 108 && i.charCodeAt(2) === 98 && (t.return = "", t.value = "");
      }
    };
    function cc(t, i) {
      switch (a1(t, i)) {
        case 5103:
          return le + "print-" + t + t;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
          return le + t + t;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
          return le + t + Ri + t + Fe + t + t;
        case 6828:
        case 4268:
          return le + t + Fe + t + t;
        case 6165:
          return le + t + Fe + "flex-" + t + t;
        case 5187:
          return le + t + ue(t, /(\w+).+(:[^]+)/, le + "box-$1$2" + Fe + "flex-$1$2") + t;
        case 5443:
          return le + t + Fe + "flex-item-" + ue(t, /flex-|-self/, "") + t;
        case 4675:
          return le + t + Fe + "flex-line-pack" + ue(t, /align-content|flex-|-self/, "") + t;
        case 5548:
          return le + t + Fe + ue(t, "shrink", "negative") + t;
        case 5292:
          return le + t + Fe + ue(t, "basis", "preferred-size") + t;
        case 6060:
          return le + "box-" + ue(t, "-grow", "") + le + t + Fe + ue(t, "grow", "positive") + t;
        case 4554:
          return le + ue(t, /([^-])(transform)/g, "$1" + le + "$2") + t;
        case 6187:
          return ue(ue(ue(t, /(zoom-|grab)/, le + "$1"), /(image-set)/, le + "$1"), t, "") + t;
        case 5495:
        case 3959:
          return ue(t, /(image-set\([^]*)/, le + "$1$`$1");
        case 4968:
          return ue(ue(t, /(.+:)(flex-)?(.*)/, le + "box-pack:$3" + Fe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + le + t + t;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
          return ue(t, /(.+)-inline(.+)/, le + "$1$2") + t;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
          if (it(t) - 1 - i > 6)
            switch (Pe(t, i + 1)) {
              case 109:
                if (Pe(t, i + 4) !== 45)
                  break;
              case 102:
                return ue(t, /(.+:)(.+)-([^]+)/, "$1" + le + "$2-$3$1" + Ri + (Pe(t, i + 3) == 108 ? "$3" : "$2-$3")) + t;
              case 115:
                return ~Bo(t, "stretch") ? cc(ue(t, "stretch", "fill-available"), i) + t : t;
            }
          break;
        case 4949:
          if (Pe(t, i + 1) !== 115)
            break;
        case 6444:
          switch (Pe(t, it(t) - 3 - (~Bo(t, "!important") && 10))) {
            case 107:
              return ue(t, ":", ":" + le) + t;
            case 101:
              return ue(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + le + (Pe(t, 14) === 45 ? "inline-" : "") + "box$3$1" + le + "$2$3$1" + Fe + "$2box$3") + t;
          }
          break;
        case 5936:
          switch (Pe(t, i + 11)) {
            case 114:
              return le + t + Fe + ue(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
            case 108:
              return le + t + Fe + ue(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
            case 45:
              return le + t + Fe + ue(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
          }
          return le + t + Fe + t + t;
      }
      return t;
    }
    var A1 = function(t, i, e, n) {
      if (t.length > -1 && !t.return)
        switch (t.type) {
          case ko:
            t.return = cc(t.value, t.length);
            break;
          case nc:
            return hn([Wn(t, { value: ue(t.value, "@", "@" + le) })], n);
          case Ro:
            if (t.length)
              return u1(t.props, function(r) {
                switch (l1(r, /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    return hn([Wn(t, { props: [ue(r, /:(read-\w+)/, ":" + Ri + "$1")] })], n);
                  case "::placeholder":
                    return hn([Wn(t, { props: [ue(r, /:(plac\w+)/, ":" + le + "input-$1")] }), Wn(t, { props: [ue(r, /:(plac\w+)/, ":" + Ri + "$1")] }), Wn(t, { props: [ue(r, /:(plac\w+)/, Fe + "input-$1")] })], n);
                }
                return "";
              });
        }
    }, P1 = [A1], D1 = function(t) {
      var i = t.key;
      if (i === "css") {
        var e = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(e, function(y) {
          var S = y.getAttribute("data-emotion");
          S.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
        });
      }
      var n = t.stylisPlugins || P1, r = {}, o, s = [];
      o = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + i + ' "]'), function(y) {
        for (var S = y.getAttribute("data-emotion").split(" "), b = 1; b < S.length; b++)
          r[S[b]] = !0;
        s.push(y);
      });
      var a, l = [C1, T1];
      {
        var u, c = [y1, w1(function(y) {
          u.insert(y);
        })], h = E1(l.concat(n, c)), d = function(y) {
          return hn(m1(y), h);
        };
        a = function(y, S, b, A) {
          u = b, d(y ? y + "{" + S.styles + "}" : S.styles), A && (m.inserted[S.name] = !0);
        };
      }
      var m = { key: i, sheet: new n1({ key: i, container: o, nonce: t.nonce, speedy: t.speedy, prepend: t.prepend, insertionPoint: t.insertionPoint }), nonce: t.nonce, inserted: r, registered: {}, insert: a };
      return m.sheet.hydrate(s), m;
    }, hc = { exports: {} }, he = {};
    /** @license React v16.13.1
    * react-is.production.min.js
    *
    * Copyright (c) Facebook, Inc. and its affiliates.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    */
    var _e = typeof Symbol == "function" && Symbol.for, Io = _e ? Symbol.for("react.element") : 60103, Lo = _e ? Symbol.for("react.portal") : 60106, Hi = _e ? Symbol.for("react.fragment") : 60107, zi = _e ? Symbol.for("react.strict_mode") : 60108, ji = _e ? Symbol.for("react.profiler") : 60114, Ui = _e ? Symbol.for("react.provider") : 60109, Vi = _e ? Symbol.for("react.context") : 60110, No = _e ? Symbol.for("react.async_mode") : 60111, Wi = _e ? Symbol.for("react.concurrent_mode") : 60111, Gi = _e ? Symbol.for("react.forward_ref") : 60112, qi = _e ? Symbol.for("react.suspense") : 60113, O1 = _e ? Symbol.for("react.suspense_list") : 60120, $i = _e ? Symbol.for("react.memo") : 60115, Xi = _e ? Symbol.for("react.lazy") : 60116, R1 = _e ? Symbol.for("react.block") : 60121, k1 = _e ? Symbol.for("react.fundamental") : 60117, B1 = _e ? Symbol.for("react.responder") : 60118, F1 = _e ? Symbol.for("react.scope") : 60119;
    function Ve(t) {
      if (typeof t == "object" && t !== null) {
        var i = t.$$typeof;
        switch (i) {
          case Io:
            switch (t = t.type, t) {
              case No:
              case Wi:
              case Hi:
              case ji:
              case zi:
              case qi:
                return t;
              default:
                switch (t = t && t.$$typeof, t) {
                  case Vi:
                  case Gi:
                  case Xi:
                  case $i:
                  case Ui:
                    return t;
                  default:
                    return i;
                }
            }
          case Lo:
            return i;
        }
      }
    }
    function dc(t) {
      return Ve(t) === Wi;
    }
    he.AsyncMode = No, he.ConcurrentMode = Wi, he.ContextConsumer = Vi, he.ContextProvider = Ui, he.Element = Io, he.ForwardRef = Gi, he.Fragment = Hi, he.Lazy = Xi, he.Memo = $i, he.Portal = Lo, he.Profiler = ji, he.StrictMode = zi, he.Suspense = qi, he.isAsyncMode = function(t) {
      return dc(t) || Ve(t) === No;
    }, he.isConcurrentMode = dc, he.isContextConsumer = function(t) {
      return Ve(t) === Vi;
    }, he.isContextProvider = function(t) {
      return Ve(t) === Ui;
    }, he.isElement = function(t) {
      return typeof t == "object" && t !== null && t.$$typeof === Io;
    }, he.isForwardRef = function(t) {
      return Ve(t) === Gi;
    }, he.isFragment = function(t) {
      return Ve(t) === Hi;
    }, he.isLazy = function(t) {
      return Ve(t) === Xi;
    }, he.isMemo = function(t) {
      return Ve(t) === $i;
    }, he.isPortal = function(t) {
      return Ve(t) === Lo;
    }, he.isProfiler = function(t) {
      return Ve(t) === ji;
    }, he.isStrictMode = function(t) {
      return Ve(t) === zi;
    }, he.isSuspense = function(t) {
      return Ve(t) === qi;
    }, he.isValidElementType = function(t) {
      return typeof t == "string" || typeof t == "function" || t === Hi || t === Wi || t === ji || t === zi || t === qi || t === O1 || typeof t == "object" && t !== null && (t.$$typeof === Xi || t.$$typeof === $i || t.$$typeof === Ui || t.$$typeof === Vi || t.$$typeof === Gi || t.$$typeof === k1 || t.$$typeof === B1 || t.$$typeof === F1 || t.$$typeof === R1);
    }, he.typeOf = Ve, hc.exports = he;
    var pc = hc.exports, M1 = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, I1 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, gc = {};
    gc[pc.ForwardRef] = M1, gc[pc.Memo] = I1;
    var L1 = !0;
    function fc(t, i, e) {
      var n = "";
      return e.split(" ").forEach(function(r) {
        t[r] !== void 0 ? i.push(t[r] + ";") : n += r + " ";
      }), n;
    }
    var Ho = function(t, i, e) {
      var n = t.key + "-" + i.name;
      (e === !1 || L1 === !1) && t.registered[n] === void 0 && (t.registered[n] = i.styles);
    }, mc = function(t, i, e) {
      Ho(t, i, e);
      var n = t.key + "-" + i.name;
      if (t.inserted[i.name] === void 0) {
        var r = i;
        do
          t.insert(i === r ? "." + n : "", r, t.sheet, !0), r = r.next;
        while (r !== void 0);
      }
    };
    function N1(t) {
      for (var i = 0, e, n = 0, r = t.length; r >= 4; ++n, r -= 4)
        e = t.charCodeAt(n) & 255 | (t.charCodeAt(++n) & 255) << 8 | (t.charCodeAt(++n) & 255) << 16 | (t.charCodeAt(++n) & 255) << 24, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), e ^= e >>> 24, i = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16) ^ (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
      switch (r) {
        case 3:
          i ^= (t.charCodeAt(n + 2) & 255) << 16;
        case 2:
          i ^= (t.charCodeAt(n + 1) & 255) << 8;
        case 1:
          i ^= t.charCodeAt(n) & 255, i = (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
      }
      return i ^= i >>> 13, i = (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16), ((i ^ i >>> 15) >>> 0).toString(36);
    }
    var H1 = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, z1 = /[A-Z]|^ms/g, j1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, vc = function(t) {
      return t.charCodeAt(1) === 45;
    }, yc = function(t) {
      return t != null && typeof t != "boolean";
    }, zo = b1(function(t) {
      return vc(t) ? t : t.replace(z1, "-$&").toLowerCase();
    }), Ec = function(t, i) {
      switch (t) {
        case "animation":
        case "animationName":
          if (typeof i == "string")
            return i.replace(j1, function(e, n, r) {
              return ot = { name: n, styles: r, next: ot }, n;
            });
      }
      return H1[t] !== 1 && !vc(t) && typeof i == "number" && i !== 0 ? i + "px" : i;
    };
    function $n(t, i, e) {
      if (e == null)
        return "";
      if (e.__emotion_styles !== void 0)
        return e;
      switch (typeof e) {
        case "boolean":
          return "";
        case "object": {
          if (e.anim === 1)
            return ot = { name: e.name, styles: e.styles, next: ot }, e.name;
          if (e.styles !== void 0) {
            var n = e.next;
            if (n !== void 0)
              for (; n !== void 0; )
                ot = { name: n.name, styles: n.styles, next: ot }, n = n.next;
            var r = e.styles + ";";
            return r;
          }
          return U1(t, i, e);
        }
        case "function": {
          if (t !== void 0) {
            var o = ot, s = e(t);
            return ot = o, $n(t, i, s);
          }
          break;
        }
      }
      if (i == null)
        return e;
      var a = i[e];
      return a !== void 0 ? a : e;
    }
    function U1(t, i, e) {
      var n = "";
      if (Array.isArray(e))
        for (var r = 0; r < e.length; r++)
          n += $n(t, i, e[r]) + ";";
      else
        for (var o in e) {
          var s = e[o];
          if (typeof s != "object")
            i != null && i[s] !== void 0 ? n += o + "{" + i[s] + "}" : yc(s) && (n += zo(o) + ":" + Ec(o, s) + ";");
          else if (Array.isArray(s) && typeof s[0] == "string" && (i == null || i[s[0]] === void 0))
            for (var a = 0; a < s.length; a++)
              yc(s[a]) && (n += zo(o) + ":" + Ec(o, s[a]) + ";");
          else {
            var l = $n(t, i, s);
            switch (o) {
              case "animation":
              case "animationName": {
                n += zo(o) + ":" + l + ";";
                break;
              }
              default:
                n += o + "{" + l + "}";
            }
          }
        }
      return n;
    }
    var wc = /label:\s*([^\s;\n{]+)\s*(;|$)/g, ot, jo = function(t, i, e) {
      if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
        return t[0];
      var n = !0, r = "";
      ot = void 0;
      var o = t[0];
      o == null || o.raw === void 0 ? (n = !1, r += $n(e, i, o)) : r += o[0];
      for (var s = 1; s < t.length; s++)
        r += $n(e, i, t[s]), n && (r += o[s]);
      wc.lastIndex = 0;
      for (var a = "", l; (l = wc.exec(r)) !== null; )
        a += "-" + l[1];
      var u = N1(r) + a;
      return { name: u, styles: r, next: ot };
    }, V1 = function(t) {
      return t();
    }, W1 = Rr.useInsertionEffect ? Rr.useInsertionEffect : !1, bc = W1 || V1, Uo = {}.hasOwnProperty, xc = Pn(typeof HTMLElement < "u" ? D1({ key: "css" }) : null);
    xc.Provider;
    var Sc = function(t) {
      return Pr(function(i, e) {
        var n = Dn(xc);
        return t(i, n, e);
      });
    }, _c = Pn({}), Vo = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", G1 = function(t, i) {
      var e = {};
      for (var n in i)
        Uo.call(i, n) && (e[n] = i[n]);
      return e[Vo] = t, e;
    }, q1 = function(t) {
      var i = t.cache, e = t.serialized, n = t.isStringTag;
      return Ho(i, e, n), bc(function() {
        return mc(i, e, n);
      }), null;
    }, $1 = Sc(function(t, i, e) {
      var n = t.css;
      typeof n == "string" && i.registered[n] !== void 0 && (n = i.registered[n]);
      var r = t[Vo], o = [n], s = "";
      typeof t.className == "string" ? s = fc(i.registered, o, t.className) : t.className != null && (s = t.className + " ");
      var a = jo(o, void 0, Dn(_c));
      s += i.key + "-" + a.name;
      var l = {};
      for (var u in t)
        Uo.call(t, u) && u !== "css" && u !== Vo && (l[u] = t[u]);
      return l.ref = e, l.className = s, ye(qe, null, ye(q1, { cache: i, serialized: a, isStringTag: typeof r == "string" }), ye(r, l));
    }), X1 = $1, K = function(t, i) {
      var e = arguments;
      if (i == null || !Uo.call(i, "css"))
        return ye.apply(void 0, e);
      var n = e.length, r = new Array(n);
      r[0] = X1, r[1] = G1(t, i);
      for (var o = 2; o < n; o++)
        r[o] = e[o];
      return ye.apply(null, r);
    };
    function Wo() {
      for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
        i[e] = arguments[e];
      return jo(i);
    }
    var Y1 = function() {
      var t = Wo.apply(void 0, arguments), i = "animation-" + t.name;
      return { name: i, styles: "@keyframes " + i + "{" + t.styles + "}", anim: 1, toString: function() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      } };
    }, Z1 = function t(i) {
      for (var e = i.length, n = 0, r = ""; n < e; n++) {
        var o = i[n];
        if (o != null) {
          var s = void 0;
          switch (typeof o) {
            case "boolean":
              break;
            case "object": {
              if (Array.isArray(o))
                s = t(o);
              else {
                s = "";
                for (var a in o)
                  o[a] && a && (s && (s += " "), s += a);
              }
              break;
            }
            default:
              s = o;
          }
          s && (r && (r += " "), r += s);
        }
      }
      return r;
    };
    function K1(t, i, e) {
      var n = [], r = fc(t, n, e);
      return n.length < 2 ? e : r + i(n);
    }
    var J1 = function(t) {
      var i = t.cache, e = t.serializedArr;
      return bc(function() {
        for (var n = 0; n < e.length; n++)
          mc(i, e[n], !1);
      }), null;
    }, Q1 = Sc(function(t, i) {
      var e = [], n = function() {
        for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++)
          l[u] = arguments[u];
        var c = jo(l, i.registered);
        return e.push(c), Ho(i, c, !1), i.key + "-" + c.name;
      }, r = function() {
        for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++)
          l[u] = arguments[u];
        return K1(i.registered, n, Z1(l));
      }, o = { css: n, cx: r, theme: Dn(_c) }, s = t.children(o);
      return ye(qe, null, ye(J1, { cache: i, serializedArr: e }), s);
    });
    function eE(t, i) {
      return i || (i = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(i) } }));
    }
    function Go(t, i) {
      if (t == null)
        return {};
      var e = {}, n = Object.keys(t), r, o;
      for (o = 0; o < n.length; o++)
        r = n[o], !(i.indexOf(r) >= 0) && (e[r] = t[r]);
      return e;
    }
    function dn(t, i) {
      if (t == null)
        return {};
      var e = Go(t, i), n, r;
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        for (r = 0; r < o.length; r++)
          n = o[r], !(i.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, n) || (e[n] = t[n]));
      }
      return e;
    }
    function pn(t) {
      return pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
        return typeof i;
      } : function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
      }, pn(t);
    }
    var Cc = {};
    Object.defineProperty(Cc, "__esModule", { value: !0 });
    var qo = Object.assign || function(t) {
      for (var i = 1; i < arguments.length; i++) {
        var e = arguments[i];
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
      return t;
    }, Tc = /* @__PURE__ */ function() {
      function t(i, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r);
        }
      }
      return function(i, e, n) {
        return e && t(i.prototype, e), n && t(i, n), i;
      };
    }(), Ac = Zt, Xn = Pc(Ac), tE = kn.exports, xe = Pc(tE);
    function Pc(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function nE(t, i) {
      var e = {};
      for (var n in t)
        i.indexOf(n) >= 0 || !Object.prototype.hasOwnProperty.call(t, n) || (e[n] = t[n]);
      return e;
    }
    function iE(t, i) {
      if (!(t instanceof i))
        throw new TypeError("Cannot call a class as a function");
    }
    function rE(t, i) {
      if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i && (typeof i == "object" || typeof i == "function") ? i : t;
    }
    function oE(t, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof i);
      t.prototype = Object.create(i && i.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(t, i) : t.__proto__ = i);
    }
    var Dc = { position: "absolute", top: 0, left: 0, visibility: "hidden", height: 0, overflow: "scroll", whiteSpace: "pre" }, sE = ["extraWidth", "injectStyles", "inputClassName", "inputRef", "inputStyle", "minWidth", "onAutosize", "placeholderIsMinWidth"], aE = function(t) {
      return sE.forEach(function(i) {
        return delete t[i];
      }), t;
    }, Oc = function(t, i) {
      i.style.fontSize = t.fontSize, i.style.fontFamily = t.fontFamily, i.style.fontWeight = t.fontWeight, i.style.fontStyle = t.fontStyle, i.style.letterSpacing = t.letterSpacing, i.style.textTransform = t.textTransform;
    }, Rc = typeof window < "u" && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : !1, kc = function() {
      return Rc ? "_" + Math.random().toString(36).substr(2, 12) : void 0;
    }, $o = function(t) {
      oE(i, t), Tc(i, null, [{ key: "getDerivedStateFromProps", value: function(e, n) {
        var r = e.id;
        return r !== n.prevId ? { inputId: r || kc(), prevId: r } : null;
      } }]);
      function i(e) {
        iE(this, i);
        var n = rE(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, e));
        return n.inputRef = function(r) {
          n.input = r, typeof n.props.inputRef == "function" && n.props.inputRef(r);
        }, n.placeHolderSizerRef = function(r) {
          n.placeHolderSizer = r;
        }, n.sizerRef = function(r) {
          n.sizer = r;
        }, n.state = { inputWidth: e.minWidth, inputId: e.id || kc(), prevId: e.id }, n;
      }
      return Tc(i, [{ key: "componentDidMount", value: function() {
        this.mounted = !0, this.copyInputStyles(), this.updateInputWidth();
      } }, { key: "componentDidUpdate", value: function(e, n) {
        n.inputWidth !== this.state.inputWidth && typeof this.props.onAutosize == "function" && this.props.onAutosize(this.state.inputWidth), this.updateInputWidth();
      } }, { key: "componentWillUnmount", value: function() {
        this.mounted = !1;
      } }, { key: "copyInputStyles", value: function() {
        if (!(!this.mounted || !window.getComputedStyle)) {
          var e = this.input && window.getComputedStyle(this.input);
          !e || (Oc(e, this.sizer), this.placeHolderSizer && Oc(e, this.placeHolderSizer));
        }
      } }, { key: "updateInputWidth", value: function() {
        if (!(!this.mounted || !this.sizer || typeof this.sizer.scrollWidth > "u")) {
          var e = void 0;
          this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth) ? e = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2 : e = this.sizer.scrollWidth + 2;
          var n = this.props.type === "number" && this.props.extraWidth === void 0 ? 16 : parseInt(this.props.extraWidth) || 0;
          e += n, e < this.props.minWidth && (e = this.props.minWidth), e !== this.state.inputWidth && this.setState({ inputWidth: e });
        }
      } }, { key: "getInput", value: function() {
        return this.input;
      } }, { key: "focus", value: function() {
        this.input.focus();
      } }, { key: "blur", value: function() {
        this.input.blur();
      } }, { key: "select", value: function() {
        this.input.select();
      } }, { key: "renderStyles", value: function() {
        var e = this.props.injectStyles;
        return Rc && e ? Xn.default.createElement("style", { dangerouslySetInnerHTML: { __html: "input#" + this.state.inputId + "::-ms-clear {display: none;}" } }) : null;
      } }, { key: "render", value: function() {
        var e = [this.props.defaultValue, this.props.value, ""].reduce(function(s, a) {
          return s ?? a;
        }), n = qo({}, this.props.style);
        n.display || (n.display = "inline-block");
        var r = qo({ boxSizing: "content-box", width: this.state.inputWidth + "px" }, this.props.inputStyle), o = nE(this.props, []);
        return aE(o), o.className = this.props.inputClassName, o.id = this.state.inputId, o.style = r, Xn.default.createElement("div", { className: this.props.className, style: n }, this.renderStyles(), Xn.default.createElement("input", qo({}, o, { ref: this.inputRef })), Xn.default.createElement("div", { ref: this.sizerRef, style: Dc }, e), this.props.placeholder ? Xn.default.createElement("div", { ref: this.placeHolderSizerRef, style: Dc }, this.props.placeholder) : null);
      } }]), i;
    }(Ac.Component);
    $o.propTypes = { className: xe.default.string, defaultValue: xe.default.any, extraWidth: xe.default.oneOfType([xe.default.number, xe.default.string]), id: xe.default.string, injectStyles: xe.default.bool, inputClassName: xe.default.string, inputRef: xe.default.func, inputStyle: xe.default.object, minWidth: xe.default.oneOfType([xe.default.number, xe.default.string]), onAutosize: xe.default.func, onChange: xe.default.func, placeholder: xe.default.string, placeholderIsMinWidth: xe.default.bool, style: xe.default.object, value: xe.default.any }, $o.defaultProps = { minWidth: 1, injectStyles: !0 };
    var lE = Cc.default = $o;
    function Yi(t, i) {
      if (!(t instanceof i))
        throw new TypeError("Cannot call a class as a function");
    }
    function uE(t, i) {
      if (pn(t) !== "object" || t === null)
        return t;
      var e = t[Symbol.toPrimitive];
      if (e !== void 0) {
        var n = e.call(t, i || "default");
        if (pn(n) !== "object")
          return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(t);
    }
    function Bc(t) {
      var i = uE(t, "string");
      return pn(i) === "symbol" ? i : String(i);
    }
    function Fc(t, i) {
      for (var e = 0; e < i.length; e++) {
        var n = i[e];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Bc(n.key), n);
      }
    }
    function Zi(t, i, e) {
      return i && Fc(t.prototype, i), e && Fc(t, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
    }
    function Ki(t, i) {
      return Ki = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
        return e.__proto__ = n, e;
      }, Ki(t, i);
    }
    function Ji(t, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(i && i.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), i && Ki(t, i);
    }
    function ft(t, i, e) {
      return i = Bc(i), i in t ? Object.defineProperty(t, i, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : t[i] = e, t;
    }
    function cE(t, i, e) {
      return i in t ? Object.defineProperty(t, i, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : t[i] = e, t;
    }
    function Mc(t, i) {
      var e = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        i && (n = n.filter(function(r) {
          return Object.getOwnPropertyDescriptor(t, r).enumerable;
        })), e.push.apply(e, n);
      }
      return e;
    }
    function De(t) {
      for (var i = 1; i < arguments.length; i++) {
        var e = arguments[i] != null ? arguments[i] : {};
        i % 2 ? Mc(Object(e), !0).forEach(function(n) {
          cE(t, n, e[n]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Mc(Object(e)).forEach(function(n) {
          Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
        });
      }
      return t;
    }
    function Qi(t) {
      return Qi = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
        return i.__proto__ || Object.getPrototypeOf(i);
      }, Qi(t);
    }
    function hE() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function dE(t) {
      if (t === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function pE(t, i) {
      return i && (typeof i == "object" || typeof i == "function") ? i : dE(t);
    }
    function er(t) {
      var i = hE();
      return function() {
        var e = Qi(t), n;
        if (i) {
          var r = Qi(this).constructor;
          n = Reflect.construct(e, arguments, r);
        } else
          n = e.apply(this, arguments);
        return pE(this, n);
      };
    }
    var tr = function() {
    };
    function gE(t, i) {
      return i ? i[0] === "-" ? t + i : t + "__" + i : t;
    }
    function fE(t, i, e) {
      var n = [e];
      if (i && t)
        for (var r in i)
          i.hasOwnProperty(r) && i[r] && n.push("".concat(gE(t, r)));
      return n.filter(function(o) {
        return o;
      }).map(function(o) {
        return String(o).trim();
      }).join(" ");
    }
    var Ic = function(t) {
      return Array.isArray(t) ? t.filter(Boolean) : pn(t) === "object" && t !== null ? [t] : [];
    }, Lc = function(t) {
      t.className, t.clearValue, t.cx, t.getStyles, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
      var i = dn(t, ["className", "clearValue", "cx", "getStyles", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"]);
      return De({}, i);
    };
    function Xo(t) {
      return [document.documentElement, document.body, window].indexOf(t) > -1;
    }
    function Nc(t) {
      return Xo(t) ? window.pageYOffset : t.scrollTop;
    }
    function nr(t, i) {
      if (Xo(t)) {
        window.scrollTo(0, i);
        return;
      }
      t.scrollTop = i;
    }
    function mE(t) {
      var i = getComputedStyle(t), e = i.position === "absolute", n = /(auto|scroll)/, r = document.documentElement;
      if (i.position === "fixed")
        return r;
      for (var o = t; o = o.parentElement; )
        if (i = getComputedStyle(o), !(e && i.position === "static") && n.test(i.overflow + i.overflowY + i.overflowX))
          return o;
      return r;
    }
    function vE(t, i, e, n) {
      return e * ((t = t / n - 1) * t * t + 1) + i;
    }
    function ir(t, i) {
      var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : tr, r = Nc(t), o = i - r, s = 10, a = 0;
      function l() {
        a += s;
        var u = vE(a, r, o, e);
        nr(t, u), a < e ? window.requestAnimationFrame(l) : n(t);
      }
      l();
    }
    function yE(t, i) {
      var e = t.getBoundingClientRect(), n = i.getBoundingClientRect(), r = i.offsetHeight / 3;
      n.bottom + r > e.bottom ? nr(t, Math.min(i.offsetTop + i.clientHeight - t.offsetHeight + r, t.scrollHeight)) : n.top - r < e.top && nr(t, Math.max(i.offsetTop - r, 0));
    }
    function EE(t) {
      var i = t.getBoundingClientRect();
      return { bottom: i.bottom, height: i.height, left: i.left, right: i.right, top: i.top, width: i.width };
    }
    function Hc() {
      try {
        return document.createEvent("TouchEvent"), !0;
      } catch {
        return !1;
      }
    }
    function wE() {
      try {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      } catch {
        return !1;
      }
    }
    var zc = !1, bE = { get passive() {
      return zc = !0;
    } }, rr = typeof window < "u" ? window : {};
    rr.addEventListener && rr.removeEventListener && (rr.addEventListener("p", tr, bE), rr.removeEventListener("p", tr, !1));
    var xE = zc;
    function SE(t) {
      var i = t.maxHeight, e = t.menuEl, n = t.minHeight, r = t.placement, o = t.shouldScroll, s = t.isFixedPosition, a = t.theme, l = a.spacing, u = mE(e), c = { placement: "bottom", maxHeight: i };
      if (!e || !e.offsetParent)
        return c;
      var h = u.getBoundingClientRect(), d = h.height, m = e.getBoundingClientRect(), y = m.bottom, S = m.height, b = m.top, A = e.offsetParent.getBoundingClientRect(), p = A.top, E = window.innerHeight, T = Nc(u), C = parseInt(getComputedStyle(e).marginBottom, 10), O = parseInt(getComputedStyle(e).marginTop, 10), D = p - O, F = E - b, I = D + T, H = d - T - b, j = y - E + T + C, z = T + b - O, q = 160;
      switch (r) {
        case "auto":
        case "bottom":
          if (F >= S)
            return { placement: "bottom", maxHeight: i };
          if (H >= S && !s)
            return o && ir(u, j, q), { placement: "bottom", maxHeight: i };
          if (!s && H >= n || s && F >= n) {
            o && ir(u, j, q);
            var $ = s ? F - C : H - C;
            return { placement: "bottom", maxHeight: $ };
          }
          if (r === "auto" || s) {
            var Q = i, J = s ? D : I;
            return J >= n && (Q = Math.min(J - C - l.controlHeight, i)), { placement: "top", maxHeight: Q };
          }
          if (r === "bottom")
            return o && nr(u, j), { placement: "bottom", maxHeight: i };
          break;
        case "top":
          if (D >= S)
            return { placement: "top", maxHeight: i };
          if (I >= S && !s)
            return o && ir(u, z, q), { placement: "top", maxHeight: i };
          if (!s && I >= n || s && D >= n) {
            var te = i;
            return (!s && I >= n || s && D >= n) && (te = s ? D - O : I - O), o && ir(u, z, q), { placement: "top", maxHeight: te };
          }
          return { placement: "bottom", maxHeight: i };
        default:
          throw new Error('Invalid placement provided "'.concat(r, '".'));
      }
      return c;
    }
    function _E(t) {
      var i = { bottom: "top", top: "bottom" };
      return t ? i[t] : "bottom";
    }
    var Yo = function(t) {
      return t === "auto" ? "bottom" : t;
    }, CE = function(t) {
      var i, e = t.placement, n = t.theme, r = n.borderRadius, o = n.spacing, s = n.colors;
      return i = { label: "menu" }, ft(i, _E(e), "100%"), ft(i, "backgroundColor", s.neutral0), ft(i, "borderRadius", r), ft(i, "boxShadow", "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"), ft(i, "marginBottom", o.menuGutter), ft(i, "marginTop", o.menuGutter), ft(i, "position", "absolute"), ft(i, "width", "100%"), ft(i, "zIndex", 1), i;
    }, jc = Pn({ getPortalPlacement: null }), Uc = function(t) {
      Ji(e, t);
      var i = er(e);
      function e() {
        var n;
        Yi(this, e);
        for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
          o[s] = arguments[s];
        return n = i.call.apply(i, [this].concat(o)), n.state = { maxHeight: n.props.maxMenuHeight, placement: null }, n.getPlacement = function(a) {
          var l = n.props, u = l.minMenuHeight, c = l.maxMenuHeight, h = l.menuPlacement, d = l.menuPosition, m = l.menuShouldScrollIntoView, y = l.theme;
          if (a) {
            var S = d === "fixed", b = m && !S, A = SE({ maxHeight: c, menuEl: a, minHeight: u, placement: h, shouldScroll: b, isFixedPosition: S, theme: y }), p = n.context.getPortalPlacement;
            p && p(A), n.setState(A);
          }
        }, n.getUpdatedProps = function() {
          var a = n.props.menuPlacement, l = n.state.placement || Yo(a);
          return De(De({}, n.props), {}, { placement: l, maxHeight: n.state.maxHeight });
        }, n;
      }
      return Zi(e, [{ key: "render", value: function() {
        var n = this.props.children;
        return n({ ref: this.getPlacement, placerProps: this.getUpdatedProps() });
      } }]), e;
    }(we);
    Uc.contextType = jc;
    var TE = function(t) {
      var i = t.children, e = t.className, n = t.cx, r = t.getStyles, o = t.innerRef, s = t.innerProps;
      return K("div", Z({ css: r("menu", t), className: n({ menu: !0 }, e), ref: o }, s), i);
    }, AE = function(t) {
      var i = t.maxHeight, e = t.theme.spacing.baseUnit;
      return { maxHeight: i, overflowY: "auto", paddingBottom: e, paddingTop: e, position: "relative", WebkitOverflowScrolling: "touch" };
    }, PE = function(t) {
      var i = t.children, e = t.className, n = t.cx, r = t.getStyles, o = t.innerProps, s = t.innerRef, a = t.isMulti;
      return K("div", Z({ css: r("menuList", t), className: n({ "menu-list": !0, "menu-list--is-multi": a }, e), ref: s }, o), i);
    }, Vc = function(t) {
      var i = t.theme, e = i.spacing.baseUnit, n = i.colors;
      return { color: n.neutral40, padding: "".concat(e * 2, "px ").concat(e * 3, "px"), textAlign: "center" };
    }, DE = Vc, OE = Vc, Wc = function(t) {
      var i = t.children, e = t.className, n = t.cx, r = t.getStyles, o = t.innerProps;
      return K("div", Z({ css: r("noOptionsMessage", t), className: n({ "menu-notice": !0, "menu-notice--no-options": !0 }, e) }, o), i);
    };
    Wc.defaultProps = { children: "No options" };
    var Gc = function(t) {
      var i = t.children, e = t.className, n = t.cx, r = t.getStyles, o = t.innerProps;
      return K("div", Z({ css: r("loadingMessage", t), className: n({ "menu-notice": !0, "menu-notice--loading": !0 }, e) }, o), i);
    };
    Gc.defaultProps = { children: "Loading..." };
    var RE = function(t) {
      var i = t.rect, e = t.offset, n = t.position;
      return { left: i.left, position: n, top: e, width: i.width, zIndex: 1 };
    }, kE = function(t) {
      Ji(e, t);
      var i = er(e);
      function e() {
        var n;
        Yi(this, e);
        for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
          o[s] = arguments[s];
        return n = i.call.apply(i, [this].concat(o)), n.state = { placement: null }, n.getPortalPlacement = function(a) {
          var l = a.placement, u = Yo(n.props.menuPlacement);
          l !== u && n.setState({ placement: l });
        }, n;
      }
      return Zi(e, [{ key: "render", value: function() {
        var n = this.props, r = n.appendTo, o = n.children, s = n.className, a = n.controlElement, l = n.cx, u = n.innerProps, c = n.menuPlacement, h = n.menuPosition, d = n.getStyles, m = h === "fixed";
        if (!r && !m || !a)
          return null;
        var y = this.state.placement || Yo(c), S = EE(a), b = m ? 0 : window.pageYOffset, A = S[y] + b, p = { offset: A, position: h, rect: S }, E = K("div", Z({ css: d("menuPortal", p), className: l({ "menu-portal": !0 }, s) }, u), o);
        return K(jc.Provider, { value: { getPortalPlacement: this.getPortalPlacement } }, r ? Dr(E, r) : E);
      } }]), e;
    }(we), BE = function(t) {
      var i = t.isDisabled, e = t.isRtl;
      return { label: "container", direction: e ? "rtl" : null, pointerEvents: i ? "none" : null, position: "relative" };
    }, FE = function(t) {
      var i = t.children, e = t.className, n = t.cx, r = t.getStyles, o = t.innerProps, s = t.isDisabled, a = t.isRtl;
      return K("div", Z({ css: r("container", t), className: n({ "--is-disabled": s, "--is-rtl": a }, e) }, o), i);
    }, ME = function(t) {
      var i = t.theme.spacing;
      return { alignItems: "center", display: "flex", flex: 1, flexWrap: "wrap", padding: "".concat(i.baseUnit / 2, "px ").concat(i.baseUnit * 2, "px"), WebkitOverflowScrolling: "touch", position: "relative", overflow: "hidden" };
    }, IE = function(t) {
      var i = t.children, e = t.className, n = t.cx, r = t.innerProps, o = t.isMulti, s = t.getStyles, a = t.hasValue;
      return K("div", Z({ css: s("valueContainer", t), className: n({ "value-container": !0, "value-container--is-multi": o, "value-container--has-value": a }, e) }, r), i);
    }, LE = function() {
      return { alignItems: "center", alignSelf: "stretch", display: "flex", flexShrink: 0 };
    }, NE = function(t) {
      var i = t.children, e = t.className, n = t.cx, r = t.innerProps, o = t.getStyles;
      return K("div", Z({ css: o("indicatorsContainer", t), className: n({ indicators: !0 }, e) }, r), i);
    }, qc, HE = { name: "8mmkcg", styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0" }, $c = function(t) {
      var i = t.size, e = dn(t, ["size"]);
      return K("svg", Z({ height: i, width: i, viewBox: "0 0 20 20", "aria-hidden": "true", focusable: "false", css: HE }, e));
    }, Zo = function(t) {
      return K($c, Z({ size: 20 }, t), K("path", { d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" }));
    }, Xc = function(t) {
      return K($c, Z({ size: 20 }, t), K("path", { d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" }));
    }, Yc = function(t) {
      var i = t.isFocused, e = t.theme, n = e.spacing.baseUnit, r = e.colors;
      return { label: "indicatorContainer", color: i ? r.neutral60 : r.neutral20, display: "flex", padding: n * 2, transition: "color 150ms", ":hover": { color: i ? r.neutral80 : r.neutral40 } };
    }, zE = Yc, jE = function(t) {
      var i = t.children, e = t.className, n = t.cx, r = t.getStyles, o = t.innerProps;
      return K("div", Z({ css: r("dropdownIndicator", t), className: n({ indicator: !0, "dropdown-indicator": !0 }, e) }, o), i || K(Xc, null));
    }, UE = Yc, VE = function(t) {
      var i = t.children, e = t.className, n = t.cx, r = t.getStyles, o = t.innerProps;
      return K("div", Z({ css: r("clearIndicator", t), className: n({ indicator: !0, "clear-indicator": !0 }, e) }, o), i || K(Zo, null));
    }, WE = function(t) {
      var i = t.isDisabled, e = t.theme, n = e.spacing.baseUnit, r = e.colors;
      return { label: "indicatorSeparator", alignSelf: "stretch", backgroundColor: i ? r.neutral10 : r.neutral20, marginBottom: n * 2, marginTop: n * 2, width: 1 };
    }, GE = function(t) {
      var i = t.className, e = t.cx, n = t.getStyles, r = t.innerProps;
      return K("span", Z({}, r, { css: n("indicatorSeparator", t), className: e({ "indicator-separator": !0 }, i) }));
    }, qE = Y1(qc || (qc = eE([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), $E = function(t) {
      var i = t.isFocused, e = t.size, n = t.theme, r = n.colors, o = n.spacing.baseUnit;
      return { label: "loadingIndicator", color: i ? r.neutral60 : r.neutral20, display: "flex", padding: o * 2, transition: "color 150ms", alignSelf: "center", fontSize: e, lineHeight: 1, marginRight: e, textAlign: "center", verticalAlign: "middle" };
    }, Ko = function(t) {
      var i = t.delay, e = t.offset;
      return K("span", { css: Wo({ animation: "".concat(qE, " 1s ease-in-out ").concat(i, "ms infinite;"), backgroundColor: "currentColor", borderRadius: "1em", display: "inline-block", marginLeft: e ? "1em" : null, height: "1em", verticalAlign: "top", width: "1em" }, "", "") });
    }, Zc = function(t) {
      var i = t.className, e = t.cx, n = t.getStyles, r = t.innerProps, o = t.isRtl;
      return K("div", Z({ css: n("loadingIndicator", t), className: e({ indicator: !0, "loading-indicator": !0 }, i) }, r), K(Ko, { delay: 0, offset: o }), K(Ko, { delay: 160, offset: !0 }), K(Ko, { delay: 320, offset: !o }));
    };
    Zc.defaultProps = { size: 4 };
    var XE = function(t) {
      var i = t.isDisabled, e = t.isFocused, n = t.theme, r = n.colors, o = n.borderRadius, s = n.spacing;
      return { label: "control", alignItems: "center", backgroundColor: i ? r.neutral5 : r.neutral0, borderColor: i ? r.neutral10 : e ? r.primary : r.neutral20, borderRadius: o, borderStyle: "solid", borderWidth: 1, boxShadow: e ? "0 0 0 1px ".concat(r.primary) : null, cursor: "default", display: "flex", flexWrap: "wrap", justifyContent: "space-between", minHeight: s.controlHeight, outline: "0 !important", position: "relative", transition: "all 100ms", "&:hover": { borderColor: e ? r.primary : r.neutral30 } };
    }, YE = function(t) {
      var i = t.children, e = t.cx, n = t.getStyles, r = t.className, o = t.isDisabled, s = t.isFocused, a = t.innerRef, l = t.innerProps, u = t.menuIsOpen;
      return K("div", Z({ ref: a, css: n("control", t), className: e({ control: !0, "control--is-disabled": o, "control--is-focused": s, "control--menu-is-open": u }, r) }, l), i);
    }, ZE = function(t) {
      var i = t.theme.spacing;
      return { paddingBottom: i.baseUnit * 2, paddingTop: i.baseUnit * 2 };
    }, KE = function(t) {
      var i = t.children, e = t.className, n = t.cx, r = t.getStyles, o = t.Heading, s = t.headingProps, a = t.innerProps, l = t.label, u = t.theme, c = t.selectProps;
      return K("div", Z({ css: r("group", t), className: n({ group: !0 }, e) }, a), K(o, Z({}, s, { selectProps: c, theme: u, getStyles: r, cx: n }), l), K("div", null, i));
    }, JE = function(t) {
      var i = t.theme.spacing;
      return { label: "group", color: "#999", cursor: "default", display: "block", fontSize: "75%", fontWeight: "500", marginBottom: "0.25em", paddingLeft: i.baseUnit * 3, paddingRight: i.baseUnit * 3, textTransform: "uppercase" };
    }, QE = function(t) {
      var i = t.getStyles, e = t.cx, n = t.className, r = Lc(t);
      r.data;
      var o = dn(r, ["data"]);
      return K("div", Z({ css: i("groupHeading", t), className: e({ "group-heading": !0 }, n) }, o));
    }, ew = function(t) {
      var i = t.isDisabled, e = t.theme, n = e.spacing, r = e.colors;
      return { margin: n.baseUnit / 2, paddingBottom: n.baseUnit / 2, paddingTop: n.baseUnit / 2, visibility: i ? "hidden" : "visible", color: r.neutral80 };
    }, tw = function(t) {
      return { label: "input", background: 0, border: 0, fontSize: "inherit", opacity: t ? 0 : 1, outline: 0, padding: 0, color: "inherit" };
    }, nw = function(t) {
      var i = t.className, e = t.cx, n = t.getStyles, r = Lc(t), o = r.innerRef, s = r.isDisabled, a = r.isHidden, l = dn(r, ["innerRef", "isDisabled", "isHidden"]);
      return K("div", { css: n("input", t) }, K(lE, Z({ className: e({ input: !0 }, i), inputRef: o, inputStyle: tw(a), disabled: s }, l)));
    }, iw = function(t) {
      var i = t.theme, e = i.spacing, n = i.borderRadius, r = i.colors;
      return { label: "multiValue", backgroundColor: r.neutral10, borderRadius: n / 2, display: "flex", margin: e.baseUnit / 2, minWidth: 0 };
    }, rw = function(t) {
      var i = t.theme, e = i.borderRadius, n = i.colors, r = t.cropWithEllipsis;
      return { borderRadius: e / 2, color: n.neutral80, fontSize: "85%", overflow: "hidden", padding: 3, paddingLeft: 6, textOverflow: r ? "ellipsis" : null, whiteSpace: "nowrap" };
    }, ow = function(t) {
      var i = t.theme, e = i.spacing, n = i.borderRadius, r = i.colors, o = t.isFocused;
      return { alignItems: "center", borderRadius: n / 2, backgroundColor: o && r.dangerLight, display: "flex", paddingLeft: e.baseUnit, paddingRight: e.baseUnit, ":hover": { backgroundColor: r.dangerLight, color: r.danger } };
    }, Kc = function(t) {
      var i = t.children, e = t.innerProps;
      return K("div", e, i);
    }, sw = Kc, aw = Kc;
    function lw(t) {
      var i = t.children, e = t.innerProps;
      return K("div", e, i || K(Zo, { size: 14 }));
    }
    var Jc = function(t) {
      var i = t.children, e = t.className, n = t.components, r = t.cx, o = t.data, s = t.getStyles, a = t.innerProps, l = t.isDisabled, u = t.removeProps, c = t.selectProps, h = n.Container, d = n.Label, m = n.Remove;
      return K(Q1, null, function(y) {
        var S = y.css, b = y.cx;
        return K(h, { data: o, innerProps: De({ className: b(S(s("multiValue", t)), r({ "multi-value": !0, "multi-value--is-disabled": l }, e)) }, a), selectProps: c }, K(d, { data: o, innerProps: { className: b(S(s("multiValueLabel", t)), r({ "multi-value__label": !0 }, e)) }, selectProps: c }, i), K(m, { data: o, innerProps: De({ className: b(S(s("multiValueRemove", t)), r({ "multi-value__remove": !0 }, e)) }, u), selectProps: c }));
      });
    };
    Jc.defaultProps = { cropWithEllipsis: !0 };
    var uw = function(t) {
      var i = t.isDisabled, e = t.isFocused, n = t.isSelected, r = t.theme, o = r.spacing, s = r.colors;
      return { label: "option", backgroundColor: n ? s.primary : e ? s.primary25 : "transparent", color: i ? s.neutral20 : n ? s.neutral0 : "inherit", cursor: "default", display: "block", fontSize: "inherit", padding: "".concat(o.baseUnit * 2, "px ").concat(o.baseUnit * 3, "px"), width: "100%", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", ":active": { backgroundColor: !i && (n ? s.primary : s.primary50) } };
    }, cw = function(t) {
      var i = t.children, e = t.className, n = t.cx, r = t.getStyles, o = t.isDisabled, s = t.isFocused, a = t.isSelected, l = t.innerRef, u = t.innerProps;
      return K("div", Z({ css: r("option", t), className: n({ option: !0, "option--is-disabled": o, "option--is-focused": s, "option--is-selected": a }, e), ref: l }, u), i);
    }, hw = function(t) {
      var i = t.theme, e = i.spacing, n = i.colors;
      return { label: "placeholder", color: n.neutral50, marginLeft: e.baseUnit / 2, marginRight: e.baseUnit / 2, position: "absolute", top: "50%", transform: "translateY(-50%)" };
    }, dw = function(t) {
      var i = t.children, e = t.className, n = t.cx, r = t.getStyles, o = t.innerProps;
      return K("div", Z({ css: r("placeholder", t), className: n({ placeholder: !0 }, e) }, o), i);
    }, pw = function(t) {
      var i = t.isDisabled, e = t.theme, n = e.spacing, r = e.colors;
      return { label: "singleValue", color: i ? r.neutral40 : r.neutral80, marginLeft: n.baseUnit / 2, marginRight: n.baseUnit / 2, maxWidth: "calc(100% - ".concat(n.baseUnit * 2, "px)"), overflow: "hidden", position: "absolute", textOverflow: "ellipsis", whiteSpace: "nowrap", top: "50%", transform: "translateY(-50%)" };
    }, gw = function(t) {
      var i = t.children, e = t.className, n = t.cx, r = t.getStyles, o = t.isDisabled, s = t.innerProps;
      return K("div", Z({ css: r("singleValue", t), className: n({ "single-value": !0, "single-value--is-disabled": o }, e) }, s), i);
    }, fw = { ClearIndicator: VE, Control: YE, DropdownIndicator: jE, DownChevron: Xc, CrossIcon: Zo, Group: KE, GroupHeading: QE, IndicatorsContainer: NE, IndicatorSeparator: GE, Input: nw, LoadingIndicator: Zc, Menu: TE, MenuList: PE, MenuPortal: kE, LoadingMessage: Gc, NoOptionsMessage: Wc, MultiValue: Jc, MultiValueContainer: sw, MultiValueLabel: aw, MultiValueRemove: lw, Option: cw, Placeholder: dw, SelectContainer: FE, SingleValue: gw, ValueContainer: IE }, mw = function(t) {
      return De(De({}, fw), t.components);
    };
    function Jo(t, i) {
      (i == null || i > t.length) && (i = t.length);
      for (var e = 0, n = new Array(i); e < i; e++)
        n[e] = t[e];
      return n;
    }
    function vw(t) {
      if (Array.isArray(t))
        return Jo(t);
    }
    function yw(t) {
      if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
        return Array.from(t);
    }
    function Ew(t, i) {
      if (t) {
        if (typeof t == "string")
          return Jo(t, i);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
          return Array.from(t);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
          return Jo(t, i);
      }
    }
    function ww() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function Qc(t) {
      return vw(t) || yw(t) || Ew(t) || ww();
    }
    var eh = Number.isNaN || function(t) {
      return typeof t == "number" && t !== t;
    };
    function bw(t, i) {
      return !!(t === i || eh(t) && eh(i));
    }
    function xw(t, i) {
      if (t.length !== i.length)
        return !1;
      for (var e = 0; e < t.length; e++)
        if (!bw(t[e], i[e]))
          return !1;
      return !0;
    }
    function Sw(t, i) {
      i === void 0 && (i = xw);
      var e, n = [], r, o = !1;
      function s() {
        for (var a = [], l = 0; l < arguments.length; l++)
          a[l] = arguments[l];
        return o && e === this && i(a, n) || (r = t.apply(this, a), o = !0, e = this, n = a), r;
      }
      return s;
    }
    for (var _w = { name: "7pg0cj-a11yText", styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap" }, Cw = function(t) {
      return K("span", Z({ css: _w }, t));
    }, Tw = { guidance: function(t) {
      var i = t.isSearchable, e = t.isMulti, n = t.isDisabled, r = t.tabSelectsValue, o = t.context;
      switch (o) {
        case "menu":
          return "Use Up and Down to choose options".concat(n ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(r ? ", press Tab to select the option and exit the menu" : "", ".");
        case "input":
          return "".concat(t["aria-label"] || "Select", " is focused ").concat(i ? ",type to refine list" : "", ", press Down to open the menu, ").concat(e ? " press left to focus selected values" : "");
        case "value":
          return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
        default:
          return "";
      }
    }, onChange: function(t) {
      var i = t.action, e = t.label, n = e === void 0 ? "" : e, r = t.isDisabled;
      switch (i) {
        case "deselect-option":
        case "pop-value":
        case "remove-value":
          return "option ".concat(n, ", deselected.");
        case "select-option":
          return r ? "option ".concat(n, " is disabled. Select another option.") : "option ".concat(n, ", selected.");
        default:
          return "";
      }
    }, onFocus: function(t) {
      var i = t.context, e = t.focused, n = e === void 0 ? {} : e, r = t.options, o = t.label, s = o === void 0 ? "" : o, a = t.selectValue, l = t.isDisabled, u = t.isSelected, c = function(m, y) {
        return m && m.length ? "".concat(m.indexOf(y) + 1, " of ").concat(m.length) : "";
      };
      if (i === "value" && a)
        return "value ".concat(s, " focused, ").concat(c(a, n), ".");
      if (i === "menu") {
        var h = l ? " disabled" : "", d = "".concat(u ? "selected" : "focused").concat(h);
        return "option ".concat(s, " ").concat(d, ", ").concat(c(r, n), ".");
      }
      return "";
    }, onFilter: function(t) {
      var i = t.inputValue, e = t.resultsMessage;
      return "".concat(e).concat(i ? " for search term " + i : "", ".");
    } }, Aw = function(t) {
      var i = t.ariaSelection, e = t.focusedOption, n = t.focusedValue, r = t.focusableOptions, o = t.isFocused, s = t.selectValue, a = t.selectProps, l = a.ariaLiveMessages, u = a.getOptionLabel, c = a.inputValue, h = a.isMulti, d = a.isOptionDisabled, m = a.isSearchable, y = a.menuIsOpen, S = a.options, b = a.screenReaderStatus, A = a.tabSelectsValue, p = a["aria-label"], E = a["aria-live"], T = ht(function() {
        return De(De({}, Tw), l || {});
      }, [l]), C = ht(function() {
        var H = "";
        if (i && T.onChange) {
          var j = i.option, z = i.removedValue, q = i.value, $ = function(te) {
            return Array.isArray(te) ? null : te;
          }, Q = z || j || $(q), J = De({ isDisabled: Q && d(Q), label: Q ? u(Q) : "" }, i);
          H = T.onChange(J);
        }
        return H;
      }, [i, d, u, T]), O = ht(function() {
        var H = "", j = e || n, z = !!(e && s && s.includes(e));
        if (j && T.onFocus) {
          var q = { focused: j, label: u(j), isDisabled: d(j), isSelected: z, options: S, context: j === e ? "menu" : "value", selectValue: s };
          H = T.onFocus(q);
        }
        return H;
      }, [e, n, u, d, T, S, s]), D = ht(function() {
        var H = "";
        if (y && S.length && T.onFilter) {
          var j = b({ count: r.length });
          H = T.onFilter({ inputValue: c, resultsMessage: j });
        }
        return H;
      }, [r, c, y, T, S, b]), F = ht(function() {
        var H = "";
        if (T.guidance) {
          var j = n ? "value" : y ? "menu" : "input";
          H = T.guidance({ "aria-label": p, context: j, isDisabled: e && d(e), isMulti: h, isSearchable: m, tabSelectsValue: A });
        }
        return H;
      }, [p, e, n, h, d, m, y, T, A]), I = "".concat(O, " ").concat(D, " ").concat(F);
      return K(Cw, { "aria-live": E, "aria-atomic": "false", "aria-relevant": "additions text" }, o && K(B.Fragment, null, K("span", { id: "aria-selection" }, C), K("span", { id: "aria-context" }, I)));
    }, Qo = [{ base: "A", letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ" }, { base: "AA", letters: "Ꜳ" }, { base: "AE", letters: "ÆǼǢ" }, { base: "AO", letters: "Ꜵ" }, { base: "AU", letters: "Ꜷ" }, { base: "AV", letters: "ꜸꜺ" }, { base: "AY", letters: "Ꜽ" }, { base: "B", letters: "BⒷＢḂḄḆɃƂƁ" }, { base: "C", letters: "CⒸＣĆĈĊČÇḈƇȻꜾ" }, { base: "D", letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ" }, { base: "DZ", letters: "ǱǄ" }, { base: "Dz", letters: "ǲǅ" }, { base: "E", letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ" }, { base: "F", letters: "FⒻＦḞƑꝻ" }, { base: "G", letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ" }, { base: "H", letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ" }, { base: "I", letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ" }, { base: "J", letters: "JⒿＪĴɈ" }, { base: "K", letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ" }, { base: "L", letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ" }, { base: "LJ", letters: "Ǉ" }, { base: "Lj", letters: "ǈ" }, { base: "M", letters: "MⓂＭḾṀṂⱮƜ" }, { base: "N", letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ" }, { base: "NJ", letters: "Ǌ" }, { base: "Nj", letters: "ǋ" }, { base: "O", letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ" }, { base: "OI", letters: "Ƣ" }, { base: "OO", letters: "Ꝏ" }, { base: "OU", letters: "Ȣ" }, { base: "P", letters: "PⓅＰṔṖƤⱣꝐꝒꝔ" }, { base: "Q", letters: "QⓆＱꝖꝘɊ" }, { base: "R", letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ" }, { base: "S", letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ" }, { base: "T", letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ" }, { base: "TZ", letters: "Ꜩ" }, { base: "U", letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ" }, { base: "V", letters: "VⓋＶṼṾƲꝞɅ" }, { base: "VY", letters: "Ꝡ" }, { base: "W", letters: "WⓌＷẀẂŴẆẄẈⱲ" }, { base: "X", letters: "XⓍＸẊẌ" }, { base: "Y", letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ" }, { base: "Z", letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ" }, { base: "a", letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ" }, { base: "aa", letters: "ꜳ" }, { base: "ae", letters: "æǽǣ" }, { base: "ao", letters: "ꜵ" }, { base: "au", letters: "ꜷ" }, { base: "av", letters: "ꜹꜻ" }, { base: "ay", letters: "ꜽ" }, { base: "b", letters: "bⓑｂḃḅḇƀƃɓ" }, { base: "c", letters: "cⓒｃćĉċčçḉƈȼꜿↄ" }, { base: "d", letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ" }, { base: "dz", letters: "ǳǆ" }, { base: "e", letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ" }, { base: "f", letters: "fⓕｆḟƒꝼ" }, { base: "g", letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ" }, { base: "h", letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ" }, { base: "hv", letters: "ƕ" }, { base: "i", letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı" }, { base: "j", letters: "jⓙｊĵǰɉ" }, { base: "k", letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ" }, { base: "l", letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ" }, { base: "lj", letters: "ǉ" }, { base: "m", letters: "mⓜｍḿṁṃɱɯ" }, { base: "n", letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ" }, { base: "nj", letters: "ǌ" }, { base: "o", letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ" }, { base: "oi", letters: "ƣ" }, { base: "ou", letters: "ȣ" }, { base: "oo", letters: "ꝏ" }, { base: "p", letters: "pⓟｐṕṗƥᵽꝑꝓꝕ" }, { base: "q", letters: "qⓠｑɋꝗꝙ" }, { base: "r", letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ" }, { base: "s", letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ" }, { base: "t", letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ" }, { base: "tz", letters: "ꜩ" }, { base: "u", letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ" }, { base: "v", letters: "vⓥｖṽṿʋꝟʌ" }, { base: "vy", letters: "ꝡ" }, { base: "w", letters: "wⓦｗẁẃŵẇẅẘẉⱳ" }, { base: "x", letters: "xⓧｘẋẍ" }, { base: "y", letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ" }, { base: "z", letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ" }], Pw = new RegExp("[" + Qo.map(function(t) {
      return t.letters;
    }).join("") + "]", "g"), th = {}, es = 0; es < Qo.length; es++)
      for (var ts = Qo[es], ns = 0; ns < ts.letters.length; ns++)
        th[ts.letters[ns]] = ts.base;
    var nh = function(t) {
      return t.replace(Pw, function(i) {
        return th[i];
      });
    }, Dw = Sw(nh), ih = function(t) {
      return t.replace(/^\s+|\s+$/g, "");
    }, Ow = function(t) {
      return "".concat(t.label, " ").concat(t.value);
    }, Rw = function(t) {
      return function(i, e) {
        var n = De({ ignoreCase: !0, ignoreAccents: !0, stringify: Ow, trim: !0, matchFrom: "any" }, t), r = n.ignoreCase, o = n.ignoreAccents, s = n.stringify, a = n.trim, l = n.matchFrom, u = a ? ih(e) : e, c = a ? ih(s(i)) : s(i);
        return r && (u = u.toLowerCase(), c = c.toLowerCase()), o && (u = Dw(u), c = nh(c)), l === "start" ? c.substr(0, u.length) === u : c.indexOf(u) > -1;
      };
    };
    function kw(t) {
      t.in, t.out, t.onExited, t.appear, t.enter, t.exit;
      var i = t.innerRef;
      t.emotion;
      var e = dn(t, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);
      return K("input", Z({ ref: i }, e, { css: Wo({ label: "dummyInput", background: 0, border: 0, fontSize: "inherit", outline: 0, padding: 0, width: 1, color: "transparent", left: -100, opacity: 0, position: "relative", transform: "scale(0)" }, "", "") }));
    }
    var Bw = function(t) {
      t.preventDefault(), t.stopPropagation();
    };
    function Fw(t) {
      var i = t.isEnabled, e = t.onBottomArrive, n = t.onBottomLeave, r = t.onTopArrive, o = t.onTopLeave, s = Je(!1), a = Je(!1), l = Je(0), u = Je(null), c = Qe(function(b, A) {
        if (u.current !== null) {
          var p = u.current, E = p.scrollTop, T = p.scrollHeight, C = p.clientHeight, O = u.current, D = A > 0, F = T - C - E, I = !1;
          F > A && s.current && (n && n(b), s.current = !1), D && a.current && (o && o(b), a.current = !1), D && A > F ? (e && !s.current && e(b), O.scrollTop = T, I = !0, s.current = !0) : !D && -A > E && (r && !a.current && r(b), O.scrollTop = 0, I = !0, a.current = !0), I && Bw(b);
        }
      }, []), h = Qe(function(b) {
        c(b, b.deltaY);
      }, [c]), d = Qe(function(b) {
        l.current = b.changedTouches[0].clientY;
      }, []), m = Qe(function(b) {
        var A = l.current - b.changedTouches[0].clientY;
        c(b, A);
      }, [c]), y = Qe(function(b) {
        if (b) {
          var A = xE ? { passive: !1 } : !1;
          typeof b.addEventListener == "function" && b.addEventListener("wheel", h, A), typeof b.addEventListener == "function" && b.addEventListener("touchstart", d, A), typeof b.addEventListener == "function" && b.addEventListener("touchmove", m, A);
        }
      }, [m, d, h]), S = Qe(function(b) {
        !b || (typeof b.removeEventListener == "function" && b.removeEventListener("wheel", h, !1), typeof b.removeEventListener == "function" && b.removeEventListener("touchstart", d, !1), typeof b.removeEventListener == "function" && b.removeEventListener("touchmove", m, !1));
      }, [m, d, h]);
      return Rt(function() {
        if (i) {
          var b = u.current;
          return y(b), function() {
            S(b);
          };
        }
      }, [i, y, S]), function(b) {
        u.current = b;
      };
    }
    var rh = ["boxSizing", "height", "overflow", "paddingRight", "position"], oh = { boxSizing: "border-box", overflow: "hidden", position: "relative", height: "100%" };
    function sh(t) {
      t.preventDefault();
    }
    function ah(t) {
      t.stopPropagation();
    }
    function lh() {
      var t = this.scrollTop, i = this.scrollHeight, e = t + this.offsetHeight;
      t === 0 ? this.scrollTop = 1 : e === i && (this.scrollTop = t - 1);
    }
    function uh() {
      return "ontouchstart" in window || navigator.maxTouchPoints;
    }
    var ch = !!(typeof window < "u" && window.document && window.document.createElement), Yn = 0, gn = { capture: !1, passive: !1 };
    function Mw(t) {
      var i = t.isEnabled, e = t.accountForScrollbars, n = e === void 0 ? !0 : e, r = Je({}), o = Je(null), s = Qe(function(l) {
        if (ch) {
          var u = document.body, c = u && u.style;
          if (n && rh.forEach(function(y) {
            var S = c && c[y];
            r.current[y] = S;
          }), n && Yn < 1) {
            var h = parseInt(r.current.paddingRight, 10) || 0, d = document.body ? document.body.clientWidth : 0, m = window.innerWidth - d + h || 0;
            Object.keys(oh).forEach(function(y) {
              var S = oh[y];
              c && (c[y] = S);
            }), c && (c.paddingRight = "".concat(m, "px"));
          }
          u && uh() && (u.addEventListener("touchmove", sh, gn), l && (l.addEventListener("touchstart", lh, gn), l.addEventListener("touchmove", ah, gn))), Yn += 1;
        }
      }, []), a = Qe(function(l) {
        if (ch) {
          var u = document.body, c = u && u.style;
          Yn = Math.max(Yn - 1, 0), n && Yn < 1 && rh.forEach(function(h) {
            var d = r.current[h];
            c && (c[h] = d);
          }), u && uh() && (u.removeEventListener("touchmove", sh, gn), l && (l.removeEventListener("touchstart", lh, gn), l.removeEventListener("touchmove", ah, gn)));
        }
      }, []);
      return Rt(function() {
        if (i) {
          var l = o.current;
          return s(l), function() {
            a(l);
          };
        }
      }, [i, s, a]), function(l) {
        o.current = l;
      };
    }
    var Iw = function() {
      return document.activeElement && document.activeElement.blur();
    }, Lw = { name: "1kfdb0e", styles: "position:fixed;left:0;bottom:0;right:0;top:0" };
    function Nw(t) {
      var i = t.children, e = t.lockEnabled, n = t.captureEnabled, r = n === void 0 ? !0 : n, o = t.onBottomArrive, s = t.onBottomLeave, a = t.onTopArrive, l = t.onTopLeave, u = Fw({ isEnabled: r, onBottomArrive: o, onBottomLeave: s, onTopArrive: a, onTopLeave: l }), c = Mw({ isEnabled: e }), h = function(d) {
        u(d), c(d);
      };
      return K(B.Fragment, null, e && K("div", { onClick: Iw, css: Lw }), i(h));
    }
    var Hw = function(t) {
      return t.label;
    }, zw = function(t) {
      return t.label;
    }, jw = function(t) {
      return t.value;
    }, Uw = function(t) {
      return !!t.isDisabled;
    }, Vw = { clearIndicator: UE, container: BE, control: XE, dropdownIndicator: zE, group: ZE, groupHeading: JE, indicatorsContainer: LE, indicatorSeparator: WE, input: ew, loadingIndicator: $E, loadingMessage: OE, menu: CE, menuList: AE, menuPortal: RE, multiValue: iw, multiValueLabel: rw, multiValueRemove: ow, noOptionsMessage: DE, option: uw, placeholder: hw, singleValue: pw, valueContainer: ME }, Ww = { primary: "#2684FF", primary75: "#4C9AFF", primary50: "#B2D4FF", primary25: "#DEEBFF", danger: "#DE350B", dangerLight: "#FFBDAD", neutral0: "hsl(0, 0%, 100%)", neutral5: "hsl(0, 0%, 95%)", neutral10: "hsl(0, 0%, 90%)", neutral20: "hsl(0, 0%, 80%)", neutral30: "hsl(0, 0%, 70%)", neutral40: "hsl(0, 0%, 60%)", neutral50: "hsl(0, 0%, 50%)", neutral60: "hsl(0, 0%, 40%)", neutral70: "hsl(0, 0%, 30%)", neutral80: "hsl(0, 0%, 20%)", neutral90: "hsl(0, 0%, 10%)" }, Gw = 4, hh = 4, qw = 38, $w = hh * 2, Xw = { baseUnit: hh, controlHeight: qw, menuGutter: $w }, is = { borderRadius: Gw, colors: Ww, spacing: Xw }, Yw = { "aria-live": "polite", backspaceRemovesValue: !0, blurInputOnSelect: Hc(), captureMenuScroll: !Hc(), closeMenuOnSelect: !0, closeMenuOnScroll: !1, components: {}, controlShouldRenderValue: !0, escapeClearsValue: !1, filterOption: Rw(), formatGroupLabel: Hw, getOptionLabel: zw, getOptionValue: jw, isDisabled: !1, isLoading: !1, isMulti: !1, isRtl: !1, isSearchable: !0, isOptionDisabled: Uw, loadingMessage: function() {
      return "Loading...";
    }, maxMenuHeight: 300, minMenuHeight: 140, menuIsOpen: !1, menuPlacement: "bottom", menuPosition: "absolute", menuShouldBlockScroll: !1, menuShouldScrollIntoView: !wE(), noOptionsMessage: function() {
      return "No options";
    }, openMenuOnFocus: !1, openMenuOnClick: !0, options: [], pageSize: 5, placeholder: "Select...", screenReaderStatus: function(t) {
      var i = t.count;
      return "".concat(i, " result").concat(i !== 1 ? "s" : "", " available");
    }, styles: {}, tabIndex: "0", tabSelectsValue: !0 };
    function dh(t, i, e, n) {
      var r = vh(t, i, e), o = yh(t, i, e), s = mh(t, i), a = or(t, i);
      return { type: "option", data: i, isDisabled: r, isSelected: o, label: s, value: a, index: n };
    }
    function ph(t, i) {
      return t.options.map(function(e, n) {
        if (e.options) {
          var r = e.options.map(function(s, a) {
            return dh(t, s, i, a);
          }).filter(function(s) {
            return fh(t, s);
          });
          return r.length > 0 ? { type: "group", data: e, options: r, index: n } : void 0;
        }
        var o = dh(t, e, i, n);
        return fh(t, o) ? o : void 0;
      }).filter(function(e) {
        return !!e;
      });
    }
    function gh(t) {
      return t.reduce(function(i, e) {
        return e.type === "group" ? i.push.apply(i, Qc(e.options.map(function(n) {
          return n.data;
        }))) : i.push(e.data), i;
      }, []);
    }
    function Zw(t, i) {
      return gh(ph(t, i));
    }
    function fh(t, i) {
      var e = t.inputValue, n = e === void 0 ? "" : e, r = i.data, o = i.isSelected, s = i.label, a = i.value;
      return (!wh(t) || !o) && Eh(t, { label: s, value: a, data: r }, n);
    }
    function Kw(t, i) {
      var e = t.focusedValue, n = t.selectValue, r = n.indexOf(e);
      if (r > -1) {
        var o = i.indexOf(e);
        if (o > -1)
          return e;
        if (r < i.length)
          return i[r];
      }
      return null;
    }
    function Jw(t, i) {
      var e = t.focusedOption;
      return e && i.indexOf(e) > -1 ? e : i[0];
    }
    var mh = function(t, i) {
      return t.getOptionLabel(i);
    }, or = function(t, i) {
      return t.getOptionValue(i);
    };
    function vh(t, i, e) {
      return typeof t.isOptionDisabled == "function" ? t.isOptionDisabled(i, e) : !1;
    }
    function yh(t, i, e) {
      if (e.indexOf(i) > -1)
        return !0;
      if (typeof t.isOptionSelected == "function")
        return t.isOptionSelected(i, e);
      var n = or(t, i);
      return e.some(function(r) {
        return or(t, r) === n;
      });
    }
    function Eh(t, i, e) {
      return t.filterOption ? t.filterOption(i, e) : !0;
    }
    var wh = function(t) {
      var i = t.hideSelectedOptions, e = t.isMulti;
      return i === void 0 ? e : i;
    }, Qw = 1, bh = function(t) {
      Ji(e, t);
      var i = er(e);
      function e(n) {
        var r;
        return Yi(this, e), r = i.call(this, n), r.state = { ariaSelection: null, focusedOption: null, focusedValue: null, inputIsHidden: !1, isFocused: !1, selectValue: [], clearFocusValueOnUpdate: !1, inputIsHiddenAfterUpdate: void 0, prevProps: void 0 }, r.blockOptionHover = !1, r.isComposing = !1, r.commonProps = void 0, r.initialTouchX = 0, r.initialTouchY = 0, r.instancePrefix = "", r.openAfterFocus = !1, r.scrollToFocusedOptionOnUpdate = !1, r.userIsDragging = void 0, r.controlRef = null, r.getControlRef = function(o) {
          r.controlRef = o;
        }, r.focusedOptionRef = null, r.getFocusedOptionRef = function(o) {
          r.focusedOptionRef = o;
        }, r.menuListRef = null, r.getMenuListRef = function(o) {
          r.menuListRef = o;
        }, r.inputRef = null, r.getInputRef = function(o) {
          r.inputRef = o;
        }, r.focus = r.focusInput, r.blur = r.blurInput, r.onChange = function(o, s) {
          var a = r.props, l = a.onChange, u = a.name;
          s.name = u, r.ariaOnChange(o, s), l(o, s);
        }, r.setValue = function(o) {
          var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "set-value", a = arguments.length > 2 ? arguments[2] : void 0, l = r.props, u = l.closeMenuOnSelect, c = l.isMulti;
          r.onInputChange("", { action: "set-value" }), u && (r.setState({ inputIsHiddenAfterUpdate: !c }), r.onMenuClose()), r.setState({ clearFocusValueOnUpdate: !0 }), r.onChange(o, { action: s, option: a });
        }, r.selectOption = function(o) {
          var s = r.props, a = s.blurInputOnSelect, l = s.isMulti, u = s.name, c = r.state.selectValue, h = l && r.isOptionSelected(o, c), d = r.isOptionDisabled(o, c);
          if (h) {
            var m = r.getOptionValue(o);
            r.setValue(c.filter(function(y) {
              return r.getOptionValue(y) !== m;
            }), "deselect-option", o);
          } else if (!d)
            l ? r.setValue([].concat(Qc(c), [o]), "select-option", o) : r.setValue(o, "select-option");
          else {
            r.ariaOnChange(o, { action: "select-option", name: u });
            return;
          }
          a && r.blurInput();
        }, r.removeValue = function(o) {
          var s = r.props.isMulti, a = r.state.selectValue, l = r.getOptionValue(o), u = a.filter(function(h) {
            return r.getOptionValue(h) !== l;
          }), c = s ? u : u[0] || null;
          r.onChange(c, { action: "remove-value", removedValue: o }), r.focusInput();
        }, r.clearValue = function() {
          var o = r.state.selectValue;
          r.onChange(r.props.isMulti ? [] : null, { action: "clear", removedValues: o });
        }, r.popValue = function() {
          var o = r.props.isMulti, s = r.state.selectValue, a = s[s.length - 1], l = s.slice(0, s.length - 1), u = o ? l : l[0] || null;
          r.onChange(u, { action: "pop-value", removedValue: a });
        }, r.getValue = function() {
          return r.state.selectValue;
        }, r.cx = function() {
          for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++)
            s[a] = arguments[a];
          return fE.apply(void 0, [r.props.classNamePrefix].concat(s));
        }, r.getOptionLabel = function(o) {
          return mh(r.props, o);
        }, r.getOptionValue = function(o) {
          return or(r.props, o);
        }, r.getStyles = function(o, s) {
          var a = Vw[o](s);
          a.boxSizing = "border-box";
          var l = r.props.styles[o];
          return l ? l(a, s) : a;
        }, r.getElementId = function(o) {
          return "".concat(r.instancePrefix, "-").concat(o);
        }, r.getComponents = function() {
          return mw(r.props);
        }, r.buildCategorizedOptions = function() {
          return ph(r.props, r.state.selectValue);
        }, r.getCategorizedOptions = function() {
          return r.props.menuIsOpen ? r.buildCategorizedOptions() : [];
        }, r.buildFocusableOptions = function() {
          return gh(r.buildCategorizedOptions());
        }, r.getFocusableOptions = function() {
          return r.props.menuIsOpen ? r.buildFocusableOptions() : [];
        }, r.ariaOnChange = function(o, s) {
          r.setState({ ariaSelection: De({ value: o }, s) });
        }, r.onMenuMouseDown = function(o) {
          o.button === 0 && (o.stopPropagation(), o.preventDefault(), r.focusInput());
        }, r.onMenuMouseMove = function(o) {
          r.blockOptionHover = !1;
        }, r.onControlMouseDown = function(o) {
          var s = r.props.openMenuOnClick;
          r.state.isFocused ? r.props.menuIsOpen ? o.target.tagName !== "INPUT" && o.target.tagName !== "TEXTAREA" && r.onMenuClose() : s && r.openMenu("first") : (s && (r.openAfterFocus = !0), r.focusInput()), o.target.tagName !== "INPUT" && o.target.tagName !== "TEXTAREA" && o.preventDefault();
        }, r.onDropdownIndicatorMouseDown = function(o) {
          if (!(o && o.type === "mousedown" && o.button !== 0) && !r.props.isDisabled) {
            var s = r.props, a = s.isMulti, l = s.menuIsOpen;
            r.focusInput(), l ? (r.setState({ inputIsHiddenAfterUpdate: !a }), r.onMenuClose()) : r.openMenu("first"), o.preventDefault(), o.stopPropagation();
          }
        }, r.onClearIndicatorMouseDown = function(o) {
          o && o.type === "mousedown" && o.button !== 0 || (r.clearValue(), o.stopPropagation(), r.openAfterFocus = !1, o.type === "touchend" ? r.focusInput() : setTimeout(function() {
            return r.focusInput();
          }));
        }, r.onScroll = function(o) {
          typeof r.props.closeMenuOnScroll == "boolean" ? o.target instanceof HTMLElement && Xo(o.target) && r.props.onMenuClose() : typeof r.props.closeMenuOnScroll == "function" && r.props.closeMenuOnScroll(o) && r.props.onMenuClose();
        }, r.onCompositionStart = function() {
          r.isComposing = !0;
        }, r.onCompositionEnd = function() {
          r.isComposing = !1;
        }, r.onTouchStart = function(o) {
          var s = o.touches, a = s && s.item(0);
          !a || (r.initialTouchX = a.clientX, r.initialTouchY = a.clientY, r.userIsDragging = !1);
        }, r.onTouchMove = function(o) {
          var s = o.touches, a = s && s.item(0);
          if (a) {
            var l = Math.abs(a.clientX - r.initialTouchX), u = Math.abs(a.clientY - r.initialTouchY), c = 5;
            r.userIsDragging = l > c || u > c;
          }
        }, r.onTouchEnd = function(o) {
          r.userIsDragging || (r.controlRef && !r.controlRef.contains(o.target) && r.menuListRef && !r.menuListRef.contains(o.target) && r.blurInput(), r.initialTouchX = 0, r.initialTouchY = 0);
        }, r.onControlTouchEnd = function(o) {
          r.userIsDragging || r.onControlMouseDown(o);
        }, r.onClearIndicatorTouchEnd = function(o) {
          r.userIsDragging || r.onClearIndicatorMouseDown(o);
        }, r.onDropdownIndicatorTouchEnd = function(o) {
          r.userIsDragging || r.onDropdownIndicatorMouseDown(o);
        }, r.handleInputChange = function(o) {
          var s = o.currentTarget.value;
          r.setState({ inputIsHiddenAfterUpdate: !1 }), r.onInputChange(s, { action: "input-change" }), r.props.menuIsOpen || r.onMenuOpen();
        }, r.onInputFocus = function(o) {
          r.props.onFocus && r.props.onFocus(o), r.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }), (r.openAfterFocus || r.props.openMenuOnFocus) && r.openMenu("first"), r.openAfterFocus = !1;
        }, r.onInputBlur = function(o) {
          if (r.menuListRef && r.menuListRef.contains(document.activeElement)) {
            r.inputRef.focus();
            return;
          }
          r.props.onBlur && r.props.onBlur(o), r.onInputChange("", { action: "input-blur" }), r.onMenuClose(), r.setState({ focusedValue: null, isFocused: !1 });
        }, r.onOptionHover = function(o) {
          r.blockOptionHover || r.state.focusedOption === o || r.setState({ focusedOption: o });
        }, r.shouldHideSelectedOptions = function() {
          return wh(r.props);
        }, r.onKeyDown = function(o) {
          var s = r.props, a = s.isMulti, l = s.backspaceRemovesValue, u = s.escapeClearsValue, c = s.inputValue, h = s.isClearable, d = s.isDisabled, m = s.menuIsOpen, y = s.onKeyDown, S = s.tabSelectsValue, b = s.openMenuOnFocus, A = r.state, p = A.focusedOption, E = A.focusedValue, T = A.selectValue;
          if (!d && !(typeof y == "function" && (y(o), o.defaultPrevented))) {
            switch (r.blockOptionHover = !0, o.key) {
              case "ArrowLeft":
                if (!a || c)
                  return;
                r.focusValue("previous");
                break;
              case "ArrowRight":
                if (!a || c)
                  return;
                r.focusValue("next");
                break;
              case "Delete":
              case "Backspace":
                if (c)
                  return;
                if (E)
                  r.removeValue(E);
                else {
                  if (!l)
                    return;
                  a ? r.popValue() : h && r.clearValue();
                }
                break;
              case "Tab":
                if (r.isComposing || o.shiftKey || !m || !S || !p || b && r.isOptionSelected(p, T))
                  return;
                r.selectOption(p);
                break;
              case "Enter":
                if (o.keyCode === 229)
                  break;
                if (m) {
                  if (!p || r.isComposing)
                    return;
                  r.selectOption(p);
                  break;
                }
                return;
              case "Escape":
                m ? (r.setState({ inputIsHiddenAfterUpdate: !1 }), r.onInputChange("", { action: "menu-close" }), r.onMenuClose()) : h && u && r.clearValue();
                break;
              case " ":
                if (c)
                  return;
                if (!m) {
                  r.openMenu("first");
                  break;
                }
                if (!p)
                  return;
                r.selectOption(p);
                break;
              case "ArrowUp":
                m ? r.focusOption("up") : r.openMenu("last");
                break;
              case "ArrowDown":
                m ? r.focusOption("down") : r.openMenu("first");
                break;
              case "PageUp":
                if (!m)
                  return;
                r.focusOption("pageup");
                break;
              case "PageDown":
                if (!m)
                  return;
                r.focusOption("pagedown");
                break;
              case "Home":
                if (!m)
                  return;
                r.focusOption("first");
                break;
              case "End":
                if (!m)
                  return;
                r.focusOption("last");
                break;
              default:
                return;
            }
            o.preventDefault();
          }
        }, r.instancePrefix = "react-select-" + (r.props.instanceId || ++Qw), r.state.selectValue = Ic(n.value), r;
      }
      return Zi(e, [{ key: "componentDidMount", value: function() {
        this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput();
      } }, { key: "componentDidUpdate", value: function(n) {
        var r = this.props, o = r.isDisabled, s = r.menuIsOpen, a = this.state.isFocused;
        (a && !o && n.isDisabled || a && s && !n.menuIsOpen) && this.focusInput(), a && o && !n.isDisabled && this.setState({ isFocused: !1 }, this.onMenuClose), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (yE(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
      } }, { key: "componentWillUnmount", value: function() {
        this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
      } }, { key: "onMenuOpen", value: function() {
        this.props.onMenuOpen();
      } }, { key: "onMenuClose", value: function() {
        this.onInputChange("", { action: "menu-close" }), this.props.onMenuClose();
      } }, { key: "onInputChange", value: function(n, r) {
        this.props.onInputChange(n, r);
      } }, { key: "focusInput", value: function() {
        !this.inputRef || this.inputRef.focus();
      } }, { key: "blurInput", value: function() {
        !this.inputRef || this.inputRef.blur();
      } }, { key: "openMenu", value: function(n) {
        var r = this, o = this.state, s = o.selectValue, a = o.isFocused, l = this.buildFocusableOptions(), u = n === "first" ? 0 : l.length - 1;
        if (!this.props.isMulti) {
          var c = l.indexOf(s[0]);
          c > -1 && (u = c);
        }
        this.scrollToFocusedOptionOnUpdate = !(a && this.menuListRef), this.setState({ inputIsHiddenAfterUpdate: !1, focusedValue: null, focusedOption: l[u] }, function() {
          return r.onMenuOpen();
        });
      } }, { key: "focusValue", value: function(n) {
        var r = this.state, o = r.selectValue, s = r.focusedValue;
        if (this.props.isMulti) {
          this.setState({ focusedOption: null });
          var a = o.indexOf(s);
          s || (a = -1);
          var l = o.length - 1, u = -1;
          if (o.length) {
            switch (n) {
              case "previous":
                a === 0 ? u = 0 : a === -1 ? u = l : u = a - 1;
                break;
              case "next":
                a > -1 && a < l && (u = a + 1);
                break;
            }
            this.setState({ inputIsHidden: u !== -1, focusedValue: o[u] });
          }
        }
      } }, { key: "focusOption", value: function() {
        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", r = this.props.pageSize, o = this.state.focusedOption, s = this.getFocusableOptions();
        if (s.length) {
          var a = 0, l = s.indexOf(o);
          o || (l = -1), n === "up" ? a = l > 0 ? l - 1 : s.length - 1 : n === "down" ? a = (l + 1) % s.length : n === "pageup" ? (a = l - r, a < 0 && (a = 0)) : n === "pagedown" ? (a = l + r, a > s.length - 1 && (a = s.length - 1)) : n === "last" && (a = s.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({ focusedOption: s[a], focusedValue: null });
        }
      } }, { key: "getTheme", value: function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(is) : De(De({}, is), this.props.theme) : is;
      } }, { key: "getCommonProps", value: function() {
        var n = this.clearValue, r = this.cx, o = this.getStyles, s = this.getValue, a = this.selectOption, l = this.setValue, u = this.props, c = u.isMulti, h = u.isRtl, d = u.options, m = this.hasValue();
        return { clearValue: n, cx: r, getStyles: o, getValue: s, hasValue: m, isMulti: c, isRtl: h, options: d, selectOption: a, selectProps: u, setValue: l, theme: this.getTheme() };
      } }, { key: "hasValue", value: function() {
        var n = this.state.selectValue;
        return n.length > 0;
      } }, { key: "hasOptions", value: function() {
        return !!this.getFocusableOptions().length;
      } }, { key: "isClearable", value: function() {
        var n = this.props, r = n.isClearable, o = n.isMulti;
        return r === void 0 ? o : r;
      } }, { key: "isOptionDisabled", value: function(n, r) {
        return vh(this.props, n, r);
      } }, { key: "isOptionSelected", value: function(n, r) {
        return yh(this.props, n, r);
      } }, { key: "filterOption", value: function(n, r) {
        return Eh(this.props, n, r);
      } }, { key: "formatOptionLabel", value: function(n, r) {
        if (typeof this.props.formatOptionLabel == "function") {
          var o = this.props.inputValue, s = this.state.selectValue;
          return this.props.formatOptionLabel(n, { context: r, inputValue: o, selectValue: s });
        } else
          return this.getOptionLabel(n);
      } }, { key: "formatGroupLabel", value: function(n) {
        return this.props.formatGroupLabel(n);
      } }, { key: "startListeningComposition", value: function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      } }, { key: "stopListeningComposition", value: function() {
        document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
      } }, { key: "startListeningToTouch", value: function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      } }, { key: "stopListeningToTouch", value: function() {
        document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
      } }, { key: "renderInput", value: function() {
        var n = this.props, r = n.isDisabled, o = n.isSearchable, s = n.inputId, a = n.inputValue, l = n.tabIndex, u = n.form, c = this.getComponents(), h = c.Input, d = this.state.inputIsHidden, m = this.commonProps, y = s || this.getElementId("input"), S = { "aria-autocomplete": "list", "aria-label": this.props["aria-label"], "aria-labelledby": this.props["aria-labelledby"] };
        return o ? B.createElement(h, Z({}, m, { autoCapitalize: "none", autoComplete: "off", autoCorrect: "off", id: y, innerRef: this.getInputRef, isDisabled: r, isHidden: d, onBlur: this.onInputBlur, onChange: this.handleInputChange, onFocus: this.onInputFocus, spellCheck: "false", tabIndex: l, form: u, type: "text", value: a }, S)) : B.createElement(kw, Z({ id: y, innerRef: this.getInputRef, onBlur: this.onInputBlur, onChange: tr, onFocus: this.onInputFocus, readOnly: !0, disabled: r, tabIndex: l, form: u, value: "" }, S));
      } }, { key: "renderPlaceholderOrValue", value: function() {
        var n = this, r = this.getComponents(), o = r.MultiValue, s = r.MultiValueContainer, a = r.MultiValueLabel, l = r.MultiValueRemove, u = r.SingleValue, c = r.Placeholder, h = this.commonProps, d = this.props, m = d.controlShouldRenderValue, y = d.isDisabled, S = d.isMulti, b = d.inputValue, A = d.placeholder, p = this.state, E = p.selectValue, T = p.focusedValue, C = p.isFocused;
        if (!this.hasValue() || !m)
          return b ? null : B.createElement(c, Z({}, h, { key: "placeholder", isDisabled: y, isFocused: C }), A);
        if (S) {
          var O = E.map(function(F, I) {
            var H = F === T;
            return B.createElement(o, Z({}, h, { components: { Container: s, Label: a, Remove: l }, isFocused: H, isDisabled: y, key: "".concat(n.getOptionValue(F)).concat(I), index: I, removeProps: { onClick: function() {
              return n.removeValue(F);
            }, onTouchEnd: function() {
              return n.removeValue(F);
            }, onMouseDown: function(j) {
              j.preventDefault(), j.stopPropagation();
            } }, data: F }), n.formatOptionLabel(F, "value"));
          });
          return O;
        }
        if (b)
          return null;
        var D = E[0];
        return B.createElement(u, Z({}, h, { data: D, isDisabled: y }), this.formatOptionLabel(D, "value"));
      } }, { key: "renderClearIndicator", value: function() {
        var n = this.getComponents(), r = n.ClearIndicator, o = this.commonProps, s = this.props, a = s.isDisabled, l = s.isLoading, u = this.state.isFocused;
        if (!this.isClearable() || !r || a || !this.hasValue() || l)
          return null;
        var c = { onMouseDown: this.onClearIndicatorMouseDown, onTouchEnd: this.onClearIndicatorTouchEnd, "aria-hidden": "true" };
        return B.createElement(r, Z({}, o, { innerProps: c, isFocused: u }));
      } }, { key: "renderLoadingIndicator", value: function() {
        var n = this.getComponents(), r = n.LoadingIndicator, o = this.commonProps, s = this.props, a = s.isDisabled, l = s.isLoading, u = this.state.isFocused;
        if (!r || !l)
          return null;
        var c = { "aria-hidden": "true" };
        return B.createElement(r, Z({}, o, { innerProps: c, isDisabled: a, isFocused: u }));
      } }, { key: "renderIndicatorSeparator", value: function() {
        var n = this.getComponents(), r = n.DropdownIndicator, o = n.IndicatorSeparator;
        if (!r || !o)
          return null;
        var s = this.commonProps, a = this.props.isDisabled, l = this.state.isFocused;
        return B.createElement(o, Z({}, s, { isDisabled: a, isFocused: l }));
      } }, { key: "renderDropdownIndicator", value: function() {
        var n = this.getComponents(), r = n.DropdownIndicator;
        if (!r)
          return null;
        var o = this.commonProps, s = this.props.isDisabled, a = this.state.isFocused, l = { onMouseDown: this.onDropdownIndicatorMouseDown, onTouchEnd: this.onDropdownIndicatorTouchEnd, "aria-hidden": "true" };
        return B.createElement(r, Z({}, o, { innerProps: l, isDisabled: s, isFocused: a }));
      } }, { key: "renderMenu", value: function() {
        var n = this, r = this.getComponents(), o = r.Group, s = r.GroupHeading, a = r.Menu, l = r.MenuList, u = r.MenuPortal, c = r.LoadingMessage, h = r.NoOptionsMessage, d = r.Option, m = this.commonProps, y = this.state.focusedOption, S = this.props, b = S.captureMenuScroll, A = S.inputValue, p = S.isLoading, E = S.loadingMessage, T = S.minMenuHeight, C = S.maxMenuHeight, O = S.menuIsOpen, D = S.menuPlacement, F = S.menuPosition, I = S.menuPortalTarget, H = S.menuShouldBlockScroll, j = S.menuShouldScrollIntoView, z = S.noOptionsMessage, q = S.onMenuScrollToTop, $ = S.onMenuScrollToBottom;
        if (!O)
          return null;
        var Q = function(se, Et) {
          var Ye = se.type, Me = se.data, We = se.isDisabled, st = se.isSelected, $e = se.label, wn = se.value, bn = y === Me, Ut = We ? void 0 : function() {
            return n.onOptionHover(Me);
          }, xn = We ? void 0 : function() {
            return n.selectOption(Me);
          }, Sn = "".concat(n.getElementId("option"), "-").concat(Et), _n = { id: Sn, onClick: xn, onMouseMove: Ut, onMouseOver: Ut, tabIndex: -1 };
          return B.createElement(d, Z({}, m, { innerProps: _n, data: Me, isDisabled: We, isSelected: st, key: Sn, label: $e, type: Ye, value: wn, isFocused: bn, innerRef: bn ? n.getFocusedOptionRef : void 0 }), n.formatOptionLabel(se.data, "menu"));
        }, J;
        if (this.hasOptions())
          J = this.getCategorizedOptions().map(function(se) {
            if (se.type === "group") {
              var Et = se.data, Ye = se.options, Me = se.index, We = "".concat(n.getElementId("group"), "-").concat(Me), st = "".concat(We, "-heading");
              return B.createElement(o, Z({}, m, { key: We, data: Et, options: Ye, Heading: s, headingProps: { id: st, data: se.data }, label: n.formatGroupLabel(se.data) }), se.options.map(function($e) {
                return Q($e, "".concat(Me, "-").concat($e.index));
              }));
            } else if (se.type === "option")
              return Q(se, "".concat(se.index));
          });
        else if (p) {
          var te = E({ inputValue: A });
          if (te === null)
            return null;
          J = B.createElement(c, m, te);
        } else {
          var oe = z({ inputValue: A });
          if (oe === null)
            return null;
          J = B.createElement(h, m, oe);
        }
        var pe = { minMenuHeight: T, maxMenuHeight: C, menuPlacement: D, menuPosition: F, menuShouldScrollIntoView: j }, V = B.createElement(Uc, Z({}, m, pe), function(se) {
          var Et = se.ref, Ye = se.placerProps, Me = Ye.placement, We = Ye.maxHeight;
          return B.createElement(a, Z({}, m, pe, { innerRef: Et, innerProps: { onMouseDown: n.onMenuMouseDown, onMouseMove: n.onMenuMouseMove }, isLoading: p, placement: Me }), B.createElement(Nw, { captureEnabled: b, onTopArrive: q, onBottomArrive: $, lockEnabled: H }, function(st) {
            return B.createElement(l, Z({}, m, { innerRef: function($e) {
              n.getMenuListRef($e), st($e);
            }, isLoading: p, maxHeight: We, focusedOption: y }), J);
          }));
        });
        return I || F === "fixed" ? B.createElement(u, Z({}, m, { appendTo: I, controlElement: this.controlRef, menuPlacement: D, menuPosition: F }), V) : V;
      } }, { key: "renderFormField", value: function() {
        var n = this, r = this.props, o = r.delimiter, s = r.isDisabled, a = r.isMulti, l = r.name, u = this.state.selectValue;
        if (!(!l || s))
          if (a)
            if (o) {
              var c = u.map(function(m) {
                return n.getOptionValue(m);
              }).join(o);
              return B.createElement("input", { name: l, type: "hidden", value: c });
            } else {
              var h = u.length > 0 ? u.map(function(m, y) {
                return B.createElement("input", { key: "i-".concat(y), name: l, type: "hidden", value: n.getOptionValue(m) });
              }) : B.createElement("input", { name: l, type: "hidden" });
              return B.createElement("div", null, h);
            }
          else {
            var d = u[0] ? this.getOptionValue(u[0]) : "";
            return B.createElement("input", { name: l, type: "hidden", value: d });
          }
      } }, { key: "renderLiveRegion", value: function() {
        var n = this.commonProps, r = this.state, o = r.ariaSelection, s = r.focusedOption, a = r.focusedValue, l = r.isFocused, u = r.selectValue, c = this.getFocusableOptions();
        return B.createElement(Aw, Z({}, n, { ariaSelection: o, focusedOption: s, focusedValue: a, isFocused: l, selectValue: u, focusableOptions: c }));
      } }, { key: "render", value: function() {
        var n = this.getComponents(), r = n.Control, o = n.IndicatorsContainer, s = n.SelectContainer, a = n.ValueContainer, l = this.props, u = l.className, c = l.id, h = l.isDisabled, d = l.menuIsOpen, m = this.state.isFocused, y = this.commonProps = this.getCommonProps();
        return B.createElement(s, Z({}, y, { className: u, innerProps: { id: c, onKeyDown: this.onKeyDown }, isDisabled: h, isFocused: m }), this.renderLiveRegion(), B.createElement(r, Z({}, y, { innerRef: this.getControlRef, innerProps: { onMouseDown: this.onControlMouseDown, onTouchEnd: this.onControlTouchEnd }, isDisabled: h, isFocused: m, menuIsOpen: d }), B.createElement(a, Z({}, y, { isDisabled: h }), this.renderPlaceholderOrValue(), this.renderInput()), B.createElement(o, Z({}, y, { isDisabled: h }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
      } }], [{ key: "getDerivedStateFromProps", value: function(n, r) {
        var o = r.prevProps, s = r.clearFocusValueOnUpdate, a = r.inputIsHiddenAfterUpdate, l = n.options, u = n.value, c = n.menuIsOpen, h = n.inputValue, d = {};
        if (o && (u !== o.value || l !== o.options || c !== o.menuIsOpen || h !== o.inputValue)) {
          var m = Ic(u), y = c ? Zw(n, m) : [], S = s ? Kw(r, m) : null, b = Jw(r, y);
          d = { selectValue: m, focusedOption: b, focusedValue: S, clearFocusValueOnUpdate: !1 };
        }
        var A = a != null && n !== o ? { inputIsHidden: a, inputIsHiddenAfterUpdate: void 0 } : {};
        return De(De(De({}, d), A), {}, { prevProps: n });
      } }]), e;
    }(we);
    bh.defaultProps = Yw;
    var eb = { defaultInputValue: "", defaultMenuIsOpen: !1, defaultValue: null }, tb = function(t) {
      var i, e;
      return e = i = function(n) {
        Ji(o, n);
        var r = er(o);
        function o() {
          var s;
          Yi(this, o);
          for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++)
            l[u] = arguments[u];
          return s = r.call.apply(r, [this].concat(l)), s.select = void 0, s.state = { inputValue: s.props.inputValue !== void 0 ? s.props.inputValue : s.props.defaultInputValue, menuIsOpen: s.props.menuIsOpen !== void 0 ? s.props.menuIsOpen : s.props.defaultMenuIsOpen, value: s.props.value !== void 0 ? s.props.value : s.props.defaultValue }, s.onChange = function(c, h) {
            s.callProp("onChange", c, h), s.setState({ value: c });
          }, s.onInputChange = function(c, h) {
            var d = s.callProp("onInputChange", c, h);
            s.setState({ inputValue: d !== void 0 ? d : c });
          }, s.onMenuOpen = function() {
            s.callProp("onMenuOpen"), s.setState({ menuIsOpen: !0 });
          }, s.onMenuClose = function() {
            s.callProp("onMenuClose"), s.setState({ menuIsOpen: !1 });
          }, s;
        }
        return Zi(o, [{ key: "focus", value: function() {
          this.select.focus();
        } }, { key: "blur", value: function() {
          this.select.blur();
        } }, { key: "getProp", value: function(s) {
          return this.props[s] !== void 0 ? this.props[s] : this.state[s];
        } }, { key: "callProp", value: function(s) {
          if (typeof this.props[s] == "function") {
            for (var a, l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++)
              u[c - 1] = arguments[c];
            return (a = this.props)[s].apply(a, u);
          }
        } }, { key: "render", value: function() {
          var s = this, a = this.props;
          a.defaultInputValue, a.defaultMenuIsOpen, a.defaultValue;
          var l = dn(a, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);
          return B.createElement(t, Z({}, l, { ref: function(u) {
            s.select = u;
          }, inputValue: this.getProp("inputValue"), menuIsOpen: this.getProp("menuIsOpen"), onChange: this.onChange, onInputChange: this.onInputChange, onMenuClose: this.onMenuClose, onMenuOpen: this.onMenuOpen, value: this.getProp("value") }));
        } }]), o;
      }(we), i.defaultProps = eb, e;
    }, nb = tb(bh), ib = nb;
    const rs = [{ value: "assessing", label: "Assessing" }, { value: "bookmarking", label: "Bookmarking" }, { value: "classifying", label: "Classifying" }, { value: "commenting", label: "Commenting" }, { value: "describing", label: "Describing" }, { value: "editing", label: "Editing" }, { value: "highlighting", label: "Highlighting" }, { value: "identifying", label: "Identifying" }, { value: "linking", label: "Linking" }, { value: "moderating", label: "Moderating" }, { value: "questioning", label: "Questioning" }, { value: "replying", label: "Replying" }, { value: "supplementing", label: "Transcription" }];
    var xh = (t) => {
      const i = t.content ? rs.find((e) => e.value === t.content) : null;
      return B.createElement("div", { className: "r6o-purposedropdown" }, B.createElement(ib, { value: i, onChange: t.onChange, options: rs, isDisabled: !t.editable }));
    };
    const rb = (t) => B.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1000 940", width: t.width }, B.createElement("metadata", null, "IcoFont Icons"), B.createElement("title", null, "simple-down"), B.createElement("glyph", { glyphName: "simple-down", unicode: "", horizAdvX: "1000" }), B.createElement("path", { fill: "currentColor", d: "M200 392.6l300 300 300-300-85.10000000000002-85.10000000000002-214.89999999999998 214.79999999999995-214.89999999999998-214.89999999999998-85.10000000000002 85.20000000000005z" })), ob = (t) => B.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "180 150 700 800", width: t.width }, B.createElement("metadata", null, "IcoFont Icons"), B.createElement("title", null, "close"), B.createElement("glyph", { glyphName: "close", unicode: "", horizAdvX: "1000" }), B.createElement("path", { fill: "currentColor", d: "M709.8 206.6c-64.39999999999998 65.50000000000003-128.89999999999998 131.20000000000002-194.19999999999993 197.6-8.600000000000023 8.699999999999989-22.400000000000034 8.800000000000011-31 0-65-66-129.70000000000005-131.8-194.5-197.6-8.600000000000023-8.699999999999989-22.400000000000034-8.599999999999994-30.900000000000034 0.09999999999999432-15.699999999999989 16.200000000000017-31.099999999999994 32.30000000000001-47.099999999999994 48.80000000000001-8.5 8.800000000000011-8.299999999999983 23 0.20000000000001705 31.69999999999999 63.099999999999966 64.19999999999999 127.89999999999998 130.10000000000002 193.59999999999997 197 8.600000000000023 8.699999999999989 8.5 22.80000000000001 0 31.599999999999966-65.19999999999999 66.40000000000009-130.2 132.5-194.7 198.10000000000002-8.5 8.700000000000045-8.5 22.800000000000068 0.20000000000001705 31.399999999999977l47.79999999999998 47.90000000000009c8.600000000000023 8.599999999999909 22.600000000000023 8.599999999999909 31.100000000000023-0.10000000000002274l194.2-197.30000000000007c8.600000000000023-8.699999999999932 22.399999999999977-8.699999999999932 31 0 64.70000000000005 65.80000000000007 129.20000000000005 131.4000000000001 194.20000000000005 197.5 8.599999999999909 8.700000000000045 22.5 8.800000000000068 31 0.10000000000002274 16-16.199999999999932 31.699999999999932-32.19999999999993 47.59999999999991-48.299999999999955 8.600000000000023-8.700000000000045 8.600000000000023-22.899999999999977 0.10000000000002274-31.600000000000023-63.799999999999955-65-128.5-130.89999999999998-194.19999999999993-197.79999999999995-8.600000000000023-8.700000000000045-8.600000000000023-22.900000000000034 0-31.600000000000023 65.19999999999993-66.40000000000003 130.0999999999999-132.5 194.5-198.20000000000005 8.599999999999909-8.699999999999989 8.5-22.799999999999955-0.10000000000002274-31.49999999999997l-47.80000000000007-48.099999999999994c-8.5-8.5-22.399999999999977-8.400000000000006-31 0.29999999999998295z" })), sb = (t) => B.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: t.width }, B.createElement("path", { fill: "currentColor", d: "M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z" }));
    var ab = (t) => {
      const [i, e] = ct(!1), [n, r] = ct(!1), o = (h) => {
        e(!0), r(!1);
      }, s = (h) => {
        t.onDelete(t.body), r(!1);
      }, a = (h) => t.onUpdate(t.body, { ...t.body, value: h.target.value }), l = (h) => t.onUpdate(t.body, { ...t.body, purpose: h.value }), u = t.body.modified || t.body.created, c = t.body.creator && B.createElement("div", { className: "r6o-lastmodified" }, B.createElement("span", { className: "r6o-lastmodified-by" }, t.body.creator.name || t.body.creator.id), t.body.created && B.createElement("span", { className: "r6o-lastmodified-at" }, B.createElement(Mp, { datetime: t.env.toClientTime(u), locale: je.locale() })));
      return t.readOnly ? B.createElement("div", { className: "r6o-widget comment" }, B.createElement("div", { className: "r6o-readonly-comment" }, t.body.value), c) : B.createElement("div", { className: i ? "r6o-widget comment editable" : "r6o-widget comment" }, B.createElement(ec, { editable: i, content: t.body.value, onChange: a, onSaveAndClose: t.onSaveAndClose }), !i && c, t.purposeSelector && B.createElement(xh, { editable: i, content: t.body.purpose, onChange: l, onSaveAndClose: t.onSaveAndClose }), B.createElement("div", { className: n ? "r6o-icon r6o-arrow-down r6o-menu-open" : "r6o-icon r6o-arrow-down", onClick: () => r(!n) }, B.createElement(rb, { width: 12 })), n && B.createElement(Vy, { onEdit: o, onDelete: s, onClickOutside: () => r(!1) }));
    };
    const lb = rs.map((t) => t.value), Sh = (t, i) => {
      const e = i ? lb.indexOf(t.purpose) > -1 : t.purpose == "commenting" || t.purpose == "replying";
      return t.type === "TextualBody" && (!Object.prototype.hasOwnProperty.call(t, "purpose") || e);
    }, _h = (t, i) => {
      var e, n;
      if (i.editable === !0)
        return !1;
      if (i.editable === !1)
        return !0;
      if (i.editable === "MINE_ONLY") {
        const r = (e = t.creator) == null ? void 0 : e.id;
        return ((n = i.env.user) == null ? void 0 : n.id) !== r;
      }
      return i.readOnly;
    }, ub = (t, i) => t || { type: "TextualBody", value: "", purpose: i ? "replying" : "commenting", draft: !0 }, Ch = (t) => {
      const i = t.annotation ? t.annotation.bodies.filter((l) => Sh(l, t.purposeSelector)) : [], e = ub(i.find((l) => l.draft == !0), i.length > 1), n = i.filter((l) => l != e), r = (l) => {
        const u = e.value, c = l.target.value;
        u.length === 0 && c.length > 0 ? t.onAppendBody({ ...e, value: c }) : u.length > 0 && c.length === 0 ? t.onRemoveBody(e) : t.onUpdateBody(e, { ...e, value: c });
      }, o = (l) => t.onUpdateBody(e, { ...e, purpose: l.value }), s = !t.readOnly && t.annotation, a = n.length === 0 || !t.disableReply;
      return B.createElement(B.Fragment, null, n.map((l, u) => B.createElement(ab, { key: u, env: t.env, purposeSelector: t.purposeSelector, readOnly: _h(l, t), body: l, onUpdate: t.onUpdateBody, onDelete: t.onRemoveBody, onSaveAndClose: t.onSaveAndClose })), s && a && B.createElement("div", { className: "r6o-widget comment editable" }, B.createElement(ec, { focus: t.focus, content: e.value, editable: !0, placeholder: n.length > 0 ? je.t("Add a reply...") : t.textPlaceHolder || je.t("Add a comment..."), onChange: r, onSaveAndClose: () => t.onSaveAndClose() }), t.purposeSelector && e.value.length > 0 && B.createElement(xh, { editable: !0, content: e.purpose, onChange: o, onSaveAndClose: () => t.onSaveAndClose() })));
    };
    Ch.disableDelete = (t, i) => t.bodies.filter((e) => Sh(e, i.purposeSelector)).some((e) => _h(e, i));
    var Th = Ch;
    function Ah(t, i) {
      t.prototype = Object.create(i.prototype), t.prototype.constructor = t, Ki(t, i);
    }
    function cb(t, i) {
      return t.classList ? !!i && t.classList.contains(i) : (" " + (t.className.baseVal || t.className) + " ").indexOf(" " + i + " ") !== -1;
    }
    function hb(t, i) {
      t.classList ? t.classList.add(i) : cb(t, i) || (typeof t.className == "string" ? t.className = t.className + " " + i : t.setAttribute("class", (t.className && t.className.baseVal || "") + " " + i));
    }
    function Ph(t, i) {
      return t.replace(new RegExp("(^|\\s)" + i + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
    }
    function db(t, i) {
      t.classList ? t.classList.remove(i) : typeof t.className == "string" ? t.className = Ph(t.className, i) : t.setAttribute("class", Ph(t.className && t.className.baseVal || "", i));
    }
    var Dh = { disabled: !1 }, Oh = B.createContext(null), Rh = function(t) {
      return t.scrollTop;
    }, Zn = "unmounted", Nt = "exited", Ht = "entering", fn = "entered", os = "exiting", mt = function(t) {
      Ah(i, t);
      function i(n, r) {
        var o;
        o = t.call(this, n, r) || this;
        var s = r, a = s && !s.isMounting ? n.enter : n.appear, l;
        return o.appearStatus = null, n.in ? a ? (l = Nt, o.appearStatus = Ht) : l = fn : n.unmountOnExit || n.mountOnEnter ? l = Zn : l = Nt, o.state = { status: l }, o.nextCallback = null, o;
      }
      i.getDerivedStateFromProps = function(n, r) {
        var o = n.in;
        return o && r.status === Zn ? { status: Nt } : null;
      };
      var e = i.prototype;
      return e.componentDidMount = function() {
        this.updateStatus(!0, this.appearStatus);
      }, e.componentDidUpdate = function(n) {
        var r = null;
        if (n !== this.props) {
          var o = this.state.status;
          this.props.in ? o !== Ht && o !== fn && (r = Ht) : (o === Ht || o === fn) && (r = os);
        }
        this.updateStatus(!1, r);
      }, e.componentWillUnmount = function() {
        this.cancelNextCallback();
      }, e.getTimeouts = function() {
        var n = this.props.timeout, r, o, s;
        return r = o = s = n, n != null && typeof n != "number" && (r = n.exit, o = n.enter, s = n.appear !== void 0 ? n.appear : o), { exit: r, enter: o, appear: s };
      }, e.updateStatus = function(n, r) {
        if (n === void 0 && (n = !1), r !== null)
          if (this.cancelNextCallback(), r === Ht) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var o = this.props.nodeRef ? this.props.nodeRef.current : B.findDOMNode(this);
              o && Rh(o);
            }
            this.performEnter(n);
          } else
            this.performExit();
        else
          this.props.unmountOnExit && this.state.status === Nt && this.setState({ status: Zn });
      }, e.performEnter = function(n) {
        var r = this, o = this.props.enter, s = this.context ? this.context.isMounting : n, a = this.props.nodeRef ? [s] : [B.findDOMNode(this), s], l = a[0], u = a[1], c = this.getTimeouts(), h = s ? c.appear : c.enter;
        if (!n && !o || Dh.disabled) {
          this.safeSetState({ status: fn }, function() {
            r.props.onEntered(l);
          });
          return;
        }
        this.props.onEnter(l, u), this.safeSetState({ status: Ht }, function() {
          r.props.onEntering(l, u), r.onTransitionEnd(h, function() {
            r.safeSetState({ status: fn }, function() {
              r.props.onEntered(l, u);
            });
          });
        });
      }, e.performExit = function() {
        var n = this, r = this.props.exit, o = this.getTimeouts(), s = this.props.nodeRef ? void 0 : B.findDOMNode(this);
        if (!r || Dh.disabled) {
          this.safeSetState({ status: Nt }, function() {
            n.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s), this.safeSetState({ status: os }, function() {
          n.props.onExiting(s), n.onTransitionEnd(o.exit, function() {
            n.safeSetState({ status: Nt }, function() {
              n.props.onExited(s);
            });
          });
        });
      }, e.cancelNextCallback = function() {
        this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
      }, e.safeSetState = function(n, r) {
        r = this.setNextCallback(r), this.setState(n, r);
      }, e.setNextCallback = function(n) {
        var r = this, o = !0;
        return this.nextCallback = function(s) {
          o && (o = !1, r.nextCallback = null, n(s));
        }, this.nextCallback.cancel = function() {
          o = !1;
        }, this.nextCallback;
      }, e.onTransitionEnd = function(n, r) {
        this.setNextCallback(r);
        var o = this.props.nodeRef ? this.props.nodeRef.current : B.findDOMNode(this), s = n == null && !this.props.addEndListener;
        if (!o || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var a = this.props.nodeRef ? [this.nextCallback] : [o, this.nextCallback], l = a[0], u = a[1];
          this.props.addEndListener(l, u);
        }
        n != null && setTimeout(this.nextCallback, n);
      }, e.render = function() {
        var n = this.state.status;
        if (n === Zn)
          return null;
        var r = this.props, o = r.children;
        r.in, r.mountOnEnter, r.unmountOnExit, r.appear, r.enter, r.exit, r.timeout, r.addEndListener, r.onEnter, r.onEntering, r.onEntered, r.onExit, r.onExiting, r.onExited, r.nodeRef;
        var s = Go(r, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
        return B.createElement(Oh.Provider, { value: null }, typeof o == "function" ? o(n, s) : B.cloneElement(B.Children.only(o), s));
      }, i;
    }(B.Component);
    mt.contextType = Oh, mt.propTypes = {};
    function mn() {
    }
    mt.defaultProps = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1, enter: !0, exit: !0, onEnter: mn, onEntering: mn, onEntered: mn, onExit: mn, onExiting: mn, onExited: mn }, mt.UNMOUNTED = Zn, mt.EXITED = Nt, mt.ENTERING = Ht, mt.ENTERED = fn, mt.EXITING = os;
    var pb = mt, gb = function(t, i) {
      return t && i && i.split(" ").forEach(function(e) {
        return hb(t, e);
      });
    }, ss = function(t, i) {
      return t && i && i.split(" ").forEach(function(e) {
        return db(t, e);
      });
    }, as = function(t) {
      Ah(i, t);
      function i() {
        for (var n, r = arguments.length, o = new Array(r), s = 0; s < r; s++)
          o[s] = arguments[s];
        return n = t.call.apply(t, [this].concat(o)) || this, n.appliedClasses = { appear: {}, enter: {}, exit: {} }, n.onEnter = function(a, l) {
          var u = n.resolveArguments(a, l), c = u[0], h = u[1];
          n.removeClasses(c, "exit"), n.addClass(c, h ? "appear" : "enter", "base"), n.props.onEnter && n.props.onEnter(a, l);
        }, n.onEntering = function(a, l) {
          var u = n.resolveArguments(a, l), c = u[0], h = u[1], d = h ? "appear" : "enter";
          n.addClass(c, d, "active"), n.props.onEntering && n.props.onEntering(a, l);
        }, n.onEntered = function(a, l) {
          var u = n.resolveArguments(a, l), c = u[0], h = u[1], d = h ? "appear" : "enter";
          n.removeClasses(c, d), n.addClass(c, d, "done"), n.props.onEntered && n.props.onEntered(a, l);
        }, n.onExit = function(a) {
          var l = n.resolveArguments(a), u = l[0];
          n.removeClasses(u, "appear"), n.removeClasses(u, "enter"), n.addClass(u, "exit", "base"), n.props.onExit && n.props.onExit(a);
        }, n.onExiting = function(a) {
          var l = n.resolveArguments(a), u = l[0];
          n.addClass(u, "exit", "active"), n.props.onExiting && n.props.onExiting(a);
        }, n.onExited = function(a) {
          var l = n.resolveArguments(a), u = l[0];
          n.removeClasses(u, "exit"), n.addClass(u, "exit", "done"), n.props.onExited && n.props.onExited(a);
        }, n.resolveArguments = function(a, l) {
          return n.props.nodeRef ? [n.props.nodeRef.current, a] : [a, l];
        }, n.getClassNames = function(a) {
          var l = n.props.classNames, u = typeof l == "string", c = u && l ? l + "-" : "", h = u ? "" + c + a : l[a], d = u ? h + "-active" : l[a + "Active"], m = u ? h + "-done" : l[a + "Done"];
          return { baseClassName: h, activeClassName: d, doneClassName: m };
        }, n;
      }
      var e = i.prototype;
      return e.addClass = function(n, r, o) {
        var s = this.getClassNames(r)[o + "ClassName"], a = this.getClassNames("enter"), l = a.doneClassName;
        r === "appear" && o === "done" && l && (s += " " + l), o === "active" && n && Rh(n), s && (this.appliedClasses[r][o] = s, gb(n, s));
      }, e.removeClasses = function(n, r) {
        var o = this.appliedClasses[r], s = o.base, a = o.active, l = o.done;
        this.appliedClasses[r] = {}, s && ss(n, s), a && ss(n, a), l && ss(n, l);
      }, e.render = function() {
        var n = this.props;
        n.classNames;
        var r = Go(n, ["classNames"]);
        return B.createElement(pb, Z({}, r, { onEnter: this.onEnter, onEntered: this.onEntered, onEntering: this.onEntering, onExit: this.onExit, onExiting: this.onExiting, onExited: this.onExited }));
      }, i;
    }(B.Component);
    as.defaultProps = { classNames: "" }, as.propTypes = {};
    var fb = as;
    const mb = (t, i) => i.filter((e) => (e.label ? e.label : e).toLowerCase().startsWith(t.toLowerCase())), vb = (t, i) => i(t);
    var yb = (t) => {
      const i = Je(), [e, n] = ct(t.initialValue || ""), [r, o] = ct([]), [s, a] = ct(null);
      Rt(() => {
        t.focus && i.current.querySelector("input").focus({ preventScroll: !0 });
      }, []), Rt(() => {
        t.onChange && t.onChange(e);
      }, [e]);
      const l = (d) => {
        if (typeof t.vocabulary == "function") {
          const m = vb(d, t.vocabulary);
          m.then ? m.then(o) : o(m);
        } else {
          const m = mb(d, t.vocabulary);
          o(m);
        }
      }, u = () => {
        if (s !== null)
          t.onSubmit(r[s]);
        else {
          const d = e.trim();
          if (d) {
            const m = Array.isArray(t.vocabulary) ? t.vocabulary.find((y) => (y.label || y).toLowerCase() === d.toLowerCase()) : null;
            m ? t.onSubmit(m) : t.onSubmit(d);
          }
        }
        n(""), o([]), a(null);
      }, c = (d) => {
        if (d.which === 13)
          u();
        else if (d.which === 27)
          t.onCancel && t.onCancel();
        else if (r.length > 0) {
          if (d.which === 38)
            if (s === null)
              a(0);
            else {
              const m = Math.max(0, s - 1);
              a(m);
            }
          else if (d.which === 40)
            if (s === null)
              a(0);
            else {
              const m = Math.min(r.length - 1, s + 1);
              a(m);
            }
        } else
          d.which === 40 && Array.isArray(t.vocabulary) && o(t.vocabulary);
      }, h = (d) => {
        const { value: m } = d.target;
        n(m), a(null), m ? l(m) : o([]);
      };
      return B.createElement("div", { ref: i, className: "r6o-autocomplete" }, B.createElement("div", null, B.createElement("input", { onKeyDown: c, onChange: h, value: e, placeholder: t.placeholder })), B.createElement("ul", null, r.length > 0 && r.map((d, m) => B.createElement("li", { key: `${d.label ? d.label : d}${m}`, onClick: u, onMouseEnter: () => a(m), style: s === m ? { backgroundColor: "#bde4ff" } : {} }, d.label ? d.label : d))));
    };
    const Eb = (t) => t || { type: "TextualBody", value: "", purpose: "tagging", draft: !0 };
    var kh = (t) => {
      const i = t.annotation ? t.annotation.bodies.filter((h) => h.purpose === "tagging") : [], e = Eb(i.slice().reverse().find((h) => h.draft)), n = i.filter((h) => h != e), [r, o] = ct(!1), s = (h) => (d) => {
        o(r === h ? !1 : h);
      }, a = (h) => {
        const d = e.value.trim(), m = h.trim();
        d.length === 0 && m.length > 0 ? t.onAppendBody({ ...e, value: m }) : d.length > 0 && m.length === 0 ? t.onRemoveBody(e) : d !== m && t.onUpdateBody(e, { ...e, value: m });
      }, l = (h) => (d) => {
        d.stopPropagation(), t.onRemoveBody(h);
      }, u = (h) => {
        const d = h.uri ? { type: "SpecificResource", purpose: "tagging", source: { id: h.uri, label: h.label } } : { type: "TextualBody", purpose: "tagging", value: h.label || h };
        e.value.trim().length === 0 ? t.onAppendBody(d) : t.onUpdateBody(e, d);
      }, c = (h) => h.value || h.source.label;
      return B.createElement("div", { className: "r6o-widget r6o-tag" }, n.length > 0 && B.createElement("ul", { className: "r6o-taglist" }, n.map((h) => B.createElement("li", { key: c(h), onClick: s(h) }, B.createElement("span", { className: "r6o-label" }, c(h)), !t.readOnly && B.createElement(fb, { in: r === h, timeout: 200, classNames: "r6o-delete" }, B.createElement("span", { className: "r6o-delete-wrapper", onClick: l(h) }, B.createElement("span", { className: "r6o-delete" }, B.createElement(ob, { width: 12 }))))))), !t.readOnly && B.createElement(yb, { focus: t.focus, placeholder: t.textPlaceHolder || je.t("Add tag..."), vocabulary: t.vocabulary || [], onChange: a, onSubmit: u }));
    };
    class Bh extends we {
      constructor(i) {
        super(i), this.element = B.createRef();
      }
      renderWidget(i) {
        const e = this.props.widget({ annotation: i.annotation, readOnly: i.readOnly, ...i.config, onAppendBody: (n, r) => i.onAppendBody(n, r), onUpdateBody: (n, r, o) => i.onUpdateBody(n, r, o), onUpsertBody: (n, r, o) => i.onUpsertBody(n, r, o), onRemoveBody: (n, r) => i.onRemoveBody(n, r), onBatchModify: (n, r) => i.onBatchModify(n, r), onSetProperty: (n, r) => i.onSetProperty(n, r), onAddContext: (n) => i.onAddContext(n), onSaveAndClose: () => i.onSaveAndClose() });
        for (; this.element.current.firstChild; )
          this.element.current.removeChild(this.element.current.lastChild);
        this.element.current.appendChild(e);
      }
      componentDidMount() {
        this.renderWidget(this.props);
      }
      componentWillReceiveProps(i) {
        this.element.current && this.props.annotation !== i.annotation && this.renderWidget(i);
      }
      render() {
        return B.createElement("div", { ref: this.element, className: "widget" });
      }
    }
    window.React = B, window.ReactDOM = B;
    const wb = { COMMENT: Th, TAG: kh }, bb = [B.createElement(Th, null), B.createElement(kh, null)], xb = (t) => {
      const i = (n) => {
        var r;
        return typeof n == "function" && !!((r = n.prototype) != null && r.isReactComponent);
      }, e = (n) => typeof n == "function" && (String(n).match(/return .+\(['|"].+['|"],\s*\{/g) || String(n).match(/return .+preact_compat/) || String(n).match(/return .+\.createElement/g));
      return i(t) || e(t);
    }, Sb = (t) => {
      const i = (e, n, r) => {
        if (typeof e == "string" || e instanceof String)
          return B.createElement(wb[e], n);
        if ((r == null ? void 0 : r.toLowerCase()) === "react")
          return B.createElement(e, n);
        if ((r == null ? void 0 : r.toLowerCase()) === "plainjs")
          return B.createElement(Bh, { widget: e, config: n });
        if (xb(e))
          return B.createElement(e, n);
        if (typeof e == "function" || e instanceof Function)
          return B.createElement(Bh, { widget: e, config: n });
        throw `${e} is not a valid plugin`;
      };
      if (t.widget) {
        const { widget: e, force: n, ...r } = t;
        return i(e, r, n);
      } else
        return i(t);
    }, Fh = 14;
    var Mh = (t, i, e, n) => {
      const r = t.getBoundingClientRect();
      i.className = "r6o-editor r6o-arrow-top r6o-arrow-left";
      const { left: o, top: s, right: a, bottom: l } = e.getBoundingClientRect();
      if (i.style.top = `${l - r.top + Fh}px`, i.style.left = `${o - r.left}px`, n) {
        const u = i.children[1].getBoundingClientRect(), { innerWidth: c, innerHeight: h } = t.ownerDocument.defaultView;
        if (u.right > c && (i.classList.remove("r6o-arrow-left"), i.classList.add("r6o-arrow-right"), i.style.left = `${a - u.width - r.left}px`), u.bottom > h) {
          i.classList.remove("r6o-arrow-top"), i.classList.add("r6o-arrow-bottom");
          const m = i.children[1].getBoundingClientRect().height;
          i.style.top = `${s - r.top - m - Fh}px`;
        }
        const d = i.children[1].getBoundingClientRect();
        if (d.top < 0) {
          i.classList.add("pushed", "down"), i.style.top = `${-r.top}px`;
          const m = l - r.top;
          d.height - r.top > m && i.classList.remove("r6o-arrow-bottom");
        }
        d.left < 0 && (i.classList.add("pushed", "right"), i.style.left = `${-r.left}px`), requestAnimationFrame(() => i.style.opacity = 1);
      }
    };
    const Ih = (t) => {
      const { top: i, left: e, width: n, height: r } = t.getBoundingClientRect();
      return `${i}, ${e}, ${n}, ${r}`;
    };
    class _b extends we {
      constructor(i) {
        super(i), P(this, "initResizeObserver", () => {
          const e = this.props.autoPosition === void 0 ? !0 : this.props.autoPosition;
          if (window != null && window.ResizeObserver) {
            const n = new ResizeObserver(() => {
              this.state.dragged || Mh(this.props.wrapperEl, this.element.current, this.props.selectedElement, e);
            });
            return n.observe(this.props.wrapperEl), () => n.disconnect();
          } else
            this.state.dragged || Mh(this.props.wrapperEl, this.element.current, this.props.selectedElement, e);
        }), P(this, "creationMeta", (e) => {
          const n = {}, { user: r } = this.props.env;
          return r && (n.creator = {}, r.id && (n.creator.id = r.id), r.displayName && (n.creator.name = r.displayName), n[e.created ? "modified" : "created"] = this.props.env.getCurrentTimeAdjusted()), n;
        }), P(this, "getCurrentAnnotation", () => this.state.currentAnnotation.clone()), P(this, "hasChanges", () => {
          var e;
          return !((e = this.props.annotation) != null && e.isEqual(this.state.currentAnnotation));
        }), P(this, "updateCurrentAnnotation", (e, n) => {
          this.setState({ currentAnnotation: this.state.currentAnnotation.clone(e) }, () => {
            n ? this.onOk() : this.props.onChanged && this.props.onChanged();
          });
        }), P(this, "onAppendBody", (e, n) => this.updateCurrentAnnotation({ body: [...this.state.currentAnnotation.bodies, { ...e, ...this.creationMeta(e) }] }, n)), P(this, "onUpdateBody", (e, n, r) => this.updateCurrentAnnotation({ body: this.state.currentAnnotation.bodies.map((o) => o === e ? { ...n, ...this.creationMeta(n) } : o) }, r)), P(this, "onRemoveBody", (e, n) => this.updateCurrentAnnotation({ body: this.state.currentAnnotation.bodies.filter((r) => r !== e) }, n)), P(this, "onUpsertBody", (e, n, r) => {
          if (e == null && n != null)
            this.onAppendBody(n, r);
          else if (e != null && n != null)
            this.onUpdateBody(e, n, r);
          else if (e != null && n == null) {
            const o = this.state.currentAnnotation.bodies.find((s) => s.purpose === e.purpose);
            o ? this.onUpdateBody(o, e, r) : this.onAppendBody(e, r);
          }
        }), P(this, "onBatchModify", (e, n) => {
          const r = e.filter((u) => u.action === "upsert" && u.body).map((u) => ({ previous: this.state.currentAnnotation.bodies.find((c) => c.purpose === u.body.purpose), updated: { ...u.body, ...this.creationMeta(u.body) } })), o = e.filter((u) => u.action === "remove").map((u) => u.body), s = [...e.filter((u) => u.action === "append" || u.action === "upsert" && u.updated && !u.previous).map((u) => ({ ...u.body, ...this.creationMeta(u.body) })), ...r.filter((u) => !u.previous).map((u) => u.updated)], a = [...e.filter((u) => u.action === "update" || u.action === "upsert" && u.updated && u.previous).map((u) => ({ previous: u.previous, updated: { ...u.updated, ...this.creationMeta(u.updated) } })), ...r.filter((u) => u.previous)], l = [...this.state.currentAnnotation.bodies.filter((u) => !o.includes(u)).map((u) => {
            const c = a.find((h) => h.previous === u);
            return c ? c.updated : u;
          }), ...s];
          this.updateCurrentAnnotation({ body: l }, n);
        }), P(this, "onSetProperty", (e, n) => {
          if (["@context", "id", "type", "body", "target"].includes(e))
            throw new Exception(`Cannot set ${e} - not allowed`);
          if (n)
            this.updateCurrentAnnotation({ [e]: n });
          else {
            const r = this.currentAnnotation.clone();
            delete r[e], this.setState({ currentAnnotation: r });
          }
        }), P(this, "onAddContext", (e) => {
          const { currentAnnotation: n } = this.state, r = Array.isArray(n.context) ? n.context : [n.context];
          r.indexOf(e) < 0 && (r.push(e), this.updateCurrentAnnotation({ "@context": r }));
        }), P(this, "onCancel", () => this.props.onCancel(this.props.annotation)), P(this, "onOk", () => {
          const e = (r) => r.clone({ body: r.bodies.map(({ draft: o, ...s }) => s) }), { currentAnnotation: n } = this.state;
          n.bodies.length === 0 && !this.props.allowEmpty ? n.isSelection ? this.onCancel() : this.props.onAnnotationDeleted(this.props.annotation) : n.isSelection ? this.props.onAnnotationCreated(e(n).toAnnotation()) : this.props.onAnnotationUpdated(e(n), this.props.annotation);
        }), P(this, "onDelete", () => this.props.onAnnotationDeleted(this.props.annotation)), this.element = B.createRef(), this.state = { currentAnnotation: i.annotation, dragged: !1, selectionBounds: Ih(i.selectedElement) };
      }
      componentWillReceiveProps(i) {
        var e;
        const { selectionBounds: n } = this.state, r = Ih(i.selectedElement);
        (e = this.props.annotation) != null && e.isEqual(i.annotation) ? this.setState({ selectionBounds: r }) : this.setState({ currentAnnotation: i.annotation, selectionBounds: r }), this.props.modifiedTarget != i.modifiedTarget && this.state.currentAnnotation && this.updateCurrentAnnotation({ target: this.props.modifiedTarget }), n != r && this.element.current && (this.removeObserver && this.removeObserver(), this.removeObserver = this.initResizeObserver());
      }
      componentDidMount() {
        this.removeObserver = this.initResizeObserver(), new MutationObserver(() => {
          this.element.current && (this.removeObserver && this.removeObserver(), this.removeObserver = this.initResizeObserver());
        }).observe(this.element.current, { childList: !0, subtree: !0 });
      }
      componentWillUnmount() {
        this.removeObserver && this.removeObserver();
      }
      render() {
        const { currentAnnotation: i } = this.state, e = this.props.widgets ? this.props.widgets.map(Sb) : bb, n = (o) => o.type.disableDelete ? o.type.disableDelete(i, { ...o.props, readOnly: this.props.readOnly, env: this.props.env }) : !1, r = i && (i.bodies.length > 0 || this.props.allowEmpty) && !this.props.readOnly && !i.isSelection && !e.some(n);
        return B.createElement(xp, { disabled: !this.props.detachable, handle: ".r6o-draggable", cancel: ".r6o-btn, .r6o-btn *", onDrag: () => this.setState({ dragged: !0 }) }, B.createElement("div", { ref: this.element, className: this.state.dragged ? "r6o-editor dragged" : "r6o-editor" }, B.createElement("div", { className: "r6o-arrow" }), B.createElement("div", { className: "r6o-editor-inner" }, e.map((o, s) => B.cloneElement(o, { key: `${s}`, focus: s === 0, annotation: i, readOnly: this.props.readOnly, env: this.props.env, onAppendBody: this.onAppendBody, onUpdateBody: this.onUpdateBody, onRemoveBody: this.onRemoveBody, onUpsertBody: this.onUpsertBody, onBatchModify: this.onBatchModify, onSetProperty: this.onSetProperty, onAddContext: this.onAddContext, onSaveAndClose: this.onOk })), this.props.readOnly ? B.createElement("div", { className: "r6o-footer" }, B.createElement("button", { className: "r6o-btn", onClick: this.onCancel }, je.t("Close"))) : B.createElement("div", { className: this.props.detachable ? "r6o-footer r6o-draggable" : "r6o-footer" }, r && B.createElement("button", { className: "r6o-btn left delete-annotation", title: je.t("Delete"), onClick: this.onDelete }, B.createElement(sb, { width: 12 })), B.createElement("button", { className: "r6o-btn outline", onClick: this.onCancel }, je.t("Cancel")), B.createElement("button", { className: "r6o-btn ", onClick: this.onOk }, je.t("Ok"))))));
      }
    }
    var sr, Cb = new Uint8Array(16);
    function Tb() {
      if (!sr && (sr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !sr))
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return sr(Cb);
    }
    var Ab = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    function Pb(t) {
      return typeof t == "string" && Ab.test(t);
    }
    for (var Oe = [], ls = 0; ls < 256; ++ls)
      Oe.push((ls + 256).toString(16).substr(1));
    function Db(t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, e = (Oe[t[i + 0]] + Oe[t[i + 1]] + Oe[t[i + 2]] + Oe[t[i + 3]] + "-" + Oe[t[i + 4]] + Oe[t[i + 5]] + "-" + Oe[t[i + 6]] + Oe[t[i + 7]] + "-" + Oe[t[i + 8]] + Oe[t[i + 9]] + "-" + Oe[t[i + 10]] + Oe[t[i + 11]] + Oe[t[i + 12]] + Oe[t[i + 13]] + Oe[t[i + 14]] + Oe[t[i + 15]]).toLowerCase();
      if (!Pb(e))
        throw TypeError("Stringified UUID is invalid");
      return e;
    }
    function Lh(t, i, e) {
      t = t || {};
      var n = t.random || (t.rng || Tb)();
      if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, i) {
        e = e || 0;
        for (var r = 0; r < 16; ++r)
          i[e + r] = n[r];
        return i;
      }
      return Db(n);
    }
    var Ob = function t(i, e) {
      if (i === e)
        return !0;
      if (i && e && typeof i == "object" && typeof e == "object") {
        if (i.constructor !== e.constructor)
          return !1;
        var n, r, o;
        if (Array.isArray(i)) {
          if (n = i.length, n != e.length)
            return !1;
          for (r = n; r-- !== 0; )
            if (!t(i[r], e[r]))
              return !1;
          return !0;
        }
        if (i.constructor === RegExp)
          return i.source === e.source && i.flags === e.flags;
        if (i.valueOf !== Object.prototype.valueOf)
          return i.valueOf() === e.valueOf();
        if (i.toString !== Object.prototype.toString)
          return i.toString() === e.toString();
        if (o = Object.keys(i), n = o.length, n !== Object.keys(e).length)
          return !1;
        for (r = n; r-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(e, o[r]))
            return !1;
        for (r = n; r-- !== 0; ) {
          var s = o[r];
          if (!t(i[s], e[s]))
            return !1;
        }
        return !0;
      }
      return i !== i && e !== e;
    }, Nh = Ob;
    const us = class {
      constructor(t, i) {
        P(this, "clone", (e, n) => new us({ ...this.underlying, ...e }, { ...this.opts, ...n })), P(this, "selector", (e) => {
          const { target: n } = this.underlying;
          if (n.selector)
            return (Array.isArray(n.selector) ? n.selector : [n.selector]).find((r) => r.type === e);
        }), this.underlying = t, this.opts = i;
      }
      isEqual(t) {
        return (t == null ? void 0 : t.type) !== "Annotation" ? !1 : this.underlying === t.underlying ? !0 : !this.underlying.id || !t.underlying.id ? !1 : Nh(this.underlying, t.underlying);
      }
      get readOnly() {
        var t;
        return (t = this.opts) == null ? void 0 : t.readOnly;
      }
      get id() {
        return this.underlying.id;
      }
      get context() {
        return this.underlying["@context"];
      }
      get type() {
        return this.underlying.type;
      }
      get motivation() {
        return this.underlying.motivation;
      }
      get body() {
        return this.underlying.body;
      }
      get target() {
        return this.underlying.target;
      }
      get bodies() {
        return Array.isArray(this.underlying.body) ? this.underlying.body : [this.underlying.body];
      }
      set bodies(t) {
        this.underlying.body = t;
      }
      get targets() {
        return Array.isArray(this.underlying.target) ? this.underlying.target : [this.underlying.target];
      }
      get quote() {
        var t;
        return (t = this.selector("TextQuoteSelector")) == null ? void 0 : t.exact;
      }
      get start() {
        var t;
        return (t = this.selector("TextPositionSelector")) == null ? void 0 : t.start;
      }
      get end() {
        var t;
        return (t = this.selector("TextPositionSelector")) == null ? void 0 : t.end;
      }
    };
    let zt = us;
    P(zt, "create", (t) => {
      const i = { "@context": "http://www.w3.org/ns/anno.jsonld", type: "Annotation", id: `#${Lh()}`, body: [] };
      return new us({ ...i, ...t });
    });
    class Kn {
      constructor(i, e) {
        P(this, "clone", (n) => {
          const r = new Kn();
          return r.underlying = JSON.parse(JSON.stringify(this.underlying)), n && (r.underlying = { ...r.underlying, ...n }), r;
        }), P(this, "selector", (n) => {
          const { target: r } = this.underlying;
          if (r.selector)
            return (Array.isArray(r.selector) ? r.selector : [r.selector]).find((o) => o.type === n);
        }), P(this, "toAnnotation", () => {
          const n = Object.assign({}, this.underlying, { type: "Annotation", id: `#${Lh()}` });
          return new zt(n);
        }), this.underlying = { "@context": "http://www.w3.org/ns/anno.jsonld", type: "Selection", body: e || [], target: i };
      }
      get context() {
        return this.underlying["@context"];
      }
      get type() {
        return this.underlying.type;
      }
      get body() {
        return this.underlying.body;
      }
      get target() {
        return this.underlying.target;
      }
      get targets() {
        return Array.isArray(this.underlying.target) ? this.underlying.target : [this.underlying.target];
      }
      isEqual(i) {
        return i ? Nh(this.underlying, i.underlying) : !1;
      }
      get bodies() {
        return Array.isArray(this.underlying.body) ? this.underlying.body : [this.underlying.body];
      }
      get quote() {
        var i;
        return (i = this.selector("TextQuoteSelector")) == null ? void 0 : i.exact;
      }
      get isSelection() {
        return !0;
      }
    }
    let cs = 0;
    var Rb = () => ({ setServerTime: (t) => {
      const i = Date.now();
      cs = t - i;
    }, getCurrentTimeAdjusted: () => new Date(Date.now() + cs).toISOString(), toClientTime: (t) => Date.parse(t) - cs });
    const kb = (t, i) => {
      if (t) {
        const e = t === "auto" ? window.navigator.userLanguage || window.navigator.language : t, n = e.split("-")[0].toLowerCase(), r = [e, n].find((o) => Uy.includes(o));
        r || console.warn(`Unsupported locale '${e}'. Falling back to default en.`), je.init(r, i);
      } else
        je.init(null, i);
    };
    var Hh = { exports: {} };
    (function(t) {
      //! openseadragon 3.0.0
      //! Built on 2021-12-15
      //! Git commit: v3.0.0-0-3eded36
      //! http://openseadragon.github.io
      //! License: http://openseadragon.github.io/license/
      function i(e) {
        return new i.Viewer(e);
      }
      (function(e) {
        e.version = { versionStr: "3.0.0", major: parseInt("3", 10), minor: parseInt("0", 10), revision: parseInt("0", 10) };
        var n = { "[object Boolean]": "boolean", "[object Number]": "number", "[object String]": "string", "[object Function]": "function", "[object Array]": "array", "[object Date]": "date", "[object RegExp]": "regexp", "[object Object]": "object" }, r = Object.prototype.toString, o = Object.prototype.hasOwnProperty;
        e.isFunction = function(s) {
          return e.type(s) === "function";
        }, e.isArray = Array.isArray || function(s) {
          return e.type(s) === "array";
        }, e.isWindow = function(s) {
          return s && typeof s == "object" && "setInterval" in s;
        }, e.type = function(s) {
          return s == null ? String(s) : n[r.call(s)] || "object";
        }, e.isPlainObject = function(s) {
          if (!s || i.type(s) !== "object" || s.nodeType || e.isWindow(s) || s.constructor && !o.call(s, "constructor") && !o.call(s.constructor.prototype, "isPrototypeOf"))
            return !1;
          var a;
          for (var l in s)
            a = l;
          return a === void 0 || o.call(s, a);
        }, e.isEmptyObject = function(s) {
          for (var a in s)
            return !1;
          return !0;
        }, e.freezeObject = function(s) {
          return Object.freeze ? e.freezeObject = Object.freeze : e.freezeObject = function(a) {
            return a;
          }, e.freezeObject(s);
        }, e.supportsCanvas = function() {
          var s = document.createElement("canvas");
          return !!(e.isFunction(s.getContext) && s.getContext("2d"));
        }(), e.isCanvasTainted = function(s) {
          var a = !1;
          try {
            s.getContext("2d").getImageData(0, 0, 1, 1);
          } catch {
            a = !0;
          }
          return a;
        }, e.supportsAddEventListener = function() {
          return !!(document.documentElement.addEventListener && document.addEventListener);
        }(), e.supportsRemoveEventListener = function() {
          return !!(document.documentElement.removeEventListener && document.removeEventListener);
        }(), e.supportsEventListenerOptions = function() {
          var s = 0;
          if (e.supportsAddEventListener)
            try {
              var a = { get capture() {
                return s++, !1;
              }, get once() {
                return s++, !1;
              }, get passive() {
                return s++, !1;
              } };
              window.addEventListener("test", null, a), window.removeEventListener("test", null, a);
            } catch {
              s = 0;
            }
          return s >= 3;
        }(), e.getCurrentPixelDensityRatio = function() {
          if (e.supportsCanvas) {
            var s = document.createElement("canvas").getContext("2d"), a = window.devicePixelRatio || 1, l = s.webkitBackingStorePixelRatio || s.mozBackingStorePixelRatio || s.msBackingStorePixelRatio || s.oBackingStorePixelRatio || s.backingStorePixelRatio || 1;
            return Math.max(a, 1) / l;
          } else
            return 1;
        }, e.pixelDensityRatio = e.getCurrentPixelDensityRatio();
      })(i), function(e) {
        e.extend = function() {
          var l, u, c, h, d, m, y = arguments[0] || {}, S = arguments.length, b = !1, A = 1;
          for (typeof y == "boolean" && (b = y, y = arguments[1] || {}, A = 2), typeof y != "object" && !i.isFunction(y) && (y = {}), S === A && (y = this, --A); A < S; A++)
            if (l = arguments[A], l !== null || l !== void 0)
              for (u in l)
                c = y[u], h = l[u], y !== h && (b && h && (i.isPlainObject(h) || (d = i.isArray(h))) ? (d ? (d = !1, m = c && i.isArray(c) ? c : []) : m = c && i.isPlainObject(c) ? c : {}, y[u] = i.extend(b, m, h)) : h !== void 0 && (y[u] = h));
          return y;
        };
        var n = function() {
          if (typeof navigator != "object")
            return !1;
          var l = navigator.userAgent;
          return typeof l != "string" ? !1 : l.indexOf("iPhone") !== -1 || l.indexOf("iPad") !== -1 || l.indexOf("iPod") !== -1;
        };
        e.extend(e, { DEFAULT_SETTINGS: { xmlPath: null, tileSources: null, tileHost: null, initialPage: 0, crossOriginPolicy: !1, ajaxWithCredentials: !1, loadTilesWithAjax: !1, ajaxHeaders: {}, panHorizontal: !0, panVertical: !0, constrainDuringPan: !1, wrapHorizontal: !1, wrapVertical: !1, visibilityRatio: 0.5, minPixelRatio: 0.5, defaultZoomLevel: 0, minZoomLevel: null, maxZoomLevel: null, homeFillsViewer: !1, clickTimeThreshold: 300, clickDistThreshold: 5, dblClickTimeThreshold: 300, dblClickDistThreshold: 20, springStiffness: 6.5, animationTime: 1.2, gestureSettingsMouse: { dragToPan: !0, scrollToZoom: !0, clickToZoom: !0, dblClickToZoom: !1, pinchToZoom: !1, zoomToRefPoint: !0, flickEnabled: !1, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: !1 }, gestureSettingsTouch: { dragToPan: !0, scrollToZoom: !1, clickToZoom: !1, dblClickToZoom: !0, pinchToZoom: !0, zoomToRefPoint: !0, flickEnabled: !0, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: !1 }, gestureSettingsPen: { dragToPan: !0, scrollToZoom: !1, clickToZoom: !0, dblClickToZoom: !1, pinchToZoom: !1, zoomToRefPoint: !0, flickEnabled: !1, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: !1 }, gestureSettingsUnknown: { dragToPan: !0, scrollToZoom: !1, clickToZoom: !1, dblClickToZoom: !0, pinchToZoom: !0, zoomToRefPoint: !0, flickEnabled: !0, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: !1 }, zoomPerClick: 2, zoomPerScroll: 1.2, zoomPerSecond: 1, blendTime: 0, alwaysBlend: !1, autoHideControls: !0, immediateRender: !1, minZoomImageRatio: 0.9, maxZoomPixelRatio: 1.1, smoothTileEdgesMinZoom: 1.1, iOSDevice: n(), pixelsPerWheelLine: 40, pixelsPerArrowPress: 40, autoResize: !0, preserveImageSizeOnResize: !1, minScrollDeltaTime: 50, rotationIncrement: 90, showSequenceControl: !0, sequenceControlAnchor: null, preserveViewport: !1, preserveOverlays: !1, navPrevNextWrap: !1, showNavigationControl: !0, navigationControlAnchor: null, showZoomControl: !0, showHomeControl: !0, showFullPageControl: !0, showRotationControl: !1, showFlipControl: !1, controlsFadeDelay: 2e3, controlsFadeLength: 1500, mouseNavEnabled: !0, showNavigator: !1, navigatorId: null, navigatorPosition: null, navigatorSizeRatio: 0.2, navigatorMaintainSizeRatio: !1, navigatorTop: null, navigatorLeft: null, navigatorHeight: null, navigatorWidth: null, navigatorAutoResize: !0, navigatorAutoFade: !0, navigatorRotate: !0, navigatorBackground: "#000", navigatorOpacity: 0.8, navigatorBorderColor: "#555", navigatorDisplayRegionColor: "#900", degrees: 0, flipped: !1, opacity: 1, preload: !1, compositeOperation: null, imageSmoothingEnabled: !0, placeholderFillStyle: null, showReferenceStrip: !1, referenceStripScroll: "horizontal", referenceStripElement: null, referenceStripHeight: null, referenceStripWidth: null, referenceStripPosition: "BOTTOM_LEFT", referenceStripSizeRatio: 0.2, collectionRows: 3, collectionColumns: 0, collectionLayout: "horizontal", collectionMode: !1, collectionTileSize: 800, collectionTileMargin: 80, imageLoaderLimit: 0, maxImageCacheCount: 200, timeout: 3e4, useCanvas: !0, prefixUrl: "/images/", navImages: { zoomIn: { REST: "zoomin_rest.png", GROUP: "zoomin_grouphover.png", HOVER: "zoomin_hover.png", DOWN: "zoomin_pressed.png" }, zoomOut: { REST: "zoomout_rest.png", GROUP: "zoomout_grouphover.png", HOVER: "zoomout_hover.png", DOWN: "zoomout_pressed.png" }, home: { REST: "home_rest.png", GROUP: "home_grouphover.png", HOVER: "home_hover.png", DOWN: "home_pressed.png" }, fullpage: { REST: "fullpage_rest.png", GROUP: "fullpage_grouphover.png", HOVER: "fullpage_hover.png", DOWN: "fullpage_pressed.png" }, rotateleft: { REST: "rotateleft_rest.png", GROUP: "rotateleft_grouphover.png", HOVER: "rotateleft_hover.png", DOWN: "rotateleft_pressed.png" }, rotateright: { REST: "rotateright_rest.png", GROUP: "rotateright_grouphover.png", HOVER: "rotateright_hover.png", DOWN: "rotateright_pressed.png" }, flip: { REST: "flip_rest.png", GROUP: "flip_grouphover.png", HOVER: "flip_hover.png", DOWN: "flip_pressed.png" }, previous: { REST: "previous_rest.png", GROUP: "previous_grouphover.png", HOVER: "previous_hover.png", DOWN: "previous_pressed.png" }, next: { REST: "next_rest.png", GROUP: "next_grouphover.png", HOVER: "next_hover.png", DOWN: "next_pressed.png" } }, debugMode: !1, debugGridColor: ["#437AB2", "#1B9E77", "#D95F02", "#7570B3", "#E7298A", "#66A61E", "#E6AB02", "#A6761D", "#666666"] }, SIGNAL: "----seadragon----", delegate: function(l, u) {
          return function() {
            var c = arguments;
            return c === void 0 && (c = []), u.apply(l, c);
          };
        }, BROWSERS: { UNKNOWN: 0, IE: 1, FIREFOX: 2, SAFARI: 3, CHROME: 4, OPERA: 5, EDGE: 6, CHROMEEDGE: 7 }, _viewers: /* @__PURE__ */ new Map(), getViewer: function(l) {
          return e._viewers.get(this.getElement(l));
        }, getElement: function(l) {
          return typeof l == "string" && (l = document.getElementById(l)), l;
        }, getElementPosition: function(l) {
          var u = new e.Point(), c, h;
          for (l = e.getElement(l), c = e.getElementStyle(l).position === "fixed", h = a(l, c); h; )
            u.x += l.offsetLeft, u.y += l.offsetTop, c && (u = u.plus(e.getPageScroll())), l = h, c = e.getElementStyle(l).position === "fixed", h = a(l, c);
          return u;
        }, getElementOffset: function(l) {
          l = e.getElement(l);
          var u = l && l.ownerDocument, c, h, d = { top: 0, left: 0 };
          return u ? (c = u.documentElement, typeof l.getBoundingClientRect < "u" && (d = l.getBoundingClientRect()), h = u === u.window ? u : u.nodeType === 9 ? u.defaultView || u.parentWindow : !1, new e.Point(d.left + (h.pageXOffset || c.scrollLeft) - (c.clientLeft || 0), d.top + (h.pageYOffset || c.scrollTop) - (c.clientTop || 0))) : new e.Point();
        }, getElementSize: function(l) {
          return l = e.getElement(l), new e.Point(l.clientWidth, l.clientHeight);
        }, getElementStyle: document.documentElement.currentStyle ? function(l) {
          return l = e.getElement(l), l.currentStyle;
        } : function(l) {
          return l = e.getElement(l), window.getComputedStyle(l, "");
        }, getCssPropertyWithVendorPrefix: function(l) {
          var u = {};
          return e.getCssPropertyWithVendorPrefix = function(c) {
            if (u[c] !== void 0)
              return u[c];
            var h = document.createElement("div").style, d = null;
            if (h[c] !== void 0)
              d = c;
            else
              for (var m = ["Webkit", "Moz", "MS", "O", "webkit", "moz", "ms", "o"], y = e.capitalizeFirstLetter(c), S = 0; S < m.length; S++) {
                var b = m[S] + y;
                if (h[b] !== void 0) {
                  d = b;
                  break;
                }
              }
            return u[c] = d, d;
          }, e.getCssPropertyWithVendorPrefix(l);
        }, capitalizeFirstLetter: function(l) {
          return l.charAt(0).toUpperCase() + l.slice(1);
        }, positiveModulo: function(l, u) {
          var c = l % u;
          return c < 0 && (c += u), c;
        }, pointInElement: function(l, u) {
          l = e.getElement(l);
          var c = e.getElementOffset(l), h = e.getElementSize(l);
          return u.x >= c.x && u.x < c.x + h.x && u.y < c.y + h.y && u.y >= c.y;
        }, getMousePosition: function(l) {
          if (typeof l.pageX == "number")
            e.getMousePosition = function(u) {
              var c = new e.Point();
              return c.x = u.pageX, c.y = u.pageY, c;
            };
          else if (typeof l.clientX == "number")
            e.getMousePosition = function(u) {
              var c = new e.Point();
              return c.x = u.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, c.y = u.clientY + document.body.scrollTop + document.documentElement.scrollTop, c;
            };
          else
            throw new Error("Unknown event mouse position, no known technique.");
          return e.getMousePosition(l);
        }, getPageScroll: function() {
          var l = document.documentElement || {}, u = document.body || {};
          if (typeof window.pageXOffset == "number")
            e.getPageScroll = function() {
              return new e.Point(window.pageXOffset, window.pageYOffset);
            };
          else if (u.scrollLeft || u.scrollTop)
            e.getPageScroll = function() {
              return new e.Point(document.body.scrollLeft, document.body.scrollTop);
            };
          else if (l.scrollLeft || l.scrollTop)
            e.getPageScroll = function() {
              return new e.Point(document.documentElement.scrollLeft, document.documentElement.scrollTop);
            };
          else
            return new e.Point(0, 0);
          return e.getPageScroll();
        }, setPageScroll: function(l) {
          if (typeof window.scrollTo < "u")
            e.setPageScroll = function(h) {
              window.scrollTo(h.x, h.y);
            };
          else {
            var u = e.getPageScroll();
            if (u.x === l.x && u.y === l.y)
              return;
            document.body.scrollLeft = l.x, document.body.scrollTop = l.y;
            var c = e.getPageScroll();
            if (c.x !== u.x && c.y !== u.y) {
              e.setPageScroll = function(h) {
                document.body.scrollLeft = h.x, document.body.scrollTop = h.y;
              };
              return;
            }
            if (document.documentElement.scrollLeft = l.x, document.documentElement.scrollTop = l.y, c = e.getPageScroll(), c.x !== u.x && c.y !== u.y) {
              e.setPageScroll = function(h) {
                document.documentElement.scrollLeft = h.x, document.documentElement.scrollTop = h.y;
              };
              return;
            }
            e.setPageScroll = function(h) {
            };
          }
          e.setPageScroll(l);
        }, getWindowSize: function() {
          var l = document.documentElement || {}, u = document.body || {};
          if (typeof window.innerWidth == "number")
            e.getWindowSize = function() {
              return new e.Point(window.innerWidth, window.innerHeight);
            };
          else if (l.clientWidth || l.clientHeight)
            e.getWindowSize = function() {
              return new e.Point(document.documentElement.clientWidth, document.documentElement.clientHeight);
            };
          else if (u.clientWidth || u.clientHeight)
            e.getWindowSize = function() {
              return new e.Point(document.body.clientWidth, document.body.clientHeight);
            };
          else
            throw new Error("Unknown window size, no known technique.");
          return e.getWindowSize();
        }, makeCenteredNode: function(l) {
          l = e.getElement(l);
          var u = [e.makeNeutralElement("div"), e.makeNeutralElement("div"), e.makeNeutralElement("div")];
          return e.extend(u[0].style, { display: "table", height: "100%", width: "100%" }), e.extend(u[1].style, { display: "table-row" }), e.extend(u[2].style, { display: "table-cell", verticalAlign: "middle", textAlign: "center" }), u[0].appendChild(u[1]), u[1].appendChild(u[2]), u[2].appendChild(l), u[0];
        }, makeNeutralElement: function(l) {
          var u = document.createElement(l), c = u.style;
          return c.background = "transparent none", c.border = "none", c.margin = "0px", c.padding = "0px", c.position = "static", u;
        }, now: function() {
          return Date.now ? e.now = Date.now : e.now = function() {
            return (/* @__PURE__ */ new Date()).getTime();
          }, e.now();
        }, makeTransparentImage: function(l) {
          var u = e.makeNeutralElement("img");
          return u.src = l, u;
        }, setElementOpacity: function(l, u, c) {
          var h, d;
          l = e.getElement(l), c && !e.Browser.alpha && (u = Math.round(u)), e.Browser.opacity ? l.style.opacity = u < 1 ? u : "" : u < 1 ? (h = Math.round(100 * u), d = "alpha(opacity=" + h + ")", l.style.filter = d) : l.style.filter = "";
        }, setElementTouchActionNone: function(l) {
          l = e.getElement(l), typeof l.style.touchAction < "u" ? l.style.touchAction = "none" : typeof l.style.msTouchAction < "u" && (l.style.msTouchAction = "none");
        }, setElementPointerEvents: function(l, u) {
          l = e.getElement(l), typeof l.style.pointerEvents < "u" && (l.style.pointerEvents = u);
        }, setElementPointerEventsNone: function(l) {
          e.setElementPointerEvents(l, "none");
        }, addClass: function(l, u) {
          l = e.getElement(l), l.className ? (" " + l.className + " ").indexOf(" " + u + " ") === -1 && (l.className += " " + u) : l.className = u;
        }, indexOf: function(l, u, c) {
          return Array.prototype.indexOf ? this.indexOf = function(h, d, m) {
            return h.indexOf(d, m);
          } : this.indexOf = function(h, d, m) {
            var y, S = m || 0, b;
            if (!h)
              throw new TypeError();
            if (b = h.length, b === 0 || S >= b)
              return -1;
            for (S < 0 && (S = b - Math.abs(S)), y = S; y < b; y++)
              if (h[y] === d)
                return y;
            return -1;
          }, this.indexOf(l, u, c);
        }, removeClass: function(l, u) {
          var c, h = [], d;
          for (l = e.getElement(l), c = l.className.split(/\s+/), d = 0; d < c.length; d++)
            c[d] && c[d] !== u && h.push(c[d]);
          l.className = h.join(" ");
        }, normalizeEventListenerOptions: function(l) {
          var u;
          return typeof l < "u" ? typeof l == "boolean" ? u = e.supportsEventListenerOptions ? { capture: l } : l : u = e.supportsEventListenerOptions ? l : typeof l.capture < "u" ? l.capture : !1 : u = e.supportsEventListenerOptions ? { capture: !1 } : !1, u;
        }, addEvent: function() {
          if (e.supportsAddEventListener)
            return function(l, u, c, h) {
              h = e.normalizeEventListenerOptions(h), l = e.getElement(l), l.addEventListener(u, c, h);
            };
          if (document.documentElement.attachEvent && document.attachEvent)
            return function(l, u, c) {
              l = e.getElement(l), l.attachEvent("on" + u, c);
            };
          throw new Error("No known event model.");
        }(), removeEvent: function() {
          if (e.supportsRemoveEventListener)
            return function(l, u, c, h) {
              h = e.normalizeEventListenerOptions(h), l = e.getElement(l), l.removeEventListener(u, c, h);
            };
          if (document.documentElement.detachEvent && document.detachEvent)
            return function(l, u, c) {
              l = e.getElement(l), l.detachEvent("on" + u, c);
            };
          throw new Error("No known event model.");
        }(), cancelEvent: function(l) {
          l.preventDefault();
        }, eventIsCanceled: function(l) {
          return l.defaultPrevented;
        }, stopEvent: function(l) {
          l.stopPropagation();
        }, createCallback: function(l, u) {
          var c = [], h;
          for (h = 2; h < arguments.length; h++)
            c.push(arguments[h]);
          return function() {
            var d = c.concat([]), m;
            for (m = 0; m < arguments.length; m++)
              d.push(arguments[m]);
            return u.apply(l, d);
          };
        }, getUrlParameter: function(l) {
          var u = s[l];
          return u || null;
        }, getUrlProtocol: function(l) {
          var u = l.match(/^([a-z]+:)\/\//i);
          return u === null ? window.location.protocol : u[1].toLowerCase();
        }, createAjaxRequest: function(l) {
          var u;
          try {
            u = !!new ActiveXObject("Microsoft.XMLHTTP");
          } catch {
            u = !1;
          }
          if (u)
            window.XMLHttpRequest ? e.createAjaxRequest = function(c) {
              return c ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
            } : e.createAjaxRequest = function() {
              return new ActiveXObject("Microsoft.XMLHTTP");
            };
          else if (window.XMLHttpRequest)
            e.createAjaxRequest = function() {
              return new XMLHttpRequest();
            };
          else
            throw new Error("Browser doesn't support XMLHttpRequest.");
          return e.createAjaxRequest(l);
        }, makeAjaxRequest: function(l, u, c) {
          var h, d, m;
          e.isPlainObject(l) && (u = l.success, c = l.error, h = l.withCredentials, d = l.headers, m = l.responseType || null, l = l.url);
          var y = e.getUrlProtocol(l), S = e.createAjaxRequest(y === "file:");
          if (!e.isFunction(u))
            throw new Error("makeAjaxRequest requires a success callback");
          S.onreadystatechange = function() {
            S.readyState === 4 && (S.onreadystatechange = function() {
            }, S.status >= 200 && S.status < 300 || S.status === 0 && y !== "http:" && y !== "https:" ? u(S) : (e.console.log("AJAX request returned %d: %s", S.status, l), e.isFunction(c) && c(S)));
          };
          try {
            if (S.open("GET", l, !0), m && (S.responseType = m), d)
              for (var b in d)
                Object.prototype.hasOwnProperty.call(d, b) && d[b] && S.setRequestHeader(b, d[b]);
            h && (S.withCredentials = !0), S.send(null);
          } catch (A) {
            e.console.log("%s while making AJAX request: %s", A.name, A.message), S.onreadystatechange = function() {
            }, e.isFunction(c) && c(S, A);
          }
          return S;
        }, jsonp: function(l) {
          var u, c = l.url, h = document.head || document.getElementsByTagName("head")[0] || document.documentElement, d = l.callbackName || "openseadragon" + e.now(), m = window[d], y = "$1" + d + "$2", S = l.param || "callback", b = l.callback;
          c = c.replace(/(=)\?(&|$)|\?\?/i, y), c += (/\?/.test(c) ? "&" : "?") + S + "=" + d, window[d] = function(A) {
            if (m)
              window[d] = m;
            else
              try {
                delete window[d];
              } catch {
              }
            b && e.isFunction(b) && b(A);
          }, u = document.createElement("script"), (l.async !== void 0 || l.async !== !1) && (u.async = "async"), l.scriptCharset && (u.charset = l.scriptCharset), u.src = c, u.onload = u.onreadystatechange = function(A, p) {
            (p || !u.readyState || /loaded|complete/.test(u.readyState)) && (u.onload = u.onreadystatechange = null, h && u.parentNode && h.removeChild(u), u = void 0);
          }, h.insertBefore(u, h.firstChild);
        }, createFromDZI: function() {
          throw "OpenSeadragon.createFromDZI is deprecated, use Viewer.open.";
        }, parseXml: function(l) {
          if (window.DOMParser)
            e.parseXml = function(u) {
              var c = null, h;
              return h = new DOMParser(), c = h.parseFromString(u, "text/xml"), c;
            };
          else if (window.ActiveXObject)
            e.parseXml = function(u) {
              var c = null;
              return c = new ActiveXObject("Microsoft.XMLDOM"), c.async = !1, c.loadXML(u), c;
            };
          else
            throw new Error("Browser doesn't support XML DOM.");
          return e.parseXml(l);
        }, parseJSON: function(l) {
          return e.parseJSON = window.JSON.parse, e.parseJSON(l);
        }, imageFormatSupported: function(l) {
          return l = l || "", !!o[l.toLowerCase()];
        }, setImageFormatsSupported: function(l) {
          e.extend(o, l);
        } });
        var r = function(l) {
        };
        e.console = window.console || { log: r, debug: r, info: r, warn: r, error: r, assert: r }, e.Browser = { vendor: e.BROWSERS.UNKNOWN, version: 0, alpha: !0 };
        var o = { bmp: !1, jpeg: !0, jpg: !0, png: !0, tif: !1, wdp: !1 }, s = {};
        (function() {
          var l = navigator.appVersion, u = navigator.userAgent, c;
          switch (navigator.appName) {
            case "Microsoft Internet Explorer":
              window.attachEvent && window.ActiveXObject && (e.Browser.vendor = e.BROWSERS.IE, e.Browser.version = parseFloat(u.substring(u.indexOf("MSIE") + 5, u.indexOf(";", u.indexOf("MSIE")))));
              break;
            case "Netscape":
              window.addEventListener && (u.indexOf("Edge") >= 0 ? (e.Browser.vendor = e.BROWSERS.EDGE, e.Browser.version = parseFloat(u.substring(u.indexOf("Edge") + 5))) : u.indexOf("Edg") >= 0 ? (e.Browser.vendor = e.BROWSERS.CHROMEEDGE, e.Browser.version = parseFloat(u.substring(u.indexOf("Edg") + 4))) : u.indexOf("Firefox") >= 0 ? (e.Browser.vendor = e.BROWSERS.FIREFOX, e.Browser.version = parseFloat(u.substring(u.indexOf("Firefox") + 8))) : u.indexOf("Safari") >= 0 ? (e.Browser.vendor = u.indexOf("Chrome") >= 0 ? e.BROWSERS.CHROME : e.BROWSERS.SAFARI, e.Browser.version = parseFloat(u.substring(u.substring(0, u.indexOf("Safari")).lastIndexOf("/") + 1, u.indexOf("Safari")))) : (c = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"), c.exec(u) !== null && (e.Browser.vendor = e.BROWSERS.IE, e.Browser.version = parseFloat(RegExp.$1))));
              break;
            case "Opera":
              e.Browser.vendor = e.BROWSERS.OPERA, e.Browser.version = parseFloat(l);
              break;
          }
          var h = window.location.search.substring(1), d = h.split("&"), m, y, S;
          for (S = 0; S < d.length; S++)
            if (m = d[S], y = m.indexOf("="), y > 0) {
              var b = m.substring(0, y), A = m.substring(y + 1);
              try {
                s[b] = decodeURIComponent(A);
              } catch {
                e.console.error("Ignoring malformed URL parameter: %s=%s", b, A);
              }
            }
          e.Browser.alpha = !(e.Browser.vendor === e.BROWSERS.CHROME && e.Browser.version < 2), e.Browser.opacity = !0, e.Browser.vendor === e.BROWSERS.IE && e.Browser.version < 11 && e.console.error("Internet Explorer versions < 11 are not supported by OpenSeadragon");
        })(), function(l) {
          var u = l.requestAnimationFrame || l.mozRequestAnimationFrame || l.webkitRequestAnimationFrame || l.msRequestAnimationFrame, c = l.cancelAnimationFrame || l.mozCancelAnimationFrame || l.webkitCancelAnimationFrame || l.msCancelAnimationFrame;
          if (u && c)
            e.requestAnimationFrame = function() {
              return u.apply(l, arguments);
            }, e.cancelAnimationFrame = function() {
              return c.apply(l, arguments);
            };
          else {
            var h = [], d = [], m = 0, y;
            e.requestAnimationFrame = function(S) {
              return h.push([++m, S]), y || (y = setInterval(function() {
                if (h.length) {
                  var b = e.now(), A = d;
                  for (d = h, h = A; d.length; )
                    d.shift()[1](b);
                } else
                  clearInterval(y), y = void 0;
              }, 1e3 / 50)), m;
            }, e.cancelAnimationFrame = function(S) {
              var b, A;
              for (b = 0, A = h.length; b < A; b += 1)
                if (h[b][0] === S) {
                  h.splice(b, 1);
                  return;
                }
              for (b = 0, A = d.length; b < A; b += 1)
                if (d[b][0] === S) {
                  d.splice(b, 1);
                  return;
                }
            };
          }
        }(window);
        function a(l, u) {
          return u && l !== document.body ? document.body : l.offsetParent;
        }
      }(i), function(e, n) {
        t.exports ? t.exports = n() : e.OpenSeadragon = n();
      }(dt, function() {
        return i;
      }), function(e) {
        var n = { supportsFullScreen: !1, isFullScreen: function() {
          return !1;
        }, getFullScreenElement: function() {
          return null;
        }, requestFullScreen: function() {
        }, exitFullScreen: function() {
        }, cancelFullScreen: function() {
        }, fullScreenEventName: "", fullScreenErrorEventName: "" };
        document.exitFullscreen ? (n.supportsFullScreen = !0, n.getFullScreenElement = function() {
          return document.fullscreenElement;
        }, n.requestFullScreen = function(r) {
          return r.requestFullscreen();
        }, n.exitFullScreen = function() {
          document.exitFullscreen();
        }, n.fullScreenEventName = "fullscreenchange", n.fullScreenErrorEventName = "fullscreenerror") : document.msExitFullscreen ? (n.supportsFullScreen = !0, n.getFullScreenElement = function() {
          return document.msFullscreenElement;
        }, n.requestFullScreen = function(r) {
          return r.msRequestFullscreen();
        }, n.exitFullScreen = function() {
          document.msExitFullscreen();
        }, n.fullScreenEventName = "MSFullscreenChange", n.fullScreenErrorEventName = "MSFullscreenError") : document.webkitExitFullscreen ? (n.supportsFullScreen = !0, n.getFullScreenElement = function() {
          return document.webkitFullscreenElement;
        }, n.requestFullScreen = function(r) {
          return r.webkitRequestFullscreen();
        }, n.exitFullScreen = function() {
          document.webkitExitFullscreen();
        }, n.fullScreenEventName = "webkitfullscreenchange", n.fullScreenErrorEventName = "webkitfullscreenerror") : document.webkitCancelFullScreen ? (n.supportsFullScreen = !0, n.getFullScreenElement = function() {
          return document.webkitCurrentFullScreenElement;
        }, n.requestFullScreen = function(r) {
          return r.webkitRequestFullScreen();
        }, n.exitFullScreen = function() {
          document.webkitCancelFullScreen();
        }, n.fullScreenEventName = "webkitfullscreenchange", n.fullScreenErrorEventName = "webkitfullscreenerror") : document.mozCancelFullScreen && (n.supportsFullScreen = !0, n.getFullScreenElement = function() {
          return document.mozFullScreenElement;
        }, n.requestFullScreen = function(r) {
          return r.mozRequestFullScreen();
        }, n.exitFullScreen = function() {
          document.mozCancelFullScreen();
        }, n.fullScreenEventName = "mozfullscreenchange", n.fullScreenErrorEventName = "mozfullscreenerror"), n.isFullScreen = function() {
          return n.getFullScreenElement() !== null;
        }, n.cancelFullScreen = function() {
          e.console.error("cancelFullScreen is deprecated. Use exitFullScreen instead."), n.exitFullScreen();
        }, e.extend(e, n);
      }(i), function(e) {
        e.EventSource = function() {
          this.events = {};
        }, e.EventSource.prototype = { addOnceHandler: function(n, r, o, s) {
          var a = this;
          s = s || 1;
          var l = 0, u = function(c) {
            l++, l === s && a.removeHandler(n, u), r(c);
          };
          this.addHandler(n, u, o);
        }, addHandler: function(n, r, o) {
          var s = this.events[n];
          s || (this.events[n] = s = []), r && e.isFunction(r) && (s[s.length] = { handler: r, userData: o || null });
        }, removeHandler: function(n, r) {
          var o = this.events[n], s = [], a;
          if (o && e.isArray(o)) {
            for (a = 0; a < o.length; a++)
              o[a].handler !== r && s.push(o[a]);
            this.events[n] = s;
          }
        }, removeAllHandlers: function(n) {
          if (n)
            this.events[n] = [];
          else
            for (var r in this.events)
              this.events[r] = [];
        }, getHandler: function(n) {
          var r = this.events[n];
          return !r || !r.length ? null : (r = r.length === 1 ? [r[0]] : Array.apply(null, r), function(o, s) {
            var a, l = r.length;
            for (a = 0; a < l; a++)
              r[a] && (s.eventSource = o, s.userData = r[a].userData, r[a].handler(s));
          });
        }, raiseEvent: function(n, r) {
          var o = this.getHandler(n);
          o && (r || (r = {}), o(this, r));
        } };
      }(i), function(e) {
        var n = {};
        e.MouseTracker = function(v) {
          var f = arguments;
          e.isPlainObject(v) || (v = { element: f[0], clickTimeThreshold: f[1], clickDistThreshold: f[2] }), this.hash = Math.random(), this.element = e.getElement(v.element), this.clickTimeThreshold = v.clickTimeThreshold || e.DEFAULT_SETTINGS.clickTimeThreshold, this.clickDistThreshold = v.clickDistThreshold || e.DEFAULT_SETTINGS.clickDistThreshold, this.dblClickTimeThreshold = v.dblClickTimeThreshold || e.DEFAULT_SETTINGS.dblClickTimeThreshold, this.dblClickDistThreshold = v.dblClickDistThreshold || e.DEFAULT_SETTINGS.dblClickDistThreshold, this.userData = v.userData || null, this.stopDelay = v.stopDelay || 50, this.preProcessEventHandler = v.preProcessEventHandler || null, this.contextMenuHandler = v.contextMenuHandler || null, this.enterHandler = v.enterHandler || null, this.leaveHandler = v.leaveHandler || null, this.exitHandler = v.exitHandler || null, this.overHandler = v.overHandler || null, this.outHandler = v.outHandler || null, this.pressHandler = v.pressHandler || null, this.nonPrimaryPressHandler = v.nonPrimaryPressHandler || null, this.releaseHandler = v.releaseHandler || null, this.nonPrimaryReleaseHandler = v.nonPrimaryReleaseHandler || null, this.moveHandler = v.moveHandler || null, this.scrollHandler = v.scrollHandler || null, this.clickHandler = v.clickHandler || null, this.dblClickHandler = v.dblClickHandler || null, this.dragHandler = v.dragHandler || null, this.dragEndHandler = v.dragEndHandler || null, this.pinchHandler = v.pinchHandler || null, this.stopHandler = v.stopHandler || null, this.keyDownHandler = v.keyDownHandler || null, this.keyUpHandler = v.keyUpHandler || null, this.keyHandler = v.keyHandler || null, this.focusHandler = v.focusHandler || null, this.blurHandler = v.blurHandler || null;
          var w = this;
          n[this.hash] = { click: function(x) {
            E(w, x);
          }, dblclick: function(x) {
            T(w, x);
          }, keydown: function(x) {
            C(w, x);
          }, keyup: function(x) {
            O(w, x);
          }, keypress: function(x) {
            D(w, x);
          }, focus: function(x) {
            F(w, x);
          }, blur: function(x) {
            I(w, x);
          }, contextmenu: function(x) {
            H(w, x);
          }, wheel: function(x) {
            j(w, x);
          }, mousewheel: function(x) {
            z(w, x);
          }, DOMMouseScroll: function(x) {
            z(w, x);
          }, MozMousePixelScroll: function(x) {
            z(w, x);
          }, losecapture: function(x) {
            $(w, x);
          }, mouseenter: function(x) {
            Ye(w, x);
          }, mouseleave: function(x) {
            Me(w, x);
          }, mouseover: function(x) {
            We(w, x);
          }, mouseout: function(x) {
            st(w, x);
          }, mousedown: function(x) {
            $e(w, x);
          }, mouseup: function(x) {
            wn(w, x);
          }, mousemove: function(x) {
            xn(w, x);
          }, touchstart: function(x) {
            Q(w, x);
          }, touchend: function(x) {
            J(w, x);
          }, touchmove: function(x) {
            te(w, x);
          }, touchcancel: function(x) {
            oe(w, x);
          }, gesturestart: function(x) {
            pe(w, x);
          }, gesturechange: function(x) {
            V(w, x);
          }, gotpointercapture: function(x) {
            se(w, x);
          }, lostpointercapture: function(x) {
            Et(w, x);
          }, pointerenter: function(x) {
            Ye(w, x);
          }, pointerleave: function(x) {
            Me(w, x);
          }, pointerover: function(x) {
            We(w, x);
          }, pointerout: function(x) {
            st(w, x);
          }, pointerdown: function(x) {
            $e(w, x);
          }, pointerup: function(x) {
            wn(w, x);
          }, pointermove: function(x) {
            xn(w, x);
          }, pointercancel: function(x) {
            g(w, x);
          }, pointerupcaptured: function(x) {
            bn(w, x);
          }, pointermovecaptured: function(x) {
            Sn(w, x);
          }, tracking: !1, activePointersLists: [], lastClickPos: null, dblClickTimeOut: null, pinchGPoints: [], lastPinchDist: 0, currentPinchDist: 0, lastPinchCenter: null, currentPinchCenter: null, sentDragEvent: !1 }, this.hasGestureHandlers = !!(this.pressHandler || this.nonPrimaryPressHandler || this.releaseHandler || this.nonPrimaryReleaseHandler || this.clickHandler || this.dblClickHandler || this.dragHandler || this.dragEndHandler || this.pinchHandler), this.hasScrollHandler = !!this.scrollHandler, e.MouseTracker.havePointerEvents && e.setElementPointerEvents(this.element, "auto"), this.exitHandler && e.console.error("MouseTracker.exitHandler is deprecated. Use MouseTracker.leaveHandler instead."), v.startDisabled || this.setTracking(!0);
        }, e.MouseTracker.prototype = { destroy: function() {
          l(this), this.element = null, n[this.hash] = null, delete n[this.hash];
        }, isTracking: function() {
          return n[this.hash].tracking;
        }, setTracking: function(v) {
          return v ? a(this) : l(this), this;
        }, getActivePointersListByType: function(v) {
          var f = n[this.hash], w, x = f.activePointersLists.length, k;
          for (w = 0; w < x; w++)
            if (f.activePointersLists[w].type === v)
              return f.activePointersLists[w];
          return k = new e.MouseTracker.GesturePointList(v), f.activePointersLists.push(k), k;
        }, getActivePointerCount: function() {
          var v = n[this.hash], f, w = v.activePointersLists.length, x = 0;
          for (f = 0; f < w; f++)
            x += v.activePointersLists[f].getLength();
          return x;
        }, preProcessEventHandler: function() {
        }, contextMenuHandler: function() {
        }, enterHandler: function() {
        }, leaveHandler: function() {
        }, exitHandler: function() {
        }, overHandler: function() {
        }, outHandler: function() {
        }, pressHandler: function() {
        }, nonPrimaryPressHandler: function() {
        }, releaseHandler: function() {
        }, nonPrimaryReleaseHandler: function() {
        }, moveHandler: function() {
        }, scrollHandler: function() {
        }, clickHandler: function() {
        }, dblClickHandler: function() {
        }, dragHandler: function() {
        }, dragEndHandler: function() {
        }, pinchHandler: function() {
        }, stopHandler: function() {
        }, keyDownHandler: function() {
        }, keyUpHandler: function() {
        }, keyHandler: function() {
        }, focusHandler: function() {
        }, blurHandler: function() {
        } };
        var r = function() {
          try {
            return window.self !== window.top;
          } catch {
            return !0;
          }
        }();
        function o(v) {
          try {
            return v.addEventListener && v.removeEventListener;
          } catch {
            return !1;
          }
        }
        e.MouseTracker.gesturePointVelocityTracker = /* @__PURE__ */ function() {
          var v = [], f = 0, w = 0, x = function(de, Y) {
            return de.hash.toString() + Y.type + Y.id.toString();
          }, k = function() {
            var de, Y = v.length, Ge, Ce, Cn = e.now(), ld, ud, cd;
            for (ld = Cn - w, w = Cn, de = 0; de < Y; de++)
              Ge = v[de], Ce = Ge.gPoint, Ce.direction = Math.atan2(Ce.currentPos.y - Ge.lastPos.y, Ce.currentPos.x - Ge.lastPos.x), ud = Ge.lastPos.distanceTo(Ce.currentPos), Ge.lastPos = Ce.currentPos, cd = 1e3 * ud / (ld + 1), Ce.speed = 0.75 * cd + 0.25 * Ce.speed;
          }, N = function(de, Y) {
            var Ge = x(de, Y);
            v.push({ guid: Ge, gPoint: Y, lastPos: Y.currentPos }), v.length === 1 && (w = e.now(), f = window.setInterval(k, 50));
          }, X = function(de, Y) {
            var Ge = x(de, Y), Ce, Cn = v.length;
            for (Ce = 0; Ce < Cn; Ce++)
              if (v[Ce].guid === Ge) {
                v.splice(Ce, 1), Cn--, Cn === 0 && window.clearInterval(f);
                break;
              }
          };
          return { addPoint: N, removePoint: X };
        }(), e.MouseTracker.captureElement = document, e.MouseTracker.wheelEventName = e.Browser.vendor === e.BROWSERS.IE && e.Browser.version > 8 || "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll", e.MouseTracker.subscribeEvents = ["click", "dblclick", "keydown", "keyup", "keypress", "focus", "blur", "contextmenu", e.MouseTracker.wheelEventName], e.MouseTracker.wheelEventName === "DOMMouseScroll" && e.MouseTracker.subscribeEvents.push("MozMousePixelScroll"), window.PointerEvent ? (e.MouseTracker.havePointerEvents = !0, e.MouseTracker.subscribeEvents.push("pointerenter", "pointerleave", "pointerover", "pointerout", "pointerdown", "pointerup", "pointermove", "pointercancel"), e.MouseTracker.havePointerCapture = function() {
          var v = document.createElement("div");
          return e.isFunction(v.setPointerCapture) && e.isFunction(v.releasePointerCapture);
        }(), e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("gotpointercapture", "lostpointercapture")) : (e.MouseTracker.havePointerEvents = !1, e.MouseTracker.subscribeEvents.push("mouseenter", "mouseleave", "mouseover", "mouseout", "mousedown", "mouseup", "mousemove"), e.MouseTracker.mousePointerId = "legacy-mouse", e.MouseTracker.havePointerCapture = function() {
          var v = document.createElement("div");
          return e.isFunction(v.setCapture) && e.isFunction(v.releaseCapture);
        }(), e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("losecapture"), "ontouchstart" in window && e.MouseTracker.subscribeEvents.push("touchstart", "touchend", "touchmove", "touchcancel"), "ongesturestart" in window && e.MouseTracker.subscribeEvents.push("gesturestart", "gesturechange")), e.MouseTracker.GesturePointList = function(v) {
          this._gPoints = [], this.type = v, this.buttons = 0, this.contacts = 0, this.clicks = 0, this.captureCount = 0;
        }, e.MouseTracker.GesturePointList.prototype = { getLength: function() {
          return this._gPoints.length;
        }, asArray: function() {
          return this._gPoints;
        }, add: function(v) {
          return this._gPoints.push(v);
        }, removeById: function(v) {
          var f, w = this._gPoints.length;
          for (f = 0; f < w; f++)
            if (this._gPoints[f].id === v) {
              this._gPoints.splice(f, 1);
              break;
            }
          return this._gPoints.length;
        }, getByIndex: function(v) {
          return v < this._gPoints.length ? this._gPoints[v] : null;
        }, getById: function(v) {
          var f, w = this._gPoints.length;
          for (f = 0; f < w; f++)
            if (this._gPoints[f].id === v)
              return this._gPoints[f];
          return null;
        }, getPrimary: function(v) {
          var f, w = this._gPoints.length;
          for (f = 0; f < w; f++)
            if (this._gPoints[f].isPrimary)
              return this._gPoints[f];
          return null;
        }, addContact: function() {
          ++this.contacts, this.contacts > 1 && (this.type === "mouse" || this.type === "pen") && (e.console.warn("GesturePointList.addContact() Implausible contacts value"), this.contacts = 1);
        }, removeContact: function() {
          --this.contacts, this.contacts < 0 && (e.console.warn("GesturePointList.removeContact() Implausible contacts value"), this.contacts = 0);
        } };
        function s(v) {
          var f = n[v.hash], w, x, k, N, X, de = f.activePointersLists.length;
          for (w = 0; w < de; w++)
            if (k = f.activePointersLists[w], k.getLength() > 0) {
              for (X = [], N = k.asArray(), x = 0; x < N.length; x++)
                X.push(N[x]);
              for (x = 0; x < X.length; x++)
                R(v, k, X[x]);
            }
          for (w = 0; w < de; w++)
            f.activePointersLists.pop();
          f.sentDragEvent = !1;
        }
        function a(v) {
          var f = n[v.hash], w, x;
          if (!f.tracking) {
            for (x = 0; x < e.MouseTracker.subscribeEvents.length; x++)
              w = e.MouseTracker.subscribeEvents[x], e.addEvent(v.element, w, f[w], w === e.MouseTracker.wheelEventName ? { passive: !1, capture: !1 } : !1);
            s(v), f.tracking = !0;
          }
        }
        function l(v) {
          var f = n[v.hash], w, x;
          if (f.tracking) {
            for (x = 0; x < e.MouseTracker.subscribeEvents.length; x++)
              w = e.MouseTracker.subscribeEvents[x], e.removeEvent(v.element, w, f[w], !1);
            s(v), f.tracking = !1;
          }
        }
        function u(v, f) {
          var w = n[v.hash];
          if (f === "pointerevent")
            return { upName: "pointerup", upHandler: w.pointerupcaptured, moveName: "pointermove", moveHandler: w.pointermovecaptured };
          if (f === "mouse")
            return { upName: "pointerup", upHandler: w.pointerupcaptured, moveName: "pointermove", moveHandler: w.pointermovecaptured };
          if (f === "touch")
            return { upName: "touchend", upHandler: w.touchendcaptured, moveName: "touchmove", moveHandler: w.touchmovecaptured };
          throw new Error("MouseTracker.getCaptureEventParams: Unknown pointer type.");
        }
        function c(v, f) {
          var w;
          if (e.MouseTracker.havePointerCapture)
            if (e.MouseTracker.havePointerEvents)
              try {
                v.element.setPointerCapture(f.id);
              } catch {
                e.console.warn("setPointerCapture() called on invalid pointer ID");
                return;
              }
            else
              v.element.setCapture(!0);
          else
            w = u(v, e.MouseTracker.havePointerEvents ? "pointerevent" : f.type), r && o(window.top) && e.addEvent(window.top, w.upName, w.upHandler, !0), e.addEvent(e.MouseTracker.captureElement, w.upName, w.upHandler, !0), e.addEvent(e.MouseTracker.captureElement, w.moveName, w.moveHandler, !0);
          G(v, f, !0);
        }
        function h(v, f) {
          var w, x, k;
          if (e.MouseTracker.havePointerCapture)
            if (e.MouseTracker.havePointerEvents) {
              if (x = v.getActivePointersListByType(f.type), k = x.getById(f.id), !k || !k.captured)
                return;
              try {
                v.element.releasePointerCapture(f.id);
              } catch {
              }
            } else
              v.element.releaseCapture();
          else
            w = u(v, e.MouseTracker.havePointerEvents ? "pointerevent" : f.type), r && o(window.top) && e.removeEvent(window.top, w.upName, w.upHandler, !0), e.removeEvent(e.MouseTracker.captureElement, w.moveName, w.moveHandler, !0), e.removeEvent(e.MouseTracker.captureElement, w.upName, w.upHandler, !0);
          G(v, f, !1);
        }
        function d(v) {
          return e.MouseTracker.havePointerEvents ? v.pointerId : e.MouseTracker.mousePointerId;
        }
        function m(v) {
          return e.MouseTracker.havePointerEvents ? v.pointerType || (e.Browser.vendor === e.BROWSERS.IE ? "mouse" : "") : "mouse";
        }
        function y(v) {
          return e.MouseTracker.havePointerEvents ? v.isPrimary : !0;
        }
        function S(v) {
          return e.getMousePosition(v);
        }
        function b(v, f) {
          return A(S(v), f);
        }
        function A(v, f) {
          var w = e.getElementOffset(f);
          return v.minus(w);
        }
        function p(v, f) {
          return new e.Point((v.x + f.x) / 2, (v.y + f.y) / 2);
        }
        function E(v, f) {
          var w = { originalEvent: f, eventType: "click", pointerType: "mouse", isEmulated: !1 };
          M(v, w), w.preventDefault && !w.defaultPrevented && e.cancelEvent(f), w.stopPropagation && e.stopEvent(f);
        }
        function T(v, f) {
          var w = { originalEvent: f, eventType: "dblclick", pointerType: "mouse", isEmulated: !1 };
          M(v, w), w.preventDefault && !w.defaultPrevented && e.cancelEvent(f), w.stopPropagation && e.stopEvent(f);
        }
        function C(v, f) {
          var w = null, x = { originalEvent: f, eventType: "keydown", pointerType: "", isEmulated: !1 };
          M(v, x), v.keyDownHandler && !x.preventGesture && !x.defaultPrevented && (w = { eventSource: v, keyCode: f.keyCode ? f.keyCode : f.charCode, ctrl: f.ctrlKey, shift: f.shiftKey, alt: f.altKey, meta: f.metaKey, originalEvent: f, preventDefault: x.preventDefault || x.defaultPrevented, userData: v.userData }, v.keyDownHandler(w)), (w && w.preventDefault || x.preventDefault && !x.defaultPrevented) && e.cancelEvent(f), x.stopPropagation && e.stopEvent(f);
        }
        function O(v, f) {
          var w = null, x = { originalEvent: f, eventType: "keyup", pointerType: "", isEmulated: !1 };
          M(v, x), v.keyUpHandler && !x.preventGesture && !x.defaultPrevented && (w = { eventSource: v, keyCode: f.keyCode ? f.keyCode : f.charCode, ctrl: f.ctrlKey, shift: f.shiftKey, alt: f.altKey, meta: f.metaKey, originalEvent: f, preventDefault: x.preventDefault || x.defaultPrevented, userData: v.userData }, v.keyUpHandler(w)), (w && w.preventDefault || x.preventDefault && !x.defaultPrevented) && e.cancelEvent(f), x.stopPropagation && e.stopEvent(f);
        }
        function D(v, f) {
          var w = null, x = { originalEvent: f, eventType: "keypress", pointerType: "", isEmulated: !1 };
          M(v, x), v.keyHandler && !x.preventGesture && !x.defaultPrevented && (w = { eventSource: v, keyCode: f.keyCode ? f.keyCode : f.charCode, ctrl: f.ctrlKey, shift: f.shiftKey, alt: f.altKey, meta: f.metaKey, originalEvent: f, preventDefault: x.preventDefault || x.defaultPrevented, userData: v.userData }, v.keyHandler(w)), (w && w.preventDefault || x.preventDefault && !x.defaultPrevented) && e.cancelEvent(f), x.stopPropagation && e.stopEvent(f);
        }
        function F(v, f) {
          var w = { originalEvent: f, eventType: "focus", pointerType: "", isEmulated: !1 };
          M(v, w), v.focusHandler && !w.preventGesture && v.focusHandler({ eventSource: v, originalEvent: f, userData: v.userData });
        }
        function I(v, f) {
          var w = { originalEvent: f, eventType: "blur", pointerType: "", isEmulated: !1 };
          M(v, w), v.blurHandler && !w.preventGesture && v.blurHandler({ eventSource: v, originalEvent: f, userData: v.userData });
        }
        function H(v, f) {
          var w = null, x = { originalEvent: f, eventType: "contextmenu", pointerType: "mouse", isEmulated: !1 };
          M(v, x), v.contextMenuHandler && !x.preventGesture && !x.defaultPrevented && (w = { eventSource: v, position: A(S(f), v.element), originalEvent: x.originalEvent, preventDefault: x.preventDefault || x.defaultPrevented, userData: v.userData }, v.contextMenuHandler(w)), (w && w.preventDefault || x.preventDefault && !x.defaultPrevented) && e.cancelEvent(f), x.stopPropagation && e.stopEvent(f);
        }
        function j(v, f) {
          q(v, f, f);
        }
        function z(v, f) {
          var w = { target: f.target || f.srcElement, type: "wheel", shiftKey: f.shiftKey || !1, clientX: f.clientX, clientY: f.clientY, pageX: f.pageX ? f.pageX : f.clientX, pageY: f.pageY ? f.pageY : f.clientY, deltaMode: f.type === "MozMousePixelScroll" ? 0 : 1, deltaX: 0, deltaZ: 0 };
          e.MouseTracker.wheelEventName === "mousewheel" ? w.deltaY = -f.wheelDelta / e.DEFAULT_SETTINGS.pixelsPerWheelLine : w.deltaY = f.detail, q(v, w, f);
        }
        function q(v, f, w) {
          var x = 0, k, N = null;
          x = f.deltaY < 0 ? 1 : -1, k = { originalEvent: f, eventType: "wheel", pointerType: "mouse", isEmulated: f !== w }, M(v, k), v.scrollHandler && !k.preventGesture && !k.defaultPrevented && (N = { eventSource: v, pointerType: "mouse", position: b(f, v.element), scroll: x, shift: f.shiftKey, isTouchEvent: !1, originalEvent: w, preventDefault: k.preventDefault || k.defaultPrevented, userData: v.userData }, v.scrollHandler(N)), k.stopPropagation && e.stopEvent(w), (N && N.preventDefault || k.preventDefault && !k.defaultPrevented) && e.cancelEvent(w);
        }
        function $(v, f) {
          var w = { id: e.MouseTracker.mousePointerId, type: "mouse" }, x = { originalEvent: f, eventType: "lostpointercapture", pointerType: "mouse", isEmulated: !1 };
          M(v, x), f.target === v.element && G(v, w, !1), x.stopPropagation && e.stopEvent(f);
        }
        function Q(v, f) {
          var w, x, k = f.changedTouches.length, N, X = v.getActivePointersListByType("touch");
          w = e.now(), X.getLength() > f.touches.length - k && e.console.warn("Tracked touch contact count doesn't match event.touches.length");
          var de = { originalEvent: f, eventType: "pointerdown", pointerType: "touch", isEmulated: !1 };
          for (M(v, de), x = 0; x < k; x++)
            N = { id: f.changedTouches[x].identifier, type: "touch", isPrimary: X.getLength() === 0, currentPos: S(f.changedTouches[x]), currentTime: w }, U(v, de, N), ee(v, de, N, 0), G(v, N, !0);
          de.preventDefault && !de.defaultPrevented && e.cancelEvent(f), de.stopPropagation && e.stopEvent(f);
        }
        function J(v, f) {
          var w, x, k = f.changedTouches.length, N;
          w = e.now();
          var X = { originalEvent: f, eventType: "pointerup", pointerType: "touch", isEmulated: !1 };
          for (M(v, X), x = 0; x < k; x++)
            N = { id: f.changedTouches[x].identifier, type: "touch", currentPos: S(f.changedTouches[x]), currentTime: w }, ve(v, X, N, 0), G(v, N, !1), ce(v, X, N);
          X.preventDefault && !X.defaultPrevented && e.cancelEvent(f), X.stopPropagation && e.stopEvent(f);
        }
        function te(v, f) {
          var w, x, k = f.changedTouches.length, N;
          w = e.now();
          var X = { originalEvent: f, eventType: "pointermove", pointerType: "touch", isEmulated: !1 };
          for (M(v, X), x = 0; x < k; x++)
            N = { id: f.changedTouches[x].identifier, type: "touch", currentPos: S(f.changedTouches[x]), currentTime: w }, re(v, X, N);
          X.preventDefault && !X.defaultPrevented && e.cancelEvent(f), X.stopPropagation && e.stopEvent(f);
        }
        function oe(v, f) {
          var w = f.changedTouches.length, x, k, N = { originalEvent: f, eventType: "pointercancel", pointerType: "touch", isEmulated: !1 };
          for (M(v, N), x = 0; x < w; x++)
            k = { id: f.changedTouches[x].identifier, type: "touch" }, Re(v, N, k);
          N.stopPropagation && e.stopEvent(f);
        }
        function pe(v, f) {
          return e.eventIsCanceled(f) || f.preventDefault(), !1;
        }
        function V(v, f) {
          return e.eventIsCanceled(f) || f.preventDefault(), !1;
        }
        function se(v, f) {
          var w = { originalEvent: f, eventType: "gotpointercapture", pointerType: m(f), isEmulated: !1 };
          M(v, w), f.target === v.element && G(v, { id: f.pointerId, type: m(f) }, !0), w.stopPropagation && e.stopEvent(f);
        }
        function Et(v, f) {
          var w = { originalEvent: f, eventType: "lostpointercapture", pointerType: m(f), isEmulated: !1 };
          M(v, w), f.target === v.element && G(v, { id: f.pointerId, type: m(f) }, !1), w.stopPropagation && e.stopEvent(f);
        }
        function Ye(v, f) {
          var w = { id: d(f), type: m(f), isPrimary: y(f), currentPos: S(f), currentTime: e.now() }, x = { originalEvent: f, eventType: "pointerenter", pointerType: w.type, isEmulated: !1 };
          M(v, x), U(v, x, w);
        }
        function Me(v, f) {
          var w = { id: d(f), type: m(f), isPrimary: y(f), currentPos: S(f), currentTime: e.now() }, x = { originalEvent: f, eventType: "pointerleave", pointerType: w.type, isEmulated: !1 };
          M(v, x), ce(v, x, w);
        }
        function We(v, f) {
          var w = { id: d(f), type: m(f), isPrimary: y(f), currentPos: S(f), currentTime: e.now() }, x = { originalEvent: f, eventType: "pointerover", pointerType: w.type, isEmulated: !1 };
          M(v, x), ge(v, x, w), x.preventDefault && !x.defaultPrevented && e.cancelEvent(f), x.stopPropagation && e.stopEvent(f);
        }
        function st(v, f) {
          var w = { id: d(f), type: m(f), isPrimary: y(f), currentPos: S(f), currentTime: e.now() }, x = { originalEvent: f, eventType: "pointerout", pointerType: w.type, isEmulated: !1 };
          M(v, x), ae(v, x, w), x.preventDefault && !x.defaultPrevented && e.cancelEvent(f), x.stopPropagation && e.stopEvent(f);
        }
        function $e(v, f) {
          var w = { id: d(f), type: m(f), isPrimary: y(f), currentPos: S(f), currentTime: e.now() }, x = e.MouseTracker.havePointerEvents && w.type === "touch" && e.Browser.vendor !== e.BROWSERS.IE, k = { originalEvent: f, eventType: "pointerdown", pointerType: w.type, isEmulated: !1 };
          M(v, k), ee(v, k, w, f.button), k.preventDefault && !k.defaultPrevented && e.cancelEvent(f), k.stopPropagation && e.stopEvent(f), k.shouldCapture && (x ? G(v, w, !0) : c(v, w));
        }
        function wn(v, f) {
          Ut(v, f);
        }
        function bn(v, f) {
          var w = v.getActivePointersListByType(m(f));
          w.getById(f.pointerId) && Ut(v, f), e.stopEvent(f);
        }
        function Ut(v, f) {
          var w;
          w = { id: d(f), type: m(f), isPrimary: y(f), currentPos: S(f), currentTime: e.now() };
          var x = { originalEvent: f, eventType: "pointerup", pointerType: w.type, isEmulated: !1 };
          M(v, x), ve(v, x, w, f.button), x.preventDefault && !x.defaultPrevented && e.cancelEvent(f), x.stopPropagation && e.stopEvent(f), x.shouldReleaseCapture && (f.target === v.element ? h(v, w) : G(v, w, !1));
        }
        function xn(v, f) {
          _n(v, f);
        }
        function Sn(v, f) {
          var w = v.getActivePointersListByType(m(f));
          w.getById(f.pointerId) && _n(v, f), e.stopEvent(f);
        }
        function _n(v, f) {
          var w = { id: d(f), type: m(f), isPrimary: y(f), currentPos: S(f), currentTime: e.now() }, x = { originalEvent: f, eventType: "pointermove", pointerType: w.type, isEmulated: !1 };
          M(v, x), re(v, x, w), x.preventDefault && !x.defaultPrevented && e.cancelEvent(f), x.stopPropagation && e.stopEvent(f);
        }
        function g(v, f) {
          var w = { id: f.pointerId, type: m(f) }, x = { originalEvent: f, eventType: "pointercancel", pointerType: w.type, isEmulated: !1 };
          M(v, x), Re(v, x, w), x.stopPropagation && e.stopEvent(f);
        }
        function _(v, f) {
          return f.speed = 0, f.direction = 0, f.contactPos = f.currentPos, f.contactTime = f.currentTime, f.lastPos = f.currentPos, f.lastTime = f.currentTime, v.add(f);
        }
        function R(v, f, w) {
          var x, k = f.getById(w.id);
          return k ? (k.captured && (e.console.warn("stopTrackingPointer() called on captured pointer"), h(v, k)), (f.type === "mouse" || f.type === "pen") && f.contacts > 0 && f.removeContact(), x = f.removeById(w.id)) : x = f.getLength(), x;
        }
        function L(v, f) {
          switch (f.eventType) {
            case "pointermove":
              f.isStoppable = !0, f.isCancelable = !0, f.preventDefault = !1, f.preventGesture = !v.hasGestureHandlers, f.stopPropagation = !1;
              break;
            case "pointerover":
            case "pointerout":
            case "contextmenu":
            case "keydown":
            case "keyup":
            case "keypress":
              f.isStoppable = !0, f.isCancelable = !0, f.preventDefault = !1, f.preventGesture = !1, f.stopPropagation = !1;
              break;
            case "pointerdown":
              f.isStoppable = !0, f.isCancelable = !0, f.preventDefault = !1, f.preventGesture = !v.hasGestureHandlers, f.stopPropagation = !1;
              break;
            case "pointerup":
              f.isStoppable = !0, f.isCancelable = !0, f.preventDefault = !1, f.preventGesture = !v.hasGestureHandlers, f.stopPropagation = !1;
              break;
            case "wheel":
              f.isStoppable = !0, f.isCancelable = !0, f.preventDefault = !1, f.preventGesture = !v.hasScrollHandler, f.stopPropagation = !1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
              f.isStoppable = !0, f.isCancelable = !1, f.preventDefault = !1, f.preventGesture = !1, f.stopPropagation = !1;
              break;
            case "click":
              f.isStoppable = !0, f.isCancelable = !0, f.preventDefault = !!v.clickHandler, f.preventGesture = !1, f.stopPropagation = !1;
              break;
            case "dblclick":
              f.isStoppable = !0, f.isCancelable = !0, f.preventDefault = !!v.dblClickHandler, f.preventGesture = !1, f.stopPropagation = !1;
              break;
            case "focus":
            case "blur":
            case "pointerenter":
            case "pointerleave":
            default:
              f.isStoppable = !1, f.isCancelable = !1, f.preventDefault = !1, f.preventGesture = !1, f.stopPropagation = !1;
              break;
          }
        }
        function M(v, f) {
          f.eventSource = v, f.eventPhase = f.originalEvent && typeof f.originalEvent.eventPhase < "u" ? f.originalEvent.eventPhase : 0, f.defaultPrevented = e.eventIsCanceled(f.originalEvent), f.shouldCapture = !1, f.shouldReleaseCapture = !1, f.userData = v.userData, L(v, f), v.preProcessEventHandler && v.preProcessEventHandler(f);
        }
        function G(v, f, w) {
          var x = v.getActivePointersListByType(f.type), k = x.getById(f.id);
          k ? w && !k.captured ? (k.captured = !0, x.captureCount++) : !w && k.captured && (k.captured = !1, x.captureCount--, x.captureCount < 0 && (x.captureCount = 0, e.console.warn("updatePointerCaptured() - pointsList.captureCount went negative"))) : e.console.warn("updatePointerCaptured() called on untracked pointer");
        }
        function U(v, f, w) {
          var x = v.getActivePointersListByType(w.type), k;
          k = x.getById(w.id), k ? (k.insideElement = !0, k.lastPos = k.currentPos, k.lastTime = k.currentTime, k.currentPos = w.currentPos, k.currentTime = w.currentTime, w = k) : (w.captured = !1, w.insideElementPressed = !1, w.insideElement = !0, _(x, w)), v.enterHandler && v.enterHandler({ eventSource: v, pointerType: w.type, position: A(w.currentPos, v.element), buttons: x.buttons, pointers: v.getActivePointerCount(), insideElementPressed: w.insideElementPressed, buttonDownAny: x.buttons !== 0, isTouchEvent: w.type === "touch", originalEvent: f.originalEvent, userData: v.userData });
        }
        function ce(v, f, w) {
          var x = v.getActivePointersListByType(w.type), k, N;
          k = x.getById(w.id), k ? (k.captured ? (k.insideElement = !1, k.lastPos = k.currentPos, k.lastTime = k.currentTime, k.currentPos = w.currentPos, k.currentTime = w.currentTime) : R(v, x, k), w = k) : (w.captured = !1, w.insideElementPressed = !1), (v.leaveHandler || v.exitHandler) && (N = { eventSource: v, pointerType: w.type, position: w.currentPos && A(w.currentPos, v.element), buttons: x.buttons, pointers: v.getActivePointerCount(), insideElementPressed: w.insideElementPressed, buttonDownAny: x.buttons !== 0, isTouchEvent: w.type === "touch", originalEvent: f.originalEvent, userData: v.userData }, v.leaveHandler && v.leaveHandler(N), v.exitHandler && v.exitHandler(N));
        }
        function ge(v, f, w) {
          var x, k;
          x = v.getActivePointersListByType(w.type), k = x.getById(w.id), k ? w = k : (w.captured = !1, w.insideElementPressed = !1), v.overHandler && v.overHandler({ eventSource: v, pointerType: w.type, position: A(w.currentPos, v.element), buttons: x.buttons, pointers: v.getActivePointerCount(), insideElementPressed: w.insideElementPressed, buttonDownAny: x.buttons !== 0, isTouchEvent: w.type === "touch", originalEvent: f.originalEvent, userData: v.userData });
        }
        function ae(v, f, w) {
          var x, k;
          x = v.getActivePointersListByType(w.type), k = x.getById(w.id), k ? w = k : (w.captured = !1, w.insideElementPressed = !1), v.outHandler && v.outHandler({ eventSource: v, pointerType: w.type, position: w.currentPos && A(w.currentPos, v.element), buttons: x.buttons, pointers: v.getActivePointerCount(), insideElementPressed: w.insideElementPressed, buttonDownAny: x.buttons !== 0, isTouchEvent: w.type === "touch", originalEvent: f.originalEvent, userData: v.userData });
        }
        function ee(v, f, w, x) {
          var k = n[v.hash], N = v.getActivePointersListByType(w.type), X;
          if (typeof f.originalEvent.buttons < "u" ? N.buttons = f.originalEvent.buttons : x === 0 ? N.buttons |= 1 : x === 1 ? N.buttons |= 4 : x === 2 ? N.buttons |= 2 : x === 3 ? N.buttons |= 8 : x === 4 ? N.buttons |= 16 : x === 5 && (N.buttons |= 32), x !== 0) {
            f.shouldCapture = !1, f.shouldReleaseCapture = !1, v.nonPrimaryPressHandler && !f.preventGesture && !f.defaultPrevented && (f.preventDefault = !0, v.nonPrimaryPressHandler({ eventSource: v, pointerType: w.type, position: A(w.currentPos, v.element), button: x, buttons: N.buttons, isTouchEvent: w.type === "touch", originalEvent: f.originalEvent, userData: v.userData }));
            return;
          }
          if (X = N.getById(w.id), X)
            X.insideElementPressed = !0, X.insideElement = !0, X.originalTarget = f.originalEvent.target, X.contactPos = w.currentPos, X.contactTime = w.currentTime, X.lastPos = X.currentPos, X.lastTime = X.currentTime, X.currentPos = w.currentPos, X.currentTime = w.currentTime, w = X;
          else {
            e.console.warn("pointerdown event on untracked pointer"), w.captured = !1, w.insideElementPressed = !0, w.insideElement = !0, w.originalTarget = f.originalEvent.target, _(N, w);
            return;
          }
          N.addContact(), !f.preventGesture && !f.defaultPrevented ? (f.shouldCapture = !0, f.shouldReleaseCapture = !1, f.preventDefault = !0, (v.dragHandler || v.dragEndHandler || v.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.addPoint(v, w), N.contacts === 1 ? v.pressHandler && !f.preventGesture && v.pressHandler({ eventSource: v, pointerType: w.type, position: A(w.contactPos, v.element), buttons: N.buttons, isTouchEvent: w.type === "touch", originalEvent: f.originalEvent, userData: v.userData }) : N.contacts === 2 && v.pinchHandler && w.type === "touch" && (k.pinchGPoints = N.asArray(), k.lastPinchDist = k.currentPinchDist = k.pinchGPoints[0].currentPos.distanceTo(k.pinchGPoints[1].currentPos), k.lastPinchCenter = k.currentPinchCenter = p(k.pinchGPoints[0].currentPos, k.pinchGPoints[1].currentPos))) : (f.shouldCapture = !1, f.shouldReleaseCapture = !1);
        }
        function ve(v, f, w, x) {
          var k = n[v.hash], N = v.getActivePointersListByType(w.type), X, de, Y, Ge = !1, Ce;
          if (typeof f.originalEvent.buttons < "u" ? N.buttons = f.originalEvent.buttons : x === 0 ? N.buttons ^= -2 : x === 1 ? N.buttons ^= -5 : x === 2 ? N.buttons ^= -3 : x === 3 ? N.buttons ^= -9 : x === 4 ? N.buttons ^= -17 : x === 5 && (N.buttons ^= -33), f.shouldCapture = !1, x !== 0) {
            f.shouldReleaseCapture = !1, v.nonPrimaryReleaseHandler && !f.preventGesture && !f.defaultPrevented && (f.preventDefault = !0, v.nonPrimaryReleaseHandler({ eventSource: v, pointerType: w.type, position: A(w.currentPos, v.element), button: x, buttons: N.buttons, isTouchEvent: w.type === "touch", originalEvent: f.originalEvent, userData: v.userData }));
            return;
          }
          Y = N.getById(w.id), Y ? (N.removeContact(), Y.captured && (Ge = !0), Y.lastPos = Y.currentPos, Y.lastTime = Y.currentTime, Y.currentPos = w.currentPos, Y.currentTime = w.currentTime, Y.insideElement || R(v, N, Y), X = Y.currentPos, de = Y.currentTime) : (e.console.warn("updatePointerUp(): pointerup on untracked gPoint"), w.captured = !1, w.insideElementPressed = !1, w.insideElement = !0, _(N, w), Y = w), !f.preventGesture && !f.defaultPrevented && (Ge ? (f.shouldReleaseCapture = !0, f.preventDefault = !0, (v.dragHandler || v.dragEndHandler || v.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.removePoint(v, Y), N.contacts === 0 ? (v.releaseHandler && v.releaseHandler({ eventSource: v, pointerType: Y.type, position: A(X, v.element), buttons: N.buttons, insideElementPressed: Y.insideElementPressed, insideElementReleased: Y.insideElement, isTouchEvent: Y.type === "touch", originalEvent: f.originalEvent, userData: v.userData }), v.dragEndHandler && k.sentDragEvent && v.dragEndHandler({ eventSource: v, pointerType: Y.type, position: A(Y.currentPos, v.element), speed: Y.speed, direction: Y.direction, shift: f.originalEvent.shiftKey, isTouchEvent: Y.type === "touch", originalEvent: f.originalEvent, userData: v.userData }), k.sentDragEvent = !1, (v.clickHandler || v.dblClickHandler) && Y.insideElement && (Ce = de - Y.contactTime <= v.clickTimeThreshold && Y.contactPos.distanceTo(X) <= v.clickDistThreshold, v.clickHandler && v.clickHandler({ eventSource: v, pointerType: Y.type, position: A(Y.currentPos, v.element), quick: Ce, shift: f.originalEvent.shiftKey, isTouchEvent: Y.type === "touch", originalEvent: f.originalEvent, originalTarget: Y.originalTarget, userData: v.userData }), v.dblClickHandler && Ce && (N.clicks++, N.clicks === 1 ? (k.lastClickPos = X, k.dblClickTimeOut = setTimeout(function() {
            N.clicks = 0;
          }, v.dblClickTimeThreshold)) : N.clicks === 2 && (clearTimeout(k.dblClickTimeOut), N.clicks = 0, k.lastClickPos.distanceTo(X) <= v.dblClickDistThreshold && v.dblClickHandler({ eventSource: v, pointerType: Y.type, position: A(Y.currentPos, v.element), shift: f.originalEvent.shiftKey, isTouchEvent: Y.type === "touch", originalEvent: f.originalEvent, userData: v.userData }), k.lastClickPos = null)))) : N.contacts === 2 && v.pinchHandler && Y.type === "touch" && (k.pinchGPoints = N.asArray(), k.lastPinchDist = k.currentPinchDist = k.pinchGPoints[0].currentPos.distanceTo(k.pinchGPoints[1].currentPos), k.lastPinchCenter = k.currentPinchCenter = p(k.pinchGPoints[0].currentPos, k.pinchGPoints[1].currentPos))) : (f.shouldReleaseCapture = !1, v.releaseHandler && (v.releaseHandler({ eventSource: v, pointerType: Y.type, position: A(X, v.element), buttons: N.buttons, insideElementPressed: Y.insideElementPressed, insideElementReleased: Y.insideElement, isTouchEvent: Y.type === "touch", originalEvent: f.originalEvent, userData: v.userData }), f.preventDefault = !0)));
        }
        function re(v, f, w) {
          var x = n[v.hash], k = v.getActivePointersListByType(w.type), N, X, de;
          if (typeof f.originalEvent.buttons < "u" && (k.buttons = f.originalEvent.buttons), N = k.getById(w.id), N)
            N.lastPos = N.currentPos, N.lastTime = N.currentTime, N.currentPos = w.currentPos, N.currentTime = w.currentTime;
          else
            return;
          f.shouldCapture = !1, f.shouldReleaseCapture = !1, v.stopHandler && w.type === "mouse" && (clearTimeout(v.stopTimeOut), v.stopTimeOut = setTimeout(function() {
            Tt(v, f.originalEvent, w.type);
          }, v.stopDelay)), k.contacts === 0 ? v.moveHandler && v.moveHandler({ eventSource: v, pointerType: w.type, position: A(w.currentPos, v.element), buttons: k.buttons, isTouchEvent: w.type === "touch", originalEvent: f.originalEvent, userData: v.userData }) : k.contacts === 1 ? (v.moveHandler && (N = k.asArray()[0], v.moveHandler({ eventSource: v, pointerType: N.type, position: A(N.currentPos, v.element), buttons: k.buttons, isTouchEvent: N.type === "touch", originalEvent: f.originalEvent, userData: v.userData })), v.dragHandler && !f.preventGesture && !f.defaultPrevented && (N = k.asArray()[0], de = N.currentPos.minus(N.lastPos), v.dragHandler({ eventSource: v, pointerType: N.type, position: A(N.currentPos, v.element), buttons: k.buttons, delta: de, speed: N.speed, direction: N.direction, shift: f.originalEvent.shiftKey, isTouchEvent: N.type === "touch", originalEvent: f.originalEvent, userData: v.userData }), f.preventDefault = !0, x.sentDragEvent = !0)) : k.contacts === 2 && (v.moveHandler && (X = k.asArray(), v.moveHandler({ eventSource: v, pointerType: X[0].type, position: A(p(X[0].currentPos, X[1].currentPos), v.element), buttons: k.buttons, isTouchEvent: X[0].type === "touch", originalEvent: f.originalEvent, userData: v.userData })), v.pinchHandler && w.type === "touch" && !f.preventGesture && !f.defaultPrevented && (de = x.pinchGPoints[0].currentPos.distanceTo(x.pinchGPoints[1].currentPos), de !== x.currentPinchDist && (x.lastPinchDist = x.currentPinchDist, x.currentPinchDist = de, x.lastPinchCenter = x.currentPinchCenter, x.currentPinchCenter = p(x.pinchGPoints[0].currentPos, x.pinchGPoints[1].currentPos), v.pinchHandler({ eventSource: v, pointerType: "touch", gesturePoints: x.pinchGPoints, lastCenter: A(x.lastPinchCenter, v.element), center: A(x.currentPinchCenter, v.element), lastDistance: x.lastPinchDist, distance: x.currentPinchDist, shift: f.originalEvent.shiftKey, originalEvent: f.originalEvent, userData: v.userData }), f.preventDefault = !0)));
        }
        function Re(v, f, w) {
          var x = v.getActivePointersListByType(w.type), k;
          k = x.getById(w.id), k && R(v, x, k);
        }
        function Tt(v, f, w) {
          v.stopHandler && v.stopHandler({ eventSource: v, pointerType: w, position: b(f, v.element), buttons: v.getActivePointersListByType(w).buttons, isTouchEvent: w === "touch", originalEvent: f, userData: v.userData });
        }
      }(i), function(e) {
        e.ControlAnchor = { NONE: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, ABSOLUTE: 5 }, e.Control = function(n, r, o) {
          var s = n.parentNode;
          typeof r == "number" && (e.console.error("Passing an anchor directly into the OpenSeadragon.Control constructor is deprecated; please use an options object instead.  Support for this deprecated variant is scheduled for removal in December 2013"), r = { anchor: r }), r.attachToViewer = typeof r.attachToViewer > "u" ? !0 : r.attachToViewer, this.autoFade = typeof r.autoFade > "u" ? !0 : r.autoFade, this.element = n, this.anchor = r.anchor, this.container = o, this.anchor === e.ControlAnchor.ABSOLUTE ? (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.position = "absolute", this.wrapper.style.top = typeof r.top == "number" ? r.top + "px" : r.top, this.wrapper.style.left = typeof r.left == "number" ? r.left + "px" : r.left, this.wrapper.style.height = typeof r.height == "number" ? r.height + "px" : r.height, this.wrapper.style.width = typeof r.width == "number" ? r.width + "px" : r.width, this.wrapper.style.margin = "0px", this.wrapper.style.padding = "0px", this.element.style.position = "relative", this.element.style.top = "0px", this.element.style.left = "0px", this.element.style.height = "100%", this.element.style.width = "100%") : (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.display = "inline-block", this.anchor === e.ControlAnchor.NONE && (this.wrapper.style.width = this.wrapper.style.height = "100%")), this.wrapper.appendChild(this.element), r.attachToViewer ? this.anchor === e.ControlAnchor.TOP_RIGHT || this.anchor === e.ControlAnchor.BOTTOM_RIGHT ? this.container.insertBefore(this.wrapper, this.container.firstChild) : this.container.appendChild(this.wrapper) : s.appendChild(this.wrapper);
        }, e.Control.prototype = { destroy: function() {
          this.wrapper.removeChild(this.element), this.anchor !== e.ControlAnchor.NONE && this.container.removeChild(this.wrapper);
        }, isVisible: function() {
          return this.wrapper.style.display !== "none";
        }, setVisible: function(n) {
          this.wrapper.style.display = n ? this.anchor === e.ControlAnchor.ABSOLUTE ? "block" : "inline-block" : "none";
        }, setOpacity: function(n) {
          this.element[e.SIGNAL] && e.Browser.vendor === e.BROWSERS.IE ? e.setElementOpacity(this.element, n, !0) : e.setElementOpacity(this.wrapper, n, !0);
        } };
      }(i), function(e) {
        e.ControlDock = function(r) {
          var o = ["topleft", "topright", "bottomright", "bottomleft"], s, a;
          for (e.extend(!0, this, { id: "controldock-" + e.now() + "-" + Math.floor(Math.random() * 1e6), container: e.makeNeutralElement("div"), controls: [] }, r), this.container.onsubmit = function() {
            return !1;
          }, this.element && (this.element = e.getElement(this.element), this.element.appendChild(this.container), this.element.style.position = "relative", this.container.style.width = "100%", this.container.style.height = "100%"), a = 0; a < o.length; a++)
            s = o[a], this.controls[s] = e.makeNeutralElement("div"), this.controls[s].style.position = "absolute", s.match("left") && (this.controls[s].style.left = "0px"), s.match("right") && (this.controls[s].style.right = "0px"), s.match("top") && (this.controls[s].style.top = "0px"), s.match("bottom") && (this.controls[s].style.bottom = "0px");
          this.container.appendChild(this.controls.topleft), this.container.appendChild(this.controls.topright), this.container.appendChild(this.controls.bottomright), this.container.appendChild(this.controls.bottomleft);
        }, e.ControlDock.prototype = { addControl: function(r, o) {
          r = e.getElement(r);
          var s = null;
          if (!(n(this, r) >= 0)) {
            switch (o.anchor) {
              case e.ControlAnchor.TOP_RIGHT:
                s = this.controls.topright, r.style.position = "relative", r.style.paddingRight = "0px", r.style.paddingTop = "0px";
                break;
              case e.ControlAnchor.BOTTOM_RIGHT:
                s = this.controls.bottomright, r.style.position = "relative", r.style.paddingRight = "0px", r.style.paddingBottom = "0px";
                break;
              case e.ControlAnchor.BOTTOM_LEFT:
                s = this.controls.bottomleft, r.style.position = "relative", r.style.paddingLeft = "0px", r.style.paddingBottom = "0px";
                break;
              case e.ControlAnchor.TOP_LEFT:
                s = this.controls.topleft, r.style.position = "relative", r.style.paddingLeft = "0px", r.style.paddingTop = "0px";
                break;
              case e.ControlAnchor.ABSOLUTE:
                s = this.container, r.style.margin = "0px", r.style.padding = "0px";
                break;
              default:
              case e.ControlAnchor.NONE:
                s = this.container, r.style.margin = "0px", r.style.padding = "0px";
                break;
            }
            this.controls.push(new e.Control(r, o, s)), r.style.display = "inline-block";
          }
        }, removeControl: function(r) {
          r = e.getElement(r);
          var o = n(this, r);
          return o >= 0 && (this.controls[o].destroy(), this.controls.splice(o, 1)), this;
        }, clearControls: function() {
          for (; this.controls.length > 0; )
            this.controls.pop().destroy();
          return this;
        }, areControlsEnabled: function() {
          var r;
          for (r = this.controls.length - 1; r >= 0; r--)
            if (this.controls[r].isVisible())
              return !0;
          return !1;
        }, setControlsEnabled: function(r) {
          var o;
          for (o = this.controls.length - 1; o >= 0; o--)
            this.controls[o].setVisible(r);
          return this;
        } };
        function n(r, o) {
          var s = r.controls, a;
          for (a = s.length - 1; a >= 0; a--)
            if (s[a].element === o)
              return a;
          return -1;
        }
      }(i), function(e) {
        e.Placement = e.freezeObject({ CENTER: 0, TOP_LEFT: 1, TOP: 2, TOP_RIGHT: 3, RIGHT: 4, BOTTOM_RIGHT: 5, BOTTOM: 6, BOTTOM_LEFT: 7, LEFT: 8, properties: { 0: { isLeft: !1, isHorizontallyCentered: !0, isRight: !1, isTop: !1, isVerticallyCentered: !0, isBottom: !1 }, 1: { isLeft: !0, isHorizontallyCentered: !1, isRight: !1, isTop: !0, isVerticallyCentered: !1, isBottom: !1 }, 2: { isLeft: !1, isHorizontallyCentered: !0, isRight: !1, isTop: !0, isVerticallyCentered: !1, isBottom: !1 }, 3: { isLeft: !1, isHorizontallyCentered: !1, isRight: !0, isTop: !0, isVerticallyCentered: !1, isBottom: !1 }, 4: { isLeft: !1, isHorizontallyCentered: !1, isRight: !0, isTop: !1, isVerticallyCentered: !0, isBottom: !1 }, 5: { isLeft: !1, isHorizontallyCentered: !1, isRight: !0, isTop: !1, isVerticallyCentered: !1, isBottom: !0 }, 6: { isLeft: !1, isHorizontallyCentered: !0, isRight: !1, isTop: !1, isVerticallyCentered: !1, isBottom: !0 }, 7: { isLeft: !0, isHorizontallyCentered: !1, isRight: !1, isTop: !1, isVerticallyCentered: !1, isBottom: !0 }, 8: { isLeft: !0, isHorizontallyCentered: !1, isRight: !1, isTop: !1, isVerticallyCentered: !0, isBottom: !1 } } });
      }(i), function(e) {
        var n = {}, r = 1;
        e.Viewer = function(g) {
          var _ = arguments, R = this, L;
          if (e.isPlainObject(g) || (g = { id: _[0], xmlPath: _.length > 1 ? _[1] : void 0, prefixUrl: _.length > 2 ? _[2] : void 0, controls: _.length > 3 ? _[3] : void 0, overlays: _.length > 4 ? _[4] : void 0 }), g.config && (e.extend(!0, g, g.config), delete g.config), e.extend(!0, this, { id: g.id, hash: g.hash || r++, initialPage: 0, element: null, container: null, canvas: null, overlays: [], overlaysContainer: null, previousBody: [], customControls: [], source: null, drawer: null, world: null, viewport: null, navigator: null, collectionViewport: null, collectionDrawer: null, navImages: null, buttons: null, profiler: null }, e.DEFAULT_SETTINGS, g), typeof this.hash > "u")
            throw new Error("A hash must be defined, either by specifying options.id or options.hash.");
          for (typeof n[this.hash] < "u" && e.console.warn("Hash " + this.hash + " has already been used."), n[this.hash] = { fsBoundsDelta: new e.Point(1, 1), prevContainerSize: null, animating: !1, forceRedraw: !1, mouseInside: !1, group: null, zooming: !1, zoomFactor: null, lastZoomTime: null, fullPage: !1, onfullscreenchange: null }, this._sequenceIndex = 0, this._firstOpen = !0, this._updateRequestId = null, this._loadQueue = [], this.currentOverlays = [], this._updatePixelDensityRatioBind = null, this._lastScrollTime = e.now(), e.EventSource.call(this), this.addHandler("open-failed", function(M) {
            var G = e.getString("Errors.OpenFailed", M.eventSource, M.message);
            R._showMessage(G);
          }), e.ControlDock.call(this, g), this.xmlPath && (this.tileSources = [this.xmlPath]), this.element = this.element || document.getElementById(this.id), this.canvas = e.makeNeutralElement("div"), this.canvas.className = "openseadragon-canvas", function(M) {
            M.width = "100%", M.height = "100%", M.overflow = "hidden", M.position = "absolute", M.top = "0px", M.left = "0px";
          }(this.canvas.style), e.setElementTouchActionNone(this.canvas), g.tabIndex !== "" && (this.canvas.tabIndex = g.tabIndex === void 0 ? 0 : g.tabIndex), this.container.className = "openseadragon-container", function(M) {
            M.width = "100%", M.height = "100%", M.position = "relative", M.overflow = "hidden", M.left = "0px", M.top = "0px", M.textAlign = "left";
          }(this.container.style), e.setElementTouchActionNone(this.container), this.container.insertBefore(this.canvas, this.container.firstChild), this.element.appendChild(this.container), this.bodyWidth = document.body.style.width, this.bodyHeight = document.body.style.height, this.bodyOverflow = document.body.style.overflow, this.docOverflow = document.documentElement.style.overflow, this.innerTracker = new e.MouseTracker({ userData: "Viewer.innerTracker", element: this.canvas, startDisabled: !this.mouseNavEnabled, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, dblClickTimeThreshold: this.dblClickTimeThreshold, dblClickDistThreshold: this.dblClickDistThreshold, contextMenuHandler: e.delegate(this, b), keyDownHandler: e.delegate(this, A), keyHandler: e.delegate(this, p), clickHandler: e.delegate(this, E), dblClickHandler: e.delegate(this, T), dragHandler: e.delegate(this, C), dragEndHandler: e.delegate(this, O), enterHandler: e.delegate(this, D), leaveHandler: e.delegate(this, F), pressHandler: e.delegate(this, I), releaseHandler: e.delegate(this, H), nonPrimaryPressHandler: e.delegate(this, j), nonPrimaryReleaseHandler: e.delegate(this, z), scrollHandler: e.delegate(this, $), pinchHandler: e.delegate(this, q) }), this.outerTracker = new e.MouseTracker({ userData: "Viewer.outerTracker", element: this.container, startDisabled: !this.mouseNavEnabled, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, dblClickTimeThreshold: this.dblClickTimeThreshold, dblClickDistThreshold: this.dblClickDistThreshold, enterHandler: e.delegate(this, Q), leaveHandler: e.delegate(this, J) }), this.toolbar && (this.toolbar = new e.ControlDock({ element: this.toolbar })), this.bindStandardControls(), n[this.hash].prevContainerSize = o(this.container), this.world = new e.World({ viewer: this }), this.world.addHandler("add-item", function(M) {
            R.source = R.world.getItemAt(0).source, n[R.hash].forceRedraw = !0, R._updateRequestId || (R._updateRequestId = u(R, te));
          }), this.world.addHandler("remove-item", function(M) {
            R.world.getItemCount() ? R.source = R.world.getItemAt(0).source : R.source = null, n[R.hash].forceRedraw = !0;
          }), this.world.addHandler("metrics-change", function(M) {
            R.viewport && R.viewport._setContentBounds(R.world.getHomeBounds(), R.world.getContentFactor());
          }), this.world.addHandler("item-index-change", function(M) {
            R.source = R.world.getItemAt(0).source;
          }), this.viewport = new e.Viewport({ containerSize: n[this.hash].prevContainerSize, springStiffness: this.springStiffness, animationTime: this.animationTime, minZoomImageRatio: this.minZoomImageRatio, maxZoomPixelRatio: this.maxZoomPixelRatio, visibilityRatio: this.visibilityRatio, wrapHorizontal: this.wrapHorizontal, wrapVertical: this.wrapVertical, defaultZoomLevel: this.defaultZoomLevel, minZoomLevel: this.minZoomLevel, maxZoomLevel: this.maxZoomLevel, viewer: this, degrees: this.degrees, flipped: this.flipped, navigatorRotate: this.navigatorRotate, homeFillsViewer: this.homeFillsViewer, margins: this.viewportMargins }), this.viewport._setContentBounds(this.world.getHomeBounds(), this.world.getContentFactor()), this.imageLoader = new e.ImageLoader({ jobLimit: this.imageLoaderLimit, timeout: g.timeout }), this.tileCache = new e.TileCache({ maxImageCacheCount: this.maxImageCacheCount }), this.drawer = new e.Drawer({ viewer: this, viewport: this.viewport, element: this.canvas, debugGridColor: this.debugGridColor }), this.overlaysContainer = e.makeNeutralElement("div"), this.canvas.appendChild(this.overlaysContainer), this.drawer.canRotate() || (this.rotateLeft && (L = this.buttonGroup.buttons.indexOf(this.rotateLeft), this.buttonGroup.buttons.splice(L, 1), this.buttonGroup.element.removeChild(this.rotateLeft.element)), this.rotateRight && (L = this.buttonGroup.buttons.indexOf(this.rotateRight), this.buttonGroup.buttons.splice(L, 1), this.buttonGroup.element.removeChild(this.rotateRight.element))), this._addUpdatePixelDensityRatioEvent(), this.showNavigator && (this.navigator = new e.Navigator({ id: this.navigatorId, position: this.navigatorPosition, sizeRatio: this.navigatorSizeRatio, maintainSizeRatio: this.navigatorMaintainSizeRatio, top: this.navigatorTop, left: this.navigatorLeft, width: this.navigatorWidth, height: this.navigatorHeight, autoResize: this.navigatorAutoResize, autoFade: this.navigatorAutoFade, prefixUrl: this.prefixUrl, viewer: this, navigatorRotate: this.navigatorRotate, background: this.navigatorBackground, opacity: this.navigatorOpacity, borderColor: this.navigatorBorderColor, displayRegionColor: this.navigatorDisplayRegionColor, crossOriginPolicy: this.crossOriginPolicy })), this.sequenceMode && this.bindSequenceControls(), this.tileSources && this.open(this.tileSources), L = 0; L < this.customControls.length; L++)
            this.addControl(this.customControls[L].id, { anchor: this.customControls[L].anchor });
          e.requestAnimationFrame(function() {
            h(R);
          }), this.imageSmoothingEnabled !== void 0 && !this.imageSmoothingEnabled && this.drawer.setImageSmoothingEnabled(this.imageSmoothingEnabled), e._viewers.set(this.element, this);
        }, e.extend(e.Viewer.prototype, e.EventSource.prototype, e.ControlDock.prototype, { isOpen: function() {
          return !!this.world.getItemCount();
        }, openDzi: function(g) {
          return e.console.error("[Viewer.openDzi] this function is deprecated; use Viewer.open() instead."), this.open(g);
        }, openTileSource: function(g) {
          return e.console.error("[Viewer.openTileSource] this function is deprecated; use Viewer.open() instead."), this.open(g);
        }, open: function(g, _) {
          var R = this;
          if (this.close(), !g)
            return this;
          if (this.sequenceMode && e.isArray(g))
            return this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), typeof _ < "u" && !isNaN(_) && (this.initialPage = _), this.tileSources = g, this._sequenceIndex = Math.max(0, Math.min(this.tileSources.length - 1, this.initialPage)), this.tileSources.length && (this.open(this.tileSources[this._sequenceIndex]), this.showReferenceStrip && this.addReferenceStrip()), this._updateSequenceButtons(this._sequenceIndex), this;
          if (e.isArray(g) || (g = [g]), !g.length)
            return this;
          this._opening = !0;
          for (var L = g.length, M = 0, G = 0, U, ce = function() {
            if (M + G === L)
              if (M) {
                (R._firstOpen || !R.preserveViewport) && (R.viewport.goHome(!0), R.viewport.update()), R._firstOpen = !1;
                var ee = g[0];
                if (ee.tileSource && (ee = ee.tileSource), R.overlays && !R.preserveOverlays)
                  for (var ve = 0; ve < R.overlays.length; ve++)
                    R.currentOverlays[ve] = a(R, R.overlays[ve]);
                R._drawOverlays(), R._opening = !1, R.raiseEvent("open", { source: ee });
              } else
                R._opening = !1, R.raiseEvent("open-failed", U);
          }, ge = function(ee) {
            (!e.isPlainObject(ee) || !ee.tileSource) && (ee = { tileSource: ee }), ee.index !== void 0 && (e.console.error("[Viewer.open] setting indexes here is not supported; use addTiledImage instead"), delete ee.index), ee.collectionImmediately === void 0 && (ee.collectionImmediately = !0);
            var ve = ee.success;
            ee.success = function(Re) {
              if (M++, ee.tileSource.overlays)
                for (var Tt = 0; Tt < ee.tileSource.overlays.length; Tt++)
                  R.addOverlay(ee.tileSource.overlays[Tt]);
              ve && ve(Re), ce();
            };
            var re = ee.error;
            ee.error = function(Re) {
              G++, U || (U = Re), re && re(Re), ce();
            }, R.addTiledImage(ee);
          }, ae = 0; ae < g.length; ae++)
            ge(g[ae]);
          return this;
        }, close: function() {
          return n[this.hash] ? (this._opening = !1, this.navigator && this.navigator.close(), this.preserveOverlays || (this.clearOverlays(), this.overlaysContainer.innerHTML = ""), n[this.hash].animating = !1, this.world.removeAll(), this.imageLoader.clear(), this.raiseEvent("close"), this) : this;
        }, destroy: function() {
          if (n[this.hash]) {
            if (this._removeUpdatePixelDensityRatioEvent(), this.close(), this.clearOverlays(), this.overlaysContainer.innerHTML = "", this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), this._updateRequestId !== null && (e.cancelAnimationFrame(this._updateRequestId), this._updateRequestId = null), this.drawer && this.drawer.destroy(), this.navigator && (this.navigator.destroy(), n[this.navigator.hash] = null, delete n[this.navigator.hash], this.navigator = null), this.removeAllHandlers(), this.buttonGroup)
              this.buttonGroup.destroy();
            else if (this.customButtons)
              for (; this.customButtons.length; )
                this.customButtons.pop().destroy();
            if (this.paging && this.paging.destroy(), this.element)
              for (; this.element.firstChild; )
                this.element.removeChild(this.element.firstChild);
            this.container.onsubmit = null, this.clearControls(), this.innerTracker && this.innerTracker.destroy(), this.outerTracker && this.outerTracker.destroy(), n[this.hash] = null, delete n[this.hash], this.canvas = null, this.container = null, e._viewers.delete(this.element), this.element = null;
          }
        }, isMouseNavEnabled: function() {
          return this.innerTracker.isTracking();
        }, setMouseNavEnabled: function(g) {
          return this.innerTracker.setTracking(g), this.outerTracker.setTracking(g), this.raiseEvent("mouse-enabled", { enabled: g }), this;
        }, areControlsEnabled: function() {
          var g = this.controls.length, _;
          for (_ = 0; _ < this.controls.length; _++)
            g = g && this.controls[_].isVisible();
          return g;
        }, setControlsEnabled: function(g) {
          return g ? m(this) : h(this), this.raiseEvent("controls-enabled", { enabled: g }), this;
        }, setDebugMode: function(g) {
          for (var _ = 0; _ < this.world.getItemCount(); _++)
            this.world.getItemAt(_).debugMode = g;
          this.debugMode = g, this.forceRedraw();
        }, isFullPage: function() {
          return n[this.hash].fullPage;
        }, setFullPage: function(g) {
          var _ = document.body, R = _.style, L = document.documentElement.style, M = this, G, U;
          if (g === this.isFullPage())
            return this;
          var ce = { fullPage: g, preventDefaultAction: !1 };
          if (this.raiseEvent("pre-full-page", ce), ce.preventDefaultAction)
            return this;
          if (g) {
            for (this.elementSize = e.getElementSize(this.element), this.pageScroll = e.getPageScroll(), this.elementMargin = this.element.style.margin, this.element.style.margin = "0", this.elementPadding = this.element.style.padding, this.element.style.padding = "0", this.bodyMargin = R.margin, this.docMargin = L.margin, R.margin = "0", L.margin = "0", this.bodyPadding = R.padding, this.docPadding = L.padding, R.padding = "0", L.padding = "0", this.bodyWidth = R.width, this.docWidth = L.width, R.width = "100%", L.width = "100%", this.bodyHeight = R.height, this.docHeight = L.height, R.height = "100%", L.height = "100%", this.bodyDisplay = R.display, R.display = "block", this.previousBody = [], n[this.hash].prevElementParent = this.element.parentNode, n[this.hash].prevNextSibling = this.element.nextSibling, n[this.hash].prevElementWidth = this.element.style.width, n[this.hash].prevElementHeight = this.element.style.height, G = _.childNodes.length, U = 0; U < G; U++)
              this.previousBody.push(_.childNodes[0]), _.removeChild(_.childNodes[0]);
            this.toolbar && this.toolbar.element && (this.toolbar.parentNode = this.toolbar.element.parentNode, this.toolbar.nextSibling = this.toolbar.element.nextSibling, _.appendChild(this.toolbar.element), e.addClass(this.toolbar.element, "fullpage")), e.addClass(this.element, "fullpage"), _.appendChild(this.element), this.element.style.height = e.getWindowSize().y + "px", this.element.style.width = e.getWindowSize().x + "px", this.toolbar && this.toolbar.element && (this.element.style.height = e.getElementSize(this.element).y - e.getElementSize(this.toolbar.element).y + "px"), n[this.hash].fullPage = !0, e.delegate(this, Q)({});
          } else {
            for (this.element.style.margin = this.elementMargin, this.element.style.padding = this.elementPadding, R.margin = this.bodyMargin, L.margin = this.docMargin, R.padding = this.bodyPadding, L.padding = this.docPadding, R.width = this.bodyWidth, L.width = this.docWidth, R.height = this.bodyHeight, L.height = this.docHeight, R.display = this.bodyDisplay, _.removeChild(this.element), G = this.previousBody.length, U = 0; U < G; U++)
              _.appendChild(this.previousBody.shift());
            e.removeClass(this.element, "fullpage"), n[this.hash].prevElementParent.insertBefore(this.element, n[this.hash].prevNextSibling), this.toolbar && this.toolbar.element && (_.removeChild(this.toolbar.element), e.removeClass(this.toolbar.element, "fullpage"), this.toolbar.parentNode.insertBefore(this.toolbar.element, this.toolbar.nextSibling), delete this.toolbar.parentNode, delete this.toolbar.nextSibling), this.element.style.width = n[this.hash].prevElementWidth, this.element.style.height = n[this.hash].prevElementHeight;
            var ge = 0, ae = function() {
              e.setPageScroll(M.pageScroll);
              var ee = e.getPageScroll();
              ge++, ge < 10 && (ee.x !== M.pageScroll.x || ee.y !== M.pageScroll.y) && e.requestAnimationFrame(ae);
            };
            e.requestAnimationFrame(ae), n[this.hash].fullPage = !1, e.delegate(this, J)({});
          }
          return this.navigator && this.viewport && this.navigator.update(this.viewport), this.raiseEvent("full-page", { fullPage: g }), this;
        }, setFullScreen: function(g) {
          var _ = this;
          if (!e.supportsFullScreen)
            return this.setFullPage(g);
          if (e.isFullScreen() === g)
            return this;
          var R = { fullScreen: g, preventDefaultAction: !1 };
          if (this.raiseEvent("pre-full-screen", R), R.preventDefaultAction)
            return this;
          if (g) {
            if (this.setFullPage(!0), !this.isFullPage())
              return this;
            this.fullPageStyleWidth = this.element.style.width, this.fullPageStyleHeight = this.element.style.height, this.element.style.width = "100%", this.element.style.height = "100%";
            var L = function() {
              var M = e.isFullScreen();
              M || (e.removeEvent(document, e.fullScreenEventName, L), e.removeEvent(document, e.fullScreenErrorEventName, L), _.setFullPage(!1), _.isFullPage() && (_.element.style.width = _.fullPageStyleWidth, _.element.style.height = _.fullPageStyleHeight)), _.navigator && _.viewport && setTimeout(function() {
                _.navigator.update(_.viewport);
              }), _.raiseEvent("full-screen", { fullScreen: M });
            };
            e.addEvent(document, e.fullScreenEventName, L), e.addEvent(document, e.fullScreenErrorEventName, L), e.requestFullScreen(document.body);
          } else
            e.exitFullScreen();
          return this;
        }, isVisible: function() {
          return this.container.style.visibility !== "hidden";
        }, setVisible: function(g) {
          return this.container.style.visibility = g ? "" : "hidden", this.raiseEvent("visible", { visible: g }), this;
        }, addTiledImage: function(g) {
          e.console.assert(g, "[Viewer.addTiledImage] options is required"), e.console.assert(g.tileSource, "[Viewer.addTiledImage] options.tileSource is required"), e.console.assert(!g.replace || g.index > -1 && g.index < this.world.getItemCount(), "[Viewer.addTiledImage] if options.replace is used, options.index must be a valid index in Viewer.world");
          var _ = this;
          g.replace && (g.replaceItem = _.world.getItemAt(g.index)), this._hideMessage(), g.placeholderFillStyle === void 0 && (g.placeholderFillStyle = this.placeholderFillStyle), g.opacity === void 0 && (g.opacity = this.opacity), g.preload === void 0 && (g.preload = this.preload), g.compositeOperation === void 0 && (g.compositeOperation = this.compositeOperation), g.crossOriginPolicy === void 0 && (g.crossOriginPolicy = g.tileSource.crossOriginPolicy !== void 0 ? g.tileSource.crossOriginPolicy : this.crossOriginPolicy), g.ajaxWithCredentials === void 0 && (g.ajaxWithCredentials = this.ajaxWithCredentials), g.loadTilesWithAjax === void 0 && (g.loadTilesWithAjax = this.loadTilesWithAjax), g.ajaxHeaders === void 0 || g.ajaxHeaders === null ? g.ajaxHeaders = this.ajaxHeaders : e.isPlainObject(g.ajaxHeaders) && e.isPlainObject(this.ajaxHeaders) && (g.ajaxHeaders = e.extend({}, this.ajaxHeaders, g.ajaxHeaders));
          var R = { options: g };
          function L(U) {
            for (var ce = 0; ce < _._loadQueue.length; ce++)
              if (_._loadQueue[ce] === R) {
                _._loadQueue.splice(ce, 1);
                break;
              }
            _._loadQueue.length === 0 && M(R), _.raiseEvent("add-item-failed", U), g.error && g.error(U);
          }
          function M(U) {
            _.collectionMode && (_.world.arrange({ immediately: U.options.collectionImmediately, rows: _.collectionRows, columns: _.collectionColumns, layout: _.collectionLayout, tileSize: _.collectionTileSize, tileMargin: _.collectionTileMargin }), _.world.setAutoRefigureSizes(!0));
          }
          if (e.isArray(g.tileSource)) {
            setTimeout(function() {
              L({ message: "[Viewer.addTiledImage] Sequences can not be added; add them one at a time instead.", source: g.tileSource, options: g });
            });
            return;
          }
          this._loadQueue.push(R);
          function G() {
            for (var U, ce, ge; _._loadQueue.length && (U = _._loadQueue[0], !!U.tileSource); ) {
              if (_._loadQueue.splice(0, 1), U.options.replace) {
                var ae = _.world.getIndexOfItem(U.options.replaceItem);
                ae !== -1 && (U.options.index = ae), _.world.removeItem(U.options.replaceItem);
              }
              ce = new e.TiledImage({ viewer: _, source: U.tileSource, viewport: _.viewport, drawer: _.drawer, tileCache: _.tileCache, imageLoader: _.imageLoader, x: U.options.x, y: U.options.y, width: U.options.width, height: U.options.height, fitBounds: U.options.fitBounds, fitBoundsPlacement: U.options.fitBoundsPlacement, clip: U.options.clip, placeholderFillStyle: U.options.placeholderFillStyle, opacity: U.options.opacity, preload: U.options.preload, degrees: U.options.degrees, flipped: U.options.flipped, compositeOperation: U.options.compositeOperation, springStiffness: _.springStiffness, animationTime: _.animationTime, minZoomImageRatio: _.minZoomImageRatio, wrapHorizontal: _.wrapHorizontal, wrapVertical: _.wrapVertical, immediateRender: _.immediateRender, blendTime: _.blendTime, alwaysBlend: _.alwaysBlend, minPixelRatio: _.minPixelRatio, smoothTileEdgesMinZoom: _.smoothTileEdgesMinZoom, iOSDevice: _.iOSDevice, crossOriginPolicy: U.options.crossOriginPolicy, ajaxWithCredentials: U.options.ajaxWithCredentials, loadTilesWithAjax: U.options.loadTilesWithAjax, ajaxHeaders: U.options.ajaxHeaders, debugMode: _.debugMode }), _.collectionMode && _.world.setAutoRefigureSizes(!1), _.navigator && (ge = e.extend({}, U.options, { replace: !1, originalTiledImage: ce, tileSource: U.tileSource }), _.navigator.addTiledImage(ge)), _.world.addItem(ce, { index: U.options.index }), _._loadQueue.length === 0 && M(U), _.world.getItemCount() === 1 && !_.preserveViewport && _.viewport.goHome(!0), U.options.success && U.options.success({ item: ce });
            }
          }
          s(this, g.tileSource, g, function(U) {
            R.tileSource = U, G();
          }, function(U) {
            U.options = g, L(U), G();
          });
        }, addSimpleImage: function(g) {
          e.console.assert(g, "[Viewer.addSimpleImage] options is required"), e.console.assert(g.url, "[Viewer.addSimpleImage] options.url is required");
          var _ = e.extend({}, g, { tileSource: { type: "image", url: g.url } });
          delete _.url, this.addTiledImage(_);
        }, addLayer: function(g) {
          var _ = this;
          e.console.error("[Viewer.addLayer] this function is deprecated; use Viewer.addTiledImage() instead.");
          var R = e.extend({}, g, { success: function(L) {
            _.raiseEvent("add-layer", { options: g, drawer: L.item });
          }, error: function(L) {
            _.raiseEvent("add-layer-failed", L);
          } });
          return this.addTiledImage(R), this;
        }, getLayerAtLevel: function(g) {
          return e.console.error("[Viewer.getLayerAtLevel] this function is deprecated; use World.getItemAt() instead."), this.world.getItemAt(g);
        }, getLevelOfLayer: function(g) {
          return e.console.error("[Viewer.getLevelOfLayer] this function is deprecated; use World.getIndexOfItem() instead."), this.world.getIndexOfItem(g);
        }, getLayersCount: function() {
          return e.console.error("[Viewer.getLayersCount] this function is deprecated; use World.getItemCount() instead."), this.world.getItemCount();
        }, setLayerLevel: function(g, _) {
          return e.console.error("[Viewer.setLayerLevel] this function is deprecated; use World.setItemIndex() instead."), this.world.setItemIndex(g, _);
        }, removeLayer: function(g) {
          return e.console.error("[Viewer.removeLayer] this function is deprecated; use World.removeItem() instead."), this.world.removeItem(g);
        }, forceRedraw: function() {
          return n[this.hash].forceRedraw = !0, this;
        }, bindSequenceControls: function() {
          var g = e.delegate(this, y), _ = e.delegate(this, S), R = e.delegate(this, this.goToNextPage), L = e.delegate(this, this.goToPreviousPage), M = this.navImages, G = !0;
          return this.showSequenceControl && ((this.previousButton || this.nextButton) && (G = !1), this.previousButton = new e.Button({ element: this.previousButton ? e.getElement(this.previousButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.PreviousPage"), srcRest: V(this.prefixUrl, M.previous.REST), srcGroup: V(this.prefixUrl, M.previous.GROUP), srcHover: V(this.prefixUrl, M.previous.HOVER), srcDown: V(this.prefixUrl, M.previous.DOWN), onRelease: L, onFocus: g, onBlur: _ }), this.nextButton = new e.Button({ element: this.nextButton ? e.getElement(this.nextButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.NextPage"), srcRest: V(this.prefixUrl, M.next.REST), srcGroup: V(this.prefixUrl, M.next.GROUP), srcHover: V(this.prefixUrl, M.next.HOVER), srcDown: V(this.prefixUrl, M.next.DOWN), onRelease: R, onFocus: g, onBlur: _ }), this.navPrevNextWrap || this.previousButton.disable(), (!this.tileSources || !this.tileSources.length) && this.nextButton.disable(), G && (this.paging = new e.ButtonGroup({ buttons: [this.previousButton, this.nextButton], clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold }), this.pagingControl = this.paging.element, this.toolbar ? this.toolbar.addControl(this.pagingControl, { anchor: e.ControlAnchor.BOTTOM_RIGHT }) : this.addControl(this.pagingControl, { anchor: this.sequenceControlAnchor || e.ControlAnchor.TOP_LEFT }))), this;
        }, bindStandardControls: function() {
          var g = e.delegate(this, se), _ = e.delegate(this, Ye), R = e.delegate(this, st), L = e.delegate(this, Et), M = e.delegate(this, $e), G = e.delegate(this, bn), U = e.delegate(this, Ut), ce = e.delegate(this, xn), ge = e.delegate(this, Sn), ae = e.delegate(this, _n), ee = e.delegate(this, y), ve = e.delegate(this, S), re = this.navImages, Re = [], Tt = !0;
          return this.showNavigationControl && ((this.zoomInButton || this.zoomOutButton || this.homeButton || this.fullPageButton || this.rotateLeftButton || this.rotateRightButton || this.flipButton) && (Tt = !1), this.showZoomControl && (Re.push(this.zoomInButton = new e.Button({ element: this.zoomInButton ? e.getElement(this.zoomInButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.ZoomIn"), srcRest: V(this.prefixUrl, re.zoomIn.REST), srcGroup: V(this.prefixUrl, re.zoomIn.GROUP), srcHover: V(this.prefixUrl, re.zoomIn.HOVER), srcDown: V(this.prefixUrl, re.zoomIn.DOWN), onPress: g, onRelease: _, onClick: R, onEnter: g, onExit: _, onFocus: ee, onBlur: ve })), Re.push(this.zoomOutButton = new e.Button({ element: this.zoomOutButton ? e.getElement(this.zoomOutButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.ZoomOut"), srcRest: V(this.prefixUrl, re.zoomOut.REST), srcGroup: V(this.prefixUrl, re.zoomOut.GROUP), srcHover: V(this.prefixUrl, re.zoomOut.HOVER), srcDown: V(this.prefixUrl, re.zoomOut.DOWN), onPress: L, onRelease: _, onClick: M, onEnter: L, onExit: _, onFocus: ee, onBlur: ve }))), this.showHomeControl && Re.push(this.homeButton = new e.Button({ element: this.homeButton ? e.getElement(this.homeButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.Home"), srcRest: V(this.prefixUrl, re.home.REST), srcGroup: V(this.prefixUrl, re.home.GROUP), srcHover: V(this.prefixUrl, re.home.HOVER), srcDown: V(this.prefixUrl, re.home.DOWN), onRelease: G, onFocus: ee, onBlur: ve })), this.showFullPageControl && Re.push(this.fullPageButton = new e.Button({ element: this.fullPageButton ? e.getElement(this.fullPageButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.FullPage"), srcRest: V(this.prefixUrl, re.fullpage.REST), srcGroup: V(this.prefixUrl, re.fullpage.GROUP), srcHover: V(this.prefixUrl, re.fullpage.HOVER), srcDown: V(this.prefixUrl, re.fullpage.DOWN), onRelease: U, onFocus: ee, onBlur: ve })), this.showRotationControl && (Re.push(this.rotateLeftButton = new e.Button({ element: this.rotateLeftButton ? e.getElement(this.rotateLeftButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.RotateLeft"), srcRest: V(this.prefixUrl, re.rotateleft.REST), srcGroup: V(this.prefixUrl, re.rotateleft.GROUP), srcHover: V(this.prefixUrl, re.rotateleft.HOVER), srcDown: V(this.prefixUrl, re.rotateleft.DOWN), onRelease: ce, onFocus: ee, onBlur: ve })), Re.push(this.rotateRightButton = new e.Button({ element: this.rotateRightButton ? e.getElement(this.rotateRightButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.RotateRight"), srcRest: V(this.prefixUrl, re.rotateright.REST), srcGroup: V(this.prefixUrl, re.rotateright.GROUP), srcHover: V(this.prefixUrl, re.rotateright.HOVER), srcDown: V(this.prefixUrl, re.rotateright.DOWN), onRelease: ge, onFocus: ee, onBlur: ve }))), this.showFlipControl && Re.push(this.flipButton = new e.Button({ element: this.flipButton ? e.getElement(this.flipButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.Flip"), srcRest: V(this.prefixUrl, re.flip.REST), srcGroup: V(this.prefixUrl, re.flip.GROUP), srcHover: V(this.prefixUrl, re.flip.HOVER), srcDown: V(this.prefixUrl, re.flip.DOWN), onRelease: ae, onFocus: ee, onBlur: ve })), Tt ? (this.buttonGroup = new e.ButtonGroup({ buttons: Re, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold }), this.navControl = this.buttonGroup.element, this.addHandler("open", e.delegate(this, wn)), this.toolbar ? this.toolbar.addControl(this.navControl, { anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT }) : this.addControl(this.navControl, { anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT })) : this.customButtons = Re), this;
        }, currentPage: function() {
          return this._sequenceIndex;
        }, goToPage: function(g) {
          return this.tileSources && g >= 0 && g < this.tileSources.length && (this._sequenceIndex = g, this._updateSequenceButtons(g), this.open(this.tileSources[g]), this.referenceStrip && this.referenceStrip.setFocus(g), this.raiseEvent("page", { page: g })), this;
        }, addOverlay: function(g, _, R, L) {
          var M;
          if (e.isPlainObject(g) ? M = g : M = { element: g, location: _, placement: R, onDraw: L }, g = e.getElement(M.element), l(this.currentOverlays, g) >= 0)
            return this;
          var G = a(this, M);
          return this.currentOverlays.push(G), G.drawHTML(this.overlaysContainer, this.viewport), this.raiseEvent("add-overlay", { element: g, location: M.location, placement: M.placement }), this;
        }, updateOverlay: function(g, _, R) {
          var L;
          return g = e.getElement(g), L = l(this.currentOverlays, g), L >= 0 && (this.currentOverlays[L].update(_, R), n[this.hash].forceRedraw = !0, this.raiseEvent("update-overlay", { element: g, location: _, placement: R })), this;
        }, removeOverlay: function(g) {
          var _;
          return g = e.getElement(g), _ = l(this.currentOverlays, g), _ >= 0 && (this.currentOverlays[_].destroy(), this.currentOverlays.splice(_, 1), n[this.hash].forceRedraw = !0, this.raiseEvent("remove-overlay", { element: g })), this;
        }, clearOverlays: function() {
          for (; this.currentOverlays.length > 0; )
            this.currentOverlays.pop().destroy();
          return n[this.hash].forceRedraw = !0, this.raiseEvent("clear-overlay", {}), this;
        }, getOverlayById: function(g) {
          var _;
          return g = e.getElement(g), _ = l(this.currentOverlays, g), _ >= 0 ? this.currentOverlays[_] : null;
        }, _updateSequenceButtons: function(g) {
          this.nextButton && (!this.tileSources || this.tileSources.length - 1 === g ? this.navPrevNextWrap || this.nextButton.disable() : this.nextButton.enable()), this.previousButton && (g > 0 ? this.previousButton.enable() : this.navPrevNextWrap || this.previousButton.disable());
        }, _showMessage: function(g) {
          this._hideMessage();
          var _ = e.makeNeutralElement("div");
          _.appendChild(document.createTextNode(g)), this.messageDiv = e.makeCenteredNode(_), e.addClass(this.messageDiv, "openseadragon-message"), this.container.appendChild(this.messageDiv);
        }, _hideMessage: function() {
          var g = this.messageDiv;
          g && (g.parentNode.removeChild(g), delete this.messageDiv);
        }, gestureSettingsByDeviceType: function(g) {
          switch (g) {
            case "mouse":
              return this.gestureSettingsMouse;
            case "touch":
              return this.gestureSettingsTouch;
            case "pen":
              return this.gestureSettingsPen;
            default:
              return this.gestureSettingsUnknown;
          }
        }, _drawOverlays: function() {
          var g, _ = this.currentOverlays.length;
          for (g = 0; g < _; g++)
            this.currentOverlays[g].drawHTML(this.overlaysContainer, this.viewport);
        }, _cancelPendingImages: function() {
          this._loadQueue = [];
        }, removeReferenceStrip: function() {
          this.showReferenceStrip = !1, this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null);
        }, addReferenceStrip: function() {
          if (this.showReferenceStrip = !0, this.sequenceMode) {
            if (this.referenceStrip)
              return;
            this.tileSources.length && this.tileSources.length > 1 && (this.referenceStrip = new e.ReferenceStrip({ id: this.referenceStripElement, position: this.referenceStripPosition, sizeRatio: this.referenceStripSizeRatio, scroll: this.referenceStripScroll, height: this.referenceStripHeight, width: this.referenceStripWidth, tileSources: this.tileSources, prefixUrl: this.prefixUrl, useCanvas: this.useCanvas, viewer: this }), this.referenceStrip.setFocus(this._sequenceIndex));
          } else
            e.console.warn('Attempting to display a reference strip while "sequenceMode" is off.');
        }, _addUpdatePixelDensityRatioEvent: function() {
          this._updatePixelDensityRatioBind = this._updatePixelDensityRatio.bind(this), e.addEvent(window, "resize", this._updatePixelDensityRatioBind);
        }, _removeUpdatePixelDensityRatioEvent: function() {
          e.removeEvent(window, "resize", this._updatePixelDensityRatioBind);
        }, _updatePixelDensityRatio: function() {
          var g = e.pixelDensityRatio, _ = e.getCurrentPixelDensityRatio();
          g !== _ && (e.pixelDensityRatio = _, this.world.resetItems(), this.forceRedraw());
        }, goToPreviousPage: function() {
          var g = this._sequenceIndex - 1;
          this.navPrevNextWrap && g < 0 && (g += this.tileSources.length), this.goToPage(g);
        }, goToNextPage: function() {
          var g = this._sequenceIndex + 1;
          this.navPrevNextWrap && g >= this.tileSources.length && (g = 0), this.goToPage(g);
        } });
        function o(g) {
          return g = e.getElement(g), new e.Point(g.clientWidth === 0 ? 1 : g.clientWidth, g.clientHeight === 0 ? 1 : g.clientHeight);
        }
        function s(g, _, R, L, M) {
          var G = g;
          if (e.type(_) === "string") {
            if (_.match(/^\s*<.*>\s*$/))
              _ = e.parseXml(_);
            else if (_.match(/^\s*[{[].*[}\]]\s*$/))
              try {
                var U = e.parseJSON(_);
                _ = U;
              } catch {
              }
          }
          function ce(ge, ae) {
            ge.ready ? L(ge) : (ge.addHandler("ready", function() {
              L(ge);
            }), ge.addHandler("open-failed", function(ee) {
              M({ message: ee.message, source: ae });
            }));
          }
          setTimeout(function() {
            if (e.type(_) === "string")
              _ = new e.TileSource({ url: _, crossOriginPolicy: R.crossOriginPolicy !== void 0 ? R.crossOriginPolicy : g.crossOriginPolicy, ajaxWithCredentials: g.ajaxWithCredentials, ajaxHeaders: R.ajaxHeaders ? R.ajaxHeaders : g.ajaxHeaders, useCanvas: g.useCanvas, success: function(ve) {
                L(ve.tileSource);
              } }), _.addHandler("open-failed", function(ve) {
                M(ve);
              });
            else if (e.isPlainObject(_) || _.nodeType)
              if (_.crossOriginPolicy === void 0 && (R.crossOriginPolicy !== void 0 || g.crossOriginPolicy !== void 0) && (_.crossOriginPolicy = R.crossOriginPolicy !== void 0 ? R.crossOriginPolicy : g.crossOriginPolicy), _.ajaxWithCredentials === void 0 && (_.ajaxWithCredentials = g.ajaxWithCredentials), _.useCanvas === void 0 && (_.useCanvas = g.useCanvas), e.isFunction(_.getTileUrl)) {
                var ge = new e.TileSource(_);
                ge.getTileUrl = _.getTileUrl, L(ge);
              } else {
                var ae = e.TileSource.determineType(G, _);
                if (!ae) {
                  M({ message: "Unable to load TileSource", source: _ });
                  return;
                }
                var ee = ae.prototype.configure.apply(G, [_]);
                ce(new ae(ee), _);
              }
            else
              ce(_, _);
          });
        }
        function a(g, _) {
          if (_ instanceof e.Overlay)
            return _;
          var R = null;
          if (_.element)
            R = e.getElement(_.element);
          else {
            var L = _.id ? _.id : "openseadragon-overlay-" + Math.floor(Math.random() * 1e7);
            R = e.getElement(_.id), R || (R = document.createElement("a"), R.href = "#/overlay/" + L), R.id = L, e.addClass(R, _.className ? _.className : "openseadragon-overlay");
          }
          var M = _.location, G = _.width, U = _.height;
          if (!M) {
            var ce = _.x, ge = _.y;
            if (_.px !== void 0) {
              var ae = g.viewport.imageToViewportRectangle(new e.Rect(_.px, _.py, G || 0, U || 0));
              ce = ae.x, ge = ae.y, G = G !== void 0 ? ae.width : void 0, U = U !== void 0 ? ae.height : void 0;
            }
            M = new e.Point(ce, ge);
          }
          var ee = _.placement;
          return ee && e.type(ee) === "string" && (ee = e.Placement[_.placement.toUpperCase()]), new e.Overlay({ element: R, location: M, placement: ee, onDraw: _.onDraw, checkResize: _.checkResize, width: G, height: U, rotationMode: _.rotationMode });
        }
        function l(g, _) {
          var R;
          for (R = g.length - 1; R >= 0; R--)
            if (g[R].element === _)
              return R;
          return -1;
        }
        function u(g, _) {
          return e.requestAnimationFrame(function() {
            _(g);
          });
        }
        function c(g) {
          e.requestAnimationFrame(function() {
            d(g);
          });
        }
        function h(g) {
          !g.autoHideControls || (g.controlsShouldFade = !0, g.controlsFadeBeginTime = e.now() + g.controlsFadeDelay, window.setTimeout(function() {
            c(g);
          }, g.controlsFadeDelay));
        }
        function d(g) {
          var _, R, L, M;
          if (g.controlsShouldFade) {
            for (_ = e.now(), R = _ - g.controlsFadeBeginTime, L = 1 - R / g.controlsFadeLength, L = Math.min(1, L), L = Math.max(0, L), M = g.controls.length - 1; M >= 0; M--)
              g.controls[M].autoFade && g.controls[M].setOpacity(L);
            L > 0 && c(g);
          }
        }
        function m(g) {
          var _;
          for (g.controlsShouldFade = !1, _ = g.controls.length - 1; _ >= 0; _--)
            g.controls[_].setOpacity(1);
        }
        function y() {
          m(this);
        }
        function S() {
          h(this);
        }
        function b(g) {
          var _ = { tracker: g.eventSource, position: g.position, originalEvent: g.originalEvent, preventDefault: g.preventDefault };
          this.raiseEvent("canvas-contextmenu", _), g.preventDefault = _.preventDefault;
        }
        function A(g) {
          var _ = { originalEvent: g.originalEvent, preventDefaultAction: !1, preventVerticalPan: g.preventVerticalPan, preventHorizontalPan: g.preventHorizontalPan };
          if (this.raiseEvent("canvas-key", _), !_.preventDefaultAction && !g.ctrl && !g.alt && !g.meta)
            switch (g.keyCode) {
              case 38:
                _.preventVerticalPan || (g.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -this.pixelsPerArrowPress))), this.viewport.applyConstraints()), g.preventDefault = !0;
                break;
              case 40:
                _.preventVerticalPan || (g.shift ? this.viewport.zoomBy(0.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, this.pixelsPerArrowPress))), this.viewport.applyConstraints()), g.preventDefault = !0;
                break;
              case 37:
                _.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), g.preventDefault = !0;
                break;
              case 39:
                _.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), g.preventDefault = !0;
                break;
              default:
                g.preventDefault = !1;
                break;
            }
          else
            g.preventDefault = !1;
        }
        function p(g) {
          var _ = { originalEvent: g.originalEvent, preventDefaultAction: !1, preventVerticalPan: g.preventVerticalPan, preventHorizontalPan: g.preventHorizontalPan };
          if (this.raiseEvent("canvas-key", _), !_.preventDefaultAction && !g.ctrl && !g.alt && !g.meta)
            switch (g.keyCode) {
              case 43:
              case 61:
                this.viewport.zoomBy(1.1), this.viewport.applyConstraints(), g.preventDefault = !0;
                break;
              case 45:
                this.viewport.zoomBy(0.9), this.viewport.applyConstraints(), g.preventDefault = !0;
                break;
              case 48:
                this.viewport.goHome(), this.viewport.applyConstraints(), g.preventDefault = !0;
                break;
              case 119:
              case 87:
                _.preventVerticalPan || (g.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -40))), this.viewport.applyConstraints()), g.preventDefault = !0;
                break;
              case 115:
              case 83:
                _.preventVerticalPan || (g.shift ? this.viewport.zoomBy(0.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, 40))), this.viewport.applyConstraints()), g.preventDefault = !0;
                break;
              case 97:
                _.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-40, 0))), this.viewport.applyConstraints()), g.preventDefault = !0;
                break;
              case 100:
                _.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(40, 0))), this.viewport.applyConstraints()), g.preventDefault = !0;
                break;
              case 114:
                this.viewport.flipped ? this.viewport.setRotation(e.positiveModulo(this.viewport.degrees - this.rotationIncrement, 360)) : this.viewport.setRotation(e.positiveModulo(this.viewport.degrees + this.rotationIncrement, 360)), this.viewport.applyConstraints(), g.preventDefault = !0;
                break;
              case 82:
                this.viewport.flipped ? this.viewport.setRotation(e.positiveModulo(this.viewport.degrees + this.rotationIncrement, 360)) : this.viewport.setRotation(e.positiveModulo(this.viewport.degrees - this.rotationIncrement, 360)), this.viewport.applyConstraints(), g.preventDefault = !0;
                break;
              case 102:
                this.viewport.toggleFlip(), g.preventDefault = !0;
                break;
              case 106:
                this.goToPreviousPage();
                break;
              case 107:
                this.goToNextPage();
                break;
              default:
                g.preventDefault = !1;
                break;
            }
          else
            g.preventDefault = !1;
        }
        function E(g) {
          var _, R = document.activeElement === this.canvas;
          R || this.canvas.focus(), this.viewport.flipped && (g.position.x = this.viewport.getContainerSize().x - g.position.x);
          var L = { tracker: g.eventSource, position: g.position, quick: g.quick, shift: g.shift, originalEvent: g.originalEvent, originalTarget: g.originalTarget, preventDefaultAction: !1 };
          this.raiseEvent("canvas-click", L), !L.preventDefaultAction && this.viewport && g.quick && (_ = this.gestureSettingsByDeviceType(g.pointerType), _.clickToZoom && (this.viewport.zoomBy(g.shift ? 1 / this.zoomPerClick : this.zoomPerClick, _.zoomToRefPoint ? this.viewport.pointFromPixel(g.position, !0) : null), this.viewport.applyConstraints()));
        }
        function T(g) {
          var _, R = { tracker: g.eventSource, position: g.position, shift: g.shift, originalEvent: g.originalEvent, preventDefaultAction: !1 };
          this.raiseEvent("canvas-double-click", R), !R.preventDefaultAction && this.viewport && (_ = this.gestureSettingsByDeviceType(g.pointerType), _.dblClickToZoom && (this.viewport.zoomBy(g.shift ? 1 / this.zoomPerClick : this.zoomPerClick, _.zoomToRefPoint ? this.viewport.pointFromPixel(g.position, !0) : null), this.viewport.applyConstraints()));
        }
        function C(g) {
          var _, R = { tracker: g.eventSource, pointerType: g.pointerType, position: g.position, delta: g.delta, speed: g.speed, direction: g.direction, shift: g.shift, originalEvent: g.originalEvent, preventDefaultAction: !1 };
          if (this.raiseEvent("canvas-drag", R), _ = this.gestureSettingsByDeviceType(g.pointerType), _.dragToPan && !R.preventDefaultAction && this.viewport) {
            if (this.panHorizontal || (g.delta.x = 0), this.panVertical || (g.delta.y = 0), this.viewport.flipped && (g.delta.x = -g.delta.x), this.constrainDuringPan) {
              var L = this.viewport.deltaPointsFromPixels(g.delta.negate());
              this.viewport.centerSpringX.target.value += L.x, this.viewport.centerSpringY.target.value += L.y;
              var M = this.viewport.getBounds(), G = this.viewport.getConstrainedBounds();
              this.viewport.centerSpringX.target.value -= L.x, this.viewport.centerSpringY.target.value -= L.y, M.x !== G.x && (g.delta.x = 0), M.y !== G.y && (g.delta.y = 0);
            }
            this.viewport.panBy(this.viewport.deltaPointsFromPixels(g.delta.negate()), _.flickEnabled && !this.constrainDuringPan);
          }
        }
        function O(g) {
          var _ = { tracker: g.eventSource, pointerType: g.pointerType, position: g.position, speed: g.speed, direction: g.direction, shift: g.shift, originalEvent: g.originalEvent, preventDefaultAction: !1 };
          if (this.raiseEvent("canvas-drag-end", _), !_.preventDefaultAction && this.viewport) {
            var R = this.gestureSettingsByDeviceType(g.pointerType);
            if (R.flickEnabled && g.speed >= R.flickMinSpeed) {
              var L = 0;
              this.panHorizontal && (L = R.flickMomentum * g.speed * Math.cos(g.direction));
              var M = 0;
              this.panVertical && (M = R.flickMomentum * g.speed * Math.sin(g.direction));
              var G = this.viewport.pixelFromPoint(this.viewport.getCenter(!0)), U = this.viewport.pointFromPixel(new e.Point(G.x - L, G.y - M));
              this.viewport.panTo(U, !1);
            }
            this.viewport.applyConstraints();
          }
        }
        function D(g) {
          this.raiseEvent("canvas-enter", { tracker: g.eventSource, pointerType: g.pointerType, position: g.position, buttons: g.buttons, pointers: g.pointers, insideElementPressed: g.insideElementPressed, buttonDownAny: g.buttonDownAny, originalEvent: g.originalEvent });
        }
        function F(g) {
          this.raiseEvent("canvas-exit", { tracker: g.eventSource, pointerType: g.pointerType, position: g.position, buttons: g.buttons, pointers: g.pointers, insideElementPressed: g.insideElementPressed, buttonDownAny: g.buttonDownAny, originalEvent: g.originalEvent });
        }
        function I(g) {
          this.raiseEvent("canvas-press", { tracker: g.eventSource, pointerType: g.pointerType, position: g.position, insideElementPressed: g.insideElementPressed, insideElementReleased: g.insideElementReleased, originalEvent: g.originalEvent });
        }
        function H(g) {
          this.raiseEvent("canvas-release", { tracker: g.eventSource, pointerType: g.pointerType, position: g.position, insideElementPressed: g.insideElementPressed, insideElementReleased: g.insideElementReleased, originalEvent: g.originalEvent });
        }
        function j(g) {
          this.raiseEvent("canvas-nonprimary-press", { tracker: g.eventSource, position: g.position, pointerType: g.pointerType, button: g.button, buttons: g.buttons, originalEvent: g.originalEvent });
        }
        function z(g) {
          this.raiseEvent("canvas-nonprimary-release", { tracker: g.eventSource, position: g.position, pointerType: g.pointerType, button: g.button, buttons: g.buttons, originalEvent: g.originalEvent });
        }
        function q(g) {
          var _, R, L, M, G = { tracker: g.eventSource, pointerType: g.pointerType, gesturePoints: g.gesturePoints, lastCenter: g.lastCenter, center: g.center, lastDistance: g.lastDistance, distance: g.distance, shift: g.shift, originalEvent: g.originalEvent, preventDefaultPanAction: !1, preventDefaultZoomAction: !1, preventDefaultRotateAction: !1 };
          if (this.raiseEvent("canvas-pinch", G), this.viewport && (_ = this.gestureSettingsByDeviceType(g.pointerType), _.pinchToZoom && (!G.preventDefaultPanAction || !G.preventDefaultZoomAction) && (R = this.viewport.pointFromPixel(g.center, !0), G.preventDefaultZoomAction || this.viewport.zoomBy(g.distance / g.lastDistance, R, !0), _.zoomToRefPoint && !G.preventDefaultPanAction && (L = this.viewport.pointFromPixel(g.lastCenter, !0), M = L.minus(R), this.panHorizontal || (M.x = 0), this.panVertical || (M.y = 0), this.viewport.panBy(M, !0)), this.viewport.applyConstraints()), _.pinchRotate && !G.preventDefaultRotateAction)) {
            var U = Math.atan2(g.gesturePoints[0].currentPos.y - g.gesturePoints[1].currentPos.y, g.gesturePoints[0].currentPos.x - g.gesturePoints[1].currentPos.x), ce = Math.atan2(g.gesturePoints[0].lastPos.y - g.gesturePoints[1].lastPos.y, g.gesturePoints[0].lastPos.x - g.gesturePoints[1].lastPos.x);
            this.viewport.setRotation(this.viewport.getRotation() + (U - ce) * (180 / Math.PI));
          }
        }
        function $(g) {
          var _, R, L, M, G;
          M = e.now(), G = M - this._lastScrollTime, G > this.minScrollDeltaTime ? (this._lastScrollTime = M, _ = { tracker: g.eventSource, position: g.position, scroll: g.scroll, shift: g.shift, originalEvent: g.originalEvent, preventDefaultAction: !1, preventDefault: !0 }, this.raiseEvent("canvas-scroll", _), !_.preventDefaultAction && this.viewport && (this.viewport.flipped && (g.position.x = this.viewport.getContainerSize().x - g.position.x), R = this.gestureSettingsByDeviceType(g.pointerType), R.scrollToZoom && (L = Math.pow(this.zoomPerScroll, g.scroll), this.viewport.zoomBy(L, R.zoomToRefPoint ? this.viewport.pointFromPixel(g.position, !0) : null), this.viewport.applyConstraints())), g.preventDefault = _.preventDefault) : g.preventDefault = !0;
        }
        function Q(g) {
          n[this.hash].mouseInside = !0, m(this), this.raiseEvent("container-enter", { tracker: g.eventSource, pointerType: g.pointerType, position: g.position, buttons: g.buttons, pointers: g.pointers, insideElementPressed: g.insideElementPressed, buttonDownAny: g.buttonDownAny, originalEvent: g.originalEvent });
        }
        function J(g) {
          g.pointers < 1 && (n[this.hash].mouseInside = !1, n[this.hash].animating || h(this)), this.raiseEvent("container-exit", { tracker: g.eventSource, pointerType: g.pointerType, position: g.position, buttons: g.buttons, pointers: g.pointers, insideElementPressed: g.insideElementPressed, buttonDownAny: g.buttonDownAny, originalEvent: g.originalEvent });
        }
        function te(g) {
          oe(g), g.isOpen() ? g._updateRequestId = u(g, te) : g._updateRequestId = !1;
        }
        function oe(g) {
          if (!(g._opening || !n[g.hash])) {
            if (g.autoResize) {
              var _ = o(g.container), R = n[g.hash].prevContainerSize;
              if (!_.equals(R)) {
                var L = g.viewport;
                if (g.preserveImageSizeOnResize) {
                  var M = R.x / _.x, G = L.getZoom() * M, U = L.getCenter();
                  L.resize(_, !1), L.zoomTo(G, null, !0), L.panTo(U, !0);
                } else {
                  var ce = L.getBounds();
                  L.resize(_, !0), L.fitBoundsWithConstraints(ce, !0);
                }
                n[g.hash].prevContainerSize = _, n[g.hash].forceRedraw = !0;
              }
            }
            var ge = g.viewport.update(), ae = g.world.update() || ge;
            ge && g.raiseEvent("viewport-change"), g.referenceStrip && (ae = g.referenceStrip.update(g.viewport) || ae), !n[g.hash].animating && ae && (g.raiseEvent("animation-start"), m(g)), (ae || n[g.hash].forceRedraw || g.world.needsDraw()) && (pe(g), g._drawOverlays(), g.navigator && g.navigator.update(g.viewport), n[g.hash].forceRedraw = !1, ae && g.raiseEvent("animation")), n[g.hash].animating && !ae && (g.raiseEvent("animation-finish"), n[g.hash].mouseInside || h(g)), n[g.hash].animating = ae;
          }
        }
        function pe(g) {
          g.imageLoader.clear(), g.drawer.clear(), g.world.draw(), g.raiseEvent("update-viewport", {});
        }
        function V(g, _) {
          return g ? g + _ : _;
        }
        function se() {
          n[this.hash].lastZoomTime = e.now(), n[this.hash].zoomFactor = this.zoomPerSecond, n[this.hash].zooming = !0, Me(this);
        }
        function Et() {
          n[this.hash].lastZoomTime = e.now(), n[this.hash].zoomFactor = 1 / this.zoomPerSecond, n[this.hash].zooming = !0, Me(this);
        }
        function Ye() {
          n[this.hash].zooming = !1;
        }
        function Me(g) {
          e.requestAnimationFrame(e.delegate(g, We));
        }
        function We() {
          var g, _, R;
          n[this.hash].zooming && this.viewport && (g = e.now(), _ = g - n[this.hash].lastZoomTime, R = Math.pow(n[this.hash].zoomFactor, _ / 1e3), this.viewport.zoomBy(R), this.viewport.applyConstraints(), n[this.hash].lastZoomTime = g, Me(this));
        }
        function st() {
          this.viewport && (n[this.hash].zooming = !1, this.viewport.zoomBy(this.zoomPerClick / 1), this.viewport.applyConstraints());
        }
        function $e() {
          this.viewport && (n[this.hash].zooming = !1, this.viewport.zoomBy(1 / this.zoomPerClick), this.viewport.applyConstraints());
        }
        function wn() {
          this.buttonGroup && (this.buttonGroup.emulateEnter(), this.buttonGroup.emulateLeave());
        }
        function bn() {
          this.viewport && this.viewport.goHome();
        }
        function Ut() {
          this.isFullPage() && !e.isFullScreen() ? this.setFullPage(!1) : this.setFullScreen(!this.isFullPage()), this.buttonGroup && this.buttonGroup.emulateLeave(), this.fullPageButton.element.focus(), this.viewport && this.viewport.applyConstraints();
        }
        function xn() {
          if (this.viewport) {
            var g = this.viewport.getRotation();
            this.viewport.flipped ? g = e.positiveModulo(g + this.rotationIncrement, 360) : g = e.positiveModulo(g - this.rotationIncrement, 360), this.viewport.setRotation(g);
          }
        }
        function Sn() {
          if (this.viewport) {
            var g = this.viewport.getRotation();
            this.viewport.flipped ? g = e.positiveModulo(g - this.rotationIncrement, 360) : g = e.positiveModulo(g + this.rotationIncrement, 360), this.viewport.setRotation(g);
          }
        }
        function _n() {
          this.viewport.toggleFlip();
        }
      }(i), function(e) {
        e.Navigator = function(u) {
          var c = u.viewer, h = this, d, m;
          u.id ? (this.element = document.getElementById(u.id), u.controlOptions = { anchor: e.ControlAnchor.NONE, attachToViewer: !1, autoFade: !1 }) : (u.id = "navigator-" + e.now(), this.element = e.makeNeutralElement("div"), u.controlOptions = { anchor: e.ControlAnchor.TOP_RIGHT, attachToViewer: !0, autoFade: u.autoFade }, u.position && (u.position === "BOTTOM_RIGHT" ? u.controlOptions.anchor = e.ControlAnchor.BOTTOM_RIGHT : u.position === "BOTTOM_LEFT" ? u.controlOptions.anchor = e.ControlAnchor.BOTTOM_LEFT : u.position === "TOP_RIGHT" ? u.controlOptions.anchor = e.ControlAnchor.TOP_RIGHT : u.position === "TOP_LEFT" ? u.controlOptions.anchor = e.ControlAnchor.TOP_LEFT : u.position === "ABSOLUTE" && (u.controlOptions.anchor = e.ControlAnchor.ABSOLUTE, u.controlOptions.top = u.top, u.controlOptions.left = u.left, u.controlOptions.height = u.height, u.controlOptions.width = u.width))), this.element.id = u.id, this.element.className += " navigator", u = e.extend(!0, { sizeRatio: e.DEFAULT_SETTINGS.navigatorSizeRatio }, u, { element: this.element, tabIndex: -1, showNavigator: !1, mouseNavEnabled: !1, showNavigationControl: !1, showSequenceControl: !1, immediateRender: !0, blendTime: 0, animationTime: 0, autoResize: u.autoResize, minZoomImageRatio: 1, background: u.background, opacity: u.opacity, borderColor: u.borderColor, displayRegionColor: u.displayRegionColor }), u.minPixelRatio = this.minPixelRatio = c.minPixelRatio, e.setElementTouchActionNone(this.element), this.borderWidth = 2, this.fudge = new e.Point(1, 1), this.totalBorderWidths = new e.Point(this.borderWidth * 2, this.borderWidth * 2).minus(this.fudge), u.controlOptions.anchor !== e.ControlAnchor.NONE && function(b, A) {
            b.margin = "0px", b.border = A + "px solid " + u.borderColor, b.padding = "0px", b.background = u.background, b.opacity = u.opacity, b.overflow = "hidden";
          }(this.element.style, this.borderWidth), this.displayRegion = e.makeNeutralElement("div"), this.displayRegion.id = this.element.id + "-displayregion", this.displayRegion.className = "displayregion", function(b, A) {
            b.position = "relative", b.top = "0px", b.left = "0px", b.fontSize = "0px", b.overflow = "hidden", b.border = A + "px solid " + u.displayRegionColor, b.margin = "0px", b.padding = "0px", b.background = "transparent", b.float = "left", b.cssFloat = "left", b.styleFloat = "left", b.zIndex = 999999999, b.cursor = "default";
          }(this.displayRegion.style, this.borderWidth), e.setElementPointerEventsNone(this.displayRegion), e.setElementTouchActionNone(this.displayRegion), this.displayRegionContainer = e.makeNeutralElement("div"), this.displayRegionContainer.id = this.element.id + "-displayregioncontainer", this.displayRegionContainer.className = "displayregioncontainer", this.displayRegionContainer.style.width = "100%", this.displayRegionContainer.style.height = "100%", e.setElementPointerEventsNone(this.displayRegionContainer), e.setElementTouchActionNone(this.displayRegionContainer), c.addControl(this.element, u.controlOptions), this._resizeWithViewer = u.controlOptions.anchor !== e.ControlAnchor.ABSOLUTE && u.controlOptions.anchor !== e.ControlAnchor.NONE, u.width && u.height ? (this.setWidth(u.width), this.setHeight(u.height)) : this._resizeWithViewer && (d = e.getElementSize(c.element), this.element.style.height = Math.round(d.y * u.sizeRatio) + "px", this.element.style.width = Math.round(d.x * u.sizeRatio) + "px", this.oldViewerSize = d, m = e.getElementSize(this.element), this.elementArea = m.x * m.y), this.oldContainerSize = new e.Point(0, 0), e.Viewer.apply(this, [u]), this.displayRegionContainer.appendChild(this.displayRegion), this.element.getElementsByTagName("div")[0].appendChild(this.displayRegionContainer);
          function y(b) {
            a(h.displayRegionContainer, b), a(h.displayRegion, -b), h.viewport.setRotation(b);
          }
          if (u.navigatorRotate) {
            var S = u.viewer.viewport ? u.viewer.viewport.getRotation() : u.viewer.degrees || 0;
            y(S), u.viewer.addHandler("rotate", function(b) {
              y(b.degrees);
            });
          }
          this.innerTracker.destroy(), this.innerTracker = new e.MouseTracker({ userData: "Navigator.innerTracker", element: this.element, dragHandler: e.delegate(this, r), clickHandler: e.delegate(this, n), releaseHandler: e.delegate(this, o), scrollHandler: e.delegate(this, s), preProcessEventHandler: function(b) {
            b.eventType === "wheel" && (b.preventDefault = !0);
          } }), this.outerTracker.userData = "Navigator.outerTracker", e.setElementPointerEventsNone(this.canvas), e.setElementPointerEventsNone(this.container), this.addHandler("reset-size", function() {
            h.viewport && h.viewport.goHome(!0);
          }), c.world.addHandler("item-index-change", function(b) {
            window.setTimeout(function() {
              var A = h.world.getItemAt(b.previousIndex);
              h.world.setItemIndex(A, b.newIndex);
            }, 1);
          }), c.world.addHandler("remove-item", function(b) {
            var A = b.item, p = h._getMatchingItem(A);
            p && h.world.removeItem(p);
          }), this.update(c.viewport);
        }, e.extend(e.Navigator.prototype, e.EventSource.prototype, e.Viewer.prototype, { updateSize: function() {
          if (this.viewport) {
            var u = new e.Point(this.container.clientWidth === 0 ? 1 : this.container.clientWidth, this.container.clientHeight === 0 ? 1 : this.container.clientHeight);
            u.equals(this.oldContainerSize) || (this.viewport.resize(u, !0), this.viewport.goHome(!0), this.oldContainerSize = u, this.drawer.clear(), this.world.draw());
          }
        }, setWidth: function(u) {
          this.width = u, this.element.style.width = typeof u == "number" ? u + "px" : u, this._resizeWithViewer = !1;
        }, setHeight: function(u) {
          this.height = u, this.element.style.height = typeof u == "number" ? u + "px" : u, this._resizeWithViewer = !1;
        }, setFlip: function(u) {
          return this.viewport.setFlip(u), this.setDisplayTransform(this.viewer.viewport.getFlip() ? "scale(-1,1)" : "scale(1,1)"), this;
        }, setDisplayTransform: function(u) {
          l(this.displayRegion, u), l(this.canvas, u), l(this.element, u);
        }, update: function(u) {
          var c, h, d, m, y, S;
          if (c = e.getElementSize(this.viewer.element), this._resizeWithViewer && c.x && c.y && !c.equals(this.oldViewerSize) && (this.oldViewerSize = c, this.maintainSizeRatio || !this.elementArea ? (h = c.x * this.sizeRatio, d = c.y * this.sizeRatio) : (h = Math.sqrt(this.elementArea * (c.x / c.y)), d = this.elementArea / h), this.element.style.width = Math.round(h) + "px", this.element.style.height = Math.round(d) + "px", this.elementArea || (this.elementArea = h * d), this.updateSize()), u && this.viewport) {
            m = u.getBoundsNoRotate(!0), y = this.viewport.pixelFromPointNoRotate(m.getTopLeft(), !1), S = this.viewport.pixelFromPointNoRotate(m.getBottomRight(), !1).minus(this.totalBorderWidths);
            var b = this.displayRegion.style;
            b.display = this.world.getItemCount() ? "block" : "none", b.top = Math.round(y.y) + "px", b.left = Math.round(y.x) + "px";
            var A = Math.abs(y.x - S.x), p = Math.abs(y.y - S.y);
            b.width = Math.round(Math.max(A, 0)) + "px", b.height = Math.round(Math.max(p, 0)) + "px";
          }
        }, addTiledImage: function(u) {
          var c = this, h = u.originalTiledImage;
          delete u.original;
          var d = e.extend({}, u, { success: function(m) {
            var y = m.item;
            y._originalForNavigator = h, c._matchBounds(y, h, !0), c._matchOpacity(y, h), c._matchCompositeOperation(y, h);
            function S() {
              c._matchBounds(y, h);
            }
            function b() {
              c._matchOpacity(y, h);
            }
            function A() {
              c._matchCompositeOperation(y, h);
            }
            h.addHandler("bounds-change", S), h.addHandler("clip-change", S), h.addHandler("opacity-change", b), h.addHandler("composite-operation-change", A);
          } });
          return e.Viewer.prototype.addTiledImage.apply(this, [d]);
        }, destroy: function() {
          return e.Viewer.prototype.destroy.apply(this);
        }, _getMatchingItem: function(u) {
          for (var c = this.world.getItemCount(), h, d = 0; d < c; d++)
            if (h = this.world.getItemAt(d), h._originalForNavigator === u)
              return h;
          return null;
        }, _matchBounds: function(u, c, h) {
          var d = c.getBoundsNoRotate();
          u.setPosition(d.getTopLeft(), h), u.setWidth(d.width, h), u.setRotation(c.getRotation(), h), u.setClip(c.getClip()), u.setFlip(c.getFlip());
        }, _matchOpacity: function(u, c) {
          u.setOpacity(c.opacity);
        }, _matchCompositeOperation: function(u, c) {
          u.setCompositeOperation(c.compositeOperation);
        } });
        function n(u) {
          var c = { tracker: u.eventSource, position: u.position, quick: u.quick, shift: u.shift, originalEvent: u.originalEvent, preventDefaultAction: !1 };
          if (this.viewer.raiseEvent("navigator-click", c), !c.preventDefaultAction && u.quick && this.viewer.viewport && (this.panVertical || this.panHorizontal)) {
            this.viewer.viewport.flipped && (u.position.x = this.viewport.getContainerSize().x - u.position.x);
            var h = this.viewport.pointFromPixel(u.position);
            this.panVertical ? this.panHorizontal || (h.x = this.viewer.viewport.getCenter(!0).x) : h.y = this.viewer.viewport.getCenter(!0).y, this.viewer.viewport.panTo(h), this.viewer.viewport.applyConstraints();
          }
        }
        function r(u) {
          var c = { tracker: u.eventSource, position: u.position, delta: u.delta, speed: u.speed, direction: u.direction, shift: u.shift, originalEvent: u.originalEvent, preventDefaultAction: !1 };
          this.viewer.raiseEvent("navigator-drag", c), !c.preventDefaultAction && this.viewer.viewport && (this.panHorizontal || (u.delta.x = 0), this.panVertical || (u.delta.y = 0), this.viewer.viewport.flipped && (u.delta.x = -u.delta.x), this.viewer.viewport.panBy(this.viewport.deltaPointsFromPixels(u.delta)), this.viewer.constrainDuringPan && this.viewer.viewport.applyConstraints());
        }
        function o(u) {
          u.insideElementPressed && this.viewer.viewport && this.viewer.viewport.applyConstraints();
        }
        function s(u) {
          var c = { tracker: u.eventSource, position: u.position, scroll: u.scroll, shift: u.shift, originalEvent: u.originalEvent, preventDefault: u.preventDefault };
          this.viewer.raiseEvent("navigator-scroll", c), u.preventDefault = c.preventDefault;
        }
        function a(u, c) {
          l(u, "rotate(" + c + "deg)");
        }
        function l(u, c) {
          u.style.webkitTransform = c, u.style.mozTransform = c, u.style.msTransform = c, u.style.oTransform = c, u.style.transform = c;
        }
      }(i), function(e) {
        var n = { Errors: { Dzc: "Sorry, we don't support Deep Zoom Collections!", Dzi: "Hmm, this doesn't appear to be a valid Deep Zoom Image.", Xml: "Hmm, this doesn't appear to be a valid Deep Zoom Image.", ImageFormat: "Sorry, we don't support {0}-based Deep Zoom Images.", Security: "It looks like a security restriction stopped us from loading this Deep Zoom Image.", Status: "This space unintentionally left blank ({0} {1}).", OpenFailed: "Unable to open {0}: {1}" }, Tooltips: { FullPage: "Toggle full page", Home: "Go home", ZoomIn: "Zoom in", ZoomOut: "Zoom out", NextPage: "Next page", PreviousPage: "Previous page", RotateLeft: "Rotate left", RotateRight: "Rotate right", Flip: "Flip Horizontally" } };
        e.extend(e, { getString: function(r) {
          var o = r.split("."), s = null, a = arguments, l = n, u;
          for (u = 0; u < o.length - 1; u++)
            l = l[o[u]] || {};
          return s = l[o[u]], typeof s != "string" && (e.console.log("Untranslated source string:", r), s = ""), s.replace(/\{\d+\}/g, function(c) {
            var h = parseInt(c.match(/\d+/), 10) + 1;
            return h < a.length ? a[h] : "";
          });
        }, setString: function(r, o) {
          var s = r.split("."), a = n, l;
          for (l = 0; l < s.length - 1; l++)
            a[s[l]] || (a[s[l]] = {}), a = a[s[l]];
          a[s[l]] = o;
        } });
      }(i), function(e) {
        e.Point = function(n, r) {
          this.x = typeof n == "number" ? n : 0, this.y = typeof r == "number" ? r : 0;
        }, e.Point.prototype = { clone: function() {
          return new e.Point(this.x, this.y);
        }, plus: function(n) {
          return new e.Point(this.x + n.x, this.y + n.y);
        }, minus: function(n) {
          return new e.Point(this.x - n.x, this.y - n.y);
        }, times: function(n) {
          return new e.Point(this.x * n, this.y * n);
        }, divide: function(n) {
          return new e.Point(this.x / n, this.y / n);
        }, negate: function() {
          return new e.Point(-this.x, -this.y);
        }, distanceTo: function(n) {
          return Math.sqrt(Math.pow(this.x - n.x, 2) + Math.pow(this.y - n.y, 2));
        }, squaredDistanceTo: function(n) {
          return Math.pow(this.x - n.x, 2) + Math.pow(this.y - n.y, 2);
        }, apply: function(n) {
          return new e.Point(n(this.x), n(this.y));
        }, equals: function(n) {
          return n instanceof e.Point && this.x === n.x && this.y === n.y;
        }, rotate: function(n, r) {
          r = r || new e.Point(0, 0);
          var o, s;
          if (n % 90 === 0) {
            var a = e.positiveModulo(n, 360);
            switch (a) {
              case 0:
                o = 1, s = 0;
                break;
              case 90:
                o = 0, s = 1;
                break;
              case 180:
                o = -1, s = 0;
                break;
              case 270:
                o = 0, s = -1;
                break;
            }
          } else {
            var l = n * Math.PI / 180;
            o = Math.cos(l), s = Math.sin(l);
          }
          var u = o * (this.x - r.x) - s * (this.y - r.y) + r.x, c = s * (this.x - r.x) + o * (this.y - r.y) + r.y;
          return new e.Point(u, c);
        }, toString: function() {
          return "(" + Math.round(this.x * 100) / 100 + "," + Math.round(this.y * 100) / 100 + ")";
        } };
      }(i), function(e) {
        e.TileSource = function(r, o, s, a, l, u) {
          var c = this, h = arguments, d, m;
          if (e.isPlainObject(r) ? d = r : d = { width: h[0], height: h[1], tileSize: h[2], tileOverlap: h[3], minLevel: h[4], maxLevel: h[5] }, e.EventSource.call(this), e.extend(!0, this, d), !this.success) {
            for (m = 0; m < arguments.length; m++)
              if (e.isFunction(arguments[m])) {
                this.success = arguments[m];
                break;
              }
          }
          this.success && this.addHandler("ready", function(y) {
            c.success(y);
          }), e.type(arguments[0]) === "string" && (this.url = arguments[0]), this.url ? (this.aspectRatio = 1, this.dimensions = new e.Point(10, 10), this._tileWidth = 0, this._tileHeight = 0, this.tileOverlap = 0, this.minLevel = 0, this.maxLevel = 0, this.ready = !1, this.getImageInfo(this.url)) : (this.ready = !0, this.aspectRatio = d.width && d.height ? d.width / d.height : 1, this.dimensions = new e.Point(d.width, d.height), this.tileSize ? (this._tileWidth = this._tileHeight = this.tileSize, delete this.tileSize) : (this.tileWidth ? (this._tileWidth = this.tileWidth, delete this.tileWidth) : this._tileWidth = 0, this.tileHeight ? (this._tileHeight = this.tileHeight, delete this.tileHeight) : this._tileHeight = 0), this.tileOverlap = d.tileOverlap ? d.tileOverlap : 0, this.minLevel = d.minLevel ? d.minLevel : 0, this.maxLevel = d.maxLevel !== void 0 && d.maxLevel !== null ? d.maxLevel : d.width && d.height ? Math.ceil(Math.log(Math.max(d.width, d.height)) / Math.log(2)) : 0, this.success && e.isFunction(this.success) && this.success(this));
        }, e.TileSource.prototype = { getTileSize: function(r) {
          return e.console.error("[TileSource.getTileSize] is deprecated. Use TileSource.getTileWidth() and TileSource.getTileHeight() instead"), this._tileWidth;
        }, getTileWidth: function(r) {
          return this._tileWidth ? this._tileWidth : this.getTileSize(r);
        }, getTileHeight: function(r) {
          return this._tileHeight ? this._tileHeight : this.getTileSize(r);
        }, setMaxLevel: function(r) {
          this.maxLevel = r, this._memoizeLevelScale();
        }, getLevelScale: function(r) {
          return this._memoizeLevelScale(), this.getLevelScale(r);
        }, _memoizeLevelScale: function() {
          var r = {}, o;
          for (o = 0; o <= this.maxLevel; o++)
            r[o] = 1 / Math.pow(2, this.maxLevel - o);
          this.getLevelScale = function(s) {
            return r[s];
          };
        }, getNumTiles: function(r) {
          var o = this.getLevelScale(r), s = Math.ceil(o * this.dimensions.x / this.getTileWidth(r)), a = Math.ceil(o * this.dimensions.y / this.getTileHeight(r));
          return new e.Point(s, a);
        }, getPixelRatio: function(r) {
          var o = this.dimensions.times(this.getLevelScale(r)), s = 1 / o.x * e.pixelDensityRatio, a = 1 / o.y * e.pixelDensityRatio;
          return new e.Point(s, a);
        }, getClosestLevel: function() {
          var r, o;
          for (r = this.minLevel + 1; r <= this.maxLevel && (o = this.getNumTiles(r), !(o.x > 1 || o.y > 1)); r++)
            ;
          return r - 1;
        }, getTileAtPoint: function(r, o) {
          var s = o.x >= 0 && o.x <= 1 && o.y >= 0 && o.y <= 1 / this.aspectRatio;
          e.console.assert(s, "[TileSource.getTileAtPoint] must be called with a valid point.");
          var a = this.dimensions.x * this.getLevelScale(r), l = o.x * a, u = o.y * a, c = Math.floor(l / this.getTileWidth(r)), h = Math.floor(u / this.getTileHeight(r));
          o.x >= 1 && (c = this.getNumTiles(r).x - 1);
          var d = 1e-15;
          return o.y >= 1 / this.aspectRatio - d && (h = this.getNumTiles(r).y - 1), new e.Point(c, h);
        }, getTileBounds: function(r, o, s, a) {
          var l = this.dimensions.times(this.getLevelScale(r)), u = this.getTileWidth(r), c = this.getTileHeight(r), h = o === 0 ? 0 : u * o - this.tileOverlap, d = s === 0 ? 0 : c * s - this.tileOverlap, m = u + (o === 0 ? 1 : 2) * this.tileOverlap, y = c + (s === 0 ? 1 : 2) * this.tileOverlap, S = 1 / l.x;
          return m = Math.min(m, l.x - h), y = Math.min(y, l.y - d), a ? new e.Rect(0, 0, m, y) : new e.Rect(h * S, d * S, m * S, y * S);
        }, getImageInfo: function(r) {
          var o = this, s, a, l, u, c, h, d;
          r && (c = r.split("/"), h = c[c.length - 1], d = h.lastIndexOf("."), d > -1 && (c[c.length - 1] = h.slice(0, d))), a = function(m) {
            typeof m == "string" && (m = e.parseXml(m));
            var y = e.TileSource.determineType(o, m, r);
            if (!y) {
              o.raiseEvent("open-failed", { message: "Unable to load TileSource", source: r });
              return;
            }
            u = y.prototype.configure.apply(o, [m, r]), u.ajaxWithCredentials === void 0 && (u.ajaxWithCredentials = o.ajaxWithCredentials), l = new y(u), o.ready = !0, o.raiseEvent("ready", { tileSource: l });
          }, r.match(/\.js$/) ? (s = r.split("/").pop().replace(".js", ""), e.jsonp({ url: r, async: !1, callbackName: s, callback: a })) : e.makeAjaxRequest({ url: r, withCredentials: this.ajaxWithCredentials, headers: this.ajaxHeaders, success: function(m) {
            var y = n(m);
            a(y);
          }, error: function(m, y) {
            var S;
            try {
              S = "HTTP " + m.status + " attempting to load TileSource";
            } catch {
              var b;
              typeof y > "u" || !y.toString ? b = "Unknown error" : b = y.toString(), S = b + " attempting to load TileSource";
            }
            o.raiseEvent("open-failed", { message: S, source: r });
          } });
        }, supports: function(r, o) {
          return !1;
        }, configure: function(r, o) {
          throw new Error("Method not implemented.");
        }, getTileUrl: function(r, o, s) {
          throw new Error("Method not implemented.");
        }, getTileAjaxHeaders: function(r, o, s) {
          return {};
        }, tileExists: function(r, o, s) {
          var a = this.getNumTiles(r);
          return r >= this.minLevel && r <= this.maxLevel && o >= 0 && s >= 0 && o < a.x && s < a.y;
        } }, e.extend(!0, e.TileSource.prototype, e.EventSource.prototype);
        function n(r) {
          var o = r.responseText, s = r.status, a, l;
          if (r) {
            if (r.status !== 200 && r.status !== 0)
              throw s = r.status, a = s === 404 ? "Not Found" : r.statusText, new Error(e.getString("Errors.Status", s, a));
          } else
            throw new Error(e.getString("Errors.Security"));
          if (o.match(/\s*<.*/))
            try {
              l = r.responseXML && r.responseXML.documentElement ? r.responseXML : e.parseXml(o);
            } catch {
              l = r.responseText;
            }
          else if (o.match(/\s*[{[].*/))
            try {
              l = e.parseJSON(o);
            } catch {
              l = o;
            }
          else
            l = o;
          return l;
        }
        e.TileSource.determineType = function(r, o, s) {
          var a;
          for (a in i)
            if (a.match(/.+TileSource$/) && e.isFunction(i[a]) && e.isFunction(i[a].prototype.supports) && i[a].prototype.supports.call(r, o, s))
              return i[a];
          return e.console.error("No TileSource was able to open %s %s", s, o), null;
        };
      }(i), function(e) {
        e.DziTileSource = function(o, s, a, l, u, c, h, d, m) {
          var y, S, b, A;
          if (e.isPlainObject(o) ? A = o : A = { width: arguments[0], height: arguments[1], tileSize: arguments[2], tileOverlap: arguments[3], tilesUrl: arguments[4], fileFormat: arguments[5], displayRects: arguments[6], minLevel: arguments[7], maxLevel: arguments[8] }, this._levelRects = {}, this.tilesUrl = A.tilesUrl, this.fileFormat = A.fileFormat, this.displayRects = A.displayRects, this.displayRects)
            for (y = this.displayRects.length - 1; y >= 0; y--)
              for (S = this.displayRects[y], b = S.minLevel; b <= S.maxLevel; b++)
                this._levelRects[b] || (this._levelRects[b] = []), this._levelRects[b].push(S);
          e.TileSource.apply(this, [A]);
        }, e.extend(e.DziTileSource.prototype, e.TileSource.prototype, { supports: function(o, s) {
          var a;
          return o.Image ? a = o.Image.xmlns : o.documentElement && (o.documentElement.localName === "Image" || o.documentElement.tagName === "Image") && (a = o.documentElement.namespaceURI), a = (a || "").toLowerCase(), a.indexOf("schemas.microsoft.com/deepzoom/2008") !== -1 || a.indexOf("schemas.microsoft.com/deepzoom/2009") !== -1;
        }, configure: function(o, s) {
          var a;
          return e.isPlainObject(o) ? a = r(this, o) : a = n(this, o), s && !a.tilesUrl && (a.tilesUrl = s.replace(/([^/]+?)(\.(dzi|xml|js)?(\?[^/]*)?)?\/?$/, "$1_files/"), s.search(/\.(dzi|xml|js)\?/) !== -1 ? a.queryParams = s.match(/\?.*/) : a.queryParams = ""), a;
        }, getTileUrl: function(o, s, a) {
          return [this.tilesUrl, o, "/", s, "_", a, ".", this.fileFormat, this.queryParams].join("");
        }, tileExists: function(o, s, a) {
          var l = this._levelRects[o], u, c, h, d, m, y, S;
          if (this.minLevel && o < this.minLevel || this.maxLevel && o > this.maxLevel)
            return !1;
          if (!l || !l.length)
            return !0;
          for (S = l.length - 1; S >= 0; S--)
            if (u = l[S], !(o < u.minLevel || o > u.maxLevel) && (c = this.getLevelScale(o), h = u.x * c, d = u.y * c, m = h + u.width * c, y = d + u.height * c, h = Math.floor(h / this._tileWidth), d = Math.floor(d / this._tileWidth), m = Math.ceil(m / this._tileWidth), y = Math.ceil(y / this._tileWidth), h <= s && s < m && d <= a && a < y))
              return !0;
          return !1;
        } });
        function n(o, s) {
          if (!s || !s.documentElement)
            throw new Error(e.getString("Errors.Xml"));
          var a = s.documentElement, l = a.localName || a.tagName, u = s.documentElement.namespaceURI, c = null, h = [], d, m, y, S, b;
          if (l === "Image")
            try {
              if (S = a.getElementsByTagName("Size")[0], S === void 0 && (S = a.getElementsByTagNameNS(u, "Size")[0]), c = { Image: { xmlns: "http://schemas.microsoft.com/deepzoom/2008", Url: a.getAttribute("Url"), Format: a.getAttribute("Format"), DisplayRect: null, Overlap: parseInt(a.getAttribute("Overlap"), 10), TileSize: parseInt(a.getAttribute("TileSize"), 10), Size: { Height: parseInt(S.getAttribute("Height"), 10), Width: parseInt(S.getAttribute("Width"), 10) } } }, !e.imageFormatSupported(c.Image.Format))
                throw new Error(e.getString("Errors.ImageFormat", c.Image.Format.toUpperCase()));
              for (d = a.getElementsByTagName("DisplayRect"), d === void 0 && (d = a.getElementsByTagNameNS(u, "DisplayRect")[0]), b = 0; b < d.length; b++)
                m = d[b], y = m.getElementsByTagName("Rect")[0], y === void 0 && (y = m.getElementsByTagNameNS(u, "Rect")[0]), h.push({ Rect: { X: parseInt(y.getAttribute("X"), 10), Y: parseInt(y.getAttribute("Y"), 10), Width: parseInt(y.getAttribute("Width"), 10), Height: parseInt(y.getAttribute("Height"), 10), MinLevel: parseInt(m.getAttribute("MinLevel"), 10), MaxLevel: parseInt(m.getAttribute("MaxLevel"), 10) } });
              return h.length && (c.Image.DisplayRect = h), r(o, c);
            } catch (E) {
              throw E instanceof Error ? E : new Error(e.getString("Errors.Dzi"));
            }
          else {
            if (l === "Collection")
              throw new Error(e.getString("Errors.Dzc"));
            if (l === "Error") {
              var A = a.getElementsByTagName("Message")[0], p = A.firstChild.nodeValue;
              throw new Error(p);
            }
          }
          throw new Error(e.getString("Errors.Dzi"));
        }
        function r(o, s) {
          var a = s.Image, l = a.Url, u = a.Format, c = a.Size, h = a.DisplayRect || [], d = parseInt(c.Width, 10), m = parseInt(c.Height, 10), y = parseInt(a.TileSize, 10), S = parseInt(a.Overlap, 10), b = [], A, p;
          for (p = 0; p < h.length; p++)
            A = h[p].Rect, b.push(new e.DisplayRect(parseInt(A.X, 10), parseInt(A.Y, 10), parseInt(A.Width, 10), parseInt(A.Height, 10), parseInt(A.MinLevel, 10), parseInt(A.MaxLevel, 10)));
          return e.extend(!0, { width: d, height: m, tileSize: y, tileOverlap: S, minLevel: null, maxLevel: null, tilesUrl: l, fileFormat: u, displayRects: b }, s);
        }
      }(i), function(e) {
        e.IIIFTileSource = function(a) {
          if (e.extend(!0, this, a), !(this.height && this.width && this["@id"]))
            throw new Error("IIIF required parameters not provided.");
          if (a.tileSizePerScaleFactor = {}, this.tileFormat = this.tileFormat || "jpg", this.version = a.version, this.tile_width && this.tile_height)
            a.tileWidth = this.tile_width, a.tileHeight = this.tile_height;
          else if (this.tile_width)
            a.tileSize = this.tile_width;
          else if (this.tile_height)
            a.tileSize = this.tile_height;
          else if (this.tiles)
            if (this.tiles.length === 1)
              a.tileWidth = this.tiles[0].width, a.tileHeight = this.tiles[0].height || this.tiles[0].width, this.scale_factors = this.tiles[0].scaleFactors;
            else {
              this.scale_factors = [];
              for (var l = 0; l < this.tiles.length; l++)
                for (var u = 0; u < this.tiles[l].scaleFactors.length; u++) {
                  var c = this.tiles[l].scaleFactors[u];
                  this.scale_factors.push(c), a.tileSizePerScaleFactor[c] = { width: this.tiles[l].width, height: this.tiles[l].height || this.tiles[l].width };
                }
            }
          else if (n(a)) {
            for (var h = Math.min(this.height, this.width), d = [256, 512, 1024], m = [], y = 0; y < d.length; y++)
              d[y] <= h && m.push(d[y]);
            m.length > 0 ? a.tileSize = Math.max.apply(null, m) : a.tileSize = h;
          } else
            this.sizes && this.sizes.length > 0 ? (this.emulateLegacyImagePyramid = !0, a.levels = r(this), e.extend(!0, a, { width: a.levels[a.levels.length - 1].width, height: a.levels[a.levels.length - 1].height, tileSize: Math.max(a.height, a.width), tileOverlap: 0, minLevel: 0, maxLevel: a.levels.length - 1 }), this.levels = a.levels) : e.console.error("Nothing in the info.json to construct image pyramids from");
          if (!a.maxLevel && !this.emulateLegacyImagePyramid)
            if (!this.scale_factors)
              a.maxLevel = Number(Math.ceil(Math.log(Math.max(this.width, this.height), 2)));
            else {
              var S = Math.max.apply(null, this.scale_factors);
              a.maxLevel = Math.round(Math.log(S) * Math.LOG2E);
            }
          e.TileSource.apply(this, [a]);
        }, e.extend(e.IIIFTileSource.prototype, e.TileSource.prototype, { supports: function(a, l) {
          return a.protocol && a.protocol === "http://iiif.io/api/image" || a["@context"] && (a["@context"] === "http://library.stanford.edu/iiif/image-api/1.1/context.json" || a["@context"] === "http://iiif.io/api/image/1/context.json") || a.profile && a.profile.indexOf("http://library.stanford.edu/iiif/image-api/compliance.html") === 0 || a.identifier && a.width && a.height ? !0 : !!(a.documentElement && a.documentElement.tagName === "info" && a.documentElement.namespaceURI === "http://library.stanford.edu/iiif/image-api/ns/");
        }, configure: function(a, l) {
          if (e.isPlainObject(a)) {
            if (!a["@context"])
              a["@context"] = "http://iiif.io/api/image/1.0/context.json", a["@id"] = l.replace("/info.json", ""), a.version = 1;
            else {
              var u = a["@context"];
              if (Array.isArray(u)) {
                for (var c = 0; c < u.length; c++)
                  if (typeof u[c] == "string" && (/^http:\/\/iiif\.io\/api\/image\/[1-3]\/context\.json$/.test(u[c]) || u[c] === "http://library.stanford.edu/iiif/image-api/1.1/context.json")) {
                    u = u[c];
                    break;
                  }
              }
              switch (u) {
                case "http://iiif.io/api/image/1/context.json":
                case "http://library.stanford.edu/iiif/image-api/1.1/context.json":
                  a.version = 1;
                  break;
                case "http://iiif.io/api/image/2/context.json":
                  a.version = 2;
                  break;
                case "http://iiif.io/api/image/3/context.json":
                  a.version = 3;
                  break;
                default:
                  e.console.error("Data has a @context property which contains no known IIIF context URI.");
              }
            }
            if (!a["@id"] && a.id && (a["@id"] = a.id), a.preferredFormats) {
              for (var h = 0; h < a.preferredFormats.length; h++)
                if (i.imageFormatSupported(a.preferredFormats[h])) {
                  a.tileFormat = a.preferredFormats[h];
                  break;
                }
            }
            return a;
          } else {
            var d = o(a);
            return d["@context"] = "http://iiif.io/api/image/1.0/context.json", d["@id"] = l.replace("/info.xml", ""), d.version = 1, d;
          }
        }, getTileWidth: function(a) {
          if (this.emulateLegacyImagePyramid)
            return e.TileSource.prototype.getTileWidth.call(this, a);
          var l = Math.pow(2, this.maxLevel - a);
          return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[l] ? this.tileSizePerScaleFactor[l].width : this._tileWidth;
        }, getTileHeight: function(a) {
          if (this.emulateLegacyImagePyramid)
            return e.TileSource.prototype.getTileHeight.call(this, a);
          var l = Math.pow(2, this.maxLevel - a);
          return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[l] ? this.tileSizePerScaleFactor[l].height : this._tileHeight;
        }, getLevelScale: function(a) {
          if (this.emulateLegacyImagePyramid) {
            var l = NaN;
            return this.levels.length > 0 && a >= this.minLevel && a <= this.maxLevel && (l = this.levels[a].width / this.levels[this.maxLevel].width), l;
          }
          return e.TileSource.prototype.getLevelScale.call(this, a);
        }, getNumTiles: function(a) {
          if (this.emulateLegacyImagePyramid) {
            var l = this.getLevelScale(a);
            return l ? new e.Point(1, 1) : new e.Point(0, 0);
          }
          return e.TileSource.prototype.getNumTiles.call(this, a);
        }, getTileAtPoint: function(a, l) {
          return this.emulateLegacyImagePyramid ? new e.Point(0, 0) : e.TileSource.prototype.getTileAtPoint.call(this, a, l);
        }, getTileUrl: function(a, l, u) {
          if (this.emulateLegacyImagePyramid) {
            var c = null;
            return this.levels.length > 0 && a >= this.minLevel && a <= this.maxLevel && (c = this.levels[a].url), c;
          }
          var h = "0", d = Math.pow(0.5, this.maxLevel - a), m = Math.ceil(this.width * d), y = Math.ceil(this.height * d), S, b, A, p, E, T, C, O, D, F, I, H, j, z;
          return S = this.getTileWidth(a), b = this.getTileHeight(a), A = Math.ceil(S / d), p = Math.ceil(b / d), this.version === 1 ? j = "native." + this.tileFormat : j = "default." + this.tileFormat, m < S && y < b ? (this.version === 2 && m === this.width ? F = "full" : this.version === 3 && m === this.width && y === this.height ? F = "max" : this.version === 3 ? F = m + "," + y : F = m + ",", E = "full") : (T = l * A, C = u * p, O = Math.min(A, this.width - T), D = Math.min(p, this.height - C), l === 0 && u === 0 && O === this.width && D === this.height ? E = "full" : E = [T, C, O, D].join(","), I = Math.ceil(O * d), H = Math.ceil(D * d), this.version === 2 && I === this.width ? F = "full" : this.version === 3 && I === this.width && H === this.height ? F = "max" : this.version === 3 ? F = I + "," + H : F = I + ","), z = [this["@id"], E, F, h, j].join("/"), z;
        }, __testonly__: { canBeTiled: n, constructLevels: r } });
        function n(a) {
          var l = ["http://library.stanford.edu/iiif/image-api/compliance.html#level0", "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0", "http://iiif.io/api/image/2/level0.json", "level0", "https://iiif.io/api/image/3/level0.json"], u = Array.isArray(a.profile) ? a.profile[0] : a.profile, c = l.indexOf(u) !== -1, h = !1;
          return a.version === 2 && a.profile.length > 1 && a.profile[1].supports && (h = a.profile[1].supports.indexOf("sizeByW") !== -1), a.version === 3 && a.extraFeatures && (h = a.extraFeatures.indexOf("sizeByWh") !== -1), !c || h;
        }
        function r(a) {
          for (var l = [], u = 0; u < a.sizes.length; u++)
            l.push({ url: a["@id"] + "/full/" + a.sizes[u].width + "," + (a.version === 3 ? a.sizes[u].height : "") + "/0/default." + a.tileFormat, width: a.sizes[u].width, height: a.sizes[u].height });
          return l.sort(function(c, h) {
            return c.width - h.width;
          });
        }
        function o(a) {
          if (!a || !a.documentElement)
            throw new Error(e.getString("Errors.Xml"));
          var l = a.documentElement, u = l.tagName, c = null;
          if (u === "info")
            try {
              return c = {}, s(l, c), c;
            } catch (h) {
              throw h instanceof Error ? h : new Error(e.getString("Errors.IIIF"));
            }
          throw new Error(e.getString("Errors.IIIF"));
        }
        function s(a, l, u) {
          var c, h;
          if (a.nodeType === 3 && u)
            h = a.nodeValue.trim(), h.match(/^\d*$/) && (h = Number(h)), l[u] ? (e.isArray(l[u]) || (l[u] = [l[u]]), l[u].push(h)) : l[u] = h;
          else if (a.nodeType === 1)
            for (c = 0; c < a.childNodes.length; c++)
              s(a.childNodes[c], l, a.nodeName);
        }
      }(i), function(e) {
        e.OsmTileSource = function(n, r, o, s, a) {
          var l;
          e.isPlainObject(n) ? l = n : l = { width: arguments[0], height: arguments[1], tileSize: arguments[2], tileOverlap: arguments[3], tilesUrl: arguments[4] }, (!l.width || !l.height) && (l.width = 65572864, l.height = 65572864), l.tileSize || (l.tileSize = 256, l.tileOverlap = 0), l.tilesUrl || (l.tilesUrl = "http://tile.openstreetmap.org/"), l.minLevel = 8, e.TileSource.apply(this, [l]);
        }, e.extend(e.OsmTileSource.prototype, e.TileSource.prototype, { supports: function(n, r) {
          return n.type && n.type === "openstreetmaps";
        }, configure: function(n, r) {
          return n;
        }, getTileUrl: function(n, r, o) {
          return this.tilesUrl + (n - 8) + "/" + r + "/" + o + ".png";
        } });
      }(i), function(e) {
        e.TmsTileSource = function(n, r, o, s, a) {
          var l;
          e.isPlainObject(n) ? l = n : l = { width: arguments[0], height: arguments[1], tileSize: arguments[2], tileOverlap: arguments[3], tilesUrl: arguments[4] };
          var u = Math.ceil(l.width / 256) * 256, c = Math.ceil(l.height / 256) * 256, h;
          u > c ? h = u / 256 : h = c / 256, l.maxLevel = Math.ceil(Math.log(h) / Math.log(2)) - 1, l.tileSize = 256, l.width = u, l.height = c, e.TileSource.apply(this, [l]);
        }, e.extend(e.TmsTileSource.prototype, e.TileSource.prototype, { supports: function(n, r) {
          return n.type && n.type === "tiledmapservice";
        }, configure: function(n, r) {
          return n;
        }, getTileUrl: function(n, r, o) {
          var s = this.getNumTiles(n).y - 1;
          return this.tilesUrl + n + "/" + r + "/" + (s - o) + ".png";
        } });
      }(i), function(e) {
        e.ZoomifyTileSource = function(n) {
          typeof n.tileSize > "u" && (n.tileSize = 256), typeof n.fileFormat > "u" && (n.fileFormat = "jpg", this.fileFormat = n.fileFormat);
          var r = { x: n.width, y: n.height };
          for (n.imageSizes = [{ x: n.width, y: n.height }], n.gridSize = [this._getGridSize(n.width, n.height, n.tileSize)]; parseInt(r.x, 10) > n.tileSize || parseInt(r.y, 10) > n.tileSize; )
            r.x = Math.floor(r.x / 2), r.y = Math.floor(r.y / 2), n.imageSizes.push({ x: r.x, y: r.y }), n.gridSize.push(this._getGridSize(r.x, r.y, n.tileSize));
          n.imageSizes.reverse(), n.gridSize.reverse(), n.minLevel = 0, n.maxLevel = n.gridSize.length - 1, i.TileSource.apply(this, [n]);
        }, e.extend(e.ZoomifyTileSource.prototype, e.TileSource.prototype, { _getGridSize: function(n, r, o) {
          return { x: Math.ceil(n / o), y: Math.ceil(r / o) };
        }, _calculateAbsoluteTileNumber: function(n, r, o) {
          for (var s = 0, a = {}, l = 0; l < n; l++)
            a = this.gridSize[l], s += a.x * a.y;
          return a = this.gridSize[n], s += a.x * o + r, s;
        }, supports: function(n, r) {
          return n.type && n.type === "zoomifytileservice";
        }, configure: function(n, r) {
          return n;
        }, getTileUrl: function(n, r, o) {
          var s = 0, a = this._calculateAbsoluteTileNumber(n, r, o);
          return s = Math.floor(a / 256), this.tilesUrl + "TileGroup" + s + "/" + n + "-" + r + "-" + o + "." + this.fileFormat;
        } });
      }(i), function(e) {
        e.LegacyTileSource = function(s) {
          var a, l, u;
          e.isArray(s) && (a = { type: "legacy-image-pyramid", levels: s }), a.levels = n(a.levels), a.levels.length > 0 ? (l = a.levels[a.levels.length - 1].width, u = a.levels[a.levels.length - 1].height) : (l = 0, u = 0, e.console.error("No supported image formats found")), e.extend(!0, a, { width: l, height: u, tileSize: Math.max(u, l), tileOverlap: 0, minLevel: 0, maxLevel: a.levels.length > 0 ? a.levels.length - 1 : 0 }), e.TileSource.apply(this, [a]), this.levels = a.levels;
        }, e.extend(e.LegacyTileSource.prototype, e.TileSource.prototype, { supports: function(s, a) {
          return s.type && s.type === "legacy-image-pyramid" || s.documentElement && s.documentElement.getAttribute("type") === "legacy-image-pyramid";
        }, configure: function(s, a) {
          var l;
          return e.isPlainObject(s) ? l = o(this, s) : l = r(this, s), l;
        }, getLevelScale: function(s) {
          var a = NaN;
          return this.levels.length > 0 && s >= this.minLevel && s <= this.maxLevel && (a = this.levels[s].width / this.levels[this.maxLevel].width), a;
        }, getNumTiles: function(s) {
          var a = this.getLevelScale(s);
          return a ? new e.Point(1, 1) : new e.Point(0, 0);
        }, getTileUrl: function(s, a, l) {
          var u = null;
          return this.levels.length > 0 && s >= this.minLevel && s <= this.maxLevel && (u = this.levels[s].url), u;
        } });
        function n(s) {
          var a = [], l, u;
          for (u = 0; u < s.length; u++)
            l = s[u], l.height && l.width && l.url ? a.push({ url: l.url, width: Number(l.width), height: Number(l.height) }) : e.console.error("Unsupported image format: %s", l.url ? l.url : "<no URL>");
          return a.sort(function(c, h) {
            return c.height - h.height;
          });
        }
        function r(s, a) {
          if (!a || !a.documentElement)
            throw new Error(e.getString("Errors.Xml"));
          var l = a.documentElement, u = l.tagName, c = null, h = [], d, m;
          if (u === "image")
            try {
              for (c = { type: l.getAttribute("type"), levels: [] }, h = l.getElementsByTagName("level"), m = 0; m < h.length; m++)
                d = h[m], c.levels.push({ url: d.getAttribute("url"), width: parseInt(d.getAttribute("width"), 10), height: parseInt(d.getAttribute("height"), 10) });
              return o(s, c);
            } catch (y) {
              throw y instanceof Error ? y : new Error("Unknown error parsing Legacy Image Pyramid XML.");
            }
          else {
            if (u === "collection")
              throw new Error("Legacy Image Pyramid Collections not yet supported.");
            if (u === "error")
              throw new Error("Error: " + a);
          }
          throw new Error("Unknown element " + u);
        }
        function o(s, a) {
          return a.levels;
        }
      }(i), function(e) {
        e.ImageTileSource = function(n) {
          n = e.extend({ buildPyramid: !0, crossOriginPolicy: !1, ajaxWithCredentials: !1, useCanvas: !0 }, n), e.TileSource.apply(this, [n]);
        }, e.extend(e.ImageTileSource.prototype, e.TileSource.prototype, { supports: function(n, r) {
          return n.type && n.type === "image";
        }, configure: function(n, r) {
          return n;
        }, getImageInfo: function(n) {
          var r = this._image = new Image(), o = this;
          this.crossOriginPolicy && (r.crossOrigin = this.crossOriginPolicy), this.ajaxWithCredentials && (r.useCredentials = this.ajaxWithCredentials), e.addEvent(r, "load", function() {
            o.width = r.naturalWidth, o.height = r.naturalHeight, o.aspectRatio = o.width / o.height, o.dimensions = new e.Point(o.width, o.height), o._tileWidth = o.width, o._tileHeight = o.height, o.tileOverlap = 0, o.minLevel = 0, o.levels = o._buildLevels(), o.maxLevel = o.levels.length - 1, o.ready = !0, o.raiseEvent("ready", { tileSource: o });
          }), e.addEvent(r, "error", function() {
            o.raiseEvent("open-failed", { message: "Error loading image at " + n, source: n });
          }), r.src = n;
        }, getLevelScale: function(n) {
          var r = NaN;
          return n >= this.minLevel && n <= this.maxLevel && (r = this.levels[n].width / this.levels[this.maxLevel].width), r;
        }, getNumTiles: function(n) {
          var r = this.getLevelScale(n);
          return r ? new e.Point(1, 1) : new e.Point(0, 0);
        }, getTileUrl: function(n, r, o) {
          var s = null;
          return n >= this.minLevel && n <= this.maxLevel && (s = this.levels[n].url), s;
        }, getContext2D: function(n, r, o) {
          var s = null;
          return n >= this.minLevel && n <= this.maxLevel && (s = this.levels[n].context2D), s;
        }, destroy: function() {
          this._freeupCanvasMemory();
        }, _buildLevels: function() {
          var n = [{ url: this._image.src, width: this._image.naturalWidth, height: this._image.naturalHeight }];
          if (!this.buildPyramid || !e.supportsCanvas || !this.useCanvas)
            return delete this._image, n;
          var r = this._image.naturalWidth, o = this._image.naturalHeight, s = document.createElement("canvas"), a = s.getContext("2d");
          if (s.width = r, s.height = o, a.drawImage(this._image, 0, 0, r, o), n[0].context2D = a, delete this._image, e.isCanvasTainted(s))
            return n;
          for (; r >= 2 && o >= 2; ) {
            r = Math.floor(r / 2), o = Math.floor(o / 2);
            var l = document.createElement("canvas"), u = l.getContext("2d");
            l.width = r, l.height = o, u.drawImage(s, 0, 0, r, o), n.splice(0, 0, { context2D: u, width: r, height: o }), s = l, a = u;
          }
          return n;
        }, _freeupCanvasMemory: function() {
          for (var n = 0; n < this.levels.length; n++)
            this.levels[n].context2D.canvas.height = 0, this.levels[n].context2D.canvas.width = 0;
        } });
      }(i), function(e) {
        e.TileSourceCollection = function(n, r, o, s) {
          e.console.error("TileSourceCollection is deprecated; use World instead");
        };
      }(i), function(e) {
        e.ButtonState = { REST: 0, GROUP: 1, HOVER: 2, DOWN: 3 }, e.Button = function(u) {
          var c = this;
          e.EventSource.call(this), e.extend(!0, this, { tooltip: null, srcRest: null, srcGroup: null, srcHover: null, srcDown: null, clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold, clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold, fadeDelay: 0, fadeLength: 2e3, onPress: null, onRelease: null, onClick: null, onEnter: null, onExit: null, onFocus: null, onBlur: null, userData: null }, u), this.element = u.element || e.makeNeutralElement("div"), u.element || (this.imgRest = e.makeTransparentImage(this.srcRest), this.imgGroup = e.makeTransparentImage(this.srcGroup), this.imgHover = e.makeTransparentImage(this.srcHover), this.imgDown = e.makeTransparentImage(this.srcDown), this.imgRest.alt = this.imgGroup.alt = this.imgHover.alt = this.imgDown.alt = this.tooltip, e.setElementPointerEventsNone(this.imgRest), e.setElementPointerEventsNone(this.imgGroup), e.setElementPointerEventsNone(this.imgHover), e.setElementPointerEventsNone(this.imgDown), this.element.style.position = "relative", e.setElementTouchActionNone(this.element), this.imgGroup.style.position = this.imgHover.style.position = this.imgDown.style.position = "absolute", this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = "0px", this.imgGroup.style.left = this.imgHover.style.left = this.imgDown.style.left = "0px", this.imgHover.style.visibility = this.imgDown.style.visibility = "hidden", e.Browser.vendor === e.BROWSERS.FIREFOX && e.Browser.version < 3 && (this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = ""), this.element.appendChild(this.imgRest), this.element.appendChild(this.imgGroup), this.element.appendChild(this.imgHover), this.element.appendChild(this.imgDown)), this.addHandler("press", this.onPress), this.addHandler("release", this.onRelease), this.addHandler("click", this.onClick), this.addHandler("enter", this.onEnter), this.addHandler("exit", this.onExit), this.addHandler("focus", this.onFocus), this.addHandler("blur", this.onBlur), this.currentState = e.ButtonState.GROUP, this.fadeBeginTime = null, this.shouldFade = !1, this.element.style.display = "inline-block", this.element.style.position = "relative", this.element.title = this.tooltip, this.tracker = new e.MouseTracker({ userData: "Button.tracker", element: this.element, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, enterHandler: function(h) {
            h.insideElementPressed ? (a(c, e.ButtonState.DOWN), c.raiseEvent("enter", { originalEvent: h.originalEvent })) : h.buttonDownAny || a(c, e.ButtonState.HOVER);
          }, focusHandler: function(h) {
            c.tracker.enterHandler(h), c.raiseEvent("focus", { originalEvent: h.originalEvent });
          }, leaveHandler: function(h) {
            l(c, e.ButtonState.GROUP), h.insideElementPressed && c.raiseEvent("exit", { originalEvent: h.originalEvent });
          }, blurHandler: function(h) {
            c.tracker.leaveHandler(h), c.raiseEvent("blur", { originalEvent: h.originalEvent });
          }, pressHandler: function(h) {
            a(c, e.ButtonState.DOWN), c.raiseEvent("press", { originalEvent: h.originalEvent });
          }, releaseHandler: function(h) {
            h.insideElementPressed && h.insideElementReleased ? (l(c, e.ButtonState.HOVER), c.raiseEvent("release", { originalEvent: h.originalEvent })) : h.insideElementPressed ? l(c, e.ButtonState.GROUP) : a(c, e.ButtonState.HOVER);
          }, clickHandler: function(h) {
            h.quick && c.raiseEvent("click", { originalEvent: h.originalEvent });
          }, keyHandler: function(h) {
            h.keyCode === 13 ? (c.raiseEvent("click", { originalEvent: h.originalEvent }), c.raiseEvent("release", { originalEvent: h.originalEvent }), h.preventDefault = !0) : h.preventDefault = !1;
          } }), l(this, e.ButtonState.REST);
        }, e.extend(e.Button.prototype, e.EventSource.prototype, { notifyGroupEnter: function() {
          a(this, e.ButtonState.GROUP);
        }, notifyGroupExit: function() {
          l(this, e.ButtonState.REST);
        }, disable: function() {
          this.notifyGroupExit(), this.element.disabled = !0, e.setElementOpacity(this.element, 0.2, !0);
        }, enable: function() {
          this.element.disabled = !1, e.setElementOpacity(this.element, 1, !0), this.notifyGroupEnter();
        }, destroy: function() {
          this.imgRest && (this.element.removeChild(this.imgRest), this.imgRest = null), this.imgGroup && (this.element.removeChild(this.imgGroup), this.imgGroup = null), this.imgHover && (this.element.removeChild(this.imgHover), this.imgHover = null), this.imgDown && (this.element.removeChild(this.imgDown), this.imgDown = null), this.removeAllHandlers(), this.tracker.destroy(), this.element = null;
        } });
        function n(u) {
          e.requestAnimationFrame(function() {
            r(u);
          });
        }
        function r(u) {
          var c, h, d;
          u.shouldFade && (c = e.now(), h = c - u.fadeBeginTime, d = 1 - h / u.fadeLength, d = Math.min(1, d), d = Math.max(0, d), u.imgGroup && e.setElementOpacity(u.imgGroup, d, !0), d > 0 && n(u));
        }
        function o(u) {
          u.shouldFade = !0, u.fadeBeginTime = e.now() + u.fadeDelay, window.setTimeout(function() {
            n(u);
          }, u.fadeDelay);
        }
        function s(u) {
          u.shouldFade = !1, u.imgGroup && e.setElementOpacity(u.imgGroup, 1, !0);
        }
        function a(u, c) {
          u.element.disabled || (c >= e.ButtonState.GROUP && u.currentState === e.ButtonState.REST && (s(u), u.currentState = e.ButtonState.GROUP), c >= e.ButtonState.HOVER && u.currentState === e.ButtonState.GROUP && (u.imgHover && (u.imgHover.style.visibility = ""), u.currentState = e.ButtonState.HOVER), c >= e.ButtonState.DOWN && u.currentState === e.ButtonState.HOVER && (u.imgDown && (u.imgDown.style.visibility = ""), u.currentState = e.ButtonState.DOWN));
        }
        function l(u, c) {
          u.element.disabled || (c <= e.ButtonState.HOVER && u.currentState === e.ButtonState.DOWN && (u.imgDown && (u.imgDown.style.visibility = "hidden"), u.currentState = e.ButtonState.HOVER), c <= e.ButtonState.GROUP && u.currentState === e.ButtonState.HOVER && (u.imgHover && (u.imgHover.style.visibility = "hidden"), u.currentState = e.ButtonState.GROUP), c <= e.ButtonState.REST && u.currentState === e.ButtonState.GROUP && (o(u), u.currentState = e.ButtonState.REST));
        }
      }(i), function(e) {
        e.ButtonGroup = function(n) {
          e.extend(!0, this, { buttons: [], clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold, clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold, labelText: "" }, n);
          var r = this.buttons.concat([]), o = this, s;
          if (this.element = n.element || e.makeNeutralElement("div"), !n.group)
            for (this.element.style.display = "inline-block", s = 0; s < r.length; s++)
              this.element.appendChild(r[s].element);
          e.setElementTouchActionNone(this.element), this.tracker = new e.MouseTracker({ userData: "ButtonGroup.tracker", element: this.element, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, enterHandler: function(a) {
            var l;
            for (l = 0; l < o.buttons.length; l++)
              o.buttons[l].notifyGroupEnter();
          }, leaveHandler: function(a) {
            var l;
            if (!a.insideElementPressed)
              for (l = 0; l < o.buttons.length; l++)
                o.buttons[l].notifyGroupExit();
          } });
        }, e.ButtonGroup.prototype = { emulateEnter: function() {
          this.tracker.enterHandler({ eventSource: this.tracker });
        }, emulateLeave: function() {
          this.tracker.leaveHandler({ eventSource: this.tracker });
        }, destroy: function() {
          for (; this.buttons.length; ) {
            var n = this.buttons.pop();
            this.element.removeChild(n.element), n.destroy();
          }
          this.tracker.destroy(), this.element = null;
        } };
      }(i), function(e) {
        e.Rect = function(n, r, o, s, a) {
          this.x = typeof n == "number" ? n : 0, this.y = typeof r == "number" ? r : 0, this.width = typeof o == "number" ? o : 0, this.height = typeof s == "number" ? s : 0, this.degrees = typeof a == "number" ? a : 0, this.degrees = e.positiveModulo(this.degrees, 360);
          var l, u;
          this.degrees >= 270 ? (l = this.getTopRight(), this.x = l.x, this.y = l.y, u = this.height, this.height = this.width, this.width = u, this.degrees -= 270) : this.degrees >= 180 ? (l = this.getBottomRight(), this.x = l.x, this.y = l.y, this.degrees -= 180) : this.degrees >= 90 && (l = this.getBottomLeft(), this.x = l.x, this.y = l.y, u = this.height, this.height = this.width, this.width = u, this.degrees -= 90);
        }, e.Rect.fromSummits = function(n, r, o) {
          var s = n.distanceTo(r), a = n.distanceTo(o), l = r.minus(n), u = Math.atan(l.y / l.x);
          return l.x < 0 ? u += Math.PI : l.y < 0 && (u += 2 * Math.PI), new e.Rect(n.x, n.y, s, a, u / Math.PI * 180);
        }, e.Rect.prototype = { clone: function() {
          return new e.Rect(this.x, this.y, this.width, this.height, this.degrees);
        }, getAspectRatio: function() {
          return this.width / this.height;
        }, getTopLeft: function() {
          return new e.Point(this.x, this.y);
        }, getBottomRight: function() {
          return new e.Point(this.x + this.width, this.y + this.height).rotate(this.degrees, this.getTopLeft());
        }, getTopRight: function() {
          return new e.Point(this.x + this.width, this.y).rotate(this.degrees, this.getTopLeft());
        }, getBottomLeft: function() {
          return new e.Point(this.x, this.y + this.height).rotate(this.degrees, this.getTopLeft());
        }, getCenter: function() {
          return new e.Point(this.x + this.width / 2, this.y + this.height / 2).rotate(this.degrees, this.getTopLeft());
        }, getSize: function() {
          return new e.Point(this.width, this.height);
        }, equals: function(n) {
          return n instanceof e.Rect && this.x === n.x && this.y === n.y && this.width === n.width && this.height === n.height && this.degrees === n.degrees;
        }, times: function(n) {
          return new e.Rect(this.x * n, this.y * n, this.width * n, this.height * n, this.degrees);
        }, translate: function(n) {
          return new e.Rect(this.x + n.x, this.y + n.y, this.width, this.height, this.degrees);
        }, union: function(n) {
          var r = this.getBoundingBox(), o = n.getBoundingBox(), s = Math.min(r.x, o.x), a = Math.min(r.y, o.y), l = Math.max(r.x + r.width, o.x + o.width), u = Math.max(r.y + r.height, o.y + o.height);
          return new e.Rect(s, a, l - s, u - a);
        }, intersection: function(n) {
          var r = 1e-10, o = [], s = this.getTopLeft();
          n.containsPoint(s, r) && o.push(s);
          var a = this.getTopRight();
          n.containsPoint(a, r) && o.push(a);
          var l = this.getBottomLeft();
          n.containsPoint(l, r) && o.push(l);
          var u = this.getBottomRight();
          n.containsPoint(u, r) && o.push(u);
          var c = n.getTopLeft();
          this.containsPoint(c, r) && o.push(c);
          var h = n.getTopRight();
          this.containsPoint(h, r) && o.push(h);
          var d = n.getBottomLeft();
          this.containsPoint(d, r) && o.push(d);
          var m = n.getBottomRight();
          this.containsPoint(m, r) && o.push(m);
          for (var y = this._getSegments(), S = n._getSegments(), b = 0; b < y.length; b++)
            for (var A = y[b], p = 0; p < S.length; p++) {
              var E = S[p], T = C(A[0], A[1], E[0], E[1]);
              T && o.push(T);
            }
          function C(z, q, $, Q) {
            var J = q.minus(z), te = Q.minus($), oe = -te.x * J.y + J.x * te.y;
            if (oe === 0)
              return null;
            var pe = (J.x * (z.y - $.y) - J.y * (z.x - $.x)) / oe, V = (te.x * (z.y - $.y) - te.y * (z.x - $.x)) / oe;
            return -r <= pe && pe <= 1 - r && -r <= V && V <= 1 - r ? new e.Point(z.x + V * J.x, z.y + V * J.y) : null;
          }
          if (o.length === 0)
            return null;
          for (var O = o[0].x, D = o[0].x, F = o[0].y, I = o[0].y, H = 1; H < o.length; H++) {
            var j = o[H];
            j.x < O && (O = j.x), j.x > D && (D = j.x), j.y < F && (F = j.y), j.y > I && (I = j.y);
          }
          return new e.Rect(O, F, D - O, I - F);
        }, _getSegments: function() {
          var n = this.getTopLeft(), r = this.getTopRight(), o = this.getBottomLeft(), s = this.getBottomRight();
          return [[n, r], [r, s], [s, o], [o, n]];
        }, rotate: function(n, r) {
          if (n = e.positiveModulo(n, 360), n === 0)
            return this.clone();
          r = r || this.getCenter();
          var o = this.getTopLeft().rotate(n, r), s = this.getTopRight().rotate(n, r), a = s.minus(o);
          a = a.apply(function(u) {
            var c = 1e-15;
            return Math.abs(u) < c ? 0 : u;
          });
          var l = Math.atan(a.y / a.x);
          return a.x < 0 ? l += Math.PI : a.y < 0 && (l += 2 * Math.PI), new e.Rect(o.x, o.y, this.width, this.height, l / Math.PI * 180);
        }, getBoundingBox: function() {
          if (this.degrees === 0)
            return this.clone();
          var n = this.getTopLeft(), r = this.getTopRight(), o = this.getBottomLeft(), s = this.getBottomRight(), a = Math.min(n.x, r.x, o.x, s.x), l = Math.max(n.x, r.x, o.x, s.x), u = Math.min(n.y, r.y, o.y, s.y), c = Math.max(n.y, r.y, o.y, s.y);
          return new e.Rect(a, u, l - a, c - u);
        }, getIntegerBoundingBox: function() {
          var n = this.getBoundingBox(), r = Math.floor(n.x), o = Math.floor(n.y), s = Math.ceil(n.width + n.x - r), a = Math.ceil(n.height + n.y - o);
          return new e.Rect(r, o, s, a);
        }, containsPoint: function(n, r) {
          r = r || 0;
          var o = this.getTopLeft(), s = this.getTopRight(), a = this.getBottomLeft(), l = s.minus(o), u = a.minus(o);
          return (n.x - o.x) * l.x + (n.y - o.y) * l.y >= -r && (n.x - s.x) * l.x + (n.y - s.y) * l.y <= r && (n.x - o.x) * u.x + (n.y - o.y) * u.y >= -r && (n.x - a.x) * u.x + (n.y - a.y) * u.y <= r;
        }, toString: function() {
          return "[" + Math.round(this.x * 100) / 100 + ", " + Math.round(this.y * 100) / 100 + ", " + Math.round(this.width * 100) / 100 + "x" + Math.round(this.height * 100) / 100 + ", " + Math.round(this.degrees * 100) / 100 + "deg]";
        } };
      }(i), function(e) {
        var n = {};
        e.ReferenceStrip = function(d) {
          var m = this, y = d.viewer, S = e.getElementSize(y.element), b, A, p;
          for (d.id || (d.id = "referencestrip-" + e.now(), this.element = e.makeNeutralElement("div"), this.element.id = d.id, this.element.className = "referencestrip"), d = e.extend(!0, { sizeRatio: e.DEFAULT_SETTINGS.referenceStripSizeRatio, position: e.DEFAULT_SETTINGS.referenceStripPosition, scroll: e.DEFAULT_SETTINGS.referenceStripScroll, clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold }, d, { element: this.element }), e.extend(this, d), n[this.id] = { animating: !1 }, this.minPixelRatio = this.viewer.minPixelRatio, this.element.tabIndex = 0, A = this.element.style, A.marginTop = "0px", A.marginRight = "0px", A.marginBottom = "0px", A.marginLeft = "0px", A.left = "0px", A.bottom = "0px", A.border = "0px", A.background = "#000", A.position = "relative", e.setElementTouchActionNone(this.element), e.setElementOpacity(this.element, 0.8), this.viewer = y, this.tracker = new e.MouseTracker({ userData: "ReferenceStrip.tracker", element: this.element, clickHandler: e.delegate(this, r), dragHandler: e.delegate(this, o), scrollHandler: e.delegate(this, s), enterHandler: e.delegate(this, l), leaveHandler: e.delegate(this, u), keyDownHandler: e.delegate(this, c), keyHandler: e.delegate(this, h), preProcessEventHandler: function(E) {
            E.eventType === "wheel" && (E.preventDefault = !0);
          } }), d.width && d.height ? (this.element.style.width = d.width + "px", this.element.style.height = d.height + "px", y.addControl(this.element, { anchor: e.ControlAnchor.BOTTOM_LEFT })) : d.scroll === "horizontal" ? (this.element.style.width = S.x * d.sizeRatio * y.tileSources.length + 12 * y.tileSources.length + "px", this.element.style.height = S.y * d.sizeRatio + "px", y.addControl(this.element, { anchor: e.ControlAnchor.BOTTOM_LEFT })) : (this.element.style.height = S.y * d.sizeRatio * y.tileSources.length + 12 * y.tileSources.length + "px", this.element.style.width = S.x * d.sizeRatio + "px", y.addControl(this.element, { anchor: e.ControlAnchor.TOP_LEFT })), this.panelWidth = S.x * this.sizeRatio + 8, this.panelHeight = S.y * this.sizeRatio + 8, this.panels = [], this.miniViewers = {}, p = 0; p < y.tileSources.length; p++)
            b = e.makeNeutralElement("div"), b.id = this.element.id + "-" + p, b.style.width = m.panelWidth + "px", b.style.height = m.panelHeight + "px", b.style.display = "inline", b.style.float = "left", b.style.cssFloat = "left", b.style.styleFloat = "left", b.style.padding = "2px", e.setElementTouchActionNone(b), e.setElementPointerEventsNone(b), this.element.appendChild(b), b.activePanel = !1, this.panels.push(b);
          a(this, this.scroll === "vertical" ? S.y : S.x, 0), this.setFocus(0);
        }, e.ReferenceStrip.prototype = { setFocus: function(d) {
          var m = this.element.querySelector("#" + this.element.id + "-" + d), y = e.getElementSize(this.viewer.canvas), S = Number(this.element.style.width.replace("px", "")), b = Number(this.element.style.height.replace("px", "")), A = -Number(this.element.style.marginLeft.replace("px", "")), p = -Number(this.element.style.marginTop.replace("px", "")), E;
          this.currentSelected !== m && (this.currentSelected && (this.currentSelected.style.background = "#000"), this.currentSelected = m, this.currentSelected.style.background = "#999", this.scroll === "horizontal" ? (E = Number(d) * (this.panelWidth + 3), E > A + y.x - this.panelWidth ? (E = Math.min(E, S - y.x), this.element.style.marginLeft = -E + "px", a(this, y.x, -E)) : E < A && (E = Math.max(0, E - y.x / 2), this.element.style.marginLeft = -E + "px", a(this, y.x, -E))) : (E = Number(d) * (this.panelHeight + 3), E > p + y.y - this.panelHeight ? (E = Math.min(E, b - y.y), this.element.style.marginTop = -E + "px", a(this, y.y, -E)) : E < p && (E = Math.max(0, E - y.y / 2), this.element.style.marginTop = -E + "px", a(this, y.y, -E))), this.currentPage = d, l.call(this, { eventSource: this.tracker }));
        }, update: function() {
          return n[this.id].animating ? (e.console.log("image reference strip update"), !0) : !1;
        }, destroy: function() {
          if (this.miniViewers)
            for (var d in this.miniViewers)
              this.miniViewers[d].destroy();
          this.tracker.destroy(), this.element && this.viewer.removeControl(this.element);
        } };
        function r(d) {
          if (d.quick) {
            var m;
            this.scroll === "horizontal" ? m = Math.floor(d.position.x / this.panelWidth) : m = Math.floor(d.position.y / this.panelHeight), this.viewer.goToPage(m);
          }
          this.element.focus();
        }
        function o(d) {
          if (this.dragging = !0, this.element) {
            var m = Number(this.element.style.marginLeft.replace("px", "")), y = Number(this.element.style.marginTop.replace("px", "")), S = Number(this.element.style.width.replace("px", "")), b = Number(this.element.style.height.replace("px", "")), A = e.getElementSize(this.viewer.canvas);
            this.scroll === "horizontal" ? -d.delta.x > 0 ? m > -(S - A.x) && (this.element.style.marginLeft = m + d.delta.x * 2 + "px", a(this, A.x, m + d.delta.x * 2)) : -d.delta.x < 0 && m < 0 && (this.element.style.marginLeft = m + d.delta.x * 2 + "px", a(this, A.x, m + d.delta.x * 2)) : -d.delta.y > 0 ? y > -(b - A.y) && (this.element.style.marginTop = y + d.delta.y * 2 + "px", a(this, A.y, y + d.delta.y * 2)) : -d.delta.y < 0 && y < 0 && (this.element.style.marginTop = y + d.delta.y * 2 + "px", a(this, A.y, y + d.delta.y * 2));
          }
        }
        function s(d) {
          if (this.element) {
            var m = Number(this.element.style.marginLeft.replace("px", "")), y = Number(this.element.style.marginTop.replace("px", "")), S = Number(this.element.style.width.replace("px", "")), b = Number(this.element.style.height.replace("px", "")), A = e.getElementSize(this.viewer.canvas);
            this.scroll === "horizontal" ? d.scroll > 0 ? m > -(S - A.x) && (this.element.style.marginLeft = m - d.scroll * 60 + "px", a(this, A.x, m - d.scroll * 60)) : d.scroll < 0 && m < 0 && (this.element.style.marginLeft = m - d.scroll * 60 + "px", a(this, A.x, m - d.scroll * 60)) : d.scroll < 0 ? y > A.y - b && (this.element.style.marginTop = y + d.scroll * 60 + "px", a(this, A.y, y + d.scroll * 60)) : d.scroll > 0 && y < 0 && (this.element.style.marginTop = y + d.scroll * 60 + "px", a(this, A.y, y + d.scroll * 60)), d.preventDefault = !0;
          }
        }
        function a(d, m, y) {
          var S, b, A, p, E, T;
          for (d.scroll === "horizontal" ? S = d.panelWidth : S = d.panelHeight, b = Math.ceil(m / S) + 5, A = Math.ceil((Math.abs(y) + m) / S) + 1, b = A - b, b = b < 0 ? 0 : b, E = b; E < A && E < d.panels.length; E++)
            if (T = d.panels[E], !T.activePanel) {
              var C, O = d.viewer.tileSources[E];
              O.referenceStripThumbnailUrl ? C = { type: "image", url: O.referenceStripThumbnailUrl } : C = O, p = new e.Viewer({ id: T.id, tileSources: [C], element: T, navigatorSizeRatio: d.sizeRatio, showNavigator: !1, mouseNavEnabled: !1, showNavigationControl: !1, showSequenceControl: !1, immediateRender: !0, blendTime: 0, animationTime: 0, loadTilesWithAjax: d.viewer.loadTilesWithAjax, ajaxHeaders: d.viewer.ajaxHeaders, useCanvas: d.useCanvas }), e.setElementPointerEventsNone(p.canvas), e.setElementPointerEventsNone(p.container), p.innerTracker.setTracking(!1), p.outerTracker.setTracking(!1), d.miniViewers[T.id] = p, T.activePanel = !0;
            }
        }
        function l(d) {
          var m = d.eventSource.element;
          this.scroll === "horizontal" ? m.style.marginBottom = "0px" : m.style.marginLeft = "0px";
        }
        function u(d) {
          var m = d.eventSource.element;
          this.scroll === "horizontal" ? m.style.marginBottom = "-" + e.getElementSize(m).y / 2 + "px" : m.style.marginLeft = "-" + e.getElementSize(m).x / 2 + "px";
        }
        function c(d) {
          if (!d.ctrl && !d.alt && !d.meta)
            switch (d.keyCode) {
              case 38:
                s.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), d.preventDefault = !0;
                break;
              case 40:
                s.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), d.preventDefault = !0;
                break;
              case 37:
                s.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), d.preventDefault = !0;
                break;
              case 39:
                s.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), d.preventDefault = !0;
                break;
              default:
                d.preventDefault = !1;
                break;
            }
          else
            d.preventDefault = !1;
        }
        function h(d) {
          if (!d.ctrl && !d.alt && !d.meta)
            switch (d.keyCode) {
              case 61:
                s.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), d.preventDefault = !0;
                break;
              case 45:
                s.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), d.preventDefault = !0;
                break;
              case 48:
              case 119:
              case 87:
                s.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), d.preventDefault = !0;
                break;
              case 115:
              case 83:
                s.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), d.preventDefault = !0;
                break;
              case 97:
                s.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), d.preventDefault = !0;
                break;
              case 100:
                s.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), d.preventDefault = !0;
                break;
              default:
                d.preventDefault = !1;
                break;
            }
          else
            d.preventDefault = !1;
        }
      }(i), function(e) {
        e.DisplayRect = function(n, r, o, s, a, l) {
          e.Rect.apply(this, [n, r, o, s]), this.minLevel = a, this.maxLevel = l;
        }, e.extend(e.DisplayRect.prototype, e.Rect.prototype);
      }(i), function(e) {
        e.Spring = function(r) {
          var o = arguments;
          typeof r != "object" && (r = { initial: o.length && typeof o[0] == "number" ? o[0] : void 0, springStiffness: o.length > 1 ? o[1].springStiffness : 5, animationTime: o.length > 1 ? o[1].animationTime : 1.5 }), e.console.assert(typeof r.springStiffness == "number" && r.springStiffness !== 0, "[OpenSeadragon.Spring] options.springStiffness must be a non-zero number"), e.console.assert(typeof r.animationTime == "number" && r.animationTime >= 0, "[OpenSeadragon.Spring] options.animationTime must be a number greater than or equal to 0"), r.exponential && (this._exponential = !0, delete r.exponential), e.extend(!0, this, r), this.current = { value: typeof this.initial == "number" ? this.initial : this._exponential ? 0 : 1, time: e.now() }, e.console.assert(!this._exponential || this.current.value !== 0, "[OpenSeadragon.Spring] value must be non-zero for exponential springs"), this.start = { value: this.current.value, time: this.current.time }, this.target = { value: this.current.value, time: this.current.time }, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
        }, e.Spring.prototype = { resetTo: function(r) {
          e.console.assert(!this._exponential || r !== 0, "[OpenSeadragon.Spring.resetTo] target must be non-zero for exponential springs"), this.start.value = this.target.value = this.current.value = r, this.start.time = this.target.time = this.current.time = e.now(), this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
        }, springTo: function(r) {
          e.console.assert(!this._exponential || r !== 0, "[OpenSeadragon.Spring.springTo] target must be non-zero for exponential springs"), this.start.value = this.current.value, this.start.time = this.current.time, this.target.value = r, this.target.time = this.start.time + 1e3 * this.animationTime, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value));
        }, shiftBy: function(r) {
          this.start.value += r, this.target.value += r, this._exponential && (e.console.assert(this.target.value !== 0 && this.start.value !== 0, "[OpenSeadragon.Spring.shiftBy] spring value must be non-zero for exponential springs"), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value));
        }, setExponential: function(r) {
          this._exponential = r, this._exponential && (e.console.assert(this.current.value !== 0 && this.target.value !== 0 && this.start.value !== 0, "[OpenSeadragon.Spring.setExponential] spring value must be non-zero for exponential springs"), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
        }, update: function() {
          this.current.time = e.now();
          var r, o;
          this._exponential ? (r = this.start._logValue, o = this.target._logValue) : (r = this.start.value, o = this.target.value);
          var s = this.current.time >= this.target.time ? o : r + (o - r) * n(this.springStiffness, (this.current.time - this.start.time) / (this.target.time - this.start.time)), a = this.current.value;
          return this._exponential ? this.current.value = Math.exp(s) : this.current.value = s, a !== this.current.value;
        }, isAtTargetValue: function() {
          return this.current.value === this.target.value;
        } };
        function n(r, o) {
          return (1 - Math.exp(r * -o)) / (1 - Math.exp(-r));
        }
      }(i), function(e) {
        function n(o) {
          e.extend(!0, this, { timeout: e.DEFAULT_SETTINGS.timeout, jobId: null }, o), this.image = null;
        }
        n.prototype = { errorMsg: null, start: function() {
          var o = this, s = this.abort;
          this.image = new Image(), this.image.onload = function() {
            o.finish(!0);
          }, this.image.onabort = this.image.onerror = function() {
            o.errorMsg = "Image load aborted", o.finish(!1);
          }, this.jobId = window.setTimeout(function() {
            o.errorMsg = "Image load exceeded timeout (" + o.timeout + " ms)", o.finish(!1);
          }, this.timeout), this.loadWithAjax ? (this.request = e.makeAjaxRequest({ url: this.src, withCredentials: this.ajaxWithCredentials, headers: this.ajaxHeaders, responseType: "arraybuffer", success: function(a) {
            var l;
            try {
              l = new window.Blob([a.response]);
            } catch (d) {
              var u = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
              if (d.name === "TypeError" && u) {
                var c = new u();
                c.append(a.response), l = c.getBlob();
              }
            }
            l.size === 0 && (o.errorMsg = "Empty image response.", o.finish(!1));
            var h = (window.URL || window.webkitURL).createObjectURL(l);
            o.image.src = h;
          }, error: function(a) {
            o.errorMsg = "Image load aborted - XHR error", o.finish(!1);
          } }), this.abort = function() {
            o.request.abort(), typeof s == "function" && s();
          }) : (this.crossOriginPolicy !== !1 && (this.image.crossOrigin = this.crossOriginPolicy), this.image.src = this.src);
        }, finish: function(o) {
          this.image.onload = this.image.onerror = this.image.onabort = null, o || (this.image = null), this.jobId && window.clearTimeout(this.jobId), this.callback(this);
        } }, e.ImageLoader = function(o) {
          e.extend(!0, this, { jobLimit: e.DEFAULT_SETTINGS.imageLoaderLimit, timeout: e.DEFAULT_SETTINGS.timeout, jobQueue: [], jobsInProgress: 0 }, o);
        }, e.ImageLoader.prototype = { addJob: function(o) {
          var s = this, a = function(c) {
            r(s, c, o.callback);
          }, l = { src: o.src, loadWithAjax: o.loadWithAjax, ajaxHeaders: o.loadWithAjax ? o.ajaxHeaders : null, crossOriginPolicy: o.crossOriginPolicy, ajaxWithCredentials: o.ajaxWithCredentials, callback: a, abort: o.abort, timeout: this.timeout }, u = new n(l);
          !this.jobLimit || this.jobsInProgress < this.jobLimit ? (u.start(), this.jobsInProgress++) : this.jobQueue.push(u);
        }, clear: function() {
          for (var o = 0; o < this.jobQueue.length; o++) {
            var s = this.jobQueue[o];
            typeof s.abort == "function" && s.abort();
          }
          this.jobQueue = [];
        } };
        function r(o, s, a) {
          var l;
          o.jobsInProgress--, (!o.jobLimit || o.jobsInProgress < o.jobLimit) && o.jobQueue.length > 0 && (l = o.jobQueue.shift(), l.start(), o.jobsInProgress++), a(s.image, s.errorMsg, s.request);
        }
      }(i), function(e) {
        e.Tile = function(n, r, o, s, a, l, u, c, h, d) {
          this.level = n, this.x = r, this.y = o, this.bounds = s, this.sourceBounds = d, this.exists = a, this.url = l, this.context2D = u, this.loadWithAjax = c, this.ajaxHeaders = h, this.ajaxHeaders ? this.cacheKey = this.url + "+" + JSON.stringify(this.ajaxHeaders) : this.cacheKey = this.url, this.loaded = !1, this.loading = !1, this.element = null, this.imgElement = null, this.image = null, this.style = null, this.position = null, this.size = null, this.flipped = !1, this.blendStart = null, this.opacity = null, this.squaredDistance = null, this.visibility = null, this.beingDrawn = !1, this.lastTouchTime = 0, this.isRightMost = !1, this.isBottomMost = !1;
        }, e.Tile.prototype = { toString: function() {
          return this.level + "/" + this.x + "_" + this.y;
        }, _hasTransparencyChannel: function() {
          return !!this.context2D || this.url.match(".png");
        }, drawHTML: function(n) {
          if (!this.cacheImageRecord) {
            e.console.warn("[Tile.drawHTML] attempting to draw tile %s when it's not cached", this.toString());
            return;
          }
          if (!this.loaded) {
            e.console.warn("Attempting to draw tile %s when it's not yet loaded.", this.toString());
            return;
          }
          this.element || (this.element = e.makeNeutralElement("div"), this.imgElement = this.cacheImageRecord.getImage().cloneNode(), this.imgElement.style.msInterpolationMode = "nearest-neighbor", this.imgElement.style.width = "100%", this.imgElement.style.height = "100%", this.style = this.element.style, this.style.position = "absolute"), this.element.parentNode !== n && n.appendChild(this.element), this.imgElement.parentNode !== this.element && this.element.appendChild(this.imgElement), this.style.top = this.position.y + "px", this.style.left = this.position.x + "px", this.style.height = this.size.y + "px", this.style.width = this.size.x + "px", this.flipped && (this.style.transform = "scaleX(-1)"), e.setElementOpacity(this.element, this.opacity);
        }, drawCanvas: function(n, r, o, s) {
          var a = this.position.times(e.pixelDensityRatio), l = this.size.times(e.pixelDensityRatio), u;
          if (!this.context2D && !this.cacheImageRecord) {
            e.console.warn("[Tile.drawCanvas] attempting to draw tile %s when it's not cached", this.toString());
            return;
          }
          if (u = this.context2D || this.cacheImageRecord.getRenderedContext(), !this.loaded || !u) {
            e.console.warn("Attempting to draw tile %s when it's not yet loaded.", this.toString());
            return;
          }
          n.save(), n.globalAlpha = this.opacity, typeof o == "number" && o !== 1 && (a = a.times(o), l = l.times(o)), s instanceof e.Point && (a = a.plus(s)), n.globalAlpha === 1 && this._hasTransparencyChannel() && n.clearRect(a.x, a.y, l.x, l.y), r({ context: n, tile: this, rendered: u });
          var c, h;
          this.sourceBounds ? (c = Math.min(this.sourceBounds.width, u.canvas.width), h = Math.min(this.sourceBounds.height, u.canvas.height)) : (c = u.canvas.width, h = u.canvas.height), n.translate(a.x + l.x / 2, 0), this.flipped && n.scale(-1, 1), n.drawImage(u.canvas, 0, 0, c, h, -l.x / 2, a.y, l.x, l.y), n.restore();
        }, getScaleForEdgeSmoothing: function() {
          var n;
          if (this.cacheImageRecord)
            n = this.cacheImageRecord.getRenderedContext();
          else if (this.context2D)
            n = this.context2D;
          else
            return e.console.warn("[Tile.drawCanvas] attempting to get tile scale %s when tile's not cached", this.toString()), 1;
          return n.canvas.width / (this.size.x * e.pixelDensityRatio);
        }, getTranslationForEdgeSmoothing: function(n, r, o) {
          var s = Math.max(1, Math.ceil((o.x - r.x) / 2)), a = Math.max(1, Math.ceil((o.y - r.y) / 2));
          return new e.Point(s, a).minus(this.position.times(e.pixelDensityRatio).times(n || 1).apply(function(l) {
            return l % 1;
          }));
        }, unload: function() {
          this.imgElement && this.imgElement.parentNode && this.imgElement.parentNode.removeChild(this.imgElement), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.imgElement = null, this.loaded = !1, this.loading = !1;
        } };
      }(i), function(e) {
        e.OverlayPlacement = e.Placement, e.OverlayRotationMode = e.freezeObject({ NO_ROTATION: 1, EXACT: 2, BOUNDING_BOX: 3 }), e.Overlay = function(n, r, o) {
          var s;
          e.isPlainObject(n) ? s = n : s = { element: n, location: r, placement: o }, this.element = s.element, this.style = s.element.style, this._init(s);
        }, e.Overlay.prototype = { _init: function(n) {
          this.location = n.location, this.placement = n.placement === void 0 ? e.Placement.TOP_LEFT : n.placement, this.onDraw = n.onDraw, this.checkResize = n.checkResize === void 0 ? !0 : n.checkResize, this.width = n.width === void 0 ? null : n.width, this.height = n.height === void 0 ? null : n.height, this.rotationMode = n.rotationMode || e.OverlayRotationMode.EXACT, this.location instanceof e.Rect && (this.width = this.location.width, this.height = this.location.height, this.location = this.location.getTopLeft(), this.placement = e.Placement.TOP_LEFT), this.scales = this.width !== null && this.height !== null, this.bounds = new e.Rect(this.location.x, this.location.y, this.width, this.height), this.position = this.location;
        }, adjust: function(n, r) {
          var o = e.Placement.properties[this.placement];
          !o || (o.isHorizontallyCentered ? n.x -= r.x / 2 : o.isRight && (n.x -= r.x), o.isVerticallyCentered ? n.y -= r.y / 2 : o.isBottom && (n.y -= r.y));
        }, destroy: function() {
          var n = this.element, r = this.style;
          n.parentNode && (n.parentNode.removeChild(n), n.prevElementParent && (r.display = "none", document.body.appendChild(n))), this.onDraw = null, r.top = "", r.left = "", r.position = "", this.width !== null && (r.width = ""), this.height !== null && (r.height = "");
          var o = e.getCssPropertyWithVendorPrefix("transformOrigin"), s = e.getCssPropertyWithVendorPrefix("transform");
          o && s && (r[o] = "", r[s] = "");
        }, drawHTML: function(n, r) {
          var o = this.element;
          o.parentNode !== n && (o.prevElementParent = o.parentNode, o.prevNextSibling = o.nextSibling, n.appendChild(o), this.style.position = "absolute", this.size = e.getElementSize(o));
          var s = this._getOverlayPositionAndSize(r), a = s.position, l = this.size = s.size, u = s.rotate;
          if (this.onDraw)
            this.onDraw(a, l, this.element);
          else {
            var c = this.style;
            c.left = a.x + "px", c.top = a.y + "px", this.width !== null && (c.width = l.x + "px"), this.height !== null && (c.height = l.y + "px");
            var h = e.getCssPropertyWithVendorPrefix("transformOrigin"), d = e.getCssPropertyWithVendorPrefix("transform");
            h && d && (u ? (c[h] = this._getTransformOrigin(), c[d] = "rotate(" + u + "deg)") : (c[h] = "", c[d] = "")), c.display = "block";
          }
        }, _getOverlayPositionAndSize: function(n) {
          var r = n.pixelFromPoint(this.location, !0), o = this._getSizeInPixels(n);
          this.adjust(r, o);
          var s = 0;
          if (n.degrees && this.rotationMode !== e.OverlayRotationMode.NO_ROTATION)
            if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX && this.width !== null && this.height !== null) {
              var a = new e.Rect(r.x, r.y, o.x, o.y), l = this._getBoundingBox(a, n.degrees);
              r = l.getTopLeft(), o = l.getSize();
            } else
              s = n.degrees;
          return { position: r, size: o, rotate: s };
        }, _getSizeInPixels: function(n) {
          var r = this.size.x, o = this.size.y;
          if (this.width !== null || this.height !== null) {
            var s = n.deltaPixelsFromPointsNoRotate(new e.Point(this.width || 0, this.height || 0), !0);
            this.width !== null && (r = s.x), this.height !== null && (o = s.y);
          }
          if (this.checkResize && (this.width === null || this.height === null)) {
            var a = this.size = e.getElementSize(this.element);
            this.width === null && (r = a.x), this.height === null && (o = a.y);
          }
          return new e.Point(r, o);
        }, _getBoundingBox: function(n, r) {
          var o = this._getPlacementPoint(n);
          return n.rotate(r, o).getBoundingBox();
        }, _getPlacementPoint: function(n) {
          var r = new e.Point(n.x, n.y), o = e.Placement.properties[this.placement];
          return o && (o.isHorizontallyCentered ? r.x += n.width / 2 : o.isRight && (r.x += n.width), o.isVerticallyCentered ? r.y += n.height / 2 : o.isBottom && (r.y += n.height)), r;
        }, _getTransformOrigin: function() {
          var n = "", r = e.Placement.properties[this.placement];
          return r && (r.isLeft ? n = "left" : r.isRight && (n = "right"), r.isTop ? n += " top" : r.isBottom && (n += " bottom")), n;
        }, update: function(n, r) {
          var o = e.isPlainObject(n) ? n : { location: n, placement: r };
          this._init({ location: o.location || this.location, placement: o.placement !== void 0 ? o.placement : this.placement, onDraw: o.onDraw || this.onDraw, checkResize: o.checkResize || this.checkResize, width: o.width !== void 0 ? o.width : this.width, height: o.height !== void 0 ? o.height : this.height, rotationMode: o.rotationMode || this.rotationMode });
        }, getBounds: function(n) {
          e.console.assert(n, "A viewport must now be passed to Overlay.getBounds.");
          var r = this.width, o = this.height;
          if (r === null || o === null) {
            var s = n.deltaPointsFromPixelsNoRotate(this.size, !0);
            r === null && (r = s.x), o === null && (o = s.y);
          }
          var a = this.location.clone();
          return this.adjust(a, new e.Point(r, o)), this._adjustBoundsForRotation(n, new e.Rect(a.x, a.y, r, o));
        }, _adjustBoundsForRotation: function(n, r) {
          if (!n || n.degrees === 0 || this.rotationMode === e.OverlayRotationMode.EXACT)
            return r;
          if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX) {
            if (this.width === null || this.height === null)
              return r;
            var o = this._getOverlayPositionAndSize(n);
            return n.viewerElementToViewportRectangle(new e.Rect(o.position.x, o.position.y, o.size.x, o.size.y));
          }
          return r.rotate(-n.degrees, this._getPlacementPoint(r));
        } };
      }(i), function(e) {
        e.Drawer = function(n) {
          e.console.assert(n.viewer, "[Drawer] options.viewer is required");
          var r = arguments;
          if (e.isPlainObject(n) || (n = { source: r[0], viewport: r[1], element: r[2] }), e.console.assert(n.viewport, "[Drawer] options.viewport is required"), e.console.assert(n.element, "[Drawer] options.element is required"), n.source && e.console.error("[Drawer] options.source is no longer accepted; use TiledImage instead"), this.viewer = n.viewer, this.viewport = n.viewport, this.debugGridColor = typeof n.debugGridColor == "string" ? [n.debugGridColor] : n.debugGridColor || e.DEFAULT_SETTINGS.debugGridColor, n.opacity && e.console.error("[Drawer] options.opacity is no longer accepted; set the opacity on the TiledImage instead"), this.useCanvas = e.supportsCanvas && (this.viewer ? this.viewer.useCanvas : !0), this.container = e.getElement(n.element), this.canvas = e.makeNeutralElement(this.useCanvas ? "canvas" : "div"), this.context = this.useCanvas ? this.canvas.getContext("2d") : null, this.sketchCanvas = null, this.sketchContext = null, this.element = this.container, this.container.dir = "ltr", this.useCanvas) {
            var o = this._calculateCanvasSize();
            this.canvas.width = o.x, this.canvas.height = o.y;
          }
          this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.position = "absolute", e.setElementOpacity(this.canvas, this.opacity, !0), e.setElementPointerEventsNone(this.canvas), e.setElementTouchActionNone(this.canvas), this.container.style.textAlign = "left", this.container.appendChild(this.canvas), this._imageSmoothingEnabled = !0;
        }, e.Drawer.prototype = { addOverlay: function(n, r, o, s) {
          return e.console.error("drawer.addOverlay is deprecated. Use viewer.addOverlay instead."), this.viewer.addOverlay(n, r, o, s), this;
        }, updateOverlay: function(n, r, o) {
          return e.console.error("drawer.updateOverlay is deprecated. Use viewer.updateOverlay instead."), this.viewer.updateOverlay(n, r, o), this;
        }, removeOverlay: function(n) {
          return e.console.error("drawer.removeOverlay is deprecated. Use viewer.removeOverlay instead."), this.viewer.removeOverlay(n), this;
        }, clearOverlays: function() {
          return e.console.error("drawer.clearOverlays is deprecated. Use viewer.clearOverlays instead."), this.viewer.clearOverlays(), this;
        }, viewportCoordToDrawerCoord: function(n) {
          var r = this.viewport.pixelFromPointNoRotate(n, !0);
          return new e.Point(r.x * e.pixelDensityRatio, r.y * e.pixelDensityRatio);
        }, clipWithPolygons: function(n, r) {
          if (this.useCanvas) {
            var o = this._getContext(r);
            o.beginPath(), n.forEach(function(s) {
              s.forEach(function(a, l) {
                o[l === 0 ? "moveTo" : "lineTo"](a.x, a.y);
              });
            }), o.clip();
          }
        }, setOpacity: function(n) {
          e.console.error("drawer.setOpacity is deprecated. Use tiledImage.setOpacity instead.");
          for (var r = this.viewer.world, o = 0; o < r.getItemCount(); o++)
            r.getItemAt(o).setOpacity(n);
          return this;
        }, getOpacity: function() {
          e.console.error("drawer.getOpacity is deprecated. Use tiledImage.getOpacity instead.");
          for (var n = this.viewer.world, r = 0, o = 0; o < n.getItemCount(); o++) {
            var s = n.getItemAt(o).getOpacity();
            s > r && (r = s);
          }
          return r;
        }, needsUpdate: function() {
          return e.console.error("[Drawer.needsUpdate] this function is deprecated. Use World.needsDraw instead."), this.viewer.world.needsDraw();
        }, numTilesLoaded: function() {
          return e.console.error("[Drawer.numTilesLoaded] this function is deprecated. Use TileCache.numTilesLoaded instead."), this.viewer.tileCache.numTilesLoaded();
        }, reset: function() {
          return e.console.error("[Drawer.reset] this function is deprecated. Use World.resetItems instead."), this.viewer.world.resetItems(), this;
        }, update: function() {
          return e.console.error("[Drawer.update] this function is deprecated. Use Drawer.clear and World.draw instead."), this.clear(), this.viewer.world.draw(), this;
        }, canRotate: function() {
          return this.useCanvas;
        }, destroy: function() {
          this.canvas.width = 1, this.canvas.height = 1, this.sketchCanvas = null, this.sketchContext = null;
        }, clear: function() {
          if (this.canvas.innerHTML = "", this.useCanvas) {
            var n = this._calculateCanvasSize();
            if ((this.canvas.width !== n.x || this.canvas.height !== n.y) && (this.canvas.width = n.x, this.canvas.height = n.y, this._updateImageSmoothingEnabled(this.context), this.sketchCanvas !== null)) {
              var r = this._calculateSketchCanvasSize();
              this.sketchCanvas.width = r.x, this.sketchCanvas.height = r.y, this._updateImageSmoothingEnabled(this.sketchContext);
            }
            this._clear();
          }
        }, _clear: function(n, r) {
          if (this.useCanvas) {
            var o = this._getContext(n);
            if (r)
              o.clearRect(r.x, r.y, r.width, r.height);
            else {
              var s = o.canvas;
              o.clearRect(0, 0, s.width, s.height);
            }
          }
        }, viewportToDrawerRectangle: function(n) {
          var r = this.viewport.pixelFromPointNoRotate(n.getTopLeft(), !0), o = this.viewport.deltaPixelsFromPointsNoRotate(n.getSize(), !0);
          return new e.Rect(r.x * e.pixelDensityRatio, r.y * e.pixelDensityRatio, o.x * e.pixelDensityRatio, o.y * e.pixelDensityRatio);
        }, drawTile: function(n, r, o, s, a) {
          if (e.console.assert(n, "[Drawer.drawTile] tile is required"), e.console.assert(r, "[Drawer.drawTile] drawingHandler is required"), this.useCanvas) {
            var l = this._getContext(o);
            s = s || 1, n.drawCanvas(l, r, s, a);
          } else
            n.drawHTML(this.canvas);
        }, _getContext: function(n) {
          var r = this.context;
          if (n) {
            if (this.sketchCanvas === null) {
              this.sketchCanvas = document.createElement("canvas");
              var o = this._calculateSketchCanvasSize();
              if (this.sketchCanvas.width = o.x, this.sketchCanvas.height = o.y, this.sketchContext = this.sketchCanvas.getContext("2d"), this.viewport.getRotation() === 0) {
                var s = this;
                this.viewer.addHandler("rotate", function a() {
                  if (s.viewport.getRotation() !== 0) {
                    s.viewer.removeHandler("rotate", a);
                    var l = s._calculateSketchCanvasSize();
                    s.sketchCanvas.width = l.x, s.sketchCanvas.height = l.y;
                  }
                });
              }
              this._updateImageSmoothingEnabled(this.sketchContext);
            }
            r = this.sketchContext;
          }
          return r;
        }, saveContext: function(n) {
          !this.useCanvas || this._getContext(n).save();
        }, restoreContext: function(n) {
          !this.useCanvas || this._getContext(n).restore();
        }, setClip: function(n, r) {
          if (this.useCanvas) {
            var o = this._getContext(r);
            o.beginPath(), o.rect(n.x, n.y, n.width, n.height), o.clip();
          }
        }, drawRectangle: function(n, r, o) {
          if (this.useCanvas) {
            var s = this._getContext(o);
            s.save(), s.fillStyle = r, s.fillRect(n.x, n.y, n.width, n.height), s.restore();
          }
        }, blendSketch: function(n, r, o, s) {
          var a = n;
          if (e.isPlainObject(a) || (a = { opacity: n, scale: r, translate: o, compositeOperation: s }), !(!this.useCanvas || !this.sketchCanvas)) {
            n = a.opacity, s = a.compositeOperation;
            var l = a.bounds;
            if (this.context.save(), this.context.globalAlpha = n, s && (this.context.globalCompositeOperation = s), l)
              l.x < 0 && (l.width += l.x, l.x = 0), l.x + l.width > this.canvas.width && (l.width = this.canvas.width - l.x), l.y < 0 && (l.height += l.y, l.y = 0), l.y + l.height > this.canvas.height && (l.height = this.canvas.height - l.y), this.context.drawImage(this.sketchCanvas, l.x, l.y, l.width, l.height, l.x, l.y, l.width, l.height);
            else {
              r = a.scale || 1, o = a.translate;
              var u = o instanceof e.Point ? o : new e.Point(0, 0), c = 0, h = 0;
              if (o) {
                var d = this.sketchCanvas.width - this.canvas.width, m = this.sketchCanvas.height - this.canvas.height;
                c = Math.round(d / 2), h = Math.round(m / 2);
              }
              this.context.drawImage(this.sketchCanvas, u.x - c * r, u.y - h * r, (this.canvas.width + 2 * c) * r, (this.canvas.height + 2 * h) * r, -c, -h, this.canvas.width + 2 * c, this.canvas.height + 2 * h);
            }
            this.context.restore();
          }
        }, drawDebugInfo: function(n, r, o, s) {
          if (this.useCanvas) {
            var a = this.viewer.world.getIndexOfItem(s) % this.debugGridColor.length, l = this.context;
            l.save(), l.lineWidth = 2 * e.pixelDensityRatio, l.font = "small-caps bold " + 13 * e.pixelDensityRatio + "px arial", l.strokeStyle = this.debugGridColor[a], l.fillStyle = this.debugGridColor[a], this.viewport.degrees !== 0 && this._offsetForRotation({ degrees: this.viewport.degrees }), s.getRotation(!0) % 360 !== 0 && this._offsetForRotation({ degrees: s.getRotation(!0), point: s.viewport.pixelFromPointNoRotate(s._getRotationPoint(!0), !0) }), s.viewport.degrees === 0 && s.getRotation(!0) % 360 === 0 && s._drawer.viewer.viewport.getFlip() && s._drawer._flip(), l.strokeRect(n.position.x * e.pixelDensityRatio, n.position.y * e.pixelDensityRatio, n.size.x * e.pixelDensityRatio, n.size.y * e.pixelDensityRatio);
            var u = (n.position.x + n.size.x / 2) * e.pixelDensityRatio, c = (n.position.y + n.size.y / 2) * e.pixelDensityRatio;
            l.translate(u, c), l.rotate(Math.PI / 180 * -this.viewport.degrees), l.translate(-u, -c), n.x === 0 && n.y === 0 && (l.fillText("Zoom: " + this.viewport.getZoom(), n.position.x * e.pixelDensityRatio, (n.position.y - 30) * e.pixelDensityRatio), l.fillText("Pan: " + this.viewport.getBounds().toString(), n.position.x * e.pixelDensityRatio, (n.position.y - 20) * e.pixelDensityRatio)), l.fillText("Level: " + n.level, (n.position.x + 10) * e.pixelDensityRatio, (n.position.y + 20) * e.pixelDensityRatio), l.fillText("Column: " + n.x, (n.position.x + 10) * e.pixelDensityRatio, (n.position.y + 30) * e.pixelDensityRatio), l.fillText("Row: " + n.y, (n.position.x + 10) * e.pixelDensityRatio, (n.position.y + 40) * e.pixelDensityRatio), l.fillText("Order: " + o + " of " + r, (n.position.x + 10) * e.pixelDensityRatio, (n.position.y + 50) * e.pixelDensityRatio), l.fillText("Size: " + n.size.toString(), (n.position.x + 10) * e.pixelDensityRatio, (n.position.y + 60) * e.pixelDensityRatio), l.fillText("Position: " + n.position.toString(), (n.position.x + 10) * e.pixelDensityRatio, (n.position.y + 70) * e.pixelDensityRatio), this.viewport.degrees !== 0 && this._restoreRotationChanges(), s.getRotation(!0) % 360 !== 0 && this._restoreRotationChanges(), s.viewport.degrees === 0 && s.getRotation(!0) % 360 === 0 && s._drawer.viewer.viewport.getFlip() && s._drawer._flip(), l.restore();
          }
        }, debugRect: function(n) {
          if (this.useCanvas) {
            var r = this.context;
            r.save(), r.lineWidth = 2 * e.pixelDensityRatio, r.strokeStyle = this.debugGridColor[0], r.fillStyle = this.debugGridColor[0], r.strokeRect(n.x * e.pixelDensityRatio, n.y * e.pixelDensityRatio, n.width * e.pixelDensityRatio, n.height * e.pixelDensityRatio), r.restore();
          }
        }, setImageSmoothingEnabled: function(n) {
          this.useCanvas && (this._imageSmoothingEnabled = n, this._updateImageSmoothingEnabled(this.context), this.viewer.forceRedraw());
        }, _updateImageSmoothingEnabled: function(n) {
          n.msImageSmoothingEnabled = this._imageSmoothingEnabled, n.imageSmoothingEnabled = this._imageSmoothingEnabled;
        }, getCanvasSize: function(n) {
          var r = this._getContext(n).canvas;
          return new e.Point(r.width, r.height);
        }, getCanvasCenter: function() {
          return new e.Point(this.canvas.width / 2, this.canvas.height / 2);
        }, _offsetForRotation: function(n) {
          var r = n.point ? n.point.times(e.pixelDensityRatio) : this.getCanvasCenter(), o = this._getContext(n.useSketch);
          o.save(), o.translate(r.x, r.y), this.viewer.viewport.flipped ? (o.rotate(Math.PI / 180 * -n.degrees), o.scale(-1, 1)) : o.rotate(Math.PI / 180 * n.degrees), o.translate(-r.x, -r.y);
        }, _flip: function(n) {
          n = n || {};
          var r = n.point ? n.point.times(e.pixelDensityRatio) : this.getCanvasCenter(), o = this._getContext(n.useSketch);
          o.translate(r.x, 0), o.scale(-1, 1), o.translate(-r.x, 0);
        }, _restoreRotationChanges: function(n) {
          var r = this._getContext(n);
          r.restore();
        }, _calculateCanvasSize: function() {
          var n = e.pixelDensityRatio, r = this.viewport.getContainerSize();
          return { x: Math.round(r.x * n), y: Math.round(r.y * n) };
        }, _calculateSketchCanvasSize: function() {
          var n = this._calculateCanvasSize();
          if (this.viewport.getRotation() === 0)
            return n;
          var r = Math.ceil(Math.sqrt(n.x * n.x + n.y * n.y));
          return { x: r, y: r };
        } };
      }(i), function(e) {
        e.Viewport = function(n) {
          var r = arguments;
          r.length && r[0] instanceof e.Point && (n = { containerSize: r[0], contentSize: r[1], config: r[2] }), n.config && (e.extend(!0, n, n.config), delete n.config), this._margins = e.extend({ left: 0, top: 0, right: 0, bottom: 0 }, n.margins || {}), delete n.margins, e.extend(!0, this, { containerSize: null, contentSize: null, zoomPoint: null, viewer: null, springStiffness: e.DEFAULT_SETTINGS.springStiffness, animationTime: e.DEFAULT_SETTINGS.animationTime, minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio, maxZoomPixelRatio: e.DEFAULT_SETTINGS.maxZoomPixelRatio, visibilityRatio: e.DEFAULT_SETTINGS.visibilityRatio, wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal, wrapVertical: e.DEFAULT_SETTINGS.wrapVertical, defaultZoomLevel: e.DEFAULT_SETTINGS.defaultZoomLevel, minZoomLevel: e.DEFAULT_SETTINGS.minZoomLevel, maxZoomLevel: e.DEFAULT_SETTINGS.maxZoomLevel, degrees: e.DEFAULT_SETTINGS.degrees, flipped: e.DEFAULT_SETTINGS.flipped, homeFillsViewer: e.DEFAULT_SETTINGS.homeFillsViewer }, n), this._updateContainerInnerSize(), this.centerSpringX = new e.Spring({ initial: 0, springStiffness: this.springStiffness, animationTime: this.animationTime }), this.centerSpringY = new e.Spring({ initial: 0, springStiffness: this.springStiffness, animationTime: this.animationTime }), this.zoomSpring = new e.Spring({ exponential: !0, initial: 1, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, this._setContentBounds(new e.Rect(0, 0, 1, 1), 1), this.goHome(!0), this.update();
        }, e.Viewport.prototype = { resetContentSize: function(n) {
          return e.console.assert(n, "[Viewport.resetContentSize] contentSize is required"), e.console.assert(n instanceof e.Point, "[Viewport.resetContentSize] contentSize must be an OpenSeadragon.Point"), e.console.assert(n.x > 0, "[Viewport.resetContentSize] contentSize.x must be greater than 0"), e.console.assert(n.y > 0, "[Viewport.resetContentSize] contentSize.y must be greater than 0"), this._setContentBounds(new e.Rect(0, 0, 1, n.y / n.x), n.x), this;
        }, setHomeBounds: function(n, r) {
          e.console.error("[Viewport.setHomeBounds] this function is deprecated; The content bounds should not be set manually."), this._setContentBounds(n, r);
        }, _setContentBounds: function(n, r) {
          e.console.assert(n, "[Viewport._setContentBounds] bounds is required"), e.console.assert(n instanceof e.Rect, "[Viewport._setContentBounds] bounds must be an OpenSeadragon.Rect"), e.console.assert(n.width > 0, "[Viewport._setContentBounds] bounds.width must be greater than 0"), e.console.assert(n.height > 0, "[Viewport._setContentBounds] bounds.height must be greater than 0"), this._contentBoundsNoRotate = n.clone(), this._contentSizeNoRotate = this._contentBoundsNoRotate.getSize().times(r), this._contentBounds = n.rotate(this.degrees).getBoundingBox(), this._contentSize = this._contentBounds.getSize().times(r), this._contentAspectRatio = this._contentSize.x / this._contentSize.y, this.viewer && this.viewer.raiseEvent("reset-size", { contentSize: this._contentSizeNoRotate.clone(), contentFactor: r, homeBounds: this._contentBoundsNoRotate.clone(), contentBounds: this._contentBounds.clone() });
        }, getHomeZoom: function() {
          if (this.defaultZoomLevel)
            return this.defaultZoomLevel;
          var n = this._contentAspectRatio / this.getAspectRatio(), r;
          return this.homeFillsViewer ? r = n >= 1 ? n : 1 : r = n >= 1 ? 1 : n, r / this._contentBounds.width;
        }, getHomeBounds: function() {
          return this.getHomeBoundsNoRotate().rotate(-this.getRotation());
        }, getHomeBoundsNoRotate: function() {
          var n = this._contentBounds.getCenter(), r = 1 / this.getHomeZoom(), o = r / this.getAspectRatio();
          return new e.Rect(n.x - r / 2, n.y - o / 2, r, o);
        }, goHome: function(n) {
          return this.viewer && this.viewer.raiseEvent("home", { immediately: n }), this.fitBounds(this.getHomeBounds(), n);
        }, getMinZoom: function() {
          var n = this.getHomeZoom(), r = this.minZoomLevel ? this.minZoomLevel : this.minZoomImageRatio * n;
          return r;
        }, getMaxZoom: function() {
          var n = this.maxZoomLevel;
          return n || (n = this._contentSize.x * this.maxZoomPixelRatio / this._containerInnerSize.x, n /= this._contentBounds.width), Math.max(n, this.getHomeZoom());
        }, getAspectRatio: function() {
          return this._containerInnerSize.x / this._containerInnerSize.y;
        }, getContainerSize: function() {
          return new e.Point(this.containerSize.x, this.containerSize.y);
        }, getMargins: function() {
          return e.extend({}, this._margins);
        }, setMargins: function(n) {
          e.console.assert(e.type(n) === "object", "[Viewport.setMargins] margins must be an object"), this._margins = e.extend({ left: 0, top: 0, right: 0, bottom: 0 }, n), this._updateContainerInnerSize(), this.viewer && this.viewer.forceRedraw();
        }, getBounds: function(n) {
          return this.getBoundsNoRotate(n).rotate(-this.getRotation());
        }, getBoundsNoRotate: function(n) {
          var r = this.getCenter(n), o = 1 / this.getZoom(n), s = o / this.getAspectRatio();
          return new e.Rect(r.x - o / 2, r.y - s / 2, o, s);
        }, getBoundsWithMargins: function(n) {
          return this.getBoundsNoRotateWithMargins(n).rotate(-this.getRotation(), this.getCenter(n));
        }, getBoundsNoRotateWithMargins: function(n) {
          var r = this.getBoundsNoRotate(n), o = this._containerInnerSize.x * this.getZoom(n);
          return r.x -= this._margins.left / o, r.y -= this._margins.top / o, r.width += (this._margins.left + this._margins.right) / o, r.height += (this._margins.top + this._margins.bottom) / o, r;
        }, getCenter: function(n) {
          var r = new e.Point(this.centerSpringX.current.value, this.centerSpringY.current.value), o = new e.Point(this.centerSpringX.target.value, this.centerSpringY.target.value), s, a, l, u, c, h, d, m;
          return n ? r : this.zoomPoint ? (s = this.pixelFromPoint(this.zoomPoint, !0), a = this.getZoom(), l = 1 / a, u = l / this.getAspectRatio(), c = new e.Rect(r.x - l / 2, r.y - u / 2, l, u), h = this._pixelFromPoint(this.zoomPoint, c), d = h.minus(s), m = d.divide(this._containerInnerSize.x * a), o.plus(m)) : o;
        }, getZoom: function(n) {
          return n ? this.zoomSpring.current.value : this.zoomSpring.target.value;
        }, _applyZoomConstraints: function(n) {
          return Math.max(Math.min(n, this.getMaxZoom()), this.getMinZoom());
        }, _applyBoundaryConstraints: function(n) {
          var r = new e.Rect(n.x, n.y, n.width, n.height);
          if (!this.wrapHorizontal) {
            var o = this.visibilityRatio * r.width, s = r.x + r.width, a = this._contentBoundsNoRotate.x + this._contentBoundsNoRotate.width, l = this._contentBoundsNoRotate.x - s + o, u = a - r.x - o;
            o > this._contentBoundsNoRotate.width ? r.x += (l + u) / 2 : u < 0 ? r.x += u : l > 0 && (r.x += l);
          }
          if (!this.wrapVertical) {
            var c = this.visibilityRatio * r.height, h = r.y + r.height, d = this._contentBoundsNoRotate.y + this._contentBoundsNoRotate.height, m = this._contentBoundsNoRotate.y - h + c, y = d - r.y - c;
            c > this._contentBoundsNoRotate.height ? r.y += (m + y) / 2 : y < 0 ? r.y += y : m > 0 && (r.y += m);
          }
          return r;
        }, _raiseConstraintsEvent: function(n) {
          this.viewer && this.viewer.raiseEvent("constrain", { immediately: n });
        }, applyConstraints: function(n) {
          var r = this.getZoom(), o = this._applyZoomConstraints(r);
          r !== o && this.zoomTo(o, this.zoomPoint, n);
          var s = this.getBoundsNoRotate(), a = this._applyBoundaryConstraints(s);
          return this._raiseConstraintsEvent(n), (s.x !== a.x || s.y !== a.y || n) && this.fitBounds(a.rotate(-this.getRotation()), n), this;
        }, ensureVisible: function(n) {
          return this.applyConstraints(n);
        }, _fitBounds: function(n, r) {
          r = r || {};
          var o = r.immediately || !1, s = r.constraints || !1, a = this.getAspectRatio(), l = n.getCenter(), u = new e.Rect(n.x, n.y, n.width, n.height, n.degrees + this.getRotation()).getBoundingBox();
          u.getAspectRatio() >= a ? u.height = u.width / a : u.width = u.height * a, u.x = l.x - u.width / 2, u.y = l.y - u.height / 2;
          var c = 1 / u.width;
          if (s) {
            var h = u.getAspectRatio(), d = this._applyZoomConstraints(c);
            c !== d && (c = d, u.width = 1 / c, u.x = l.x - u.width / 2, u.height = u.width / h, u.y = l.y - u.height / 2), u = this._applyBoundaryConstraints(u), l = u.getCenter(), this._raiseConstraintsEvent(o);
          }
          if (o)
            return this.panTo(l, !0), this.zoomTo(c, null, !0);
          this.panTo(this.getCenter(!0), !0), this.zoomTo(this.getZoom(!0), null, !0);
          var m = this.getBounds(), y = this.getZoom();
          if (y === 0 || Math.abs(c / y - 1) < 1e-8)
            return this.zoomTo(c, !0), this.panTo(l, o);
          u = u.rotate(-this.getRotation());
          var S = u.getTopLeft().times(c).minus(m.getTopLeft().times(y)).divide(c - y);
          return this.zoomTo(c, S, o);
        }, fitBounds: function(n, r) {
          return this._fitBounds(n, { immediately: r, constraints: !1 });
        }, fitBoundsWithConstraints: function(n, r) {
          return this._fitBounds(n, { immediately: r, constraints: !0 });
        }, fitVertically: function(n) {
          var r = new e.Rect(this._contentBounds.x + this._contentBounds.width / 2, this._contentBounds.y, 0, this._contentBounds.height);
          return this.fitBounds(r, n);
        }, fitHorizontally: function(n) {
          var r = new e.Rect(this._contentBounds.x, this._contentBounds.y + this._contentBounds.height / 2, this._contentBounds.width, 0);
          return this.fitBounds(r, n);
        }, getConstrainedBounds: function(n) {
          var r, o;
          return r = this.getBounds(n), o = this._applyBoundaryConstraints(r), o;
        }, panBy: function(n, r) {
          var o = new e.Point(this.centerSpringX.target.value, this.centerSpringY.target.value);
          return this.panTo(o.plus(n), r);
        }, panTo: function(n, r) {
          return r ? (this.centerSpringX.resetTo(n.x), this.centerSpringY.resetTo(n.y)) : (this.centerSpringX.springTo(n.x), this.centerSpringY.springTo(n.y)), this.viewer && this.viewer.raiseEvent("pan", { center: n, immediately: r }), this;
        }, zoomBy: function(n, r, o) {
          return this.zoomTo(this.zoomSpring.target.value * n, r, o);
        }, zoomTo: function(n, r, o) {
          var s = this;
          return this.zoomPoint = r instanceof e.Point && !isNaN(r.x) && !isNaN(r.y) ? r : null, o ? this._adjustCenterSpringsForZoomPoint(function() {
            s.zoomSpring.resetTo(n);
          }) : this.zoomSpring.springTo(n), this.viewer && this.viewer.raiseEvent("zoom", { zoom: n, refPoint: r, immediately: o }), this;
        }, setRotation: function(n) {
          return !this.viewer || !this.viewer.drawer.canRotate() ? this : (this.degrees = e.positiveModulo(n, 360), this._setContentBounds(this.viewer.world.getHomeBounds(), this.viewer.world.getContentFactor()), this.viewer.forceRedraw(), this.viewer.raiseEvent("rotate", { degrees: n }), this);
        }, getRotation: function() {
          return this.degrees;
        }, resize: function(n, r) {
          var o = this.getBoundsNoRotate(), s = o, a;
          return this.containerSize.x = n.x, this.containerSize.y = n.y, this._updateContainerInnerSize(), r && (a = n.x / this.containerSize.x, s.width = o.width * a, s.height = s.width / this.getAspectRatio()), this.viewer && this.viewer.raiseEvent("resize", { newContainerSize: n, maintain: r }), this.fitBounds(s, !0);
        }, _updateContainerInnerSize: function() {
          this._containerInnerSize = new e.Point(Math.max(1, this.containerSize.x - (this._margins.left + this._margins.right)), Math.max(1, this.containerSize.y - (this._margins.top + this._margins.bottom)));
        }, update: function() {
          var n = this;
          this._adjustCenterSpringsForZoomPoint(function() {
            n.zoomSpring.update();
          }), this.centerSpringX.update(), this.centerSpringY.update();
          var r = this.centerSpringX.current.value !== this._oldCenterX || this.centerSpringY.current.value !== this._oldCenterY || this.zoomSpring.current.value !== this._oldZoom;
          return this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, r;
        }, _adjustCenterSpringsForZoomPoint: function(n) {
          if (this.zoomPoint) {
            var r = this.pixelFromPoint(this.zoomPoint, !0);
            n();
            var o = this.pixelFromPoint(this.zoomPoint, !0), s = o.minus(r), a = this.deltaPointsFromPixels(s, !0);
            this.centerSpringX.shiftBy(a.x), this.centerSpringY.shiftBy(a.y), this.zoomSpring.isAtTargetValue() && (this.zoomPoint = null);
          } else
            n();
        }, deltaPixelsFromPointsNoRotate: function(n, r) {
          return n.times(this._containerInnerSize.x * this.getZoom(r));
        }, deltaPixelsFromPoints: function(n, r) {
          return this.deltaPixelsFromPointsNoRotate(n.rotate(this.getRotation()), r);
        }, deltaPointsFromPixelsNoRotate: function(n, r) {
          return n.divide(this._containerInnerSize.x * this.getZoom(r));
        }, deltaPointsFromPixels: function(n, r) {
          return this.deltaPointsFromPixelsNoRotate(n, r).rotate(-this.getRotation());
        }, pixelFromPointNoRotate: function(n, r) {
          return this._pixelFromPointNoRotate(n, this.getBoundsNoRotate(r));
        }, pixelFromPoint: function(n, r) {
          return this._pixelFromPoint(n, this.getBoundsNoRotate(r));
        }, _pixelFromPointNoRotate: function(n, r) {
          return n.minus(r.getTopLeft()).times(this._containerInnerSize.x / r.width).plus(new e.Point(this._margins.left, this._margins.top));
        }, _pixelFromPoint: function(n, r) {
          return this._pixelFromPointNoRotate(n.rotate(this.getRotation(), this.getCenter(!0)), r);
        }, pointFromPixelNoRotate: function(n, r) {
          var o = this.getBoundsNoRotate(r);
          return n.minus(new e.Point(this._margins.left, this._margins.top)).divide(this._containerInnerSize.x / o.width).plus(o.getTopLeft());
        }, pointFromPixel: function(n, r) {
          return this.pointFromPixelNoRotate(n, r).rotate(-this.getRotation(), this.getCenter(!0));
        }, _viewportToImageDelta: function(n, r) {
          var o = this._contentBoundsNoRotate.width;
          return new e.Point(n * this._contentSizeNoRotate.x / o, r * this._contentSizeNoRotate.x / o);
        }, viewportToImageCoordinates: function(n, r) {
          if (n instanceof e.Point)
            return this.viewportToImageCoordinates(n.x, n.y);
          if (this.viewer) {
            var o = this.viewer.world.getItemCount();
            if (o > 1)
              e.console.error("[Viewport.viewportToImageCoordinates] is not accurate with multi-image; use TiledImage.viewportToImageCoordinates instead.");
            else if (o === 1) {
              var s = this.viewer.world.getItemAt(0);
              return s.viewportToImageCoordinates(n, r, !0);
            }
          }
          return this._viewportToImageDelta(n - this._contentBoundsNoRotate.x, r - this._contentBoundsNoRotate.y);
        }, _imageToViewportDelta: function(n, r) {
          var o = this._contentBoundsNoRotate.width;
          return new e.Point(n / this._contentSizeNoRotate.x * o, r / this._contentSizeNoRotate.x * o);
        }, imageToViewportCoordinates: function(n, r) {
          if (n instanceof e.Point)
            return this.imageToViewportCoordinates(n.x, n.y);
          if (this.viewer) {
            var o = this.viewer.world.getItemCount();
            if (o > 1)
              e.console.error("[Viewport.imageToViewportCoordinates] is not accurate with multi-image; use TiledImage.imageToViewportCoordinates instead.");
            else if (o === 1) {
              var s = this.viewer.world.getItemAt(0);
              return s.imageToViewportCoordinates(n, r, !0);
            }
          }
          var a = this._imageToViewportDelta(n, r);
          return a.x += this._contentBoundsNoRotate.x, a.y += this._contentBoundsNoRotate.y, a;
        }, imageToViewportRectangle: function(n, r, o, s) {
          var a = n;
          if (a instanceof e.Rect || (a = new e.Rect(n, r, o, s)), this.viewer) {
            var l = this.viewer.world.getItemCount();
            if (l > 1)
              e.console.error("[Viewport.imageToViewportRectangle] is not accurate with multi-image; use TiledImage.imageToViewportRectangle instead.");
            else if (l === 1) {
              var u = this.viewer.world.getItemAt(0);
              return u.imageToViewportRectangle(n, r, o, s, !0);
            }
          }
          var c = this.imageToViewportCoordinates(a.x, a.y), h = this._imageToViewportDelta(a.width, a.height);
          return new e.Rect(c.x, c.y, h.x, h.y, a.degrees);
        }, viewportToImageRectangle: function(n, r, o, s) {
          var a = n;
          if (a instanceof e.Rect || (a = new e.Rect(n, r, o, s)), this.viewer) {
            var l = this.viewer.world.getItemCount();
            if (l > 1)
              e.console.error("[Viewport.viewportToImageRectangle] is not accurate with multi-image; use TiledImage.viewportToImageRectangle instead.");
            else if (l === 1) {
              var u = this.viewer.world.getItemAt(0);
              return u.viewportToImageRectangle(n, r, o, s, !0);
            }
          }
          var c = this.viewportToImageCoordinates(a.x, a.y), h = this._viewportToImageDelta(a.width, a.height);
          return new e.Rect(c.x, c.y, h.x, h.y, a.degrees);
        }, viewerElementToImageCoordinates: function(n) {
          var r = this.pointFromPixel(n, !0);
          return this.viewportToImageCoordinates(r);
        }, imageToViewerElementCoordinates: function(n) {
          var r = this.imageToViewportCoordinates(n);
          return this.pixelFromPoint(r, !0);
        }, windowToImageCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.windowToImageCoordinates] the viewport must have a viewer.");
          var r = n.minus(e.getElementPosition(this.viewer.element));
          return this.viewerElementToImageCoordinates(r);
        }, imageToWindowCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.imageToWindowCoordinates] the viewport must have a viewer.");
          var r = this.imageToViewerElementCoordinates(n);
          return r.plus(e.getElementPosition(this.viewer.element));
        }, viewerElementToViewportCoordinates: function(n) {
          return this.pointFromPixel(n, !0);
        }, viewportToViewerElementCoordinates: function(n) {
          return this.pixelFromPoint(n, !0);
        }, viewerElementToViewportRectangle: function(n) {
          return e.Rect.fromSummits(this.pointFromPixel(n.getTopLeft(), !0), this.pointFromPixel(n.getTopRight(), !0), this.pointFromPixel(n.getBottomLeft(), !0));
        }, viewportToViewerElementRectangle: function(n) {
          return e.Rect.fromSummits(this.pixelFromPoint(n.getTopLeft(), !0), this.pixelFromPoint(n.getTopRight(), !0), this.pixelFromPoint(n.getBottomLeft(), !0));
        }, windowToViewportCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.windowToViewportCoordinates] the viewport must have a viewer.");
          var r = n.minus(e.getElementPosition(this.viewer.element));
          return this.viewerElementToViewportCoordinates(r);
        }, viewportToWindowCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.viewportToWindowCoordinates] the viewport must have a viewer.");
          var r = this.viewportToViewerElementCoordinates(n);
          return r.plus(e.getElementPosition(this.viewer.element));
        }, viewportToImageZoom: function(n) {
          if (this.viewer) {
            var r = this.viewer.world.getItemCount();
            if (r > 1)
              e.console.error("[Viewport.viewportToImageZoom] is not accurate with multi-image.");
            else if (r === 1) {
              var o = this.viewer.world.getItemAt(0);
              return o.viewportToImageZoom(n);
            }
          }
          var s = this._contentSizeNoRotate.x, a = this._containerInnerSize.x, l = this._contentBoundsNoRotate.width, u = a / s * l;
          return n * u;
        }, imageToViewportZoom: function(n) {
          if (this.viewer) {
            var r = this.viewer.world.getItemCount();
            if (r > 1)
              e.console.error("[Viewport.imageToViewportZoom] is not accurate with multi-image.");
            else if (r === 1) {
              var o = this.viewer.world.getItemAt(0);
              return o.imageToViewportZoom(n);
            }
          }
          var s = this._contentSizeNoRotate.x, a = this._containerInnerSize.x, l = this._contentBoundsNoRotate.width, u = s / a / l;
          return n * u;
        }, toggleFlip: function() {
          return this.setFlip(!this.getFlip()), this;
        }, getFlip: function() {
          return this.flipped;
        }, setFlip: function(n) {
          return this.flipped === n ? this : (this.flipped = n, this.viewer.navigator && this.viewer.navigator.setFlip(this.getFlip()), this.viewer.forceRedraw(), this.viewer.raiseEvent("flip", { flipped: n }), this);
        } };
      }(i), function(e) {
        e.TiledImage = function(p) {
          var E = this;
          e.console.assert(p.tileCache, "[TiledImage] options.tileCache is required"), e.console.assert(p.drawer, "[TiledImage] options.drawer is required"), e.console.assert(p.viewer, "[TiledImage] options.viewer is required"), e.console.assert(p.imageLoader, "[TiledImage] options.imageLoader is required"), e.console.assert(p.source, "[TiledImage] options.source is required"), e.console.assert(!p.clip || p.clip instanceof e.Rect, "[TiledImage] options.clip must be an OpenSeadragon.Rect if present"), e.EventSource.call(this), this._tileCache = p.tileCache, delete p.tileCache, this._drawer = p.drawer, delete p.drawer, this._imageLoader = p.imageLoader, delete p.imageLoader, p.clip instanceof e.Rect && (this._clip = p.clip.clone()), delete p.clip;
          var T = p.x || 0;
          delete p.x;
          var C = p.y || 0;
          delete p.y, this.normHeight = p.source.dimensions.y / p.source.dimensions.x, this.contentAspectX = p.source.dimensions.x / p.source.dimensions.y;
          var O = 1;
          p.width ? (O = p.width, delete p.width, p.height && (e.console.error("specifying both width and height to a tiledImage is not supported"), delete p.height)) : p.height && (O = p.height / this.normHeight, delete p.height);
          var D = p.fitBounds;
          delete p.fitBounds;
          var F = p.fitBoundsPlacement || i.Placement.CENTER;
          delete p.fitBoundsPlacement;
          var I = p.degrees || 0;
          delete p.degrees, e.extend(!0, this, { viewer: null, tilesMatrix: {}, coverage: {}, loadingCoverage: {}, lastDrawn: [], lastResetTime: 0, _midDraw: !1, _needsDraw: !0, _hasOpaqueTile: !1, _tilesLoading: 0, springStiffness: e.DEFAULT_SETTINGS.springStiffness, animationTime: e.DEFAULT_SETTINGS.animationTime, minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio, wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal, wrapVertical: e.DEFAULT_SETTINGS.wrapVertical, immediateRender: e.DEFAULT_SETTINGS.immediateRender, blendTime: e.DEFAULT_SETTINGS.blendTime, alwaysBlend: e.DEFAULT_SETTINGS.alwaysBlend, minPixelRatio: e.DEFAULT_SETTINGS.minPixelRatio, smoothTileEdgesMinZoom: e.DEFAULT_SETTINGS.smoothTileEdgesMinZoom, iOSDevice: e.DEFAULT_SETTINGS.iOSDevice, debugMode: e.DEFAULT_SETTINGS.debugMode, crossOriginPolicy: e.DEFAULT_SETTINGS.crossOriginPolicy, ajaxWithCredentials: e.DEFAULT_SETTINGS.ajaxWithCredentials, placeholderFillStyle: e.DEFAULT_SETTINGS.placeholderFillStyle, opacity: e.DEFAULT_SETTINGS.opacity, preload: e.DEFAULT_SETTINGS.preload, compositeOperation: e.DEFAULT_SETTINGS.compositeOperation }, p), this._preload = this.preload, delete this.preload, this._fullyLoaded = !1, this._xSpring = new e.Spring({ initial: T, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._ySpring = new e.Spring({ initial: C, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._scaleSpring = new e.Spring({ initial: O, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._degreesSpring = new e.Spring({ initial: I, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._updateForScale(), D && this.fitBounds(D, F, !0), this._drawingHandler = function(H) {
            E.viewer.raiseEvent("tile-drawing", e.extend({ tiledImage: E }, H));
          };
        }, e.extend(e.TiledImage.prototype, e.EventSource.prototype, { needsDraw: function() {
          return this._needsDraw;
        }, getFullyLoaded: function() {
          return this._fullyLoaded;
        }, _setFullyLoaded: function(p) {
          p !== this._fullyLoaded && (this._fullyLoaded = p, this.raiseEvent("fully-loaded-change", { fullyLoaded: this._fullyLoaded }));
        }, reset: function() {
          this._tileCache.clearTilesFor(this), this.lastResetTime = e.now(), this._needsDraw = !0;
        }, update: function() {
          var p = this._xSpring.update(), E = this._ySpring.update(), T = this._scaleSpring.update(), C = this._degreesSpring.update();
          return p || E || T || C ? (this._updateForScale(), this._needsDraw = !0, !0) : !1;
        }, draw: function() {
          this.opacity !== 0 || this._preload ? (this._midDraw = !0, this._updateViewport(), this._midDraw = !1) : this._needsDraw = !1;
        }, destroy: function() {
          this.reset(), this.source.destroy && this.source.destroy();
        }, getBounds: function(p) {
          return this.getBoundsNoRotate(p).rotate(this.getRotation(p), this._getRotationPoint(p));
        }, getBoundsNoRotate: function(p) {
          return p ? new e.Rect(this._xSpring.current.value, this._ySpring.current.value, this._worldWidthCurrent, this._worldHeightCurrent) : new e.Rect(this._xSpring.target.value, this._ySpring.target.value, this._worldWidthTarget, this._worldHeightTarget);
        }, getWorldBounds: function() {
          return e.console.error("[TiledImage.getWorldBounds] is deprecated; use TiledImage.getBounds instead"), this.getBounds();
        }, getClippedBounds: function(p) {
          var E = this.getBoundsNoRotate(p);
          if (this._clip) {
            var T = p ? this._worldWidthCurrent : this._worldWidthTarget, C = T / this.source.dimensions.x, O = this._clip.times(C);
            E = new e.Rect(E.x + O.x, E.y + O.y, O.width, O.height);
          }
          return E.rotate(this.getRotation(p), this._getRotationPoint(p));
        }, getTileBounds: function(p, E, T) {
          var C = this.source.getNumTiles(p), O = (C.x + E % C.x) % C.x, D = (C.y + T % C.y) % C.y, F = this.source.getTileBounds(p, O, D);
          return this.getFlip() && (F.x = 1 - F.x - F.width), F.x += (E - O) / C.x, F.y += this._worldHeightCurrent / this._worldWidthCurrent * ((T - D) / C.y), F;
        }, getContentSize: function() {
          return new e.Point(this.source.dimensions.x, this.source.dimensions.y);
        }, getSizeInWindowCoordinates: function() {
          var p = this.imageToWindowCoordinates(new e.Point(0, 0)), E = this.imageToWindowCoordinates(this.getContentSize());
          return new e.Point(E.x - p.x, E.y - p.y);
        }, _viewportToImageDelta: function(p, E, T) {
          var C = T ? this._scaleSpring.current.value : this._scaleSpring.target.value;
          return new e.Point(p * (this.source.dimensions.x / C), E * (this.source.dimensions.y * this.contentAspectX / C));
        }, viewportToImageCoordinates: function(p, E, T) {
          var C;
          return p instanceof e.Point ? (T = E, C = p) : C = new e.Point(p, E), C = C.rotate(-this.getRotation(T), this._getRotationPoint(T)), T ? this._viewportToImageDelta(C.x - this._xSpring.current.value, C.y - this._ySpring.current.value) : this._viewportToImageDelta(C.x - this._xSpring.target.value, C.y - this._ySpring.target.value);
        }, _imageToViewportDelta: function(p, E, T) {
          var C = T ? this._scaleSpring.current.value : this._scaleSpring.target.value;
          return new e.Point(p / this.source.dimensions.x * C, E / this.source.dimensions.y / this.contentAspectX * C);
        }, imageToViewportCoordinates: function(p, E, T) {
          p instanceof e.Point && (T = E, E = p.y, p = p.x);
          var C = this._imageToViewportDelta(p, E);
          return T ? (C.x += this._xSpring.current.value, C.y += this._ySpring.current.value) : (C.x += this._xSpring.target.value, C.y += this._ySpring.target.value), C.rotate(this.getRotation(T), this._getRotationPoint(T));
        }, imageToViewportRectangle: function(p, E, T, C, O) {
          var D = p;
          D instanceof e.Rect ? O = E : D = new e.Rect(p, E, T, C);
          var F = this.imageToViewportCoordinates(D.getTopLeft(), O), I = this._imageToViewportDelta(D.width, D.height, O);
          return new e.Rect(F.x, F.y, I.x, I.y, D.degrees + this.getRotation(O));
        }, viewportToImageRectangle: function(p, E, T, C, O) {
          var D = p;
          p instanceof e.Rect ? O = E : D = new e.Rect(p, E, T, C);
          var F = this.viewportToImageCoordinates(D.getTopLeft(), O), I = this._viewportToImageDelta(D.width, D.height, O);
          return new e.Rect(F.x, F.y, I.x, I.y, D.degrees - this.getRotation(O));
        }, viewerElementToImageCoordinates: function(p) {
          var E = this.viewport.pointFromPixel(p, !0);
          return this.viewportToImageCoordinates(E);
        }, imageToViewerElementCoordinates: function(p) {
          var E = this.imageToViewportCoordinates(p);
          return this.viewport.pixelFromPoint(E, !0);
        }, windowToImageCoordinates: function(p) {
          var E = p.minus(i.getElementPosition(this.viewer.element));
          return this.viewerElementToImageCoordinates(E);
        }, imageToWindowCoordinates: function(p) {
          var E = this.imageToViewerElementCoordinates(p);
          return E.plus(i.getElementPosition(this.viewer.element));
        }, _viewportToTiledImageRectangle: function(p) {
          var E = this._scaleSpring.current.value;
          return p = p.rotate(-this.getRotation(!0), this._getRotationPoint(!0)), new e.Rect((p.x - this._xSpring.current.value) / E, (p.y - this._ySpring.current.value) / E, p.width / E, p.height / E, p.degrees);
        }, viewportToImageZoom: function(p) {
          var E = this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x;
          return E * p;
        }, imageToViewportZoom: function(p) {
          var E = this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x;
          return p / E;
        }, setPosition: function(p, E) {
          var T = this._xSpring.target.value === p.x && this._ySpring.target.value === p.y;
          if (E) {
            if (T && this._xSpring.current.value === p.x && this._ySpring.current.value === p.y)
              return;
            this._xSpring.resetTo(p.x), this._ySpring.resetTo(p.y), this._needsDraw = !0;
          } else {
            if (T)
              return;
            this._xSpring.springTo(p.x), this._ySpring.springTo(p.y), this._needsDraw = !0;
          }
          T || this._raiseBoundsChange();
        }, setWidth: function(p, E) {
          this._setScale(p, E);
        }, setHeight: function(p, E) {
          this._setScale(p / this.normHeight, E);
        }, setCroppingPolygons: function(p) {
          var E = function(C) {
            return C instanceof e.Point || typeof C.x == "number" && typeof C.y == "number";
          }, T = function(C) {
            return C.map(function(O) {
              try {
                if (E(O))
                  return { x: O.x, y: O.y };
                throw new Error();
              } catch {
                throw new Error("A Provided cropping polygon point is not supported");
              }
            });
          };
          try {
            if (!e.isArray(p))
              throw new Error("Provided cropping polygon is not an array");
            this._croppingPolygons = p.map(function(C) {
              return T(C);
            });
          } catch (C) {
            e.console.error("[TiledImage.setCroppingPolygons] Cropping polygon format not supported"), e.console.error(C), this._croppingPolygons = null;
          }
        }, resetCroppingPolygons: function() {
          this._croppingPolygons = null;
        }, fitBounds: function(p, E, T) {
          E = E || e.Placement.CENTER;
          var C = e.Placement.properties[E], O = this.contentAspectX, D = 0, F = 0, I = 1, H = 1;
          if (this._clip && (O = this._clip.getAspectRatio(), I = this._clip.width / this.source.dimensions.x, H = this._clip.height / this.source.dimensions.y, p.getAspectRatio() > O ? (D = this._clip.x / this._clip.height * p.height, F = this._clip.y / this._clip.height * p.height) : (D = this._clip.x / this._clip.width * p.width, F = this._clip.y / this._clip.width * p.width)), p.getAspectRatio() > O) {
            var j = p.height / H, z = 0;
            C.isHorizontallyCentered ? z = (p.width - p.height * O) / 2 : C.isRight && (z = p.width - p.height * O), this.setPosition(new e.Point(p.x - D + z, p.y - F), T), this.setHeight(j, T);
          } else {
            var q = p.width / I, $ = 0;
            C.isVerticallyCentered ? $ = (p.height - p.width / O) / 2 : C.isBottom && ($ = p.height - p.width / O), this.setPosition(new e.Point(p.x - D, p.y - F + $), T), this.setWidth(q, T);
          }
        }, getClip: function() {
          return this._clip ? this._clip.clone() : null;
        }, setClip: function(p) {
          e.console.assert(!p || p instanceof e.Rect, "[TiledImage.setClip] newClip must be an OpenSeadragon.Rect or null"), p instanceof e.Rect ? this._clip = p.clone() : this._clip = null, this._needsDraw = !0, this.raiseEvent("clip-change");
        }, getFlip: function() {
          return !!this.flipped;
        }, setFlip: function(p) {
          this.flipped = !!p, this._needsDraw = !0, this._raiseBoundsChange();
        }, getOpacity: function() {
          return this.opacity;
        }, setOpacity: function(p) {
          p !== this.opacity && (this.opacity = p, this._needsDraw = !0, this.raiseEvent("opacity-change", { opacity: this.opacity }));
        }, getPreload: function() {
          return this._preload;
        }, setPreload: function(p) {
          this._preload = !!p, this._needsDraw = !0;
        }, getRotation: function(p) {
          return p ? this._degreesSpring.current.value : this._degreesSpring.target.value;
        }, setRotation: function(p, E) {
          this._degreesSpring.target.value === p && this._degreesSpring.isAtTargetValue() || (E ? this._degreesSpring.resetTo(p) : this._degreesSpring.springTo(p), this._needsDraw = !0, this._raiseBoundsChange());
        }, _getRotationPoint: function(p) {
          return this.getBoundsNoRotate(p).getCenter();
        }, getCompositeOperation: function() {
          return this.compositeOperation;
        }, setCompositeOperation: function(p) {
          p !== this.compositeOperation && (this.compositeOperation = p, this._needsDraw = !0, this.raiseEvent("composite-operation-change", { compositeOperation: this.compositeOperation }));
        }, _setScale: function(p, E) {
          var T = this._scaleSpring.target.value === p;
          if (E) {
            if (T && this._scaleSpring.current.value === p)
              return;
            this._scaleSpring.resetTo(p), this._updateForScale(), this._needsDraw = !0;
          } else {
            if (T)
              return;
            this._scaleSpring.springTo(p), this._updateForScale(), this._needsDraw = !0;
          }
          T || this._raiseBoundsChange();
        }, _updateForScale: function() {
          this._worldWidthTarget = this._scaleSpring.target.value, this._worldHeightTarget = this.normHeight * this._scaleSpring.target.value, this._worldWidthCurrent = this._scaleSpring.current.value, this._worldHeightCurrent = this.normHeight * this._scaleSpring.current.value;
        }, _raiseBoundsChange: function() {
          this.raiseEvent("bounds-change");
        }, _isBottomItem: function() {
          return this.viewer.world.getItemAt(0) === this;
        }, _getLevelsInterval: function() {
          var p = Math.max(this.source.minLevel, Math.floor(Math.log(this.minZoomImageRatio) / Math.log(2))), E = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(0), !0).x * this._scaleSpring.current.value, T = Math.min(Math.abs(this.source.maxLevel), Math.abs(Math.floor(Math.log(E / this.minPixelRatio) / Math.log(2))));
          return T = Math.max(T, this.source.minLevel || 0), p = Math.min(p, T), { lowestLevel: p, highestLevel: T };
        }, _updateViewport: function() {
          for (this._needsDraw = !1, this._tilesLoading = 0, this.loadingCoverage = {}; this.lastDrawn.length > 0; ) {
            var p = this.lastDrawn.pop();
            p.beingDrawn = !1;
          }
          var E = this.viewport, T = this._viewportToTiledImageRectangle(E.getBoundsWithMargins(!0));
          if (!this.wrapHorizontal && !this.wrapVertical) {
            var C = this._viewportToTiledImageRectangle(this.getClippedBounds(!0));
            if (T = T.intersection(C), T === null)
              return;
          }
          for (var O = this._getLevelsInterval(), D = O.lowestLevel, F = O.highestLevel, I = null, H = !1, j = e.now(), z = F; z >= D; z--) {
            var q = !1, $ = E.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(z), !0).x * this._scaleSpring.current.value;
            if (z === D || !H && $ >= this.minPixelRatio)
              q = !0, H = !0;
            else if (!H)
              continue;
            var Q = E.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(z), !1).x * this._scaleSpring.current.value, J = E.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(Math.max(this.source.getClosestLevel(), 0)), !1).x * this._scaleSpring.current.value, te = this.immediateRender ? 1 : J, oe = Math.min(1, ($ - 0.5) / 0.5), pe = te / Math.abs(te - Q);
            if (I = n(this, H, q, z, oe, pe, T, j, I), h(this.coverage, z))
              break;
          }
          b(this, this.lastDrawn), I && !I.context2D ? (s(this, I, j), this._needsDraw = !0, this._setFullyLoaded(!1)) : this._setFullyLoaded(this._tilesLoading === 0);
        }, _getCornerTiles: function(p, E, T) {
          var C, O;
          this.wrapHorizontal ? (C = e.positiveModulo(E.x, 1), O = e.positiveModulo(T.x, 1)) : (C = Math.max(0, E.x), O = Math.min(1, T.x));
          var D, F, I = 1 / this.source.aspectRatio;
          this.wrapVertical ? (D = e.positiveModulo(E.y, I), F = e.positiveModulo(T.y, I)) : (D = Math.max(0, E.y), F = Math.min(I, T.y));
          var H = this.source.getTileAtPoint(p, new e.Point(C, D)), j = this.source.getTileAtPoint(p, new e.Point(O, F)), z = this.source.getNumTiles(p);
          return this.wrapHorizontal && (H.x += z.x * Math.floor(E.x), j.x += z.x * Math.floor(T.x)), this.wrapVertical && (H.y += z.y * Math.floor(E.y / I), j.y += z.y * Math.floor(T.y / I)), { topLeft: H, bottomRight: j };
        } });
        function n(p, E, T, C, O, D, F, I, H) {
          var j = F.getBoundingBox().getTopLeft(), z = F.getBoundingBox().getBottomRight();
          p.viewer && p.viewer.raiseEvent("update-level", { tiledImage: p, havedrawn: E, level: C, opacity: O, visibility: D, drawArea: F, topleft: j, bottomright: z, currenttime: I, best: H }), y(p.coverage, C), y(p.loadingCoverage, C);
          var q = p._getCornerTiles(C, j, z), $ = q.topLeft, Q = q.bottomRight, J = p.source.getNumTiles(C), te = p.viewport.pixelFromPoint(p.viewport.getCenter());
          p.getFlip() && (Q.x += 1, p.wrapHorizontal || (Q.x = Math.min(Q.x, J.x - 1)));
          for (var oe = $.x; oe <= Q.x; oe++)
            for (var pe = $.y; pe <= Q.y; pe++) {
              var V;
              if (p.getFlip()) {
                var se = (J.x + oe % J.x) % J.x;
                V = oe + J.x - se - se - 1;
              } else
                V = oe;
              F.intersection(p.getTileBounds(C, V, pe)) !== null && (H = r(p, T, E, V, pe, C, O, D, te, J, I, H));
            }
          return H;
        }
        function r(p, E, T, C, O, D, F, I, H, j, z, q) {
          var $ = o(C, O, D, p, p.source, p.tilesMatrix, z, j, p._worldWidthCurrent, p._worldHeightCurrent), Q = T;
          p.viewer && p.viewer.raiseEvent("update-tile", { tiledImage: p, tile: $ }), m(p.coverage, D, C, O, !1);
          var J = $.loaded || $.loading || d(p.loadingCoverage, D, C, O);
          if (m(p.loadingCoverage, D, C, O, J), !$.exists || (E && !Q && (d(p.coverage, D, C, O) ? m(p.coverage, D, C, O, !0) : Q = !0), !Q))
            return q;
          if (u($, p.source.tileOverlap, p.viewport, H, I, p), !$.loaded)
            if ($.context2D)
              l(p, $);
            else {
              var te = p._tileCache.getImageRecord($.cacheKey);
              if (te) {
                var oe = te.getImage();
                l(p, $, oe);
              }
            }
          if ($.loaded) {
            var pe = c(p, $, C, O, D, F, z);
            pe && (p._needsDraw = !0);
          } else
            $.loading ? p._tilesLoading++ : J || (q = S(q, $));
          return q;
        }
        function o(p, E, T, C, O, D, F, I, H, j) {
          var z, q, $, Q, J, te, oe, pe, V;
          return D[T] || (D[T] = {}), D[T][p] || (D[T][p] = {}), (!D[T][p][E] || !D[T][p][E].flipped != !C.flipped) && (z = (I.x + p % I.x) % I.x, q = (I.y + E % I.y) % I.y, $ = C.getTileBounds(T, p, E), Q = O.getTileBounds(T, z, q, !0), J = O.tileExists(T, z, q), te = O.getTileUrl(T, z, q), C.loadTilesWithAjax ? (oe = O.getTileAjaxHeaders(T, z, q), e.isPlainObject(C.ajaxHeaders) && (oe = e.extend({}, C.ajaxHeaders, oe))) : oe = null, pe = O.getContext2D ? O.getContext2D(T, z, q) : void 0, V = new e.Tile(T, p, E, $, J, te, pe, C.loadTilesWithAjax, oe, Q), C.getFlip() ? z === 0 && (V.isRightMost = !0) : z === I.x - 1 && (V.isRightMost = !0), q === I.y - 1 && (V.isBottomMost = !0), V.flipped = C.flipped, D[T][p][E] = V), V = D[T][p][E], V.lastTouchTime = F, V;
        }
        function s(p, E, T) {
          E.loading = !0, p._imageLoader.addJob({ src: E.url, loadWithAjax: E.loadWithAjax, ajaxHeaders: E.ajaxHeaders, crossOriginPolicy: p.crossOriginPolicy, ajaxWithCredentials: p.ajaxWithCredentials, callback: function(C, O, D) {
            a(p, E, T, C, O, D);
          }, abort: function() {
            E.loading = !1;
          } });
        }
        function a(p, E, T, C, O, D) {
          if (!C) {
            e.console.log("Tile %s failed to load: %s - error: %s", E, E.url, O), p.viewer.raiseEvent("tile-load-failed", { tile: E, tiledImage: p, time: T, message: O, tileRequest: D }), E.loading = !1, E.exists = !1;
            return;
          }
          if (T < p.lastResetTime) {
            e.console.log("Ignoring tile %s loaded before reset: %s", E, E.url), E.loading = !1;
            return;
          }
          var F = function() {
            var I = p.source.getClosestLevel();
            l(p, E, C, I, D);
          };
          p._midDraw ? window.setTimeout(F, 1) : F();
        }
        function l(p, E, T, C, O) {
          var D = 0;
          function F() {
            return D++, I;
          }
          function I() {
            D--, D === 0 && (E.loading = !1, E.loaded = !0, E.context2D || p._tileCache.cacheTile({ image: T, tile: E, cutoff: C, tiledImage: p }), p._needsDraw = !0);
          }
          p.viewer.raiseEvent("tile-loaded", { tile: E, tiledImage: p, tileRequest: O, image: T, getCompletionCallback: F }), F()();
        }
        function u(p, E, T, C, O, D) {
          var F = p.bounds.getTopLeft();
          F.x *= D._scaleSpring.current.value, F.y *= D._scaleSpring.current.value, F.x += D._xSpring.current.value, F.y += D._ySpring.current.value;
          var I = p.bounds.getSize();
          I.x *= D._scaleSpring.current.value, I.y *= D._scaleSpring.current.value;
          var H = T.pixelFromPointNoRotate(F, !0), j = T.pixelFromPointNoRotate(F, !1), z = T.deltaPixelsFromPointsNoRotate(I, !0), q = T.deltaPixelsFromPointsNoRotate(I, !1), $ = j.plus(q.divide(2)), Q = C.squaredDistanceTo($);
          E || (z = z.plus(new e.Point(1, 1))), p.isRightMost && D.wrapHorizontal && (z.x += 0.75), p.isBottomMost && D.wrapVertical && (z.y += 0.75), p.position = H, p.size = z, p.squaredDistance = Q, p.visibility = O;
        }
        function c(p, E, T, C, O, D, F) {
          var I = 1e3 * p.blendTime, H, j;
          if (E.blendStart || (E.blendStart = F), H = F - E.blendStart, j = I ? Math.min(1, H / I) : 1, p.alwaysBlend && (j *= D), E.opacity = j, p.lastDrawn.push(E), j === 1)
            m(p.coverage, O, T, C, !0), p._hasOpaqueTile = !0;
          else if (H < I)
            return !0;
          return !1;
        }
        function h(p, E, T, C) {
          var O, D, F, I;
          if (!p[E])
            return !1;
          if (T === void 0 || C === void 0) {
            O = p[E];
            for (F in O)
              if (Object.prototype.hasOwnProperty.call(O, F)) {
                D = O[F];
                for (I in D)
                  if (Object.prototype.hasOwnProperty.call(D, I) && !D[I])
                    return !1;
              }
            return !0;
          }
          return p[E][T] === void 0 || p[E][T][C] === void 0 || p[E][T][C] === !0;
        }
        function d(p, E, T, C) {
          return T === void 0 || C === void 0 ? h(p, E + 1) : h(p, E + 1, 2 * T, 2 * C) && h(p, E + 1, 2 * T, 2 * C + 1) && h(p, E + 1, 2 * T + 1, 2 * C) && h(p, E + 1, 2 * T + 1, 2 * C + 1);
        }
        function m(p, E, T, C, O) {
          if (!p[E]) {
            e.console.warn("Setting coverage for a tile before its level's coverage has been reset: %s", E);
            return;
          }
          p[E][T] || (p[E][T] = {}), p[E][T][C] = O;
        }
        function y(p, E) {
          p[E] = {};
        }
        function S(p, E) {
          return !p || E.visibility > p.visibility || E.visibility === p.visibility && E.squaredDistance < p.squaredDistance ? E : p;
        }
        function b(p, E) {
          if (!(p.opacity === 0 || E.length === 0 && !p.placeholderFillStyle)) {
            var T = E[0], C;
            T && (C = p.opacity < 1 || p.compositeOperation && p.compositeOperation !== "source-over" || !p._isBottomItem() && T._hasTransparencyChannel());
            var O, D, F = p.viewport.getZoom(!0), I = p.viewportToImageZoom(F);
            E.length > 1 && I > p.smoothTileEdgesMinZoom && !p.iOSDevice && p.getRotation(!0) % 360 === 0 && e.supportsCanvas && (C = !0, O = T.getScaleForEdgeSmoothing(), D = T.getTranslationForEdgeSmoothing(O, p._drawer.getCanvasSize(!1), p._drawer.getCanvasSize(!0)));
            var H;
            C && (O || (H = p.viewport.viewportToViewerElementRectangle(p.getClippedBounds(!0)).getIntegerBoundingBox(), p._drawer.viewer.viewport.getFlip() && (p.viewport.degrees !== 0 || p.getRotation(!0) % 360 !== 0) && (H.x = p._drawer.viewer.container.clientWidth - (H.x + H.width)), H = H.times(e.pixelDensityRatio)), p._drawer._clear(!0, H)), O || (p.viewport.degrees !== 0 && p._drawer._offsetForRotation({ degrees: p.viewport.degrees, useSketch: C }), p.getRotation(!0) % 360 !== 0 && p._drawer._offsetForRotation({ degrees: p.getRotation(!0), point: p.viewport.pixelFromPointNoRotate(p._getRotationPoint(!0), !0), useSketch: C }), p.viewport.degrees === 0 && p.getRotation(!0) % 360 === 0 && p._drawer.viewer.viewport.getFlip() && p._drawer._flip());
            var j = !1;
            if (p._clip) {
              p._drawer.saveContext(C);
              var z = p.imageToViewportRectangle(p._clip, !0);
              z = z.rotate(-p.getRotation(!0), p._getRotationPoint(!0));
              var q = p._drawer.viewportToDrawerRectangle(z);
              O && (q = q.times(O)), D && (q = q.translate(D)), p._drawer.setClip(q, C), j = !0;
            }
            if (p._croppingPolygons) {
              p._drawer.saveContext(C);
              try {
                var $ = p._croppingPolygons.map(function(oe) {
                  return oe.map(function(pe) {
                    var V = p.imageToViewportCoordinates(pe.x, pe.y, !0).rotate(-p.getRotation(!0), p._getRotationPoint(!0)), se = p._drawer.viewportCoordToDrawerCoord(V);
                    return O && (se = se.times(O)), se;
                  });
                });
                p._drawer.clipWithPolygons($, C);
              } catch (oe) {
                e.console.error(oe);
              }
              j = !0;
            }
            if (p.placeholderFillStyle && p._hasOpaqueTile === !1) {
              var Q = p._drawer.viewportToDrawerRectangle(p.getBounds(!0));
              O && (Q = Q.times(O)), D && (Q = Q.translate(D));
              var J = null;
              typeof p.placeholderFillStyle == "function" ? J = p.placeholderFillStyle(p, p._drawer.context) : J = p.placeholderFillStyle, p._drawer.drawRectangle(Q, J, C);
            }
            for (var te = E.length - 1; te >= 0; te--)
              T = E[te], p._drawer.drawTile(T, p._drawingHandler, C, O, D), T.beingDrawn = !0, p.viewer && p.viewer.raiseEvent("tile-drawn", { tiledImage: p, tile: T });
            j && p._drawer.restoreContext(C), O || (p.getRotation(!0) % 360 !== 0 && p._drawer._restoreRotationChanges(C), p.viewport.degrees !== 0 && p._drawer._restoreRotationChanges(C)), C && (O && (p.viewport.degrees !== 0 && p._drawer._offsetForRotation({ degrees: p.viewport.degrees, useSketch: !1 }), p.getRotation(!0) % 360 !== 0 && p._drawer._offsetForRotation({ degrees: p.getRotation(!0), point: p.viewport.pixelFromPointNoRotate(p._getRotationPoint(!0), !0), useSketch: !1 })), p._drawer.blendSketch({ opacity: p.opacity, scale: O, translate: D, compositeOperation: p.compositeOperation, bounds: H }), O && (p.getRotation(!0) % 360 !== 0 && p._drawer._restoreRotationChanges(!1), p.viewport.degrees !== 0 && p._drawer._restoreRotationChanges(!1))), O || p.viewport.degrees === 0 && p.getRotation(!0) % 360 === 0 && p._drawer.viewer.viewport.getFlip() && p._drawer._flip(), A(p, E);
          }
        }
        function A(p, E) {
          if (p.debugMode)
            for (var T = E.length - 1; T >= 0; T--) {
              var C = E[T];
              try {
                p._drawer.drawDebugInfo(C, E.length, T, p);
              } catch (O) {
                e.console.error(O);
              }
            }
        }
      }(i), function(e) {
        var n = function(o) {
          e.console.assert(o, "[TileCache.cacheTile] options is required"), e.console.assert(o.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(o.tiledImage, "[TileCache.cacheTile] options.tiledImage is required"), this.tile = o.tile, this.tiledImage = o.tiledImage;
        }, r = function(o) {
          e.console.assert(o, "[ImageRecord] options is required"), e.console.assert(o.image, "[ImageRecord] options.image is required"), this._image = o.image, this._tiles = [];
        };
        r.prototype = { destroy: function() {
          this._image = null, this._renderedContext = null, this._tiles = null;
        }, getImage: function() {
          return this._image;
        }, getRenderedContext: function() {
          if (!this._renderedContext) {
            var o = document.createElement("canvas");
            o.width = this._image.width, o.height = this._image.height, this._renderedContext = o.getContext("2d"), this._renderedContext.drawImage(this._image, 0, 0), this._image = null;
          }
          return this._renderedContext;
        }, setRenderedContext: function(o) {
          e.console.error("ImageRecord.setRenderedContext is deprecated. The rendered context should be created by the ImageRecord itself when calling ImageRecord.getRenderedContext."), this._renderedContext = o;
        }, addTile: function(o) {
          e.console.assert(o, "[ImageRecord.addTile] tile is required"), this._tiles.push(o);
        }, removeTile: function(o) {
          for (var s = 0; s < this._tiles.length; s++)
            if (this._tiles[s] === o) {
              this._tiles.splice(s, 1);
              return;
            }
          e.console.warn("[ImageRecord.removeTile] trying to remove unknown tile", o);
        }, getTileCount: function() {
          return this._tiles.length;
        } }, e.TileCache = function(o) {
          o = o || {}, this._maxImageCacheCount = o.maxImageCacheCount || e.DEFAULT_SETTINGS.maxImageCacheCount, this._tilesLoaded = [], this._imagesLoaded = [], this._imagesLoadedCount = 0;
        }, e.TileCache.prototype = { numTilesLoaded: function() {
          return this._tilesLoaded.length;
        }, cacheTile: function(o) {
          e.console.assert(o, "[TileCache.cacheTile] options is required"), e.console.assert(o.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(o.tile.cacheKey, "[TileCache.cacheTile] options.tile.cacheKey is required"), e.console.assert(o.tiledImage, "[TileCache.cacheTile] options.tiledImage is required");
          var s = o.cutoff || 0, a = this._tilesLoaded.length, l = this._imagesLoaded[o.tile.cacheKey];
          if (l || (e.console.assert(o.image, "[TileCache.cacheTile] options.image is required to create an ImageRecord"), l = this._imagesLoaded[o.tile.cacheKey] = new r({ image: o.image }), this._imagesLoadedCount++), l.addTile(o.tile), o.tile.cacheImageRecord = l, this._imagesLoadedCount > this._maxImageCacheCount) {
            for (var u = null, c = -1, h = null, d, m, y, S, b, A, p = this._tilesLoaded.length - 1; p >= 0; p--)
              if (A = this._tilesLoaded[p], d = A.tile, !(d.level <= s || d.beingDrawn)) {
                if (!u) {
                  u = d, c = p, h = A;
                  continue;
                }
                S = d.lastTouchTime, m = u.lastTouchTime, b = d.level, y = u.level, (S < m || S === m && b > y) && (u = d, c = p, h = A);
              }
            u && c >= 0 && (this._unloadTile(h), a = c);
          }
          this._tilesLoaded[a] = new n({ tile: o.tile, tiledImage: o.tiledImage });
        }, clearTilesFor: function(o) {
          e.console.assert(o, "[TileCache.clearTilesFor] tiledImage is required");
          for (var s, a = 0; a < this._tilesLoaded.length; ++a)
            s = this._tilesLoaded[a], s.tiledImage === o && (this._unloadTile(s), this._tilesLoaded.splice(a, 1), a--);
        }, getImageRecord: function(o) {
          return e.console.assert(o, "[TileCache.getImageRecord] cacheKey is required"), this._imagesLoaded[o];
        }, _unloadTile: function(o) {
          e.console.assert(o, "[TileCache._unloadTile] tileRecord is required");
          var s = o.tile, a = o.tiledImage;
          s.unload(), s.cacheImageRecord = null;
          var l = this._imagesLoaded[s.cacheKey];
          l.removeTile(s), l.getTileCount() || (l.destroy(), delete this._imagesLoaded[s.cacheKey], this._imagesLoadedCount--), a.viewer.raiseEvent("tile-unloaded", { tile: s, tiledImage: a });
        } };
      }(i), function(e) {
        e.World = function(n) {
          var r = this;
          e.console.assert(n.viewer, "[World] options.viewer is required"), e.EventSource.call(this), this.viewer = n.viewer, this._items = [], this._needsDraw = !1, this._autoRefigureSizes = !0, this._needsSizesFigured = !1, this._delegatedFigureSizes = function(o) {
            r._autoRefigureSizes ? r._figureSizes() : r._needsSizesFigured = !0;
          }, this._figureSizes();
        }, e.extend(e.World.prototype, e.EventSource.prototype, { addItem: function(n, r) {
          if (e.console.assert(n, "[World.addItem] item is required"), e.console.assert(n instanceof e.TiledImage, "[World.addItem] only TiledImages supported at this time"), r = r || {}, r.index !== void 0) {
            var o = Math.max(0, Math.min(this._items.length, r.index));
            this._items.splice(o, 0, n);
          } else
            this._items.push(n);
          this._autoRefigureSizes ? this._figureSizes() : this._needsSizesFigured = !0, this._needsDraw = !0, n.addHandler("bounds-change", this._delegatedFigureSizes), n.addHandler("clip-change", this._delegatedFigureSizes), this.raiseEvent("add-item", { item: n });
        }, getItemAt: function(n) {
          return e.console.assert(n !== void 0, "[World.getItemAt] index is required"), this._items[n];
        }, getIndexOfItem: function(n) {
          return e.console.assert(n, "[World.getIndexOfItem] item is required"), e.indexOf(this._items, n);
        }, getItemCount: function() {
          return this._items.length;
        }, setItemIndex: function(n, r) {
          e.console.assert(n, "[World.setItemIndex] item is required"), e.console.assert(r !== void 0, "[World.setItemIndex] index is required");
          var o = this.getIndexOfItem(n);
          if (r >= this._items.length)
            throw new Error("Index bigger than number of layers.");
          r === o || o === -1 || (this._items.splice(o, 1), this._items.splice(r, 0, n), this._needsDraw = !0, this.raiseEvent("item-index-change", { item: n, previousIndex: o, newIndex: r }));
        }, removeItem: function(n) {
          e.console.assert(n, "[World.removeItem] item is required");
          var r = e.indexOf(this._items, n);
          r !== -1 && (n.removeHandler("bounds-change", this._delegatedFigureSizes), n.removeHandler("clip-change", this._delegatedFigureSizes), n.destroy(), this._items.splice(r, 1), this._figureSizes(), this._needsDraw = !0, this._raiseRemoveItem(n));
        }, removeAll: function() {
          this.viewer._cancelPendingImages();
          var n, r;
          for (r = 0; r < this._items.length; r++)
            n = this._items[r], n.removeHandler("bounds-change", this._delegatedFigureSizes), n.removeHandler("clip-change", this._delegatedFigureSizes), n.destroy();
          var o = this._items;
          for (this._items = [], this._figureSizes(), this._needsDraw = !0, r = 0; r < o.length; r++)
            n = o[r], this._raiseRemoveItem(n);
        }, resetItems: function() {
          for (var n = 0; n < this._items.length; n++)
            this._items[n].reset();
        }, update: function() {
          for (var n = !1, r = 0; r < this._items.length; r++)
            n = this._items[r].update() || n;
          return n;
        }, draw: function() {
          for (var n = 0; n < this._items.length; n++)
            this._items[n].draw();
          this._needsDraw = !1;
        }, needsDraw: function() {
          for (var n = 0; n < this._items.length; n++)
            if (this._items[n].needsDraw())
              return !0;
          return this._needsDraw;
        }, getHomeBounds: function() {
          return this._homeBounds.clone();
        }, getContentFactor: function() {
          return this._contentFactor;
        }, setAutoRefigureSizes: function(n) {
          this._autoRefigureSizes = n, n & this._needsSizesFigured && (this._figureSizes(), this._needsSizesFigured = !1);
        }, arrange: function(n) {
          n = n || {};
          var r = n.immediately || !1, o = n.layout || e.DEFAULT_SETTINGS.collectionLayout, s = n.rows || e.DEFAULT_SETTINGS.collectionRows, a = n.columns || e.DEFAULT_SETTINGS.collectionColumns, l = n.tileSize || e.DEFAULT_SETTINGS.collectionTileSize, u = n.tileMargin || e.DEFAULT_SETTINGS.collectionTileMargin, c = l + u, h;
          !n.rows && a ? h = a : h = Math.ceil(this._items.length / s);
          var d = 0, m = 0, y, S, b, A, p;
          this.setAutoRefigureSizes(!1);
          for (var E = 0; E < this._items.length; E++)
            E && E % h === 0 && (o === "horizontal" ? (m += c, d = 0) : (d += c, m = 0)), y = this._items[E], S = y.getBounds(), S.width > S.height ? b = l : b = l * (S.width / S.height), A = b * (S.height / S.width), p = new e.Point(d + (l - b) / 2, m + (l - A) / 2), y.setPosition(p, r), y.setWidth(b, r), o === "horizontal" ? d += c : m += c;
          this.setAutoRefigureSizes(!0);
        }, _figureSizes: function() {
          var n = this._homeBounds ? this._homeBounds.clone() : null, r = this._contentSize ? this._contentSize.clone() : null, o = this._contentFactor || 0;
          if (!this._items.length)
            this._homeBounds = new e.Rect(0, 0, 1, 1), this._contentSize = new e.Point(1, 1), this._contentFactor = 1;
          else {
            var s = this._items[0], a = s.getBounds();
            this._contentFactor = s.getContentSize().x / a.width;
            for (var l = s.getClippedBounds().getBoundingBox(), u = l.x, c = l.y, h = l.x + l.width, d = l.y + l.height, m = 1; m < this._items.length; m++)
              s = this._items[m], a = s.getBounds(), this._contentFactor = Math.max(this._contentFactor, s.getContentSize().x / a.width), l = s.getClippedBounds().getBoundingBox(), u = Math.min(u, l.x), c = Math.min(c, l.y), h = Math.max(h, l.x + l.width), d = Math.max(d, l.y + l.height);
            this._homeBounds = new e.Rect(u, c, h - u, d - c), this._contentSize = new e.Point(this._homeBounds.width * this._contentFactor, this._homeBounds.height * this._contentFactor);
          }
          (this._contentFactor !== o || !this._homeBounds.equals(n) || !this._contentSize.equals(r)) && this.raiseEvent("metrics-change", {});
        }, _raiseRemoveItem: function(n) {
          this.raiseEvent("remove-item", { item: n });
        } });
      }(i);
    })(Hh);
    var vt = Hh.exports;
    const ie = "http://www.w3.org/2000/svg", hs = (t) => {
      const i = t.getAttribute("class");
      return i ? new Set(i.split(" ")) : /* @__PURE__ */ new Set();
    }, yt = (t, i) => {
      const e = hs(t);
      e.add(i), t.setAttribute("class", Array.from(e).join(" "));
    }, ar = (t, i) => {
      const e = hs(t);
      e.delete(i), e.size === 0 ? t.removeAttribute("class") : t.setAttribute("class", Array.from(e).join(" "));
    }, ds = (t, i) => hs(t).has(i), Ct = (t, i) => {
      const e = t.selector("FragmentSelector");
      if (e != null && e.conformsTo.startsWith("http://www.w3.org/TR/media-frags")) {
        const { value: n } = e, r = n.includes(":") ? n.substring(n.indexOf("=") + 1, n.indexOf(":")) : "pixel", o = n.includes(":") ? n.substring(n.indexOf(":") + 1) : n.substring(n.indexOf("=") + 1);
        let [s, a, l, u] = o.split(",").map(parseFloat);
        return r.toLowerCase() === "percent" && (s = s * i.naturalWidth / 100, a = a * i.naturalHeight / 100, l = l * i.naturalWidth / 100, u = u * i.naturalHeight / 100), { x: s, y: a, w: l, h: u };
      }
    }, Bb = (t, i, e, n, r) => ({ source: r == null ? void 0 : r.src, selector: { type: "FragmentSelector", conformsTo: "http://www.w3.org/TR/media-frags/", value: `xywh=pixel:${t},${i},${e},${n}` } }), Fb = (t, i, e, n, r) => {
      const o = t / r.naturalWidth * 100, s = i / r.naturalHeight * 100, a = e / r.naturalWidth * 100, l = n / r.naturalHeight * 100;
      return { source: r.src, selector: { type: "FragmentSelector", conformsTo: "http://www.w3.org/TR/media-frags/", value: `xywh=percent:${o},${s},${a},${l}` } };
    }, vn = (t, i, e, n, r, o) => (o == null ? void 0 : o.toLowerCase()) === "percent" ? Fb(t, i, e, n, r) : Bb(t, i, e, n, r), lr = (t, i, e, n, r) => {
      t.setAttribute("x", i), t.setAttribute("y", e), t.setAttribute("width", n), t.setAttribute("height", r);
    }, ur = (t, i, e) => {
      t.setAttribute("cx", i), t.setAttribute("cy", e), t.setAttribute("r", 7);
    }, zh = (t, i, e, n, r) => {
      const o = document.createElementNS(ie, "path");
      o.setAttribute("fill-rule", "evenodd");
      const { naturalWidth: s, naturalHeight: a } = t;
      return o.setAttribute("d", `M0 0 h${s} v${a} h-${s} z M${i} ${e} h${n} v${r} h-${n} z`), o;
    }, jh = (t, i, e, n, r, o) => {
      const { naturalWidth: s, naturalHeight: a } = i;
      t.setAttribute("d", `M0 0 h${s} v${a} h-${s} z M${e} ${n} h${r} v${o} h-${r} z`);
    }, ps = (t, i, e, n) => {
      const { x: r, y: o, w: s, h: a } = t.type === "Annotation" || t.type === "Selection" ? Ct(t, i) : { x: t, y: i, w: e, h: n }, l = document.createElementNS(ie, "g");
      if (s === 0 && a === 0) {
        yt(l, "a9s-point"), yt(l, "a9s-non-scaling"), l.setAttribute("transform-origin", `${r} ${o}`);
        const u = document.createElementNS(ie, "circle"), c = document.createElementNS(ie, "circle");
        c.setAttribute("class", "a9s-inner"), ur(c, r, o), u.setAttribute("class", "a9s-outer"), ur(u, r, o), l.appendChild(u), l.appendChild(c);
      } else {
        const u = document.createElementNS(ie, "rect"), c = document.createElementNS(ie, "rect");
        c.setAttribute("class", "a9s-inner"), lr(c, r, o, s, a), u.setAttribute("class", "a9s-outer"), lr(u, r, o, s, a), l.appendChild(u), l.appendChild(c);
      }
      return l;
    }, gs = (t) => {
      const i = t.querySelector(".a9s-outer");
      if (i.nodeName === "rect") {
        const e = parseFloat(i.getAttribute("x")), n = parseFloat(i.getAttribute("y")), r = parseFloat(i.getAttribute("width")), o = parseFloat(i.getAttribute("height"));
        return { x: e, y: n, w: r, h: o };
      } else {
        const e = parseFloat(i.getAttribute("cx")), n = parseFloat(i.getAttribute("cy"));
        return { x: e, y: n, w: 0, h: 0 };
      }
    }, Uh = (t, i, e, n, r) => {
      const o = t.querySelector(".a9s-inner"), s = t.querySelector(".a9s-outer");
      s.nodeName === "rect" ? (lr(o, i, e, n, r), lr(s, i, e, n, r)) : (ur(o, i, e), ur(s, i, e));
    }, Mb = (t, i) => {
      const { w: e, h: n } = Ct(t, i);
      return e * n;
    };
    class Ib {
      constructor(i, e, n, r, o) {
        P(this, "dragTo", (s, a) => {
          this.group.style.display = null, this.opposite = [s, a];
          const { x: l, y: u, w: c, h } = this.bbox;
          jh(this.mask, this.env.image, l, u, c, h), Uh(this.rect, l, u, c, h);
        }), P(this, "getBoundingClientRect", () => this.rect.getBoundingClientRect()), P(this, "toSelection", () => {
          const { x: s, y: a, w: l, h: u } = this.bbox;
          return new Kn(vn(s, a, l, u, this.env.image, this.config.fragmentUnit));
        }), P(this, "destroy", () => {
          this.group.parentNode.removeChild(this.group), this.mask = null, this.rect = null, this.group = null;
        }), this.anchor = [i, e], this.opposite = [i, e], this.config = r, this.env = o, this.group = document.createElementNS(ie, "g"), this.mask = zh(o.image, i, e, 2, 2), this.mask.setAttribute("class", "a9s-selection-mask"), this.rect = ps(i, e, 2, 2), this.rect.setAttribute("class", "a9s-selection"), this.group.style.pointerEvents = "none", this.group.style.display = "none", this.group.appendChild(this.mask), this.group.appendChild(this.rect), n.appendChild(this.group);
      }
      get bbox() {
        const i = this.opposite[0] - this.anchor[0], e = this.opposite[1] - this.anchor[1];
        return { x: i > 0 ? this.anchor[0] : this.opposite[0], y: e > 0 ? this.anchor[1] : this.opposite[1], w: Math.max(1, Math.abs(i)), h: Math.max(1, Math.abs(e)) };
      }
      get element() {
        return this.rect;
      }
    }
    const Lb = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup" }, fs = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, Nb = (t) => {
      let i = null;
      const e = (r, o) => new MouseEvent(r, { screenX: o.screenX, screenY: o.screenY, clientX: o.clientX, clientY: o.clientY, pageX: o.pageX, pageY: o.pageY, bubbles: !0 }), n = (r) => {
        const o = r.changedTouches[0], s = e(Lb[r.type], o);
        o.target.dispatchEvent(s), r.preventDefault(), (r.type === "touchstart" || r.type === "touchmove") && (i && clearTimeout(i), i = setTimeout(() => {
          const a = e("dblclick", o);
          o.target.dispatchEvent(a);
        }, 800)), r.type === "touchend" && i && clearTimeout(i);
      };
      t.addEventListener("touchstart", n, !0), t.addEventListener("touchmove", n, !0), t.addEventListener("touchend", n, !0), t.addEventListener("touchcancel", n, !0);
    }, cr = "An implementation is missing", Hb = fs();
    class Vh extends ai {
      constructor(i, e, n) {
        super(), P(this, "enableResponsive", () => {
          window.ResizeObserver && (this.resizeObserver = new ResizeObserver(() => {
            const o = this.svg.getBoundingClientRect(), { width: s, height: a } = this.svg.viewBox.baseVal;
            this.scale = Math.max(s / o.width, a / o.height), this.onScaleChanged && this.onScaleChanged(this.scale);
          }), this.resizeObserver.observe(this.svg.parentNode));
        }), P(this, "getSVGPoint", (o) => {
          const s = this.svg.createSVGPoint();
          if (Hb) {
            const a = this.svg.getBoundingClientRect(), l = o.clientX - a.x, u = o.clientY - a.y, { left: c, top: h } = this.svg.getBoundingClientRect();
            return s.x = l + c, s.y = u + h, s.matrixTransform(this.g.getScreenCTM().inverse());
          } else
            return s.x = o.offsetX, s.y = o.offsetY, s.matrixTransform(this.g.getCTM().inverse());
        }), P(this, "drawHandle", (o, s) => {
          const a = document.createElementNS(ie, "g");
          a.setAttribute("class", "a9s-handle");
          const l = document.createElementNS(ie, "g"), u = (m) => {
            const y = document.createElementNS(ie, "circle");
            return y.setAttribute("cx", o), y.setAttribute("cy", s), y.setAttribute("r", m), y.setAttribute("transform-origin", `${o} ${s}`), y;
          }, c = this.config.handleRadius || 6, h = u(c);
          h.setAttribute("class", "a9s-handle-inner");
          const d = u(c + 1);
          return d.setAttribute("class", "a9s-handle-outer"), l.appendChild(d), l.appendChild(h), a.appendChild(l), a;
        }), P(this, "setHandleXY", (o, s, a) => {
          const l = o.querySelector(".a9s-handle-inner");
          l.setAttribute("cx", s), l.setAttribute("cy", a), l.setAttribute("transform-origin", `${s} ${a}`);
          const u = o.querySelector(".a9s-handle-outer");
          u.setAttribute("cx", s), u.setAttribute("cy", a), u.setAttribute("transform-origin", `${s} ${a}`);
        }), P(this, "getHandleXY", (o) => {
          const s = o.querySelector(".a9s-handle-outer");
          return { x: parseFloat(s.getAttribute("cx")), y: parseFloat(s.getAttribute("cy")) };
        }), P(this, "scaleHandle", (o) => {
          const s = o.querySelector(".a9s-handle-inner"), a = o.querySelector(".a9s-handle-outer"), l = this.scale * (this.config.handleRadius || 6);
          s.setAttribute("r", l), a.setAttribute("r", l);
        }), this.svg = i.closest("svg"), this.g = i, this.config = e, this.env = n, this.scale = 1;
        const { image: r } = n;
        (r instanceof Element || r instanceof HTMLDocument) && this.enableResponsive();
      }
      destroy() {
        this.resizeObserver && this.resizeObserver.disconnect(), this.resizeObserver = null;
      }
    }
    class ms extends Vh {
      constructor(i, e, n) {
        super(i, e, n), P(this, "attachListeners", ({ mouseMove: r, mouseUp: o, dblClick: s }) => {
          r && (this.mouseMove = (a) => {
            const { x: l, y: u } = this.getSVGPoint(a);
            this.started || (this.emit("startSelection", { x: l, y: u }), this.started = !0), r(l, u, a);
          }, this.svg.addEventListener("mousemove", this.mouseMove)), o && (this.mouseUp = (a) => {
            if (a.button !== 0)
              return;
            const { x: l, y: u } = this.getSVGPoint(a);
            o(l, u, a);
          }, document.addEventListener("mouseup", this.mouseUp)), s && (this.dblClick = (a) => {
            const { x: l, y: u } = this.getSVGPoint(a);
            s(l, u, a);
          }, document.addEventListener("dblclick", this.dblClick));
        }), P(this, "detachListeners", () => {
          this.mouseMove && this.svg.removeEventListener("mousemove", this.mouseMove), this.mouseUp && document.removeEventListener("mouseup", this.mouseUp), this.dblClick && document.removeEventListener("dblclick", this.dblClick);
        }), P(this, "start", (r, o) => {
          const { x: s, y: a } = this.getSVGPoint(r), { naturalWidth: l, naturalHeight: u } = this.env.image, c = s < 0 ? 0 : s > l ? l : s, h = a < 0 ? 0 : a > u ? u : a;
          this.startDrawing(c, h, o, r);
        }), P(this, "startDrawing", (r) => {
          throw new Error(cr);
        }), P(this, "createEditableShape", (r, o) => {
          throw new Error(cr);
        }), this.started = !1;
      }
      get isDrawing() {
        throw new Error(cr);
      }
    }
    ms.supports = (t) => {
      throw new Error(cr);
    };
    const Wh = "An implementation is missing";
    class Gh extends Vh {
      constructor(i, e, n, r) {
        super(e, n, r), P(this, "updateState", (o) => {
          throw new Error(Wh);
        }), this.annotation = i;
      }
      get element() {
        throw new Error(Wh);
      }
    }
    const zb = /firefox/i.test(navigator.userAgent), qh = (t, i, e, n, r) => {
      t.setAttribute("width", n), t.setAttribute("height", r), zb ? (t.setAttribute("x", 0), t.setAttribute("y", 0), t.setAttribute("transform", `translate(${i}, ${e})`)) : (t.setAttribute("x", i), t.setAttribute("y", e));
    }, jb = (t, i) => {
      const { x: e, y: n, width: r, height: o } = i.getBBox(), s = document.createElementNS(ie, "svg");
      s.setAttribute("class", "a9s-formatter-el"), qh(s, e, n, r, o);
      const a = document.createElementNS(ie, "g");
      a.appendChild(t), s.appendChild(a), i.append(s);
    }, hr = (t, i, e) => {
      if (!e)
        return t;
      const n = e.reduce((a, l) => {
        const u = l(i);
        if (!u)
          return a;
        if (typeof u == "string" || u instanceof String)
          a.className = a.className ? `${a.className} ${u}` : u;
        else if (u.nodeType === Node.ELEMENT_NODE)
          a.elements = a.elements ? [...a.elements, u] : [u];
        else {
          const { className: c, style: h, element: d } = u;
          c && (a.className = a.className ? `${a.className} ${c}` : c), h && (a.style = a.style ? `${a.style} ${h}` : h), d && (a.elements = a.elements ? [...a.elements, d] : [d]);
        }
        for (const c in u)
          u.hasOwnProperty(c) && c.startsWith("data-") && (a[c] = u[c]);
        return a;
      }, {}), { className: r, style: o, elements: s } = n;
      if (r && yt(t, r), o) {
        const a = t.querySelector(".a9s-outer"), l = t.querySelector(".a9s-inner");
        a && l ? (a.setAttribute("style", "display:none"), l.setAttribute("style", o)) : t.setAttribute("style", o);
      }
      s && s.forEach((a) => jb(a, t));
      for (const a in n)
        n.hasOwnProperty(a) && a.startsWith("data-") && t.setAttribute(a, n[a]);
    }, $h = (t, i, e, n, r) => {
      const o = t.querySelector(".a9s-formatter-el");
      o && qh(o, i, e, n, r);
    }, Jn = "corner", dr = "edge";
    class Ub extends Gh {
      constructor(i, e, n, r) {
        super(i, e, n, r), P(this, "onScaleChanged", () => this.handles.map(this.scaleHandle)), P(this, "setSize", (c, h, d, m) => {
          Uh(this.rectangle, c, h, d, m), jh(this.mask, this.env.image, c, h, d, m), $h(this.elementGroup, c, h, d, m);
          const [y, S, b, A, p, E, T, C] = this.handles;
          this.setHandleXY(y, c, h), this.setHandleXY(S, c + d, h), this.setHandleXY(b, c + d, h + m), this.setHandleXY(A, c, h + m), this.enableEdgeControls && (this.setHandleXY(p, c + d / 2, h), this.setHandleXY(E, c + d, h + m / 2), this.setHandleXY(T, c + d / 2, h + m), this.setHandleXY(C, c, h + m / 2));
        }), P(this, "stretchCorners", (c, h, d) => {
          const m = this.getHandleXY(h), y = d.x - m.x, S = d.y - m.y, b = y > 0 ? m.x : d.x, A = S > 0 ? m.y : d.y, p = Math.abs(y), E = Math.abs(S);
          return this.setSize(b, A, p, E), { x: b, y: A, w: p, h: E };
        }), P(this, "stretchEdge", (c, h, d) => {
          const m = this.getHandleXY(h), y = gs(this.rectangle), S = c % 2 === 0, b = S ? y.w : d.x - m.x, A = S ? d.y - m.y : y.h, p = S ? y.x : b > 0 ? m.x : d.x, E = S ? A > 0 ? m.y : d.y : y.y, T = Math.abs(b), C = Math.abs(A);
          return this.setSize(p, E, T, C), { x: p, y: E, w: T, h: C };
        }), P(this, "onGrab", (c, h) => (d) => {
          if (d.button !== 0)
            return;
          this.grabbedElem = c, this.grabbedType = h;
          const m = this.getSVGPoint(d), { x: y, y: S } = gs(this.rectangle);
          this.mouseOffset = { x: m.x - y, y: m.y - S };
        }), P(this, "onMouseMove", (c) => {
          if (c.button !== 0)
            return;
          const h = (d, m) => d < 0 ? 0 : d > m ? m : d;
          if (this.grabbedElem) {
            const d = this.getSVGPoint(c);
            if (this.grabbedElem === this.rectangle) {
              const { w: m, h: y } = gs(this.rectangle), { naturalWidth: S, naturalHeight: b } = this.env.image, A = h(d.x - this.mouseOffset.x, S - m), p = h(d.y - this.mouseOffset.y, b - y);
              this.setSize(A, p, m, y), this.emit("update", vn(A, p, m, y, this.env.image, this.config.fragmentUnit));
            } else {
              const m = this.handles.indexOf(this.grabbedElem), y = this.handles[m ^ 2], { x: S, y: b, w: A, h: p } = this.grabbedType === Jn ? this.stretchCorners(m, y, d) : this.stretchEdge(m, y, d);
              this.emit("update", vn(S, b, A, p, this.env.image, this.config.fragmentUnit));
            }
          }
        }), P(this, "onMouseUp", (c) => {
          this.grabbedElem = null, this.grabbedType = null, this.mouseOffset = null;
        }), P(this, "updateState", (c) => {
          const { x: h, y: d, w: m, h: y } = Ct(c, this.env.image);
          this.setSize(h, d, m, y);
        }), this.svg.addEventListener("mousemove", this.onMouseMove), this.svg.addEventListener("mouseup", this.onMouseUp);
        const { x: o, y: s, w: a, h: l } = Ct(i, r.image);
        this.containerGroup = document.createElementNS(ie, "g"), this.mask = zh(r.image, o, s, a, l), this.mask.setAttribute("class", "a9s-selection-mask"), this.containerGroup.appendChild(this.mask), this.elementGroup = document.createElementNS(ie, "g"), this.elementGroup.setAttribute("class", "a9s-annotation editable selected"), this.elementGroup.setAttribute("data-id", i.id), this.rectangle = ps(o, s, a, l), this.rectangle.querySelector(".a9s-inner").addEventListener("mousedown", this.onGrab(this.rectangle)), this.elementGroup.appendChild(this.rectangle), this.enableEdgeControls = n.enableEdgeControls;
        const u = this.enableEdgeControls ? [[o + a / 2, s, dr], [o + a, s + l / 2, dr], [o + a / 2, s + l, dr], [o, s + l / 2, dr]] : [];
        this.handles = [[o, s, Jn], [o + a, s, Jn], [o + a, s + l, Jn], [o, s + l, Jn], ...u].map((c) => {
          const [h, d, m] = c, y = this.drawHandle(h, d);
          return y.addEventListener("mousedown", this.onGrab(y, m)), this.elementGroup.appendChild(y), y;
        }), this.containerGroup.appendChild(this.elementGroup), e.appendChild(this.containerGroup), hr(this.rectangle, i, n.formatters), this.grabbedElem = null, this.grabbedType = null, this.mouseOffset = null;
      }
      get element() {
        return this.elementGroup;
      }
      destroy() {
        this.containerGroup.parentNode.removeChild(this.containerGroup), super.destroy();
      }
    }
    class pr extends ms {
      constructor(i, e, n) {
        super(i, e, n), P(this, "startDrawing", (r, o) => {
          this.attachListeners({ mouseMove: this.onMouseMove, mouseUp: this.onMouseUp }), this.rubberband = new Ib(r, o, this.g, this.config, this.env);
        }), P(this, "stop", () => {
          this.rubberband && (this.rubberband.destroy(), this.rubberband = null);
        }), P(this, "onMouseMove", (r, o) => {
          const { naturalWidth: s, naturalHeight: a } = this.env.image, l = Math.min(Math.max(r, 0), s), u = Math.min(Math.max(o, 0), a);
          this.rubberband.dragTo(l, u);
        }), P(this, "onMouseUp", () => {
          this.detachListeners(), this.started = !1;
          const { width: r, height: o } = this.rubberband.getBoundingClientRect(), s = this.config.minSelectionWidth || 4, a = this.config.minSelectionHeight || 4;
          if (r >= s && o >= a) {
            const { element: l } = this.rubberband;
            l.annotation = this.rubberband.toSelection(), this.emit("complete", l);
          } else
            this.emit("cancel");
          this.stop();
        }), P(this, "createEditableShape", (r, o) => new Ub(r, this.g, { ...this.config, formatters: o }, this.env)), this.rubberband = null;
      }
      get isDrawing() {
        return this.rubberband != null;
      }
    }
    pr.identifier = "rect", pr.supports = (t) => {
      const i = t.selector("FragmentSelector");
      return i == null ? void 0 : i.conformsTo.startsWith("http://www.w3.org/TR/media-frags");
    };
    const gr = (t) => {
      let i = 0, e = t.length - 1;
      for (let n = 0; n < t.length; n++)
        i += (t[e][0] + t[n][0]) * (t[e][1] - t[n][1]), e = n;
      return Math.abs(0.5 * i);
    }, Vb = (t, i, e, n) => {
      const r = t[0] - i, o = t[1] - e;
      return Math.sqrt(r * r + o * o) <= n;
    }, Wb = (t, i, e, n, r, o) => {
      const s = o || 0, a = Math.cos(s), l = Math.sin(s), u = t[0] - i, c = t[1] - e, h = a * u + l * c, d = l * u - a * c;
      return h * h / (n * n) + d * d / (r * r) <= 1;
    }, vs = (t, i) => {
      const e = t[0], n = t[1];
      let r = !1;
      for (let o = 0, s = i.length - 1; o < i.length; s = o++) {
        const a = i[o][0], l = i[o][1], u = i[s][0], c = i[s][1];
        l > n != c > n && e < (u - a) * (n - l) / (c - l) + a && (r = !r);
      }
      return r;
    }, Gb = (t, i) => {
      for (let e of t)
        if (!vs(e, i))
          return !1;
      return !0;
    }, qb = (t, i, e, n, r, o) => {
      const s = t[0], a = t[1], l = n - i, u = r - e, c = Math.sqrt(l * l + u * u);
      return Math.abs((s - i) * u - (a - e) * l) / c <= o;
    }, Xh = (t) => {
      const i = t.getAttribute("d").split(/(?=M|m|L|l|H|h|V|v|Z|z)/g).map((r) => r.trim()), e = [];
      let n = [];
      for (let r of i) {
        const o = r.substring(0, 1);
        if (o.toLowerCase() === "z")
          e.push([...n]), n = [];
        else {
          const s = r.substring(1).split(" ").map((c) => parseFloat(c.trim())), a = o === o.toUpperCase(), l = a ? s[0] : s[0] + n[n.length - 1][0], u = a ? s[1] : s[1] + n[n.length - 1][1];
          n.push([l, u]);
        }
      }
      return n.length > 0 && e.push([...n]), e;
    }, $b = (t) => {
      const i = new XMLSerializer().serializeToString(t.documentElement).replace("<svg>", `<svg xmlns="${ie}">`);
      return new DOMParser().parseFromString(i, "image/svg+xml").documentElement;
    }, Yh = (t) => {
      const i = (n) => {
        Array.from(n.attributes).forEach((r) => {
          r.name.startsWith("on") && n.removeAttribute(r.name);
        });
      }, e = t.getElementsByTagName("script");
      return Array.from(e).reverse().forEach((n) => n.parentNode.removeChild(n)), i(t), Array.from(t.querySelectorAll("*")).forEach(i), t;
    }, jt = (t) => {
      const i = t.selector("SvgSelector");
      if (i) {
        const e = new DOMParser(), { value: n } = i, r = e.parseFromString(n, "image/svg+xml"), o = r.lookupPrefix(ie), s = r.lookupNamespaceURI(null);
        return o || s ? Yh(r).firstChild : Yh($b(r)).firstChild;
      }
    }, Zh = (t) => {
      const i = jt(t), e = document.createElementNS(ie, "g"), n = i.cloneNode(!0);
      n.setAttribute("class", "a9s-inner");
      const r = i.cloneNode(!0);
      return r.setAttribute("class", "a9s-outer"), e.appendChild(r), e.appendChild(n), e;
    }, ys = (t, i) => {
      const e = t.querySelector(".a9s-inner").cloneNode(!0);
      e.removeAttribute("class"), e.removeAttribute("xmlns");
      let n = e.outerHTML || new XMLSerializer().serializeToString(e);
      return n = n.replace(` xmlns="${ie}"`, ""), { source: i == null ? void 0 : i.src, selector: { type: "SvgSelector", value: `<svg>${n}</svg>` } };
    }, Xb = (t) => {
      const i = jt(t), e = i.nodeName.toLowerCase();
      if (e === "polygon")
        return Yb(i);
      if (e === "circle")
        return Zb(i);
      if (e === "ellipse")
        return Kb(i);
      if (e == "path")
        return Jb(i);
      if (e == "line")
        return 0;
      throw `Unsupported SVG shape type: ${e}`;
    }, Yb = (t) => {
      const i = t.getAttribute("points").trim().split(" ").map((e) => e.split(",").map((n) => parseFloat(n.trim())));
      return gr(i);
    }, Zb = (t) => {
      const i = t.getAttribute("r");
      return i * i * Math.PI;
    }, Kb = (t) => {
      const i = t.getAttribute("rx"), e = t.getAttribute("ry");
      return i * e * Math.PI;
    }, Jb = (t) => {
      const i = Xh(t);
      if (i.length == 1)
        return gr(i[0]);
      {
        const e = (r) => i.find((o) => {
          if (r !== o)
            return Gb(r, o);
        });
        let n = 0;
        for (let r of i)
          e(r) ? n -= gr(r) : n += gr(r);
        return n;
      }
    };
    class Kh {
      constructor(i, e) {
        P(this, "redraw", () => {
          this.mask.setAttribute("d", `M0 0 h${this.w} v${this.h} h-${this.w} z M${this.polygon.getAttribute("points")} z`);
        }), P(this, "destroy", () => this.mask.parentNode.removeChild(this.mask)), this.w = i.naturalWidth, this.h = i.naturalHeight, this.polygon = e, this.mask = document.createElementNS(ie, "path"), this.mask.setAttribute("fill-rule", "evenodd"), this.mask.setAttribute("class", "a9s-selection-mask"), this.mask.setAttribute("d", `M0 0 h${this.w} v${this.h} h-${this.w} z M${this.polygon.getAttribute("points")} z`);
      }
      get element() {
        return this.mask;
      }
    }
    class Qb {
      constructor(i, e, n) {
        P(this, "setPoints", (r) => {
          const o = r.map((s) => `${s[0]},${s[1]}`).join(" ");
          this.outer.setAttribute("points", o), this.inner.setAttribute("points", o);
        }), P(this, "getBoundingClientRect", () => this.outer.getBoundingClientRect()), P(this, "dragTo", (r) => {
          this.group.style.display = null, this.mousepos = r;
          const o = [...this.points, r];
          this.setPoints(o), this.mask.redraw();
        }), P(this, "addPoint", () => {
          const [r, o] = this.mousepos, s = this.points[this.points.length - 1];
          Math.pow(r - s[0], 2) + Math.pow(o - s[1], 2) > 4 && (this.points = [...this.points, this.mousepos], this.setPoints(this.points), this.mask.redraw());
        }), P(this, "destroy", () => {
          this.group.parentNode.removeChild(this.group), this.polygon = null, this.group = null;
        }), P(this, "toSelection", () => new Kn(ys(this.group, this.env.image))), this.points = [i], this.env = n, this.mousepos = i, this.group = document.createElementNS(ie, "g"), this.polygon = document.createElementNS(ie, "g"), this.polygon.setAttribute("class", "a9s-selection"), this.outer = document.createElementNS(ie, "polygon"), this.outer.setAttribute("class", "a9s-outer"), this.inner = document.createElementNS(ie, "polygon"), this.inner.setAttribute("class", "a9s-inner"), this.setPoints(this.points), this.mask = new Kh(n.image, this.inner), this.polygon.appendChild(this.outer), this.polygon.appendChild(this.inner), this.group.style.display = "none", this.group.appendChild(this.mask.element), this.group.appendChild(this.polygon), e.appendChild(this.group);
      }
      get element() {
        return this.polygon;
      }
    }
    const Es = (t) => {
      const i = t.querySelector(".a9s-inner").points, e = [];
      for (let n = 0; n < i.numberOfItems; n++)
        e.push(i.getItem(n));
      return e;
    }, ex = (t) => t.querySelector(".a9s-inner").getBBox();
    class tx extends Gh {
      constructor(i, e, n, r) {
        super(i, e, n, r), P(this, "onScaleChanged", () => this.handles.map(this.scaleHandle)), P(this, "setPoints", (o) => {
          const s = (m) => Math.round(10 * m) / 10, a = o.map((m) => `${s(m.x)},${s(m.y)}`).join(" ");
          this.shape.querySelector(".a9s-inner").setAttribute("points", a);
          const l = this.shape.querySelector(".a9s-outer");
          l.setAttribute("points", a), this.mask.redraw();
          const { x: u, y: c, width: h, height: d } = l.getBBox();
          $h(this.elementGroup, u, c, h, d);
        }), P(this, "onGrab", (o) => (s) => {
          s.button === 0 && (this.grabbedElem = o, this.grabbedAt = this.getSVGPoint(s));
        }), P(this, "onMouseMove", (o) => {
          const s = (a, l, u) => a + l < 0 ? -a : a + l > u ? u - a : l;
          if (this.grabbedElem) {
            const a = this.getSVGPoint(o);
            if (this.grabbedElem === this.shape) {
              const { x: l, y: u, width: c, height: h } = ex(this.shape), { naturalWidth: d, naturalHeight: m } = this.env.image, y = s(l, a.x - this.grabbedAt.x, d - c), S = s(u, a.y - this.grabbedAt.y, m - h), b = Es(this.shape).map((A) => ({ x: A.x + y, y: A.y + S }));
              this.grabbedAt = a, this.setPoints(b), b.forEach((A, p) => this.setHandleXY(this.handles[p], A.x, A.y)), this.emit("update", ys(this.shape, this.env.image));
            } else {
              const l = this.handles.indexOf(this.grabbedElem), u = Es(this.shape).map((c, h) => h === l ? a : c);
              this.setPoints(u), this.setHandleXY(this.handles[l], a.x, a.y), this.emit("update", ys(this.shape, this.env.image));
            }
          }
        }), P(this, "onMouseUp", (o) => {
          this.grabbedElem = null, this.grabbedAt = null;
        }), P(this, "updateState", (o) => {
          const s = jt(o).getAttribute("points").split(" ").map((a) => {
            const [l, u] = a.split(",").map((c) => parseFloat(c.trim()));
            return { x: l, y: u };
          });
          this.setPoints(s), s.forEach((a, l) => this.setHandleXY(this.handles[l], a.x, a.y));
        }), P(this, "destroy", () => {
          this.containerGroup.parentNode.removeChild(this.containerGroup), super.destroy();
        }), this.svg.addEventListener("mousemove", this.onMouseMove), this.svg.addEventListener("mouseup", this.onMouseUp), this.containerGroup = document.createElementNS(ie, "g"), this.shape = Zh(i), this.shape.querySelector(".a9s-inner").addEventListener("mousedown", this.onGrab(this.shape)), this.mask = new Kh(r.image, this.shape.querySelector(".a9s-inner")), this.containerGroup.appendChild(this.mask.element), this.elementGroup = document.createElementNS(ie, "g"), this.elementGroup.setAttribute("class", "a9s-annotation editable selected"), this.elementGroup.setAttribute("data-id", i.id), this.elementGroup.appendChild(this.shape), this.handles = Es(this.shape).map((o) => {
          const s = this.drawHandle(o.x, o.y);
          return s.addEventListener("mousedown", this.onGrab(s)), this.elementGroup.appendChild(s), s;
        }), this.containerGroup.appendChild(this.elementGroup), e.appendChild(this.containerGroup), hr(this.shape, i, n.formatters), this.grabbedElem = null, this.grabbedAt = null;
      }
      get element() {
        return this.elementGroup;
      }
    }
    class ws extends ms {
      constructor(i, e, n) {
        super(i, e, n), P(this, "startDrawing", (r, o, s) => {
          this._isDrawing = !0, this._startOnSingleClick = s, this.attachListeners({ mouseMove: this.onMouseMove, mouseUp: this.onMouseUp, dblClick: this.onDblClick }), this.rubberband = new Qb([r, o], this.g, this.env);
        }), P(this, "stop", () => {
          this.detachListeners(), this._isDrawing = !1, this.rubberband && (this.rubberband.destroy(), this.rubberband = null);
        }), P(this, "onMouseMove", (r, o) => this.rubberband.dragTo([r, o])), P(this, "onMouseUp", () => {
          const { width: r, height: o } = this.rubberband.getBoundingClientRect(), s = this.config.minSelectionWidth || 4, a = this.config.minSelectionHeight || 4;
          r >= s || o >= a ? this.rubberband.addPoint() : this._startOnSingleClick || (this.emit("cancel"), this.stop());
        }), P(this, "onDblClick", () => {
          this._isDrawing = !1;
          const r = this.rubberband.element;
          r.annotation = this.rubberband.toSelection(), this.emit("complete", r), this.stop();
        }), P(this, "createEditableShape", (r, o) => new tx(r, this.g, { ...this.config, formatters: o }, this.env)), this._isDrawing = !1, this._startOnSingleClick = !1;
      }
      get isDrawing() {
        return this._isDrawing;
      }
    }
    ws.identifier = "polygon", ws.supports = (t) => {
      var i;
      const e = t.selector("SvgSelector");
      if (e)
        return (i = e.value) == null ? void 0 : i.match(/^<svg.*<polygon/g);
    };
    class nx extends ai {
      constructor(i, e, n) {
        super(), P(this, "listTools", () => this._registered.map((r) => r.identifier)), P(this, "registerTool", (r) => {
          const o = r.identifier;
          this.listTools().includes(o) && this.unregisterTool(o), this._registered.unshift(r);
        }), P(this, "unregisterTool", (r) => this._registered = this._registered.filter((o) => o.identifier !== r)), P(this, "setCurrent", (r) => {
          this._current && this._current.destroy();
          const o = typeof r == "string" || r instanceof String ? this._registered.find((s) => s.identifier === r) : r;
          this._current = new o(this._g, this._config, this._env), this._current.on("startSelection", (s) => this.emit("startSelection", s)), this._current.on("complete", (s) => this.emit("complete", s)), this._current.on("cancel", (s) => this.emit("cancel", s));
        }), P(this, "forAnnotation", (r) => {
          var o;
          const [s, ...a] = r.targets, l = (o = s.renderedVia) == null ? void 0 : o.name, u = l ? this._registered.find((c) => c.identifier === l) : this._registered.find((c) => c.supports(r));
          return u ? new u(this._g, this._config, this._env) : null;
        }), this._g = i, this._config = e, this._env = n, this._registered = [pr, ws], this.setCurrent(pr);
      }
      get current() {
        return this._current;
      }
    }
    const ix = { FragmentSelector: ps, SvgSelector: Zh }, rx = { FragmentSelector: Mb, SvgSelector: Xb }, Jh = (t) => {
      const i = t.targets[0];
      if (i)
        return Array.isArray(i.selector) ? i.selector[0] : i.selector;
    }, bs = (t, i) => ix[Jh(t).type](t, i), Qh = (t, i) => rx[Jh(t).type](t, i);
    class ox {
      constructor(i) {
        const e = document.createElementNS(ie, "svg");
        e.setAttribute("class", "a9s-osd-crosshair-container");
        const n = document.createElementNS(ie, "g");
        n.setAttribute("class", "a9s-crosshair"), e.appendChild(n);
        const r = document.createElementNS(ie, "line"), o = document.createElementNS(ie, "line");
        n.appendChild(r), n.appendChild(o), i.parentElement.appendChild(e);
        const s = (a) => {
          const { offsetX: l, offsetY: u } = a, c = i.parentElement.offsetWidth, h = i.parentElement.offsetHeight;
          r.setAttribute("x1", 0), r.setAttribute("y1", u), r.setAttribute("x2", c), r.setAttribute("y2", u), o.setAttribute("x1", l), o.setAttribute("y1", 0), o.setAttribute("x2", l), o.setAttribute("y2", h);
        };
        i.addEventListener("pointermove", s), i.parentElement.addEventListener("pointermove", s);
      }
    }
    function sx(t, i, e, n, r) {
      ed(t, i, e || 0, n || t.length - 1, r || ax);
    }
    function ed(t, i, e, n, r) {
      for (; n > e; ) {
        if (n - e > 600) {
          var o = n - e + 1, s = i - e + 1, a = Math.log(o), l = 0.5 * Math.exp(2 * a / 3), u = 0.5 * Math.sqrt(a * l * (o - l) / o) * (s - o / 2 < 0 ? -1 : 1), c = Math.max(e, Math.floor(i - s * l / o + u)), h = Math.min(n, Math.floor(i + (o - s) * l / o + u));
          ed(t, i, c, h, r);
        }
        var d = t[i], m = e, y = n;
        for (Qn(t, e, i), r(t[n], d) > 0 && Qn(t, e, n); m < y; ) {
          for (Qn(t, m, y), m++, y--; r(t[m], d) < 0; )
            m++;
          for (; r(t[y], d) > 0; )
            y--;
        }
        r(t[e], d) === 0 ? Qn(t, e, y) : (y++, Qn(t, y, n)), y <= i && (e = y + 1), i <= y && (n = y - 1);
      }
    }
    function Qn(t, i, e) {
      var n = t[i];
      t[i] = t[e], t[e] = n;
    }
    function ax(t, i) {
      return t < i ? -1 : t > i ? 1 : 0;
    }
    class lx {
      constructor(i = 9) {
        this._maxEntries = Math.max(4, i), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
      }
      all() {
        return this._all(this.data, []);
      }
      search(i) {
        let e = this.data;
        const n = [];
        if (!mr(i, e))
          return n;
        const r = this.toBBox, o = [];
        for (; e; ) {
          for (let s = 0; s < e.children.length; s++) {
            const a = e.children[s], l = e.leaf ? r(a) : a;
            mr(i, l) && (e.leaf ? n.push(a) : Ss(i, l) ? this._all(a, n) : o.push(a));
          }
          e = o.pop();
        }
        return n;
      }
      collides(i) {
        let e = this.data;
        if (!mr(i, e))
          return !1;
        const n = [];
        for (; e; ) {
          for (let r = 0; r < e.children.length; r++) {
            const o = e.children[r], s = e.leaf ? this.toBBox(o) : o;
            if (mr(i, s)) {
              if (e.leaf || Ss(i, s))
                return !0;
              n.push(o);
            }
          }
          e = n.pop();
        }
        return !1;
      }
      load(i) {
        if (!(i && i.length))
          return this;
        if (i.length < this._minEntries) {
          for (let n = 0; n < i.length; n++)
            this.insert(i[n]);
          return this;
        }
        let e = this._build(i.slice(), 0, i.length - 1, 0);
        if (!this.data.children.length)
          this.data = e;
        else if (this.data.height === e.height)
          this._splitRoot(this.data, e);
        else {
          if (this.data.height < e.height) {
            const n = this.data;
            this.data = e, e = n;
          }
          this._insert(e, this.data.height - e.height - 1, !0);
        }
        return this;
      }
      insert(i) {
        return i && this._insert(i, this.data.height - 1), this;
      }
      clear() {
        return this.data = En([]), this;
      }
      remove(i, e) {
        if (!i)
          return this;
        let n = this.data;
        const r = this.toBBox(i), o = [], s = [];
        let a, l, u;
        for (; n || o.length; ) {
          if (n || (n = o.pop(), l = o[o.length - 1], a = s.pop(), u = !0), n.leaf) {
            const c = ux(i, n.children, e);
            if (c !== -1)
              return n.children.splice(c, 1), o.push(n), this._condense(o), this;
          }
          !u && !n.leaf && Ss(n, r) ? (o.push(n), s.push(a), a = 0, l = n, n = n.children[0]) : l ? (a++, n = l.children[a], u = !1) : n = null;
        }
        return this;
      }
      toBBox(i) {
        return i;
      }
      compareMinX(i, e) {
        return i.minX - e.minX;
      }
      compareMinY(i, e) {
        return i.minY - e.minY;
      }
      toJSON() {
        return this.data;
      }
      fromJSON(i) {
        return this.data = i, this;
      }
      _all(i, e) {
        const n = [];
        for (; i; )
          i.leaf ? e.push(...i.children) : n.push(...i.children), i = n.pop();
        return e;
      }
      _build(i, e, n, r) {
        const o = n - e + 1;
        let s = this._maxEntries, a;
        if (o <= s)
          return a = En(i.slice(e, n + 1)), yn(a, this.toBBox), a;
        r || (r = Math.ceil(Math.log(o) / Math.log(s)), s = Math.ceil(o / Math.pow(s, r - 1))), a = En([]), a.leaf = !1, a.height = r;
        const l = Math.ceil(o / s), u = l * Math.ceil(Math.sqrt(s));
        td(i, e, n, u, this.compareMinX);
        for (let c = e; c <= n; c += u) {
          const h = Math.min(c + u - 1, n);
          td(i, c, h, l, this.compareMinY);
          for (let d = c; d <= h; d += l) {
            const m = Math.min(d + l - 1, h);
            a.children.push(this._build(i, d, m, r - 1));
          }
        }
        return yn(a, this.toBBox), a;
      }
      _chooseSubtree(i, e, n, r) {
        for (; r.push(e), !(e.leaf || r.length - 1 === n); ) {
          let o = 1 / 0, s = 1 / 0, a;
          for (let l = 0; l < e.children.length; l++) {
            const u = e.children[l], c = xs(u), h = dx(i, u) - c;
            h < s ? (s = h, o = c < o ? c : o, a = u) : h === s && c < o && (o = c, a = u);
          }
          e = a || e.children[0];
        }
        return e;
      }
      _insert(i, e, n) {
        const r = n ? i : this.toBBox(i), o = [], s = this._chooseSubtree(r, this.data, e, o);
        for (s.children.push(i), ti(s, r); e >= 0 && o[e].children.length > this._maxEntries; )
          this._split(o, e), e--;
        this._adjustParentBBoxes(r, o, e);
      }
      _split(i, e) {
        const n = i[e], r = n.children.length, o = this._minEntries;
        this._chooseSplitAxis(n, o, r);
        const s = this._chooseSplitIndex(n, o, r), a = En(n.children.splice(s, n.children.length - s));
        a.height = n.height, a.leaf = n.leaf, yn(n, this.toBBox), yn(a, this.toBBox), e ? i[e - 1].children.push(a) : this._splitRoot(n, a);
      }
      _splitRoot(i, e) {
        this.data = En([i, e]), this.data.height = i.height + 1, this.data.leaf = !1, yn(this.data, this.toBBox);
      }
      _chooseSplitIndex(i, e, n) {
        let r, o = 1 / 0, s = 1 / 0;
        for (let a = e; a <= n - e; a++) {
          const l = ei(i, 0, a, this.toBBox), u = ei(i, a, n, this.toBBox), c = px(l, u), h = xs(l) + xs(u);
          c < o ? (o = c, r = a, s = h < s ? h : s) : c === o && h < s && (s = h, r = a);
        }
        return r || n - e;
      }
      _chooseSplitAxis(i, e, n) {
        const r = i.leaf ? this.compareMinX : cx, o = i.leaf ? this.compareMinY : hx, s = this._allDistMargin(i, e, n, r), a = this._allDistMargin(i, e, n, o);
        s < a && i.children.sort(r);
      }
      _allDistMargin(i, e, n, r) {
        i.children.sort(r);
        const o = this.toBBox, s = ei(i, 0, e, o), a = ei(i, n - e, n, o);
        let l = fr(s) + fr(a);
        for (let u = e; u < n - e; u++) {
          const c = i.children[u];
          ti(s, i.leaf ? o(c) : c), l += fr(s);
        }
        for (let u = n - e - 1; u >= e; u--) {
          const c = i.children[u];
          ti(a, i.leaf ? o(c) : c), l += fr(a);
        }
        return l;
      }
      _adjustParentBBoxes(i, e, n) {
        for (let r = n; r >= 0; r--)
          ti(e[r], i);
      }
      _condense(i) {
        for (let e = i.length - 1, n; e >= 0; e--)
          i[e].children.length === 0 ? e > 0 ? (n = i[e - 1].children, n.splice(n.indexOf(i[e]), 1)) : this.clear() : yn(i[e], this.toBBox);
      }
    }
    function ux(t, i, e) {
      if (!e)
        return i.indexOf(t);
      for (let n = 0; n < i.length; n++)
        if (e(t, i[n]))
          return n;
      return -1;
    }
    function yn(t, i) {
      ei(t, 0, t.children.length, i, t);
    }
    function ei(t, i, e, n, r) {
      r || (r = En(null)), r.minX = 1 / 0, r.minY = 1 / 0, r.maxX = -1 / 0, r.maxY = -1 / 0;
      for (let o = i; o < e; o++) {
        const s = t.children[o];
        ti(r, t.leaf ? n(s) : s);
      }
      return r;
    }
    function ti(t, i) {
      return t.minX = Math.min(t.minX, i.minX), t.minY = Math.min(t.minY, i.minY), t.maxX = Math.max(t.maxX, i.maxX), t.maxY = Math.max(t.maxY, i.maxY), t;
    }
    function cx(t, i) {
      return t.minX - i.minX;
    }
    function hx(t, i) {
      return t.minY - i.minY;
    }
    function xs(t) {
      return (t.maxX - t.minX) * (t.maxY - t.minY);
    }
    function fr(t) {
      return t.maxX - t.minX + (t.maxY - t.minY);
    }
    function dx(t, i) {
      return (Math.max(i.maxX, t.maxX) - Math.min(i.minX, t.minX)) * (Math.max(i.maxY, t.maxY) - Math.min(i.minY, t.minY));
    }
    function px(t, i) {
      const e = Math.max(t.minX, i.minX), n = Math.max(t.minY, i.minY), r = Math.min(t.maxX, i.maxX), o = Math.min(t.maxY, i.maxY);
      return Math.max(0, r - e) * Math.max(0, o - n);
    }
    function Ss(t, i) {
      return t.minX <= i.minX && t.minY <= i.minY && i.maxX <= t.maxX && i.maxY <= t.maxY;
    }
    function mr(t, i) {
      return i.minX <= t.maxX && i.minY <= t.maxY && i.maxX >= t.minX && i.maxY >= t.minY;
    }
    function En(t) {
      return { children: t, height: 1, leaf: !0, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
    }
    function td(t, i, e, n, r) {
      const o = [i, e];
      for (; o.length; ) {
        if (e = o.pop(), i = o.pop(), e - i <= n)
          continue;
        const s = i + Math.ceil((e - i) / n / 2) * n;
        sx(t, s, i, e, r), o.push(i, s, s, e);
      }
    }
    const _s = (t, i) => {
      if (t.targets[0].selector.type === "FragmentSelector") {
        const { x: e, y: n, w: r, h: o } = Ct(t, i);
        return { minX: e, minY: n, maxX: e + r, maxY: n + o };
      } else {
        const e = bs(t, i), n = document.createElementNS(ie, "svg");
        n.style.position = "absolute", n.style.opacity = 0, n.style.top = 0, n.style.left = 0, n.appendChild(e), document.body.appendChild(n);
        const { x: r, y: o, width: s, height: a } = e.getBBox();
        return document.body.removeChild(n), { minX: r, minY: o, maxX: r + s, maxY: o + a };
      }
    }, gx = (t) => {
      var i;
      const e = t.targets[0];
      return Array.isArray(e.selector) ? e.selector[0].type : (i = e.selector) == null ? void 0 : i.type;
    }, fx = (t, i, e, n) => {
      const r = jt(e), o = r.nodeName.toLowerCase(), s = [t, i];
      if (o === "polygon") {
        const a = Array.from(r.points).map((l) => [l.x, l.y]);
        return vs(s, a);
      } else if (o === "circle") {
        const a = r.getAttribute("cx"), l = r.getAttribute("cy"), u = r.getAttribute("r");
        return Vb(s, a, l, u);
      } else if (o === "ellipse") {
        const a = r.getAttribute("cx"), l = r.getAttribute("cy"), u = r.getAttribute("rx"), c = r.getAttribute("ry");
        return Wb(s, a, l, u, c);
      } else {
        if (o === "path")
          return Xh(r).find((a) => vs(s, a));
        if (o === "line") {
          const a = parseInt(r.getAttribute("x1")), l = parseInt(r.getAttribute("y1")), u = parseInt(r.getAttribute("x2")), c = parseInt(r.getAttribute("y2"));
          return qb(s, a, l, u, c, n);
        } else
          throw `Unsupported SVG shape type: ${o}`;
      }
    };
    class mx {
      constructor(i) {
        P(this, "clear", () => this.spatial_index.clear()), P(this, "getAnnotationAt", (e, n, r) => {
          const o = r ? 5 / r : 5, s = this.spatial_index.search({ minX: e - o, minY: n - o, maxX: e + o, maxY: n + o }).map((a) => a.annotation).filter((a) => {
            const l = gx(a);
            if (l === "FragmentSelector")
              return !0;
            if (l === "SvgSelector")
              return fx(e, n, a, o);
            throw `Unsupported selector type: ${l}`;
          });
          if (s.length > 0)
            return s.sort((a, l) => Qh(a, this.env.image) - Qh(l, this.env.image)), s[0];
        }), P(this, "getAnnotationsIntersecting", (e) => {
          const n = e.minX, r = n ? e : _s(e, this.env.image), o = this.spatial_index.search(r).map((s) => s.annotation);
          return n ? o : o.filter((s) => !s.isEqual(e));
        }), P(this, "insert", (e) => {
          (Array.isArray(e) ? e : [e]).forEach((n) => {
            this.spatial_index.insert({ ..._s(n, this.env.image), annotation: n });
          });
        }), P(this, "getBounds", (e) => this.getBounds(e, this.env.image)), P(this, "remove", (e) => {
          const n = { ..._s(e, this.env.image), annotation: e };
          this.spatial_index.remove(n, (r, o) => r.annotation.id === o.annotation.id);
        }), this.env = i, i.store = this, this.spatial_index = new lx();
      }
    }
    const nd = (t, i) => {
      const e = (ds(i, ".a9s-annotation") ? i : i.closest(".a9s-annotation")).querySelector(".a9s-outer").getBoundingClientRect(), { canvas: n } = t.drawer, r = n.getBoundingClientRect(), o = n.width / r.width, s = n.height / r.height, a = e.x - r.x, l = e.y - r.y, { width: u, height: c } = e, h = document.createElement("CANVAS"), d = h.getContext("2d");
      h.width = u, h.height = c, d.drawImage(n, a * o, l * s, u * o, c * s, 0, 0, u, c);
      const m = t.viewport.viewerElementToImageCoordinates(new vt.Point(a, l)), y = t.viewport.viewportToImageZoom(t.viewport.getZoom());
      return { snippet: h, transform: (S) => {
        const b = m.x + S[0] / o / y, A = m.y + S[1] / s / y;
        return [b, A];
      } };
    }, vx = fs();
    class id extends ai {
      constructor(i) {
        super(), P(this, "_getShapeAt", (n) => {
          const r = (l) => {
            const u = this.svg.createSVGPoint();
            if (window.TouchEvent && l instanceof TouchEvent) {
              const c = this.svg.getBoundingClientRect(), h = l.touches[0], d = h.clientX - c.x, m = h.clientY - c.y, { left: y, top: S } = this.svg.getBoundingClientRect();
              return u.x = d + y, u.y = m + S, u.matrixTransform(this.g.getScreenCTM().inverse());
            } else
              return u.x = l.offsetX, u.y = l.offsetY, u.matrixTransform(this.g.getCTM().inverse());
          }, { x: o, y: s } = r(n), a = this.store.getAnnotationAt(o, s, this.currentScale());
          if (a)
            return this.findShape(a);
        }), P(this, "_initDrawingTools", (n) => {
          var r;
          let o = !1, s = !1, a = !1;
          this.tools = new nx(this.g, this.config, this.env), this.tools.on("complete", (c) => {
            s = !1, this.onDrawingComplete(c);
          }), this.mouseTracker = new vt.MouseTracker({ element: this.svg, preProcessEventHandler: (c) => {
            this.mouseTracker.enabled || (c.preventDefault = !1, c.preventGesture = !0), this.selectedShape && c.eventType === "wheel" && (c.preventDefault = !1, this.viewer.canvas.dispatchEvent(new c.originalEvent.constructor(c.eventType, c.originalEvent)));
          }, pressHandler: (c) => {
            this.tools.current.isDrawing || (this.tools.current.start(c.originalEvent, this.drawOnSingleClick && !this.hoveredShape), n || this.scaleTool(this.tools.current));
          }, moveHandler: (c) => {
            if (this.tools.current.isDrawing) {
              const { x: h, y: d } = this.tools.current.getSVGPoint(c.originalEvent);
              s || c.originalEvent.stopPropagation(), this.tools.current.onMouseMove(h, d, c.originalEvent), o || (this.emit("startSelection", { x: h, y: d }), o = !0), !a && this.tools.current.onDragStart && (this.tools.current.onDragStart(h, d, c.originalEvent), a = !0);
            }
          }, releaseHandler: (c) => {
            if (this.tools.current.isDrawing) {
              const { x: h, y: d } = this.tools.current.getSVGPoint(c.originalEvent);
              o && (this.emit("endSelection", { x: h, y: d }), s = !0), this.tools.current.onMouseUp(h, d, c.originalEvent), a && this.tools.current.onDragEnd && this.tools.current.onDragEnd();
            }
            o = !1, a = !1;
          } });
          const l = this.config.hotkey ? this.config.hotkey.key ? this.config.hotkey.key.toLowerCase() : this.config.hotkey.toLowerCase() : "shift", u = (r = this.config.hotkey) == null ? void 0 : r.inverted;
          this.mouseTracker.enabled = u, this.onKeyDown && document.removeEventListener("keydown", this.onKeyDown), this.onKeyUp && document.removeEventListener("keydown", this.onKeyDown), this.onKeyDown = (c) => {
            if (c.key.toLowerCase() === l && !this.selectedShape) {
              const h = !this.readOnly && !u;
              this.mouseTracker.enabled = h, this.tools.current.enabled = h;
            }
          }, this.onKeyUp = (c) => {
            c.key.toLowerCase() === l && !this.tools.current.isDrawing && (this.mouseTracker.enabled = u, this.tools.current.enabled = u, s = !1);
          }, document.addEventListener("keydown", this.onKeyDown), document.addEventListener("keyup", this.onKeyUp);
        }), P(this, "_initMouseEvents", () => {
          this.svg.addEventListener("mousemove", (r) => {
            var o, s;
            if (!((o = this.tools) != null && o.current.isDrawing) && !r.target.closest(".a9s-annotation.editable.selected")) {
              const a = this._getShapeAt(r);
              if ((a == null ? void 0 : a.annotation) !== ((s = this.hoveredShape) == null ? void 0 : s.annotation)) {
                if (this.hoveredShape) {
                  const l = this.hoveredShape.element || this.hoveredShape;
                  ar(l, "hover"), this.emit("mouseLeaveAnnotation", this.hoveredShape.annotation, this.hoveredShape);
                }
                a && (yt(a, "hover"), this.emit("mouseEnterAnnotation", a.annotation, a));
              }
              this.hoveredShape = a;
            }
          }), this.svg.parentElement.addEventListener("mouseleave", () => {
            this.hoveredShape && (ar(this.hoveredShape, "hover"), this.emit("mouseLeaveAnnotation", this.hoveredShape.annotation, this.hoveredShape), this.hoveredShape = null);
          });
          let n = null;
          this.viewer.addHandler("canvas-press", () => n = (/* @__PURE__ */ new Date()).getTime()), this.viewer.addHandler("canvas-click", (r) => {
            var o;
            const { originalEvent: s } = r;
            if (!((o = this.tools.current) != null && o.isDrawing || this.disableSelect) && (/* @__PURE__ */ new Date()).getTime() - n < 250) {
              const a = s.target.closest(".a9s-annotation.editable.selected") ? this.selectedShape : this._getShapeAt(s);
              a ? (r.preventDefaultAction = !0, this.selectShape(a)) : a || (this.deselect(), this.emit("select", {}));
            }
            this.disableSelect && this.hoveredShape && this.emit("clickAnnotation", this.hoveredShape.annotation, this.hoveredShape);
          });
        }), P(this, "_lazy", (n) => {
          if (this.viewer.world.getItemAt(0))
            n();
          else {
            const r = () => {
              n(), this.viewer.removeHandler("open", r), this.viewer.world.removeHandler("add-item", r);
            };
            this.viewer.addHandler("open", r), this.viewer.world.addHandler("add-item", r);
          }
        }), P(this, "_refreshNonScalingAnnotations", () => {
          const n = this.currentScale();
          Array.from(this.svg.querySelectorAll(".a9s-non-scaling")).forEach((r) => r.setAttribute("transform", `scale(${1 / n})`));
        }), P(this, "addAnnotation", (n, r) => {
          const o = r || this.g, s = bs(n, this.env.image);
          return yt(s, "a9s-annotation"), s.setAttribute("data-id", n.id), s.annotation = n, o.appendChild(s), hr(s, n, this.formatters), this.scaleFormatterElements(s), s;
        }), P(this, "addDrawingTool", (n) => this.tools.registerTool(n)), P(this, "addOrUpdateAnnotation", (n, r) => {
          var o;
          const s = (o = this.selectedShape) == null ? void 0 : o.annotation;
          (s === n || s != null && s.isSelection || s == r) && this.deselect(), r && this.removeAnnotation(n), this.removeAnnotation(n);
          const a = this.addAnnotation(n);
          ds(a, "a9s-non-scaling") && a.setAttribute("transform", `scale(${1 / this.currentScale()})`), this.store.insert(n);
        }), P(this, "currentScale", () => {
          const n = this.viewer.viewport.getContainerSize().x;
          return this.viewer.viewport.getZoom(!0) * n / this.viewer.world.getContentFactor();
        }), P(this, "deselect", () => {
          var n;
          if ((n = this.tools) == null || n.current.stop(), this.selectedShape) {
            const { annotation: r } = this.selectedShape;
            if (this.selectedShape.destroy) {
              if (this.selectedShape.mouseTracker.destroy(), this.selectedShape.destroy(), !r.isSelection) {
                const o = this.addAnnotation(r);
                ds(o, "a9s-non-scaling") && o.setAttribute("transform", `scale(${1 / this.currentScale()})`);
              }
            } else
              ar(this.selectedShape, "selected");
            this.selectedShape = null;
          }
        }), P(this, "destroy", () => {
          this.deselect(), this.svg.parentNode.removeChild(this.svg);
        }), P(this, "findShape", (n) => {
          const r = n != null && n.id ? n.id : n;
          return this.g.querySelector(`.a9s-annotation[data-id="${r}"]`);
        }), P(this, "_fit", (n, r, o) => {
          const s = this.findShape(n);
          if (s) {
            const a = r ? typeof r == "boolean" ? r : r.immediately : !1, l = (r == null ? void 0 : r.padding) || 0, u = this.viewer.container.getBoundingClientRect(), c = Math.min(2 * l / u.width, 2 * l / u.height), { x: h, y: d, width: m, height: y } = s.getBBox(), S = h - c * m, b = d - c * y, A = m + 2 * c * m, p = y + 2 * c * y, E = this.viewer.viewport.imageToViewportRectangle(S, b, A, p);
            this.viewer.viewport[o](E, a);
          }
        }), P(this, "fitBounds", (n, r) => this._fit(n, r, "fitBounds")), P(this, "fitBoundsWithConstraints", (n, r) => this._fit(n, r, "fitBoundsWithConstraints")), P(this, "getAnnotations", () => Array.from(this.g.querySelectorAll(".a9s-annotation")).map((n) => n.annotation)), P(this, "getAnnotationsIntersecting", (n) => {
          const r = n.id ? n : this.findShape(n).annotation;
          return this.store.getAnnotationsIntersecting(r);
        }), P(this, "getImageSnippetById", (n) => {
          const r = this.findShape(n);
          if (r)
            return nd(this.viewer, r);
        }), P(this, "getSelectedImageSnippet", () => {
          var n;
          if (this.selectedShape) {
            const r = (n = this.selectedShape.element) != null ? n : this.selectedShape;
            return nd(this.viewer, r);
          }
        }), P(this, "init", (n) => {
          this.deselect(), Array.from(this.g.querySelectorAll(".a9s-annotation")).forEach((r) => this.g.removeChild(r)), this.store.clear(), this._lazy(() => {
            console.time("Took"), console.log("Drawing..."), this.loaded || (this.g.style.display = "none"), n.forEach((r) => this.addAnnotation(r)), console.log("Indexing..."), this.store.insert(n), console.timeEnd("Took"), this.resize();
          });
        }), P(this, "listDrawingTools", () => this.tools.listTools()), P(this, "overrideId", (n, r) => {
          const o = this.findShape(n);
          o.setAttribute("data-id", r);
          const { annotation: s } = o, a = s.clone({ id: r });
          return o.annotation = a, this.store.remove(s), this.store.insert(a), a;
        }), P(this, "panTo", (n, r) => {
          const o = this.findShape(n);
          if (o) {
            const { top: s, left: a, width: l, height: u } = o.getBoundingClientRect(), c = a + l / 2 + window.scrollX, h = s + u / 2 + window.scrollY, d = this.viewer.viewport.windowToViewportCoordinates(new vt.Point(c, h));
            this.viewer.viewport.panTo(d, r);
          }
        }), P(this, "removeAnnotation", (n) => {
          var r, o;
          const s = n.type ? n.id : n;
          ((r = this.selectedShape) == null ? void 0 : r.annotation.id) === s && this.deselect();
          const a = this.findShape(n);
          if (a) {
            const { annotation: l } = a;
            ((o = this.selectedShape) == null ? void 0 : o.annotation) === l && this.deselect(), a.parentNode.removeChild(a), this.store.remove(l);
          }
        }), P(this, "removeDrawingTool", (n) => {
          var r;
          return (r = this.tools) == null ? void 0 : r.unregisterTool(n);
        }), P(this, "scaleFormatterElements", (n) => {
          const r = 1 / this.currentScale();
          if (n) {
            const o = n.querySelector(".a9s-annotation:not(.a9s-non-scaling) .a9s-formatter-el");
            o && o.firstChild.setAttribute("transform", `scale(${r})`);
          } else
            Array.from(this.g.querySelectorAll(".a9s-annotation:not(.a9s-non-scaling) .a9s-formatter-el")).forEach((o) => o.firstChild.setAttribute("transform", `scale(${r})`));
        }), P(this, "scaleTool", (n) => {
          if (n) {
            const r = 1 / this.currentScale();
            n.scale = r, n.onScaleChanged && n.onScaleChanged(r);
          }
        }), P(this, "selectAnnotation", (n, r) => {
          this.selectedShape && this.deselect();
          const o = this.findShape(n);
          if (o) {
            this.selectShape(o, r);
            const s = this.selectedShape.element ? this.selectedShape.element : this.selectedShape;
            return { annotation: o.annotation, element: s };
          } else
            this.deselect();
        }), P(this, "selectShape", (n, r) => {
          var o;
          if (!r && !n.annotation.isSelection && this.emit("clickAnnotation", n.annotation, n), ((o = this.selectedShape) == null ? void 0 : o.annotation) === n.annotation)
            return;
          this.selectedShape && this.selectedShape.annotation !== n.annotation && this.deselect();
          const { annotation: s } = n;
          if (this.readOnly || s.readOnly || this.headless)
            this.selectedShape = n, yt(n, "selected"), r || this.emit("select", { annotation: s, element: n, skipEvent: r });
          else {
            const a = this.tools.forAnnotation(s);
            if (a) {
              setTimeout(() => {
                n.parentNode.removeChild(n), r || this.emit("select", { annotation: s, element: this.selectedShape.element });
              }, 1), this.selectedShape = a.createEditableShape(s, this.formatters), this.scaleTool(this.selectedShape), this.scaleFormatterElements(this.selectedShape.element), this.selectedShape.element.annotation = s;
              const l = new vt.MouseTracker({ element: this.svg, preProcessEventHandler: (u) => {
                u.stopPropagation = !0, u.preventDefault = !1, u.preventGesture = !0;
              } }).setTracking(!1);
              this.selectedShape.element.addEventListener("mouseenter", () => {
                this.hoveredShape = this.selectedShape, l.setTracking(!0);
              }), this.selectedShape.element.addEventListener("mouseleave", () => {
                this.hoveredShape = null, l.setTracking(!1);
              }), this.selectedShape.mouseTracker = l, this.selectedShape.on("update", (u) => this.emit("updateTarget", this.selectedShape.element, u));
            } else
              this.selectedShape = n, r || this.emit("select", { annotation: s, element: this.selectedShape });
          }
        }), P(this, "setDrawingEnabled", (n) => {
          if (this.mouseTracker) {
            const r = n && !this.readOnly;
            this.mouseTracker.enabled = r, this.mouseTracker.setTracking(r), this.tools.current && (this.tools.current.enabled = r);
          }
        }), P(this, "setDrawingTool", (n) => {
          var r;
          this.tools && ((r = this.tools.current) == null || r.stop(), this.tools.setCurrent(n));
        }), P(this, "setVisible", (n) => {
          n ? this.svg.style.display = null : (this.deselect(), this.svg.style.display = "none");
        }), P(this, "stopDrawing", () => {
          var n;
          (n = this.tools) != null && n.current && (this.tools.current.isDrawing && this.tools.current.stop(), this.mouseTracker.enabled = !1, this.tools.current.enabled = !1);
        }), this.viewer = i.viewer, this.config = i.config, this.env = i.env, this.readOnly = i.config.readOnly, this.headless = i.config.headless, i.config.formatter ? this.formatters = [i.config.formatter] : i.config.formatters && (this.formatters = Array.isArray(i.config.formatters) ? i.config.formatters : [i.config.formatters]), this.disableSelect = i.config.disableSelect, this.drawOnSingleClick = i.config.drawOnSingleClick, this.svg = document.createElementNS(ie, "svg"), vx ? (this.svg.setAttribute("class", "a9s-annotationlayer a9s-osd-annotationlayer touch"), Nb(this.svg)) : this.svg.setAttribute("class", "a9s-annotationlayer a9s-osd-annotationlayer"), this.g = document.createElementNS(ie, "g"), this.svg.appendChild(this.g), this.viewer.canvas.appendChild(this.svg), this.viewer.addHandler("animation", () => this.resize()), this.viewer.addHandler("rotate", () => this.resize()), this.viewer.addHandler("resize", () => this.resize()), this.viewer.addHandler("flip", () => this.resize()), this.loaded = !1;
        const e = () => {
          const { x: n, y: r } = this.viewer.world.getItemAt(0).source.dimensions, o = this.viewer.world.getItemAt(0).source["@id"] || new URL(this.viewer.world.getItemAt(0).source.url, document.baseURI).href;
          this.env.image = { src: o, naturalWidth: n, naturalHeight: r }, i.config.crosshair && (this.crosshair || (this.crosshair = new ox(this.svg), yt(this.svg, "no-cursor"))), this.loaded || this.emit("load", o), this.loaded = !0, this.g.style.display = "inline", this.resize();
        };
        this.viewer.addHandler("open", e), this.viewer.world.addHandler("add-item", e), this.viewer.world.getItemAt(0) && e(), this.store = new mx(this.env), this.selectedShape = null, this.hoveredShape = null, this._initMouseEvents();
      }
      resize() {
        var i;
        const e = this.viewer.viewport.getFlip(), n = this.viewer.viewport.pixelFromPoint(new vt.Point(0, 0), !0);
        e && (n.x = this.viewer.viewport._containerInnerSize.x - n.x);
        const r = this.currentScale(), o = e ? -r : r, s = this.viewer.viewport.getRotation();
        this.g.setAttribute("transform", `translate(${n.x}, ${n.y}) scale(${o}, ${r}) rotate(${s})`), this._refreshNonScalingAnnotations(), this.scaleFormatterElements(), this.selectedShape && (this.selectedShape.element ? (this.scaleTool(this.selectedShape), this.emit("viewportChange", this.selectedShape.element)) : this.emit("viewportChange", this.selectedShape)), (i = this.tools) != null && i.current && this.scaleTool(this.tools.current);
      }
    }
    class yx extends id {
      constructor(i) {
        super(i), P(this, "onDrawingComplete", (e) => {
          var n;
          this.mouseTracker.enabled = (n = this.config.hotkey) == null ? void 0 : n.inverted, this.selectShape(e), this.emit("createSelection", e.annotation);
        }), this._initDrawingTools();
      }
    }
    const Cs = (t) => {
      const i = t.viewport.viewportToImageRectangle(t.viewport.getBounds(!0)), e = t.viewport.getContainerSize().x, n = t.viewport.getZoom(!0) * e / t.world.getContentFactor();
      return { extent: i, scale: n };
    }, Ex = (t) => {
      var i;
      const e = t.targets[0];
      return e ? Array.isArray(e.selector) ? e.selector[0].type : (i = e.selector) == null ? void 0 : i.type : null;
    }, rd = (t, i) => {
      const { extent: e, scale: n } = Cs(t), { selector: r } = i, o = zt.create({ target: i });
      if (r.type === "SvgSelector") {
        const s = jt(o), a = s.nodeName.toLowerCase();
        let l = null;
        if (a === "polygon")
          l = wx(s, e, n);
        else if (a === "circle")
          l = bx(s, e, n);
        else if (a === "ellipse")
          l = xx(s, e, n);
        else if (a === "path")
          l = Sx(s, e, n);
        else
          throw `Unsupported SVG shape type: ${a}`;
        let u = l.outerHTML || new XMLSerializer().serializeToString(l);
        return u = u.replace(` xmlns="${ie}"`, ""), { ...i, selector: { type: "SvgSelector", value: `<svg>${u}</svg>` } };
      } else if (r.type === "FragmentSelector") {
        const { x: s, y: a, w: l, h: u } = Ct(o), c = e.x + s / n, h = e.y + a / n, d = l / n, m = u / n;
        return l === 0 && u === 0 ? { ...vn(c, h, d, m), renderedVia: { name: "point" } } : vn(c, h, d, m);
      } else
        throw `Unsupported selector type: ${r.type}`;
    }, wx = (t, i, e) => {
      const n = Array.from(t.points).map((r) => {
        const o = i.x + r.x / e, s = i.y + r.y / e;
        return o + "," + s;
      }).join(" ");
      return t.setAttribute("points", n), t;
    }, bx = (t, i, e) => {
      const n = parseFloat(t.getAttribute("cx")), r = parseFloat(t.getAttribute("cy")), o = parseFloat(t.getAttribute("r"));
      return t.setAttribute("cx", i.x + n / e), t.setAttribute("cy", i.y + r / e), t.setAttribute("r", o / e), t;
    }, xx = (t, i, e) => {
      const n = parseFloat(t.getAttribute("cx")), r = parseFloat(t.getAttribute("cy")), o = parseFloat(t.getAttribute("rx")), s = parseFloat(t.getAttribute("ry"));
      return t.setAttribute("cx", i.x + n / e), t.setAttribute("cy", i.y + r / e), t.setAttribute("rx", o / e), t.setAttribute("ry", s / e), t;
    }, Sx = (t, i, e) => {
      const n = t.getAttribute("d").split(/(?=M|m|L|l|H|h|V|v|Z|z)/g).map((r) => r.trim()).map((r) => {
        const o = r.substring(0, 1);
        if (o.toLowerCase() === "z")
          return o;
        {
          const s = r.substring(1).split(" ").map((c) => parseFloat(c.trim())), a = o === o.toUpperCase(), l = a ? i.x + s[0] / e : s[0] / e, u = a ? i.y + s[1] / e : s[1] / e;
          return o + " " + l + " " + u;
        }
      }).join(" ");
      return t.setAttribute("d", n), t;
    }, od = (t, i) => {
      const { extent: e, scale: n } = Cs(t), r = i.selector("FragmentSelector");
      if (i.selector("SvgSelector")) {
        const o = jt(i), s = o.nodeName.toLowerCase();
        let a = null;
        if (s === "polygon")
          a = _x(o, e, n);
        else if (s === "circle")
          a = Cx(o, e, n);
        else if (s === "ellipse")
          a = Tx(o, e, n);
        else if (s === "path")
          a = Ax(o, e, n);
        else
          throw `Unsupported SVG shape type: ${s}`;
        let l = a.outerHTML || new XMLSerializer().serializeToString(a);
        l = l.replace(` xmlns="${ie}"`, "");
        const u = { selector: { type: "SvgSelector", value: `<svg>${l}</svg>` } };
        return i.clone({ target: u });
      } else if (r) {
        const { x: o, y: s, w: a, h: l } = Ct(i), u = (o - e.x) * n, c = (s - e.y) * n, h = vn(u, c, a * n, l * n);
        return i.clone({ target: h });
      }
    }, _x = (t, i, e) => {
      const n = Array.from(t.points).map((r) => {
        const o = e * (r.x - i.x), s = e * (r.y - i.y);
        return o + "," + s;
      }).join(" ");
      return t.setAttribute("points", n), t;
    }, Cx = (t, i, e) => {
      const n = t.getAttribute("cx"), r = t.getAttribute("cy"), o = t.getAttribute("r");
      return t.setAttribute("cx", e * (n - i.x)), t.setAttribute("cy", e * (r - i.y)), t.setAttribute("r", o * e), t;
    }, Tx = (t, i, e) => {
      const n = t.getAttribute("cx"), r = t.getAttribute("cy"), o = t.getAttribute("rx"), s = t.getAttribute("ry");
      return t.setAttribute("cx", e * (n - i.x)), t.setAttribute("cy", e * (r - i.y)), t.setAttribute("rx", o * e), t.setAttribute("ry", s * e), t;
    }, Ax = (t, i, e) => {
      const n = t.getAttribute("d").split(/(?=M|m|L|l|H|h|V|v|Z|z)/g).map((r) => r.trim()).map((r) => {
        const o = r.substring(0, 1);
        if (o.toLowerCase() === "z")
          return o;
        {
          const s = r.substring(1).split(" ").filter((c) => c).map((c) => parseFloat(c.trim())), a = o === o.toUpperCase(), l = a ? e * (s[0] - i.x) : e * s[0], u = a ? e * (s[1] - i.y) : e * s[1];
          return o + " " + l + " " + u;
        }
      }).join(" ");
      return t.setAttribute("d", n), t;
    }, sd = (t, i) => {
      const { extent: e, scale: n } = Cs(t), r = Ex(i.annotation);
      if (r === "FragmentSelector")
        Px(i, e, n);
      else if (r === "SvgSelector")
        Dx(i, e, n);
      else
        throw `Unsupported selector type type: ${r}`;
      const o = i.querySelector(".a9s-formatter-el");
      if (o) {
        const { x: s, y: a } = i.querySelector(".a9s-inner").getBBox();
        o.setAttribute("x", s), o.setAttribute("y", a);
      }
    }, Px = (t, i, e) => {
      const { x: n, y: r, w: o, h: s } = Ct(t.annotation), a = t.querySelector(".a9s-outer"), l = t.querySelector(".a9s-inner"), u = e * (n - i.x), c = e * (r - i.y);
      o === 0 && s === 0 ? [a, l].forEach((h) => {
        h.setAttribute("cx", u), h.setAttribute("cy", c);
      }) : [a, l].forEach((h) => {
        h.setAttribute("x", u), h.setAttribute("y", c), h.setAttribute("width", o * e), h.setAttribute("height", s * e);
      });
    }, Dx = (t, i, e) => {
      const n = jt(t.annotation), r = n.nodeName.toLowerCase();
      if (r === "polygon")
        Ox(t, n, i, e);
      else if (r === "circle")
        Rx(t, n, i, e);
      else if (r === "ellipse")
        kx(t, n, i, e);
      else if (r === "path")
        Bx(t, n, i, e);
      else
        throw `Unsupported SVG shape type: ${r}`;
    }, Ox = (t, i, e, n) => {
      const r = Array.from(i.points).map((o) => {
        const s = n * (o.x - e.x), a = n * (o.y - e.y);
        return s + "," + a;
      }).join(" ");
      t.querySelector(".a9s-outer").setAttribute("points", r), t.querySelector(".a9s-inner").setAttribute("points", r);
    }, Rx = (t, i, e, n) => {
      const r = n * (i.getAttribute("cx") - e.x), o = n * (i.getAttribute("cy") - e.y), s = n * i.getAttribute("r"), a = t.querySelector(".a9s-outer");
      a.setAttribute("cx", r), a.setAttribute("cy", o), a.setAttribute("r", s);
      const l = t.querySelector(".a9s-inner");
      l.setAttribute("cx", r), l.setAttribute("cy", o), l.setAttribute("r", s);
    }, kx = (t, i, e, n) => {
      const r = n * (i.getAttribute("cx") - e.x), o = n * (i.getAttribute("cy") - e.y), s = n * i.getAttribute("rx"), a = n * i.getAttribute("ry"), l = t.querySelector(".a9s-outer");
      l.setAttribute("cx", r), l.setAttribute("cy", o), l.setAttribute("rx", s), l.setAttribute("ry", a);
      const u = t.querySelector(".a9s-inner");
      u.setAttribute("cx", r), u.setAttribute("cy", o), u.setAttribute("rx", s), u.setAttribute("ry", a);
    }, Bx = (t, i, e, n) => {
      const r = i.getAttribute("d").split(/(?=M|m|L|l|H|h|V|v|Z|z)/g).map((o) => o.trim()).map((o) => {
        const s = o.substring(0, 1);
        if (s.toLowerCase() === "z")
          return s;
        {
          const a = o.substring(1).split(" ").filter((h) => h).map((h) => parseFloat(h.trim())), l = s === s.toUpperCase(), u = l ? n * (a[0] - e.x) : n * a[0], c = l ? n * (a[1] - e.y) : n * a[1];
          return s + " " + u + " " + c;
        }
      }).join(" ");
      t.querySelector(".a9s-inner").setAttribute("d", r), t.querySelector(".a9s-outer").setAttribute("d", r);
    }, Fx = fs();
    class Mx extends id {
      constructor(i) {
        super(i), P(this, "_fit", (e, n, r) => {
          const o = n ? typeof n == "boolean" ? n : n.immediately : !1, s = (n == null ? void 0 : n.padding) || 0, a = this.findShape(e);
          if (a) {
            const l = this.viewer.container.getBoundingClientRect(), u = a.getBoundingClientRect(), c = u.x - l.x, h = u.y - l.y, { width: d, height: m } = u, y = c - s, S = h - s, b = d + 2 * s, A = m + 2 * s, p = this.viewer.viewport.viewerElementToViewportRectangle(new vt.Rect(y, S, b, A));
            this.viewer.viewport[r](p, o);
          }
        }), P(this, "_getShapeAt", (e) => {
          const n = (l) => {
            if (Fx) {
              const u = this.svg.getBoundingClientRect(), c = l.clientX - u.x, h = l.clientY - u.y;
              return new vt.Point(c, h);
            } else
              return new vt.Point(l.offsetX, l.offsetY);
          }, r = this.viewer.viewport.viewerElementToViewportCoordinates(n(e)), { x: o, y: s } = this.viewer.viewport.viewportToImageCoordinates(r.x, r.y), a = this.store.getAnnotationAt(o, s, this.currentScale());
          if (a)
            return this.findShape(a);
        }), P(this, "_refreshNonScalingAnnotations", () => {
        }), P(this, "addAnnotation", (e, n) => {
          const r = n || this.g, o = bs(e, this.env.image);
          return yt(o, "a9s-annotation"), o.setAttribute("data-id", e.id), o.annotation = e, sd(this.viewer, o), r.appendChild(o), hr(o, e, this.formatters), o;
        }), P(this, "addOrUpdateAnnotation", (e, n) => {
          var r;
          const o = (r = this.selectedShape) == null ? void 0 : r.annotation;
          (o === e || o != null && o.isSelection || o == n) && this.deselect(), n && this.removeAnnotation(e), this.removeAnnotation(e), this.addAnnotation(e), this.store.insert(e);
        }), P(this, "deselect", () => {
          var e;
          if ((e = this.tools) == null || e.current.stop(), this.selectedShape) {
            const { annotation: n } = this.selectedShape;
            this.selectedShape.destroy ? (this.selectedShape.mouseTracker.destroy(), this.selectedShape.destroy(), n.isSelection || this.addAnnotation(n)) : ar(this.selectedShape, "selected"), this.selectedShape = null;
          }
        }), P(this, "onDrawingComplete", (e) => {
          const n = e.annotation.clone({ target: rd(this.viewer, e.annotation.target) });
          e.annotation = n, this.selectShape(e), this.emit("createSelection", e.annotation), this.mouseTracker.enabled = !1;
        }), P(this, "selectShape", (e, n) => {
          var r;
          if (!n && !e.annotation.isSelection && this.emit("clickAnnotation", e.annotation, e), ((r = this.selectedShape) == null ? void 0 : r.annotation) === e.annotation)
            return;
          this.selectedShape && this.selectedShape.annotation !== e.annotation && this.deselect(!0);
          const { annotation: o } = e;
          if (this.readOnly || o.readOnly || this.headless)
            this.selectedShape = e, yt(e, "selected"), n || this.emit("select", { annotation: o, element: e, skipEvent: n });
          else {
            setTimeout(() => {
              e.parentNode.removeChild(e), n || this.emit("select", { annotation: o, element: this.selectedShape.element });
            }, 1);
            const s = this.tools.forAnnotation(o);
            this.selectedShape = s.createEditableShape(o), this.selectedShape.element.annotation = o;
            const a = od(this.viewer, o);
            this.selectedShape.updateState(a);
            const l = new vt.MouseTracker({ element: this.svg, preProcessEventHandler: (u) => {
              u.stopPropagation = !0, u.preventDefault = !1, u.preventGesture = !0;
            } }).setTracking(!1);
            this.selectedShape.element.addEventListener("mouseenter", () => {
              this.hoveredShape = this.selectedShape, l.setTracking(!0);
            }), this.selectedShape.element.addEventListener("mouseleave", () => {
              this.hoveredShape = null, l.setTracking(!1);
            }), this.selectedShape.mouseTracker = l, this.selectedShape.on("update", (u) => {
              const c = rd(this.viewer, u);
              this.selectedShape.element.annotation = this.selectedShape.annotation.clone({ target: c }), this.emit("updateTarget", this.selectedShape.element, c);
            });
          }
        }), this._initDrawingTools(!0);
      }
      resize() {
        if (this.store && (Array.from(this.g.querySelectorAll(".a9s-annotation:not(.selected)")).forEach((i) => sd(this.viewer, i)), this.selectedShape))
          if (this.selectedShape.element) {
            const i = od(this.viewer, this.selectedShape.element.annotation);
            this.selectedShape.updateState && this.selectedShape.updateState(i), this.emit("viewportChange", this.selectedShape.element);
          } else
            this.emit("viewportChange", this.selectedShape);
      }
    }
    var Ix = 0;
    function ad(t, i, e, n, r) {
      var o, s, a = {};
      for (s in i)
        s == "ref" ? o = i[s] : a[s] = i[s];
      var l = { type: t, props: a, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ix, __source: n, __self: r };
      if (typeof t == "function" && (o = t.defaultProps))
        for (s in o)
          a[s] === void 0 && (a[s] = o[s]);
      return W.vnode && W.vnode(l), l;
    }
    class Lx extends we {
      constructor(i) {
        super(i), P(this, "clearState", (e) => this.setState({ selectedAnnotation: null, selectedDOMElement: null, modifiedTarget: null, beforeHeadlessModify: null }, e)), P(this, "forwardEvent", (e, n) => {
          this.annotationLayer.on(e, (r, o) => {
            this.props[n](r.clone(), o);
          });
        }), P(this, "onKeyUp", (e) => {
          if (e.which === 27) {
            this.annotationLayer.stopDrawing();
            const { selectedAnnotation: n } = this.state;
            n && (this.cancelSelected(), this.props.onCancelSelected(n));
          } else if (e.which === 46) {
            const { disableDeleteKey: n } = this.props.config;
            if (!n) {
              const { selectedAnnotation: r } = this.state;
              r && (r.isSelection ? this.onCancelAnnotation(r) : this.onDeleteAnnotation(r));
            }
          }
        }), P(this, "handleStartSelect", (e) => this.props.onSelectionStarted(e)), P(this, "handleEndSelect", (e) => this.props.onSelectionEnded(e)), P(this, "handleSelect", (e, n) => {
          this.state.editorDisabled ? this.onHeadlessSelect(e, n) : this.onNormalSelect(e, n);
        }), P(this, "onNormalSelect", (e, n) => {
          const { annotation: r, element: o } = e;
          if (r) {
            const s = () => {
              this.setState({ selectedAnnotation: r, selectedDOMElement: o, modifiedTarget: null }, () => {
                n || (r.isSelection ? this.props.onSelectionCreated(r.clone()) : this.props.onAnnotationSelected(r.clone(), o));
              });
            }, { selectedAnnotation: a } = this.state;
            a && !a.isEqual(r) ? this.clearState(() => {
              this.props.onCancelSelected(a), s();
            }) : s();
          } else {
            const { selectedAnnotation: s } = this.state;
            s ? this.clearState(() => this.props.onCancelSelected(s)) : this.clearState();
          }
        }), P(this, "onHeadlessSelect", (e, n) => {
          this.saveSelected().then(() => {
            this.onNormalSelect(e, n);
          });
        }), P(this, "handleUpdateTarget", (e, n) => {
          this.setState({ selectedDOMElement: e, modifiedTarget: n });
          const r = JSON.parse(JSON.stringify(n));
          this.props.onSelectionTargetChanged(r);
        }), P(this, "handleViewportChange", (e) => this.setState({ selectedDOMElement: e })), P(this, "overrideAnnotationId", (e) => (n) => {
          const { id: r } = e;
          this.state.selectedAnnotation ? this.setState({ selectedAnnotation: null, selectedDOMElement: null, modifiedTarget: null }, () => {
            this.annotationLayer.overrideId(r, n);
          }) : this.annotationLayer.overrideId(r, n);
        }), P(this, "onCreateOrUpdateAnnotation", (e, n) => (r, o) => {
          let s = r.isSelection ? r.toAnnotation() : r;
          s = this.state.modifiedTarget ? s.clone({ target: this.state.modifiedTarget }) : s.clone(), this.clearState(() => {
            this.annotationLayer.addOrUpdateAnnotation(s, o), o ? this.props[e](s, o.clone()) : this.props[e](s, this.overrideAnnotationId(s)), n && n();
          });
        }), P(this, "onDeleteAnnotation", (e) => {
          this.clearState(), this.annotationLayer.removeAnnotation(e), this.props.onAnnotationDeleted(e);
        }), P(this, "onCancelAnnotation", (e, n) => {
          this.state.editorDisabled || this.annotationLayer.deselect(), this.props.onCancelSelected(e), this.clearState(n);
        }), P(this, "addAnnotation", (e) => {
          var n;
          e.id === ((n = this.state.selectedAnnotation) == null ? void 0 : n.id) && (this.annotationLayer.deselect(), this.clearState()), this.annotationLayer.addOrUpdateAnnotation(e.clone());
        }), P(this, "addDrawingTool", (e) => this.annotationLayer.addDrawingTool(e)), P(this, "cancelSelected", () => new Promise((e) => {
          this.annotationLayer.deselect(), this.state.selectedAnnotation ? this.clearState(e) : e();
        })), P(this, "fitBounds", (e, n) => this.annotationLayer.fitBounds(e, n)), P(this, "fitBoundsWithConstraints", (e, n) => this.annotationLayer.fitBoundsWithConstraints(e, n)), P(this, "getAnnotationById", (e) => {
          var n;
          return (n = this.annotationLayer.findShape(e)) == null ? void 0 : n.annotation;
        }), P(this, "getAnnotations", () => this.annotationLayer.getAnnotations().map((e) => e.clone())), P(this, "getAnnotationsIntersecting", (e) => this.annotationLayer.getAnnotationsIntersecting(e)), P(this, "getImageSnippetById", (e) => this.annotationLayer.getImageSnippetById(e)), P(this, "getSelected", () => {
          var e;
          if (this.state.selectedAnnotation)
            return this.state.editorDisabled ? this.state.selectedAnnotation : (e = this._editor.current) == null ? void 0 : e.getCurrentAnnotation();
        }), P(this, "getSelectedImageSnippet", () => this.annotationLayer.getSelectedImageSnippet()), P(this, "listDrawingTools", () => this.annotationLayer.listDrawingTools()), P(this, "panTo", (e, n) => this.annotationLayer.panTo(e, n)), P(this, "removeAnnotation", (e) => this.annotationLayer.removeAnnotation(e)), P(this, "removeDrawingTool", (e) => this.annotationLayer.removeDrawingTool(e)), P(this, "saveSelected", () => new Promise((e) => {
          const n = this.state.selectedAnnotation;
          if (n)
            if (this._editor.current)
              this._editor.current.onOk(), e();
            else if (n.isSelection)
              n.bodies.length > 0 || this.props.config.allowEmpty ? this.onCreateOrUpdateAnnotation("onAnnotationCreated", e)(n) : (this.annotationLayer.deselect(), e());
            else {
              const { beforeHeadlessModify: r, modifiedTarget: o } = this.state;
              r ? this.onCreateOrUpdateAnnotation("onAnnotationUpdated", e)(n, r) : o ? this.onCreateOrUpdateAnnotation("onAnnotationUpdated", e)(n, n) : this.onCancelAnnotation(n, e);
            }
          else
            e();
        })), P(this, "selectAnnotation", (e) => {
          const n = this.annotationLayer.selectAnnotation(e, !0);
          if (n)
            return this.handleSelect(n, !0), n.annotation.clone();
          this.clearState();
        }), P(this, "setAnnotations", (e) => this.annotationLayer.init(e.map((n) => n.clone()))), P(this, "setDrawingEnabled", (e) => this.annotationLayer.setDrawingEnabled(e)), P(this, "setDrawingTool", (e) => this.annotationLayer.setDrawingTool(e)), P(this, "setVisible", (e) => {
          this.annotationLayer.setVisible(e), e || this.clearState();
        }), P(this, "updateSelected", (e, n) => new Promise((r) => {
          this.state.selectedAnnotation && (n ? this.state.selectedAnnotation.isSelection ? this.onCreateOrUpdateAnnotation("onAnnotationCreated", r)(e) : this.onCreateOrUpdateAnnotation("onAnnotationUpdated", r)(e, this.state.selectedAnnotation) : this.setState({ selectedAnnotation: e, beforeHeadlessModify: this.state.beforeHeadlessModify || this.state.selectedAnnotation }, r));
        })), this.state = { selectedAnnotation: null, selectedDOMElement: null, modifiedTarget: null, readOnly: i.config.readOnly, editorDisabled: i.config.disableEditor, widgets: i.config.widgets, beforeHeadlessModify: null }, this._editor = B.createRef();
      }
      componentDidMount() {
        this.annotationLayer = this.props.config.gigapixelMode ? new Mx(this.props) : new yx(this.props), this.annotationLayer.on("load", this.props.onLoad), this.annotationLayer.on("startSelection", this.handleStartSelect), this.annotationLayer.on("endSelection", this.handleEndSelect), this.annotationLayer.on("select", this.handleSelect), this.annotationLayer.on("updateTarget", this.handleUpdateTarget), this.annotationLayer.on("viewportChange", this.handleViewportChange), this.forwardEvent("clickAnnotation", "onClickAnnotation"), this.forwardEvent("mouseEnterAnnotation", "onMouseEnterAnnotation"), this.forwardEvent("mouseLeaveAnnotation", "onMouseLeaveAnnotation"), document.addEventListener("keyup", this.onKeyUp);
      }
      componentWillUnmount() {
        this.annotationLayer.destroy(), document.removeEventListener("keyup", this.onKeyUp);
      }
      get disableEditor() {
        return this.state.editorDisabled;
      }
      set disableEditor(i) {
        this.setState({ editorDisabled: i });
      }
      get disableSelect() {
        return this.annotationLayer.disableSelect;
      }
      set disableSelect(i) {
        this.annotationLayer.disableSelect = i;
      }
      get formatters() {
        return this.annotationLayer.formatters;
      }
      set formatters(i) {
        this.annotationLayer.formatters = i;
      }
      get readOnly() {
        return this.state.readOnly;
      }
      set readOnly(i) {
        this.annotationLayer.readOnly = i, this.setState({ readOnly: i });
      }
      get widgets() {
        return this.state.widgets;
      }
      set widgets(i) {
        this.setState({ widgets: i });
      }
      render() {
        var i;
        const e = this.state.selectedAnnotation && !this.state.editorDisabled, n = this.state.readOnly || ((i = this.state.selectedAnnotation) == null ? void 0 : i.readOnly);
        return e && ad(_b, { ref: this._editor, detachable: !0, wrapperEl: this.props.wrapperEl, annotation: this.state.selectedAnnotation, modifiedTarget: this.state.modifiedTarget, selectedElement: this.state.selectedDOMElement, readOnly: n, allowEmpty: this.props.config.allowEmpty, widgets: this.state.widgets, env: this.props.env, onAnnotationCreated: this.onCreateOrUpdateAnnotation("onAnnotationCreated"), onAnnotationUpdated: this.onCreateOrUpdateAnnotation("onAnnotationUpdated"), onAnnotationDeleted: this.onDeleteAnnotation, onCancel: this.onCancelAnnotation });
      }
    }
    class Nx {
      constructor(i, e) {
        P(this, "handleAnnotationCreated", (r, o) => this._emitter.emit("createAnnotation", r.underlying, o)), P(this, "handleAnnotationDeleted", (r) => this._emitter.emit("deleteAnnotation", r.underlying)), P(this, "handleAnnotationSelected", (r, o) => this._emitter.emit("selectAnnotation", r.underlying, o)), P(this, "handleAnnotationUpdated", (r, o) => this._emitter.emit("updateAnnotation", r.underlying, o.underlying)), P(this, "handleCancelSelected", (r) => this._emitter.emit("cancelSelected", r.underlying)), P(this, "handleClickAnnotation", (r, o) => this._emitter.emit("clickAnnotation", r.underlying, o)), P(this, "handleLoad", (r) => this._emitter.emit("load", r)), P(this, "handleSelectionCreated", (r) => this._emitter.emit("createSelection", r.underlying)), P(this, "handleSelectionStarted", (r) => this._emitter.emit("startSelection", r)), P(this, "handleSelectionEnded", (r) => this._emitter.emit("endSelection", r)), P(this, "handleSelectionTargetChanged", (r) => this._emitter.emit("changeSelectionTarget", r)), P(this, "handleMouseEnterAnnotation", (r, o) => this._emitter.emit("mouseEnterAnnotation", r.underlying, o)), P(this, "handleMouseLeaveAnnotation", (r, o) => this._emitter.emit("mouseLeaveAnnotation", r.underlying, o)), P(this, "_wrap", (r) => (r == null ? void 0 : r.type) === "Annotation" ? new zt(r) : r), P(this, "addAnnotation", (r) => this._app.current.addAnnotation(new zt(r))), P(this, "addDrawingTool", (r) => this._app.current.addDrawingTool(r)), P(this, "cancelSelected", () => this._app.current.cancelSelected()), P(this, "clearAnnotations", () => this.setAnnotations([])), P(this, "clearAuthInfo", () => this._env.user = null), P(this, "destroy", () => B.unmountComponentAtNode(this.appContainerEl)), P(this, "fitBounds", (r, o) => this._app.current.fitBounds(this._wrap(r), o)), P(this, "fitBoundsWithConstraints", (r, o) => this._app.current.fitBoundsWithConstraints(this._wrap(r), o)), P(this, "getAnnotationById", (r) => {
          const o = this._app.current.getAnnotationById(r);
          return o == null ? void 0 : o.underlying;
        }), P(this, "getAnnotations", () => this._app.current.getAnnotations().map((r) => r.underlying)), P(this, "getAnnotationsIntersecting", (r) => this._app.current.getAnnotationsIntersecting(this._wrap(r))), P(this, "getImageSnippetById", (r) => this._app.current.getImageSnippetById(r)), P(this, "getSelected", () => {
          const r = this._app.current.getSelected();
          return r == null ? void 0 : r.underlying;
        }), P(this, "getSelectedImageSnippet", () => this._app.current.getSelectedImageSnippet()), P(this, "listDrawingTools", () => this._app.current.listDrawingTools()), P(this, "loadAnnotations", (r) => fetch(r).then((o) => o.json()).then((o) => (this.setAnnotations(o), o))), P(this, "off", (r, o) => this._emitter.off(r, o)), P(this, "on", (r, o) => this._emitter.on(r, o)), P(this, "once", (r, o) => this._emitter.once(r, o)), P(this, "panTo", (r, o) => this._app.current.panTo(this._wrap(r), o)), P(this, "removeAnnotation", (r) => this._app.current.removeAnnotation(this._wrap(r))), P(this, "removeDrawingTool", (r) => this._app.current.removeDrawingTool(r)), P(this, "saveSelected", () => this._app.current.saveSelected()), P(this, "selectAnnotation", (r) => {
          const o = this._app.current.selectAnnotation(this._wrap(r));
          return o == null ? void 0 : o.underlying;
        }), P(this, "setAnnotations", (r) => {
          const o = (r || []).map((s) => new zt(s));
          this._app.current.setAnnotations(o);
        }), P(this, "setAuthInfo", (r) => this._env.user = r), P(this, "setDrawingEnabled", (r) => this._app.current.setDrawingEnabled(r)), P(this, "setDrawingTool", (r) => this._app.current.setDrawingTool(r)), P(this, "setServerTime", (r) => this._env.setServerTime(r)), P(this, "setVisible", (r) => this._app.current.setVisible(r)), P(this, "updateSelected", (r, o) => {
          let s = null;
          r.type === "Annotation" ? s = new zt(r) : r.type === "Selection" && (s = new Kn(r.target, r.body)), s && this._app.current.updateSelected(s, o);
        });
        const n = e || {};
        this._app = B.createRef(), this._emitter = new ai(), this._env = Rb(), this._element = i.element, window.getComputedStyle(this._element).getPropertyValue("position") === "static" && (this._element.style.position = "relative"), kb(n.locale, n.messages), this.appContainerEl = document.createElement("DIV"), this._element.appendChild(this.appContainerEl), B.render(ad(Lx, { ref: this._app, viewer: i, wrapperEl: this._element, config: n, env: this._env, onSelectionStarted: this.handleSelectionStarted, onSelectionEnded: this.handleSelectionEnded, onSelectionCreated: this.handleSelectionCreated, onSelectionTargetChanged: this.handleSelectionTargetChanged, onAnnotationCreated: this.handleAnnotationCreated, onAnnotationSelected: this.handleAnnotationSelected, onAnnotationUpdated: this.handleAnnotationUpdated, onAnnotationDeleted: this.handleAnnotationDeleted, onCancelSelected: this.handleCancelSelected, onClickAnnotation: this.handleClickAnnotation, onLoad: this.handleLoad, onMouseEnterAnnotation: this.handleMouseEnterAnnotation, onMouseLeaveAnnotation: this.handleMouseLeaveAnnotation }), this.appContainerEl);
      }
      get disableEditor() {
        return this._app.current.disableEditor;
      }
      set disableEditor(i) {
        this._app.current.disableEditor = i;
      }
      get disableSelect() {
        return this._app.current.disableSelect;
      }
      set disableSelect(i) {
        this._app.current.disableSelect = i;
      }
      get formatters() {
        return this._app.current.formatters || [];
      }
      set formatters(i) {
        if (i) {
          const e = Array.isArray(i) ? i : [i];
          this._app.current.formatters = e;
        } else
          this._app.current.formatters = null;
      }
      get readOnly() {
        return this._app.current.readOnly;
      }
      set readOnly(i) {
        this._app.current.readOnly = i;
      }
      get widgets() {
        return this._app.current.widgets;
      }
      set widgets(i) {
        this._app.current.widgets = i;
      }
    }
    var Hx = (t, i) => new Nx(t, i);
    return Hx;
  });
})(gd);
var Xx = gd.exports;
const Yx = /* @__PURE__ */ Ux(Xx), Zx = "_toolbarBtn_98yaz_1", Kx = "_active_98yaz_40", pd = {
  toolbarBtn: Zx,
  active: Kx
}, rS = (vr) => {
  const {
    canvas: yr,
    openSeadragonViewer: Vt,
    activeManifest: Pt,
    token: P,
    annotationServer: Ze
  } = vr, [W, Tn] = dd(!1), [at, ni] = dd(), Wt = $x(), Gt = yr.id, Ke = "pixel";
  jx(() => {
    if (!Vt)
      return;
    const Te = Yx(Vt, {
      allowEmpty: !0,
      fragmentUnit: Ke,
      widgets: ["COMMENT"]
    });
    return Te.on("createAnnotation", (lt) => {
      Vx(
        lt,
        Pt,
        yr.id,
        Ke,
        P,
        Ze
      ).then(() => {
        Wt({
          type: "updateClippingsUpdatedAt",
          clippingsUpdatedAt: (/* @__PURE__ */ new Date()).getTime()
        });
      });
    }), Te.on("updateAnnotation", (lt) => {
      Wx(
        lt,
        Pt,
        Gt,
        Ke,
        P,
        Ze
      ).then(() => {
        Wt({
          type: "updateClippingsUpdatedAt",
          clippingsUpdatedAt: (/* @__PURE__ */ new Date()).getTime()
        });
      });
    }), Te.on("deleteAnnotation", (lt) => {
      Gx(
        lt,
        Pt,
        Gt,
        Ke,
        P,
        Ze
      ).then(() => {
        Wt({
          type: "updateClippingsUpdatedAt",
          clippingsUpdatedAt: (/* @__PURE__ */ new Date()).getTime()
        });
      });
    }), Te.on("createSelection", () => {
      Tn(!1);
    }), ni(Te), (async () => (await qx(
      Gt,
      Ke,
      P,
      Ze
    )).forEach((ye) => {
      try {
        Te.addAnnotation(ye);
      } catch (Dt) {
        console.log(Dt);
      }
    }))(), () => {
      Te.destroy();
    };
  }, [Vt]);
  function ii() {
    at.setDrawingTool("rect"), at.setDrawingEnabled(!W), Tn(!W);
  }
  return at ? /* @__PURE__ */ At(
    "button",
    {
      onClick: ii,
      className: `${W && pd.active} ${pd.toolbarBtn}`,
      children: /* @__PURE__ */ At("svg", { viewBox: "0 0 80 80", children: /* @__PURE__ */ hd("g", { children: [
        /* @__PURE__ */ At("rect", { x: "18", y: "25", width: "46", height: "30" }),
        /* @__PURE__ */ hd("g", { className: "handles", children: [
          /* @__PURE__ */ At("circle", { cx: "18", cy: "25", r: "5" }),
          /* @__PURE__ */ At("circle", { cx: "64", cy: "25", r: "5" }),
          /* @__PURE__ */ At("circle", { cx: "18", cy: "55", r: "5" }),
          /* @__PURE__ */ At("circle", { cx: "64", cy: "55", r: "5" })
        ] })
      ] }) })
    }
  ) : /* @__PURE__ */ At(zx, {});
};
export {
  rS as default
};
