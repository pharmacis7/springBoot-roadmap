(function () {
  const mt = document.createElement("link").relList;
  if (mt && mt.supports && mt.supports("modulepreload")) return;
  for (const j of document.querySelectorAll('link[rel="modulepreload"]')) y(j);
  new MutationObserver((j) => {
    for (const W of j)
      if (W.type === "childList")
        for (const ht of W.addedNodes)
          ht.tagName === "LINK" && ht.rel === "modulepreload" && y(ht);
  }).observe(document, { childList: !0, subtree: !0 });
  function P(j) {
    const W = {};
    return (
      j.integrity && (W.integrity = j.integrity),
      j.referrerPolicy && (W.referrerPolicy = j.referrerPolicy),
      j.crossOrigin === "use-credentials"
        ? (W.credentials = "include")
        : j.crossOrigin === "anonymous"
          ? (W.credentials = "omit")
          : (W.credentials = "same-origin"),
      W
    );
  }
  function y(j) {
    if (j.ep) return;
    j.ep = !0;
    const W = P(j);
    fetch(j.href, W);
  }
})();
var nf = { exports: {} },
  pu = {};
var yd;
function Wv() {
  if (yd) return pu;
  yd = 1;
  var O = Symbol.for("react.transitional.element"),
    mt = Symbol.for("react.fragment");
  function P(y, j, W) {
    var ht = null;
    if (
      (W !== void 0 && (ht = "" + W),
      j.key !== void 0 && (ht = "" + j.key),
      "key" in j)
    ) {
      W = {};
      for (var Ut in j) Ut !== "key" && (W[Ut] = j[Ut]);
    } else W = j;
    return (
      (j = W.ref),
      { $$typeof: O, type: y, key: ht, ref: j !== void 0 ? j : null, props: W }
    );
  }
  return ((pu.Fragment = mt), (pu.jsx = P), (pu.jsxs = P), pu);
}
var hd;
function kv() {
  return (hd || ((hd = 1), (nf.exports = Wv())), nf.exports);
}
var Q = kv(),
  cf = { exports: {} },
  q = {};
