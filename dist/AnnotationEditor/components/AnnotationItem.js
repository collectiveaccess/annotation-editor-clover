import { jsx as de, Fragment as Le } from "react/jsx-runtime";
import { useEffect as Fe } from "react";
import { c as ze, g as Me } from "../../_commonjsHelpers-CT_km90n.js";
var He = { exports: {} };
(function(F) {
  //! openseadragon 3.1.0
  //! Built on 2022-06-07
  //! Git commit: v3.1.0-1-c1c380f
  //! http://openseadragon.github.io
  //! License: http://openseadragon.github.io/license/
  function D(e) {
    return new D.Viewer(e);
  }
  (function(e) {
    e.version = {
      versionStr: "3.1.0",
      major: parseInt("3", 10),
      minor: parseInt("1", 10),
      revision: parseInt("0", 10)
    };
    var t = {
      "[object Boolean]": "boolean",
      "[object Number]": "number",
      "[object String]": "string",
      "[object Function]": "function",
      "[object Array]": "array",
      "[object Date]": "date",
      "[object RegExp]": "regexp",
      "[object Object]": "object"
    }, s = Object.prototype.toString, o = Object.prototype.hasOwnProperty;
    e.isFunction = function(h) {
      return e.type(h) === "function";
    }, e.isArray = Array.isArray || function(h) {
      return e.type(h) === "array";
    }, e.isWindow = function(h) {
      return h && typeof h == "object" && "setInterval" in h;
    }, e.type = function(h) {
      return h == null ? String(h) : t[s.call(h)] || "object";
    }, e.isPlainObject = function(h) {
      if (!h || D.type(h) !== "object" || h.nodeType || e.isWindow(h) || h.constructor && !o.call(h, "constructor") && !o.call(h.constructor.prototype, "isPrototypeOf"))
        return !1;
      var i;
      for (var n in h)
        i = n;
      return i === void 0 || o.call(h, i);
    }, e.isEmptyObject = function(h) {
      for (var i in h)
        return !1;
      return !0;
    }, e.freezeObject = function(h) {
      return Object.freeze ? e.freezeObject = Object.freeze : e.freezeObject = function(i) {
        return i;
      }, e.freezeObject(h);
    }, e.supportsCanvas = function() {
      var h = document.createElement("canvas");
      return !!(e.isFunction(h.getContext) && h.getContext("2d"));
    }(), e.isCanvasTainted = function(h) {
      var i = !1;
      try {
        h.getContext("2d").getImageData(0, 0, 1, 1);
      } catch {
        i = !0;
      }
      return i;
    }, e.supportsAddEventListener = function() {
      return !!(document.documentElement.addEventListener && document.addEventListener);
    }(), e.supportsRemoveEventListener = function() {
      return !!(document.documentElement.removeEventListener && document.removeEventListener);
    }(), e.supportsEventListenerOptions = function() {
      var h = 0;
      if (e.supportsAddEventListener)
        try {
          var i = {
            get capture() {
              return h++, !1;
            },
            get once() {
              return h++, !1;
            },
            get passive() {
              return h++, !1;
            }
          };
          window.addEventListener("test", null, i), window.removeEventListener("test", null, i);
        } catch {
          h = 0;
        }
      return h >= 3;
    }(), e.getCurrentPixelDensityRatio = function() {
      if (e.supportsCanvas) {
        var h = document.createElement("canvas").getContext("2d"), i = window.devicePixelRatio || 1, n = h.webkitBackingStorePixelRatio || h.mozBackingStorePixelRatio || h.msBackingStorePixelRatio || h.oBackingStorePixelRatio || h.backingStorePixelRatio || 1;
        return Math.max(i, 1) / n;
      } else
        return 1;
    }, e.pixelDensityRatio = e.getCurrentPixelDensityRatio();
  })(D), function(e) {
    e.extend = function() {
      var n, r, l, d, f, y, v = arguments[0] || {}, T = arguments.length, w = !1, x = 1;
      for (typeof v == "boolean" && (w = v, v = arguments[1] || {}, x = 2), typeof v != "object" && !D.isFunction(v) && (v = {}), T === x && (v = this, --x); x < T; x++)
        if (n = arguments[x], n !== null || n !== void 0)
          for (r in n)
            l = v[r], d = n[r], v !== d && (w && d && (D.isPlainObject(d) || (f = D.isArray(d))) ? (f ? (f = !1, y = l && D.isArray(l) ? l : []) : y = l && D.isPlainObject(l) ? l : {}, v[r] = D.extend(w, y, d)) : d !== void 0 && (v[r] = d));
      return v;
    };
    var t = function() {
      if (typeof navigator != "object")
        return !1;
      var n = navigator.userAgent;
      return typeof n != "string" ? !1 : n.indexOf("iPhone") !== -1 || n.indexOf("iPad") !== -1 || n.indexOf("iPod") !== -1;
    };
    e.extend(
      e,
      /** @lends OpenSeadragon */
      {
        /**
         * The default values for the optional settings documented at {@link OpenSeadragon.Options}.
         * @static
         * @type {Object}
         */
        DEFAULT_SETTINGS: {
          //DATA SOURCE DETAILS
          xmlPath: null,
          tileSources: null,
          tileHost: null,
          initialPage: 0,
          crossOriginPolicy: !1,
          ajaxWithCredentials: !1,
          loadTilesWithAjax: !1,
          ajaxHeaders: {},
          splitHashDataForPost: !1,
          //PAN AND ZOOM SETTINGS AND CONSTRAINTS
          panHorizontal: !0,
          panVertical: !0,
          constrainDuringPan: !1,
          wrapHorizontal: !1,
          wrapVertical: !1,
          visibilityRatio: 0.5,
          //-> how much of the viewer can be negative space
          minPixelRatio: 0.5,
          //->closer to 0 draws tiles meant for a higher zoom at this zoom
          defaultZoomLevel: 0,
          minZoomLevel: null,
          maxZoomLevel: null,
          homeFillsViewer: !1,
          //UI RESPONSIVENESS AND FEEL
          clickTimeThreshold: 300,
          clickDistThreshold: 5,
          dblClickTimeThreshold: 300,
          dblClickDistThreshold: 20,
          springStiffness: 6.5,
          animationTime: 1.2,
          gestureSettingsMouse: {
            dragToPan: !0,
            scrollToZoom: !0,
            clickToZoom: !0,
            dblClickToZoom: !1,
            pinchToZoom: !1,
            zoomToRefPoint: !0,
            flickEnabled: !1,
            flickMinSpeed: 120,
            flickMomentum: 0.25,
            pinchRotate: !1
          },
          gestureSettingsTouch: {
            dragToPan: !0,
            scrollToZoom: !1,
            clickToZoom: !1,
            dblClickToZoom: !0,
            pinchToZoom: !0,
            zoomToRefPoint: !0,
            flickEnabled: !0,
            flickMinSpeed: 120,
            flickMomentum: 0.25,
            pinchRotate: !1
          },
          gestureSettingsPen: {
            dragToPan: !0,
            scrollToZoom: !1,
            clickToZoom: !0,
            dblClickToZoom: !1,
            pinchToZoom: !1,
            zoomToRefPoint: !0,
            flickEnabled: !1,
            flickMinSpeed: 120,
            flickMomentum: 0.25,
            pinchRotate: !1
          },
          gestureSettingsUnknown: {
            dragToPan: !0,
            scrollToZoom: !1,
            clickToZoom: !1,
            dblClickToZoom: !0,
            pinchToZoom: !0,
            zoomToRefPoint: !0,
            flickEnabled: !0,
            flickMinSpeed: 120,
            flickMomentum: 0.25,
            pinchRotate: !1
          },
          zoomPerClick: 2,
          zoomPerScroll: 1.2,
          zoomPerSecond: 1,
          blendTime: 0,
          alwaysBlend: !1,
          autoHideControls: !0,
          immediateRender: !1,
          minZoomImageRatio: 0.9,
          //-> closer to 0 allows zoom out to infinity
          maxZoomPixelRatio: 1.1,
          //-> higher allows 'over zoom' into pixels
          smoothTileEdgesMinZoom: 1.1,
          //-> higher than maxZoomPixelRatio disables it
          iOSDevice: t(),
          pixelsPerWheelLine: 40,
          pixelsPerArrowPress: 40,
          autoResize: !0,
          preserveImageSizeOnResize: !1,
          // requires autoResize=true
          minScrollDeltaTime: 50,
          rotationIncrement: 90,
          //DEFAULT CONTROL SETTINGS
          showSequenceControl: !0,
          //SEQUENCE
          sequenceControlAnchor: null,
          //SEQUENCE
          preserveViewport: !1,
          //SEQUENCE
          preserveOverlays: !1,
          //SEQUENCE
          navPrevNextWrap: !1,
          //SEQUENCE
          showNavigationControl: !0,
          //ZOOM/HOME/FULL/ROTATION
          navigationControlAnchor: null,
          //ZOOM/HOME/FULL/ROTATION
          showZoomControl: !0,
          //ZOOM
          showHomeControl: !0,
          //HOME
          showFullPageControl: !0,
          //FULL
          showRotationControl: !1,
          //ROTATION
          showFlipControl: !1,
          //FLIP
          controlsFadeDelay: 2e3,
          //ZOOM/HOME/FULL/SEQUENCE
          controlsFadeLength: 1500,
          //ZOOM/HOME/FULL/SEQUENCE
          mouseNavEnabled: !0,
          //GENERAL MOUSE INTERACTIVITY
          //VIEWPORT NAVIGATOR SETTINGS
          showNavigator: !1,
          navigatorId: null,
          navigatorPosition: null,
          navigatorSizeRatio: 0.2,
          navigatorMaintainSizeRatio: !1,
          navigatorTop: null,
          navigatorLeft: null,
          navigatorHeight: null,
          navigatorWidth: null,
          navigatorAutoResize: !0,
          navigatorAutoFade: !0,
          navigatorRotate: !0,
          navigatorBackground: "#000",
          navigatorOpacity: 0.8,
          navigatorBorderColor: "#555",
          navigatorDisplayRegionColor: "#900",
          // INITIAL ROTATION
          degrees: 0,
          // INITIAL FLIP STATE
          flipped: !1,
          // APPEARANCE
          opacity: 1,
          preload: !1,
          compositeOperation: null,
          imageSmoothingEnabled: !0,
          placeholderFillStyle: null,
          subPixelRoundingForTransparency: null,
          //REFERENCE STRIP SETTINGS
          showReferenceStrip: !1,
          referenceStripScroll: "horizontal",
          referenceStripElement: null,
          referenceStripHeight: null,
          referenceStripWidth: null,
          referenceStripPosition: "BOTTOM_LEFT",
          referenceStripSizeRatio: 0.2,
          //COLLECTION VISUALIZATION SETTINGS
          collectionRows: 3,
          //or columns depending on layout
          collectionColumns: 0,
          //columns in horizontal layout, rows in vertical layout
          collectionLayout: "horizontal",
          //vertical
          collectionMode: !1,
          collectionTileSize: 800,
          collectionTileMargin: 80,
          //PERFORMANCE SETTINGS
          imageLoaderLimit: 0,
          maxImageCacheCount: 200,
          timeout: 3e4,
          useCanvas: !0,
          // Use canvas element for drawing if available
          //INTERFACE RESOURCE SETTINGS
          prefixUrl: "/images/",
          navImages: {
            zoomIn: {
              REST: "zoomin_rest.png",
              GROUP: "zoomin_grouphover.png",
              HOVER: "zoomin_hover.png",
              DOWN: "zoomin_pressed.png"
            },
            zoomOut: {
              REST: "zoomout_rest.png",
              GROUP: "zoomout_grouphover.png",
              HOVER: "zoomout_hover.png",
              DOWN: "zoomout_pressed.png"
            },
            home: {
              REST: "home_rest.png",
              GROUP: "home_grouphover.png",
              HOVER: "home_hover.png",
              DOWN: "home_pressed.png"
            },
            fullpage: {
              REST: "fullpage_rest.png",
              GROUP: "fullpage_grouphover.png",
              HOVER: "fullpage_hover.png",
              DOWN: "fullpage_pressed.png"
            },
            rotateleft: {
              REST: "rotateleft_rest.png",
              GROUP: "rotateleft_grouphover.png",
              HOVER: "rotateleft_hover.png",
              DOWN: "rotateleft_pressed.png"
            },
            rotateright: {
              REST: "rotateright_rest.png",
              GROUP: "rotateright_grouphover.png",
              HOVER: "rotateright_hover.png",
              DOWN: "rotateright_pressed.png"
            },
            flip: {
              // Flip icon designed by Yaroslav Samoylov from the Noun Project and modified by Nelson Campos ncampos@criteriamarathon.com, https://thenounproject.com/term/flip/136289/
              REST: "flip_rest.png",
              GROUP: "flip_grouphover.png",
              HOVER: "flip_hover.png",
              DOWN: "flip_pressed.png"
            },
            previous: {
              REST: "previous_rest.png",
              GROUP: "previous_grouphover.png",
              HOVER: "previous_hover.png",
              DOWN: "previous_pressed.png"
            },
            next: {
              REST: "next_rest.png",
              GROUP: "next_grouphover.png",
              HOVER: "next_hover.png",
              DOWN: "next_pressed.png"
            }
          },
          //DEVELOPER SETTINGS
          debugMode: !1,
          debugGridColor: ["#437AB2", "#1B9E77", "#D95F02", "#7570B3", "#E7298A", "#66A61E", "#E6AB02", "#A6761D", "#666666"],
          silenceMultiImageWarnings: !1
        },
        /**
         * TODO: get rid of this.  I can't see how it's required at all.  Looks
         *       like an early legacy code artifact.
         * @static
         * @ignore
         */
        SIGNAL: "----seadragon----",
        /**
         * Returns a function which invokes the method as if it were a method belonging to the object.
         * @function
         * @param {Object} object
         * @param {Function} method
         * @returns {Function}
         */
        delegate: function(n, r) {
          return function() {
            var l = arguments;
            return l === void 0 && (l = []), r.apply(n, l);
          };
        },
        /**
         * An enumeration of Browser vendors.
         * @static
         * @type {Object}
         * @property {Number} UNKNOWN
         * @property {Number} IE
         * @property {Number} FIREFOX
         * @property {Number} SAFARI
         * @property {Number} CHROME
         * @property {Number} OPERA
         * @property {Number} EDGE
         * @property {Number} CHROMEEDGE
         */
        BROWSERS: {
          UNKNOWN: 0,
          IE: 1,
          FIREFOX: 2,
          SAFARI: 3,
          CHROME: 4,
          OPERA: 5,
          EDGE: 6,
          CHROMEEDGE: 7
        },
        /**
         * An enumeration of when subpixel rounding should occur.
         * @static
         * @type {Object}
         * @property {Number} NEVER Never apply subpixel rounding for transparency.
         * @property {Number} ONLY_AT_REST Do not apply subpixel rounding for transparency during animation (panning, zoom, rotation) and apply it once animation is over.
         * @property {Number} ALWAYS Apply subpixel rounding for transparency during animation and when animation is over.
         */
        SUBPIXEL_ROUNDING_OCCURRENCES: {
          NEVER: 0,
          ONLY_AT_REST: 1,
          ALWAYS: 2
        },
        /**
         * Keep track of which {@link Viewer}s have been created.
         * - Key: {@link Element} to which a Viewer is attached.
         * - Value: {@link Viewer} of the element defined by the key.
         * @private
         * @static
         * @type {Object}
         */
        _viewers: /* @__PURE__ */ new Map(),
        /**
          * Returns the {@link Viewer} attached to a given DOM element. If there is
          * no viewer attached to the provided element, undefined is returned.
          * @function
          * @param {String|Element} element Accepts an id or element.
          * @returns {Viewer} The viewer attached to the given element, or undefined.
          */
        getViewer: function(n) {
          return e._viewers.get(this.getElement(n));
        },
        /**
         * Returns a DOM Element for the given id or element.
         * @function
         * @param {String|Element} element Accepts an id or element.
         * @returns {Element} The element with the given id, null, or the element itself.
         */
        getElement: function(n) {
          return typeof n == "string" && (n = document.getElementById(n)), n;
        },
        /**
         * Determines the position of the upper-left corner of the element.
         * @function
         * @param {Element|String} element - the element we want the position for.
         * @returns {OpenSeadragon.Point} - the position of the upper left corner of the element.
         */
        getElementPosition: function(n) {
          var r = new e.Point(), l, d;
          for (n = e.getElement(n), l = e.getElementStyle(n).position === "fixed", d = i(n, l); d; )
            r.x += n.offsetLeft, r.y += n.offsetTop, l && (r = r.plus(e.getPageScroll())), n = d, l = e.getElementStyle(n).position === "fixed", d = i(n, l);
          return r;
        },
        /**
         * Determines the position of the upper-left corner of the element adjusted for current page and/or element scroll.
         * @function
         * @param {Element|String} element - the element we want the position for.
         * @returns {OpenSeadragon.Point} - the position of the upper left corner of the element adjusted for current page and/or element scroll.
         */
        getElementOffset: function(n) {
          n = e.getElement(n);
          var r = n && n.ownerDocument, l, d, f = { top: 0, left: 0 };
          return r ? (l = r.documentElement, typeof n.getBoundingClientRect < "u" && (f = n.getBoundingClientRect()), d = r === r.window ? r : r.nodeType === 9 ? r.defaultView || r.parentWindow : !1, new e.Point(
            f.left + (d.pageXOffset || l.scrollLeft) - (l.clientLeft || 0),
            f.top + (d.pageYOffset || l.scrollTop) - (l.clientTop || 0)
          )) : new e.Point();
        },
        /**
         * Determines the height and width of the given element.
         * @function
         * @param {Element|String} element
         * @returns {OpenSeadragon.Point}
         */
        getElementSize: function(n) {
          return n = e.getElement(n), new e.Point(
            n.clientWidth,
            n.clientHeight
          );
        },
        /**
         * Returns the CSSStyle object for the given element.
         * @function
         * @param {Element|String} element
         * @returns {CSSStyle}
         */
        getElementStyle: document.documentElement.currentStyle ? function(n) {
          return n = e.getElement(n), n.currentStyle;
        } : function(n) {
          return n = e.getElement(n), window.getComputedStyle(n, "");
        },
        /**
         * Returns the property with the correct vendor prefix appended.
         * @param {String} property the property name
         * @returns {String} the property with the correct prefix or null if not
         * supported.
         */
        getCssPropertyWithVendorPrefix: function(n) {
          var r = {};
          return e.getCssPropertyWithVendorPrefix = function(l) {
            if (r[l] !== void 0)
              return r[l];
            var d = document.createElement("div").style, f = null;
            if (d[l] !== void 0)
              f = l;
            else
              for (var y = [
                "Webkit",
                "Moz",
                "MS",
                "O",
                "webkit",
                "moz",
                "ms",
                "o"
              ], v = e.capitalizeFirstLetter(l), T = 0; T < y.length; T++) {
                var w = y[T] + v;
                if (d[w] !== void 0) {
                  f = w;
                  break;
                }
              }
            return r[l] = f, f;
          }, e.getCssPropertyWithVendorPrefix(n);
        },
        /**
         * Capitalizes the first letter of a string
         * @param {String} string
         * @returns {String} The string with the first letter capitalized
         */
        capitalizeFirstLetter: function(n) {
          return n.charAt(0).toUpperCase() + n.slice(1);
        },
        /**
         * Compute the modulo of a number but makes sure to always return
         * a positive value.
         * @param {Number} number the number to computes the modulo of
         * @param {Number} modulo the modulo
         * @returns {Number} the result of the modulo of number
         */
        positiveModulo: function(n, r) {
          var l = n % r;
          return l < 0 && (l += r), l;
        },
        /**
         * Determines if a point is within the bounding rectangle of the given element (hit-test).
         * @function
         * @param {Element|String} element
         * @param {OpenSeadragon.Point} point
         * @returns {Boolean}
         */
        pointInElement: function(n, r) {
          n = e.getElement(n);
          var l = e.getElementOffset(n), d = e.getElementSize(n);
          return r.x >= l.x && r.x < l.x + d.x && r.y < l.y + d.y && r.y >= l.y;
        },
        /**
         * Gets the position of the mouse on the screen for a given event.
         * @function
         * @param {Event} [event]
         * @returns {OpenSeadragon.Point}
         */
        getMousePosition: function(n) {
          if (typeof n.pageX == "number")
            e.getMousePosition = function(r) {
              var l = new e.Point();
              return l.x = r.pageX, l.y = r.pageY, l;
            };
          else if (typeof n.clientX == "number")
            e.getMousePosition = function(r) {
              var l = new e.Point();
              return l.x = r.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, l.y = r.clientY + document.body.scrollTop + document.documentElement.scrollTop, l;
            };
          else
            throw new Error(
              "Unknown event mouse position, no known technique."
            );
          return e.getMousePosition(n);
        },
        /**
         * Determines the page's current scroll position.
         * @function
         * @returns {OpenSeadragon.Point}
         */
        getPageScroll: function() {
          var n = document.documentElement || {}, r = document.body || {};
          if (typeof window.pageXOffset == "number")
            e.getPageScroll = function() {
              return new e.Point(
                window.pageXOffset,
                window.pageYOffset
              );
            };
          else if (r.scrollLeft || r.scrollTop)
            e.getPageScroll = function() {
              return new e.Point(
                document.body.scrollLeft,
                document.body.scrollTop
              );
            };
          else if (n.scrollLeft || n.scrollTop)
            e.getPageScroll = function() {
              return new e.Point(
                document.documentElement.scrollLeft,
                document.documentElement.scrollTop
              );
            };
          else
            return new e.Point(0, 0);
          return e.getPageScroll();
        },
        /**
         * Set the page scroll position.
         * @function
         * @returns {OpenSeadragon.Point}
         */
        setPageScroll: function(n) {
          if (typeof window.scrollTo < "u")
            e.setPageScroll = function(d) {
              window.scrollTo(d.x, d.y);
            };
          else {
            var r = e.getPageScroll();
            if (r.x === n.x && r.y === n.y)
              return;
            document.body.scrollLeft = n.x, document.body.scrollTop = n.y;
            var l = e.getPageScroll();
            if (l.x !== r.x && l.y !== r.y) {
              e.setPageScroll = function(d) {
                document.body.scrollLeft = d.x, document.body.scrollTop = d.y;
              };
              return;
            }
            if (document.documentElement.scrollLeft = n.x, document.documentElement.scrollTop = n.y, l = e.getPageScroll(), l.x !== r.x && l.y !== r.y) {
              e.setPageScroll = function(d) {
                document.documentElement.scrollLeft = d.x, document.documentElement.scrollTop = d.y;
              };
              return;
            }
            e.setPageScroll = function(d) {
            };
          }
          e.setPageScroll(n);
        },
        /**
         * Determines the size of the browsers window.
         * @function
         * @returns {OpenSeadragon.Point}
         */
        getWindowSize: function() {
          var n = document.documentElement || {}, r = document.body || {};
          if (typeof window.innerWidth == "number")
            e.getWindowSize = function() {
              return new e.Point(
                window.innerWidth,
                window.innerHeight
              );
            };
          else if (n.clientWidth || n.clientHeight)
            e.getWindowSize = function() {
              return new e.Point(
                document.documentElement.clientWidth,
                document.documentElement.clientHeight
              );
            };
          else if (r.clientWidth || r.clientHeight)
            e.getWindowSize = function() {
              return new e.Point(
                document.body.clientWidth,
                document.body.clientHeight
              );
            };
          else
            throw new Error("Unknown window size, no known technique.");
          return e.getWindowSize();
        },
        /**
         * Wraps the given element in a nest of divs so that the element can
         * be easily centered using CSS tables
         * @function
         * @param {Element|String} element
         * @returns {Element} outermost wrapper element
         */
        makeCenteredNode: function(n) {
          n = e.getElement(n);
          var r = [
            e.makeNeutralElement("div"),
            e.makeNeutralElement("div"),
            e.makeNeutralElement("div")
          ];
          return e.extend(r[0].style, {
            display: "table",
            height: "100%",
            width: "100%"
          }), e.extend(r[1].style, {
            display: "table-row"
          }), e.extend(r[2].style, {
            display: "table-cell",
            verticalAlign: "middle",
            textAlign: "center"
          }), r[0].appendChild(r[1]), r[1].appendChild(r[2]), r[2].appendChild(n), r[0];
        },
        /**
         * Creates an easily positionable element of the given type that therefor
         * serves as an excellent container element.
         * @function
         * @param {String} tagName
         * @returns {Element}
         */
        makeNeutralElement: function(n) {
          var r = document.createElement(n), l = r.style;
          return l.background = "transparent none", l.border = "none", l.margin = "0px", l.padding = "0px", l.position = "static", r;
        },
        /**
         * Returns the current milliseconds, using Date.now() if available
         * @function
         */
        now: function() {
          return Date.now ? e.now = Date.now : e.now = function() {
            return (/* @__PURE__ */ new Date()).getTime();
          }, e.now();
        },
        /**
         * Ensures an image is loaded correctly to support alpha transparency.
         * @function
         * @param {String} src
         * @returns {Element}
         */
        makeTransparentImage: function(n) {
          var r = e.makeNeutralElement("img");
          return r.src = n, r;
        },
        /**
         * Sets the opacity of the specified element.
         * @function
         * @param {Element|String} element
         * @param {Number} opacity
         * @param {Boolean} [usesAlpha]
         */
        setElementOpacity: function(n, r, l) {
          var d, f;
          n = e.getElement(n), l && !e.Browser.alpha && (r = Math.round(r)), e.Browser.opacity ? n.style.opacity = r < 1 ? r : "" : r < 1 ? (d = Math.round(100 * r), f = "alpha(opacity=" + d + ")", n.style.filter = f) : n.style.filter = "";
        },
        /**
         * Sets the specified element's touch-action style attribute to 'none'.
         * @function
         * @param {Element|String} element
         */
        setElementTouchActionNone: function(n) {
          n = e.getElement(n), typeof n.style.touchAction < "u" ? n.style.touchAction = "none" : typeof n.style.msTouchAction < "u" && (n.style.msTouchAction = "none");
        },
        /**
         * Sets the specified element's pointer-events style attribute to the passed value.
         * @function
         * @param {Element|String} element
         * @param {String} value
         */
        setElementPointerEvents: function(n, r) {
          n = e.getElement(n), typeof n.style < "u" && typeof n.style.pointerEvents < "u" && (n.style.pointerEvents = r);
        },
        /**
         * Sets the specified element's pointer-events style attribute to 'none'.
         * @function
         * @param {Element|String} element
         */
        setElementPointerEventsNone: function(n) {
          e.setElementPointerEvents(n, "none");
        },
        /**
         * Add the specified CSS class to the element if not present.
         * @function
         * @param {Element|String} element
         * @param {String} className
         */
        addClass: function(n, r) {
          n = e.getElement(n), n.className ? (" " + n.className + " ").indexOf(" " + r + " ") === -1 && (n.className += " " + r) : n.className = r;
        },
        /**
         * Find the first index at which an element is found in an array or -1
         * if not present.
         *
         * Code taken and adapted from
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Compatibility
         *
         * @function
         * @param {Array} array The array from which to find the element
         * @param {Object} searchElement The element to find
         * @param {Number} [fromIndex=0] Index to start research.
         * @returns {Number} The index of the element in the array.
         */
        indexOf: function(n, r, l) {
          return Array.prototype.indexOf ? this.indexOf = function(d, f, y) {
            return d.indexOf(f, y);
          } : this.indexOf = function(d, f, y) {
            var v, T = y || 0, w;
            if (!d)
              throw new TypeError();
            if (w = d.length, w === 0 || T >= w)
              return -1;
            for (T < 0 && (T = w - Math.abs(T)), v = T; v < w; v++)
              if (d[v] === f)
                return v;
            return -1;
          }, this.indexOf(n, r, l);
        },
        /**
         * Remove the specified CSS class from the element.
         * @function
         * @param {Element|String} element
         * @param {String} className
         */
        removeClass: function(n, r) {
          var l, d = [], f;
          for (n = e.getElement(n), l = n.className.split(/\s+/), f = 0; f < l.length; f++)
            l[f] && l[f] !== r && d.push(l[f]);
          n.className = d.join(" ");
        },
        /**
         * Convert passed addEventListener() options to boolean or options object,
         * depending on browser support.
         * @function
         * @param {Boolean|Object} [options] Boolean useCapture, or if [supportsEventListenerOptions]{@link OpenSeadragon.supportsEventListenerOptions}, can be an object
         * @param {Boolean} [options.capture]
         * @param {Boolean} [options.passive]
         * @param {Boolean} [options.once]
         * @return {String} The protocol (http:, https:, file:, ftp: ...)
         */
        normalizeEventListenerOptions: function(n) {
          var r;
          return typeof n < "u" ? typeof n == "boolean" ? r = e.supportsEventListenerOptions ? { capture: n } : n : r = e.supportsEventListenerOptions ? n : typeof n.capture < "u" ? n.capture : !1 : r = e.supportsEventListenerOptions ? { capture: !1 } : !1, r;
        },
        /**
         * Adds an event listener for the given element, eventName and handler.
         * @function
         * @param {Element|String} element
         * @param {String} eventName
         * @param {Function} handler
         * @param {Boolean|Object} [options] Boolean useCapture, or if [supportsEventListenerOptions]{@link OpenSeadragon.supportsEventListenerOptions}, can be an object
         * @param {Boolean} [options.capture]
         * @param {Boolean} [options.passive]
         * @param {Boolean} [options.once]
         */
        addEvent: function() {
          if (e.supportsAddEventListener)
            return function(n, r, l, d) {
              d = e.normalizeEventListenerOptions(d), n = e.getElement(n), n.addEventListener(r, l, d);
            };
          if (document.documentElement.attachEvent && document.attachEvent)
            return function(n, r, l) {
              n = e.getElement(n), n.attachEvent("on" + r, l);
            };
          throw new Error("No known event model.");
        }(),
        /**
         * Remove a given event listener for the given element, event type and
         * handler.
         * @function
         * @param {Element|String} element
         * @param {String} eventName
         * @param {Function} handler
         * @param {Boolean|Object} [options] Boolean useCapture, or if [supportsEventListenerOptions]{@link OpenSeadragon.supportsEventListenerOptions}, can be an object
         * @param {Boolean} [options.capture]
         */
        removeEvent: function() {
          if (e.supportsRemoveEventListener)
            return function(n, r, l, d) {
              d = e.normalizeEventListenerOptions(d), n = e.getElement(n), n.removeEventListener(r, l, d);
            };
          if (document.documentElement.detachEvent && document.detachEvent)
            return function(n, r, l) {
              n = e.getElement(n), n.detachEvent("on" + r, l);
            };
          throw new Error("No known event model.");
        }(),
        /**
         * Cancels the default browser behavior had the event propagated all
         * the way up the DOM to the window object.
         * @function
         * @param {Event} [event]
         */
        cancelEvent: function(n) {
          n.preventDefault();
        },
        /**
         * Returns true if {@link OpenSeadragon.cancelEvent|cancelEvent} has been called on
         * the event, otherwise returns false.
         * @function
         * @param {Event} [event]
         */
        eventIsCanceled: function(n) {
          return n.defaultPrevented;
        },
        /**
         * Stops the propagation of the event through the DOM in the capturing and bubbling phases.
         * @function
         * @param {Event} [event]
         */
        stopEvent: function(n) {
          n.stopPropagation();
        },
        /**
         * Similar to OpenSeadragon.delegate, but it does not immediately call
         * the method on the object, returning a function which can be called
         * repeatedly to delegate the method. It also allows additional arguments
         * to be passed during construction which will be added during each
         * invocation, and each invocation can add additional arguments as well.
         *
         * @function
         * @param {Object} object
         * @param {Function} method
         * @param [args] any additional arguments are passed as arguments to the
         *  created callback
         * @returns {Function}
         */
        createCallback: function(n, r) {
          var l = [], d;
          for (d = 2; d < arguments.length; d++)
            l.push(arguments[d]);
          return function() {
            var f = l.concat([]), y;
            for (y = 0; y < arguments.length; y++)
              f.push(arguments[y]);
            return r.apply(n, f);
          };
        },
        /**
         * Retrieves the value of a url parameter from the window.location string.
         * @function
         * @param {String} key
         * @returns {String} The value of the url parameter or null if no param matches.
         */
        getUrlParameter: function(n) {
          var r = h[n];
          return r || null;
        },
        /**
         * Retrieves the protocol used by the url. The url can either be absolute
         * or relative.
         * @function
         * @private
         * @param {String} url The url to retrieve the protocol from.
         * @return {String} The protocol (http:, https:, file:, ftp: ...)
         */
        getUrlProtocol: function(n) {
          var r = n.match(/^([a-z]+:)\/\//i);
          return r === null ? window.location.protocol : r[1].toLowerCase();
        },
        /**
         * Create an XHR object
         * @private
         * @param {type} [local] If set to true, the XHR will be file: protocol
         * compatible if possible (but may raise a warning in the browser).
         * @returns {XMLHttpRequest}
         */
        createAjaxRequest: function(n) {
          var r;
          try {
            r = !!new ActiveXObject("Microsoft.XMLHTTP");
          } catch {
            r = !1;
          }
          if (r)
            window.XMLHttpRequest ? e.createAjaxRequest = function(l) {
              return l ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
            } : e.createAjaxRequest = function() {
              return new ActiveXObject("Microsoft.XMLHTTP");
            };
          else if (window.XMLHttpRequest)
            e.createAjaxRequest = function() {
              return new XMLHttpRequest();
            };
          else
            throw new Error("Browser doesn't support XMLHttpRequest.");
          return e.createAjaxRequest(n);
        },
        /**
         * Makes an AJAX request.
         * @param {Object} options
         * @param {String} options.url - the url to request
         * @param {Function} options.success - a function to call on a successful response
         * @param {Function} options.error - a function to call on when an error occurs
         * @param {Object} options.headers - headers to add to the AJAX request
         * @param {String} options.responseType - the response type of the AJAX request
         * @param {String} options.postData - HTTP POST data (usually but not necessarily in k=v&k2=v2... form,
         *      see TileSrouce::getPostData), GET method used if null
         * @param {Boolean} [options.withCredentials=false] - whether to set the XHR's withCredentials
         * @throws {Error}
         * @returns {XMLHttpRequest}
         */
        makeAjaxRequest: function(n, r, l) {
          var d, f, y, v;
          e.isPlainObject(n) && (r = n.success, l = n.error, d = n.withCredentials, f = n.headers, y = n.responseType || null, v = n.postData || null, n = n.url);
          var T = e.getUrlProtocol(n), w = e.createAjaxRequest(T === "file:");
          if (!e.isFunction(r))
            throw new Error("makeAjaxRequest requires a success callback");
          w.onreadystatechange = function() {
            w.readyState === 4 && (w.onreadystatechange = function() {
            }, w.status >= 200 && w.status < 300 || w.status === 0 && T !== "http:" && T !== "https:" ? r(w) : e.isFunction(l) ? l(w) : e.console.error("AJAX request returned %d: %s", w.status, n));
          };
          var x = v ? "POST" : "GET";
          try {
            if (w.open(x, n, !0), y && (w.responseType = y), f)
              for (var _ in f)
                Object.prototype.hasOwnProperty.call(f, _) && f[_] && w.setRequestHeader(_, f[_]);
            d && (w.withCredentials = !0), w.send(v);
          } catch (b) {
            e.console.error("%s while making AJAX request: %s", b.name, b.message), w.onreadystatechange = function() {
            }, e.isFunction(l) && l(w, b);
          }
          return w;
        },
        /**
         * Taken from jQuery 1.6.1
         * @function
         * @param {Object} options
         * @param {String} options.url
         * @param {Function} options.callback
         * @param {String} [options.param='callback'] The name of the url parameter
         *      to request the jsonp provider with.
         * @param {String} [options.callbackName=] The name of the callback to
         *      request the jsonp provider with.
         */
        jsonp: function(n) {
          var r, l = n.url, d = document.head || document.getElementsByTagName("head")[0] || document.documentElement, f = n.callbackName || "openseadragon" + e.now(), y = window[f], v = "$1" + f + "$2", T = n.param || "callback", w = n.callback;
          l = l.replace(/(=)\?(&|$)|\?\?/i, v), l += (/\?/.test(l) ? "&" : "?") + T + "=" + f, window[f] = function(x) {
            if (y)
              window[f] = y;
            else
              try {
                delete window[f];
              } catch {
              }
            w && e.isFunction(w) && w(x);
          }, r = document.createElement("script"), (n.async !== void 0 || n.async !== !1) && (r.async = "async"), n.scriptCharset && (r.charset = n.scriptCharset), r.src = l, r.onload = r.onreadystatechange = function(x, _) {
            (_ || !r.readyState || /loaded|complete/.test(r.readyState)) && (r.onload = r.onreadystatechange = null, d && r.parentNode && d.removeChild(r), r = void 0);
          }, d.insertBefore(r, d.firstChild);
        },
        /**
         * Fully deprecated. Will throw an error.
         * @function
         * @deprecated use {@link OpenSeadragon.Viewer#open}
         */
        createFromDZI: function() {
          throw "OpenSeadragon.createFromDZI is deprecated, use Viewer.open.";
        },
        /**
         * Parses an XML string into a DOM Document.
         * @function
         * @param {String} string
         * @returns {Document}
         */
        parseXml: function(n) {
          if (window.DOMParser)
            e.parseXml = function(r) {
              var l = null, d;
              return d = new DOMParser(), l = d.parseFromString(r, "text/xml"), l;
            };
          else if (window.ActiveXObject)
            e.parseXml = function(r) {
              var l = null;
              return l = new ActiveXObject("Microsoft.XMLDOM"), l.async = !1, l.loadXML(r), l;
            };
          else
            throw new Error("Browser doesn't support XML DOM.");
          return e.parseXml(n);
        },
        /**
         * Parses a JSON string into a Javascript object.
         * @function
         * @param {String} string
         * @returns {Object}
         */
        parseJSON: function(n) {
          return e.parseJSON = window.JSON.parse, e.parseJSON(n);
        },
        /**
         * Reports whether the image format is supported for tiling in this
         * version.
         * @function
         * @param {String} [extension]
         * @returns {Boolean}
         */
        imageFormatSupported: function(n) {
          return n = n || "", !!o[n.toLowerCase()];
        },
        /**
         * Updates supported image formats with user-specified values.
         * Preexisting formats that are not being updated are left unchanged.
         * By default, the defined formats are
         * <pre><code>{
         *      bmp:  false,
         *      jpeg: true,
         *      jpg:  true,
         *      png:  true,
         *      tif:  false,
         *      wdp:  false
         * }
         * </code></pre>
         * @function
         * @example
         * // sets webp as supported and png as unsupported
         * setImageFormatsSupported({webp: true, png: false});
         * @param {Object} formats An object containing format extensions as
         * keys and booleans as values.
         */
        setImageFormatsSupported: function(n) {
          e.extend(o, n);
        }
      }
    );
    var s = function(n) {
    };
    e.console = window.console || {
      log: s,
      debug: s,
      info: s,
      warn: s,
      error: s,
      assert: s
    }, e.Browser = {
      vendor: e.BROWSERS.UNKNOWN,
      version: 0,
      alpha: !0
    };
    var o = {
      bmp: !1,
      jpeg: !0,
      jpg: !0,
      png: !0,
      tif: !1,
      wdp: !1
    }, h = {};
    (function() {
      var n = navigator.appVersion, r = navigator.userAgent, l;
      switch (navigator.appName) {
        case "Microsoft Internet Explorer":
          window.attachEvent && window.ActiveXObject && (e.Browser.vendor = e.BROWSERS.IE, e.Browser.version = parseFloat(
            r.substring(
              r.indexOf("MSIE") + 5,
              r.indexOf(";", r.indexOf("MSIE"))
            )
          ));
          break;
        case "Netscape":
          window.addEventListener && (r.indexOf("Edge") >= 0 ? (e.Browser.vendor = e.BROWSERS.EDGE, e.Browser.version = parseFloat(
            r.substring(r.indexOf("Edge") + 5)
          )) : r.indexOf("Edg") >= 0 ? (e.Browser.vendor = e.BROWSERS.CHROMEEDGE, e.Browser.version = parseFloat(
            r.substring(r.indexOf("Edg") + 4)
          )) : r.indexOf("Firefox") >= 0 ? (e.Browser.vendor = e.BROWSERS.FIREFOX, e.Browser.version = parseFloat(
            r.substring(r.indexOf("Firefox") + 8)
          )) : r.indexOf("Safari") >= 0 ? (e.Browser.vendor = r.indexOf("Chrome") >= 0 ? e.BROWSERS.CHROME : e.BROWSERS.SAFARI, e.Browser.version = parseFloat(
            r.substring(
              r.substring(0, r.indexOf("Safari")).lastIndexOf("/") + 1,
              r.indexOf("Safari")
            )
          )) : (l = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"), l.exec(r) !== null && (e.Browser.vendor = e.BROWSERS.IE, e.Browser.version = parseFloat(RegExp.$1))));
          break;
        case "Opera":
          e.Browser.vendor = e.BROWSERS.OPERA, e.Browser.version = parseFloat(n);
          break;
      }
      var d = window.location.search.substring(1), f = d.split("&"), y, v, T;
      for (T = 0; T < f.length; T++)
        if (y = f[T], v = y.indexOf("="), v > 0) {
          var w = y.substring(0, v), x = y.substring(v + 1);
          try {
            h[w] = decodeURIComponent(x);
          } catch {
            e.console.error("Ignoring malformed URL parameter: %s=%s", w, x);
          }
        }
      e.Browser.alpha = !(e.Browser.vendor === e.BROWSERS.CHROME && e.Browser.version < 2), e.Browser.opacity = !0, e.Browser.vendor === e.BROWSERS.IE && e.Browser.version < 11 && e.console.error("Internet Explorer versions < 11 are not supported by OpenSeadragon");
    })(), function(n) {
      var r = n.requestAnimationFrame || n.mozRequestAnimationFrame || n.webkitRequestAnimationFrame || n.msRequestAnimationFrame, l = n.cancelAnimationFrame || n.mozCancelAnimationFrame || n.webkitCancelAnimationFrame || n.msCancelAnimationFrame;
      if (r && l)
        e.requestAnimationFrame = function() {
          return r.apply(n, arguments);
        }, e.cancelAnimationFrame = function() {
          return l.apply(n, arguments);
        };
      else {
        var d = [], f = [], y = 0, v;
        e.requestAnimationFrame = function(T) {
          return d.push([++y, T]), v || (v = setInterval(function() {
            if (d.length) {
              var w = e.now(), x = f;
              for (f = d, d = x; f.length; )
                f.shift()[1](w);
            } else
              clearInterval(v), v = void 0;
          }, 1e3 / 50)), y;
        }, e.cancelAnimationFrame = function(T) {
          var w, x;
          for (w = 0, x = d.length; w < x; w += 1)
            if (d[w][0] === T) {
              d.splice(w, 1);
              return;
            }
          for (w = 0, x = f.length; w < x; w += 1)
            if (f[w][0] === T) {
              f.splice(w, 1);
              return;
            }
        };
      }
    }(window);
    function i(n, r) {
      return r && n !== document.body ? document.body : n.offsetParent;
    }
  }(D), function(e, t) {
    F.exports ? F.exports = t() : e.OpenSeadragon = t();
  }(ze, function() {
    return D;
  }), function(e) {
    var t = {
      supportsFullScreen: !1,
      isFullScreen: function() {
        return !1;
      },
      getFullScreenElement: function() {
        return null;
      },
      requestFullScreen: function() {
      },
      exitFullScreen: function() {
      },
      cancelFullScreen: function() {
      },
      fullScreenEventName: "",
      fullScreenErrorEventName: ""
    };
    document.exitFullscreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
      return document.fullscreenElement;
    }, t.requestFullScreen = function(s) {
      return s.requestFullscreen();
    }, t.exitFullScreen = function() {
      document.exitFullscreen();
    }, t.fullScreenEventName = "fullscreenchange", t.fullScreenErrorEventName = "fullscreenerror") : document.msExitFullscreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
      return document.msFullscreenElement;
    }, t.requestFullScreen = function(s) {
      return s.msRequestFullscreen();
    }, t.exitFullScreen = function() {
      document.msExitFullscreen();
    }, t.fullScreenEventName = "MSFullscreenChange", t.fullScreenErrorEventName = "MSFullscreenError") : document.webkitExitFullscreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
      return document.webkitFullscreenElement;
    }, t.requestFullScreen = function(s) {
      return s.webkitRequestFullscreen();
    }, t.exitFullScreen = function() {
      document.webkitExitFullscreen();
    }, t.fullScreenEventName = "webkitfullscreenchange", t.fullScreenErrorEventName = "webkitfullscreenerror") : document.webkitCancelFullScreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
      return document.webkitCurrentFullScreenElement;
    }, t.requestFullScreen = function(s) {
      return s.webkitRequestFullScreen();
    }, t.exitFullScreen = function() {
      document.webkitCancelFullScreen();
    }, t.fullScreenEventName = "webkitfullscreenchange", t.fullScreenErrorEventName = "webkitfullscreenerror") : document.mozCancelFullScreen && (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
      return document.mozFullScreenElement;
    }, t.requestFullScreen = function(s) {
      return s.mozRequestFullScreen();
    }, t.exitFullScreen = function() {
      document.mozCancelFullScreen();
    }, t.fullScreenEventName = "mozfullscreenchange", t.fullScreenErrorEventName = "mozfullscreenerror"), t.isFullScreen = function() {
      return t.getFullScreenElement() !== null;
    }, t.cancelFullScreen = function() {
      e.console.error("cancelFullScreen is deprecated. Use exitFullScreen instead."), t.exitFullScreen();
    }, e.extend(e, t);
  }(D), function(e) {
    e.EventSource = function() {
      this.events = {};
    }, e.EventSource.prototype = {
      /**
       * Add an event handler to be triggered only once (or a given number of times)
       * for a given event.
       * @function
       * @param {String} eventName - Name of event to register.
       * @param {OpenSeadragon.EventHandler} handler - Function to call when event
       * is triggered.
       * @param {Object} [userData=null] - Arbitrary object to be passed unchanged
       * to the handler.
       * @param {Number} [times=1] - The number of times to handle the event
       * before removing it.
       */
      addOnceHandler: function(t, s, o, h) {
        var i = this;
        h = h || 1;
        var n = 0, r = function(l) {
          n++, n === h && i.removeHandler(t, r), s(l);
        };
        this.addHandler(t, r, o);
      },
      /**
       * Add an event handler for a given event.
       * @function
       * @param {String} eventName - Name of event to register.
       * @param {OpenSeadragon.EventHandler} handler - Function to call when event is triggered.
       * @param {Object} [userData=null] - Arbitrary object to be passed unchanged to the handler.
       */
      addHandler: function(t, s, o) {
        var h = this.events[t];
        h || (this.events[t] = h = []), s && e.isFunction(s) && (h[h.length] = { handler: s, userData: o || null });
      },
      /**
       * Remove a specific event handler for a given event.
       * @function
       * @param {String} eventName - Name of event for which the handler is to be removed.
       * @param {OpenSeadragon.EventHandler} handler - Function to be removed.
       */
      removeHandler: function(t, s) {
        var o = this.events[t], h = [], i;
        if (o && e.isArray(o)) {
          for (i = 0; i < o.length; i++)
            o[i].handler !== s && h.push(o[i]);
          this.events[t] = h;
        }
      },
      /**
       * Get the amount of handlers registered for a given event.
       * @param {String} eventName - Name of event to inspect.
       * @return {number} amount of events
       */
      numberOfHandlers: function(t) {
        var s = this.events[t];
        return s ? s.length : 0;
      },
      /**
       * Remove all event handlers for a given event type. If no type is given all
       * event handlers for every event type are removed.
       * @function
       * @param {String} eventName - Name of event for which all handlers are to be removed.
       */
      removeAllHandlers: function(t) {
        if (t)
          this.events[t] = [];
        else
          for (var s in this.events)
            this.events[s] = [];
      },
      /**
       * Get a function which iterates the list of all handlers registered for a given event, calling the handler for each.
       * @function
       * @param {String} eventName - Name of event to get handlers for.
       */
      getHandler: function(t) {
        var s = this.events[t];
        return !s || !s.length ? null : (s = s.length === 1 ? [s[0]] : Array.apply(null, s), function(o, h) {
          var i, n = s.length;
          for (i = 0; i < n; i++)
            s[i] && (h.eventSource = o, h.userData = s[i].userData, s[i].handler(h));
        });
      },
      /**
       * Trigger an event, optionally passing additional information.
       * @function
       * @param {String} eventName - Name of event to register.
       * @param {Object} eventArgs - Event-specific data.
       */
      raiseEvent: function(t, s) {
        var o = this.getHandler(t);
        o && (s || (s = {}), o(this, s));
      }
    };
  }(D), function(e) {
    var t = {};
    e.MouseTracker = function(c) {
      var u = arguments;
      e.isPlainObject(c) || (c = {
        element: u[0],
        clickTimeThreshold: u[1],
        clickDistThreshold: u[2]
      }), this.hash = Math.random(), this.element = e.getElement(c.element), this.clickTimeThreshold = c.clickTimeThreshold || e.DEFAULT_SETTINGS.clickTimeThreshold, this.clickDistThreshold = c.clickDistThreshold || e.DEFAULT_SETTINGS.clickDistThreshold, this.dblClickTimeThreshold = c.dblClickTimeThreshold || e.DEFAULT_SETTINGS.dblClickTimeThreshold, this.dblClickDistThreshold = c.dblClickDistThreshold || e.DEFAULT_SETTINGS.dblClickDistThreshold, this.userData = c.userData || null, this.stopDelay = c.stopDelay || 50, this.preProcessEventHandler = c.preProcessEventHandler || null, this.contextMenuHandler = c.contextMenuHandler || null, this.enterHandler = c.enterHandler || null, this.leaveHandler = c.leaveHandler || null, this.exitHandler = c.exitHandler || null, this.overHandler = c.overHandler || null, this.outHandler = c.outHandler || null, this.pressHandler = c.pressHandler || null, this.nonPrimaryPressHandler = c.nonPrimaryPressHandler || null, this.releaseHandler = c.releaseHandler || null, this.nonPrimaryReleaseHandler = c.nonPrimaryReleaseHandler || null, this.moveHandler = c.moveHandler || null, this.scrollHandler = c.scrollHandler || null, this.clickHandler = c.clickHandler || null, this.dblClickHandler = c.dblClickHandler || null, this.dragHandler = c.dragHandler || null, this.dragEndHandler = c.dragEndHandler || null, this.pinchHandler = c.pinchHandler || null, this.stopHandler = c.stopHandler || null, this.keyDownHandler = c.keyDownHandler || null, this.keyUpHandler = c.keyUpHandler || null, this.keyHandler = c.keyHandler || null, this.focusHandler = c.focusHandler || null, this.blurHandler = c.blurHandler || null;
      var p = this;
      t[this.hash] = {
        click: function(g) {
          b(p, g);
        },
        dblclick: function(g) {
          N(p, g);
        },
        keydown: function(g) {
          G(p, g);
        },
        keyup: function(g) {
          A(p, g);
        },
        keypress: function(g) {
          W(p, g);
        },
        focus: function(g) {
          M(p, g);
        },
        blur: function(g) {
          j(p, g);
        },
        contextmenu: function(g) {
          $(p, g);
        },
        wheel: function(g) {
          Y(p, g);
        },
        mousewheel: function(g) {
          K(p, g);
        },
        DOMMouseScroll: function(g) {
          K(p, g);
        },
        MozMousePixelScroll: function(g) {
          K(p, g);
        },
        losecapture: function(g) {
          ie(p, g);
        },
        mouseenter: function(g) {
          fe(p, g);
        },
        mouseleave: function(g) {
          ue(p, g);
        },
        mouseover: function(g) {
          pe(p, g);
        },
        mouseout: function(g) {
          ge(p, g);
        },
        mousedown: function(g) {
          me(p, g);
        },
        mouseup: function(g) {
          ve(p, g);
        },
        mousemove: function(g) {
          we(p, g);
        },
        touchstart: function(g) {
          le(p, g);
        },
        touchend: function(g) {
          te(p, g);
        },
        touchmove: function(g) {
          ne(p, g);
        },
        touchcancel: function(g) {
          se(p, g);
        },
        gesturestart: function(g) {
          he(p, g);
        },
        // Safari/Safari iOS
        gesturechange: function(g) {
          z(p, g);
        },
        // Safari/Safari iOS
        gotpointercapture: function(g) {
          xe(p, g);
        },
        lostpointercapture: function(g) {
          Ee(p, g);
        },
        pointerenter: function(g) {
          fe(p, g);
        },
        pointerleave: function(g) {
          ue(p, g);
        },
        pointerover: function(g) {
          pe(p, g);
        },
        pointerout: function(g) {
          ge(p, g);
        },
        pointerdown: function(g) {
          me(p, g);
        },
        pointerup: function(g) {
          ve(p, g);
        },
        pointermove: function(g) {
          we(p, g);
        },
        pointercancel: function(g) {
          a(p, g);
        },
        pointerupcaptured: function(g) {
          Se(p, g);
        },
        pointermovecaptured: function(g) {
          Pe(p, g);
        },
        tracking: !1,
        // Active pointers lists. Array of GesturePointList objects, one for each pointer device type.
        // GesturePointList objects are added each time a pointer is tracked by a new pointer device type (see getActivePointersListByType()).
        // Active pointers are any pointer being tracked for this element which are in the hit-test area
        //     of the element (for hover-capable devices) and/or have contact or a button press initiated in the element.
        activePointersLists: [],
        // Tracking for double-click gesture
        lastClickPos: null,
        dblClickTimeOut: null,
        // Tracking for pinch gesture
        pinchGPoints: [],
        lastPinchDist: 0,
        currentPinchDist: 0,
        lastPinchCenter: null,
        currentPinchCenter: null,
        // Tracking for drag
        sentDragEvent: !1
      }, this.hasGestureHandlers = !!(this.pressHandler || this.nonPrimaryPressHandler || this.releaseHandler || this.nonPrimaryReleaseHandler || this.clickHandler || this.dblClickHandler || this.dragHandler || this.dragEndHandler || this.pinchHandler), this.hasScrollHandler = !!this.scrollHandler, e.MouseTracker.havePointerEvents && e.setElementPointerEvents(this.element, "auto"), this.exitHandler && e.console.error("MouseTracker.exitHandler is deprecated. Use MouseTracker.leaveHandler instead."), c.startDisabled || this.setTracking(!0);
    }, e.MouseTracker.prototype = {
      /**
       * Clean up any events or objects created by the tracker.
       * @function
       */
      destroy: function() {
        n(this), this.element = null, t[this.hash] = null, delete t[this.hash];
      },
      /**
       * Are we currently tracking events on this element.
       * @deprecated Just use this.tracking
       * @function
       * @returns {Boolean} Are we currently tracking events on this element.
       */
      isTracking: function() {
        return t[this.hash].tracking;
      },
      /**
       * Enable or disable whether or not we are tracking events on this element.
       * @function
       * @param {Boolean} track True to start tracking, false to stop tracking.
       * @returns {OpenSeadragon.MouseTracker} Chainable.
       */
      setTracking: function(c) {
        return c ? i(this) : n(this), this;
      },
      /**
       * Returns the {@link OpenSeadragon.MouseTracker.GesturePointList|GesturePointList} for the given pointer device type,
       * creating and caching a new {@link OpenSeadragon.MouseTracker.GesturePointList|GesturePointList} if one doesn't already exist for the type.
       * @function
       * @param {String} type - The pointer device type: "mouse", "touch", "pen", etc.
       * @returns {OpenSeadragon.MouseTracker.GesturePointList}
       */
      getActivePointersListByType: function(c) {
        var u = t[this.hash], p, g = u.activePointersLists.length, S;
        for (p = 0; p < g; p++)
          if (u.activePointersLists[p].type === c)
            return u.activePointersLists[p];
        return S = new e.MouseTracker.GesturePointList(c), u.activePointersLists.push(S), S;
      },
      /**
       * Returns the total number of pointers currently active on the tracked element.
       * @function
       * @returns {Number}
       */
      getActivePointerCount: function() {
        var c = t[this.hash], u, p = c.activePointersLists.length, g = 0;
        for (u = 0; u < p; u++)
          g += c.activePointersLists[u].getLength();
        return g;
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {OpenSeadragon.MouseTracker.EventProcessInfo} eventInfo
       */
      preProcessEventHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Boolean} event.preventDefault
       *      Set to true to prevent the default user-agent's handling of the contextmenu event.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      contextMenuHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Number} event.pointers
       *      Number of pointers (all types) active in the tracked element.
       * @param {Boolean} event.insideElementPressed
       *      True if the left mouse button is currently being pressed and was
       *      initiated inside the tracked element, otherwise false.
       * @param {Boolean} event.buttonDownAny
       *      Was the button down anywhere in the screen during the event. <span style="color:red;">Deprecated. Use buttons instead.</span>
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      enterHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @since v2.5.0
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Number} event.pointers
       *      Number of pointers (all types) active in the tracked element.
       * @param {Boolean} event.insideElementPressed
       *      True if the left mouse button is currently being pressed and was
       *      initiated inside the tracked element, otherwise false.
       * @param {Boolean} event.buttonDownAny
       *      Was the button down anywhere in the screen during the event. <span style="color:red;">Deprecated. Use buttons instead.</span>
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      leaveHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @deprecated v2.5.0 Use leaveHandler instead
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Number} event.pointers
       *      Number of pointers (all types) active in the tracked element.
       * @param {Boolean} event.insideElementPressed
       *      True if the left mouse button is currently being pressed and was
       *      initiated inside the tracked element, otherwise false.
       * @param {Boolean} event.buttonDownAny
       *      Was the button down anywhere in the screen during the event. <span style="color:red;">Deprecated. Use buttons instead.</span>
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      exitHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @since v2.5.0
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Number} event.pointers
       *      Number of pointers (all types) active in the tracked element.
       * @param {Boolean} event.insideElementPressed
       *      True if the left mouse button is currently being pressed and was
       *      initiated inside the tracked element, otherwise false.
       * @param {Boolean} event.buttonDownAny
       *      Was the button down anywhere in the screen during the event. <span style="color:red;">Deprecated. Use buttons instead.</span>
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      overHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @since v2.5.0
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Number} event.pointers
       *      Number of pointers (all types) active in the tracked element.
       * @param {Boolean} event.insideElementPressed
       *      True if the left mouse button is currently being pressed and was
       *      initiated inside the tracked element, otherwise false.
       * @param {Boolean} event.buttonDownAny
       *      Was the button down anywhere in the screen during the event. <span style="color:red;">Deprecated. Use buttons instead.</span>
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      outHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      pressHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.button
       *      Button which caused the event.
       *      -1: none, 0: primary/left, 1: aux/middle, 2: secondary/right, 3: X1/back, 4: X2/forward, 5: pen eraser.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      nonPrimaryPressHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Boolean} event.insideElementPressed
       *      True if the left mouse button is currently being pressed and was
       *      initiated inside the tracked element, otherwise false.
       * @param {Boolean} event.insideElementReleased
       *      True if the cursor inside the tracked element when the button was released.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      releaseHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.button
       *      Button which caused the event.
       *      -1: none, 0: primary/left, 1: aux/middle, 2: secondary/right, 3: X1/back, 4: X2/forward, 5: pen eraser.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      nonPrimaryReleaseHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      moveHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.scroll
       *      The scroll delta for the event.
       * @param {Boolean} event.shift
       *      True if the shift key was pressed during this event.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead. Touch devices no longer generate scroll event.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Boolean} event.preventDefault
       *      Set to true to prevent the default user-agent's handling of the wheel event.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      scrollHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Boolean} event.quick
       *      True only if the clickDistThreshold and clickTimeThreshold are both passed. Useful for ignoring drag events.
       * @param {Boolean} event.shift
       *      True if the shift key was pressed during this event.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Element} event.originalTarget
       *      The DOM element clicked on.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      clickHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Boolean} event.shift
       *      True if the shift key was pressed during this event.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      dblClickHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {OpenSeadragon.Point} event.delta
       *      The x,y components of the difference between the current position and the last drag event position.  Useful for ignoring or weighting the events.
       * @param {Number} event.speed
       *     Current computed speed, in pixels per second.
       * @param {Number} event.direction
       *     Current computed direction, expressed as an angle counterclockwise relative to the positive X axis (-pi to pi, in radians). Only valid if speed > 0.
       * @param {Boolean} event.shift
       *      True if the shift key was pressed during this event.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      dragHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.speed
       *     Speed at the end of a drag gesture, in pixels per second.
       * @param {Number} event.direction
       *     Direction at the end of a drag gesture, expressed as an angle counterclockwise relative to the positive X axis (-pi to pi, in radians). Only valid if speed > 0.
       * @param {Boolean} event.shift
       *      True if the shift key was pressed during this event.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      dragEndHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {Array.<OpenSeadragon.MouseTracker.GesturePoint>} event.gesturePoints
       *      Gesture points associated with the gesture. Velocity data can be found here.
       * @param {OpenSeadragon.Point} event.lastCenter
       *      The previous center point of the two pinch contact points relative to the tracked element.
       * @param {OpenSeadragon.Point} event.center
       *      The center point of the two pinch contact points relative to the tracked element.
       * @param {Number} event.lastDistance
       *      The previous distance between the two pinch contact points in CSS pixels.
       * @param {Number} event.distance
       *      The distance between the two pinch contact points in CSS pixels.
       * @param {Boolean} event.shift
       *      True if the shift key was pressed during this event.
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      pinchHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      stopHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {Number} event.keyCode
       *      The key code that was pressed.
       * @param {Boolean} event.ctrl
       *      True if the ctrl key was pressed during this event.
       * @param {Boolean} event.shift
       *      True if the shift key was pressed during this event.
       * @param {Boolean} event.alt
       *      True if the alt key was pressed during this event.
       * @param {Boolean} event.meta
       *      True if the meta key was pressed during this event.
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Boolean} event.preventDefault
       *      Set to true to prevent the default user-agent's handling of the keydown event.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      keyDownHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {Number} event.keyCode
       *      The key code that was pressed.
       * @param {Boolean} event.ctrl
       *      True if the ctrl key was pressed during this event.
       * @param {Boolean} event.shift
       *      True if the shift key was pressed during this event.
       * @param {Boolean} event.alt
       *      True if the alt key was pressed during this event.
       * @param {Boolean} event.meta
       *      True if the meta key was pressed during this event.
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Boolean} event.preventDefault
       *      Set to true to prevent the default user-agent's handling of the keyup event.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      keyUpHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {Number} event.keyCode
       *      The key code that was pressed.
       * @param {Boolean} event.ctrl
       *      True if the ctrl key was pressed during this event.
       * @param {Boolean} event.shift
       *      True if the shift key was pressed during this event.
       * @param {Boolean} event.alt
       *      True if the alt key was pressed during this event.
       * @param {Boolean} event.meta
       *      True if the meta key was pressed during this event.
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Boolean} event.preventDefault
       *      Set to true to prevent the default user-agent's handling of the keypress event.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      keyHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      focusHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      blurHandler: function() {
      }
    };
    var s = function() {
      try {
        return window.self !== window.top;
      } catch {
        return !0;
      }
    }();
    function o(c) {
      try {
        return c.addEventListener && c.removeEventListener;
      } catch {
        return !1;
      }
    }
    e.MouseTracker.gesturePointVelocityTracker = /* @__PURE__ */ function() {
      var c = [], u = 0, p = 0, g = function(q, I) {
        return q.hash.toString() + I.type + I.id.toString();
      }, S = function() {
        var q, I = c.length, ee, J, ce = e.now(), _e, Ce, Re;
        for (_e = ce - p, p = ce, q = 0; q < I; q++)
          ee = c[q], J = ee.gPoint, J.direction = Math.atan2(J.currentPos.y - ee.lastPos.y, J.currentPos.x - ee.lastPos.x), Ce = ee.lastPos.distanceTo(J.currentPos), ee.lastPos = J.currentPos, Re = 1e3 * Ce / (_e + 1), J.speed = 0.75 * Re + 0.25 * J.speed;
      }, C = function(q, I) {
        var ee = g(q, I);
        c.push(
          {
            guid: ee,
            gPoint: I,
            lastPos: I.currentPos
          }
        ), c.length === 1 && (p = e.now(), u = window.setInterval(S, 50));
      }, B = function(q, I) {
        var ee = g(q, I), J, ce = c.length;
        for (J = 0; J < ce; J++)
          if (c[J].guid === ee) {
            c.splice(J, 1), ce--, ce === 0 && window.clearInterval(u);
            break;
          }
      };
      return {
        addPoint: C,
        removePoint: B
      };
    }(), e.MouseTracker.captureElement = document, e.MouseTracker.wheelEventName = e.Browser.vendor === e.BROWSERS.IE && e.Browser.version > 8 || "onwheel" in document.createElement("div") ? "wheel" : (
      // Modern browsers support 'wheel'
      document.onmousewheel !== void 0 ? "mousewheel" : (
        // Webkit and IE support at least 'mousewheel'
        "DOMMouseScroll"
      )
    ), e.MouseTracker.subscribeEvents = ["click", "dblclick", "keydown", "keyup", "keypress", "focus", "blur", "contextmenu", e.MouseTracker.wheelEventName], e.MouseTracker.wheelEventName === "DOMMouseScroll" && e.MouseTracker.subscribeEvents.push("MozMousePixelScroll"), window.PointerEvent ? (e.MouseTracker.havePointerEvents = !0, e.MouseTracker.subscribeEvents.push("pointerenter", "pointerleave", "pointerover", "pointerout", "pointerdown", "pointerup", "pointermove", "pointercancel"), e.MouseTracker.havePointerCapture = function() {
      var c = document.createElement("div");
      return e.isFunction(c.setPointerCapture) && e.isFunction(c.releasePointerCapture);
    }(), e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("gotpointercapture", "lostpointercapture")) : (e.MouseTracker.havePointerEvents = !1, e.MouseTracker.subscribeEvents.push("mouseenter", "mouseleave", "mouseover", "mouseout", "mousedown", "mouseup", "mousemove"), e.MouseTracker.mousePointerId = "legacy-mouse", e.MouseTracker.havePointerCapture = function() {
      var c = document.createElement("div");
      return e.isFunction(c.setCapture) && e.isFunction(c.releaseCapture);
    }(), e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("losecapture"), "ontouchstart" in window && e.MouseTracker.subscribeEvents.push("touchstart", "touchend", "touchmove", "touchcancel"), "ongesturestart" in window && e.MouseTracker.subscribeEvents.push("gesturestart", "gesturechange")), e.MouseTracker.GesturePointList = function(c) {
      this._gPoints = [], this.type = c, this.buttons = 0, this.contacts = 0, this.clicks = 0, this.captureCount = 0;
    }, e.MouseTracker.GesturePointList.prototype = {
      /**
       * @function
       * @returns {Number} Number of gesture points in the list.
       */
      getLength: function() {
        return this._gPoints.length;
      },
      /**
       * @function
       * @returns {Array.<OpenSeadragon.MouseTracker.GesturePoint>} The list of gesture points in the list as an array (read-only).
       */
      asArray: function() {
        return this._gPoints;
      },
      /**
       * @function
       * @param {OpenSeadragon.MouseTracker.GesturePoint} gesturePoint - A gesture point to add to the list.
       * @returns {Number} Number of gesture points in the list.
       */
      add: function(c) {
        return this._gPoints.push(c);
      },
      /**
       * @function
       * @param {Number} id - The id of the gesture point to remove from the list.
       * @returns {Number} Number of gesture points in the list.
       */
      removeById: function(c) {
        var u, p = this._gPoints.length;
        for (u = 0; u < p; u++)
          if (this._gPoints[u].id === c) {
            this._gPoints.splice(u, 1);
            break;
          }
        return this._gPoints.length;
      },
      /**
       * @function
       * @param {Number} index - The index of the gesture point to retrieve from the list.
       * @returns {OpenSeadragon.MouseTracker.GesturePoint|null} The gesture point at the given index, or null if not found.
       */
      getByIndex: function(c) {
        return c < this._gPoints.length ? this._gPoints[c] : null;
      },
      /**
       * @function
       * @param {Number} id - The id of the gesture point to retrieve from the list.
       * @returns {OpenSeadragon.MouseTracker.GesturePoint|null} The gesture point with the given id, or null if not found.
       */
      getById: function(c) {
        var u, p = this._gPoints.length;
        for (u = 0; u < p; u++)
          if (this._gPoints[u].id === c)
            return this._gPoints[u];
        return null;
      },
      /**
       * @function
       * @returns {OpenSeadragon.MouseTracker.GesturePoint|null} The primary gesture point in the list, or null if not found.
       */
      getPrimary: function(c) {
        var u, p = this._gPoints.length;
        for (u = 0; u < p; u++)
          if (this._gPoints[u].isPrimary)
            return this._gPoints[u];
        return null;
      },
      /**
       * Increment this pointer list's contact count.
       * It will evaluate whether this pointer type is allowed to have multiple contacts.
       * @function
       */
      addContact: function() {
        ++this.contacts, this.contacts > 1 && (this.type === "mouse" || this.type === "pen") && (e.console.warn("GesturePointList.addContact() Implausible contacts value"), this.contacts = 1);
      },
      /**
       * Decrement this pointer list's contact count.
       * It will make sure the count does not go below 0.
       * @function
       */
      removeContact: function() {
        --this.contacts, this.contacts < 0 && (this.contacts = 0);
      }
    };
    function h(c) {
      var u = t[c.hash], p, g, S, C, B, q = u.activePointersLists.length;
      for (p = 0; p < q; p++)
        if (S = u.activePointersLists[p], S.getLength() > 0) {
          for (B = [], C = S.asArray(), g = 0; g < C.length; g++)
            B.push(C[g]);
          for (g = 0; g < B.length; g++)
            E(c, S, B[g]);
        }
      for (p = 0; p < q; p++)
        u.activePointersLists.pop();
      u.sentDragEvent = !1;
    }
    function i(c) {
      var u = t[c.hash], p, g;
      if (!u.tracking) {
        for (g = 0; g < e.MouseTracker.subscribeEvents.length; g++)
          p = e.MouseTracker.subscribeEvents[g], e.addEvent(
            c.element,
            p,
            u[p],
            p === e.MouseTracker.wheelEventName ? { passive: !1, capture: !1 } : !1
          );
        h(c), u.tracking = !0;
      }
    }
    function n(c) {
      var u = t[c.hash], p, g;
      if (u.tracking) {
        for (g = 0; g < e.MouseTracker.subscribeEvents.length; g++)
          p = e.MouseTracker.subscribeEvents[g], e.removeEvent(
            c.element,
            p,
            u[p],
            !1
          );
        h(c), u.tracking = !1;
      }
    }
    function r(c, u) {
      var p = t[c.hash];
      if (u === "pointerevent")
        return {
          upName: "pointerup",
          upHandler: p.pointerupcaptured,
          moveName: "pointermove",
          moveHandler: p.pointermovecaptured
        };
      if (u === "mouse")
        return {
          upName: "pointerup",
          upHandler: p.pointerupcaptured,
          moveName: "pointermove",
          moveHandler: p.pointermovecaptured
        };
      if (u === "touch")
        return {
          upName: "touchend",
          upHandler: p.touchendcaptured,
          moveName: "touchmove",
          moveHandler: p.touchmovecaptured
        };
      throw new Error("MouseTracker.getCaptureEventParams: Unknown pointer type.");
    }
    function l(c, u) {
      var p;
      if (e.MouseTracker.havePointerCapture)
        if (e.MouseTracker.havePointerEvents)
          try {
            c.element.setPointerCapture(u.id);
          } catch {
            e.console.warn("setPointerCapture() called on invalid pointer ID");
            return;
          }
        else
          c.element.setCapture(!0);
      else
        p = r(c, e.MouseTracker.havePointerEvents ? "pointerevent" : u.type), s && o(window.top) && e.addEvent(
          window.top,
          p.upName,
          p.upHandler,
          !0
        ), e.addEvent(
          e.MouseTracker.captureElement,
          p.upName,
          p.upHandler,
          !0
        ), e.addEvent(
          e.MouseTracker.captureElement,
          p.moveName,
          p.moveHandler,
          !0
        );
      H(c, u, !0);
    }
    function d(c, u) {
      var p, g, S;
      if (e.MouseTracker.havePointerCapture)
        if (e.MouseTracker.havePointerEvents) {
          if (g = c.getActivePointersListByType(u.type), S = g.getById(u.id), !S || !S.captured)
            return;
          try {
            c.element.releasePointerCapture(u.id);
          } catch {
          }
        } else
          c.element.releaseCapture();
      else
        p = r(c, e.MouseTracker.havePointerEvents ? "pointerevent" : u.type), s && o(window.top) && e.removeEvent(
          window.top,
          p.upName,
          p.upHandler,
          !0
        ), e.removeEvent(
          e.MouseTracker.captureElement,
          p.moveName,
          p.moveHandler,
          !0
        ), e.removeEvent(
          e.MouseTracker.captureElement,
          p.upName,
          p.upHandler,
          !0
        );
      H(c, u, !1);
    }
    function f(c) {
      return e.MouseTracker.havePointerEvents ? c.pointerId : e.MouseTracker.mousePointerId;
    }
    function y(c) {
      return e.MouseTracker.havePointerEvents ? c.pointerType || (e.Browser.vendor === e.BROWSERS.IE ? "mouse" : "") : "mouse";
    }
    function v(c) {
      return e.MouseTracker.havePointerEvents ? c.isPrimary : !0;
    }
    function T(c) {
      return e.getMousePosition(c);
    }
    function w(c, u) {
      return x(T(c), u);
    }
    function x(c, u) {
      var p = e.getElementOffset(u);
      return c.minus(p);
    }
    function _(c, u) {
      return new e.Point((c.x + u.x) / 2, (c.y + u.y) / 2);
    }
    function b(c, u) {
      var p = {
        originalEvent: u,
        eventType: "click",
        pointerType: "mouse",
        isEmulated: !1
      };
      P(c, p), p.preventDefault && !p.defaultPrevented && e.cancelEvent(u), p.stopPropagation && e.stopEvent(u);
    }
    function N(c, u) {
      var p = {
        originalEvent: u,
        eventType: "dblclick",
        pointerType: "mouse",
        isEmulated: !1
      };
      P(c, p), p.preventDefault && !p.defaultPrevented && e.cancelEvent(u), p.stopPropagation && e.stopEvent(u);
    }
    function G(c, u) {
      var p = null, g = {
        originalEvent: u,
        eventType: "keydown",
        pointerType: "",
        isEmulated: !1
      };
      P(c, g), c.keyDownHandler && !g.preventGesture && !g.defaultPrevented && (p = {
        eventSource: c,
        keyCode: u.keyCode ? u.keyCode : u.charCode,
        ctrl: u.ctrlKey,
        shift: u.shiftKey,
        alt: u.altKey,
        meta: u.metaKey,
        originalEvent: u,
        preventDefault: g.preventDefault || g.defaultPrevented,
        userData: c.userData
      }, c.keyDownHandler(p)), (p && p.preventDefault || g.preventDefault && !g.defaultPrevented) && e.cancelEvent(u), g.stopPropagation && e.stopEvent(u);
    }
    function A(c, u) {
      var p = null, g = {
        originalEvent: u,
        eventType: "keyup",
        pointerType: "",
        isEmulated: !1
      };
      P(c, g), c.keyUpHandler && !g.preventGesture && !g.defaultPrevented && (p = {
        eventSource: c,
        keyCode: u.keyCode ? u.keyCode : u.charCode,
        ctrl: u.ctrlKey,
        shift: u.shiftKey,
        alt: u.altKey,
        meta: u.metaKey,
        originalEvent: u,
        preventDefault: g.preventDefault || g.defaultPrevented,
        userData: c.userData
      }, c.keyUpHandler(p)), (p && p.preventDefault || g.preventDefault && !g.defaultPrevented) && e.cancelEvent(u), g.stopPropagation && e.stopEvent(u);
    }
    function W(c, u) {
      var p = null, g = {
        originalEvent: u,
        eventType: "keypress",
        pointerType: "",
        isEmulated: !1
      };
      P(c, g), c.keyHandler && !g.preventGesture && !g.defaultPrevented && (p = {
        eventSource: c,
        keyCode: u.keyCode ? u.keyCode : u.charCode,
        ctrl: u.ctrlKey,
        shift: u.shiftKey,
        alt: u.altKey,
        meta: u.metaKey,
        originalEvent: u,
        preventDefault: g.preventDefault || g.defaultPrevented,
        userData: c.userData
      }, c.keyHandler(p)), (p && p.preventDefault || g.preventDefault && !g.defaultPrevented) && e.cancelEvent(u), g.stopPropagation && e.stopEvent(u);
    }
    function M(c, u) {
      var p = {
        originalEvent: u,
        eventType: "focus",
        pointerType: "",
        isEmulated: !1
      };
      P(c, p), c.focusHandler && !p.preventGesture && c.focusHandler(
        {
          eventSource: c,
          originalEvent: u,
          userData: c.userData
        }
      );
    }
    function j(c, u) {
      var p = {
        originalEvent: u,
        eventType: "blur",
        pointerType: "",
        isEmulated: !1
      };
      P(c, p), c.blurHandler && !p.preventGesture && c.blurHandler(
        {
          eventSource: c,
          originalEvent: u,
          userData: c.userData
        }
      );
    }
    function $(c, u) {
      var p = null, g = {
        originalEvent: u,
        eventType: "contextmenu",
        pointerType: "mouse",
        isEmulated: !1
      };
      P(c, g), c.contextMenuHandler && !g.preventGesture && !g.defaultPrevented && (p = {
        eventSource: c,
        position: x(T(u), c.element),
        originalEvent: g.originalEvent,
        preventDefault: g.preventDefault || g.defaultPrevented,
        userData: c.userData
      }, c.contextMenuHandler(p)), (p && p.preventDefault || g.preventDefault && !g.defaultPrevented) && e.cancelEvent(u), g.stopPropagation && e.stopEvent(u);
    }
    function Y(c, u) {
      ae(c, u, u);
    }
    function K(c, u) {
      var p = {
        target: u.target || u.srcElement,
        type: "wheel",
        shiftKey: u.shiftKey || !1,
        clientX: u.clientX,
        clientY: u.clientY,
        pageX: u.pageX ? u.pageX : u.clientX,
        pageY: u.pageY ? u.pageY : u.clientY,
        deltaMode: u.type === "MozMousePixelScroll" ? 0 : 1,
        // 0=pixel, 1=line, 2=page
        deltaX: 0,
        deltaZ: 0
      };
      e.MouseTracker.wheelEventName === "mousewheel" ? p.deltaY = -u.wheelDelta / e.DEFAULT_SETTINGS.pixelsPerWheelLine : p.deltaY = u.detail, ae(c, p, u);
    }
    function ae(c, u, p) {
      var g = 0, S, C = null;
      g = u.deltaY < 0 ? 1 : -1, S = {
        originalEvent: u,
        eventType: "wheel",
        pointerType: "mouse",
        isEmulated: u !== p
      }, P(c, S), c.scrollHandler && !S.preventGesture && !S.defaultPrevented && (C = {
        eventSource: c,
        pointerType: "mouse",
        position: w(u, c.element),
        scroll: g,
        shift: u.shiftKey,
        isTouchEvent: !1,
        originalEvent: p,
        preventDefault: S.preventDefault || S.defaultPrevented,
        userData: c.userData
      }, c.scrollHandler(C)), S.stopPropagation && e.stopEvent(p), (C && C.preventDefault || S.preventDefault && !S.defaultPrevented) && e.cancelEvent(p);
    }
    function ie(c, u) {
      var p = {
        id: e.MouseTracker.mousePointerId,
        type: "mouse"
      }, g = {
        originalEvent: u,
        eventType: "lostpointercapture",
        pointerType: "mouse",
        isEmulated: !1
      };
      P(c, g), u.target === c.element && H(c, p, !1), g.stopPropagation && e.stopEvent(u);
    }
    function le(c, u) {
      var p, g, S = u.changedTouches.length, C, B = c.getActivePointersListByType("touch");
      p = e.now(), B.getLength() > u.touches.length - S && e.console.warn("Tracked touch contact count doesn't match event.touches.length");
      var q = {
        originalEvent: u,
        eventType: "pointerdown",
        pointerType: "touch",
        isEmulated: !1
      };
      for (P(c, q), g = 0; g < S; g++)
        C = {
          id: u.changedTouches[g].identifier,
          type: "touch",
          // Simulate isPrimary
          isPrimary: B.getLength() === 0,
          currentPos: T(u.changedTouches[g]),
          currentTime: p
        }, O(c, q, C), L(c, q, C, 0), H(c, C, !0);
      q.preventDefault && !q.defaultPrevented && e.cancelEvent(u), q.stopPropagation && e.stopEvent(u);
    }
    function te(c, u) {
      var p, g, S = u.changedTouches.length, C;
      p = e.now();
      var B = {
        originalEvent: u,
        eventType: "pointerup",
        pointerType: "touch",
        isEmulated: !1
      };
      for (P(c, B), g = 0; g < S; g++)
        C = {
          id: u.changedTouches[g].identifier,
          type: "touch",
          currentPos: T(u.changedTouches[g]),
          currentTime: p
        }, X(c, B, C, 0), H(c, C, !1), V(c, B, C);
      B.preventDefault && !B.defaultPrevented && e.cancelEvent(u), B.stopPropagation && e.stopEvent(u);
    }
    function ne(c, u) {
      var p, g, S = u.changedTouches.length, C;
      p = e.now();
      var B = {
        originalEvent: u,
        eventType: "pointermove",
        pointerType: "touch",
        isEmulated: !1
      };
      for (P(c, B), g = 0; g < S; g++)
        C = {
          id: u.changedTouches[g].identifier,
          type: "touch",
          currentPos: T(u.changedTouches[g]),
          currentTime: p
        }, k(c, B, C);
      B.preventDefault && !B.defaultPrevented && e.cancelEvent(u), B.stopPropagation && e.stopEvent(u);
    }
    function se(c, u) {
      var p = u.changedTouches.length, g, S, C = {
        originalEvent: u,
        eventType: "pointercancel",
        pointerType: "touch",
        isEmulated: !1
      };
      for (P(c, C), g = 0; g < p; g++)
        S = {
          id: u.changedTouches[g].identifier,
          type: "touch"
        }, Q(c, C, S);
      C.stopPropagation && e.stopEvent(u);
    }
    function he(c, u) {
      return e.eventIsCanceled(u) || u.preventDefault(), !1;
    }
    function z(c, u) {
      return e.eventIsCanceled(u) || u.preventDefault(), !1;
    }
    function xe(c, u) {
      var p = {
        originalEvent: u,
        eventType: "gotpointercapture",
        pointerType: y(u),
        isEmulated: !1
      };
      P(c, p), u.target === c.element && H(c, {
        id: u.pointerId,
        type: y(u)
      }, !0), p.stopPropagation && e.stopEvent(u);
    }
    function Ee(c, u) {
      var p = {
        originalEvent: u,
        eventType: "lostpointercapture",
        pointerType: y(u),
        isEmulated: !1
      };
      P(c, p), u.target === c.element && H(c, {
        id: u.pointerId,
        type: y(u)
      }, !1), p.stopPropagation && e.stopEvent(u);
    }
    function fe(c, u) {
      var p = {
        id: f(u),
        type: y(u),
        isPrimary: v(u),
        currentPos: T(u),
        currentTime: e.now()
      }, g = {
        originalEvent: u,
        eventType: "pointerenter",
        pointerType: p.type,
        isEmulated: !1
      };
      P(c, g), O(c, g, p);
    }
    function ue(c, u) {
      var p = {
        id: f(u),
        type: y(u),
        isPrimary: v(u),
        currentPos: T(u),
        currentTime: e.now()
      }, g = {
        originalEvent: u,
        eventType: "pointerleave",
        pointerType: p.type,
        isEmulated: !1
      };
      P(c, g), V(c, g, p);
    }
    function pe(c, u) {
      var p = {
        id: f(u),
        type: y(u),
        isPrimary: v(u),
        currentPos: T(u),
        currentTime: e.now()
      }, g = {
        originalEvent: u,
        eventType: "pointerover",
        pointerType: p.type,
        isEmulated: !1
      };
      P(c, g), Z(c, g, p), g.preventDefault && !g.defaultPrevented && e.cancelEvent(u), g.stopPropagation && e.stopEvent(u);
    }
    function ge(c, u) {
      var p = {
        id: f(u),
        type: y(u),
        isPrimary: v(u),
        currentPos: T(u),
        currentTime: e.now()
      }, g = {
        originalEvent: u,
        eventType: "pointerout",
        pointerType: p.type,
        isEmulated: !1
      };
      P(c, g), U(c, g, p), g.preventDefault && !g.defaultPrevented && e.cancelEvent(u), g.stopPropagation && e.stopEvent(u);
    }
    function me(c, u) {
      var p = {
        id: f(u),
        type: y(u),
        isPrimary: v(u),
        currentPos: T(u),
        currentTime: e.now()
      }, g = e.MouseTracker.havePointerEvents && p.type === "touch" && e.Browser.vendor !== e.BROWSERS.IE, S = {
        originalEvent: u,
        eventType: "pointerdown",
        pointerType: p.type,
        isEmulated: !1
      };
      P(c, S), L(c, S, p, u.button), S.preventDefault && !S.defaultPrevented && e.cancelEvent(u), S.stopPropagation && e.stopEvent(u), S.shouldCapture && (g ? H(c, p, !0) : l(c, p));
    }
    function ve(c, u) {
      ye(c, u);
    }
    function Se(c, u) {
      var p = c.getActivePointersListByType(y(u));
      p.getById(u.pointerId) && ye(c, u), e.stopEvent(u);
    }
    function ye(c, u) {
      var p;
      p = {
        id: f(u),
        type: y(u),
        isPrimary: v(u),
        currentPos: T(u),
        currentTime: e.now()
      };
      var g = {
        originalEvent: u,
        eventType: "pointerup",
        pointerType: p.type,
        isEmulated: !1
      };
      P(c, g), X(c, g, p, u.button), g.preventDefault && !g.defaultPrevented && e.cancelEvent(u), g.stopPropagation && e.stopEvent(u), g.shouldReleaseCapture && (u.target === c.element ? d(c, p) : H(c, p, !1));
    }
    function we(c, u) {
      Te(c, u);
    }
    function Pe(c, u) {
      var p = c.getActivePointersListByType(y(u));
      p.getById(u.pointerId) && Te(c, u), e.stopEvent(u);
    }
    function Te(c, u) {
      var p = {
        id: f(u),
        type: y(u),
        isPrimary: v(u),
        currentPos: T(u),
        currentTime: e.now()
      }, g = {
        originalEvent: u,
        eventType: "pointermove",
        pointerType: p.type,
        isEmulated: !1
      };
      P(c, g), k(c, g, p), g.preventDefault && !g.defaultPrevented && e.cancelEvent(u), g.stopPropagation && e.stopEvent(u);
    }
    function a(c, u) {
      var p = {
        id: u.pointerId,
        type: y(u)
      }, g = {
        originalEvent: u,
        eventType: "pointercancel",
        pointerType: p.type,
        isEmulated: !1
      };
      P(c, g), Q(c, g, p), g.stopPropagation && e.stopEvent(u);
    }
    function m(c, u) {
      return u.speed = 0, u.direction = 0, u.contactPos = u.currentPos, u.contactTime = u.currentTime, u.lastPos = u.currentPos, u.lastTime = u.currentTime, c.add(u);
    }
    function E(c, u, p) {
      var g, S = u.getById(p.id);
      return S ? (S.captured && (e.console.warn("stopTrackingPointer() called on captured pointer"), d(c, S)), u.removeContact(), g = u.removeById(p.id)) : g = u.getLength(), g;
    }
    function R(c, u) {
      switch (u.eventType) {
        case "pointermove":
          u.isStoppable = !0, u.isCancelable = !0, u.preventDefault = !1, u.preventGesture = !c.hasGestureHandlers, u.stopPropagation = !1;
          break;
        case "pointerover":
        case "pointerout":
        case "contextmenu":
        case "keydown":
        case "keyup":
        case "keypress":
          u.isStoppable = !0, u.isCancelable = !0, u.preventDefault = !1, u.preventGesture = !1, u.stopPropagation = !1;
          break;
        case "pointerdown":
          u.isStoppable = !0, u.isCancelable = !0, u.preventDefault = !1, u.preventGesture = !c.hasGestureHandlers, u.stopPropagation = !1;
          break;
        case "pointerup":
          u.isStoppable = !0, u.isCancelable = !0, u.preventDefault = !1, u.preventGesture = !c.hasGestureHandlers, u.stopPropagation = !1;
          break;
        case "wheel":
          u.isStoppable = !0, u.isCancelable = !0, u.preventDefault = !1, u.preventGesture = !c.hasScrollHandler, u.stopPropagation = !1;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
          u.isStoppable = !0, u.isCancelable = !1, u.preventDefault = !1, u.preventGesture = !1, u.stopPropagation = !1;
          break;
        case "click":
          u.isStoppable = !0, u.isCancelable = !0, u.preventDefault = !!c.clickHandler, u.preventGesture = !1, u.stopPropagation = !1;
          break;
        case "dblclick":
          u.isStoppable = !0, u.isCancelable = !0, u.preventDefault = !!c.dblClickHandler, u.preventGesture = !1, u.stopPropagation = !1;
          break;
        case "focus":
        case "blur":
        case "pointerenter":
        case "pointerleave":
        default:
          u.isStoppable = !1, u.isCancelable = !1, u.preventDefault = !1, u.preventGesture = !1, u.stopPropagation = !1;
          break;
      }
    }
    function P(c, u) {
      u.eventSource = c, u.eventPhase = u.originalEvent && typeof u.originalEvent.eventPhase < "u" ? u.originalEvent.eventPhase : 0, u.defaultPrevented = e.eventIsCanceled(u.originalEvent), u.shouldCapture = !1, u.shouldReleaseCapture = !1, u.userData = c.userData, R(c, u), c.preProcessEventHandler && c.preProcessEventHandler(u);
    }
    function H(c, u, p) {
      var g = c.getActivePointersListByType(u.type), S = g.getById(u.id);
      S ? p && !S.captured ? (S.captured = !0, g.captureCount++) : !p && S.captured && (S.captured = !1, g.captureCount--, g.captureCount < 0 && (g.captureCount = 0, e.console.warn("updatePointerCaptured() - pointsList.captureCount went negative"))) : e.console.warn("updatePointerCaptured() called on untracked pointer");
    }
    function O(c, u, p) {
      var g = c.getActivePointersListByType(p.type), S;
      S = g.getById(p.id), S ? (S.insideElement = !0, S.lastPos = S.currentPos, S.lastTime = S.currentTime, S.currentPos = p.currentPos, S.currentTime = p.currentTime, p = S) : (p.captured = !1, p.insideElementPressed = !1, p.insideElement = !0, m(g, p)), c.enterHandler && c.enterHandler(
        {
          eventSource: c,
          pointerType: p.type,
          position: x(p.currentPos, c.element),
          buttons: g.buttons,
          pointers: c.getActivePointerCount(),
          insideElementPressed: p.insideElementPressed,
          buttonDownAny: g.buttons !== 0,
          isTouchEvent: p.type === "touch",
          originalEvent: u.originalEvent,
          userData: c.userData
        }
      );
    }
    function V(c, u, p) {
      var g = c.getActivePointersListByType(p.type), S, C;
      S = g.getById(p.id), S ? (S.captured ? (S.insideElement = !1, S.lastPos = S.currentPos, S.lastTime = S.currentTime, S.currentPos = p.currentPos, S.currentTime = p.currentTime) : E(c, g, S), p = S) : (p.captured = !1, p.insideElementPressed = !1), (c.leaveHandler || c.exitHandler) && (C = {
        eventSource: c,
        pointerType: p.type,
        // GitHub PR: https://github.com/openseadragon/openseadragon/pull/1754 (gPoint.currentPos && )
        position: p.currentPos && x(p.currentPos, c.element),
        buttons: g.buttons,
        pointers: c.getActivePointerCount(),
        insideElementPressed: p.insideElementPressed,
        buttonDownAny: g.buttons !== 0,
        isTouchEvent: p.type === "touch",
        originalEvent: u.originalEvent,
        userData: c.userData
      }, c.leaveHandler && c.leaveHandler(C), c.exitHandler && c.exitHandler(C));
    }
    function Z(c, u, p) {
      var g, S;
      g = c.getActivePointersListByType(p.type), S = g.getById(p.id), S ? p = S : (p.captured = !1, p.insideElementPressed = !1), c.overHandler && c.overHandler(
        {
          eventSource: c,
          pointerType: p.type,
          position: x(p.currentPos, c.element),
          buttons: g.buttons,
          pointers: c.getActivePointerCount(),
          insideElementPressed: p.insideElementPressed,
          buttonDownAny: g.buttons !== 0,
          isTouchEvent: p.type === "touch",
          originalEvent: u.originalEvent,
          userData: c.userData
        }
      );
    }
    function U(c, u, p) {
      var g, S;
      g = c.getActivePointersListByType(p.type), S = g.getById(p.id), S ? p = S : (p.captured = !1, p.insideElementPressed = !1), c.outHandler && c.outHandler({
        eventSource: c,
        pointerType: p.type,
        position: p.currentPos && x(p.currentPos, c.element),
        buttons: g.buttons,
        pointers: c.getActivePointerCount(),
        insideElementPressed: p.insideElementPressed,
        buttonDownAny: g.buttons !== 0,
        isTouchEvent: p.type === "touch",
        originalEvent: u.originalEvent,
        userData: c.userData
      });
    }
    function L(c, u, p, g) {
      var S = t[c.hash], C = c.getActivePointersListByType(p.type), B;
      if (typeof u.originalEvent.buttons < "u" ? C.buttons = u.originalEvent.buttons : g === 0 ? C.buttons |= 1 : g === 1 ? C.buttons |= 4 : g === 2 ? C.buttons |= 2 : g === 3 ? C.buttons |= 8 : g === 4 ? C.buttons |= 16 : g === 5 && (C.buttons |= 32), g !== 0) {
        u.shouldCapture = !1, u.shouldReleaseCapture = !1, c.nonPrimaryPressHandler && !u.preventGesture && !u.defaultPrevented && (u.preventDefault = !0, c.nonPrimaryPressHandler(
          {
            eventSource: c,
            pointerType: p.type,
            position: x(p.currentPos, c.element),
            button: g,
            buttons: C.buttons,
            isTouchEvent: p.type === "touch",
            originalEvent: u.originalEvent,
            userData: c.userData
          }
        ));
        return;
      }
      B = C.getById(p.id), B ? (B.insideElementPressed = !0, B.insideElement = !0, B.originalTarget = u.originalEvent.target, B.contactPos = p.currentPos, B.contactTime = p.currentTime, B.lastPos = B.currentPos, B.lastTime = B.currentTime, B.currentPos = p.currentPos, B.currentTime = p.currentTime, p = B) : (p.captured = !1, p.insideElementPressed = !0, p.insideElement = !0, p.originalTarget = u.originalEvent.target, m(C, p)), C.addContact(), !u.preventGesture && !u.defaultPrevented ? (u.shouldCapture = !0, u.shouldReleaseCapture = !1, u.preventDefault = !0, (c.dragHandler || c.dragEndHandler || c.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.addPoint(c, p), C.contacts === 1 ? c.pressHandler && !u.preventGesture && c.pressHandler(
        {
          eventSource: c,
          pointerType: p.type,
          position: x(p.contactPos, c.element),
          buttons: C.buttons,
          isTouchEvent: p.type === "touch",
          originalEvent: u.originalEvent,
          userData: c.userData
        }
      ) : C.contacts === 2 && c.pinchHandler && p.type === "touch" && (S.pinchGPoints = C.asArray(), S.lastPinchDist = S.currentPinchDist = S.pinchGPoints[0].currentPos.distanceTo(S.pinchGPoints[1].currentPos), S.lastPinchCenter = S.currentPinchCenter = _(S.pinchGPoints[0].currentPos, S.pinchGPoints[1].currentPos))) : (u.shouldCapture = !1, u.shouldReleaseCapture = !1);
    }
    function X(c, u, p, g) {
      var S = t[c.hash], C = c.getActivePointersListByType(p.type), B, q, I, ee = !1, J;
      if (typeof u.originalEvent.buttons < "u" ? C.buttons = u.originalEvent.buttons : g === 0 ? C.buttons ^= -2 : g === 1 ? C.buttons ^= -5 : g === 2 ? C.buttons ^= -3 : g === 3 ? C.buttons ^= -9 : g === 4 ? C.buttons ^= -17 : g === 5 && (C.buttons ^= -33), u.shouldCapture = !1, g !== 0) {
        u.shouldReleaseCapture = !1, c.nonPrimaryReleaseHandler && !u.preventGesture && !u.defaultPrevented && (u.preventDefault = !0, c.nonPrimaryReleaseHandler(
          {
            eventSource: c,
            pointerType: p.type,
            position: x(p.currentPos, c.element),
            button: g,
            buttons: C.buttons,
            isTouchEvent: p.type === "touch",
            originalEvent: u.originalEvent,
            userData: c.userData
          }
        ));
        return;
      }
      I = C.getById(p.id), I ? (C.removeContact(), I.captured && (ee = !0), I.lastPos = I.currentPos, I.lastTime = I.currentTime, I.currentPos = p.currentPos, I.currentTime = p.currentTime, I.insideElement || E(c, C, I), B = I.currentPos, q = I.currentTime) : (p.captured = !1, p.insideElementPressed = !1, p.insideElement = !0, m(C, p), I = p), !u.preventGesture && !u.defaultPrevented && (ee ? (u.shouldReleaseCapture = !0, u.preventDefault = !0, (c.dragHandler || c.dragEndHandler || c.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.removePoint(c, I), C.contacts === 0 ? (c.releaseHandler && B && c.releaseHandler(
        {
          eventSource: c,
          pointerType: I.type,
          position: x(B, c.element),
          buttons: C.buttons,
          insideElementPressed: I.insideElementPressed,
          insideElementReleased: I.insideElement,
          isTouchEvent: I.type === "touch",
          originalEvent: u.originalEvent,
          userData: c.userData
        }
      ), c.dragEndHandler && S.sentDragEvent && c.dragEndHandler(
        {
          eventSource: c,
          pointerType: I.type,
          position: x(I.currentPos, c.element),
          speed: I.speed,
          direction: I.direction,
          shift: u.originalEvent.shiftKey,
          isTouchEvent: I.type === "touch",
          originalEvent: u.originalEvent,
          userData: c.userData
        }
      ), S.sentDragEvent = !1, (c.clickHandler || c.dblClickHandler) && I.insideElement && (J = q - I.contactTime <= c.clickTimeThreshold && I.contactPos.distanceTo(B) <= c.clickDistThreshold, c.clickHandler && c.clickHandler(
        {
          eventSource: c,
          pointerType: I.type,
          position: x(I.currentPos, c.element),
          quick: J,
          shift: u.originalEvent.shiftKey,
          isTouchEvent: I.type === "touch",
          originalEvent: u.originalEvent,
          originalTarget: I.originalTarget,
          userData: c.userData
        }
      ), c.dblClickHandler && J && (C.clicks++, C.clicks === 1 ? (S.lastClickPos = B, S.dblClickTimeOut = setTimeout(function() {
        C.clicks = 0;
      }, c.dblClickTimeThreshold)) : C.clicks === 2 && (clearTimeout(S.dblClickTimeOut), C.clicks = 0, S.lastClickPos.distanceTo(B) <= c.dblClickDistThreshold && c.dblClickHandler(
        {
          eventSource: c,
          pointerType: I.type,
          position: x(I.currentPos, c.element),
          shift: u.originalEvent.shiftKey,
          isTouchEvent: I.type === "touch",
          originalEvent: u.originalEvent,
          userData: c.userData
        }
      ), S.lastClickPos = null)))) : C.contacts === 2 && c.pinchHandler && I.type === "touch" && (S.pinchGPoints = C.asArray(), S.lastPinchDist = S.currentPinchDist = S.pinchGPoints[0].currentPos.distanceTo(S.pinchGPoints[1].currentPos), S.lastPinchCenter = S.currentPinchCenter = _(S.pinchGPoints[0].currentPos, S.pinchGPoints[1].currentPos))) : (u.shouldReleaseCapture = !1, c.releaseHandler && B && (c.releaseHandler(
        {
          eventSource: c,
          pointerType: I.type,
          position: x(B, c.element),
          buttons: C.buttons,
          insideElementPressed: I.insideElementPressed,
          insideElementReleased: I.insideElement,
          isTouchEvent: I.type === "touch",
          originalEvent: u.originalEvent,
          userData: c.userData
        }
      ), u.preventDefault = !0)));
    }
    function k(c, u, p) {
      var g = t[c.hash], S = c.getActivePointersListByType(p.type), C, B, q;
      if (typeof u.originalEvent.buttons < "u" && (S.buttons = u.originalEvent.buttons), C = S.getById(p.id), C)
        C.lastPos = C.currentPos, C.lastTime = C.currentTime, C.currentPos = p.currentPos, C.currentTime = p.currentTime;
      else
        return;
      u.shouldCapture = !1, u.shouldReleaseCapture = !1, c.stopHandler && p.type === "mouse" && (clearTimeout(c.stopTimeOut), c.stopTimeOut = setTimeout(function() {
        re(c, u.originalEvent, p.type);
      }, c.stopDelay)), S.contacts === 0 ? c.moveHandler && c.moveHandler(
        {
          eventSource: c,
          pointerType: p.type,
          position: x(p.currentPos, c.element),
          buttons: S.buttons,
          isTouchEvent: p.type === "touch",
          originalEvent: u.originalEvent,
          userData: c.userData
        }
      ) : S.contacts === 1 ? (c.moveHandler && (C = S.asArray()[0], c.moveHandler(
        {
          eventSource: c,
          pointerType: C.type,
          position: x(C.currentPos, c.element),
          buttons: S.buttons,
          isTouchEvent: C.type === "touch",
          originalEvent: u.originalEvent,
          userData: c.userData
        }
      )), c.dragHandler && !u.preventGesture && !u.defaultPrevented && (C = S.asArray()[0], q = C.currentPos.minus(C.lastPos), c.dragHandler(
        {
          eventSource: c,
          pointerType: C.type,
          position: x(C.currentPos, c.element),
          buttons: S.buttons,
          delta: q,
          speed: C.speed,
          direction: C.direction,
          shift: u.originalEvent.shiftKey,
          isTouchEvent: C.type === "touch",
          originalEvent: u.originalEvent,
          userData: c.userData
        }
      ), u.preventDefault = !0, g.sentDragEvent = !0)) : S.contacts === 2 && (c.moveHandler && (B = S.asArray(), c.moveHandler(
        {
          eventSource: c,
          pointerType: B[0].type,
          position: x(_(B[0].currentPos, B[1].currentPos), c.element),
          buttons: S.buttons,
          isTouchEvent: B[0].type === "touch",
          originalEvent: u.originalEvent,
          userData: c.userData
        }
      )), c.pinchHandler && p.type === "touch" && !u.preventGesture && !u.defaultPrevented && (q = g.pinchGPoints[0].currentPos.distanceTo(g.pinchGPoints[1].currentPos), q !== g.currentPinchDist && (g.lastPinchDist = g.currentPinchDist, g.currentPinchDist = q, g.lastPinchCenter = g.currentPinchCenter, g.currentPinchCenter = _(g.pinchGPoints[0].currentPos, g.pinchGPoints[1].currentPos), c.pinchHandler(
        {
          eventSource: c,
          pointerType: "touch",
          gesturePoints: g.pinchGPoints,
          lastCenter: x(g.lastPinchCenter, c.element),
          center: x(g.currentPinchCenter, c.element),
          lastDistance: g.lastPinchDist,
          distance: g.currentPinchDist,
          shift: u.originalEvent.shiftKey,
          originalEvent: u.originalEvent,
          userData: c.userData
        }
      ), u.preventDefault = !0)));
    }
    function Q(c, u, p) {
      var g = c.getActivePointersListByType(p.type), S;
      S = g.getById(p.id), S && E(c, g, S);
    }
    function re(c, u, p) {
      c.stopHandler && c.stopHandler({
        eventSource: c,
        pointerType: p,
        position: w(u, c.element),
        buttons: c.getActivePointersListByType(p).buttons,
        isTouchEvent: p === "touch",
        originalEvent: u,
        userData: c.userData
      });
    }
  }(D), function(e) {
    e.ControlAnchor = {
      NONE: 0,
      TOP_LEFT: 1,
      TOP_RIGHT: 2,
      BOTTOM_RIGHT: 3,
      BOTTOM_LEFT: 4,
      ABSOLUTE: 5
    }, e.Control = function(t, s, o) {
      var h = t.parentNode;
      typeof s == "number" && (e.console.error("Passing an anchor directly into the OpenSeadragon.Control constructor is deprecated; please use an options object instead.  Support for this deprecated variant is scheduled for removal in December 2013"), s = { anchor: s }), s.attachToViewer = typeof s.attachToViewer > "u" ? !0 : s.attachToViewer, this.autoFade = typeof s.autoFade > "u" ? !0 : s.autoFade, this.element = t, this.anchor = s.anchor, this.container = o, this.anchor === e.ControlAnchor.ABSOLUTE ? (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.position = "absolute", this.wrapper.style.top = typeof s.top == "number" ? s.top + "px" : s.top, this.wrapper.style.left = typeof s.left == "number" ? s.left + "px" : s.left, this.wrapper.style.height = typeof s.height == "number" ? s.height + "px" : s.height, this.wrapper.style.width = typeof s.width == "number" ? s.width + "px" : s.width, this.wrapper.style.margin = "0px", this.wrapper.style.padding = "0px", this.element.style.position = "relative", this.element.style.top = "0px", this.element.style.left = "0px", this.element.style.height = "100%", this.element.style.width = "100%") : (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.display = "inline-block", this.anchor === e.ControlAnchor.NONE && (this.wrapper.style.width = this.wrapper.style.height = "100%")), this.wrapper.appendChild(this.element), s.attachToViewer ? this.anchor === e.ControlAnchor.TOP_RIGHT || this.anchor === e.ControlAnchor.BOTTOM_RIGHT ? this.container.insertBefore(
        this.wrapper,
        this.container.firstChild
      ) : this.container.appendChild(this.wrapper) : h.appendChild(this.wrapper);
    }, e.Control.prototype = {
      /**
       * Removes the control from the container.
       * @function
       */
      destroy: function() {
        this.wrapper.removeChild(this.element), this.anchor !== e.ControlAnchor.NONE && this.container.removeChild(this.wrapper);
      },
      /**
       * Determines if the control is currently visible.
       * @function
       * @return {Boolean} true if currently visible, false otherwise.
       */
      isVisible: function() {
        return this.wrapper.style.display !== "none";
      },
      /**
       * Toggles the visibility of the control.
       * @function
       * @param {Boolean} visible - true to make visible, false to hide.
       */
      setVisible: function(t) {
        this.wrapper.style.display = t ? this.anchor === e.ControlAnchor.ABSOLUTE ? "block" : "inline-block" : "none";
      },
      /**
       * Sets the opacity level for the control.
       * @function
       * @param {Number} opactiy - a value between 1 and 0 inclusively.
       */
      setOpacity: function(t) {
        this.element[e.SIGNAL] && e.Browser.vendor === e.BROWSERS.IE ? e.setElementOpacity(this.element, t, !0) : e.setElementOpacity(this.wrapper, t, !0);
      }
    };
  }(D), function(e) {
    e.ControlDock = function(s) {
      var o = ["topleft", "topright", "bottomright", "bottomleft"], h, i;
      for (e.extend(!0, this, {
        id: "controldock-" + e.now() + "-" + Math.floor(Math.random() * 1e6),
        container: e.makeNeutralElement("div"),
        controls: []
      }, s), this.container.onsubmit = function() {
        return !1;
      }, this.element && (this.element = e.getElement(this.element), this.element.appendChild(this.container), this.element.style.position = "relative", this.container.style.width = "100%", this.container.style.height = "100%"), i = 0; i < o.length; i++)
        h = o[i], this.controls[h] = e.makeNeutralElement("div"), this.controls[h].style.position = "absolute", h.match("left") && (this.controls[h].style.left = "0px"), h.match("right") && (this.controls[h].style.right = "0px"), h.match("top") && (this.controls[h].style.top = "0px"), h.match("bottom") && (this.controls[h].style.bottom = "0px");
      this.container.appendChild(this.controls.topleft), this.container.appendChild(this.controls.topright), this.container.appendChild(this.controls.bottomright), this.container.appendChild(this.controls.bottomleft);
    }, e.ControlDock.prototype = {
      /**
       * @function
       */
      addControl: function(s, o) {
        s = e.getElement(s);
        var h = null;
        if (!(t(this, s) >= 0)) {
          switch (o.anchor) {
            case e.ControlAnchor.TOP_RIGHT:
              h = this.controls.topright, s.style.position = "relative", s.style.paddingRight = "0px", s.style.paddingTop = "0px";
              break;
            case e.ControlAnchor.BOTTOM_RIGHT:
              h = this.controls.bottomright, s.style.position = "relative", s.style.paddingRight = "0px", s.style.paddingBottom = "0px";
              break;
            case e.ControlAnchor.BOTTOM_LEFT:
              h = this.controls.bottomleft, s.style.position = "relative", s.style.paddingLeft = "0px", s.style.paddingBottom = "0px";
              break;
            case e.ControlAnchor.TOP_LEFT:
              h = this.controls.topleft, s.style.position = "relative", s.style.paddingLeft = "0px", s.style.paddingTop = "0px";
              break;
            case e.ControlAnchor.ABSOLUTE:
              h = this.container, s.style.margin = "0px", s.style.padding = "0px";
              break;
            default:
            case e.ControlAnchor.NONE:
              h = this.container, s.style.margin = "0px", s.style.padding = "0px";
              break;
          }
          this.controls.push(
            new e.Control(s, o, h)
          ), s.style.display = "inline-block";
        }
      },
      /**
       * @function
       * @return {OpenSeadragon.ControlDock} Chainable.
       */
      removeControl: function(s) {
        s = e.getElement(s);
        var o = t(this, s);
        return o >= 0 && (this.controls[o].destroy(), this.controls.splice(o, 1)), this;
      },
      /**
       * @function
       * @return {OpenSeadragon.ControlDock} Chainable.
       */
      clearControls: function() {
        for (; this.controls.length > 0; )
          this.controls.pop().destroy();
        return this;
      },
      /**
       * @function
       * @return {Boolean}
       */
      areControlsEnabled: function() {
        var s;
        for (s = this.controls.length - 1; s >= 0; s--)
          if (this.controls[s].isVisible())
            return !0;
        return !1;
      },
      /**
       * @function
       * @return {OpenSeadragon.ControlDock} Chainable.
       */
      setControlsEnabled: function(s) {
        var o;
        for (o = this.controls.length - 1; o >= 0; o--)
          this.controls[o].setVisible(s);
        return this;
      }
    };
    function t(s, o) {
      var h = s.controls, i;
      for (i = h.length - 1; i >= 0; i--)
        if (h[i].element === o)
          return i;
      return -1;
    }
  }(D), function(e) {
    e.Placement = e.freezeObject({
      CENTER: 0,
      TOP_LEFT: 1,
      TOP: 2,
      TOP_RIGHT: 3,
      RIGHT: 4,
      BOTTOM_RIGHT: 5,
      BOTTOM: 6,
      BOTTOM_LEFT: 7,
      LEFT: 8,
      properties: {
        0: {
          isLeft: !1,
          isHorizontallyCentered: !0,
          isRight: !1,
          isTop: !1,
          isVerticallyCentered: !0,
          isBottom: !1
        },
        1: {
          isLeft: !0,
          isHorizontallyCentered: !1,
          isRight: !1,
          isTop: !0,
          isVerticallyCentered: !1,
          isBottom: !1
        },
        2: {
          isLeft: !1,
          isHorizontallyCentered: !0,
          isRight: !1,
          isTop: !0,
          isVerticallyCentered: !1,
          isBottom: !1
        },
        3: {
          isLeft: !1,
          isHorizontallyCentered: !1,
          isRight: !0,
          isTop: !0,
          isVerticallyCentered: !1,
          isBottom: !1
        },
        4: {
          isLeft: !1,
          isHorizontallyCentered: !1,
          isRight: !0,
          isTop: !1,
          isVerticallyCentered: !0,
          isBottom: !1
        },
        5: {
          isLeft: !1,
          isHorizontallyCentered: !1,
          isRight: !0,
          isTop: !1,
          isVerticallyCentered: !1,
          isBottom: !0
        },
        6: {
          isLeft: !1,
          isHorizontallyCentered: !0,
          isRight: !1,
          isTop: !1,
          isVerticallyCentered: !1,
          isBottom: !0
        },
        7: {
          isLeft: !0,
          isHorizontallyCentered: !1,
          isRight: !1,
          isTop: !1,
          isVerticallyCentered: !1,
          isBottom: !0
        },
        8: {
          isLeft: !0,
          isHorizontallyCentered: !1,
          isRight: !1,
          isTop: !1,
          isVerticallyCentered: !0,
          isBottom: !1
        }
      }
    });
  }(D), function(e) {
    var t = {}, s = 1;
    e.Viewer = function(a) {
      var m = arguments, E = this, R;
      if (e.isPlainObject(a) || (a = {
        id: m[0],
        xmlPath: m.length > 1 ? m[1] : void 0,
        prefixUrl: m.length > 2 ? m[2] : void 0,
        controls: m.length > 3 ? m[3] : void 0,
        overlays: m.length > 4 ? m[4] : void 0
      }), a.config && (e.extend(!0, a, a.config), delete a.config), e.extend(!0, this, {
        //internal state and dom identifiers
        id: a.id,
        hash: a.hash || s++,
        /**
         * Index for page to be shown first next time open() is called (only used in sequenceMode).
         * @member {Number} initialPage
         * @memberof OpenSeadragon.Viewer#
         */
        initialPage: 0,
        //dom nodes
        /**
         * The parent element of this Viewer instance, passed in when the Viewer was created.
         * @member {Element} element
         * @memberof OpenSeadragon.Viewer#
         */
        element: null,
        /**
         * A &lt;div&gt; element (provided by {@link OpenSeadragon.ControlDock}), the base element of this Viewer instance.<br><br>
         * Child element of {@link OpenSeadragon.Viewer#element}.
         * @member {Element} container
         * @memberof OpenSeadragon.Viewer#
         */
        container: null,
        /**
         * A &lt;div&gt; element, the element where user-input events are handled for panning and zooming.<br><br>
         * Child element of {@link OpenSeadragon.Viewer#container},
         * positioned on top of {@link OpenSeadragon.Viewer#keyboardCommandArea}.<br><br>
         * The parent of {@link OpenSeadragon.Drawer#canvas} instances.
         * @member {Element} canvas
         * @memberof OpenSeadragon.Viewer#
         */
        canvas: null,
        // Overlays list. An overlay allows to add html on top of the viewer.
        overlays: [],
        // Container inside the canvas where overlays are drawn.
        overlaysContainer: null,
        //private state properties
        previousBody: [],
        //This was originally initialized in the constructor and so could never
        //have anything in it.  now it can because we allow it to be specified
        //in the options and is only empty by default if not specified. Also
        //this array was returned from get_controls which I find confusing
        //since this object has a controls property which is treated in other
        //functions like clearControls.  I'm removing the accessors.
        customControls: [],
        //These are originally not part options but declared as members
        //in initialize.  It's still considered idiomatic to put them here
        //source is here for backwards compatibility. It is not an official
        //part of the API and should not be relied upon.
        source: null,
        /**
         * Handles rendering of tiles in the viewer. Created for each TileSource opened.
         * @member {OpenSeadragon.Drawer} drawer
         * @memberof OpenSeadragon.Viewer#
         */
        drawer: null,
        /**
         * Keeps track of all of the tiled images in the scene.
         * @member {OpenSeadragon.World} world
         * @memberof OpenSeadragon.Viewer#
         */
        world: null,
        /**
         * Handles coordinate-related functionality - zoom, pan, rotation, etc. Created for each TileSource opened.
         * @member {OpenSeadragon.Viewport} viewport
         * @memberof OpenSeadragon.Viewer#
         */
        viewport: null,
        /**
         * @member {OpenSeadragon.Navigator} navigator
         * @memberof OpenSeadragon.Viewer#
         */
        navigator: null,
        //A collection viewport is a separate viewport used to provide
        //simultaneous rendering of sets of tiles
        collectionViewport: null,
        collectionDrawer: null,
        //UI image resources
        //TODO: rename navImages to uiImages
        navImages: null,
        //interface button controls
        buttons: null,
        //TODO: this is defunct so safely remove it
        profiler: null
      }, e.DEFAULT_SETTINGS, a), typeof this.hash > "u")
        throw new Error("A hash must be defined, either by specifying options.id or options.hash.");
      for (typeof t[this.hash] < "u" && e.console.warn("Hash " + this.hash + " has already been used."), t[this.hash] = {
        fsBoundsDelta: new e.Point(1, 1),
        prevContainerSize: null,
        animating: !1,
        forceRedraw: !1,
        mouseInside: !1,
        group: null,
        // whether we should be continuously zooming
        zooming: !1,
        // how much we should be continuously zooming by
        zoomFactor: null,
        lastZoomTime: null,
        fullPage: !1,
        onfullscreenchange: null
      }, this._sequenceIndex = 0, this._firstOpen = !0, this._updateRequestId = null, this._loadQueue = [], this.currentOverlays = [], this._updatePixelDensityRatioBind = null, this._lastScrollTime = e.now(), e.EventSource.call(this), this.addHandler("open-failed", function(P) {
        var H = e.getString("Errors.OpenFailed", P.eventSource, P.message);
        E._showMessage(H);
      }), e.ControlDock.call(this, a), this.xmlPath && (this.tileSources = [this.xmlPath]), this.element = this.element || document.getElementById(this.id), this.canvas = e.makeNeutralElement("div"), this.canvas.className = "openseadragon-canvas", function(P) {
        P.width = "100%", P.height = "100%", P.overflow = "hidden", P.position = "absolute", P.top = "0px", P.left = "0px";
      }(this.canvas.style), e.setElementTouchActionNone(this.canvas), a.tabIndex !== "" && (this.canvas.tabIndex = a.tabIndex === void 0 ? 0 : a.tabIndex), this.container.className = "openseadragon-container", function(P) {
        P.width = "100%", P.height = "100%", P.position = "relative", P.overflow = "hidden", P.left = "0px", P.top = "0px", P.textAlign = "left";
      }(this.container.style), e.setElementTouchActionNone(this.container), this.container.insertBefore(this.canvas, this.container.firstChild), this.element.appendChild(this.container), this.bodyWidth = document.body.style.width, this.bodyHeight = document.body.style.height, this.bodyOverflow = document.body.style.overflow, this.docOverflow = document.documentElement.style.overflow, this.innerTracker = new e.MouseTracker({
        userData: "Viewer.innerTracker",
        element: this.canvas,
        startDisabled: !this.mouseNavEnabled,
        clickTimeThreshold: this.clickTimeThreshold,
        clickDistThreshold: this.clickDistThreshold,
        dblClickTimeThreshold: this.dblClickTimeThreshold,
        dblClickDistThreshold: this.dblClickDistThreshold,
        contextMenuHandler: e.delegate(this, w),
        keyDownHandler: e.delegate(this, x),
        keyHandler: e.delegate(this, _),
        clickHandler: e.delegate(this, b),
        dblClickHandler: e.delegate(this, N),
        dragHandler: e.delegate(this, G),
        dragEndHandler: e.delegate(this, A),
        enterHandler: e.delegate(this, W),
        leaveHandler: e.delegate(this, M),
        pressHandler: e.delegate(this, j),
        releaseHandler: e.delegate(this, $),
        nonPrimaryPressHandler: e.delegate(this, Y),
        nonPrimaryReleaseHandler: e.delegate(this, K),
        scrollHandler: e.delegate(this, ie),
        pinchHandler: e.delegate(this, ae)
      }), this.outerTracker = new e.MouseTracker({
        userData: "Viewer.outerTracker",
        element: this.container,
        startDisabled: !this.mouseNavEnabled,
        clickTimeThreshold: this.clickTimeThreshold,
        clickDistThreshold: this.clickDistThreshold,
        dblClickTimeThreshold: this.dblClickTimeThreshold,
        dblClickDistThreshold: this.dblClickDistThreshold,
        enterHandler: e.delegate(this, le),
        leaveHandler: e.delegate(this, te)
      }), this.toolbar && (this.toolbar = new e.ControlDock({ element: this.toolbar })), this.bindStandardControls(), t[this.hash].prevContainerSize = o(this.container), this.world = new e.World({
        viewer: this
      }), this.world.addHandler("add-item", function(P) {
        E.source = E.world.getItemAt(0).source, t[E.hash].forceRedraw = !0, E._updateRequestId || (E._updateRequestId = r(E, ne));
      }), this.world.addHandler("remove-item", function(P) {
        E.world.getItemCount() ? E.source = E.world.getItemAt(0).source : E.source = null, t[E.hash].forceRedraw = !0;
      }), this.world.addHandler("metrics-change", function(P) {
        E.viewport && E.viewport._setContentBounds(E.world.getHomeBounds(), E.world.getContentFactor());
      }), this.world.addHandler("item-index-change", function(P) {
        E.source = E.world.getItemAt(0).source;
      }), this.viewport = new e.Viewport({
        containerSize: t[this.hash].prevContainerSize,
        springStiffness: this.springStiffness,
        animationTime: this.animationTime,
        minZoomImageRatio: this.minZoomImageRatio,
        maxZoomPixelRatio: this.maxZoomPixelRatio,
        visibilityRatio: this.visibilityRatio,
        wrapHorizontal: this.wrapHorizontal,
        wrapVertical: this.wrapVertical,
        defaultZoomLevel: this.defaultZoomLevel,
        minZoomLevel: this.minZoomLevel,
        maxZoomLevel: this.maxZoomLevel,
        viewer: this,
        degrees: this.degrees,
        flipped: this.flipped,
        navigatorRotate: this.navigatorRotate,
        homeFillsViewer: this.homeFillsViewer,
        margins: this.viewportMargins,
        silenceMultiImageWarnings: this.silenceMultiImageWarnings
      }), this.viewport._setContentBounds(this.world.getHomeBounds(), this.world.getContentFactor()), this.imageLoader = new e.ImageLoader({
        jobLimit: this.imageLoaderLimit,
        timeout: a.timeout
      }), this.tileCache = new e.TileCache({
        maxImageCacheCount: this.maxImageCacheCount
      }), this.drawer = new e.Drawer({
        viewer: this,
        viewport: this.viewport,
        element: this.canvas,
        debugGridColor: this.debugGridColor
      }), this.overlaysContainer = e.makeNeutralElement("div"), this.canvas.appendChild(this.overlaysContainer), this.drawer.canRotate() || (this.rotateLeft && (R = this.buttonGroup.buttons.indexOf(this.rotateLeft), this.buttonGroup.buttons.splice(R, 1), this.buttonGroup.element.removeChild(this.rotateLeft.element)), this.rotateRight && (R = this.buttonGroup.buttons.indexOf(this.rotateRight), this.buttonGroup.buttons.splice(R, 1), this.buttonGroup.element.removeChild(this.rotateRight.element))), this._addUpdatePixelDensityRatioEvent(), this.showNavigator && (this.navigator = new e.Navigator({
        id: this.navigatorId,
        position: this.navigatorPosition,
        sizeRatio: this.navigatorSizeRatio,
        maintainSizeRatio: this.navigatorMaintainSizeRatio,
        top: this.navigatorTop,
        left: this.navigatorLeft,
        width: this.navigatorWidth,
        height: this.navigatorHeight,
        autoResize: this.navigatorAutoResize,
        autoFade: this.navigatorAutoFade,
        prefixUrl: this.prefixUrl,
        viewer: this,
        navigatorRotate: this.navigatorRotate,
        background: this.navigatorBackground,
        opacity: this.navigatorOpacity,
        borderColor: this.navigatorBorderColor,
        displayRegionColor: this.navigatorDisplayRegionColor,
        crossOriginPolicy: this.crossOriginPolicy
      })), this.sequenceMode && this.bindSequenceControls(), this.tileSources && this.open(this.tileSources), R = 0; R < this.customControls.length; R++)
        this.addControl(
          this.customControls[R].id,
          { anchor: this.customControls[R].anchor }
        );
      e.requestAnimationFrame(function() {
        d(E);
      }), this.imageSmoothingEnabled !== void 0 && !this.imageSmoothingEnabled && this.drawer.setImageSmoothingEnabled(this.imageSmoothingEnabled), e._viewers.set(this.element, this);
    }, e.extend(
      e.Viewer.prototype,
      e.EventSource.prototype,
      e.ControlDock.prototype,
      /** @lends OpenSeadragon.Viewer.prototype */
      {
        /**
         * @function
         * @return {Boolean}
         */
        isOpen: function() {
          return !!this.world.getItemCount();
        },
        // deprecated
        openDzi: function(a) {
          return e.console.error("[Viewer.openDzi] this function is deprecated; use Viewer.open() instead."), this.open(a);
        },
        // deprecated
        openTileSource: function(a) {
          return e.console.error("[Viewer.openTileSource] this function is deprecated; use Viewer.open() instead."), this.open(a);
        },
        //deprecated
        get buttons() {
          return e.console.warn("Viewer.buttons is deprecated; Please use Viewer.buttonGroup"), this.buttonGroup;
        },
        /**
         * Open tiled images into the viewer, closing any others.
         * To get the TiledImage instance created by open, add an event listener for
         * {@link OpenSeadragon.Viewer.html#.event:open}, which when fired can be used to get access
         * to the instance, i.e., viewer.world.getItemAt(0).
         * @function
         * @param {Array|String|Object|Function} tileSources - This can be a TiledImage
         * specifier, a TileSource specifier, or an array of either. A TiledImage specifier
         * is the same as the options parameter for {@link OpenSeadragon.Viewer#addTiledImage},
         * except for the index property; images are added in sequence.
         * A TileSource specifier is anything you could pass as the tileSource property
         * of the options parameter for {@link OpenSeadragon.Viewer#addTiledImage}.
         * @param {Number} initialPage - If sequenceMode is true, display this page initially
         * for the given tileSources. If specified, will overwrite the Viewer's existing initialPage property.
         * @return {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:open
         * @fires OpenSeadragon.Viewer.event:open-failed
         */
        open: function(a, m) {
          var E = this;
          if (this.close(), !a)
            return this;
          if (this.sequenceMode && e.isArray(a))
            return this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), typeof m < "u" && !isNaN(m) && (this.initialPage = m), this.tileSources = a, this._sequenceIndex = Math.max(0, Math.min(this.tileSources.length - 1, this.initialPage)), this.tileSources.length && (this.open(this.tileSources[this._sequenceIndex]), this.showReferenceStrip && this.addReferenceStrip()), this._updateSequenceButtons(this._sequenceIndex), this;
          if (e.isArray(a) || (a = [a]), !a.length)
            return this;
          this._opening = !0;
          for (var R = a.length, P = 0, H = 0, O, V = function() {
            if (P + H === R)
              if (P) {
                (E._firstOpen || !E.preserveViewport) && (E.viewport.goHome(!0), E.viewport.update()), E._firstOpen = !1;
                var L = a[0];
                if (L.tileSource && (L = L.tileSource), E.overlays && !E.preserveOverlays)
                  for (var X = 0; X < E.overlays.length; X++)
                    E.currentOverlays[X] = i(E, E.overlays[X]);
                E._drawOverlays(), E._opening = !1, E.raiseEvent("open", { source: L });
              } else
                E._opening = !1, E.raiseEvent("open-failed", O);
          }, Z = function(L) {
            (!e.isPlainObject(L) || !L.tileSource) && (L = {
              tileSource: L
            }), L.index !== void 0 && (e.console.error("[Viewer.open] setting indexes here is not supported; use addTiledImage instead"), delete L.index), L.collectionImmediately === void 0 && (L.collectionImmediately = !0);
            var X = L.success;
            L.success = function(Q) {
              if (P++, L.tileSource.overlays)
                for (var re = 0; re < L.tileSource.overlays.length; re++)
                  E.addOverlay(L.tileSource.overlays[re]);
              X && X(Q), V();
            };
            var k = L.error;
            L.error = function(Q) {
              H++, O || (O = Q), k && k(Q), V();
            }, E.addTiledImage(L);
          }, U = 0; U < a.length; U++)
            Z(a[U]);
          return this;
        },
        /**
         * @function
         * @return {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:close
         */
        close: function() {
          return t[this.hash] ? (this._opening = !1, this.navigator && this.navigator.close(), this.preserveOverlays || (this.clearOverlays(), this.overlaysContainer.innerHTML = ""), t[this.hash].animating = !1, this.world.removeAll(), this.imageLoader.clear(), this.raiseEvent("close"), this) : this;
        },
        /**
         * Function to destroy the viewer and clean up everything created by OpenSeadragon.
         *
         * Example:
         * var viewer = OpenSeadragon({
         *   [...]
         * });
         *
         * //when you are done with the viewer:
         * viewer.destroy();
         * viewer = null; //important
         *
         * @function
         */
        destroy: function() {
          if (t[this.hash]) {
            if (this._removeUpdatePixelDensityRatioEvent(), this.close(), this.clearOverlays(), this.overlaysContainer.innerHTML = "", this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), this._updateRequestId !== null && (e.cancelAnimationFrame(this._updateRequestId), this._updateRequestId = null), this.drawer && this.drawer.destroy(), this.navigator && (this.navigator.destroy(), t[this.navigator.hash] = null, delete t[this.navigator.hash], this.navigator = null), this.removeAllHandlers(), this.buttonGroup)
              this.buttonGroup.destroy();
            else if (this.customButtons)
              for (; this.customButtons.length; )
                this.customButtons.pop().destroy();
            if (this.paging && this.paging.destroy(), this.element)
              for (; this.element.firstChild; )
                this.element.removeChild(this.element.firstChild);
            this.container.onsubmit = null, this.clearControls(), this.innerTracker && this.innerTracker.destroy(), this.outerTracker && this.outerTracker.destroy(), t[this.hash] = null, delete t[this.hash], this.canvas = null, this.container = null, e._viewers.delete(this.element), this.element = null;
          }
        },
        /**
         * @function
         * @return {Boolean}
         */
        isMouseNavEnabled: function() {
          return this.innerTracker.isTracking();
        },
        /**
         * @function
         * @param {Boolean} enabled - true to enable, false to disable
         * @return {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:mouse-enabled
         */
        setMouseNavEnabled: function(a) {
          return this.innerTracker.setTracking(a), this.outerTracker.setTracking(a), this.raiseEvent("mouse-enabled", { enabled: a }), this;
        },
        /**
         * @function
         * @return {Boolean}
         */
        areControlsEnabled: function() {
          var a = this.controls.length, m;
          for (m = 0; m < this.controls.length; m++)
            a = a && this.controls[m].isVisible();
          return a;
        },
        /**
         * Shows or hides the controls (e.g. the default navigation buttons).
         *
         * @function
         * @param {Boolean} true to show, false to hide.
         * @return {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:controls-enabled
         */
        setControlsEnabled: function(a) {
          return a ? y(this) : d(this), this.raiseEvent("controls-enabled", { enabled: a }), this;
        },
        /**
         * Turns debugging mode on or off for this viewer.
         *
         * @function
         * @param {Boolean} true to turn debug on, false to turn debug off.
         */
        setDebugMode: function(a) {
          for (var m = 0; m < this.world.getItemCount(); m++)
            this.world.getItemAt(m).debugMode = a;
          this.debugMode = a, this.forceRedraw();
        },
        /**
         * @function
         * @return {Boolean}
         */
        isFullPage: function() {
          return t[this.hash].fullPage;
        },
        /**
         * Toggle full page mode.
         * @function
         * @param {Boolean} fullPage
         *      If true, enter full page mode.  If false, exit full page mode.
         * @return {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:pre-full-page
         * @fires OpenSeadragon.Viewer.event:full-page
         */
        setFullPage: function(a) {
          var m = document.body, E = m.style, R = document.documentElement.style, P = this, H, O;
          if (a === this.isFullPage())
            return this;
          var V = {
            fullPage: a,
            preventDefaultAction: !1
          };
          if (this.raiseEvent("pre-full-page", V), V.preventDefaultAction)
            return this;
          if (a) {
            for (this.elementSize = e.getElementSize(this.element), this.pageScroll = e.getPageScroll(), this.elementMargin = this.element.style.margin, this.element.style.margin = "0", this.elementPadding = this.element.style.padding, this.element.style.padding = "0", this.bodyMargin = E.margin, this.docMargin = R.margin, E.margin = "0", R.margin = "0", this.bodyPadding = E.padding, this.docPadding = R.padding, E.padding = "0", R.padding = "0", this.bodyWidth = E.width, this.docWidth = R.width, E.width = "100%", R.width = "100%", this.bodyHeight = E.height, this.docHeight = R.height, E.height = "100%", R.height = "100%", this.bodyDisplay = E.display, E.display = "block", this.previousBody = [], t[this.hash].prevElementParent = this.element.parentNode, t[this.hash].prevNextSibling = this.element.nextSibling, t[this.hash].prevElementWidth = this.element.style.width, t[this.hash].prevElementHeight = this.element.style.height, H = m.childNodes.length, O = 0; O < H; O++)
              this.previousBody.push(m.childNodes[0]), m.removeChild(m.childNodes[0]);
            this.toolbar && this.toolbar.element && (this.toolbar.parentNode = this.toolbar.element.parentNode, this.toolbar.nextSibling = this.toolbar.element.nextSibling, m.appendChild(this.toolbar.element), e.addClass(this.toolbar.element, "fullpage")), e.addClass(this.element, "fullpage"), m.appendChild(this.element), this.element.style.height = "100vh", this.element.style.width = "100vw", this.toolbar && this.toolbar.element && (this.element.style.height = e.getElementSize(this.element).y - e.getElementSize(this.toolbar.element).y + "px"), t[this.hash].fullPage = !0, e.delegate(this, le)({});
          } else {
            for (this.element.style.margin = this.elementMargin, this.element.style.padding = this.elementPadding, E.margin = this.bodyMargin, R.margin = this.docMargin, E.padding = this.bodyPadding, R.padding = this.docPadding, E.width = this.bodyWidth, R.width = this.docWidth, E.height = this.bodyHeight, R.height = this.docHeight, E.display = this.bodyDisplay, m.removeChild(this.element), H = this.previousBody.length, O = 0; O < H; O++)
              m.appendChild(this.previousBody.shift());
            e.removeClass(this.element, "fullpage"), t[this.hash].prevElementParent.insertBefore(
              this.element,
              t[this.hash].prevNextSibling
            ), this.toolbar && this.toolbar.element && (m.removeChild(this.toolbar.element), e.removeClass(this.toolbar.element, "fullpage"), this.toolbar.parentNode.insertBefore(
              this.toolbar.element,
              this.toolbar.nextSibling
            ), delete this.toolbar.parentNode, delete this.toolbar.nextSibling), this.element.style.width = t[this.hash].prevElementWidth, this.element.style.height = t[this.hash].prevElementHeight;
            var Z = 0, U = function() {
              e.setPageScroll(P.pageScroll);
              var L = e.getPageScroll();
              Z++, Z < 10 && (L.x !== P.pageScroll.x || L.y !== P.pageScroll.y) && e.requestAnimationFrame(U);
            };
            e.requestAnimationFrame(U), t[this.hash].fullPage = !1, e.delegate(this, te)({});
          }
          return this.navigator && this.viewport && this.navigator.update(this.viewport), this.raiseEvent("full-page", { fullPage: a }), this;
        },
        /**
         * Toggle full screen mode if supported. Toggle full page mode otherwise.
         * @function
         * @param {Boolean} fullScreen
         *      If true, enter full screen mode.  If false, exit full screen mode.
         * @return {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:pre-full-screen
         * @fires OpenSeadragon.Viewer.event:full-screen
         */
        setFullScreen: function(a) {
          var m = this;
          if (!e.supportsFullScreen)
            return this.setFullPage(a);
          if (e.isFullScreen() === a)
            return this;
          var E = {
            fullScreen: a,
            preventDefaultAction: !1
          };
          if (this.raiseEvent("pre-full-screen", E), E.preventDefaultAction)
            return this;
          if (a) {
            if (this.setFullPage(!0), !this.isFullPage())
              return this;
            this.fullPageStyleWidth = this.element.style.width, this.fullPageStyleHeight = this.element.style.height, this.element.style.width = "100%", this.element.style.height = "100%";
            var R = function() {
              var P = e.isFullScreen();
              P || (e.removeEvent(document, e.fullScreenEventName, R), e.removeEvent(document, e.fullScreenErrorEventName, R), m.setFullPage(!1), m.isFullPage() && (m.element.style.width = m.fullPageStyleWidth, m.element.style.height = m.fullPageStyleHeight)), m.navigator && m.viewport && setTimeout(function() {
                m.navigator.update(m.viewport);
              }), m.raiseEvent("full-screen", { fullScreen: P });
            };
            e.addEvent(document, e.fullScreenEventName, R), e.addEvent(document, e.fullScreenErrorEventName, R), e.requestFullScreen(document.body);
          } else
            e.exitFullScreen();
          return this;
        },
        /**
         * @function
         * @return {Boolean}
         */
        isVisible: function() {
          return this.container.style.visibility !== "hidden";
        },
        //
        /**
         * @function
         * @returns {Boolean} returns true if the viewer is in fullscreen
         */
        isFullScreen: function() {
          return e.isFullScreen() && this.isFullPage();
        },
        /**
         * @function
         * @param {Boolean} visible
         * @return {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:visible
         */
        setVisible: function(a) {
          return this.container.style.visibility = a ? "" : "hidden", this.raiseEvent("visible", { visible: a }), this;
        },
        /**
         * Add a tiled image to the viewer.
         * options.tileSource can be anything that {@link OpenSeadragon.Viewer#open}
         *  supports except arrays of images.
         * Note that you can specify options.width or options.height, but not both.
         * The other dimension will be calculated according to the item's aspect ratio.
         * If collectionMode is on (see {@link OpenSeadragon.Options}), the new image is
         * automatically arranged with the others.
         * @function
         * @param {Object} options
         * @param {String|Object|Function} options.tileSource - The TileSource specifier.
         * A String implies a url used to determine the tileSource implementation
         *      based on the file extension of url. JSONP is implied by *.js,
         *      otherwise the url is retrieved as text and the resulting text is
         *      introspected to determine if its json, xml, or text and parsed.
         * An Object implies an inline configuration which has a single
         *      property sufficient for being able to determine tileSource
         *      implementation. If the object has a property which is a function
         *      named 'getTileUrl', it is treated as a custom TileSource.
         * @param {Number} [options.index] The index of the item. Added on top of
         * all other items if not specified.
         * @param {Boolean} [options.replace=false] If true, the item at options.index will be
         * removed and the new item is added in its place. options.tileSource will be
         * interpreted and fetched if necessary before the old item is removed to avoid leaving
         * a gap in the world.
         * @param {Number} [options.x=0] The X position for the image in viewport coordinates.
         * @param {Number} [options.y=0] The Y position for the image in viewport coordinates.
         * @param {Number} [options.width=1] The width for the image in viewport coordinates.
         * @param {Number} [options.height] The height for the image in viewport coordinates.
         * @param {OpenSeadragon.Rect} [options.fitBounds] The bounds in viewport coordinates
         * to fit the image into. If specified, x, y, width and height get ignored.
         * @param {OpenSeadragon.Placement} [options.fitBoundsPlacement=OpenSeadragon.Placement.CENTER]
         * How to anchor the image in the bounds if options.fitBounds is set.
         * @param {OpenSeadragon.Rect} [options.clip] - An area, in image pixels, to clip to
         * (portions of the image outside of this area will not be visible). Only works on
         * browsers that support the HTML5 canvas.
         * @param {Number} [options.opacity=1] Proportional opacity of the tiled images (1=opaque, 0=hidden)
         * @param {Boolean} [options.preload=false]  Default switch for loading hidden images (true loads, false blocks)
         * @param {Number} [options.degrees=0] Initial rotation of the tiled image around
         * its top left corner in degrees.
         * @param {Boolean} [options.flipped=false] Whether to horizontally flip the image.
         * @param {String} [options.compositeOperation] How the image is composited onto other images.
         * @param {String} [options.crossOriginPolicy] The crossOriginPolicy for this specific image,
         * overriding viewer.crossOriginPolicy.
         * @param {Boolean} [options.ajaxWithCredentials] Whether to set withCredentials on tile AJAX
         * @param {Boolean} [options.loadTilesWithAjax]
         *      Whether to load tile data using AJAX requests.
         *      Defaults to the setting in {@link OpenSeadragon.Options}.
         * @param {Object} [options.ajaxHeaders]
         *      A set of headers to include when making tile AJAX requests.
         *      Note that these headers will be merged over any headers specified in {@link OpenSeadragon.Options}.
         *      Specifying a falsy value for a header will clear its existing value set at the Viewer level (if any).
         * requests.
         * @param {Function} [options.success] A function that gets called when the image is
         * successfully added. It's passed the event object which contains a single property:
         * "item", which is the resulting instance of TiledImage.
         * @param {Function} [options.error] A function that gets called if the image is
         * unable to be added. It's passed the error event object, which contains "message"
         * and "source" properties.
         * @param {Boolean} [options.collectionImmediately=false] If collectionMode is on,
         * specifies whether to snap to the new arrangement immediately or to animate to it.
         * @param {String|CanvasGradient|CanvasPattern|Function} [options.placeholderFillStyle] - See {@link OpenSeadragon.Options}.
         * @fires OpenSeadragon.World.event:add-item
         * @fires OpenSeadragon.Viewer.event:add-item-failed
         */
        addTiledImage: function(a) {
          e.console.assert(a, "[Viewer.addTiledImage] options is required"), e.console.assert(a.tileSource, "[Viewer.addTiledImage] options.tileSource is required"), e.console.assert(
            !a.replace || a.index > -1 && a.index < this.world.getItemCount(),
            "[Viewer.addTiledImage] if options.replace is used, options.index must be a valid index in Viewer.world"
          );
          var m = this;
          a.replace && (a.replaceItem = m.world.getItemAt(a.index)), this._hideMessage(), a.placeholderFillStyle === void 0 && (a.placeholderFillStyle = this.placeholderFillStyle), a.opacity === void 0 && (a.opacity = this.opacity), a.preload === void 0 && (a.preload = this.preload), a.compositeOperation === void 0 && (a.compositeOperation = this.compositeOperation), a.crossOriginPolicy === void 0 && (a.crossOriginPolicy = a.tileSource.crossOriginPolicy !== void 0 ? a.tileSource.crossOriginPolicy : this.crossOriginPolicy), a.ajaxWithCredentials === void 0 && (a.ajaxWithCredentials = this.ajaxWithCredentials), a.loadTilesWithAjax === void 0 && (a.loadTilesWithAjax = this.loadTilesWithAjax), a.ajaxHeaders === void 0 || a.ajaxHeaders === null ? a.ajaxHeaders = this.ajaxHeaders : e.isPlainObject(a.ajaxHeaders) && e.isPlainObject(this.ajaxHeaders) && (a.ajaxHeaders = e.extend({}, this.ajaxHeaders, a.ajaxHeaders));
          var E = {
            options: a
          };
          function R(O) {
            for (var V = 0; V < m._loadQueue.length; V++)
              if (m._loadQueue[V] === E) {
                m._loadQueue.splice(V, 1);
                break;
              }
            m._loadQueue.length === 0 && P(E), m.raiseEvent("add-item-failed", O), a.error && a.error(O);
          }
          function P(O) {
            m.collectionMode && (m.world.arrange({
              immediately: O.options.collectionImmediately,
              rows: m.collectionRows,
              columns: m.collectionColumns,
              layout: m.collectionLayout,
              tileSize: m.collectionTileSize,
              tileMargin: m.collectionTileMargin
            }), m.world.setAutoRefigureSizes(!0));
          }
          if (e.isArray(a.tileSource)) {
            setTimeout(function() {
              R({
                message: "[Viewer.addTiledImage] Sequences can not be added; add them one at a time instead.",
                source: a.tileSource,
                options: a
              });
            });
            return;
          }
          this._loadQueue.push(E);
          function H() {
            for (var O, V, Z; m._loadQueue.length && (O = m._loadQueue[0], !!O.tileSource); ) {
              if (m._loadQueue.splice(0, 1), O.options.replace) {
                var U = m.world.getIndexOfItem(O.options.replaceItem);
                U !== -1 && (O.options.index = U), m.world.removeItem(O.options.replaceItem);
              }
              V = new e.TiledImage({
                viewer: m,
                source: O.tileSource,
                viewport: m.viewport,
                drawer: m.drawer,
                tileCache: m.tileCache,
                imageLoader: m.imageLoader,
                x: O.options.x,
                y: O.options.y,
                width: O.options.width,
                height: O.options.height,
                fitBounds: O.options.fitBounds,
                fitBoundsPlacement: O.options.fitBoundsPlacement,
                clip: O.options.clip,
                placeholderFillStyle: O.options.placeholderFillStyle,
                opacity: O.options.opacity,
                preload: O.options.preload,
                degrees: O.options.degrees,
                flipped: O.options.flipped,
                compositeOperation: O.options.compositeOperation,
                springStiffness: m.springStiffness,
                animationTime: m.animationTime,
                minZoomImageRatio: m.minZoomImageRatio,
                wrapHorizontal: m.wrapHorizontal,
                wrapVertical: m.wrapVertical,
                immediateRender: m.immediateRender,
                blendTime: m.blendTime,
                alwaysBlend: m.alwaysBlend,
                minPixelRatio: m.minPixelRatio,
                smoothTileEdgesMinZoom: m.smoothTileEdgesMinZoom,
                iOSDevice: m.iOSDevice,
                crossOriginPolicy: O.options.crossOriginPolicy,
                ajaxWithCredentials: O.options.ajaxWithCredentials,
                loadTilesWithAjax: O.options.loadTilesWithAjax,
                ajaxHeaders: O.options.ajaxHeaders,
                debugMode: m.debugMode,
                subPixelRoundingForTransparency: m.subPixelRoundingForTransparency
              }), m.collectionMode && m.world.setAutoRefigureSizes(!1), m.navigator && (Z = e.extend({}, O.options, {
                replace: !1,
                // navigator already removed the layer, nothing to replace
                originalTiledImage: V,
                tileSource: O.tileSource
              }), m.navigator.addTiledImage(Z)), m.world.addItem(V, {
                index: O.options.index
              }), m._loadQueue.length === 0 && P(O), m.world.getItemCount() === 1 && !m.preserveViewport && m.viewport.goHome(!0), O.options.success && O.options.success({
                item: V
              });
            }
          }
          h(this, a.tileSource, a, function(O) {
            E.tileSource = O, H();
          }, function(O) {
            O.options = a, R(O), H();
          });
        },
        /**
         * Add a simple image to the viewer.
         * The options are the same as the ones in {@link OpenSeadragon.Viewer#addTiledImage}
         * except for options.tileSource which is replaced by options.url.
         * @function
         * @param {Object} options - See {@link OpenSeadragon.Viewer#addTiledImage}
         * for all the options
         * @param {String} options.url - The URL of the image to add.
         * @fires OpenSeadragon.World.event:add-item
         * @fires OpenSeadragon.Viewer.event:add-item-failed
         */
        addSimpleImage: function(a) {
          e.console.assert(a, "[Viewer.addSimpleImage] options is required"), e.console.assert(a.url, "[Viewer.addSimpleImage] options.url is required");
          var m = e.extend({}, a, {
            tileSource: {
              type: "image",
              url: a.url
            }
          });
          delete m.url, this.addTiledImage(m);
        },
        // deprecated
        addLayer: function(a) {
          var m = this;
          e.console.error("[Viewer.addLayer] this function is deprecated; use Viewer.addTiledImage() instead.");
          var E = e.extend({}, a, {
            success: function(R) {
              m.raiseEvent("add-layer", {
                options: a,
                drawer: R.item
              });
            },
            error: function(R) {
              m.raiseEvent("add-layer-failed", R);
            }
          });
          return this.addTiledImage(E), this;
        },
        // deprecated
        getLayerAtLevel: function(a) {
          return e.console.error("[Viewer.getLayerAtLevel] this function is deprecated; use World.getItemAt() instead."), this.world.getItemAt(a);
        },
        // deprecated
        getLevelOfLayer: function(a) {
          return e.console.error("[Viewer.getLevelOfLayer] this function is deprecated; use World.getIndexOfItem() instead."), this.world.getIndexOfItem(a);
        },
        // deprecated
        getLayersCount: function() {
          return e.console.error("[Viewer.getLayersCount] this function is deprecated; use World.getItemCount() instead."), this.world.getItemCount();
        },
        // deprecated
        setLayerLevel: function(a, m) {
          return e.console.error("[Viewer.setLayerLevel] this function is deprecated; use World.setItemIndex() instead."), this.world.setItemIndex(a, m);
        },
        // deprecated
        removeLayer: function(a) {
          return e.console.error("[Viewer.removeLayer] this function is deprecated; use World.removeItem() instead."), this.world.removeItem(a);
        },
        /**
         * Force the viewer to redraw its contents.
         * @returns {OpenSeadragon.Viewer} Chainable.
         */
        forceRedraw: function() {
          return t[this.hash].forceRedraw = !0, this;
        },
        /**
         * @function
         * @return {OpenSeadragon.Viewer} Chainable.
         */
        bindSequenceControls: function() {
          var a = e.delegate(this, v), m = e.delegate(this, T), E = e.delegate(this, this.goToNextPage), R = e.delegate(this, this.goToPreviousPage), P = this.navImages, H = !0;
          return this.showSequenceControl && ((this.previousButton || this.nextButton) && (H = !1), this.previousButton = new e.Button({
            element: this.previousButton ? e.getElement(this.previousButton) : null,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            tooltip: e.getString("Tooltips.PreviousPage"),
            srcRest: z(this.prefixUrl, P.previous.REST),
            srcGroup: z(this.prefixUrl, P.previous.GROUP),
            srcHover: z(this.prefixUrl, P.previous.HOVER),
            srcDown: z(this.prefixUrl, P.previous.DOWN),
            onRelease: R,
            onFocus: a,
            onBlur: m
          }), this.nextButton = new e.Button({
            element: this.nextButton ? e.getElement(this.nextButton) : null,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            tooltip: e.getString("Tooltips.NextPage"),
            srcRest: z(this.prefixUrl, P.next.REST),
            srcGroup: z(this.prefixUrl, P.next.GROUP),
            srcHover: z(this.prefixUrl, P.next.HOVER),
            srcDown: z(this.prefixUrl, P.next.DOWN),
            onRelease: E,
            onFocus: a,
            onBlur: m
          }), this.navPrevNextWrap || this.previousButton.disable(), (!this.tileSources || !this.tileSources.length) && this.nextButton.disable(), H && (this.paging = new e.ButtonGroup({
            buttons: [
              this.previousButton,
              this.nextButton
            ],
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold
          }), this.pagingControl = this.paging.element, this.toolbar ? this.toolbar.addControl(
            this.pagingControl,
            { anchor: e.ControlAnchor.BOTTOM_RIGHT }
          ) : this.addControl(
            this.pagingControl,
            { anchor: this.sequenceControlAnchor || e.ControlAnchor.TOP_LEFT }
          ))), this;
        },
        /**
         * @function
         * @return {OpenSeadragon.Viewer} Chainable.
         */
        bindStandardControls: function() {
          var a = e.delegate(this, xe), m = e.delegate(this, fe), E = e.delegate(this, ge), R = e.delegate(this, Ee), P = e.delegate(this, me), H = e.delegate(this, Se), O = e.delegate(this, ye), V = e.delegate(this, we), Z = e.delegate(this, Pe), U = e.delegate(this, Te), L = e.delegate(this, v), X = e.delegate(this, T), k = this.navImages, Q = [], re = !0;
          return this.showNavigationControl && ((this.zoomInButton || this.zoomOutButton || this.homeButton || this.fullPageButton || this.rotateLeftButton || this.rotateRightButton || this.flipButton) && (re = !1), this.showZoomControl && (Q.push(this.zoomInButton = new e.Button({
            element: this.zoomInButton ? e.getElement(this.zoomInButton) : null,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            tooltip: e.getString("Tooltips.ZoomIn"),
            srcRest: z(this.prefixUrl, k.zoomIn.REST),
            srcGroup: z(this.prefixUrl, k.zoomIn.GROUP),
            srcHover: z(this.prefixUrl, k.zoomIn.HOVER),
            srcDown: z(this.prefixUrl, k.zoomIn.DOWN),
            onPress: a,
            onRelease: m,
            onClick: E,
            onEnter: a,
            onExit: m,
            onFocus: L,
            onBlur: X
          })), Q.push(this.zoomOutButton = new e.Button({
            element: this.zoomOutButton ? e.getElement(this.zoomOutButton) : null,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            tooltip: e.getString("Tooltips.ZoomOut"),
            srcRest: z(this.prefixUrl, k.zoomOut.REST),
            srcGroup: z(this.prefixUrl, k.zoomOut.GROUP),
            srcHover: z(this.prefixUrl, k.zoomOut.HOVER),
            srcDown: z(this.prefixUrl, k.zoomOut.DOWN),
            onPress: R,
            onRelease: m,
            onClick: P,
            onEnter: R,
            onExit: m,
            onFocus: L,
            onBlur: X
          }))), this.showHomeControl && Q.push(this.homeButton = new e.Button({
            element: this.homeButton ? e.getElement(this.homeButton) : null,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            tooltip: e.getString("Tooltips.Home"),
            srcRest: z(this.prefixUrl, k.home.REST),
            srcGroup: z(this.prefixUrl, k.home.GROUP),
            srcHover: z(this.prefixUrl, k.home.HOVER),
            srcDown: z(this.prefixUrl, k.home.DOWN),
            onRelease: H,
            onFocus: L,
            onBlur: X
          })), this.showFullPageControl && Q.push(this.fullPageButton = new e.Button({
            element: this.fullPageButton ? e.getElement(this.fullPageButton) : null,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            tooltip: e.getString("Tooltips.FullPage"),
            srcRest: z(this.prefixUrl, k.fullpage.REST),
            srcGroup: z(this.prefixUrl, k.fullpage.GROUP),
            srcHover: z(this.prefixUrl, k.fullpage.HOVER),
            srcDown: z(this.prefixUrl, k.fullpage.DOWN),
            onRelease: O,
            onFocus: L,
            onBlur: X
          })), this.showRotationControl && (Q.push(this.rotateLeftButton = new e.Button({
            element: this.rotateLeftButton ? e.getElement(this.rotateLeftButton) : null,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            tooltip: e.getString("Tooltips.RotateLeft"),
            srcRest: z(this.prefixUrl, k.rotateleft.REST),
            srcGroup: z(this.prefixUrl, k.rotateleft.GROUP),
            srcHover: z(this.prefixUrl, k.rotateleft.HOVER),
            srcDown: z(this.prefixUrl, k.rotateleft.DOWN),
            onRelease: V,
            onFocus: L,
            onBlur: X
          })), Q.push(this.rotateRightButton = new e.Button({
            element: this.rotateRightButton ? e.getElement(this.rotateRightButton) : null,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            tooltip: e.getString("Tooltips.RotateRight"),
            srcRest: z(this.prefixUrl, k.rotateright.REST),
            srcGroup: z(this.prefixUrl, k.rotateright.GROUP),
            srcHover: z(this.prefixUrl, k.rotateright.HOVER),
            srcDown: z(this.prefixUrl, k.rotateright.DOWN),
            onRelease: Z,
            onFocus: L,
            onBlur: X
          }))), this.showFlipControl && Q.push(this.flipButton = new e.Button({
            element: this.flipButton ? e.getElement(this.flipButton) : null,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            tooltip: e.getString("Tooltips.Flip"),
            srcRest: z(this.prefixUrl, k.flip.REST),
            srcGroup: z(this.prefixUrl, k.flip.GROUP),
            srcHover: z(this.prefixUrl, k.flip.HOVER),
            srcDown: z(this.prefixUrl, k.flip.DOWN),
            onRelease: U,
            onFocus: L,
            onBlur: X
          })), re ? (this.buttonGroup = new e.ButtonGroup({
            buttons: Q,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold
          }), this.navControl = this.buttonGroup.element, this.addHandler("open", e.delegate(this, ve)), this.toolbar ? this.toolbar.addControl(
            this.navControl,
            { anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT }
          ) : this.addControl(
            this.navControl,
            { anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT }
          )) : this.customButtons = Q), this;
        },
        /**
         * Gets the active page of a sequence
         * @function
         * @return {Number}
         */
        currentPage: function() {
          return this._sequenceIndex;
        },
        /**
         * @function
         * @return {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:page
         */
        goToPage: function(a) {
          return this.tileSources && a >= 0 && a < this.tileSources.length && (this._sequenceIndex = a, this._updateSequenceButtons(a), this.open(this.tileSources[a]), this.referenceStrip && this.referenceStrip.setFocus(a), this.raiseEvent("page", { page: a })), this;
        },
        /**
          * Adds an html element as an overlay to the current viewport.  Useful for
          * highlighting words or areas of interest on an image or other zoomable
          * interface. The overlays added via this method are removed when the viewport
          * is closed which include when changing page.
          * @method
          * @param {Element|String|Object} element - A reference to an element or an id for
          *      the element which will be overlaid. Or an Object specifying the configuration for the overlay.
          *      If using an object, see {@link OpenSeadragon.Overlay} for a list of
          *      all available options.
          * @param {OpenSeadragon.Point|OpenSeadragon.Rect} location - The point or
          *      rectangle which will be overlaid. This is a viewport relative location.
          * @param {OpenSeadragon.Placement} [placement=OpenSeadragon.Placement.TOP_LEFT] - The position of the
          *      viewport which the location coordinates will be treated as relative
          *      to.
          * @param {function} [onDraw] - If supplied the callback is called when the overlay
          *      needs to be drawn. It it the responsibility of the callback to do any drawing/positioning.
          *      It is passed position, size and element.
          * @return {OpenSeadragon.Viewer} Chainable.
          * @fires OpenSeadragon.Viewer.event:add-overlay
          */
        addOverlay: function(a, m, E, R) {
          var P;
          if (e.isPlainObject(a) ? P = a : P = {
            element: a,
            location: m,
            placement: E,
            onDraw: R
          }, a = e.getElement(P.element), n(this.currentOverlays, a) >= 0)
            return this;
          var H = i(this, P);
          return this.currentOverlays.push(H), H.drawHTML(this.overlaysContainer, this.viewport), this.raiseEvent("add-overlay", {
            element: a,
            location: P.location,
            placement: P.placement
          }), this;
        },
        /**
         * Updates the overlay represented by the reference to the element or
         * element id moving it to the new location, relative to the new placement.
         * @method
         * @param {Element|String} element - A reference to an element or an id for
         *      the element which is overlaid.
         * @param {OpenSeadragon.Point|OpenSeadragon.Rect} location - The point or
         *      rectangle which will be overlaid. This is a viewport relative location.
         * @param {OpenSeadragon.Placement} [placement=OpenSeadragon.Placement.TOP_LEFT] - The position of the
         *      viewport which the location coordinates will be treated as relative
         *      to.
         * @return {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:update-overlay
         */
        updateOverlay: function(a, m, E) {
          var R;
          return a = e.getElement(a), R = n(this.currentOverlays, a), R >= 0 && (this.currentOverlays[R].update(m, E), t[this.hash].forceRedraw = !0, this.raiseEvent("update-overlay", {
            element: a,
            location: m,
            placement: E
          })), this;
        },
        /**
         * Removes an overlay identified by the reference element or element id
         * and schedules an update.
         * @method
         * @param {Element|String} element - A reference to the element or an
         *      element id which represent the ovelay content to be removed.
         * @return {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:remove-overlay
         */
        removeOverlay: function(a) {
          var m;
          return a = e.getElement(a), m = n(this.currentOverlays, a), m >= 0 && (this.currentOverlays[m].destroy(), this.currentOverlays.splice(m, 1), t[this.hash].forceRedraw = !0, this.raiseEvent("remove-overlay", {
            element: a
          })), this;
        },
        /**
         * Removes all currently configured Overlays from this Viewer and schedules
         * an update.
         * @method
         * @return {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:clear-overlay
         */
        clearOverlays: function() {
          for (; this.currentOverlays.length > 0; )
            this.currentOverlays.pop().destroy();
          return t[this.hash].forceRedraw = !0, this.raiseEvent("clear-overlay", {}), this;
        },
        /**
        * Finds an overlay identified by the reference element or element id
        * and returns it as an object, return null if not found.
        * @method
        * @param {Element|String} element - A reference to the element or an
        *      element id which represents the overlay content.
        * @return {OpenSeadragon.Overlay} the matching overlay or null if none found.
        */
        getOverlayById: function(a) {
          var m;
          return a = e.getElement(a), m = n(this.currentOverlays, a), m >= 0 ? this.currentOverlays[m] : null;
        },
        /**
         * Updates the sequence buttons.
         * @function OpenSeadragon.Viewer.prototype._updateSequenceButtons
         * @private
         * @param {Number} Sequence Value
         */
        _updateSequenceButtons: function(a) {
          this.nextButton && (!this.tileSources || this.tileSources.length - 1 === a ? this.navPrevNextWrap || this.nextButton.disable() : this.nextButton.enable()), this.previousButton && (a > 0 ? this.previousButton.enable() : this.navPrevNextWrap || this.previousButton.disable());
        },
        /**
         * Display a message in the viewport
         * @function OpenSeadragon.Viewer.prototype._showMessage
         * @private
         * @param {String} text message
         */
        _showMessage: function(a) {
          this._hideMessage();
          var m = e.makeNeutralElement("div");
          m.appendChild(document.createTextNode(a)), this.messageDiv = e.makeCenteredNode(m), e.addClass(this.messageDiv, "openseadragon-message"), this.container.appendChild(this.messageDiv);
        },
        /**
         * Hide any currently displayed viewport message
         * @function OpenSeadragon.Viewer.prototype._hideMessage
         * @private
         */
        _hideMessage: function() {
          var a = this.messageDiv;
          a && (a.parentNode.removeChild(a), delete this.messageDiv);
        },
        /**
         * Gets this viewer's gesture settings for the given pointer device type.
         * @method
         * @param {String} type - The pointer device type to get the gesture settings for ("mouse", "touch", "pen", etc.).
         * @return {OpenSeadragon.GestureSettings}
         */
        gestureSettingsByDeviceType: function(a) {
          switch (a) {
            case "mouse":
              return this.gestureSettingsMouse;
            case "touch":
              return this.gestureSettingsTouch;
            case "pen":
              return this.gestureSettingsPen;
            default:
              return this.gestureSettingsUnknown;
          }
        },
        // private
        _drawOverlays: function() {
          var a, m = this.currentOverlays.length;
          for (a = 0; a < m; a++)
            this.currentOverlays[a].drawHTML(this.overlaysContainer, this.viewport);
        },
        /**
         * Cancel the "in flight" images.
         */
        _cancelPendingImages: function() {
          this._loadQueue = [];
        },
        /**
         * Removes the reference strip and disables displaying it.
         * @function
         */
        removeReferenceStrip: function() {
          this.showReferenceStrip = !1, this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null);
        },
        /**
         * Enables and displays the reference strip based on the currently set tileSources.
         * Works only when the Viewer has sequenceMode set to true.
         * @function
         */
        addReferenceStrip: function() {
          if (this.showReferenceStrip = !0, this.sequenceMode) {
            if (this.referenceStrip)
              return;
            this.tileSources.length && this.tileSources.length > 1 && (this.referenceStrip = new e.ReferenceStrip({
              id: this.referenceStripElement,
              position: this.referenceStripPosition,
              sizeRatio: this.referenceStripSizeRatio,
              scroll: this.referenceStripScroll,
              height: this.referenceStripHeight,
              width: this.referenceStripWidth,
              tileSources: this.tileSources,
              prefixUrl: this.prefixUrl,
              useCanvas: this.useCanvas,
              viewer: this
            }), this.referenceStrip.setFocus(this._sequenceIndex));
          } else
            e.console.warn('Attempting to display a reference strip while "sequenceMode" is off.');
        },
        /**
         * Adds _updatePixelDensityRatio to the window resize event.
         * @private
         */
        _addUpdatePixelDensityRatioEvent: function() {
          this._updatePixelDensityRatioBind = this._updatePixelDensityRatio.bind(this), e.addEvent(window, "resize", this._updatePixelDensityRatioBind);
        },
        /**
         * Removes _updatePixelDensityRatio from the window resize event.
         * @private
         */
        _removeUpdatePixelDensityRatioEvent: function() {
          e.removeEvent(window, "resize", this._updatePixelDensityRatioBind);
        },
        /**
         * Update pixel density ratio, clears all tiles and triggers updates for
         * all items if the ratio has changed.
         * @private
         */
        _updatePixelDensityRatio: function() {
          var a = e.pixelDensityRatio, m = e.getCurrentPixelDensityRatio();
          a !== m && (e.pixelDensityRatio = m, this.world.resetItems(), this.forceRedraw());
        },
        /**
         * Sets the image source to the source with index equal to
         * currentIndex - 1. Changes current image in sequence mode.
         * If specified, wraps around (see navPrevNextWrap in
         * {@link OpenSeadragon.Options})
         *
         * @method
         */
        goToPreviousPage: function() {
          var a = this._sequenceIndex - 1;
          this.navPrevNextWrap && a < 0 && (a += this.tileSources.length), this.goToPage(a);
        },
        /**
         * Sets the image source to the source with index equal to
         * currentIndex + 1. Changes current image in sequence mode.
         * If specified, wraps around (see navPrevNextWrap in
         * {@link OpenSeadragon.Options})
         *
         * @method
         */
        goToNextPage: function() {
          var a = this._sequenceIndex + 1;
          this.navPrevNextWrap && a >= this.tileSources.length && (a = 0), this.goToPage(a);
        },
        isAnimating: function() {
          return t[this.hash].animating;
        }
      }
    );
    function o(a) {
      return a = e.getElement(a), new e.Point(
        a.clientWidth === 0 ? 1 : a.clientWidth,
        a.clientHeight === 0 ? 1 : a.clientHeight
      );
    }
    function h(a, m, E, R, P) {
      var H = a;
      if (e.type(m) === "string") {
        if (m.match(/^\s*<.*>\s*$/))
          m = e.parseXml(m);
        else if (m.match(/^\s*[{[].*[}\]]\s*$/))
          try {
            var O = e.parseJSON(m);
            m = O;
          } catch {
          }
      }
      function V(Z, U) {
        Z.ready ? R(Z) : (Z.addHandler("ready", function() {
          R(Z);
        }), Z.addHandler("open-failed", function(L) {
          P({
            message: L.message,
            source: U
          });
        }));
      }
      setTimeout(function() {
        if (e.type(m) === "string")
          m = new e.TileSource({
            url: m,
            crossOriginPolicy: E.crossOriginPolicy !== void 0 ? E.crossOriginPolicy : a.crossOriginPolicy,
            ajaxWithCredentials: a.ajaxWithCredentials,
            ajaxHeaders: E.ajaxHeaders ? E.ajaxHeaders : a.ajaxHeaders,
            splitHashDataForPost: a.splitHashDataForPost,
            useCanvas: a.useCanvas,
            success: function(X) {
              R(X.tileSource);
            }
          }), m.addHandler("open-failed", function(X) {
            P(X);
          });
        else if (e.isPlainObject(m) || m.nodeType)
          if (m.crossOriginPolicy === void 0 && (E.crossOriginPolicy !== void 0 || a.crossOriginPolicy !== void 0) && (m.crossOriginPolicy = E.crossOriginPolicy !== void 0 ? E.crossOriginPolicy : a.crossOriginPolicy), m.ajaxWithCredentials === void 0 && (m.ajaxWithCredentials = a.ajaxWithCredentials), m.useCanvas === void 0 && (m.useCanvas = a.useCanvas), e.isFunction(m.getTileUrl)) {
            var Z = new e.TileSource(m);
            Z.getTileUrl = m.getTileUrl, R(Z);
          } else {
            var U = e.TileSource.determineType(H, m);
            if (!U) {
              P({
                message: "Unable to load TileSource",
                source: m
              });
              return;
            }
            var L = U.prototype.configure.apply(H, [m]);
            V(new U(L), m);
          }
        else
          V(m, m);
      });
    }
    function i(a, m) {
      if (m instanceof e.Overlay)
        return m;
      var E = null;
      if (m.element)
        E = e.getElement(m.element);
      else {
        var R = m.id ? m.id : "openseadragon-overlay-" + Math.floor(Math.random() * 1e7);
        E = e.getElement(m.id), E || (E = document.createElement("a"), E.href = "#/overlay/" + R), E.id = R, e.addClass(
          E,
          m.className ? m.className : "openseadragon-overlay"
        );
      }
      var P = m.location, H = m.width, O = m.height;
      if (!P) {
        var V = m.x, Z = m.y;
        if (m.px !== void 0) {
          var U = a.viewport.imageToViewportRectangle(new e.Rect(
            m.px,
            m.py,
            H || 0,
            O || 0
          ));
          V = U.x, Z = U.y, H = H !== void 0 ? U.width : void 0, O = O !== void 0 ? U.height : void 0;
        }
        P = new e.Point(V, Z);
      }
      var L = m.placement;
      return L && e.type(L) === "string" && (L = e.Placement[m.placement.toUpperCase()]), new e.Overlay({
        element: E,
        location: P,
        placement: L,
        onDraw: m.onDraw,
        checkResize: m.checkResize,
        width: H,
        height: O,
        rotationMode: m.rotationMode
      });
    }
    function n(a, m) {
      var E;
      for (E = a.length - 1; E >= 0; E--)
        if (a[E].element === m)
          return E;
      return -1;
    }
    function r(a, m) {
      return e.requestAnimationFrame(function() {
        m(a);
      });
    }
    function l(a) {
      e.requestAnimationFrame(function() {
        f(a);
      });
    }
    function d(a) {
      a.autoHideControls && (a.controlsShouldFade = !0, a.controlsFadeBeginTime = e.now() + a.controlsFadeDelay, window.setTimeout(function() {
        l(a);
      }, a.controlsFadeDelay));
    }
    function f(a) {
      var m, E, R, P;
      if (a.controlsShouldFade) {
        for (m = e.now(), E = m - a.controlsFadeBeginTime, R = 1 - E / a.controlsFadeLength, R = Math.min(1, R), R = Math.max(0, R), P = a.controls.length - 1; P >= 0; P--)
          a.controls[P].autoFade && a.controls[P].setOpacity(R);
        R > 0 && l(a);
      }
    }
    function y(a) {
      var m;
      for (a.controlsShouldFade = !1, m = a.controls.length - 1; m >= 0; m--)
        a.controls[m].setOpacity(1);
    }
    function v() {
      y(this);
    }
    function T() {
      d(this);
    }
    function w(a) {
      var m = {
        tracker: a.eventSource,
        position: a.position,
        originalEvent: a.originalEvent,
        preventDefault: a.preventDefault
      };
      this.raiseEvent("canvas-contextmenu", m), a.preventDefault = m.preventDefault;
    }
    function x(a) {
      var m = {
        originalEvent: a.originalEvent,
        preventDefaultAction: !1,
        preventVerticalPan: a.preventVerticalPan || !this.panVertical,
        preventHorizontalPan: a.preventHorizontalPan || !this.panHorizontal
      };
      if (this.raiseEvent("canvas-key", m), !m.preventDefaultAction && !a.ctrl && !a.alt && !a.meta)
        switch (a.keyCode) {
          case 38:
            m.preventVerticalPan || (a.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -this.pixelsPerArrowPress))), this.viewport.applyConstraints()), a.preventDefault = !0;
            break;
          case 40:
            m.preventVerticalPan || (a.shift ? this.viewport.zoomBy(0.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, this.pixelsPerArrowPress))), this.viewport.applyConstraints()), a.preventDefault = !0;
            break;
          case 37:
            m.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), a.preventDefault = !0;
            break;
          case 39:
            m.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), a.preventDefault = !0;
            break;
          default:
            a.preventDefault = !1;
            break;
        }
      else
        a.preventDefault = !1;
    }
    function _(a) {
      var m = {
        originalEvent: a.originalEvent,
        preventDefaultAction: !1,
        preventVerticalPan: a.preventVerticalPan || !this.panVertical,
        preventHorizontalPan: a.preventHorizontalPan || !this.panHorizontal
      };
      if (this.raiseEvent("canvas-key", m), !m.preventDefaultAction && !a.ctrl && !a.alt && !a.meta)
        switch (a.keyCode) {
          case 43:
          case 61:
            this.viewport.zoomBy(1.1), this.viewport.applyConstraints(), a.preventDefault = !0;
            break;
          case 45:
            this.viewport.zoomBy(0.9), this.viewport.applyConstraints(), a.preventDefault = !0;
            break;
          case 48:
            this.viewport.goHome(), this.viewport.applyConstraints(), a.preventDefault = !0;
            break;
          case 119:
          case 87:
            m.preventVerticalPan || (a.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -40))), this.viewport.applyConstraints()), a.preventDefault = !0;
            break;
          case 115:
          case 83:
            m.preventVerticalPan || (a.shift ? this.viewport.zoomBy(0.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, 40))), this.viewport.applyConstraints()), a.preventDefault = !0;
            break;
          case 97:
            m.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-40, 0))), this.viewport.applyConstraints()), a.preventDefault = !0;
            break;
          case 100:
            m.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(40, 0))), this.viewport.applyConstraints()), a.preventDefault = !0;
            break;
          case 114:
            this.viewport.flipped ? this.viewport.setRotation(e.positiveModulo(this.viewport.degrees - this.rotationIncrement, 360)) : this.viewport.setRotation(e.positiveModulo(this.viewport.degrees + this.rotationIncrement, 360)), this.viewport.applyConstraints(), a.preventDefault = !0;
            break;
          case 82:
            this.viewport.flipped ? this.viewport.setRotation(e.positiveModulo(this.viewport.degrees + this.rotationIncrement, 360)) : this.viewport.setRotation(e.positiveModulo(this.viewport.degrees - this.rotationIncrement, 360)), this.viewport.applyConstraints(), a.preventDefault = !0;
            break;
          case 102:
            this.viewport.toggleFlip(), a.preventDefault = !0;
            break;
          case 106:
            this.goToPreviousPage();
            break;
          case 107:
            this.goToNextPage();
            break;
          default:
            a.preventDefault = !1;
            break;
        }
      else
        a.preventDefault = !1;
    }
    function b(a) {
      var m, E = document.activeElement === this.canvas;
      E || this.canvas.focus(), this.viewport.flipped && (a.position.x = this.viewport.getContainerSize().x - a.position.x);
      var R = {
        tracker: a.eventSource,
        position: a.position,
        quick: a.quick,
        shift: a.shift,
        originalEvent: a.originalEvent,
        originalTarget: a.originalTarget,
        preventDefaultAction: !1
      };
      this.raiseEvent("canvas-click", R), !R.preventDefaultAction && this.viewport && a.quick && (m = this.gestureSettingsByDeviceType(a.pointerType), m.clickToZoom && (this.viewport.zoomBy(
        a.shift ? 1 / this.zoomPerClick : this.zoomPerClick,
        m.zoomToRefPoint ? this.viewport.pointFromPixel(a.position, !0) : null
      ), this.viewport.applyConstraints()));
    }
    function N(a) {
      var m, E = {
        tracker: a.eventSource,
        position: a.position,
        shift: a.shift,
        originalEvent: a.originalEvent,
        preventDefaultAction: !1
      };
      this.raiseEvent("canvas-double-click", E), !E.preventDefaultAction && this.viewport && (m = this.gestureSettingsByDeviceType(a.pointerType), m.dblClickToZoom && (this.viewport.zoomBy(
        a.shift ? 1 / this.zoomPerClick : this.zoomPerClick,
        m.zoomToRefPoint ? this.viewport.pointFromPixel(a.position, !0) : null
      ), this.viewport.applyConstraints()));
    }
    function G(a) {
      var m, E = {
        tracker: a.eventSource,
        pointerType: a.pointerType,
        position: a.position,
        delta: a.delta,
        speed: a.speed,
        direction: a.direction,
        shift: a.shift,
        originalEvent: a.originalEvent,
        preventDefaultAction: !1
      };
      if (this.raiseEvent("canvas-drag", E), m = this.gestureSettingsByDeviceType(a.pointerType), m.dragToPan && !E.preventDefaultAction && this.viewport) {
        if (this.panHorizontal || (a.delta.x = 0), this.panVertical || (a.delta.y = 0), this.viewport.flipped && (a.delta.x = -a.delta.x), this.constrainDuringPan) {
          var R = this.viewport.deltaPointsFromPixels(a.delta.negate());
          this.viewport.centerSpringX.target.value += R.x, this.viewport.centerSpringY.target.value += R.y;
          var P = this.viewport.getBounds(), H = this.viewport.getConstrainedBounds();
          this.viewport.centerSpringX.target.value -= R.x, this.viewport.centerSpringY.target.value -= R.y, P.x !== H.x && (a.delta.x = 0), P.y !== H.y && (a.delta.y = 0);
        }
        this.viewport.panBy(this.viewport.deltaPointsFromPixels(a.delta.negate()), m.flickEnabled && !this.constrainDuringPan);
      }
    }
    function A(a) {
      var m = {
        tracker: a.eventSource,
        pointerType: a.pointerType,
        position: a.position,
        speed: a.speed,
        direction: a.direction,
        shift: a.shift,
        originalEvent: a.originalEvent,
        preventDefaultAction: !1
      };
      if (this.raiseEvent("canvas-drag-end", m), !m.preventDefaultAction && this.viewport) {
        var E = this.gestureSettingsByDeviceType(a.pointerType);
        if (E.flickEnabled && a.speed >= E.flickMinSpeed) {
          var R = 0;
          this.panHorizontal && (R = E.flickMomentum * a.speed * Math.cos(a.direction));
          var P = 0;
          this.panVertical && (P = E.flickMomentum * a.speed * Math.sin(a.direction));
          var H = this.viewport.pixelFromPoint(
            this.viewport.getCenter(!0)
          ), O = this.viewport.pointFromPixel(
            new e.Point(H.x - R, H.y - P)
          );
          this.viewport.panTo(O, !1);
        }
        this.viewport.applyConstraints();
      }
    }
    function W(a) {
      this.raiseEvent("canvas-enter", {
        tracker: a.eventSource,
        pointerType: a.pointerType,
        position: a.position,
        buttons: a.buttons,
        pointers: a.pointers,
        insideElementPressed: a.insideElementPressed,
        buttonDownAny: a.buttonDownAny,
        originalEvent: a.originalEvent
      });
    }
    function M(a) {
      this.raiseEvent("canvas-exit", {
        tracker: a.eventSource,
        pointerType: a.pointerType,
        position: a.position,
        buttons: a.buttons,
        pointers: a.pointers,
        insideElementPressed: a.insideElementPressed,
        buttonDownAny: a.buttonDownAny,
        originalEvent: a.originalEvent
      });
    }
    function j(a) {
      this.raiseEvent("canvas-press", {
        tracker: a.eventSource,
        pointerType: a.pointerType,
        position: a.position,
        insideElementPressed: a.insideElementPressed,
        insideElementReleased: a.insideElementReleased,
        originalEvent: a.originalEvent
      });
    }
    function $(a) {
      this.raiseEvent("canvas-release", {
        tracker: a.eventSource,
        pointerType: a.pointerType,
        position: a.position,
        insideElementPressed: a.insideElementPressed,
        insideElementReleased: a.insideElementReleased,
        originalEvent: a.originalEvent
      });
    }
    function Y(a) {
      this.raiseEvent("canvas-nonprimary-press", {
        tracker: a.eventSource,
        position: a.position,
        pointerType: a.pointerType,
        button: a.button,
        buttons: a.buttons,
        originalEvent: a.originalEvent
      });
    }
    function K(a) {
      this.raiseEvent("canvas-nonprimary-release", {
        tracker: a.eventSource,
        position: a.position,
        pointerType: a.pointerType,
        button: a.button,
        buttons: a.buttons,
        originalEvent: a.originalEvent
      });
    }
    function ae(a) {
      var m, E, R, P, H = {
        tracker: a.eventSource,
        pointerType: a.pointerType,
        gesturePoints: a.gesturePoints,
        lastCenter: a.lastCenter,
        center: a.center,
        lastDistance: a.lastDistance,
        distance: a.distance,
        shift: a.shift,
        originalEvent: a.originalEvent,
        preventDefaultPanAction: !1,
        preventDefaultZoomAction: !1,
        preventDefaultRotateAction: !1
      };
      if (this.raiseEvent("canvas-pinch", H), this.viewport && (m = this.gestureSettingsByDeviceType(a.pointerType), m.pinchToZoom && (!H.preventDefaultPanAction || !H.preventDefaultZoomAction) && (E = this.viewport.pointFromPixel(a.center, !0), m.zoomToRefPoint && !H.preventDefaultPanAction && (R = this.viewport.pointFromPixel(a.lastCenter, !0), P = R.minus(E), this.panHorizontal || (P.x = 0), this.panVertical || (P.y = 0), this.viewport.panBy(P, !0)), H.preventDefaultZoomAction || this.viewport.zoomBy(a.distance / a.lastDistance, E, !0), this.viewport.applyConstraints()), m.pinchRotate && !H.preventDefaultRotateAction)) {
        var O = Math.atan2(
          a.gesturePoints[0].currentPos.y - a.gesturePoints[1].currentPos.y,
          a.gesturePoints[0].currentPos.x - a.gesturePoints[1].currentPos.x
        ), V = Math.atan2(
          a.gesturePoints[0].lastPos.y - a.gesturePoints[1].lastPos.y,
          a.gesturePoints[0].lastPos.x - a.gesturePoints[1].lastPos.x
        );
        this.viewport.setRotation(this.viewport.getRotation() + (O - V) * (180 / Math.PI));
      }
    }
    function ie(a) {
      var m, E, R, P, H;
      P = e.now(), H = P - this._lastScrollTime, H > this.minScrollDeltaTime ? (this._lastScrollTime = P, m = {
        tracker: a.eventSource,
        position: a.position,
        scroll: a.scroll,
        shift: a.shift,
        originalEvent: a.originalEvent,
        preventDefaultAction: !1,
        preventDefault: !0
      }, this.raiseEvent("canvas-scroll", m), !m.preventDefaultAction && this.viewport && (this.viewport.flipped && (a.position.x = this.viewport.getContainerSize().x - a.position.x), E = this.gestureSettingsByDeviceType(a.pointerType), E.scrollToZoom && (R = Math.pow(this.zoomPerScroll, a.scroll), this.viewport.zoomBy(
        R,
        E.zoomToRefPoint ? this.viewport.pointFromPixel(a.position, !0) : null
      ), this.viewport.applyConstraints())), a.preventDefault = m.preventDefault) : a.preventDefault = !0;
    }
    function le(a) {
      t[this.hash].mouseInside = !0, y(this), this.raiseEvent("container-enter", {
        tracker: a.eventSource,
        pointerType: a.pointerType,
        position: a.position,
        buttons: a.buttons,
        pointers: a.pointers,
        insideElementPressed: a.insideElementPressed,
        buttonDownAny: a.buttonDownAny,
        originalEvent: a.originalEvent
      });
    }
    function te(a) {
      a.pointers < 1 && (t[this.hash].mouseInside = !1, t[this.hash].animating || d(this)), this.raiseEvent("container-exit", {
        tracker: a.eventSource,
        pointerType: a.pointerType,
        position: a.position,
        buttons: a.buttons,
        pointers: a.pointers,
        insideElementPressed: a.insideElementPressed,
        buttonDownAny: a.buttonDownAny,
        originalEvent: a.originalEvent
      });
    }
    function ne(a) {
      se(a), a.isOpen() ? a._updateRequestId = r(a, ne) : a._updateRequestId = !1;
    }
    function se(a) {
      if (!(a._opening || !t[a.hash])) {
        if (a.autoResize) {
          var m = o(a.container), E = t[a.hash].prevContainerSize;
          if (!m.equals(E)) {
            var R = a.viewport;
            if (a.preserveImageSizeOnResize) {
              var P = E.x / m.x, H = R.getZoom() * P, O = R.getCenter();
              R.resize(m, !1), R.zoomTo(H, null, !0), R.panTo(O, !0);
            } else {
              var V = R.getBounds();
              R.resize(m, !0), R.fitBoundsWithConstraints(V, !0);
            }
            t[a.hash].prevContainerSize = m, t[a.hash].forceRedraw = !0;
          }
        }
        var Z = a.viewport.update(), U = a.world.update() || Z;
        Z && a.raiseEvent("viewport-change"), a.referenceStrip && (U = a.referenceStrip.update(a.viewport) || U);
        var L = t[a.hash].animating;
        !L && U && (a.raiseEvent("animation-start"), y(a));
        var X = L && !U;
        X && (t[a.hash].animating = !1), (U || X || t[a.hash].forceRedraw || a.world.needsDraw()) && (he(a), a._drawOverlays(), a.navigator && a.navigator.update(a.viewport), t[a.hash].forceRedraw = !1, U && a.raiseEvent("animation")), X && (a.raiseEvent("animation-finish"), t[a.hash].mouseInside || d(a)), t[a.hash].animating = U;
      }
    }
    function he(a) {
      a.imageLoader.clear(), a.drawer.clear(), a.world.draw(), a.raiseEvent("update-viewport", {});
    }
    function z(a, m) {
      return a ? a + m : m;
    }
    function xe() {
      t[this.hash].lastZoomTime = e.now(), t[this.hash].zoomFactor = this.zoomPerSecond, t[this.hash].zooming = !0, ue(this);
    }
    function Ee() {
      t[this.hash].lastZoomTime = e.now(), t[this.hash].zoomFactor = 1 / this.zoomPerSecond, t[this.hash].zooming = !0, ue(this);
    }
    function fe() {
      t[this.hash].zooming = !1;
    }
    function ue(a) {
      e.requestAnimationFrame(e.delegate(a, pe));
    }
    function pe() {
      var a, m, E;
      t[this.hash].zooming && this.viewport && (a = e.now(), m = a - t[this.hash].lastZoomTime, E = Math.pow(t[this.hash].zoomFactor, m / 1e3), this.viewport.zoomBy(E), this.viewport.applyConstraints(), t[this.hash].lastZoomTime = a, ue(this));
    }
    function ge() {
      this.viewport && (t[this.hash].zooming = !1, this.viewport.zoomBy(
        this.zoomPerClick / 1
      ), this.viewport.applyConstraints());
    }
    function me() {
      this.viewport && (t[this.hash].zooming = !1, this.viewport.zoomBy(
        1 / this.zoomPerClick
      ), this.viewport.applyConstraints());
    }
    function ve() {
      this.buttonGroup && (this.buttonGroup.emulateEnter(), this.buttonGroup.emulateLeave());
    }
    function Se() {
      this.viewport && this.viewport.goHome();
    }
    function ye() {
      this.isFullPage() && !e.isFullScreen() ? this.setFullPage(!1) : this.setFullScreen(!this.isFullPage()), this.buttonGroup && this.buttonGroup.emulateLeave(), this.fullPageButton.element.focus(), this.viewport && this.viewport.applyConstraints();
    }
    function we() {
      if (this.viewport) {
        var a = this.viewport.getRotation();
        this.viewport.flipped ? a = e.positiveModulo(a + this.rotationIncrement, 360) : a = e.positiveModulo(a - this.rotationIncrement, 360), this.viewport.setRotation(a);
      }
    }
    function Pe() {
      if (this.viewport) {
        var a = this.viewport.getRotation();
        this.viewport.flipped ? a = e.positiveModulo(a - this.rotationIncrement, 360) : a = e.positiveModulo(a + this.rotationIncrement, 360), this.viewport.setRotation(a);
      }
    }
    function Te() {
      this.viewport.toggleFlip();
    }
  }(D), function(e) {
    e.Navigator = function(r) {
      var l = r.viewer, d = this, f, y;
      r.id ? (this.element = document.getElementById(r.id), r.controlOptions = {
        anchor: e.ControlAnchor.NONE,
        attachToViewer: !1,
        autoFade: !1
      }) : (r.id = "navigator-" + e.now(), this.element = e.makeNeutralElement("div"), r.controlOptions = {
        anchor: e.ControlAnchor.TOP_RIGHT,
        attachToViewer: !0,
        autoFade: r.autoFade
      }, r.position && (r.position === "BOTTOM_RIGHT" ? r.controlOptions.anchor = e.ControlAnchor.BOTTOM_RIGHT : r.position === "BOTTOM_LEFT" ? r.controlOptions.anchor = e.ControlAnchor.BOTTOM_LEFT : r.position === "TOP_RIGHT" ? r.controlOptions.anchor = e.ControlAnchor.TOP_RIGHT : r.position === "TOP_LEFT" ? r.controlOptions.anchor = e.ControlAnchor.TOP_LEFT : r.position === "ABSOLUTE" && (r.controlOptions.anchor = e.ControlAnchor.ABSOLUTE, r.controlOptions.top = r.top, r.controlOptions.left = r.left, r.controlOptions.height = r.height, r.controlOptions.width = r.width))), this.element.id = r.id, this.element.className += " navigator", r = e.extend(!0, {
        sizeRatio: e.DEFAULT_SETTINGS.navigatorSizeRatio
      }, r, {
        element: this.element,
        tabIndex: -1,
        // No keyboard navigation, omit from tab order
        //These need to be overridden to prevent recursion since
        //the navigator is a viewer and a viewer has a navigator
        showNavigator: !1,
        mouseNavEnabled: !1,
        showNavigationControl: !1,
        showSequenceControl: !1,
        immediateRender: !0,
        blendTime: 0,
        animationTime: 0,
        autoResize: r.autoResize,
        // prevent resizing the navigator from adding unwanted space around the image
        minZoomImageRatio: 1,
        background: r.background,
        opacity: r.opacity,
        borderColor: r.borderColor,
        displayRegionColor: r.displayRegionColor
      }), r.minPixelRatio = this.minPixelRatio = l.minPixelRatio, e.setElementTouchActionNone(this.element), this.borderWidth = 2, this.fudge = new e.Point(1, 1), this.totalBorderWidths = new e.Point(this.borderWidth * 2, this.borderWidth * 2).minus(this.fudge), r.controlOptions.anchor !== e.ControlAnchor.NONE && function(w, x) {
        w.margin = "0px", w.border = x + "px solid " + r.borderColor, w.padding = "0px", w.background = r.background, w.opacity = r.opacity, w.overflow = "hidden";
      }(this.element.style, this.borderWidth), this.displayRegion = e.makeNeutralElement("div"), this.displayRegion.id = this.element.id + "-displayregion", this.displayRegion.className = "displayregion", function(w, x) {
        w.position = "relative", w.top = "0px", w.left = "0px", w.fontSize = "0px", w.overflow = "hidden", w.border = x + "px solid " + r.displayRegionColor, w.margin = "0px", w.padding = "0px", w.background = "transparent", w.float = "left", w.cssFloat = "left", w.styleFloat = "left", w.zIndex = 999999999, w.cursor = "default";
      }(this.displayRegion.style, this.borderWidth), e.setElementPointerEventsNone(this.displayRegion), e.setElementTouchActionNone(this.displayRegion), this.displayRegionContainer = e.makeNeutralElement("div"), this.displayRegionContainer.id = this.element.id + "-displayregioncontainer", this.displayRegionContainer.className = "displayregioncontainer", this.displayRegionContainer.style.width = "100%", this.displayRegionContainer.style.height = "100%", e.setElementPointerEventsNone(this.displayRegionContainer), e.setElementTouchActionNone(this.displayRegionContainer), l.addControl(
        this.element,
        r.controlOptions
      ), this._resizeWithViewer = r.controlOptions.anchor !== e.ControlAnchor.ABSOLUTE && r.controlOptions.anchor !== e.ControlAnchor.NONE, r.width && r.height ? (this.setWidth(r.width), this.setHeight(r.height)) : this._resizeWithViewer && (f = e.getElementSize(l.element), this.element.style.height = Math.round(f.y * r.sizeRatio) + "px", this.element.style.width = Math.round(f.x * r.sizeRatio) + "px", this.oldViewerSize = f, y = e.getElementSize(this.element), this.elementArea = y.x * y.y), this.oldContainerSize = new e.Point(0, 0), e.Viewer.apply(this, [r]), this.displayRegionContainer.appendChild(this.displayRegion), this.element.getElementsByTagName("div")[0].appendChild(this.displayRegionContainer);
      function v(w) {
        i(d.displayRegionContainer, w), i(d.displayRegion, -w), d.viewport.setRotation(w);
      }
      if (r.navigatorRotate) {
        var T = r.viewer.viewport ? r.viewer.viewport.getRotation() : r.viewer.degrees || 0;
        v(T), r.viewer.addHandler("rotate", function(w) {
          v(w.degrees);
        });
      }
      this.innerTracker.destroy(), this.innerTracker = new e.MouseTracker({
        userData: "Navigator.innerTracker",
        element: this.element,
        //this.canvas,
        dragHandler: e.delegate(this, s),
        clickHandler: e.delegate(this, t),
        releaseHandler: e.delegate(this, o),
        scrollHandler: e.delegate(this, h),
        preProcessEventHandler: function(w) {
          w.eventType === "wheel" && (w.preventDefault = !0);
        }
      }), this.outerTracker.userData = "Navigator.outerTracker", e.setElementPointerEventsNone(this.canvas), e.setElementPointerEventsNone(this.container), this.addHandler("reset-size", function() {
        d.viewport && d.viewport.goHome(!0);
      }), l.world.addHandler("item-index-change", function(w) {
        window.setTimeout(function() {
          var x = d.world.getItemAt(w.previousIndex);
          d.world.setItemIndex(x, w.newIndex);
        }, 1);
      }), l.world.addHandler("remove-item", function(w) {
        var x = w.item, _ = d._getMatchingItem(x);
        _ && d.world.removeItem(_);
      }), this.update(l.viewport);
    }, e.extend(
      e.Navigator.prototype,
      e.EventSource.prototype,
      e.Viewer.prototype,
      /** @lends OpenSeadragon.Navigator.prototype */
      {
        /**
         * Used to notify the navigator when its size has changed.
         * Especially useful when {@link OpenSeadragon.Options}.navigatorAutoResize is set to false and the navigator is resizable.
         * @function
         */
        updateSize: function() {
          if (this.viewport) {
            var r = new e.Point(
              this.container.clientWidth === 0 ? 1 : this.container.clientWidth,
              this.container.clientHeight === 0 ? 1 : this.container.clientHeight
            );
            r.equals(this.oldContainerSize) || (this.viewport.resize(r, !0), this.viewport.goHome(!0), this.oldContainerSize = r, this.drawer.clear(), this.world.draw());
          }
        },
        /**
         * Explicitly sets the width of the navigator, in web coordinates. Disables automatic resizing.
         * @param {Number|String} width - the new width, either a number of pixels or a CSS string, such as "100%"
         */
        setWidth: function(r) {
          this.width = r, this.element.style.width = typeof r == "number" ? r + "px" : r, this._resizeWithViewer = !1;
        },
        /**
         * Explicitly sets the height of the navigator, in web coordinates. Disables automatic resizing.
         * @param {Number|String} height - the new height, either a number of pixels or a CSS string, such as "100%"
         */
        setHeight: function(r) {
          this.height = r, this.element.style.height = typeof r == "number" ? r + "px" : r, this._resizeWithViewer = !1;
        },
        /**
          * Flip navigator element
          * @param {Boolean} state - Flip state to set.
          */
        setFlip: function(r) {
          return this.viewport.setFlip(r), this.setDisplayTransform(this.viewer.viewport.getFlip() ? "scale(-1,1)" : "scale(1,1)"), this;
        },
        setDisplayTransform: function(r) {
          n(this.displayRegion, r), n(this.canvas, r), n(this.element, r);
        },
        /**
         * Used to update the navigator minimap's viewport rectangle when a change in the viewer's viewport occurs.
         * @function
         * @param {OpenSeadragon.Viewport} The viewport this navigator is tracking.
         */
        update: function(r) {
          var l, d, f, y, v, T;
          if (l = e.getElementSize(this.viewer.element), this._resizeWithViewer && l.x && l.y && !l.equals(this.oldViewerSize) && (this.oldViewerSize = l, this.maintainSizeRatio || !this.elementArea ? (d = l.x * this.sizeRatio, f = l.y * this.sizeRatio) : (d = Math.sqrt(this.elementArea * (l.x / l.y)), f = this.elementArea / d), this.element.style.width = Math.round(d) + "px", this.element.style.height = Math.round(f) + "px", this.elementArea || (this.elementArea = d * f), this.updateSize()), r && this.viewport) {
            y = r.getBoundsNoRotate(!0), v = this.viewport.pixelFromPointNoRotate(y.getTopLeft(), !1), T = this.viewport.pixelFromPointNoRotate(y.getBottomRight(), !1).minus(this.totalBorderWidths);
            var w = this.displayRegion.style;
            w.display = this.world.getItemCount() ? "block" : "none", w.top = Math.round(v.y) + "px", w.left = Math.round(v.x) + "px";
            var x = Math.abs(v.x - T.x), _ = Math.abs(v.y - T.y);
            w.width = Math.round(Math.max(x, 0)) + "px", w.height = Math.round(Math.max(_, 0)) + "px";
          }
        },
        // overrides Viewer.addTiledImage
        addTiledImage: function(r) {
          var l = this, d = r.originalTiledImage;
          delete r.original;
          var f = e.extend({}, r, {
            success: function(y) {
              var v = y.item;
              v._originalForNavigator = d, l._matchBounds(v, d, !0), l._matchOpacity(v, d), l._matchCompositeOperation(v, d);
              function T() {
                l._matchBounds(v, d);
              }
              function w() {
                l._matchOpacity(v, d);
              }
              function x() {
                l._matchCompositeOperation(v, d);
              }
              d.addHandler("bounds-change", T), d.addHandler("clip-change", T), d.addHandler("opacity-change", w), d.addHandler("composite-operation-change", x);
            }
          });
          return e.Viewer.prototype.addTiledImage.apply(this, [f]);
        },
        destroy: function() {
          return e.Viewer.prototype.destroy.apply(this);
        },
        // private
        _getMatchingItem: function(r) {
          for (var l = this.world.getItemCount(), d, f = 0; f < l; f++)
            if (d = this.world.getItemAt(f), d._originalForNavigator === r)
              return d;
          return null;
        },
        // private
        _matchBounds: function(r, l, d) {
          var f = l.getBoundsNoRotate();
          r.setPosition(f.getTopLeft(), d), r.setWidth(f.width, d), r.setRotation(l.getRotation(), d), r.setClip(l.getClip()), r.setFlip(l.getFlip());
        },
        // private
        _matchOpacity: function(r, l) {
          r.setOpacity(l.opacity);
        },
        // private
        _matchCompositeOperation: function(r, l) {
          r.setCompositeOperation(l.compositeOperation);
        }
      }
    );
    function t(r) {
      var l = {
        tracker: r.eventSource,
        position: r.position,
        quick: r.quick,
        shift: r.shift,
        originalEvent: r.originalEvent,
        preventDefaultAction: !1
      };
      if (this.viewer.raiseEvent("navigator-click", l), !l.preventDefaultAction && r.quick && this.viewer.viewport && (this.panVertical || this.panHorizontal)) {
        this.viewer.viewport.flipped && (r.position.x = this.viewport.getContainerSize().x - r.position.x);
        var d = this.viewport.pointFromPixel(r.position);
        this.panVertical ? this.panHorizontal || (d.x = this.viewer.viewport.getCenter(!0).x) : d.y = this.viewer.viewport.getCenter(!0).y, this.viewer.viewport.panTo(d), this.viewer.viewport.applyConstraints();
      }
    }
    function s(r) {
      var l = {
        tracker: r.eventSource,
        position: r.position,
        delta: r.delta,
        speed: r.speed,
        direction: r.direction,
        shift: r.shift,
        originalEvent: r.originalEvent,
        preventDefaultAction: !1
      };
      this.viewer.raiseEvent("navigator-drag", l), !l.preventDefaultAction && this.viewer.viewport && (this.panHorizontal || (r.delta.x = 0), this.panVertical || (r.delta.y = 0), this.viewer.viewport.flipped && (r.delta.x = -r.delta.x), this.viewer.viewport.panBy(
        this.viewport.deltaPointsFromPixels(
          r.delta
        )
      ), this.viewer.constrainDuringPan && this.viewer.viewport.applyConstraints());
    }
    function o(r) {
      r.insideElementPressed && this.viewer.viewport && this.viewer.viewport.applyConstraints();
    }
    function h(r) {
      var l = {
        tracker: r.eventSource,
        position: r.position,
        scroll: r.scroll,
        shift: r.shift,
        originalEvent: r.originalEvent,
        preventDefault: r.preventDefault
      };
      this.viewer.raiseEvent("navigator-scroll", l), r.preventDefault = l.preventDefault;
    }
    function i(r, l) {
      n(r, "rotate(" + l + "deg)");
    }
    function n(r, l) {
      r.style.webkitTransform = l, r.style.mozTransform = l, r.style.msTransform = l, r.style.oTransform = l, r.style.transform = l;
    }
  }(D), function(e) {
    var t = {
      Errors: {
        Dzc: "Sorry, we don't support Deep Zoom Collections!",
        Dzi: "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
        Xml: "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
        ImageFormat: "Sorry, we don't support {0}-based Deep Zoom Images.",
        Security: "It looks like a security restriction stopped us from loading this Deep Zoom Image.",
        Status: "This space unintentionally left blank ({0} {1}).",
        OpenFailed: "Unable to open {0}: {1}"
      },
      Tooltips: {
        FullPage: "Toggle full page",
        Home: "Go home",
        ZoomIn: "Zoom in",
        ZoomOut: "Zoom out",
        NextPage: "Next page",
        PreviousPage: "Previous page",
        RotateLeft: "Rotate left",
        RotateRight: "Rotate right",
        Flip: "Flip Horizontally"
      }
    };
    e.extend(
      e,
      /** @lends OpenSeadragon */
      {
        /**
         * @function
         * @param {String} property
         */
        getString: function(s) {
          var o = s.split("."), h = null, i = arguments, n = t, r;
          for (r = 0; r < o.length - 1; r++)
            n = n[o[r]] || {};
          return h = n[o[r]], typeof h != "string" && (e.console.error("Untranslated source string:", s), h = ""), h.replace(/\{\d+\}/g, function(l) {
            var d = parseInt(l.match(/\d+/), 10) + 1;
            return d < i.length ? i[d] : "";
          });
        },
        /**
         * @function
         * @param {String} property
         * @param {*} value
         */
        setString: function(s, o) {
          var h = s.split("."), i = t, n;
          for (n = 0; n < h.length - 1; n++)
            i[h[n]] || (i[h[n]] = {}), i = i[h[n]];
          i[h[n]] = o;
        }
      }
    );
  }(D), function(e) {
    e.Point = function(t, s) {
      this.x = typeof t == "number" ? t : 0, this.y = typeof s == "number" ? s : 0;
    }, e.Point.prototype = {
      /**
       * @function
       * @returns {OpenSeadragon.Point} a duplicate of this Point
       */
      clone: function() {
        return new e.Point(this.x, this.y);
      },
      /**
       * Add another Point to this point and return a new Point.
       * @function
       * @param {OpenSeadragon.Point} point The point to add vector components.
       * @returns {OpenSeadragon.Point} A new point representing the sum of the
       *  vector components
       */
      plus: function(t) {
        return new e.Point(
          this.x + t.x,
          this.y + t.y
        );
      },
      /**
       * Subtract another Point to this point and return a new Point.
       * @function
       * @param {OpenSeadragon.Point} point The point to subtract vector components.
       * @returns {OpenSeadragon.Point} A new point representing the subtraction of the
       *  vector components
       */
      minus: function(t) {
        return new e.Point(
          this.x - t.x,
          this.y - t.y
        );
      },
      /**
       * Multiply this point by a factor and return a new Point.
       * @function
       * @param {Number} factor The factor to multiply vector components.
       * @returns {OpenSeadragon.Point} A new point representing the multiplication
       *  of the vector components by the factor
       */
      times: function(t) {
        return new e.Point(
          this.x * t,
          this.y * t
        );
      },
      /**
       * Divide this point by a factor and return a new Point.
       * @function
       * @param {Number} factor The factor to divide vector components.
       * @returns {OpenSeadragon.Point} A new point representing the division of the
       *  vector components by the factor
       */
      divide: function(t) {
        return new e.Point(
          this.x / t,
          this.y / t
        );
      },
      /**
       * Compute the opposite of this point and return a new Point.
       * @function
       * @returns {OpenSeadragon.Point} A new point representing the opposite of the
       *  vector components
       */
      negate: function() {
        return new e.Point(-this.x, -this.y);
      },
      /**
       * Compute the distance between this point and another point.
       * @function
       * @param {OpenSeadragon.Point} point The point to compute the distance with.
       * @returns {Number} The distance between the 2 points
       */
      distanceTo: function(t) {
        return Math.sqrt(
          Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2)
        );
      },
      /**
       * Compute the squared distance between this point and another point.
       * Useful for optimizing things like comparing distances.
       * @function
       * @param {OpenSeadragon.Point} point The point to compute the squared distance with.
       * @returns {Number} The squared distance between the 2 points
       */
      squaredDistanceTo: function(t) {
        return Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2);
      },
      /**
       * Apply a function to each coordinate of this point and return a new point.
       * @function
       * @param {function} func The function to apply to each coordinate.
       * @returns {OpenSeadragon.Point} A new point with the coordinates computed
       * by the specified function
       */
      apply: function(t) {
        return new e.Point(t(this.x), t(this.y));
      },
      /**
       * Check if this point is equal to another one.
       * @function
       * @param {OpenSeadragon.Point} point The point to compare this point with.
       * @returns {Boolean} true if they are equal, false otherwise.
       */
      equals: function(t) {
        return t instanceof e.Point && this.x === t.x && this.y === t.y;
      },
      /**
       * Rotates the point around the specified pivot
       * From http://stackoverflow.com/questions/4465931/rotate-rectangle-around-a-point
       * @function
       * @param {Number} degress to rotate around the pivot.
       * @param {OpenSeadragon.Point} [pivot=(0,0)] Point around which to rotate.
       * Defaults to the origin.
       * @returns {OpenSeadragon.Point}. A new point representing the point rotated around the specified pivot
       */
      rotate: function(t, s) {
        s = s || new e.Point(0, 0);
        var o, h;
        if (t % 90 === 0) {
          var i = e.positiveModulo(t, 360);
          switch (i) {
            case 0:
              o = 1, h = 0;
              break;
            case 90:
              o = 0, h = 1;
              break;
            case 180:
              o = -1, h = 0;
              break;
            case 270:
              o = 0, h = -1;
              break;
          }
        } else {
          var n = t * Math.PI / 180;
          o = Math.cos(n), h = Math.sin(n);
        }
        var r = o * (this.x - s.x) - h * (this.y - s.y) + s.x, l = h * (this.x - s.x) + o * (this.y - s.y) + s.y;
        return new e.Point(r, l);
      },
      /**
       * Convert this point to a string in the format (x,y) where x and y are
       * rounded to the nearest integer.
       * @function
       * @returns {String} A string representation of this point.
       */
      toString: function() {
        return "(" + Math.round(this.x * 100) / 100 + "," + Math.round(this.y * 100) / 100 + ")";
      }
    };
  }(D), function(e) {
    e.TileSource = function(s, o, h, i, n, r) {
      var l = this, d = arguments, f, y;
      if (e.isPlainObject(s) ? f = s : f = {
        width: d[0],
        height: d[1],
        tileSize: d[2],
        tileOverlap: d[3],
        minLevel: d[4],
        maxLevel: d[5]
      }, e.EventSource.call(this), e.extend(!0, this, f), !this.success) {
        for (y = 0; y < arguments.length; y++)
          if (e.isFunction(arguments[y])) {
            this.success = arguments[y];
            break;
          }
      }
      this.success && this.addHandler("ready", function(v) {
        l.success(v);
      }), e.type(arguments[0]) === "string" && (this.url = arguments[0]), this.url ? (this.aspectRatio = 1, this.dimensions = new e.Point(10, 10), this._tileWidth = 0, this._tileHeight = 0, this.tileOverlap = 0, this.minLevel = 0, this.maxLevel = 0, this.ready = !1, this.getImageInfo(this.url)) : (this.ready = !0, this.aspectRatio = f.width && f.height ? f.width / f.height : 1, this.dimensions = new e.Point(f.width, f.height), this.tileSize ? (this._tileWidth = this._tileHeight = this.tileSize, delete this.tileSize) : (this.tileWidth ? (this._tileWidth = this.tileWidth, delete this.tileWidth) : this._tileWidth = 0, this.tileHeight ? (this._tileHeight = this.tileHeight, delete this.tileHeight) : this._tileHeight = 0), this.tileOverlap = f.tileOverlap ? f.tileOverlap : 0, this.minLevel = f.minLevel ? f.minLevel : 0, this.maxLevel = f.maxLevel !== void 0 && f.maxLevel !== null ? f.maxLevel : f.width && f.height ? Math.ceil(
        Math.log(Math.max(f.width, f.height)) / Math.log(2)
      ) : 0, this.success && e.isFunction(this.success) && this.success(this));
    }, e.TileSource.prototype = {
      getTileSize: function(s) {
        return e.console.error(
          "[TileSource.getTileSize] is deprecated. Use TileSource.getTileWidth() and TileSource.getTileHeight() instead"
        ), this._tileWidth;
      },
      /**
       * Return the tileWidth for a given level.
       * Subclasses should override this if tileWidth can be different at different levels
       *   such as in IIIFTileSource.  Code should use this function rather than reading
       *   from ._tileWidth directly.
       * @function
       * @param {Number} level
       */
      getTileWidth: function(s) {
        return this._tileWidth ? this._tileWidth : this.getTileSize(s);
      },
      /**
       * Return the tileHeight for a given level.
       * Subclasses should override this if tileHeight can be different at different levels
       *   such as in IIIFTileSource.  Code should use this function rather than reading
       *   from ._tileHeight directly.
       * @function
       * @param {Number} level
       */
      getTileHeight: function(s) {
        return this._tileHeight ? this._tileHeight : this.getTileSize(s);
      },
      /**
       * Set the maxLevel to the given level, and perform the memoization of
       * getLevelScale with the new maxLevel. This function can be useful if the
       * memoization is required before the first call of getLevelScale, or both
       * memoized getLevelScale and maxLevel should be changed accordingly.
       * @function
       * @param {Number} level
       */
      setMaxLevel: function(s) {
        this.maxLevel = s, this._memoizeLevelScale();
      },
      /**
       * @function
       * @param {Number} level
       */
      getLevelScale: function(s) {
        return this._memoizeLevelScale(), this.getLevelScale(s);
      },
      // private
      _memoizeLevelScale: function() {
        var s = {}, o;
        for (o = 0; o <= this.maxLevel; o++)
          s[o] = 1 / Math.pow(2, this.maxLevel - o);
        this.getLevelScale = function(h) {
          return s[h];
        };
      },
      /**
       * @function
       * @param {Number} level
       */
      getNumTiles: function(s) {
        var o = this.getLevelScale(s), h = Math.ceil(o * this.dimensions.x / this.getTileWidth(s)), i = Math.ceil(o * this.dimensions.y / this.getTileHeight(s));
        return new e.Point(h, i);
      },
      /**
       * @function
       * @param {Number} level
       */
      getPixelRatio: function(s) {
        var o = this.dimensions.times(this.getLevelScale(s)), h = 1 / o.x * e.pixelDensityRatio, i = 1 / o.y * e.pixelDensityRatio;
        return new e.Point(h, i);
      },
      /**
       * @function
       * @returns {Number} The highest level in this tile source that can be contained in a single tile.
       */
      getClosestLevel: function() {
        var s, o;
        for (s = this.minLevel + 1; s <= this.maxLevel && (o = this.getNumTiles(s), !(o.x > 1 || o.y > 1)); s++)
          ;
        return s - 1;
      },
      /**
       * @function
       * @param {Number} level
       * @param {OpenSeadragon.Point} point
       */
      getTileAtPoint: function(s, o) {
        var h = o.x >= 0 && o.x <= 1 && o.y >= 0 && o.y <= 1 / this.aspectRatio;
        e.console.assert(h, "[TileSource.getTileAtPoint] must be called with a valid point.");
        var i = this.dimensions.x * this.getLevelScale(s), n = o.x * i, r = o.y * i, l = Math.floor(n / this.getTileWidth(s)), d = Math.floor(r / this.getTileHeight(s));
        o.x >= 1 && (l = this.getNumTiles(s).x - 1);
        var f = 1e-15;
        return o.y >= 1 / this.aspectRatio - f && (d = this.getNumTiles(s).y - 1), new e.Point(l, d);
      },
      /**
       * @function
       * @param {Number} level
       * @param {Number} x
       * @param {Number} y
       * @param {Boolean} [isSource=false] Whether to return the source bounds of the tile.
       * @returns {OpenSeadragon.Rect} Either where this tile fits (in normalized coordinates) or the
       * portion of the tile to use as the source of the drawing operation (in pixels), depending on
       * the isSource parameter.
       */
      getTileBounds: function(s, o, h, i) {
        var n = this.dimensions.times(this.getLevelScale(s)), r = this.getTileWidth(s), l = this.getTileHeight(s), d = o === 0 ? 0 : r * o - this.tileOverlap, f = h === 0 ? 0 : l * h - this.tileOverlap, y = r + (o === 0 ? 1 : 2) * this.tileOverlap, v = l + (h === 0 ? 1 : 2) * this.tileOverlap, T = 1 / n.x;
        return y = Math.min(y, n.x - d), v = Math.min(v, n.y - f), i ? new e.Rect(0, 0, y, v) : new e.Rect(d * T, f * T, y * T, v * T);
      },
      /**
       * Responsible for retrieving, and caching the
       * image metadata pertinent to this TileSources implementation.
       * @function
       * @param {String} url
       * @throws {Error}
       */
      getImageInfo: function(s) {
        var o = this, h, i, n, r, l, d, f;
        s && (l = s.split("/"), d = l[l.length - 1], f = d.lastIndexOf("."), f > -1 && (l[l.length - 1] = d.slice(0, f)));
        var y = null;
        if (this.splitHashDataForPost) {
          var v = s.indexOf("#");
          v !== -1 && (y = s.substring(v + 1), s = s.substr(0, v));
        }
        i = function(T) {
          typeof T == "string" && (T = e.parseXml(T));
          var w = e.TileSource.determineType(o, T, s);
          if (!w) {
            o.raiseEvent("open-failed", { message: "Unable to load TileSource", source: s });
            return;
          }
          r = w.prototype.configure.apply(o, [T, s, y]), r.ajaxWithCredentials === void 0 && (r.ajaxWithCredentials = o.ajaxWithCredentials), n = new w(r), o.ready = !0, o.raiseEvent("ready", { tileSource: n });
        }, s.match(/\.js$/) ? (h = s.split("/").pop().replace(".js", ""), e.jsonp({
          url: s,
          async: !1,
          callbackName: h,
          callback: i
        })) : e.makeAjaxRequest({
          url: s,
          postData: y,
          withCredentials: this.ajaxWithCredentials,
          headers: this.ajaxHeaders,
          success: function(T) {
            var w = t(T);
            i(w);
          },
          error: function(T, w) {
            var x;
            try {
              x = "HTTP " + T.status + " attempting to load TileSource: " + s;
            } catch {
              var _;
              typeof w > "u" || !w.toString ? _ = "Unknown error" : _ = w.toString(), x = _ + " attempting to load TileSource: " + s;
            }
            e.console.error(x), o.raiseEvent("open-failed", {
              message: x,
              source: s,
              postData: y
            });
          }
        });
      },
      /**
       * Responsible determining if a the particular TileSource supports the
       * data format ( and allowed to apply logic against the url the data was
       * loaded from, if any ). Overriding implementations are expected to do
       * something smart with data and / or url to determine support.  Also
       * understand that iteration order of TileSources is not guarunteed so
       * please make sure your data or url is expressive enough to ensure a simple
       * and sufficient mechanisim for clear determination.
       * @function
       * @param {String|Object|Array|Document} data
       * @param {String} url - the url the data was loaded
       *      from if any.
       * @return {Boolean}
       */
      supports: function(s, o) {
        return !1;
      },
      /**
       * Responsible for parsing and configuring the
       * image metadata pertinent to this TileSources implementation.
       * This method is not implemented by this class other than to throw an Error
       * announcing you have to implement it.  Because of the variety of tile
       * server technologies, and various specifications for building image
       * pyramids, this method is here to allow easy integration.
       * @function
       * @param {String|Object|Array|Document} data
       * @param {String} url - the url the data was loaded
       *      from if any.
       * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null value obtained from
       *      the protocol URL after '#' sign if flag splitHashDataForPost set to 'true'
       * @return {Object} options - A dictionary of keyword arguments sufficient
       *      to configure the tile source constructor (include all values you want to
       *      instantiate the TileSource subclass with - what _options_ object should contain).
       * @throws {Error}
       */
      configure: function(s, o, h) {
        throw new Error("Method not implemented.");
      },
      /**
       * Responsible for retrieving the url which will return an image for the
       * region specified by the given x, y, and level components.
       * This method is not implemented by this class other than to throw an Error
       * announcing you have to implement it.  Because of the variety of tile
       * server technologies, and various specifications for building image
       * pyramids, this method is here to allow easy integration.
       * @function
       * @param {Number} level
       * @param {Number} x
       * @param {Number} y
       * @throws {Error}
       */
      getTileUrl: function(s, o, h) {
        throw new Error("Method not implemented.");
      },
      /**
       * Must use AJAX in order to work, i.e. loadTilesWithAjax = true is set.
       * If a value is returned, ajax issues POST request to the tile url.
       * If null is returned, ajax issues GET request.
       * The return value must comply to the header 'content type'.
       *
       * Examples (USED HEADER --> getTilePostData CODE):
       * 'Content-type': 'application/x-www-form-urlencoded' -->
       *   return "key1=value=1&key2=value2";
       *
       * 'Content-type': 'application/x-www-form-urlencoded' -->
       *   return JSON.stringify({key: "value", number: 5});
       *
       * 'Content-type': 'multipart/form-data' -->
       *   let result = new FormData();
       *   result.append("data", myData);
       *   return result;
       *
       * IMPORTANT: in case you move all the logic on image fetching
       * to post data, you must re-define 'getTileHashKey(...)' to
       * stay unique for different tile images.
       *
       * @param {Number} level
       * @param {Number} x
       * @param {Number} y
       * @return {*|null} post data to send with tile configuration request
       */
      getTilePostData: function(s, o, h) {
        return null;
      },
      /**
       * Responsible for retrieving the headers which will be attached to the image request for the
       * region specified by the given x, y, and level components.
       * This option is only relevant if {@link OpenSeadragon.Options}.loadTilesWithAjax is set to true.
       * The headers returned here will override headers specified at the Viewer or TiledImage level.
       * Specifying a falsy value for a header will clear its existing value set at the Viewer or
       * TiledImage level (if any).
       * @function
       * @param {Number} level
       * @param {Number} x
       * @param {Number} y
       * @returns {Object}
       */
      getTileAjaxHeaders: function(s, o, h) {
        return {};
      },
      /**
       * The tile cache object is uniquely determined by this key and used to lookup
       * the image data in cache: keys should be different if images are different.
       *
       * In case a tile has context2D property defined (TileSource.prototype.getContext2D)
       * or its context2D is set manually; the cache is not used and this function
       * is irrelevant.
       * Note: default behaviour does not take into account post data.
       * @param {Number} level tile level it was fetched with
       * @param {Number} x x-coordinate in the pyramid level
       * @param {Number} y y-coordinate in the pyramid level
       * @param {String} url the tile was fetched with
       * @param {Object} ajaxHeaders the tile was fetched with
       * @param {*} postData data the tile was fetched with (type depends on getTilePostData(..) return type)
       */
      getTileHashKey: function(s, o, h, i, n, r) {
        return n ? i + "+" + JSON.stringify(n) : i;
      },
      /**
       * @function
       * @param {Number} level
       * @param {Number} x
       * @param {Number} y
       */
      tileExists: function(s, o, h) {
        var i = this.getNumTiles(s);
        return s >= this.minLevel && s <= this.maxLevel && o >= 0 && h >= 0 && o < i.x && h < i.y;
      }
    }, e.extend(!0, e.TileSource.prototype, e.EventSource.prototype);
    function t(s) {
      var o = s.responseText, h = s.status, i, n;
      if (s) {
        if (s.status !== 200 && s.status !== 0)
          throw h = s.status, i = h === 404 ? "Not Found" : s.statusText, new Error(e.getString("Errors.Status", h, i));
      } else
        throw new Error(e.getString("Errors.Security"));
      if (o.match(/\s*<.*/))
        try {
          n = s.responseXML && s.responseXML.documentElement ? s.responseXML : e.parseXml(o);
        } catch {
          n = s.responseText;
        }
      else if (o.match(/\s*[{[].*/))
        try {
          n = e.parseJSON(o);
        } catch {
          n = o;
        }
      else
        n = o;
      return n;
    }
    e.TileSource.determineType = function(s, o, h) {
      var i;
      for (i in D)
        if (i.match(/.+TileSource$/) && e.isFunction(D[i]) && e.isFunction(D[i].prototype.supports) && D[i].prototype.supports.call(s, o, h))
          return D[i];
      return e.console.error("No TileSource was able to open %s %s", h, o), null;
    };
  }(D), function(e) {
    e.DziTileSource = function(o, h, i, n, r, l, d, f, y) {
      var v, T, w, x;
      if (e.isPlainObject(o) ? x = o : x = {
        width: arguments[0],
        height: arguments[1],
        tileSize: arguments[2],
        tileOverlap: arguments[3],
        tilesUrl: arguments[4],
        fileFormat: arguments[5],
        displayRects: arguments[6],
        minLevel: arguments[7],
        maxLevel: arguments[8]
      }, this._levelRects = {}, this.tilesUrl = x.tilesUrl, this.fileFormat = x.fileFormat, this.displayRects = x.displayRects, this.displayRects)
        for (v = this.displayRects.length - 1; v >= 0; v--)
          for (T = this.displayRects[v], w = T.minLevel; w <= T.maxLevel; w++)
            this._levelRects[w] || (this._levelRects[w] = []), this._levelRects[w].push(T);
      e.TileSource.apply(this, [x]);
    }, e.extend(
      e.DziTileSource.prototype,
      e.TileSource.prototype,
      /** @lends OpenSeadragon.DziTileSource.prototype */
      {
        /**
         * Determine if the data and/or url imply the image service is supported by
         * this tile source.
         * @function
         * @param {Object|Array} data
         * @param {String} optional - url
         */
        supports: function(o, h) {
          var i;
          return o.Image ? i = o.Image.xmlns : o.documentElement && (o.documentElement.localName === "Image" || o.documentElement.tagName === "Image") && (i = o.documentElement.namespaceURI), i = (i || "").toLowerCase(), i.indexOf("schemas.microsoft.com/deepzoom/2008") !== -1 || i.indexOf("schemas.microsoft.com/deepzoom/2009") !== -1;
        },
        /**
         *
         * @function
         * @param {Object|XMLDocument} data - the raw configuration
         * @param {String} url - the url the data was retrieved from if any.
         * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
         * @return {Object} options - A dictionary of keyword arguments sufficient
         *      to configure this tile sources constructor.
         */
        configure: function(o, h, i) {
          var n;
          return e.isPlainObject(o) ? n = s(this, o) : n = t(this, o), h && !n.tilesUrl && (n.tilesUrl = h.replace(
            /([^/]+?)(\.(dzi|xml|js)?(\?[^/]*)?)?\/?$/,
            "$1_files/"
          ), h.search(/\.(dzi|xml|js)\?/) !== -1 ? n.queryParams = h.match(/\?.*/) : n.queryParams = ""), n;
        },
        /**
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         */
        getTileUrl: function(o, h, i) {
          return [this.tilesUrl, o, "/", h, "_", i, ".", this.fileFormat, this.queryParams].join("");
        },
        /**
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         */
        tileExists: function(o, h, i) {
          var n = this._levelRects[o], r, l, d, f, y, v, T;
          if (this.minLevel && o < this.minLevel || this.maxLevel && o > this.maxLevel)
            return !1;
          if (!n || !n.length)
            return !0;
          for (T = n.length - 1; T >= 0; T--)
            if (r = n[T], !(o < r.minLevel || o > r.maxLevel) && (l = this.getLevelScale(o), d = r.x * l, f = r.y * l, y = d + r.width * l, v = f + r.height * l, d = Math.floor(d / this._tileWidth), f = Math.floor(f / this._tileWidth), y = Math.ceil(y / this._tileWidth), v = Math.ceil(v / this._tileWidth), d <= h && h < y && f <= i && i < v))
              return !0;
          return !1;
        }
      }
    );
    function t(o, h) {
      if (!h || !h.documentElement)
        throw new Error(e.getString("Errors.Xml"));
      var i = h.documentElement, n = i.localName || i.tagName, r = h.documentElement.namespaceURI, l = null, d = [], f, y, v, T, w;
      if (n === "Image")
        try {
          if (T = i.getElementsByTagName("Size")[0], T === void 0 && (T = i.getElementsByTagNameNS(r, "Size")[0]), l = {
            Image: {
              xmlns: "http://schemas.microsoft.com/deepzoom/2008",
              Url: i.getAttribute("Url"),
              Format: i.getAttribute("Format"),
              DisplayRect: null,
              Overlap: parseInt(i.getAttribute("Overlap"), 10),
              TileSize: parseInt(i.getAttribute("TileSize"), 10),
              Size: {
                Height: parseInt(T.getAttribute("Height"), 10),
                Width: parseInt(T.getAttribute("Width"), 10)
              }
            }
          }, !e.imageFormatSupported(l.Image.Format))
            throw new Error(
              e.getString("Errors.ImageFormat", l.Image.Format.toUpperCase())
            );
          for (f = i.getElementsByTagName("DisplayRect"), f === void 0 && (f = i.getElementsByTagNameNS(r, "DisplayRect")[0]), w = 0; w < f.length; w++)
            y = f[w], v = y.getElementsByTagName("Rect")[0], v === void 0 && (v = y.getElementsByTagNameNS(r, "Rect")[0]), d.push({
              Rect: {
                X: parseInt(v.getAttribute("X"), 10),
                Y: parseInt(v.getAttribute("Y"), 10),
                Width: parseInt(v.getAttribute("Width"), 10),
                Height: parseInt(v.getAttribute("Height"), 10),
                MinLevel: parseInt(y.getAttribute("MinLevel"), 10),
                MaxLevel: parseInt(y.getAttribute("MaxLevel"), 10)
              }
            });
          return d.length && (l.Image.DisplayRect = d), s(o, l);
        } catch (b) {
          throw b instanceof Error ? b : new Error(e.getString("Errors.Dzi"));
        }
      else {
        if (n === "Collection")
          throw new Error(e.getString("Errors.Dzc"));
        if (n === "Error") {
          var x = i.getElementsByTagName("Message")[0], _ = x.firstChild.nodeValue;
          throw new Error(_);
        }
      }
      throw new Error(e.getString("Errors.Dzi"));
    }
    function s(o, h) {
      var i = h.Image, n = i.Url, r = i.Format, l = i.Size, d = i.DisplayRect || [], f = parseInt(l.Width, 10), y = parseInt(l.Height, 10), v = parseInt(i.TileSize, 10), T = parseInt(i.Overlap, 10), w = [], x, _;
      for (_ = 0; _ < d.length; _++)
        x = d[_].Rect, w.push(new e.DisplayRect(
          parseInt(x.X, 10),
          parseInt(x.Y, 10),
          parseInt(x.Width, 10),
          parseInt(x.Height, 10),
          parseInt(x.MinLevel, 10),
          parseInt(x.MaxLevel, 10)
        ));
      return e.extend(!0, {
        width: f,
        /* width *required */
        height: y,
        /* height *required */
        tileSize: v,
        /* tileSize *required */
        tileOverlap: T,
        /* tileOverlap *required */
        minLevel: null,
        /* minLevel */
        maxLevel: null,
        /* maxLevel */
        tilesUrl: n,
        /* tilesUrl */
        fileFormat: r,
        /* fileFormat */
        displayRects: w
        /* displayRects */
      }, h);
    }
  }(D), function(e) {
    e.IIIFTileSource = function(i) {
      if (e.extend(!0, this, i), !(this.height && this.width && this["@id"]))
        throw new Error("IIIF required parameters not provided.");
      if (i.tileSizePerScaleFactor = {}, this.tileFormat = this.tileFormat || "jpg", this.version = i.version, this.tile_width && this.tile_height)
        i.tileWidth = this.tile_width, i.tileHeight = this.tile_height;
      else if (this.tile_width)
        i.tileSize = this.tile_width;
      else if (this.tile_height)
        i.tileSize = this.tile_height;
      else if (this.tiles)
        if (this.tiles.length === 1)
          i.tileWidth = this.tiles[0].width, i.tileHeight = this.tiles[0].height || this.tiles[0].width, this.scale_factors = this.tiles[0].scaleFactors;
        else {
          this.scale_factors = [];
          for (var n = 0; n < this.tiles.length; n++)
            for (var r = 0; r < this.tiles[n].scaleFactors.length; r++) {
              var l = this.tiles[n].scaleFactors[r];
              this.scale_factors.push(l), i.tileSizePerScaleFactor[l] = {
                width: this.tiles[n].width,
                height: this.tiles[n].height || this.tiles[n].width
              };
            }
        }
      else if (t(i)) {
        for (var d = Math.min(this.height, this.width), f = [256, 512, 1024], y = [], v = 0; v < f.length; v++)
          f[v] <= d && y.push(f[v]);
        y.length > 0 ? i.tileSize = Math.max.apply(null, y) : i.tileSize = d;
      } else
        this.sizes && this.sizes.length > 0 ? (this.emulateLegacyImagePyramid = !0, i.levels = s(this), e.extend(!0, i, {
          width: i.levels[i.levels.length - 1].width,
          height: i.levels[i.levels.length - 1].height,
          tileSize: Math.max(i.height, i.width),
          tileOverlap: 0,
          minLevel: 0,
          maxLevel: i.levels.length - 1
        }), this.levels = i.levels) : e.console.error("Nothing in the info.json to construct image pyramids from");
      if (!i.maxLevel && !this.emulateLegacyImagePyramid)
        if (!this.scale_factors)
          i.maxLevel = Number(Math.ceil(Math.log(Math.max(this.width, this.height), 2)));
        else {
          var T = Math.max.apply(null, this.scale_factors);
          i.maxLevel = Math.round(Math.log(T) * Math.LOG2E);
        }
      e.TileSource.apply(this, [i]);
    }, e.extend(
      e.IIIFTileSource.prototype,
      e.TileSource.prototype,
      /** @lends OpenSeadragon.IIIFTileSource.prototype */
      {
        /**
         * Determine if the data and/or url imply the image service is supported by
         * this tile source.
         * @function
         * @param {Object|Array} data
         * @param {String} optional - url
         */
        supports: function(i, n) {
          return i.protocol && i.protocol === "http://iiif.io/api/image" || i["@context"] && (i["@context"] === "http://library.stanford.edu/iiif/image-api/1.1/context.json" || i["@context"] === "http://iiif.io/api/image/1/context.json") || i.profile && i.profile.indexOf("http://library.stanford.edu/iiif/image-api/compliance.html") === 0 || i.identifier && i.width && i.height ? !0 : !!(i.documentElement && i.documentElement.tagName === "info" && i.documentElement.namespaceURI === "http://library.stanford.edu/iiif/image-api/ns/");
        },
        /**
         *
         * @function
         * @param {Object} data - the raw configuration
         * @param {String} url - the url configuration was retrieved from
         * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
         * @example <caption>IIIF 1.1 Info Looks like this</caption>
         * {
         *   "@context" : "http://library.stanford.edu/iiif/image-api/1.1/context.json",
         *   "@id" : "http://iiif.example.com/prefix/1E34750D-38DB-4825-A38A-B60A345E591C",
         *   "width" : 6000,
         *   "height" : 4000,
         *   "scale_factors" : [ 1, 2, 4 ],
         *   "tile_width" : 1024,
         *   "tile_height" : 1024,
         *   "formats" : [ "jpg", "png" ],
         *   "qualities" : [ "native", "grey" ],
         *   "profile" : "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0"
         * }
         */
        configure: function(i, n, r) {
          if (e.isPlainObject(i)) {
            if (!i["@context"])
              i["@context"] = "http://iiif.io/api/image/1.0/context.json", i["@id"] = n.replace("/info.json", ""), i.version = 1;
            else {
              var d = i["@context"];
              if (Array.isArray(d)) {
                for (var f = 0; f < d.length; f++)
                  if (typeof d[f] == "string" && (/^http:\/\/iiif\.io\/api\/image\/[1-3]\/context\.json$/.test(d[f]) || d[f] === "http://library.stanford.edu/iiif/image-api/1.1/context.json")) {
                    d = d[f];
                    break;
                  }
              }
              switch (d) {
                case "http://iiif.io/api/image/1/context.json":
                case "http://library.stanford.edu/iiif/image-api/1.1/context.json":
                  i.version = 1;
                  break;
                case "http://iiif.io/api/image/2/context.json":
                  i.version = 2;
                  break;
                case "http://iiif.io/api/image/3/context.json":
                  i.version = 3;
                  break;
                default:
                  e.console.error("Data has a @context property which contains no known IIIF context URI.");
              }
            }
            if (!i["@id"] && i.id && (i["@id"] = i.id), i.preferredFormats) {
              for (var y = 0; y < i.preferredFormats.length; y++)
                if (D.imageFormatSupported(i.preferredFormats[y])) {
                  i.tileFormat = i.preferredFormats[y];
                  break;
                }
            }
            return i;
          } else {
            var l = o(i);
            return l["@context"] = "http://iiif.io/api/image/1.0/context.json", l["@id"] = n.replace("/info.xml", ""), l.version = 1, l;
          }
        },
        /**
         * Return the tileWidth for the given level.
         * @function
         * @param {Number} level
         */
        getTileWidth: function(i) {
          if (this.emulateLegacyImagePyramid)
            return e.TileSource.prototype.getTileWidth.call(this, i);
          var n = Math.pow(2, this.maxLevel - i);
          return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[n] ? this.tileSizePerScaleFactor[n].width : this._tileWidth;
        },
        /**
         * Return the tileHeight for the given level.
         * @function
         * @param {Number} level
         */
        getTileHeight: function(i) {
          if (this.emulateLegacyImagePyramid)
            return e.TileSource.prototype.getTileHeight.call(this, i);
          var n = Math.pow(2, this.maxLevel - i);
          return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[n] ? this.tileSizePerScaleFactor[n].height : this._tileHeight;
        },
        /**
         * @function
         * @param {Number} level
         */
        getLevelScale: function(i) {
          if (this.emulateLegacyImagePyramid) {
            var n = NaN;
            return this.levels.length > 0 && i >= this.minLevel && i <= this.maxLevel && (n = this.levels[i].width / this.levels[this.maxLevel].width), n;
          }
          return e.TileSource.prototype.getLevelScale.call(this, i);
        },
        /**
         * @function
         * @param {Number} level
         */
        getNumTiles: function(i) {
          if (this.emulateLegacyImagePyramid) {
            var n = this.getLevelScale(i);
            return n ? new e.Point(1, 1) : new e.Point(0, 0);
          }
          return e.TileSource.prototype.getNumTiles.call(this, i);
        },
        /**
         * @function
         * @param {Number} level
         * @param {OpenSeadragon.Point} point
         */
        getTileAtPoint: function(i, n) {
          return this.emulateLegacyImagePyramid ? new e.Point(0, 0) : e.TileSource.prototype.getTileAtPoint.call(this, i, n);
        },
        /**
         * Responsible for retrieving the url which will return an image for the
         * region specified by the given x, y, and level components.
         * @function
         * @param {Number} level - z index
         * @param {Number} x
         * @param {Number} y
         * @throws {Error}
         */
        getTileUrl: function(i, n, r) {
          if (this.emulateLegacyImagePyramid) {
            var l = null;
            return this.levels.length > 0 && i >= this.minLevel && i <= this.maxLevel && (l = this.levels[i].url), l;
          }
          var d = "0", f = Math.pow(0.5, this.maxLevel - i), y = Math.ceil(this.width * f), v = Math.ceil(this.height * f), T, w, x, _, b, N, G, A, W, M, j, $, Y, K;
          return T = this.getTileWidth(i), w = this.getTileHeight(i), x = Math.ceil(T / f), _ = Math.ceil(w / f), this.version === 1 ? Y = "native." + this.tileFormat : Y = "default." + this.tileFormat, y < T && v < w ? (this.version === 2 && y === this.width ? M = "full" : this.version === 3 && y === this.width && v === this.height ? M = "max" : this.version === 3 ? M = y + "," + v : M = y + ",", b = "full") : (N = n * x, G = r * _, A = Math.min(x, this.width - N), W = Math.min(_, this.height - G), n === 0 && r === 0 && A === this.width && W === this.height ? b = "full" : b = [N, G, A, W].join(","), j = Math.ceil(A * f), $ = Math.ceil(W * f), this.version === 2 && j === this.width ? M = "full" : this.version === 3 && j === this.width && $ === this.height ? M = "max" : this.version === 3 ? M = j + "," + $ : M = j + ","), K = [this["@id"], b, M, d, Y].join("/"), K;
        },
        __testonly__: {
          canBeTiled: t,
          constructLevels: s
        }
      }
    );
    function t(i) {
      var n = [
        "http://library.stanford.edu/iiif/image-api/compliance.html#level0",
        "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0",
        "http://iiif.io/api/image/2/level0.json",
        "level0",
        "https://iiif.io/api/image/3/level0.json"
      ], r = Array.isArray(i.profile) ? i.profile[0] : i.profile, l = n.indexOf(r) !== -1, d = !1;
      return i.version === 2 && i.profile.length > 1 && i.profile[1].supports && (d = i.profile[1].supports.indexOf("sizeByW") !== -1), i.version === 3 && i.extraFeatures && (d = i.extraFeatures.indexOf("sizeByWh") !== -1), !l || d;
    }
    function s(i) {
      for (var n = [], r = 0; r < i.sizes.length; r++)
        n.push({
          url: i["@id"] + "/full/" + i.sizes[r].width + "," + (i.version === 3 ? i.sizes[r].height : "") + "/0/default." + i.tileFormat,
          width: i.sizes[r].width,
          height: i.sizes[r].height
        });
      return n.sort(function(l, d) {
        return l.width - d.width;
      });
    }
    function o(i) {
      if (!i || !i.documentElement)
        throw new Error(e.getString("Errors.Xml"));
      var n = i.documentElement, r = n.tagName, l = null;
      if (r === "info")
        try {
          return l = {}, h(n, l), l;
        } catch (d) {
          throw d instanceof Error ? d : new Error(e.getString("Errors.IIIF"));
        }
      throw new Error(e.getString("Errors.IIIF"));
    }
    function h(i, n, r) {
      var l, d;
      if (i.nodeType === 3 && r)
        d = i.nodeValue.trim(), d.match(/^\d*$/) && (d = Number(d)), n[r] ? (e.isArray(n[r]) || (n[r] = [n[r]]), n[r].push(d)) : n[r] = d;
      else if (i.nodeType === 1)
        for (l = 0; l < i.childNodes.length; l++)
          h(i.childNodes[l], n, i.nodeName);
    }
  }(D), function(e) {
    e.OsmTileSource = function(t, s, o, h, i) {
      var n;
      e.isPlainObject(t) ? n = t : n = {
        width: arguments[0],
        height: arguments[1],
        tileSize: arguments[2],
        tileOverlap: arguments[3],
        tilesUrl: arguments[4]
      }, (!n.width || !n.height) && (n.width = 65572864, n.height = 65572864), n.tileSize || (n.tileSize = 256, n.tileOverlap = 0), n.tilesUrl || (n.tilesUrl = "http://tile.openstreetmap.org/"), n.minLevel = 8, e.TileSource.apply(this, [n]);
    }, e.extend(
      e.OsmTileSource.prototype,
      e.TileSource.prototype,
      /** @lends OpenSeadragon.OsmTileSource.prototype */
      {
        /**
         * Determine if the data and/or url imply the image service is supported by
         * this tile source.
         * @function
         * @param {Object|Array} data
         * @param {String} optional - url
         */
        supports: function(t, s) {
          return t.type && t.type === "openstreetmaps";
        },
        /**
         *
         * @function
         * @param {Object} data - the raw configuration
         * @param {String} url - the url the data was retrieved from if any.
         * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
         * @return {Object} options - A dictionary of keyword arguments sufficient
         *      to configure this tile sources constructor.
         */
        configure: function(t, s, o) {
          return t;
        },
        /**
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         */
        getTileUrl: function(t, s, o) {
          return this.tilesUrl + (t - 8) + "/" + s + "/" + o + ".png";
        }
      }
    );
  }(D), function(e) {
    e.TmsTileSource = function(t, s, o, h, i) {
      var n;
      e.isPlainObject(t) ? n = t : n = {
        width: arguments[0],
        height: arguments[1],
        tileSize: arguments[2],
        tileOverlap: arguments[3],
        tilesUrl: arguments[4]
      };
      var r = Math.ceil(n.width / 256) * 256, l = Math.ceil(n.height / 256) * 256, d;
      r > l ? d = r / 256 : d = l / 256, n.maxLevel = Math.ceil(Math.log(d) / Math.log(2)) - 1, n.tileSize = 256, n.width = r, n.height = l, e.TileSource.apply(this, [n]);
    }, e.extend(
      e.TmsTileSource.prototype,
      e.TileSource.prototype,
      /** @lends OpenSeadragon.TmsTileSource.prototype */
      {
        /**
         * Determine if the data and/or url imply the image service is supported by
         * this tile source.
         * @function
         * @param {Object|Array} data
         * @param {String} optional - url
         */
        supports: function(t, s) {
          return t.type && t.type === "tiledmapservice";
        },
        /**
         *
         * @function
         * @param {Object} data - the raw configuration
         * @param {String} url - the url the data was retrieved from if any.
         * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
         * @return {Object} options - A dictionary of keyword arguments sufficient
         *      to configure this tile sources constructor.
         */
        configure: function(t, s, o) {
          return t;
        },
        /**
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         */
        getTileUrl: function(t, s, o) {
          var h = this.getNumTiles(t).y - 1;
          return this.tilesUrl + t + "/" + s + "/" + (h - o) + ".png";
        }
      }
    );
  }(D), function(e) {
    e.ZoomifyTileSource = function(t) {
      typeof t.tileSize > "u" && (t.tileSize = 256), typeof t.fileFormat > "u" && (t.fileFormat = "jpg", this.fileFormat = t.fileFormat);
      var s = {
        x: t.width,
        y: t.height
      };
      for (t.imageSizes = [{
        x: t.width,
        y: t.height
      }], t.gridSize = [this._getGridSize(t.width, t.height, t.tileSize)]; parseInt(s.x, 10) > t.tileSize || parseInt(s.y, 10) > t.tileSize; )
        s.x = Math.floor(s.x / 2), s.y = Math.floor(s.y / 2), t.imageSizes.push({
          x: s.x,
          y: s.y
        }), t.gridSize.push(this._getGridSize(s.x, s.y, t.tileSize));
      t.imageSizes.reverse(), t.gridSize.reverse(), t.minLevel = 0, t.maxLevel = t.gridSize.length - 1, D.TileSource.apply(this, [t]);
    }, e.extend(
      e.ZoomifyTileSource.prototype,
      e.TileSource.prototype,
      /** @lends OpenSeadragon.ZoomifyTileSource.prototype */
      {
        //private
        _getGridSize: function(t, s, o) {
          return {
            x: Math.ceil(t / o),
            y: Math.ceil(s / o)
          };
        },
        //private
        _calculateAbsoluteTileNumber: function(t, s, o) {
          for (var h = 0, i = {}, n = 0; n < t; n++)
            i = this.gridSize[n], h += i.x * i.y;
          return i = this.gridSize[t], h += i.x * o + s, h;
        },
        /**
         * Determine if the data and/or url imply the image service is supported by
         * this tile source.
         * @function
         * @param {Object|Array} data
         * @param {String} optional - url
         */
        supports: function(t, s) {
          return t.type && t.type === "zoomifytileservice";
        },
        /**
         *
         * @function
         * @param {Object} data - the raw configuration
         * @param {String} url - the url the data was retrieved from if any.
         * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
         * @return {Object} options - A dictionary of keyword arguments sufficient
         *      to configure this tile sources constructor.
         */
        configure: function(t, s, o) {
          return t;
        },
        /**
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         */
        getTileUrl: function(t, s, o) {
          var h = 0, i = this._calculateAbsoluteTileNumber(t, s, o);
          return h = Math.floor(i / 256), this.tilesUrl + "TileGroup" + h + "/" + t + "-" + s + "-" + o + "." + this.fileFormat;
        }
      }
    );
  }(D), function(e) {
    e.LegacyTileSource = function(h) {
      var i, n, r;
      e.isArray(h) && (i = {
        type: "legacy-image-pyramid",
        levels: h
      }), i.levels = t(i.levels), i.levels.length > 0 ? (n = i.levels[i.levels.length - 1].width, r = i.levels[i.levels.length - 1].height) : (n = 0, r = 0, e.console.error("No supported image formats found")), e.extend(!0, i, {
        width: n,
        height: r,
        tileSize: Math.max(r, n),
        tileOverlap: 0,
        minLevel: 0,
        maxLevel: i.levels.length > 0 ? i.levels.length - 1 : 0
      }), e.TileSource.apply(this, [i]), this.levels = i.levels;
    }, e.extend(
      e.LegacyTileSource.prototype,
      e.TileSource.prototype,
      /** @lends OpenSeadragon.LegacyTileSource.prototype */
      {
        /**
         * Determine if the data and/or url imply the image service is supported by
         * this tile source.
         * @function
         * @param {Object|Array} data
         * @param {String} optional - url
         */
        supports: function(h, i) {
          return h.type && h.type === "legacy-image-pyramid" || h.documentElement && h.documentElement.getAttribute("type") === "legacy-image-pyramid";
        },
        /**
         *
         * @function
         * @param {Object|XMLDocument} configuration - the raw configuration
         * @param {String} dataUrl - the url the data was retrieved from if any.
         * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
         * @return {Object} options - A dictionary of keyword arguments sufficient
         *      to configure this tile sources constructor.
         */
        configure: function(h, i, n) {
          var r;
          return e.isPlainObject(h) ? r = o(this, h) : r = s(this, h), r;
        },
        /**
         * @function
         * @param {Number} level
         */
        getLevelScale: function(h) {
          var i = NaN;
          return this.levels.length > 0 && h >= this.minLevel && h <= this.maxLevel && (i = this.levels[h].width / this.levels[this.maxLevel].width), i;
        },
        /**
         * @function
         * @param {Number} level
         */
        getNumTiles: function(h) {
          var i = this.getLevelScale(h);
          return i ? new e.Point(1, 1) : new e.Point(0, 0);
        },
        /**
         * This method is not implemented by this class other than to throw an Error
         * announcing you have to implement it.  Because of the variety of tile
         * server technologies, and various specifications for building image
         * pyramids, this method is here to allow easy integration.
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         * @throws {Error}
         */
        getTileUrl: function(h, i, n) {
          var r = null;
          return this.levels.length > 0 && h >= this.minLevel && h <= this.maxLevel && (r = this.levels[h].url), r;
        }
      }
    );
    function t(h) {
      var i = [], n, r;
      for (r = 0; r < h.length; r++)
        n = h[r], n.height && n.width && n.url ? i.push({
          url: n.url,
          width: Number(n.width),
          height: Number(n.height)
        }) : e.console.error("Unsupported image format: %s", n.url ? n.url : "<no URL>");
      return i.sort(function(l, d) {
        return l.height - d.height;
      });
    }
    function s(h, i) {
      if (!i || !i.documentElement)
        throw new Error(e.getString("Errors.Xml"));
      var n = i.documentElement, r = n.tagName, l = null, d = [], f, y;
      if (r === "image")
        try {
          for (l = {
            type: n.getAttribute("type"),
            levels: []
          }, d = n.getElementsByTagName("level"), y = 0; y < d.length; y++)
            f = d[y], l.levels.push({
              url: f.getAttribute("url"),
              width: parseInt(f.getAttribute("width"), 10),
              height: parseInt(f.getAttribute("height"), 10)
            });
          return o(h, l);
        } catch (v) {
          throw v instanceof Error ? v : new Error("Unknown error parsing Legacy Image Pyramid XML.");
        }
      else {
        if (r === "collection")
          throw new Error("Legacy Image Pyramid Collections not yet supported.");
        if (r === "error")
          throw new Error("Error: " + i);
      }
      throw new Error("Unknown element " + r);
    }
    function o(h, i) {
      return i.levels;
    }
  }(D), function(e) {
    e.ImageTileSource = function(t) {
      t = e.extend({
        buildPyramid: !0,
        crossOriginPolicy: !1,
        ajaxWithCredentials: !1,
        useCanvas: !0
      }, t), e.TileSource.apply(this, [t]);
    }, e.extend(
      e.ImageTileSource.prototype,
      e.TileSource.prototype,
      /** @lends OpenSeadragon.ImageTileSource.prototype */
      {
        /**
         * Determine if the data and/or url imply the image service is supported by
         * this tile source.
         * @function
         * @param {Object|Array} data
         * @param {String} optional - url
         */
        supports: function(t, s) {
          return t.type && t.type === "image";
        },
        /**
         *
         * @function
         * @param {Object} options - the options
         * @param {String} dataUrl - the url the image was retrieved from, if any.
         * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
         * @return {Object} options - A dictionary of keyword arguments sufficient
         *      to configure this tile sources constructor.
         */
        configure: function(t, s, o) {
          return t;
        },
        /**
         * Responsible for retrieving, and caching the
         * image metadata pertinent to this TileSources implementation.
         * @function
         * @param {String} url
         * @throws {Error}
         */
        getImageInfo: function(t) {
          var s = this._image = new Image(), o = this;
          this.crossOriginPolicy && (s.crossOrigin = this.crossOriginPolicy), this.ajaxWithCredentials && (s.useCredentials = this.ajaxWithCredentials), e.addEvent(s, "load", function() {
            o.width = s.naturalWidth, o.height = s.naturalHeight, o.aspectRatio = o.width / o.height, o.dimensions = new e.Point(o.width, o.height), o._tileWidth = o.width, o._tileHeight = o.height, o.tileOverlap = 0, o.minLevel = 0, o.levels = o._buildLevels(), o.maxLevel = o.levels.length - 1, o.ready = !0, o.raiseEvent("ready", { tileSource: o });
          }), e.addEvent(s, "error", function() {
            o.raiseEvent("open-failed", {
              message: "Error loading image at " + t,
              source: t
            });
          }), s.src = t;
        },
        /**
         * @function
         * @param {Number} level
         */
        getLevelScale: function(t) {
          var s = NaN;
          return t >= this.minLevel && t <= this.maxLevel && (s = this.levels[t].width / this.levels[this.maxLevel].width), s;
        },
        /**
         * @function
         * @param {Number} level
         */
        getNumTiles: function(t) {
          var s = this.getLevelScale(t);
          return s ? new e.Point(1, 1) : new e.Point(0, 0);
        },
        /**
         * Retrieves a tile url
         * @function
         * @param {Number} level Level of the tile
         * @param {Number} x x coordinate of the tile
         * @param {Number} y y coordinate of the tile
         */
        getTileUrl: function(t, s, o) {
          var h = null;
          return t >= this.minLevel && t <= this.maxLevel && (h = this.levels[t].url), h;
        },
        /**
         * Retrieves a tile context 2D
         * @function
         * @param {Number} level Level of the tile
         * @param {Number} x x coordinate of the tile
         * @param {Number} y y coordinate of the tile
         */
        getContext2D: function(t, s, o) {
          var h = null;
          return t >= this.minLevel && t <= this.maxLevel && (h = this.levels[t].context2D), h;
        },
        /**
         * Destroys ImageTileSource
         * @function
         */
        destroy: function() {
          this._freeupCanvasMemory();
        },
        // private
        //
        // Builds the different levels of the pyramid if possible
        // (i.e. if canvas API enabled and no canvas tainting issue).
        _buildLevels: function() {
          var t = [{
            url: this._image.src,
            width: this._image.naturalWidth,
            height: this._image.naturalHeight
          }];
          if (!this.buildPyramid || !e.supportsCanvas || !this.useCanvas)
            return delete this._image, t;
          var s = this._image.naturalWidth, o = this._image.naturalHeight, h = document.createElement("canvas"), i = h.getContext("2d");
          if (h.width = s, h.height = o, i.drawImage(this._image, 0, 0, s, o), t[0].context2D = i, delete this._image, e.isCanvasTainted(h))
            return t;
          for (; s >= 2 && o >= 2; ) {
            s = Math.floor(s / 2), o = Math.floor(o / 2);
            var n = document.createElement("canvas"), r = n.getContext("2d");
            n.width = s, n.height = o, r.drawImage(h, 0, 0, s, o), t.splice(0, 0, {
              context2D: r,
              width: s,
              height: o
            }), h = n, i = r;
          }
          return t;
        },
        /**
         * Free up canvas memory
         * (iOS 12 or higher on 2GB RAM device has only 224MB canvas memory,
         * and Safari keeps canvas until its height and width will be set to 0).
         * @function
         */
        _freeupCanvasMemory: function() {
          for (var t = 0; t < this.levels.length; t++)
            this.levels[t].context2D && (this.levels[t].context2D.canvas.height = 0, this.levels[t].context2D.canvas.width = 0);
        }
      }
    );
  }(D), function(e) {
    e.TileSourceCollection = function(t, s, o, h) {
      e.console.error("TileSourceCollection is deprecated; use World instead");
    };
  }(D), function(e) {
    e.ButtonState = {
      REST: 0,
      GROUP: 1,
      HOVER: 2,
      DOWN: 3
    }, e.Button = function(r) {
      var l = this;
      e.EventSource.call(this), e.extend(!0, this, {
        tooltip: null,
        srcRest: null,
        srcGroup: null,
        srcHover: null,
        srcDown: null,
        clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold,
        clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold,
        /**
         * How long to wait before fading.
         * @member {Number} fadeDelay
         * @memberof OpenSeadragon.Button#
         */
        fadeDelay: 0,
        /**
         * How long should it take to fade the button.
         * @member {Number} fadeLength
         * @memberof OpenSeadragon.Button#
         */
        fadeLength: 2e3,
        onPress: null,
        onRelease: null,
        onClick: null,
        onEnter: null,
        onExit: null,
        onFocus: null,
        onBlur: null,
        userData: null
      }, r), this.element = r.element || e.makeNeutralElement("div"), r.element || (this.imgRest = e.makeTransparentImage(this.srcRest), this.imgGroup = e.makeTransparentImage(this.srcGroup), this.imgHover = e.makeTransparentImage(this.srcHover), this.imgDown = e.makeTransparentImage(this.srcDown), this.imgRest.alt = this.imgGroup.alt = this.imgHover.alt = this.imgDown.alt = this.tooltip, e.setElementPointerEventsNone(this.imgRest), e.setElementPointerEventsNone(this.imgGroup), e.setElementPointerEventsNone(this.imgHover), e.setElementPointerEventsNone(this.imgDown), this.element.style.position = "relative", e.setElementTouchActionNone(this.element), this.imgGroup.style.position = this.imgHover.style.position = this.imgDown.style.position = "absolute", this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = "0px", this.imgGroup.style.left = this.imgHover.style.left = this.imgDown.style.left = "0px", this.imgHover.style.visibility = this.imgDown.style.visibility = "hidden", e.Browser.vendor === e.BROWSERS.FIREFOX && e.Browser.version < 3 && (this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = ""), this.element.appendChild(this.imgRest), this.element.appendChild(this.imgGroup), this.element.appendChild(this.imgHover), this.element.appendChild(this.imgDown)), this.addHandler("press", this.onPress), this.addHandler("release", this.onRelease), this.addHandler("click", this.onClick), this.addHandler("enter", this.onEnter), this.addHandler("exit", this.onExit), this.addHandler("focus", this.onFocus), this.addHandler("blur", this.onBlur), this.currentState = e.ButtonState.GROUP, this.fadeBeginTime = null, this.shouldFade = !1, this.element.style.display = "inline-block", this.element.style.position = "relative", this.element.title = this.tooltip, this.tracker = new e.MouseTracker({
        userData: "Button.tracker",
        element: this.element,
        clickTimeThreshold: this.clickTimeThreshold,
        clickDistThreshold: this.clickDistThreshold,
        enterHandler: function(d) {
          d.insideElementPressed ? (i(l, e.ButtonState.DOWN), l.raiseEvent("enter", { originalEvent: d.originalEvent })) : d.buttonDownAny || i(l, e.ButtonState.HOVER);
        },
        focusHandler: function(d) {
          l.tracker.enterHandler(d), l.raiseEvent("focus", { originalEvent: d.originalEvent });
        },
        leaveHandler: function(d) {
          n(l, e.ButtonState.GROUP), d.insideElementPressed && l.raiseEvent("exit", { originalEvent: d.originalEvent });
        },
        blurHandler: function(d) {
          l.tracker.leaveHandler(d), l.raiseEvent("blur", { originalEvent: d.originalEvent });
        },
        pressHandler: function(d) {
          i(l, e.ButtonState.DOWN), l.raiseEvent("press", { originalEvent: d.originalEvent });
        },
        releaseHandler: function(d) {
          d.insideElementPressed && d.insideElementReleased ? (n(l, e.ButtonState.HOVER), l.raiseEvent("release", { originalEvent: d.originalEvent })) : d.insideElementPressed ? n(l, e.ButtonState.GROUP) : i(l, e.ButtonState.HOVER);
        },
        clickHandler: function(d) {
          d.quick && l.raiseEvent("click", { originalEvent: d.originalEvent });
        },
        keyHandler: function(d) {
          d.keyCode === 13 ? (l.raiseEvent("click", { originalEvent: d.originalEvent }), l.raiseEvent("release", { originalEvent: d.originalEvent }), d.preventDefault = !0) : d.preventDefault = !1;
        }
      }), n(this, e.ButtonState.REST);
    }, e.extend(
      e.Button.prototype,
      e.EventSource.prototype,
      /** @lends OpenSeadragon.Button.prototype */
      {
        /**
         * Used by a button container element (e.g. a ButtonGroup) to transition the button state
         * to ButtonState.GROUP.
         * @function
         */
        notifyGroupEnter: function() {
          i(this, e.ButtonState.GROUP);
        },
        /**
         * Used by a button container element (e.g. a ButtonGroup) to transition the button state
         * to ButtonState.REST.
         * @function
         */
        notifyGroupExit: function() {
          n(this, e.ButtonState.REST);
        },
        /**
         * @function
         */
        disable: function() {
          this.notifyGroupExit(), this.element.disabled = !0, e.setElementOpacity(this.element, 0.2, !0);
        },
        /**
         * @function
         */
        enable: function() {
          this.element.disabled = !1, e.setElementOpacity(this.element, 1, !0), this.notifyGroupEnter();
        },
        destroy: function() {
          this.imgRest && (this.element.removeChild(this.imgRest), this.imgRest = null), this.imgGroup && (this.element.removeChild(this.imgGroup), this.imgGroup = null), this.imgHover && (this.element.removeChild(this.imgHover), this.imgHover = null), this.imgDown && (this.element.removeChild(this.imgDown), this.imgDown = null), this.removeAllHandlers(), this.tracker.destroy(), this.element = null;
        }
      }
    );
    function t(r) {
      e.requestAnimationFrame(function() {
        s(r);
      });
    }
    function s(r) {
      var l, d, f;
      r.shouldFade && (l = e.now(), d = l - r.fadeBeginTime, f = 1 - d / r.fadeLength, f = Math.min(1, f), f = Math.max(0, f), r.imgGroup && e.setElementOpacity(r.imgGroup, f, !0), f > 0 && t(r));
    }
    function o(r) {
      r.shouldFade = !0, r.fadeBeginTime = e.now() + r.fadeDelay, window.setTimeout(function() {
        t(r);
      }, r.fadeDelay);
    }
    function h(r) {
      r.shouldFade = !1, r.imgGroup && e.setElementOpacity(r.imgGroup, 1, !0);
    }
    function i(r, l) {
      r.element.disabled || (l >= e.ButtonState.GROUP && r.currentState === e.ButtonState.REST && (h(r), r.currentState = e.ButtonState.GROUP), l >= e.ButtonState.HOVER && r.currentState === e.ButtonState.GROUP && (r.imgHover && (r.imgHover.style.visibility = ""), r.currentState = e.ButtonState.HOVER), l >= e.ButtonState.DOWN && r.currentState === e.ButtonState.HOVER && (r.imgDown && (r.imgDown.style.visibility = ""), r.currentState = e.ButtonState.DOWN));
    }
    function n(r, l) {
      r.element.disabled || (l <= e.ButtonState.HOVER && r.currentState === e.ButtonState.DOWN && (r.imgDown && (r.imgDown.style.visibility = "hidden"), r.currentState = e.ButtonState.HOVER), l <= e.ButtonState.GROUP && r.currentState === e.ButtonState.HOVER && (r.imgHover && (r.imgHover.style.visibility = "hidden"), r.currentState = e.ButtonState.GROUP), l <= e.ButtonState.REST && r.currentState === e.ButtonState.GROUP && (o(r), r.currentState = e.ButtonState.REST));
    }
  }(D), function(e) {
    e.ButtonGroup = function(t) {
      e.extend(!0, this, {
        /**
         * An array containing the buttons themselves.
         * @member {Array} buttons
         * @memberof OpenSeadragon.ButtonGroup#
         */
        buttons: [],
        clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold,
        clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold,
        labelText: ""
      }, t);
      var s = this.buttons.concat([]), o = this, h;
      if (this.element = t.element || e.makeNeutralElement("div"), !t.group)
        for (this.element.style.display = "inline-block", h = 0; h < s.length; h++)
          this.element.appendChild(s[h].element);
      e.setElementTouchActionNone(this.element), this.tracker = new e.MouseTracker({
        userData: "ButtonGroup.tracker",
        element: this.element,
        clickTimeThreshold: this.clickTimeThreshold,
        clickDistThreshold: this.clickDistThreshold,
        enterHandler: function(i) {
          var n;
          for (n = 0; n < o.buttons.length; n++)
            o.buttons[n].notifyGroupEnter();
        },
        leaveHandler: function(i) {
          var n;
          if (!i.insideElementPressed)
            for (n = 0; n < o.buttons.length; n++)
              o.buttons[n].notifyGroupExit();
        }
      });
    }, e.ButtonGroup.prototype = {
      /**
       * TODO: Figure out why this is used on the public API and if a more useful
       * api can be created.
       * @function
       * @private
       */
      emulateEnter: function() {
        this.tracker.enterHandler({ eventSource: this.tracker });
      },
      /**
       * TODO: Figure out why this is used on the public API and if a more useful
       * api can be created.
       * @function
       * @private
       */
      emulateLeave: function() {
        this.tracker.leaveHandler({ eventSource: this.tracker });
      },
      destroy: function() {
        for (; this.buttons.length; ) {
          var t = this.buttons.pop();
          this.element.removeChild(t.element), t.destroy();
        }
        this.tracker.destroy(), this.element = null;
      }
    };
  }(D), function(e) {
    e.Rect = function(t, s, o, h, i) {
      this.x = typeof t == "number" ? t : 0, this.y = typeof s == "number" ? s : 0, this.width = typeof o == "number" ? o : 0, this.height = typeof h == "number" ? h : 0, this.degrees = typeof i == "number" ? i : 0, this.degrees = e.positiveModulo(this.degrees, 360);
      var n, r;
      this.degrees >= 270 ? (n = this.getTopRight(), this.x = n.x, this.y = n.y, r = this.height, this.height = this.width, this.width = r, this.degrees -= 270) : this.degrees >= 180 ? (n = this.getBottomRight(), this.x = n.x, this.y = n.y, this.degrees -= 180) : this.degrees >= 90 && (n = this.getBottomLeft(), this.x = n.x, this.y = n.y, r = this.height, this.height = this.width, this.width = r, this.degrees -= 90);
    }, e.Rect.fromSummits = function(t, s, o) {
      var h = t.distanceTo(s), i = t.distanceTo(o), n = s.minus(t), r = Math.atan(n.y / n.x);
      return n.x < 0 ? r += Math.PI : n.y < 0 && (r += 2 * Math.PI), new e.Rect(
        t.x,
        t.y,
        h,
        i,
        r / Math.PI * 180
      );
    }, e.Rect.prototype = {
      /**
       * @function
       * @returns {OpenSeadragon.Rect} a duplicate of this Rect
       */
      clone: function() {
        return new e.Rect(
          this.x,
          this.y,
          this.width,
          this.height,
          this.degrees
        );
      },
      /**
       * The aspect ratio is simply the ratio of width to height.
       * @function
       * @returns {Number} The ratio of width to height.
       */
      getAspectRatio: function() {
        return this.width / this.height;
      },
      /**
       * Provides the coordinates of the upper-left corner of the rectangle as a
       * point.
       * @function
       * @returns {OpenSeadragon.Point} The coordinate of the upper-left corner of
       *  the rectangle.
       */
      getTopLeft: function() {
        return new e.Point(
          this.x,
          this.y
        );
      },
      /**
       * Provides the coordinates of the bottom-right corner of the rectangle as a
       * point.
       * @function
       * @returns {OpenSeadragon.Point} The coordinate of the bottom-right corner of
       *  the rectangle.
       */
      getBottomRight: function() {
        return new e.Point(this.x + this.width, this.y + this.height).rotate(this.degrees, this.getTopLeft());
      },
      /**
       * Provides the coordinates of the top-right corner of the rectangle as a
       * point.
       * @function
       * @returns {OpenSeadragon.Point} The coordinate of the top-right corner of
       *  the rectangle.
       */
      getTopRight: function() {
        return new e.Point(this.x + this.width, this.y).rotate(this.degrees, this.getTopLeft());
      },
      /**
       * Provides the coordinates of the bottom-left corner of the rectangle as a
       * point.
       * @function
       * @returns {OpenSeadragon.Point} The coordinate of the bottom-left corner of
       *  the rectangle.
       */
      getBottomLeft: function() {
        return new e.Point(this.x, this.y + this.height).rotate(this.degrees, this.getTopLeft());
      },
      /**
       * Computes the center of the rectangle.
       * @function
       * @returns {OpenSeadragon.Point} The center of the rectangle as represented
       *  as represented by a 2-dimensional vector (x,y)
       */
      getCenter: function() {
        return new e.Point(
          this.x + this.width / 2,
          this.y + this.height / 2
        ).rotate(this.degrees, this.getTopLeft());
      },
      /**
       * Returns the width and height component as a vector OpenSeadragon.Point
       * @function
       * @returns {OpenSeadragon.Point} The 2 dimensional vector representing the
       *  width and height of the rectangle.
       */
      getSize: function() {
        return new e.Point(this.width, this.height);
      },
      /**
       * Determines if two Rectangles have equivalent components.
       * @function
       * @param {OpenSeadragon.Rect} rectangle The Rectangle to compare to.
       * @return {Boolean} 'true' if all components are equal, otherwise 'false'.
       */
      equals: function(t) {
        return t instanceof e.Rect && this.x === t.x && this.y === t.y && this.width === t.width && this.height === t.height && this.degrees === t.degrees;
      },
      /**
      * Multiply all dimensions (except degrees) in this Rect by a factor and
      * return a new Rect.
      * @function
      * @param {Number} factor The factor to multiply vector components.
      * @returns {OpenSeadragon.Rect} A new rect representing the multiplication
      *  of the vector components by the factor
      */
      times: function(t) {
        return new e.Rect(
          this.x * t,
          this.y * t,
          this.width * t,
          this.height * t,
          this.degrees
        );
      },
      /**
      * Translate/move this Rect by a vector and return new Rect.
      * @function
      * @param {OpenSeadragon.Point} delta The translation vector.
      * @returns {OpenSeadragon.Rect} A new rect with altered position
      */
      translate: function(t) {
        return new e.Rect(
          this.x + t.x,
          this.y + t.y,
          this.width,
          this.height,
          this.degrees
        );
      },
      /**
       * Returns the smallest rectangle that will contain this and the given
       * rectangle bounding boxes.
       * @param {OpenSeadragon.Rect} rect
       * @return {OpenSeadragon.Rect} The new rectangle.
       */
      union: function(t) {
        var s = this.getBoundingBox(), o = t.getBoundingBox(), h = Math.min(s.x, o.x), i = Math.min(s.y, o.y), n = Math.max(
          s.x + s.width,
          o.x + o.width
        ), r = Math.max(
          s.y + s.height,
          o.y + o.height
        );
        return new e.Rect(
          h,
          i,
          n - h,
          r - i
        );
      },
      /**
       * Returns the bounding box of the intersection of this rectangle with the
       * given rectangle.
       * @param {OpenSeadragon.Rect} rect
       * @return {OpenSeadragon.Rect} the bounding box of the intersection
       * or null if the rectangles don't intersect.
       */
      intersection: function(t) {
        var s = 1e-10, o = [], h = this.getTopLeft();
        t.containsPoint(h, s) && o.push(h);
        var i = this.getTopRight();
        t.containsPoint(i, s) && o.push(i);
        var n = this.getBottomLeft();
        t.containsPoint(n, s) && o.push(n);
        var r = this.getBottomRight();
        t.containsPoint(r, s) && o.push(r);
        var l = t.getTopLeft();
        this.containsPoint(l, s) && o.push(l);
        var d = t.getTopRight();
        this.containsPoint(d, s) && o.push(d);
        var f = t.getBottomLeft();
        this.containsPoint(f, s) && o.push(f);
        var y = t.getBottomRight();
        this.containsPoint(y, s) && o.push(y);
        for (var v = this._getSegments(), T = t._getSegments(), w = 0; w < v.length; w++)
          for (var x = v[w], _ = 0; _ < T.length; _++) {
            var b = T[_], N = G(
              x[0],
              x[1],
              b[0],
              b[1]
            );
            N && o.push(N);
          }
        function G(K, ae, ie, le) {
          var te = ae.minus(K), ne = le.minus(ie), se = -ne.x * te.y + te.x * ne.y;
          if (se === 0)
            return null;
          var he = (te.x * (K.y - ie.y) - te.y * (K.x - ie.x)) / se, z = (ne.x * (K.y - ie.y) - ne.y * (K.x - ie.x)) / se;
          return -s <= he && he <= 1 - s && -s <= z && z <= 1 - s ? new e.Point(K.x + z * te.x, K.y + z * te.y) : null;
        }
        if (o.length === 0)
          return null;
        for (var A = o[0].x, W = o[0].x, M = o[0].y, j = o[0].y, $ = 1; $ < o.length; $++) {
          var Y = o[$];
          Y.x < A && (A = Y.x), Y.x > W && (W = Y.x), Y.y < M && (M = Y.y), Y.y > j && (j = Y.y);
        }
        return new e.Rect(A, M, W - A, j - M);
      },
      // private
      _getSegments: function() {
        var t = this.getTopLeft(), s = this.getTopRight(), o = this.getBottomLeft(), h = this.getBottomRight();
        return [
          [t, s],
          [s, h],
          [h, o],
          [o, t]
        ];
      },
      /**
       * Rotates a rectangle around a point.
       * @function
       * @param {Number} degrees The angle in degrees to rotate.
       * @param {OpenSeadragon.Point} [pivot] The point about which to rotate.
       * Defaults to the center of the rectangle.
       * @return {OpenSeadragon.Rect}
       */
      rotate: function(t, s) {
        if (t = e.positiveModulo(t, 360), t === 0)
          return this.clone();
        s = s || this.getCenter();
        var o = this.getTopLeft().rotate(t, s), h = this.getTopRight().rotate(t, s), i = h.minus(o);
        i = i.apply(function(r) {
          var l = 1e-15;
          return Math.abs(r) < l ? 0 : r;
        });
        var n = Math.atan(i.y / i.x);
        return i.x < 0 ? n += Math.PI : i.y < 0 && (n += 2 * Math.PI), new e.Rect(
          o.x,
          o.y,
          this.width,
          this.height,
          n / Math.PI * 180
        );
      },
      /**
       * Retrieves the smallest horizontal (degrees=0) rectangle which contains
       * this rectangle.
       * @returns {OpenSeadragon.Rect}
       */
      getBoundingBox: function() {
        if (this.degrees === 0)
          return this.clone();
        var t = this.getTopLeft(), s = this.getTopRight(), o = this.getBottomLeft(), h = this.getBottomRight(), i = Math.min(t.x, s.x, o.x, h.x), n = Math.max(t.x, s.x, o.x, h.x), r = Math.min(t.y, s.y, o.y, h.y), l = Math.max(t.y, s.y, o.y, h.y);
        return new e.Rect(
          i,
          r,
          n - i,
          l - r
        );
      },
      /**
       * Retrieves the smallest horizontal (degrees=0) rectangle which contains
       * this rectangle and has integers x, y, width and height
       * @returns {OpenSeadragon.Rect}
       */
      getIntegerBoundingBox: function() {
        var t = this.getBoundingBox(), s = Math.floor(t.x), o = Math.floor(t.y), h = Math.ceil(t.width + t.x - s), i = Math.ceil(t.height + t.y - o);
        return new e.Rect(s, o, h, i);
      },
      /**
       * Determines whether a point is inside this rectangle (edge included).
       * @function
       * @param {OpenSeadragon.Point} point
       * @param {Number} [epsilon=0] the margin of error allowed
       * @returns {Boolean} true if the point is inside this rectangle, false
       * otherwise.
       */
      containsPoint: function(t, s) {
        s = s || 0;
        var o = this.getTopLeft(), h = this.getTopRight(), i = this.getBottomLeft(), n = h.minus(o), r = i.minus(o);
        return (t.x - o.x) * n.x + (t.y - o.y) * n.y >= -s && (t.x - h.x) * n.x + (t.y - h.y) * n.y <= s && (t.x - o.x) * r.x + (t.y - o.y) * r.y >= -s && (t.x - i.x) * r.x + (t.y - i.y) * r.y <= s;
      },
      /**
       * Provides a string representation of the rectangle which is useful for
       * debugging.
       * @function
       * @returns {String} A string representation of the rectangle.
       */
      toString: function() {
        return "[" + Math.round(this.x * 100) / 100 + ", " + Math.round(this.y * 100) / 100 + ", " + Math.round(this.width * 100) / 100 + "x" + Math.round(this.height * 100) / 100 + ", " + Math.round(this.degrees * 100) / 100 + "deg]";
      }
    };
  }(D), function(e) {
    var t = {};
    e.ReferenceStrip = function(f) {
      var y = this, v = f.viewer, T = e.getElementSize(v.element), w, x, _;
      for (f.id || (f.id = "referencestrip-" + e.now(), this.element = e.makeNeutralElement("div"), this.element.id = f.id, this.element.className = "referencestrip"), f = e.extend(!0, {
        sizeRatio: e.DEFAULT_SETTINGS.referenceStripSizeRatio,
        position: e.DEFAULT_SETTINGS.referenceStripPosition,
        scroll: e.DEFAULT_SETTINGS.referenceStripScroll,
        clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold
      }, f, {
        element: this.element
      }), e.extend(this, f), t[this.id] = {
        animating: !1
      }, this.minPixelRatio = this.viewer.minPixelRatio, this.element.tabIndex = 0, x = this.element.style, x.marginTop = "0px", x.marginRight = "0px", x.marginBottom = "0px", x.marginLeft = "0px", x.left = "0px", x.bottom = "0px", x.border = "0px", x.background = "#000", x.position = "relative", e.setElementTouchActionNone(this.element), e.setElementOpacity(this.element, 0.8), this.viewer = v, this.tracker = new e.MouseTracker({
        userData: "ReferenceStrip.tracker",
        element: this.element,
        clickHandler: e.delegate(this, s),
        dragHandler: e.delegate(this, o),
        scrollHandler: e.delegate(this, h),
        enterHandler: e.delegate(this, n),
        leaveHandler: e.delegate(this, r),
        keyDownHandler: e.delegate(this, l),
        keyHandler: e.delegate(this, d),
        preProcessEventHandler: function(b) {
          b.eventType === "wheel" && (b.preventDefault = !0);
        }
      }), f.width && f.height ? (this.element.style.width = f.width + "px", this.element.style.height = f.height + "px", v.addControl(
        this.element,
        { anchor: e.ControlAnchor.BOTTOM_LEFT }
      )) : f.scroll === "horizontal" ? (this.element.style.width = T.x * f.sizeRatio * v.tileSources.length + 12 * v.tileSources.length + "px", this.element.style.height = T.y * f.sizeRatio + "px", v.addControl(
        this.element,
        { anchor: e.ControlAnchor.BOTTOM_LEFT }
      )) : (this.element.style.height = T.y * f.sizeRatio * v.tileSources.length + 12 * v.tileSources.length + "px", this.element.style.width = T.x * f.sizeRatio + "px", v.addControl(
        this.element,
        { anchor: e.ControlAnchor.TOP_LEFT }
      )), this.panelWidth = T.x * this.sizeRatio + 8, this.panelHeight = T.y * this.sizeRatio + 8, this.panels = [], this.miniViewers = {}, _ = 0; _ < v.tileSources.length; _++)
        w = e.makeNeutralElement("div"), w.id = this.element.id + "-" + _, w.style.width = y.panelWidth + "px", w.style.height = y.panelHeight + "px", w.style.display = "inline", w.style.float = "left", w.style.cssFloat = "left", w.style.styleFloat = "left", w.style.padding = "2px", e.setElementTouchActionNone(w), e.setElementPointerEventsNone(w), this.element.appendChild(w), w.activePanel = !1, this.panels.push(w);
      i(this, this.scroll === "vertical" ? T.y : T.x, 0), this.setFocus(0);
    }, e.ReferenceStrip.prototype = {
      /**
       * @function
       */
      setFocus: function(f) {
        var y = this.element.querySelector("#" + this.element.id + "-" + f), v = e.getElementSize(this.viewer.canvas), T = Number(this.element.style.width.replace("px", "")), w = Number(this.element.style.height.replace("px", "")), x = -Number(this.element.style.marginLeft.replace("px", "")), _ = -Number(this.element.style.marginTop.replace("px", "")), b;
        this.currentSelected !== y && (this.currentSelected && (this.currentSelected.style.background = "#000"), this.currentSelected = y, this.currentSelected.style.background = "#999", this.scroll === "horizontal" ? (b = Number(f) * (this.panelWidth + 3), b > x + v.x - this.panelWidth ? (b = Math.min(b, T - v.x), this.element.style.marginLeft = -b + "px", i(this, v.x, -b)) : b < x && (b = Math.max(0, b - v.x / 2), this.element.style.marginLeft = -b + "px", i(this, v.x, -b))) : (b = Number(f) * (this.panelHeight + 3), b > _ + v.y - this.panelHeight ? (b = Math.min(b, w - v.y), this.element.style.marginTop = -b + "px", i(this, v.y, -b)) : b < _ && (b = Math.max(0, b - v.y / 2), this.element.style.marginTop = -b + "px", i(this, v.y, -b))), this.currentPage = f, n.call(this, { eventSource: this.tracker }));
      },
      /**
       * @function
       */
      update: function() {
        return !!t[this.id].animating;
      },
      destroy: function() {
        if (this.miniViewers)
          for (var f in this.miniViewers)
            this.miniViewers[f].destroy();
        this.tracker.destroy(), this.element && this.viewer.removeControl(this.element);
      }
    };
    function s(f) {
      if (f.quick) {
        var y;
        this.scroll === "horizontal" ? y = Math.floor(f.position.x / this.panelWidth) : y = Math.floor(f.position.y / this.panelHeight), this.viewer.goToPage(y);
      }
      this.element.focus();
    }
    function o(f) {
      if (this.dragging = !0, this.element) {
        var y = Number(this.element.style.marginLeft.replace("px", "")), v = Number(this.element.style.marginTop.replace("px", "")), T = Number(this.element.style.width.replace("px", "")), w = Number(this.element.style.height.replace("px", "")), x = e.getElementSize(this.viewer.canvas);
        this.scroll === "horizontal" ? -f.delta.x > 0 ? y > -(T - x.x) && (this.element.style.marginLeft = y + f.delta.x * 2 + "px", i(this, x.x, y + f.delta.x * 2)) : -f.delta.x < 0 && y < 0 && (this.element.style.marginLeft = y + f.delta.x * 2 + "px", i(this, x.x, y + f.delta.x * 2)) : -f.delta.y > 0 ? v > -(w - x.y) && (this.element.style.marginTop = v + f.delta.y * 2 + "px", i(this, x.y, v + f.delta.y * 2)) : -f.delta.y < 0 && v < 0 && (this.element.style.marginTop = v + f.delta.y * 2 + "px", i(this, x.y, v + f.delta.y * 2));
      }
    }
    function h(f) {
      if (this.element) {
        var y = Number(this.element.style.marginLeft.replace("px", "")), v = Number(this.element.style.marginTop.replace("px", "")), T = Number(this.element.style.width.replace("px", "")), w = Number(this.element.style.height.replace("px", "")), x = e.getElementSize(this.viewer.canvas);
        this.scroll === "horizontal" ? f.scroll > 0 ? y > -(T - x.x) && (this.element.style.marginLeft = y - f.scroll * 60 + "px", i(this, x.x, y - f.scroll * 60)) : f.scroll < 0 && y < 0 && (this.element.style.marginLeft = y - f.scroll * 60 + "px", i(this, x.x, y - f.scroll * 60)) : f.scroll < 0 ? v > x.y - w && (this.element.style.marginTop = v + f.scroll * 60 + "px", i(this, x.y, v + f.scroll * 60)) : f.scroll > 0 && v < 0 && (this.element.style.marginTop = v + f.scroll * 60 + "px", i(this, x.y, v + f.scroll * 60)), f.preventDefault = !0;
      }
    }
    function i(f, y, v) {
      var T, w, x, _, b, N;
      for (f.scroll === "horizontal" ? T = f.panelWidth : T = f.panelHeight, w = Math.ceil(y / T) + 5, x = Math.ceil((Math.abs(v) + y) / T) + 1, w = x - w, w = w < 0 ? 0 : w, b = w; b < x && b < f.panels.length; b++)
        if (N = f.panels[b], !N.activePanel) {
          var G, A = f.viewer.tileSources[b];
          A.referenceStripThumbnailUrl ? G = {
            type: "image",
            url: A.referenceStripThumbnailUrl
          } : G = A, _ = new e.Viewer({
            id: N.id,
            tileSources: [G],
            element: N,
            navigatorSizeRatio: f.sizeRatio,
            showNavigator: !1,
            mouseNavEnabled: !1,
            showNavigationControl: !1,
            showSequenceControl: !1,
            immediateRender: !0,
            blendTime: 0,
            animationTime: 0,
            loadTilesWithAjax: f.viewer.loadTilesWithAjax,
            ajaxHeaders: f.viewer.ajaxHeaders,
            useCanvas: f.useCanvas
          }), e.setElementPointerEventsNone(_.canvas), e.setElementPointerEventsNone(_.container), _.innerTracker.setTracking(!1), _.outerTracker.setTracking(!1), f.miniViewers[N.id] = _, N.activePanel = !0;
        }
    }
    function n(f) {
      var y = f.eventSource.element;
      this.scroll === "horizontal" ? y.style.marginBottom = "0px" : y.style.marginLeft = "0px";
    }
    function r(f) {
      var y = f.eventSource.element;
      this.scroll === "horizontal" ? y.style.marginBottom = "-" + e.getElementSize(y).y / 2 + "px" : y.style.marginLeft = "-" + e.getElementSize(y).x / 2 + "px";
    }
    function l(f) {
      if (!f.ctrl && !f.alt && !f.meta)
        switch (f.keyCode) {
          case 38:
            h.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = !0;
            break;
          case 40:
            h.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = !0;
            break;
          case 37:
            h.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = !0;
            break;
          case 39:
            h.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = !0;
            break;
          default:
            f.preventDefault = !1;
            break;
        }
      else
        f.preventDefault = !1;
    }
    function d(f) {
      if (!f.ctrl && !f.alt && !f.meta)
        switch (f.keyCode) {
          case 61:
            h.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = !0;
            break;
          case 45:
            h.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = !0;
            break;
          case 48:
          case 119:
          case 87:
            h.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = !0;
            break;
          case 115:
          case 83:
            h.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = !0;
            break;
          case 97:
            h.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = !0;
            break;
          case 100:
            h.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = !0;
            break;
          default:
            f.preventDefault = !1;
            break;
        }
      else
        f.preventDefault = !1;
    }
  }(D), function(e) {
    e.DisplayRect = function(t, s, o, h, i, n) {
      e.Rect.apply(this, [t, s, o, h]), this.minLevel = i, this.maxLevel = n;
    }, e.extend(e.DisplayRect.prototype, e.Rect.prototype);
  }(D), function(e) {
    e.Spring = function(s) {
      var o = arguments;
      typeof s != "object" && (s = {
        initial: o.length && typeof o[0] == "number" ? o[0] : void 0,
        /**
         * Spring stiffness.
         * @member {Number} springStiffness
         * @memberof OpenSeadragon.Spring#
         */
        springStiffness: o.length > 1 ? o[1].springStiffness : 5,
        /**
         * Animation duration per spring.
         * @member {Number} animationTime
         * @memberof OpenSeadragon.Spring#
         */
        animationTime: o.length > 1 ? o[1].animationTime : 1.5
      }), e.console.assert(
        typeof s.springStiffness == "number" && s.springStiffness !== 0,
        "[OpenSeadragon.Spring] options.springStiffness must be a non-zero number"
      ), e.console.assert(
        typeof s.animationTime == "number" && s.animationTime >= 0,
        "[OpenSeadragon.Spring] options.animationTime must be a number greater than or equal to 0"
      ), s.exponential && (this._exponential = !0, delete s.exponential), e.extend(!0, this, s), this.current = {
        value: typeof this.initial == "number" ? this.initial : this._exponential ? 0 : 1,
        time: e.now()
        // always work in milliseconds
      }, e.console.assert(
        !this._exponential || this.current.value !== 0,
        "[OpenSeadragon.Spring] value must be non-zero for exponential springs"
      ), this.start = {
        value: this.current.value,
        time: this.current.time
      }, this.target = {
        value: this.current.value,
        time: this.current.time
      }, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
    }, e.Spring.prototype = {
      /**
       * @function
       * @param {Number} target
       */
      resetTo: function(s) {
        e.console.assert(
          !this._exponential || s !== 0,
          "[OpenSeadragon.Spring.resetTo] target must be non-zero for exponential springs"
        ), this.start.value = this.target.value = this.current.value = s, this.start.time = this.target.time = this.current.time = e.now(), this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
      },
      /**
       * @function
       * @param {Number} target
       */
      springTo: function(s) {
        e.console.assert(
          !this._exponential || s !== 0,
          "[OpenSeadragon.Spring.springTo] target must be non-zero for exponential springs"
        ), this.start.value = this.current.value, this.start.time = this.current.time, this.target.value = s, this.target.time = this.start.time + 1e3 * this.animationTime, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value));
      },
      /**
       * @function
       * @param {Number} delta
       */
      shiftBy: function(s) {
        this.start.value += s, this.target.value += s, this._exponential && (e.console.assert(
          this.target.value !== 0 && this.start.value !== 0,
          "[OpenSeadragon.Spring.shiftBy] spring value must be non-zero for exponential springs"
        ), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value));
      },
      setExponential: function(s) {
        this._exponential = s, this._exponential && (e.console.assert(
          this.current.value !== 0 && this.target.value !== 0 && this.start.value !== 0,
          "[OpenSeadragon.Spring.setExponential] spring value must be non-zero for exponential springs"
        ), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
      },
      /**
       * @function
       * @returns true if the value got updated, false otherwise
       */
      update: function() {
        this.current.time = e.now();
        var s, o;
        this._exponential ? (s = this.start._logValue, o = this.target._logValue) : (s = this.start.value, o = this.target.value);
        var h = this.current.time >= this.target.time ? o : s + (o - s) * t(
          this.springStiffness,
          (this.current.time - this.start.time) / (this.target.time - this.start.time)
        ), i = this.current.value;
        return this._exponential ? this.current.value = Math.exp(h) : this.current.value = h, i !== this.current.value;
      },
      /**
       * Returns whether the spring is at the target value
       * @function
       * @returns {Boolean} True if at target value, false otherwise
       */
      isAtTargetValue: function() {
        return this.current.value === this.target.value;
      }
    };
    function t(s, o) {
      return (1 - Math.exp(s * -o)) / (1 - Math.exp(-s));
    }
  }(D), function(e) {
    function t(o) {
      e.extend(!0, this, {
        timeout: e.DEFAULT_SETTINGS.timeout,
        jobId: null
      }, o), this.image = null;
    }
    t.prototype = {
      errorMsg: null,
      /**
       * Starts the image job.
       * @method
       */
      start: function() {
        var o = this, h = this.abort;
        this.image = new Image(), this.image.onload = function() {
          o.finish(!0);
        }, this.image.onabort = this.image.onerror = function() {
          o.errorMsg = "Image load aborted", o.finish(!1);
        }, this.jobId = window.setTimeout(function() {
          o.errorMsg = "Image load exceeded timeout (" + o.timeout + " ms)", o.finish(!1);
        }, this.timeout), this.loadWithAjax ? (this.request = e.makeAjaxRequest({
          url: this.src,
          withCredentials: this.ajaxWithCredentials,
          headers: this.ajaxHeaders,
          responseType: "arraybuffer",
          postData: this.postData,
          success: function(i) {
            var n;
            try {
              n = new window.Blob([i.response]);
            } catch (f) {
              var r = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
              if (f.name === "TypeError" && r) {
                var l = new r();
                l.append(i.response), n = l.getBlob();
              }
            }
            n.size === 0 && (o.errorMsg = "Empty image response.", o.finish(!1));
            var d = (window.URL || window.webkitURL).createObjectURL(n);
            o.image.src = d;
          },
          error: function(i) {
            o.errorMsg = "Image load aborted - XHR error: Ajax returned " + i.status, o.finish(!1);
          }
        }), this.abort = function() {
          o.request.abort(), typeof h == "function" && h();
        }) : (this.crossOriginPolicy !== !1 && (this.image.crossOrigin = this.crossOriginPolicy), this.image.src = this.src);
      },
      finish: function(o) {
        this.image.onload = this.image.onerror = this.image.onabort = null, o || (this.image = null), this.jobId && window.clearTimeout(this.jobId), this.callback(this);
      }
    }, e.ImageLoader = function(o) {
      e.extend(!0, this, {
        jobLimit: e.DEFAULT_SETTINGS.imageLoaderLimit,
        timeout: e.DEFAULT_SETTINGS.timeout,
        jobQueue: [],
        jobsInProgress: 0
      }, o);
    }, e.ImageLoader.prototype = {
      /**
       * Add an unloaded image to the loader queue.
       * @method
       * @param {Object} options - Options for this job.
       * @param {String} [options.src] - URL of image to download.
       * @param {String} [options.loadWithAjax] - Whether to load this image with AJAX.
       * @param {String} [options.ajaxHeaders] - Headers to add to the image request if using AJAX.
       * @param {String|Boolean} [options.crossOriginPolicy] - CORS policy to use for downloads
       * @param {String} [options.postData] - POST parameters (usually but not necessarily in k=v&k2=v2... form,
       *      see TileSrouce::getPostData) or null
       * @param {Boolean} [options.ajaxWithCredentials] - Whether to set withCredentials on AJAX
       *      requests.
       * @param {Function} [options.callback] - Called once image has been downloaded.
       * @param {Function} [options.abort] - Called when this image job is aborted.
       */
      addJob: function(o) {
        var h = this, i = function(l) {
          s(h, l, o.callback);
        }, n = {
          src: o.src,
          loadWithAjax: o.loadWithAjax,
          ajaxHeaders: o.loadWithAjax ? o.ajaxHeaders : null,
          crossOriginPolicy: o.crossOriginPolicy,
          ajaxWithCredentials: o.ajaxWithCredentials,
          postData: o.postData,
          callback: i,
          abort: o.abort,
          timeout: this.timeout
        }, r = new t(n);
        !this.jobLimit || this.jobsInProgress < this.jobLimit ? (r.start(), this.jobsInProgress++) : this.jobQueue.push(r);
      },
      /**
       * Clear any unstarted image loading jobs from the queue.
       * @method
       */
      clear: function() {
        for (var o = 0; o < this.jobQueue.length; o++) {
          var h = this.jobQueue[o];
          typeof h.abort == "function" && h.abort();
        }
        this.jobQueue = [];
      }
    };
    function s(o, h, i) {
      var n;
      o.jobsInProgress--, (!o.jobLimit || o.jobsInProgress < o.jobLimit) && o.jobQueue.length > 0 && (n = o.jobQueue.shift(), n.start(), o.jobsInProgress++), i(h.image, h.errorMsg, h.request);
    }
  }(D), function(e) {
    e.Tile = function(t, s, o, h, i, n, r, l, d, f, y, v) {
      this.level = t, this.x = s, this.y = o, this.bounds = h, this.sourceBounds = f, this.exists = i, this.url = n, this.postData = y, this.context2D = r, this.loadWithAjax = l, this.ajaxHeaders = d, v === void 0 && (e.console.error("Tile constructor needs 'cacheKey' variable: creation tile cache in Tile class is deprecated. TileSource.prototype.getTileHashKey will be used."), v = e.TileSource.prototype.getTileHashKey(t, s, o, n, d, y)), this.cacheKey = v, this.loaded = !1, this.loading = !1, this.element = null, this.imgElement = null, this.image = null, this.style = null, this.position = null, this.size = null, this.flipped = !1, this.blendStart = null, this.opacity = null, this.squaredDistance = null, this.visibility = null, this.beingDrawn = !1, this.lastTouchTime = 0, this.isRightMost = !1, this.isBottomMost = !1;
    }, e.Tile.prototype = {
      /**
       * Provides a string representation of this tiles level and (x,y)
       * components.
       * @function
       * @returns {String}
       */
      toString: function() {
        return this.level + "/" + this.x + "_" + this.y;
      },
      // private
      _hasTransparencyChannel: function() {
        return !!this.context2D || this.url.match(".png");
      },
      /**
       * Renders the tile in an html container.
       * @function
       * @param {Element} container
       */
      drawHTML: function(t) {
        if (!this.cacheImageRecord) {
          e.console.warn(
            "[Tile.drawHTML] attempting to draw tile %s when it's not cached",
            this.toString()
          );
          return;
        }
        if (!this.loaded) {
          e.console.warn(
            "Attempting to draw tile %s when it's not yet loaded.",
            this.toString()
          );
          return;
        }
        this.element || (this.element = e.makeNeutralElement("div"), this.imgElement = this.cacheImageRecord.getImage().cloneNode(), this.imgElement.style.msInterpolationMode = "nearest-neighbor", this.imgElement.style.width = "100%", this.imgElement.style.height = "100%", this.style = this.element.style, this.style.position = "absolute"), this.element.parentNode !== t && t.appendChild(this.element), this.imgElement.parentNode !== this.element && this.element.appendChild(this.imgElement), this.style.top = this.position.y + "px", this.style.left = this.position.x + "px", this.style.height = this.size.y + "px", this.style.width = this.size.x + "px", this.flipped && (this.style.transform = "scaleX(-1)"), e.setElementOpacity(this.element, this.opacity);
      },
      /**
       * Renders the tile in a canvas-based context.
       * @function
       * @param {Canvas} context
       * @param {Function} drawingHandler - Method for firing the drawing event.
       * drawingHandler({context, tile, rendered})
       * where <code>rendered</code> is the context with the pre-drawn image.
       * @param {Number} [scale=1] - Apply a scale to position and size
       * @param {OpenSeadragon.Point} [translate] - A translation vector
       * @param {Boolean} [shouldRoundPositionAndSize] - Tells whether to round
       * position and size of tiles supporting alpha channel in non-transparency
       * context.
       */
      drawCanvas: function(t, s, o, h, i) {
        var n = this.position.times(e.pixelDensityRatio), r = this.size.times(e.pixelDensityRatio), l;
        if (!this.context2D && !this.cacheImageRecord) {
          e.console.warn(
            "[Tile.drawCanvas] attempting to draw tile %s when it's not cached",
            this.toString()
          );
          return;
        }
        if (l = this.context2D || this.cacheImageRecord.getRenderedContext(), !this.loaded || !l) {
          e.console.warn(
            "Attempting to draw tile %s when it's not yet loaded.",
            this.toString()
          );
          return;
        }
        t.save(), t.globalAlpha = this.opacity, typeof o == "number" && o !== 1 && (n = n.times(o), r = r.times(o)), h instanceof e.Point && (n = n.plus(h)), t.globalAlpha === 1 && this._hasTransparencyChannel() && (i && (n.x = Math.round(n.x), n.y = Math.round(n.y), r.x = Math.round(r.x), r.y = Math.round(r.y)), t.clearRect(
          n.x,
          n.y,
          r.x,
          r.y
        )), s({ context: t, tile: this, rendered: l });
        var d, f;
        this.sourceBounds ? (d = Math.min(this.sourceBounds.width, l.canvas.width), f = Math.min(this.sourceBounds.height, l.canvas.height)) : (d = l.canvas.width, f = l.canvas.height), t.translate(n.x + r.x / 2, 0), this.flipped && t.scale(-1, 1), t.drawImage(
          l.canvas,
          0,
          0,
          d,
          f,
          -r.x / 2,
          n.y,
          r.x,
          r.y
        ), t.restore();
      },
      /**
       * Get the ratio between current and original size.
       * @function
       * @return {Float}
       */
      getScaleForEdgeSmoothing: function() {
        var t;
        if (this.cacheImageRecord)
          t = this.cacheImageRecord.getRenderedContext();
        else if (this.context2D)
          t = this.context2D;
        else
          return e.console.warn(
            "[Tile.drawCanvas] attempting to get tile scale %s when tile's not cached",
            this.toString()
          ), 1;
        return t.canvas.width / (this.size.x * e.pixelDensityRatio);
      },
      /**
       * Get a translation vector that when applied to the tile position produces integer coordinates.
       * Needed to avoid swimming and twitching.
       * @function
       * @param {Number} [scale=1] - Scale to be applied to position.
       * @return {OpenSeadragon.Point}
       */
      getTranslationForEdgeSmoothing: function(t, s, o) {
        var h = Math.max(1, Math.ceil((o.x - s.x) / 2)), i = Math.max(1, Math.ceil((o.y - s.y) / 2));
        return new e.Point(h, i).minus(
          this.position.times(e.pixelDensityRatio).times(t || 1).apply(function(n) {
            return n % 1;
          })
        );
      },
      /**
       * Removes tile from its container.
       * @function
       */
      unload: function() {
        this.imgElement && this.imgElement.parentNode && this.imgElement.parentNode.removeChild(this.imgElement), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.imgElement = null, this.loaded = !1, this.loading = !1;
      }
    };
  }(D), function(e) {
    e.OverlayPlacement = e.Placement, e.OverlayRotationMode = e.freezeObject({
      NO_ROTATION: 1,
      EXACT: 2,
      BOUNDING_BOX: 3
    }), e.Overlay = function(t, s, o) {
      var h;
      e.isPlainObject(t) ? h = t : h = {
        element: t,
        location: s,
        placement: o
      }, this.element = h.element, this.style = h.element.style, this._init(h);
    }, e.Overlay.prototype = {
      // private
      _init: function(t) {
        this.location = t.location, this.placement = t.placement === void 0 ? e.Placement.TOP_LEFT : t.placement, this.onDraw = t.onDraw, this.checkResize = t.checkResize === void 0 ? !0 : t.checkResize, this.width = t.width === void 0 ? null : t.width, this.height = t.height === void 0 ? null : t.height, this.rotationMode = t.rotationMode || e.OverlayRotationMode.EXACT, this.location instanceof e.Rect && (this.width = this.location.width, this.height = this.location.height, this.location = this.location.getTopLeft(), this.placement = e.Placement.TOP_LEFT), this.scales = this.width !== null && this.height !== null, this.bounds = new e.Rect(
          this.location.x,
          this.location.y,
          this.width,
          this.height
        ), this.position = this.location;
      },
      /**
       * Internal function to adjust the position of an overlay
       * depending on it size and placement.
       * @function
       * @param {OpenSeadragon.Point} position
       * @param {OpenSeadragon.Point} size
       */
      adjust: function(t, s) {
        var o = e.Placement.properties[this.placement];
        o && (o.isHorizontallyCentered ? t.x -= s.x / 2 : o.isRight && (t.x -= s.x), o.isVerticallyCentered ? t.y -= s.y / 2 : o.isBottom && (t.y -= s.y));
      },
      /**
       * @function
       */
      destroy: function() {
        var t = this.element, s = this.style;
        t.parentNode && (t.parentNode.removeChild(t), t.prevElementParent && (s.display = "none", document.body.appendChild(t))), this.onDraw = null, s.top = "", s.left = "", s.position = "", this.width !== null && (s.width = ""), this.height !== null && (s.height = "");
        var o = e.getCssPropertyWithVendorPrefix(
          "transformOrigin"
        ), h = e.getCssPropertyWithVendorPrefix(
          "transform"
        );
        o && h && (s[o] = "", s[h] = "");
      },
      /**
       * @function
       * @param {Element} container
       */
      drawHTML: function(t, s) {
        var o = this.element;
        o.parentNode !== t && (o.prevElementParent = o.parentNode, o.prevNextSibling = o.nextSibling, t.appendChild(o), this.style.position = "absolute", this.size = e.getElementSize(o));
        var h = this._getOverlayPositionAndSize(s), i = h.position, n = this.size = h.size, r = h.rotate;
        if (this.onDraw)
          this.onDraw(i, n, this.element);
        else {
          var l = this.style;
          l.left = i.x + "px", l.top = i.y + "px", this.width !== null && (l.width = n.x + "px"), this.height !== null && (l.height = n.y + "px");
          var d = e.getCssPropertyWithVendorPrefix(
            "transformOrigin"
          ), f = e.getCssPropertyWithVendorPrefix(
            "transform"
          );
          d && f && (r ? (l[d] = this._getTransformOrigin(), l[f] = "rotate(" + r + "deg)") : (l[d] = "", l[f] = "")), l.display = "block";
        }
      },
      // private
      _getOverlayPositionAndSize: function(t) {
        var s = t.pixelFromPoint(this.location, !0), o = this._getSizeInPixels(t);
        this.adjust(s, o);
        var h = 0;
        if (t.degrees && this.rotationMode !== e.OverlayRotationMode.NO_ROTATION)
          if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX && this.width !== null && this.height !== null) {
            var i = new e.Rect(s.x, s.y, o.x, o.y), n = this._getBoundingBox(i, t.degrees);
            s = n.getTopLeft(), o = n.getSize();
          } else
            h = t.degrees;
        return {
          position: s,
          size: o,
          rotate: h
        };
      },
      // private
      _getSizeInPixels: function(t) {
        var s = this.size.x, o = this.size.y;
        if (this.width !== null || this.height !== null) {
          var h = t.deltaPixelsFromPointsNoRotate(
            new e.Point(this.width || 0, this.height || 0),
            !0
          );
          this.width !== null && (s = h.x), this.height !== null && (o = h.y);
        }
        if (this.checkResize && (this.width === null || this.height === null)) {
          var i = this.size = e.getElementSize(this.element);
          this.width === null && (s = i.x), this.height === null && (o = i.y);
        }
        return new e.Point(s, o);
      },
      // private
      _getBoundingBox: function(t, s) {
        var o = this._getPlacementPoint(t);
        return t.rotate(s, o).getBoundingBox();
      },
      // private
      _getPlacementPoint: function(t) {
        var s = new e.Point(t.x, t.y), o = e.Placement.properties[this.placement];
        return o && (o.isHorizontallyCentered ? s.x += t.width / 2 : o.isRight && (s.x += t.width), o.isVerticallyCentered ? s.y += t.height / 2 : o.isBottom && (s.y += t.height)), s;
      },
      // private
      _getTransformOrigin: function() {
        var t = "", s = e.Placement.properties[this.placement];
        return s && (s.isLeft ? t = "left" : s.isRight && (t = "right"), s.isTop ? t += " top" : s.isBottom && (t += " bottom")), t;
      },
      /**
       * Changes the overlay settings.
       * @function
       * @param {OpenSeadragon.Point|OpenSeadragon.Rect|Object} location
       * If an object is specified, the options are the same than the constructor
       * except for the element which can not be changed.
       * @param {OpenSeadragon.Placement} placement
       */
      update: function(t, s) {
        var o = e.isPlainObject(t) ? t : {
          location: t,
          placement: s
        };
        this._init({
          location: o.location || this.location,
          placement: o.placement !== void 0 ? o.placement : this.placement,
          onDraw: o.onDraw || this.onDraw,
          checkResize: o.checkResize || this.checkResize,
          width: o.width !== void 0 ? o.width : this.width,
          height: o.height !== void 0 ? o.height : this.height,
          rotationMode: o.rotationMode || this.rotationMode
        });
      },
      /**
       * Returns the current bounds of the overlay in viewport coordinates
       * @function
       * @param {OpenSeadragon.Viewport} viewport the viewport
       * @returns {OpenSeadragon.Rect} overlay bounds
       */
      getBounds: function(t) {
        e.console.assert(
          t,
          "A viewport must now be passed to Overlay.getBounds."
        );
        var s = this.width, o = this.height;
        if (s === null || o === null) {
          var h = t.deltaPointsFromPixelsNoRotate(this.size, !0);
          s === null && (s = h.x), o === null && (o = h.y);
        }
        var i = this.location.clone();
        return this.adjust(i, new e.Point(s, o)), this._adjustBoundsForRotation(
          t,
          new e.Rect(i.x, i.y, s, o)
        );
      },
      // private
      _adjustBoundsForRotation: function(t, s) {
        if (!t || t.degrees === 0 || this.rotationMode === e.OverlayRotationMode.EXACT)
          return s;
        if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX) {
          if (this.width === null || this.height === null)
            return s;
          var o = this._getOverlayPositionAndSize(t);
          return t.viewerElementToViewportRectangle(new e.Rect(
            o.position.x,
            o.position.y,
            o.size.x,
            o.size.y
          ));
        }
        return s.rotate(
          -t.degrees,
          this._getPlacementPoint(s)
        );
      }
    };
  }(D), function(e) {
    e.Drawer = function(t) {
      e.console.assert(t.viewer, "[Drawer] options.viewer is required");
      var s = arguments;
      if (e.isPlainObject(t) || (t = {
        source: s[0],
        // Reference to Viewer tile source.
        viewport: s[1],
        // Reference to Viewer viewport.
        element: s[2]
        // Parent element.
      }), e.console.assert(t.viewport, "[Drawer] options.viewport is required"), e.console.assert(t.element, "[Drawer] options.element is required"), t.source && e.console.error("[Drawer] options.source is no longer accepted; use TiledImage instead"), this.viewer = t.viewer, this.viewport = t.viewport, this.debugGridColor = typeof t.debugGridColor == "string" ? [t.debugGridColor] : t.debugGridColor || e.DEFAULT_SETTINGS.debugGridColor, t.opacity && e.console.error("[Drawer] options.opacity is no longer accepted; set the opacity on the TiledImage instead"), this.useCanvas = e.supportsCanvas && (this.viewer ? this.viewer.useCanvas : !0), this.container = e.getElement(t.element), this.canvas = e.makeNeutralElement(this.useCanvas ? "canvas" : "div"), this.context = this.useCanvas ? this.canvas.getContext("2d") : null, this.sketchCanvas = null, this.sketchContext = null, this.element = this.container, this.container.dir = "ltr", this.useCanvas) {
        var o = this._calculateCanvasSize();
        this.canvas.width = o.x, this.canvas.height = o.y;
      }
      this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.position = "absolute", e.setElementOpacity(this.canvas, this.opacity, !0), e.setElementPointerEventsNone(this.canvas), e.setElementTouchActionNone(this.canvas), this.container.style.textAlign = "left", this.container.appendChild(this.canvas), this._imageSmoothingEnabled = !0;
    }, e.Drawer.prototype = {
      // deprecated
      addOverlay: function(t, s, o, h) {
        return e.console.error("drawer.addOverlay is deprecated. Use viewer.addOverlay instead."), this.viewer.addOverlay(t, s, o, h), this;
      },
      // deprecated
      updateOverlay: function(t, s, o) {
        return e.console.error("drawer.updateOverlay is deprecated. Use viewer.updateOverlay instead."), this.viewer.updateOverlay(t, s, o), this;
      },
      // deprecated
      removeOverlay: function(t) {
        return e.console.error("drawer.removeOverlay is deprecated. Use viewer.removeOverlay instead."), this.viewer.removeOverlay(t), this;
      },
      // deprecated
      clearOverlays: function() {
        return e.console.error("drawer.clearOverlays is deprecated. Use viewer.clearOverlays instead."), this.viewer.clearOverlays(), this;
      },
      /**
       * This function converts the given point from to the drawer coordinate by
       * multiplying it with the pixel density.
       * This function does not take rotation into account, thus assuming provided
       * point is at 0 degree.
       * @param {OpenSeadragon.Point} point - the pixel point to convert
       */
      viewportCoordToDrawerCoord: function(t) {
        var s = this.viewport.pixelFromPointNoRotate(t, !0);
        return new e.Point(
          s.x * e.pixelDensityRatio,
          s.y * e.pixelDensityRatio
        );
      },
      /**
       * This function will create multiple polygon paths on the drawing context by provided polygons,
       * then clip the context to the paths.
       * @param {OpenSeadragon.Point[][]} polygons - an array of polygons. A polygon is an array of OpenSeadragon.Point
       * @param {Boolean} useSketch - Whether to use the sketch canvas or not.
       */
      clipWithPolygons: function(t, s) {
        if (this.useCanvas) {
          var o = this._getContext(s);
          o.beginPath(), t.forEach(function(h) {
            h.forEach(function(i, n) {
              o[n === 0 ? "moveTo" : "lineTo"](i.x, i.y);
            });
          }), o.clip();
        }
      },
      /**
       * Set the opacity of the drawer.
       * @param {Number} opacity
       * @return {OpenSeadragon.Drawer} Chainable.
       */
      setOpacity: function(t) {
        e.console.error("drawer.setOpacity is deprecated. Use tiledImage.setOpacity instead.");
        for (var s = this.viewer.world, o = 0; o < s.getItemCount(); o++)
          s.getItemAt(o).setOpacity(t);
        return this;
      },
      /**
       * Get the opacity of the drawer.
       * @returns {Number}
       */
      getOpacity: function() {
        e.console.error("drawer.getOpacity is deprecated. Use tiledImage.getOpacity instead.");
        for (var t = this.viewer.world, s = 0, o = 0; o < t.getItemCount(); o++) {
          var h = t.getItemAt(o).getOpacity();
          h > s && (s = h);
        }
        return s;
      },
      // deprecated
      needsUpdate: function() {
        return e.console.error("[Drawer.needsUpdate] this function is deprecated. Use World.needsDraw instead."), this.viewer.world.needsDraw();
      },
      // deprecated
      numTilesLoaded: function() {
        return e.console.error("[Drawer.numTilesLoaded] this function is deprecated. Use TileCache.numTilesLoaded instead."), this.viewer.tileCache.numTilesLoaded();
      },
      // deprecated
      reset: function() {
        return e.console.error("[Drawer.reset] this function is deprecated. Use World.resetItems instead."), this.viewer.world.resetItems(), this;
      },
      // deprecated
      update: function() {
        return e.console.error("[Drawer.update] this function is deprecated. Use Drawer.clear and World.draw instead."), this.clear(), this.viewer.world.draw(), this;
      },
      /**
       * @return {Boolean} True if rotation is supported.
       */
      canRotate: function() {
        return this.useCanvas;
      },
      /**
       * Destroy the drawer (unload current loaded tiles)
       */
      destroy: function() {
        this.canvas.width = 1, this.canvas.height = 1, this.sketchCanvas = null, this.sketchContext = null;
      },
      /**
       * Clears the Drawer so it's ready to draw another frame.
       */
      clear: function() {
        if (this.canvas.innerHTML = "", this.useCanvas) {
          var t = this._calculateCanvasSize();
          if ((this.canvas.width !== t.x || this.canvas.height !== t.y) && (this.canvas.width = t.x, this.canvas.height = t.y, this._updateImageSmoothingEnabled(this.context), this.sketchCanvas !== null)) {
            var s = this._calculateSketchCanvasSize();
            this.sketchCanvas.width = s.x, this.sketchCanvas.height = s.y, this._updateImageSmoothingEnabled(this.sketchContext);
          }
          this._clear();
        }
      },
      _clear: function(t, s) {
        if (this.useCanvas) {
          var o = this._getContext(t);
          if (s)
            o.clearRect(s.x, s.y, s.width, s.height);
          else {
            var h = o.canvas;
            o.clearRect(0, 0, h.width, h.height);
          }
        }
      },
      /**
       * Scale from OpenSeadragon viewer rectangle to drawer rectangle
       * (ignoring rotation)
       * @param {OpenSeadragon.Rect} rectangle - The rectangle in viewport coordinate system.
       * @return {OpenSeadragon.Rect} Rectangle in drawer coordinate system.
       */
      viewportToDrawerRectangle: function(t) {
        var s = this.viewport.pixelFromPointNoRotate(t.getTopLeft(), !0), o = this.viewport.deltaPixelsFromPointsNoRotate(t.getSize(), !0);
        return new e.Rect(
          s.x * e.pixelDensityRatio,
          s.y * e.pixelDensityRatio,
          o.x * e.pixelDensityRatio,
          o.y * e.pixelDensityRatio
        );
      },
      /**
       * Draws the given tile.
       * @param {OpenSeadragon.Tile} tile - The tile to draw.
       * @param {Function} drawingHandler - Method for firing the drawing event if using canvas.
       * drawingHandler({context, tile, rendered})
       * @param {Boolean} useSketch - Whether to use the sketch canvas or not.
       * where <code>rendered</code> is the context with the pre-drawn image.
       * @param {Float} [scale=1] - Apply a scale to tile position and size. Defaults to 1.
       * @param {OpenSeadragon.Point} [translate] A translation vector to offset tile position
       * @param {Boolean} [shouldRoundPositionAndSize] - Tells whether to round
       * position and size of tiles supporting alpha channel in non-transparency
       * context.
       */
      drawTile: function(t, s, o, h, i, n) {
        if (e.console.assert(t, "[Drawer.drawTile] tile is required"), e.console.assert(s, "[Drawer.drawTile] drawingHandler is required"), this.useCanvas) {
          var r = this._getContext(o);
          h = h || 1, t.drawCanvas(r, s, h, i, n);
        } else
          t.drawHTML(this.canvas);
      },
      _getContext: function(t) {
        var s = this.context;
        if (t) {
          if (this.sketchCanvas === null) {
            this.sketchCanvas = document.createElement("canvas");
            var o = this._calculateSketchCanvasSize();
            if (this.sketchCanvas.width = o.x, this.sketchCanvas.height = o.y, this.sketchContext = this.sketchCanvas.getContext("2d"), this.viewport.getRotation() === 0) {
              var h = this;
              this.viewer.addHandler("rotate", function i() {
                if (h.viewport.getRotation() !== 0) {
                  h.viewer.removeHandler("rotate", i);
                  var n = h._calculateSketchCanvasSize();
                  h.sketchCanvas.width = n.x, h.sketchCanvas.height = n.y;
                }
              });
            }
            this._updateImageSmoothingEnabled(this.sketchContext);
          }
          s = this.sketchContext;
        }
        return s;
      },
      // private
      saveContext: function(t) {
        this.useCanvas && this._getContext(t).save();
      },
      // private
      restoreContext: function(t) {
        this.useCanvas && this._getContext(t).restore();
      },
      // private
      setClip: function(t, s) {
        if (this.useCanvas) {
          var o = this._getContext(s);
          o.beginPath(), o.rect(t.x, t.y, t.width, t.height), o.clip();
        }
      },
      // private
      drawRectangle: function(t, s, o) {
        if (this.useCanvas) {
          var h = this._getContext(o);
          h.save(), h.fillStyle = s, h.fillRect(t.x, t.y, t.width, t.height), h.restore();
        }
      },
      /**
       * Blends the sketch canvas in the main canvas.
       * @param {Object} options The options
       * @param {Float} options.opacity The opacity of the blending.
       * @param {Float} [options.scale=1] The scale at which tiles were drawn on
       * the sketch. Default is 1.
       * Use scale to draw at a lower scale and then enlarge onto the main canvas.
       * @param {OpenSeadragon.Point} [options.translate] A translation vector
       * that was used to draw the tiles
       * @param {String} [options.compositeOperation] - How the image is
       * composited onto other images; see compositeOperation in
       * {@link OpenSeadragon.Options} for possible values.
       * @param {OpenSeadragon.Rect} [options.bounds] The part of the sketch
       * canvas to blend in the main canvas. If specified, options.scale and
       * options.translate get ignored.
       */
      blendSketch: function(t, s, o, h) {
        var i = t;
        if (e.isPlainObject(i) || (i = {
          opacity: t,
          scale: s,
          translate: o,
          compositeOperation: h
        }), !(!this.useCanvas || !this.sketchCanvas)) {
          t = i.opacity, h = i.compositeOperation;
          var n = i.bounds;
          if (this.context.save(), this.context.globalAlpha = t, h && (this.context.globalCompositeOperation = h), n)
            n.x < 0 && (n.width += n.x, n.x = 0), n.x + n.width > this.canvas.width && (n.width = this.canvas.width - n.x), n.y < 0 && (n.height += n.y, n.y = 0), n.y + n.height > this.canvas.height && (n.height = this.canvas.height - n.y), this.context.drawImage(
              this.sketchCanvas,
              n.x,
              n.y,
              n.width,
              n.height,
              n.x,
              n.y,
              n.width,
              n.height
            );
          else {
            s = i.scale || 1, o = i.translate;
            var r = o instanceof e.Point ? o : new e.Point(0, 0), l = 0, d = 0;
            if (o) {
              var f = this.sketchCanvas.width - this.canvas.width, y = this.sketchCanvas.height - this.canvas.height;
              l = Math.round(f / 2), d = Math.round(y / 2);
            }
            this.context.drawImage(
              this.sketchCanvas,
              r.x - l * s,
              r.y - d * s,
              (this.canvas.width + 2 * l) * s,
              (this.canvas.height + 2 * d) * s,
              -l,
              -d,
              this.canvas.width + 2 * l,
              this.canvas.height + 2 * d
            );
          }
          this.context.restore();
        }
      },
      // private
      drawDebugInfo: function(t, s, o, h) {
        if (this.useCanvas) {
          var i = this.viewer.world.getIndexOfItem(h) % this.debugGridColor.length, n = this.context;
          n.save(), n.lineWidth = 2 * e.pixelDensityRatio, n.font = "small-caps bold " + 13 * e.pixelDensityRatio + "px arial", n.strokeStyle = this.debugGridColor[i], n.fillStyle = this.debugGridColor[i], this.viewport.degrees !== 0 && this._offsetForRotation({ degrees: this.viewport.degrees }), h.getRotation(!0) % 360 !== 0 && this._offsetForRotation({
            degrees: h.getRotation(!0),
            point: h.viewport.pixelFromPointNoRotate(
              h._getRotationPoint(!0),
              !0
            )
          }), h.viewport.degrees === 0 && h.getRotation(!0) % 360 === 0 && h._drawer.viewer.viewport.getFlip() && h._drawer._flip(), n.strokeRect(
            t.position.x * e.pixelDensityRatio,
            t.position.y * e.pixelDensityRatio,
            t.size.x * e.pixelDensityRatio,
            t.size.y * e.pixelDensityRatio
          );
          var r = (t.position.x + t.size.x / 2) * e.pixelDensityRatio, l = (t.position.y + t.size.y / 2) * e.pixelDensityRatio;
          n.translate(r, l), n.rotate(Math.PI / 180 * -this.viewport.degrees), n.translate(-r, -l), t.x === 0 && t.y === 0 && (n.fillText(
            "Zoom: " + this.viewport.getZoom(),
            t.position.x * e.pixelDensityRatio,
            (t.position.y - 30) * e.pixelDensityRatio
          ), n.fillText(
            "Pan: " + this.viewport.getBounds().toString(),
            t.position.x * e.pixelDensityRatio,
            (t.position.y - 20) * e.pixelDensityRatio
          )), n.fillText(
            "Level: " + t.level,
            (t.position.x + 10) * e.pixelDensityRatio,
            (t.position.y + 20) * e.pixelDensityRatio
          ), n.fillText(
            "Column: " + t.x,
            (t.position.x + 10) * e.pixelDensityRatio,
            (t.position.y + 30) * e.pixelDensityRatio
          ), n.fillText(
            "Row: " + t.y,
            (t.position.x + 10) * e.pixelDensityRatio,
            (t.position.y + 40) * e.pixelDensityRatio
          ), n.fillText(
            "Order: " + o + " of " + s,
            (t.position.x + 10) * e.pixelDensityRatio,
            (t.position.y + 50) * e.pixelDensityRatio
          ), n.fillText(
            "Size: " + t.size.toString(),
            (t.position.x + 10) * e.pixelDensityRatio,
            (t.position.y + 60) * e.pixelDensityRatio
          ), n.fillText(
            "Position: " + t.position.toString(),
            (t.position.x + 10) * e.pixelDensityRatio,
            (t.position.y + 70) * e.pixelDensityRatio
          ), this.viewport.degrees !== 0 && this._restoreRotationChanges(), h.getRotation(!0) % 360 !== 0 && this._restoreRotationChanges(), h.viewport.degrees === 0 && h.getRotation(!0) % 360 === 0 && h._drawer.viewer.viewport.getFlip() && h._drawer._flip(), n.restore();
        }
      },
      // private
      debugRect: function(t) {
        if (this.useCanvas) {
          var s = this.context;
          s.save(), s.lineWidth = 2 * e.pixelDensityRatio, s.strokeStyle = this.debugGridColor[0], s.fillStyle = this.debugGridColor[0], s.strokeRect(
            t.x * e.pixelDensityRatio,
            t.y * e.pixelDensityRatio,
            t.width * e.pixelDensityRatio,
            t.height * e.pixelDensityRatio
          ), s.restore();
        }
      },
      /**
       * Turns image smoothing on or off for this viewer. Note: Ignored in some (especially older) browsers that do not support this property.
       *
       * @function
       * @param {Boolean} [imageSmoothingEnabled] - Whether or not the image is
       * drawn smoothly on the canvas; see imageSmoothingEnabled in
       * {@link OpenSeadragon.Options} for more explanation.
       */
      setImageSmoothingEnabled: function(t) {
        this.useCanvas && (this._imageSmoothingEnabled = t, this._updateImageSmoothingEnabled(this.context), this.viewer.forceRedraw());
      },
      // private
      _updateImageSmoothingEnabled: function(t) {
        t.msImageSmoothingEnabled = this._imageSmoothingEnabled, t.imageSmoothingEnabled = this._imageSmoothingEnabled;
      },
      /**
       * Get the canvas size
       * @param {Boolean} sketch If set to true return the size of the sketch canvas
       * @returns {OpenSeadragon.Point} The size of the canvas
       */
      getCanvasSize: function(t) {
        var s = this._getContext(t).canvas;
        return new e.Point(s.width, s.height);
      },
      getCanvasCenter: function() {
        return new e.Point(this.canvas.width / 2, this.canvas.height / 2);
      },
      // private
      _offsetForRotation: function(t) {
        var s = t.point ? t.point.times(e.pixelDensityRatio) : this.getCanvasCenter(), o = this._getContext(t.useSketch);
        o.save(), o.translate(s.x, s.y), this.viewer.viewport.flipped ? (o.rotate(Math.PI / 180 * -t.degrees), o.scale(-1, 1)) : o.rotate(Math.PI / 180 * t.degrees), o.translate(-s.x, -s.y);
      },
      // private
      _flip: function(t) {
        t = t || {};
        var s = t.point ? t.point.times(e.pixelDensityRatio) : this.getCanvasCenter(), o = this._getContext(t.useSketch);
        o.translate(s.x, 0), o.scale(-1, 1), o.translate(-s.x, 0);
      },
      // private
      _restoreRotationChanges: function(t) {
        var s = this._getContext(t);
        s.restore();
      },
      // private
      _calculateCanvasSize: function() {
        var t = e.pixelDensityRatio, s = this.viewport.getContainerSize();
        return {
          // canvas width and height are integers
          x: Math.round(s.x * t),
          y: Math.round(s.y * t)
        };
      },
      // private
      _calculateSketchCanvasSize: function() {
        var t = this._calculateCanvasSize();
        if (this.viewport.getRotation() === 0)
          return t;
        var s = Math.ceil(Math.sqrt(
          t.x * t.x + t.y * t.y
        ));
        return {
          x: s,
          y: s
        };
      }
    };
  }(D), function(e) {
    e.Viewport = function(t) {
      var s = arguments;
      s.length && s[0] instanceof e.Point && (t = {
        containerSize: s[0],
        contentSize: s[1],
        config: s[2]
      }), t.config && (e.extend(!0, t, t.config), delete t.config), this._margins = e.extend({
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }, t.margins || {}), delete t.margins, e.extend(!0, this, {
        //required settings
        containerSize: null,
        contentSize: null,
        //internal state properties
        zoomPoint: null,
        viewer: null,
        //configurable options
        springStiffness: e.DEFAULT_SETTINGS.springStiffness,
        animationTime: e.DEFAULT_SETTINGS.animationTime,
        minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio,
        maxZoomPixelRatio: e.DEFAULT_SETTINGS.maxZoomPixelRatio,
        visibilityRatio: e.DEFAULT_SETTINGS.visibilityRatio,
        wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal,
        wrapVertical: e.DEFAULT_SETTINGS.wrapVertical,
        defaultZoomLevel: e.DEFAULT_SETTINGS.defaultZoomLevel,
        minZoomLevel: e.DEFAULT_SETTINGS.minZoomLevel,
        maxZoomLevel: e.DEFAULT_SETTINGS.maxZoomLevel,
        degrees: e.DEFAULT_SETTINGS.degrees,
        flipped: e.DEFAULT_SETTINGS.flipped,
        homeFillsViewer: e.DEFAULT_SETTINGS.homeFillsViewer,
        silenceMultiImageWarnings: e.DEFAULT_SETTINGS.silenceMultiImageWarnings
      }, t), this._updateContainerInnerSize(), this.centerSpringX = new e.Spring({
        initial: 0,
        springStiffness: this.springStiffness,
        animationTime: this.animationTime
      }), this.centerSpringY = new e.Spring({
        initial: 0,
        springStiffness: this.springStiffness,
        animationTime: this.animationTime
      }), this.zoomSpring = new e.Spring({
        exponential: !0,
        initial: 1,
        springStiffness: this.springStiffness,
        animationTime: this.animationTime
      }), this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, this._setContentBounds(new e.Rect(0, 0, 1, 1), 1), this.goHome(!0), this.update();
    }, e.Viewport.prototype = {
      /**
       * Updates the viewport's home bounds and constraints for the given content size.
       * @function
       * @param {OpenSeadragon.Point} contentSize - size of the content in content units
       * @return {OpenSeadragon.Viewport} Chainable.
       * @fires OpenSeadragon.Viewer.event:reset-size
       */
      resetContentSize: function(t) {
        return e.console.assert(t, "[Viewport.resetContentSize] contentSize is required"), e.console.assert(t instanceof e.Point, "[Viewport.resetContentSize] contentSize must be an OpenSeadragon.Point"), e.console.assert(t.x > 0, "[Viewport.resetContentSize] contentSize.x must be greater than 0"), e.console.assert(t.y > 0, "[Viewport.resetContentSize] contentSize.y must be greater than 0"), this._setContentBounds(new e.Rect(0, 0, 1, t.y / t.x), t.x), this;
      },
      // deprecated
      setHomeBounds: function(t, s) {
        e.console.error("[Viewport.setHomeBounds] this function is deprecated; The content bounds should not be set manually."), this._setContentBounds(t, s);
      },
      // Set the viewport's content bounds
      // @param {OpenSeadragon.Rect} bounds - the new bounds in viewport coordinates
      // without rotation
      // @param {Number} contentFactor - how many content units per viewport unit
      // @fires OpenSeadragon.Viewer.event:reset-size
      // @private
      _setContentBounds: function(t, s) {
        e.console.assert(t, "[Viewport._setContentBounds] bounds is required"), e.console.assert(t instanceof e.Rect, "[Viewport._setContentBounds] bounds must be an OpenSeadragon.Rect"), e.console.assert(t.width > 0, "[Viewport._setContentBounds] bounds.width must be greater than 0"), e.console.assert(t.height > 0, "[Viewport._setContentBounds] bounds.height must be greater than 0"), this._contentBoundsNoRotate = t.clone(), this._contentSizeNoRotate = this._contentBoundsNoRotate.getSize().times(
          s
        ), this._contentBounds = t.rotate(this.degrees).getBoundingBox(), this._contentSize = this._contentBounds.getSize().times(s), this._contentAspectRatio = this._contentSize.x / this._contentSize.y, this.viewer && this.viewer.raiseEvent("reset-size", {
          contentSize: this._contentSizeNoRotate.clone(),
          contentFactor: s,
          homeBounds: this._contentBoundsNoRotate.clone(),
          contentBounds: this._contentBounds.clone()
        });
      },
      /**
       * Returns the home zoom in "viewport zoom" value.
       * @function
       * @returns {Number} The home zoom in "viewport zoom".
       */
      getHomeZoom: function() {
        if (this.defaultZoomLevel)
          return this.defaultZoomLevel;
        var t = this._contentAspectRatio / this.getAspectRatio(), s;
        return this.homeFillsViewer ? s = t >= 1 ? t : 1 : s = t >= 1 ? 1 : t, s / this._contentBounds.width;
      },
      /**
       * Returns the home bounds in viewport coordinates.
       * @function
       * @returns {OpenSeadragon.Rect} The home bounds in vewport coordinates.
       */
      getHomeBounds: function() {
        return this.getHomeBoundsNoRotate().rotate(-this.getRotation());
      },
      /**
       * Returns the home bounds in viewport coordinates.
       * This method ignores the viewport rotation. Use
       * {@link OpenSeadragon.Viewport#getHomeBounds} to take it into account.
       * @function
       * @returns {OpenSeadragon.Rect} The home bounds in vewport coordinates.
       */
      getHomeBoundsNoRotate: function() {
        var t = this._contentBounds.getCenter(), s = 1 / this.getHomeZoom(), o = s / this.getAspectRatio();
        return new e.Rect(
          t.x - s / 2,
          t.y - o / 2,
          s,
          o
        );
      },
      /**
       * @function
       * @param {Boolean} immediately
       * @fires OpenSeadragon.Viewer.event:home
       */
      goHome: function(t) {
        return this.viewer && this.viewer.raiseEvent("home", {
          immediately: t
        }), this.fitBounds(this.getHomeBounds(), t);
      },
      /**
       * @function
       */
      getMinZoom: function() {
        var t = this.getHomeZoom(), s = this.minZoomLevel ? this.minZoomLevel : this.minZoomImageRatio * t;
        return s;
      },
      /**
       * @function
       */
      getMaxZoom: function() {
        var t = this.maxZoomLevel;
        return t || (t = this._contentSize.x * this.maxZoomPixelRatio / this._containerInnerSize.x, t /= this._contentBounds.width), Math.max(t, this.getHomeZoom());
      },
      /**
       * @function
       */
      getAspectRatio: function() {
        return this._containerInnerSize.x / this._containerInnerSize.y;
      },
      /**
       * @function
       * @returns {OpenSeadragon.Point} The size of the container, in screen coordinates.
       */
      getContainerSize: function() {
        return new e.Point(
          this.containerSize.x,
          this.containerSize.y
        );
      },
      /**
       * The margins push the "home" region in from the sides by the specified amounts.
       * @function
       * @returns {Object} Properties (Numbers, in screen coordinates): left, top, right, bottom.
       */
      getMargins: function() {
        return e.extend({}, this._margins);
      },
      /**
       * The margins push the "home" region in from the sides by the specified amounts.
       * @function
       * @param {Object} margins - Properties (Numbers, in screen coordinates): left, top, right, bottom.
       */
      setMargins: function(t) {
        e.console.assert(e.type(t) === "object", "[Viewport.setMargins] margins must be an object"), this._margins = e.extend({
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }, t), this._updateContainerInnerSize(), this.viewer && this.viewer.forceRedraw();
      },
      /**
       * Returns the bounds of the visible area in viewport coordinates.
       * @function
       * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
       * @returns {OpenSeadragon.Rect} The location you are zoomed/panned to, in viewport coordinates.
       */
      getBounds: function(t) {
        return this.getBoundsNoRotate(t).rotate(-this.getRotation());
      },
      /**
       * Returns the bounds of the visible area in viewport coordinates.
       * This method ignores the viewport rotation. Use
       * {@link OpenSeadragon.Viewport#getBounds} to take it into account.
       * @function
       * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
       * @returns {OpenSeadragon.Rect} The location you are zoomed/panned to, in viewport coordinates.
       */
      getBoundsNoRotate: function(t) {
        var s = this.getCenter(t), o = 1 / this.getZoom(t), h = o / this.getAspectRatio();
        return new e.Rect(
          s.x - o / 2,
          s.y - h / 2,
          o,
          h
        );
      },
      /**
       * @function
       * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
       * @returns {OpenSeadragon.Rect} The location you are zoomed/panned to,
       * including the space taken by margins, in viewport coordinates.
       */
      getBoundsWithMargins: function(t) {
        return this.getBoundsNoRotateWithMargins(t).rotate(
          -this.getRotation(),
          this.getCenter(t)
        );
      },
      /**
       * @function
       * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
       * @returns {OpenSeadragon.Rect} The location you are zoomed/panned to,
       * including the space taken by margins, in viewport coordinates.
       */
      getBoundsNoRotateWithMargins: function(t) {
        var s = this.getBoundsNoRotate(t), o = this._containerInnerSize.x * this.getZoom(t);
        return s.x -= this._margins.left / o, s.y -= this._margins.top / o, s.width += (this._margins.left + this._margins.right) / o, s.height += (this._margins.top + this._margins.bottom) / o, s;
      },
      /**
       * @function
       * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
       */
      getCenter: function(t) {
        var s = new e.Point(
          this.centerSpringX.current.value,
          this.centerSpringY.current.value
        ), o = new e.Point(
          this.centerSpringX.target.value,
          this.centerSpringY.target.value
        ), h, i, n, r, l, d, f, y;
        return t ? s : this.zoomPoint ? (h = this.pixelFromPoint(this.zoomPoint, !0), i = this.getZoom(), n = 1 / i, r = n / this.getAspectRatio(), l = new e.Rect(
          s.x - n / 2,
          s.y - r / 2,
          n,
          r
        ), d = this._pixelFromPoint(this.zoomPoint, l), f = d.minus(h), y = f.divide(this._containerInnerSize.x * i), o.plus(y)) : o;
      },
      /**
       * @function
       * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
       */
      getZoom: function(t) {
        return t ? this.zoomSpring.current.value : this.zoomSpring.target.value;
      },
      // private
      _applyZoomConstraints: function(t) {
        return Math.max(
          Math.min(t, this.getMaxZoom()),
          this.getMinZoom()
        );
      },
      /**
       * @function
       * @private
       * @param {OpenSeadragon.Rect} bounds
       * @return {OpenSeadragon.Rect} constrained bounds.
       */
      _applyBoundaryConstraints: function(t) {
        var s = new e.Rect(
          t.x,
          t.y,
          t.width,
          t.height
        );
        if (!this.wrapHorizontal) {
          var o = this.visibilityRatio * s.width, h = s.x + s.width, i = this._contentBoundsNoRotate.x + this._contentBoundsNoRotate.width, n = this._contentBoundsNoRotate.x - h + o, r = i - s.x - o;
          o > this._contentBoundsNoRotate.width ? s.x += (n + r) / 2 : r < 0 ? s.x += r : n > 0 && (s.x += n);
        }
        if (!this.wrapVertical) {
          var l = this.visibilityRatio * s.height, d = s.y + s.height, f = this._contentBoundsNoRotate.y + this._contentBoundsNoRotate.height, y = this._contentBoundsNoRotate.y - d + l, v = f - s.y - l;
          l > this._contentBoundsNoRotate.height ? s.y += (y + v) / 2 : v < 0 ? s.y += v : y > 0 && (s.y += y);
        }
        return s;
      },
      /**
       * @function
       * @private
       * @param {Boolean} [immediately=false] - whether the function that triggered this event was
       * called with the "immediately" flag
       */
      _raiseConstraintsEvent: function(t) {
        this.viewer && this.viewer.raiseEvent("constrain", {
          immediately: t
        });
      },
      /**
       * Enforces the minZoom, maxZoom and visibilityRatio constraints by
       * zooming and panning to the closest acceptable zoom and location.
       * @function
       * @param {Boolean} [immediately=false]
       * @return {OpenSeadragon.Viewport} Chainable.
       * @fires OpenSeadragon.Viewer.event:constrain
       */
      applyConstraints: function(t) {
        var s = this.getZoom(), o = this._applyZoomConstraints(s);
        s !== o && this.zoomTo(o, this.zoomPoint, t);
        var h = this.getBoundsNoRotate(), i = this._applyBoundaryConstraints(h);
        return this._raiseConstraintsEvent(t), (h.x !== i.x || h.y !== i.y || t) && this.fitBounds(
          i.rotate(-this.getRotation()),
          t
        ), this;
      },
      /**
       * Equivalent to {@link OpenSeadragon.Viewport#applyConstraints}
       * @function
       * @param {Boolean} [immediately=false]
       * @return {OpenSeadragon.Viewport} Chainable.
       * @fires OpenSeadragon.Viewer.event:constrain
       */
      ensureVisible: function(t) {
        return this.applyConstraints(t);
      },
      /**
       * @function
       * @private
       * @param {OpenSeadragon.Rect} bounds
       * @param {Object} options (immediately=false, constraints=false)
       * @return {OpenSeadragon.Viewport} Chainable.
       */
      _fitBounds: function(t, s) {
        s = s || {};
        var o = s.immediately || !1, h = s.constraints || !1, i = this.getAspectRatio(), n = t.getCenter(), r = new e.Rect(
          t.x,
          t.y,
          t.width,
          t.height,
          t.degrees + this.getRotation()
        ).getBoundingBox();
        r.getAspectRatio() >= i ? r.height = r.width / i : r.width = r.height * i, r.x = n.x - r.width / 2, r.y = n.y - r.height / 2;
        var l = 1 / r.width;
        if (h) {
          var d = r.getAspectRatio(), f = this._applyZoomConstraints(l);
          l !== f && (l = f, r.width = 1 / l, r.x = n.x - r.width / 2, r.height = r.width / d, r.y = n.y - r.height / 2), r = this._applyBoundaryConstraints(r), n = r.getCenter(), this._raiseConstraintsEvent(o);
        }
        if (o)
          return this.panTo(n, !0), this.zoomTo(l, null, !0);
        this.panTo(this.getCenter(!0), !0), this.zoomTo(this.getZoom(!0), null, !0);
        var y = this.getBounds(), v = this.getZoom();
        if (v === 0 || Math.abs(l / v - 1) < 1e-8)
          return this.zoomTo(l, !0), this.panTo(n, o);
        r = r.rotate(-this.getRotation());
        var T = r.getTopLeft().times(l).minus(y.getTopLeft().times(v)).divide(l - v);
        return this.zoomTo(l, T, o);
      },
      /**
       * Makes the viewport zoom and pan so that the specified bounds take
       * as much space as possible in the viewport.
       * Note: this method ignores the constraints (minZoom, maxZoom and
       * visibilityRatio).
       * Use {@link OpenSeadragon.Viewport#fitBoundsWithConstraints} to enforce
       * them.
       * @function
       * @param {OpenSeadragon.Rect} bounds
       * @param {Boolean} [immediately=false]
       * @return {OpenSeadragon.Viewport} Chainable.
       */
      fitBounds: function(t, s) {
        return this._fitBounds(t, {
          immediately: s,
          constraints: !1
        });
      },
      /**
       * Makes the viewport zoom and pan so that the specified bounds take
       * as much space as possible in the viewport while enforcing the constraints
       * (minZoom, maxZoom and visibilityRatio).
       * Note: because this method enforces the constraints, part of the
       * provided bounds may end up outside of the viewport.
       * Use {@link OpenSeadragon.Viewport#fitBounds} to ignore them.
       * @function
       * @param {OpenSeadragon.Rect} bounds
       * @param {Boolean} [immediately=false]
       * @return {OpenSeadragon.Viewport} Chainable.
       */
      fitBoundsWithConstraints: function(t, s) {
        return this._fitBounds(t, {
          immediately: s,
          constraints: !0
        });
      },
      /**
       * Zooms so the image just fills the viewer vertically.
       * @param {Boolean} immediately
       * @return {OpenSeadragon.Viewport} Chainable.
       */
      fitVertically: function(t) {
        var s = new e.Rect(
          this._contentBounds.x + this._contentBounds.width / 2,
          this._contentBounds.y,
          0,
          this._contentBounds.height
        );
        return this.fitBounds(s, t);
      },
      /**
       * Zooms so the image just fills the viewer horizontally.
       * @param {Boolean} immediately
       * @return {OpenSeadragon.Viewport} Chainable.
       */
      fitHorizontally: function(t) {
        var s = new e.Rect(
          this._contentBounds.x,
          this._contentBounds.y + this._contentBounds.height / 2,
          this._contentBounds.width,
          0
        );
        return this.fitBounds(s, t);
      },
      /**
       * Returns bounds taking constraints into account
       * Added to improve constrained panning
       * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
       * @return {OpenSeadragon.Viewport} Chainable.
       */
      getConstrainedBounds: function(t) {
        var s, o;
        return s = this.getBounds(t), o = this._applyBoundaryConstraints(s), o;
      },
      /**
       * @function
       * @param {OpenSeadragon.Point} delta
       * @param {Boolean} immediately
       * @return {OpenSeadragon.Viewport} Chainable.
       * @fires OpenSeadragon.Viewer.event:pan
       */
      panBy: function(t, s) {
        var o = new e.Point(
          this.centerSpringX.target.value,
          this.centerSpringY.target.value
        );
        return this.panTo(o.plus(t), s);
      },
      /**
       * @function
       * @param {OpenSeadragon.Point} center
       * @param {Boolean} immediately
       * @return {OpenSeadragon.Viewport} Chainable.
       * @fires OpenSeadragon.Viewer.event:pan
       */
      panTo: function(t, s) {
        return s ? (this.centerSpringX.resetTo(t.x), this.centerSpringY.resetTo(t.y)) : (this.centerSpringX.springTo(t.x), this.centerSpringY.springTo(t.y)), this.viewer && this.viewer.raiseEvent("pan", {
          center: t,
          immediately: s
        }), this;
      },
      /**
       * @function
       * @return {OpenSeadragon.Viewport} Chainable.
       * @fires OpenSeadragon.Viewer.event:zoom
       */
      zoomBy: function(t, s, o) {
        return this.zoomTo(
          this.zoomSpring.target.value * t,
          s,
          o
        );
      },
      /**
       * Zooms to the specified zoom level
       * @function
       * @param {Number} zoom The zoom level to zoom to.
       * @param {OpenSeadragon.Point} [refPoint] The point which will stay at
       * the same screen location. Defaults to the viewport center.
       * @param {Boolean} [immediately=false]
       * @return {OpenSeadragon.Viewport} Chainable.
       * @fires OpenSeadragon.Viewer.event:zoom
       */
      zoomTo: function(t, s, o) {
        var h = this;
        return this.zoomPoint = s instanceof e.Point && !isNaN(s.x) && !isNaN(s.y) ? s : null, o ? this._adjustCenterSpringsForZoomPoint(function() {
          h.zoomSpring.resetTo(t);
        }) : this.zoomSpring.springTo(t), this.viewer && this.viewer.raiseEvent("zoom", {
          zoom: t,
          refPoint: s,
          immediately: o
        }), this;
      },
      /**
       * Rotates this viewport to the angle specified.
       * @function
       * @param {Number} degrees The degrees to set the rotation to.
       * @return {OpenSeadragon.Viewport} Chainable.
       */
      setRotation: function(t) {
        return !this.viewer || !this.viewer.drawer.canRotate() ? this : (this.degrees = e.positiveModulo(t, 360), this._setContentBounds(
          this.viewer.world.getHomeBounds(),
          this.viewer.world.getContentFactor()
        ), this.viewer.forceRedraw(), this.viewer.raiseEvent("rotate", { degrees: t }), this);
      },
      /**
       * Gets the current rotation in degrees.
       * @function
       * @return {Number} The current rotation in degrees.
       */
      getRotation: function() {
        return this.degrees;
      },
      /**
       * @function
       * @return {OpenSeadragon.Viewport} Chainable.
       * @fires OpenSeadragon.Viewer.event:resize
       */
      resize: function(t, s) {
        var o = this.getBoundsNoRotate(), h = o, i;
        return this.containerSize.x = t.x, this.containerSize.y = t.y, this._updateContainerInnerSize(), s && (i = t.x / this.containerSize.x, h.width = o.width * i, h.height = h.width / this.getAspectRatio()), this.viewer && this.viewer.raiseEvent("resize", {
          newContainerSize: t,
          maintain: s
        }), this.fitBounds(h, !0);
      },
      // private
      _updateContainerInnerSize: function() {
        this._containerInnerSize = new e.Point(
          Math.max(1, this.containerSize.x - (this._margins.left + this._margins.right)),
          Math.max(1, this.containerSize.y - (this._margins.top + this._margins.bottom))
        );
      },
      /**
       * Update the zoom and center (X and Y) springs.
       * @function
       * @returns {Boolean} True if any change has been made, false otherwise.
       */
      update: function() {
        var t = this;
        this._adjustCenterSpringsForZoomPoint(function() {
          t.zoomSpring.update();
        }), this.centerSpringX.update(), this.centerSpringY.update();
        var s = this.centerSpringX.current.value !== this._oldCenterX || this.centerSpringY.current.value !== this._oldCenterY || this.zoomSpring.current.value !== this._oldZoom;
        return this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, s;
      },
      _adjustCenterSpringsForZoomPoint: function(t) {
        if (this.zoomPoint) {
          var s = this.pixelFromPoint(this.zoomPoint, !0);
          t();
          var o = this.pixelFromPoint(this.zoomPoint, !0), h = o.minus(s), i = this.deltaPointsFromPixels(
            h,
            !0
          );
          this.centerSpringX.shiftBy(i.x), this.centerSpringY.shiftBy(i.y), this.zoomSpring.isAtTargetValue() && (this.zoomPoint = null);
        } else
          t();
      },
      /**
       * Convert a delta (translation vector) from viewport coordinates to pixels
       * coordinates. This method does not take rotation into account.
       * Consider using deltaPixelsFromPoints if you need to account for rotation.
       * @param {OpenSeadragon.Point} deltaPoints - The translation vector to convert.
       * @param {Boolean} [current=false] - Pass true for the current location;
       * defaults to false (target location).
       * @returns {OpenSeadragon.Point}
       */
      deltaPixelsFromPointsNoRotate: function(t, s) {
        return t.times(
          this._containerInnerSize.x * this.getZoom(s)
        );
      },
      /**
       * Convert a delta (translation vector) from viewport coordinates to pixels
       * coordinates.
       * @param {OpenSeadragon.Point} deltaPoints - The translation vector to convert.
       * @param {Boolean} [current=false] - Pass true for the current location;
       * defaults to false (target location).
       * @returns {OpenSeadragon.Point}
       */
      deltaPixelsFromPoints: function(t, s) {
        return this.deltaPixelsFromPointsNoRotate(
          t.rotate(this.getRotation()),
          s
        );
      },
      /**
       * Convert a delta (translation vector) from pixels coordinates to viewport
       * coordinates. This method does not take rotation into account.
       * Consider using deltaPointsFromPixels if you need to account for rotation.
       * @param {OpenSeadragon.Point} deltaPixels - The translation vector to convert.
       * @param {Boolean} [current=false] - Pass true for the current location;
       * defaults to false (target location).
       * @returns {OpenSeadragon.Point}
       */
      deltaPointsFromPixelsNoRotate: function(t, s) {
        return t.divide(
          this._containerInnerSize.x * this.getZoom(s)
        );
      },
      /**
       * Convert a delta (translation vector) from pixels coordinates to viewport
       * coordinates.
       * @param {OpenSeadragon.Point} deltaPixels - The translation vector to convert.
       * @param {Boolean} [current=false] - Pass true for the current location;
       * defaults to false (target location).
       * @returns {OpenSeadragon.Point}
       */
      deltaPointsFromPixels: function(t, s) {
        return this.deltaPointsFromPixelsNoRotate(t, s).rotate(-this.getRotation());
      },
      /**
       * Convert viewport coordinates to pixels coordinates.
       * This method does not take rotation into account.
       * Consider using pixelFromPoint if you need to account for rotation.
       * @param {OpenSeadragon.Point} point the viewport coordinates
       * @param {Boolean} [current=false] - Pass true for the current location;
       * defaults to false (target location).
       * @returns {OpenSeadragon.Point}
       */
      pixelFromPointNoRotate: function(t, s) {
        return this._pixelFromPointNoRotate(
          t,
          this.getBoundsNoRotate(s)
        );
      },
      /**
       * Convert viewport coordinates to pixel coordinates.
       * @param {OpenSeadragon.Point} point the viewport coordinates
       * @param {Boolean} [current=false] - Pass true for the current location;
       * defaults to false (target location).
       * @returns {OpenSeadragon.Point}
       */
      pixelFromPoint: function(t, s) {
        return this._pixelFromPoint(t, this.getBoundsNoRotate(s));
      },
      // private
      _pixelFromPointNoRotate: function(t, s) {
        return t.minus(
          s.getTopLeft()
        ).times(
          this._containerInnerSize.x / s.width
        ).plus(
          new e.Point(this._margins.left, this._margins.top)
        );
      },
      // private
      _pixelFromPoint: function(t, s) {
        return this._pixelFromPointNoRotate(
          t.rotate(this.getRotation(), this.getCenter(!0)),
          s
        );
      },
      /**
       * Convert pixel coordinates to viewport coordinates.
       * This method does not take rotation into account.
       * Consider using pointFromPixel if you need to account for rotation.
       * @param {OpenSeadragon.Point} pixel Pixel coordinates
       * @param {Boolean} [current=false] - Pass true for the current location;
       * defaults to false (target location).
       * @returns {OpenSeadragon.Point}
       */
      pointFromPixelNoRotate: function(t, s) {
        var o = this.getBoundsNoRotate(s);
        return t.minus(
          new e.Point(this._margins.left, this._margins.top)
        ).divide(
          this._containerInnerSize.x / o.width
        ).plus(
          o.getTopLeft()
        );
      },
      /**
       * Convert pixel coordinates to viewport coordinates.
       * @param {OpenSeadragon.Point} pixel Pixel coordinates
       * @param {Boolean} [current=false] - Pass true for the current location;
       * defaults to false (target location).
       * @returns {OpenSeadragon.Point}
       */
      pointFromPixel: function(t, s) {
        return this.pointFromPixelNoRotate(t, s).rotate(
          -this.getRotation(),
          this.getCenter(!0)
        );
      },
      // private
      _viewportToImageDelta: function(t, s) {
        var o = this._contentBoundsNoRotate.width;
        return new e.Point(
          t * this._contentSizeNoRotate.x / o,
          s * this._contentSizeNoRotate.x / o
        );
      },
      /**
       * Translates from OpenSeadragon viewer coordinate system to image coordinate system.
       * This method can be called either by passing X,Y coordinates or an
       * OpenSeadragon.Point
       * Note: not accurate with multi-image; use TiledImage.viewportToImageCoordinates instead.
       * @function
       * @param {(OpenSeadragon.Point|Number)} viewerX either a point or the X
       * coordinate in viewport coordinate system.
       * @param {Number} [viewerY] Y coordinate in viewport coordinate system.
       * @return {OpenSeadragon.Point} a point representing the coordinates in the image.
       */
      viewportToImageCoordinates: function(t, s) {
        if (t instanceof e.Point)
          return this.viewportToImageCoordinates(t.x, t.y);
        if (this.viewer) {
          var o = this.viewer.world.getItemCount();
          if (o > 1)
            this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageCoordinates] is not accurate with multi-image; use TiledImage.viewportToImageCoordinates instead.");
          else if (o === 1) {
            var h = this.viewer.world.getItemAt(0);
            return h.viewportToImageCoordinates(t, s, !0);
          }
        }
        return this._viewportToImageDelta(
          t - this._contentBoundsNoRotate.x,
          s - this._contentBoundsNoRotate.y
        );
      },
      // private
      _imageToViewportDelta: function(t, s) {
        var o = this._contentBoundsNoRotate.width;
        return new e.Point(
          t / this._contentSizeNoRotate.x * o,
          s / this._contentSizeNoRotate.x * o
        );
      },
      /**
       * Translates from image coordinate system to OpenSeadragon viewer coordinate system
       * This method can be called either by passing X,Y coordinates or an
       * OpenSeadragon.Point
       * Note: not accurate with multi-image; use TiledImage.imageToViewportCoordinates instead.
       * @function
       * @param {(OpenSeadragon.Point | Number)} imageX the point or the
       * X coordinate in image coordinate system.
       * @param {Number} [imageY] Y coordinate in image coordinate system.
       * @return {OpenSeadragon.Point} a point representing the coordinates in the viewport.
       */
      imageToViewportCoordinates: function(t, s) {
        if (t instanceof e.Point)
          return this.imageToViewportCoordinates(t.x, t.y);
        if (this.viewer) {
          var o = this.viewer.world.getItemCount();
          if (o > 1)
            this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportCoordinates] is not accurate with multi-image; use TiledImage.imageToViewportCoordinates instead.");
          else if (o === 1) {
            var h = this.viewer.world.getItemAt(0);
            return h.imageToViewportCoordinates(t, s, !0);
          }
        }
        var i = this._imageToViewportDelta(t, s);
        return i.x += this._contentBoundsNoRotate.x, i.y += this._contentBoundsNoRotate.y, i;
      },
      /**
       * Translates from a rectangle which describes a portion of the image in
       * pixel coordinates to OpenSeadragon viewport rectangle coordinates.
       * This method can be called either by passing X,Y,width,height or an
       * OpenSeadragon.Rect
       * Note: not accurate with multi-image; use TiledImage.imageToViewportRectangle instead.
       * @function
       * @param {(OpenSeadragon.Rect | Number)} imageX the rectangle or the X
       * coordinate of the top left corner of the rectangle in image coordinate system.
       * @param {Number} [imageY] the Y coordinate of the top left corner of the rectangle
       * in image coordinate system.
       * @param {Number} [pixelWidth] the width in pixel of the rectangle.
       * @param {Number} [pixelHeight] the height in pixel of the rectangle.
       * @returns {OpenSeadragon.Rect} This image's bounds in viewport coordinates
       */
      imageToViewportRectangle: function(t, s, o, h) {
        var i = t;
        if (i instanceof e.Rect || (i = new e.Rect(t, s, o, h)), this.viewer) {
          var n = this.viewer.world.getItemCount();
          if (n > 1)
            this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportRectangle] is not accurate with multi-image; use TiledImage.imageToViewportRectangle instead.");
          else if (n === 1) {
            var r = this.viewer.world.getItemAt(0);
            return r.imageToViewportRectangle(
              t,
              s,
              o,
              h,
              !0
            );
          }
        }
        var l = this.imageToViewportCoordinates(i.x, i.y), d = this._imageToViewportDelta(i.width, i.height);
        return new e.Rect(
          l.x,
          l.y,
          d.x,
          d.y,
          i.degrees
        );
      },
      /**
       * Translates from a rectangle which describes a portion of
       * the viewport in point coordinates to image rectangle coordinates.
       * This method can be called either by passing X,Y,width,height or an
       * OpenSeadragon.Rect
       * Note: not accurate with multi-image; use TiledImage.viewportToImageRectangle instead.
       * @function
       * @param {(OpenSeadragon.Rect | Number)} viewerX either a rectangle or
       * the X coordinate of the top left corner of the rectangle in viewport
       * coordinate system.
       * @param {Number} [viewerY] the Y coordinate of the top left corner of the rectangle
       * in viewport coordinate system.
       * @param {Number} [pointWidth] the width of the rectangle in viewport coordinate system.
       * @param {Number} [pointHeight] the height of the rectangle in viewport coordinate system.
       */
      viewportToImageRectangle: function(t, s, o, h) {
        var i = t;
        if (i instanceof e.Rect || (i = new e.Rect(t, s, o, h)), this.viewer) {
          var n = this.viewer.world.getItemCount();
          if (n > 1)
            this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageRectangle] is not accurate with multi-image; use TiledImage.viewportToImageRectangle instead.");
          else if (n === 1) {
            var r = this.viewer.world.getItemAt(0);
            return r.viewportToImageRectangle(
              t,
              s,
              o,
              h,
              !0
            );
          }
        }
        var l = this.viewportToImageCoordinates(i.x, i.y), d = this._viewportToImageDelta(i.width, i.height);
        return new e.Rect(
          l.x,
          l.y,
          d.x,
          d.y,
          i.degrees
        );
      },
      /**
       * Convert pixel coordinates relative to the viewer element to image
       * coordinates.
       * Note: not accurate with multi-image.
       * @param {OpenSeadragon.Point} pixel
       * @returns {OpenSeadragon.Point}
       */
      viewerElementToImageCoordinates: function(t) {
        var s = this.pointFromPixel(t, !0);
        return this.viewportToImageCoordinates(s);
      },
      /**
       * Convert pixel coordinates relative to the image to
       * viewer element coordinates.
       * Note: not accurate with multi-image.
       * @param {OpenSeadragon.Point} pixel
       * @returns {OpenSeadragon.Point}
       */
      imageToViewerElementCoordinates: function(t) {
        var s = this.imageToViewportCoordinates(t);
        return this.pixelFromPoint(s, !0);
      },
      /**
       * Convert pixel coordinates relative to the window to image coordinates.
       * Note: not accurate with multi-image.
       * @param {OpenSeadragon.Point} pixel
       * @returns {OpenSeadragon.Point}
       */
      windowToImageCoordinates: function(t) {
        e.console.assert(
          this.viewer,
          "[Viewport.windowToImageCoordinates] the viewport must have a viewer."
        );
        var s = t.minus(
          e.getElementPosition(this.viewer.element)
        );
        return this.viewerElementToImageCoordinates(s);
      },
      /**
       * Convert image coordinates to pixel coordinates relative to the window.
       * Note: not accurate with multi-image.
       * @param {OpenSeadragon.Point} pixel
       * @returns {OpenSeadragon.Point}
       */
      imageToWindowCoordinates: function(t) {
        e.console.assert(
          this.viewer,
          "[Viewport.imageToWindowCoordinates] the viewport must have a viewer."
        );
        var s = this.imageToViewerElementCoordinates(t);
        return s.plus(
          e.getElementPosition(this.viewer.element)
        );
      },
      /**
       * Convert pixel coordinates relative to the viewer element to viewport
       * coordinates.
       * @param {OpenSeadragon.Point} pixel
       * @returns {OpenSeadragon.Point}
       */
      viewerElementToViewportCoordinates: function(t) {
        return this.pointFromPixel(t, !0);
      },
      /**
       * Convert viewport coordinates to pixel coordinates relative to the
       * viewer element.
       * @param {OpenSeadragon.Point} point
       * @returns {OpenSeadragon.Point}
       */
      viewportToViewerElementCoordinates: function(t) {
        return this.pixelFromPoint(t, !0);
      },
      /**
       * Convert a rectangle in pixel coordinates relative to the viewer element
       * to viewport coordinates.
       * @param {OpenSeadragon.Rect} rectangle the rectangle to convert
       * @returns {OpenSeadragon.Rect} the converted rectangle
       */
      viewerElementToViewportRectangle: function(t) {
        return e.Rect.fromSummits(
          this.pointFromPixel(t.getTopLeft(), !0),
          this.pointFromPixel(t.getTopRight(), !0),
          this.pointFromPixel(t.getBottomLeft(), !0)
        );
      },
      /**
       * Convert a rectangle in viewport coordinates to pixel coordinates relative
       * to the viewer element.
       * @param {OpenSeadragon.Rect} rectangle the rectangle to convert
       * @returns {OpenSeadragon.Rect} the converted rectangle
       */
      viewportToViewerElementRectangle: function(t) {
        return e.Rect.fromSummits(
          this.pixelFromPoint(t.getTopLeft(), !0),
          this.pixelFromPoint(t.getTopRight(), !0),
          this.pixelFromPoint(t.getBottomLeft(), !0)
        );
      },
      /**
       * Convert pixel coordinates relative to the window to viewport coordinates.
       * @param {OpenSeadragon.Point} pixel
       * @returns {OpenSeadragon.Point}
       */
      windowToViewportCoordinates: function(t) {
        e.console.assert(
          this.viewer,
          "[Viewport.windowToViewportCoordinates] the viewport must have a viewer."
        );
        var s = t.minus(
          e.getElementPosition(this.viewer.element)
        );
        return this.viewerElementToViewportCoordinates(s);
      },
      /**
       * Convert viewport coordinates to pixel coordinates relative to the window.
       * @param {OpenSeadragon.Point} point
       * @returns {OpenSeadragon.Point}
       */
      viewportToWindowCoordinates: function(t) {
        e.console.assert(
          this.viewer,
          "[Viewport.viewportToWindowCoordinates] the viewport must have a viewer."
        );
        var s = this.viewportToViewerElementCoordinates(t);
        return s.plus(
          e.getElementPosition(this.viewer.element)
        );
      },
      /**
       * Convert a viewport zoom to an image zoom.
       * Image zoom: ratio of the original image size to displayed image size.
       * 1 means original image size, 0.5 half size...
       * Viewport zoom: ratio of the displayed image's width to viewport's width.
       * 1 means identical width, 2 means image's width is twice the viewport's width...
       * Note: not accurate with multi-image.
       * @function
       * @param {Number} viewportZoom The viewport zoom
       * target zoom.
       * @returns {Number} imageZoom The image zoom
       */
      viewportToImageZoom: function(t) {
        if (this.viewer) {
          var s = this.viewer.world.getItemCount();
          if (s > 1)
            this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageZoom] is not accurate with multi-image.");
          else if (s === 1) {
            var o = this.viewer.world.getItemAt(0);
            return o.viewportToImageZoom(t);
          }
        }
        var h = this._contentSizeNoRotate.x, i = this._containerInnerSize.x, n = this._contentBoundsNoRotate.width, r = i / h * n;
        return t * r;
      },
      /**
       * Convert an image zoom to a viewport zoom.
       * Image zoom: ratio of the original image size to displayed image size.
       * 1 means original image size, 0.5 half size...
       * Viewport zoom: ratio of the displayed image's width to viewport's width.
       * 1 means identical width, 2 means image's width is twice the viewport's width...
       * Note: not accurate with multi-image.
       * @function
       * @param {Number} imageZoom The image zoom
       * target zoom.
       * @returns {Number} viewportZoom The viewport zoom
       */
      imageToViewportZoom: function(t) {
        if (this.viewer) {
          var s = this.viewer.world.getItemCount();
          if (s > 1)
            this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportZoom] is not accurate with multi-image.");
          else if (s === 1) {
            var o = this.viewer.world.getItemAt(0);
            return o.imageToViewportZoom(t);
          }
        }
        var h = this._contentSizeNoRotate.x, i = this._containerInnerSize.x, n = this._contentBoundsNoRotate.width, r = h / i / n;
        return t * r;
      },
      /**
       * Toggles flip state and demands a new drawing on navigator and viewer objects.
       * @function
       * @return {OpenSeadragon.Viewport} Chainable.
       */
      toggleFlip: function() {
        return this.setFlip(!this.getFlip()), this;
      },
      /**
       * Get flip state stored on viewport.
       * @function
       * @return {Boolean} Flip state.
       */
      getFlip: function() {
        return this.flipped;
      },
      /**
       * Sets flip state according to the state input argument.
       * @function
       * @param {Boolean} state - Flip state to set.
       * @return {OpenSeadragon.Viewport} Chainable.
       */
      setFlip: function(t) {
        return this.flipped === t ? this : (this.flipped = t, this.viewer.navigator && this.viewer.navigator.setFlip(this.getFlip()), this.viewer.forceRedraw(), this.viewer.raiseEvent("flip", { flipped: t }), this);
      }
    };
  }(D), function(e) {
    e.TiledImage = function(i) {
      var n = this;
      e.console.assert(i.tileCache, "[TiledImage] options.tileCache is required"), e.console.assert(i.drawer, "[TiledImage] options.drawer is required"), e.console.assert(i.viewer, "[TiledImage] options.viewer is required"), e.console.assert(i.imageLoader, "[TiledImage] options.imageLoader is required"), e.console.assert(i.source, "[TiledImage] options.source is required"), e.console.assert(
        !i.clip || i.clip instanceof e.Rect,
        "[TiledImage] options.clip must be an OpenSeadragon.Rect if present"
      ), e.EventSource.call(this), this._tileCache = i.tileCache, delete i.tileCache, this._drawer = i.drawer, delete i.drawer, this._imageLoader = i.imageLoader, delete i.imageLoader, i.clip instanceof e.Rect && (this._clip = i.clip.clone()), delete i.clip;
      var r = i.x || 0;
      delete i.x;
      var l = i.y || 0;
      delete i.y, this.normHeight = i.source.dimensions.y / i.source.dimensions.x, this.contentAspectX = i.source.dimensions.x / i.source.dimensions.y;
      var d = 1;
      i.width ? (d = i.width, delete i.width, i.height && (e.console.error("specifying both width and height to a tiledImage is not supported"), delete i.height)) : i.height && (d = i.height / this.normHeight, delete i.height);
      var f = i.fitBounds;
      delete i.fitBounds;
      var y = i.fitBoundsPlacement || D.Placement.CENTER;
      delete i.fitBoundsPlacement;
      var v = i.degrees || 0;
      delete i.degrees, e.extend(!0, this, {
        //internal state properties
        viewer: null,
        tilesMatrix: {},
        // A '3d' dictionary [level][x][y] --> Tile.
        coverage: {},
        // A '3d' dictionary [level][x][y] --> Boolean; shows what areas have been drawn.
        loadingCoverage: {},
        // A '3d' dictionary [level][x][y] --> Boolean; shows what areas are loaded or are being loaded/blended.
        lastDrawn: [],
        // An unordered list of Tiles drawn last frame.
        lastResetTime: 0,
        // Last time for which the tiledImage was reset.
        _midDraw: !1,
        // Is the tiledImage currently updating the viewport?
        _needsDraw: !0,
        // Does the tiledImage need to update the viewport again?
        _hasOpaqueTile: !1,
        // Do we have even one fully opaque tile?
        _tilesLoading: 0,
        // The number of pending tile requests.
        //configurable settings
        springStiffness: e.DEFAULT_SETTINGS.springStiffness,
        animationTime: e.DEFAULT_SETTINGS.animationTime,
        minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio,
        wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal,
        wrapVertical: e.DEFAULT_SETTINGS.wrapVertical,
        immediateRender: e.DEFAULT_SETTINGS.immediateRender,
        blendTime: e.DEFAULT_SETTINGS.blendTime,
        alwaysBlend: e.DEFAULT_SETTINGS.alwaysBlend,
        minPixelRatio: e.DEFAULT_SETTINGS.minPixelRatio,
        smoothTileEdgesMinZoom: e.DEFAULT_SETTINGS.smoothTileEdgesMinZoom,
        iOSDevice: e.DEFAULT_SETTINGS.iOSDevice,
        debugMode: e.DEFAULT_SETTINGS.debugMode,
        crossOriginPolicy: e.DEFAULT_SETTINGS.crossOriginPolicy,
        ajaxWithCredentials: e.DEFAULT_SETTINGS.ajaxWithCredentials,
        placeholderFillStyle: e.DEFAULT_SETTINGS.placeholderFillStyle,
        opacity: e.DEFAULT_SETTINGS.opacity,
        preload: e.DEFAULT_SETTINGS.preload,
        compositeOperation: e.DEFAULT_SETTINGS.compositeOperation,
        subPixelRoundingForTransparency: e.DEFAULT_SETTINGS.subPixelRoundingForTransparency
      }, i), this._preload = this.preload, delete this.preload, this._fullyLoaded = !1, this._xSpring = new e.Spring({
        initial: r,
        springStiffness: this.springStiffness,
        animationTime: this.animationTime
      }), this._ySpring = new e.Spring({
        initial: l,
        springStiffness: this.springStiffness,
        animationTime: this.animationTime
      }), this._scaleSpring = new e.Spring({
        initial: d,
        springStiffness: this.springStiffness,
        animationTime: this.animationTime
      }), this._degreesSpring = new e.Spring({
        initial: v,
        springStiffness: this.springStiffness,
        animationTime: this.animationTime
      }), this._updateForScale(), f && this.fitBounds(f, y, !0), this._drawingHandler = function(T) {
        n.viewer.raiseEvent("tile-drawing", e.extend({
          tiledImage: n
        }, T));
      };
    }, e.extend(
      e.TiledImage.prototype,
      e.EventSource.prototype,
      /** @lends OpenSeadragon.TiledImage.prototype */
      {
        /**
         * @returns {Boolean} Whether the TiledImage needs to be drawn.
         */
        needsDraw: function() {
          return this._needsDraw;
        },
        /**
         * @returns {Boolean} Whether all tiles necessary for this TiledImage to draw at the current view have been loaded.
         */
        getFullyLoaded: function() {
          return this._fullyLoaded;
        },
        // private
        _setFullyLoaded: function(i) {
          i !== this._fullyLoaded && (this._fullyLoaded = i, this.raiseEvent("fully-loaded-change", {
            fullyLoaded: this._fullyLoaded
          }));
        },
        /**
         * Clears all tiles and triggers an update on the next call to
         * {@link OpenSeadragon.TiledImage#update}.
         */
        reset: function() {
          this._tileCache.clearTilesFor(this), this.lastResetTime = e.now(), this._needsDraw = !0;
        },
        /**
         * Updates the TiledImage's bounds, animating if needed.
         * @returns {Boolean} Whether the TiledImage animated.
         */
        update: function() {
          var i = this._xSpring.update(), n = this._ySpring.update(), r = this._scaleSpring.update(), l = this._degreesSpring.update();
          return i || n || r || l ? (this._updateForScale(), this._needsDraw = !0, !0) : !1;
        },
        /**
         * Draws the TiledImage to its Drawer.
         */
        draw: function() {
          this.opacity !== 0 || this._preload ? (this._midDraw = !0, this._updateViewport(), this._midDraw = !1) : this._needsDraw = !1;
        },
        /**
         * Destroy the TiledImage (unload current loaded tiles).
         */
        destroy: function() {
          this.reset(), this.source.destroy && this.source.destroy();
        },
        /**
         * Get this TiledImage's bounds in viewport coordinates.
         * @param {Boolean} [current=false] - Pass true for the current location;
         * false for target location.
         * @returns {OpenSeadragon.Rect} This TiledImage's bounds in viewport coordinates.
         */
        getBounds: function(i) {
          return this.getBoundsNoRotate(i).rotate(this.getRotation(i), this._getRotationPoint(i));
        },
        /**
         * Get this TiledImage's bounds in viewport coordinates without taking
         * rotation into account.
         * @param {Boolean} [current=false] - Pass true for the current location;
         * false for target location.
         * @returns {OpenSeadragon.Rect} This TiledImage's bounds in viewport coordinates.
         */
        getBoundsNoRotate: function(i) {
          return i ? new e.Rect(
            this._xSpring.current.value,
            this._ySpring.current.value,
            this._worldWidthCurrent,
            this._worldHeightCurrent
          ) : new e.Rect(
            this._xSpring.target.value,
            this._ySpring.target.value,
            this._worldWidthTarget,
            this._worldHeightTarget
          );
        },
        // deprecated
        getWorldBounds: function() {
          return e.console.error("[TiledImage.getWorldBounds] is deprecated; use TiledImage.getBounds instead"), this.getBounds();
        },
        /**
         * Get the bounds of the displayed part of the tiled image.
         * @param {Boolean} [current=false] Pass true for the current location,
         * false for the target location.
         * @returns {$.Rect} The clipped bounds in viewport coordinates.
         */
        getClippedBounds: function(i) {
          var n = this.getBoundsNoRotate(i);
          if (this._clip) {
            var r = i ? this._worldWidthCurrent : this._worldWidthTarget, l = r / this.source.dimensions.x, d = this._clip.times(l);
            n = new e.Rect(
              n.x + d.x,
              n.y + d.y,
              d.width,
              d.height
            );
          }
          return n.rotate(this.getRotation(i), this._getRotationPoint(i));
        },
        /**
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         * @returns {OpenSeadragon.Rect} Where this tile fits (in normalized coordinates).
         */
        getTileBounds: function(i, n, r) {
          var l = this.source.getNumTiles(i), d = (l.x + n % l.x) % l.x, f = (l.y + r % l.y) % l.y, y = this.source.getTileBounds(i, d, f);
          return this.getFlip() && (y.x = 1 - y.x - y.width), y.x += (n - d) / l.x, y.y += this._worldHeightCurrent / this._worldWidthCurrent * ((r - f) / l.y), y;
        },
        /**
         * @returns {OpenSeadragon.Point} This TiledImage's content size, in original pixels.
         */
        getContentSize: function() {
          return new e.Point(this.source.dimensions.x, this.source.dimensions.y);
        },
        /**
         * @returns {OpenSeadragon.Point} The TiledImage's content size, in window coordinates.
         */
        getSizeInWindowCoordinates: function() {
          var i = this.imageToWindowCoordinates(new e.Point(0, 0)), n = this.imageToWindowCoordinates(this.getContentSize());
          return new e.Point(n.x - i.x, n.y - i.y);
        },
        // private
        _viewportToImageDelta: function(i, n, r) {
          var l = r ? this._scaleSpring.current.value : this._scaleSpring.target.value;
          return new e.Point(
            i * (this.source.dimensions.x / l),
            n * (this.source.dimensions.y * this.contentAspectX / l)
          );
        },
        /**
         * Translates from OpenSeadragon viewer coordinate system to image coordinate system.
         * This method can be called either by passing X,Y coordinates or an {@link OpenSeadragon.Point}.
         * @param {Number|OpenSeadragon.Point} viewerX - The X coordinate or point in viewport coordinate system.
         * @param {Number} [viewerY] - The Y coordinate in viewport coordinate system.
         * @param {Boolean} [current=false] - Pass true to use the current location; false for target location.
         * @return {OpenSeadragon.Point} A point representing the coordinates in the image.
         */
        viewportToImageCoordinates: function(i, n, r) {
          var l;
          return i instanceof e.Point ? (r = n, l = i) : l = new e.Point(i, n), l = l.rotate(-this.getRotation(r), this._getRotationPoint(r)), r ? this._viewportToImageDelta(
            l.x - this._xSpring.current.value,
            l.y - this._ySpring.current.value
          ) : this._viewportToImageDelta(
            l.x - this._xSpring.target.value,
            l.y - this._ySpring.target.value
          );
        },
        // private
        _imageToViewportDelta: function(i, n, r) {
          var l = r ? this._scaleSpring.current.value : this._scaleSpring.target.value;
          return new e.Point(
            i / this.source.dimensions.x * l,
            n / this.source.dimensions.y / this.contentAspectX * l
          );
        },
        /**
         * Translates from image coordinate system to OpenSeadragon viewer coordinate system
         * This method can be called either by passing X,Y coordinates or an {@link OpenSeadragon.Point}.
         * @param {Number|OpenSeadragon.Point} imageX - The X coordinate or point in image coordinate system.
         * @param {Number} [imageY] - The Y coordinate in image coordinate system.
         * @param {Boolean} [current=false] - Pass true to use the current location; false for target location.
         * @return {OpenSeadragon.Point} A point representing the coordinates in the viewport.
         */
        imageToViewportCoordinates: function(i, n, r) {
          i instanceof e.Point && (r = n, n = i.y, i = i.x);
          var l = this._imageToViewportDelta(i, n);
          return r ? (l.x += this._xSpring.current.value, l.y += this._ySpring.current.value) : (l.x += this._xSpring.target.value, l.y += this._ySpring.target.value), l.rotate(this.getRotation(r), this._getRotationPoint(r));
        },
        /**
         * Translates from a rectangle which describes a portion of the image in
         * pixel coordinates to OpenSeadragon viewport rectangle coordinates.
         * This method can be called either by passing X,Y,width,height or an {@link OpenSeadragon.Rect}.
         * @param {Number|OpenSeadragon.Rect} imageX - The left coordinate or rectangle in image coordinate system.
         * @param {Number} [imageY] - The top coordinate in image coordinate system.
         * @param {Number} [pixelWidth] - The width in pixel of the rectangle.
         * @param {Number} [pixelHeight] - The height in pixel of the rectangle.
         * @param {Boolean} [current=false] - Pass true to use the current location; false for target location.
         * @return {OpenSeadragon.Rect} A rect representing the coordinates in the viewport.
         */
        imageToViewportRectangle: function(i, n, r, l, d) {
          var f = i;
          f instanceof e.Rect ? d = n : f = new e.Rect(i, n, r, l);
          var y = this.imageToViewportCoordinates(f.getTopLeft(), d), v = this._imageToViewportDelta(f.width, f.height, d);
          return new e.Rect(
            y.x,
            y.y,
            v.x,
            v.y,
            f.degrees + this.getRotation(d)
          );
        },
        /**
         * Translates from a rectangle which describes a portion of
         * the viewport in point coordinates to image rectangle coordinates.
         * This method can be called either by passing X,Y,width,height or an {@link OpenSeadragon.Rect}.
         * @param {Number|OpenSeadragon.Rect} viewerX - The left coordinate or rectangle in viewport coordinate system.
         * @param {Number} [viewerY] - The top coordinate in viewport coordinate system.
         * @param {Number} [pointWidth] - The width in viewport coordinate system.
         * @param {Number} [pointHeight] - The height in viewport coordinate system.
         * @param {Boolean} [current=false] - Pass true to use the current location; false for target location.
         * @return {OpenSeadragon.Rect} A rect representing the coordinates in the image.
         */
        viewportToImageRectangle: function(i, n, r, l, d) {
          var f = i;
          i instanceof e.Rect ? d = n : f = new e.Rect(i, n, r, l);
          var y = this.viewportToImageCoordinates(f.getTopLeft(), d), v = this._viewportToImageDelta(f.width, f.height, d);
          return new e.Rect(
            y.x,
            y.y,
            v.x,
            v.y,
            f.degrees - this.getRotation(d)
          );
        },
        /**
         * Convert pixel coordinates relative to the viewer element to image
         * coordinates.
         * @param {OpenSeadragon.Point} pixel
         * @returns {OpenSeadragon.Point}
         */
        viewerElementToImageCoordinates: function(i) {
          var n = this.viewport.pointFromPixel(i, !0);
          return this.viewportToImageCoordinates(n);
        },
        /**
         * Convert pixel coordinates relative to the image to
         * viewer element coordinates.
         * @param {OpenSeadragon.Point} pixel
         * @returns {OpenSeadragon.Point}
         */
        imageToViewerElementCoordinates: function(i) {
          var n = this.imageToViewportCoordinates(i);
          return this.viewport.pixelFromPoint(n, !0);
        },
        /**
         * Convert pixel coordinates relative to the window to image coordinates.
         * @param {OpenSeadragon.Point} pixel
         * @returns {OpenSeadragon.Point}
         */
        windowToImageCoordinates: function(i) {
          var n = i.minus(
            D.getElementPosition(this.viewer.element)
          );
          return this.viewerElementToImageCoordinates(n);
        },
        /**
         * Convert image coordinates to pixel coordinates relative to the window.
         * @param {OpenSeadragon.Point} pixel
         * @returns {OpenSeadragon.Point}
         */
        imageToWindowCoordinates: function(i) {
          var n = this.imageToViewerElementCoordinates(i);
          return n.plus(
            D.getElementPosition(this.viewer.element)
          );
        },
        // private
        // Convert rectangle in viewport coordinates to this tiled image point
        // coordinates (x in [0, 1] and y in [0, aspectRatio])
        _viewportToTiledImageRectangle: function(i) {
          var n = this._scaleSpring.current.value;
          return i = i.rotate(-this.getRotation(!0), this._getRotationPoint(!0)), new e.Rect(
            (i.x - this._xSpring.current.value) / n,
            (i.y - this._ySpring.current.value) / n,
            i.width / n,
            i.height / n,
            i.degrees
          );
        },
        /**
         * Convert a viewport zoom to an image zoom.
         * Image zoom: ratio of the original image size to displayed image size.
         * 1 means original image size, 0.5 half size...
         * Viewport zoom: ratio of the displayed image's width to viewport's width.
         * 1 means identical width, 2 means image's width is twice the viewport's width...
         * @function
         * @param {Number} viewportZoom The viewport zoom
         * @returns {Number} imageZoom The image zoom
         */
        viewportToImageZoom: function(i) {
          var n = this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x;
          return n * i;
        },
        /**
         * Convert an image zoom to a viewport zoom.
         * Image zoom: ratio of the original image size to displayed image size.
         * 1 means original image size, 0.5 half size...
         * Viewport zoom: ratio of the displayed image's width to viewport's width.
         * 1 means identical width, 2 means image's width is twice the viewport's width...
         * Note: not accurate with multi-image.
         * @function
         * @param {Number} imageZoom The image zoom
         * @returns {Number} viewportZoom The viewport zoom
         */
        imageToViewportZoom: function(i) {
          var n = this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x;
          return i / n;
        },
        /**
         * Sets the TiledImage's position in the world.
         * @param {OpenSeadragon.Point} position - The new position, in viewport coordinates.
         * @param {Boolean} [immediately=false] - Whether to animate to the new position or snap immediately.
         * @fires OpenSeadragon.TiledImage.event:bounds-change
         */
        setPosition: function(i, n) {
          var r = this._xSpring.target.value === i.x && this._ySpring.target.value === i.y;
          if (n) {
            if (r && this._xSpring.current.value === i.x && this._ySpring.current.value === i.y)
              return;
            this._xSpring.resetTo(i.x), this._ySpring.resetTo(i.y), this._needsDraw = !0;
          } else {
            if (r)
              return;
            this._xSpring.springTo(i.x), this._ySpring.springTo(i.y), this._needsDraw = !0;
          }
          r || this._raiseBoundsChange();
        },
        /**
         * Sets the TiledImage's width in the world, adjusting the height to match based on aspect ratio.
         * @param {Number} width - The new width, in viewport coordinates.
         * @param {Boolean} [immediately=false] - Whether to animate to the new size or snap immediately.
         * @fires OpenSeadragon.TiledImage.event:bounds-change
         */
        setWidth: function(i, n) {
          this._setScale(i, n);
        },
        /**
         * Sets the TiledImage's height in the world, adjusting the width to match based on aspect ratio.
         * @param {Number} height - The new height, in viewport coordinates.
         * @param {Boolean} [immediately=false] - Whether to animate to the new size or snap immediately.
         * @fires OpenSeadragon.TiledImage.event:bounds-change
         */
        setHeight: function(i, n) {
          this._setScale(i / this.normHeight, n);
        },
        /**
         * Sets an array of polygons to crop the TiledImage during draw tiles.
         * The render function will use the default non-zero winding rule.
         * @param {OpenSeadragon.Point[][]} polygons - represented in an array of point object in image coordinates.
         * Example format: [
         *  [{x: 197, y:172}, {x: 226, y:172}, {x: 226, y:198}, {x: 197, y:198}], // First polygon
         *  [{x: 328, y:200}, {x: 330, y:199}, {x: 332, y:201}, {x: 329, y:202}]  // Second polygon
         *  [{x: 321, y:201}, {x: 356, y:205}, {x: 341, y:250}] // Third polygon
         * ]
         */
        setCroppingPolygons: function(i) {
          var n = function(l) {
            return l instanceof e.Point || typeof l.x == "number" && typeof l.y == "number";
          }, r = function(l) {
            return l.map(function(d) {
              try {
                if (n(d))
                  return { x: d.x, y: d.y };
                throw new Error();
              } catch {
                throw new Error("A Provided cropping polygon point is not supported");
              }
            });
          };
          try {
            if (!e.isArray(i))
              throw new Error("Provided cropping polygon is not an array");
            this._croppingPolygons = i.map(function(l) {
              return r(l);
            });
          } catch (l) {
            e.console.error("[TiledImage.setCroppingPolygons] Cropping polygon format not supported"), e.console.error(l), this._croppingPolygons = null;
          }
        },
        /**
         * Resets the cropping polygons, thus next render will remove all cropping
         * polygon effects.
         */
        resetCroppingPolygons: function() {
          this._croppingPolygons = null;
        },
        /**
         * Positions and scales the TiledImage to fit in the specified bounds.
         * Note: this method fires OpenSeadragon.TiledImage.event:bounds-change
         * twice
         * @param {OpenSeadragon.Rect} bounds The bounds to fit the image into.
         * @param {OpenSeadragon.Placement} [anchor=OpenSeadragon.Placement.CENTER]
         * How to anchor the image in the bounds.
         * @param {Boolean} [immediately=false] Whether to animate to the new size
         * or snap immediately.
         * @fires OpenSeadragon.TiledImage.event:bounds-change
         */
        fitBounds: function(i, n, r) {
          n = n || e.Placement.CENTER;
          var l = e.Placement.properties[n], d = this.contentAspectX, f = 0, y = 0, v = 1, T = 1;
          if (this._clip && (d = this._clip.getAspectRatio(), v = this._clip.width / this.source.dimensions.x, T = this._clip.height / this.source.dimensions.y, i.getAspectRatio() > d ? (f = this._clip.x / this._clip.height * i.height, y = this._clip.y / this._clip.height * i.height) : (f = this._clip.x / this._clip.width * i.width, y = this._clip.y / this._clip.width * i.width)), i.getAspectRatio() > d) {
            var w = i.height / T, x = 0;
            l.isHorizontallyCentered ? x = (i.width - i.height * d) / 2 : l.isRight && (x = i.width - i.height * d), this.setPosition(
              new e.Point(i.x - f + x, i.y - y),
              r
            ), this.setHeight(w, r);
          } else {
            var _ = i.width / v, b = 0;
            l.isVerticallyCentered ? b = (i.height - i.width / d) / 2 : l.isBottom && (b = i.height - i.width / d), this.setPosition(
              new e.Point(i.x - f, i.y - y + b),
              r
            ), this.setWidth(_, r);
          }
        },
        /**
         * @returns {OpenSeadragon.Rect|null} The TiledImage's current clip rectangle,
         * in image pixels, or null if none.
         */
        getClip: function() {
          return this._clip ? this._clip.clone() : null;
        },
        /**
         * @param {OpenSeadragon.Rect|null} newClip - An area, in image pixels, to clip to
         * (portions of the image outside of this area will not be visible). Only works on
         * browsers that support the HTML5 canvas.
         * @fires OpenSeadragon.TiledImage.event:clip-change
         */
        setClip: function(i) {
          e.console.assert(
            !i || i instanceof e.Rect,
            "[TiledImage.setClip] newClip must be an OpenSeadragon.Rect or null"
          ), i instanceof e.Rect ? this._clip = i.clone() : this._clip = null, this._needsDraw = !0, this.raiseEvent("clip-change");
        },
        /**
         * @returns {Boolean} Whether the TiledImage should be flipped before rendering.
         */
        getFlip: function() {
          return !!this.flipped;
        },
        /**
         * @param {Boolean} flip Whether the TiledImage should be flipped before rendering.
         * @fires OpenSeadragon.TiledImage.event:bounds-change
         */
        setFlip: function(i) {
          this.flipped = !!i, this._needsDraw = !0, this._raiseBoundsChange();
        },
        /**
         * @returns {Number} The TiledImage's current opacity.
         */
        getOpacity: function() {
          return this.opacity;
        },
        /**
         * @param {Number} opacity Opacity the tiled image should be drawn at.
         * @fires OpenSeadragon.TiledImage.event:opacity-change
         */
        setOpacity: function(i) {
          i !== this.opacity && (this.opacity = i, this._needsDraw = !0, this.raiseEvent("opacity-change", {
            opacity: this.opacity
          }));
        },
        /**
         * @returns {Boolean} whether the tiledImage can load its tiles even when it has zero opacity.
         */
        getPreload: function() {
          return this._preload;
        },
        /**
         * Set true to load even when hidden. Set false to block loading when hidden.
         */
        setPreload: function(i) {
          this._preload = !!i, this._needsDraw = !0;
        },
        /**
         * Get the rotation of this tiled image in degrees.
         * @param {Boolean} [current=false] True for current rotation, false for target.
         * @returns {Number} the rotation of this tiled image in degrees.
         */
        getRotation: function(i) {
          return i ? this._degreesSpring.current.value : this._degreesSpring.target.value;
        },
        /**
         * Set the current rotation of this tiled image in degrees.
         * @param {Number} degrees the rotation in degrees.
         * @param {Boolean} [immediately=false] Whether to animate to the new angle
         * or rotate immediately.
         * @fires OpenSeadragon.TiledImage.event:bounds-change
         */
        setRotation: function(i, n) {
          this._degreesSpring.target.value === i && this._degreesSpring.isAtTargetValue() || (n ? this._degreesSpring.resetTo(i) : this._degreesSpring.springTo(i), this._needsDraw = !0, this._raiseBoundsChange());
        },
        /**
         * Get the point around which this tiled image is rotated
         * @private
         * @param {Boolean} current True for current rotation point, false for target.
         * @returns {OpenSeadragon.Point}
         */
        _getRotationPoint: function(i) {
          return this.getBoundsNoRotate(i).getCenter();
        },
        /**
         * @returns {String} The TiledImage's current compositeOperation.
         */
        getCompositeOperation: function() {
          return this.compositeOperation;
        },
        /**
         * @param {String} compositeOperation the tiled image should be drawn with this globalCompositeOperation.
         * @fires OpenSeadragon.TiledImage.event:composite-operation-change
         */
        setCompositeOperation: function(i) {
          i !== this.compositeOperation && (this.compositeOperation = i, this._needsDraw = !0, this.raiseEvent("composite-operation-change", {
            compositeOperation: this.compositeOperation
          }));
        },
        // private
        _setScale: function(i, n) {
          var r = this._scaleSpring.target.value === i;
          if (n) {
            if (r && this._scaleSpring.current.value === i)
              return;
            this._scaleSpring.resetTo(i), this._updateForScale(), this._needsDraw = !0;
          } else {
            if (r)
              return;
            this._scaleSpring.springTo(i), this._updateForScale(), this._needsDraw = !0;
          }
          r || this._raiseBoundsChange();
        },
        // private
        _updateForScale: function() {
          this._worldWidthTarget = this._scaleSpring.target.value, this._worldHeightTarget = this.normHeight * this._scaleSpring.target.value, this._worldWidthCurrent = this._scaleSpring.current.value, this._worldHeightCurrent = this.normHeight * this._scaleSpring.current.value;
        },
        // private
        _raiseBoundsChange: function() {
          this.raiseEvent("bounds-change");
        },
        // private
        _isBottomItem: function() {
          return this.viewer.world.getItemAt(0) === this;
        },
        // private
        _getLevelsInterval: function() {
          var i = Math.max(
            this.source.minLevel,
            Math.floor(Math.log(this.minZoomImageRatio) / Math.log(2))
          ), n = this.viewport.deltaPixelsFromPointsNoRotate(
            this.source.getPixelRatio(0),
            !0
          ).x * this._scaleSpring.current.value, r = Math.min(
            Math.abs(this.source.maxLevel),
            Math.abs(Math.floor(
              Math.log(n / this.minPixelRatio) / Math.log(2)
            ))
          );
          return r = Math.max(r, this.source.minLevel || 0), i = Math.min(i, r), {
            lowestLevel: i,
            highestLevel: r
          };
        },
        /**
         * @private
         * @inner
         * Pretty much every other line in this needs to be documented so it's clear
         * how each piece of this routine contributes to the drawing process.  That's
         * why there are so many TODO's inside this function.
         */
        _updateViewport: function() {
          for (this._needsDraw = !1, this._tilesLoading = 0, this.loadingCoverage = {}; this.lastDrawn.length > 0; ) {
            var i = this.lastDrawn.pop();
            i.beingDrawn = !1;
          }
          var n = this.viewport, r = this._viewportToTiledImageRectangle(
            n.getBoundsWithMargins(!0)
          );
          if (!this.wrapHorizontal && !this.wrapVertical) {
            var l = this._viewportToTiledImageRectangle(
              this.getClippedBounds(!0)
            );
            if (r = r.intersection(l), r === null)
              return;
          }
          for (var d = this._getLevelsInterval(), f = d.lowestLevel, y = d.highestLevel, v = null, T = !1, w = e.now(), x = y; x >= f; x--) {
            var _ = !1, b = n.deltaPixelsFromPointsNoRotate(
              this.source.getPixelRatio(x),
              !0
            ).x * this._scaleSpring.current.value;
            if (x === f || !T && b >= this.minPixelRatio)
              _ = !0, T = !0;
            else if (!T)
              continue;
            var N = n.deltaPixelsFromPointsNoRotate(
              this.source.getPixelRatio(x),
              !1
            ).x * this._scaleSpring.current.value, G = n.deltaPixelsFromPointsNoRotate(
              this.source.getPixelRatio(
                Math.max(
                  this.source.getClosestLevel(),
                  0
                )
              ),
              !1
            ).x * this._scaleSpring.current.value, A = this.immediateRender ? 1 : G, W = Math.min(1, (b - 0.5) / 0.5), M = A / Math.abs(
              A - N
            );
            if (v = this._updateLevel(
              T,
              _,
              x,
              W,
              M,
              r,
              w,
              v
            ), this._providesCoverage(this.coverage, x))
              break;
          }
          this._drawTiles(this.lastDrawn), v && !v.context2D ? (this._loadTile(v, w), this._needsDraw = !0, this._setFullyLoaded(!1)) : this._setFullyLoaded(this._tilesLoading === 0);
        },
        // private
        _getCornerTiles: function(i, n, r) {
          var l, d;
          this.wrapHorizontal ? (l = e.positiveModulo(n.x, 1), d = e.positiveModulo(r.x, 1)) : (l = Math.max(0, n.x), d = Math.min(1, r.x));
          var f, y, v = 1 / this.source.aspectRatio;
          this.wrapVertical ? (f = e.positiveModulo(n.y, v), y = e.positiveModulo(r.y, v)) : (f = Math.max(0, n.y), y = Math.min(v, r.y));
          var T = this.source.getTileAtPoint(i, new e.Point(l, f)), w = this.source.getTileAtPoint(i, new e.Point(d, y)), x = this.source.getNumTiles(i);
          return this.wrapHorizontal && (T.x += x.x * Math.floor(n.x), w.x += x.x * Math.floor(r.x)), this.wrapVertical && (T.y += x.y * Math.floor(n.y / v), w.y += x.y * Math.floor(r.y / v)), {
            topLeft: T,
            bottomRight: w
          };
        },
        /**
         * Updates all tiles at a given resolution level.
         * @private
         * @param {Boolean} haveDrawn
         * @param {Boolean} drawLevel
         * @param {Number} level
         * @param {Number} levelOpacity
         * @param {Number} levelVisibility
         * @param {OpenSeadragon.Rect} drawArea
         * @param {Number} currentTime
         * @param {OpenSeadragon.Tile} best - The current "best" tile to draw.
         */
        _updateLevel: function(i, n, r, l, d, f, y, v) {
          var T = f.getBoundingBox().getTopLeft(), w = f.getBoundingBox().getBottomRight();
          this.viewer && this.viewer.raiseEvent("update-level", {
            tiledImage: this,
            havedrawn: i,
            level: r,
            opacity: l,
            visibility: d,
            drawArea: f,
            topleft: T,
            bottomright: w,
            currenttime: y,
            best: v
          }), this._resetCoverage(this.coverage, r), this._resetCoverage(this.loadingCoverage, r);
          var x = this._getCornerTiles(r, T, w), _ = x.topLeft, b = x.bottomRight, N = this.source.getNumTiles(r), G = this.viewport.pixelFromPoint(this.viewport.getCenter());
          this.getFlip() && (b.x += 1, this.wrapHorizontal || (b.x = Math.min(b.x, N.x - 1)));
          for (var A = _.x; A <= b.x; A++)
            for (var W = _.y; W <= b.y; W++) {
              var M;
              if (this.getFlip()) {
                var j = (N.x + A % N.x) % N.x;
                M = A + N.x - j - j - 1;
              } else
                M = A;
              f.intersection(this.getTileBounds(r, M, W)) !== null && (v = this._updateTile(
                n,
                i,
                M,
                W,
                r,
                l,
                d,
                G,
                N,
                y,
                v
              ));
            }
          return v;
        },
        /**
         * @private
         * @inner
         * Update a single tile at a particular resolution level.
         * @param {Boolean} haveDrawn
         * @param {Boolean} drawLevel
         * @param {Number} x
         * @param {Number} y
         * @param {Number} level
         * @param {Number} levelOpacity
         * @param {Number} levelVisibility
         * @param {OpenSeadragon.Point} viewportCenter
         * @param {Number} numberOfTiles
         * @param {Number} currentTime
         * @param {OpenSeadragon.Tile} best - The current "best" tile to draw.
         */
        _updateTile: function(i, n, r, l, d, f, y, v, T, w, x) {
          var _ = this._getTile(
            r,
            l,
            d,
            w,
            T,
            this._worldWidthCurrent,
            this._worldHeightCurrent
          ), b = n;
          this.viewer && this.viewer.raiseEvent("update-tile", {
            tiledImage: this,
            tile: _
          }), this._setCoverage(this.coverage, d, r, l, !1);
          var N = _.loaded || _.loading || this._isCovered(this.loadingCoverage, d, r, l);
          if (this._setCoverage(this.loadingCoverage, d, r, l, N), !_.exists || (i && !b && (this._isCovered(this.coverage, d, r, l) ? this._setCoverage(this.coverage, d, r, l, !0) : b = !0), !b))
            return x;
          if (this._positionTile(
            _,
            this.source.tileOverlap,
            this.viewport,
            v,
            y
          ), !_.loaded)
            if (_.context2D)
              this._setTileLoaded(_);
            else {
              var G = this._tileCache.getImageRecord(_.cacheKey);
              if (G) {
                var A = G.getImage();
                this._setTileLoaded(_, A);
              }
            }
          if (_.loaded) {
            var W = this._blendTile(
              _,
              r,
              l,
              d,
              f,
              w
            );
            W && (this._needsDraw = !0);
          } else
            _.loading ? this._tilesLoading++ : N || (x = this._compareTiles(x, _));
          return x;
        },
        /**
         * @private
         * @inner
         * Obtains a tile at the given location.
         * @param {Number} x
         * @param {Number} y
         * @param {Number} level
         * @param {Number} time
         * @param {Number} numTiles
         * @param {Number} worldWidth
         * @param {Number} worldHeight
         * @returns {OpenSeadragon.Tile}
         */
        _getTile: function(i, n, r, l, d, f, y) {
          var v, T, w, x, _, b, N, G, A, W, M = this.tilesMatrix, j = this.source;
          return M[r] || (M[r] = {}), M[r][i] || (M[r][i] = {}), (!M[r][i][n] || !M[r][i][n].flipped != !this.flipped) && (v = (d.x + i % d.x) % d.x, T = (d.y + n % d.y) % d.y, w = this.getTileBounds(r, i, n), x = j.getTileBounds(r, v, T, !0), _ = j.tileExists(r, v, T), b = j.getTileUrl(r, v, T), N = j.getTilePostData(r, v, T), this.loadTilesWithAjax ? (G = j.getTileAjaxHeaders(r, v, T), e.isPlainObject(this.ajaxHeaders) && (G = e.extend({}, this.ajaxHeaders, G))) : G = null, A = j.getContext2D ? j.getContext2D(r, v, T) : void 0, W = new e.Tile(
            r,
            i,
            n,
            w,
            _,
            b,
            A,
            this.loadTilesWithAjax,
            G,
            x,
            N,
            j.getTileHashKey(r, v, T, b, G, N)
          ), this.getFlip() ? v === 0 && (W.isRightMost = !0) : v === d.x - 1 && (W.isRightMost = !0), T === d.y - 1 && (W.isBottomMost = !0), W.flipped = this.flipped, M[r][i][n] = W), W = M[r][i][n], W.lastTouchTime = l, W;
        },
        /**
         * @private
         * @inner
         * Dispatch a job to the ImageLoader to load the Image for a Tile.
         * @param {OpenSeadragon.Tile} tile
         * @param {Number} time
         */
        _loadTile: function(i, n) {
          var r = this;
          i.loading = !0, this._imageLoader.addJob({
            src: i.url,
            postData: i.postData,
            loadWithAjax: i.loadWithAjax,
            ajaxHeaders: i.ajaxHeaders,
            crossOriginPolicy: this.crossOriginPolicy,
            ajaxWithCredentials: this.ajaxWithCredentials,
            callback: function(l, d, f) {
              r._onTileLoad(i, n, l, d, f);
            },
            abort: function() {
              i.loading = !1;
            }
          });
        },
        /**
         * @private
         * @inner
         * Callback fired when a Tile's Image finished downloading.
         * @param {OpenSeadragon.Tile} tile
         * @param {Number} time
         * @param {Image} image
         * @param {String} errorMsg
         * @param {XMLHttpRequest} tileRequest
         */
        _onTileLoad: function(i, n, r, l, d) {
          if (!r) {
            e.console.error("Tile %s failed to load: %s - error: %s", i, i.url, l), this.viewer.raiseEvent("tile-load-failed", {
              tile: i,
              tiledImage: this,
              time: n,
              message: l,
              tileRequest: d
            }), i.loading = !1, i.exists = !1;
            return;
          }
          if (n < this.lastResetTime) {
            e.console.warn("Ignoring tile %s loaded before reset: %s", i, i.url), i.loading = !1;
            return;
          }
          var f = this, y = function() {
            var v = f.source, T = v.getClosestLevel();
            f._setTileLoaded(i, r, T, d);
          };
          this._midDraw ? window.setTimeout(y, 1) : y();
        },
        /**
         * @private
         * @inner
         * @param {OpenSeadragon.Tile} tile
         * @param {Image|undefined} image
         * @param {Number|undefined} cutoff
         * @param {XMLHttpRequest|undefined} tileRequest
         */
        _setTileLoaded: function(i, n, r, l) {
          var d = 0, f = this;
          function y() {
            return d++, v;
          }
          function v() {
            d--, d === 0 && (i.loading = !1, i.loaded = !0, i.context2D || f._tileCache.cacheTile({
              image: n,
              tile: i,
              cutoff: r,
              tiledImage: f
            }), f._needsDraw = !0);
          }
          this.viewer.raiseEvent("tile-loaded", {
            tile: i,
            tiledImage: this,
            tileRequest: l,
            image: n,
            getCompletionCallback: y
          }), y()();
        },
        /**
         * @private
         * @inner
         * @param {OpenSeadragon.Tile} tile
         * @param {Boolean} overlap
         * @param {OpenSeadragon.Viewport} viewport
         * @param {OpenSeadragon.Point} viewportCenter
         * @param {Number} levelVisibility
         */
        _positionTile: function(i, n, r, l, d) {
          var f = i.bounds.getTopLeft();
          f.x *= this._scaleSpring.current.value, f.y *= this._scaleSpring.current.value, f.x += this._xSpring.current.value, f.y += this._ySpring.current.value;
          var y = i.bounds.getSize();
          y.x *= this._scaleSpring.current.value, y.y *= this._scaleSpring.current.value;
          var v = r.pixelFromPointNoRotate(f, !0), T = r.pixelFromPointNoRotate(f, !1), w = r.deltaPixelsFromPointsNoRotate(y, !0), x = r.deltaPixelsFromPointsNoRotate(y, !1), _ = T.plus(x.divide(2)), b = l.squaredDistanceTo(_);
          n || (w = w.plus(new e.Point(1, 1))), i.isRightMost && this.wrapHorizontal && (w.x += 0.75), i.isBottomMost && this.wrapVertical && (w.y += 0.75), i.position = v, i.size = w, i.squaredDistance = b, i.visibility = d;
        },
        /**
         * @private
         * @inner
         * Updates the opacity of a tile according to the time it has been on screen
         * to perform a fade-in.
         * Updates coverage once a tile is fully opaque.
         * Returns whether the fade-in has completed.
         *
         * @param {OpenSeadragon.Tile} tile
         * @param {Number} x
         * @param {Number} y
         * @param {Number} level
         * @param {Number} levelOpacity
         * @param {Number} currentTime
         * @returns {Boolean}
         */
        _blendTile: function(i, n, r, l, d, f) {
          var y = 1e3 * this.blendTime, v, T;
          if (i.blendStart || (i.blendStart = f), v = f - i.blendStart, T = y ? Math.min(1, v / y) : 1, this.alwaysBlend && (T *= d), i.opacity = T, this.lastDrawn.push(i), T === 1)
            this._setCoverage(this.coverage, l, n, r, !0), this._hasOpaqueTile = !0;
          else if (v < y)
            return !0;
          return !1;
        },
        /**
         * @private
         * @inner
         * Determines whether the 'last best' tile for the area is better than the
         * tile in question.
         *
         * @param {OpenSeadragon.Tile} previousBest
         * @param {OpenSeadragon.Tile} tile
         * @returns {OpenSeadragon.Tile} The new best tile.
         */
        _compareTiles: function(i, n) {
          return !i || n.visibility > i.visibility || n.visibility === i.visibility && n.squaredDistance < i.squaredDistance ? n : i;
        },
        /**
         * @private
         * @inner
         * Draws a TiledImage.
         * @param {OpenSeadragon.Tile[]} lastDrawn - An unordered list of Tiles drawn last frame.
         */
        _drawTiles: function(i) {
          if (!(this.opacity === 0 || i.length === 0 && !this.placeholderFillStyle)) {
            var n = i[0], r;
            n && (r = this.opacity < 1 || this.compositeOperation && this.compositeOperation !== "source-over" || !this._isBottomItem() && n._hasTransparencyChannel());
            var l, d, f = this.viewport.getZoom(!0), y = this.viewportToImageZoom(f);
            i.length > 1 && y > this.smoothTileEdgesMinZoom && !this.iOSDevice && this.getRotation(!0) % 360 === 0 && // TODO: support tile edge smoothing with tiled image rotation.
            e.supportsCanvas && this.viewer.useCanvas && (r = !0, l = n.getScaleForEdgeSmoothing(), d = n.getTranslationForEdgeSmoothing(
              l,
              this._drawer.getCanvasSize(!1),
              this._drawer.getCanvasSize(!0)
            ));
            var v;
            r && (l || (v = this.viewport.viewportToViewerElementRectangle(
              this.getClippedBounds(!0)
            ).getIntegerBoundingBox(), this._drawer.viewer.viewport.getFlip() && (this.viewport.degrees !== 0 || this.getRotation(!0) % 360 !== 0) && (v.x = this._drawer.viewer.container.clientWidth - (v.x + v.width)), v = v.times(e.pixelDensityRatio)), this._drawer._clear(!0, v)), l || (this.viewport.degrees !== 0 && this._drawer._offsetForRotation({
              degrees: this.viewport.degrees,
              useSketch: r
            }), this.getRotation(!0) % 360 !== 0 && this._drawer._offsetForRotation({
              degrees: this.getRotation(!0),
              point: this.viewport.pixelFromPointNoRotate(
                this._getRotationPoint(!0),
                !0
              ),
              useSketch: r
            }), this.viewport.degrees === 0 && this.getRotation(!0) % 360 === 0 && this._drawer.viewer.viewport.getFlip() && this._drawer._flip());
            var T = !1;
            if (this._clip) {
              this._drawer.saveContext(r);
              var w = this.imageToViewportRectangle(this._clip, !0);
              w = w.rotate(-this.getRotation(!0), this._getRotationPoint(!0));
              var x = this._drawer.viewportToDrawerRectangle(w);
              l && (x = x.times(l)), d && (x = x.translate(d)), this._drawer.setClip(x, r), T = !0;
            }
            if (this._croppingPolygons) {
              this._drawer.saveContext(r);
              try {
                var _ = this._croppingPolygons.map(function(j) {
                  return j.map(function($) {
                    var Y = this.imageToViewportCoordinates($.x, $.y, !0).rotate(-this.getRotation(!0), this._getRotationPoint(!0)), K = this._drawer.viewportCoordToDrawerCoord(Y);
                    return l && (K = K.times(l)), K;
                  });
                });
                this._drawer.clipWithPolygons(_, r);
              } catch (j) {
                e.console.error(j);
              }
              T = !0;
            }
            if (this.placeholderFillStyle && this._hasOpaqueTile === !1) {
              var b = this._drawer.viewportToDrawerRectangle(this.getBounds(!0));
              l && (b = b.times(l)), d && (b = b.translate(d));
              var N = null;
              typeof this.placeholderFillStyle == "function" ? N = this.placeholderFillStyle(this, this._drawer.context) : N = this.placeholderFillStyle, this._drawer.drawRectangle(b, N, r);
            }
            var G = h(this.subPixelRoundingForTransparency), A = !1;
            if (G === e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS)
              A = !0;
            else if (G === e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST) {
              var W = this.viewer && this.viewer.isAnimating();
              A = !W;
            }
            for (var M = i.length - 1; M >= 0; M--)
              n = i[M], this._drawer.drawTile(n, this._drawingHandler, r, l, d, A), n.beingDrawn = !0, this.viewer && this.viewer.raiseEvent("tile-drawn", {
                tiledImage: this,
                tile: n
              });
            T && this._drawer.restoreContext(r), l || (this.getRotation(!0) % 360 !== 0 && this._drawer._restoreRotationChanges(r), this.viewport.degrees !== 0 && this._drawer._restoreRotationChanges(r)), r && (l && (this.viewport.degrees !== 0 && this._drawer._offsetForRotation({
              degrees: this.viewport.degrees,
              useSketch: !1
            }), this.getRotation(!0) % 360 !== 0 && this._drawer._offsetForRotation({
              degrees: this.getRotation(!0),
              point: this.viewport.pixelFromPointNoRotate(
                this._getRotationPoint(!0),
                !0
              ),
              useSketch: !1
            })), this._drawer.blendSketch({
              opacity: this.opacity,
              scale: l,
              translate: d,
              compositeOperation: this.compositeOperation,
              bounds: v
            }), l && (this.getRotation(!0) % 360 !== 0 && this._drawer._restoreRotationChanges(!1), this.viewport.degrees !== 0 && this._drawer._restoreRotationChanges(!1))), l || this.viewport.degrees === 0 && this.getRotation(!0) % 360 === 0 && this._drawer.viewer.viewport.getFlip() && this._drawer._flip(), this._drawDebugInfo(i);
          }
        },
        /**
         * @private
         * @inner
         * Draws special debug information for a TiledImage if in debug mode.
         * @param {OpenSeadragon.Tile[]} lastDrawn - An unordered list of Tiles drawn last frame.
         */
        _drawDebugInfo: function(i) {
          if (this.debugMode)
            for (var n = i.length - 1; n >= 0; n--) {
              var r = i[n];
              try {
                this._drawer.drawDebugInfo(r, i.length, n, this);
              } catch (l) {
                e.console.error(l);
              }
            }
        },
        /**
         * @private
         * @inner
         * Returns true if the given tile provides coverage to lower-level tiles of
         * lower resolution representing the same content. If neither x nor y is
         * given, returns true if the entire visible level provides coverage.
         *
         * Note that out-of-bounds tiles provide coverage in this sense, since
         * there's no content that they would need to cover. Tiles at non-existent
         * levels that are within the image bounds, however, do not.
         *
         * @param {Object} coverage - A '3d' dictionary [level][x][y] --> Boolean.
         * @param {Number} level - The resolution level of the tile.
         * @param {Number} x - The X position of the tile.
         * @param {Number} y - The Y position of the tile.
         * @returns {Boolean}
         */
        _providesCoverage: function(i, n, r, l) {
          var d, f, y, v;
          if (!i[n])
            return !1;
          if (r === void 0 || l === void 0) {
            d = i[n];
            for (y in d)
              if (Object.prototype.hasOwnProperty.call(d, y)) {
                f = d[y];
                for (v in f)
                  if (Object.prototype.hasOwnProperty.call(f, v) && !f[v])
                    return !1;
              }
            return !0;
          }
          return i[n][r] === void 0 || i[n][r][l] === void 0 || i[n][r][l] === !0;
        },
        /**
         * @private
         * @inner
         * Returns true if the given tile is completely covered by higher-level
         * tiles of higher resolution representing the same content. If neither x
         * nor y is given, returns true if the entire visible level is covered.
         *
         * @param {Object} coverage - A '3d' dictionary [level][x][y] --> Boolean.
         * @param {Number} level - The resolution level of the tile.
         * @param {Number} x - The X position of the tile.
         * @param {Number} y - The Y position of the tile.
         * @returns {Boolean}
         */
        _isCovered: function(i, n, r, l) {
          return r === void 0 || l === void 0 ? this._providesCoverage(i, n + 1) : this._providesCoverage(i, n + 1, 2 * r, 2 * l) && this._providesCoverage(i, n + 1, 2 * r, 2 * l + 1) && this._providesCoverage(i, n + 1, 2 * r + 1, 2 * l) && this._providesCoverage(i, n + 1, 2 * r + 1, 2 * l + 1);
        },
        /**
         * @private
         * @inner
         * Sets whether the given tile provides coverage or not.
         *
         * @param {Object} coverage - A '3d' dictionary [level][x][y] --> Boolean.
         * @param {Number} level - The resolution level of the tile.
         * @param {Number} x - The X position of the tile.
         * @param {Number} y - The Y position of the tile.
         * @param {Boolean} covers - Whether the tile provides coverage.
         */
        _setCoverage: function(i, n, r, l, d) {
          if (!i[n]) {
            e.console.warn(
              "Setting coverage for a tile before its level's coverage has been reset: %s",
              n
            );
            return;
          }
          i[n][r] || (i[n][r] = {}), i[n][r][l] = d;
        },
        /**
         * @private
         * @inner
         * Resets coverage information for the given level. This should be called
         * after every draw routine. Note that at the beginning of the next draw
         * routine, coverage for every visible tile should be explicitly set.
         *
         * @param {Object} coverage - A '3d' dictionary [level][x][y] --> Boolean.
         * @param {Number} level - The resolution level of tiles to completely reset.
         */
        _resetCoverage: function(i, n) {
          i[n] = {};
        }
      }
    );
    var t = e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;
    function s(i) {
      return i !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS && i !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST && i !== e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;
    }
    function o(i) {
      return s(i) ? t : i;
    }
    function h(i) {
      if (typeof i == "number")
        return o(i);
      if (!i || !e.Browser)
        return t;
      var n = i[e.Browser.vendor];
      return s(n) && (n = i["*"]), o(n);
    }
  }(D), function(e) {
    var t = function(o) {
      e.console.assert(o, "[TileCache.cacheTile] options is required"), e.console.assert(o.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(o.tiledImage, "[TileCache.cacheTile] options.tiledImage is required"), this.tile = o.tile, this.tiledImage = o.tiledImage;
    }, s = function(o) {
      e.console.assert(o, "[ImageRecord] options is required"), e.console.assert(o.image, "[ImageRecord] options.image is required"), this._image = o.image, this._tiles = [];
    };
    s.prototype = {
      destroy: function() {
        this._image = null, this._renderedContext = null, this._tiles = null;
      },
      getImage: function() {
        return this._image;
      },
      getRenderedContext: function() {
        if (!this._renderedContext) {
          var o = document.createElement("canvas");
          o.width = this._image.width, o.height = this._image.height, this._renderedContext = o.getContext("2d"), this._renderedContext.drawImage(this._image, 0, 0), this._image = null;
        }
        return this._renderedContext;
      },
      setRenderedContext: function(o) {
        e.console.error("ImageRecord.setRenderedContext is deprecated. The rendered context should be created by the ImageRecord itself when calling ImageRecord.getRenderedContext."), this._renderedContext = o;
      },
      addTile: function(o) {
        e.console.assert(o, "[ImageRecord.addTile] tile is required"), this._tiles.push(o);
      },
      removeTile: function(o) {
        for (var h = 0; h < this._tiles.length; h++)
          if (this._tiles[h] === o) {
            this._tiles.splice(h, 1);
            return;
          }
        e.console.warn("[ImageRecord.removeTile] trying to remove unknown tile", o);
      },
      getTileCount: function() {
        return this._tiles.length;
      }
    }, e.TileCache = function(o) {
      o = o || {}, this._maxImageCacheCount = o.maxImageCacheCount || e.DEFAULT_SETTINGS.maxImageCacheCount, this._tilesLoaded = [], this._imagesLoaded = [], this._imagesLoadedCount = 0;
    }, e.TileCache.prototype = {
      /**
       * @returns {Number} The total number of tiles that have been loaded by
       * this TileCache.
       */
      numTilesLoaded: function() {
        return this._tilesLoaded.length;
      },
      /**
       * Caches the specified tile, removing an old tile if necessary to stay under the
       * maxImageCacheCount specified on construction. Note that if multiple tiles reference
       * the same image, there may be more tiles than maxImageCacheCount; the goal is to keep
       * the number of images below that number. Note, as well, that even the number of images
       * may temporarily surpass that number, but should eventually come back down to the max specified.
       * @param {Object} options - Tile info.
       * @param {OpenSeadragon.Tile} options.tile - The tile to cache.
       * @param {String} options.tile.cacheKey - The unique key used to identify this tile in the cache.
       * @param {Image} options.image - The image of the tile to cache.
       * @param {OpenSeadragon.TiledImage} options.tiledImage - The TiledImage that owns that tile.
       * @param {Number} [options.cutoff=0] - If adding this tile goes over the cache max count, this
       * function will release an old tile. The cutoff option specifies a tile level at or below which
       * tiles will not be released.
       */
      cacheTile: function(o) {
        e.console.assert(o, "[TileCache.cacheTile] options is required"), e.console.assert(o.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(o.tile.cacheKey, "[TileCache.cacheTile] options.tile.cacheKey is required"), e.console.assert(o.tiledImage, "[TileCache.cacheTile] options.tiledImage is required");
        var h = o.cutoff || 0, i = this._tilesLoaded.length, n = this._imagesLoaded[o.tile.cacheKey];
        if (n || (e.console.assert(o.image, "[TileCache.cacheTile] options.image is required to create an ImageRecord"), n = this._imagesLoaded[o.tile.cacheKey] = new s({
          image: o.image
        }), this._imagesLoadedCount++), n.addTile(o.tile), o.tile.cacheImageRecord = n, this._imagesLoadedCount > this._maxImageCacheCount) {
          for (var r = null, l = -1, d = null, f, y, v, T, w, x, _ = this._tilesLoaded.length - 1; _ >= 0; _--)
            if (x = this._tilesLoaded[_], f = x.tile, !(f.level <= h || f.beingDrawn)) {
              if (!r) {
                r = f, l = _, d = x;
                continue;
              }
              T = f.lastTouchTime, y = r.lastTouchTime, w = f.level, v = r.level, (T < y || T === y && w > v) && (r = f, l = _, d = x);
            }
          r && l >= 0 && (this._unloadTile(d), i = l);
        }
        this._tilesLoaded[i] = new t({
          tile: o.tile,
          tiledImage: o.tiledImage
        });
      },
      /**
       * Clears all tiles associated with the specified tiledImage.
       * @param {OpenSeadragon.TiledImage} tiledImage
       */
      clearTilesFor: function(o) {
        e.console.assert(o, "[TileCache.clearTilesFor] tiledImage is required");
        for (var h, i = 0; i < this._tilesLoaded.length; ++i)
          h = this._tilesLoaded[i], h.tiledImage === o && (this._unloadTile(h), this._tilesLoaded.splice(i, 1), i--);
      },
      // private
      getImageRecord: function(o) {
        return e.console.assert(o, "[TileCache.getImageRecord] cacheKey is required"), this._imagesLoaded[o];
      },
      // private
      _unloadTile: function(o) {
        e.console.assert(o, "[TileCache._unloadTile] tileRecord is required");
        var h = o.tile, i = o.tiledImage;
        h.unload(), h.cacheImageRecord = null;
        var n = this._imagesLoaded[h.cacheKey];
        n.removeTile(h), n.getTileCount() || (n.destroy(), delete this._imagesLoaded[h.cacheKey], this._imagesLoadedCount--), i.viewer.raiseEvent("tile-unloaded", {
          tile: h,
          tiledImage: i
        });
      }
    };
  }(D), function(e) {
    e.World = function(t) {
      var s = this;
      e.console.assert(t.viewer, "[World] options.viewer is required"), e.EventSource.call(this), this.viewer = t.viewer, this._items = [], this._needsDraw = !1, this._autoRefigureSizes = !0, this._needsSizesFigured = !1, this._delegatedFigureSizes = function(o) {
        s._autoRefigureSizes ? s._figureSizes() : s._needsSizesFigured = !0;
      }, this._figureSizes();
    }, e.extend(
      e.World.prototype,
      e.EventSource.prototype,
      /** @lends OpenSeadragon.World.prototype */
      {
        /**
         * Add the specified item.
         * @param {OpenSeadragon.TiledImage} item - The item to add.
         * @param {Number} [options.index] - Index for the item. If not specified, goes at the top.
         * @fires OpenSeadragon.World.event:add-item
         * @fires OpenSeadragon.World.event:metrics-change
         */
        addItem: function(t, s) {
          if (e.console.assert(t, "[World.addItem] item is required"), e.console.assert(t instanceof e.TiledImage, "[World.addItem] only TiledImages supported at this time"), s = s || {}, s.index !== void 0) {
            var o = Math.max(0, Math.min(this._items.length, s.index));
            this._items.splice(o, 0, t);
          } else
            this._items.push(t);
          this._autoRefigureSizes ? this._figureSizes() : this._needsSizesFigured = !0, this._needsDraw = !0, t.addHandler("bounds-change", this._delegatedFigureSizes), t.addHandler("clip-change", this._delegatedFigureSizes), this.raiseEvent("add-item", {
            item: t
          });
        },
        /**
         * Get the item at the specified index.
         * @param {Number} index - The item's index.
         * @returns {OpenSeadragon.TiledImage} The item at the specified index.
         */
        getItemAt: function(t) {
          return e.console.assert(t !== void 0, "[World.getItemAt] index is required"), this._items[t];
        },
        /**
         * Get the index of the given item or -1 if not present.
         * @param {OpenSeadragon.TiledImage} item - The item.
         * @returns {Number} The index of the item or -1 if not present.
         */
        getIndexOfItem: function(t) {
          return e.console.assert(t, "[World.getIndexOfItem] item is required"), e.indexOf(this._items, t);
        },
        /**
         * @returns {Number} The number of items used.
         */
        getItemCount: function() {
          return this._items.length;
        },
        /**
         * Change the index of a item so that it appears over or under others.
         * @param {OpenSeadragon.TiledImage} item - The item to move.
         * @param {Number} index - The new index.
         * @fires OpenSeadragon.World.event:item-index-change
         */
        setItemIndex: function(t, s) {
          e.console.assert(t, "[World.setItemIndex] item is required"), e.console.assert(s !== void 0, "[World.setItemIndex] index is required");
          var o = this.getIndexOfItem(t);
          if (s >= this._items.length)
            throw new Error("Index bigger than number of layers.");
          s === o || o === -1 || (this._items.splice(o, 1), this._items.splice(s, 0, t), this._needsDraw = !0, this.raiseEvent("item-index-change", {
            item: t,
            previousIndex: o,
            newIndex: s
          }));
        },
        /**
         * Remove an item.
         * @param {OpenSeadragon.TiledImage} item - The item to remove.
         * @fires OpenSeadragon.World.event:remove-item
         * @fires OpenSeadragon.World.event:metrics-change
         */
        removeItem: function(t) {
          e.console.assert(t, "[World.removeItem] item is required");
          var s = e.indexOf(this._items, t);
          s !== -1 && (t.removeHandler("bounds-change", this._delegatedFigureSizes), t.removeHandler("clip-change", this._delegatedFigureSizes), t.destroy(), this._items.splice(s, 1), this._figureSizes(), this._needsDraw = !0, this._raiseRemoveItem(t));
        },
        /**
         * Remove all items.
         * @fires OpenSeadragon.World.event:remove-item
         * @fires OpenSeadragon.World.event:metrics-change
         */
        removeAll: function() {
          this.viewer._cancelPendingImages();
          var t, s;
          for (s = 0; s < this._items.length; s++)
            t = this._items[s], t.removeHandler("bounds-change", this._delegatedFigureSizes), t.removeHandler("clip-change", this._delegatedFigureSizes), t.destroy();
          var o = this._items;
          for (this._items = [], this._figureSizes(), this._needsDraw = !0, s = 0; s < o.length; s++)
            t = o[s], this._raiseRemoveItem(t);
        },
        /**
         * Clears all tiles and triggers updates for all items.
         */
        resetItems: function() {
          for (var t = 0; t < this._items.length; t++)
            this._items[t].reset();
        },
        /**
         * Updates (i.e. animates bounds of) all items.
         */
        update: function() {
          for (var t = !1, s = 0; s < this._items.length; s++)
            t = this._items[s].update() || t;
          return t;
        },
        /**
         * Draws all items.
         */
        draw: function() {
          for (var t = 0; t < this._items.length; t++)
            this._items[t].draw();
          this._needsDraw = !1;
        },
        /**
         * @returns {Boolean} true if any items need updating.
         */
        needsDraw: function() {
          for (var t = 0; t < this._items.length; t++)
            if (this._items[t].needsDraw())
              return !0;
          return this._needsDraw;
        },
        /**
         * @returns {OpenSeadragon.Rect} The smallest rectangle that encloses all items, in viewport coordinates.
         */
        getHomeBounds: function() {
          return this._homeBounds.clone();
        },
        /**
         * To facilitate zoom constraints, we keep track of the pixel density of the
         * densest item in the World (i.e. the item whose content size to viewport size
         * ratio is the highest) and save it as this "content factor".
         * @returns {Number} the number of content units per viewport unit.
         */
        getContentFactor: function() {
          return this._contentFactor;
        },
        /**
         * As a performance optimization, setting this flag to false allows the bounds-change event handler
         * on tiledImages to skip calculations on the world bounds. If a lot of images are going to be positioned in
         * rapid succession, this is a good idea. When finished, setAutoRefigureSizes should be called with true
         * or the system may behave oddly.
         * @param {Boolean} [value] The value to which to set the flag.
         */
        setAutoRefigureSizes: function(t) {
          this._autoRefigureSizes = t, t & this._needsSizesFigured && (this._figureSizes(), this._needsSizesFigured = !1);
        },
        /**
         * Arranges all of the TiledImages with the specified settings.
         * @param {Object} options - Specifies how to arrange.
         * @param {Boolean} [options.immediately=false] - Whether to animate to the new arrangement.
         * @param {String} [options.layout] - See collectionLayout in {@link OpenSeadragon.Options}.
         * @param {Number} [options.rows] - See collectionRows in {@link OpenSeadragon.Options}.
         * @param {Number} [options.columns] - See collectionColumns in {@link OpenSeadragon.Options}.
         * @param {Number} [options.tileSize] - See collectionTileSize in {@link OpenSeadragon.Options}.
         * @param {Number} [options.tileMargin] - See collectionTileMargin in {@link OpenSeadragon.Options}.
         * @fires OpenSeadragon.World.event:metrics-change
         */
        arrange: function(t) {
          t = t || {};
          var s = t.immediately || !1, o = t.layout || e.DEFAULT_SETTINGS.collectionLayout, h = t.rows || e.DEFAULT_SETTINGS.collectionRows, i = t.columns || e.DEFAULT_SETTINGS.collectionColumns, n = t.tileSize || e.DEFAULT_SETTINGS.collectionTileSize, r = t.tileMargin || e.DEFAULT_SETTINGS.collectionTileMargin, l = n + r, d;
          !t.rows && i ? d = i : d = Math.ceil(this._items.length / h);
          var f = 0, y = 0, v, T, w, x, _;
          this.setAutoRefigureSizes(!1);
          for (var b = 0; b < this._items.length; b++)
            b && b % d === 0 && (o === "horizontal" ? (y += l, f = 0) : (f += l, y = 0)), v = this._items[b], T = v.getBounds(), T.width > T.height ? w = n : w = n * (T.width / T.height), x = w * (T.height / T.width), _ = new e.Point(
              f + (n - w) / 2,
              y + (n - x) / 2
            ), v.setPosition(_, s), v.setWidth(w, s), o === "horizontal" ? f += l : y += l;
          this.setAutoRefigureSizes(!0);
        },
        // private
        _figureSizes: function() {
          var t = this._homeBounds ? this._homeBounds.clone() : null, s = this._contentSize ? this._contentSize.clone() : null, o = this._contentFactor || 0;
          if (!this._items.length)
            this._homeBounds = new e.Rect(0, 0, 1, 1), this._contentSize = new e.Point(1, 1), this._contentFactor = 1;
          else {
            var h = this._items[0], i = h.getBounds();
            this._contentFactor = h.getContentSize().x / i.width;
            for (var n = h.getClippedBounds().getBoundingBox(), r = n.x, l = n.y, d = n.x + n.width, f = n.y + n.height, y = 1; y < this._items.length; y++)
              h = this._items[y], i = h.getBounds(), this._contentFactor = Math.max(
                this._contentFactor,
                h.getContentSize().x / i.width
              ), n = h.getClippedBounds().getBoundingBox(), r = Math.min(r, n.x), l = Math.min(l, n.y), d = Math.max(d, n.x + n.width), f = Math.max(f, n.y + n.height);
            this._homeBounds = new e.Rect(r, l, d - r, f - l), this._contentSize = new e.Point(
              this._homeBounds.width * this._contentFactor,
              this._homeBounds.height * this._contentFactor
            );
          }
          (this._contentFactor !== o || !this._homeBounds.equals(t) || !this._contentSize.equals(s)) && this.raiseEvent("metrics-change", {});
        },
        // private
        _raiseRemoveItem: function(t) {
          this.raiseEvent("remove-item", { item: t });
        }
      }
    );
  }(D);
})(He);
var Ne = He.exports;
const Be = /* @__PURE__ */ Me(Ne);
let oe = window.OpenSeadragon;
if (!oe && (oe = Be, !oe))
  throw new Error("OpenSeadragon is missing.");
const be = "http://www.w3.org/2000/svg";
oe.Viewer && (oe.Viewer.prototype.svgOverlay = function() {
  return this._svgOverlayInfo ? this._svgOverlayInfo : (this._svgOverlayInfo = new Ie(this), this._svgOverlayInfo);
});
const Ie = function(F) {
  const D = this;
  this._viewer = F, this._containerWidth = 0, this._containerHeight = 0, this._svg = document.createElementNS(be, "svg"), this._svg.style.position = "absolute", this._svg.style.left = 0, this._svg.style.top = 0, this._svg.style.width = "100%", this._svg.style.height = "100%", this._viewer.canvas.appendChild(this._svg), this._node = document.createElementNS(be, "g"), this._svg.appendChild(this._node), this._viewer.addHandler("animation", function() {
    D.resize();
  }), this._viewer.addHandler("open", function() {
    D.resize();
  }), this._viewer.addHandler("rotate", function() {
    D.resize();
  }), this._viewer.addHandler("flip", function() {
    D.resize();
  }), this._viewer.addHandler("resize", function() {
    D.resize();
  }), this.resize();
};
Ie.prototype = {
  // ----------
  node: function() {
    return this._node;
  },
  // ----------
  resize: function() {
    this._containerWidth !== this._viewer.container.clientWidth && (this._containerWidth = this._viewer.container.clientWidth, this._svg.setAttribute("width", this._containerWidth)), this._containerHeight !== this._viewer.container.clientHeight && (this._containerHeight = this._viewer.container.clientHeight, this._svg.setAttribute("height", this._containerHeight));
    const F = this._viewer.viewport.pixelFromPoint(new oe.Point(0, 0), !0), D = this._viewer.viewport.getZoom(!0), e = this._viewer.viewport.getRotation(), t = this._viewer.viewport.getFlip(), s = this._viewer.viewport._containerInnerSize.x;
    let o = s * D;
    const h = o;
    t && (o = -o, F.x = -F.x + s), this._node.setAttribute(
      "transform",
      "translate(" + F.x + "," + F.y + ") scale(" + o + "," + h + ") rotate(" + e + ")"
    );
  },
  // ----------
  onClick: function(F, D) {
    new oe.MouseTracker({
      element: F,
      clickHandler: D
    }).setTracking(!0);
  }
};
function De(F, D, e) {
  let t, s, o = 40, h = 40;
  D.rect && (t = D.rect.x, s = D.rect.y, o = D.rect.w, h = D.rect.h), D.point && (t = D.point.x, s = D.point.y);
  const i = 1 / F.width;
  return new Be.Rect(
    t * i - o * i / 2 * (e - 1),
    s * i - h * i / 2 * (e - 1),
    o * i * e,
    h * i * e
  );
}
const Oe = (F) => {
  var D, e, t, s, o;
  let h = {
    id: typeof F == "string" ? F : F.source
  };
  if (typeof F == "string") {
    if (F.includes("#xywh=")) {
      const i = F.split("#xywh=");
      if (i && i[1]) {
        const [n, r, l, d] = i[1].split(",").map((f) => Number(f));
        h = {
          id: i[0],
          rect: {
            x: n,
            y: r,
            w: l,
            h: d
          }
        };
      }
    } else if (F.includes("#t=")) {
      const i = F.split("#t=");
      i && i[1] && (h = {
        id: i[0],
        t: i[1]
      });
    }
  } else if (typeof F == "object") {
    if (((D = F.selector) == null ? void 0 : D.type) === "PointSelector")
      h = {
        id: F.source,
        point: {
          x: F.selector.x,
          y: F.selector.y
        }
      };
    else if (((e = F.selector) == null ? void 0 : e.type) === "SvgSelector")
      h = {
        id: F.source,
        svg: F.selector.value
      };
    else if (((t = F.selector) == null ? void 0 : t.type) === "FragmentSelector" && (s = F.selector) != null && s.value.includes("xywh=") && F.source.type == "Canvas" && F.source.id) {
      const i = (o = F.selector) == null ? void 0 : o.value.split("xywh=");
      if (i && i[1]) {
        const [n, r, l, d] = i[1].split(",").map((f) => Number(f));
        h = {
          id: F.source.id,
          rect: {
            x: n,
            y: r,
            w: l,
            h: d
          }
        };
      }
    }
  }
  return h;
}, Ue = ({
  annotation: F,
  viewerConfigOptions: D,
  canvas: e,
  openSeadragonViewer: t,
  useViewerDispatch: s,
  setActiveTarget: o,
  activeTarget: h
}) => {
  const i = s();
  Fe(() => {
    var T;
    if (!t || !F.target || F.target != h)
      return;
    const d = ((T = D.annotationOverlays) == null ? void 0 : T.zoomLevel) || 1, f = Oe(F.target), { rect: y, id: v } = f;
    if (y && e.id === v) {
      const w = De(
        e,
        f,
        d
      );
      t == null || t.viewport.fitBounds(w);
    }
  }, [t]);
  function n() {
    var w;
    if (!F.target)
      return;
    const d = ((w = D.annotationOverlays) == null ? void 0 : w.zoomLevel) || 1, f = Array.isArray(F.target) ? F.target[0] : F.target, y = Oe(f), { rect: v, id: T } = y;
    if (v)
      if (e.id === T) {
        const x = De(
          e,
          y,
          d
        );
        t == null || t.viewport.fitBounds(x);
      } else
        i({
          type: "updateActiveCanvas",
          canvasId: T
        }), o(f);
  }
  function r(d, f) {
    if (typeof d == "string")
      return /* @__PURE__ */ de("div", { className: "clipping-text", children: d }, f);
    if (d.type === "Image")
      return /* @__PURE__ */ de("img", { src: d.value, className: "clipping-image" }, f);
    if (d.type === "TextualBody")
      return /* @__PURE__ */ de("div", { className: "clipping-text", children: d.value }, f);
  }
  function l(d) {
    return Array.isArray(d) ? d.map((f, y) => r(f, y)) : r(d, 0);
  }
  return F.body ? /* @__PURE__ */ de("div", { className: "clipping", onClick: n, children: l(F.body) }) : /* @__PURE__ */ de(Le, {});
};
export {
  Ue as default
};