var gd;
function $v() {
  if (gd) return q;
  gd = 1;
  var O = Symbol.for("react.transitional.element"),
    mt = Symbol.for("react.portal"),
    P = Symbol.for("react.fragment"),
    y = Symbol.for("react.strict_mode"),
    j = Symbol.for("react.profiler"),
    W = Symbol.for("react.consumer"),
    ht = Symbol.for("react.context"),
    Ut = Symbol.for("react.forward_ref"),
    C = Symbol.for("react.suspense"),
    A = Symbol.for("react.memo"),
    k = Symbol.for("react.lazy"),
    U = Symbol.for("react.activity"),
    ct = Symbol.iterator;
  function Ht(o) {
    return o === null || typeof o != "object"
      ? null
      : ((o = (ct && o[ct]) || o["@@iterator"]),
        typeof o == "function" ? o : null);
  }
  var Qt = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Nt = Object.assign,
    H = {};
  function ot(o, T, z) {
    ((this.props = o),
      (this.context = T),
      (this.refs = H),
      (this.updater = z || Qt));
  }
  ((ot.prototype.isReactComponent = {}),
    (ot.prototype.setState = function (o, T) {
      if (typeof o != "object" && typeof o != "function" && o != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, o, T, "setState");
    }),
    (ot.prototype.forceUpdate = function (o) {
      this.updater.enqueueForceUpdate(this, o, "forceUpdate");
    }));
  function At() {}
  At.prototype = ot.prototype;
  function vt(o, T, z) {
    ((this.props = o),
      (this.context = T),
      (this.refs = H),
      (this.updater = z || Qt));
  }
  var Lt = (vt.prototype = new At());
  ((Lt.constructor = vt), Nt(Lt, ot.prototype), (Lt.isPureReactComponent = !0));
  var Pt = Array.isArray;
  function Bt() {}
  var X = { H: null, A: null, T: null, S: null },
    Dt = Object.prototype.hasOwnProperty;
  function ol(o, T, z) {
    var D = z.ref;
    return {
      $$typeof: O,
      type: o,
      key: T,
      ref: D !== void 0 ? D : null,
      props: z,
    };
  }
  function Xe(o, T) {
    return ol(o.type, T, o.props);
  }
  function Ml(o) {
    return typeof o == "object" && o !== null && o.$$typeof === O;
  }
  function Jt(o) {
    var T = { "=": "=0", ":": "=2" };
    return (
      "$" +
      o.replace(/[=:]/g, function (z) {
        return T[z];
      })
    );
  }
  var be = /\/+/g;
  function Rl(o, T) {
    return typeof o == "object" && o !== null && o.key != null
      ? Jt("" + o.key)
      : T.toString(36);
  }
  function Tl(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (
          (typeof o.status == "string"
            ? o.then(Bt, Bt)
            : ((o.status = "pending"),
              o.then(
                function (T) {
                  o.status === "pending" &&
                    ((o.status = "fulfilled"), (o.value = T));
                },
                function (T) {
                  o.status === "pending" &&
                    ((o.status = "rejected"), (o.reason = T));
                },
              )),
          o.status)
        ) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function S(o, T, z, D, Y) {
    var L = typeof o;
    (L === "undefined" || L === "boolean") && (o = null);
    var tt = !1;
    if (o === null) tt = !0;
    else
      switch (L) {
        case "bigint":
        case "string":
        case "number":
          tt = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case O:
            case mt:
              tt = !0;
              break;
            case k:
              return ((tt = o._init), S(tt(o._payload), T, z, D, Y));
          }
      }
    if (tt)
      return (
        (Y = Y(o)),
        (tt = D === "" ? "." + Rl(o, 0) : D),
        Pt(Y)
          ? ((z = ""),
            tt != null && (z = tt.replace(be, "$&/") + "/"),
            S(Y, T, z, "", function (Oa) {
              return Oa;
            }))
          : Y != null &&
            (Ml(Y) &&
              (Y = Xe(
                Y,
                z +
                  (Y.key == null || (o && o.key === Y.key)
                    ? ""
                    : ("" + Y.key).replace(be, "$&/") + "/") +
                  tt,
              )),
            T.push(Y)),
        1
      );
    tt = 0;
    var Zt = D === "" ? "." : D + ":";
    if (Pt(o))
      for (var pt = 0; pt < o.length; pt++)
        ((D = o[pt]), (L = Zt + Rl(D, pt)), (tt += S(D, T, z, L, Y)));
    else if (((pt = Ht(o)), typeof pt == "function"))
      for (o = pt.call(o), pt = 0; !(D = o.next()).done; )
        ((D = D.value), (L = Zt + Rl(D, pt++)), (tt += S(D, T, z, L, Y)));
    else if (L === "object") {
      if (typeof o.then == "function") return S(Tl(o), T, z, D, Y);
      throw (
        (T = String(o)),
        Error(
          "Objects are not valid as a React child (found: " +
            (T === "[object Object]"
              ? "object with keys {" + Object.keys(o).join(", ") + "}"
              : T) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return tt;
  }
  function E(o, T, z) {
    if (o == null) return o;
    var D = [],
      Y = 0;
    return (
      S(o, D, "", "", function (L) {
        return T.call(z, L, Y++);
      }),
      D
    );
  }
  function B(o) {
    if (o._status === -1) {
      var T = o._result;
      ((T = T()),
        T.then(
          function (z) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 1), (o._result = z));
          },
          function (z) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 2), (o._result = z));
          },
        ),
        o._status === -1 && ((o._status = 0), (o._result = T)));
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var at =
      typeof reportError == "function"
        ? reportError
        : function (o) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var T = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof o == "object" &&
                  o !== null &&
                  typeof o.message == "string"
                    ? String(o.message)
                    : String(o),
                error: o,
              });
              if (!window.dispatchEvent(T)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", o);
              return;
            }
            console.error(o);
          },
    ft = {
      map: E,
      forEach: function (o, T, z) {
        E(
          o,
          function () {
            T.apply(this, arguments);
          },
          z,
        );
      },
      count: function (o) {
        var T = 0;
        return (
          E(o, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (o) {
        return (
          E(o, function (T) {
            return T;
          }) || []
        );
      },
      only: function (o) {
        if (!Ml(o))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return o;
      },
    };
  return (
    (q.Activity = U),
    (q.Children = ft),
    (q.Component = ot),
    (q.Fragment = P),
    (q.Profiler = j),
    (q.PureComponent = vt),
    (q.StrictMode = y),
    (q.Suspense = C),
    (q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X),
    (q.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (o) {
        return X.H.useMemoCache(o);
      },
    }),
    (q.cache = function (o) {
      return function () {
        return o.apply(null, arguments);
      };
    }),
    (q.cacheSignal = function () {
      return null;
    }),
    (q.cloneElement = function (o, T, z) {
      if (o == null)
        throw Error(
          "The argument must be a React element, but you passed " + o + ".",
        );
      var D = Nt({}, o.props),
        Y = o.key;
      if (T != null)
        for (L in (T.key !== void 0 && (Y = "" + T.key), T))
          !Dt.call(T, L) ||
            L === "key" ||
            L === "__self" ||
            L === "__source" ||
            (L === "ref" && T.ref === void 0) ||
            (D[L] = T[L]);
      var L = arguments.length - 2;
      if (L === 1) D.children = z;
      else if (1 < L) {
        for (var tt = Array(L), Zt = 0; Zt < L; Zt++)
          tt[Zt] = arguments[Zt + 2];
        D.children = tt;
      }
      return ol(o.type, Y, D);
    }),
    (q.createContext = function (o) {
      return (
        (o = {
          $$typeof: ht,
          _currentValue: o,
          _currentValue2: o,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (o.Provider = o),
        (o.Consumer = { $$typeof: W, _context: o }),
        o
      );
    }),
    (q.createElement = function (o, T, z) {
      var D,
        Y = {},
        L = null;
      if (T != null)
        for (D in (T.key !== void 0 && (L = "" + T.key), T))
          Dt.call(T, D) &&
            D !== "key" &&
            D !== "__self" &&
            D !== "__source" &&
            (Y[D] = T[D]);
      var tt = arguments.length - 2;
      if (tt === 1) Y.children = z;
      else if (1 < tt) {
        for (var Zt = Array(tt), pt = 0; pt < tt; pt++)
          Zt[pt] = arguments[pt + 2];
        Y.children = Zt;
      }
      if (o && o.defaultProps)
        for (D in ((tt = o.defaultProps), tt))
          Y[D] === void 0 && (Y[D] = tt[D]);
      return ol(o, L, Y);
    }),
    (q.createRef = function () {
      return { current: null };
    }),
    (q.forwardRef = function (o) {
      return { $$typeof: Ut, render: o };
    }),
    (q.isValidElement = Ml),
    (q.lazy = function (o) {
      return { $$typeof: k, _payload: { _status: -1, _result: o }, _init: B };
    }),
    (q.memo = function (o, T) {
      return { $$typeof: A, type: o, compare: T === void 0 ? null : T };
    }),
    (q.startTransition = function (o) {
      var T = X.T,
        z = {};
      X.T = z;
      try {
        var D = o(),
          Y = X.S;
        (Y !== null && Y(z, D),
          typeof D == "object" &&
            D !== null &&
            typeof D.then == "function" &&
            D.then(Bt, at));
      } catch (L) {
        at(L);
      } finally {
        (T !== null && z.types !== null && (T.types = z.types), (X.T = T));
      }
    }),
    (q.unstable_useCacheRefresh = function () {
      return X.H.useCacheRefresh();
    }),
    (q.use = function (o) {
      return X.H.use(o);
    }),
    (q.useActionState = function (o, T, z) {
      return X.H.useActionState(o, T, z);
    }),
    (q.useCallback = function (o, T) {
      return X.H.useCallback(o, T);
    }),
    (q.useContext = function (o) {
      return X.H.useContext(o);
    }),
    (q.useDebugValue = function () {}),
    (q.useDeferredValue = function (o, T) {
      return X.H.useDeferredValue(o, T);
    }),
    (q.useEffect = function (o, T) {
      return X.H.useEffect(o, T);
    }),
    (q.useEffectEvent = function (o) {
      return X.H.useEffectEvent(o);
    }),
    (q.useId = function () {
      return X.H.useId();
    }),
    (q.useImperativeHandle = function (o, T, z) {
      return X.H.useImperativeHandle(o, T, z);
    }),
    (q.useInsertionEffect = function (o, T) {
      return X.H.useInsertionEffect(o, T);
    }),
    (q.useLayoutEffect = function (o, T) {
      return X.H.useLayoutEffect(o, T);
    }),
    (q.useMemo = function (o, T) {
      return X.H.useMemo(o, T);
    }),
    (q.useOptimistic = function (o, T) {
      return X.H.useOptimistic(o, T);
    }),
    (q.useReducer = function (o, T, z) {
      return X.H.useReducer(o, T, z);
    }),
    (q.useRef = function (o) {
      return X.H.useRef(o);
    }),
    (q.useState = function (o) {
      return X.H.useState(o);
    }),
    (q.useSyncExternalStore = function (o, T, z) {
      return X.H.useSyncExternalStore(o, T, z);
    }),
    (q.useTransition = function () {
      return X.H.useTransition();
    }),
    (q.version = "19.2.4"),
    q
  );
}
var Sd;
function df() {
  return (Sd || ((Sd = 1), (cf.exports = $v())), cf.exports);
}
var Qe = df(),
  ff = { exports: {} },
  bu = {},
  sf = { exports: {} },
  of = {};
var pd;
function Fv() {
  return (
    pd ||
      ((pd = 1),
      (function (O) {
        function mt(S, E) {
          var B = S.length;
          S.push(E);
          t: for (; 0 < B; ) {
            var at = (B - 1) >>> 1,
              ft = S[at];
            if (0 < j(ft, E)) ((S[at] = E), (S[B] = ft), (B = at));
            else break t;
          }
        }
        function P(S) {
          return S.length === 0 ? null : S[0];
        }
        function y(S) {
          if (S.length === 0) return null;
          var E = S[0],
            B = S.pop();
          if (B !== E) {
            S[0] = B;
            t: for (var at = 0, ft = S.length, o = ft >>> 1; at < o; ) {
              var T = 2 * (at + 1) - 1,
                z = S[T],
                D = T + 1,
                Y = S[D];
              if (0 > j(z, B))
                D < ft && 0 > j(Y, z)
                  ? ((S[at] = Y), (S[D] = B), (at = D))
                  : ((S[at] = z), (S[T] = B), (at = T));
              else if (D < ft && 0 > j(Y, B))
                ((S[at] = Y), (S[D] = B), (at = D));
              else break t;
            }
          }
          return E;
        }
        function j(S, E) {
          var B = S.sortIndex - E.sortIndex;
          return B !== 0 ? B : S.id - E.id;
        }
        if (
          ((O.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var W = performance;
          O.unstable_now = function () {
            return W.now();
          };
        } else {
          var ht = Date,
            Ut = ht.now();
          O.unstable_now = function () {
            return ht.now() - Ut;
          };
        }
        var C = [],
          A = [],
          k = 1,
          U = null,
          ct = 3,
          Ht = !1,
          Qt = !1,
          Nt = !1,
          H = !1,
          ot = typeof setTimeout == "function" ? setTimeout : null,
          At = typeof clearTimeout == "function" ? clearTimeout : null,
          vt = typeof setImmediate < "u" ? setImmediate : null;
        function Lt(S) {
          for (var E = P(A); E !== null; ) {
            if (E.callback === null) y(A);
            else if (E.startTime <= S)
              (y(A), (E.sortIndex = E.expirationTime), mt(C, E));
            else break;
            E = P(A);
          }
        }
        function Pt(S) {
          if (((Nt = !1), Lt(S), !Qt))
            if (P(C) !== null) ((Qt = !0), Bt || ((Bt = !0), Jt()));
            else {
              var E = P(A);
              E !== null && Tl(Pt, E.startTime - S);
            }
        }
        var Bt = !1,
          X = -1,
          Dt = 5,
          ol = -1;
        function Xe() {
          return H ? !0 : !(O.unstable_now() - ol < Dt);
        }
        function Ml() {
          if (((H = !1), Bt)) {
            var S = O.unstable_now();
            ol = S;
            var E = !0;
            try {
              t: {
                ((Qt = !1), Nt && ((Nt = !1), At(X), (X = -1)), (Ht = !0));
                var B = ct;
                try {
                  l: {
                    for (
                      Lt(S), U = P(C);
                      U !== null && !(U.expirationTime > S && Xe());
                    ) {
                      var at = U.callback;
                      if (typeof at == "function") {
                        ((U.callback = null), (ct = U.priorityLevel));
                        var ft = at(U.expirationTime <= S);
                        if (((S = O.unstable_now()), typeof ft == "function")) {
                          ((U.callback = ft), Lt(S), (E = !0));
                          break l;
                        }
                        (U === P(C) && y(C), Lt(S));
                      } else y(C);
                      U = P(C);
                    }
                    if (U !== null) E = !0;
                    else {
                      var o = P(A);
                      (o !== null && Tl(Pt, o.startTime - S), (E = !1));
                    }
                  }
                  break t;
                } finally {
                  ((U = null), (ct = B), (Ht = !1));
                }
                E = void 0;
              }
            } finally {
              E ? Jt() : (Bt = !1);
            }
          }
        }
        var Jt;
        if (typeof vt == "function")
          Jt = function () {
            vt(Ml);
          };
        else if (typeof MessageChannel < "u") {
          var be = new MessageChannel(),
            Rl = be.port2;
          ((be.port1.onmessage = Ml),
            (Jt = function () {
              Rl.postMessage(null);
            }));
        } else
          Jt = function () {
            ot(Ml, 0);
          };
        function Tl(S, E) {
          X = ot(function () {
            S(O.unstable_now());
          }, E);
        }
        ((O.unstable_IdlePriority = 5),
          (O.unstable_ImmediatePriority = 1),
          (O.unstable_LowPriority = 4),
          (O.unstable_NormalPriority = 3),
          (O.unstable_Profiling = null),
          (O.unstable_UserBlockingPriority = 2),
          (O.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (O.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Dt = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (O.unstable_getCurrentPriorityLevel = function () {
            return ct;
          }),
          (O.unstable_next = function (S) {
            switch (ct) {
              case 1:
              case 2:
              case 3:
                var E = 3;
                break;
              default:
                E = ct;
            }
            var B = ct;
            ct = E;
            try {
              return S();
            } finally {
              ct = B;
            }
          }),
          (O.unstable_requestPaint = function () {
            H = !0;
          }),
          (O.unstable_runWithPriority = function (S, E) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var B = ct;
            ct = S;
            try {
              return E();
            } finally {
              ct = B;
            }
          }),
          (O.unstable_scheduleCallback = function (S, E, B) {
            var at = O.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay),
                  (B = typeof B == "number" && 0 < B ? at + B : at))
                : (B = at),
              S)
            ) {
              case 1:
                var ft = -1;
                break;
              case 2:
                ft = 250;
                break;
              case 5:
                ft = 1073741823;
                break;
              case 4:
                ft = 1e4;
                break;
              default:
                ft = 5e3;
            }
            return (
              (ft = B + ft),
              (S = {
                id: k++,
                callback: E,
                priorityLevel: S,
                startTime: B,
                expirationTime: ft,
                sortIndex: -1,
              }),
              B > at
                ? ((S.sortIndex = B),
                  mt(A, S),
                  P(C) === null &&
                    S === P(A) &&
                    (Nt ? (At(X), (X = -1)) : (Nt = !0), Tl(Pt, B - at)))
                : ((S.sortIndex = ft),
                  mt(C, S),
                  Qt || Ht || ((Qt = !0), Bt || ((Bt = !0), Jt()))),
              S
            );
          }),
          (O.unstable_shouldYield = Xe),
          (O.unstable_wrapCallback = function (S) {
            var E = ct;
            return function () {
              var B = ct;
              ct = E;
              try {
                return S.apply(this, arguments);
              } finally {
                ct = B;
              }
            };
          }));
      })(of)),
    of
  );
}
var bd;
function Iv() {
  return (bd || ((bd = 1), (sf.exports = Fv())), sf.exports);
}
var rf = { exports: {} },
  Xt = {};
var Td;
function Pv() {
  if (Td) return Xt;
  Td = 1;
  var O = df();
  function mt(C) {
    var A = "https://react.dev/errors/" + C;
    if (1 < arguments.length) {
      A += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var k = 2; k < arguments.length; k++)
        A += "&args[]=" + encodeURIComponent(arguments[k]);
    }
    return (
      "Minified React error #" +
      C +
      "; visit " +
      A +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function P() {}
  var y = {
      d: {
        f: P,
        r: function () {
          throw Error(mt(522));
        },
        D: P,
        C: P,
        L: P,
        m: P,
        X: P,
        S: P,
        M: P,
      },
      p: 0,
      findDOMNode: null,
    },
    j = Symbol.for("react.portal");
  function W(C, A, k) {
    var U =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: j,
      key: U == null ? null : "" + U,
      children: C,
      containerInfo: A,
      implementation: k,
    };
  }
  var ht = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Ut(C, A) {
    if (C === "font") return "";
    if (typeof A == "string") return A === "use-credentials" ? A : "";
  }
  return (
    (Xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y),
    (Xt.createPortal = function (C, A) {
      var k =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!A || (A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11))
        throw Error(mt(299));
      return W(C, A, null, k);
    }),
    (Xt.flushSync = function (C) {
      var A = ht.T,
        k = y.p;
      try {
        if (((ht.T = null), (y.p = 2), C)) return C();
      } finally {
        ((ht.T = A), (y.p = k), y.d.f());
      }
    }),
    (Xt.preconnect = function (C, A) {
      typeof C == "string" &&
        (A
          ? ((A = A.crossOrigin),
            (A =
              typeof A == "string"
                ? A === "use-credentials"
                  ? A
                  : ""
                : void 0))
          : (A = null),
        y.d.C(C, A));
    }),
    (Xt.prefetchDNS = function (C) {
      typeof C == "string" && y.d.D(C);
    }),
    (Xt.preinit = function (C, A) {
      if (typeof C == "string" && A && typeof A.as == "string") {
        var k = A.as,
          U = Ut(k, A.crossOrigin),
          ct = typeof A.integrity == "string" ? A.integrity : void 0,
          Ht = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
        k === "style"
          ? y.d.S(C, typeof A.precedence == "string" ? A.precedence : void 0, {
              crossOrigin: U,
              integrity: ct,
              fetchPriority: Ht,
            })
          : k === "script" &&
            y.d.X(C, {
              crossOrigin: U,
              integrity: ct,
              fetchPriority: Ht,
              nonce: typeof A.nonce == "string" ? A.nonce : void 0,
            });
      }
    }),
    (Xt.preinitModule = function (C, A) {
      if (typeof C == "string")
        if (typeof A == "object" && A !== null) {
          if (A.as == null || A.as === "script") {
            var k = Ut(A.as, A.crossOrigin);
            y.d.M(C, {
              crossOrigin: k,
              integrity: typeof A.integrity == "string" ? A.integrity : void 0,
              nonce: typeof A.nonce == "string" ? A.nonce : void 0,
            });
          }
        } else A == null && y.d.M(C);
    }),
    (Xt.preload = function (C, A) {
      if (
        typeof C == "string" &&
        typeof A == "object" &&
        A !== null &&
        typeof A.as == "string"
      ) {
        var k = A.as,
          U = Ut(k, A.crossOrigin);
        y.d.L(C, k, {
          crossOrigin: U,
          integrity: typeof A.integrity == "string" ? A.integrity : void 0,
          nonce: typeof A.nonce == "string" ? A.nonce : void 0,
          type: typeof A.type == "string" ? A.type : void 0,
          fetchPriority:
            typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
          referrerPolicy:
            typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
          imageSrcSet:
            typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
          imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
          media: typeof A.media == "string" ? A.media : void 0,
        });
      }
    }),
    (Xt.preloadModule = function (C, A) {
      if (typeof C == "string")
        if (A) {
          var k = Ut(A.as, A.crossOrigin);
          y.d.m(C, {
            as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
            crossOrigin: k,
            integrity: typeof A.integrity == "string" ? A.integrity : void 0,
          });
        } else y.d.m(C);
    }),
    (Xt.requestFormReset = function (C) {
      y.d.r(C);
    }),
    (Xt.unstable_batchedUpdates = function (C, A) {
      return C(A);
    }),
    (Xt.useFormState = function (C, A, k) {
      return ht.H.useFormState(C, A, k);
    }),
    (Xt.useFormStatus = function () {
      return ht.H.useHostTransitionStatus();
    }),
    (Xt.version = "19.2.4"),
    Xt
  );
}
var Ad;
function ty() {
  if (Ad) return rf.exports;
  Ad = 1;
  function O() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (mt) {
        console.error(mt);
      }
  }
  return (O(), (rf.exports = Pv()), rf.exports);
}
var Ed;
function ly() {
  if (Ed) return bu;
  Ed = 1;
  var O = Iv(),
    mt = df(),
    P = ty();
  function y(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      l +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function j(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function W(t) {
    var l = t,
      e = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do ((l = t), (l.flags & 4098) !== 0 && (e = l.return), (t = l.return));
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function ht(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (
        (l === null && ((t = t.alternate), t !== null && (l = t.memoizedState)),
        l !== null)
      )
        return l.dehydrated;
    }
    return null;
  }
  function Ut(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (
        (l === null && ((t = t.alternate), t !== null && (l = t.memoizedState)),
        l !== null)
      )
        return l.dehydrated;
    }
    return null;
  }
  function C(t) {
    if (W(t) !== t) throw Error(y(188));
  }
  function A(t) {
    var l = t.alternate;
    if (!l) {
      if (((l = W(t)), l === null)) throw Error(y(188));
      return l !== t ? null : t;
    }
    for (var e = t, a = l; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((a = u.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return (C(u), t);
          if (n === a) return (C(u), l);
          n = n.sibling;
        }
        throw Error(y(188));
      }
      if (e.return !== a.return) ((e = u), (a = n));
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === e) {
            ((i = !0), (e = u), (a = n));
            break;
          }
          if (c === a) {
            ((i = !0), (a = u), (e = n));
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === e) {
              ((i = !0), (e = n), (a = u));
              break;
            }
            if (c === a) {
              ((i = !0), (a = n), (e = u));
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(y(189));
        }
      }
      if (e.alternate !== a) throw Error(y(190));
    }
    if (e.tag !== 3) throw Error(y(188));
    return e.stateNode.current === e ? t : l;
  }
  function k(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((l = k(t)), l !== null)) return l;
      t = t.sibling;
    }
    return null;
  }
  var U = Object.assign,
    ct = Symbol.for("react.element"),
    Ht = Symbol.for("react.transitional.element"),
    Qt = Symbol.for("react.portal"),
    Nt = Symbol.for("react.fragment"),
    H = Symbol.for("react.strict_mode"),
    ot = Symbol.for("react.profiler"),
    At = Symbol.for("react.consumer"),
    vt = Symbol.for("react.context"),
    Lt = Symbol.for("react.forward_ref"),
    Pt = Symbol.for("react.suspense"),
    Bt = Symbol.for("react.suspense_list"),
    X = Symbol.for("react.memo"),
    Dt = Symbol.for("react.lazy"),
    ol = Symbol.for("react.activity"),
    Xe = Symbol.for("react.memo_cache_sentinel"),
    Ml = Symbol.iterator;
  function Jt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (Ml && t[Ml]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var be = Symbol.for("react.client.reference");
  function Rl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === be ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Nt:
        return "Fragment";
      case ot:
        return "Profiler";
      case H:
        return "StrictMode";
      case Pt:
        return "Suspense";
      case Bt:
        return "SuspenseList";
      case ol:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Qt:
          return "Portal";
        case vt:
          return t.displayName || "Context";
        case At:
          return (t._context.displayName || "Context") + ".Consumer";
        case Lt:
          var l = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = l.displayName || l.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case X:
          return (
            (l = t.displayName || null),
            l !== null ? l : Rl(t.type) || "Memo"
          );
        case Dt:
          ((l = t._payload), (t = t._init));
          try {
            return Rl(t(l));
          } catch {}
      }
    return null;
  }
  var Tl = Array.isArray,
    S = mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    E = P.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = { pending: !1, data: null, method: null, action: null },
    at = [],
    ft = -1;
  function o(t) {
    return { current: t };
  }
  function T(t) {
    0 > ft || ((t.current = at[ft]), (at[ft] = null), ft--);
  }
  function z(t, l) {
    (ft++, (at[ft] = t.current), (t.current = l));
  }
  var D = o(null),
    Y = o(null),
    L = o(null),
    tt = o(null);
  function Zt(t, l) {
    switch ((z(L, l), z(Y, t), z(D, null), l.nodeType)) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? xr(t) : 0;
        break;
      default:
        if (((t = l.tagName), (l = l.namespaceURI)))
          ((l = xr(l)), (t = Gr(l, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (T(D), z(D, t));
  }
  function pt() {
    (T(D), T(Y), T(L));
  }
  function Oa(t) {
    t.memoizedState !== null && z(tt, t);
    var l = D.current,
      e = Gr(l, t.type);
    l !== e && (z(Y, t), z(D, e));
  }
  function Tu(t) {
    (Y.current === t && (T(D), T(Y)),
      tt.current === t && (T(tt), (yu._currentValue = B)));
  }
  var Xn, mf;
  function Te(t) {
    if (Xn === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        ((Xn = (l && l[1]) || ""),
          (mf =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Xn +
      t +
      mf
    );
  }
  var Ln = !1;
  function Zn(t, l) {
    if (!t || Ln) return "";
    Ln = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (l) {
              var b = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(b.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(b, []);
                } catch (h) {
                  var v = h;
                }
                Reflect.construct(t, [], b);
              } else {
                try {
                  b.call();
                } catch (h) {
                  v = h;
                }
                t.call(b.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (h) {
                v = h;
              }
              (b = t()) &&
                typeof b.catch == "function" &&
                b.catch(function () {});
            }
          } catch (h) {
            if (h && v && typeof h.stack == "string") return [h.stack, v.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        i = n[0],
        c = n[1];
      if (i && c) {
        var f = i.split(`
`),
          m = c.split(`
`);
        for (
          u = a = 0;
          a < f.length && !f[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; u < m.length && !m[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === f.length || u === m.length)
          for (
            a = f.length - 1, u = m.length - 1;
            1 <= a && 0 <= u && f[a] !== m[u];
          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (f[a] !== m[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || f[a] !== m[u])) {
                  var g =
                    `
` + f[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      g.includes("<anonymous>") &&
                      (g = g.replace("<anonymous>", t.displayName)),
                    g
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      ((Ln = !1), (Error.prepareStackTrace = e));
    }
    return (e = t ? t.displayName || t.name : "") ? Te(e) : "";
  }
  function Md(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Te(t.type);
      case 16:
        return Te("Lazy");
      case 13:
        return t.child !== l && l !== null
          ? Te("Suspense Fallback")
          : Te("Suspense");
      case 19:
        return Te("SuspenseList");
      case 0:
      case 15:
        return Zn(t.type, !1);
      case 11:
        return Zn(t.type.render, !1);
      case 1:
        return Zn(t.type, !0);
      case 31:
        return Te("Activity");
      default:
        return "";
    }
  }
  function vf(t) {
    try {
      var l = "",
        e = null;
      do ((l += Md(t, e)), (e = t), (t = t.return));
      while (t);
      return l;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Vn = Object.prototype.hasOwnProperty,
    Jn = O.unstable_scheduleCallback,
    Kn = O.unstable_cancelCallback,
    Od = O.unstable_shouldYield,
    Dd = O.unstable_requestPaint,
    tl = O.unstable_now,
    _d = O.unstable_getCurrentPriorityLevel,
    yf = O.unstable_ImmediatePriority,
    hf = O.unstable_UserBlockingPriority,
    Au = O.unstable_NormalPriority,
    Cd = O.unstable_LowPriority,
    gf = O.unstable_IdlePriority,
    Rd = O.log,
    Ud = O.unstable_setDisableYieldValue,
    Da = null,
    ll = null;
  function kl(t) {
    if (
      (typeof Rd == "function" && Ud(t),
      ll && typeof ll.setStrictMode == "function")
    )
      try {
        ll.setStrictMode(Da, t);
      } catch {}
  }
  var el = Math.clz32 ? Math.clz32 : Bd,
    Hd = Math.log,
    Nd = Math.LN2;
  function Bd(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Hd(t) / Nd) | 0)) | 0);
  }
  var Eu = 256,
    zu = 262144,
    Mu = 4194304;
  function Ae(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ou(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      n = t.suspendedLanes,
      i = t.pingedLanes;
    t = t.warmLanes;
    var c = a & 134217727;
    return (
      c !== 0
        ? ((a = c & ~n),
          a !== 0
            ? (u = Ae(a))
            : ((i &= c),
              i !== 0
                ? (u = Ae(i))
                : e || ((e = c & ~t), e !== 0 && (u = Ae(e)))))
        : ((c = a & ~n),
          c !== 0
            ? (u = Ae(c))
            : i !== 0
              ? (u = Ae(i))
              : e || ((e = a & ~t), e !== 0 && (u = Ae(e)))),
      u === 0
        ? 0
        : l !== 0 &&
            l !== u &&
            (l & n) === 0 &&
            ((n = u & -u),
            (e = l & -l),
            n >= e || (n === 32 && (e & 4194048) !== 0))
          ? l
          : u
    );
  }
  function _a(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function qd(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Sf() {
    var t = Mu;
    return ((Mu <<= 1), (Mu & 62914560) === 0 && (Mu = 4194304), t);
  }
  function wn(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Ca(t, l) {
    ((t.pendingLanes |= l),
      l !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function jd(t, l, e, a, u, n) {
    var i = t.pendingLanes;
    ((t.pendingLanes = e),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= e),
      (t.entangledLanes &= e),
      (t.errorRecoveryDisabledLanes &= e),
      (t.shellSuspendCounter = 0));
    var c = t.entanglements,
      f = t.expirationTimes,
      m = t.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var g = 31 - el(e),
        b = 1 << g;
      ((c[g] = 0), (f[g] = -1));
      var v = m[g];
      if (v !== null)
        for (m[g] = null, g = 0; g < v.length; g++) {
          var h = v[g];
          h !== null && (h.lane &= -536870913);
        }
      e &= ~b;
    }
    (a !== 0 && pf(t, a, 0),
      n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l)));
  }
  function pf(t, l, e) {
    ((t.pendingLanes |= l), (t.suspendedLanes &= ~l));
    var a = 31 - el(l);
    ((t.entangledLanes |= l),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (e & 261930)));
  }
  function bf(t, l) {
    var e = (t.entangledLanes |= l);
    for (t = t.entanglements; e; ) {
      var a = 31 - el(e),
        u = 1 << a;
      ((u & l) | (t[a] & l) && (t[a] |= l), (e &= ~u));
    }
  }
  function Tf(t, l) {
    var e = l & -l;
    return (
      (e = (e & 42) !== 0 ? 1 : Wn(e)),
      (e & (t.suspendedLanes | l)) !== 0 ? 0 : e
    );
  }
  function Wn(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function kn(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Af() {
    var t = E.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : fd(t.type));
  }
  function Ef(t, l) {
    var e = E.p;
    try {
      return ((E.p = t), l());
    } finally {
      E.p = e;
    }
  }
  var $l = Math.random().toString(36).slice(2),
    qt = "__reactFiber$" + $l,
    Kt = "__reactProps$" + $l,
    Le = "__reactContainer$" + $l,
    $n = "__reactEvents$" + $l,
    Yd = "__reactListeners$" + $l,
    xd = "__reactHandles$" + $l,
    zf = "__reactResources$" + $l,
    Ra = "__reactMarker$" + $l;
  function Fn(t) {
    (delete t[qt], delete t[Kt], delete t[$n], delete t[Yd], delete t[xd]);
  }
  function Ze(t) {
    var l = t[qt];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if ((l = e[Le] || e[qt])) {
        if (
          ((e = l.alternate),
          l.child !== null || (e !== null && e.child !== null))
        )
          for (t = Kr(t); t !== null; ) {
            if ((e = t[qt])) return e;
            t = Kr(t);
          }
        return l;
      }
      ((t = e), (e = t.parentNode));
    }
    return null;
  }
  function Ve(t) {
    if ((t = t[qt] || t[Le])) {
      var l = t.tag;
      if (
        l === 5 ||
        l === 6 ||
        l === 13 ||
        l === 31 ||
        l === 26 ||
        l === 27 ||
        l === 3
      )
        return t;
    }
    return null;
  }
  function Ua(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(y(33));
  }
  function Je(t) {
    var l = t[zf];
    return (
      l ||
        (l = t[zf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      l
    );
  }
  function Ct(t) {
    t[Ra] = !0;
  }
  var Mf = new Set(),
    Of = {};
  function Ee(t, l) {
    (Ke(t, l), Ke(t + "Capture", l));
  }
  function Ke(t, l) {
    for (Of[t] = l, t = 0; t < l.length; t++) Mf.add(l[t]);
  }
  var Gd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Df = {},
    _f = {};
  function Qd(t) {
    return Vn.call(_f, t)
      ? !0
      : Vn.call(Df, t)
        ? !1
        : Gd.test(t)
          ? (_f[t] = !0)
          : ((Df[t] = !0), !1);
  }
  function Du(t, l, e) {
    if (Qd(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + e);
      }
  }
  function _u(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function Ul(t, l, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, "" + a);
    }
  }
  function rl(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Cf(t) {
    var l = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (l === "checkbox" || l === "radio")
    );
  }
  function Xd(t, l, e) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, l);
    if (
      !t.hasOwnProperty(l) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var u = a.get,
        n = a.set;
      return (
        Object.defineProperty(t, l, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            ((e = "" + i), n.call(this, i));
          },
        }),
        Object.defineProperty(t, l, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return e;
          },
          setValue: function (i) {
            e = "" + i;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[l]);
          },
        }
      );
    }
  }
  function In(t) {
    if (!t._valueTracker) {
      var l = Cf(t) ? "checked" : "value";
      t._valueTracker = Xd(t, l, "" + t[l]);
    }
  }
  function Rf(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(),
      a = "";
    return (
      t && (a = Cf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== e ? (l.setValue(t), !0) : !1
    );
  }
  function Cu(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Ld = /[\n"\\]/g;
  function dl(t) {
    return t.replace(Ld, function (l) {
      return "\\" + l.charCodeAt(0).toString(16) + " ";
    });
  }
  function Pn(t, l, e, a, u, n, i, c) {
    ((t.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (t.type = i)
        : t.removeAttribute("type"),
      l != null
        ? i === "number"
          ? ((l === 0 && t.value === "") || t.value != l) &&
            (t.value = "" + rl(l))
          : t.value !== "" + rl(l) && (t.value = "" + rl(l))
        : (i !== "submit" && i !== "reset") || t.removeAttribute("value"),
      l != null
        ? ti(t, i, rl(l))
        : e != null
          ? ti(t, i, rl(e))
          : a != null && t.removeAttribute("value"),
      u == null && n != null && (t.defaultChecked = !!n),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (t.name = "" + rl(c))
        : t.removeAttribute("name"));
  }
  function Uf(t, l, e, a, u, n, i, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (t.type = n),
      l != null || e != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || l != null)) {
        In(t);
        return;
      }
      ((e = e != null ? "" + rl(e) : ""),
        (l = l != null ? "" + rl(l) : e),
        c || l === t.value || (t.value = l),
        (t.defaultValue = l));
    }
    ((a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = c ? t.checked : !!a),
      (t.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.name = i),
      In(t));
  }
  function ti(t, l, e) {
    (l === "number" && Cu(t.ownerDocument) === t) ||
      t.defaultValue === "" + e ||
      (t.defaultValue = "" + e);
  }
  function we(t, l, e, a) {
    if (((t = t.options), l)) {
      l = {};
      for (var u = 0; u < e.length; u++) l["$" + e[u]] = !0;
      for (e = 0; e < t.length; e++)
        ((u = l.hasOwnProperty("$" + t[e].value)),
          t[e].selected !== u && (t[e].selected = u),
          u && a && (t[e].defaultSelected = !0));
    } else {
      for (e = "" + rl(e), l = null, u = 0; u < t.length; u++) {
        if (t[u].value === e) {
          ((t[u].selected = !0), a && (t[u].defaultSelected = !0));
          return;
        }
        l !== null || t[u].disabled || (l = t[u]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Hf(t, l, e) {
    if (
      l != null &&
      ((l = "" + rl(l)), l !== t.value && (t.value = l), e == null)
    ) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + rl(e) : "";
  }
  function Nf(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(y(92));
        if (Tl(a)) {
          if (1 < a.length) throw Error(y(93));
          a = a[0];
        }
        e = a;
      }
      (e == null && (e = ""), (l = e));
    }
    ((e = rl(l)),
      (t.defaultValue = e),
      (a = t.textContent),
      a === e && a !== "" && a !== null && (t.value = a),
      In(t));
  }
  function We(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var Zd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Bf(t, l, e) {
    var a = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? a
        ? t.setProperty(l, "")
        : l === "float"
          ? (t.cssFloat = "")
          : (t[l] = "")
      : a
        ? t.setProperty(l, e)
        : typeof e != "number" || e === 0 || Zd.has(l)
          ? l === "float"
            ? (t.cssFloat = e)
            : (t[l] = ("" + e).trim())
          : (t[l] = e + "px");
  }
  function qf(t, l, e) {
    if (l != null && typeof l != "object") throw Error(y(62));
    if (((t = t.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (l != null && l.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
              ? (t.cssFloat = "")
              : (t[a] = ""));
      for (var u in l)
        ((a = l[u]), l.hasOwnProperty(u) && e[u] !== a && Bf(t, u, a));
    } else for (var n in l) l.hasOwnProperty(n) && Bf(t, n, l[n]);
  }
  function li(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Vd = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Jd =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ru(t) {
    return Jd.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Hl() {}
  var ei = null;
  function ai(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var ke = null,
    $e = null;
  function jf(t) {
    var l = Ve(t);
    if (l && (t = l.stateNode)) {
      var e = t[Kt] || null;
      t: switch (((t = l.stateNode), l.type)) {
        case "input":
          if (
            (Pn(
              t,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name,
            ),
            (l = e.name),
            e.type === "radio" && l != null)
          ) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + dl("" + l) + '"][type="radio"]',
              ),
                l = 0;
              l < e.length;
              l++
            ) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var u = a[Kt] || null;
                if (!u) throw Error(y(90));
                Pn(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (l = 0; l < e.length; l++)
              ((a = e[l]), a.form === t.form && Rf(a));
          }
          break t;
        case "textarea":
          Hf(t, e.value, e.defaultValue);
          break t;
        case "select":
          ((l = e.value), l != null && we(t, !!e.multiple, l, !1));
      }
    }
  }
  var ui = !1;
  function Yf(t, l, e) {
    if (ui) return t(l, e);
    ui = !0;
    try {
      var a = t(l);
      return a;
    } finally {
      if (
        ((ui = !1),
        (ke !== null || $e !== null) &&
          (Sn(), ke && ((l = ke), (t = $e), ($e = ke = null), jf(l), t)))
      )
        for (l = 0; l < t.length; l++) jf(t[l]);
    }
  }
  function Ha(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[Kt] || null;
    if (a === null) return null;
    e = a[l];
    t: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function") throw Error(y(231, l, typeof e));
    return e;
  }
  var Nl = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ni = !1;
  if (Nl)
    try {
      var Na = {};
      (Object.defineProperty(Na, "passive", {
        get: function () {
          ni = !0;
        },
      }),
        window.addEventListener("test", Na, Na),
        window.removeEventListener("test", Na, Na));
    } catch {
      ni = !1;
    }
  var Fl = null,
    ii = null,
    Uu = null;
  function xf() {
    if (Uu) return Uu;
    var t,
      l = ii,
      e = l.length,
      a,
      u = "value" in Fl ? Fl.value : Fl.textContent,
      n = u.length;
    for (t = 0; t < e && l[t] === u[t]; t++);
    var i = e - t;
    for (a = 1; a <= i && l[e - a] === u[n - a]; a++);
    return (Uu = u.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Hu(t) {
    var l = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && l === 13 && (t = 13))
        : (t = l),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Nu() {
    return !0;
  }
  function Gf() {
    return !1;
  }
  function wt(t) {
    function l(e, a, u, n, i) {
      ((this._reactName = e),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null));
      for (var c in t)
        t.hasOwnProperty(c) && ((e = t[c]), (this[c] = e ? e(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Nu
          : Gf),
        (this.isPropagationStopped = Gf),
        this
      );
    }
    return (
      U(l.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = Nu));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = Nu));
        },
        persist: function () {},
        isPersistent: Nu,
      }),
      l
    );
  }
  var ze = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Bu = wt(ze),
    Ba = U({}, ze, { view: 0, detail: 0 }),
    Kd = wt(Ba),
    ci,
    fi,
    qa,
    qu = U({}, Ba, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: oi,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== qa &&
              (qa && t.type === "mousemove"
                ? ((ci = t.screenX - qa.screenX), (fi = t.screenY - qa.screenY))
                : (fi = ci = 0),
              (qa = t)),
            ci);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : fi;
      },
    }),
    Qf = wt(qu),
    wd = U({}, qu, { dataTransfer: 0 }),
    Wd = wt(wd),
    kd = U({}, Ba, { relatedTarget: 0 }),
    si = wt(kd),
    $d = U({}, ze, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fd = wt($d),
    Id = U({}, ze, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Pd = wt(Id),
    tm = U({}, ze, { data: 0 }),
    Xf = wt(tm),
    lm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    em = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    am = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function um(t) {
    var l = this.nativeEvent;
    return l.getModifierState
      ? l.getModifierState(t)
      : (t = am[t])
        ? !!l[t]
        : !1;
  }
  function oi() {
    return um;
  }
  var nm = U({}, Ba, {
      key: function (t) {
        if (t.key) {
          var l = lm[t.key] || t.key;
          if (l !== "Unidentified") return l;
        }
        return t.type === "keypress"
          ? ((t = Hu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? em[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: oi,
      charCode: function (t) {
        return t.type === "keypress" ? Hu(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Hu(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    im = wt(nm),
    cm = U({}, qu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Lf = wt(cm),
    fm = U({}, Ba, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: oi,
    }),
    sm = wt(fm),
    om = U({}, ze, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    rm = wt(om),
    dm = U({}, qu, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    mm = wt(dm),
    vm = U({}, ze, { newState: 0, oldState: 0 }),
    ym = wt(vm),
    hm = [9, 13, 27, 32],
    ri = Nl && "CompositionEvent" in window,
    ja = null;
  Nl && "documentMode" in document && (ja = document.documentMode);
  var gm = Nl && "TextEvent" in window && !ja,
    Zf = Nl && (!ri || (ja && 8 < ja && 11 >= ja)),
    Vf = " ",
    Jf = !1;
  function Kf(t, l) {
    switch (t) {
      case "keyup":
        return hm.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wf(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var Fe = !1;
  function Sm(t, l) {
    switch (t) {
      case "compositionend":
        return wf(l);
      case "keypress":
        return l.which !== 32 ? null : ((Jf = !0), Vf);
      case "textInput":
        return ((t = l.data), t === Vf && Jf ? null : t);
      default:
        return null;
    }
  }
  function pm(t, l) {
    if (Fe)
      return t === "compositionend" || (!ri && Kf(t, l))
        ? ((t = xf()), (Uu = ii = Fl = null), (Fe = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || (l.ctrlKey && l.altKey)) {
          if (l.char && 1 < l.char.length) return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return Zf && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var bm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Wf(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!bm[t.type] : l === "textarea";
  }
  function kf(t, l, e, a) {
    (ke ? ($e ? $e.push(a) : ($e = [a])) : (ke = a),
      (l = Mn(l, "onChange")),
      0 < l.length &&
        ((e = new Bu("onChange", "change", null, e, a)),
        t.push({ event: e, listeners: l })));
  }
  var Ya = null,
    xa = null;
  function Tm(t) {
    Hr(t, 0);
  }
  function ju(t) {
    var l = Ua(t);
    if (Rf(l)) return t;
  }
  function $f(t, l) {
    if (t === "change") return l;
  }
  var Ff = !1;
  if (Nl) {
    var di;
    if (Nl) {
      var mi = "oninput" in document;
      if (!mi) {
        var If = document.createElement("div");
        (If.setAttribute("oninput", "return;"),
          (mi = typeof If.oninput == "function"));
      }
      di = mi;
    } else di = !1;
    Ff = di && (!document.documentMode || 9 < document.documentMode);
  }
  function Pf() {
    Ya && (Ya.detachEvent("onpropertychange", ts), (xa = Ya = null));
  }
  function ts(t) {
    if (t.propertyName === "value" && ju(xa)) {
      var l = [];
      (kf(l, xa, t, ai(t)), Yf(Tm, l));
    }
  }
  function Am(t, l, e) {
    t === "focusin"
      ? (Pf(), (Ya = l), (xa = e), Ya.attachEvent("onpropertychange", ts))
      : t === "focusout" && Pf();
  }
  function Em(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ju(xa);
  }
  function zm(t, l) {
    if (t === "click") return ju(l);
  }
  function Mm(t, l) {
    if (t === "input" || t === "change") return ju(l);
  }
  function Om(t, l) {
    return (t === l && (t !== 0 || 1 / t === 1 / l)) || (t !== t && l !== l);
  }
  var al = typeof Object.is == "function" ? Object.is : Om;
  function Ga(t, l) {
    if (al(t, l)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof l != "object" ||
      l === null
    )
      return !1;
    var e = Object.keys(t),
      a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!Vn.call(l, u) || !al(t[u], l[u])) return !1;
    }
    return !0;
  }
  function ls(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function es(t, l) {
    var e = ls(t);
    t = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = t + e.textContent.length), t <= l && a >= l))
          return { node: e, offset: l - t };
        t = a;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = ls(e);
    }
  }
  function as(t, l) {
    return t && l
      ? t === l
        ? !0
        : t && t.nodeType === 3
          ? !1
          : l && l.nodeType === 3
            ? as(t, l.parentNode)
            : "contains" in t
              ? t.contains(l)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(l) & 16)
                : !1
      : !1;
  }
  function us(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var l = Cu(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Cu(t.document);
    }
    return l;
  }
  function vi(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      l &&
      ((l === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        l === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Dm = Nl && "documentMode" in document && 11 >= document.documentMode,
    Ie = null,
    yi = null,
    Qa = null,
    hi = !1;
  function ns(t, l, e) {
    var a =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    hi ||
      Ie == null ||
      Ie !== Cu(a) ||
      ((a = Ie),
      "selectionStart" in a && vi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Qa && Ga(Qa, a)) ||
        ((Qa = a),
        (a = Mn(yi, "onSelect")),
        0 < a.length &&
          ((l = new Bu("onSelect", "select", null, l, e)),
          t.push({ event: l, listeners: a }),
          (l.target = Ie))));
  }
  function Me(t, l) {
    var e = {};
    return (
      (e[t.toLowerCase()] = l.toLowerCase()),
      (e["Webkit" + t] = "webkit" + l),
      (e["Moz" + t] = "moz" + l),
      e
    );
  }
  var Pe = {
      animationend: Me("Animation", "AnimationEnd"),
      animationiteration: Me("Animation", "AnimationIteration"),
      animationstart: Me("Animation", "AnimationStart"),
      transitionrun: Me("Transition", "TransitionRun"),
      transitionstart: Me("Transition", "TransitionStart"),
      transitioncancel: Me("Transition", "TransitionCancel"),
      transitionend: Me("Transition", "TransitionEnd"),
    },
    gi = {},
    is = {};
  Nl &&
    ((is = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Pe.animationend.animation,
      delete Pe.animationiteration.animation,
      delete Pe.animationstart.animation),
    "TransitionEvent" in window || delete Pe.transitionend.transition);
  function Oe(t) {
    if (gi[t]) return gi[t];
    if (!Pe[t]) return t;
    var l = Pe[t],
      e;
    for (e in l) if (l.hasOwnProperty(e) && e in is) return (gi[t] = l[e]);
    return t;
  }
  var cs = Oe("animationend"),
    fs = Oe("animationiteration"),
    ss = Oe("animationstart"),
    _m = Oe("transitionrun"),
    Cm = Oe("transitionstart"),
    Rm = Oe("transitioncancel"),
    os = Oe("transitionend"),
    rs = new Map(),
    Si =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Si.push("scrollEnd");
  function Al(t, l) {
    (rs.set(t, l), Ee(l, [t]));
  }
  var Yu =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var l = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(l)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    ml = [],
    ta = 0,
    pi = 0;
  function xu() {
    for (var t = ta, l = (pi = ta = 0); l < t; ) {
      var e = ml[l];
      ml[l++] = null;
      var a = ml[l];
      ml[l++] = null;
      var u = ml[l];
      ml[l++] = null;
      var n = ml[l];
      if (((ml[l++] = null), a !== null && u !== null)) {
        var i = a.pending;
        (i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
          (a.pending = u));
      }
      n !== 0 && ds(e, u, n);
    }
  }
  function Gu(t, l, e, a) {
    ((ml[ta++] = t),
      (ml[ta++] = l),
      (ml[ta++] = e),
      (ml[ta++] = a),
      (pi |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a));
  }
  function bi(t, l, e, a) {
    return (Gu(t, l, e, a), Qu(t));
  }
  function De(t, l) {
    return (Gu(t, null, null, l), Qu(t));
  }
  function ds(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = t.return; n !== null; )
      ((n.childLanes |= e),
        (a = n.alternate),
        a !== null && (a.childLanes |= e),
        n.tag === 22 &&
          ((t = n.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = n),
        (n = n.return));
    return t.tag === 3
      ? ((n = t.stateNode),
        u &&
          l !== null &&
          ((u = 31 - el(e)),
          (t = n.hiddenUpdates),
          (a = t[u]),
          a === null ? (t[u] = [l]) : a.push(l),
          (l.lane = e | 536870912)),
        n)
      : null;
  }
  function Qu(t) {
    if (50 < fu) throw ((fu = 0), (Cc = null), Error(y(185)));
    for (var l = t.return; l !== null; ) ((t = l), (l = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var la = {};
  function Um(t, l, e, a) {
    ((this.tag = t),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = l),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ul(t, l, e, a) {
    return new Um(t, l, e, a);
  }
  function Ti(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Bl(t, l) {
    var e = t.alternate;
    return (
      e === null
        ? ((e = ul(t.tag, l, t.key, t.mode)),
          (e.elementType = t.elementType),
          (e.type = t.type),
          (e.stateNode = t.stateNode),
          (e.alternate = t),
          (t.alternate = e))
        : ((e.pendingProps = l),
          (e.type = t.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = t.flags & 65011712),
      (e.childLanes = t.childLanes),
      (e.lanes = t.lanes),
      (e.child = t.child),
      (e.memoizedProps = t.memoizedProps),
      (e.memoizedState = t.memoizedState),
      (e.updateQueue = t.updateQueue),
      (l = t.dependencies),
      (e.dependencies =
        l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }),
      (e.sibling = t.sibling),
      (e.index = t.index),
      (e.ref = t.ref),
      (e.refCleanup = t.refCleanup),
      e
    );
  }
  function ms(t, l) {
    t.flags &= 65011714;
    var e = t.alternate;
    return (
      e === null
        ? ((t.childLanes = 0),
          (t.lanes = l),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = e.childLanes),
          (t.lanes = e.lanes),
          (t.child = e.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = e.memoizedProps),
          (t.memoizedState = e.memoizedState),
          (t.updateQueue = e.updateQueue),
          (t.type = e.type),
          (l = e.dependencies),
          (t.dependencies =
            l === null
              ? null
              : { lanes: l.lanes, firstContext: l.firstContext })),
      t
    );
  }
  function Xu(t, l, e, a, u, n) {
    var i = 0;
    if (((a = t), typeof t == "function")) Ti(t) && (i = 1);
    else if (typeof t == "string")
      i = jv(t, e, D.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case ol:
          return (
            (t = ul(31, e, l, u)),
            (t.elementType = ol),
            (t.lanes = n),
            t
          );
        case Nt:
          return _e(e.children, u, n, l);
        case H:
          ((i = 8), (u |= 24));
          break;
        case ot:
          return (
            (t = ul(12, e, l, u | 2)),
            (t.elementType = ot),
            (t.lanes = n),
            t
          );
        case Pt:
          return (
            (t = ul(13, e, l, u)),
            (t.elementType = Pt),
            (t.lanes = n),
            t
          );
        case Bt:
          return (
            (t = ul(19, e, l, u)),
            (t.elementType = Bt),
            (t.lanes = n),
            t
          );
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case vt:
                i = 10;
                break t;
              case At:
                i = 9;
                break t;
              case Lt:
                i = 11;
                break t;
              case X:
                i = 14;
                break t;
              case Dt:
                ((i = 16), (a = null));
                break t;
            }
          ((i = 29),
            (e = Error(y(130, t === null ? "null" : typeof t, ""))),
            (a = null));
      }
    return (
      (l = ul(i, e, l, u)),
      (l.elementType = t),
      (l.type = a),
      (l.lanes = n),
      l
    );
  }
  function _e(t, l, e, a) {
    return ((t = ul(7, t, a, l)), (t.lanes = e), t);
  }
  function Ai(t, l, e) {
    return ((t = ul(6, t, null, l)), (t.lanes = e), t);
  }
  function vs(t) {
    var l = ul(18, null, null, 0);
    return ((l.stateNode = t), l);
  }
  function Ei(t, l, e) {
    return (
      (l = ul(4, t.children !== null ? t.children : [], t.key, l)),
      (l.lanes = e),
      (l.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      l
    );
  }
  var ys = new WeakMap();
  function vl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = ys.get(t);
      return e !== void 0
        ? e
        : ((l = { value: t, source: l, stack: vf(l) }), ys.set(t, l), l);
    }
    return { value: t, source: l, stack: vf(l) };
  }
  var ea = [],
    aa = 0,
    Lu = null,
    Xa = 0,
    yl = [],
    hl = 0,
    Il = null,
    Ol = 1,
    Dl = "";
  function ql(t, l) {
    ((ea[aa++] = Xa), (ea[aa++] = Lu), (Lu = t), (Xa = l));
  }
  function hs(t, l, e) {
    ((yl[hl++] = Ol), (yl[hl++] = Dl), (yl[hl++] = Il), (Il = t));
    var a = Ol;
    t = Dl;
    var u = 32 - el(a) - 1;
    ((a &= ~(1 << u)), (e += 1));
    var n = 32 - el(l) + u;
    if (30 < n) {
      var i = u - (u % 5);
      ((n = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (u -= i),
        (Ol = (1 << (32 - el(l) + u)) | (e << u) | a),
        (Dl = n + t));
    } else ((Ol = (1 << n) | (e << u) | a), (Dl = t));
  }
  function zi(t) {
    t.return !== null && (ql(t, 1), hs(t, 1, 0));
  }
  function Mi(t) {
    for (; t === Lu; )
      ((Lu = ea[--aa]), (ea[aa] = null), (Xa = ea[--aa]), (ea[aa] = null));
    for (; t === Il; )
      ((Il = yl[--hl]),
        (yl[hl] = null),
        (Dl = yl[--hl]),
        (yl[hl] = null),
        (Ol = yl[--hl]),
        (yl[hl] = null));
  }
  function gs(t, l) {
    ((yl[hl++] = Ol),
      (yl[hl++] = Dl),
      (yl[hl++] = Il),
      (Ol = l.id),
      (Dl = l.overflow),
      (Il = t));
  }
  var jt = null,
    rt = null,
    w = !1,
    Pl = null,
    gl = !1,
    Oi = Error(y(519));
  function te(t) {
    var l = Error(
      y(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (La(vl(l, t)), Oi);
  }
  function Ss(t) {
    var l = t.stateNode,
      e = t.type,
      a = t.memoizedProps;
    switch (((l[qt] = t), (l[Kt] = a), e)) {
      case "dialog":
        (V("cancel", l), V("close", l));
        break;
      case "iframe":
      case "object":
      case "embed":
        V("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < ou.length; e++) V(ou[e], l);
        break;
      case "source":
        V("error", l);
        break;
      case "img":
      case "image":
      case "link":
        (V("error", l), V("load", l));
        break;
      case "details":
        V("toggle", l);
        break;
      case "input":
        (V("invalid", l),
          Uf(
            l,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        V("invalid", l);
        break;
      case "textarea":
        (V("invalid", l), Nf(l, a.value, a.defaultValue, a.children));
    }
    ((e = a.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      l.textContent === "" + e ||
      a.suppressHydrationWarning === !0 ||
      jr(l.textContent, e)
        ? (a.popover != null && (V("beforetoggle", l), V("toggle", l)),
          a.onScroll != null && V("scroll", l),
          a.onScrollEnd != null && V("scrollend", l),
          a.onClick != null && (l.onclick = Hl),
          (l = !0))
        : (l = !1),
      l || te(t, !0));
  }
  function ps(t) {
    for (jt = t.return; jt; )
      switch (jt.tag) {
        case 5:
        case 31:
        case 13:
          gl = !1;
          return;
        case 27:
        case 3:
          gl = !0;
          return;
        default:
          jt = jt.return;
      }
  }
  function ua(t) {
    if (t !== jt) return !1;
    if (!w) return (ps(t), (w = !0), !1);
    var l = t.tag,
      e;
    if (
      ((e = l !== 3 && l !== 27) &&
        ((e = l === 5) &&
          ((e = t.type),
          (e =
            !(e !== "form" && e !== "button") || Vc(t.type, t.memoizedProps))),
        (e = !e)),
      e && rt && te(t),
      ps(t),
      l === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(y(317));
      rt = Jr(t);
    } else if (l === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(y(317));
      rt = Jr(t);
    } else
      l === 27
        ? ((l = rt), ve(t.type) ? ((t = kc), (kc = null), (rt = t)) : (rt = l))
        : (rt = jt ? pl(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ce() {
    ((rt = jt = null), (w = !1));
  }
  function Di() {
    var t = Pl;
    return (
      t !== null &&
        (Ft === null ? (Ft = t) : Ft.push.apply(Ft, t), (Pl = null)),
      t
    );
  }
  function La(t) {
    Pl === null ? (Pl = [t]) : Pl.push(t);
  }
  var _i = o(null),
    Re = null,
    jl = null;
  function le(t, l, e) {
    (z(_i, l._currentValue), (l._currentValue = e));
  }
  function Yl(t) {
    ((t._currentValue = _i.current), T(_i));
  }
  function Ci(t, l, e) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & l) !== l
          ? ((t.childLanes |= l), a !== null && (a.childLanes |= l))
          : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l),
        t === e)
      )
        break;
      t = t.return;
    }
  }
  function Ri(t, l, e, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var f = 0; f < l.length; f++)
            if (c.context === l[f]) {
              ((n.lanes |= e),
                (c = n.alternate),
                c !== null && (c.lanes |= e),
                Ci(n.return, e, t),
                a || (i = null));
              break t;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(y(341));
        ((i.lanes |= e),
          (n = i.alternate),
          n !== null && (n.lanes |= e),
          Ci(i, e, t),
          (i = null));
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            ((u.return = i.return), (i = u));
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function na(t, l, e, a) {
    t = null;
    for (var u = l, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(y(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = u.type;
          al(u.pendingProps.value, i.value) ||
            (t !== null ? t.push(c) : (t = [c]));
        }
      } else if (u === tt.current) {
        if (((i = u.alternate), i === null)) throw Error(y(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(yu) : (t = [yu]));
      }
      u = u.return;
    }
    (t !== null && Ri(l, t, e, a), (l.flags |= 262144));
  }
  function Zu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!al(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ue(t) {
    ((Re = t),
      (jl = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function Yt(t) {
    return bs(Re, t);
  }
  function Vu(t, l) {
    return (Re === null && Ue(t), bs(t, l));
  }
  function bs(t, l) {
    var e = l._currentValue;
    if (((l = { context: l, memoizedValue: e, next: null }), jl === null)) {
      if (t === null) throw Error(y(308));
      ((jl = l),
        (t.dependencies = { lanes: 0, firstContext: l }),
        (t.flags |= 524288));
    } else jl = jl.next = l;
    return e;
  }
  var Hm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              l = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              ((l.aborted = !0),
                t.forEach(function (e) {
                  return e();
                }));
            };
          },
    Nm = O.unstable_scheduleCallback,
    Bm = O.unstable_NormalPriority,
    Et = {
      $$typeof: vt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ui() {
    return { controller: new Hm(), data: new Map(), refCount: 0 };
  }
  function Za(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Nm(Bm, function () {
          t.controller.abort();
        }));
  }
  var Va = null,
    Hi = 0,
    ia = 0,
    ca = null;
  function qm(t, l) {
    if (Va === null) {
      var e = (Va = []);
      ((Hi = 0),
        (ia = qc()),
        (ca = {
          status: "pending",
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        }));
    }
    return (Hi++, l.then(Ts, Ts), l);
  }
  function Ts() {
    if (--Hi === 0 && Va !== null) {
      ca !== null && (ca.status = "fulfilled");
      var t = Va;
      ((Va = null), (ia = 0), (ca = null));
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function jm(t, l) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          e.push(u);
        },
      };
    return (
      t.then(
        function () {
          ((a.status = "fulfilled"), (a.value = l));
          for (var u = 0; u < e.length; u++) (0, e[u])(l);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
            (0, e[u])(void 0);
        },
      ),
      a
    );
  }
  var As = S.S;
  S.S = function (t, l) {
    ((ir = tl()),
      typeof l == "object" &&
        l !== null &&
        typeof l.then == "function" &&
        qm(t, l),
      As !== null && As(t, l));
  };
  var He = o(null);
  function Ni() {
    var t = He.current;
    return t !== null ? t : st.pooledCache;
  }
  function Ju(t, l) {
    l === null ? z(He, He.current) : z(He, l.pool);
  }
  function Es() {
    var t = Ni();
    return t === null ? null : { parent: Et._currentValue, pool: t };
  }
  var fa = Error(y(460)),
    Bi = Error(y(474)),
    Ku = Error(y(542)),
    wu = { then: function () {} };
  function zs(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function Ms(t, l, e) {
    switch (
      ((e = t[e]),
      e === void 0 ? t.push(l) : e !== l && (l.then(Hl, Hl), (l = e)),
      l.status)
    ) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw ((t = l.reason), Ds(t), t);
      default:
        if (typeof l.status == "string") l.then(Hl, Hl);
        else {
          if (((t = st), t !== null && 100 < t.shellSuspendCounter))
            throw Error(y(482));
          ((t = l),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (l.status === "pending") {
                  var u = l;
                  ((u.status = "fulfilled"), (u.value = a));
                }
              },
              function (a) {
                if (l.status === "pending") {
                  var u = l;
                  ((u.status = "rejected"), (u.reason = a));
                }
              },
            ));
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw ((t = l.reason), Ds(t), t);
        }
        throw ((Be = l), fa);
    }
  }
  function Ne(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function"
        ? ((Be = e), fa)
        : e;
    }
  }
  var Be = null;
  function Os() {
    if (Be === null) throw Error(y(459));
    var t = Be;
    return ((Be = null), t);
  }
  function Ds(t) {
    if (t === fa || t === Ku) throw Error(y(483));
  }
  var sa = null,
    Ja = 0;
  function Wu(t) {
    var l = Ja;
    return ((Ja += 1), sa === null && (sa = []), Ms(sa, t, l));
  }
  function Ka(t, l) {
    ((l = l.props.ref), (t.ref = l !== void 0 ? l : null));
  }
  function ku(t, l) {
    throw l.$$typeof === ct
      ? Error(y(525))
      : ((t = Object.prototype.toString.call(l)),
        Error(
          y(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(l).join(", ") + "}"
              : t,
          ),
        ));
  }
  function _s(t) {
    function l(r, s) {
      if (t) {
        var d = r.deletions;
        d === null ? ((r.deletions = [s]), (r.flags |= 16)) : d.push(s);
      }
    }
    function e(r, s) {
      if (!t) return null;
      for (; s !== null; ) (l(r, s), (s = s.sibling));
      return null;
    }
    function a(r) {
      for (var s = new Map(); r !== null; )
        (r.key !== null ? s.set(r.key, r) : s.set(r.index, r), (r = r.sibling));
      return s;
    }
    function u(r, s) {
      return ((r = Bl(r, s)), (r.index = 0), (r.sibling = null), r);
    }
    function n(r, s, d) {
      return (
        (r.index = d),
        t
          ? ((d = r.alternate),
            d !== null
              ? ((d = d.index), d < s ? ((r.flags |= 67108866), s) : d)
              : ((r.flags |= 67108866), s))
          : ((r.flags |= 1048576), s)
      );
    }
    function i(r) {
      return (t && r.alternate === null && (r.flags |= 67108866), r);
    }
    function c(r, s, d, p) {
      return s === null || s.tag !== 6
        ? ((s = Ai(d, r.mode, p)), (s.return = r), s)
        : ((s = u(s, d)), (s.return = r), s);
    }
    function f(r, s, d, p) {
      var R = d.type;
      return R === Nt
        ? g(r, s, d.props.children, p, d.key)
        : s !== null &&
            (s.elementType === R ||
              (typeof R == "object" &&
                R !== null &&
                R.$$typeof === Dt &&
                Ne(R) === s.type))
          ? ((s = u(s, d.props)), Ka(s, d), (s.return = r), s)
          : ((s = Xu(d.type, d.key, d.props, null, r.mode, p)),
            Ka(s, d),
            (s.return = r),
            s);
    }
    function m(r, s, d, p) {
      return s === null ||
        s.tag !== 4 ||
        s.stateNode.containerInfo !== d.containerInfo ||
        s.stateNode.implementation !== d.implementation
        ? ((s = Ei(d, r.mode, p)), (s.return = r), s)
        : ((s = u(s, d.children || [])), (s.return = r), s);
    }
    function g(r, s, d, p, R) {
      return s === null || s.tag !== 7
        ? ((s = _e(d, r.mode, p, R)), (s.return = r), s)
        : ((s = u(s, d)), (s.return = r), s);
    }
    function b(r, s, d) {
      if (
        (typeof s == "string" && s !== "") ||
        typeof s == "number" ||
        typeof s == "bigint"
      )
        return ((s = Ai("" + s, r.mode, d)), (s.return = r), s);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Ht:
            return (
              (d = Xu(s.type, s.key, s.props, null, r.mode, d)),
              Ka(d, s),
              (d.return = r),
              d
            );
          case Qt:
            return ((s = Ei(s, r.mode, d)), (s.return = r), s);
          case Dt:
            return ((s = Ne(s)), b(r, s, d));
        }
        if (Tl(s) || Jt(s))
          return ((s = _e(s, r.mode, d, null)), (s.return = r), s);
        if (typeof s.then == "function") return b(r, Wu(s), d);
        if (s.$$typeof === vt) return b(r, Vu(r, s), d);
        ku(r, s);
      }
      return null;
    }
    function v(r, s, d, p) {
      var R = s !== null ? s.key : null;
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return R !== null ? null : c(r, s, "" + d, p);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Ht:
            return d.key === R ? f(r, s, d, p) : null;
          case Qt:
            return d.key === R ? m(r, s, d, p) : null;
          case Dt:
            return ((d = Ne(d)), v(r, s, d, p));
        }
        if (Tl(d) || Jt(d)) return R !== null ? null : g(r, s, d, p, null);
        if (typeof d.then == "function") return v(r, s, Wu(d), p);
        if (d.$$typeof === vt) return v(r, s, Vu(r, d), p);
        ku(r, d);
      }
      return null;
    }
    function h(r, s, d, p, R) {
      if (
        (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
      )
        return ((r = r.get(d) || null), c(s, r, "" + p, R));
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Ht:
            return (
              (r = r.get(p.key === null ? d : p.key) || null),
              f(s, r, p, R)
            );
          case Qt:
            return (
              (r = r.get(p.key === null ? d : p.key) || null),
              m(s, r, p, R)
            );
          case Dt:
            return ((p = Ne(p)), h(r, s, d, p, R));
        }
        if (Tl(p) || Jt(p))
          return ((r = r.get(d) || null), g(s, r, p, R, null));
        if (typeof p.then == "function") return h(r, s, d, Wu(p), R);
        if (p.$$typeof === vt) return h(r, s, d, Vu(s, p), R);
        ku(s, p);
      }
      return null;
    }
    function M(r, s, d, p) {
      for (
        var R = null, $ = null, _ = s, G = (s = 0), K = null;
        _ !== null && G < d.length;
        G++
      ) {
        _.index > G ? ((K = _), (_ = null)) : (K = _.sibling);
        var F = v(r, _, d[G], p);
        if (F === null) {
          _ === null && (_ = K);
          break;
        }
        (t && _ && F.alternate === null && l(r, _),
          (s = n(F, s, G)),
          $ === null ? (R = F) : ($.sibling = F),
          ($ = F),
          (_ = K));
      }
      if (G === d.length) return (e(r, _), w && ql(r, G), R);
      if (_ === null) {
        for (; G < d.length; G++)
          ((_ = b(r, d[G], p)),
            _ !== null &&
              ((s = n(_, s, G)),
              $ === null ? (R = _) : ($.sibling = _),
              ($ = _)));
        return (w && ql(r, G), R);
      }
      for (_ = a(_); G < d.length; G++)
        ((K = h(_, r, G, d[G], p)),
          K !== null &&
            (t && K.alternate !== null && _.delete(K.key === null ? G : K.key),
            (s = n(K, s, G)),
            $ === null ? (R = K) : ($.sibling = K),
            ($ = K)));
      return (
        t &&
          _.forEach(function (pe) {
            return l(r, pe);
          }),
        w && ql(r, G),
        R
      );
    }
    function N(r, s, d, p) {
      if (d == null) throw Error(y(151));
      for (
        var R = null, $ = null, _ = s, G = (s = 0), K = null, F = d.next();
        _ !== null && !F.done;
        G++, F = d.next()
      ) {
        _.index > G ? ((K = _), (_ = null)) : (K = _.sibling);
        var pe = v(r, _, F.value, p);
        if (pe === null) {
          _ === null && (_ = K);
          break;
        }
        (t && _ && pe.alternate === null && l(r, _),
          (s = n(pe, s, G)),
          $ === null ? (R = pe) : ($.sibling = pe),
          ($ = pe),
          (_ = K));
      }
      if (F.done) return (e(r, _), w && ql(r, G), R);
      if (_ === null) {
        for (; !F.done; G++, F = d.next())
          ((F = b(r, F.value, p)),
            F !== null &&
              ((s = n(F, s, G)),
              $ === null ? (R = F) : ($.sibling = F),
              ($ = F)));
        return (w && ql(r, G), R);
      }
      for (_ = a(_); !F.done; G++, F = d.next())
        ((F = h(_, r, G, F.value, p)),
          F !== null &&
            (t && F.alternate !== null && _.delete(F.key === null ? G : F.key),
            (s = n(F, s, G)),
            $ === null ? (R = F) : ($.sibling = F),
            ($ = F)));
      return (
        t &&
          _.forEach(function (wv) {
            return l(r, wv);
          }),
        w && ql(r, G),
        R
      );
    }
    function it(r, s, d, p) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === Nt &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case Ht:
            t: {
              for (var R = d.key; s !== null; ) {
                if (s.key === R) {
                  if (((R = d.type), R === Nt)) {
                    if (s.tag === 7) {
                      (e(r, s.sibling),
                        (p = u(s, d.props.children)),
                        (p.return = r),
                        (r = p));
                      break t;
                    }
                  } else if (
                    s.elementType === R ||
                    (typeof R == "object" &&
                      R !== null &&
                      R.$$typeof === Dt &&
                      Ne(R) === s.type)
                  ) {
                    (e(r, s.sibling),
                      (p = u(s, d.props)),
                      Ka(p, d),
                      (p.return = r),
                      (r = p));
                    break t;
                  }
                  e(r, s);
                  break;
                } else l(r, s);
                s = s.sibling;
              }
              d.type === Nt
                ? ((p = _e(d.props.children, r.mode, p, d.key)),
                  (p.return = r),
                  (r = p))
                : ((p = Xu(d.type, d.key, d.props, null, r.mode, p)),
                  Ka(p, d),
                  (p.return = r),
                  (r = p));
            }
            return i(r);
          case Qt:
            t: {
              for (R = d.key; s !== null; ) {
                if (s.key === R)
                  if (
                    s.tag === 4 &&
                    s.stateNode.containerInfo === d.containerInfo &&
                    s.stateNode.implementation === d.implementation
                  ) {
                    (e(r, s.sibling),
                      (p = u(s, d.children || [])),
                      (p.return = r),
                      (r = p));
                    break t;
                  } else {
                    e(r, s);
                    break;
                  }
                else l(r, s);
                s = s.sibling;
              }
              ((p = Ei(d, r.mode, p)), (p.return = r), (r = p));
            }
            return i(r);
          case Dt:
            return ((d = Ne(d)), it(r, s, d, p));
        }
        if (Tl(d)) return M(r, s, d, p);
        if (Jt(d)) {
          if (((R = Jt(d)), typeof R != "function")) throw Error(y(150));
          return ((d = R.call(d)), N(r, s, d, p));
        }
        if (typeof d.then == "function") return it(r, s, Wu(d), p);
        if (d.$$typeof === vt) return it(r, s, Vu(r, d), p);
        ku(r, d);
      }
      return (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
        ? ((d = "" + d),
          s !== null && s.tag === 6
            ? (e(r, s.sibling), (p = u(s, d)), (p.return = r), (r = p))
            : (e(r, s), (p = Ai(d, r.mode, p)), (p.return = r), (r = p)),
          i(r))
        : e(r, s);
    }
    return function (r, s, d, p) {
      try {
        Ja = 0;
        var R = it(r, s, d, p);
        return ((sa = null), R);
      } catch (_) {
        if (_ === fa || _ === Ku) throw _;
        var $ = ul(29, _, null, r.mode);
        return (($.lanes = p), ($.return = r), $);
      }
    };
  }
  var qe = _s(!0),
    Cs = _s(!1),
    ee = !1;
  function qi(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ji(t, l) {
    ((t = t.updateQueue),
      l.updateQueue === t &&
        (l.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function ae(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ue(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (I & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (l.next = l) : ((l.next = u.next), (u.next = l)),
        (a.pending = l),
        (l = Qu(t)),
        ds(t, null, e),
        l
      );
    }
    return (Gu(t, a, l, e), Qu(t));
  }
  function wa(t, l, e) {
    if (
      ((l = l.updateQueue), l !== null && ((l = l.shared), (e & 4194048) !== 0))
    ) {
      var a = l.lanes;
      ((a &= t.pendingLanes), (e |= a), (l.lanes = e), bf(t, e));
    }
  }
  function Yi(t, l) {
    var e = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var u = null,
        n = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          (n === null ? (u = n = i) : (n = n.next = i), (e = e.next));
        } while (e !== null);
        n === null ? (u = n = l) : (n = n.next = l);
      } else u = n = l;
      ((e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = e));
      return;
    }
    ((t = e.lastBaseUpdate),
      t === null ? (e.firstBaseUpdate = l) : (t.next = l),
      (e.lastBaseUpdate = l));
  }
  var xi = !1;
  function Wa() {
    if (xi) {
      var t = ca;
      if (t !== null) throw t;
    }
  }
  function ka(t, l, e, a) {
    xi = !1;
    var u = t.updateQueue;
    ee = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c,
        m = f.next;
      ((f.next = null), i === null ? (n = m) : (i.next = m), (i = f));
      var g = t.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (c = g.lastBaseUpdate),
        c !== i &&
          (c === null ? (g.firstBaseUpdate = m) : (c.next = m),
          (g.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var b = u.baseState;
      ((i = 0), (g = m = f = null), (c = n));
      do {
        var v = c.lane & -536870913,
          h = v !== c.lane;
        if (h ? (J & v) === v : (a & v) === v) {
          (v !== 0 && v === ia && (xi = !0),
            g !== null &&
              (g = g.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var M = t,
              N = c;
            v = l;
            var it = e;
            switch (N.tag) {
              case 1:
                if (((M = N.payload), typeof M == "function")) {
                  b = M.call(it, b, v);
                  break t;
                }
                b = M;
                break t;
              case 3:
                M.flags = (M.flags & -65537) | 128;
              case 0:
                if (
                  ((M = N.payload),
                  (v = typeof M == "function" ? M.call(it, b, v) : M),
                  v == null)
                )
                  break t;
                b = U({}, b, v);
                break t;
              case 2:
                ee = !0;
            }
          }
          ((v = c.callback),
            v !== null &&
              ((t.flags |= 64),
              h && (t.flags |= 8192),
              (h = u.callbacks),
              h === null ? (u.callbacks = [v]) : h.push(v)));
        } else
          ((h = {
            lane: v,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            g === null ? ((m = g = h), (f = b)) : (g = g.next = h),
            (i |= v));
        if (((c = c.next), c === null)) {
          if (((c = u.shared.pending), c === null)) break;
          ((h = c),
            (c = h.next),
            (h.next = null),
            (u.lastBaseUpdate = h),
            (u.shared.pending = null));
        }
      } while (!0);
      (g === null && (f = b),
        (u.baseState = f),
        (u.firstBaseUpdate = m),
        (u.lastBaseUpdate = g),
        n === null && (u.shared.lanes = 0),
        (se |= i),
        (t.lanes = i),
        (t.memoizedState = b));
    }
  }
  function Rs(t, l) {
    if (typeof t != "function") throw Error(y(191, t));
    t.call(l);
  }
  function Us(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++) Rs(e[t], l);
  }
  var oa = o(null),
    $u = o(0);
  function Hs(t, l) {
    ((t = Kl), z($u, t), z(oa, l), (Kl = t | l.baseLanes));
  }
  function Gi() {
    (z($u, Kl), z(oa, oa.current));
  }
  function Qi() {
    ((Kl = $u.current), T(oa), T($u));
  }
  var nl = o(null),
    Sl = null;
  function ne(t) {
    var l = t.alternate;
    (z(bt, bt.current & 1),
      z(nl, t),
      Sl === null &&
        (l === null || oa.current !== null || l.memoizedState !== null) &&
        (Sl = t));
  }
  function Xi(t) {
    (z(bt, bt.current), z(nl, t), Sl === null && (Sl = t));
  }
  function Ns(t) {
    t.tag === 22
      ? (z(bt, bt.current), z(nl, t), Sl === null && (Sl = t))
      : ie();
  }
  function ie() {
    (z(bt, bt.current), z(nl, nl.current));
  }
  function il(t) {
    (T(nl), Sl === t && (Sl = null), T(bt));
  }
  var bt = o(0);
  function Fu(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && ((e = e.dehydrated), e === null || wc(e) || Wc(e)))
          return l;
      } else if (
        l.tag === 19 &&
        (l.memoizedProps.revealOrder === "forwards" ||
          l.memoizedProps.revealOrder === "backwards" ||
          l.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          l.memoizedProps.revealOrder === "together")
      ) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        ((l.child.return = l), (l = l.child));
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      ((l.sibling.return = l.return), (l = l.sibling));
    }
    return null;
  }
  var xl = 0,
    x = null,
    ut = null,
    zt = null,
    Iu = !1,
    ra = !1,
    je = !1,
    Pu = 0,
    $a = 0,
    da = null,
    Ym = 0;
  function gt() {
    throw Error(y(321));
  }
  function Li(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!al(t[e], l[e])) return !1;
    return !0;
  }
  function Zi(t, l, e, a, u, n) {
    return (
      (xl = n),
      (x = l),
      (l.memoizedState = null),
      (l.updateQueue = null),
      (l.lanes = 0),
      (S.H = t === null || t.memoizedState === null ? go : uc),
      (je = !1),
      (n = e(a, u)),
      (je = !1),
      ra && (n = qs(l, e, a, u)),
      Bs(t),
      n
    );
  }
  function Bs(t) {
    S.H = Pa;
    var l = ut !== null && ut.next !== null;
    if (((xl = 0), (zt = ut = x = null), (Iu = !1), ($a = 0), (da = null), l))
      throw Error(y(300));
    t === null ||
      Mt ||
      ((t = t.dependencies), t !== null && Zu(t) && (Mt = !0));
  }
  function qs(t, l, e, a) {
    x = t;
    var u = 0;
    do {
      if ((ra && (da = null), ($a = 0), (ra = !1), 25 <= u))
        throw Error(y(301));
      if (((u += 1), (zt = ut = null), t.updateQueue != null)) {
        var n = t.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((S.H = So), (n = l(e, a)));
    } while (ra);
    return n;
  }
  function xm() {
    var t = S.H,
      l = t.useState()[0];
    return (
      (l = typeof l.then == "function" ? Fa(l) : l),
      (t = t.useState()[0]),
      (ut !== null ? ut.memoizedState : null) !== t && (x.flags |= 1024),
      l
    );
  }
  function Vi() {
    var t = Pu !== 0;
    return ((Pu = 0), t);
  }
  function Ji(t, l, e) {
    ((l.updateQueue = t.updateQueue), (l.flags &= -2053), (t.lanes &= ~e));
  }
  function Ki(t) {
    if (Iu) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        (l !== null && (l.pending = null), (t = t.next));
      }
      Iu = !1;
    }
    ((xl = 0), (zt = ut = x = null), (ra = !1), ($a = Pu = 0), (da = null));
  }
  function Vt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (zt === null ? (x.memoizedState = zt = t) : (zt = zt.next = t), zt);
  }
  function Tt() {
    if (ut === null) {
      var t = x.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ut.next;
    var l = zt === null ? x.memoizedState : zt.next;
    if (l !== null) ((zt = l), (ut = t));
    else {
      if (t === null)
        throw x.alternate === null ? Error(y(467)) : Error(y(310));
      ((ut = t),
        (t = {
          memoizedState: ut.memoizedState,
          baseState: ut.baseState,
          baseQueue: ut.baseQueue,
          queue: ut.queue,
          next: null,
        }),
        zt === null ? (x.memoizedState = zt = t) : (zt = zt.next = t));
    }
    return zt;
  }
  function tn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fa(t) {
    var l = $a;
    return (
      ($a += 1),
      da === null && (da = []),
      (t = Ms(da, t, l)),
      (l = x),
      (zt === null ? l.memoizedState : zt.next) === null &&
        ((l = l.alternate),
        (S.H = l === null || l.memoizedState === null ? go : uc)),
      t
    );
  }
  function ln(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Fa(t);
      if (t.$$typeof === vt) return Yt(t);
    }
    throw Error(y(438, String(t)));
  }
  function wi(t) {
    var l = null,
      e = x.updateQueue;
    if ((e !== null && (l = e.memoCache), l == null)) {
      var a = x.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (l = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (l == null && (l = { data: [], index: 0 }),
      e === null && ((e = tn()), (x.updateQueue = e)),
      (e.memoCache = l),
      (e = l.data[l.index]),
      e === void 0)
    )
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++) e[a] = Xe;
    return (l.index++, e);
  }
  function Gl(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function en(t) {
    var l = Tt();
    return Wi(l, ut, t);
  }
  function Wi(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(y(311));
    a.lastRenderedReducer = e;
    var u = t.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        ((u.next = n.next), (n.next = i));
      }
      ((l.baseQueue = u = n), (a.pending = null));
    }
    if (((n = t.baseState), u === null)) t.memoizedState = n;
    else {
      l = u.next;
      var c = (i = null),
        f = null,
        m = l,
        g = !1;
      do {
        var b = m.lane & -536870913;
        if (b !== m.lane ? (J & b) === b : (xl & b) === b) {
          var v = m.revertLane;
          if (v === 0)
            (f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: m.action,
                  hasEagerState: m.hasEagerState,
                  eagerState: m.eagerState,
                  next: null,
                }),
              b === ia && (g = !0));
          else if ((xl & v) === v) {
            ((m = m.next), v === ia && (g = !0));
            continue;
          } else
            ((b = {
              lane: 0,
              revertLane: m.revertLane,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
              f === null ? ((c = f = b), (i = n)) : (f = f.next = b),
              (x.lanes |= v),
              (se |= v));
          ((b = m.action),
            je && e(n, b),
            (n = m.hasEagerState ? m.eagerState : e(n, b)));
        } else
          ((v = {
            lane: b,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          }),
            f === null ? ((c = f = v), (i = n)) : (f = f.next = v),
            (x.lanes |= b),
            (se |= b));
        m = m.next;
      } while (m !== null && m !== l);
      if (
        (f === null ? (i = n) : (f.next = c),
        !al(n, t.memoizedState) && ((Mt = !0), g && ((e = ca), e !== null)))
      )
        throw e;
      ((t.memoizedState = n),
        (t.baseState = i),
        (t.baseQueue = f),
        (a.lastRenderedState = n));
    }
    return (u === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
  }
  function ki(t) {
    var l = Tt(),
      e = l.queue;
    if (e === null) throw Error(y(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch,
      u = e.pending,
      n = l.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = (u = u.next);
      do ((n = t(n, i.action)), (i = i.next));
      while (i !== u);
      (al(n, l.memoizedState) || (Mt = !0),
        (l.memoizedState = n),
        l.baseQueue === null && (l.baseState = n),
        (e.lastRenderedState = n));
    }
    return [n, a];
  }
  function js(t, l, e) {
    var a = x,
      u = Tt(),
      n = w;
    if (n) {
      if (e === void 0) throw Error(y(407));
      e = e();
    } else e = l();
    var i = !al((ut || u).memoizedState, e);
    if (
      (i && ((u.memoizedState = e), (Mt = !0)),
      (u = u.queue),
      Ii(Gs.bind(null, a, u, t), [t]),
      u.getSnapshot !== l || i || (zt !== null && zt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ma(9, { destroy: void 0 }, xs.bind(null, a, u, e, l), null),
        st === null)
      )
        throw Error(y(349));
      n || (xl & 127) !== 0 || Ys(a, l, e);
    }
    return e;
  }
  function Ys(t, l, e) {
    ((t.flags |= 16384),
      (t = { getSnapshot: l, value: e }),
      (l = x.updateQueue),
      l === null
        ? ((l = tn()), (x.updateQueue = l), (l.stores = [t]))
        : ((e = l.stores), e === null ? (l.stores = [t]) : e.push(t)));
  }
  function xs(t, l, e, a) {
    ((l.value = e), (l.getSnapshot = a), Qs(l) && Xs(t));
  }
  function Gs(t, l, e) {
    return e(function () {
      Qs(l) && Xs(t);
    });
  }
  function Qs(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !al(t, e);
    } catch {
      return !0;
    }
  }
  function Xs(t) {
    var l = De(t, 2);
    l !== null && It(l, t, 2);
  }
  function $i(t) {
    var l = Vt();
    if (typeof t == "function") {
      var e = t;
      if (((t = e()), je)) {
        kl(!0);
        try {
          e();
        } finally {
          kl(!1);
        }
      }
    }
    return (
      (l.memoizedState = l.baseState = t),
      (l.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gl,
        lastRenderedState: t,
      }),
      l
    );
  }
  function Ls(t, l, e, a) {
    return ((t.baseState = e), Wi(t, ut, typeof a == "function" ? a : Gl));
  }
  function Gm(t, l, e, a, u) {
    if (nn(t)) throw Error(y(485));
    if (((t = l.action), t !== null)) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      (S.T !== null ? e(!0) : (n.isTransition = !1),
        a(n),
        (e = l.pending),
        e === null
          ? ((n.next = l.pending = n), Zs(l, n))
          : ((n.next = e.next), (l.pending = e.next = n)));
    }
  }
  function Zs(t, l) {
    var e = l.action,
      a = l.payload,
      u = t.state;
    if (l.isTransition) {
      var n = S.T,
        i = {};
      S.T = i;
      try {
        var c = e(u, a),
          f = S.S;
        (f !== null && f(i, c), Vs(t, l, c));
      } catch (m) {
        Fi(t, l, m);
      } finally {
        (n !== null && i.types !== null && (n.types = i.types), (S.T = n));
      }
    } else
      try {
        ((n = e(u, a)), Vs(t, l, n));
      } catch (m) {
        Fi(t, l, m);
      }
  }
  function Vs(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (a) {
            Js(t, l, a);
          },
          function (a) {
            return Fi(t, l, a);
          },
        )
      : Js(t, l, e);
  }
  function Js(t, l, e) {
    ((l.status = "fulfilled"),
      (l.value = e),
      Ks(l),
      (t.state = e),
      (l = t.pending),
      l !== null &&
        ((e = l.next),
        e === l ? (t.pending = null) : ((e = e.next), (l.next = e), Zs(t, e))));
  }
  function Fi(t, l, e) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do ((l.status = "rejected"), (l.reason = e), Ks(l), (l = l.next));
      while (l !== a);
    }
    t.action = null;
  }
  function Ks(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function ws(t, l) {
    return l;
  }
  function Ws(t, l) {
    if (w) {
      var e = st.formState;
      if (e !== null) {
        t: {
          var a = x;
          if (w) {
            if (rt) {
              l: {
                for (var u = rt, n = gl; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break l;
                  }
                  if (((u = pl(u.nextSibling)), u === null)) {
                    u = null;
                    break l;
                  }
                }
                ((n = u.data), (u = n === "F!" || n === "F" ? u : null));
              }
              if (u) {
                ((rt = pl(u.nextSibling)), (a = u.data === "F!"));
                break t;
              }
            }
            te(a);
          }
          a = !1;
        }
        a && (l = e[0]);
      }
    }
    return (
      (e = Vt()),
      (e.memoizedState = e.baseState = l),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ws,
        lastRenderedState: l,
      }),
      (e.queue = a),
      (e = vo.bind(null, x, a)),
      (a.dispatch = e),
      (a = $i(!1)),
      (n = ac.bind(null, x, !1, a.queue)),
      (a = Vt()),
      (u = { state: l, dispatch: null, action: t, pending: null }),
      (a.queue = u),
      (e = Gm.bind(null, x, u, n, e)),
      (u.dispatch = e),
      (a.memoizedState = t),
      [l, e, !1]
    );
  }
  function ks(t) {
    var l = Tt();
    return $s(l, ut, t);
  }
  function $s(t, l, e) {
    if (
      ((l = Wi(t, l, ws)[0]),
      (t = en(Gl)[0]),
      typeof l == "object" && l !== null && typeof l.then == "function")
    )
      try {
        var a = Fa(l);
      } catch (i) {
        throw i === fa ? Ku : i;
      }
    else a = l;
    l = Tt();
    var u = l.queue,
      n = u.dispatch;
    return (
      e !== l.memoizedState &&
        ((x.flags |= 2048),
        ma(9, { destroy: void 0 }, Qm.bind(null, u, e), null)),
      [a, n, t]
    );
  }
  function Qm(t, l) {
    t.action = l;
  }
  function Fs(t) {
    var l = Tt(),
      e = ut;
    if (e !== null) return $s(l, e, t);
    (Tt(), (l = l.memoizedState), (e = Tt()));
    var a = e.queue.dispatch;
    return ((e.memoizedState = t), [l, a, !1]);
  }
  function ma(t, l, e, a) {
    return (
      (t = { tag: t, create: e, deps: a, inst: l, next: null }),
      (l = x.updateQueue),
      l === null && ((l = tn()), (x.updateQueue = l)),
      (e = l.lastEffect),
      e === null
        ? (l.lastEffect = t.next = t)
        : ((a = e.next), (e.next = t), (t.next = a), (l.lastEffect = t)),
      t
    );
  }
  function Is() {
    return Tt().memoizedState;
  }
  function an(t, l, e, a) {
    var u = Vt();
    ((x.flags |= t),
      (u.memoizedState = ma(
        1 | l,
        { destroy: void 0 },
        e,
        a === void 0 ? null : a,
      )));
  }
  function un(t, l, e, a) {
    var u = Tt();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    ut !== null && a !== null && Li(a, ut.memoizedState.deps)
      ? (u.memoizedState = ma(l, n, e, a))
      : ((x.flags |= t), (u.memoizedState = ma(1 | l, n, e, a)));
  }
  function Ps(t, l) {
    an(8390656, 8, t, l);
  }
  function Ii(t, l) {
    un(2048, 8, t, l);
  }
  function Xm(t) {
    x.flags |= 4;
    var l = x.updateQueue;
    if (l === null) ((l = tn()), (x.updateQueue = l), (l.events = [t]));
    else {
      var e = l.events;
      e === null ? (l.events = [t]) : e.push(t);
    }
  }
  function to(t) {
    var l = Tt().memoizedState;
    return (
      Xm({ ref: l, nextImpl: t }),
      function () {
        if ((I & 2) !== 0) throw Error(y(440));
        return l.impl.apply(void 0, arguments);
      }
    );
  }
  function lo(t, l) {
    return un(4, 2, t, l);
  }
  function eo(t, l) {
    return un(4, 4, t, l);
  }
  function ao(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function () {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return (
        (t = t()),
        (l.current = t),
        function () {
          l.current = null;
        }
      );
  }
  function uo(t, l, e) {
    ((e = e != null ? e.concat([t]) : null), un(4, 4, ao.bind(null, l, t), e));
  }
  function Pi() {}
  function no(t, l) {
    var e = Tt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && Li(l, a[1]) ? a[0] : ((e.memoizedState = [t, l]), t);
  }
  function io(t, l) {
    var e = Tt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && Li(l, a[1])) return a[0];
    if (((a = t()), je)) {
      kl(!0);
      try {
        t();
      } finally {
        kl(!1);
      }
    }
    return ((e.memoizedState = [a, l]), a);
  }
  function tc(t, l, e) {
    return e === void 0 || ((xl & 1073741824) !== 0 && (J & 261930) === 0)
      ? (t.memoizedState = l)
      : ((t.memoizedState = e), (t = fr()), (x.lanes |= t), (se |= t), e);
  }
  function co(t, l, e, a) {
    return al(e, l)
      ? e
      : oa.current !== null
        ? ((t = tc(t, e, a)), al(t, l) || (Mt = !0), t)
        : (xl & 42) === 0 || ((xl & 1073741824) !== 0 && (J & 261930) === 0)
          ? ((Mt = !0), (t.memoizedState = e))
          : ((t = fr()), (x.lanes |= t), (se |= t), l);
  }
  function fo(t, l, e, a, u) {
    var n = E.p;
    E.p = n !== 0 && 8 > n ? n : 8;
    var i = S.T,
      c = {};
    ((S.T = c), ac(t, !1, l, e));
    try {
      var f = u(),
        m = S.S;
      if (
        (m !== null && m(c, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var g = jm(f, a);
        Ia(t, l, g, sl(t));
      } else Ia(t, l, a, sl(t));
    } catch (b) {
      Ia(t, l, { then: function () {}, status: "rejected", reason: b }, sl());
    } finally {
      ((E.p = n),
        i !== null && c.types !== null && (i.types = c.types),
        (S.T = i));
    }
  }
  function Lm() {}
  function lc(t, l, e, a) {
    if (t.tag !== 5) throw Error(y(476));
    var u = so(t).queue;
    fo(
      t,
      u,
      l,
      B,
      e === null
        ? Lm
        : function () {
            return (oo(t), e(a));
          },
    );
  }
  function so(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: B,
      baseState: B,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gl,
        lastRenderedState: B,
      },
      next: null,
    };
    var e = {};
    return (
      (l.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Gl,
          lastRenderedState: e,
        },
        next: null,
      }),
      (t.memoizedState = l),
      (t = t.alternate),
      t !== null && (t.memoizedState = l),
      l
    );
  }
  function oo(t) {
    var l = so(t);
    (l.next === null && (l = t.alternate.memoizedState),
      Ia(t, l.next.queue, {}, sl()));
  }
  function ec() {
    return Yt(yu);
  }
  function ro() {
    return Tt().memoizedState;
  }
  function mo() {
    return Tt().memoizedState;
  }
  function Zm(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = sl();
          t = ae(e);
          var a = ue(l, t, e);
          (a !== null && (It(a, l, e), wa(a, l, e)),
            (l = { cache: Ui() }),
            (t.payload = l));
          return;
      }
      l = l.return;
    }
  }
  function Vm(t, l, e) {
    var a = sl();
    ((e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      nn(t)
        ? yo(l, e)
        : ((e = bi(t, l, e, a)), e !== null && (It(e, t, a), ho(e, l, a))));
  }
  function vo(t, l, e) {
    var a = sl();
    Ia(t, l, e, a);
  }
  function Ia(t, l, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (nn(t)) yo(l, u);
    else {
      var n = t.alternate;
      if (
        t.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = l.lastRenderedReducer), n !== null)
      )
        try {
          var i = l.lastRenderedState,
            c = n(i, e);
          if (((u.hasEagerState = !0), (u.eagerState = c), al(c, i)))
            return (Gu(t, l, u, 0), st === null && xu(), !1);
        } catch {}
      if (((e = bi(t, l, u, a)), e !== null))
        return (It(e, t, a), ho(e, l, a), !0);
    }
    return !1;
  }
  function ac(t, l, e, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: qc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      nn(t))
    ) {
      if (l) throw Error(y(479));
    } else ((l = bi(t, e, a, 2)), l !== null && It(l, t, 2));
  }
  function nn(t) {
    var l = t.alternate;
    return t === x || (l !== null && l === x);
  }
  function yo(t, l) {
    ra = Iu = !0;
    var e = t.pending;
    (e === null ? (l.next = l) : ((l.next = e.next), (e.next = l)),
      (t.pending = l));
  }
  function ho(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      ((a &= t.pendingLanes), (e |= a), (l.lanes = e), bf(t, e));
    }
  }
  var Pa = {
    readContext: Yt,
    use: ln,
    useCallback: gt,
    useContext: gt,
    useEffect: gt,
    useImperativeHandle: gt,
    useLayoutEffect: gt,
    useInsertionEffect: gt,
    useMemo: gt,
    useReducer: gt,
    useRef: gt,
    useState: gt,
    useDebugValue: gt,
    useDeferredValue: gt,
    useTransition: gt,
    useSyncExternalStore: gt,
    useId: gt,
    useHostTransitionStatus: gt,
    useFormState: gt,
    useActionState: gt,
    useOptimistic: gt,
    useMemoCache: gt,
    useCacheRefresh: gt,
  };
  Pa.useEffectEvent = gt;
  var go = {
      readContext: Yt,
      use: ln,
      useCallback: function (t, l) {
        return ((Vt().memoizedState = [t, l === void 0 ? null : l]), t);
      },
      useContext: Yt,
      useEffect: Ps,
      useImperativeHandle: function (t, l, e) {
        ((e = e != null ? e.concat([t]) : null),
          an(4194308, 4, ao.bind(null, l, t), e));
      },
      useLayoutEffect: function (t, l) {
        return an(4194308, 4, t, l);
      },
      useInsertionEffect: function (t, l) {
        an(4, 2, t, l);
      },
      useMemo: function (t, l) {
        var e = Vt();
        l = l === void 0 ? null : l;
        var a = t();
        if (je) {
          kl(!0);
          try {
            t();
          } finally {
            kl(!1);
          }
        }
        return ((e.memoizedState = [a, l]), a);
      },
      useReducer: function (t, l, e) {
        var a = Vt();
        if (e !== void 0) {
          var u = e(l);
          if (je) {
            kl(!0);
            try {
              e(l);
            } finally {
              kl(!1);
            }
          }
        } else u = l;
        return (
          (a.memoizedState = a.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (a.queue = t),
          (t = t.dispatch = Vm.bind(null, x, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var l = Vt();
        return ((t = { current: t }), (l.memoizedState = t));
      },
      useState: function (t) {
        t = $i(t);
        var l = t.queue,
          e = vo.bind(null, x, l);
        return ((l.dispatch = e), [t.memoizedState, e]);
      },
      useDebugValue: Pi,
      useDeferredValue: function (t, l) {
        var e = Vt();
        return tc(e, t, l);
      },
      useTransition: function () {
        var t = $i(!1);
        return (
          (t = fo.bind(null, x, t.queue, !0, !1)),
          (Vt().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, l, e) {
        var a = x,
          u = Vt();
        if (w) {
          if (e === void 0) throw Error(y(407));
          e = e();
        } else {
          if (((e = l()), st === null)) throw Error(y(349));
          (J & 127) !== 0 || Ys(a, l, e);
        }
        u.memoizedState = e;
        var n = { value: e, getSnapshot: l };
        return (
          (u.queue = n),
          Ps(Gs.bind(null, a, n, t), [t]),
          (a.flags |= 2048),
          ma(9, { destroy: void 0 }, xs.bind(null, a, n, e, l), null),
          e
        );
      },
      useId: function () {
        var t = Vt(),
          l = st.identifierPrefix;
        if (w) {
          var e = Dl,
            a = Ol;
          ((e = (a & ~(1 << (32 - el(a) - 1))).toString(32) + e),
            (l = "_" + l + "R_" + e),
            (e = Pu++),
            0 < e && (l += "H" + e.toString(32)),
            (l += "_"));
        } else ((e = Ym++), (l = "_" + l + "r_" + e.toString(32) + "_"));
        return (t.memoizedState = l);
      },
      useHostTransitionStatus: ec,
      useFormState: Ws,
      useActionState: Ws,
      useOptimistic: function (t) {
        var l = Vt();
        l.memoizedState = l.baseState = t;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (l.queue = e),
          (l = ac.bind(null, x, !0, e)),
          (e.dispatch = l),
          [t, l]
        );
      },
      useMemoCache: wi,
      useCacheRefresh: function () {
        return (Vt().memoizedState = Zm.bind(null, x));
      },
      useEffectEvent: function (t) {
        var l = Vt(),
          e = { impl: t };
        return (
          (l.memoizedState = e),
          function () {
            if ((I & 2) !== 0) throw Error(y(440));
            return e.impl.apply(void 0, arguments);
          }
        );
      },
    },
    uc = {
      readContext: Yt,
      use: ln,
      useCallback: no,
      useContext: Yt,
      useEffect: Ii,
      useImperativeHandle: uo,
      useInsertionEffect: lo,
      useLayoutEffect: eo,
      useMemo: io,
      useReducer: en,
      useRef: Is,
      useState: function () {
        return en(Gl);
      },
      useDebugValue: Pi,
      useDeferredValue: function (t, l) {
        var e = Tt();
        return co(e, ut.memoizedState, t, l);
      },
      useTransition: function () {
        var t = en(Gl)[0],
          l = Tt().memoizedState;
        return [typeof t == "boolean" ? t : Fa(t), l];
      },
      useSyncExternalStore: js,
      useId: ro,
      useHostTransitionStatus: ec,
      useFormState: ks,
      useActionState: ks,
      useOptimistic: function (t, l) {
        var e = Tt();
        return Ls(e, ut, t, l);
      },
      useMemoCache: wi,
      useCacheRefresh: mo,
    };
  uc.useEffectEvent = to;
  var So = {
    readContext: Yt,
    use: ln,
    useCallback: no,
    useContext: Yt,
    useEffect: Ii,
    useImperativeHandle: uo,
    useInsertionEffect: lo,
    useLayoutEffect: eo,
    useMemo: io,
    useReducer: ki,
    useRef: Is,
    useState: function () {
      return ki(Gl);
    },
    useDebugValue: Pi,
    useDeferredValue: function (t, l) {
      var e = Tt();
      return ut === null ? tc(e, t, l) : co(e, ut.memoizedState, t, l);
    },
    useTransition: function () {
      var t = ki(Gl)[0],
        l = Tt().memoizedState;
      return [typeof t == "boolean" ? t : Fa(t), l];
    },
    useSyncExternalStore: js,
    useId: ro,
    useHostTransitionStatus: ec,
    useFormState: Fs,
    useActionState: Fs,
    useOptimistic: function (t, l) {
      var e = Tt();
      return ut !== null
        ? Ls(e, ut, t, l)
        : ((e.baseState = t), [t, e.queue.dispatch]);
    },
    useMemoCache: wi,
    useCacheRefresh: mo,
  };
  So.useEffectEvent = to;
  function nc(t, l, e, a) {
    ((l = t.memoizedState),
      (e = e(a, l)),
      (e = e == null ? l : U({}, l, e)),
      (t.memoizedState = e),
      t.lanes === 0 && (t.updateQueue.baseState = e));
  }
  var ic = {
    enqueueSetState: function (t, l, e) {
      t = t._reactInternals;
      var a = sl(),
        u = ae(a);
      ((u.payload = l),
        e != null && (u.callback = e),
        (l = ue(t, u, a)),
        l !== null && (It(l, t, a), wa(l, t, a)));
    },
    enqueueReplaceState: function (t, l, e) {
      t = t._reactInternals;
      var a = sl(),
        u = ae(a);
      ((u.tag = 1),
        (u.payload = l),
        e != null && (u.callback = e),
        (l = ue(t, u, a)),
        l !== null && (It(l, t, a), wa(l, t, a)));
    },
    enqueueForceUpdate: function (t, l) {
      t = t._reactInternals;
      var e = sl(),
        a = ae(e);
      ((a.tag = 2),
        l != null && (a.callback = l),
        (l = ue(t, a, e)),
        l !== null && (It(l, t, e), wa(l, t, e)));
    },
  };
  function po(t, l, e, a, u, n, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, n, i)
        : l.prototype && l.prototype.isPureReactComponent
          ? !Ga(e, a) || !Ga(u, n)
          : !0
    );
  }
  function bo(t, l, e, a) {
    ((t = l.state),
      typeof l.componentWillReceiveProps == "function" &&
        l.componentWillReceiveProps(e, a),
      typeof l.UNSAFE_componentWillReceiveProps == "function" &&
        l.UNSAFE_componentWillReceiveProps(e, a),
      l.state !== t && ic.enqueueReplaceState(l, l.state, null));
  }
  function Ye(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l) a !== "ref" && (e[a] = l[a]);
    }
    if ((t = t.defaultProps)) {
      e === l && (e = U({}, e));
      for (var u in t) e[u] === void 0 && (e[u] = t[u]);
    }
    return e;
  }
  function To(t) {
    Yu(t);
  }
  function Ao(t) {
    console.error(t);
  }
  function Eo(t) {
    Yu(t);
  }
  function cn(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function zo(t, l, e) {
    try {
      var a = t.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function cc(t, l, e) {
    return (
      (e = ae(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        cn(t, l);
      }),
      e
    );
  }
  function Mo(t) {
    return ((t = ae(t)), (t.tag = 3), t);
  }
  function Oo(t, l, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      ((t.payload = function () {
        return u(n);
      }),
        (t.callback = function () {
          zo(l, e, a);
        }));
    }
    var i = e.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        (zo(l, e, a),
          typeof u != "function" &&
            (oe === null ? (oe = new Set([this])) : oe.add(this)));
        var c = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function Jm(t, l, e, a, u) {
    if (
      ((e.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((l = e.alternate),
        l !== null && na(l, e, u, !0),
        (e = nl.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 31:
          case 13:
            return (
              Sl === null ? pn() : e.alternate === null && St === 0 && (St = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = u),
              a === wu
                ? (e.flags |= 16384)
                : ((l = e.updateQueue),
                  l === null ? (e.updateQueue = new Set([a])) : l.add(a),
                  Hc(t, a, u)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === wu
                ? (e.flags |= 16384)
                : ((l = e.updateQueue),
                  l === null
                    ? ((l = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (e.updateQueue = l))
                    : ((e = l.retryQueue),
                      e === null ? (l.retryQueue = new Set([a])) : e.add(a)),
                  Hc(t, a, u)),
              !1
            );
        }
        throw Error(y(435, e.tag));
      }
      return (Hc(t, a, u), pn(), !1);
    }
    if (w)
      return (
        (l = nl.current),
        l !== null
          ? ((l.flags & 65536) === 0 && (l.flags |= 256),
            (l.flags |= 65536),
            (l.lanes = u),
            a !== Oi && ((t = Error(y(422), { cause: a })), La(vl(t, e))))
          : (a !== Oi && ((l = Error(y(423), { cause: a })), La(vl(l, e))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (a = vl(a, e)),
            (u = cc(t.stateNode, a, u)),
            Yi(t, u),
            St !== 4 && (St = 2)),
        !1
      );
    var n = Error(y(520), { cause: a });
    if (
      ((n = vl(n, e)),
      cu === null ? (cu = [n]) : cu.push(n),
      St !== 4 && (St = 2),
      l === null)
    )
      return !0;
    ((a = vl(a, e)), (e = l));
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (t = u & -u),
            (e.lanes |= t),
            (t = cc(e.stateNode, a, t)),
            Yi(e, t),
            !1
          );
        case 1:
          if (
            ((l = e.type),
            (n = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof l.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (oe === null || !oe.has(n)))))
          )
            return (
              (e.flags |= 65536),
              (u &= -u),
              (e.lanes |= u),
              (u = Mo(u)),
              Oo(u, t, e, a),
              Yi(e, u),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var fc = Error(y(461)),
    Mt = !1;
  function xt(t, l, e, a) {
    l.child = t === null ? Cs(l, null, e, a) : qe(l, t.child, e, a);
  }
  function Do(t, l, e, a, u) {
    e = e.render;
    var n = l.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a) c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return (
      Ue(l),
      (a = Zi(t, l, e, i, n, u)),
      (c = Vi()),
      t !== null && !Mt
        ? (Ji(t, l, u), Ql(t, l, u))
        : (w && c && zi(l), (l.flags |= 1), xt(t, l, a, u), l.child)
    );
  }
  function _o(t, l, e, a, u) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" &&
        !Ti(n) &&
        n.defaultProps === void 0 &&
        e.compare === null
        ? ((l.tag = 15), (l.type = n), Co(t, l, n, a, u))
        : ((t = Xu(e.type, null, a, l, l.mode, u)),
          (t.ref = l.ref),
          (t.return = l),
          (l.child = t));
    }
    if (((n = t.child), !hc(t, u))) {
      var i = n.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : Ga), e(i, a) && t.ref === l.ref)
      )
        return Ql(t, l, u);
    }
    return (
      (l.flags |= 1),
      (t = Bl(n, a)),
      (t.ref = l.ref),
      (t.return = l),
      (l.child = t)
    );
  }
  function Co(t, l, e, a, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Ga(n, a) && t.ref === l.ref)
        if (((Mt = !1), (l.pendingProps = a = n), hc(t, u)))
          (t.flags & 131072) !== 0 && (Mt = !0);
        else return ((l.lanes = t.lanes), Ql(t, l, u));
    }
    return sc(t, l, e, a, u);
  }
  function Ro(t, l, e, a) {
    var u = a.children,
      n = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        l.stateNode === null &&
        (l.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((l.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | e : e), t !== null)) {
          for (a = l.child = t.child, u = 0; a !== null; )
            ((u = u | a.lanes | a.childLanes), (a = a.sibling));
          a = u & ~n;
        } else ((a = 0), (l.child = null));
        return Uo(t, l, n, e, a);
      }
      if ((e & 536870912) !== 0)
        ((l.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Ju(l, n !== null ? n.cachePool : null),
          n !== null ? Hs(l, n) : Gi(),
          Ns(l));
      else
        return (
          (a = l.lanes = 536870912),
          Uo(t, l, n !== null ? n.baseLanes | e : e, e, a)
        );
    } else
      n !== null
        ? (Ju(l, n.cachePool), Hs(l, n), ie(), (l.memoizedState = null))
        : (t !== null && Ju(l, null), Gi(), ie());
    return (xt(t, l, u, e), l.child);
  }
  function tu(t, l) {
    return (
      (t !== null && t.tag === 22) ||
        l.stateNode !== null ||
        (l.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.sibling
    );
  }
  function Uo(t, l, e, a, u) {
    var n = Ni();
    return (
      (n = n === null ? null : { parent: Et._currentValue, pool: n }),
      (l.memoizedState = { baseLanes: e, cachePool: n }),
      t !== null && Ju(l, null),
      Gi(),
      Ns(l),
      t !== null && na(t, l, a, !0),
      (l.childLanes = u),
      null
    );
  }
  function fn(t, l) {
    return (
      (l = on({ mode: l.mode, children: l.children }, t.mode)),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function Ho(t, l, e) {
    return (
      qe(l, t.child, null, e),
      (t = fn(l, l.pendingProps)),
      (t.flags |= 2),
      il(l),
      (l.memoizedState = null),
      t
    );
  }
  function Km(t, l, e) {
    var a = l.pendingProps,
      u = (l.flags & 128) !== 0;
    if (((l.flags &= -129), t === null)) {
      if (w) {
        if (a.mode === "hidden")
          return ((t = fn(l, a)), (l.lanes = 536870912), tu(null, t));
        if (
          (Xi(l),
          (t = rt)
            ? ((t = Vr(t, gl)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((l.memoizedState = {
                  dehydrated: t,
                  treeContext: Il !== null ? { id: Ol, overflow: Dl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = vs(t)),
                (e.return = l),
                (l.child = e),
                (jt = l),
                (rt = null)))
            : (t = null),
          t === null)
        )
          throw te(l);
        return ((l.lanes = 536870912), null);
      }
      return fn(l, a);
    }
    var n = t.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if ((Xi(l), u))
        if (l.flags & 256) ((l.flags &= -257), (l = Ho(t, l, e)));
        else if (l.memoizedState !== null)
          ((l.child = t.child), (l.flags |= 128), (l = null));
        else throw Error(y(558));
      else if (
        (Mt || na(t, l, e, !1), (u = (e & t.childLanes) !== 0), Mt || u)
      ) {
        if (
          ((a = st),
          a !== null && ((i = Tf(a, e)), i !== 0 && i !== n.retryLane))
        )
          throw ((n.retryLane = i), De(t, i), It(a, t, i), fc);
        (pn(), (l = Ho(t, l, e)));
      } else
        ((t = n.treeContext),
          (rt = pl(i.nextSibling)),
          (jt = l),
          (w = !0),
          (Pl = null),
          (gl = !1),
          t !== null && gs(l, t),
          (l = fn(l, a)),
          (l.flags |= 4096));
      return l;
    }
    return (
      (t = Bl(t.child, { mode: a.mode, children: a.children })),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function sn(t, l) {
    var e = l.ref;
    if (e === null) t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(y(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function sc(t, l, e, a, u) {
    return (
      Ue(l),
      (e = Zi(t, l, e, a, void 0, u)),
      (a = Vi()),
      t !== null && !Mt
        ? (Ji(t, l, u), Ql(t, l, u))
        : (w && a && zi(l), (l.flags |= 1), xt(t, l, e, u), l.child)
    );
  }
  function No(t, l, e, a, u, n) {
    return (
      Ue(l),
      (l.updateQueue = null),
      (e = qs(l, a, e, u)),
      Bs(t),
      (a = Vi()),
      t !== null && !Mt
        ? (Ji(t, l, n), Ql(t, l, n))
        : (w && a && zi(l), (l.flags |= 1), xt(t, l, e, n), l.child)
    );
  }
  function Bo(t, l, e, a, u) {
    if ((Ue(l), l.stateNode === null)) {
      var n = la,
        i = e.contextType;
      (typeof i == "object" && i !== null && (n = Yt(i)),
        (n = new e(a, n)),
        (l.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = ic),
        (l.stateNode = n),
        (n._reactInternals = l),
        (n = l.stateNode),
        (n.props = a),
        (n.state = l.memoizedState),
        (n.refs = {}),
        qi(l),
        (i = e.contextType),
        (n.context = typeof i == "object" && i !== null ? Yt(i) : la),
        (n.state = l.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == "function" && (nc(l, e, i, a), (n.state = l.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && ic.enqueueReplaceState(n, n.state, null),
          ka(l, a, n, u),
          Wa(),
          (n.state = l.memoizedState)),
        typeof n.componentDidMount == "function" && (l.flags |= 4194308),
        (a = !0));
    } else if (t === null) {
      n = l.stateNode;
      var c = l.memoizedProps,
        f = Ye(e, c);
      n.props = f;
      var m = n.context,
        g = e.contextType;
      ((i = la), typeof g == "object" && g !== null && (i = Yt(g)));
      var b = e.getDerivedStateFromProps;
      ((g =
        typeof b == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (c = l.pendingProps !== c),
        g ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || m !== i) && bo(l, n, a, i)),
        (ee = !1));
      var v = l.memoizedState;
      ((n.state = v),
        ka(l, a, n, u),
        Wa(),
        (m = l.memoizedState),
        c || v !== m || ee
          ? (typeof b == "function" && (nc(l, e, b, a), (m = l.memoizedState)),
            (f = ee || po(l, e, f, a, v, m, i))
              ? (g ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (l.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (l.flags |= 4194308),
                (l.memoizedProps = a),
                (l.memoizedState = m)),
            (n.props = a),
            (n.state = m),
            (n.context = i),
            (a = f))
          : (typeof n.componentDidMount == "function" && (l.flags |= 4194308),
            (a = !1)));
    } else {
      ((n = l.stateNode),
        ji(t, l),
        (i = l.memoizedProps),
        (g = Ye(e, i)),
        (n.props = g),
        (b = l.pendingProps),
        (v = n.context),
        (m = e.contextType),
        (f = la),
        typeof m == "object" && m !== null && (f = Yt(m)),
        (c = e.getDerivedStateFromProps),
        (m =
          typeof c == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== b || v !== f) && bo(l, n, a, f)),
        (ee = !1),
        (v = l.memoizedState),
        (n.state = v),
        ka(l, a, n, u),
        Wa());
      var h = l.memoizedState;
      i !== b ||
      v !== h ||
      ee ||
      (t !== null && t.dependencies !== null && Zu(t.dependencies))
        ? (typeof c == "function" && (nc(l, e, c, a), (h = l.memoizedState)),
          (g =
            ee ||
            po(l, e, g, a, v, h, f) ||
            (t !== null && t.dependencies !== null && Zu(t.dependencies)))
            ? (m ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, h, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, h, f)),
              typeof n.componentDidUpdate == "function" && (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (l.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === t.memoizedProps && v === t.memoizedState) ||
                (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === t.memoizedProps && v === t.memoizedState) ||
                (l.flags |= 1024),
              (l.memoizedProps = a),
              (l.memoizedState = h)),
          (n.props = a),
          (n.state = h),
          (n.context = f),
          (a = g))
        : (typeof n.componentDidUpdate != "function" ||
            (i === t.memoizedProps && v === t.memoizedState) ||
            (l.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === t.memoizedProps && v === t.memoizedState) ||
            (l.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      sn(t, l),
      (a = (l.flags & 128) !== 0),
      n || a
        ? ((n = l.stateNode),
          (e =
            a && typeof e.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (l.flags |= 1),
          t !== null && a
            ? ((l.child = qe(l, t.child, null, u)),
              (l.child = qe(l, null, e, u)))
            : xt(t, l, e, u),
          (l.memoizedState = n.state),
          (t = l.child))
        : (t = Ql(t, l, u)),
      t
    );
  }
  function qo(t, l, e, a) {
    return (Ce(), (l.flags |= 256), xt(t, l, e, a), l.child);
  }
  var oc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function rc(t) {
    return { baseLanes: t, cachePool: Es() };
  }
  function dc(t, l, e) {
    return ((t = t !== null ? t.childLanes & ~e : 0), l && (t |= fl), t);
  }
  function jo(t, l, e) {
    var a = l.pendingProps,
      u = !1,
      n = (l.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          t !== null && t.memoizedState === null ? !1 : (bt.current & 2) !== 0),
      i && ((u = !0), (l.flags &= -129)),
      (i = (l.flags & 32) !== 0),
      (l.flags &= -33),
      t === null)
    ) {
      if (w) {
        if (
          (u ? ne(l) : ie(),
          (t = rt)
            ? ((t = Vr(t, gl)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((l.memoizedState = {
                  dehydrated: t,
                  treeContext: Il !== null ? { id: Ol, overflow: Dl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = vs(t)),
                (e.return = l),
                (l.child = e),
                (jt = l),
                (rt = null)))
            : (t = null),
          t === null)
        )
          throw te(l);
        return (Wc(t) ? (l.lanes = 32) : (l.lanes = 536870912), null);
      }
      var c = a.children;
      return (
        (a = a.fallback),
        u
          ? (ie(),
            (u = l.mode),
            (c = on({ mode: "hidden", children: c }, u)),
            (a = _e(a, u, e, null)),
            (c.return = l),
            (a.return = l),
            (c.sibling = a),
            (l.child = c),
            (a = l.child),
            (a.memoizedState = rc(e)),
            (a.childLanes = dc(t, i, e)),
            (l.memoizedState = oc),
            tu(null, a))
          : (ne(l), mc(l, c))
      );
    }
    var f = t.memoizedState;
    if (f !== null && ((c = f.dehydrated), c !== null)) {
      if (n)
        l.flags & 256
          ? (ne(l), (l.flags &= -257), (l = vc(t, l, e)))
          : l.memoizedState !== null
            ? (ie(), (l.child = t.child), (l.flags |= 128), (l = null))
            : (ie(),
              (c = a.fallback),
              (u = l.mode),
              (a = on({ mode: "visible", children: a.children }, u)),
              (c = _e(c, u, e, null)),
              (c.flags |= 2),
              (a.return = l),
              (c.return = l),
              (a.sibling = c),
              (l.child = a),
              qe(l, t.child, null, e),
              (a = l.child),
              (a.memoizedState = rc(e)),
              (a.childLanes = dc(t, i, e)),
              (l.memoizedState = oc),
              (l = tu(null, a)));
      else if ((ne(l), Wc(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var m = i.dgst;
        ((i = m),
          (a = Error(y(419))),
          (a.stack = ""),
          (a.digest = i),
          La({ value: a, source: null, stack: null }),
          (l = vc(t, l, e)));
      } else if (
        (Mt || na(t, l, e, !1), (i = (e & t.childLanes) !== 0), Mt || i)
      ) {
        if (
          ((i = st),
          i !== null && ((a = Tf(i, e)), a !== 0 && a !== f.retryLane))
        )
          throw ((f.retryLane = a), De(t, a), It(i, t, a), fc);
        (wc(c) || pn(), (l = vc(t, l, e)));
      } else
        wc(c)
          ? ((l.flags |= 192), (l.child = t.child), (l = null))
          : ((t = f.treeContext),
            (rt = pl(c.nextSibling)),
            (jt = l),
            (w = !0),
            (Pl = null),
            (gl = !1),
            t !== null && gs(l, t),
            (l = mc(l, a.children)),
            (l.flags |= 4096));
      return l;
    }
    return u
      ? (ie(),
        (c = a.fallback),
        (u = l.mode),
        (f = t.child),
        (m = f.sibling),
        (a = Bl(f, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = f.subtreeFlags & 65011712),
        m !== null ? (c = Bl(m, c)) : ((c = _e(c, u, e, null)), (c.flags |= 2)),
        (c.return = l),
        (a.return = l),
        (a.sibling = c),
        (l.child = a),
        tu(null, a),
        (a = l.child),
        (c = t.child.memoizedState),
        c === null
          ? (c = rc(e))
          : ((u = c.cachePool),
            u !== null
              ? ((f = Et._currentValue),
                (u = u.parent !== f ? { parent: f, pool: f } : u))
              : (u = Es()),
            (c = { baseLanes: c.baseLanes | e, cachePool: u })),
        (a.memoizedState = c),
        (a.childLanes = dc(t, i, e)),
        (l.memoizedState = oc),
        tu(t.child, a))
      : (ne(l),
        (e = t.child),
        (t = e.sibling),
        (e = Bl(e, { mode: "visible", children: a.children })),
        (e.return = l),
        (e.sibling = null),
        t !== null &&
          ((i = l.deletions),
          i === null ? ((l.deletions = [t]), (l.flags |= 16)) : i.push(t)),
        (l.child = e),
        (l.memoizedState = null),
        e);
  }
  function mc(t, l) {
    return (
      (l = on({ mode: "visible", children: l }, t.mode)),
      (l.return = t),
      (t.child = l)
    );
  }
  function on(t, l) {
    return ((t = ul(22, t, null, l)), (t.lanes = 0), t);
  }
  function vc(t, l, e) {
    return (
      qe(l, t.child, null, e),
      (t = mc(l, l.pendingProps.children)),
      (t.flags |= 2),
      (l.memoizedState = null),
      t
    );
  }
  function Yo(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    (a !== null && (a.lanes |= l), Ci(t.return, l, e));
  }
  function yc(t, l, e, a, u, n) {
    var i = t.memoizedState;
    i === null
      ? (t.memoizedState = {
          isBackwards: l,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: u,
          treeForkCount: n,
        })
      : ((i.isBackwards = l),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = e),
        (i.tailMode = u),
        (i.treeForkCount = n));
  }
  function xo(t, l, e) {
    var a = l.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    a = a.children;
    var i = bt.current,
      c = (i & 2) !== 0;
    if (
      (c ? ((i = (i & 1) | 2), (l.flags |= 128)) : (i &= 1),
      z(bt, i),
      xt(t, l, a, e),
      (a = w ? Xa : 0),
      !c && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = l.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Yo(t, e, l);
        else if (t.tag === 19) Yo(t, e, l);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === l) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (u) {
      case "forwards":
        for (e = l.child, u = null; e !== null; )
          ((t = e.alternate),
            t !== null && Fu(t) === null && (u = e),
            (e = e.sibling));
        ((e = u),
          e === null
            ? ((u = l.child), (l.child = null))
            : ((u = e.sibling), (e.sibling = null)),
          yc(l, !1, u, e, n, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, u = l.child, l.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && Fu(t) === null)) {
            l.child = u;
            break;
          }
          ((t = u.sibling), (u.sibling = e), (e = u), (u = t));
        }
        yc(l, !0, e, null, n, a);
        break;
      case "together":
        yc(l, !1, null, null, void 0, a);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Ql(t, l, e) {
    if (
      (t !== null && (l.dependencies = t.dependencies),
      (se |= l.lanes),
      (e & l.childLanes) === 0)
    )
      if (t !== null) {
        if ((na(t, l, e, !1), (e & l.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && l.child !== t.child) throw Error(y(153));
    if (l.child !== null) {
      for (
        t = l.child, e = Bl(t, t.pendingProps), l.child = e, e.return = l;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (e = e.sibling = Bl(t, t.pendingProps)),
          (e.return = l));
      e.sibling = null;
    }
    return l.child;
  }
  function hc(t, l) {
    return (t.lanes & l) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Zu(t)));
  }
  function wm(t, l, e) {
    switch (l.tag) {
      case 3:
        (Zt(l, l.stateNode.containerInfo),
          le(l, Et, t.memoizedState.cache),
          Ce());
        break;
      case 27:
      case 5:
        Oa(l);
        break;
      case 4:
        Zt(l, l.stateNode.containerInfo);
        break;
      case 10:
        le(l, l.type, l.memoizedProps.value);
        break;
      case 31:
        if (l.memoizedState !== null) return ((l.flags |= 128), Xi(l), null);
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ne(l), (l.flags |= 128), null)
            : (e & l.child.childLanes) !== 0
              ? jo(t, l, e)
              : (ne(l), (t = Ql(t, l, e)), t !== null ? t.sibling : null);
        ne(l);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((a = (e & l.childLanes) !== 0),
          a || (na(t, l, e, !1), (a = (e & l.childLanes) !== 0)),
          u)
        ) {
          if (a) return xo(t, l, e);
          l.flags |= 128;
        }
        if (
          ((u = l.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          z(bt, bt.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((l.lanes = 0), Ro(t, l, e, l.pendingProps));
      case 24:
        le(l, Et, t.memoizedState.cache);
    }
    return Ql(t, l, e);
  }
  function Go(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps) Mt = !0;
      else {
        if (!hc(t, e) && (l.flags & 128) === 0) return ((Mt = !1), wm(t, l, e));
        Mt = (t.flags & 131072) !== 0;
      }
    else ((Mt = !1), w && (l.flags & 1048576) !== 0 && hs(l, Xa, l.index));
    switch (((l.lanes = 0), l.tag)) {
      case 16:
        t: {
          var a = l.pendingProps;
          if (((t = Ne(l.elementType)), (l.type = t), typeof t == "function"))
            Ti(t)
              ? ((a = Ye(t, a)), (l.tag = 1), (l = Bo(null, l, t, a, e)))
              : ((l.tag = 0), (l = sc(null, l, t, a, e)));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === Lt) {
                ((l.tag = 11), (l = Do(null, l, t, a, e)));
                break t;
              } else if (u === X) {
                ((l.tag = 14), (l = _o(null, l, t, a, e)));
                break t;
              }
            }
            throw ((l = Rl(t) || t), Error(y(306, l, "")));
          }
        }
        return l;
      case 0:
        return sc(t, l, l.type, l.pendingProps, e);
      case 1:
        return ((a = l.type), (u = Ye(a, l.pendingProps)), Bo(t, l, a, u, e));
      case 3:
        t: {
          if ((Zt(l, l.stateNode.containerInfo), t === null))
            throw Error(y(387));
          a = l.pendingProps;
          var n = l.memoizedState;
          ((u = n.element), ji(t, l), ka(l, a, null, e));
          var i = l.memoizedState;
          if (
            ((a = i.cache),
            le(l, Et, a),
            a !== n.cache && Ri(l, [Et], e, !0),
            Wa(),
            (a = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: i.cache }),
              (l.updateQueue.baseState = n),
              (l.memoizedState = n),
              l.flags & 256)
            ) {
              l = qo(t, l, a, e);
              break t;
            } else if (a !== u) {
              ((u = vl(Error(y(424)), l)), La(u), (l = qo(t, l, a, e)));
              break t;
            } else
              for (
                t = l.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  rt = pl(t.firstChild),
                  jt = l,
                  w = !0,
                  Pl = null,
                  gl = !0,
                  e = Cs(l, null, a, e),
                  l.child = e;
                e;
              )
                ((e.flags = (e.flags & -3) | 4096), (e = e.sibling));
          else {
            if ((Ce(), a === u)) {
              l = Ql(t, l, e);
              break t;
            }
            xt(t, l, a, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return (
          sn(t, l),
          t === null
            ? (e = $r(l.type, null, l.pendingProps, null))
              ? (l.memoizedState = e)
              : w ||
                ((e = l.type),
                (t = l.pendingProps),
                (a = On(L.current).createElement(e)),
                (a[qt] = l),
                (a[Kt] = t),
                Gt(a, e, t),
                Ct(a),
                (l.stateNode = a))
            : (l.memoizedState = $r(
                l.type,
                t.memoizedProps,
                l.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Oa(l),
          t === null &&
            w &&
            ((a = l.stateNode = wr(l.type, l.pendingProps, L.current)),
            (jt = l),
            (gl = !0),
            (u = rt),
            ve(l.type) ? ((kc = u), (rt = pl(a.firstChild))) : (rt = u)),
          xt(t, l, l.pendingProps.children, e),
          sn(t, l),
          t === null && (l.flags |= 4194304),
          l.child
        );
      case 5:
        return (
          t === null &&
            w &&
            ((u = a = rt) &&
              ((a = Ev(a, l.type, l.pendingProps, gl)),
              a !== null
                ? ((l.stateNode = a),
                  (jt = l),
                  (rt = pl(a.firstChild)),
                  (gl = !1),
                  (u = !0))
                : (u = !1)),
            u || te(l)),
          Oa(l),
          (u = l.type),
          (n = l.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (a = n.children),
          Vc(u, n) ? (a = null) : i !== null && Vc(u, i) && (l.flags |= 32),
          l.memoizedState !== null &&
            ((u = Zi(t, l, xm, null, null, e)), (yu._currentValue = u)),
          sn(t, l),
          xt(t, l, a, e),
          l.child
        );
      case 6:
        return (
          t === null &&
            w &&
            ((t = e = rt) &&
              ((e = zv(e, l.pendingProps, gl)),
              e !== null
                ? ((l.stateNode = e), (jt = l), (rt = null), (t = !0))
                : (t = !1)),
            t || te(l)),
          null
        );
      case 13:
        return jo(t, l, e);
      case 4:
        return (
          Zt(l, l.stateNode.containerInfo),
          (a = l.pendingProps),
          t === null ? (l.child = qe(l, null, a, e)) : xt(t, l, a, e),
          l.child
        );
      case 11:
        return Do(t, l, l.type, l.pendingProps, e);
      case 7:
        return (xt(t, l, l.pendingProps, e), l.child);
      case 8:
        return (xt(t, l, l.pendingProps.children, e), l.child);
      case 12:
        return (xt(t, l, l.pendingProps.children, e), l.child);
      case 10:
        return (
          (a = l.pendingProps),
          le(l, l.type, a.value),
          xt(t, l, a.children, e),
          l.child
        );
      case 9:
        return (
          (u = l.type._context),
          (a = l.pendingProps.children),
          Ue(l),
          (u = Yt(u)),
          (a = a(u)),
          (l.flags |= 1),
          xt(t, l, a, e),
          l.child
        );
      case 14:
        return _o(t, l, l.type, l.pendingProps, e);
      case 15:
        return Co(t, l, l.type, l.pendingProps, e);
      case 19:
        return xo(t, l, e);
      case 31:
        return Km(t, l, e);
      case 22:
        return Ro(t, l, e, l.pendingProps);
      case 24:
        return (
          Ue(l),
          (a = Yt(Et)),
          t === null
            ? ((u = Ni()),
              u === null &&
                ((u = st),
                (n = Ui()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= e),
                (u = n)),
              (l.memoizedState = { parent: a, cache: u }),
              qi(l),
              le(l, Et, u))
            : ((t.lanes & e) !== 0 && (ji(t, l), ka(l, null, null, e), Wa()),
              (u = t.memoizedState),
              (n = l.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (l.memoizedState = u),
                  l.lanes === 0 &&
                    (l.memoizedState = l.updateQueue.baseState = u),
                  le(l, Et, a))
                : ((a = n.cache),
                  le(l, Et, a),
                  a !== u.cache && Ri(l, [Et], e, !0))),
          xt(t, l, l.pendingProps.children, e),
          l.child
        );
      case 29:
        throw l.pendingProps;
    }
    throw Error(y(156, l.tag));
  }
  function Xl(t) {
    t.flags |= 4;
  }
  function gc(t, l, e, a, u) {
    if (((l = (t.mode & 32) !== 0) && (l = !1), l)) {
      if (((t.flags |= 16777216), (u & 335544128) === u))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (dr()) t.flags |= 8192;
        else throw ((Be = wu), Bi);
    } else t.flags &= -16777217;
  }
  function Qo(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !ld(l)))
      if (dr()) t.flags |= 8192;
      else throw ((Be = wu), Bi);
  }
  function rn(t, l) {
    (l !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((l = t.tag !== 22 ? Sf() : 536870912), (t.lanes |= l), (ga |= l)));
  }
  function lu(t, l) {
    if (!w)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null; )
            (l.alternate !== null && (e = l), (l = l.sibling));
          e === null ? (t.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = t.tail;
          for (var a = null; e !== null; )
            (e.alternate !== null && (a = e), (e = e.sibling));
          a === null
            ? l || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function dt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child,
      e = 0,
      a = 0;
    if (l)
      for (var u = t.child; u !== null; )
        ((e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling));
    else
      for (u = t.child; u !== null; )
        ((e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = t),
          (u = u.sibling));
    return ((t.subtreeFlags |= a), (t.childLanes = e), l);
  }
  function Wm(t, l, e) {
    var a = l.pendingProps;
    switch ((Mi(l), l.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (dt(l), null);
      case 1:
        return (dt(l), null);
      case 3:
        return (
          (e = l.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          l.memoizedState.cache !== a && (l.flags |= 2048),
          Yl(Et),
          pt(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (t === null || t.child === null) &&
            (ua(l)
              ? Xl(l)
              : t === null ||
                (t.memoizedState.isDehydrated && (l.flags & 256) === 0) ||
                ((l.flags |= 1024), Di())),
          dt(l),
          null
        );
      case 26:
        var u = l.type,
          n = l.memoizedState;
        return (
          t === null
            ? (Xl(l),
              n !== null ? (dt(l), Qo(l, n)) : (dt(l), gc(l, u, null, a, e)))
            : n
              ? n !== t.memoizedState
                ? (Xl(l), dt(l), Qo(l, n))
                : (dt(l), (l.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== a && Xl(l),
                dt(l),
                gc(l, u, t, a, e)),
          null
        );
      case 27:
        if (
          (Tu(l),
          (e = L.current),
          (u = l.type),
          t !== null && l.stateNode != null)
        )
          t.memoizedProps !== a && Xl(l);
        else {
          if (!a) {
            if (l.stateNode === null) throw Error(y(166));
            return (dt(l), null);
          }
          ((t = D.current),
            ua(l) ? Ss(l) : ((t = wr(u, a, e)), (l.stateNode = t), Xl(l)));
        }
        return (dt(l), null);
      case 5:
        if ((Tu(l), (u = l.type), t !== null && l.stateNode != null))
          t.memoizedProps !== a && Xl(l);
        else {
          if (!a) {
            if (l.stateNode === null) throw Error(y(166));
            return (dt(l), null);
          }
          if (((n = D.current), ua(l))) Ss(l);
          else {
            var i = On(L.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    ((n = i.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (n.multiple = !0)
                        : a.size && (n.size = a.size));
                    break;
                  default:
                    n =
                      typeof a.is == "string"
                        ? i.createElement(u, { is: a.is })
                        : i.createElement(u);
                }
            }
            ((n[qt] = l), (n[Kt] = a));
            t: for (i = l.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === l) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === l) break t;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            l.stateNode = n;
            t: switch ((Gt(n, u, a), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && Xl(l);
          }
        }
        return (
          dt(l),
          gc(l, l.type, t === null ? null : t.memoizedProps, l.pendingProps, e),
          null
        );
      case 6:
        if (t && l.stateNode != null) t.memoizedProps !== a && Xl(l);
        else {
          if (typeof a != "string" && l.stateNode === null) throw Error(y(166));
          if (((t = L.current), ua(l))) {
            if (
              ((t = l.stateNode),
              (e = l.memoizedProps),
              (a = null),
              (u = jt),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            ((t[qt] = l),
              (t = !!(
                t.nodeValue === e ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                jr(t.nodeValue, e)
              )),
              t || te(l, !0));
          } else
            ((t = On(t).createTextNode(a)), (t[qt] = l), (l.stateNode = t));
        }
        return (dt(l), null);
      case 31:
        if (((e = l.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = ua(l)), e !== null)) {
            if (t === null) {
              if (!a) throw Error(y(318));
              if (
                ((t = l.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(y(557));
              t[qt] = l;
            } else
              (Ce(),
                (l.flags & 128) === 0 && (l.memoizedState = null),
                (l.flags |= 4));
            (dt(l), (t = !1));
          } else
            ((e = Di()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = e),
              (t = !0));
          if (!t) return l.flags & 256 ? (il(l), l) : (il(l), null);
          if ((l.flags & 128) !== 0) throw Error(y(558));
        }
        return (dt(l), null);
      case 13:
        if (
          ((a = l.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = ua(l)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(y(318));
              if (
                ((u = l.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(y(317));
              u[qt] = l;
            } else
              (Ce(),
                (l.flags & 128) === 0 && (l.memoizedState = null),
                (l.flags |= 4));
            (dt(l), (u = !1));
          } else
            ((u = Di()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return l.flags & 256 ? (il(l), l) : (il(l), null);
        }
        return (
          il(l),
          (l.flags & 128) !== 0
            ? ((l.lanes = e), l)
            : ((e = a !== null),
              (t = t !== null && t.memoizedState !== null),
              e &&
                ((a = l.child),
                (u = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (u = a.alternate.memoizedState.cachePool.pool),
                (n = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (n = a.memoizedState.cachePool.pool),
                n !== u && (a.flags |= 2048)),
              e !== t && e && (l.child.flags |= 8192),
              rn(l, l.updateQueue),
              dt(l),
              null)
        );
      case 4:
        return (pt(), t === null && Gc(l.stateNode.containerInfo), dt(l), null);
      case 10:
        return (Yl(l.type), dt(l), null);
      case 19:
        if ((T(bt), (a = l.memoizedState), a === null)) return (dt(l), null);
        if (((u = (l.flags & 128) !== 0), (n = a.rendering), n === null))
          if (u) lu(a, !1);
          else {
            if (St !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = l.child; t !== null; ) {
                if (((n = Fu(t)), n !== null)) {
                  for (
                    l.flags |= 128,
                      lu(a, !1),
                      t = n.updateQueue,
                      l.updateQueue = t,
                      rn(l, t),
                      l.subtreeFlags = 0,
                      t = e,
                      e = l.child;
                    e !== null;
                  )
                    (ms(e, t), (e = e.sibling));
                  return (
                    z(bt, (bt.current & 1) | 2),
                    w && ql(l, a.treeForkCount),
                    l.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              tl() > hn &&
              ((l.flags |= 128), (u = !0), lu(a, !1), (l.lanes = 4194304));
          }
        else {
          if (!u)
            if (((t = Fu(n)), t !== null)) {
              if (
                ((l.flags |= 128),
                (u = !0),
                (t = t.updateQueue),
                (l.updateQueue = t),
                rn(l, t),
                lu(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !n.alternate &&
                  !w)
              )
                return (dt(l), null);
            } else
              2 * tl() - a.renderingStartTime > hn &&
                e !== 536870912 &&
                ((l.flags |= 128), (u = !0), lu(a, !1), (l.lanes = 4194304));
          a.isBackwards
            ? ((n.sibling = l.child), (l.child = n))
            : ((t = a.last),
              t !== null ? (t.sibling = n) : (l.child = n),
              (a.last = n));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = tl()),
            (t.sibling = null),
            (e = bt.current),
            z(bt, u ? (e & 1) | 2 : e & 1),
            w && ql(l, a.treeForkCount),
            t)
          : (dt(l), null);
      case 22:
      case 23:
        return (
          il(l),
          Qi(),
          (a = l.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (l.flags |= 8192)
            : a && (l.flags |= 8192),
          a
            ? (e & 536870912) !== 0 &&
              (l.flags & 128) === 0 &&
              (dt(l), l.subtreeFlags & 6 && (l.flags |= 8192))
            : dt(l),
          (e = l.updateQueue),
          e !== null && rn(l, e.retryQueue),
          (e = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          (a = null),
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          a !== e && (l.flags |= 2048),
          t !== null && T(He),
          null
        );
      case 24:
        return (
          (e = null),
          t !== null && (e = t.memoizedState.cache),
          l.memoizedState.cache !== e && (l.flags |= 2048),
          Yl(Et),
          dt(l),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(y(156, l.tag));
  }
  function km(t, l) {
    switch ((Mi(l), l.tag)) {
      case 1:
        return (
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 3:
        return (
          Yl(Et),
          pt(),
          (t = l.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((l.flags = (t & -65537) | 128), l)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Tu(l), null);
      case 31:
        if (l.memoizedState !== null) {
          if ((il(l), l.alternate === null)) throw Error(y(340));
          Ce();
        }
        return (
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 13:
        if (
          (il(l), (t = l.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (l.alternate === null) throw Error(y(340));
          Ce();
        }
        return (
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 19:
        return (T(bt), null);
      case 4:
        return (pt(), null);
      case 10:
        return (Yl(l.type), null);
      case 22:
      case 23:
        return (
          il(l),
          Qi(),
          t !== null && T(He),
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 24:
        return (Yl(Et), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xo(t, l) {
    switch ((Mi(l), l.tag)) {
      case 3:
        (Yl(Et), pt());
        break;
      case 26:
      case 27:
      case 5:
        Tu(l);
        break;
      case 4:
        pt();
        break;
      case 31:
        l.memoizedState !== null && il(l);
        break;
      case 13:
        il(l);
        break;
      case 19:
        T(bt);
        break;
      case 10:
        Yl(l.type);
        break;
      case 22:
      case 23:
        (il(l), Qi(), t !== null && T(He));
        break;
      case 24:
        Yl(Et);
    }
  }
  function eu(t, l) {
    try {
      var e = l.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & t) === t) {
            a = void 0;
            var n = e.create,
              i = e.inst;
            ((a = n()), (i.destroy = a));
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (c) {
      et(l, l.return, c);
    }
  }
  function ce(t, l, e) {
    try {
      var a = l.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst,
              c = i.destroy;
            if (c !== void 0) {
              ((i.destroy = void 0), (u = l));
              var f = e,
                m = c;
              try {
                m();
              } catch (g) {
                et(u, f, g);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (g) {
      et(l, l.return, g);
    }
  }
  function Lo(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        Us(l, e);
      } catch (a) {
        et(t, t.return, a);
      }
    }
  }
  function Zo(t, l, e) {
    ((e.props = Ye(t.type, t.memoizedProps)), (e.state = t.memoizedState));
    try {
      e.componentWillUnmount();
    } catch (a) {
      et(t, l, a);
    }
  }
  function au(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof e == "function" ? (t.refCleanup = e(a)) : (e.current = a);
      }
    } catch (u) {
      et(t, l, u);
    }
  }
  function _l(t, l) {
    var e = t.ref,
      a = t.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          et(t, l, u);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          et(t, l, u);
        }
      else e.current = null;
  }
  function Vo(t) {
    var l = t.type,
      e = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break t;
        case "img":
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      et(t, t.return, u);
    }
  }
  function Sc(t, l, e) {
    try {
      var a = t.stateNode;
      (gv(a, t.type, e, l), (a[Kt] = l));
    } catch (u) {
      et(t, t.return, u);
    }
  }
  function Jo(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && ve(t.type)) ||
      t.tag === 4
    );
  }
  function pc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Jo(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && ve(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function bc(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode),
        l
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e
            ).insertBefore(t, l)
          : ((l =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e),
            l.appendChild(t),
            (e = e._reactRootContainer),
            e != null || l.onclick !== null || (l.onclick = Hl)));
    else if (
      a !== 4 &&
      (a === 27 && ve(t.type) && ((e = t.stateNode), (l = null)),
      (t = t.child),
      t !== null)
    )
      for (bc(t, l, e), t = t.sibling; t !== null; )
        (bc(t, l, e), (t = t.sibling));
  }
  function dn(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode), l ? e.insertBefore(t, l) : e.appendChild(t));
    else if (
      a !== 4 &&
      (a === 27 && ve(t.type) && (e = t.stateNode), (t = t.child), t !== null)
    )
      for (dn(t, l, e), t = t.sibling; t !== null; )
        (dn(t, l, e), (t = t.sibling));
  }
  function Ko(t) {
    var l = t.stateNode,
      e = t.memoizedProps;
    try {
      for (var a = t.type, u = l.attributes; u.length; )
        l.removeAttributeNode(u[0]);
      (Gt(l, a, e), (l[qt] = t), (l[Kt] = e));
    } catch (n) {
      et(t, t.return, n);
    }
  }
  var Ll = !1,
    Ot = !1,
    Tc = !1,
    wo = typeof WeakSet == "function" ? WeakSet : Set,
    Rt = null;
  function $m(t, l) {
    if (((t = t.containerInfo), (Lc = Nn), (t = us(t)), vi(t))) {
      if ("selectionStart" in t)
        var e = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          e = ((e = t.ownerDocument) && e.defaultView) || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              (e.nodeType, n.nodeType);
            } catch {
              e = null;
              break t;
            }
            var i = 0,
              c = -1,
              f = -1,
              m = 0,
              g = 0,
              b = t,
              v = null;
            l: for (;;) {
              for (
                var h;
                b !== e || (u !== 0 && b.nodeType !== 3) || (c = i + u),
                  b !== n || (a !== 0 && b.nodeType !== 3) || (f = i + a),
                  b.nodeType === 3 && (i += b.nodeValue.length),
                  (h = b.firstChild) !== null;
              )
                ((v = b), (b = h));
              for (;;) {
                if (b === t) break l;
                if (
                  (v === e && ++m === u && (c = i),
                  v === n && ++g === a && (f = i),
                  (h = b.nextSibling) !== null)
                )
                  break;
                ((b = v), (v = b.parentNode));
              }
              b = h;
            }
            e = c === -1 || f === -1 ? null : { start: c, end: f };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      Zc = { focusedElem: t, selectionRange: e }, Nn = !1, Rt = l;
      Rt !== null;
    )
      if (
        ((l = Rt), (t = l.child), (l.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = l), (Rt = t));
      else
        for (; Rt !== null; ) {
          switch (((l = Rt), (n = l.alternate), (t = l.flags), l.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = l.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (e = 0; e < t.length; e++)
                  ((u = t[e]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                ((t = void 0),
                  (e = l),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = e.stateNode));
                try {
                  var M = Ye(e.type, u);
                  ((t = a.getSnapshotBeforeUpdate(M, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = t));
                } catch (N) {
                  et(e, e.return, N);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = l.stateNode.containerInfo), (e = t.nodeType), e === 9)
                )
                  Kc(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Kc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(y(163));
          }
          if (((t = l.sibling), t !== null)) {
            ((t.return = l.return), (Rt = t));
            break;
          }
          Rt = l.return;
        }
  }
  function Wo(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Vl(t, e), a & 4 && eu(5, e));
        break;
      case 1:
        if ((Vl(t, e), a & 4))
          if (((t = e.stateNode), l === null))
            try {
              t.componentDidMount();
            } catch (i) {
              et(e, e.return, i);
            }
          else {
            var u = Ye(e.type, l.memoizedProps);
            l = l.memoizedState;
            try {
              t.componentDidUpdate(u, l, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              et(e, e.return, i);
            }
          }
        (a & 64 && Lo(e), a & 512 && au(e, e.return));
        break;
      case 3:
        if ((Vl(t, e), a & 64 && ((t = e.updateQueue), t !== null))) {
          if (((l = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            Us(t, l);
          } catch (i) {
            et(e, e.return, i);
          }
        }
        break;
      case 27:
        l === null && a & 4 && Ko(e);
      case 26:
      case 5:
        (Vl(t, e), l === null && a & 4 && Vo(e), a & 512 && au(e, e.return));
        break;
      case 12:
        Vl(t, e);
        break;
      case 31:
        (Vl(t, e), a & 4 && Fo(t, e));
        break;
      case 13:
        (Vl(t, e),
          a & 4 && Io(t, e),
          a & 64 &&
            ((t = e.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((e = nv.bind(null, e)), Mv(t, e)))));
        break;
      case 22:
        if (((a = e.memoizedState !== null || Ll), !a)) {
          ((l = (l !== null && l.memoizedState !== null) || Ot), (u = Ll));
          var n = Ot;
          ((Ll = a),
            (Ot = l) && !n ? Jl(t, e, (e.subtreeFlags & 8772) !== 0) : Vl(t, e),
            (Ll = u),
            (Ot = n));
        }
        break;
      case 30:
        break;
      default:
        Vl(t, e);
    }
  }
  function ko(t) {
    var l = t.alternate;
    (l !== null && ((t.alternate = null), ko(l)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((l = t.stateNode), l !== null && Fn(l)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var yt = null,
    Wt = !1;
  function Zl(t, l, e) {
    for (e = e.child; e !== null; ) ($o(t, l, e), (e = e.sibling));
  }
  function $o(t, l, e) {
    if (ll && typeof ll.onCommitFiberUnmount == "function")
      try {
        ll.onCommitFiberUnmount(Da, e);
      } catch {}
    switch (e.tag) {
      case 26:
        (Ot || _l(e, l),
          Zl(t, l, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e)));
        break;
      case 27:
        Ot || _l(e, l);
        var a = yt,
          u = Wt;
        (ve(e.type) && ((yt = e.stateNode), (Wt = !1)),
          Zl(t, l, e),
          du(e.stateNode),
          (yt = a),
          (Wt = u));
        break;
      case 5:
        Ot || _l(e, l);
      case 6:
        if (
          ((a = yt),
          (u = Wt),
          (yt = null),
          Zl(t, l, e),
          (yt = a),
          (Wt = u),
          yt !== null)
        )
          if (Wt)
            try {
              (yt.nodeType === 9
                ? yt.body
                : yt.nodeName === "HTML"
                  ? yt.ownerDocument.body
                  : yt
              ).removeChild(e.stateNode);
            } catch (n) {
              et(e, l, n);
            }
          else
            try {
              yt.removeChild(e.stateNode);
            } catch (n) {
              et(e, l, n);
            }
        break;
      case 18:
        yt !== null &&
          (Wt
            ? ((t = yt),
              Lr(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                e.stateNode,
              ),
              Ma(t))
            : Lr(yt, e.stateNode));
        break;
      case 4:
        ((a = yt),
          (u = Wt),
          (yt = e.stateNode.containerInfo),
          (Wt = !0),
          Zl(t, l, e),
          (yt = a),
          (Wt = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (ce(2, e, l), Ot || ce(4, e, l), Zl(t, l, e));
        break;
      case 1:
        (Ot ||
          (_l(e, l),
          (a = e.stateNode),
          typeof a.componentWillUnmount == "function" && Zo(e, l, a)),
          Zl(t, l, e));
        break;
      case 21:
        Zl(t, l, e);
        break;
      case 22:
        ((Ot = (a = Ot) || e.memoizedState !== null), Zl(t, l, e), (Ot = a));
        break;
      default:
        Zl(t, l, e);
    }
  }
  function Fo(t, l) {
    if (
      l.memoizedState === null &&
      ((t = l.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        Ma(t);
      } catch (e) {
        et(l, l.return, e);
      }
    }
  }
  function Io(t, l) {
    if (
      l.memoizedState === null &&
      ((t = l.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ma(t);
      } catch (e) {
        et(l, l.return, e);
      }
  }
  function Fm(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return (l === null && (l = t.stateNode = new wo()), l);
      case 22:
        return (
          (t = t.stateNode),
          (l = t._retryCache),
          l === null && (l = t._retryCache = new wo()),
          l
        );
      default:
        throw Error(y(435, t.tag));
    }
  }
  function mn(t, l) {
    var e = Fm(t);
    l.forEach(function (a) {
      if (!e.has(a)) {
        e.add(a);
        var u = iv.bind(null, t, a);
        a.then(u, u);
      }
    });
  }
  function kt(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a],
          n = t,
          i = l,
          c = i;
        t: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ve(c.type)) {
                ((yt = c.stateNode), (Wt = !1));
                break t;
              }
              break;
            case 5:
              ((yt = c.stateNode), (Wt = !1));
              break t;
            case 3:
            case 4:
              ((yt = c.stateNode.containerInfo), (Wt = !0));
              break t;
          }
          c = c.return;
        }
        if (yt === null) throw Error(y(160));
        ($o(n, i, u),
          (yt = null),
          (Wt = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null));
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; ) (Po(l, t), (l = l.sibling));
  }
  var El = null;
  function Po(t, l) {
    var e = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (kt(l, t),
          $t(t),
          a & 4 && (ce(3, t, t.return), eu(3, t), ce(5, t, t.return)));
        break;
      case 1:
        (kt(l, t),
          $t(t),
          a & 512 && (Ot || e === null || _l(e, e.return)),
          a & 64 &&
            Ll &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((e = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = e === null ? a : e.concat(a))))));
        break;
      case 26:
        var u = El;
        if (
          (kt(l, t),
          $t(t),
          a & 512 && (Ot || e === null || _l(e, e.return)),
          a & 4)
        ) {
          var n = e !== null ? e.memoizedState : null;
          if (((a = t.memoizedState), e === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  ((a = t.type),
                    (e = t.memoizedProps),
                    (u = u.ownerDocument || u));
                  l: switch (a) {
                    case "title":
                      ((n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Ra] ||
                          n[qt] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(a)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title"),
                          )),
                        Gt(n, a, e),
                        (n[qt] = t),
                        Ct(n),
                        (a = n));
                      break t;
                    case "link":
                      var i = Pr("link", "href", u).get(a + (e.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("href") ===
                              (e.href == null || e.href === ""
                                ? null
                                : e.href) &&
                              n.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              n.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              n.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            i.splice(c, 1);
                            break l;
                          }
                      }
                      ((n = u.createElement(a)),
                        Gt(n, a, e),
                        u.head.appendChild(n));
                      break;
                    case "meta":
                      if (
                        (i = Pr("meta", "content", u).get(
                          a + (e.content || ""),
                        ))
                      ) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("content") ===
                              (e.content == null ? null : "" + e.content) &&
                              n.getAttribute("name") ===
                                (e.name == null ? null : e.name) &&
                              n.getAttribute("property") ===
                                (e.property == null ? null : e.property) &&
                              n.getAttribute("http-equiv") ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (e.charSet == null ? null : e.charSet))
                          ) {
                            i.splice(c, 1);
                            break l;
                          }
                      }
                      ((n = u.createElement(a)),
                        Gt(n, a, e),
                        u.head.appendChild(n));
                      break;
                    default:
                      throw Error(y(468, a));
                  }
                  ((n[qt] = t), Ct(n), (a = n));
                }
                t.stateNode = a;
              } else td(u, t.type, t.stateNode);
            else t.stateNode = Ir(u, a, t.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : n.count--,
                a === null
                  ? td(u, t.type, t.stateNode)
                  : Ir(u, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Sc(t, t.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        (kt(l, t),
          $t(t),
          a & 512 && (Ot || e === null || _l(e, e.return)),
          e !== null && a & 4 && Sc(t, t.memoizedProps, e.memoizedProps));
        break;
      case 5:
        if (
          (kt(l, t),
          $t(t),
          a & 512 && (Ot || e === null || _l(e, e.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            We(u, "");
          } catch (M) {
            et(t, t.return, M);
          }
        }
        (a & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), Sc(t, u, e !== null ? e.memoizedProps : u)),
          a & 1024 && (Tc = !0));
        break;
      case 6:
        if ((kt(l, t), $t(t), a & 4)) {
          if (t.stateNode === null) throw Error(y(162));
          ((a = t.memoizedProps), (e = t.stateNode));
          try {
            e.nodeValue = a;
          } catch (M) {
            et(t, t.return, M);
          }
        }
        break;
      case 3:
        if (
          ((Cn = null),
          (u = El),
          (El = Dn(l.containerInfo)),
          kt(l, t),
          (El = u),
          $t(t),
          a & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            Ma(l.containerInfo);
          } catch (M) {
            et(t, t.return, M);
          }
        Tc && ((Tc = !1), tr(t));
        break;
      case 4:
        ((a = El),
          (El = Dn(t.stateNode.containerInfo)),
          kt(l, t),
          $t(t),
          (El = a));
        break;
      case 12:
        (kt(l, t), $t(t));
        break;
      case 31:
        (kt(l, t),
          $t(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), mn(t, a))));
        break;
      case 13:
        (kt(l, t),
          $t(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (e !== null && e.memoizedState !== null) &&
            (yn = tl()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), mn(t, a))));
        break;
      case 22:
        u = t.memoizedState !== null;
        var f = e !== null && e.memoizedState !== null,
          m = Ll,
          g = Ot;
        if (
          ((Ll = m || u),
          (Ot = g || f),
          kt(l, t),
          (Ot = g),
          (Ll = m),
          $t(t),
          a & 8192)
        )
          t: for (
            l = t.stateNode,
              l._visibility = u ? l._visibility & -2 : l._visibility | 1,
              u && (e === null || f || Ll || Ot || xe(t)),
              e = null,
              l = t;
            ;
          ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                f = e = l;
                try {
                  if (((n = f.stateNode), u))
                    ((i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    c = f.stateNode;
                    var b = f.memoizedProps.style,
                      v =
                        b != null && b.hasOwnProperty("display")
                          ? b.display
                          : null;
                    c.style.display =
                      v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (M) {
                  et(f, f.return, M);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                f = l;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (M) {
                  et(f, f.return, M);
                }
              }
            } else if (l.tag === 18) {
              if (e === null) {
                f = l;
                try {
                  var h = f.stateNode;
                  u ? Zr(h, !0) : Zr(f.stateNode, !1);
                } catch (M) {
                  et(f, f.return, M);
                }
              }
            } else if (
              ((l.tag !== 22 && l.tag !== 23) ||
                l.memoizedState === null ||
                l === t) &&
              l.child !== null
            ) {
              ((l.child.return = l), (l = l.child));
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              (e === l && (e = null), (l = l.return));
            }
            (e === l && (e = null),
              (l.sibling.return = l.return),
              (l = l.sibling));
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((e = a.retryQueue),
            e !== null && ((a.retryQueue = null), mn(t, e))));
        break;
      case 19:
        (kt(l, t),
          $t(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), mn(t, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (kt(l, t), $t(t));
    }
  }
  function $t(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (Jo(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(y(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode,
              n = pc(t);
            dn(t, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (We(i, ""), (e.flags &= -33));
            var c = pc(t);
            dn(t, c, i);
            break;
          case 3:
          case 4:
            var f = e.stateNode.containerInfo,
              m = pc(t);
            bc(t, m, f);
            break;
          default:
            throw Error(y(161));
        }
      } catch (g) {
        et(t, t.return, g);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function tr(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        (tr(l),
          l.tag === 5 && l.flags & 1024 && l.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function Vl(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; ) (Wo(t, l.alternate, l), (l = l.sibling));
  }
  function xe(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ce(4, l, l.return), xe(l));
          break;
        case 1:
          _l(l, l.return);
          var e = l.stateNode;
          (typeof e.componentWillUnmount == "function" && Zo(l, l.return, e),
            xe(l));
          break;
        case 27:
          du(l.stateNode);
        case 26:
        case 5:
          (_l(l, l.return), xe(l));
          break;
        case 22:
          l.memoizedState === null && xe(l);
          break;
        case 30:
          xe(l);
          break;
        default:
          xe(l);
      }
      t = t.sibling;
    }
  }
  function Jl(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var a = l.alternate,
        u = t,
        n = l,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Jl(u, n, e), eu(4, n));
          break;
        case 1:
          if (
            (Jl(u, n, e),
            (a = n),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (m) {
              et(a, a.return, m);
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var c = a.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  Rs(f[u], c);
            } catch (m) {
              et(a, a.return, m);
            }
          }
          (e && i & 64 && Lo(n), au(n, n.return));
          break;
        case 27:
          Ko(n);
        case 26:
        case 5:
          (Jl(u, n, e), e && a === null && i & 4 && Vo(n), au(n, n.return));
          break;
        case 12:
          Jl(u, n, e);
          break;
        case 31:
          (Jl(u, n, e), e && i & 4 && Fo(u, n));
          break;
        case 13:
          (Jl(u, n, e), e && i & 4 && Io(u, n));
          break;
        case 22:
          (n.memoizedState === null && Jl(u, n, e), au(n, n.return));
          break;
        case 30:
          break;
        default:
          Jl(u, n, e);
      }
      l = l.sibling;
    }
  }
  function Ac(t, l) {
    var e = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (e = t.memoizedState.cachePool.pool),
      (t = null),
      l.memoizedState !== null &&
        l.memoizedState.cachePool !== null &&
        (t = l.memoizedState.cachePool.pool),
      t !== e && (t != null && t.refCount++, e != null && Za(e)));
  }
  function Ec(t, l) {
    ((t = null),
      l.alternate !== null && (t = l.alternate.memoizedState.cache),
      (l = l.memoizedState.cache),
      l !== t && (l.refCount++, t != null && Za(t)));
  }
  function zl(t, l, e, a) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) (lr(t, l, e, a), (l = l.sibling));
  }
  function lr(t, l, e, a) {
    var u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (zl(t, l, e, a), u & 2048 && eu(9, l));
        break;
      case 1:
        zl(t, l, e, a);
        break;
      case 3:
        (zl(t, l, e, a),
          u & 2048 &&
            ((t = null),
            l.alternate !== null && (t = l.alternate.memoizedState.cache),
            (l = l.memoizedState.cache),
            l !== t && (l.refCount++, t != null && Za(t))));
        break;
      case 12:
        if (u & 2048) {
          (zl(t, l, e, a), (t = l.stateNode));
          try {
            var n = l.memoizedProps,
              i = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(
                i,
                l.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (f) {
            et(l, l.return, f);
          }
        } else zl(t, l, e, a);
        break;
      case 31:
        zl(t, l, e, a);
        break;
      case 13:
        zl(t, l, e, a);
        break;
      case 23:
        break;
      case 22:
        ((n = l.stateNode),
          (i = l.alternate),
          l.memoizedState !== null
            ? n._visibility & 2
              ? zl(t, l, e, a)
              : uu(t, l)
            : n._visibility & 2
              ? zl(t, l, e, a)
              : ((n._visibility |= 2),
                va(t, l, e, a, (l.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Ac(i, l));
        break;
      case 24:
        (zl(t, l, e, a), u & 2048 && Ec(l.alternate, l));
        break;
      default:
        zl(t, l, e, a);
    }
  }
  function va(t, l, e, a, u) {
    for (
      u = u && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child;
      l !== null;
    ) {
      var n = t,
        i = l,
        c = e,
        f = a,
        m = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (va(n, i, c, f, u), eu(8, i));
          break;
        case 23:
          break;
        case 22:
          var g = i.stateNode;
          (i.memoizedState !== null
            ? g._visibility & 2
              ? va(n, i, c, f, u)
              : uu(n, i)
            : ((g._visibility |= 2), va(n, i, c, f, u)),
            u && m & 2048 && Ac(i.alternate, i));
          break;
        case 24:
          (va(n, i, c, f, u), u && m & 2048 && Ec(i.alternate, i));
          break;
        default:
          va(n, i, c, f, u);
      }
      l = l.sibling;
    }
  }
  function uu(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t,
          a = l,
          u = a.flags;
        switch (a.tag) {
          case 22:
            (uu(e, a), u & 2048 && Ac(a.alternate, a));
            break;
          case 24:
            (uu(e, a), u & 2048 && Ec(a.alternate, a));
            break;
          default:
            uu(e, a);
        }
        l = l.sibling;
      }
  }
  var nu = 8192;
  function ya(t, l, e) {
    if (t.subtreeFlags & nu)
      for (t = t.child; t !== null; ) (er(t, l, e), (t = t.sibling));
  }
  function er(t, l, e) {
    switch (t.tag) {
      case 26:
        (ya(t, l, e),
          t.flags & nu &&
            t.memoizedState !== null &&
            Yv(e, El, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        ya(t, l, e);
        break;
      case 3:
      case 4:
        var a = El;
        ((El = Dn(t.stateNode.containerInfo)), ya(t, l, e), (El = a));
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = nu), (nu = 16777216), ya(t, l, e), (nu = a))
            : ya(t, l, e));
        break;
      default:
        ya(t, l, e);
    }
  }
  function ar(t) {
    var l = t.alternate;
    if (l !== null && ((t = l.child), t !== null)) {
      l.child = null;
      do ((l = t.sibling), (t.sibling = null), (t = l));
      while (t !== null);
    }
  }
  function iu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          ((Rt = a), nr(a, t));
        }
      ar(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (ur(t), (t = t.sibling));
  }
  function ur(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (iu(t), t.flags & 2048 && ce(9, t, t.return));
        break;
      case 3:
        iu(t);
        break;
      case 12:
        iu(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null &&
        l._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((l._visibility &= -3), vn(t))
          : iu(t);
        break;
      default:
        iu(t);
    }
  }
  function vn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          ((Rt = a), nr(a, t));
        }
      ar(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((l = t), l.tag)) {
        case 0:
        case 11:
        case 15:
          (ce(8, l, l.return), vn(l));
          break;
        case 22:
          ((e = l.stateNode),
            e._visibility & 2 && ((e._visibility &= -3), vn(l)));
          break;
        default:
          vn(l);
      }
      t = t.sibling;
    }
  }
  function nr(t, l) {
    for (; Rt !== null; ) {
      var e = Rt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ce(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Za(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) ((a.return = e), (Rt = a));
      else
        t: for (e = t; Rt !== null; ) {
          a = Rt;
          var u = a.sibling,
            n = a.return;
          if ((ko(a), a === e)) {
            Rt = null;
            break t;
          }
          if (u !== null) {
            ((u.return = n), (Rt = u));
            break t;
          }
          Rt = n;
        }
    }
  }
  var Im = {
      getCacheForType: function (t) {
        var l = Yt(Et),
          e = l.data.get(t);
        return (e === void 0 && ((e = t()), l.data.set(t, e)), e);
      },
      cacheSignal: function () {
        return Yt(Et).controller.signal;
      },
    },
    Pm = typeof WeakMap == "function" ? WeakMap : Map,
    I = 0,
    st = null,
    Z = null,
    J = 0,
    lt = 0,
    cl = null,
    fe = !1,
    ha = !1,
    zc = !1,
    Kl = 0,
    St = 0,
    se = 0,
    Ge = 0,
    Mc = 0,
    fl = 0,
    ga = 0,
    cu = null,
    Ft = null,
    Oc = !1,
    yn = 0,
    ir = 0,
    hn = 1 / 0,
    gn = null,
    oe = null,
    _t = 0,
    re = null,
    Sa = null,
    wl = 0,
    Dc = 0,
    _c = null,
    cr = null,
    fu = 0,
    Cc = null;
  function sl() {
    return (I & 2) !== 0 && J !== 0 ? J & -J : S.T !== null ? qc() : Af();
  }
  function fr() {
    if (fl === 0)
      if ((J & 536870912) === 0 || w) {
        var t = zu;
        ((zu <<= 1), (zu & 3932160) === 0 && (zu = 262144), (fl = t));
      } else fl = 536870912;
    return ((t = nl.current), t !== null && (t.flags |= 32), fl);
  }
  function It(t, l, e) {
    (((t === st && (lt === 2 || lt === 9)) || t.cancelPendingCommit !== null) &&
      (pa(t, 0), de(t, J, fl, !1)),
      Ca(t, e),
      ((I & 2) === 0 || t !== st) &&
        (t === st && ((I & 2) === 0 && (Ge |= e), St === 4 && de(t, J, fl, !1)),
        Cl(t)));
  }
  function sr(t, l, e) {
    if ((I & 6) !== 0) throw Error(y(327));
    var a = (!e && (l & 127) === 0 && (l & t.expiredLanes) === 0) || _a(t, l),
      u = a ? ev(t, l) : Uc(t, l, !0),
      n = a;
    do {
      if (u === 0) {
        ha && !a && de(t, l, 0, !1);
        break;
      } else {
        if (((e = t.current.alternate), n && !tv(e))) {
          ((u = Uc(t, l, !1)), (n = !1));
          continue;
        }
        if (u === 2) {
          if (((n = l), t.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            ((i = t.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            l = i;
            t: {
              var c = t;
              u = cu;
              var f = c.current.memoizedState.isDehydrated;
              if ((f && (pa(c, i).flags |= 256), (i = Uc(c, i, !1)), i !== 2)) {
                if (zc && !f) {
                  ((c.errorRecoveryDisabledLanes |= n), (Ge |= n), (u = 4));
                  break t;
                }
                ((n = Ft),
                  (Ft = u),
                  n !== null &&
                    (Ft === null ? (Ft = n) : Ft.push.apply(Ft, n)));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (pa(t, 0), de(t, l, 0, !0));
          break;
        }
        t: {
          switch (((a = t), (n = u), n)) {
            case 0:
            case 1:
              throw Error(y(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              de(a, l, fl, !fe);
              break t;
            case 2:
              Ft = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(y(329));
          }
          if ((l & 62914560) === l && ((u = yn + 300 - tl()), 10 < u)) {
            if ((de(a, l, fl, !fe), Ou(a, 0, !0) !== 0)) break t;
            ((wl = l),
              (a.timeoutHandle = Qr(
                or.bind(
                  null,
                  a,
                  e,
                  Ft,
                  gn,
                  Oc,
                  l,
                  fl,
                  Ge,
                  ga,
                  fe,
                  n,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              )));
            break t;
          }
          or(a, e, Ft, gn, Oc, l, fl, Ge, ga, fe, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Cl(t);
  }
  function or(t, l, e, a, u, n, i, c, f, m, g, b, v, h) {
    if (
      ((t.timeoutHandle = -1),
      (b = l.subtreeFlags),
      b & 8192 || (b & 16785408) === 16785408)
    ) {
      ((b = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Hl,
      }),
        er(l, n, b));
      var M =
        (n & 62914560) === n ? yn - tl() : (n & 4194048) === n ? ir - tl() : 0;
      if (((M = xv(b, M)), M !== null)) {
        ((wl = n),
          (t.cancelPendingCommit = M(
            Sr.bind(null, t, l, n, e, a, u, i, c, f, g, b, null, v, h),
          )),
          de(t, n, i, !m));
        return;
      }
    }
    Sr(t, l, n, e, a, u, i, c, f);
  }
  function tv(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        l.flags & 16384 &&
        ((e = l.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var u = e[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!al(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = l.child), l.subtreeFlags & 16384 && e !== null))
        ((e.return = l), (l = e));
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    }
    return !0;
  }
  function de(t, l, e, a) {
    ((l &= ~Mc),
      (l &= ~Ge),
      (t.suspendedLanes |= l),
      (t.pingedLanes &= ~l),
      a && (t.warmLanes |= l),
      (a = t.expirationTimes));
    for (var u = l; 0 < u; ) {
      var n = 31 - el(u),
        i = 1 << n;
      ((a[n] = -1), (u &= ~i));
    }
    e !== 0 && pf(t, e, l);
  }
  function Sn() {
    return (I & 6) === 0 ? (su(0), !1) : !0;
  }
  function Rc() {
    if (Z !== null) {
      if (lt === 0) var t = Z.return;
      else ((t = Z), (jl = Re = null), Ki(t), (sa = null), (Ja = 0), (t = Z));
      for (; t !== null; ) (Xo(t.alternate, t), (t = t.return));
      Z = null;
    }
  }
  function pa(t, l) {
    var e = t.timeoutHandle;
    (e !== -1 && ((t.timeoutHandle = -1), bv(e)),
      (e = t.cancelPendingCommit),
      e !== null && ((t.cancelPendingCommit = null), e()),
      (wl = 0),
      Rc(),
      (st = t),
      (Z = e = Bl(t.current, null)),
      (J = l),
      (lt = 0),
      (cl = null),
      (fe = !1),
      (ha = _a(t, l)),
      (zc = !1),
      (ga = fl = Mc = Ge = se = St = 0),
      (Ft = cu = null),
      (Oc = !1),
      (l & 8) !== 0 && (l |= l & 32));
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= l; 0 < a; ) {
        var u = 31 - el(a),
          n = 1 << u;
        ((l |= t[u]), (a &= ~n));
      }
    return ((Kl = l), xu(), e);
  }
  function rr(t, l) {
    ((x = null),
      (S.H = Pa),
      l === fa || l === Ku
        ? ((l = Os()), (lt = 3))
        : l === Bi
          ? ((l = Os()), (lt = 4))
          : (lt =
              l === fc
                ? 8
                : l !== null &&
                    typeof l == "object" &&
                    typeof l.then == "function"
                  ? 6
                  : 1),
      (cl = l),
      Z === null && ((St = 1), cn(t, vl(l, t.current))));
  }
  function dr() {
    var t = nl.current;
    return t === null
      ? !0
      : (J & 4194048) === J
        ? Sl === null
        : (J & 62914560) === J || (J & 536870912) !== 0
          ? t === Sl
          : !1;
  }
  function mr() {
    var t = S.H;
    return ((S.H = Pa), t === null ? Pa : t);
  }
  function vr() {
    var t = S.A;
    return ((S.A = Im), t);
  }
  function pn() {
    ((St = 4),
      fe || ((J & 4194048) !== J && nl.current !== null) || (ha = !0),
      ((se & 134217727) === 0 && (Ge & 134217727) === 0) ||
        st === null ||
        de(st, J, fl, !1));
  }
  function Uc(t, l, e) {
    var a = I;
    I |= 2;
    var u = mr(),
      n = vr();
    ((st !== t || J !== l) && ((gn = null), pa(t, l)), (l = !1));
    var i = St;
    t: do
      try {
        if (lt !== 0 && Z !== null) {
          var c = Z,
            f = cl;
          switch (lt) {
            case 8:
              (Rc(), (i = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              nl.current === null && (l = !0);
              var m = lt;
              if (((lt = 0), (cl = null), ba(t, c, f, m), e && ha)) {
                i = 0;
                break t;
              }
              break;
            default:
              ((m = lt), (lt = 0), (cl = null), ba(t, c, f, m));
          }
        }
        (lv(), (i = St));
        break;
      } catch (g) {
        rr(t, g);
      }
    while (!0);
    return (
      l && t.shellSuspendCounter++,
      (jl = Re = null),
      (I = a),
      (S.H = u),
      (S.A = n),
      Z === null && ((st = null), (J = 0), xu()),
      i
    );
  }
  function lv() {
    for (; Z !== null; ) yr(Z);
  }
  function ev(t, l) {
    var e = I;
    I |= 2;
    var a = mr(),
      u = vr();
    st !== t || J !== l
      ? ((gn = null), (hn = tl() + 500), pa(t, l))
      : (ha = _a(t, l));
    t: do
      try {
        if (lt !== 0 && Z !== null) {
          l = Z;
          var n = cl;
          l: switch (lt) {
            case 1:
              ((lt = 0), (cl = null), ba(t, l, n, 1));
              break;
            case 2:
            case 9:
              if (zs(n)) {
                ((lt = 0), (cl = null), hr(l));
                break;
              }
              ((l = function () {
                ((lt !== 2 && lt !== 9) || st !== t || (lt = 7), Cl(t));
              }),
                n.then(l, l));
              break t;
            case 3:
              lt = 7;
              break t;
            case 4:
              lt = 5;
              break t;
            case 7:
              zs(n)
                ? ((lt = 0), (cl = null), hr(l))
                : ((lt = 0), (cl = null), ba(t, l, n, 7));
              break;
            case 5:
              var i = null;
              switch (Z.tag) {
                case 26:
                  i = Z.memoizedState;
                case 5:
                case 27:
                  var c = Z;
                  if (i ? ld(i) : c.stateNode.complete) {
                    ((lt = 0), (cl = null));
                    var f = c.sibling;
                    if (f !== null) Z = f;
                    else {
                      var m = c.return;
                      m !== null ? ((Z = m), bn(m)) : (Z = null);
                    }
                    break l;
                  }
              }
              ((lt = 0), (cl = null), ba(t, l, n, 5));
              break;
            case 6:
              ((lt = 0), (cl = null), ba(t, l, n, 6));
              break;
            case 8:
              (Rc(), (St = 6));
              break t;
            default:
              throw Error(y(462));
          }
        }
        av();
        break;
      } catch (g) {
        rr(t, g);
      }
    while (!0);
    return (
      (jl = Re = null),
      (S.H = a),
      (S.A = u),
      (I = e),
      Z !== null ? 0 : ((st = null), (J = 0), xu(), St)
    );
  }
  function av() {
    for (; Z !== null && !Od(); ) yr(Z);
  }
  function yr(t) {
    var l = Go(t.alternate, t, Kl);
    ((t.memoizedProps = t.pendingProps), l === null ? bn(t) : (Z = l));
  }
  function hr(t) {
    var l = t,
      e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = No(e, l, l.pendingProps, l.type, void 0, J);
        break;
      case 11:
        l = No(e, l, l.pendingProps, l.type.render, l.ref, J);
        break;
      case 5:
        Ki(l);
      default:
        (Xo(e, l), (l = Z = ms(l, Kl)), (l = Go(e, l, Kl)));
    }
    ((t.memoizedProps = t.pendingProps), l === null ? bn(t) : (Z = l));
  }
  function ba(t, l, e, a) {
    ((jl = Re = null), Ki(l), (sa = null), (Ja = 0));
    var u = l.return;
    try {
      if (Jm(t, u, l, e, J)) {
        ((St = 1), cn(t, vl(e, t.current)), (Z = null));
        return;
      }
    } catch (n) {
      if (u !== null) throw ((Z = u), n);
      ((St = 1), cn(t, vl(e, t.current)), (Z = null));
      return;
    }
    l.flags & 32768
      ? (w || a === 1
          ? (t = !0)
          : ha || (J & 536870912) !== 0
            ? (t = !1)
            : ((fe = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = nl.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        gr(l, t))
      : bn(l);
  }
  function bn(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        gr(l, fe);
        return;
      }
      t = l.return;
      var e = Wm(l.alternate, l, Kl);
      if (e !== null) {
        Z = e;
        return;
      }
      if (((l = l.sibling), l !== null)) {
        Z = l;
        return;
      }
      Z = l = t;
    } while (l !== null);
    St === 0 && (St = 5);
  }
  function gr(t, l) {
    do {
      var e = km(t.alternate, t);
      if (e !== null) {
        ((e.flags &= 32767), (Z = e));
        return;
      }
      if (
        ((e = t.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !l && ((t = t.sibling), t !== null))
      ) {
        Z = t;
        return;
      }
      Z = t = e;
    } while (t !== null);
    ((St = 6), (Z = null));
  }
  function Sr(t, l, e, a, u, n, i, c, f) {
    t.cancelPendingCommit = null;
    do Tn();
    while (_t !== 0);
    if ((I & 6) !== 0) throw Error(y(327));
    if (l !== null) {
      if (l === t.current) throw Error(y(177));
      if (
        ((n = l.lanes | l.childLanes),
        (n |= pi),
        jd(t, e, n, i, c, f),
        t === st && ((Z = st = null), (J = 0)),
        (Sa = l),
        (re = t),
        (wl = e),
        (Dc = n),
        (_c = u),
        (cr = a),
        (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            cv(Au, function () {
              return (Er(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (l.flags & 13878) !== 0),
        (l.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = S.T), (S.T = null), (u = E.p), (E.p = 2), (i = I), (I |= 4));
        try {
          $m(t, l, e);
        } finally {
          ((I = i), (E.p = u), (S.T = a));
        }
      }
      ((_t = 1), pr(), br(), Tr());
    }
  }
  function pr() {
    if (_t === 1) {
      _t = 0;
      var t = re,
        l = Sa,
        e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        ((e = S.T), (S.T = null));
        var a = E.p;
        E.p = 2;
        var u = I;
        I |= 4;
        try {
          Po(l, t);
          var n = Zc,
            i = us(t.containerInfo),
            c = n.focusedElem,
            f = n.selectionRange;
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            as(c.ownerDocument.documentElement, c)
          ) {
            if (f !== null && vi(c)) {
              var m = f.start,
                g = f.end;
              if ((g === void 0 && (g = m), "selectionStart" in c))
                ((c.selectionStart = m),
                  (c.selectionEnd = Math.min(g, c.value.length)));
              else {
                var b = c.ownerDocument || document,
                  v = (b && b.defaultView) || window;
                if (v.getSelection) {
                  var h = v.getSelection(),
                    M = c.textContent.length,
                    N = Math.min(f.start, M),
                    it = f.end === void 0 ? N : Math.min(f.end, M);
                  !h.extend && N > it && ((i = it), (it = N), (N = i));
                  var r = es(c, N),
                    s = es(c, it);
                  if (
                    r &&
                    s &&
                    (h.rangeCount !== 1 ||
                      h.anchorNode !== r.node ||
                      h.anchorOffset !== r.offset ||
                      h.focusNode !== s.node ||
                      h.focusOffset !== s.offset)
                  ) {
                    var d = b.createRange();
                    (d.setStart(r.node, r.offset),
                      h.removeAllRanges(),
                      N > it
                        ? (h.addRange(d), h.extend(s.node, s.offset))
                        : (d.setEnd(s.node, s.offset), h.addRange(d)));
                  }
                }
              }
            }
            for (b = [], h = c; (h = h.parentNode); )
              h.nodeType === 1 &&
                b.push({ element: h, left: h.scrollLeft, top: h.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < b.length;
              c++
            ) {
              var p = b[c];
              ((p.element.scrollLeft = p.left), (p.element.scrollTop = p.top));
            }
          }
          ((Nn = !!Lc), (Zc = Lc = null));
        } finally {
          ((I = u), (E.p = a), (S.T = e));
        }
      }
      ((t.current = l), (_t = 2));
    }
  }
  function br() {
    if (_t === 2) {
      _t = 0;
      var t = re,
        l = Sa,
        e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        ((e = S.T), (S.T = null));
        var a = E.p;
        E.p = 2;
        var u = I;
        I |= 4;
        try {
          Wo(t, l.alternate, l);
        } finally {
          ((I = u), (E.p = a), (S.T = e));
        }
      }
      _t = 3;
    }
  }
  function Tr() {
    if (_t === 4 || _t === 3) {
      ((_t = 0), Dd());
      var t = re,
        l = Sa,
        e = wl,
        a = cr;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
        ? (_t = 5)
        : ((_t = 0), (Sa = re = null), Ar(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (oe = null),
        kn(e),
        (l = l.stateNode),
        ll && typeof ll.onCommitFiberRoot == "function")
      )
        try {
          ll.onCommitFiberRoot(Da, l, void 0, (l.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((l = S.T), (u = E.p), (E.p = 2), (S.T = null));
        try {
          for (var n = t.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          ((S.T = l), (E.p = u));
        }
      }
      ((wl & 3) !== 0 && Tn(),
        Cl(t),
        (u = t.pendingLanes),
        (e & 261930) !== 0 && (u & 42) !== 0
          ? t === Cc
            ? fu++
            : ((fu = 0), (Cc = t))
          : (fu = 0),
        su(0));
    }
  }
  function Ar(t, l) {
    (t.pooledCacheLanes &= l) === 0 &&
      ((l = t.pooledCache), l != null && ((t.pooledCache = null), Za(l)));
  }
  function Tn() {
    return (pr(), br(), Tr(), Er());
  }
  function Er() {
    if (_t !== 5) return !1;
    var t = re,
      l = Dc;
    Dc = 0;
    var e = kn(wl),
      a = S.T,
      u = E.p;
    try {
      ((E.p = 32 > e ? 32 : e), (S.T = null), (e = _c), (_c = null));
      var n = re,
        i = wl;
      if (((_t = 0), (Sa = re = null), (wl = 0), (I & 6) !== 0))
        throw Error(y(331));
      var c = I;
      if (
        ((I |= 4),
        ur(n.current),
        lr(n, n.current, i, e),
        (I = c),
        su(0, !1),
        ll && typeof ll.onPostCommitFiberRoot == "function")
      )
        try {
          ll.onPostCommitFiberRoot(Da, n);
        } catch {}
      return !0;
    } finally {
      ((E.p = u), (S.T = a), Ar(t, l));
    }
  }
  function zr(t, l, e) {
    ((l = vl(e, l)),
      (l = cc(t.stateNode, l, 2)),
      (t = ue(t, l, 2)),
      t !== null && (Ca(t, 2), Cl(t)));
  }
  function et(t, l, e) {
    if (t.tag === 3) zr(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          zr(l, t, e);
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (
            typeof l.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (oe === null || !oe.has(a)))
          ) {
            ((t = vl(e, t)),
              (e = Mo(2)),
              (a = ue(l, e, 2)),
              a !== null && (Oo(e, a, l, t), Ca(a, 2), Cl(a)));
            break;
          }
        }
        l = l.return;
      }
  }
  function Hc(t, l, e) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Pm();
      var u = new Set();
      a.set(l, u);
    } else ((u = a.get(l)), u === void 0 && ((u = new Set()), a.set(l, u)));
    u.has(e) ||
      ((zc = !0), u.add(e), (t = uv.bind(null, t, l, e)), l.then(t, t));
  }
  function uv(t, l, e) {
    var a = t.pingCache;
    (a !== null && a.delete(l),
      (t.pingedLanes |= t.suspendedLanes & e),
      (t.warmLanes &= ~e),
      st === t &&
        (J & e) === e &&
        (St === 4 || (St === 3 && (J & 62914560) === J && 300 > tl() - yn)
          ? (I & 2) === 0 && pa(t, 0)
          : (Mc |= e),
        ga === J && (ga = 0)),
      Cl(t));
  }
  function Mr(t, l) {
    (l === 0 && (l = Sf()), (t = De(t, l)), t !== null && (Ca(t, l), Cl(t)));
  }
  function nv(t) {
    var l = t.memoizedState,
      e = 0;
    (l !== null && (e = l.retryLane), Mr(t, e));
  }
  function iv(t, l) {
    var e = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          u = t.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(y(314));
    }
    (a !== null && a.delete(l), Mr(t, e));
  }
  function cv(t, l) {
    return Jn(t, l);
  }
  var An = null,
    Ta = null,
    Nc = !1,
    En = !1,
    Bc = !1,
    me = 0;
  function Cl(t) {
    (t !== Ta &&
      t.next === null &&
      (Ta === null ? (An = Ta = t) : (Ta = Ta.next = t)),
      (En = !0),
      Nc || ((Nc = !0), sv()));
  }
  function su(t, l) {
    if (!Bc && En) {
      Bc = !0;
      do
        for (var e = !1, a = An; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes,
                c = a.pingedLanes;
              ((n = (1 << (31 - el(42 | t) + 1)) - 1),
                (n &= u & ~(i & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((e = !0), Cr(a, n));
          } else
            ((n = J),
              (n = Ou(
                a,
                a === st ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || _a(a, n) || ((e = !0), Cr(a, n)));
          a = a.next;
        }
      while (e);
      Bc = !1;
    }
  }
  function fv() {
    Or();
  }
  function Or() {
    En = Nc = !1;
    var t = 0;
    me !== 0 && pv() && (t = me);
    for (var l = tl(), e = null, a = An; a !== null; ) {
      var u = a.next,
        n = Dr(a, l);
      (n === 0
        ? ((a.next = null),
          e === null ? (An = u) : (e.next = u),
          u === null && (Ta = e))
        : ((e = a), (t !== 0 || (n & 3) !== 0) && (En = !0)),
        (a = u));
    }
    ((_t !== 0 && _t !== 5) || su(t), me !== 0 && (me = 0));
  }
  function Dr(t, l) {
    for (
      var e = t.suspendedLanes,
        a = t.pingedLanes,
        u = t.expirationTimes,
        n = t.pendingLanes & -62914561;
      0 < n;
    ) {
      var i = 31 - el(n),
        c = 1 << i,
        f = u[i];
      (f === -1
        ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = qd(c, l))
        : f <= l && (t.expiredLanes |= c),
        (n &= ~c));
    }
    if (
      ((l = st),
      (e = J),
      (e = Ou(
        t,
        t === l ? e : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (a = t.callbackNode),
      e === 0 ||
        (t === l && (lt === 2 || lt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Kn(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((e & 3) === 0 || _a(t, e)) {
      if (((l = e & -e), l === t.callbackPriority)) return l;
      switch ((a !== null && Kn(a), kn(e))) {
        case 2:
        case 8:
          e = hf;
          break;
        case 32:
          e = Au;
          break;
        case 268435456:
          e = gf;
          break;
        default:
          e = Au;
      }
      return (
        (a = _r.bind(null, t)),
        (e = Jn(e, a)),
        (t.callbackPriority = l),
        (t.callbackNode = e),
        l
      );
    }
    return (
      a !== null && a !== null && Kn(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function _r(t, l) {
    if (_t !== 0 && _t !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var e = t.callbackNode;
    if (Tn() && t.callbackNode !== e) return null;
    var a = J;
    return (
      (a = Ou(
        t,
        t === st ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (sr(t, a, l),
          Dr(t, tl()),
          t.callbackNode != null && t.callbackNode === e
            ? _r.bind(null, t)
            : null)
    );
  }
  function Cr(t, l) {
    if (Tn()) return null;
    sr(t, l, !0);
  }
  function sv() {
    Tv(function () {
      (I & 6) !== 0 ? Jn(yf, fv) : Or();
    });
  }
  function qc() {
    if (me === 0) {
      var t = ia;
      (t === 0 && ((t = Eu), (Eu <<= 1), (Eu & 261888) === 0 && (Eu = 256)),
        (me = t));
    }
    return me;
  }
  function Rr(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Ru("" + t);
  }
  function Ur(t, l) {
    var e = l.ownerDocument.createElement("input");
    return (
      (e.name = l.name),
      (e.value = l.value),
      t.id && e.setAttribute("form", t.id),
      l.parentNode.insertBefore(e, l),
      (t = new FormData(t)),
      e.parentNode.removeChild(e),
      t
    );
  }
  function ov(t, l, e, a, u) {
    if (l === "submit" && e && e.stateNode === u) {
      var n = Rr((u[Kt] || null).action),
        i = a.submitter;
      i &&
        ((l = (l = i[Kt] || null)
          ? Rr(l.formAction)
          : i.getAttribute("formAction")),
        l !== null && ((n = l), (i = null)));
      var c = new Bu("action", "action", null, a, u);
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (me !== 0) {
                  var f = i ? Ur(u, i) : new FormData(u);
                  lc(
                    e,
                    { pending: !0, data: f, method: u.method, action: n },
                    null,
                    f,
                  );
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (f = i ? Ur(u, i) : new FormData(u)),
                  lc(
                    e,
                    { pending: !0, data: f, method: u.method, action: n },
                    n,
                    f,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var jc = 0; jc < Si.length; jc++) {
    var Yc = Si[jc],
      rv = Yc.toLowerCase(),
      dv = Yc[0].toUpperCase() + Yc.slice(1);
    Al(rv, "on" + dv);
  }
  (Al(cs, "onAnimationEnd"),
    Al(fs, "onAnimationIteration"),
    Al(ss, "onAnimationStart"),
    Al("dblclick", "onDoubleClick"),
    Al("focusin", "onFocus"),
    Al("focusout", "onBlur"),
    Al(_m, "onTransitionRun"),
    Al(Cm, "onTransitionStart"),
    Al(Rm, "onTransitionCancel"),
    Al(os, "onTransitionEnd"),
    Ke("onMouseEnter", ["mouseout", "mouseover"]),
    Ke("onMouseLeave", ["mouseout", "mouseover"]),
    Ke("onPointerEnter", ["pointerout", "pointerover"]),
    Ke("onPointerLeave", ["pointerout", "pointerover"]),
    Ee(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ee(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ee("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ee(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ee(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ee(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var ou =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    mv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ou),
    );
  function Hr(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e],
        u = a.event;
      a = a.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i],
              f = c.instance,
              m = c.currentTarget;
            if (((c = c.listener), f !== n && u.isPropagationStopped()))
              break t;
            ((n = c), (u.currentTarget = m));
            try {
              n(u);
            } catch (g) {
              Yu(g);
            }
            ((u.currentTarget = null), (n = f));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((c = a[i]),
              (f = c.instance),
              (m = c.currentTarget),
              (c = c.listener),
              f !== n && u.isPropagationStopped())
            )
              break t;
            ((n = c), (u.currentTarget = m));
            try {
              n(u);
            } catch (g) {
              Yu(g);
            }
            ((u.currentTarget = null), (n = f));
          }
      }
    }
  }
  function V(t, l) {
    var e = l[$n];
    e === void 0 && (e = l[$n] = new Set());
    var a = t + "__bubble";
    e.has(a) || (Nr(l, t, 2, !1), e.add(a));
  }
  function xc(t, l, e) {
    var a = 0;
    (l && (a |= 4), Nr(e, t, a, l));
  }
  var zn = "_reactListening" + Math.random().toString(36).slice(2);
  function Gc(t) {
    if (!t[zn]) {
      ((t[zn] = !0),
        Mf.forEach(function (e) {
          e !== "selectionchange" && (mv.has(e) || xc(e, !1, t), xc(e, !0, t));
        }));
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[zn] || ((l[zn] = !0), xc("selectionchange", !1, l));
    }
  }
  function Nr(t, l, e, a) {
    switch (fd(l)) {
      case 2:
        var u = Xv;
        break;
      case 8:
        u = Lv;
        break;
      default:
        u = tf;
    }
    ((e = u.bind(null, l, e, t)),
      (u = void 0),
      !ni ||
        (l !== "touchstart" && l !== "touchmove" && l !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? t.addEventListener(l, e, { capture: !0, passive: u })
          : t.addEventListener(l, e, !0)
        : u !== void 0
          ? t.addEventListener(l, e, { passive: u })
          : t.addEventListener(l, e, !1));
  }
  function Qc(t, l, e, a, u) {
    var n = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = Ze(c)), i === null)) return;
            if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              a = n = i;
              continue t;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Yf(function () {
      var m = n,
        g = ai(e),
        b = [];
      t: {
        var v = rs.get(t);
        if (v !== void 0) {
          var h = Bu,
            M = t;
          switch (t) {
            case "keypress":
              if (Hu(e) === 0) break t;
            case "keydown":
            case "keyup":
              h = im;
              break;
            case "focusin":
              ((M = "focus"), (h = si));
              break;
            case "focusout":
              ((M = "blur"), (h = si));
              break;
            case "beforeblur":
            case "afterblur":
              h = si;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              h = Qf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              h = Wd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              h = sm;
              break;
            case cs:
            case fs:
            case ss:
              h = Fd;
              break;
            case os:
              h = rm;
              break;
            case "scroll":
            case "scrollend":
              h = Kd;
              break;
            case "wheel":
              h = mm;
              break;
            case "copy":
            case "cut":
            case "paste":
              h = Pd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              h = Lf;
              break;
            case "toggle":
            case "beforetoggle":
              h = ym;
          }
          var N = (l & 4) !== 0,
            it = !N && (t === "scroll" || t === "scrollend"),
            r = N ? (v !== null ? v + "Capture" : null) : v;
          N = [];
          for (var s = m, d; s !== null; ) {
            var p = s;
            if (
              ((d = p.stateNode),
              (p = p.tag),
              (p !== 5 && p !== 26 && p !== 27) ||
                d === null ||
                r === null ||
                ((p = Ha(s, r)), p != null && N.push(ru(s, p, d))),
              it)
            )
              break;
            s = s.return;
          }
          0 < N.length &&
            ((v = new h(v, M, null, e, g)), b.push({ event: v, listeners: N }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (
            ((v = t === "mouseover" || t === "pointerover"),
            (h = t === "mouseout" || t === "pointerout"),
            v &&
              e !== ei &&
              (M = e.relatedTarget || e.fromElement) &&
              (Ze(M) || M[Le]))
          )
            break t;
          if (
            (h || v) &&
            ((v =
              g.window === g
                ? g
                : (v = g.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            h
              ? ((M = e.relatedTarget || e.toElement),
                (h = m),
                (M = M ? Ze(M) : null),
                M !== null &&
                  ((it = W(M)),
                  (N = M.tag),
                  M !== it || (N !== 5 && N !== 27 && N !== 6)) &&
                  (M = null))
              : ((h = null), (M = m)),
            h !== M)
          ) {
            if (
              ((N = Qf),
              (p = "onMouseLeave"),
              (r = "onMouseEnter"),
              (s = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((N = Lf),
                (p = "onPointerLeave"),
                (r = "onPointerEnter"),
                (s = "pointer")),
              (it = h == null ? v : Ua(h)),
              (d = M == null ? v : Ua(M)),
              (v = new N(p, s + "leave", h, e, g)),
              (v.target = it),
              (v.relatedTarget = d),
              (p = null),
              Ze(g) === m &&
                ((N = new N(r, s + "enter", M, e, g)),
                (N.target = d),
                (N.relatedTarget = it),
                (p = N)),
              (it = p),
              h && M)
            )
              l: {
                for (N = vv, r = h, s = M, d = 0, p = r; p; p = N(p)) d++;
                p = 0;
                for (var R = s; R; R = N(R)) p++;
                for (; 0 < d - p; ) ((r = N(r)), d--);
                for (; 0 < p - d; ) ((s = N(s)), p--);
                for (; d--; ) {
                  if (r === s || (s !== null && r === s.alternate)) {
                    N = r;
                    break l;
                  }
                  ((r = N(r)), (s = N(s)));
                }
                N = null;
              }
            else N = null;
            (h !== null && Br(b, v, h, N, !1),
              M !== null && it !== null && Br(b, it, M, N, !0));
          }
        }
        t: {
          if (
            ((v = m ? Ua(m) : window),
            (h = v.nodeName && v.nodeName.toLowerCase()),
            h === "select" || (h === "input" && v.type === "file"))
          )
            var $ = $f;
          else if (Wf(v))
            if (Ff) $ = Mm;
            else {
              $ = Em;
              var _ = Am;
            }
          else
            ((h = v.nodeName),
              !h ||
              h.toLowerCase() !== "input" ||
              (v.type !== "checkbox" && v.type !== "radio")
                ? m && li(m.elementType) && ($ = $f)
                : ($ = zm));
          if ($ && ($ = $(t, m))) {
            kf(b, $, e, g);
            break t;
          }
          (_ && _(t, v, m),
            t === "focusout" &&
              m &&
              v.type === "number" &&
              m.memoizedProps.value != null &&
              ti(v, "number", v.value));
        }
        switch (((_ = m ? Ua(m) : window), t)) {
          case "focusin":
            (Wf(_) || _.contentEditable === "true") &&
              ((Ie = _), (yi = m), (Qa = null));
            break;
          case "focusout":
            Qa = yi = Ie = null;
            break;
          case "mousedown":
            hi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((hi = !1), ns(b, e, g));
            break;
          case "selectionchange":
            if (Dm) break;
          case "keydown":
          case "keyup":
            ns(b, e, g);
        }
        var G;
        if (ri)
          t: {
            switch (t) {
              case "compositionstart":
                var K = "onCompositionStart";
                break t;
              case "compositionend":
                K = "onCompositionEnd";
                break t;
              case "compositionupdate":
                K = "onCompositionUpdate";
                break t;
            }
            K = void 0;
          }
        else
          Fe
            ? Kf(t, e) && (K = "onCompositionEnd")
            : t === "keydown" &&
              e.keyCode === 229 &&
              (K = "onCompositionStart");
        (K &&
          (Zf &&
            e.locale !== "ko" &&
            (Fe || K !== "onCompositionStart"
              ? K === "onCompositionEnd" && Fe && (G = xf())
              : ((Fl = g),
                (ii = "value" in Fl ? Fl.value : Fl.textContent),
                (Fe = !0))),
          (_ = Mn(m, K)),
          0 < _.length &&
            ((K = new Xf(K, t, null, e, g)),
            b.push({ event: K, listeners: _ }),
            G ? (K.data = G) : ((G = wf(e)), G !== null && (K.data = G)))),
          (G = gm ? Sm(t, e) : pm(t, e)) &&
            ((K = Mn(m, "onBeforeInput")),
            0 < K.length &&
              ((_ = new Xf("onBeforeInput", "beforeinput", null, e, g)),
              b.push({ event: _, listeners: K }),
              (_.data = G))),
          ov(b, t, m, e, g));
      }
      Hr(b, l);
    });
  }
  function ru(t, l, e) {
    return { instance: t, listener: l, currentTarget: e };
  }
  function Mn(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var u = t,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Ha(t, e)),
          u != null && a.unshift(ru(t, u, n)),
          (u = Ha(t, l)),
          u != null && a.push(ru(t, u, n))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function vv(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Br(t, l, e, a, u) {
    for (var n = l._reactName, i = []; e !== null && e !== a; ) {
      var c = e,
        f = c.alternate,
        m = c.stateNode;
      if (((c = c.tag), f !== null && f === a)) break;
      ((c !== 5 && c !== 26 && c !== 27) ||
        m === null ||
        ((f = m),
        u
          ? ((m = Ha(e, n)), m != null && i.unshift(ru(e, m, f)))
          : u || ((m = Ha(e, n)), m != null && i.push(ru(e, m, f)))),
        (e = e.return));
    }
    i.length !== 0 && t.push({ event: l, listeners: i });
  }
  var yv = /\r\n?/g,
    hv = /\u0000|\uFFFD/g;
  function qr(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        yv,
        `
`,
      )
      .replace(hv, "");
  }
  function jr(t, l) {
    return ((l = qr(l)), qr(t) === l);
  }
  function nt(t, l, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string"
          ? l === "body" || (l === "textarea" && a === "") || We(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            l !== "body" &&
            We(t, "" + a);
        break;
      case "className":
        _u(t, "class", a);
        break;
      case "tabIndex":
        _u(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        _u(t, e, a);
        break;
      case "style":
        qf(t, a, n);
        break;
      case "data":
        if (l !== "object") {
          _u(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(e);
          break;
        }
        ((a = Ru("" + a)), t.setAttribute(e, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (e === "formAction"
              ? (l !== "input" && nt(t, l, "name", u.name, u, null),
                nt(t, l, "formEncType", u.formEncType, u, null),
                nt(t, l, "formMethod", u.formMethod, u, null),
                nt(t, l, "formTarget", u.formTarget, u, null))
              : (nt(t, l, "encType", u.encType, u, null),
                nt(t, l, "method", u.method, u, null),
                nt(t, l, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        ((a = Ru("" + a)), t.setAttribute(e, a));
        break;
      case "onClick":
        a != null && (t.onclick = Hl);
        break;
      case "onScroll":
        a != null && V("scroll", t);
        break;
      case "onScrollEnd":
        a != null && V("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(y(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(y(60));
            t.innerHTML = e;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((e = Ru("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(e, "" + a)
          : t.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(e, "")
          : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(e, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? t.setAttribute(e, a)
            : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(e, a)
          : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(e)
          : t.setAttribute(e, a);
        break;
      case "popover":
        (V("beforetoggle", t), V("toggle", t), Du(t, "popover", a));
        break;
      case "xlinkActuate":
        Ul(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Ul(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Ul(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Ul(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Ul(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Ul(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Ul(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Ul(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Ul(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Du(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = Vd.get(e) || e), Du(t, e, a));
    }
  }
  function Xc(t, l, e, a, u, n) {
    switch (e) {
      case "style":
        qf(t, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(y(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(y(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? We(t, a)
          : (typeof a == "number" || typeof a == "bigint") && We(t, "" + a);
        break;
      case "onScroll":
        a != null && V("scroll", t);
        break;
      case "onScrollEnd":
        a != null && V("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Hl);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Of.hasOwnProperty(e))
          t: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((u = e.endsWith("Capture")),
              (l = e.slice(2, u ? e.length - 7 : void 0)),
              (n = t[Kt] || null),
              (n = n != null ? n[e] : null),
              typeof n == "function" && t.removeEventListener(l, n, u),
              typeof a == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (e in t
                  ? (t[e] = null)
                  : t.hasAttribute(e) && t.removeAttribute(e)),
                t.addEventListener(l, a, u));
              break t;
            }
            e in t
              ? (t[e] = a)
              : a === !0
                ? t.setAttribute(e, "")
                : Du(t, e, a);
          }
    }
  }
  function Gt(t, l, e) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (V("error", t), V("load", t));
        var a = !1,
          u = !1,
          n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(y(137, l));
                default:
                  nt(t, l, n, i, e, null);
              }
          }
        (u && nt(t, l, "srcSet", e.srcSet, e, null),
          a && nt(t, l, "src", e.src, e, null));
        return;
      case "input":
        V("invalid", t);
        var c = (n = i = u = null),
          f = null,
          m = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var g = e[a];
            if (g != null)
              switch (a) {
                case "name":
                  u = g;
                  break;
                case "type":
                  i = g;
                  break;
                case "checked":
                  f = g;
                  break;
                case "defaultChecked":
                  m = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null) throw Error(y(137, l));
                  break;
                default:
                  nt(t, l, a, g, e, null);
              }
          }
        Uf(t, n, c, f, m, i, u, !1);
        return;
      case "select":
        (V("invalid", t), (a = i = n = null));
        for (u in e)
          if (e.hasOwnProperty(u) && ((c = e[u]), c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                nt(t, l, u, c, e, null);
            }
        ((l = n),
          (e = i),
          (t.multiple = !!a),
          l != null ? we(t, !!a, l, !1) : e != null && we(t, !!a, e, !0));
        return;
      case "textarea":
        (V("invalid", t), (n = u = a = null));
        for (i in e)
          if (e.hasOwnProperty(i) && ((c = e[i]), c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(y(91));
                break;
              default:
                nt(t, l, i, c, e, null);
            }
        Nf(t, a, u, n);
        return;
      case "option":
        for (f in e)
          e.hasOwnProperty(f) &&
            ((a = e[f]), a != null) &&
            (f === "selected"
              ? (t.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : nt(t, l, f, a, e, null));
        return;
      case "dialog":
        (V("beforetoggle", t), V("toggle", t), V("cancel", t), V("close", t));
        break;
      case "iframe":
      case "object":
        V("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ou.length; a++) V(ou[a], t);
        break;
      case "image":
        (V("error", t), V("load", t));
        break;
      case "details":
        V("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (V("error", t), V("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (m in e)
          if (e.hasOwnProperty(m) && ((a = e[m]), a != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(y(137, l));
              default:
                nt(t, l, m, a, e, null);
            }
        return;
      default:
        if (li(l)) {
          for (g in e)
            e.hasOwnProperty(g) &&
              ((a = e[g]), a !== void 0 && Xc(t, l, g, a, e, void 0));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && ((a = e[c]), a != null && nt(t, l, c, a, e, null));
  }
  function gv(t, l, e, a) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          i = null,
          c = null,
          f = null,
          m = null,
          g = null;
        for (h in e) {
          var b = e[h];
          if (e.hasOwnProperty(h) && b != null)
            switch (h) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = b;
              default:
                a.hasOwnProperty(h) || nt(t, l, h, null, a, b);
            }
        }
        for (var v in a) {
          var h = a[v];
          if (((b = e[v]), a.hasOwnProperty(v) && (h != null || b != null)))
            switch (v) {
              case "type":
                n = h;
                break;
              case "name":
                u = h;
                break;
              case "checked":
                m = h;
                break;
              case "defaultChecked":
                g = h;
                break;
              case "value":
                i = h;
                break;
              case "defaultValue":
                c = h;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(y(137, l));
                break;
              default:
                h !== b && nt(t, l, v, h, a, b);
            }
        }
        Pn(t, i, c, f, m, g, n, u);
        return;
      case "select":
        h = i = c = v = null;
        for (n in e)
          if (((f = e[n]), e.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                h = f;
              default:
                a.hasOwnProperty(n) || nt(t, l, n, null, a, f);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (f = e[u]),
            a.hasOwnProperty(u) && (n != null || f != null))
          )
            switch (u) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== f && nt(t, l, u, n, a, f);
            }
        ((l = c),
          (e = i),
          (a = h),
          v != null
            ? we(t, !!e, v, !1)
            : !!a != !!e &&
              (l != null ? we(t, !!e, l, !0) : we(t, !!e, e ? [] : "", !1)));
        return;
      case "textarea":
        h = v = null;
        for (c in e)
          if (
            ((u = e[c]),
            e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                nt(t, l, c, null, a, u);
            }
        for (i in a)
          if (
            ((u = a[i]),
            (n = e[i]),
            a.hasOwnProperty(i) && (u != null || n != null))
          )
            switch (i) {
              case "value":
                v = u;
                break;
              case "defaultValue":
                h = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(y(91));
                break;
              default:
                u !== n && nt(t, l, i, u, a, n);
            }
        Hf(t, v, h);
        return;
      case "option":
        for (var M in e)
          ((v = e[M]),
            e.hasOwnProperty(M) &&
              v != null &&
              !a.hasOwnProperty(M) &&
              (M === "selected" ? (t.selected = !1) : nt(t, l, M, null, a, v)));
        for (f in a)
          ((v = a[f]),
            (h = e[f]),
            a.hasOwnProperty(f) &&
              v !== h &&
              (v != null || h != null) &&
              (f === "selected"
                ? (t.selected =
                    v && typeof v != "function" && typeof v != "symbol")
                : nt(t, l, f, v, a, h)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var N in e)
          ((v = e[N]),
            e.hasOwnProperty(N) &&
              v != null &&
              !a.hasOwnProperty(N) &&
              nt(t, l, N, null, a, v));
        for (m in a)
          if (
            ((v = a[m]),
            (h = e[m]),
            a.hasOwnProperty(m) && v !== h && (v != null || h != null))
          )
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(y(137, l));
                break;
              default:
                nt(t, l, m, v, a, h);
            }
        return;
      default:
        if (li(l)) {
          for (var it in e)
            ((v = e[it]),
              e.hasOwnProperty(it) &&
                v !== void 0 &&
                !a.hasOwnProperty(it) &&
                Xc(t, l, it, void 0, a, v));
          for (g in a)
            ((v = a[g]),
              (h = e[g]),
              !a.hasOwnProperty(g) ||
                v === h ||
                (v === void 0 && h === void 0) ||
                Xc(t, l, g, v, a, h));
          return;
        }
    }
    for (var r in e)
      ((v = e[r]),
        e.hasOwnProperty(r) &&
          v != null &&
          !a.hasOwnProperty(r) &&
          nt(t, l, r, null, a, v));
    for (b in a)
      ((v = a[b]),
        (h = e[b]),
        !a.hasOwnProperty(b) ||
          v === h ||
          (v == null && h == null) ||
          nt(t, l, b, v, a, h));
  }
  function Yr(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Sv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, l = 0, e = performance.getEntriesByType("resource"), a = 0;
        a < e.length;
        a++
      ) {
        var u = e[a],
          n = u.transferSize,
          i = u.initiatorType,
          c = u.duration;
        if (n && c && Yr(i)) {
          for (i = 0, c = u.responseEnd, a += 1; a < e.length; a++) {
            var f = e[a],
              m = f.startTime;
            if (m > c) break;
            var g = f.transferSize,
              b = f.initiatorType;
            g &&
              Yr(b) &&
              ((f = f.responseEnd), (i += g * (f < c ? 1 : (c - m) / (f - m))));
          }
          if ((--a, (l += (8 * (n + i)) / (u.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Lc = null,
    Zc = null;
  function On(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function xr(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gr(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function Vc(t, l) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof l.children == "string" ||
      typeof l.children == "number" ||
      typeof l.children == "bigint" ||
      (typeof l.dangerouslySetInnerHTML == "object" &&
        l.dangerouslySetInnerHTML !== null &&
        l.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Jc = null;
  function pv() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Jc
        ? !1
        : ((Jc = t), !0)
      : ((Jc = null), !1);
  }
  var Qr = typeof setTimeout == "function" ? setTimeout : void 0,
    bv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Xr = typeof Promise == "function" ? Promise : void 0,
    Tv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Xr < "u"
          ? function (t) {
              return Xr.resolve(null).then(t).catch(Av);
            }
          : Qr;
  function Av(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ve(t) {
    return t === "head";
  }
  function Lr(t, l) {
    var e = l,
      a = 0;
    do {
      var u = e.nextSibling;
      if ((t.removeChild(e), u && u.nodeType === 8))
        if (((e = u.data), e === "/$" || e === "/&")) {
          if (a === 0) {
            (t.removeChild(u), Ma(l));
            return;
          }
          a--;
        } else if (
          e === "$" ||
          e === "$?" ||
          e === "$~" ||
          e === "$!" ||
          e === "&"
        )
          a++;
        else if (e === "html") du(t.ownerDocument.documentElement);
        else if (e === "head") {
          ((e = t.ownerDocument.head), du(e));
          for (var n = e.firstChild; n; ) {
            var i = n.nextSibling,
              c = n.nodeName;
            (n[Ra] ||
              c === "SCRIPT" ||
              c === "STYLE" ||
              (c === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              e.removeChild(n),
              (n = i));
          }
        } else e === "body" && du(t.ownerDocument.body);
      e = u;
    } while (e);
    Ma(l);
  }
  function Zr(t, l) {
    var e = t;
    t = 0;
    do {
      var a = e.nextSibling;
      if (
        (e.nodeType === 1
          ? l
            ? ((e._stashedDisplay = e.style.display),
              (e.style.display = "none"))
            : ((e.style.display = e._stashedDisplay || ""),
              e.getAttribute("style") === "" && e.removeAttribute("style"))
          : e.nodeType === 3 &&
            (l
              ? ((e._stashedText = e.nodeValue), (e.nodeValue = ""))
              : (e.nodeValue = e._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((e = a.data), e === "/$")) {
          if (t === 0) break;
          t--;
        } else (e !== "$" && e !== "$?" && e !== "$~" && e !== "$!") || t++;
      e = a;
    } while (e);
  }
  function Kc(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (((l = l.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Kc(e), Fn(e));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function Ev(t, l, e, a) {
    for (; t.nodeType === 1; ) {
      var u = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Ra])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((n = t.getAttribute("rel")),
                n === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((n = t.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === n) return t;
      } else return t;
      if (((t = pl(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function zv(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = pl(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Vr(t, l) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = pl(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function wc(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Wc(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function Mv(t, l) {
    var e = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = l;
    else if (t.data !== "$?" || e.readyState !== "loading") l();
    else {
      var a = function () {
        (l(), e.removeEventListener("DOMContentLoaded", a));
      };
      (e.addEventListener("DOMContentLoaded", a), (t._reactRetry = a));
    }
  }
  function pl(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (
          ((l = t.data),
          l === "$" ||
            l === "$!" ||
            l === "$?" ||
            l === "$~" ||
            l === "&" ||
            l === "F!" ||
            l === "F")
        )
          break;
        if (l === "/$" || l === "/&") return null;
      }
    }
    return t;
  }
  var kc = null;
  function Jr(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "/$" || e === "/&") {
          if (l === 0) return pl(t.nextSibling);
          l--;
        } else
          (e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&") ||
            l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Kr(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (l === 0) return t;
          l--;
        } else (e !== "/$" && e !== "/&") || l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function wr(t, l, e) {
    switch (((l = On(e)), t)) {
      case "html":
        if (((t = l.documentElement), !t)) throw Error(y(452));
        return t;
      case "head":
        if (((t = l.head), !t)) throw Error(y(453));
        return t;
      case "body":
        if (((t = l.body), !t)) throw Error(y(454));
        return t;
      default:
        throw Error(y(451));
    }
  }
  function du(t) {
    for (var l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
    Fn(t);
  }
  var bl = new Map(),
    Wr = new Set();
  function Dn(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var Wl = E.d;
  E.d = { f: Ov, r: Dv, D: _v, C: Cv, L: Rv, m: Uv, X: Nv, S: Hv, M: Bv };
  function Ov() {
    var t = Wl.f(),
      l = Sn();
    return t || l;
  }
  function Dv(t) {
    var l = Ve(t);
    l !== null && l.tag === 5 && l.type === "form" ? oo(l) : Wl.r(t);
  }
  var Aa = typeof document > "u" ? null : document;
  function kr(t, l, e) {
    var a = Aa;
    if (a && typeof l == "string" && l) {
      var u = dl(l);
      ((u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
        Wr.has(u) ||
          (Wr.add(u),
          (t = { rel: t, crossOrigin: e, href: l }),
          a.querySelector(u) === null &&
            ((l = a.createElement("link")),
            Gt(l, "link", t),
            Ct(l),
            a.head.appendChild(l))));
    }
  }
  function _v(t) {
    (Wl.D(t), kr("dns-prefetch", t, null));
  }
  function Cv(t, l) {
    (Wl.C(t, l), kr("preconnect", t, l));
  }
  function Rv(t, l, e) {
    Wl.L(t, l, e);
    var a = Aa;
    if (a && t && l) {
      var u = 'link[rel="preload"][as="' + dl(l) + '"]';
      l === "image" && e && e.imageSrcSet
        ? ((u += '[imagesrcset="' + dl(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (u += '[imagesizes="' + dl(e.imageSizes) + '"]'))
        : (u += '[href="' + dl(t) + '"]');
      var n = u;
      switch (l) {
        case "style":
          n = Ea(t);
          break;
        case "script":
          n = za(t);
      }
      bl.has(n) ||
        ((t = U(
          {
            rel: "preload",
            href: l === "image" && e && e.imageSrcSet ? void 0 : t,
            as: l,
          },
          e,
        )),
        bl.set(n, t),
        a.querySelector(u) !== null ||
          (l === "style" && a.querySelector(mu(n))) ||
          (l === "script" && a.querySelector(vu(n))) ||
          ((l = a.createElement("link")),
          Gt(l, "link", t),
          Ct(l),
          a.head.appendChild(l)));
    }
  }
  function Uv(t, l) {
    Wl.m(t, l);
    var e = Aa;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script",
        u =
          'link[rel="modulepreload"][as="' + dl(a) + '"][href="' + dl(t) + '"]',
        n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = za(t);
      }
      if (
        !bl.has(n) &&
        ((t = U({ rel: "modulepreload", href: t }, l)),
        bl.set(n, t),
        e.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(vu(n))) return;
        }
        ((a = e.createElement("link")),
          Gt(a, "link", t),
          Ct(a),
          e.head.appendChild(a));
      }
    }
  }
  function Hv(t, l, e) {
    Wl.S(t, l, e);
    var a = Aa;
    if (a && t) {
      var u = Je(a).hoistableStyles,
        n = Ea(t);
      l = l || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = a.querySelector(mu(n)))) c.loading = 5;
        else {
          ((t = U({ rel: "stylesheet", href: t, "data-precedence": l }, e)),
            (e = bl.get(n)) && $c(t, e));
          var f = (i = a.createElement("link"));
          (Ct(f),
            Gt(f, "link", t),
            (f._p = new Promise(function (m, g) {
              ((f.onload = m), (f.onerror = g));
            })),
            f.addEventListener("load", function () {
              c.loading |= 1;
            }),
            f.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            _n(i, l, a));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: c }),
          u.set(n, i));
      }
    }
  }
  function Nv(t, l) {
    Wl.X(t, l);
    var e = Aa;
    if (e && t) {
      var a = Je(e).hoistableScripts,
        u = za(t),
        n = a.get(u);
      n ||
        ((n = e.querySelector(vu(u))),
        n ||
          ((t = U({ src: t, async: !0 }, l)),
          (l = bl.get(u)) && Fc(t, l),
          (n = e.createElement("script")),
          Ct(n),
          Gt(n, "link", t),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function Bv(t, l) {
    Wl.M(t, l);
    var e = Aa;
    if (e && t) {
      var a = Je(e).hoistableScripts,
        u = za(t),
        n = a.get(u);
      n ||
        ((n = e.querySelector(vu(u))),
        n ||
          ((t = U({ src: t, async: !0, type: "module" }, l)),
          (l = bl.get(u)) && Fc(t, l),
          (n = e.createElement("script")),
          Ct(n),
          Gt(n, "link", t),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function $r(t, l, e, a) {
    var u = (u = L.current) ? Dn(u) : null;
    if (!u) throw Error(y(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((l = Ea(e.href)),
            (e = Je(u).hoistableStyles),
            (a = e.get(l)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              e.set(l, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          t = Ea(e.href);
          var n = Je(u).hoistableStyles,
            i = n.get(t);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(t, i),
              (n = u.querySelector(mu(t))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              bl.has(t) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                bl.set(t, e),
                n || qv(u, t, e, i.state))),
            l && a === null)
          )
            throw Error(y(528, ""));
          return i;
        }
        if (l && a !== null) throw Error(y(529, ""));
        return null;
      case "script":
        return (
          (l = e.async),
          (e = e.src),
          typeof e == "string" &&
          l &&
          typeof l != "function" &&
          typeof l != "symbol"
            ? ((l = za(e)),
              (e = Je(u).hoistableScripts),
              (a = e.get(l)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(l, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(y(444, t));
    }
  }
  function Ea(t) {
    return 'href="' + dl(t) + '"';
  }
  function mu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Fr(t) {
    return U({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function qv(t, l, e, a) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]")
      ? (a.loading = 1)
      : ((l = t.createElement("link")),
        (a.preload = l),
        l.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        l.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Gt(l, "link", e),
        Ct(l),
        t.head.appendChild(l));
  }
  function za(t) {
    return '[src="' + dl(t) + '"]';
  }
  function vu(t) {
    return "script[async]" + t;
  }
  function Ir(t, l, e) {
    if ((l.count++, l.instance === null))
      switch (l.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + dl(e.href) + '"]');
          if (a) return ((l.instance = a), Ct(a), a);
          var u = U({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Ct(a),
            Gt(a, "style", u),
            _n(a, e.precedence, t),
            (l.instance = a)
          );
        case "stylesheet":
          u = Ea(e.href);
          var n = t.querySelector(mu(u));
          if (n) return ((l.state.loading |= 4), (l.instance = n), Ct(n), n);
          ((a = Fr(e)),
            (u = bl.get(u)) && $c(a, u),
            (n = (t.ownerDocument || t).createElement("link")),
            Ct(n));
          var i = n;
          return (
            (i._p = new Promise(function (c, f) {
              ((i.onload = c), (i.onerror = f));
            })),
            Gt(n, "link", a),
            (l.state.loading |= 4),
            _n(n, e.precedence, t),
            (l.instance = n)
          );
        case "script":
          return (
            (n = za(e.src)),
            (u = t.querySelector(vu(n)))
              ? ((l.instance = u), Ct(u), u)
              : ((a = e),
                (u = bl.get(n)) && ((a = U({}, e)), Fc(a, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                Ct(u),
                Gt(u, "link", a),
                t.head.appendChild(u),
                (l.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(y(443, l.type));
      }
    else
      l.type === "stylesheet" &&
        (l.state.loading & 4) === 0 &&
        ((a = l.instance), (l.state.loading |= 4), _n(a, e.precedence, t));
    return l.instance;
  }
  function _n(t, l, e) {
    for (
      var a = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        i = 0;
      i < a.length;
      i++
    ) {
      var c = a[i];
      if (c.dataset.precedence === l) n = c;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(t, n.nextSibling)
      : ((l = e.nodeType === 9 ? e.head : e), l.insertBefore(t, l.firstChild));
  }
  function $c(t, l) {
    (t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.title == null && (t.title = l.title));
  }
  function Fc(t, l) {
    (t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.integrity == null && (t.integrity = l.integrity));
  }
  var Cn = null;
  function Pr(t, l, e) {
    if (Cn === null) {
      var a = new Map(),
        u = (Cn = new Map());
      u.set(e, a);
    } else ((u = Cn), (a = u.get(e)), a || ((a = new Map()), u.set(e, a)));
    if (a.has(t)) return a;
    for (
      a.set(t, null), e = e.getElementsByTagName(t), u = 0;
      u < e.length;
      u++
    ) {
      var n = e[u];
      if (
        !(
          n[Ra] ||
          n[qt] ||
          (t === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(l) || "";
        i = t + i;
        var c = a.get(i);
        c ? c.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function td(t, l, e) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        e,
        l === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function jv(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof l.precedence != "string" ||
          typeof l.href != "string" ||
          l.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof l.rel != "string" ||
          typeof l.href != "string" ||
          l.href === "" ||
          l.onLoad ||
          l.onError
        )
          break;
        return l.rel === "stylesheet"
          ? ((t = l.disabled), typeof l.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          l.async &&
          typeof l.async != "function" &&
          typeof l.async != "symbol" &&
          !l.onLoad &&
          !l.onError &&
          l.src &&
          typeof l.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function ld(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Yv(t, l, e, a) {
    if (
      e.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var u = Ea(a.href),
          n = l.querySelector(mu(u));
        if (n) {
          ((l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (t.count++, (t = Rn.bind(t)), l.then(t, t)),
            (e.state.loading |= 4),
            (e.instance = n),
            Ct(n));
          return;
        }
        ((n = l.ownerDocument || l),
          (a = Fr(a)),
          (u = bl.get(u)) && $c(a, u),
          (n = n.createElement("link")),
          Ct(n));
        var i = n;
        ((i._p = new Promise(function (c, f) {
          ((i.onload = c), (i.onerror = f));
        })),
          Gt(n, "link", a),
          (e.instance = n));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(e, l),
        (l = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (t.count++,
          (e = Rn.bind(t)),
          l.addEventListener("load", e),
          l.addEventListener("error", e)));
    }
  }
  var Ic = 0;
  function xv(t, l) {
    return (
      t.stylesheets && t.count === 0 && Hn(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (e) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Hn(t, t.stylesheets), t.unsuspend)) {
                var n = t.unsuspend;
                ((t.unsuspend = null), n());
              }
            }, 6e4 + l);
            0 < t.imgBytes && Ic === 0 && (Ic = 62500 * Sv());
            var u = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && Hn(t, t.stylesheets), t.unsuspend))
                ) {
                  var n = t.unsuspend;
                  ((t.unsuspend = null), n());
                }
              },
              (t.imgBytes > Ic ? 50 : 800) + l,
            );
            return (
              (t.unsuspend = e),
              function () {
                ((t.unsuspend = null), clearTimeout(a), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function Rn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Hn(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Un = null;
  function Hn(t, l) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Un = new Map()),
        l.forEach(Gv, t),
        (Un = null),
        Rn.call(t)));
  }
  function Gv(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Un.get(t);
      if (e) var a = e.get(null);
      else {
        ((e = new Map()), Un.set(t, e));
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (e.set(i.dataset.precedence, i), (a = i));
        }
        a && e.set(null, a);
      }
      ((u = l.instance),
        (i = u.getAttribute("data-precedence")),
        (n = e.get(i) || a),
        n === a && e.set(null, u),
        e.set(i, u),
        this.count++,
        (a = Rn.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (l.state.loading |= 4));
    }
  }
  var yu = {
    $$typeof: vt,
    Provider: null,
    Consumer: null,
    _currentValue: B,
    _currentValue2: B,
    _threadCount: 0,
  };
  function Qv(t, l, e, a, u, n, i, c, f) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = wn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = wn(0)),
      (this.hiddenUpdates = wn(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map()));
  }
  function ed(t, l, e, a, u, n, i, c, f, m, g, b) {
    return (
      (t = new Qv(t, l, e, i, f, m, g, b, c)),
      (l = 1),
      n === !0 && (l |= 24),
      (n = ul(3, null, null, l)),
      (t.current = n),
      (n.stateNode = t),
      (l = Ui()),
      l.refCount++,
      (t.pooledCache = l),
      l.refCount++,
      (n.memoizedState = { element: a, isDehydrated: e, cache: l }),
      qi(n),
      t
    );
  }
  function ad(t) {
    return t ? ((t = la), t) : la;
  }
  function ud(t, l, e, a, u, n) {
    ((u = ad(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = ae(l)),
      (a.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (e = ue(t, a, l)),
      e !== null && (It(e, t, l), wa(e, t, l)));
  }
  function nd(t, l) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function Pc(t, l) {
    (nd(t, l), (t = t.alternate) && nd(t, l));
  }
  function id(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = De(t, 67108864);
      (l !== null && It(l, t, 67108864), Pc(t, 67108864));
    }
  }
  function cd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = sl();
      l = Wn(l);
      var e = De(t, l);
      (e !== null && It(e, t, l), Pc(t, l));
    }
  }
  var Nn = !0;
  function Xv(t, l, e, a) {
    var u = S.T;
    S.T = null;
    var n = E.p;
    try {
      ((E.p = 2), tf(t, l, e, a));
    } finally {
      ((E.p = n), (S.T = u));
    }
  }
  function Lv(t, l, e, a) {
    var u = S.T;
    S.T = null;
    var n = E.p;
    try {
      ((E.p = 8), tf(t, l, e, a));
    } finally {
      ((E.p = n), (S.T = u));
    }
  }
  function tf(t, l, e, a) {
    if (Nn) {
      var u = lf(a);
      if (u === null) (Qc(t, l, a, Bn, e), sd(t, a));
      else if (Vv(u, t, l, e, a)) a.stopPropagation();
      else if ((sd(t, a), l & 4 && -1 < Zv.indexOf(t))) {
        for (; u !== null; ) {
          var n = Ve(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = Ae(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << (31 - el(i));
                      ((c.entanglements[1] |= f), (i &= ~f));
                    }
                    (Cl(n), (I & 6) === 0 && ((hn = tl() + 500), su(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((c = De(n, 2)), c !== null && It(c, n, 2), Sn(), Pc(n, 2));
            }
          if (((n = lf(a)), n === null && Qc(t, l, a, Bn, e), n === u)) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else Qc(t, l, a, null, e);
    }
  }
  function lf(t) {
    return ((t = ai(t)), ef(t));
  }
  var Bn = null;
  function ef(t) {
    if (((Bn = null), (t = Ze(t)), t !== null)) {
      var l = W(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (((t = ht(l)), t !== null)) return t;
          t = null;
        } else if (e === 31) {
          if (((t = Ut(l)), t !== null)) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return ((Bn = t), null);
  }
  function fd(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (_d()) {
          case yf:
            return 2;
          case hf:
            return 8;
          case Au:
          case Cd:
            return 32;
          case gf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var af = !1,
    ye = null,
    he = null,
    ge = null,
    hu = new Map(),
    gu = new Map(),
    Se = [],
    Zv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function sd(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        ye = null;
        break;
      case "dragenter":
      case "dragleave":
        he = null;
        break;
      case "mouseover":
      case "mouseout":
        ge = null;
        break;
      case "pointerover":
      case "pointerout":
        hu.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gu.delete(l.pointerId);
    }
  }
  function Su(t, l, e, a, u, n) {
    return t === null || t.nativeEvent !== n
      ? ((t = {
          blockedOn: l,
          domEventName: e,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [u],
        }),
        l !== null && ((l = Ve(l)), l !== null && id(l)),
        t)
      : ((t.eventSystemFlags |= a),
        (l = t.targetContainers),
        u !== null && l.indexOf(u) === -1 && l.push(u),
        t);
  }
  function Vv(t, l, e, a, u) {
    switch (l) {
      case "focusin":
        return ((ye = Su(ye, t, l, e, a, u)), !0);
      case "dragenter":
        return ((he = Su(he, t, l, e, a, u)), !0);
      case "mouseover":
        return ((ge = Su(ge, t, l, e, a, u)), !0);
      case "pointerover":
        var n = u.pointerId;
        return (hu.set(n, Su(hu.get(n) || null, t, l, e, a, u)), !0);
      case "gotpointercapture":
        return (
          (n = u.pointerId),
          gu.set(n, Su(gu.get(n) || null, t, l, e, a, u)),
          !0
        );
    }
    return !1;
  }
  function od(t) {
    var l = Ze(t.target);
    if (l !== null) {
      var e = W(l);
      if (e !== null) {
        if (((l = e.tag), l === 13)) {
          if (((l = ht(e)), l !== null)) {
            ((t.blockedOn = l),
              Ef(t.priority, function () {
                cd(e);
              }));
            return;
          }
        } else if (l === 31) {
          if (((l = Ut(e)), l !== null)) {
            ((t.blockedOn = l),
              Ef(t.priority, function () {
                cd(e);
              }));
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function qn(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = lf(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var a = new e.constructor(e.type, e);
        ((ei = a), e.target.dispatchEvent(a), (ei = null));
      } else return ((l = Ve(e)), l !== null && id(l), (t.blockedOn = e), !1);
      l.shift();
    }
    return !0;
  }
  function rd(t, l, e) {
    qn(t) && e.delete(l);
  }
  function Jv() {
    ((af = !1),
      ye !== null && qn(ye) && (ye = null),
      he !== null && qn(he) && (he = null),
      ge !== null && qn(ge) && (ge = null),
      hu.forEach(rd),
      gu.forEach(rd));
  }
  function jn(t, l) {
    t.blockedOn === l &&
      ((t.blockedOn = null),
      af ||
        ((af = !0),
        O.unstable_scheduleCallback(O.unstable_NormalPriority, Jv)));
  }
  var Yn = null;
  function dd(t) {
    Yn !== t &&
      ((Yn = t),
      O.unstable_scheduleCallback(O.unstable_NormalPriority, function () {
        Yn === t && (Yn = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l],
            a = t[l + 1],
            u = t[l + 2];
          if (typeof a != "function") {
            if (ef(a || e) === null) continue;
            break;
          }
          var n = Ve(e);
          n !== null &&
            (t.splice(l, 3),
            (l -= 3),
            lc(n, { pending: !0, data: u, method: e.method, action: a }, a, u));
        }
      }));
  }
  function Ma(t) {
    function l(f) {
      return jn(f, t);
    }
    (ye !== null && jn(ye, t),
      he !== null && jn(he, t),
      ge !== null && jn(ge, t),
      hu.forEach(l),
      gu.forEach(l));
    for (var e = 0; e < Se.length; e++) {
      var a = Se[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Se.length && ((e = Se[0]), e.blockedOn === null); )
      (od(e), e.blockedOn === null && Se.shift());
    if (((e = (t.ownerDocument || t).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var u = e[a],
          n = e[a + 1],
          i = u[Kt] || null;
        if (typeof n == "function") i || dd(e);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[Kt] || null))) c = i.formAction;
            else if (ef(u) !== null) continue;
          } else c = i.action;
          (typeof c == "function" ? (e[a + 1] = c) : (e.splice(a, 3), (a -= 3)),
            dd(e));
        }
      }
  }
  function md() {
    function t(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (u = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function l() {
      (u !== null && (u(), (u = null)), a || setTimeout(e, 20));
    }
    function e() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", l),
        navigation.addEventListener("navigateerror", l),
        setTimeout(e, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", l),
            navigation.removeEventListener("navigateerror", l),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function uf(t) {
    this._internalRoot = t;
  }
  ((xn.prototype.render = uf.prototype.render =
    function (t) {
      var l = this._internalRoot;
      if (l === null) throw Error(y(409));
      var e = l.current,
        a = sl();
      ud(e, a, t, l, null, null);
    }),
    (xn.prototype.unmount = uf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var l = t.containerInfo;
          (ud(t.current, 2, null, t, null, null), Sn(), (l[Le] = null));
        }
      }));
  function xn(t) {
    this._internalRoot = t;
  }
  xn.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var l = Af();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < Se.length && l !== 0 && l < Se[e].priority; e++);
      (Se.splice(e, 0, t), e === 0 && od(t));
    }
  };
  var vd = mt.version;
  if (vd !== "19.2.4") throw Error(y(527, vd, "19.2.4"));
  E.findDOMNode = function (t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function"
        ? Error(y(188))
        : ((t = Object.keys(t).join(",")), Error(y(268, t)));
    return (
      (t = A(l)),
      (t = t !== null ? k(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Kv = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gn.isDisabled && Gn.supportsFiber)
      try {
        ((Da = Gn.inject(Kv)), (ll = Gn));
      } catch {}
  }
  return (
    (bu.createRoot = function (t, l) {
      if (!j(t)) throw Error(y(299));
      var e = !1,
        a = "",
        u = To,
        n = Ao,
        i = Eo;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (e = !0),
          l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (n = l.onCaughtError),
          l.onRecoverableError !== void 0 && (i = l.onRecoverableError)),
        (l = ed(t, 1, !1, null, null, e, a, null, u, n, i, md)),
        (t[Le] = l.current),
        Gc(t),
        new uf(l)
      );
    }),
    (bu.hydrateRoot = function (t, l, e) {
      if (!j(t)) throw Error(y(299));
      var a = !1,
        u = "",
        n = To,
        i = Ao,
        c = Eo,
        f = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
          e.formState !== void 0 && (f = e.formState)),
        (l = ed(t, 1, !0, l, e ?? null, a, u, f, n, i, c, md)),
        (l.context = ad(null)),
        (e = l.current),
        (a = sl()),
        (a = Wn(a)),
        (u = ae(a)),
        (u.callback = null),
        ue(e, u, a),
        (e = a),
        (l.current.lanes = e),
        Ca(l, e),
        Cl(l),
        (t[Le] = l.current),
        Gc(t),
        new xn(l)
      );
    }),
    (bu.version = "19.2.4"),
    bu
  );
}
var zd;
function ey() {
  if (zd) return ff.exports;
  zd = 1;
  function O() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (mt) {
        console.error(mt);
      }
  }
  return (O(), (ff.exports = ly()), ff.exports);
}
var ay = ey();
const Qn = [
  {
    id: "core-java",
    emoji: "☕",
    title: "Core Java Prerequisites",
    color: "#ea580c",
    lightBg: "#fff7ed",
    items: [
      "Generics & type erasure",
      "Functional interfaces & lambdas (Java 8+)",
      "Stream API — map, filter, reduce, collect",
      "Optional<T> — proper null-safe patterns",
      "CompletableFuture & async chains",
      "Java records (Java 16+)",
      "Sealed classes & pattern matching (Java 17+)",
      "Reflection API basics",
      "Annotations — creating custom annotations",
      "ClassLoader hierarchy & class loading",
      "JVM memory model — heap, stack, metaspace",
      "Garbage collection strategies (G1, ZGC, Shenandoah)",
      "Thread lifecycle & synchronization primitives",
      "java.util.concurrent — ExecutorService, locks, semaphores",
      "Virtual threads (Project Loom, Java 21)",
    ],
  },
  {
    id: "spring-core",
    emoji: "🌱",
    title: "Spring Core & IoC",
    color: "#16a34a",
    lightBg: "#f0fdf4",
    items: [
      "Inversion of Control (IoC) concept",
      "Dependency Injection — constructor vs setter vs field",
      "ApplicationContext vs BeanFactory",
      "Bean scopes — singleton, prototype, request, session, application",
      "Bean lifecycle — @PostConstruct, @PreDestroy, InitializingBean",
      "BeanDefinition & BeanDefinitionRegistry",
      "@Configuration vs @Component",
      "@Import, @ImportResource",
      "@Conditional & conditional bean registration",
      "BeanFactoryPostProcessor & BeanPostProcessor",
      "FactoryBean<T> pattern",
      "Aware interfaces — ApplicationContextAware, BeanNameAware",
      "Spring Expression Language (SpEL)",
      "@Profile for environment-based beans",
      "Lazy initialization — @Lazy",
      "Circular dependency problem & solutions",
      "@Primary and @Qualifier for ambiguous dependencies",
      "Stereotype annotations — @Component, @Service, @Repository, @Controller",
      "Component scanning — @ComponentScan, basePackages",
      "Environment abstraction & PropertySource",
    ],
  },
  {
    id: "spring-boot-fundamentals",
    emoji: "🚀",
    title: "Spring Boot Fundamentals",
    color: "#0d9488",
    lightBg: "#f0fdfa",
    items: [
      "Spring Boot vs Spring Framework — what Boot adds",
      "@SpringBootApplication — @EnableAutoConfiguration + @ComponentScan + @Configuration",
      "Auto-configuration mechanism — spring.factories / AutoConfiguration.imports",
      "Conditional annotations — @ConditionalOnClass, @ConditionalOnMissingBean, @ConditionalOnProperty",
      "Starter dependencies — what they bundle",
      "application.properties vs application.yml",
      "Externalized configuration hierarchy (15 levels)",
      "@ConfigurationProperties — binding typed config",
      "@Value — property injection & defaults",
      "Relaxed binding rules",
      "Configuration metadata & IDE support",
      "Profiles — spring.profiles.active, @ActiveProfiles",
      "Profile-specific property files",
      "SpringApplication customization",
      "ApplicationRunner & CommandLineRunner",
      "ApplicationEvent & ApplicationListener",
      "Banner customization",
      "Startup failure analysis — FailureAnalyzer",
      "Embedded server — Tomcat, Jetty, Undertow",
      "Spring Boot DevTools — live reload, classpath monitoring",
      "spring-boot-configuration-processor",
    ],
  },
  {
    id: "web-mvc",
    emoji: "🌐",
    title: "Spring MVC & REST APIs",
    color: "#ca8a04",
    lightBg: "#fefce8",
    items: [
      "DispatcherServlet request lifecycle",
      "HandlerMapping — RequestMappingHandlerMapping",
      "HandlerAdapter — RequestMappingHandlerAdapter",
      "@RequestMapping — method, path, consumes, produces",
      "@GetMapping, @PostMapping, @PutMapping, @PatchMapping, @DeleteMapping",
      "@PathVariable, @RequestParam, @RequestHeader, @CookieValue",
      "@RequestBody & @ResponseBody",
      "@RestController vs @Controller",
      "HttpMessageConverter — JSON (Jackson), XML",
      "Content negotiation strategies",
      "ResponseEntity<T> — full response control",
      "@ResponseStatus",
      "Validation — @Valid, @Validated, Bean Validation (Jakarta)",
      "Custom constraint annotations",
      "BindingResult & FieldError handling",
      "@ExceptionHandler — method-level",
      "@ControllerAdvice / @RestControllerAdvice — global exception handling",
      "ProblemDetail (RFC 7807) error responses",
      "ModelAndView & Thymeleaf (server-side rendering)",
      "Interceptors — HandlerInterceptor, preHandle/postHandle/afterCompletion",
      "@CrossOrigin & CORS global configuration",
      "Async controllers — @Async, DeferredResult, Callable",
      "Server-Sent Events (SSE) — SseEmitter",
      "Multipart file upload — @RequestPart, MultipartFile",
      "HTTP/2 support",
      "Static resources & resource handling",
      "ViewResolver configuration",
      "HATEOAS — Hypermedia-driven REST with spring-hateoas",
      "HAL, HAL-Forms representation",
      "WebMvcConfigurer — customizing MVC",
      "Filter vs Interceptor — differences & use cases",
      "OncePerRequestFilter",
    ],
  },
  {
    id: "data-access",
    emoji: "🗄️",
    title: "Data Access & Persistence",
    color: "#9333ea",
    lightBg: "#faf5ff",
    items: [
      "JDBC fundamentals — DataSource, JdbcTemplate",
      "NamedParameterJdbcTemplate",
      "Spring Data overview — repository abstraction",
      "JPA — Entity, @Table, @Column, @Id, @GeneratedValue",
      "JPA relationships — @OneToOne, @OneToMany, @ManyToMany, @JoinColumn",
      "Fetch types — EAGER vs LAZY",
      "Cascade types & orphanRemoval",
      "@Embeddable & @Embedded",
      "Entity lifecycle callbacks — @PrePersist, @PostLoad, etc.",
      "Spring Data JPA — JpaRepository, CrudRepository, PagingAndSortingRepository",
      "Query methods — method name derivation",
      "@Query — JPQL & native SQL",
      "@Modifying & @Transactional on queries",
      "Projections — interface-based, class-based (DTO)",
      "Specifications API — dynamic queries",
      "Querydsl integration",
      "Pagination & sorting — Pageable, Page<T>, Slice<T>",
      "Auditing — @CreatedDate, @LastModifiedDate, @EnableJpaAuditing",
      "Optimistic locking — @Version",
      "Pessimistic locking — LockModeType",
      "N+1 problem & solutions — @EntityGraph, JOIN FETCH",
      "Second-level cache — Ehcache, Caffeine with JPA",
      "Hibernate statistics & query logging",
      "Flyway — database migrations",
      "Liquibase — database changelogs",
      "Spring Data MongoDB",
      "Spring Data Redis — RedisTemplate, @Cacheable",
      "Spring Data Elasticsearch",
      "Spring Data R2DBC — reactive relational",
      "Connection pooling — HikariCP tuning",
      "Multiple datasource configuration",
      "Transaction management — @Transactional deep dive",
      "Transaction propagation — REQUIRED, REQUIRES_NEW, NESTED, etc.",
      "Transaction isolation levels",
      "Programmatic transactions — TransactionTemplate",
      "Distributed transactions — JTA, XA",
    ],
  },
  {
    id: "security",
    emoji: "🔐",
    title: "Spring Security",
    color: "#dc2626",
    lightBg: "#fef2f2",
    items: [
      "Security filter chain architecture",
      "DelegatingFilterProxy & FilterChainProxy",
      "SecurityContext & SecurityContextHolder",
      "Authentication object structure",
      "UserDetailsService & UserDetails",
      "PasswordEncoder — BCrypt, Argon2, SCrypt",
      "AuthenticationManager & AuthenticationProvider",
      "HttpSecurity configuration (Lambda DSL)",
      "Form login — custom login page",
      "HTTP Basic authentication",
      "Session management — stateless vs stateful",
      "CSRF protection — when to enable/disable",
      "CORS in security context",
      "Method security — @PreAuthorize, @PostAuthorize, @Secured",
      "@EnableMethodSecurity",
      "SpEL in security expressions",
      "Role vs Authority distinction",
      "JWT — generating & validating tokens",
      "JWT filter chain integration",
      "OAuth2 resource server — jwt() configuration",
      "OAuth2 login — social login (Google, GitHub)",
      "OAuth2 authorization server (Spring Authorization Server)",
      "OAuth2 client credentials flow",
      "Remember-me authentication",
      "Anonymous authentication",
      "IP-based access control",
      "Security event publishing & listening",
      "LDAP authentication",
      "Multi-tenancy security patterns",
      "ACL (Access Control Lists) for domain objects",
      "Security testing — @WithMockUser, @WithUserDetails",
      "Content Security Policy (CSP) headers",
      "HSTS, X-Frame-Options, XSS protection headers",
    ],
  },
  {
    id: "testing",
    emoji: "🧪",
    title: "Testing",
    color: "#ea580c",
    lightBg: "#fff7ed",
    items: [
      "Unit testing with JUnit 5 — @Test, @BeforeEach, @AfterEach",
      "JUnit 5 extensions — @ExtendWith",
      "Mockito — @Mock, @InjectMocks, @Spy, @Captor",
      "Mockito — when/thenReturn, doReturn, verify, ArgumentMatchers",
      "Mockito — stubbing void methods, exceptions",
      "AssertJ — fluent assertions",
      "@SpringBootTest — full application context",
      "@SpringBootTest webEnvironment modes",
      "@WebMvcTest — slice test for controllers",
      "@DataJpaTest — slice test for JPA",
      "@DataMongoTest, @DataRedisTest — slice tests",
      "@MockBean & @SpyBean",
      "TestRestTemplate & MockMvc",
      "MockMvc — perform, andExpect, andDo",
      "WebTestClient (reactive)",
      "@TestConfiguration — test-specific beans",
      "Testcontainers — real databases in tests",
      "Testcontainers Spring Boot integration",
      "@DynamicPropertySource",
      "WireMock — HTTP stub server",
      "Test slices vs full context — when to use each",
      "H2 in-memory database for tests",
      "SQL scripts in tests — @Sql",
      "Transaction rollback in tests — @Transactional",
      "@ActiveProfiles in tests",
      "Contract testing — Spring Cloud Contract",
      "Mutation testing — PIT",
      "Code coverage — JaCoCo",
      "Performance testing — JMH microbenchmarks",
      "Integration test best practices",
    ],
  },
  {
    id: "reactive",
    emoji: "⚡",
    title: "Reactive Programming & WebFlux",
    color: "#0891b2",
    lightBg: "#ecfeff",
    items: [
      "Reactive Streams specification — Publisher, Subscriber, Subscription",
      "Project Reactor — Mono<T> & Flux<T>",
      "Operators — map, flatMap, filter, zip, merge, concat",
      "Error handling — onErrorReturn, onErrorResume, retry",
      "Backpressure strategies",
      "Schedulers — parallel, boundedElastic, single",
      "publishOn vs subscribeOn",
      "Hot vs cold publishers",
      "Spring WebFlux — RouterFunction & HandlerFunction",
      "@RestController in reactive context",
      "Functional endpoints — route() DSL",
      "WebClient — non-blocking HTTP client",
      "WebClient — exchangeToMono, bodyToFlux",
      "Server-Sent Events with WebFlux",
      "WebSocket support — reactive",
      "R2DBC — reactive database access",
      "Reactive security with Spring Security",
      "Context propagation in reactive chains",
      "Testing reactive code — StepVerifier",
      "Reactive vs imperative — when to choose",
      "Netty tuning for WebFlux",
    ],
  },
  {
    id: "messaging",
    emoji: "📨",
    title: "Messaging & Event-Driven",
    color: "#7c3aed",
    lightBg: "#f5f3ff",
    items: [
      "Spring Events — ApplicationEvent, @EventListener",
      "@TransactionalEventListener — AFTER_COMMIT, BEFORE_COMMIT",
      "Async events — @Async on @EventListener",
      "Spring Integration — MessageChannel, MessageHandler",
      "Spring AMQP — RabbitMQ producer & consumer",
      "RabbitTemplate, @RabbitListener",
      "RabbitMQ — exchanges, queues, routing keys, bindings",
      "Dead letter queues & retry policies",
      "Spring Kafka — KafkaTemplate, @KafkaListener",
      "Kafka consumer groups & partition assignment",
      "Kafka exactly-once semantics",
      "Kafka Streams with Spring",
      "Spring JMS — ActiveMQ, IBM MQ",
      "@JmsListener",
      "Message conversion — Jackson2MessageConverter",
      "Outbox pattern for reliable messaging",
      "Saga pattern implementation",
      "Spring Cloud Stream — binder abstraction",
      "Spring Cloud Function",
      "Distributed tracing across messages",
    ],
  },
  {
    id: "caching",
    emoji: "💾",
    title: "Caching",
    color: "#059669",
    lightBg: "#ecfdf5",
    items: [
      "Spring Cache abstraction — @EnableCaching",
      "@Cacheable — key generation, condition, unless",
      "@CachePut — always update cache",
      "@CacheEvict — evict on mutation",
      "@Caching — multiple cache annotations",
      "Custom KeyGenerator",
      "CacheManager implementations",
      "Caffeine cache — size-based, time-based eviction",
      "Redis cache with RedisCacheManager",
      "Cache TTL configuration",
      "Distributed caching patterns",
      "Cache-aside vs write-through vs write-behind",
      "Cache stampede prevention",
      "Cache invalidation strategies",
      "L1/L2 cache layering",
    ],
  },
  {
    id: "microservices",
    emoji: "🔗",
    title: "Microservices & Spring Cloud",
    color: "#d97706",
    lightBg: "#fffbeb",
    items: [
      "Microservices principles — single responsibility, loose coupling",
      "Service discovery — Eureka server & client",
      "Client-side load balancing — Spring Cloud LoadBalancer",
      "API Gateway — Spring Cloud Gateway",
      "Gateway predicates & filters",
      "Rate limiting at gateway",
      "Circuit breaker pattern — Resilience4j",
      "@CircuitBreaker, @Retry, @RateLimiter, @Bulkhead",
      "Fallback methods",
      "Spring Cloud Config Server",
      "Config client — bootstrap.yml vs application.yml",
      "Config refresh — @RefreshScope, /actuator/refresh",
      "Spring Cloud Bus — broadcast config refresh",
      "Feign client — declarative HTTP clients",
      "Feign — error decoder, interceptors, logging",
      "Service mesh patterns",
      "Distributed tracing — Micrometer Tracing + Zipkin/Jaeger",
      "Trace context propagation — B3, W3C TraceContext",
      "Distributed logging with correlation IDs",
      "Externalized configuration best practices",
      "Sidecar pattern",
      "Strangler fig pattern",
      "API versioning strategies",
      "Backward compatibility in APIs",
    ],
  },
  {
    id: "observability",
    emoji: "📊",
    title: "Actuator, Metrics & Observability",
    color: "#2563eb",
    lightBg: "#eff6ff",
    items: [
      "Spring Boot Actuator — overview of endpoints",
      "/actuator/health — liveness & readiness probes",
      "Custom HealthIndicator",
      "/actuator/info — build info, git info",
      "/actuator/metrics — Micrometer registry",
      "/actuator/env, /actuator/configprops",
      "/actuator/loggers — runtime log level change",
      "/actuator/threaddump, /actuator/heapdump",
      "/actuator/httptrace — HTTP request history",
      "Actuator security — exposing only needed endpoints",
      "Micrometer — Counter, Gauge, Timer, DistributionSummary",
      "Custom metrics registration",
      "Micrometer tags/dimensions",
      "Prometheus scraping — /actuator/prometheus",
      "Grafana dashboard creation",
      "Structured logging — JSON log format",
      "Log correlation with trace IDs",
      "Distributed tracing — Micrometer Tracing",
      "OpenTelemetry integration",
      "JVM metrics — GC, heap, threads",
      "Custom health groups",
      "Startup & liveness probe configuration for k8s",
    ],
  },
  {
    id: "aop",
    emoji: "🔀",
    title: "AOP & Cross-Cutting Concerns",
    color: "#db2777",
    lightBg: "#fdf2f8",
    items: [
      "AOP concepts — aspect, advice, pointcut, join point, weaving",
      "@Aspect & @EnableAspectJAutoProxy",
      "Advice types — @Before, @After, @AfterReturning, @AfterThrowing, @Around",
      "Pointcut expressions — execution, within, @annotation, args",
      "ProceedingJoinPoint — @Around usage",
      "Pointcut composition — && || !",
      "Named pointcuts — @Pointcut",
      "Spring AOP proxy types — JDK dynamic vs CGLIB",
      "Self-invocation problem & solutions",
      "AOP ordering — @Order, Ordered interface",
      "Custom annotations as pointcuts",
      "Logging aspect pattern",
      "Performance monitoring aspect",
      "Retry aspect",
      "Auditing aspect",
      "Introduction/mixin with @DeclareParents",
    ],
  },
  {
    id: "scheduling",
    emoji: "⏰",
    title: "Scheduling & Async",
    color: "#0d9488",
    lightBg: "#f0fdfa",
    items: [
      "@EnableScheduling",
      "@Scheduled — fixedRate, fixedDelay, initialDelay",
      "@Scheduled — cron expressions",
      "Dynamic scheduling — SchedulingConfigurer",
      "TaskScheduler — programmatic scheduling",
      "@EnableAsync & @Async",
      "Custom Executor for @Async",
      "AsyncResult & CompletableFuture returns",
      "Exception handling in @Async methods",
      "Thread pool sizing strategies",
      "Spring Batch — Job, Step, ItemReader/Processor/Writer",
      "Spring Batch — chunk-oriented processing",
      "Spring Batch — job parameters, job repository",
      "Spring Batch — skip, retry, restart",
      "Spring Batch — partitioning & parallel steps",
      "Quartz Scheduler integration",
      "Distributed job scheduling patterns",
    ],
  },
  {
    id: "docker-k8s",
    emoji: "🐳",
    title: "Docker, Kubernetes & Cloud",
    color: "#0284c7",
    lightBg: "#f0f9ff",
    items: [
      "Dockerfile for Spring Boot app",
      "Multi-stage Docker builds",
      "Jib — build images without Dockerfile",
      "Spring Boot Buildpacks (Cloud Native Buildpacks)",
      "Docker Compose for local dev stack",
      "JVM in containers — -XX:+UseContainerSupport",
      "Container memory limits & GC tuning",
      "Kubernetes deployment.yaml for Spring Boot",
      "ConfigMap & Secret mounting",
      "Liveness & readiness probes configuration",
      "Resource requests & limits",
      "Horizontal Pod Autoscaling",
      "Helm chart for Spring Boot",
      "GraalVM Native Image — AOT compilation",
      "Spring AOT processing",
      "Native hints — @RegisterReflection",
      "Testing native images",
      "GCP / AWS / Azure — Spring Cloud integrations",
      "AWS Parameter Store / Secrets Manager integration",
      "Blue-green & canary deployments",
      "Service accounts & RBAC for pods",
    ],
  },
  {
    id: "performance",
    emoji: "🏎️",
    title: "Performance & Optimization",
    color: "#b45309",
    lightBg: "#fffbeb",
    items: [
      "Application startup time optimization",
      "Lazy bean initialization — spring.main.lazy-initialization",
      "Reducing classpath scanning scope",
      "Spring AOT for faster startup",
      "Connection pool tuning — HikariCP maxPoolSize, minIdle",
      "JPA query optimization — explain plans",
      "Batch inserts — spring.jpa.properties.hibernate.jdbc.batch_size",
      "Read replicas — routing datasource",
      "HTTP connection keep-alive & pooling in RestTemplate/WebClient",
      "Response compression — server.compression.enabled",
      "HTTP caching headers — ETag, Cache-Control",
      "Async & non-blocking I/O for I/O-bound workloads",
      "Virtual threads for throughput",
      "GC tuning — G1GC heap regions, pause time targets",
      "JVM flags for production",
      "Profiling with async-profiler / JFR",
      "Memory leak detection",
      "Load testing — Gatling, k6",
      "Database index strategy",
      "Avoid N+1 — EntityGraph, batch fetch",
      "Pagination best practices — cursor-based vs offset",
      "CDN & static asset optimization",
    ],
  },
  {
    id: "design-patterns",
    emoji: "🏗️",
    title: "Design Patterns & Architecture",
    color: "#7c3aed",
    lightBg: "#f5f3ff",
    items: [
      "Layered architecture — controller → service → repository",
      "Hexagonal (Ports & Adapters) architecture",
      "Domain-Driven Design basics with Spring",
      "Aggregate, Entity, Value Object in Spring context",
      "CQRS pattern implementation",
      "Event Sourcing basics",
      "Repository pattern vs DAO",
      "Service layer patterns — thin vs rich services",
      "DTOs — when and why to use",
      "MapStruct for bean mapping",
      "Builder pattern with Lombok @Builder",
      "Strategy pattern with Spring beans",
      "Template method with Spring inheritance",
      "Decorator via Spring AOP",
      "Chain of responsibility with filter chains",
      "Observer via Spring Events",
      "Factory pattern with @Bean methods",
      "Specification pattern for queries",
      "Outbox pattern",
      "Saga orchestration vs choreography",
      "Anti-corruption layer",
      "SOLID principles in Spring context",
    ],
  },
  {
    id: "advanced-topics",
    emoji: "🧠",
    title: "Advanced & Internals",
    color: "#be185d",
    lightBg: "#fdf2f8",
    items: [
      "Spring Boot auto-configuration authoring",
      "Writing custom starters",
      "BeanDefinitionRegistryPostProcessor",
      "ImportBeanDefinitionRegistrar",
      "ImportSelector",
      "SmartInitializingSingleton",
      "ApplicationContextInitializer",
      "EnvironmentPostProcessor",
      "SpringApplicationRunListener",
      "Custom PropertySourceLoader",
      "Custom HealthContributor",
      "Custom Actuator endpoint — @Endpoint, @ReadOperation",
      "Custom metrics binder — MeterBinder",
      "Custom Spring Security filter",
      "Custom AuthenticationProvider",
      "Custom argument resolver — HandlerMethodArgumentResolver",
      "Custom return value handler",
      "Custom Jackson serializer/deserializer",
      "Custom message converter",
      "Custom conditional annotation",
      "Spring HATEOAS — assemblers, affordances",
      "Spring GraphQL — schema, controllers, subscriptions",
      "Spring AI integration",
      "gRPC with Spring Boot",
      "Virtual thread executor configuration (Spring Boot 3.2+)",
      "CDS (Class Data Sharing) for faster startup",
      "Project Leyden readiness",
    ],
  },
];
function uy() {
  const [O, mt] = Qe.useState(() => { try { const s = localStorage.getItem('springBootRoadmapState'); return s ? JSON.parse(s) : {}; } catch { return {}; } }),
    [P, y] = Qe.useState(() => { try { const s = localStorage.getItem('springBootRoadmapSections'); return s ? JSON.parse(s) : { "core-java": !0 }; } catch { return { "core-java": !0 }; } }),
    [j, W] = Qe.useState("all"),
    [ht, Ut] = Qe.useState(!1),
    C = Qe.useRef(null);
  Qe.useEffect(() => { localStorage.setItem('springBootRoadmapState', JSON.stringify(O)); }, [O]);
  Qe.useEffect(() => { localStorage.setItem('springBootRoadmapSections', JSON.stringify(P)); }, [P]);
  Qe.useEffect(() => {
    const H = () => Ut(window.scrollY > 10);
    return (
      window.addEventListener("scroll", H, { passive: !0 }),
      () => window.removeEventListener("scroll", H)
    );
  }, []);
  const A = (H, ot) => {
      const At = `${H}-${ot}`;
      mt((vt) => ({ ...vt, [At]: !vt[At] }));
    },
    k = (H) => {
      y((ot) => ({ ...ot, [H]: !ot[H] }));
    },
    U = Qn.reduce((H, ot) => H + ot.items.length, 0),
    ct = Object.values(O).filter(Boolean).length,
    Ht = Math.round((ct / U) * 100),
    Qt = (H) => {
      const ot = H.items.filter((At, vt) => O[`${H.id}-${vt}`]).length;
      return {
        done: ot,
        total: H.items.length,
        pct: Math.round((ot / H.items.length) * 100),
      };
    },
    Nt = Qn.map((H) => ({
      ...H,
      items: H.items.filter((ot, At) =>
        j === "all"
          ? !0
          : j === "done"
            ? O[`${H.id}-${At}`]
            : j === "todo"
              ? !O[`${H.id}-${At}`]
              : !0,
      ),
    })).filter((H) => H.items.length > 0 || j === "all");
  return Q.jsxs("div", {
    className: "roadmap-app",
    children: [
      Q.jsx("div", {
        ref: C,
        className: `header ${ht ? "scrolled" : ""}`,
        children: Q.jsxs("div", {
          className: "header-inner",
          children: [
            Q.jsxs("div", {
              className: "header-top",
              children: [
                Q.jsx("span", { className: "header-icon", children: "🌱" }),
                Q.jsx("h1", {
                  className: "header-title",
                  children: "Spring Boot Mastery Roadmap",
                }),
              ],
            }),
            Q.jsxs("p", {
              className: "header-subtitle",
              children: [
                U,
                " topics · ",
                Qn.length,
                " domains · tick everything to master Spring Boot",
              ],
            }),
            Q.jsxs("div", {
              className: "progress-container",
              children: [
                Q.jsx("div", {
                  className: "progress-track",
                  children: Q.jsx("div", {
                    className: "progress-fill",
                    style: { width: `${Ht}%` },
                  }),
                }),
                Q.jsxs("span", {
                  className: "progress-count",
                  children: [ct, "/", U],
                }),
                Q.jsxs("span", {
                  className: "progress-pct",
                  children: [Ht, "%"],
                }),
              ],
            }),
            Q.jsxs("div", {
              className: "filter-row",
              children: [
                ["all", "todo", "done"].map((H) =>
                  Q.jsx(
                    "button",
                    {
                      onClick: () => W(H),
                      className: `filter-btn ${j === H ? "active" : ""}`,
                      children: H,
                    },
                    H,
                  ),
                ),
                Q.jsx("button", {
                  onClick: () => mt({}),
                  className: "reset-btn",
                  children: "↺ Reset",
                }),
              ],
            }),
          ],
        }),
      }),
      Q.jsxs("div", {
        className: "sections-container",
        children: [
          Nt.map((H, ot) => {
            const At = Qt(H),
              vt = P[H.id] !== !1;
            return Q.jsxs(
              "div",
              {
                className: "section-card",
                style: { animationDelay: `${ot * 0.04}s` },
                children: [
                  Q.jsxs("div", {
                    className: "section-header",
                    onClick: () => k(H.id),
                    children: [
                      Q.jsx("div", {
                        className: "section-emoji",
                        style: { background: H.lightBg },
                        children: H.emoji,
                      }),
                      Q.jsxs("div", {
                        className: "section-info",
                        children: [
                          Q.jsxs("div", {
                            className: "section-title-row",
                            children: [
                              Q.jsx("span", {
                                className: "section-title",
                                children: H.title,
                              }),
                              Q.jsxs("span", {
                                className: "section-badge",
                                children: [At.total, " topics"],
                              }),
                            ],
                          }),
                          Q.jsxs("div", {
                            className: "section-progress-row",
                            children: [
                              Q.jsx("div", {
                                className: "section-progress-track",
                                children: Q.jsx("div", {
                                  className: "section-progress-fill",
                                  style: {
                                    width: `${At.pct}%`,
                                    background: H.color,
                                  },
                                }),
                              }),
                              Q.jsxs("span", {
                                className: "section-progress-text",
                                style: { color: H.color },
                                children: [At.done, "/", At.total],
                              }),
                            ],
                          }),
                        ],
                      }),
                      Q.jsx("span", {
                        className: `section-chevron ${vt ? "open" : ""}`,
                        children: "▶",
                      }),
                    ],
                  }),
                  vt &&
                    Q.jsx("div", {
                      className: "items-list",
                      children: H.items.map((Lt, Pt) => {
                        const Bt =
                            Qn.find((ol) => ol.id === H.id)?.items.indexOf(
                              Lt,
                            ) ?? Pt,
                          X = `${H.id}-${Bt}`,
                          Dt = O[X];
                        return Q.jsxs(
                          "div",
                          {
                            className: "item-row",
                            onClick: () => A(H.id, Bt),
                            children: [
                              Q.jsx("div", {
                                className: `item-checkbox ${Dt ? "checked" : ""}`,
                                style: Dt
                                  ? {
                                      background: H.color,
                                      borderColor: "transparent",
                                    }
                                  : {},
                                children:
                                  Dt &&
                                  Q.jsx("span", {
                                    className: "check-icon",
                                    children: "✓",
                                  }),
                              }),
                              Q.jsx("span", {
                                className: `item-text ${Dt ? "done" : ""}`,
                                children: Lt,
                              }),
                            ],
                          },
                          Pt,
                        );
                      }),
                    }),
                ],
              },
              H.id,
            );
          }),
          Ht === 100 &&
            Q.jsxs("div", {
              className: "completion-banner",
              children: [
                Q.jsx("div", { className: "completion-emoji", children: "🏆" }),
                Q.jsx("div", {
                  className: "completion-title",
                  children: "Spring Boot Master",
                }),
                Q.jsx("div", {
                  className: "completion-text",
                  children:
                    "You've completed the entire roadmap. Go build something incredible.",
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
ay.createRoot(document.getElementById("root")).render(
  Q.jsx(Qe.StrictMode, { children: Q.jsx(uy, {}) }),
);
