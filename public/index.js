function cm(o, d) {
  for (var m = 0; m < d.length; m++) {
    const r = d[m];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const b in r)
        if (b !== 'default' && !(b in o)) {
          const p = Object.getOwnPropertyDescriptor(r, b);
          p && Object.defineProperty(o, b, p.get ? p : { enumerable: !0, get: () => r[b] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: 'Module' }));
}
(() => {
  const d = document.createElement('link').relList;
  if (d && d.supports && d.supports('modulepreload')) return;
  for (const b of document.querySelectorAll('link[rel="modulepreload"]')) r(b);
  new MutationObserver((b) => {
    for (const p of b)
      if (p.type === 'childList')
        for (const C of p.addedNodes) C.tagName === 'LINK' && C.rel === 'modulepreload' && r(C);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(b) {
    const p = {};
    return (
      b.integrity && (p.integrity = b.integrity),
      b.referrerPolicy && (p.referrerPolicy = b.referrerPolicy),
      b.crossOrigin === 'use-credentials'
        ? (p.credentials = 'include')
        : b.crossOrigin === 'anonymous'
          ? (p.credentials = 'omit')
          : (p.credentials = 'same-origin'),
      p
    );
  }
  function r(b) {
    if (b.ep) return;
    b.ep = !0;
    const p = m(b);
    fetch(b.href, p);
  }
})();
function sm(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, 'default') ? o.default : o;
}
var Tu = { exports: {} },
  Qn = {};
var Zd;
function im() {
  if (Zd) return Qn;
  Zd = 1;
  var o = Symbol.for('react.transitional.element'),
    d = Symbol.for('react.fragment');
  function m(r, b, p) {
    var C = null;
    if ((p !== void 0 && (C = '' + p), b.key !== void 0 && (C = '' + b.key), 'key' in b)) {
      p = {};
      for (var w in b) w !== 'key' && (p[w] = b[w]);
    } else p = b;
    return (b = p.ref), { $$typeof: o, type: r, key: C, ref: b !== void 0 ? b : null, props: p };
  }
  return (Qn.Fragment = d), (Qn.jsx = m), (Qn.jsxs = m), Qn;
}
var Kd;
function um() {
  return Kd || ((Kd = 1), (Tu.exports = im())), Tu.exports;
}
var i = um(),
  Mu = { exports: {} },
  W = {};
var Jd;
function om() {
  if (Jd) return W;
  Jd = 1;
  var o = Symbol.for('react.transitional.element'),
    d = Symbol.for('react.portal'),
    m = Symbol.for('react.fragment'),
    r = Symbol.for('react.strict_mode'),
    b = Symbol.for('react.profiler'),
    p = Symbol.for('react.consumer'),
    C = Symbol.for('react.context'),
    w = Symbol.for('react.forward_ref'),
    A = Symbol.for('react.suspense'),
    S = Symbol.for('react.memo'),
    R = Symbol.for('react.lazy'),
    U = Symbol.for('react.activity'),
    B = Symbol.iterator;
  function k(x) {
    return x === null || typeof x != 'object'
      ? null
      : ((x = (B && x[B]) || x['@@iterator']), typeof x == 'function' ? x : null);
  }
  var yt = {
      isMounted: () => !1,
      enqueueForceUpdate: () => {},
      enqueueReplaceState: () => {},
      enqueueSetState: () => {},
    },
    nt = Object.assign,
    ot = {};
  function Et(x, M, D) {
    (this.props = x), (this.context = M), (this.refs = ot), (this.updater = D || yt);
  }
  (Et.prototype.isReactComponent = {}),
    (Et.prototype.setState = function (x, M) {
      if (typeof x != 'object' && typeof x != 'function' && x != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, x, M, 'setState');
    }),
    (Et.prototype.forceUpdate = function (x) {
      this.updater.enqueueForceUpdate(this, x, 'forceUpdate');
    });
  function Ot() {}
  Ot.prototype = Et.prototype;
  function pt(x, M, D) {
    (this.props = x), (this.context = M), (this.refs = ot), (this.updater = D || yt);
  }
  var ct = (pt.prototype = new Ot());
  (ct.constructor = pt), nt(ct, Et.prototype), (ct.isPureReactComponent = !0);
  var ht = Array.isArray;
  function At() {}
  var $ = { H: null, A: null, T: null, S: null },
    X = Object.prototype.hasOwnProperty;
  function Qt(x, M, D) {
    var Q = D.ref;
    return { $$typeof: o, type: x, key: M, ref: Q !== void 0 ? Q : null, props: D };
  }
  function Ye(x, M) {
    return Qt(x.type, M, x.props);
  }
  function ue(x) {
    return typeof x == 'object' && x !== null && x.$$typeof === o;
  }
  function Yt(x) {
    var M = { '=': '=0', ':': '=2' };
    return '$' + x.replace(/[=:]/g, (D) => M[D]);
  }
  var He = /\/+/g;
  function oe(x, M) {
    return typeof x == 'object' && x !== null && x.key != null ? Yt('' + x.key) : M.toString(36);
  }
  function Lt(x) {
    switch (x.status) {
      case 'fulfilled':
        return x.value;
      case 'rejected':
        throw x.reason;
      default:
        switch (
          (typeof x.status == 'string'
            ? x.then(At, At)
            : ((x.status = 'pending'),
              x.then(
                (M) => {
                  x.status === 'pending' && ((x.status = 'fulfilled'), (x.value = M));
                },
                (M) => {
                  x.status === 'pending' && ((x.status = 'rejected'), (x.reason = M));
                }
              )),
          x.status)
        ) {
          case 'fulfilled':
            return x.value;
          case 'rejected':
            throw x.reason;
        }
    }
    throw x;
  }
  function j(x, M, D, Q, F) {
    var tt = typeof x;
    (tt === 'undefined' || tt === 'boolean') && (x = null);
    var J = !1;
    if (x === null) J = !0;
    else
      switch (tt) {
        case 'bigint':
        case 'string':
        case 'number':
          J = !0;
          break;
        case 'object':
          switch (x.$$typeof) {
            case o:
            case d:
              J = !0;
              break;
            case R:
              return (J = x._init), j(J(x._payload), M, D, Q, F);
          }
      }
    if (J)
      return (
        (F = F(x)),
        (J = Q === '' ? '.' + oe(x, 0) : Q),
        ht(F)
          ? ((D = ''), J != null && (D = J.replace(He, '$&/') + '/'), j(F, M, D, '', (Ue) => Ue))
          : F != null &&
            (ue(F) &&
              (F = Ye(
                F,
                D +
                  (F.key == null || (x && x.key === F.key)
                    ? ''
                    : ('' + F.key).replace(He, '$&/') + '/') +
                  J
              )),
            M.push(F)),
        1
      );
    J = 0;
    var Vt = Q === '' ? '.' : Q + ':';
    if (ht(x))
      for (var Tt = 0; Tt < x.length; Tt++)
        (Q = x[Tt]), (tt = Vt + oe(Q, Tt)), (J += j(Q, M, D, tt, F));
    else if (((Tt = k(x)), typeof Tt == 'function'))
      for (x = Tt.call(x), Tt = 0; !(Q = x.next()).done; )
        (Q = Q.value), (tt = Vt + oe(Q, Tt++)), (J += j(Q, M, D, tt, F));
    else if (tt === 'object') {
      if (typeof x.then == 'function') return j(Lt(x), M, D, Q, F);
      throw (
        ((M = String(x)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (M === '[object Object]' ? 'object with keys {' + Object.keys(x).join(', ') + '}' : M) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    }
    return J;
  }
  function H(x, M, D) {
    if (x == null) return x;
    var Q = [],
      F = 0;
    return j(x, Q, '', '', (tt) => M.call(D, tt, F++)), Q;
  }
  function O(x) {
    if (x._status === -1) {
      var M = x._result;
      (M = M()),
        M.then(
          (D) => {
            (x._status === 0 || x._status === -1) && ((x._status = 1), (x._result = D));
          },
          (D) => {
            (x._status === 0 || x._status === -1) && ((x._status = 2), (x._result = D));
          }
        ),
        x._status === -1 && ((x._status = 0), (x._result = M));
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var mt =
      typeof reportError == 'function'
        ? reportError
        : (x) => {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var M = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof x == 'object' && x !== null && typeof x.message == 'string'
                    ? String(x.message)
                    : String(x),
                error: x,
              });
              if (!window.dispatchEvent(M)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', x);
              return;
            }
            console.error(x);
          },
    vt = {
      map: H,
      forEach: (x, M, D) => {
        H(
          x,
          function () {
            M.apply(this, arguments);
          },
          D
        );
      },
      count: (x) => {
        var M = 0;
        return (
          H(x, () => {
            M++;
          }),
          M
        );
      },
      toArray: (x) => H(x, (M) => M) || [],
      only: (x) => {
        if (!ue(x))
          throw Error('React.Children.only expected to receive a single React element child.');
        return x;
      },
    };
  return (
    (W.Activity = U),
    (W.Children = vt),
    (W.Component = Et),
    (W.Fragment = m),
    (W.Profiler = b),
    (W.PureComponent = pt),
    (W.StrictMode = r),
    (W.Suspense = A),
    (W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $),
    (W.__COMPILER_RUNTIME = {
      __proto__: null,
      c: (x) => $.H.useMemoCache(x),
    }),
    (W.cache = (x) => () => x.apply(null, arguments)),
    (W.cacheSignal = () => null),
    (W.cloneElement = (x, M, D) => {
      if (x == null) throw Error('The argument must be a React element, but you passed ' + x + '.');
      var Q = nt({}, x.props),
        F = x.key;
      if (M != null)
        for (tt in (M.key !== void 0 && (F = '' + M.key), M))
          !X.call(M, tt) ||
            tt === 'key' ||
            tt === '__self' ||
            tt === '__source' ||
            (tt === 'ref' && M.ref === void 0) ||
            (Q[tt] = M[tt]);
      var tt = arguments.length - 2;
      if (tt === 1) Q.children = D;
      else if (1 < tt) {
        for (var J = Array(tt), Vt = 0; Vt < tt; Vt++) J[Vt] = arguments[Vt + 2];
        Q.children = J;
      }
      return Qt(x.type, F, Q);
    }),
    (W.createContext = (x) => (
      (x = {
        $$typeof: C,
        _currentValue: x,
        _currentValue2: x,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      }),
      (x.Provider = x),
      (x.Consumer = { $$typeof: p, _context: x }),
      x
    )),
    (W.createElement = (x, M, D) => {
      var Q,
        F = {},
        tt = null;
      if (M != null)
        for (Q in (M.key !== void 0 && (tt = '' + M.key), M))
          X.call(M, Q) && Q !== 'key' && Q !== '__self' && Q !== '__source' && (F[Q] = M[Q]);
      var J = arguments.length - 2;
      if (J === 1) F.children = D;
      else if (1 < J) {
        for (var Vt = Array(J), Tt = 0; Tt < J; Tt++) Vt[Tt] = arguments[Tt + 2];
        F.children = Vt;
      }
      if (x && x.defaultProps)
        for (Q in ((J = x.defaultProps), J)) F[Q] === void 0 && (F[Q] = J[Q]);
      return Qt(x, tt, F);
    }),
    (W.createRef = () => ({ current: null })),
    (W.forwardRef = (x) => ({ $$typeof: w, render: x })),
    (W.isValidElement = ue),
    (W.lazy = (x) => ({ $$typeof: R, _payload: { _status: -1, _result: x }, _init: O })),
    (W.memo = (x, M) => ({ $$typeof: S, type: x, compare: M === void 0 ? null : M })),
    (W.startTransition = (x) => {
      var M = $.T,
        D = {};
      $.T = D;
      try {
        var Q = x(),
          F = $.S;
        F !== null && F(D, Q),
          typeof Q == 'object' && Q !== null && typeof Q.then == 'function' && Q.then(At, mt);
      } catch (tt) {
        mt(tt);
      } finally {
        M !== null && D.types !== null && (M.types = D.types), ($.T = M);
      }
    }),
    (W.unstable_useCacheRefresh = () => $.H.useCacheRefresh()),
    (W.use = (x) => $.H.use(x)),
    (W.useActionState = (x, M, D) => $.H.useActionState(x, M, D)),
    (W.useCallback = (x, M) => $.H.useCallback(x, M)),
    (W.useContext = (x) => $.H.useContext(x)),
    (W.useDebugValue = () => {}),
    (W.useDeferredValue = (x, M) => $.H.useDeferredValue(x, M)),
    (W.useEffect = (x, M) => $.H.useEffect(x, M)),
    (W.useEffectEvent = (x) => $.H.useEffectEvent(x)),
    (W.useId = () => $.H.useId()),
    (W.useImperativeHandle = (x, M, D) => $.H.useImperativeHandle(x, M, D)),
    (W.useInsertionEffect = (x, M) => $.H.useInsertionEffect(x, M)),
    (W.useLayoutEffect = (x, M) => $.H.useLayoutEffect(x, M)),
    (W.useMemo = (x, M) => $.H.useMemo(x, M)),
    (W.useOptimistic = (x, M) => $.H.useOptimistic(x, M)),
    (W.useReducer = (x, M, D) => $.H.useReducer(x, M, D)),
    (W.useRef = (x) => $.H.useRef(x)),
    (W.useState = (x) => $.H.useState(x)),
    (W.useSyncExternalStore = (x, M, D) => $.H.useSyncExternalStore(x, M, D)),
    (W.useTransition = () => $.H.useTransition()),
    (W.version = '19.2.3'),
    W
  );
}
var Fd;
function Yu() {
  return Fd || ((Fd = 1), (Mu.exports = om())), Mu.exports;
}
var Z = Yu();
const rm = sm(Z),
  fm = cm({ __proto__: null, default: rm }, [Z]);
var _u = { exports: {} },
  Rn = {},
  Cu = { exports: {} },
  Ou = {};
var $d;
function dm() {
  return (
    $d ||
      (($d = 1),
      ((o) => {
        function d(j, H) {
          var O = j.length;
          j.push(H);
          while (0 < O) {
            var mt = (O - 1) >>> 1,
              vt = j[mt];
            if (0 < b(vt, H)) (j[mt] = H), (j[O] = vt), (O = mt);
            else break;
          }
        }
        function m(j) {
          return j.length === 0 ? null : j[0];
        }
        function r(j) {
          if (j.length === 0) return null;
          var H = j[0],
            O = j.pop();
          if (O !== H) {
            j[0] = O;
            for (var mt = 0, vt = j.length, x = vt >>> 1; mt < x; ) {
              var M = 2 * (mt + 1) - 1,
                D = j[M],
                Q = M + 1,
                F = j[Q];
              if (0 > b(D, O))
                Q < vt && 0 > b(F, D)
                  ? ((j[mt] = F), (j[Q] = O), (mt = Q))
                  : ((j[mt] = D), (j[M] = O), (mt = M));
              else if (Q < vt && 0 > b(F, O)) (j[mt] = F), (j[Q] = O), (mt = Q);
              else break;
            }
          }
          return H;
        }
        function b(j, H) {
          var O = j.sortIndex - H.sortIndex;
          return O !== 0 ? O : j.id - H.id;
        }
        if (
          ((o.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var p = performance;
          o.unstable_now = () => p.now();
        } else {
          var C = Date,
            w = C.now();
          o.unstable_now = () => C.now() - w;
        }
        var A = [],
          S = [],
          R = 1,
          U = null,
          B = 3,
          k = !1,
          yt = !1,
          nt = !1,
          ot = !1,
          Et = typeof setTimeout == 'function' ? setTimeout : null,
          Ot = typeof clearTimeout == 'function' ? clearTimeout : null,
          pt = typeof setImmediate < 'u' ? setImmediate : null;
        function ct(j) {
          for (var H = m(S); H !== null; ) {
            if (H.callback === null) r(S);
            else if (H.startTime <= j) r(S), (H.sortIndex = H.expirationTime), d(A, H);
            else break;
            H = m(S);
          }
        }
        function ht(j) {
          if (((nt = !1), ct(j), !yt))
            if (m(A) !== null) (yt = !0), At || ((At = !0), Yt());
            else {
              var H = m(S);
              H !== null && Lt(ht, H.startTime - j);
            }
        }
        var At = !1,
          $ = -1,
          X = 5,
          Qt = -1;
        function Ye() {
          return ot ? !0 : !(o.unstable_now() - Qt < X);
        }
        function ue() {
          if (((ot = !1), At)) {
            var j = o.unstable_now();
            Qt = j;
            var H = !0;
            try {
              t: {
                (yt = !1), nt && ((nt = !1), Ot($), ($ = -1)), (k = !0);
                var O = B;
                try {
                  e: {
                    for (ct(j), U = m(A); U !== null && !(U.expirationTime > j && Ye()); ) {
                      var mt = U.callback;
                      if (typeof mt == 'function') {
                        (U.callback = null), (B = U.priorityLevel);
                        var vt = mt(U.expirationTime <= j);
                        if (((j = o.unstable_now()), typeof vt == 'function')) {
                          (U.callback = vt), ct(j), (H = !0);
                          break e;
                        }
                        U === m(A) && r(A), ct(j);
                      } else r(A);
                      U = m(A);
                    }
                    if (U !== null) H = !0;
                    else {
                      var x = m(S);
                      x !== null && Lt(ht, x.startTime - j), (H = !1);
                    }
                  }
                  break t;
                } finally {
                  (U = null), (B = O), (k = !1);
                }
                H = void 0;
              }
            } finally {
              H ? Yt() : (At = !1);
            }
          }
        }
        var Yt;
        if (typeof pt == 'function')
          Yt = () => {
            pt(ue);
          };
        else if (typeof MessageChannel < 'u') {
          var He = new MessageChannel(),
            oe = He.port2;
          (He.port1.onmessage = ue),
            (Yt = () => {
              oe.postMessage(null);
            });
        } else
          Yt = () => {
            Et(ue, 0);
          };
        function Lt(j, H) {
          $ = Et(() => {
            j(o.unstable_now());
          }, H);
        }
        (o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = (j) => {
            j.callback = null;
          }),
          (o.unstable_forceFrameRate = (j) => {
            0 > j || 125 < j
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (X = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = () => B),
          (o.unstable_next = (j) => {
            switch (B) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = B;
            }
            var O = B;
            B = H;
            try {
              return j();
            } finally {
              B = O;
            }
          }),
          (o.unstable_requestPaint = () => {
            ot = !0;
          }),
          (o.unstable_runWithPriority = (j, H) => {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var O = B;
            B = j;
            try {
              return H();
            } finally {
              B = O;
            }
          }),
          (o.unstable_scheduleCallback = (j, H, O) => {
            var mt = o.unstable_now();
            switch (
              (typeof O == 'object' && O !== null
                ? ((O = O.delay), (O = typeof O == 'number' && 0 < O ? mt + O : mt))
                : (O = mt),
              j)
            ) {
              case 1:
                var vt = -1;
                break;
              case 2:
                vt = 250;
                break;
              case 5:
                vt = 1073741823;
                break;
              case 4:
                vt = 1e4;
                break;
              default:
                vt = 5e3;
            }
            return (
              (vt = O + vt),
              (j = {
                id: R++,
                callback: H,
                priorityLevel: j,
                startTime: O,
                expirationTime: vt,
                sortIndex: -1,
              }),
              O > mt
                ? ((j.sortIndex = O),
                  d(S, j),
                  m(A) === null &&
                    j === m(S) &&
                    (nt ? (Ot($), ($ = -1)) : (nt = !0), Lt(ht, O - mt)))
                : ((j.sortIndex = vt), d(A, j), yt || k || ((yt = !0), At || ((At = !0), Yt()))),
              j
            );
          }),
          (o.unstable_shouldYield = Ye),
          (o.unstable_wrapCallback = (j) => {
            var H = B;
            return function () {
              var O = B;
              B = H;
              try {
                return j.apply(this, arguments);
              } finally {
                B = O;
              }
            };
          });
      })(Ou)),
    Ou
  );
}
var Wd;
function hm() {
  return Wd || ((Wd = 1), (Cu.exports = dm())), Cu.exports;
}
var wu = { exports: {} },
  Pt = {};
var Id;
function mm() {
  if (Id) return Pt;
  Id = 1;
  var o = Yu();
  function d(A) {
    var S = 'https://react.dev/errors/' + A;
    if (1 < arguments.length) {
      S += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++) S += '&args[]=' + encodeURIComponent(arguments[R]);
    }
    return (
      'Minified React error #' +
      A +
      '; visit ' +
      S +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function m() {}
  var r = {
      d: {
        f: m,
        r: () => {
          throw Error(d(522));
        },
        D: m,
        C: m,
        L: m,
        m,
        X: m,
        S: m,
        M: m,
      },
      p: 0,
      findDOMNode: null,
    },
    b = Symbol.for('react.portal');
  function p(A, S, R) {
    var U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: b,
      key: U == null ? null : '' + U,
      children: A,
      containerInfo: S,
      implementation: R,
    };
  }
  var C = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function w(A, S) {
    if (A === 'font') return '';
    if (typeof S == 'string') return S === 'use-credentials' ? S : '';
  }
  return (
    (Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (Pt.createPortal = (A, S) => {
      var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!S || (S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11)) throw Error(d(299));
      return p(A, S, null, R);
    }),
    (Pt.flushSync = (A) => {
      var S = C.T,
        R = r.p;
      try {
        if (((C.T = null), (r.p = 2), A)) return A();
      } finally {
        (C.T = S), (r.p = R), r.d.f();
      }
    }),
    (Pt.preconnect = (A, S) => {
      typeof A == 'string' &&
        (S
          ? ((S = S.crossOrigin),
            (S = typeof S == 'string' ? (S === 'use-credentials' ? S : '') : void 0))
          : (S = null),
        r.d.C(A, S));
    }),
    (Pt.prefetchDNS = (A) => {
      typeof A == 'string' && r.d.D(A);
    }),
    (Pt.preinit = (A, S) => {
      if (typeof A == 'string' && S && typeof S.as == 'string') {
        var R = S.as,
          U = w(R, S.crossOrigin),
          B = typeof S.integrity == 'string' ? S.integrity : void 0,
          k = typeof S.fetchPriority == 'string' ? S.fetchPriority : void 0;
        R === 'style'
          ? r.d.S(A, typeof S.precedence == 'string' ? S.precedence : void 0, {
              crossOrigin: U,
              integrity: B,
              fetchPriority: k,
            })
          : R === 'script' &&
            r.d.X(A, {
              crossOrigin: U,
              integrity: B,
              fetchPriority: k,
              nonce: typeof S.nonce == 'string' ? S.nonce : void 0,
            });
      }
    }),
    (Pt.preinitModule = (A, S) => {
      if (typeof A == 'string')
        if (typeof S == 'object' && S !== null) {
          if (S.as == null || S.as === 'script') {
            var R = w(S.as, S.crossOrigin);
            r.d.M(A, {
              crossOrigin: R,
              integrity: typeof S.integrity == 'string' ? S.integrity : void 0,
              nonce: typeof S.nonce == 'string' ? S.nonce : void 0,
            });
          }
        } else S == null && r.d.M(A);
    }),
    (Pt.preload = (A, S) => {
      if (typeof A == 'string' && typeof S == 'object' && S !== null && typeof S.as == 'string') {
        var R = S.as,
          U = w(R, S.crossOrigin);
        r.d.L(A, R, {
          crossOrigin: U,
          integrity: typeof S.integrity == 'string' ? S.integrity : void 0,
          nonce: typeof S.nonce == 'string' ? S.nonce : void 0,
          type: typeof S.type == 'string' ? S.type : void 0,
          fetchPriority: typeof S.fetchPriority == 'string' ? S.fetchPriority : void 0,
          referrerPolicy: typeof S.referrerPolicy == 'string' ? S.referrerPolicy : void 0,
          imageSrcSet: typeof S.imageSrcSet == 'string' ? S.imageSrcSet : void 0,
          imageSizes: typeof S.imageSizes == 'string' ? S.imageSizes : void 0,
          media: typeof S.media == 'string' ? S.media : void 0,
        });
      }
    }),
    (Pt.preloadModule = (A, S) => {
      if (typeof A == 'string')
        if (S) {
          var R = w(S.as, S.crossOrigin);
          r.d.m(A, {
            as: typeof S.as == 'string' && S.as !== 'script' ? S.as : void 0,
            crossOrigin: R,
            integrity: typeof S.integrity == 'string' ? S.integrity : void 0,
          });
        } else r.d.m(A);
    }),
    (Pt.requestFormReset = (A) => {
      r.d.r(A);
    }),
    (Pt.unstable_batchedUpdates = (A, S) => A(S)),
    (Pt.useFormState = (A, S, R) => C.H.useFormState(A, S, R)),
    (Pt.useFormStatus = () => C.H.useHostTransitionStatus()),
    (Pt.version = '19.2.3'),
    Pt
  );
}
var Pd;
function x0() {
  if (Pd) return wu.exports;
  Pd = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (d) {
        console.error(d);
      }
  }
  return o(), (wu.exports = mm()), wu.exports;
}
var t0;
function xm() {
  if (t0) return Rn;
  t0 = 1;
  var o = hm(),
    d = Yu(),
    m = x0();
  function r(t) {
    var e = 'https://react.dev/errors/' + t;
    if (1 < arguments.length) {
      e += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) e += '&args[]=' + encodeURIComponent(arguments[l]);
    }
    return (
      'Minified React error #' +
      t +
      '; visit ' +
      e +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function b(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function p(t) {
    var e = t,
      l = t;
    if (t.alternate) while (e.return) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function C(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
        return e.dehydrated;
    }
    return null;
  }
  function w(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
        return e.dehydrated;
    }
    return null;
  }
  function A(t) {
    if (p(t) !== t) throw Error(r(188));
  }
  function S(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = p(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var c = n.alternate;
      if (c === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === c.child) {
        for (c = n.child; c; ) {
          if (c === l) return A(n), t;
          if (c === a) return A(n), e;
          c = c.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== a.return) (l = n), (a = c);
      else {
        for (var s = !1, u = n.child; u; ) {
          if (u === l) {
            (s = !0), (l = n), (a = c);
            break;
          }
          if (u === a) {
            (s = !0), (a = n), (l = c);
            break;
          }
          u = u.sibling;
        }
        if (!s) {
          for (u = c.child; u; ) {
            if (u === l) {
              (s = !0), (l = c), (a = n);
              break;
            }
            if (u === a) {
              (s = !0), (a = c), (l = n);
              break;
            }
            u = u.sibling;
          }
          if (!s) throw Error(r(189));
        }
      }
      if (l.alternate !== a) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? t : e;
  }
  function R(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = R(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var U = Object.assign,
    B = Symbol.for('react.element'),
    k = Symbol.for('react.transitional.element'),
    yt = Symbol.for('react.portal'),
    nt = Symbol.for('react.fragment'),
    ot = Symbol.for('react.strict_mode'),
    Et = Symbol.for('react.profiler'),
    Ot = Symbol.for('react.consumer'),
    pt = Symbol.for('react.context'),
    ct = Symbol.for('react.forward_ref'),
    ht = Symbol.for('react.suspense'),
    At = Symbol.for('react.suspense_list'),
    $ = Symbol.for('react.memo'),
    X = Symbol.for('react.lazy'),
    Qt = Symbol.for('react.activity'),
    Ye = Symbol.for('react.memo_cache_sentinel'),
    ue = Symbol.iterator;
  function Yt(t) {
    return t === null || typeof t != 'object'
      ? null
      : ((t = (ue && t[ue]) || t['@@iterator']), typeof t == 'function' ? t : null);
  }
  var He = Symbol.for('react.client.reference');
  function oe(t) {
    if (t == null) return null;
    if (typeof t == 'function') return t.$$typeof === He ? null : t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
      case nt:
        return 'Fragment';
      case Et:
        return 'Profiler';
      case ot:
        return 'StrictMode';
      case ht:
        return 'Suspense';
      case At:
        return 'SuspenseList';
      case Qt:
        return 'Activity';
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case yt:
          return 'Portal';
        case pt:
          return t.displayName || 'Context';
        case Ot:
          return (t._context.displayName || 'Context') + '.Consumer';
        case ct:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ''),
              (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
            t
          );
        case $:
          return (e = t.displayName || null), e !== null ? e : oe(t.type) || 'Memo';
        case X:
          (e = t._payload), (t = t._init);
          try {
            return oe(t(e));
          } catch {}
      }
    return null;
  }
  var Lt = Array.isArray,
    j = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    H = m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    O = { pending: !1, data: null, method: null, action: null },
    mt = [],
    vt = -1;
  function x(t) {
    return { current: t };
  }
  function M(t) {
    0 > vt || ((t.current = mt[vt]), (mt[vt] = null), vt--);
  }
  function D(t, e) {
    vt++, (mt[vt] = t.current), (t.current = e);
  }
  var Q = x(null),
    F = x(null),
    tt = x(null),
    J = x(null);
  function Vt(t, e) {
    switch ((D(tt, e), D(F, t), D(Q, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? xd(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI))) (e = xd(e)), (t = yd(e, t));
        else
          switch (t) {
            case 'svg':
              t = 1;
              break;
            case 'math':
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    M(Q), D(Q, t);
  }
  function Tt() {
    M(Q), M(F), M(tt);
  }
  function Ue(t) {
    t.memoizedState !== null && D(J, t);
    var e = Q.current,
      l = yd(e, t.type);
    e !== l && (D(F, t), D(Q, l));
  }
  function il(t) {
    F.current === t && (M(Q), M(F)), J.current === t && (M(J), (wn._currentValue = O));
  }
  var ul, Xu;
  function Ul(t) {
    if (ul === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        (ul = (e && e[1]) || ''),
          (Xu =
            -1 <
            l.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < l.stack.indexOf('@')
                ? '@unknown:0:0'
                : '');
      }
    return (
      `
` +
      ul +
      t +
      Xu
    );
  }
  var rs = !1;
  function fs(t, e) {
    if (!t || rs) return '';
    rs = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: () => {
          try {
            if (e) {
              var _ = () => {
                throw Error();
              };
              if (
                (Object.defineProperty(_.prototype, 'props', {
                  set: () => {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(_, []);
                } catch (z) {
                  var N = z;
                }
                Reflect.construct(t, [], _);
              } else {
                try {
                  _.call();
                } catch (z) {
                  N = z;
                }
                t.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                N = z;
              }
              (_ = t()) && typeof _.catch == 'function' && _.catch(() => {});
            }
          } catch (z) {
            if (z && N && typeof z.stack == 'string') return [z.stack, N.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name');
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var c = a.DetermineComponentFrameRoot(),
        s = c[0],
        u = c[1];
      if (s && u) {
        var f = s.split(`
`),
          g = u.split(`
`);
        for (n = a = 0; a < f.length && !f[a].includes('DetermineComponentFrameRoot'); ) a++;
        while (n < g.length && !g[n].includes('DetermineComponentFrameRoot')) n++;
        if (a === f.length || n === g.length)
          for (a = f.length - 1, n = g.length - 1; 1 <= a && 0 <= n && f[a] !== g[n]; ) n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (f[a] !== g[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || f[a] !== g[n])) {
                  var E =
                    `
` + f[a].replace(' at new ', ' at ');
                  return (
                    t.displayName &&
                      E.includes('<anonymous>') &&
                      (E = E.replace('<anonymous>', t.displayName)),
                    E
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (rs = !1), (Error.prepareStackTrace = l);
    }
    return (l = t ? t.displayName || t.name : '') ? Ul(l) : '';
  }
  function Q0(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ul(t.type);
      case 16:
        return Ul('Lazy');
      case 13:
        return t.child !== e && e !== null ? Ul('Suspense Fallback') : Ul('Suspense');
      case 19:
        return Ul('SuspenseList');
      case 0:
      case 15:
        return fs(t.type, !1);
      case 11:
        return fs(t.type.render, !1);
      case 1:
        return fs(t.type, !0);
      case 31:
        return Ul('Activity');
      default:
        return '';
    }
  }
  function Lu(t) {
    try {
      var e = '',
        l = null;
      do (e += Q0(t, l)), (l = t), (t = t.return);
      while (t);
      return e;
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
  var ds = Object.prototype.hasOwnProperty,
    hs = o.unstable_scheduleCallback,
    ms = o.unstable_cancelCallback,
    R0 = o.unstable_shouldYield,
    q0 = o.unstable_requestPaint,
    re = o.unstable_now,
    B0 = o.unstable_getCurrentPriorityLevel,
    Vu = o.unstable_ImmediatePriority,
    Zu = o.unstable_UserBlockingPriority,
    kn = o.unstable_NormalPriority,
    k0 = o.unstable_LowPriority,
    Ku = o.unstable_IdlePriority,
    Y0 = o.log,
    G0 = o.unstable_setDisableYieldValue,
    Xa = null,
    fe = null;
  function ol(t) {
    if ((typeof Y0 == 'function' && G0(t), fe && typeof fe.setStrictMode == 'function'))
      try {
        fe.setStrictMode(Xa, t);
      } catch {}
  }
  var de = Math.clz32 ? Math.clz32 : V0,
    X0 = Math.log,
    L0 = Math.LN2;
  function V0(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((X0(t) / L0) | 0)) | 0;
  }
  var Yn = 256,
    Gn = 262144,
    Xn = 4194304;
  function Ql(t) {
    var e = t & 42;
    if (e !== 0) return e;
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
  function Ln(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      c = t.suspendedLanes,
      s = t.pingedLanes;
    t = t.warmLanes;
    var u = a & 134217727;
    return (
      u !== 0
        ? ((a = u & ~c),
          a !== 0
            ? (n = Ql(a))
            : ((s &= u), s !== 0 ? (n = Ql(s)) : l || ((l = u & ~t), l !== 0 && (n = Ql(l)))))
        : ((u = a & ~c),
          u !== 0
            ? (n = Ql(u))
            : s !== 0
              ? (n = Ql(s))
              : l || ((l = a & ~t), l !== 0 && (n = Ql(l)))),
      n === 0
        ? 0
        : e !== 0 &&
            e !== n &&
            (e & c) === 0 &&
            ((c = n & -n), (l = e & -e), c >= l || (c === 32 && (l & 4194048) !== 0))
          ? e
          : n
    );
  }
  function La(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Z0(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function Ju() {
    var t = Xn;
    return (Xn <<= 1), (Xn & 62914560) === 0 && (Xn = 4194304), t;
  }
  function xs(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Va(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function K0(t, e, l, a, n, c) {
    var s = t.pendingLanes;
    (t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0);
    var u = t.entanglements,
      f = t.expirationTimes,
      g = t.hiddenUpdates;
    for (l = s & ~l; 0 < l; ) {
      var E = 31 - de(l),
        _ = 1 << E;
      (u[E] = 0), (f[E] = -1);
      var N = g[E];
      if (N !== null)
        for (g[E] = null, E = 0; E < N.length; E++) {
          var z = N[E];
          z !== null && (z.lane &= -536870913);
        }
      l &= ~_;
    }
    a !== 0 && Fu(t, a, 0),
      c !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(s & ~e));
  }
  function Fu(t, e, l) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - de(e);
    (t.entangledLanes |= e), (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 261930));
  }
  function $u(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - de(l),
        n = 1 << a;
      (n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n);
    }
  }
  function Wu(t, e) {
    var l = e & -e;
    return (l = (l & 42) !== 0 ? 1 : ys(l)), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function ys(t) {
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
  function vs(t) {
    return (t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2;
  }
  function Iu() {
    var t = H.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Bd(t.type));
  }
  function Pu(t, e) {
    var l = H.p;
    try {
      return (H.p = t), e();
    } finally {
      H.p = l;
    }
  }
  var rl = Math.random().toString(36).slice(2),
    Jt = '__reactFiber$' + rl,
    ee = '__reactProps$' + rl,
    ea = '__reactContainer$' + rl,
    ps = '__reactEvents$' + rl,
    J0 = '__reactListeners$' + rl,
    F0 = '__reactHandles$' + rl,
    to = '__reactResources$' + rl,
    Za = '__reactMarker$' + rl;
  function gs(t) {
    delete t[Jt], delete t[ee], delete t[ps], delete t[J0], delete t[F0];
  }
  function la(t) {
    var e = t[Jt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[ea] || l[Jt])) {
        if (((l = e.alternate), e.child !== null || (l !== null && l.child !== null)))
          for (t = zd(t); t !== null; ) {
            if ((l = t[Jt])) return l;
            t = zd(t);
          }
        return e;
      }
      (t = l), (l = t.parentNode);
    }
    return null;
  }
  function aa(t) {
    if ((t = t[Jt] || t[ea])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function Ka(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function na(t) {
    var e = t[to];
    return e || (e = t[to] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e;
  }
  function Zt(t) {
    t[Za] = !0;
  }
  var eo = new Set(),
    lo = {};
  function Rl(t, e) {
    ca(t, e), ca(t + 'Capture', e);
  }
  function ca(t, e) {
    for (lo[t] = e, t = 0; t < e.length; t++) eo.add(e[t]);
  }
  var $0 =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ao = {},
    no = {};
  function W0(t) {
    return ds.call(no, t)
      ? !0
      : ds.call(ao, t)
        ? !1
        : $0.test(t)
          ? (no[t] = !0)
          : ((ao[t] = !0), !1);
  }
  function Vn(t, e, l) {
    if (W0(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            t.removeAttribute(e);
            return;
          case 'boolean':
            var a = e.toLowerCase().slice(0, 5);
            if (a !== 'data-' && a !== 'aria-') {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, '' + l);
      }
  }
  function Zn(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, '' + l);
    }
  }
  function Ge(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, '' + a);
    }
  }
  function Se(t) {
    switch (typeof t) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return t;
      case 'object':
        return t;
      default:
        return '';
    }
  }
  function co(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === 'input' && (e === 'checkbox' || e === 'radio');
  }
  function I0(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < 'u' &&
      typeof a.get == 'function' &&
      typeof a.set == 'function'
    ) {
      var n = a.get,
        c = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (s) {
            (l = '' + s), c.call(this, s);
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: () => l,
          setValue: (s) => {
            l = '' + s;
          },
          stopTracking: () => {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function bs(t) {
    if (!t._valueTracker) {
      var e = co(t) ? 'checked' : 'value';
      t._valueTracker = I0(t, e, '' + t[e]);
    }
  }
  function so(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = '';
    return (
      t && (a = co(t) ? (t.checked ? 'true' : 'false') : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Kn(t) {
    if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var P0 = /[\n"\\]/g;
  function Ne(t) {
    return t.replace(P0, (e) => '\\' + e.charCodeAt(0).toString(16) + ' ');
  }
  function Ss(t, e, l, a, n, c, s, u) {
    (t.name = ''),
      s != null && typeof s != 'function' && typeof s != 'symbol' && typeof s != 'boolean'
        ? (t.type = s)
        : t.removeAttribute('type'),
      e != null
        ? s === 'number'
          ? ((e === 0 && t.value === '') || t.value != e) && (t.value = '' + Se(e))
          : t.value !== '' + Se(e) && (t.value = '' + Se(e))
        : (s !== 'submit' && s !== 'reset') || t.removeAttribute('value'),
      e != null
        ? Ns(t, s, Se(e))
        : l != null
          ? Ns(t, s, Se(l))
          : a != null && t.removeAttribute('value'),
      n == null && c != null && (t.defaultChecked = !!c),
      n != null && (t.checked = n && typeof n != 'function' && typeof n != 'symbol'),
      u != null && typeof u != 'function' && typeof u != 'symbol' && typeof u != 'boolean'
        ? (t.name = '' + Se(u))
        : t.removeAttribute('name');
  }
  function io(t, e, l, a, n, c, s, u) {
    if (
      (c != null &&
        typeof c != 'function' &&
        typeof c != 'symbol' &&
        typeof c != 'boolean' &&
        (t.type = c),
      e != null || l != null)
    ) {
      if (!((c !== 'submit' && c !== 'reset') || e != null)) {
        bs(t);
        return;
      }
      (l = l != null ? '' + Se(l) : ''),
        (e = e != null ? '' + Se(e) : l),
        u || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? n),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (t.checked = u ? t.checked : !!a),
      (t.defaultChecked = !!a),
      s != null &&
        typeof s != 'function' &&
        typeof s != 'symbol' &&
        typeof s != 'boolean' &&
        (t.name = s),
      bs(t);
  }
  function Ns(t, e, l) {
    (e === 'number' && Kn(t.ownerDocument) === t) ||
      t.defaultValue === '' + l ||
      (t.defaultValue = '' + l);
  }
  function sa(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var n = 0; n < l.length; n++) e['$' + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        (n = e.hasOwnProperty('$' + t[l].value)),
          t[l].selected !== n && (t[l].selected = n),
          n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = '' + Se(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          (t[n].selected = !0), a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function uo(t, e, l) {
    if (e != null && ((e = '' + Se(e)), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? '' + Se(l) : '';
  }
  function oo(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(r(92));
        if (Lt(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ''), (e = l);
    }
    (l = Se(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== '' && a !== null && (t.value = a),
      bs(t);
  }
  function ia(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var t1 = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function ro(t, e, l) {
    var a = e.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === ''
      ? a
        ? t.setProperty(e, '')
        : e === 'float'
          ? (t.cssFloat = '')
          : (t[e] = '')
      : a
        ? t.setProperty(e, l)
        : typeof l != 'number' || l === 0 || t1.has(e)
          ? e === 'float'
            ? (t.cssFloat = l)
            : (t[e] = ('' + l).trim())
          : (t[e] = l + 'px');
  }
  function fo(t, e, l) {
    if (e != null && typeof e != 'object') throw Error(r(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0
            ? t.setProperty(a, '')
            : a === 'float'
              ? (t.cssFloat = '')
              : (t[a] = ''));
      for (var n in e) (a = e[n]), e.hasOwnProperty(n) && l[n] !== a && ro(t, n, a);
    } else for (var c in e) e.hasOwnProperty(c) && ro(t, c, e[c]);
  }
  function zs(t) {
    if (t.indexOf('-') === -1) return !1;
    switch (t) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var e1 = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    l1 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Jn(t) {
    return l1.test('' + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Xe() {}
  var As = null;
  function js(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var ua = null,
    oa = null;
  function ho(t) {
    var e = aa(t);
    if (e && (t = e.stateNode)) {
      var l = t[ee] || null;
      switch (((t = e.stateNode), e.type)) {
        case 'input':
          if (
            (Ss(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (e = l.name),
            l.type === 'radio' && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll('input[name="' + Ne('' + e) + '"][type="radio"]'), e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[ee] || null;
                if (!n) throw Error(r(90));
                Ss(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < l.length; e++) (a = l[e]), a.form === t.form && so(a);
          }
          break;
        case 'textarea':
          uo(t, l.value, l.defaultValue);
          break;
        case 'select':
          (e = l.value), e != null && sa(t, !!l.multiple, e, !1);
      }
    }
  }
  var Es = !1;
  function mo(t, e, l) {
    if (Es) return t(e, l);
    Es = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Es = !1),
        (ua !== null || oa !== null) &&
          (Uc(), ua && ((e = ua), (t = oa), (oa = ua = null), ho(e), t)))
      )
        for (e = 0; e < t.length; e++) ho(t[e]);
    }
  }
  function Ja(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[ee] || null;
    if (a === null) return null;
    l = a[e];
    switch (e) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(t === 'button' || t === 'input' || t === 'select' || t === 'textarea'))),
          (t = !a);
        break;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != 'function') throw Error(r(231, e, typeof l));
    return l;
  }
  var Le = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Ts = !1;
  if (Le)
    try {
      var Fa = {};
      Object.defineProperty(Fa, 'passive', {
        get: () => {
          Ts = !0;
        },
      }),
        window.addEventListener('test', Fa, Fa),
        window.removeEventListener('test', Fa, Fa);
    } catch {
      Ts = !1;
    }
  var fl = null,
    Ms = null,
    Fn = null;
  function xo() {
    if (Fn) return Fn;
    var t,
      e = Ms,
      l = e.length,
      a,
      n = 'value' in fl ? fl.value : fl.textContent,
      c = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++);
    var s = l - t;
    for (a = 1; a <= s && e[l - a] === n[c - a]; a++);
    return (Fn = n.slice(t, 1 < a ? 1 - a : void 0));
  }
  function $n(t) {
    var e = t.keyCode;
    return (
      'charCode' in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Wn() {
    return !0;
  }
  function yo() {
    return !1;
  }
  function le(t) {
    function e(l, a, n, c, s) {
      (this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = c),
        (this.target = s),
        (this.currentTarget = null);
      for (var u in t) t.hasOwnProperty(u) && ((l = t[u]), (this[u] = l ? l(c) : c[u]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null
            ? c.defaultPrevented
            : c.returnValue === !1
        )
          ? Wn
          : yo),
        (this.isPropagationStopped = yo),
        this
      );
    }
    return (
      U(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = Wn));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = Wn));
        },
        persist: () => {},
        isPersistent: Wn,
      }),
      e
    );
  }
  var ql = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: (t) => t.timeStamp || Date.now(),
      defaultPrevented: 0,
      isTrusted: 0,
    },
    In = le(ql),
    $a = U({}, ql, { view: 0, detail: 0 }),
    a1 = le($a),
    _s,
    Cs,
    Wa,
    Pn = U({}, $a, {
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
      getModifierState: ws,
      button: 0,
      buttons: 0,
      relatedTarget: (t) =>
        t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget,
      movementX: (t) =>
        'movementX' in t
          ? t.movementX
          : (t !== Wa &&
              (Wa && t.type === 'mousemove'
                ? ((_s = t.screenX - Wa.screenX), (Cs = t.screenY - Wa.screenY))
                : (Cs = _s = 0),
              (Wa = t)),
            _s),
      movementY: (t) => ('movementY' in t ? t.movementY : Cs),
    }),
    vo = le(Pn),
    n1 = U({}, Pn, { dataTransfer: 0 }),
    c1 = le(n1),
    s1 = U({}, $a, { relatedTarget: 0 }),
    Os = le(s1),
    i1 = U({}, ql, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    u1 = le(i1),
    o1 = U({}, ql, {
      clipboardData: (t) => ('clipboardData' in t ? t.clipboardData : window.clipboardData),
    }),
    r1 = le(o1),
    f1 = U({}, ql, { data: 0 }),
    po = le(f1),
    d1 = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    h1 = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    m1 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function x1(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = m1[t]) ? !!e[t] : !1;
  }
  function ws() {
    return x1;
  }
  var y1 = U({}, $a, {
      key: (t) => {
        if (t.key) {
          var e = d1[t.key] || t.key;
          if (e !== 'Unidentified') return e;
        }
        return t.type === 'keypress'
          ? ((t = $n(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup'
            ? h1[t.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ws,
      charCode: (t) => (t.type === 'keypress' ? $n(t) : 0),
      keyCode: (t) => (t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0),
      which: (t) =>
        t.type === 'keypress' ? $n(t) : t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0,
    }),
    v1 = le(y1),
    p1 = U({}, Pn, {
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
    go = le(p1),
    g1 = U({}, $a, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ws,
    }),
    b1 = le(g1),
    S1 = U({}, ql, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    N1 = le(S1),
    z1 = U({}, Pn, {
      deltaX: (t) => ('deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0),
      deltaY: (t) =>
        'deltaY' in t
          ? t.deltaY
          : 'wheelDeltaY' in t
            ? -t.wheelDeltaY
            : 'wheelDelta' in t
              ? -t.wheelDelta
              : 0,
      deltaZ: 0,
      deltaMode: 0,
    }),
    A1 = le(z1),
    j1 = U({}, ql, { newState: 0, oldState: 0 }),
    E1 = le(j1),
    T1 = [9, 13, 27, 32],
    Ds = Le && 'CompositionEvent' in window,
    Ia = null;
  Le && 'documentMode' in document && (Ia = document.documentMode);
  var M1 = Le && 'TextEvent' in window && !Ia,
    bo = Le && (!Ds || (Ia && 8 < Ia && 11 >= Ia)),
    So = ' ',
    No = !1;
  function zo(t, e) {
    switch (t) {
      case 'keyup':
        return T1.indexOf(e.keyCode) !== -1;
      case 'keydown':
        return e.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Ao(t) {
    return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null;
  }
  var ra = !1;
  function _1(t, e) {
    switch (t) {
      case 'compositionend':
        return Ao(e);
      case 'keypress':
        return e.which !== 32 ? null : ((No = !0), So);
      case 'textInput':
        return (t = e.data), t === So && No ? null : t;
      default:
        return null;
    }
  }
  function C1(t, e) {
    if (ra)
      return t === 'compositionend' || (!Ds && zo(t, e))
        ? ((t = xo()), (Fn = Ms = fl = null), (ra = !1), t)
        : null;
    switch (t) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case 'compositionend':
        return bo && e.locale !== 'ko' ? null : e.data;
      default:
        return null;
    }
  }
  var O1 = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
  function jo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === 'input' ? !!O1[t.type] : e === 'textarea';
  }
  function Eo(t, e, l, a) {
    ua ? (oa ? oa.push(a) : (oa = [a])) : (ua = a),
      (e = Gc(e, 'onChange')),
      0 < e.length &&
        ((l = new In('onChange', 'change', null, l, a)), t.push({ event: l, listeners: e }));
  }
  var Pa = null,
    tn = null;
  function w1(t) {
    od(t, 0);
  }
  function tc(t) {
    var e = Ka(t);
    if (so(e)) return t;
  }
  function To(t, e) {
    if (t === 'change') return e;
  }
  var Mo = !1;
  if (Le) {
    var Hs;
    if (Le) {
      var Us = 'oninput' in document;
      if (!Us) {
        var _o = document.createElement('div');
        _o.setAttribute('oninput', 'return;'), (Us = typeof _o.oninput == 'function');
      }
      Hs = Us;
    } else Hs = !1;
    Mo = Hs && (!document.documentMode || 9 < document.documentMode);
  }
  function Co() {
    Pa && (Pa.detachEvent('onpropertychange', Oo), (tn = Pa = null));
  }
  function Oo(t) {
    if (t.propertyName === 'value' && tc(tn)) {
      var e = [];
      Eo(e, tn, t, js(t)), mo(w1, e);
    }
  }
  function D1(t, e, l) {
    t === 'focusin'
      ? (Co(), (Pa = e), (tn = l), Pa.attachEvent('onpropertychange', Oo))
      : t === 'focusout' && Co();
  }
  function H1(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return tc(tn);
  }
  function U1(t, e) {
    if (t === 'click') return tc(e);
  }
  function Q1(t, e) {
    if (t === 'input' || t === 'change') return tc(e);
  }
  function R1(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var he = typeof Object.is == 'function' ? Object.is : R1;
  function en(t, e) {
    if (he(t, e)) return !0;
    if (typeof t != 'object' || t === null || typeof e != 'object' || e === null) return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!ds.call(e, n) || !he(t[n], e[n])) return !1;
    }
    return !0;
  }
  function wo(t) {
    while (t && t.firstChild) t = t.firstChild;
    return t;
  }
  function Do(t, e) {
    var l = wo(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e)) return { node: l, offset: e - t };
        t = a;
      }
      t: {
        while (l) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = wo(l);
    }
  }
  function Ho(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Ho(t, e.parentNode)
            : 'contains' in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Uo(t) {
    t =
      t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Kn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Kn(t.document);
    }
    return e;
  }
  function Qs(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === 'input' &&
        (t.type === 'text' ||
          t.type === 'search' ||
          t.type === 'tel' ||
          t.type === 'url' ||
          t.type === 'password')) ||
        e === 'textarea' ||
        t.contentEditable === 'true')
    );
  }
  var q1 = Le && 'documentMode' in document && 11 >= document.documentMode,
    fa = null,
    Rs = null,
    ln = null,
    qs = !1;
  function Qo(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    qs ||
      fa == null ||
      fa !== Kn(a) ||
      ((a = fa),
      'selectionStart' in a && Qs(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (ln && en(ln, a)) ||
        ((ln = a),
        (a = Gc(Rs, 'onSelect')),
        0 < a.length &&
          ((e = new In('onSelect', 'select', null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = fa))));
  }
  function Bl(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l['Webkit' + t] = 'webkit' + e),
      (l['Moz' + t] = 'moz' + e),
      l
    );
  }
  var da = {
      animationend: Bl('Animation', 'AnimationEnd'),
      animationiteration: Bl('Animation', 'AnimationIteration'),
      animationstart: Bl('Animation', 'AnimationStart'),
      transitionrun: Bl('Transition', 'TransitionRun'),
      transitionstart: Bl('Transition', 'TransitionStart'),
      transitioncancel: Bl('Transition', 'TransitionCancel'),
      transitionend: Bl('Transition', 'TransitionEnd'),
    },
    Bs = {},
    Ro = {};
  Le &&
    ((Ro = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete da.animationend.animation,
      delete da.animationiteration.animation,
      delete da.animationstart.animation),
    'TransitionEvent' in window || delete da.transitionend.transition);
  function kl(t) {
    if (Bs[t]) return Bs[t];
    if (!da[t]) return t;
    var e = da[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Ro) return (Bs[t] = e[l]);
    return t;
  }
  var qo = kl('animationend'),
    Bo = kl('animationiteration'),
    ko = kl('animationstart'),
    B1 = kl('transitionrun'),
    k1 = kl('transitionstart'),
    Y1 = kl('transitioncancel'),
    Yo = kl('transitionend'),
    Go = new Map(),
    ks =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  ks.push('scrollEnd');
  function Oe(t, e) {
    Go.set(t, e), Rl(e, [t]);
  }
  var ec =
      typeof reportError == 'function'
        ? reportError
        : (t) => {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var e = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == 'object' && t !== null && typeof t.message == 'string'
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', t);
              return;
            }
            console.error(t);
          },
    ze = [],
    ha = 0,
    Ys = 0;
  function lc() {
    for (var t = ha, e = (Ys = ha = 0); e < t; ) {
      var l = ze[e];
      ze[e++] = null;
      var a = ze[e];
      ze[e++] = null;
      var n = ze[e];
      ze[e++] = null;
      var c = ze[e];
      if (((ze[e++] = null), a !== null && n !== null)) {
        var s = a.pending;
        s === null ? (n.next = n) : ((n.next = s.next), (s.next = n)), (a.pending = n);
      }
      c !== 0 && Xo(l, n, c);
    }
  }
  function ac(t, e, l, a) {
    (ze[ha++] = t),
      (ze[ha++] = e),
      (ze[ha++] = l),
      (ze[ha++] = a),
      (Ys |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Gs(t, e, l, a) {
    return ac(t, e, l, a), nc(t);
  }
  function Yl(t, e) {
    return ac(t, null, null, e), nc(t);
  }
  function Xo(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, c = t.return; c !== null; )
      (c.childLanes |= l),
        (a = c.alternate),
        a !== null && (a.childLanes |= l),
        c.tag === 22 && ((t = c.stateNode), t === null || t._visibility & 1 || (n = !0)),
        (t = c),
        (c = c.return);
    return t.tag === 3
      ? ((c = t.stateNode),
        n &&
          e !== null &&
          ((n = 31 - de(l)),
          (t = c.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        c)
      : null;
  }
  function nc(t) {
    if (50 < jn) throw ((jn = 0), (Wi = null), Error(r(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var ma = {};
  function G1(t, e, l, a) {
    (this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function me(t, e, l, a) {
    return new G1(t, e, l, a);
  }
  function Xs(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Ve(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = me(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function Lo(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function cc(t, e, l, a, n, c) {
    var s = 0;
    if (((a = t), typeof t == 'function')) Xs(t) && (s = 1);
    else if (typeof t == 'string')
      s = Kh(t, l, Q.current) ? 26 : t === 'html' || t === 'head' || t === 'body' ? 27 : 5;
    else
      t: switch (t) {
        case Qt:
          return (t = me(31, l, e, n)), (t.elementType = Qt), (t.lanes = c), t;
        case nt:
          return Gl(l.children, n, c, e);
        case ot:
          (s = 8), (n |= 24);
          break;
        case Et:
          return (t = me(12, l, e, n | 2)), (t.elementType = Et), (t.lanes = c), t;
        case ht:
          return (t = me(13, l, e, n)), (t.elementType = ht), (t.lanes = c), t;
        case At:
          return (t = me(19, l, e, n)), (t.elementType = At), (t.lanes = c), t;
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case pt:
                s = 10;
                break t;
              case Ot:
                s = 9;
                break t;
              case ct:
                s = 11;
                break t;
              case $:
                s = 14;
                break t;
              case X:
                (s = 16), (a = null);
                break t;
            }
          (s = 29), (l = Error(r(130, t === null ? 'null' : typeof t, ''))), (a = null);
      }
    return (e = me(s, l, e, n)), (e.elementType = t), (e.type = a), (e.lanes = c), e;
  }
  function Gl(t, e, l, a) {
    return (t = me(7, t, a, e)), (t.lanes = l), t;
  }
  function Ls(t, e, l) {
    return (t = me(6, t, null, e)), (t.lanes = l), t;
  }
  function Vo(t) {
    var e = me(18, null, null, 0);
    return (e.stateNode = t), e;
  }
  function Vs(t, e, l) {
    return (
      (e = me(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Zo = new WeakMap();
  function Ae(t, e) {
    if (typeof t == 'object' && t !== null) {
      var l = Zo.get(t);
      return l !== void 0 ? l : ((e = { value: t, source: e, stack: Lu(e) }), Zo.set(t, e), e);
    }
    return { value: t, source: e, stack: Lu(e) };
  }
  var xa = [],
    ya = 0,
    sc = null,
    an = 0,
    je = [],
    Ee = 0,
    dl = null,
    Qe = 1,
    Re = '';
  function Ze(t, e) {
    (xa[ya++] = an), (xa[ya++] = sc), (sc = t), (an = e);
  }
  function Ko(t, e, l) {
    (je[Ee++] = Qe), (je[Ee++] = Re), (je[Ee++] = dl), (dl = t);
    var a = Qe;
    t = Re;
    var n = 32 - de(a) - 1;
    (a &= ~(1 << n)), (l += 1);
    var c = 32 - de(e) + n;
    if (30 < c) {
      var s = n - (n % 5);
      (c = (a & ((1 << s) - 1)).toString(32)),
        (a >>= s),
        (n -= s),
        (Qe = (1 << (32 - de(e) + n)) | (l << n) | a),
        (Re = c + t);
    } else (Qe = (1 << c) | (l << n) | a), (Re = t);
  }
  function Zs(t) {
    t.return !== null && (Ze(t, 1), Ko(t, 1, 0));
  }
  function Ks(t) {
    while (t === sc) (sc = xa[--ya]), (xa[ya] = null), (an = xa[--ya]), (xa[ya] = null);
    while (t === dl)
      (dl = je[--Ee]),
        (je[Ee] = null),
        (Re = je[--Ee]),
        (je[Ee] = null),
        (Qe = je[--Ee]),
        (je[Ee] = null);
  }
  function Jo(t, e) {
    (je[Ee++] = Qe), (je[Ee++] = Re), (je[Ee++] = dl), (Qe = e.id), (Re = e.overflow), (dl = t);
  }
  var Ft = null,
    Mt = null,
    ut = !1,
    hl = null,
    Te = !1,
    Js = Error(r(519));
  function ml(t) {
    var e = Error(
      r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    );
    throw (nn(Ae(e, t)), Js);
  }
  function Fo(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Jt] = t), (e[ee] = a), l)) {
      case 'dialog':
        at('cancel', e), at('close', e);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        at('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Tn.length; l++) at(Tn[l], e);
        break;
      case 'source':
        at('error', e);
        break;
      case 'img':
      case 'image':
      case 'link':
        at('error', e), at('load', e);
        break;
      case 'details':
        at('toggle', e);
        break;
      case 'input':
        at('invalid', e),
          io(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
        break;
      case 'select':
        at('invalid', e);
        break;
      case 'textarea':
        at('invalid', e), oo(e, a.value, a.defaultValue, a.children);
    }
    (l = a.children),
      (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
      e.textContent === '' + l ||
      a.suppressHydrationWarning === !0 ||
      hd(e.textContent, l)
        ? (a.popover != null && (at('beforetoggle', e), at('toggle', e)),
          a.onScroll != null && at('scroll', e),
          a.onScrollEnd != null && at('scrollend', e),
          a.onClick != null && (e.onclick = Xe),
          (e = !0))
        : (e = !1),
      e || ml(t, !0);
  }
  function $o(t) {
    for (Ft = t.return; Ft; )
      switch (Ft.tag) {
        case 5:
        case 31:
        case 13:
          Te = !1;
          return;
        case 27:
        case 3:
          Te = !0;
          return;
        default:
          Ft = Ft.return;
      }
  }
  function va(t) {
    if (t !== Ft) return !1;
    if (!ut) return $o(t), (ut = !0), !1;
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type), (l = !(l !== 'form' && l !== 'button') || du(t.type, t.memoizedProps))),
        (l = !l)),
      l && Mt && ml(t),
      $o(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(r(317));
      Mt = Nd(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(r(317));
      Mt = Nd(t);
    } else
      e === 27
        ? ((e = Mt), Ml(t.type) ? ((t = vu), (vu = null), (Mt = t)) : (Mt = e))
        : (Mt = Ft ? _e(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Xl() {
    (Mt = Ft = null), (ut = !1);
  }
  function Fs() {
    var t = hl;
    return t !== null && (se === null ? (se = t) : se.push.apply(se, t), (hl = null)), t;
  }
  function nn(t) {
    hl === null ? (hl = [t]) : hl.push(t);
  }
  var $s = x(null),
    Ll = null,
    Ke = null;
  function xl(t, e, l) {
    D($s, e._currentValue), (e._currentValue = l);
  }
  function Je(t) {
    (t._currentValue = $s.current), M($s);
  }
  function Ws(t, e, l) {
    while (t !== null) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Is(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var c = n.dependencies;
      if (c !== null) {
        var s = n.child;
        c = c.firstContext;
        t: while (c !== null) {
          var u = c;
          c = n;
          for (var f = 0; f < e.length; f++)
            if (u.context === e[f]) {
              (c.lanes |= l),
                (u = c.alternate),
                u !== null && (u.lanes |= l),
                Ws(c.return, l, t),
                a || (s = null);
              break t;
            }
          c = u.next;
        }
      } else if (n.tag === 18) {
        if (((s = n.return), s === null)) throw Error(r(341));
        (s.lanes |= l), (c = s.alternate), c !== null && (c.lanes |= l), Ws(s, l, t), (s = null);
      } else s = n.child;
      if (s !== null) s.return = n;
      else
        for (s = n; s !== null; ) {
          if (s === t) {
            s = null;
            break;
          }
          if (((n = s.sibling), n !== null)) {
            (n.return = s.return), (s = n);
            break;
          }
          s = s.return;
        }
      n = s;
    }
  }
  function pa(t, e, l, a) {
    t = null;
    for (var n = e, c = !1; n !== null; ) {
      if (!c) {
        if ((n.flags & 524288) !== 0) c = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var s = n.alternate;
        if (s === null) throw Error(r(387));
        if (((s = s.memoizedProps), s !== null)) {
          var u = n.type;
          he(n.pendingProps.value, s.value) || (t !== null ? t.push(u) : (t = [u]));
        }
      } else if (n === J.current) {
        if (((s = n.alternate), s === null)) throw Error(r(387));
        s.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(wn) : (t = [wn]));
      }
      n = n.return;
    }
    t !== null && Is(e, t, l, a), (e.flags |= 262144);
  }
  function ic(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!he(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Vl(t) {
    (Ll = t), (Ke = null), (t = t.dependencies), t !== null && (t.firstContext = null);
  }
  function $t(t) {
    return Wo(Ll, t);
  }
  function uc(t, e) {
    return Ll === null && Vl(t), Wo(t, e);
  }
  function Wo(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Ke === null)) {
      if (t === null) throw Error(r(308));
      (Ke = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288);
    } else Ke = Ke.next = e;
    return l;
  }
  var X1 =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: (l, a) => {
                  t.push(a);
                },
              });
            this.abort = () => {
              (e.aborted = !0), t.forEach((l) => l());
            };
          },
    L1 = o.unstable_scheduleCallback,
    V1 = o.unstable_NormalPriority,
    Rt = {
      $$typeof: pt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ps() {
    return { controller: new X1(), data: new Map(), refCount: 0 };
  }
  function cn(t) {
    t.refCount--,
      t.refCount === 0 &&
        L1(V1, () => {
          t.controller.abort();
        });
  }
  var sn = null,
    ti = 0,
    ga = 0,
    ba = null;
  function Z1(t, e) {
    if (sn === null) {
      var l = (sn = []);
      (ti = 0),
        (ga = au()),
        (ba = {
          status: 'pending',
          value: void 0,
          then: (a) => {
            l.push(a);
          },
        });
    }
    return ti++, e.then(Io, Io), e;
  }
  function Io() {
    if (--ti === 0 && sn !== null) {
      ba !== null && (ba.status = 'fulfilled');
      var t = sn;
      (sn = null), (ga = 0), (ba = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function K1(t, e) {
    var l = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: (n) => {
          l.push(n);
        },
      };
    return (
      t.then(
        () => {
          (a.status = 'fulfilled'), (a.value = e);
          for (var n = 0; n < l.length; n++) (0, l[n])(e);
        },
        (n) => {
          for (a.status = 'rejected', a.reason = n, n = 0; n < l.length; n++) (0, l[n])(void 0);
        }
      ),
      a
    );
  }
  var Po = j.S;
  j.S = (t, e) => {
    (Rf = re()),
      typeof e == 'object' && e !== null && typeof e.then == 'function' && Z1(t, e),
      Po !== null && Po(t, e);
  };
  var Zl = x(null);
  function ei() {
    var t = Zl.current;
    return t !== null ? t : jt.pooledCache;
  }
  function oc(t, e) {
    e === null ? D(Zl, Zl.current) : D(Zl, e.pool);
  }
  function tr() {
    var t = ei();
    return t === null ? null : { parent: Rt._currentValue, pool: t };
  }
  var Sa = Error(r(460)),
    li = Error(r(474)),
    rc = Error(r(542)),
    fc = { then: () => {} };
  function er(t) {
    return (t = t.status), t === 'fulfilled' || t === 'rejected';
  }
  function lr(t, e, l) {
    switch (
      ((l = t[l]), l === void 0 ? t.push(e) : l !== e && (e.then(Xe, Xe), (e = l)), e.status)
    ) {
      case 'fulfilled':
        return e.value;
      case 'rejected':
        throw ((t = e.reason), nr(t), t);
      default:
        if (typeof e.status == 'string') e.then(Xe, Xe);
        else {
          if (((t = jt), t !== null && 100 < t.shellSuspendCounter)) throw Error(r(482));
          (t = e),
            (t.status = 'pending'),
            t.then(
              (a) => {
                if (e.status === 'pending') {
                  var n = e;
                  (n.status = 'fulfilled'), (n.value = a);
                }
              },
              (a) => {
                if (e.status === 'pending') {
                  var n = e;
                  (n.status = 'rejected'), (n.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case 'fulfilled':
            return e.value;
          case 'rejected':
            throw ((t = e.reason), nr(t), t);
        }
        throw ((Jl = e), Sa);
    }
  }
  function Kl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == 'object' && typeof l.then == 'function' ? ((Jl = l), Sa) : l;
    }
  }
  var Jl = null;
  function ar() {
    if (Jl === null) throw Error(r(459));
    var t = Jl;
    return (Jl = null), t;
  }
  function nr(t) {
    if (t === Sa || t === rc) throw Error(r(483));
  }
  var Na = null,
    un = 0;
  function dc(t) {
    var e = un;
    return (un += 1), Na === null && (Na = []), lr(Na, t, e);
  }
  function on(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function hc(t, e) {
    throw e.$$typeof === B
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t
          )
        ));
  }
  function cr(t) {
    function e(y, h) {
      if (t) {
        var v = y.deletions;
        v === null ? ((y.deletions = [h]), (y.flags |= 16)) : v.push(h);
      }
    }
    function l(y, h) {
      if (!t) return null;
      while (h !== null) e(y, h), (h = h.sibling);
      return null;
    }
    function a(y) {
      for (var h = new Map(); y !== null; )
        y.key !== null ? h.set(y.key, y) : h.set(y.index, y), (y = y.sibling);
      return h;
    }
    function n(y, h) {
      return (y = Ve(y, h)), (y.index = 0), (y.sibling = null), y;
    }
    function c(y, h, v) {
      return (
        (y.index = v),
        t
          ? ((v = y.alternate),
            v !== null
              ? ((v = v.index), v < h ? ((y.flags |= 67108866), h) : v)
              : ((y.flags |= 67108866), h))
          : ((y.flags |= 1048576), h)
      );
    }
    function s(y) {
      return t && y.alternate === null && (y.flags |= 67108866), y;
    }
    function u(y, h, v, T) {
      return h === null || h.tag !== 6
        ? ((h = Ls(v, y.mode, T)), (h.return = y), h)
        : ((h = n(h, v)), (h.return = y), h);
    }
    function f(y, h, v, T) {
      var V = v.type;
      return V === nt
        ? E(y, h, v.props.children, T, v.key)
        : h !== null &&
            (h.elementType === V ||
              (typeof V == 'object' && V !== null && V.$$typeof === X && Kl(V) === h.type))
          ? ((h = n(h, v.props)), on(h, v), (h.return = y), h)
          : ((h = cc(v.type, v.key, v.props, null, y.mode, T)), on(h, v), (h.return = y), h);
    }
    function g(y, h, v, T) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== v.containerInfo ||
        h.stateNode.implementation !== v.implementation
        ? ((h = Vs(v, y.mode, T)), (h.return = y), h)
        : ((h = n(h, v.children || [])), (h.return = y), h);
    }
    function E(y, h, v, T, V) {
      return h === null || h.tag !== 7
        ? ((h = Gl(v, y.mode, T, V)), (h.return = y), h)
        : ((h = n(h, v)), (h.return = y), h);
    }
    function _(y, h, v) {
      if ((typeof h == 'string' && h !== '') || typeof h == 'number' || typeof h == 'bigint')
        return (h = Ls('' + h, y.mode, v)), (h.return = y), h;
      if (typeof h == 'object' && h !== null) {
        switch (h.$$typeof) {
          case k:
            return (v = cc(h.type, h.key, h.props, null, y.mode, v)), on(v, h), (v.return = y), v;
          case yt:
            return (h = Vs(h, y.mode, v)), (h.return = y), h;
          case X:
            return (h = Kl(h)), _(y, h, v);
        }
        if (Lt(h) || Yt(h)) return (h = Gl(h, y.mode, v, null)), (h.return = y), h;
        if (typeof h.then == 'function') return _(y, dc(h), v);
        if (h.$$typeof === pt) return _(y, uc(y, h), v);
        hc(y, h);
      }
      return null;
    }
    function N(y, h, v, T) {
      var V = h !== null ? h.key : null;
      if ((typeof v == 'string' && v !== '') || typeof v == 'number' || typeof v == 'bigint')
        return V !== null ? null : u(y, h, '' + v, T);
      if (typeof v == 'object' && v !== null) {
        switch (v.$$typeof) {
          case k:
            return v.key === V ? f(y, h, v, T) : null;
          case yt:
            return v.key === V ? g(y, h, v, T) : null;
          case X:
            return (v = Kl(v)), N(y, h, v, T);
        }
        if (Lt(v) || Yt(v)) return V !== null ? null : E(y, h, v, T, null);
        if (typeof v.then == 'function') return N(y, h, dc(v), T);
        if (v.$$typeof === pt) return N(y, h, uc(y, v), T);
        hc(y, v);
      }
      return null;
    }
    function z(y, h, v, T, V) {
      if ((typeof T == 'string' && T !== '') || typeof T == 'number' || typeof T == 'bigint')
        return (y = y.get(v) || null), u(h, y, '' + T, V);
      if (typeof T == 'object' && T !== null) {
        switch (T.$$typeof) {
          case k:
            return (y = y.get(T.key === null ? v : T.key) || null), f(h, y, T, V);
          case yt:
            return (y = y.get(T.key === null ? v : T.key) || null), g(h, y, T, V);
          case X:
            return (T = Kl(T)), z(y, h, v, T, V);
        }
        if (Lt(T) || Yt(T)) return (y = y.get(v) || null), E(h, y, T, V, null);
        if (typeof T.then == 'function') return z(y, h, v, dc(T), V);
        if (T.$$typeof === pt) return z(y, h, v, uc(h, T), V);
        hc(h, T);
      }
      return null;
    }
    function q(y, h, v, T) {
      for (
        var V = null, rt = null, L = h, P = (h = 0), it = null;
        L !== null && P < v.length;
        P++
      ) {
        L.index > P ? ((it = L), (L = null)) : (it = L.sibling);
        var ft = N(y, L, v[P], T);
        if (ft === null) {
          L === null && (L = it);
          break;
        }
        t && L && ft.alternate === null && e(y, L),
          (h = c(ft, h, P)),
          rt === null ? (V = ft) : (rt.sibling = ft),
          (rt = ft),
          (L = it);
      }
      if (P === v.length) return l(y, L), ut && Ze(y, P), V;
      if (L === null) {
        for (; P < v.length; P++)
          (L = _(y, v[P], T)),
            L !== null && ((h = c(L, h, P)), rt === null ? (V = L) : (rt.sibling = L), (rt = L));
        return ut && Ze(y, P), V;
      }
      for (L = a(L); P < v.length; P++)
        (it = z(L, y, P, v[P], T)),
          it !== null &&
            (t && it.alternate !== null && L.delete(it.key === null ? P : it.key),
            (h = c(it, h, P)),
            rt === null ? (V = it) : (rt.sibling = it),
            (rt = it));
      return t && L.forEach((Dl) => e(y, Dl)), ut && Ze(y, P), V;
    }
    function K(y, h, v, T) {
      if (v == null) throw Error(r(151));
      for (
        var V = null, rt = null, L = h, P = (h = 0), it = null, ft = v.next();
        L !== null && !ft.done;
        P++, ft = v.next()
      ) {
        L.index > P ? ((it = L), (L = null)) : (it = L.sibling);
        var Dl = N(y, L, ft.value, T);
        if (Dl === null) {
          L === null && (L = it);
          break;
        }
        t && L && Dl.alternate === null && e(y, L),
          (h = c(Dl, h, P)),
          rt === null ? (V = Dl) : (rt.sibling = Dl),
          (rt = Dl),
          (L = it);
      }
      if (ft.done) return l(y, L), ut && Ze(y, P), V;
      if (L === null) {
        for (; !ft.done; P++, ft = v.next())
          (ft = _(y, ft.value, T)),
            ft !== null &&
              ((h = c(ft, h, P)), rt === null ? (V = ft) : (rt.sibling = ft), (rt = ft));
        return ut && Ze(y, P), V;
      }
      for (L = a(L); !ft.done; P++, ft = v.next())
        (ft = z(L, y, P, ft.value, T)),
          ft !== null &&
            (t && ft.alternate !== null && L.delete(ft.key === null ? P : ft.key),
            (h = c(ft, h, P)),
            rt === null ? (V = ft) : (rt.sibling = ft),
            (rt = ft));
      return t && L.forEach((nm) => e(y, nm)), ut && Ze(y, P), V;
    }
    function zt(y, h, v, T) {
      if (
        (typeof v == 'object' &&
          v !== null &&
          v.type === nt &&
          v.key === null &&
          (v = v.props.children),
        typeof v == 'object' && v !== null)
      ) {
        switch (v.$$typeof) {
          case k:
            t: {
              for (var V = v.key; h !== null; ) {
                if (h.key === V) {
                  if (((V = v.type), V === nt)) {
                    if (h.tag === 7) {
                      l(y, h.sibling), (T = n(h, v.props.children)), (T.return = y), (y = T);
                      break t;
                    }
                  } else if (
                    h.elementType === V ||
                    (typeof V == 'object' && V !== null && V.$$typeof === X && Kl(V) === h.type)
                  ) {
                    l(y, h.sibling), (T = n(h, v.props)), on(T, v), (T.return = y), (y = T);
                    break t;
                  }
                  l(y, h);
                  break;
                } else e(y, h);
                h = h.sibling;
              }
              v.type === nt
                ? ((T = Gl(v.props.children, y.mode, T, v.key)), (T.return = y), (y = T))
                : ((T = cc(v.type, v.key, v.props, null, y.mode, T)),
                  on(T, v),
                  (T.return = y),
                  (y = T));
            }
            return s(y);
          case yt:
            t: {
              for (V = v.key; h !== null; ) {
                if (h.key === V)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === v.containerInfo &&
                    h.stateNode.implementation === v.implementation
                  ) {
                    l(y, h.sibling), (T = n(h, v.children || [])), (T.return = y), (y = T);
                    break t;
                  } else {
                    l(y, h);
                    break;
                  }
                else e(y, h);
                h = h.sibling;
              }
              (T = Vs(v, y.mode, T)), (T.return = y), (y = T);
            }
            return s(y);
          case X:
            return (v = Kl(v)), zt(y, h, v, T);
        }
        if (Lt(v)) return q(y, h, v, T);
        if (Yt(v)) {
          if (((V = Yt(v)), typeof V != 'function')) throw Error(r(150));
          return (v = V.call(v)), K(y, h, v, T);
        }
        if (typeof v.then == 'function') return zt(y, h, dc(v), T);
        if (v.$$typeof === pt) return zt(y, h, uc(y, v), T);
        hc(y, v);
      }
      return (typeof v == 'string' && v !== '') || typeof v == 'number' || typeof v == 'bigint'
        ? ((v = '' + v),
          h !== null && h.tag === 6
            ? (l(y, h.sibling), (T = n(h, v)), (T.return = y), (y = T))
            : (l(y, h), (T = Ls(v, y.mode, T)), (T.return = y), (y = T)),
          s(y))
        : l(y, h);
    }
    return (y, h, v, T) => {
      try {
        un = 0;
        var V = zt(y, h, v, T);
        return (Na = null), V;
      } catch (L) {
        if (L === Sa || L === rc) throw L;
        var rt = me(29, L, null, y.mode);
        return (rt.lanes = T), (rt.return = y), rt;
      }
    };
  }
  var Fl = cr(!0),
    sr = cr(!1),
    yl = !1;
  function ai(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ni(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function vl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function pl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (xt & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (a.pending = e),
        (e = nc(t)),
        Xo(t, null, l),
        e
      );
    }
    return ac(t, a, e, l), nc(t);
  }
  function rn(t, e, l) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), $u(t, l);
    }
  }
  function ci(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        c = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var s = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null };
          c === null ? (n = c = s) : (c = c.next = s), (l = l.next);
        } while (l !== null);
        c === null ? (n = c = e) : (c = c.next = e);
      } else n = c = e;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: c,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l);
      return;
    }
    (t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e);
  }
  var si = !1;
  function fn() {
    if (si) {
      var t = ba;
      if (t !== null) throw t;
    }
  }
  function dn(t, e, l, a) {
    si = !1;
    var n = t.updateQueue;
    yl = !1;
    var c = n.firstBaseUpdate,
      s = n.lastBaseUpdate,
      u = n.shared.pending;
    if (u !== null) {
      n.shared.pending = null;
      var f = u,
        g = f.next;
      (f.next = null), s === null ? (c = g) : (s.next = g), (s = f);
      var E = t.alternate;
      E !== null &&
        ((E = E.updateQueue),
        (u = E.lastBaseUpdate),
        u !== s && (u === null ? (E.firstBaseUpdate = g) : (u.next = g), (E.lastBaseUpdate = f)));
    }
    if (c !== null) {
      var _ = n.baseState;
      (s = 0), (E = g = f = null), (u = c);
      do {
        var N = u.lane & -536870913,
          z = N !== u.lane;
        if (z ? (st & N) === N : (a & N) === N) {
          N !== 0 && N === ga && (si = !0),
            E !== null &&
              (E = E.next =
                { lane: 0, tag: u.tag, payload: u.payload, callback: null, next: null });
          t: {
            var q = t,
              K = u;
            N = e;
            var zt = l;
            switch (K.tag) {
              case 1:
                if (((q = K.payload), typeof q == 'function')) {
                  _ = q.call(zt, _, N);
                  break t;
                }
                _ = q;
                break t;
              case 3:
                q.flags = (q.flags & -65537) | 128;
              case 0:
                if (
                  ((q = K.payload), (N = typeof q == 'function' ? q.call(zt, _, N) : q), N == null)
                )
                  break t;
                _ = U({}, _, N);
                break t;
              case 2:
                yl = !0;
            }
          }
          (N = u.callback),
            N !== null &&
              ((t.flags |= 64),
              z && (t.flags |= 8192),
              (z = n.callbacks),
              z === null ? (n.callbacks = [N]) : z.push(N));
        } else
          (z = { lane: N, tag: u.tag, payload: u.payload, callback: u.callback, next: null }),
            E === null ? ((g = E = z), (f = _)) : (E = E.next = z),
            (s |= N);
        if (((u = u.next), u === null)) {
          if (((u = n.shared.pending), u === null)) break;
          (z = u), (u = z.next), (z.next = null), (n.lastBaseUpdate = z), (n.shared.pending = null);
        }
      } while (!0);
      E === null && (f = _),
        (n.baseState = f),
        (n.firstBaseUpdate = g),
        (n.lastBaseUpdate = E),
        c === null && (n.shared.lanes = 0),
        (zl |= s),
        (t.lanes = s),
        (t.memoizedState = _);
    }
  }
  function ir(t, e) {
    if (typeof t != 'function') throw Error(r(191, t));
    t.call(e);
  }
  function ur(t, e) {
    var l = t.callbacks;
    if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) ir(l[t], e);
  }
  var za = x(null),
    mc = x(0);
  function or(t, e) {
    (t = al), D(mc, t), D(za, e), (al = t | e.baseLanes);
  }
  function ii() {
    D(mc, al), D(za, za.current);
  }
  function ui() {
    (al = mc.current), M(za), M(mc);
  }
  var xe = x(null),
    Me = null;
  function gl(t) {
    var e = t.alternate;
    D(Ht, Ht.current & 1),
      D(xe, t),
      Me === null && (e === null || za.current !== null || e.memoizedState !== null) && (Me = t);
  }
  function oi(t) {
    D(Ht, Ht.current), D(xe, t), Me === null && (Me = t);
  }
  function rr(t) {
    t.tag === 22 ? (D(Ht, Ht.current), D(xe, t), Me === null && (Me = t)) : bl();
  }
  function bl() {
    D(Ht, Ht.current), D(xe, xe.current);
  }
  function ye(t) {
    M(xe), Me === t && (Me = null), M(Ht);
  }
  var Ht = x(0);
  function xc(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || xu(l) || yu(l))) return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === 'forwards' ||
          e.memoizedProps.revealOrder === 'backwards' ||
          e.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
          e.memoizedProps.revealOrder === 'together')
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      while (e.sibling === null) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var Fe = 0,
    I = null,
    St = null,
    qt = null,
    yc = !1,
    Aa = !1,
    $l = !1,
    vc = 0,
    hn = 0,
    ja = null,
    J1 = 0;
  function wt() {
    throw Error(r(321));
  }
  function ri(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++) if (!he(t[l], e[l])) return !1;
    return !0;
  }
  function fi(t, e, l, a, n, c) {
    return (
      (Fe = c),
      (I = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (j.H = t === null || t.memoizedState === null ? Kr : Ei),
      ($l = !1),
      (c = l(a, n)),
      ($l = !1),
      Aa && (c = dr(e, l, a, n)),
      fr(t),
      c
    );
  }
  function fr(t) {
    j.H = yn;
    var e = St !== null && St.next !== null;
    if (((Fe = 0), (qt = St = I = null), (yc = !1), (hn = 0), (ja = null), e)) throw Error(r(300));
    t === null || Bt || ((t = t.dependencies), t !== null && ic(t) && (Bt = !0));
  }
  function dr(t, e, l, a) {
    I = t;
    var n = 0;
    do {
      if ((Aa && (ja = null), (hn = 0), (Aa = !1), 25 <= n)) throw Error(r(301));
      if (((n += 1), (qt = St = null), t.updateQueue != null)) {
        var c = t.updateQueue;
        (c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0);
      }
      (j.H = Jr), (c = e(l, a));
    } while (Aa);
    return c;
  }
  function F1() {
    var t = j.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == 'function' ? mn(e) : e),
      (t = t.useState()[0]),
      (St !== null ? St.memoizedState : null) !== t && (I.flags |= 1024),
      e
    );
  }
  function di() {
    var t = vc !== 0;
    return (vc = 0), t;
  }
  function hi(t, e, l) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
  }
  function mi(t) {
    if (yc) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      yc = !1;
    }
    (Fe = 0), (qt = St = I = null), (Aa = !1), (hn = vc = 0), (ja = null);
  }
  function te() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return qt === null ? (I.memoizedState = qt = t) : (qt = qt.next = t), qt;
  }
  function Ut() {
    if (St === null) {
      var t = I.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = St.next;
    var e = qt === null ? I.memoizedState : qt.next;
    if (e !== null) (qt = e), (St = t);
    else {
      if (t === null) throw I.alternate === null ? Error(r(467)) : Error(r(310));
      (St = t),
        (t = {
          memoizedState: St.memoizedState,
          baseState: St.baseState,
          baseQueue: St.baseQueue,
          queue: St.queue,
          next: null,
        }),
        qt === null ? (I.memoizedState = qt = t) : (qt = qt.next = t);
    }
    return qt;
  }
  function pc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function mn(t) {
    var e = hn;
    return (
      (hn += 1),
      ja === null && (ja = []),
      (t = lr(ja, t, e)),
      (e = I),
      (qt === null ? e.memoizedState : qt.next) === null &&
        ((e = e.alternate), (j.H = e === null || e.memoizedState === null ? Kr : Ei)),
      t
    );
  }
  function gc(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return mn(t);
      if (t.$$typeof === pt) return $t(t);
    }
    throw Error(r(438, String(t)));
  }
  function xi(t) {
    var e = null,
      l = I.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = I.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map((n) => n.slice()),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = pc()), (I.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = Ye;
    return e.index++, l;
  }
  function $e(t, e) {
    return typeof e == 'function' ? e(t) : e;
  }
  function bc(t) {
    var e = Ut();
    return yi(e, St, t);
  }
  function yi(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue,
      c = a.pending;
    if (c !== null) {
      if (n !== null) {
        var s = n.next;
        (n.next = c.next), (c.next = s);
      }
      (e.baseQueue = n = c), (a.pending = null);
    }
    if (((c = t.baseState), n === null)) t.memoizedState = c;
    else {
      e = n.next;
      var u = (s = null),
        f = null,
        g = e,
        E = !1;
      do {
        var _ = g.lane & -536870913;
        if (_ !== g.lane ? (st & _) === _ : (Fe & _) === _) {
          var N = g.revertLane;
          if (N === 0)
            f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: g.action,
                  hasEagerState: g.hasEagerState,
                  eagerState: g.eagerState,
                  next: null,
                }),
              _ === ga && (E = !0);
          else if ((Fe & N) === N) {
            (g = g.next), N === ga && (E = !0);
            continue;
          } else
            (_ = {
              lane: 0,
              revertLane: g.revertLane,
              gesture: null,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null,
            }),
              f === null ? ((u = f = _), (s = c)) : (f = f.next = _),
              (I.lanes |= N),
              (zl |= N);
          (_ = g.action), $l && l(c, _), (c = g.hasEagerState ? g.eagerState : l(c, _));
        } else
          (N = {
            lane: _,
            revertLane: g.revertLane,
            gesture: g.gesture,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null,
          }),
            f === null ? ((u = f = N), (s = c)) : (f = f.next = N),
            (I.lanes |= _),
            (zl |= _);
        g = g.next;
      } while (g !== null && g !== e);
      if (
        (f === null ? (s = c) : (f.next = u),
        !he(c, t.memoizedState) && ((Bt = !0), E && ((l = ba), l !== null)))
      )
        throw l;
      (t.memoizedState = c), (t.baseState = s), (t.baseQueue = f), (a.lastRenderedState = c);
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function vi(t) {
    var e = Ut(),
      l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      n = l.pending,
      c = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var s = (n = n.next);
      do (c = t(c, s.action)), (s = s.next);
      while (s !== n);
      he(c, e.memoizedState) || (Bt = !0),
        (e.memoizedState = c),
        e.baseQueue === null && (e.baseState = c),
        (l.lastRenderedState = c);
    }
    return [c, a];
  }
  function hr(t, e, l) {
    var a = I,
      n = Ut(),
      c = ut;
    if (c) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = e();
    var s = !he((St || n).memoizedState, l);
    if (
      (s && ((n.memoizedState = l), (Bt = !0)),
      (n = n.queue),
      bi(yr.bind(null, a, n, t), [t]),
      n.getSnapshot !== e || s || (qt !== null && qt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Ea(9, { destroy: void 0 }, xr.bind(null, a, n, l, e), null),
        jt === null)
      )
        throw Error(r(349));
      c || (Fe & 127) !== 0 || mr(a, e, l);
    }
    return l;
  }
  function mr(t, e, l) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = I.updateQueue),
      e === null
        ? ((e = pc()), (I.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
  }
  function xr(t, e, l, a) {
    (e.value = l), (e.getSnapshot = a), vr(e) && pr(t);
  }
  function yr(t, e, l) {
    return l(() => {
      vr(e) && pr(t);
    });
  }
  function vr(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !he(t, l);
    } catch {
      return !0;
    }
  }
  function pr(t) {
    var e = Yl(t, 2);
    e !== null && ie(e, t, 2);
  }
  function pi(t) {
    var e = te();
    if (typeof t == 'function') {
      var l = t;
      if (((t = l()), $l)) {
        ol(!0);
        try {
          l();
        } finally {
          ol(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $e,
        lastRenderedState: t,
      }),
      e
    );
  }
  function gr(t, e, l, a) {
    return (t.baseState = l), yi(t, St, typeof a == 'function' ? a : $e);
  }
  function $1(t, e, l, a, n) {
    if (zc(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var c = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: (s) => {
          c.listeners.push(s);
        },
      };
      j.T !== null ? l(!0) : (c.isTransition = !1),
        a(c),
        (l = e.pending),
        l === null
          ? ((c.next = e.pending = c), br(e, c))
          : ((c.next = l.next), (e.pending = l.next = c));
    }
  }
  function br(t, e) {
    var l = e.action,
      a = e.payload,
      n = t.state;
    if (e.isTransition) {
      var c = j.T,
        s = {};
      j.T = s;
      try {
        var u = l(n, a),
          f = j.S;
        f !== null && f(s, u), Sr(t, e, u);
      } catch (g) {
        gi(t, e, g);
      } finally {
        c !== null && s.types !== null && (c.types = s.types), (j.T = c);
      }
    } else
      try {
        (c = l(n, a)), Sr(t, e, c);
      } catch (g) {
        gi(t, e, g);
      }
  }
  function Sr(t, e, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function'
      ? l.then(
          (a) => {
            Nr(t, e, a);
          },
          (a) => gi(t, e, a)
        )
      : Nr(t, e, l);
  }
  function Nr(t, e, l) {
    (e.status = 'fulfilled'),
      (e.value = l),
      zr(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next), l === e ? (t.pending = null) : ((l = l.next), (e.next = l), br(t, l)));
  }
  function gi(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = 'rejected'), (e.reason = l), zr(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function zr(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Ar(t, e) {
    return e;
  }
  function jr(t, e) {
    if (ut) {
      var l = jt.formState;
      if (l !== null) {
        t: {
          var a = I;
          if (ut) {
            if (Mt) {
              e: {
                for (var n = Mt, c = Te; n.nodeType !== 8; ) {
                  if (!c) {
                    n = null;
                    break e;
                  }
                  if (((n = _e(n.nextSibling)), n === null)) {
                    n = null;
                    break e;
                  }
                }
                (c = n.data), (n = c === 'F!' || c === 'F' ? n : null);
              }
              if (n) {
                (Mt = _e(n.nextSibling)), (a = n.data === 'F!');
                break t;
              }
            }
            ml(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = te()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ar,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = Lr.bind(null, I, a)),
      (a.dispatch = l),
      (a = pi(!1)),
      (c = ji.bind(null, I, !1, a.queue)),
      (a = te()),
      (n = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (l = $1.bind(null, I, n, c, l)),
      (n.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function Er(t) {
    var e = Ut();
    return Tr(e, St, t);
  }
  function Tr(t, e, l) {
    if (
      ((e = yi(t, e, Ar)[0]),
      (t = bc($e)[0]),
      typeof e == 'object' && e !== null && typeof e.then == 'function')
    )
      try {
        var a = mn(e);
      } catch (s) {
        throw s === Sa ? rc : s;
      }
    else a = e;
    e = Ut();
    var n = e.queue,
      c = n.dispatch;
    return (
      l !== e.memoizedState &&
        ((I.flags |= 2048), Ea(9, { destroy: void 0 }, W1.bind(null, n, l), null)),
      [a, c, t]
    );
  }
  function W1(t, e) {
    t.action = e;
  }
  function Mr(t) {
    var e = Ut(),
      l = St;
    if (l !== null) return Tr(e, l, t);
    Ut(), (e = e.memoizedState), (l = Ut());
    var a = l.queue.dispatch;
    return (l.memoizedState = t), [e, a, !1];
  }
  function Ea(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = I.updateQueue),
      e === null && ((e = pc()), (I.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function _r() {
    return Ut().memoizedState;
  }
  function Sc(t, e, l, a) {
    var n = te();
    (I.flags |= t), (n.memoizedState = Ea(1 | e, { destroy: void 0 }, l, a === void 0 ? null : a));
  }
  function Nc(t, e, l, a) {
    var n = Ut();
    a = a === void 0 ? null : a;
    var c = n.memoizedState.inst;
    St !== null && a !== null && ri(a, St.memoizedState.deps)
      ? (n.memoizedState = Ea(e, c, l, a))
      : ((I.flags |= t), (n.memoizedState = Ea(1 | e, c, l, a)));
  }
  function Cr(t, e) {
    Sc(8390656, 8, t, e);
  }
  function bi(t, e) {
    Nc(2048, 8, t, e);
  }
  function I1(t) {
    I.flags |= 4;
    var e = I.updateQueue;
    if (e === null) (e = pc()), (I.updateQueue = e), (e.events = [t]);
    else {
      var l = e.events;
      l === null ? (e.events = [t]) : l.push(t);
    }
  }
  function Or(t) {
    var e = Ut().memoizedState;
    return (
      I1({ ref: e, nextImpl: t }),
      () => {
        if ((xt & 2) !== 0) throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function wr(t, e) {
    return Nc(4, 2, t, e);
  }
  function Dr(t, e) {
    return Nc(4, 4, t, e);
  }
  function Hr(t, e) {
    if (typeof e == 'function') {
      t = t();
      var l = e(t);
      return () => {
        typeof l == 'function' ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        () => {
          e.current = null;
        }
      );
  }
  function Ur(t, e, l) {
    (l = l != null ? l.concat([t]) : null), Nc(4, 4, Hr.bind(null, e, t), l);
  }
  function Si() {}
  function Qr(t, e) {
    var l = Ut();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && ri(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function Rr(t, e) {
    var l = Ut();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && ri(e, a[1])) return a[0];
    if (((a = t()), $l)) {
      ol(!0);
      try {
        t();
      } finally {
        ol(!1);
      }
    }
    return (l.memoizedState = [a, e]), a;
  }
  function Ni(t, e, l) {
    return l === void 0 || ((Fe & 1073741824) !== 0 && (st & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = Bf()), (I.lanes |= t), (zl |= t), l);
  }
  function qr(t, e, l, a) {
    return he(l, e)
      ? l
      : za.current !== null
        ? ((t = Ni(t, l, a)), he(t, e) || (Bt = !0), t)
        : (Fe & 42) === 0 || ((Fe & 1073741824) !== 0 && (st & 261930) === 0)
          ? ((Bt = !0), (t.memoizedState = l))
          : ((t = Bf()), (I.lanes |= t), (zl |= t), e);
  }
  function Br(t, e, l, a, n) {
    var c = H.p;
    H.p = c !== 0 && 8 > c ? c : 8;
    var s = j.T,
      u = {};
    (j.T = u), ji(t, !1, e, l);
    try {
      var f = n(),
        g = j.S;
      if (
        (g !== null && g(u, f), f !== null && typeof f == 'object' && typeof f.then == 'function')
      ) {
        var E = K1(f, a);
        xn(t, e, E, ge(t));
      } else xn(t, e, a, ge(t));
    } catch (_) {
      xn(t, e, { then: () => {}, status: 'rejected', reason: _ }, ge());
    } finally {
      (H.p = c), s !== null && u.types !== null && (s.types = u.types), (j.T = s);
    }
  }
  function P1() {}
  function zi(t, e, l, a) {
    if (t.tag !== 5) throw Error(r(476));
    var n = kr(t).queue;
    Br(t, n, e, O, l === null ? P1 : () => (Yr(t), l(a)));
  }
  function kr(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: O,
      baseState: O,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $e,
        lastRenderedState: O,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $e,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Yr(t) {
    var e = kr(t);
    e.next === null && (e = t.alternate.memoizedState), xn(t, e.next.queue, {}, ge());
  }
  function Ai() {
    return $t(wn);
  }
  function Gr() {
    return Ut().memoizedState;
  }
  function Xr() {
    return Ut().memoizedState;
  }
  function th(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ge();
          t = vl(l);
          var a = pl(e, t, l);
          a !== null && (ie(a, e, l), rn(a, e, l)), (e = { cache: Ps() }), (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function eh(t, e, l) {
    var a = ge();
    (l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      zc(t) ? Vr(e, l) : ((l = Gs(t, e, l, a)), l !== null && (ie(l, t, a), Zr(l, e, a)));
  }
  function Lr(t, e, l) {
    var a = ge();
    xn(t, e, l, a);
  }
  function xn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (zc(t)) Vr(e, n);
    else {
      var c = t.alternate;
      if (
        t.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = e.lastRenderedReducer), c !== null)
      )
        try {
          var s = e.lastRenderedState,
            u = c(s, l);
          if (((n.hasEagerState = !0), (n.eagerState = u), he(u, s)))
            return ac(t, e, n, 0), jt === null && lc(), !1;
        } catch {}
      if (((l = Gs(t, e, n, a)), l !== null)) return ie(l, t, a), Zr(l, e, a), !0;
    }
    return !1;
  }
  function ji(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: au(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      zc(t))
    ) {
      if (e) throw Error(r(479));
    } else (e = Gs(t, l, a, 2)), e !== null && ie(e, t, 2);
  }
  function zc(t) {
    var e = t.alternate;
    return t === I || (e !== null && e === I);
  }
  function Vr(t, e) {
    Aa = yc = !0;
    var l = t.pending;
    l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)), (t.pending = e);
  }
  function Zr(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), $u(t, l);
    }
  }
  var yn = {
    readContext: $t,
    use: gc,
    useCallback: wt,
    useContext: wt,
    useEffect: wt,
    useImperativeHandle: wt,
    useLayoutEffect: wt,
    useInsertionEffect: wt,
    useMemo: wt,
    useReducer: wt,
    useRef: wt,
    useState: wt,
    useDebugValue: wt,
    useDeferredValue: wt,
    useTransition: wt,
    useSyncExternalStore: wt,
    useId: wt,
    useHostTransitionStatus: wt,
    useFormState: wt,
    useActionState: wt,
    useOptimistic: wt,
    useMemoCache: wt,
    useCacheRefresh: wt,
  };
  yn.useEffectEvent = wt;
  var Kr = {
      readContext: $t,
      use: gc,
      useCallback: (t, e) => ((te().memoizedState = [t, e === void 0 ? null : e]), t),
      useContext: $t,
      useEffect: Cr,
      useImperativeHandle: (t, e, l) => {
        (l = l != null ? l.concat([t]) : null), Sc(4194308, 4, Hr.bind(null, e, t), l);
      },
      useLayoutEffect: (t, e) => Sc(4194308, 4, t, e),
      useInsertionEffect: (t, e) => {
        Sc(4, 2, t, e);
      },
      useMemo: (t, e) => {
        var l = te();
        e = e === void 0 ? null : e;
        var a = t();
        if ($l) {
          ol(!0);
          try {
            t();
          } finally {
            ol(!1);
          }
        }
        return (l.memoizedState = [a, e]), a;
      },
      useReducer: (t, e, l) => {
        var a = te();
        if (l !== void 0) {
          var n = l(e);
          if ($l) {
            ol(!0);
            try {
              l(e);
            } finally {
              ol(!1);
            }
          }
        } else n = e;
        return (
          (a.memoizedState = a.baseState = n),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (a.queue = t),
          (t = t.dispatch = eh.bind(null, I, t)),
          [a.memoizedState, t]
        );
      },
      useRef: (t) => {
        var e = te();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: (t) => {
        t = pi(t);
        var e = t.queue,
          l = Lr.bind(null, I, e);
        return (e.dispatch = l), [t.memoizedState, l];
      },
      useDebugValue: Si,
      useDeferredValue: (t, e) => {
        var l = te();
        return Ni(l, t, e);
      },
      useTransition: () => {
        var t = pi(!1);
        return (t = Br.bind(null, I, t.queue, !0, !1)), (te().memoizedState = t), [!1, t];
      },
      useSyncExternalStore: (t, e, l) => {
        var a = I,
          n = te();
        if (ut) {
          if (l === void 0) throw Error(r(407));
          l = l();
        } else {
          if (((l = e()), jt === null)) throw Error(r(349));
          (st & 127) !== 0 || mr(a, e, l);
        }
        n.memoizedState = l;
        var c = { value: l, getSnapshot: e };
        return (
          (n.queue = c),
          Cr(yr.bind(null, a, c, t), [t]),
          (a.flags |= 2048),
          Ea(9, { destroy: void 0 }, xr.bind(null, a, c, l, e), null),
          l
        );
      },
      useId: () => {
        var t = te(),
          e = jt.identifierPrefix;
        if (ut) {
          var l = Re,
            a = Qe;
          (l = (a & ~(1 << (32 - de(a) - 1))).toString(32) + l),
            (e = '_' + e + 'R_' + l),
            (l = vc++),
            0 < l && (e += 'H' + l.toString(32)),
            (e += '_');
        } else (l = J1++), (e = '_' + e + 'r_' + l.toString(32) + '_');
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Ai,
      useFormState: jr,
      useActionState: jr,
      useOptimistic: (t) => {
        var e = te();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (e.queue = l), (e = ji.bind(null, I, !0, l)), (l.dispatch = e), [t, e];
      },
      useMemoCache: xi,
      useCacheRefresh: () => (te().memoizedState = th.bind(null, I)),
      useEffectEvent: (t) => {
        var e = te(),
          l = { impl: t };
        return (
          (e.memoizedState = l),
          () => {
            if ((xt & 2) !== 0) throw Error(r(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Ei = {
      readContext: $t,
      use: gc,
      useCallback: Qr,
      useContext: $t,
      useEffect: bi,
      useImperativeHandle: Ur,
      useInsertionEffect: wr,
      useLayoutEffect: Dr,
      useMemo: Rr,
      useReducer: bc,
      useRef: _r,
      useState: () => bc($e),
      useDebugValue: Si,
      useDeferredValue: (t, e) => {
        var l = Ut();
        return qr(l, St.memoizedState, t, e);
      },
      useTransition: () => {
        var t = bc($e)[0],
          e = Ut().memoizedState;
        return [typeof t == 'boolean' ? t : mn(t), e];
      },
      useSyncExternalStore: hr,
      useId: Gr,
      useHostTransitionStatus: Ai,
      useFormState: Er,
      useActionState: Er,
      useOptimistic: (t, e) => {
        var l = Ut();
        return gr(l, St, t, e);
      },
      useMemoCache: xi,
      useCacheRefresh: Xr,
    };
  Ei.useEffectEvent = Or;
  var Jr = {
    readContext: $t,
    use: gc,
    useCallback: Qr,
    useContext: $t,
    useEffect: bi,
    useImperativeHandle: Ur,
    useInsertionEffect: wr,
    useLayoutEffect: Dr,
    useMemo: Rr,
    useReducer: vi,
    useRef: _r,
    useState: () => vi($e),
    useDebugValue: Si,
    useDeferredValue: (t, e) => {
      var l = Ut();
      return St === null ? Ni(l, t, e) : qr(l, St.memoizedState, t, e);
    },
    useTransition: () => {
      var t = vi($e)[0],
        e = Ut().memoizedState;
      return [typeof t == 'boolean' ? t : mn(t), e];
    },
    useSyncExternalStore: hr,
    useId: Gr,
    useHostTransitionStatus: Ai,
    useFormState: Mr,
    useActionState: Mr,
    useOptimistic: (t, e) => {
      var l = Ut();
      return St !== null ? gr(l, St, t, e) : ((l.baseState = t), [t, l.queue.dispatch]);
    },
    useMemoCache: xi,
    useCacheRefresh: Xr,
  };
  Jr.useEffectEvent = Or;
  function Ti(t, e, l, a) {
    (e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : U({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Mi = {
    enqueueSetState: (t, e, l) => {
      t = t._reactInternals;
      var a = ge(),
        n = vl(a);
      (n.payload = e),
        l != null && (n.callback = l),
        (e = pl(t, n, a)),
        e !== null && (ie(e, t, a), rn(e, t, a));
    },
    enqueueReplaceState: (t, e, l) => {
      t = t._reactInternals;
      var a = ge(),
        n = vl(a);
      (n.tag = 1),
        (n.payload = e),
        l != null && (n.callback = l),
        (e = pl(t, n, a)),
        e !== null && (ie(e, t, a), rn(e, t, a));
    },
    enqueueForceUpdate: (t, e) => {
      t = t._reactInternals;
      var l = ge(),
        a = vl(l);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = pl(t, a, l)),
        e !== null && (ie(e, t, l), rn(e, t, l));
    },
  };
  function Fr(t, e, l, a, n, c, s) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function'
        ? t.shouldComponentUpdate(a, c, s)
        : e.prototype && e.prototype.isPureReactComponent
          ? !en(l, a) || !en(n, c)
          : !0
    );
  }
  function $r(t, e, l, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == 'function' && e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && Mi.enqueueReplaceState(e, e.state, null);
  }
  function Wl(t, e) {
    var l = e;
    if ('ref' in e) {
      l = {};
      for (var a in e) a !== 'ref' && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = U({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function Wr(t) {
    ec(t);
  }
  function Ir(t) {
    console.error(t);
  }
  function Pr(t) {
    ec(t);
  }
  function Ac(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(() => {
        throw a;
      });
    }
  }
  function tf(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, { componentStack: l.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (n) {
      setTimeout(() => {
        throw n;
      });
    }
  }
  function _i(t, e, l) {
    return (
      (l = vl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = () => {
        Ac(t, e);
      }),
      l
    );
  }
  function ef(t) {
    return (t = vl(t)), (t.tag = 3), t;
  }
  function lf(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == 'function') {
      var c = a.value;
      (t.payload = () => n(c)),
        (t.callback = () => {
          tf(e, l, a);
        });
    }
    var s = l.stateNode;
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (t.callback = function () {
        tf(e, l, a),
          typeof n != 'function' && (Al === null ? (Al = new Set([this])) : Al.add(this));
        var u = a.stack;
        this.componentDidCatch(a.value, { componentStack: u !== null ? u : '' });
      });
  }
  function lh(t, e, l, a, n) {
    if (((l.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((e = l.alternate), e !== null && pa(e, l, n, !0), (l = xe.current), l !== null)) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Me === null ? Qc() : l.alternate === null && Dt === 0 && (Dt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === fc
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  tu(t, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === fc
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue), l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  tu(t, a, n)),
              !1
            );
        }
        throw Error(r(435, l.tag));
      }
      return tu(t, a, n), Qc(), !1;
    }
    if (ut)
      return (
        (e = xe.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = n),
            a !== Js && ((t = Error(r(422), { cause: a })), nn(Ae(t, l))))
          : (a !== Js && ((e = Error(r(423), { cause: a })), nn(Ae(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (n &= -n),
            (t.lanes |= n),
            (a = Ae(a, l)),
            (n = _i(t.stateNode, a, n)),
            ci(t, n),
            Dt !== 4 && (Dt = 2)),
        !1
      );
    var c = Error(r(520), { cause: a });
    if (((c = Ae(c, l)), An === null ? (An = [c]) : An.push(c), Dt !== 4 && (Dt = 2), e === null))
      return !0;
    (a = Ae(a, l)), (l = e);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = n & -n),
            (l.lanes |= t),
            (t = _i(l.stateNode, a, t)),
            ci(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (c = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == 'function' ||
                (c !== null &&
                  typeof c.componentDidCatch == 'function' &&
                  (Al === null || !Al.has(c)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = ef(n)),
              lf(n, t, l, a),
              ci(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Ci = Error(r(461)),
    Bt = !1;
  function Wt(t, e, l, a) {
    e.child = t === null ? sr(e, null, l, a) : Fl(e, t.child, l, a);
  }
  function af(t, e, l, a, n) {
    l = l.render;
    var c = e.ref;
    if ('ref' in a) {
      var s = {};
      for (var u in a) u !== 'ref' && (s[u] = a[u]);
    } else s = a;
    return (
      Vl(e),
      (a = fi(t, e, l, s, c, n)),
      (u = di()),
      t !== null && !Bt
        ? (hi(t, e, n), We(t, e, n))
        : (ut && u && Zs(e), (e.flags |= 1), Wt(t, e, a, n), e.child)
    );
  }
  function nf(t, e, l, a, n) {
    if (t === null) {
      var c = l.type;
      return typeof c == 'function' && !Xs(c) && c.defaultProps === void 0 && l.compare === null
        ? ((e.tag = 15), (e.type = c), cf(t, e, c, a, n))
        : ((t = cc(l.type, null, a, e, e.mode, n)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    if (((c = t.child), !qi(t, n))) {
      var s = c.memoizedProps;
      if (((l = l.compare), (l = l !== null ? l : en), l(s, a) && t.ref === e.ref))
        return We(t, e, n);
    }
    return (e.flags |= 1), (t = Ve(c, a)), (t.ref = e.ref), (t.return = e), (e.child = t);
  }
  function cf(t, e, l, a, n) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (en(c, a) && t.ref === e.ref)
        if (((Bt = !1), (e.pendingProps = a = c), qi(t, n))) (t.flags & 131072) !== 0 && (Bt = !0);
        else return (e.lanes = t.lanes), We(t, e, n);
    }
    return Oi(t, e, l, a, n);
  }
  function sf(t, e, l, a) {
    var n = a.children,
      c = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === 'hidden')
    ) {
      if ((e.flags & 128) !== 0) {
        if (((c = c !== null ? c.baseLanes | l : l), t !== null)) {
          for (a = e.child = t.child, n = 0; a !== null; )
            (n = n | a.lanes | a.childLanes), (a = a.sibling);
          a = n & ~c;
        } else (a = 0), (e.child = null);
        return uf(t, e, c, l, a);
      }
      if ((l & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && oc(e, c !== null ? c.cachePool : null),
          c !== null ? or(e, c) : ii(),
          rr(e);
      else return (a = e.lanes = 536870912), uf(t, e, c !== null ? c.baseLanes | l : l, l, a);
    } else
      c !== null
        ? (oc(e, c.cachePool), or(e, c), bl(), (e.memoizedState = null))
        : (t !== null && oc(e, null), ii(), bl());
    return Wt(t, e, n, l), e.child;
  }
  function vn(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function uf(t, e, l, a, n) {
    var c = ei();
    return (
      (c = c === null ? null : { parent: Rt._currentValue, pool: c }),
      (e.memoizedState = { baseLanes: l, cachePool: c }),
      t !== null && oc(e, null),
      ii(),
      rr(e),
      t !== null && pa(t, e, a, !0),
      (e.childLanes = n),
      null
    );
  }
  function jc(t, e) {
    return (
      (e = Tc({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function of(t, e, l) {
    return (
      Fl(e, t.child, null, l),
      (t = jc(e, e.pendingProps)),
      (t.flags |= 2),
      ye(e),
      (e.memoizedState = null),
      t
    );
  }
  function ah(t, e, l) {
    var a = e.pendingProps,
      n = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (ut) {
        if (a.mode === 'hidden') return (t = jc(e, a)), (e.lanes = 536870912), vn(null, t);
        if (
          (oi(e),
          (t = Mt)
            ? ((t = Sd(t, Te)),
              (t = t !== null && t.data === '&' ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: dl !== null ? { id: Qe, overflow: Re } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Vo(t)),
                (l.return = e),
                (e.child = l),
                (Ft = e),
                (Mt = null)))
            : (t = null),
          t === null)
        )
          throw ml(e);
        return (e.lanes = 536870912), null;
      }
      return jc(e, a);
    }
    var c = t.memoizedState;
    if (c !== null) {
      var s = c.dehydrated;
      if ((oi(e), n))
        if (e.flags & 256) (e.flags &= -257), (e = of(t, e, l));
        else if (e.memoizedState !== null) (e.child = t.child), (e.flags |= 128), (e = null);
        else throw Error(r(558));
      else if ((Bt || pa(t, e, l, !1), (n = (l & t.childLanes) !== 0), Bt || n)) {
        if (((a = jt), a !== null && ((s = Wu(a, l)), s !== 0 && s !== c.retryLane)))
          throw ((c.retryLane = s), Yl(t, s), ie(a, t, s), Ci);
        Qc(), (e = of(t, e, l));
      } else
        (t = c.treeContext),
          (Mt = _e(s.nextSibling)),
          (Ft = e),
          (ut = !0),
          (hl = null),
          (Te = !1),
          t !== null && Jo(e, t),
          (e = jc(e, a)),
          (e.flags |= 4096);
      return e;
    }
    return (
      (t = Ve(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Ec(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(r(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Oi(t, e, l, a, n) {
    return (
      Vl(e),
      (l = fi(t, e, l, a, void 0, n)),
      (a = di()),
      t !== null && !Bt
        ? (hi(t, e, n), We(t, e, n))
        : (ut && a && Zs(e), (e.flags |= 1), Wt(t, e, l, n), e.child)
    );
  }
  function rf(t, e, l, a, n, c) {
    return (
      Vl(e),
      (e.updateQueue = null),
      (l = dr(e, a, l, n)),
      fr(t),
      (a = di()),
      t !== null && !Bt
        ? (hi(t, e, c), We(t, e, c))
        : (ut && a && Zs(e), (e.flags |= 1), Wt(t, e, l, c), e.child)
    );
  }
  function ff(t, e, l, a, n) {
    if ((Vl(e), e.stateNode === null)) {
      var c = ma,
        s = l.contextType;
      typeof s == 'object' && s !== null && (c = $t(s)),
        (c = new l(a, c)),
        (e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = Mi),
        (e.stateNode = c),
        (c._reactInternals = e),
        (c = e.stateNode),
        (c.props = a),
        (c.state = e.memoizedState),
        (c.refs = {}),
        ai(e),
        (s = l.contextType),
        (c.context = typeof s == 'object' && s !== null ? $t(s) : ma),
        (c.state = e.memoizedState),
        (s = l.getDerivedStateFromProps),
        typeof s == 'function' && (Ti(e, l, s, a), (c.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof c.getSnapshotBeforeUpdate == 'function' ||
          (typeof c.UNSAFE_componentWillMount != 'function' &&
            typeof c.componentWillMount != 'function') ||
          ((s = c.state),
          typeof c.componentWillMount == 'function' && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == 'function' && c.UNSAFE_componentWillMount(),
          s !== c.state && Mi.enqueueReplaceState(c, c.state, null),
          dn(e, a, c, n),
          fn(),
          (c.state = e.memoizedState)),
        typeof c.componentDidMount == 'function' && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      c = e.stateNode;
      var u = e.memoizedProps,
        f = Wl(l, u);
      c.props = f;
      var g = c.context,
        E = l.contextType;
      (s = ma), typeof E == 'object' && E !== null && (s = $t(E));
      var _ = l.getDerivedStateFromProps;
      (E = typeof _ == 'function' || typeof c.getSnapshotBeforeUpdate == 'function'),
        (u = e.pendingProps !== u),
        E ||
          (typeof c.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof c.componentWillReceiveProps != 'function') ||
          ((u || g !== s) && $r(e, c, a, s)),
        (yl = !1);
      var N = e.memoizedState;
      (c.state = N),
        dn(e, a, c, n),
        fn(),
        (g = e.memoizedState),
        u || N !== g || yl
          ? (typeof _ == 'function' && (Ti(e, l, _, a), (g = e.memoizedState)),
            (f = yl || Fr(e, l, f, a, N, g, s))
              ? (E ||
                  (typeof c.UNSAFE_componentWillMount != 'function' &&
                    typeof c.componentWillMount != 'function') ||
                  (typeof c.componentWillMount == 'function' && c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == 'function' &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == 'function' && (e.flags |= 4194308))
              : (typeof c.componentDidMount == 'function' && (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = g)),
            (c.props = a),
            (c.state = g),
            (c.context = s),
            (a = f))
          : (typeof c.componentDidMount == 'function' && (e.flags |= 4194308), (a = !1));
    } else {
      (c = e.stateNode),
        ni(t, e),
        (s = e.memoizedProps),
        (E = Wl(l, s)),
        (c.props = E),
        (_ = e.pendingProps),
        (N = c.context),
        (g = l.contextType),
        (f = ma),
        typeof g == 'object' && g !== null && (f = $t(g)),
        (u = l.getDerivedStateFromProps),
        (g = typeof u == 'function' || typeof c.getSnapshotBeforeUpdate == 'function') ||
          (typeof c.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof c.componentWillReceiveProps != 'function') ||
          ((s !== _ || N !== f) && $r(e, c, a, f)),
        (yl = !1),
        (N = e.memoizedState),
        (c.state = N),
        dn(e, a, c, n),
        fn();
      var z = e.memoizedState;
      s !== _ || N !== z || yl || (t !== null && t.dependencies !== null && ic(t.dependencies))
        ? (typeof u == 'function' && (Ti(e, l, u, a), (z = e.memoizedState)),
          (E =
            yl ||
            Fr(e, l, E, a, N, z, f) ||
            (t !== null && t.dependencies !== null && ic(t.dependencies)))
            ? (g ||
                (typeof c.UNSAFE_componentWillUpdate != 'function' &&
                  typeof c.componentWillUpdate != 'function') ||
                (typeof c.componentWillUpdate == 'function' && c.componentWillUpdate(a, z, f),
                typeof c.UNSAFE_componentWillUpdate == 'function' &&
                  c.UNSAFE_componentWillUpdate(a, z, f)),
              typeof c.componentDidUpdate == 'function' && (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
            : (typeof c.componentDidUpdate != 'function' ||
                (s === t.memoizedProps && N === t.memoizedState) ||
                (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != 'function' ||
                (s === t.memoizedProps && N === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = z)),
          (c.props = a),
          (c.state = z),
          (c.context = f),
          (a = E))
        : (typeof c.componentDidUpdate != 'function' ||
            (s === t.memoizedProps && N === t.memoizedState) ||
            (e.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != 'function' ||
            (s === t.memoizedProps && N === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (c = a),
      Ec(t, e),
      (a = (e.flags & 128) !== 0),
      c || a
        ? ((c = e.stateNode),
          (l = a && typeof l.getDerivedStateFromError != 'function' ? null : c.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = Fl(e, t.child, null, n)), (e.child = Fl(e, null, l, n)))
            : Wt(t, e, l, n),
          (e.memoizedState = c.state),
          (t = e.child))
        : (t = We(t, e, n)),
      t
    );
  }
  function df(t, e, l, a) {
    return Xl(), (e.flags |= 256), Wt(t, e, l, a), e.child;
  }
  var wi = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Di(t) {
    return { baseLanes: t, cachePool: tr() };
  }
  function Hi(t, e, l) {
    return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= pe), t;
  }
  function hf(t, e, l) {
    var a = e.pendingProps,
      n = !1,
      c = (e.flags & 128) !== 0,
      s;
    if (
      ((s = c) || (s = t !== null && t.memoizedState === null ? !1 : (Ht.current & 2) !== 0),
      s && ((n = !0), (e.flags &= -129)),
      (s = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (ut) {
        if (
          (n ? gl(e) : bl(),
          (t = Mt)
            ? ((t = Sd(t, Te)),
              (t = t !== null && t.data !== '&' ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: dl !== null ? { id: Qe, overflow: Re } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Vo(t)),
                (l.return = e),
                (e.child = l),
                (Ft = e),
                (Mt = null)))
            : (t = null),
          t === null)
        )
          throw ml(e);
        return yu(t) ? (e.lanes = 32) : (e.lanes = 536870912), null;
      }
      var u = a.children;
      return (
        (a = a.fallback),
        n
          ? (bl(),
            (n = e.mode),
            (u = Tc({ mode: 'hidden', children: u }, n)),
            (a = Gl(a, n, l, null)),
            (u.return = e),
            (a.return = e),
            (u.sibling = a),
            (e.child = u),
            (a = e.child),
            (a.memoizedState = Di(l)),
            (a.childLanes = Hi(t, s, l)),
            (e.memoizedState = wi),
            vn(null, a))
          : (gl(e), Ui(e, u))
      );
    }
    var f = t.memoizedState;
    if (f !== null && ((u = f.dehydrated), u !== null)) {
      if (c)
        e.flags & 256
          ? (gl(e), (e.flags &= -257), (e = Qi(t, e, l)))
          : e.memoizedState !== null
            ? (bl(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (bl(),
              (u = a.fallback),
              (n = e.mode),
              (a = Tc({ mode: 'visible', children: a.children }, n)),
              (u = Gl(u, n, l, null)),
              (u.flags |= 2),
              (a.return = e),
              (u.return = e),
              (a.sibling = u),
              (e.child = a),
              Fl(e, t.child, null, l),
              (a = e.child),
              (a.memoizedState = Di(l)),
              (a.childLanes = Hi(t, s, l)),
              (e.memoizedState = wi),
              (e = vn(null, a)));
      else if ((gl(e), yu(u))) {
        if (((s = u.nextSibling && u.nextSibling.dataset), s)) var g = s.dgst;
        (s = g),
          (a = Error(r(419))),
          (a.stack = ''),
          (a.digest = s),
          nn({ value: a, source: null, stack: null }),
          (e = Qi(t, e, l));
      } else if ((Bt || pa(t, e, l, !1), (s = (l & t.childLanes) !== 0), Bt || s)) {
        if (((s = jt), s !== null && ((a = Wu(s, l)), a !== 0 && a !== f.retryLane)))
          throw ((f.retryLane = a), Yl(t, a), ie(s, t, a), Ci);
        xu(u) || Qc(), (e = Qi(t, e, l));
      } else
        xu(u)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = f.treeContext),
            (Mt = _e(u.nextSibling)),
            (Ft = e),
            (ut = !0),
            (hl = null),
            (Te = !1),
            t !== null && Jo(e, t),
            (e = Ui(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return n
      ? (bl(),
        (u = a.fallback),
        (n = e.mode),
        (f = t.child),
        (g = f.sibling),
        (a = Ve(f, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = f.subtreeFlags & 65011712),
        g !== null ? (u = Ve(g, u)) : ((u = Gl(u, n, l, null)), (u.flags |= 2)),
        (u.return = e),
        (a.return = e),
        (a.sibling = u),
        (e.child = a),
        vn(null, a),
        (a = e.child),
        (u = t.child.memoizedState),
        u === null
          ? (u = Di(l))
          : ((n = u.cachePool),
            n !== null
              ? ((f = Rt._currentValue), (n = n.parent !== f ? { parent: f, pool: f } : n))
              : (n = tr()),
            (u = { baseLanes: u.baseLanes | l, cachePool: n })),
        (a.memoizedState = u),
        (a.childLanes = Hi(t, s, l)),
        (e.memoizedState = wi),
        vn(t.child, a))
      : (gl(e),
        (l = t.child),
        (t = l.sibling),
        (l = Ve(l, { mode: 'visible', children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((s = e.deletions), s === null ? ((e.deletions = [t]), (e.flags |= 16)) : s.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function Ui(t, e) {
    return (e = Tc({ mode: 'visible', children: e }, t.mode)), (e.return = t), (t.child = e);
  }
  function Tc(t, e) {
    return (t = me(22, t, null, e)), (t.lanes = 0), t;
  }
  function Qi(t, e, l) {
    return (
      Fl(e, t.child, null, l),
      (t = Ui(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function mf(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Ws(t.return, e, l);
  }
  function Ri(t, e, l, a, n, c) {
    var s = t.memoizedState;
    s === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
          treeForkCount: c,
        })
      : ((s.isBackwards = e),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = a),
        (s.tail = l),
        (s.tailMode = n),
        (s.treeForkCount = c));
  }
  function xf(t, e, l) {
    var a = e.pendingProps,
      n = a.revealOrder,
      c = a.tail;
    a = a.children;
    var s = Ht.current,
      u = (s & 2) !== 0;
    if (
      (u ? ((s = (s & 1) | 2), (e.flags |= 128)) : (s &= 1),
      D(Ht, s),
      Wt(t, e, a, l),
      (a = ut ? an : 0),
      !u && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && mf(t, l, e);
        else if (t.tag === 19) mf(t, l, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        while (t.sibling === null) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    switch (n) {
      case 'forwards':
        for (l = e.child, n = null; l !== null; )
          (t = l.alternate), t !== null && xc(t) === null && (n = l), (l = l.sibling);
        (l = n),
          l === null ? ((n = e.child), (e.child = null)) : ((n = l.sibling), (l.sibling = null)),
          Ri(e, !1, n, l, c, a);
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (((t = n.alternate), t !== null && xc(t) === null)) {
            e.child = n;
            break;
          }
          (t = n.sibling), (n.sibling = l), (l = n), (n = t);
        }
        Ri(e, !0, l, null, c, a);
        break;
      case 'together':
        Ri(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function We(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies), (zl |= e.lanes), (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((pa(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, l = Ve(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        (t = t.sibling), (l = l.sibling = Ve(t, t.pendingProps)), (l.return = e);
      l.sibling = null;
    }
    return e.child;
  }
  function qi(t, e) {
    return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && ic(t)));
  }
  function nh(t, e, l) {
    switch (e.tag) {
      case 3:
        Vt(e, e.stateNode.containerInfo), xl(e, Rt, t.memoizedState.cache), Xl();
        break;
      case 27:
      case 5:
        Ue(e);
        break;
      case 4:
        Vt(e, e.stateNode.containerInfo);
        break;
      case 10:
        xl(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return (e.flags |= 128), oi(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (gl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
              ? hf(t, e, l)
              : (gl(e), (t = We(t, e, l)), t !== null ? t.sibling : null);
        gl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (pa(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          n)
        ) {
          if (a) return xf(t, e, l);
          e.flags |= 128;
        }
        if (
          ((n = e.memoizedState),
          n !== null && ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          D(Ht, Ht.current),
          a)
        )
          break;
        return null;
      case 22:
        return (e.lanes = 0), sf(t, e, l, e.pendingProps);
      case 24:
        xl(e, Rt, t.memoizedState.cache);
    }
    return We(t, e, l);
  }
  function yf(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Bt = !0;
      else {
        if (!qi(t, l) && (e.flags & 128) === 0) return (Bt = !1), nh(t, e, l);
        Bt = (t.flags & 131072) !== 0;
      }
    else (Bt = !1), ut && (e.flags & 1048576) !== 0 && Ko(e, an, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = Kl(e.elementType)), (e.type = t), typeof t == 'function'))
            Xs(t)
              ? ((a = Wl(t, a)), (e.tag = 1), (e = ff(null, e, t, a, l)))
              : ((e.tag = 0), (e = Oi(null, e, t, a, l)));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === ct) {
                (e.tag = 11), (e = af(null, e, t, a, l));
                break t;
              } else if (n === $) {
                (e.tag = 14), (e = nf(null, e, t, a, l));
                break t;
              }
            }
            throw ((e = oe(t) || t), Error(r(306, e, '')));
          }
        }
        return e;
      case 0:
        return Oi(t, e, e.type, e.pendingProps, l);
      case 1:
        return (a = e.type), (n = Wl(a, e.pendingProps)), ff(t, e, a, n, l);
      case 3:
        t: {
          if ((Vt(e, e.stateNode.containerInfo), t === null)) throw Error(r(387));
          a = e.pendingProps;
          var c = e.memoizedState;
          (n = c.element), ni(t, e), dn(e, a, null, l);
          var s = e.memoizedState;
          if (
            ((a = s.cache),
            xl(e, Rt, a),
            a !== c.cache && Is(e, [Rt], l, !0),
            fn(),
            (a = s.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: a, isDehydrated: !1, cache: s.cache }),
              (e.updateQueue.baseState = c),
              (e.memoizedState = c),
              e.flags & 256)
            ) {
              e = df(t, e, a, l);
              break t;
            } else if (a !== n) {
              (n = Ae(Error(r(424)), e)), nn(n), (e = df(t, e, a, l));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === 'HTML' ? t.ownerDocument.body : t),
                  Mt = _e(t.firstChild),
                  Ft = e,
                  ut = !0,
                  hl = null,
                  Te = !0,
                  l = sr(e, null, a, l),
                  e.child = l;
                l;
              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
          else {
            if ((Xl(), a === n)) {
              e = We(t, e, l);
              break t;
            }
            Wt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Ec(t, e),
          t === null
            ? (l = Td(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : ut ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = Xc(tt.current).createElement(l)),
                (a[Jt] = e),
                (a[ee] = t),
                It(a, l, t),
                Zt(a),
                (e.stateNode = a))
            : (e.memoizedState = Td(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
          null
        );
      case 27:
        return (
          Ue(e),
          t === null &&
            ut &&
            ((a = e.stateNode = Ad(e.type, e.pendingProps, tt.current)),
            (Ft = e),
            (Te = !0),
            (n = Mt),
            Ml(e.type) ? ((vu = n), (Mt = _e(a.firstChild))) : (Mt = n)),
          Wt(t, e, e.pendingProps.children, l),
          Ec(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            ut &&
            ((n = a = Mt) &&
              ((a = Hh(a, e.type, e.pendingProps, Te)),
              a !== null
                ? ((e.stateNode = a), (Ft = e), (Mt = _e(a.firstChild)), (Te = !1), (n = !0))
                : (n = !1)),
            n || ml(e)),
          Ue(e),
          (n = e.type),
          (c = e.pendingProps),
          (s = t !== null ? t.memoizedProps : null),
          (a = c.children),
          du(n, c) ? (a = null) : s !== null && du(n, s) && (e.flags |= 32),
          e.memoizedState !== null && ((n = fi(t, e, F1, null, null, l)), (wn._currentValue = n)),
          Ec(t, e),
          Wt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            ut &&
            ((t = l = Mt) &&
              ((l = Uh(l, e.pendingProps, Te)),
              l !== null ? ((e.stateNode = l), (Ft = e), (Mt = null), (t = !0)) : (t = !1)),
            t || ml(e)),
          null
        );
      case 13:
        return hf(t, e, l);
      case 4:
        return (
          Vt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Fl(e, null, a, l)) : Wt(t, e, a, l),
          e.child
        );
      case 11:
        return af(t, e, e.type, e.pendingProps, l);
      case 7:
        return Wt(t, e, e.pendingProps, l), e.child;
      case 8:
        return Wt(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return Wt(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return (a = e.pendingProps), xl(e, e.type, a.value), Wt(t, e, a.children, l), e.child;
      case 9:
        return (
          (n = e.type._context),
          (a = e.pendingProps.children),
          Vl(e),
          (n = $t(n)),
          (a = a(n)),
          (e.flags |= 1),
          Wt(t, e, a, l),
          e.child
        );
      case 14:
        return nf(t, e, e.type, e.pendingProps, l);
      case 15:
        return cf(t, e, e.type, e.pendingProps, l);
      case 19:
        return xf(t, e, l);
      case 31:
        return ah(t, e, l);
      case 22:
        return sf(t, e, l, e.pendingProps);
      case 24:
        return (
          Vl(e),
          (a = $t(Rt)),
          t === null
            ? ((n = ei()),
              n === null &&
                ((n = jt),
                (c = Ps()),
                (n.pooledCache = c),
                c.refCount++,
                c !== null && (n.pooledCacheLanes |= l),
                (n = c)),
              (e.memoizedState = { parent: a, cache: n }),
              ai(e),
              xl(e, Rt, n))
            : ((t.lanes & l) !== 0 && (ni(t, e), dn(e, null, null, l), fn()),
              (n = t.memoizedState),
              (c = e.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (e.memoizedState = n),
                  e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n),
                  xl(e, Rt, a))
                : ((a = c.cache), xl(e, Rt, a), a !== n.cache && Is(e, [Rt], l, !0))),
          Wt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function Ie(t) {
    t.flags |= 4;
  }
  function Bi(t, e, l, a, n) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (n & 335544128) === n))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Xf()) t.flags |= 8192;
        else throw ((Jl = fc), li);
    } else t.flags &= -16777217;
  }
  function vf(t, e) {
    if (e.type !== 'stylesheet' || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !wd(e)))
      if (Xf()) t.flags |= 8192;
      else throw ((Jl = fc), li);
  }
  function Mc(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 && ((e = t.tag !== 22 ? Ju() : 536870912), (t.lanes |= e), (Ca |= e));
  }
  function pn(t, e) {
    if (!ut)
      switch (t.tailMode) {
        case 'hidden':
          e = t.tail;
          for (var l = null; e !== null; ) e.alternate !== null && (l = e), (e = e.sibling);
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case 'collapsed':
          l = t.tail;
          for (var a = null; l !== null; ) l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function _t(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = t),
          (n = n.sibling);
    else
      for (n = t.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = t),
          (n = n.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = l), e;
  }
  function ch(t, e, l) {
    var a = e.pendingProps;
    switch ((Ks(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _t(e), null;
      case 1:
        return _t(e), null;
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Je(Rt),
          Tt(),
          l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (va(e)
              ? Ie(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Fs())),
          _t(e),
          null
        );
      case 26:
        var n = e.type,
          c = e.memoizedState;
        return (
          t === null
            ? (Ie(e), c !== null ? (_t(e), vf(e, c)) : (_t(e), Bi(e, n, null, a, l)))
            : c
              ? c !== t.memoizedState
                ? (Ie(e), _t(e), vf(e, c))
                : (_t(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps), t !== a && Ie(e), _t(e), Bi(e, n, t, a, l)),
          null
        );
      case 27:
        if ((il(e), (l = tt.current), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && Ie(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return _t(e), null;
          }
          (t = Q.current), va(e) ? Fo(e) : ((t = Ad(n, a, l)), (e.stateNode = t), Ie(e));
        }
        return _t(e), null;
      case 5:
        if ((il(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && Ie(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return _t(e), null;
          }
          if (((c = Q.current), va(e))) Fo(e);
          else {
            var s = Xc(tt.current);
            switch (c) {
              case 1:
                c = s.createElementNS('http://www.w3.org/2000/svg', n);
                break;
              case 2:
                c = s.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                break;
              default:
                switch (n) {
                  case 'svg':
                    c = s.createElementNS('http://www.w3.org/2000/svg', n);
                    break;
                  case 'math':
                    c = s.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                    break;
                  case 'script':
                    (c = s.createElement('div')),
                      (c.innerHTML = '<script></script>'),
                      (c = c.removeChild(c.firstChild));
                    break;
                  case 'select':
                    (c =
                      typeof a.is == 'string'
                        ? s.createElement('select', { is: a.is })
                        : s.createElement('select')),
                      a.multiple ? (c.multiple = !0) : a.size && (c.size = a.size);
                    break;
                  default:
                    c =
                      typeof a.is == 'string'
                        ? s.createElement(n, { is: a.is })
                        : s.createElement(n);
                }
            }
            (c[Jt] = e), (c[ee] = a);
            t: for (s = e.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) c.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                (s.child.return = s), (s = s.child);
                continue;
              }
              if (s === e) break;
              while (s.sibling === null) {
                if (s.return === null || s.return === e) break t;
                s = s.return;
              }
              (s.sibling.return = s.return), (s = s.sibling);
            }
            e.stateNode = c;
            switch ((It(c, n, a), n)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                a = !!a.autoFocus;
                break;
              case 'img':
                a = !0;
                break;
              default:
                a = !1;
            }
            a && Ie(e);
          }
        }
        return _t(e), Bi(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && Ie(e);
        else {
          if (typeof a != 'string' && e.stateNode === null) throw Error(r(166));
          if (((t = tt.current), va(e))) {
            if (((t = e.stateNode), (l = e.memoizedProps), (a = null), (n = Ft), n !== null))
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (t[Jt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                hd(t.nodeValue, l)
              )),
              t || ml(e, !0);
          } else (t = Xc(t).createTextNode(a)), (t[Jt] = e), (e.stateNode = t);
        }
        return _t(e), null;
      case 31:
        if (((l = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = va(e)), l !== null)) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (((t = e.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
                throw Error(r(557));
              t[Jt] = e;
            } else Xl(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4);
            _t(e), (t = !1);
          } else
            (l = Fs()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l),
              (t = !0);
          if (!t) return e.flags & 256 ? (ye(e), e) : (ye(e), null);
          if ((e.flags & 128) !== 0) throw Error(r(558));
        }
        return _t(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((n = va(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (((n = e.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
                throw Error(r(317));
              n[Jt] = e;
            } else Xl(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4);
            _t(e), (n = !1);
          } else
            (n = Fs()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return e.flags & 256 ? (ye(e), e) : (ye(e), null);
        }
        return (
          ye(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = l), e)
            : ((l = a !== null),
              (t = t !== null && t.memoizedState !== null),
              l &&
                ((a = e.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (c = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (c = a.memoizedState.cachePool.pool),
                c !== n && (a.flags |= 2048)),
              l !== t && l && (e.child.flags |= 8192),
              Mc(e, e.updateQueue),
              _t(e),
              null)
        );
      case 4:
        return Tt(), t === null && iu(e.stateNode.containerInfo), _t(e), null;
      case 10:
        return Je(e.type), _t(e), null;
      case 19:
        if ((M(Ht), (a = e.memoizedState), a === null)) return _t(e), null;
        if (((n = (e.flags & 128) !== 0), (c = a.rendering), c === null))
          if (n) pn(a, !1);
          else {
            if (Dt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((c = xc(t)), c !== null)) {
                  for (
                    e.flags |= 128,
                      pn(a, !1),
                      t = c.updateQueue,
                      e.updateQueue = t,
                      Mc(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;
                  )
                    Lo(l, t), (l = l.sibling);
                  return D(Ht, (Ht.current & 1) | 2), ut && Ze(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null &&
              re() > Dc &&
              ((e.flags |= 128), (n = !0), pn(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!n)
            if (((t = xc(c)), t !== null)) {
              if (
                ((e.flags |= 128),
                (n = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Mc(e, t),
                pn(a, !0),
                a.tail === null && a.tailMode === 'hidden' && !c.alternate && !ut)
              )
                return _t(e), null;
            } else
              2 * re() - a.renderingStartTime > Dc &&
                l !== 536870912 &&
                ((e.flags |= 128), (n = !0), pn(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((c.sibling = e.child), (e.child = c))
            : ((t = a.last), t !== null ? (t.sibling = c) : (e.child = c), (a.last = c));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = re()),
            (t.sibling = null),
            (l = Ht.current),
            D(Ht, n ? (l & 1) | 2 : l & 1),
            ut && Ze(e, a.treeForkCount),
            t)
          : (_t(e), null);
      case 22:
      case 23:
        return (
          ye(e),
          ui(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (_t(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : _t(e),
          (l = e.updateQueue),
          l !== null && Mc(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && M(Zl),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Je(Rt),
          _t(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function sh(t, e) {
    switch ((Ks(e), e.tag)) {
      case 1:
        return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
      case 3:
        return (
          Je(Rt),
          Tt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 26:
      case 27:
      case 5:
        return il(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if ((ye(e), e.alternate === null)) throw Error(r(340));
          Xl();
        }
        return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
      case 13:
        if ((ye(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(r(340));
          Xl();
        }
        return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
      case 19:
        return M(Ht), null;
      case 4:
        return Tt(), null;
      case 10:
        return Je(e.type), null;
      case 22:
      case 23:
        return (
          ye(e),
          ui(),
          t !== null && M(Zl),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return Je(Rt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function pf(t, e) {
    switch ((Ks(e), e.tag)) {
      case 3:
        Je(Rt), Tt();
        break;
      case 26:
      case 27:
      case 5:
        il(e);
        break;
      case 4:
        Tt();
        break;
      case 31:
        e.memoizedState !== null && ye(e);
        break;
      case 13:
        ye(e);
        break;
      case 19:
        M(Ht);
        break;
      case 10:
        Je(e.type);
        break;
      case 22:
      case 23:
        ye(e), ui(), t !== null && M(Zl);
        break;
      case 24:
        Je(Rt);
    }
  }
  function gn(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var c = l.create,
              s = l.inst;
            (a = c()), (s.destroy = a);
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (u) {
      bt(e, e.return, u);
    }
  }
  function Sl(t, e, l) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var c = n.next;
        a = c;
        do {
          if ((a.tag & t) === t) {
            var s = a.inst,
              u = s.destroy;
            if (u !== void 0) {
              (s.destroy = void 0), (n = e);
              var f = l,
                g = u;
              try {
                g();
              } catch (E) {
                bt(n, f, E);
              }
            }
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (E) {
      bt(e, e.return, E);
    }
  }
  function gf(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        ur(e, l);
      } catch (a) {
        bt(t, t.return, a);
      }
    }
  }
  function bf(t, e, l) {
    (l.props = Wl(t.type, t.memoizedProps)), (l.state = t.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      bt(t, e, a);
    }
  }
  function bn(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
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
        typeof l == 'function' ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      bt(t, e, n);
    }
  }
  function qe(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == 'function')
        try {
          a();
        } catch (n) {
          bt(t, e, n);
        } finally {
          (t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null);
        }
      else if (typeof l == 'function')
        try {
          l(null);
        } catch (n) {
          bt(t, e, n);
        }
      else l.current = null;
  }
  function Sf(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      switch (e) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && a.focus();
          break;
        case 'img':
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      bt(t, t.return, n);
    }
  }
  function ki(t, e, l) {
    try {
      var a = t.stateNode;
      Mh(a, t.type, l, e), (a[ee] = e);
    } catch (n) {
      bt(t, t.return, n);
    }
  }
  function Nf(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && Ml(t.type)) || t.tag === 4
    );
  }
  function Yi(t) {
    t: for (;;) {
      while (t.sibling === null) {
        if (t.return === null || Nf(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if ((t.tag === 27 && Ml(t.type)) || t.flags & 2 || t.child === null || t.tag === 4)
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Gi(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === 'HTML'
                ? l.ownerDocument.body
                : l
            ).insertBefore(t, e)
          : ((e = l.nodeType === 9 ? l.body : l.nodeName === 'HTML' ? l.ownerDocument.body : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Xe));
    else if (
      a !== 4 &&
      (a === 27 && Ml(t.type) && ((l = t.stateNode), (e = null)), (t = t.child), t !== null)
    )
      for (Gi(t, e, l), t = t.sibling; t !== null; ) Gi(t, e, l), (t = t.sibling);
  }
  function _c(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6) (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && Ml(t.type) && (l = t.stateNode), (t = t.child), t !== null))
      for (_c(t, e, l), t = t.sibling; t !== null; ) _c(t, e, l), (t = t.sibling);
  }
  function zf(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
      It(e, a, l), (e[Jt] = t), (e[ee] = l);
    } catch (c) {
      bt(t, t.return, c);
    }
  }
  var Pe = !1,
    kt = !1,
    Xi = !1,
    Af = typeof WeakSet == 'function' ? WeakSet : Set,
    Kt = null;
  function ih(t, e) {
    if (((t = t.containerInfo), (ru = $c), (t = Uo(t)), Qs(t))) {
      if ('selectionStart' in t) var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              c = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, c.nodeType;
            } catch {
              l = null;
              break t;
            }
            var s = 0,
              u = -1,
              f = -1,
              g = 0,
              E = 0,
              _ = t,
              N = null;
            e: for (;;) {
              for (
                var z;
                _ !== l || (n !== 0 && _.nodeType !== 3) || (u = s + n),
                  _ !== c || (a !== 0 && _.nodeType !== 3) || (f = s + a),
                  _.nodeType === 3 && (s += _.nodeValue.length),
                  (z = _.firstChild) !== null;
              )
                (N = _), (_ = z);
              for (;;) {
                if (_ === t) break e;
                if (
                  (N === l && ++g === n && (u = s),
                  N === c && ++E === a && (f = s),
                  (z = _.nextSibling) !== null)
                )
                  break;
                (_ = N), (N = _.parentNode);
              }
              _ = z;
            }
            l = u === -1 || f === -1 ? null : { start: u, end: f };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (fu = { focusedElem: t, selectionRange: l }, $c = !1, Kt = e; Kt !== null; )
      if (((e = Kt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
        (t.return = e), (Kt = t);
      else
        while (Kt !== null) {
          switch (((e = Kt), (c = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue), (t = t !== null ? t.events : null), t !== null)
              )
                for (l = 0; l < t.length; l++) (n = t[l]), (n.ref.impl = n.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && c !== null) {
                (t = void 0),
                  (l = e),
                  (n = c.memoizedProps),
                  (c = c.memoizedState),
                  (a = l.stateNode);
                try {
                  var q = Wl(l.type, n);
                  (t = a.getSnapshotBeforeUpdate(q, c)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (K) {
                  bt(l, l.return, K);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)) mu(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      mu(t);
                      break;
                    default:
                      t.textContent = '';
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
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Kt = t);
            break;
          }
          Kt = e.return;
        }
  }
  function jf(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        el(t, l), a & 4 && gn(5, l);
        break;
      case 1:
        if ((el(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (s) {
              bt(l, l.return, s);
            }
          else {
            var n = Wl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (s) {
              bt(l, l.return, s);
            }
          }
        a & 64 && gf(l), a & 512 && bn(l, l.return);
        break;
      case 3:
        if ((el(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            ur(t, e);
          } catch (s) {
            bt(l, l.return, s);
          }
        }
        break;
      case 27:
        e === null && a & 4 && zf(l);
      case 26:
      case 5:
        el(t, l), e === null && a & 4 && Sf(l), a & 512 && bn(l, l.return);
        break;
      case 12:
        el(t, l);
        break;
      case 31:
        el(t, l), a & 4 && Mf(t, l);
        break;
      case 13:
        el(t, l),
          a & 4 && _f(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((l = yh.bind(null, l)), Qh(t, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Pe), !a)) {
          (e = (e !== null && e.memoizedState !== null) || kt), (n = Pe);
          var c = kt;
          (Pe = a),
            (kt = e) && !c ? ll(t, l, (l.subtreeFlags & 8772) !== 0) : el(t, l),
            (Pe = n),
            (kt = c);
        }
        break;
      case 30:
        break;
      default:
        el(t, l);
    }
  }
  function Ef(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Ef(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && gs(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Ct = null,
    ae = !1;
  function tl(t, e, l) {
    for (l = l.child; l !== null; ) Tf(t, e, l), (l = l.sibling);
  }
  function Tf(t, e, l) {
    if (fe && typeof fe.onCommitFiberUnmount == 'function')
      try {
        fe.onCommitFiberUnmount(Xa, l);
      } catch {}
    switch (l.tag) {
      case 26:
        kt || qe(l, e),
          tl(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        kt || qe(l, e);
        var a = Ct,
          n = ae;
        Ml(l.type) && ((Ct = l.stateNode), (ae = !1)),
          tl(t, e, l),
          _n(l.stateNode),
          (Ct = a),
          (ae = n);
        break;
      case 5:
        kt || qe(l, e);
      case 6:
        if (((a = Ct), (n = ae), (Ct = null), tl(t, e, l), (Ct = a), (ae = n), Ct !== null))
          if (ae)
            try {
              (Ct.nodeType === 9
                ? Ct.body
                : Ct.nodeName === 'HTML'
                  ? Ct.ownerDocument.body
                  : Ct
              ).removeChild(l.stateNode);
            } catch (c) {
              bt(l, e, c);
            }
          else
            try {
              Ct.removeChild(l.stateNode);
            } catch (c) {
              bt(l, e, c);
            }
        break;
      case 18:
        Ct !== null &&
          (ae
            ? ((t = Ct),
              gd(
                t.nodeType === 9 ? t.body : t.nodeName === 'HTML' ? t.ownerDocument.body : t,
                l.stateNode
              ),
              qa(t))
            : gd(Ct, l.stateNode));
        break;
      case 4:
        (a = Ct),
          (n = ae),
          (Ct = l.stateNode.containerInfo),
          (ae = !0),
          tl(t, e, l),
          (Ct = a),
          (ae = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Sl(2, l, e), kt || Sl(4, l, e), tl(t, e, l);
        break;
      case 1:
        kt ||
          (qe(l, e), (a = l.stateNode), typeof a.componentWillUnmount == 'function' && bf(l, e, a)),
          tl(t, e, l);
        break;
      case 21:
        tl(t, e, l);
        break;
      case 22:
        (kt = (a = kt) || l.memoizedState !== null), tl(t, e, l), (kt = a);
        break;
      default:
        tl(t, e, l);
    }
  }
  function Mf(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        qa(t);
      } catch (l) {
        bt(e, e.return, l);
      }
    }
  }
  function _f(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        qa(t);
      } catch (l) {
        bt(e, e.return, l);
      }
  }
  function uh(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Af()), e;
      case 22:
        return (
          (t = t.stateNode), (e = t._retryCache), e === null && (e = t._retryCache = new Af()), e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Cc(t, e) {
    var l = uh(t);
    e.forEach((a) => {
      if (!l.has(a)) {
        l.add(a);
        var n = vh.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function ne(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          c = t,
          s = e,
          u = s;
        t: while (u !== null) {
          switch (u.tag) {
            case 27:
              if (Ml(u.type)) {
                (Ct = u.stateNode), (ae = !1);
                break t;
              }
              break;
            case 5:
              (Ct = u.stateNode), (ae = !1);
              break t;
            case 3:
            case 4:
              (Ct = u.stateNode.containerInfo), (ae = !0);
              break t;
          }
          u = u.return;
        }
        if (Ct === null) throw Error(r(160));
        Tf(c, s, n),
          (Ct = null),
          (ae = !1),
          (c = n.alternate),
          c !== null && (c.return = null),
          (n.return = null);
      }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) Cf(e, t), (e = e.sibling);
  }
  var we = null;
  function Cf(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ne(e, t), ce(t), a & 4 && (Sl(3, t, t.return), gn(3, t), Sl(5, t, t.return));
        break;
      case 1:
        ne(e, t),
          ce(t),
          a & 512 && (kt || l === null || qe(l, l.return)),
          a & 64 &&
            Pe &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var n = we;
        if ((ne(e, t), ce(t), a & 512 && (kt || l === null || qe(l, l.return)), a & 4)) {
          var c = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type), (l = t.memoizedProps), (n = n.ownerDocument || n);
                  e: switch (a) {
                    case 'title':
                      (c = n.getElementsByTagName('title')[0]),
                        (!c ||
                          c[Za] ||
                          c[Jt] ||
                          c.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          c.hasAttribute('itemprop')) &&
                          ((c = n.createElement(a)),
                          n.head.insertBefore(c, n.querySelector('head > title'))),
                        It(c, a, l),
                        (c[Jt] = t),
                        Zt(c),
                        (a = c);
                      break t;
                    case 'link':
                      var s = Cd('link', 'href', n).get(a + (l.href || ''));
                      if (s) {
                        for (var u = 0; u < s.length; u++)
                          if (
                            ((c = s[u]),
                            c.getAttribute('href') ===
                              (l.href == null || l.href === '' ? null : l.href) &&
                              c.getAttribute('rel') === (l.rel == null ? null : l.rel) &&
                              c.getAttribute('title') === (l.title == null ? null : l.title) &&
                              c.getAttribute('crossorigin') ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            s.splice(u, 1);
                            break e;
                          }
                      }
                      (c = n.createElement(a)), It(c, a, l), n.head.appendChild(c);
                      break;
                    case 'meta':
                      if ((s = Cd('meta', 'content', n).get(a + (l.content || '')))) {
                        for (u = 0; u < s.length; u++)
                          if (
                            ((c = s[u]),
                            c.getAttribute('content') ===
                              (l.content == null ? null : '' + l.content) &&
                              c.getAttribute('name') === (l.name == null ? null : l.name) &&
                              c.getAttribute('property') ===
                                (l.property == null ? null : l.property) &&
                              c.getAttribute('http-equiv') ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              c.getAttribute('charset') === (l.charSet == null ? null : l.charSet))
                          ) {
                            s.splice(u, 1);
                            break e;
                          }
                      }
                      (c = n.createElement(a)), It(c, a, l), n.head.appendChild(c);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  (c[Jt] = t), Zt(c), (a = c);
                }
                t.stateNode = a;
              } else Od(n, t.type, t.stateNode);
            else t.stateNode = _d(n, a, t.memoizedProps);
          else
            c !== a
              ? (c === null
                  ? l.stateNode !== null && ((l = l.stateNode), l.parentNode.removeChild(l))
                  : c.count--,
                a === null ? Od(n, t.type, t.stateNode) : _d(n, a, t.memoizedProps))
              : a === null && t.stateNode !== null && ki(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        ne(e, t),
          ce(t),
          a & 512 && (kt || l === null || qe(l, l.return)),
          l !== null && a & 4 && ki(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if ((ne(e, t), ce(t), a & 512 && (kt || l === null || qe(l, l.return)), t.flags & 32)) {
          n = t.stateNode;
          try {
            ia(n, '');
          } catch (q) {
            bt(t, t.return, q);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((n = t.memoizedProps), ki(t, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Xi = !0);
        break;
      case 6:
        if ((ne(e, t), ce(t), a & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          (a = t.memoizedProps), (l = t.stateNode);
          try {
            l.nodeValue = a;
          } catch (q) {
            bt(t, t.return, q);
          }
        }
        break;
      case 3:
        if (
          ((Zc = null),
          (n = we),
          (we = Lc(e.containerInfo)),
          ne(e, t),
          (we = n),
          ce(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            qa(e.containerInfo);
          } catch (q) {
            bt(t, t.return, q);
          }
        Xi && ((Xi = !1), Of(t));
        break;
      case 4:
        (a = we), (we = Lc(t.stateNode.containerInfo)), ne(e, t), ce(t), (we = a);
        break;
      case 12:
        ne(e, t), ce(t);
        break;
      case 31:
        ne(e, t),
          ce(t),
          a & 4 && ((a = t.updateQueue), a !== null && ((t.updateQueue = null), Cc(t, a)));
        break;
      case 13:
        ne(e, t),
          ce(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) != (l !== null && l.memoizedState !== null) &&
            (wc = re()),
          a & 4 && ((a = t.updateQueue), a !== null && ((t.updateQueue = null), Cc(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var f = l !== null && l.memoizedState !== null,
          g = Pe,
          E = kt;
        if (((Pe = g || n), (kt = E || f), ne(e, t), (kt = E), (Pe = g), ce(t), a & 8192))
          t: for (
            e = t.stateNode,
              e._visibility = n ? e._visibility & -2 : e._visibility | 1,
              n && (l === null || f || Pe || kt || Il(t)),
              l = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                f = l = e;
                try {
                  if (((c = f.stateNode), n))
                    (s = c.style),
                      typeof s.setProperty == 'function'
                        ? s.setProperty('display', 'none', 'important')
                        : (s.display = 'none');
                  else {
                    u = f.stateNode;
                    var _ = f.memoizedProps.style,
                      N = _ != null && _.hasOwnProperty('display') ? _.display : null;
                    u.style.display = N == null || typeof N == 'boolean' ? '' : ('' + N).trim();
                  }
                } catch (q) {
                  bt(f, f.return, q);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                f = e;
                try {
                  f.stateNode.nodeValue = n ? '' : f.memoizedProps;
                } catch (q) {
                  bt(f, f.return, q);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                f = e;
                try {
                  var z = f.stateNode;
                  n ? bd(z, !0) : bd(f.stateNode, !1);
                } catch (q) {
                  bt(f, f.return, q);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) || e.memoizedState === null || e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break;
            while (e.sibling === null) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), (e = e.return);
            }
            l === e && (l = null), (e.sibling.return = e.return), (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null && ((l = a.retryQueue), l !== null && ((a.retryQueue = null), Cc(t, l))));
        break;
      case 19:
        ne(e, t),
          ce(t),
          a & 4 && ((a = t.updateQueue), a !== null && ((t.updateQueue = null), Cc(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ne(e, t), ce(t);
    }
  }
  function ce(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Nf(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              c = Yi(t);
            _c(t, c, n);
            break;
          case 5:
            var s = l.stateNode;
            l.flags & 32 && (ia(s, ''), (l.flags &= -33));
            var u = Yi(t);
            _c(t, u, s);
            break;
          case 3:
          case 4:
            var f = l.stateNode.containerInfo,
              g = Yi(t);
            Gi(t, g, f);
            break;
          default:
            throw Error(r(161));
        }
      } catch (E) {
        bt(t, t.return, E);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Of(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Of(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling);
      }
  }
  function el(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) jf(t, e.alternate, e), (e = e.sibling);
  }
  function Il(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Sl(4, e, e.return), Il(e);
          break;
        case 1:
          qe(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == 'function' && bf(e, e.return, l), Il(e);
          break;
        case 27:
          _n(e.stateNode);
        case 26:
        case 5:
          qe(e, e.return), Il(e);
          break;
        case 22:
          e.memoizedState === null && Il(e);
          break;
        case 30:
          Il(e);
          break;
        default:
          Il(e);
      }
      t = t.sibling;
    }
  }
  function ll(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        n = t,
        c = e,
        s = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ll(n, c, l), gn(4, c);
          break;
        case 1:
          if ((ll(n, c, l), (a = c), (n = a.stateNode), typeof n.componentDidMount == 'function'))
            try {
              n.componentDidMount();
            } catch (g) {
              bt(a, a.return, g);
            }
          if (((a = c), (n = a.updateQueue), n !== null)) {
            var u = a.stateNode;
            try {
              var f = n.shared.hiddenCallbacks;
              if (f !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < f.length; n++) ir(f[n], u);
            } catch (g) {
              bt(a, a.return, g);
            }
          }
          l && s & 64 && gf(c), bn(c, c.return);
          break;
        case 27:
          zf(c);
        case 26:
        case 5:
          ll(n, c, l), l && a === null && s & 4 && Sf(c), bn(c, c.return);
          break;
        case 12:
          ll(n, c, l);
          break;
        case 31:
          ll(n, c, l), l && s & 4 && Mf(n, c);
          break;
        case 13:
          ll(n, c, l), l && s & 4 && _f(n, c);
          break;
        case 22:
          c.memoizedState === null && ll(n, c, l), bn(c, c.return);
          break;
        case 30:
          break;
        default:
          ll(n, c, l);
      }
      e = e.sibling;
    }
  }
  function Li(t, e) {
    var l = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && cn(l));
  }
  function Vi(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && cn(t));
  }
  function De(t, e, l, a) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) wf(t, e, l, a), (e = e.sibling);
  }
  function wf(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        De(t, e, l, a), n & 2048 && gn(9, e);
        break;
      case 1:
        De(t, e, l, a);
        break;
      case 3:
        De(t, e, l, a),
          n & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && cn(t)));
        break;
      case 12:
        if (n & 2048) {
          De(t, e, l, a), (t = e.stateNode);
          try {
            var c = e.memoizedProps,
              s = c.id,
              u = c.onPostCommit;
            typeof u == 'function' &&
              u(s, e.alternate === null ? 'mount' : 'update', t.passiveEffectDuration, -0);
          } catch (f) {
            bt(e, e.return, f);
          }
        } else De(t, e, l, a);
        break;
      case 31:
        De(t, e, l, a);
        break;
      case 13:
        De(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        (c = e.stateNode),
          (s = e.alternate),
          e.memoizedState !== null
            ? c._visibility & 2
              ? De(t, e, l, a)
              : Sn(t, e)
            : c._visibility & 2
              ? De(t, e, l, a)
              : ((c._visibility |= 2), Ta(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Li(s, e);
        break;
      case 24:
        De(t, e, l, a), n & 2048 && Vi(e.alternate, e);
        break;
      default:
        De(t, e, l, a);
    }
  }
  function Ta(t, e, l, a, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var c = t,
        s = e,
        u = l,
        f = a,
        g = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Ta(c, s, u, f, n), gn(8, s);
          break;
        case 23:
          break;
        case 22:
          var E = s.stateNode;
          s.memoizedState !== null
            ? E._visibility & 2
              ? Ta(c, s, u, f, n)
              : Sn(c, s)
            : ((E._visibility |= 2), Ta(c, s, u, f, n)),
            n && g & 2048 && Li(s.alternate, s);
          break;
        case 24:
          Ta(c, s, u, f, n), n && g & 2048 && Vi(s.alternate, s);
          break;
        default:
          Ta(c, s, u, f, n);
      }
      e = e.sibling;
    }
  }
  function Sn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          n = a.flags;
        switch (a.tag) {
          case 22:
            Sn(l, a), n & 2048 && Li(a.alternate, a);
            break;
          case 24:
            Sn(l, a), n & 2048 && Vi(a.alternate, a);
            break;
          default:
            Sn(l, a);
        }
        e = e.sibling;
      }
  }
  var Nn = 8192;
  function Ma(t, e, l) {
    if (t.subtreeFlags & Nn) for (t = t.child; t !== null; ) Df(t, e, l), (t = t.sibling);
  }
  function Df(t, e, l) {
    switch (t.tag) {
      case 26:
        Ma(t, e, l),
          t.flags & Nn && t.memoizedState !== null && Jh(l, we, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Ma(t, e, l);
        break;
      case 3:
      case 4:
        var a = we;
        (we = Lc(t.stateNode.containerInfo)), Ma(t, e, l), (we = a);
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Nn), (Nn = 16777216), Ma(t, e, l), (Nn = a))
            : Ma(t, e, l));
        break;
      default:
        Ma(t, e, l);
    }
  }
  function Hf(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function zn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Kt = a), Qf(a, t);
        }
      Hf(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Uf(t), (t = t.sibling);
  }
  function Uf(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        zn(t), t.flags & 2048 && Sl(9, t, t.return);
        break;
      case 3:
        zn(t);
        break;
      case 12:
        zn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Oc(t))
          : zn(t);
        break;
      default:
        zn(t);
    }
  }
  function Oc(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Kt = a), Qf(a, t);
        }
      Hf(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Sl(8, e, e.return), Oc(e);
          break;
        case 22:
          (l = e.stateNode), l._visibility & 2 && ((l._visibility &= -3), Oc(e));
          break;
        default:
          Oc(e);
      }
      t = t.sibling;
    }
  }
  function Qf(t, e) {
    while (Kt !== null) {
      var l = Kt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Sl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          cn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (Kt = a);
      else
        for (l = t; Kt !== null; ) {
          a = Kt;
          var n = a.sibling,
            c = a.return;
          if ((Ef(a), a === l)) {
            Kt = null;
            break;
          }
          if (n !== null) {
            (n.return = c), (Kt = n);
            break;
          }
          Kt = c;
        }
    }
  }
  var oh = {
      getCacheForType: (t) => {
        var e = $t(Rt),
          l = e.data.get(t);
        return l === void 0 && ((l = t()), e.data.set(t, l)), l;
      },
      cacheSignal: () => $t(Rt).controller.signal,
    },
    rh = typeof WeakMap == 'function' ? WeakMap : Map,
    xt = 0,
    jt = null,
    lt = null,
    st = 0,
    gt = 0,
    ve = null,
    Nl = !1,
    _a = !1,
    Zi = !1,
    al = 0,
    Dt = 0,
    zl = 0,
    Pl = 0,
    Ki = 0,
    pe = 0,
    Ca = 0,
    An = null,
    se = null,
    Ji = !1,
    wc = 0,
    Rf = 0,
    Dc = 1 / 0,
    Hc = null,
    Al = null,
    Gt = 0,
    jl = null,
    Oa = null,
    nl = 0,
    Fi = 0,
    $i = null,
    qf = null,
    jn = 0,
    Wi = null;
  function ge() {
    return (xt & 2) !== 0 && st !== 0 ? st & -st : j.T !== null ? au() : Iu();
  }
  function Bf() {
    if (pe === 0)
      if ((st & 536870912) === 0 || ut) {
        var t = Gn;
        (Gn <<= 1), (Gn & 3932160) === 0 && (Gn = 262144), (pe = t);
      } else pe = 536870912;
    return (t = xe.current), t !== null && (t.flags |= 32), pe;
  }
  function ie(t, e, l) {
    ((t === jt && (gt === 2 || gt === 9)) || t.cancelPendingCommit !== null) &&
      (wa(t, 0), El(t, st, pe, !1)),
      Va(t, l),
      ((xt & 2) === 0 || t !== jt) &&
        (t === jt && ((xt & 2) === 0 && (Pl |= l), Dt === 4 && El(t, st, pe, !1)), Be(t));
  }
  function kf(t, e, l) {
    if ((xt & 6) !== 0) throw Error(r(327));
    var a = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || La(t, e),
      n = a ? hh(t, e) : Pi(t, e, !0),
      c = a;
    do {
      if (n === 0) {
        _a && !a && El(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), c && !fh(l))) {
          (n = Pi(t, e, !1)), (c = !1);
          continue;
        }
        if (n === 2) {
          if (((c = e), t.errorRecoveryDisabledLanes & c)) var s = 0;
          else (s = t.pendingLanes & -536870913), (s = s !== 0 ? s : s & 536870912 ? 536870912 : 0);
          if (s !== 0) {
            e = s;
            t: {
              var u = t;
              n = An;
              var f = u.current.memoizedState.isDehydrated;
              if ((f && (wa(u, s).flags |= 256), (s = Pi(u, s, !1)), s !== 2)) {
                if (Zi && !f) {
                  (u.errorRecoveryDisabledLanes |= c), (Pl |= c), (n = 4);
                  break t;
                }
                (c = se), (se = n), c !== null && (se === null ? (se = c) : se.push.apply(se, c));
              }
              n = s;
            }
            if (((c = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          wa(t, 0), El(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (c = n), c)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              El(a, e, pe, !Nl);
              break t;
            case 2:
              se = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((n = wc + 300 - re()), 10 < n)) {
            if ((El(a, e, pe, !Nl), Ln(a, 0, !0) !== 0)) break t;
            (nl = e),
              (a.timeoutHandle = vd(
                Yf.bind(null, a, l, se, Hc, Ji, e, pe, Pl, Ca, Nl, c, 'Throttled', -0, 0),
                n
              ));
            break t;
          }
          Yf(a, l, se, Hc, Ji, e, pe, Pl, Ca, Nl, c, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Be(t);
  }
  function Yf(t, e, l, a, n, c, s, u, f, g, E, _, N, z) {
    if (((t.timeoutHandle = -1), (_ = e.subtreeFlags), _ & 8192 || (_ & 16785408) === 16785408)) {
      (_ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Xe,
      }),
        Df(e, c, _);
      var q = (c & 62914560) === c ? wc - re() : (c & 4194048) === c ? Rf - re() : 0;
      if (((q = Fh(_, q)), q !== null)) {
        (nl = c),
          (t.cancelPendingCommit = q(Ff.bind(null, t, e, c, l, a, n, s, u, f, E, _, null, N, z))),
          El(t, c, s, !g);
        return;
      }
    }
    Ff(t, e, c, l, a, n, s, u, f);
  }
  function fh(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            c = n.getSnapshot;
          n = n.value;
          try {
            if (!he(c(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null)) (l.return = e), (e = l);
      else {
        if (e === t) break;
        while (e.sibling === null) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function El(t, e, l, a) {
    (e &= ~Ki),
      (e &= ~Pl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var n = e; 0 < n; ) {
      var c = 31 - de(n),
        s = 1 << c;
      (a[c] = -1), (n &= ~s);
    }
    l !== 0 && Fu(t, l, e);
  }
  function Uc() {
    return (xt & 6) === 0 ? (En(0), !1) : !0;
  }
  function Ii() {
    if (lt !== null) {
      if (gt === 0) var t = lt.return;
      else (t = lt), (Ke = Ll = null), mi(t), (Na = null), (un = 0), (t = lt);
      while (t !== null) pf(t.alternate, t), (t = t.return);
      lt = null;
    }
  }
  function wa(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && ((t.timeoutHandle = -1), Oh(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      (nl = 0),
      Ii(),
      (jt = t),
      (lt = l = Ve(t.current, null)),
      (st = e),
      (gt = 0),
      (ve = null),
      (Nl = !1),
      (_a = La(t, e)),
      (Zi = !1),
      (Ca = pe = Ki = Pl = zl = Dt = 0),
      (se = An = null),
      (Ji = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - de(a),
          c = 1 << n;
        (e |= t[n]), (a &= ~c);
      }
    return (al = e), lc(), l;
  }
  function Gf(t, e) {
    (I = null),
      (j.H = yn),
      e === Sa || e === rc
        ? ((e = ar()), (gt = 3))
        : e === li
          ? ((e = ar()), (gt = 4))
          : (gt =
              e === Ci
                ? 8
                : e !== null && typeof e == 'object' && typeof e.then == 'function'
                  ? 6
                  : 1),
      (ve = e),
      lt === null && ((Dt = 1), Ac(t, Ae(e, t.current)));
  }
  function Xf() {
    var t = xe.current;
    return t === null
      ? !0
      : (st & 4194048) === st
        ? Me === null
        : (st & 62914560) === st || (st & 536870912) !== 0
          ? t === Me
          : !1;
  }
  function Lf() {
    var t = j.H;
    return (j.H = yn), t === null ? yn : t;
  }
  function Vf() {
    var t = j.A;
    return (j.A = oh), t;
  }
  function Qc() {
    (Dt = 4),
      Nl || ((st & 4194048) !== st && xe.current !== null) || (_a = !0),
      ((zl & 134217727) === 0 && (Pl & 134217727) === 0) || jt === null || El(jt, st, pe, !1);
  }
  function Pi(t, e, l) {
    var a = xt;
    xt |= 2;
    var n = Lf(),
      c = Vf();
    (jt !== t || st !== e) && ((Hc = null), wa(t, e)), (e = !1);
    var s = Dt;
    t: do
      try {
        if (gt !== 0 && lt !== null) {
          var u = lt,
            f = ve;
          switch (gt) {
            case 8:
              Ii(), (s = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              xe.current === null && (e = !0);
              var g = gt;
              if (((gt = 0), (ve = null), Da(t, u, f, g), l && _a)) {
                s = 0;
                break t;
              }
              break;
            default:
              (g = gt), (gt = 0), (ve = null), Da(t, u, f, g);
          }
        }
        dh(), (s = Dt);
        break;
      } catch (E) {
        Gf(t, E);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Ke = Ll = null),
      (xt = a),
      (j.H = n),
      (j.A = c),
      lt === null && ((jt = null), (st = 0), lc()),
      s
    );
  }
  function dh() {
    while (lt !== null) Zf(lt);
  }
  function hh(t, e) {
    var l = xt;
    xt |= 2;
    var a = Lf(),
      n = Vf();
    jt !== t || st !== e ? ((Hc = null), (Dc = re() + 500), wa(t, e)) : (_a = La(t, e));
    t: do
      try {
        if (gt !== 0 && lt !== null) {
          e = lt;
          var c = ve;
          e: switch (gt) {
            case 1:
              (gt = 0), (ve = null), Da(t, e, c, 1);
              break;
            case 2:
            case 9:
              if (er(c)) {
                (gt = 0), (ve = null), Kf(e);
                break;
              }
              (e = () => {
                (gt !== 2 && gt !== 9) || jt !== t || (gt = 7), Be(t);
              }),
                c.then(e, e);
              break t;
            case 3:
              gt = 7;
              break t;
            case 4:
              gt = 5;
              break t;
            case 7:
              er(c) ? ((gt = 0), (ve = null), Kf(e)) : ((gt = 0), (ve = null), Da(t, e, c, 7));
              break;
            case 5:
              var s = null;
              switch (lt.tag) {
                case 26:
                  s = lt.memoizedState;
                case 5:
                case 27:
                  var u = lt;
                  if (s ? wd(s) : u.stateNode.complete) {
                    (gt = 0), (ve = null);
                    var f = u.sibling;
                    if (f !== null) lt = f;
                    else {
                      var g = u.return;
                      g !== null ? ((lt = g), Rc(g)) : (lt = null);
                    }
                    break e;
                  }
              }
              (gt = 0), (ve = null), Da(t, e, c, 5);
              break;
            case 6:
              (gt = 0), (ve = null), Da(t, e, c, 6);
              break;
            case 8:
              Ii(), (Dt = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        mh();
        break;
      } catch (E) {
        Gf(t, E);
      }
    while (!0);
    return (
      (Ke = Ll = null),
      (j.H = a),
      (j.A = n),
      (xt = l),
      lt !== null ? 0 : ((jt = null), (st = 0), lc(), Dt)
    );
  }
  function mh() {
    while (lt !== null && !R0()) Zf(lt);
  }
  function Zf(t) {
    var e = yf(t.alternate, t, al);
    (t.memoizedProps = t.pendingProps), e === null ? Rc(t) : (lt = e);
  }
  function Kf(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = rf(l, e, e.pendingProps, e.type, void 0, st);
        break;
      case 11:
        e = rf(l, e, e.pendingProps, e.type.render, e.ref, st);
        break;
      case 5:
        mi(e);
      default:
        pf(l, e), (e = lt = Lo(e, al)), (e = yf(l, e, al));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Rc(t) : (lt = e);
  }
  function Da(t, e, l, a) {
    (Ke = Ll = null), mi(e), (Na = null), (un = 0);
    var n = e.return;
    try {
      if (lh(t, n, e, l, st)) {
        (Dt = 1), Ac(t, Ae(l, t.current)), (lt = null);
        return;
      }
    } catch (c) {
      if (n !== null) throw ((lt = n), c);
      (Dt = 1), Ac(t, Ae(l, t.current)), (lt = null);
      return;
    }
    e.flags & 32768
      ? (ut || a === 1
          ? (t = !0)
          : _a || (st & 536870912) !== 0
            ? (t = !1)
            : ((Nl = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = xe.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        Jf(e, t))
      : Rc(e);
  }
  function Rc(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Jf(e, Nl);
        return;
      }
      t = e.return;
      var l = ch(e.alternate, e, al);
      if (l !== null) {
        lt = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        lt = e;
        return;
      }
      lt = e = t;
    } while (e !== null);
    Dt === 0 && (Dt = 5);
  }
  function Jf(t, e) {
    do {
      var l = sh(t.alternate, t);
      if (l !== null) {
        (l.flags &= 32767), (lt = l);
        return;
      }
      if (
        ((l = t.return),
        l !== null && ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        lt = t;
        return;
      }
      lt = t = l;
    } while (t !== null);
    (Dt = 6), (lt = null);
  }
  function Ff(t, e, l, a, n, c, s, u, f) {
    t.cancelPendingCommit = null;
    do qc();
    while (Gt !== 0);
    if ((xt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((c = e.lanes | e.childLanes),
        (c |= Ys),
        K0(t, l, c, s, u, f),
        t === jt && ((lt = jt = null), (st = 0)),
        (Oa = e),
        (jl = t),
        (nl = l),
        (Fi = c),
        ($i = n),
        (qf = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null), (t.callbackPriority = 0), ph(kn, () => (td(), null)))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = j.T), (j.T = null), (n = H.p), (H.p = 2), (s = xt), (xt |= 4);
        try {
          ih(t, e, l);
        } finally {
          (xt = s), (H.p = n), (j.T = a);
        }
      }
      (Gt = 1), $f(), Wf(), If();
    }
  }
  function $f() {
    if (Gt === 1) {
      Gt = 0;
      var t = jl,
        e = Oa,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        (l = j.T), (j.T = null);
        var a = H.p;
        H.p = 2;
        var n = xt;
        xt |= 4;
        try {
          Cf(e, t);
          var c = fu,
            s = Uo(t.containerInfo),
            u = c.focusedElem,
            f = c.selectionRange;
          if (s !== u && u && u.ownerDocument && Ho(u.ownerDocument.documentElement, u)) {
            if (f !== null && Qs(u)) {
              var g = f.start,
                E = f.end;
              if ((E === void 0 && (E = g), 'selectionStart' in u))
                (u.selectionStart = g), (u.selectionEnd = Math.min(E, u.value.length));
              else {
                var _ = u.ownerDocument || document,
                  N = (_ && _.defaultView) || window;
                if (N.getSelection) {
                  var z = N.getSelection(),
                    q = u.textContent.length,
                    K = Math.min(f.start, q),
                    zt = f.end === void 0 ? K : Math.min(f.end, q);
                  !z.extend && K > zt && ((s = zt), (zt = K), (K = s));
                  var y = Do(u, K),
                    h = Do(u, zt);
                  if (
                    y &&
                    h &&
                    (z.rangeCount !== 1 ||
                      z.anchorNode !== y.node ||
                      z.anchorOffset !== y.offset ||
                      z.focusNode !== h.node ||
                      z.focusOffset !== h.offset)
                  ) {
                    var v = _.createRange();
                    v.setStart(y.node, y.offset),
                      z.removeAllRanges(),
                      K > zt
                        ? (z.addRange(v), z.extend(h.node, h.offset))
                        : (v.setEnd(h.node, h.offset), z.addRange(v));
                  }
                }
              }
            }
            for (_ = [], z = u; (z = z.parentNode); )
              z.nodeType === 1 && _.push({ element: z, left: z.scrollLeft, top: z.scrollTop });
            for (typeof u.focus == 'function' && u.focus(), u = 0; u < _.length; u++) {
              var T = _[u];
              (T.element.scrollLeft = T.left), (T.element.scrollTop = T.top);
            }
          }
          ($c = !!ru), (fu = ru = null);
        } finally {
          (xt = n), (H.p = a), (j.T = l);
        }
      }
      (t.current = e), (Gt = 2);
    }
  }
  function Wf() {
    if (Gt === 2) {
      Gt = 0;
      var t = jl,
        e = Oa,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        (l = j.T), (j.T = null);
        var a = H.p;
        H.p = 2;
        var n = xt;
        xt |= 4;
        try {
          jf(t, e.alternate, e);
        } finally {
          (xt = n), (H.p = a), (j.T = l);
        }
      }
      Gt = 3;
    }
  }
  function If() {
    if (Gt === 4 || Gt === 3) {
      (Gt = 0), q0();
      var t = jl,
        e = Oa,
        l = nl,
        a = qf;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Gt = 5)
        : ((Gt = 0), (Oa = jl = null), Pf(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (
        (n === 0 && (Al = null),
        vs(l),
        (e = e.stateNode),
        fe && typeof fe.onCommitFiberRoot == 'function')
      )
        try {
          fe.onCommitFiberRoot(Xa, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = j.T), (n = H.p), (H.p = 2), (j.T = null);
        try {
          for (var c = t.onRecoverableError, s = 0; s < a.length; s++) {
            var u = a[s];
            c(u.value, { componentStack: u.stack });
          }
        } finally {
          (j.T = e), (H.p = n);
        }
      }
      (nl & 3) !== 0 && qc(),
        Be(t),
        (n = t.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0 ? (t === Wi ? jn++ : ((jn = 0), (Wi = t))) : (jn = 0),
        En(0);
    }
  }
  function Pf(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), cn(e)));
  }
  function qc() {
    return $f(), Wf(), If(), td();
  }
  function td() {
    if (Gt !== 5) return !1;
    var t = jl,
      e = Fi;
    Fi = 0;
    var l = vs(nl),
      a = j.T,
      n = H.p;
    try {
      (H.p = 32 > l ? 32 : l), (j.T = null), (l = $i), ($i = null);
      var c = jl,
        s = nl;
      if (((Gt = 0), (Oa = jl = null), (nl = 0), (xt & 6) !== 0)) throw Error(r(331));
      var u = xt;
      if (
        ((xt |= 4),
        Uf(c.current),
        wf(c, c.current, s, l),
        (xt = u),
        En(0, !1),
        fe && typeof fe.onPostCommitFiberRoot == 'function')
      )
        try {
          fe.onPostCommitFiberRoot(Xa, c);
        } catch {}
      return !0;
    } finally {
      (H.p = n), (j.T = a), Pf(t, e);
    }
  }
  function ed(t, e, l) {
    (e = Ae(l, e)), (e = _i(t.stateNode, e, 2)), (t = pl(t, e, 2)), t !== null && (Va(t, 2), Be(t));
  }
  function bt(t, e, l) {
    if (t.tag === 3) ed(t, t, l);
    else
      while (e !== null) {
        if (e.tag === 3) {
          ed(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' && (Al === null || !Al.has(a)))
          ) {
            (t = Ae(l, t)),
              (l = ef(2)),
              (a = pl(e, l, 2)),
              a !== null && (lf(l, a, e, t), Va(a, 2), Be(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function tu(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new rh();
      var n = new Set();
      a.set(e, n);
    } else (n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n));
    n.has(l) || ((Zi = !0), n.add(l), (t = xh.bind(null, t, e, l)), e.then(t, t));
  }
  function xh(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      jt === t &&
        (st & l) === l &&
        (Dt === 4 || (Dt === 3 && (st & 62914560) === st && 300 > re() - wc)
          ? (xt & 2) === 0 && wa(t, 0)
          : (Ki |= l),
        Ca === st && (Ca = 0)),
      Be(t);
  }
  function ld(t, e) {
    e === 0 && (e = Ju()), (t = Yl(t, e)), t !== null && (Va(t, e), Be(t));
  }
  function yh(t) {
    var e = t.memoizedState,
      l = 0;
    e !== null && (l = e.retryLane), ld(t, l);
  }
  function vh(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(e), ld(t, l);
  }
  function ph(t, e) {
    return hs(t, e);
  }
  var Bc = null,
    Ha = null,
    eu = !1,
    kc = !1,
    lu = !1,
    Tl = 0;
  function Be(t) {
    t !== Ha && t.next === null && (Ha === null ? (Bc = Ha = t) : (Ha = Ha.next = t)),
      (kc = !0),
      eu || ((eu = !0), bh());
  }
  function En(t, e) {
    if (!lu && kc) {
      lu = !0;
      do
        for (var l = !1, a = Bc; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var c = 0;
            else {
              var s = a.suspendedLanes,
                u = a.pingedLanes;
              (c = (1 << (31 - de(42 | t) + 1)) - 1),
                (c &= n & ~(s & ~u)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0);
            }
            c !== 0 && ((l = !0), sd(a, c));
          } else
            (c = st),
              (c = Ln(
                a,
                a === jt ? c : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (c & 3) === 0 || La(a, c) || ((l = !0), sd(a, c));
          a = a.next;
        }
      while (l);
      lu = !1;
    }
  }
  function gh() {
    ad();
  }
  function ad() {
    kc = eu = !1;
    var t = 0;
    Tl !== 0 && Ch() && (t = Tl);
    for (var e = re(), l = null, a = Bc; a !== null; ) {
      var n = a.next,
        c = nd(a, e);
      c === 0
        ? ((a.next = null), l === null ? (Bc = n) : (l.next = n), n === null && (Ha = l))
        : ((l = a), (t !== 0 || (c & 3) !== 0) && (kc = !0)),
        (a = n);
    }
    (Gt !== 0 && Gt !== 5) || En(t), Tl !== 0 && (Tl = 0);
  }
  function nd(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        c = t.pendingLanes & -62914561;
      0 < c;
    ) {
      var s = 31 - de(c),
        u = 1 << s,
        f = n[s];
      f === -1
        ? ((u & l) === 0 || (u & a) !== 0) && (n[s] = Z0(u, e))
        : f <= e && (t.expiredLanes |= u),
        (c &= ~u);
    }
    if (
      ((e = jt),
      (l = st),
      (l = Ln(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      (a = t.callbackNode),
      l === 0 || (t === e && (gt === 2 || gt === 9)) || t.cancelPendingCommit !== null)
    )
      return a !== null && a !== null && ms(a), (t.callbackNode = null), (t.callbackPriority = 0);
    if ((l & 3) === 0 || La(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && ms(a), vs(l))) {
        case 2:
        case 8:
          l = Zu;
          break;
        case 32:
          l = kn;
          break;
        case 268435456:
          l = Ku;
          break;
        default:
          l = kn;
      }
      return (
        (a = cd.bind(null, t)), (l = hs(l, a)), (t.callbackPriority = e), (t.callbackNode = l), e
      );
    }
    return a !== null && a !== null && ms(a), (t.callbackPriority = 2), (t.callbackNode = null), 2;
  }
  function cd(t, e) {
    if (Gt !== 0 && Gt !== 5) return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var l = t.callbackNode;
    if (qc() && t.callbackNode !== l) return null;
    var a = st;
    return (
      (a = Ln(t, t === jt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      a === 0
        ? null
        : (kf(t, a, e),
          nd(t, re()),
          t.callbackNode != null && t.callbackNode === l ? cd.bind(null, t) : null)
    );
  }
  function sd(t, e) {
    if (qc()) return null;
    kf(t, e, !0);
  }
  function bh() {
    wh(() => {
      (xt & 6) !== 0 ? hs(Vu, gh) : ad();
    });
  }
  function au() {
    if (Tl === 0) {
      var t = ga;
      t === 0 && ((t = Yn), (Yn <<= 1), (Yn & 261888) === 0 && (Yn = 256)), (Tl = t);
    }
    return Tl;
  }
  function id(t) {
    return t == null || typeof t == 'symbol' || typeof t == 'boolean'
      ? null
      : typeof t == 'function'
        ? t
        : Jn('' + t);
  }
  function ud(t, e) {
    var l = e.ownerDocument.createElement('input');
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute('form', t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function Sh(t, e, l, a, n) {
    if (e === 'submit' && l && l.stateNode === n) {
      var c = id((n[ee] || null).action),
        s = a.submitter;
      s &&
        ((e = (e = s[ee] || null) ? id(e.formAction) : s.getAttribute('formAction')),
        e !== null && ((c = e), (s = null)));
      var u = new In('action', 'action', null, a, n);
      t.push({
        event: u,
        listeners: [
          {
            instance: null,
            listener: () => {
              if (a.defaultPrevented) {
                if (Tl !== 0) {
                  var f = s ? ud(n, s) : new FormData(n);
                  zi(l, { pending: !0, data: f, method: n.method, action: c }, null, f);
                }
              } else
                typeof c == 'function' &&
                  (u.preventDefault(),
                  (f = s ? ud(n, s) : new FormData(n)),
                  zi(l, { pending: !0, data: f, method: n.method, action: c }, c, f));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var nu = 0; nu < ks.length; nu++) {
    var cu = ks[nu],
      Nh = cu.toLowerCase(),
      zh = cu[0].toUpperCase() + cu.slice(1);
    Oe(Nh, 'on' + zh);
  }
  Oe(qo, 'onAnimationEnd'),
    Oe(Bo, 'onAnimationIteration'),
    Oe(ko, 'onAnimationStart'),
    Oe('dblclick', 'onDoubleClick'),
    Oe('focusin', 'onFocus'),
    Oe('focusout', 'onBlur'),
    Oe(B1, 'onTransitionRun'),
    Oe(k1, 'onTransitionStart'),
    Oe(Y1, 'onTransitionCancel'),
    Oe(Yo, 'onTransitionEnd'),
    ca('onMouseEnter', ['mouseout', 'mouseover']),
    ca('onMouseLeave', ['mouseout', 'mouseover']),
    ca('onPointerEnter', ['pointerout', 'pointerover']),
    ca('onPointerLeave', ['pointerout', 'pointerover']),
    Rl('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Rl(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Rl('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Rl('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Rl(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Rl(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    );
  var Tn =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Ah = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Tn)
    );
  function od(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        n = a.event;
      a = a.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var s = a.length - 1; 0 <= s; s--) {
            var u = a[s],
              f = u.instance,
              g = u.currentTarget;
            if (((u = u.listener), f !== c && n.isPropagationStopped())) break t;
            (c = u), (n.currentTarget = g);
            try {
              c(n);
            } catch (E) {
              ec(E);
            }
            (n.currentTarget = null), (c = f);
          }
        else
          for (s = 0; s < a.length; s++) {
            if (
              ((u = a[s]),
              (f = u.instance),
              (g = u.currentTarget),
              (u = u.listener),
              f !== c && n.isPropagationStopped())
            )
              break t;
            (c = u), (n.currentTarget = g);
            try {
              c(n);
            } catch (E) {
              ec(E);
            }
            (n.currentTarget = null), (c = f);
          }
      }
    }
  }
  function at(t, e) {
    var l = e[ps];
    l === void 0 && (l = e[ps] = new Set());
    var a = t + '__bubble';
    l.has(a) || (rd(e, t, 2, !1), l.add(a));
  }
  function su(t, e, l) {
    var a = 0;
    e && (a |= 4), rd(l, t, a, e);
  }
  var Yc = '_reactListening' + Math.random().toString(36).slice(2);
  function iu(t) {
    if (!t[Yc]) {
      (t[Yc] = !0),
        eo.forEach((l) => {
          l !== 'selectionchange' && (Ah.has(l) || su(l, !1, t), su(l, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Yc] || ((e[Yc] = !0), su('selectionchange', !1, e));
    }
  }
  function rd(t, e, l, a) {
    switch (Bd(e)) {
      case 2:
        var n = Ih;
        break;
      case 8:
        n = Ph;
        break;
      default:
        n = Nu;
    }
    (l = n.bind(null, e, l, t)),
      (n = void 0),
      !Ts || (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') || (n = !0),
      a
        ? n !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: n })
          : t.addEventListener(e, l, !0)
        : n !== void 0
          ? t.addEventListener(e, l, { passive: n })
          : t.addEventListener(e, l, !1);
  }
  function uu(t, e, l, a, n) {
    var c = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var s = a.tag;
        if (s === 3 || s === 4) {
          var u = a.stateNode.containerInfo;
          if (u === n) break;
          if (s === 4)
            for (s = a.return; s !== null; ) {
              var f = s.tag;
              if ((f === 3 || f === 4) && s.stateNode.containerInfo === n) return;
              s = s.return;
            }
          while (u !== null) {
            if (((s = la(u)), s === null)) return;
            if (((f = s.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              a = c = s;
              continue t;
            }
            u = u.parentNode;
          }
        }
        a = a.return;
      }
    mo(() => {
      var g = c,
        E = js(l),
        _ = [];
      t: {
        var N = Go.get(t);
        if (N !== void 0) {
          var z = In,
            q = t;
          switch (t) {
            case 'keypress':
              if ($n(l) === 0) break t;
            case 'keydown':
            case 'keyup':
              z = v1;
              break;
            case 'focusin':
              (q = 'focus'), (z = Os);
              break;
            case 'focusout':
              (q = 'blur'), (z = Os);
              break;
            case 'beforeblur':
            case 'afterblur':
              z = Os;
              break;
            case 'click':
              if (l.button === 2) break t;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              z = vo;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              z = c1;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              z = b1;
              break;
            case qo:
            case Bo:
            case ko:
              z = u1;
              break;
            case Yo:
              z = N1;
              break;
            case 'scroll':
            case 'scrollend':
              z = a1;
              break;
            case 'wheel':
              z = A1;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              z = r1;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              z = go;
              break;
            case 'toggle':
            case 'beforetoggle':
              z = E1;
          }
          var K = (e & 4) !== 0,
            zt = !K && (t === 'scroll' || t === 'scrollend'),
            y = K ? (N !== null ? N + 'Capture' : null) : N;
          K = [];
          for (var h = g, v; h !== null; ) {
            var T = h;
            if (
              ((v = T.stateNode),
              (T = T.tag),
              (T !== 5 && T !== 26 && T !== 27) ||
                v === null ||
                y === null ||
                ((T = Ja(h, y)), T != null && K.push(Mn(h, T, v))),
              zt)
            )
              break;
            h = h.return;
          }
          0 < K.length && ((N = new z(N, q, null, l, E)), _.push({ event: N, listeners: K }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((N = t === 'mouseover' || t === 'pointerover'),
            (z = t === 'mouseout' || t === 'pointerout'),
            N && l !== As && (q = l.relatedTarget || l.fromElement) && (la(q) || q[ea]))
          )
            break t;
          if (
            (z || N) &&
            ((N =
              E.window === E
                ? E
                : (N = E.ownerDocument)
                  ? N.defaultView || N.parentWindow
                  : window),
            z
              ? ((q = l.relatedTarget || l.toElement),
                (z = g),
                (q = q ? la(q) : null),
                q !== null &&
                  ((zt = p(q)), (K = q.tag), q !== zt || (K !== 5 && K !== 27 && K !== 6)) &&
                  (q = null))
              : ((z = null), (q = g)),
            z !== q)
          ) {
            if (
              ((K = vo),
              (T = 'onMouseLeave'),
              (y = 'onMouseEnter'),
              (h = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                ((K = go), (T = 'onPointerLeave'), (y = 'onPointerEnter'), (h = 'pointer')),
              (zt = z == null ? N : Ka(z)),
              (v = q == null ? N : Ka(q)),
              (N = new K(T, h + 'leave', z, l, E)),
              (N.target = zt),
              (N.relatedTarget = v),
              (T = null),
              la(E) === g &&
                ((K = new K(y, h + 'enter', q, l, E)),
                (K.target = v),
                (K.relatedTarget = zt),
                (T = K)),
              (zt = T),
              z && q)
            )
              e: {
                for (K = jh, y = z, h = q, v = 0, T = y; T; T = K(T)) v++;
                T = 0;
                for (var V = h; V; V = K(V)) T++;
                while (0 < v - T) (y = K(y)), v--;
                while (0 < T - v) (h = K(h)), T--;
                while (v--) {
                  if (y === h || (h !== null && y === h.alternate)) {
                    K = y;
                    break e;
                  }
                  (y = K(y)), (h = K(h));
                }
                K = null;
              }
            else K = null;
            z !== null && fd(_, N, z, K, !1), q !== null && zt !== null && fd(_, zt, q, K, !0);
          }
        }
        t: {
          if (
            ((N = g ? Ka(g) : window),
            (z = N.nodeName && N.nodeName.toLowerCase()),
            z === 'select' || (z === 'input' && N.type === 'file'))
          )
            var rt = To;
          else if (jo(N))
            if (Mo) rt = Q1;
            else {
              rt = H1;
              var L = D1;
            }
          else
            (z = N.nodeName),
              !z || z.toLowerCase() !== 'input' || (N.type !== 'checkbox' && N.type !== 'radio')
                ? g && zs(g.elementType) && (rt = To)
                : (rt = U1);
          if (rt && (rt = rt(t, g))) {
            Eo(_, rt, l, E);
            break t;
          }
          L && L(t, N, g),
            t === 'focusout' &&
              g &&
              N.type === 'number' &&
              g.memoizedProps.value != null &&
              Ns(N, 'number', N.value);
        }
        switch (((L = g ? Ka(g) : window), t)) {
          case 'focusin':
            (jo(L) || L.contentEditable === 'true') && ((fa = L), (Rs = g), (ln = null));
            break;
          case 'focusout':
            ln = Rs = fa = null;
            break;
          case 'mousedown':
            qs = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (qs = !1), Qo(_, l, E);
            break;
          case 'selectionchange':
            if (q1) break;
          case 'keydown':
          case 'keyup':
            Qo(_, l, E);
        }
        var P;
        if (Ds)
          t: {
            switch (t) {
              case 'compositionstart':
                var it = 'onCompositionStart';
                break t;
              case 'compositionend':
                it = 'onCompositionEnd';
                break t;
              case 'compositionupdate':
                it = 'onCompositionUpdate';
                break t;
            }
            it = void 0;
          }
        else
          ra
            ? zo(t, l) && (it = 'onCompositionEnd')
            : t === 'keydown' && l.keyCode === 229 && (it = 'onCompositionStart');
        it &&
          (bo &&
            l.locale !== 'ko' &&
            (ra || it !== 'onCompositionStart'
              ? it === 'onCompositionEnd' && ra && (P = xo())
              : ((fl = E), (Ms = 'value' in fl ? fl.value : fl.textContent), (ra = !0))),
          (L = Gc(g, it)),
          0 < L.length &&
            ((it = new po(it, t, null, l, E)),
            _.push({ event: it, listeners: L }),
            P ? (it.data = P) : ((P = Ao(l)), P !== null && (it.data = P)))),
          (P = M1 ? _1(t, l) : C1(t, l)) &&
            ((it = Gc(g, 'onBeforeInput')),
            0 < it.length &&
              ((L = new po('onBeforeInput', 'beforeinput', null, l, E)),
              _.push({ event: L, listeners: it }),
              (L.data = P))),
          Sh(_, t, g, l, E);
      }
      od(_, e);
    });
  }
  function Mn(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function Gc(t, e) {
    for (var l = e + 'Capture', a = []; t !== null; ) {
      var n = t,
        c = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          c === null ||
          ((n = Ja(t, l)),
          n != null && a.unshift(Mn(t, n, c)),
          (n = Ja(t, e)),
          n != null && a.push(Mn(t, n, c))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function jh(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function fd(t, e, l, a, n) {
    for (var c = e._reactName, s = []; l !== null && l !== a; ) {
      var u = l,
        f = u.alternate,
        g = u.stateNode;
      if (((u = u.tag), f !== null && f === a)) break;
      (u !== 5 && u !== 26 && u !== 27) ||
        g === null ||
        ((f = g),
        n
          ? ((g = Ja(l, c)), g != null && s.unshift(Mn(l, g, f)))
          : n || ((g = Ja(l, c)), g != null && s.push(Mn(l, g, f)))),
        (l = l.return);
    }
    s.length !== 0 && t.push({ event: e, listeners: s });
  }
  var Eh = /\r\n?/g,
    Th = /\u0000|\uFFFD/g;
  function dd(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        Eh,
        `
`
      )
      .replace(Th, '');
  }
  function hd(t, e) {
    return (e = dd(e)), dd(t) === e;
  }
  function Nt(t, e, l, a, n, c) {
    switch (l) {
      case 'children':
        typeof a == 'string'
          ? e === 'body' || (e === 'textarea' && a === '') || ia(t, a)
          : (typeof a == 'number' || typeof a == 'bigint') && e !== 'body' && ia(t, '' + a);
        break;
      case 'className':
        Zn(t, 'class', a);
        break;
      case 'tabIndex':
        Zn(t, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Zn(t, l, a);
        break;
      case 'style':
        fo(t, a, c);
        break;
      case 'data':
        if (e !== 'object') {
          Zn(t, 'data', a);
          break;
        }
      case 'src':
      case 'href':
        if (a === '' && (e !== 'a' || l !== 'href')) {
          t.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == 'function' || typeof a == 'symbol' || typeof a == 'boolean') {
          t.removeAttribute(l);
          break;
        }
        (a = Jn('' + a)), t.setAttribute(l, a);
        break;
      case 'action':
      case 'formAction':
        if (typeof a == 'function') {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == 'function' &&
            (l === 'formAction'
              ? (e !== 'input' && Nt(t, e, 'name', n.name, n, null),
                Nt(t, e, 'formEncType', n.formEncType, n, null),
                Nt(t, e, 'formMethod', n.formMethod, n, null),
                Nt(t, e, 'formTarget', n.formTarget, n, null))
              : (Nt(t, e, 'encType', n.encType, n, null),
                Nt(t, e, 'method', n.method, n, null),
                Nt(t, e, 'target', n.target, n, null)));
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          t.removeAttribute(l);
          break;
        }
        (a = Jn('' + a)), t.setAttribute(l, a);
        break;
      case 'onClick':
        a != null && (t.onclick = Xe);
        break;
      case 'onScroll':
        a != null && at('scroll', t);
        break;
      case 'onScrollEnd':
        a != null && at('scrollend', t);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(r(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case 'multiple':
        t.multiple = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'muted':
        t.muted = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (a == null || typeof a == 'function' || typeof a == 'boolean' || typeof a == 'symbol') {
          t.removeAttribute('xlink:href');
          break;
        }
        (l = Jn('' + a)), t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l);
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        a != null && typeof a != 'function' && typeof a != 'symbol'
          ? t.setAttribute(l, '' + a)
          : t.removeAttribute(l);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        a && typeof a != 'function' && typeof a != 'symbol'
          ? t.setAttribute(l, '')
          : t.removeAttribute(l);
        break;
      case 'capture':
      case 'download':
        a === !0
          ? t.setAttribute(l, '')
          : a !== !1 && a != null && typeof a != 'function' && typeof a != 'symbol'
            ? t.setAttribute(l, a)
            : t.removeAttribute(l);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        a != null && typeof a != 'function' && typeof a != 'symbol' && !isNaN(a) && 1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case 'rowSpan':
      case 'start':
        a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case 'popover':
        at('beforetoggle', t), at('toggle', t), Vn(t, 'popover', a);
        break;
      case 'xlinkActuate':
        Ge(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        Ge(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        Ge(t, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        Ge(t, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        Ge(t, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        Ge(t, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        Ge(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        Ge(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        Ge(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        Vn(t, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < l.length) || (l[0] !== 'o' && l[0] !== 'O') || (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = e1.get(l) || l), Vn(t, l, a));
    }
  }
  function ou(t, e, l, a, n, c) {
    switch (l) {
      case 'style':
        fo(t, a, c);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(r(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case 'children':
        typeof a == 'string'
          ? ia(t, a)
          : (typeof a == 'number' || typeof a == 'bigint') && ia(t, '' + a);
        break;
      case 'onScroll':
        a != null && at('scroll', t);
        break;
      case 'onScrollEnd':
        a != null && at('scrollend', t);
        break;
      case 'onClick':
        a != null && (t.onclick = Xe);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!lo.hasOwnProperty(l))
          t: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((n = l.endsWith('Capture')),
              (e = l.slice(2, n ? l.length - 7 : void 0)),
              (c = t[ee] || null),
              (c = c != null ? c[l] : null),
              typeof c == 'function' && t.removeEventListener(e, c, n),
              typeof a == 'function')
            ) {
              typeof c != 'function' &&
                c !== null &&
                (l in t ? (t[l] = null) : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, n);
              break t;
            }
            l in t ? (t[l] = a) : a === !0 ? t.setAttribute(l, '') : Vn(t, l, a);
          }
    }
  }
  function It(t, e, l) {
    switch (e) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        at('error', t), at('load', t);
        var a = !1,
          n = !1,
          c;
        for (c in l)
          if (l.hasOwnProperty(c)) {
            var s = l[c];
            if (s != null)
              switch (c) {
                case 'src':
                  a = !0;
                  break;
                case 'srcSet':
                  n = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(r(137, e));
                default:
                  Nt(t, e, c, s, l, null);
              }
          }
        n && Nt(t, e, 'srcSet', l.srcSet, l, null), a && Nt(t, e, 'src', l.src, l, null);
        return;
      case 'input':
        at('invalid', t);
        var u = (c = s = n = null),
          f = null,
          g = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var E = l[a];
            if (E != null)
              switch (a) {
                case 'name':
                  n = E;
                  break;
                case 'type':
                  s = E;
                  break;
                case 'checked':
                  f = E;
                  break;
                case 'defaultChecked':
                  g = E;
                  break;
                case 'value':
                  c = E;
                  break;
                case 'defaultValue':
                  u = E;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (E != null) throw Error(r(137, e));
                  break;
                default:
                  Nt(t, e, a, E, l, null);
              }
          }
        io(t, c, u, f, g, s, n, !1);
        return;
      case 'select':
        at('invalid', t), (a = s = c = null);
        for (n in l)
          if (l.hasOwnProperty(n) && ((u = l[n]), u != null))
            switch (n) {
              case 'value':
                c = u;
                break;
              case 'defaultValue':
                s = u;
                break;
              case 'multiple':
                a = u;
              default:
                Nt(t, e, n, u, l, null);
            }
        (e = c),
          (l = s),
          (t.multiple = !!a),
          e != null ? sa(t, !!a, e, !1) : l != null && sa(t, !!a, l, !0);
        return;
      case 'textarea':
        at('invalid', t), (c = n = a = null);
        for (s in l)
          if (l.hasOwnProperty(s) && ((u = l[s]), u != null))
            switch (s) {
              case 'value':
                a = u;
                break;
              case 'defaultValue':
                n = u;
                break;
              case 'children':
                c = u;
                break;
              case 'dangerouslySetInnerHTML':
                if (u != null) throw Error(r(91));
                break;
              default:
                Nt(t, e, s, u, l, null);
            }
        oo(t, a, n, c);
        return;
      case 'option':
        for (f in l)
          l.hasOwnProperty(f) &&
            ((a = l[f]), a != null) &&
            (f === 'selected'
              ? (t.selected = a && typeof a != 'function' && typeof a != 'symbol')
              : Nt(t, e, f, a, l, null));
        return;
      case 'dialog':
        at('beforetoggle', t), at('toggle', t), at('cancel', t), at('close', t);
        break;
      case 'iframe':
      case 'object':
        at('load', t);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < Tn.length; a++) at(Tn[a], t);
        break;
      case 'image':
        at('error', t), at('load', t);
        break;
      case 'details':
        at('toggle', t);
        break;
      case 'embed':
      case 'source':
      case 'link':
        at('error', t), at('load', t);
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (g in l)
          if (l.hasOwnProperty(g) && ((a = l[g]), a != null))
            switch (g) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(r(137, e));
              default:
                Nt(t, e, g, a, l, null);
            }
        return;
      default:
        if (zs(e)) {
          for (E in l)
            l.hasOwnProperty(E) && ((a = l[E]), a !== void 0 && ou(t, e, E, a, l, void 0));
          return;
        }
    }
    for (u in l) l.hasOwnProperty(u) && ((a = l[u]), a != null && Nt(t, e, u, a, l, null));
  }
  function Mh(t, e, l, a) {
    switch (e) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var n = null,
          c = null,
          s = null,
          u = null,
          f = null,
          g = null,
          E = null;
        for (z in l) {
          var _ = l[z];
          if (l.hasOwnProperty(z) && _ != null)
            switch (z) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                f = _;
              default:
                a.hasOwnProperty(z) || Nt(t, e, z, null, a, _);
            }
        }
        for (var N in a) {
          var z = a[N];
          if (((_ = l[N]), a.hasOwnProperty(N) && (z != null || _ != null)))
            switch (N) {
              case 'type':
                c = z;
                break;
              case 'name':
                n = z;
                break;
              case 'checked':
                g = z;
                break;
              case 'defaultChecked':
                E = z;
                break;
              case 'value':
                s = z;
                break;
              case 'defaultValue':
                u = z;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (z != null) throw Error(r(137, e));
                break;
              default:
                z !== _ && Nt(t, e, N, z, a, _);
            }
        }
        Ss(t, s, u, f, g, E, c, n);
        return;
      case 'select':
        z = s = u = N = null;
        for (c in l)
          if (((f = l[c]), l.hasOwnProperty(c) && f != null))
            switch (c) {
              case 'value':
                break;
              case 'multiple':
                z = f;
              default:
                a.hasOwnProperty(c) || Nt(t, e, c, null, a, f);
            }
        for (n in a)
          if (((c = a[n]), (f = l[n]), a.hasOwnProperty(n) && (c != null || f != null)))
            switch (n) {
              case 'value':
                N = c;
                break;
              case 'defaultValue':
                u = c;
                break;
              case 'multiple':
                s = c;
              default:
                c !== f && Nt(t, e, n, c, a, f);
            }
        (e = u),
          (l = s),
          (a = z),
          N != null
            ? sa(t, !!l, N, !1)
            : !!a != !!l && (e != null ? sa(t, !!l, e, !0) : sa(t, !!l, l ? [] : '', !1));
        return;
      case 'textarea':
        z = N = null;
        for (u in l)
          if (((n = l[u]), l.hasOwnProperty(u) && n != null && !a.hasOwnProperty(u)))
            switch (u) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Nt(t, e, u, null, a, n);
            }
        for (s in a)
          if (((n = a[s]), (c = l[s]), a.hasOwnProperty(s) && (n != null || c != null)))
            switch (s) {
              case 'value':
                N = n;
                break;
              case 'defaultValue':
                z = n;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== c && Nt(t, e, s, n, a, c);
            }
        uo(t, N, z);
        return;
      case 'option':
        for (var q in l)
          (N = l[q]),
            l.hasOwnProperty(q) &&
              N != null &&
              !a.hasOwnProperty(q) &&
              (q === 'selected' ? (t.selected = !1) : Nt(t, e, q, null, a, N));
        for (f in a)
          (N = a[f]),
            (z = l[f]),
            a.hasOwnProperty(f) &&
              N !== z &&
              (N != null || z != null) &&
              (f === 'selected'
                ? (t.selected = N && typeof N != 'function' && typeof N != 'symbol')
                : Nt(t, e, f, N, a, z));
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var K in l)
          (N = l[K]),
            l.hasOwnProperty(K) && N != null && !a.hasOwnProperty(K) && Nt(t, e, K, null, a, N);
        for (g in a)
          if (((N = a[g]), (z = l[g]), a.hasOwnProperty(g) && N !== z && (N != null || z != null)))
            switch (g) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (N != null) throw Error(r(137, e));
                break;
              default:
                Nt(t, e, g, N, a, z);
            }
        return;
      default:
        if (zs(e)) {
          for (var zt in l)
            (N = l[zt]),
              l.hasOwnProperty(zt) &&
                N !== void 0 &&
                !a.hasOwnProperty(zt) &&
                ou(t, e, zt, void 0, a, N);
          for (E in a)
            (N = a[E]),
              (z = l[E]),
              !a.hasOwnProperty(E) ||
                N === z ||
                (N === void 0 && z === void 0) ||
                ou(t, e, E, N, a, z);
          return;
        }
    }
    for (var y in l)
      (N = l[y]),
        l.hasOwnProperty(y) && N != null && !a.hasOwnProperty(y) && Nt(t, e, y, null, a, N);
    for (_ in a)
      (N = a[_]),
        (z = l[_]),
        !a.hasOwnProperty(_) || N === z || (N == null && z == null) || Nt(t, e, _, N, a, z);
  }
  function md(t) {
    switch (t) {
      case 'css':
      case 'script':
      case 'font':
      case 'img':
      case 'image':
      case 'input':
      case 'link':
        return !0;
      default:
        return !1;
    }
  }
  function _h() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var t = 0, e = 0, l = performance.getEntriesByType('resource'), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          c = n.transferSize,
          s = n.initiatorType,
          u = n.duration;
        if (c && u && md(s)) {
          for (s = 0, u = n.responseEnd, a += 1; a < l.length; a++) {
            var f = l[a],
              g = f.startTime;
            if (g > u) break;
            var E = f.transferSize,
              _ = f.initiatorType;
            E && md(_) && ((f = f.responseEnd), (s += E * (f < u ? 1 : (u - g) / (f - g))));
          }
          if ((--a, (e += (8 * (c + s)) / (n.duration / 1e3)), t++, 10 < t)) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && ((t = navigator.connection.downlink), typeof t == 'number')
      ? t
      : 5;
  }
  var ru = null,
    fu = null;
  function Xc(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function xd(t) {
    switch (t) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function yd(t, e) {
    if (t === 0)
      switch (e) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === 'foreignObject' ? 0 : t;
  }
  function du(t, e) {
    return (
      t === 'textarea' ||
      t === 'noscript' ||
      typeof e.children == 'string' ||
      typeof e.children == 'number' ||
      typeof e.children == 'bigint' ||
      (typeof e.dangerouslySetInnerHTML == 'object' &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var hu = null;
  function Ch() {
    var t = window.event;
    return t && t.type === 'popstate' ? (t === hu ? !1 : ((hu = t), !0)) : ((hu = null), !1);
  }
  var vd = typeof setTimeout == 'function' ? setTimeout : void 0,
    Oh = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    pd = typeof Promise == 'function' ? Promise : void 0,
    wh =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof pd < 'u'
          ? (t) => pd.resolve(null).then(t).catch(Dh)
          : vd;
  function Dh(t) {
    setTimeout(() => {
      throw t;
    });
  }
  function Ml(t) {
    return t === 'head';
  }
  function gd(t, e) {
    var l = e,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((t.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === '/$' || l === '/&')) {
          if (a === 0) {
            t.removeChild(n), qa(e);
            return;
          }
          a--;
        } else if (l === '$' || l === '$?' || l === '$~' || l === '$!' || l === '&') a++;
        else if (l === 'html') _n(t.ownerDocument.documentElement);
        else if (l === 'head') {
          (l = t.ownerDocument.head), _n(l);
          for (var c = l.firstChild; c; ) {
            var s = c.nextSibling,
              u = c.nodeName;
            c[Za] ||
              u === 'SCRIPT' ||
              u === 'STYLE' ||
              (u === 'LINK' && c.rel.toLowerCase() === 'stylesheet') ||
              l.removeChild(c),
              (c = s);
          }
        } else l === 'body' && _n(t.ownerDocument.body);
      l = n;
    } while (l);
    qa(e);
  }
  function bd(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? e
            ? ((l._stashedDisplay = l.style.display), (l.style.display = 'none'))
            : ((l.style.display = l._stashedDisplay || ''),
              l.getAttribute('style') === '' && l.removeAttribute('style'))
          : l.nodeType === 3 &&
            (e
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ''))
              : (l.nodeValue = l._stashedText || '')),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === '/$')) {
          if (t === 0) break;
          t--;
        } else (l !== '$' && l !== '$?' && l !== '$~' && l !== '$!') || t++;
      l = a;
    } while (l);
  }
  function mu(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          mu(l), gs(l);
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (l.rel.toLowerCase() === 'stylesheet') continue;
      }
      t.removeChild(l);
    }
  }
  function Hh(t, e, l, a) {
    while (t.nodeType === 1) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break;
      } else if (a) {
        if (!t[Za])
          switch (e) {
            case 'meta':
              if (!t.hasAttribute('itemprop')) break;
              return t;
            case 'link':
              if (
                ((c = t.getAttribute('rel')),
                c === 'stylesheet' && t.hasAttribute('data-precedence'))
              )
                break;
              if (
                c !== n.rel ||
                t.getAttribute('href') !== (n.href == null || n.href === '' ? null : n.href) ||
                t.getAttribute('crossorigin') !== (n.crossOrigin == null ? null : n.crossOrigin) ||
                t.getAttribute('title') !== (n.title == null ? null : n.title)
              )
                break;
              return t;
            case 'style':
              if (t.hasAttribute('data-precedence')) break;
              return t;
            case 'script':
              if (
                ((c = t.getAttribute('src')),
                (c !== (n.src == null ? null : n.src) ||
                  t.getAttribute('type') !== (n.type == null ? null : n.type) ||
                  t.getAttribute('crossorigin') !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  c &&
                  t.hasAttribute('async') &&
                  !t.hasAttribute('itemprop'))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === 'input' && t.type === 'hidden') {
        var c = n.name == null ? null : '' + n.name;
        if (n.type === 'hidden' && t.getAttribute('name') === c) return t;
      } else return t;
      if (((t = _e(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Uh(t, e, l) {
    if (e === '') return null;
    while (t.nodeType !== 3)
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !l) ||
        ((t = _e(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Sd(t, e) {
    while (t.nodeType !== 8)
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !e) ||
        ((t = _e(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function xu(t) {
    return t.data === '$?' || t.data === '$~';
  }
  function yu(t) {
    return t.data === '$!' || (t.data === '$?' && t.ownerDocument.readyState !== 'loading');
  }
  function Qh(t, e) {
    var l = t.ownerDocument;
    if (t.data === '$~') t._reactRetry = e;
    else if (t.data !== '$?' || l.readyState !== 'loading') e();
    else {
      var a = () => {
        e(), l.removeEventListener('DOMContentLoaded', a);
      };
      l.addEventListener('DOMContentLoaded', a), (t._reactRetry = a);
    }
  }
  function _e(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === '$' ||
            e === '$!' ||
            e === '$?' ||
            e === '$~' ||
            e === '&' ||
            e === 'F!' ||
            e === 'F')
        )
          break;
        if (e === '/$' || e === '/&') return null;
      }
    }
    return t;
  }
  var vu = null;
  function Nd(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === '/$' || l === '/&') {
          if (e === 0) return _e(t.nextSibling);
          e--;
        } else (l !== '$' && l !== '$!' && l !== '$?' && l !== '$~' && l !== '&') || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function zd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === '$' || l === '$!' || l === '$?' || l === '$~' || l === '&') {
          if (e === 0) return t;
          e--;
        } else (l !== '/$' && l !== '/&') || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Ad(t, e, l) {
    switch (((e = Xc(l)), t)) {
      case 'html':
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case 'head':
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case 'body':
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function _n(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    gs(t);
  }
  var Ce = new Map(),
    jd = new Set();
  function Lc(t) {
    return typeof t.getRootNode == 'function'
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var cl = H.d;
  H.d = { f: Rh, r: qh, D: Bh, C: kh, L: Yh, m: Gh, X: Lh, S: Xh, M: Vh };
  function Rh() {
    var t = cl.f(),
      e = Uc();
    return t || e;
  }
  function qh(t) {
    var e = aa(t);
    e !== null && e.tag === 5 && e.type === 'form' ? Yr(e) : cl.r(t);
  }
  var Ua = typeof document > 'u' ? null : document;
  function Ed(t, e, l) {
    var a = Ua;
    if (a && typeof e == 'string' && e) {
      var n = Ne(e);
      (n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
        jd.has(n) ||
          (jd.add(n),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement('link')), It(e, 'link', t), Zt(e), a.head.appendChild(e)));
    }
  }
  function Bh(t) {
    cl.D(t), Ed('dns-prefetch', t, null);
  }
  function kh(t, e) {
    cl.C(t, e), Ed('preconnect', t, e);
  }
  function Yh(t, e, l) {
    cl.L(t, e, l);
    var a = Ua;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + Ne(e) + '"]';
      e === 'image' && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + Ne(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == 'string' && (n += '[imagesizes="' + Ne(l.imageSizes) + '"]'))
        : (n += '[href="' + Ne(t) + '"]');
      var c = n;
      switch (e) {
        case 'style':
          c = Qa(t);
          break;
        case 'script':
          c = Ra(t);
      }
      Ce.has(c) ||
        ((t = U(
          { rel: 'preload', href: e === 'image' && l && l.imageSrcSet ? void 0 : t, as: e },
          l
        )),
        Ce.set(c, t),
        a.querySelector(n) !== null ||
          (e === 'style' && a.querySelector(Cn(c))) ||
          (e === 'script' && a.querySelector(On(c))) ||
          ((e = a.createElement('link')), It(e, 'link', t), Zt(e), a.head.appendChild(e)));
    }
  }
  function Gh(t, e) {
    cl.m(t, e);
    var l = Ua;
    if (l && t) {
      var a = e && typeof e.as == 'string' ? e.as : 'script',
        n = 'link[rel="modulepreload"][as="' + Ne(a) + '"][href="' + Ne(t) + '"]',
        c = n;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          c = Ra(t);
      }
      if (
        !Ce.has(c) &&
        ((t = U({ rel: 'modulepreload', href: t }, e)), Ce.set(c, t), l.querySelector(n) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(On(c))) return;
        }
        (a = l.createElement('link')), It(a, 'link', t), Zt(a), l.head.appendChild(a);
      }
    }
  }
  function Xh(t, e, l) {
    cl.S(t, e, l);
    var a = Ua;
    if (a && t) {
      var n = na(a).hoistableStyles,
        c = Qa(t);
      e = e || 'default';
      var s = n.get(c);
      if (!s) {
        var u = { loading: 0, preload: null };
        if ((s = a.querySelector(Cn(c)))) u.loading = 5;
        else {
          (t = U({ rel: 'stylesheet', href: t, 'data-precedence': e }, l)),
            (l = Ce.get(c)) && pu(t, l);
          var f = (s = a.createElement('link'));
          Zt(f),
            It(f, 'link', t),
            (f._p = new Promise((g, E) => {
              (f.onload = g), (f.onerror = E);
            })),
            f.addEventListener('load', () => {
              u.loading |= 1;
            }),
            f.addEventListener('error', () => {
              u.loading |= 2;
            }),
            (u.loading |= 4),
            Vc(s, e, a);
        }
        (s = { type: 'stylesheet', instance: s, count: 1, state: u }), n.set(c, s);
      }
    }
  }
  function Lh(t, e) {
    cl.X(t, e);
    var l = Ua;
    if (l && t) {
      var a = na(l).hoistableScripts,
        n = Ra(t),
        c = a.get(n);
      c ||
        ((c = l.querySelector(On(n))),
        c ||
          ((t = U({ src: t, async: !0 }, e)),
          (e = Ce.get(n)) && gu(t, e),
          (c = l.createElement('script')),
          Zt(c),
          It(c, 'link', t),
          l.head.appendChild(c)),
        (c = { type: 'script', instance: c, count: 1, state: null }),
        a.set(n, c));
    }
  }
  function Vh(t, e) {
    cl.M(t, e);
    var l = Ua;
    if (l && t) {
      var a = na(l).hoistableScripts,
        n = Ra(t),
        c = a.get(n);
      c ||
        ((c = l.querySelector(On(n))),
        c ||
          ((t = U({ src: t, async: !0, type: 'module' }, e)),
          (e = Ce.get(n)) && gu(t, e),
          (c = l.createElement('script')),
          Zt(c),
          It(c, 'link', t),
          l.head.appendChild(c)),
        (c = { type: 'script', instance: c, count: 1, state: null }),
        a.set(n, c));
    }
  }
  function Td(t, e, l, a) {
    var n = (n = tt.current) ? Lc(n) : null;
    if (!n) throw Error(r(446));
    switch (t) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string'
          ? ((e = Qa(l.href)),
            (l = na(n).hoistableStyles),
            (a = l.get(e)),
            a || ((a = { type: 'style', instance: null, count: 0, state: null }), l.set(e, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          l.rel === 'stylesheet' &&
          typeof l.href == 'string' &&
          typeof l.precedence == 'string'
        ) {
          t = Qa(l.href);
          var c = na(n).hoistableStyles,
            s = c.get(t);
          if (
            (s ||
              ((n = n.ownerDocument || n),
              (s = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(t, s),
              (c = n.querySelector(Cn(t))) && !c._p && ((s.instance = c), (s.state.loading = 5)),
              Ce.has(t) ||
                ((l = {
                  rel: 'preload',
                  as: 'style',
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Ce.set(t, l),
                c || Zh(n, t, l, s.state))),
            e && a === null)
          )
            throw Error(r(528, ''));
          return s;
        }
        if (e && a !== null) throw Error(r(529, ''));
        return null;
      case 'script':
        return (
          (e = l.async),
          (l = l.src),
          typeof l == 'string' && e && typeof e != 'function' && typeof e != 'symbol'
            ? ((e = Ra(l)),
              (l = na(n).hoistableScripts),
              (a = l.get(e)),
              a || ((a = { type: 'script', instance: null, count: 0, state: null }), l.set(e, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function Qa(t) {
    return 'href="' + Ne(t) + '"';
  }
  function Cn(t) {
    return 'link[rel="stylesheet"][' + t + ']';
  }
  function Md(t) {
    return U({}, t, { 'data-precedence': t.precedence, precedence: null });
  }
  function Zh(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + ']')
      ? (a.loading = 1)
      : ((e = t.createElement('link')),
        (a.preload = e),
        e.addEventListener('load', () => (a.loading |= 1)),
        e.addEventListener('error', () => (a.loading |= 2)),
        It(e, 'link', l),
        Zt(e),
        t.head.appendChild(e));
  }
  function Ra(t) {
    return '[src="' + Ne(t) + '"]';
  }
  function On(t) {
    return 'script[async]' + t;
  }
  function _d(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case 'style':
          var a = t.querySelector('style[data-href~="' + Ne(l.href) + '"]');
          if (a) return (e.instance = a), Zt(a), a;
          var n = U({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement('style')),
            Zt(a),
            It(a, 'style', n),
            Vc(a, l.precedence, t),
            (e.instance = a)
          );
        case 'stylesheet':
          n = Qa(l.href);
          var c = t.querySelector(Cn(n));
          if (c) return (e.state.loading |= 4), (e.instance = c), Zt(c), c;
          (a = Md(l)),
            (n = Ce.get(n)) && pu(a, n),
            (c = (t.ownerDocument || t).createElement('link')),
            Zt(c);
          var s = c;
          return (
            (s._p = new Promise((u, f) => {
              (s.onload = u), (s.onerror = f);
            })),
            It(c, 'link', a),
            (e.state.loading |= 4),
            Vc(c, l.precedence, t),
            (e.instance = c)
          );
        case 'script':
          return (
            (c = Ra(l.src)),
            (n = t.querySelector(On(c)))
              ? ((e.instance = n), Zt(n), n)
              : ((a = l),
                (n = Ce.get(c)) && ((a = U({}, l)), gu(a, n)),
                (t = t.ownerDocument || t),
                (n = t.createElement('script')),
                Zt(n),
                It(n, 'link', a),
                t.head.appendChild(n),
                (e.instance = n))
          );
        case 'void':
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === 'stylesheet' &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Vc(a, l.precedence, t));
    return e.instance;
  }
  function Vc(t, e, l) {
    for (
      var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        n = a.length ? a[a.length - 1] : null,
        c = n,
        s = 0;
      s < a.length;
      s++
    ) {
      var u = a[s];
      if (u.dataset.precedence === e) c = u;
      else if (c !== n) break;
    }
    c
      ? c.parentNode.insertBefore(t, c.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function pu(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function gu(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Zc = null;
  function Cd(t, e, l) {
    if (Zc === null) {
      var a = new Map(),
        n = (Zc = new Map());
      n.set(l, a);
    } else (n = Zc), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
      var c = l[n];
      if (
        !(c[Za] || c[Jt] || (t === 'link' && c.getAttribute('rel') === 'stylesheet')) &&
        c.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var s = c.getAttribute(e) || '';
        s = t + s;
        var u = a.get(s);
        u ? u.push(c) : a.set(s, [c]);
      }
    }
    return a;
  }
  function Od(t, e, l) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(l, e === 'title' ? t.querySelector('head > title') : null);
  }
  function Kh(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof e.precedence != 'string' || typeof e.href != 'string' || e.href === '') break;
        return !0;
      case 'link':
        if (
          typeof e.rel != 'string' ||
          typeof e.href != 'string' ||
          e.href === '' ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === 'stylesheet'
          ? ((t = e.disabled), typeof e.precedence == 'string' && t == null)
          : !0;
      case 'script':
        if (
          e.async &&
          typeof e.async != 'function' &&
          typeof e.async != 'symbol' &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function wd(t) {
    return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0);
  }
  function Jh(t, e, l, a) {
    if (
      l.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = Qa(a.href),
          c = e.querySelector(Cn(n));
        if (c) {
          (e = c._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (t.count++, (t = Kc.bind(t)), e.then(t, t)),
            (l.state.loading |= 4),
            (l.instance = c),
            Zt(c);
          return;
        }
        (c = e.ownerDocument || e),
          (a = Md(a)),
          (n = Ce.get(n)) && pu(a, n),
          (c = c.createElement('link')),
          Zt(c);
        var s = c;
        (s._p = new Promise((u, f) => {
          (s.onload = u), (s.onerror = f);
        })),
          It(c, 'link', a),
          (l.instance = c);
      }
      t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(l, e),
        (e = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (t.count++,
          (l = Kc.bind(t)),
          e.addEventListener('load', l),
          e.addEventListener('error', l));
    }
  }
  var bu = 0;
  function Fh(t, e) {
    return (
      t.stylesheets && t.count === 0 && Fc(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? (l) => {
            var a = setTimeout(() => {
              if ((t.stylesheets && Fc(t, t.stylesheets), t.unsuspend)) {
                var c = t.unsuspend;
                (t.unsuspend = null), c();
              }
            }, 6e4 + e);
            0 < t.imgBytes && bu === 0 && (bu = 62500 * _h());
            var n = setTimeout(
              () => {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 && (t.stylesheets && Fc(t, t.stylesheets), t.unsuspend))
                ) {
                  var c = t.unsuspend;
                  (t.unsuspend = null), c();
                }
              },
              (t.imgBytes > bu ? 50 : 800) + e
            );
            return (
              (t.unsuspend = l),
              () => {
                (t.unsuspend = null), clearTimeout(a), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function Kc() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) Fc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Jc = null;
  function Fc(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++, (Jc = new Map()), e.forEach($h, t), (Jc = null), Kc.call(t));
  }
  function $h(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Jc.get(t);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), Jc.set(t, l);
        for (
          var n = t.querySelectorAll('link[data-precedence],style[data-precedence]'), c = 0;
          c < n.length;
          c++
        ) {
          var s = n[c];
          (s.nodeName === 'LINK' || s.getAttribute('media') !== 'not all') &&
            (l.set(s.dataset.precedence, s), (a = s));
        }
        a && l.set(null, a);
      }
      (n = e.instance),
        (s = n.getAttribute('data-precedence')),
        (c = l.get(s) || a),
        c === a && l.set(null, n),
        l.set(s, n),
        this.count++,
        (a = Kc.bind(this)),
        n.addEventListener('load', a),
        n.addEventListener('error', a),
        c
          ? c.parentNode.insertBefore(n, c.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(n, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var wn = {
    $$typeof: pt,
    Provider: null,
    Consumer: null,
    _currentValue: O,
    _currentValue2: O,
    _threadCount: 0,
  };
  function Wh(t, e, l, a, n, c, s, u, f) {
    (this.tag = 1),
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
      (this.expirationTimes = xs(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = xs(0)),
      (this.hiddenUpdates = xs(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = c),
      (this.onRecoverableError = s),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map());
  }
  function Dd(t, e, l, a, n, c, s, u, f, g, E, _) {
    return (
      (t = new Wh(t, e, l, s, f, g, E, _, u)),
      (e = 1),
      c === !0 && (e |= 24),
      (c = me(3, null, null, e)),
      (t.current = c),
      (c.stateNode = t),
      (e = Ps()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (c.memoizedState = { element: a, isDehydrated: l, cache: e }),
      ai(c),
      t
    );
  }
  function Hd(t) {
    return t ? ((t = ma), t) : ma;
  }
  function Ud(t, e, l, a, n, c) {
    (n = Hd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = vl(e)),
      (a.payload = { element: l }),
      (c = c === void 0 ? null : c),
      c !== null && (a.callback = c),
      (l = pl(t, a, e)),
      l !== null && (ie(l, t, e), rn(l, t, e));
  }
  function Qd(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Su(t, e) {
    Qd(t, e), (t = t.alternate) && Qd(t, e);
  }
  function Rd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Yl(t, 67108864);
      e !== null && ie(e, t, 67108864), Su(t, 67108864);
    }
  }
  function qd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ge();
      e = ys(e);
      var l = Yl(t, e);
      l !== null && ie(l, t, e), Su(t, e);
    }
  }
  var $c = !0;
  function Ih(t, e, l, a) {
    var n = j.T;
    j.T = null;
    var c = H.p;
    try {
      (H.p = 2), Nu(t, e, l, a);
    } finally {
      (H.p = c), (j.T = n);
    }
  }
  function Ph(t, e, l, a) {
    var n = j.T;
    j.T = null;
    var c = H.p;
    try {
      (H.p = 8), Nu(t, e, l, a);
    } finally {
      (H.p = c), (j.T = n);
    }
  }
  function Nu(t, e, l, a) {
    if ($c) {
      var n = zu(a);
      if (n === null) uu(t, e, a, Wc, l), kd(t, a);
      else if (em(n, t, e, l, a)) a.stopPropagation();
      else if ((kd(t, a), e & 4 && -1 < tm.indexOf(t))) {
        while (n !== null) {
          var c = aa(n);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var s = Ql(c.pendingLanes);
                  if (s !== 0) {
                    var u = c;
                    for (u.pendingLanes |= 2, u.entangledLanes |= 2; s; ) {
                      var f = 1 << (31 - de(s));
                      (u.entanglements[1] |= f), (s &= ~f);
                    }
                    Be(c), (xt & 6) === 0 && ((Dc = re() + 500), En(0));
                  }
                }
                break;
              case 31:
              case 13:
                (u = Yl(c, 2)), u !== null && ie(u, c, 2), Uc(), Su(c, 2);
            }
          if (((c = zu(a)), c === null && uu(t, e, a, Wc, l), c === n)) break;
          n = c;
        }
        n !== null && a.stopPropagation();
      } else uu(t, e, a, null, l);
    }
  }
  function zu(t) {
    return (t = js(t)), Au(t);
  }
  var Wc = null;
  function Au(t) {
    if (((Wc = null), (t = la(t)), t !== null)) {
      var e = p(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = C(e)), t !== null)) return t;
          t = null;
        } else if (l === 31) {
          if (((t = w(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Wc = t), null;
  }
  function Bd(t) {
    switch (t) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (B0()) {
          case Vu:
            return 2;
          case Zu:
            return 8;
          case kn:
          case k0:
            return 32;
          case Ku:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ju = !1,
    _l = null,
    Cl = null,
    Ol = null,
    Dn = new Map(),
    Hn = new Map(),
    wl = [],
    tm =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function kd(t, e) {
    switch (t) {
      case 'focusin':
      case 'focusout':
        _l = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Cl = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Ol = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Dn.delete(e.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Hn.delete(e.pointerId);
    }
  }
  function Un(t, e, l, a, n, c) {
    return t === null || t.nativeEvent !== c
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: c,
          targetContainers: [n],
        }),
        e !== null && ((e = aa(e)), e !== null && Rd(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t);
  }
  function em(t, e, l, a, n) {
    switch (e) {
      case 'focusin':
        return (_l = Un(_l, t, e, l, a, n)), !0;
      case 'dragenter':
        return (Cl = Un(Cl, t, e, l, a, n)), !0;
      case 'mouseover':
        return (Ol = Un(Ol, t, e, l, a, n)), !0;
      case 'pointerover':
        var c = n.pointerId;
        return Dn.set(c, Un(Dn.get(c) || null, t, e, l, a, n)), !0;
      case 'gotpointercapture':
        return (c = n.pointerId), Hn.set(c, Un(Hn.get(c) || null, t, e, l, a, n)), !0;
    }
    return !1;
  }
  function Yd(t) {
    var e = la(t.target);
    if (e !== null) {
      var l = p(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = C(l)), e !== null)) {
            (t.blockedOn = e),
              Pu(t.priority, () => {
                qd(l);
              });
            return;
          }
        } else if (e === 31) {
          if (((e = w(l)), e !== null)) {
            (t.blockedOn = e),
              Pu(t.priority, () => {
                qd(l);
              });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ic(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = zu(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        (As = a), l.target.dispatchEvent(a), (As = null);
      } else return (e = aa(l)), e !== null && Rd(e), (t.blockedOn = l), !1;
      e.shift();
    }
    return !0;
  }
  function Gd(t, e, l) {
    Ic(t) && l.delete(e);
  }
  function lm() {
    (ju = !1),
      _l !== null && Ic(_l) && (_l = null),
      Cl !== null && Ic(Cl) && (Cl = null),
      Ol !== null && Ic(Ol) && (Ol = null),
      Dn.forEach(Gd),
      Hn.forEach(Gd);
  }
  function Pc(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      ju || ((ju = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, lm)));
  }
  var ts = null;
  function Xd(t) {
    ts !== t &&
      ((ts = t),
      o.unstable_scheduleCallback(o.unstable_NormalPriority, () => {
        ts === t && (ts = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            n = t[e + 2];
          if (typeof a != 'function') {
            if (Au(a || l) === null) continue;
            break;
          }
          var c = aa(l);
          c !== null &&
            (t.splice(e, 3),
            (e -= 3),
            zi(c, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function qa(t) {
    function e(f) {
      return Pc(f, t);
    }
    _l !== null && Pc(_l, t),
      Cl !== null && Pc(Cl, t),
      Ol !== null && Pc(Ol, t),
      Dn.forEach(e),
      Hn.forEach(e);
    for (var l = 0; l < wl.length; l++) {
      var a = wl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    while (0 < wl.length && ((l = wl[0]), l.blockedOn === null))
      Yd(l), l.blockedOn === null && wl.shift();
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          c = l[a + 1],
          s = n[ee] || null;
        if (typeof c == 'function') s || Xd(l);
        else if (s) {
          var u = null;
          if (c && c.hasAttribute('formAction')) {
            if (((n = c), (s = c[ee] || null))) u = s.formAction;
            else if (Au(n) !== null) continue;
          } else u = s.action;
          typeof u == 'function' ? (l[a + 1] = u) : (l.splice(a, 3), (a -= 3)), Xd(l);
        }
      }
  }
  function Ld() {
    function t(c) {
      c.canIntercept &&
        c.info === 'react-transition' &&
        c.intercept({
          handler: () => new Promise((s) => (n = s)),
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function e() {
      n !== null && (n(), (n = null)), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var c = navigation.currentEntry;
        c &&
          c.url != null &&
          navigation.navigate(c.url, {
            state: c.getState(),
            info: 'react-transition',
            history: 'replace',
          });
      }
    }
    if (typeof navigation == 'object') {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener('navigate', t),
        navigation.addEventListener('navigatesuccess', e),
        navigation.addEventListener('navigateerror', e),
        setTimeout(l, 100),
        () => {
          (a = !0),
            navigation.removeEventListener('navigate', t),
            navigation.removeEventListener('navigatesuccess', e),
            navigation.removeEventListener('navigateerror', e),
            n !== null && (n(), (n = null));
        }
      );
    }
  }
  function Eu(t) {
    this._internalRoot = t;
  }
  (es.prototype.render = Eu.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var l = e.current,
        a = ge();
      Ud(l, a, t, e, null, null);
    }),
    (es.prototype.unmount = Eu.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Ud(t.current, 2, null, t, null, null), Uc(), (e[ea] = null);
        }
      });
  function es(t) {
    this._internalRoot = t;
  }
  es.prototype.unstable_scheduleHydration = (t) => {
    if (t) {
      var e = Iu();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < wl.length && e !== 0 && e < wl[l].priority; l++);
      wl.splice(l, 0, t), l === 0 && Yd(t);
    }
  };
  var Vd = d.version;
  if (Vd !== '19.2.3') throw Error(r(527, Vd, '19.2.3'));
  H.findDOMNode = (t) => {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == 'function'
        ? Error(r(188))
        : ((t = Object.keys(t).join(',')), Error(r(268, t)));
    return (t = S(e)), (t = t !== null ? R(t) : null), (t = t === null ? null : t.stateNode), t;
  };
  var am = {
    bundleType: 0,
    version: '19.2.3',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: j,
    reconcilerVersion: '19.2.3',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ls.isDisabled && ls.supportsFiber)
      try {
        (Xa = ls.inject(am)), (fe = ls);
      } catch {}
  }
  return (
    (Rn.createRoot = (t, e) => {
      if (!b(t)) throw Error(r(299));
      var l = !1,
        a = '',
        n = Wr,
        c = Ir,
        s = Pr;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (c = e.onCaughtError),
          e.onRecoverableError !== void 0 && (s = e.onRecoverableError)),
        (e = Dd(t, 1, !1, null, null, l, a, null, n, c, s, Ld)),
        (t[ea] = e.current),
        iu(t),
        new Eu(e)
      );
    }),
    (Rn.hydrateRoot = (t, e, l) => {
      if (!b(t)) throw Error(r(299));
      var a = !1,
        n = '',
        c = Wr,
        s = Ir,
        u = Pr,
        f = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (c = l.onUncaughtError),
          l.onCaughtError !== void 0 && (s = l.onCaughtError),
          l.onRecoverableError !== void 0 && (u = l.onRecoverableError),
          l.formState !== void 0 && (f = l.formState)),
        (e = Dd(t, 1, !0, e, l ?? null, a, n, f, c, s, u, Ld)),
        (e.context = Hd(null)),
        (l = e.current),
        (a = ge()),
        (a = ys(a)),
        (n = vl(a)),
        (n.callback = null),
        pl(l, n, a),
        (l = a),
        (e.current.lanes = l),
        Va(e, l),
        Be(e),
        (t[ea] = e.current),
        iu(t),
        new es(e)
      );
    }),
    (Rn.version = '19.2.3'),
    Rn
  );
}
var e0;
function ym() {
  if (e0) return _u.exports;
  e0 = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (d) {
        console.error(d);
      }
  }
  return o(), (_u.exports = xm()), _u.exports;
}
var vm = ym();
function l0(o, d) {
  if (typeof o == 'function') return o(d);
  o != null && (o.current = d);
}
function pm(...o) {
  return (d) => {
    let m = !1;
    const r = o.map((b) => {
      const p = l0(b, d);
      return !m && typeof p == 'function' && (m = !0), p;
    });
    if (m)
      return () => {
        for (let b = 0; b < r.length; b++) {
          const p = r[b];
          typeof p == 'function' ? p() : l0(o[b], null);
        }
      };
  };
}
var gm = Symbol.for('react.lazy'),
  ss = fm[' use '.trim().toString()];
function bm(o) {
  return typeof o == 'object' && o !== null && 'then' in o;
}
function y0(o) {
  return (
    o != null &&
    typeof o == 'object' &&
    '$$typeof' in o &&
    o.$$typeof === gm &&
    '_payload' in o &&
    bm(o._payload)
  );
}
function v0(o) {
  const d = Nm(o),
    m = Z.forwardRef((r, b) => {
      let { children: p, ...C } = r;
      y0(p) && typeof ss == 'function' && (p = ss(p._payload));
      const w = Z.Children.toArray(p),
        A = w.find(Am);
      if (A) {
        const S = A.props.children,
          R = w.map((U) =>
            U === A
              ? Z.Children.count(S) > 1
                ? Z.Children.only(null)
                : Z.isValidElement(S)
                  ? S.props.children
                  : null
              : U
          );
        return i.jsx(d, {
          ...C,
          ref: b,
          children: Z.isValidElement(S) ? Z.cloneElement(S, void 0, R) : null,
        });
      }
      return i.jsx(d, { ...C, ref: b, children: p });
    });
  return (m.displayName = `${o}.Slot`), m;
}
var Sm = v0('Slot');
function Nm(o) {
  const d = Z.forwardRef((m, r) => {
    let { children: b, ...p } = m;
    if ((y0(b) && typeof ss == 'function' && (b = ss(b._payload)), Z.isValidElement(b))) {
      const C = Em(b),
        w = jm(p, b.props);
      return b.type !== Z.Fragment && (w.ref = r ? pm(r, C) : C), Z.cloneElement(b, w);
    }
    return Z.Children.count(b) > 1 ? Z.Children.only(null) : null;
  });
  return (d.displayName = `${o}.SlotClone`), d;
}
var zm = Symbol('radix.slottable');
function Am(o) {
  return (
    Z.isValidElement(o) &&
    typeof o.type == 'function' &&
    '__radixId' in o.type &&
    o.type.__radixId === zm
  );
}
function jm(o, d) {
  const m = { ...d };
  for (const r in d) {
    const b = o[r],
      p = d[r];
    /^on[A-Z]/.test(r)
      ? b && p
        ? (m[r] = (...w) => {
            const A = p(...w);
            return b(...w), A;
          })
        : b && (m[r] = b)
      : r === 'style'
        ? (m[r] = { ...b, ...p })
        : r === 'className' && (m[r] = [b, p].filter(Boolean).join(' '));
  }
  return { ...o, ...m };
}
function Em(o) {
  let d = Object.getOwnPropertyDescriptor(o.props, 'ref')?.get,
    m = d && 'isReactWarning' in d && d.isReactWarning;
  return m
    ? o.ref
    : ((d = Object.getOwnPropertyDescriptor(o, 'ref')?.get),
      (m = d && 'isReactWarning' in d && d.isReactWarning),
      m ? o.props.ref : o.props.ref || o.ref);
}
function p0(o) {
  var d,
    m,
    r = '';
  if (typeof o == 'string' || typeof o == 'number') r += o;
  else if (typeof o == 'object')
    if (Array.isArray(o)) {
      var b = o.length;
      for (d = 0; d < b; d++) o[d] && (m = p0(o[d])) && (r && (r += ' '), (r += m));
    } else for (m in o) o[m] && (r && (r += ' '), (r += m));
  return r;
}
function g0() {
  for (var o, d, m = 0, r = '', b = arguments.length; m < b; m++)
    (o = arguments[m]) && (d = p0(o)) && (r && (r += ' '), (r += d));
  return r;
}
const a0 = (o) => (typeof o == 'boolean' ? `${o}` : o === 0 ? '0' : o),
  n0 = g0,
  Tm = (o, d) => (m) => {
    var r;
    if (d?.variants == null) return n0(o, m?.class, m?.className);
    const { variants: b, defaultVariants: p } = d,
      C = Object.keys(b).map((S) => {
        const R = m?.[S],
          U = p?.[S];
        if (R === null) return null;
        const B = a0(R) || a0(U);
        return b[S][B];
      }),
      w =
        m &&
        Object.entries(m).reduce((S, R) => {
          const [U, B] = R;
          return B === void 0 || (S[U] = B), S;
        }, {}),
      A =
        d == null || (r = d.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((S, R) => {
              const { class: U, className: B, ...k } = R;
              return Object.entries(k).every((yt) => {
                const [nt, ot] = yt;
                return Array.isArray(ot)
                  ? ot.includes({ ...p, ...w }[nt])
                  : { ...p, ...w }[nt] === ot;
              })
                ? [...S, U, B]
                : S;
            }, []);
    return n0(o, C, A, m?.class, m?.className);
  },
  Mm = (o, d) => {
    const m = new Array(o.length + d.length);
    for (let r = 0; r < o.length; r++) m[r] = o[r];
    for (let r = 0; r < d.length; r++) m[o.length + r] = d[r];
    return m;
  },
  _m = (o, d) => ({ classGroupId: o, validator: d }),
  b0 = (o = new Map(), d = null, m) => ({ nextPart: o, validators: d, classGroupId: m }),
  is = '-',
  c0 = [],
  Cm = 'arbitrary..',
  Om = (o) => {
    const d = Dm(o),
      { conflictingClassGroups: m, conflictingClassGroupModifiers: r } = o;
    return {
      getClassGroupId: (C) => {
        if (C.startsWith('[') && C.endsWith(']')) return wm(C);
        const w = C.split(is),
          A = w[0] === '' && w.length > 1 ? 1 : 0;
        return S0(w, A, d);
      },
      getConflictingClassGroupIds: (C, w) => {
        if (w) {
          const A = r[C],
            S = m[C];
          return A ? (S ? Mm(S, A) : A) : S || c0;
        }
        return m[C] || c0;
      },
    };
  },
  S0 = (o, d, m) => {
    if (o.length - d === 0) return m.classGroupId;
    const b = o[d],
      p = m.nextPart.get(b);
    if (p) {
      const S = S0(o, d + 1, p);
      if (S) return S;
    }
    const C = m.validators;
    if (C === null) return;
    const w = d === 0 ? o.join(is) : o.slice(d).join(is),
      A = C.length;
    for (let S = 0; S < A; S++) {
      const R = C[S];
      if (R.validator(w)) return R.classGroupId;
    }
  },
  wm = (o) =>
    o.slice(1, -1).indexOf(':') === -1
      ? void 0
      : (() => {
          const d = o.slice(1, -1),
            m = d.indexOf(':'),
            r = d.slice(0, m);
          return r ? Cm + r : void 0;
        })(),
  Dm = (o) => {
    const { theme: d, classGroups: m } = o;
    return Hm(m, d);
  },
  Hm = (o, d) => {
    const m = b0();
    for (const r in o) {
      const b = o[r];
      Gu(b, m, r, d);
    }
    return m;
  },
  Gu = (o, d, m, r) => {
    const b = o.length;
    for (let p = 0; p < b; p++) {
      const C = o[p];
      Um(C, d, m, r);
    }
  },
  Um = (o, d, m, r) => {
    if (typeof o == 'string') {
      Qm(o, d, m);
      return;
    }
    if (typeof o == 'function') {
      Rm(o, d, m, r);
      return;
    }
    qm(o, d, m, r);
  },
  Qm = (o, d, m) => {
    const r = o === '' ? d : N0(d, o);
    r.classGroupId = m;
  },
  Rm = (o, d, m, r) => {
    if (Bm(o)) {
      Gu(o(r), d, m, r);
      return;
    }
    d.validators === null && (d.validators = []), d.validators.push(_m(m, o));
  },
  qm = (o, d, m, r) => {
    const b = Object.entries(o),
      p = b.length;
    for (let C = 0; C < p; C++) {
      const [w, A] = b[C];
      Gu(A, N0(d, w), m, r);
    }
  },
  N0 = (o, d) => {
    let m = o;
    const r = d.split(is),
      b = r.length;
    for (let p = 0; p < b; p++) {
      const C = r[p];
      let w = m.nextPart.get(C);
      w || ((w = b0()), m.nextPart.set(C, w)), (m = w);
    }
    return m;
  },
  Bm = (o) => 'isThemeGetter' in o && o.isThemeGetter === !0,
  km = (o) => {
    if (o < 1) return { get: () => {}, set: () => {} };
    let d = 0,
      m = Object.create(null),
      r = Object.create(null);
    const b = (p, C) => {
      (m[p] = C), d++, d > o && ((d = 0), (r = m), (m = Object.create(null)));
    };
    return {
      get(p) {
        let C = m[p];
        if (C !== void 0) return C;
        if ((C = r[p]) !== void 0) return b(p, C), C;
      },
      set(p, C) {
        p in m ? (m[p] = C) : b(p, C);
      },
    };
  },
  Ru = '!',
  s0 = ':',
  Ym = [],
  i0 = (o, d, m, r, b) => ({
    modifiers: o,
    hasImportantModifier: d,
    baseClassName: m,
    maybePostfixModifierPosition: r,
    isExternal: b,
  }),
  Gm = (o) => {
    const { prefix: d, experimentalParseClassName: m } = o;
    let r = (b) => {
      const p = [];
      let C = 0,
        w = 0,
        A = 0,
        S;
      const R = b.length;
      for (let nt = 0; nt < R; nt++) {
        const ot = b[nt];
        if (C === 0 && w === 0) {
          if (ot === s0) {
            p.push(b.slice(A, nt)), (A = nt + 1);
            continue;
          }
          if (ot === '/') {
            S = nt;
            continue;
          }
        }
        ot === '[' ? C++ : ot === ']' ? C-- : ot === '(' ? w++ : ot === ')' && w--;
      }
      const U = p.length === 0 ? b : b.slice(A);
      let B = U,
        k = !1;
      U.endsWith(Ru)
        ? ((B = U.slice(0, -1)), (k = !0))
        : U.startsWith(Ru) && ((B = U.slice(1)), (k = !0));
      const yt = S && S > A ? S - A : void 0;
      return i0(p, k, B, yt);
    };
    if (d) {
      const b = d + s0,
        p = r;
      r = (C) => (C.startsWith(b) ? p(C.slice(b.length)) : i0(Ym, !1, C, void 0, !0));
    }
    if (m) {
      const b = r;
      r = (p) => m({ className: p, parseClassName: b });
    }
    return r;
  },
  Xm = (o) => {
    const d = new Map();
    return (
      o.orderSensitiveModifiers.forEach((m, r) => {
        d.set(m, 1e6 + r);
      }),
      (m) => {
        const r = [];
        let b = [];
        for (let p = 0; p < m.length; p++) {
          const C = m[p],
            w = C[0] === '[',
            A = d.has(C);
          w || A ? (b.length > 0 && (b.sort(), r.push(...b), (b = [])), r.push(C)) : b.push(C);
        }
        return b.length > 0 && (b.sort(), r.push(...b)), r;
      }
    );
  },
  Lm = (o) => ({ cache: km(o.cacheSize), parseClassName: Gm(o), sortModifiers: Xm(o), ...Om(o) }),
  Vm = /\s+/,
  Zm = (o, d) => {
    const {
        parseClassName: m,
        getClassGroupId: r,
        getConflictingClassGroupIds: b,
        sortModifiers: p,
      } = d,
      C = [],
      w = o.trim().split(Vm);
    let A = '';
    for (let S = w.length - 1; S >= 0; S -= 1) {
      const R = w[S],
        {
          isExternal: U,
          modifiers: B,
          hasImportantModifier: k,
          baseClassName: yt,
          maybePostfixModifierPosition: nt,
        } = m(R);
      if (U) {
        A = R + (A.length > 0 ? ' ' + A : A);
        continue;
      }
      let ot = !!nt,
        Et = r(ot ? yt.substring(0, nt) : yt);
      if (!Et) {
        if (!ot) {
          A = R + (A.length > 0 ? ' ' + A : A);
          continue;
        }
        if (((Et = r(yt)), !Et)) {
          A = R + (A.length > 0 ? ' ' + A : A);
          continue;
        }
        ot = !1;
      }
      const Ot = B.length === 0 ? '' : B.length === 1 ? B[0] : p(B).join(':'),
        pt = k ? Ot + Ru : Ot,
        ct = pt + Et;
      if (C.indexOf(ct) > -1) continue;
      C.push(ct);
      const ht = b(Et, ot);
      for (let At = 0; At < ht.length; ++At) {
        const $ = ht[At];
        C.push(pt + $);
      }
      A = R + (A.length > 0 ? ' ' + A : A);
    }
    return A;
  },
  Km = (...o) => {
    let d = 0,
      m,
      r,
      b = '';
    while (d < o.length) (m = o[d++]) && (r = z0(m)) && (b && (b += ' '), (b += r));
    return b;
  },
  z0 = (o) => {
    if (typeof o == 'string') return o;
    let d,
      m = '';
    for (let r = 0; r < o.length; r++) o[r] && (d = z0(o[r])) && (m && (m += ' '), (m += d));
    return m;
  },
  Jm = (o, ...d) => {
    let m, r, b, p;
    const C = (A) => {
        const S = d.reduce((R, U) => U(R), o());
        return (m = Lm(S)), (r = m.cache.get), (b = m.cache.set), (p = w), w(A);
      },
      w = (A) => {
        const S = r(A);
        if (S) return S;
        const R = Zm(A, m);
        return b(A, R), R;
      };
    return (p = C), (...A) => p(Km(...A));
  },
  Fm = [],
  Xt = (o) => {
    const d = (m) => m[o] || Fm;
    return (d.isThemeGetter = !0), d;
  },
  A0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  j0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  $m = /^\d+\/\d+$/,
  Wm = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Im =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Pm = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  tx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ex =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ba = (o) => $m.test(o),
  et = (o) => !!o && !Number.isNaN(Number(o)),
  Hl = (o) => !!o && Number.isInteger(Number(o)),
  Du = (o) => o.endsWith('%') && et(o.slice(0, -1)),
  sl = (o) => Wm.test(o),
  lx = () => !0,
  ax = (o) => Im.test(o) && !Pm.test(o),
  E0 = () => !1,
  nx = (o) => tx.test(o),
  cx = (o) => ex.test(o),
  sx = (o) => !Y(o) && !G(o),
  ix = (o) => Ya(o, _0, E0),
  Y = (o) => A0.test(o),
  ta = (o) => Ya(o, C0, ax),
  Hu = (o) => Ya(o, dx, et),
  u0 = (o) => Ya(o, T0, E0),
  ux = (o) => Ya(o, M0, cx),
  as = (o) => Ya(o, O0, nx),
  G = (o) => j0.test(o),
  qn = (o) => Ga(o, C0),
  ox = (o) => Ga(o, hx),
  o0 = (o) => Ga(o, T0),
  rx = (o) => Ga(o, _0),
  fx = (o) => Ga(o, M0),
  ns = (o) => Ga(o, O0, !0),
  Ya = (o, d, m) => {
    const r = A0.exec(o);
    return r ? (r[1] ? d(r[1]) : m(r[2])) : !1;
  },
  Ga = (o, d, m = !1) => {
    const r = j0.exec(o);
    return r ? (r[1] ? d(r[1]) : m) : !1;
  },
  T0 = (o) => o === 'position' || o === 'percentage',
  M0 = (o) => o === 'image' || o === 'url',
  _0 = (o) => o === 'length' || o === 'size' || o === 'bg-size',
  C0 = (o) => o === 'length',
  dx = (o) => o === 'number',
  hx = (o) => o === 'family-name',
  O0 = (o) => o === 'shadow',
  mx = () => {
    const o = Xt('color'),
      d = Xt('font'),
      m = Xt('text'),
      r = Xt('font-weight'),
      b = Xt('tracking'),
      p = Xt('leading'),
      C = Xt('breakpoint'),
      w = Xt('container'),
      A = Xt('spacing'),
      S = Xt('radius'),
      R = Xt('shadow'),
      U = Xt('inset-shadow'),
      B = Xt('text-shadow'),
      k = Xt('drop-shadow'),
      yt = Xt('blur'),
      nt = Xt('perspective'),
      ot = Xt('aspect'),
      Et = Xt('ease'),
      Ot = Xt('animate'),
      pt = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
      ct = () => [
        'center',
        'top',
        'bottom',
        'left',
        'right',
        'top-left',
        'left-top',
        'top-right',
        'right-top',
        'bottom-right',
        'right-bottom',
        'bottom-left',
        'left-bottom',
      ],
      ht = () => [...ct(), G, Y],
      At = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      $ = () => ['auto', 'contain', 'none'],
      X = () => [G, Y, A],
      Qt = () => [Ba, 'full', 'auto', ...X()],
      Ye = () => [Hl, 'none', 'subgrid', G, Y],
      ue = () => ['auto', { span: ['full', Hl, G, Y] }, Hl, G, Y],
      Yt = () => [Hl, 'auto', G, Y],
      He = () => ['auto', 'min', 'max', 'fr', G, Y],
      oe = () => [
        'start',
        'end',
        'center',
        'between',
        'around',
        'evenly',
        'stretch',
        'baseline',
        'center-safe',
        'end-safe',
      ],
      Lt = () => ['start', 'end', 'center', 'stretch', 'center-safe', 'end-safe'],
      j = () => ['auto', ...X()],
      H = () => [
        Ba,
        'auto',
        'full',
        'dvw',
        'dvh',
        'lvw',
        'lvh',
        'svw',
        'svh',
        'min',
        'max',
        'fit',
        ...X(),
      ],
      O = () => [o, G, Y],
      mt = () => [...ct(), o0, u0, { position: [G, Y] }],
      vt = () => ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }],
      x = () => ['auto', 'cover', 'contain', rx, ix, { size: [G, Y] }],
      M = () => [Du, qn, ta],
      D = () => ['', 'none', 'full', S, G, Y],
      Q = () => ['', et, qn, ta],
      F = () => ['solid', 'dashed', 'dotted', 'double'],
      tt = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      J = () => [et, Du, o0, u0],
      Vt = () => ['', 'none', yt, G, Y],
      Tt = () => ['none', et, G, Y],
      Ue = () => ['none', et, G, Y],
      il = () => [et, G, Y],
      ul = () => [Ba, 'full', ...X()];
    return {
      cacheSize: 500,
      theme: {
        animate: ['spin', 'ping', 'pulse', 'bounce'],
        aspect: ['video'],
        blur: [sl],
        breakpoint: [sl],
        color: [lx],
        container: [sl],
        'drop-shadow': [sl],
        ease: ['in', 'out', 'in-out'],
        font: [sx],
        'font-weight': [
          'thin',
          'extralight',
          'light',
          'normal',
          'medium',
          'semibold',
          'bold',
          'extrabold',
          'black',
        ],
        'inset-shadow': [sl],
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
        perspective: ['dramatic', 'near', 'normal', 'midrange', 'distant', 'none'],
        radius: [sl],
        shadow: [sl],
        spacing: ['px', et],
        text: [sl],
        'text-shadow': [sl],
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', Ba, Y, G, ot] }],
        container: ['container'],
        columns: [{ columns: [et, Y, G, w] }],
        'break-after': [{ 'break-after': pt() }],
        'break-before': [{ 'break-before': pt() }],
        'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        sr: ['sr-only', 'not-sr-only'],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
        'object-position': [{ object: ht() }],
        overflow: [{ overflow: At() }],
        'overflow-x': [{ 'overflow-x': At() }],
        'overflow-y': [{ 'overflow-y': At() }],
        overscroll: [{ overscroll: $() }],
        'overscroll-x': [{ 'overscroll-x': $() }],
        'overscroll-y': [{ 'overscroll-y': $() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: Qt() }],
        'inset-x': [{ 'inset-x': Qt() }],
        'inset-y': [{ 'inset-y': Qt() }],
        start: [{ start: Qt() }],
        end: [{ end: Qt() }],
        top: [{ top: Qt() }],
        right: [{ right: Qt() }],
        bottom: [{ bottom: Qt() }],
        left: [{ left: Qt() }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: [Hl, 'auto', G, Y] }],
        basis: [{ basis: [Ba, 'full', 'auto', w, ...X()] }],
        'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
        'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
        flex: [{ flex: [et, Ba, 'auto', 'initial', 'none', Y] }],
        grow: [{ grow: ['', et, G, Y] }],
        shrink: [{ shrink: ['', et, G, Y] }],
        order: [{ order: [Hl, 'first', 'last', 'none', G, Y] }],
        'grid-cols': [{ 'grid-cols': Ye() }],
        'col-start-end': [{ col: ue() }],
        'col-start': [{ 'col-start': Yt() }],
        'col-end': [{ 'col-end': Yt() }],
        'grid-rows': [{ 'grid-rows': Ye() }],
        'row-start-end': [{ row: ue() }],
        'row-start': [{ 'row-start': Yt() }],
        'row-end': [{ 'row-end': Yt() }],
        'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
        'auto-cols': [{ 'auto-cols': He() }],
        'auto-rows': [{ 'auto-rows': He() }],
        gap: [{ gap: X() }],
        'gap-x': [{ 'gap-x': X() }],
        'gap-y': [{ 'gap-y': X() }],
        'justify-content': [{ justify: [...oe(), 'normal'] }],
        'justify-items': [{ 'justify-items': [...Lt(), 'normal'] }],
        'justify-self': [{ 'justify-self': ['auto', ...Lt()] }],
        'align-content': [{ content: ['normal', ...oe()] }],
        'align-items': [{ items: [...Lt(), { baseline: ['', 'last'] }] }],
        'align-self': [{ self: ['auto', ...Lt(), { baseline: ['', 'last'] }] }],
        'place-content': [{ 'place-content': oe() }],
        'place-items': [{ 'place-items': [...Lt(), 'baseline'] }],
        'place-self': [{ 'place-self': ['auto', ...Lt()] }],
        p: [{ p: X() }],
        px: [{ px: X() }],
        py: [{ py: X() }],
        ps: [{ ps: X() }],
        pe: [{ pe: X() }],
        pt: [{ pt: X() }],
        pr: [{ pr: X() }],
        pb: [{ pb: X() }],
        pl: [{ pl: X() }],
        m: [{ m: j() }],
        mx: [{ mx: j() }],
        my: [{ my: j() }],
        ms: [{ ms: j() }],
        me: [{ me: j() }],
        mt: [{ mt: j() }],
        mr: [{ mr: j() }],
        mb: [{ mb: j() }],
        ml: [{ ml: j() }],
        'space-x': [{ 'space-x': X() }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': X() }],
        'space-y-reverse': ['space-y-reverse'],
        size: [{ size: H() }],
        w: [{ w: [w, 'screen', ...H()] }],
        'min-w': [{ 'min-w': [w, 'screen', 'none', ...H()] }],
        'max-w': [{ 'max-w': [w, 'screen', 'none', 'prose', { screen: [C] }, ...H()] }],
        h: [{ h: ['screen', 'lh', ...H()] }],
        'min-h': [{ 'min-h': ['screen', 'lh', 'none', ...H()] }],
        'max-h': [{ 'max-h': ['screen', 'lh', ...H()] }],
        'font-size': [{ text: ['base', m, qn, ta] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [{ font: [r, G, Hu] }],
        'font-stretch': [
          {
            'font-stretch': [
              'ultra-condensed',
              'extra-condensed',
              'condensed',
              'semi-condensed',
              'normal',
              'semi-expanded',
              'expanded',
              'extra-expanded',
              'ultra-expanded',
              Du,
              Y,
            ],
          },
        ],
        'font-family': [{ font: [ox, Y, d] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
        tracking: [{ tracking: [b, G, Y] }],
        'line-clamp': [{ 'line-clamp': [et, 'none', G, Hu] }],
        leading: [{ leading: [p, ...X()] }],
        'list-image': [{ 'list-image': ['none', G, Y] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'list-style-type': [{ list: ['disc', 'decimal', 'none', G, Y] }],
        'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
        'placeholder-color': [{ placeholder: O() }],
        'text-color': [{ text: O() }],
        'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
        'text-decoration-style': [{ decoration: [...F(), 'wavy'] }],
        'text-decoration-thickness': [{ decoration: [et, 'from-font', 'auto', G, ta] }],
        'text-decoration-color': [{ decoration: O() }],
        'underline-offset': [{ 'underline-offset': [et, 'auto', G, Y] }],
        'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: X() }],
        'vertical-align': [
          {
            align: [
              'baseline',
              'top',
              'middle',
              'bottom',
              'text-top',
              'text-bottom',
              'sub',
              'super',
              G,
              Y,
            ],
          },
        ],
        whitespace: [
          { whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] },
        ],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        wrap: [{ wrap: ['break-word', 'anywhere', 'normal'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', G, Y] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: mt() }],
        'bg-repeat': [{ bg: vt() }],
        'bg-size': [{ bg: x() }],
        'bg-image': [
          {
            bg: [
              'none',
              {
                linear: [{ to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, Hl, G, Y],
                radial: ['', G, Y],
                conic: [Hl, G, Y],
              },
              fx,
              ux,
            ],
          },
        ],
        'bg-color': [{ bg: O() }],
        'gradient-from-pos': [{ from: M() }],
        'gradient-via-pos': [{ via: M() }],
        'gradient-to-pos': [{ to: M() }],
        'gradient-from': [{ from: O() }],
        'gradient-via': [{ via: O() }],
        'gradient-to': [{ to: O() }],
        rounded: [{ rounded: D() }],
        'rounded-s': [{ 'rounded-s': D() }],
        'rounded-e': [{ 'rounded-e': D() }],
        'rounded-t': [{ 'rounded-t': D() }],
        'rounded-r': [{ 'rounded-r': D() }],
        'rounded-b': [{ 'rounded-b': D() }],
        'rounded-l': [{ 'rounded-l': D() }],
        'rounded-ss': [{ 'rounded-ss': D() }],
        'rounded-se': [{ 'rounded-se': D() }],
        'rounded-ee': [{ 'rounded-ee': D() }],
        'rounded-es': [{ 'rounded-es': D() }],
        'rounded-tl': [{ 'rounded-tl': D() }],
        'rounded-tr': [{ 'rounded-tr': D() }],
        'rounded-br': [{ 'rounded-br': D() }],
        'rounded-bl': [{ 'rounded-bl': D() }],
        'border-w': [{ border: Q() }],
        'border-w-x': [{ 'border-x': Q() }],
        'border-w-y': [{ 'border-y': Q() }],
        'border-w-s': [{ 'border-s': Q() }],
        'border-w-e': [{ 'border-e': Q() }],
        'border-w-t': [{ 'border-t': Q() }],
        'border-w-r': [{ 'border-r': Q() }],
        'border-w-b': [{ 'border-b': Q() }],
        'border-w-l': [{ 'border-l': Q() }],
        'divide-x': [{ 'divide-x': Q() }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': Q() }],
        'divide-y-reverse': ['divide-y-reverse'],
        'border-style': [{ border: [...F(), 'hidden', 'none'] }],
        'divide-style': [{ divide: [...F(), 'hidden', 'none'] }],
        'border-color': [{ border: O() }],
        'border-color-x': [{ 'border-x': O() }],
        'border-color-y': [{ 'border-y': O() }],
        'border-color-s': [{ 'border-s': O() }],
        'border-color-e': [{ 'border-e': O() }],
        'border-color-t': [{ 'border-t': O() }],
        'border-color-r': [{ 'border-r': O() }],
        'border-color-b': [{ 'border-b': O() }],
        'border-color-l': [{ 'border-l': O() }],
        'divide-color': [{ divide: O() }],
        'outline-style': [{ outline: [...F(), 'none', 'hidden'] }],
        'outline-offset': [{ 'outline-offset': [et, G, Y] }],
        'outline-w': [{ outline: ['', et, qn, ta] }],
        'outline-color': [{ outline: O() }],
        shadow: [{ shadow: ['', 'none', R, ns, as] }],
        'shadow-color': [{ shadow: O() }],
        'inset-shadow': [{ 'inset-shadow': ['none', U, ns, as] }],
        'inset-shadow-color': [{ 'inset-shadow': O() }],
        'ring-w': [{ ring: Q() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: O() }],
        'ring-offset-w': [{ 'ring-offset': [et, ta] }],
        'ring-offset-color': [{ 'ring-offset': O() }],
        'inset-ring-w': [{ 'inset-ring': Q() }],
        'inset-ring-color': [{ 'inset-ring': O() }],
        'text-shadow': [{ 'text-shadow': ['none', B, ns, as] }],
        'text-shadow-color': [{ 'text-shadow': O() }],
        opacity: [{ opacity: [et, G, Y] }],
        'mix-blend': [{ 'mix-blend': [...tt(), 'plus-darker', 'plus-lighter'] }],
        'bg-blend': [{ 'bg-blend': tt() }],
        'mask-clip': [
          { 'mask-clip': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] },
          'mask-no-clip',
        ],
        'mask-composite': [{ mask: ['add', 'subtract', 'intersect', 'exclude'] }],
        'mask-image-linear-pos': [{ 'mask-linear': [et] }],
        'mask-image-linear-from-pos': [{ 'mask-linear-from': J() }],
        'mask-image-linear-to-pos': [{ 'mask-linear-to': J() }],
        'mask-image-linear-from-color': [{ 'mask-linear-from': O() }],
        'mask-image-linear-to-color': [{ 'mask-linear-to': O() }],
        'mask-image-t-from-pos': [{ 'mask-t-from': J() }],
        'mask-image-t-to-pos': [{ 'mask-t-to': J() }],
        'mask-image-t-from-color': [{ 'mask-t-from': O() }],
        'mask-image-t-to-color': [{ 'mask-t-to': O() }],
        'mask-image-r-from-pos': [{ 'mask-r-from': J() }],
        'mask-image-r-to-pos': [{ 'mask-r-to': J() }],
        'mask-image-r-from-color': [{ 'mask-r-from': O() }],
        'mask-image-r-to-color': [{ 'mask-r-to': O() }],
        'mask-image-b-from-pos': [{ 'mask-b-from': J() }],
        'mask-image-b-to-pos': [{ 'mask-b-to': J() }],
        'mask-image-b-from-color': [{ 'mask-b-from': O() }],
        'mask-image-b-to-color': [{ 'mask-b-to': O() }],
        'mask-image-l-from-pos': [{ 'mask-l-from': J() }],
        'mask-image-l-to-pos': [{ 'mask-l-to': J() }],
        'mask-image-l-from-color': [{ 'mask-l-from': O() }],
        'mask-image-l-to-color': [{ 'mask-l-to': O() }],
        'mask-image-x-from-pos': [{ 'mask-x-from': J() }],
        'mask-image-x-to-pos': [{ 'mask-x-to': J() }],
        'mask-image-x-from-color': [{ 'mask-x-from': O() }],
        'mask-image-x-to-color': [{ 'mask-x-to': O() }],
        'mask-image-y-from-pos': [{ 'mask-y-from': J() }],
        'mask-image-y-to-pos': [{ 'mask-y-to': J() }],
        'mask-image-y-from-color': [{ 'mask-y-from': O() }],
        'mask-image-y-to-color': [{ 'mask-y-to': O() }],
        'mask-image-radial': [{ 'mask-radial': [G, Y] }],
        'mask-image-radial-from-pos': [{ 'mask-radial-from': J() }],
        'mask-image-radial-to-pos': [{ 'mask-radial-to': J() }],
        'mask-image-radial-from-color': [{ 'mask-radial-from': O() }],
        'mask-image-radial-to-color': [{ 'mask-radial-to': O() }],
        'mask-image-radial-shape': [{ 'mask-radial': ['circle', 'ellipse'] }],
        'mask-image-radial-size': [
          { 'mask-radial': [{ closest: ['side', 'corner'], farthest: ['side', 'corner'] }] },
        ],
        'mask-image-radial-pos': [{ 'mask-radial-at': ct() }],
        'mask-image-conic-pos': [{ 'mask-conic': [et] }],
        'mask-image-conic-from-pos': [{ 'mask-conic-from': J() }],
        'mask-image-conic-to-pos': [{ 'mask-conic-to': J() }],
        'mask-image-conic-from-color': [{ 'mask-conic-from': O() }],
        'mask-image-conic-to-color': [{ 'mask-conic-to': O() }],
        'mask-mode': [{ mask: ['alpha', 'luminance', 'match'] }],
        'mask-origin': [
          { 'mask-origin': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] },
        ],
        'mask-position': [{ mask: mt() }],
        'mask-repeat': [{ mask: vt() }],
        'mask-size': [{ mask: x() }],
        'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
        'mask-image': [{ mask: ['none', G, Y] }],
        filter: [{ filter: ['', 'none', G, Y] }],
        blur: [{ blur: Vt() }],
        brightness: [{ brightness: [et, G, Y] }],
        contrast: [{ contrast: [et, G, Y] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', k, ns, as] }],
        'drop-shadow-color': [{ 'drop-shadow': O() }],
        grayscale: [{ grayscale: ['', et, G, Y] }],
        'hue-rotate': [{ 'hue-rotate': [et, G, Y] }],
        invert: [{ invert: ['', et, G, Y] }],
        saturate: [{ saturate: [et, G, Y] }],
        sepia: [{ sepia: ['', et, G, Y] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none', G, Y] }],
        'backdrop-blur': [{ 'backdrop-blur': Vt() }],
        'backdrop-brightness': [{ 'backdrop-brightness': [et, G, Y] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [et, G, Y] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': ['', et, G, Y] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [et, G, Y] }],
        'backdrop-invert': [{ 'backdrop-invert': ['', et, G, Y] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [et, G, Y] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [et, G, Y] }],
        'backdrop-sepia': [{ 'backdrop-sepia': ['', et, G, Y] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': X() }],
        'border-spacing-x': [{ 'border-spacing-x': X() }],
        'border-spacing-y': [{ 'border-spacing-y': X() }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [
          { transition: ['', 'all', 'colors', 'opacity', 'shadow', 'transform', 'none', G, Y] },
        ],
        'transition-behavior': [{ transition: ['normal', 'discrete'] }],
        duration: [{ duration: [et, 'initial', G, Y] }],
        ease: [{ ease: ['linear', 'initial', Et, G, Y] }],
        delay: [{ delay: [et, G, Y] }],
        animate: [{ animate: ['none', Ot, G, Y] }],
        backface: [{ backface: ['hidden', 'visible'] }],
        perspective: [{ perspective: [nt, G, Y] }],
        'perspective-origin': [{ 'perspective-origin': ht() }],
        rotate: [{ rotate: Tt() }],
        'rotate-x': [{ 'rotate-x': Tt() }],
        'rotate-y': [{ 'rotate-y': Tt() }],
        'rotate-z': [{ 'rotate-z': Tt() }],
        scale: [{ scale: Ue() }],
        'scale-x': [{ 'scale-x': Ue() }],
        'scale-y': [{ 'scale-y': Ue() }],
        'scale-z': [{ 'scale-z': Ue() }],
        'scale-3d': ['scale-3d'],
        skew: [{ skew: il() }],
        'skew-x': [{ 'skew-x': il() }],
        'skew-y': [{ 'skew-y': il() }],
        transform: [{ transform: [G, Y, '', 'none', 'gpu', 'cpu'] }],
        'transform-origin': [{ origin: ht() }],
        'transform-style': [{ transform: ['3d', 'flat'] }],
        translate: [{ translate: ul() }],
        'translate-x': [{ 'translate-x': ul() }],
        'translate-y': [{ 'translate-y': ul() }],
        'translate-z': [{ 'translate-z': ul() }],
        'translate-none': ['translate-none'],
        accent: [{ accent: O() }],
        appearance: [{ appearance: ['none', 'auto'] }],
        'caret-color': [{ caret: O() }],
        'color-scheme': [
          { scheme: ['normal', 'dark', 'light', 'light-dark', 'only-dark', 'only-light'] },
        ],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              G,
              Y,
            ],
          },
        ],
        'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
        'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
        resize: [{ resize: ['none', '', 'y', 'x'] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': X() }],
        'scroll-mx': [{ 'scroll-mx': X() }],
        'scroll-my': [{ 'scroll-my': X() }],
        'scroll-ms': [{ 'scroll-ms': X() }],
        'scroll-me': [{ 'scroll-me': X() }],
        'scroll-mt': [{ 'scroll-mt': X() }],
        'scroll-mr': [{ 'scroll-mr': X() }],
        'scroll-mb': [{ 'scroll-mb': X() }],
        'scroll-ml': [{ 'scroll-ml': X() }],
        'scroll-p': [{ 'scroll-p': X() }],
        'scroll-px': [{ 'scroll-px': X() }],
        'scroll-py': [{ 'scroll-py': X() }],
        'scroll-ps': [{ 'scroll-ps': X() }],
        'scroll-pe': [{ 'scroll-pe': X() }],
        'scroll-pt': [{ 'scroll-pt': X() }],
        'scroll-pr': [{ 'scroll-pr': X() }],
        'scroll-pb': [{ 'scroll-pb': X() }],
        'scroll-pl': [{ 'scroll-pl': X() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', G, Y] }],
        fill: [{ fill: ['none', ...O()] }],
        'stroke-w': [{ stroke: [et, qn, ta, Hu] }],
        stroke: [{ stroke: ['none', ...O()] }],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': [
          'fvn-ordinal',
          'fvn-slashed-zero',
          'fvn-figure',
          'fvn-spacing',
          'fvn-fraction',
        ],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-x',
          'border-w-y',
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-x',
          'border-color-y',
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        translate: ['translate-x', 'translate-y', 'translate-none'],
        'translate-none': ['translate', 'translate-x', 'translate-y', 'translate-z'],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
      orderSensitiveModifiers: [
        '*',
        '**',
        'after',
        'backdrop',
        'before',
        'details-content',
        'file',
        'first-letter',
        'first-line',
        'marker',
        'placeholder',
        'selection',
      ],
    };
  },
  xx = Jm(mx);
function os(...o) {
  return xx(g0(o));
}
const yx = Tm(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
);
function ke({ className: o, variant: d = 'default', size: m = 'default', asChild: r = !1, ...b }) {
  const p = r ? Sm : 'button';
  return i.jsx(p, {
    'code-path': 'src/components/ui/button.tsx:52:5',
    'data-slot': 'button',
    'data-variant': d,
    'data-size': m,
    className: os(yx({ variant: d, size: m, className: o })),
    ...b,
  });
}
const vx = (o) => o.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  px = (o) =>
    o.replace(/^([A-Z])|[\s-_]+(\w)/g, (d, m, r) => (r ? r.toUpperCase() : m.toLowerCase())),
  r0 = (o) => {
    const d = px(o);
    return d.charAt(0).toUpperCase() + d.slice(1);
  },
  w0 = (...o) =>
    o
      .filter((d, m, r) => !!d && d.trim() !== '' && r.indexOf(d) === m)
      .join(' ')
      .trim(),
  gx = (o) => {
    for (const d in o) if (d.startsWith('aria-') || d === 'role' || d === 'title') return !0;
  };
var bx = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
const Sx = Z.forwardRef(
  (
    {
      color: o = 'currentColor',
      size: d = 24,
      strokeWidth: m = 2,
      absoluteStrokeWidth: r,
      className: b = '',
      children: p,
      iconNode: C,
      ...w
    },
    A
  ) =>
    Z.createElement(
      'svg',
      {
        ref: A,
        ...bx,
        width: d,
        height: d,
        stroke: o,
        strokeWidth: r ? (Number(m) * 24) / Number(d) : m,
        className: w0('lucide', b),
        ...(!p && !gx(w) && { 'aria-hidden': 'true' }),
        ...w,
      },
      [...C.map(([S, R]) => Z.createElement(S, R)), ...(Array.isArray(p) ? p : [p])]
    )
);
const dt = (o, d) => {
  const m = Z.forwardRef(({ className: r, ...b }, p) =>
    Z.createElement(Sx, {
      ref: p,
      iconNode: d,
      className: w0(`lucide-${vx(r0(o))}`, `lucide-${o}`, r),
      ...b,
    })
  );
  return (m.displayName = r0(o)), m;
};
const Nx = [
    ['path', { d: 'M5 12h14', key: '1ays0h' }],
    ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }],
  ],
  Uu = dt('arrow-right', Nx);
const zx = [
    [
      'path',
      {
        d: 'm15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526',
        key: '1yiouv',
      },
    ],
    ['circle', { cx: '12', cy: '8', r: '6', key: '1vp47v' }],
  ],
  Ax = dt('award', zx);
const jx = [
    ['path', { d: 'M2 4v16', key: 'vw9hq8' }],
    ['path', { d: 'M2 8h18a2 2 0 0 1 2 2v10', key: '1dgv2r' }],
    ['path', { d: 'M2 17h20', key: '18nfp3' }],
    ['path', { d: 'M6 8v9', key: '1yriud' }],
  ],
  Ex = dt('bed', jx);
const Tx = [
    ['path', { d: 'M8 2v4', key: '1cmpym' }],
    ['path', { d: 'M16 2v4', key: '4m81vk' }],
    ['rect', { width: '18', height: '18', x: '3', y: '4', rx: '2', key: '1hopcy' }],
    ['path', { d: 'M3 10h18', key: '8toen8' }],
  ],
  qu = dt('calendar', Tx);
const Mx = [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]],
  _x = dt('chevron-down', Mx);
const Cx = [
    ['path', { d: 'M21.801 10A10 10 0 1 1 17 3.335', key: 'yps3ct' }],
    ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
  ],
  us = dt('circle-check-big', Cx);
const Ox = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
    ['path', { d: 'M12 17h.01', key: 'p32p05' }],
  ],
  wx = dt('circle-question-mark', Ox);
const Dx = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'm15 9-6 6', key: '1uzhvr' }],
    ['path', { d: 'm9 9 6 6', key: 'z0biqf' }],
  ],
  f0 = dt('circle-x', Dx);
const Hx = [
    ['rect', { width: '8', height: '4', x: '8', y: '2', rx: '1', ry: '1', key: 'tgr4d6' }],
    [
      'path',
      {
        d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2',
        key: '116196',
      },
    ],
    ['path', { d: 'M12 11h4', key: '1jrz19' }],
    ['path', { d: 'M12 16h4', key: 'n85exb' }],
    ['path', { d: 'M8 11h.01', key: '1dfujw' }],
    ['path', { d: 'M8 16h.01', key: '18s6g9' }],
  ],
  Ux = dt('clipboard-list', Hx);
const Qx = [
    ['path', { d: 'M12 6v6l4 2', key: 'mmk7yg' }],
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ],
  D0 = dt('clock', Qx);
const Rx = [
    [
      'path',
      { d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z', key: '1jg4f8' },
    ],
  ],
  qx = dt('facebook', Rx);
const Bx = [
    ['rect', { x: '3', y: '8', width: '18', height: '4', rx: '1', key: 'bkv52' }],
    ['path', { d: 'M12 8v13', key: '1c76mn' }],
    ['path', { d: 'M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7', key: '6wjy6b' }],
    [
      'path',
      {
        d: 'M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5',
        key: '1ihvrl',
      },
    ],
  ],
  kx = dt('gift', Bx);
const Yx = [
    [
      'path',
      {
        d: 'M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5',
        key: 'mvr1a0',
      },
    ],
  ],
  Gx = dt('heart', Yx);
const Xx = [
    ['path', { d: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8', key: '5wwlr5' }],
    [
      'path',
      {
        d: 'M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
        key: 'r6nss1',
      },
    ],
  ],
  Lx = dt('house', Xx);
const Vx = [
    ['rect', { width: '20', height: '20', x: '2', y: '2', rx: '5', ry: '5', key: '2e1cvw' }],
    ['path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z', key: '9exkf1' }],
    ['line', { x1: '17.5', x2: '17.51', y1: '6.5', y2: '6.5', key: 'r4j83e' }],
  ],
  Zx = dt('instagram', Vx);
const Kx = [
    [
      'path',
      {
        d: 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5',
        key: '1gvzjb',
      },
    ],
    ['path', { d: 'M9 18h6', key: 'x1upvd' }],
    ['path', { d: 'M10 22h4', key: 'ceow96' }],
  ],
  d0 = dt('lightbulb', Kx);
const Jx = [['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }]],
  Fx = dt('loader-circle', Jx);
const $x = [
    ['path', { d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7', key: '132q7q' }],
    ['rect', { x: '2', y: '4', width: '20', height: '16', rx: '2', key: 'izxlao' }],
  ],
  Bu = dt('mail', $x);
const Wx = [
    [
      'path',
      {
        d: 'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0',
        key: '1r0f0z',
      },
    ],
    ['circle', { cx: '12', cy: '10', r: '3', key: 'ilqhr7' }],
  ],
  ku = dt('map-pin', Wx);
const Ix = [
    ['path', { d: 'M4 5h16', key: '1tepv9' }],
    ['path', { d: 'M4 12h16', key: '1lakjw' }],
    ['path', { d: 'M4 19h16', key: '1djgab' }],
  ],
  Px = dt('menu', Ix);
const ty = [
    [
      'path',
      {
        d: 'M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z',
        key: '18887p',
      },
    ],
  ],
  ey = dt('message-square', ty);
const ly = [
    [
      'path',
      {
        d: 'M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384',
        key: '9njp5v',
      },
    ],
  ],
  ka = dt('phone', ly);
const ay = [
    ['path', { d: 'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8', key: 'v9h5vc' }],
    ['path', { d: 'M21 3v5h-5', key: '1q7to0' }],
    ['path', { d: 'M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16', key: '3uifl3' }],
    ['path', { d: 'M8 16H3v5', key: '1cv678' }],
  ],
  ny = dt('refresh-cw', ay);
const cy = [
    [
      'path',
      {
        d: 'M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z',
        key: '1ffxy3',
      },
    ],
    ['path', { d: 'm21.854 2.147-10.94 10.939', key: '12cjpa' }],
  ],
  sy = dt('send', cy);
const iy = [
    [
      'path',
      {
        d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
        key: 'oel41y',
      },
    ],
  ],
  uy = dt('shield', iy);
const oy = [
    [
      'path',
      {
        d: 'M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z',
        key: '1s2grr',
      },
    ],
    ['path', { d: 'M20 2v4', key: '1rf3ol' }],
    ['path', { d: 'M22 4h-4', key: 'gwowj6' }],
    ['circle', { cx: '4', cy: '20', r: '2', key: '6kqj1y' }],
  ],
  H0 = dt('sparkles', oy);
const ry = [
    ['path', { d: 'M11 2v2', key: '1539x4' }],
    ['path', { d: 'M5 2v2', key: '1yf1q8' }],
    ['path', { d: 'M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1', key: 'rb5t3r' }],
    ['path', { d: 'M8 15a6 6 0 0 0 12 0v-3', key: 'x18d4x' }],
    ['circle', { cx: '20', cy: '10', r: '2', key: 'ts1r5v' }],
  ],
  fy = dt('stethoscope', ry);
const dy = [
    ['path', { d: 'M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978', key: '1n3hpd' }],
    ['path', { d: 'M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978', key: 'rfe1zi' }],
    ['path', { d: 'M18 9h1.5a1 1 0 0 0 0-5H18', key: '7xy6bh' }],
    ['path', { d: 'M4 22h16', key: '57wxv0' }],
    ['path', { d: 'M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z', key: '1mhfuq' }],
    ['path', { d: 'M6 9H4.5a1 1 0 0 1 0-5H6', key: 'tex48p' }],
  ],
  hy = dt('trophy', dy);
const my = [
    ['path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' }],
    ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }],
  ],
  xy = dt('user', my);
const yy = [
    ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', key: '1yyitq' }],
    ['path', { d: 'M16 3.128a4 4 0 0 1 0 7.744', key: '16gr8j' }],
    ['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87', key: 'kshegd' }],
    ['circle', { cx: '9', cy: '7', r: '4', key: 'nufk8' }],
  ],
  vy = dt('users', yy);
const py = [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ],
  gy = dt('x', py);
const by = [
    [
      'path',
      {
        d: 'M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17',
        key: '1q2vi4',
      },
    ],
    ['path', { d: 'm10 15 5-3-5-3z', key: '1jp15x' }],
  ],
  Sy = dt('youtube', by),
  h0 = [
    { label: 'О клинике', href: '#about' },
    { label: 'Врачи', href: '#about' },
    { label: 'Акции', href: '#faq' },
    { label: 'Контакты', href: '#contact' },
  ];
function Ny() {
  const [o, d] = Z.useState(!1),
    [m, r] = Z.useState(!1);
  Z.useEffect(() => {
    const p = () => {
      d(window.scrollY > 100);
    };
    return (
      window.addEventListener('scroll', p, { passive: !0 }),
      () => window.removeEventListener('scroll', p)
    );
  }, []);
  const b = (p) => {
    r(!1),
      p.startsWith('#') &&
        document.getElementById(p.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx('nav', {
        'code-path': 'src/sections/Navigation.tsx:35:7',
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${o ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'}`,
        children: i.jsx('div', {
          'code-path': 'src/sections/Navigation.tsx:42:9',
          className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
          children: i.jsxs('div', {
            'code-path': 'src/sections/Navigation.tsx:43:11',
            className: 'flex items-center justify-between',
            children: [
              i.jsxs('button', {
                'code-path': 'src/sections/Navigation.tsx:45:13',
                onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
                className: 'flex items-center gap-2 group',
                children: [
                  i.jsx('div', {
                    'code-path': 'src/sections/Navigation.tsx:49:15',
                    className: `w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${o ? 'bg-gradient-to-br from-sky-400 to-sky-600' : 'bg-white/20 backdrop-blur-sm'}`,
                    children: i.jsx('svg', {
                      'code-path': 'src/sections/Navigation.tsx:52:17',
                      className: 'w-6 h-6 text-white',
                      viewBox: '0 0 24 24',
                      fill: 'currentColor',
                      children: i.jsx('path', {
                        'code-path': 'src/sections/Navigation.tsx:53:19',
                        d: 'M12 2C9.5 2 7.5 3.5 7 5.5C6.5 7.5 7 9.5 7.5 11C8 12.5 8 14 7 15.5C6 17 5 18.5 5 20C5 21 5.5 22 6.5 22C7.5 22 8 21 8.5 20C9 19 9.5 18 10 17.5C10.5 17 11 17 11.5 17.5C12 18 12.5 19 13 20C13.5 21 14 22 15 22C16 22 16.5 21 16.5 20C16.5 18.5 15.5 17 14.5 15.5C13.5 14 13.5 12.5 14 11C14.5 9.5 15 7.5 14.5 5.5C14 3.5 12 2 12 2Z',
                      }),
                    }),
                  }),
                  i.jsxs('div', {
                    'code-path': 'src/sections/Navigation.tsx:56:15',
                    className: 'transition-colors text-slate-800',
                    children: [
                      i.jsx('div', {
                        'code-path': 'src/sections/Navigation.tsx:57:17',
                        className: 'font-bold text-lg leading-tight',
                        children: 'в Африке',
                      }),
                      i.jsx('div', {
                        'code-path': 'src/sections/Navigation.tsx:58:17',
                        className: 'text-xs opacity-70',
                        children: 'Стоматология для детей',
                      }),
                    ],
                  }),
                ],
              }),
              i.jsx('div', {
                'code-path': 'src/sections/Navigation.tsx:63:13',
                className: 'hidden lg:flex items-center gap-8',
                children: h0.map((p) =>
                  i.jsx(
                    'button',
                    {
                      'code-path': 'src/sections/Navigation.tsx:65:17',
                      onClick: () => b(p.href),
                      className: 'font-medium transition-colors hover:text-sky-600 text-slate-700',
                      children: p.label,
                    },
                    p.label
                  )
                ),
              }),
              i.jsxs('div', {
                'code-path': 'src/sections/Navigation.tsx:78:13',
                className: 'hidden lg:flex items-center gap-4',
                children: [
                  i.jsxs('a', {
                    'code-path': 'src/sections/Navigation.tsx:79:15',
                    href: 'tel:88352370255',
                    className:
                      'flex items-center gap-2 font-medium transition-colors text-slate-700 hover:text-sky-600',
                    children: [
                      i.jsx(ka, {
                        'code-path': 'src/sections/Navigation.tsx:85:17',
                        className: 'w-4 h-4',
                      }),
                      '8 (8352) 37-02-55',
                    ],
                  }),
                  i.jsx(ke, {
                    'code-path': 'src/sections/Navigation.tsx:88:15',
                    onClick: () => b('#contact'),
                    className:
                      'gradient-primary text-white font-semibold px-6 rounded-xl shadow-glow hover:shadow-lg hover:scale-105 transition-all',
                    children: 'Записаться',
                  }),
                ],
              }),
              i.jsx('button', {
                'code-path': 'src/sections/Navigation.tsx:97:13',
                onClick: () => r(!m),
                className: `lg:hidden p-2 rounded-xl transition-colors ${o ? 'hover:bg-slate-100' : 'hover:bg-white/20'}`,
                children: m
                  ? i.jsx(gy, {
                      'code-path': 'src/sections/Navigation.tsx:104:17',
                      className: 'w-6 h-6 text-slate-700',
                    })
                  : i.jsx(Px, {
                      'code-path': 'src/sections/Navigation.tsx:106:17',
                      className: 'w-6 h-6 text-slate-700',
                    }),
              }),
            ],
          }),
        }),
      }),
      i.jsxs('div', {
        'code-path': 'src/sections/Navigation.tsx:114:7',
        className: `fixed inset-0 z-40 lg:hidden transition-all duration-300 ${m ? 'opacity-100 visible' : 'opacity-0 invisible'}`,
        children: [
          i.jsx('div', {
            'code-path': 'src/sections/Navigation.tsx:120:9',
            className: 'absolute inset-0 bg-slate-900/50 backdrop-blur-sm',
            onClick: () => r(!1),
          }),
          i.jsx('div', {
            'code-path': 'src/sections/Navigation.tsx:126:9',
            className: `absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-300 ${m ? 'translate-x-0' : 'translate-x-full'}`,
            children: i.jsxs('div', {
              'code-path': 'src/sections/Navigation.tsx:131:11',
              className: 'p-6 pt-20',
              children: [
                i.jsx('div', {
                  'code-path': 'src/sections/Navigation.tsx:132:13',
                  className: 'space-y-4',
                  children: h0.map((p) =>
                    i.jsx(
                      'button',
                      {
                        'code-path': 'src/sections/Navigation.tsx:134:17',
                        onClick: () => b(p.href),
                        className:
                          'block w-full text-left py-3 px-4 rounded-xl text-lg font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors',
                        children: p.label,
                      },
                      p.label
                    )
                  ),
                }),
                i.jsxs('div', {
                  'code-path': 'src/sections/Navigation.tsx:144:13',
                  className: 'mt-8 pt-8 border-t border-slate-100',
                  children: [
                    i.jsxs('a', {
                      'code-path': 'src/sections/Navigation.tsx:145:15',
                      href: 'tel:88352370255',
                      className:
                        'flex items-center gap-3 py-3 px-4 rounded-xl text-slate-700 hover:bg-sky-50 transition-colors',
                      children: [
                        i.jsx(ka, {
                          'code-path': 'src/sections/Navigation.tsx:149:17',
                          className: 'w-5 h-5 text-sky-600',
                        }),
                        i.jsx('span', {
                          'code-path': 'src/sections/Navigation.tsx:150:17',
                          className: 'font-medium',
                          children: '8 (8352) 37-02-55',
                        }),
                      ],
                    }),
                    i.jsx(ke, {
                      'code-path': 'src/sections/Navigation.tsx:152:15',
                      onClick: () => b('#contact'),
                      className:
                        'w-full mt-4 gradient-primary text-white font-bold py-4 rounded-xl',
                      children: 'Записаться на приём',
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function zy() {
  const o = Z.useRef(null),
    d = Z.useRef([]),
    m = Z.useRef({ x: 0, y: 0 }),
    r = Z.useRef(null),
    [b, p] = Z.useState(!1);
  Z.useEffect(() => {
    p(!0);
    const w = o.current;
    if (!w) return;
    const A = w.getContext('2d');
    if (!A) return;
    const S = () => {
      (w.width = window.innerWidth), (w.height = window.innerHeight);
    };
    S(), window.addEventListener('resize', S);
    const R = ['rgba(91, 189, 220, ', 'rgba(255, 206, 84, ', 'rgba(144, 238, 144, '];
    for (let k = 0; k < 50; k++)
      d.current.push({
        x: Math.random() * w.width,
        y: Math.random() * w.height,
        size: Math.random() * 8 + 4,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: R[Math.floor(Math.random() * R.length)],
      });
    const U = (k) => {
      m.current = { x: k.clientX, y: k.clientY };
    };
    window.addEventListener('mousemove', U, { passive: !0 });
    const B = () => {
      A.clearRect(0, 0, w.width, w.height),
        d.current.forEach((k, yt) => {
          const nt = m.current.x - k.x,
            ot = m.current.y - k.y,
            Et = Math.sqrt(nt * nt + ot * ot);
          if (Et < 150) {
            const Ot = (150 - Et) / 150;
            (k.x -= nt * Ot * 0.02), (k.y -= ot * Ot * 0.02);
          }
          (k.x += k.speedX),
            (k.y += k.speedY),
            k.x < 0 && (k.x = w.width),
            k.x > w.width && (k.x = 0),
            k.y < 0 && (k.y = w.height),
            k.y > w.height && (k.y = 0),
            A.beginPath(),
            A.arc(k.x, k.y, k.size, 0, Math.PI * 2),
            (A.fillStyle = `${k.color}${k.opacity})`),
            A.fill(),
            d.current.slice(yt + 1).forEach((Ot) => {
              const pt = Math.sqrt(Math.pow(k.x - Ot.x, 2) + Math.pow(k.y - Ot.y, 2));
              pt < 120 &&
                (A.beginPath(),
                A.moveTo(k.x, k.y),
                A.lineTo(Ot.x, Ot.y),
                (A.strokeStyle = `rgba(91, 189, 220, ${0.1 * (1 - pt / 120)})`),
                (A.lineWidth = 1),
                A.stroke());
            });
        }),
        (r.current = requestAnimationFrame(B));
    };
    return (
      B(),
      () => {
        window.removeEventListener('resize', S),
          window.removeEventListener('mousemove', U),
          r.current && cancelAnimationFrame(r.current);
      }
    );
  }, []);
  const C = (w) => {
    document.getElementById(w)?.scrollIntoView({ behavior: 'smooth' });
  };
  return i.jsxs('section', {
    'code-path': 'src/sections/Hero.tsx:122:5',
    className: 'relative min-h-screen flex items-center overflow-hidden',
    children: [
      i.jsx('canvas', {
        'code-path': 'src/sections/Hero.tsx:124:7',
        ref: o,
        className: 'absolute inset-0 z-0',
        style: {
          background: 'linear-gradient(135deg, #e8f7fc 0%, #d4f0f7 30%, #fff8e7 70%, #f0f9ff 100%)',
        },
      }),
      i.jsxs('div', {
        'code-path': 'src/sections/Hero.tsx:131:7',
        className: 'absolute inset-0 z-[1] pointer-events-none overflow-hidden',
        children: [
          i.jsx('div', {
            'code-path': 'src/sections/Hero.tsx:132:9',
            className: 'absolute top-20 left-10 w-20 h-20 rounded-full bg-sky-200/30 animate-float',
            style: { animationDelay: '0s' },
          }),
          i.jsx('div', {
            'code-path': 'src/sections/Hero.tsx:133:9',
            className:
              'absolute top-40 right-20 w-16 h-16 rounded-full bg-yellow-200/40 animate-float',
            style: { animationDelay: '1s' },
          }),
          i.jsx('div', {
            'code-path': 'src/sections/Hero.tsx:134:9',
            className:
              'absolute bottom-40 left-1/4 w-12 h-12 rounded-full bg-mint-200/30 animate-float',
            style: { animationDelay: '2s' },
          }),
          i.jsx('div', {
            'code-path': 'src/sections/Hero.tsx:135:9',
            className:
              'absolute bottom-20 right-1/3 w-24 h-24 rounded-full bg-sky-100/40 animate-float',
            style: { animationDelay: '0.5s' },
          }),
          i.jsx('svg', {
            'code-path': 'src/sections/Hero.tsx:138:9',
            className: 'absolute top-32 left-[15%] w-8 h-8 text-sky-300/50 animate-bounce-soft',
            viewBox: '0 0 24 24',
            fill: 'currentColor',
            children: i.jsx('path', {
              'code-path': 'src/sections/Hero.tsx:139:11',
              d: 'M12 2C9.5 2 7.5 3.5 7 5.5C6.5 7.5 7 9.5 7.5 11C8 12.5 8 14 7 15.5C6 17 5 18.5 5 20C5 21 5.5 22 6.5 22C7.5 22 8 21 8.5 20C9 19 9.5 18 10 17.5C10.5 17 11 17 11.5 17.5C12 18 12.5 19 13 20C13.5 21 14 22 15 22C16 22 16.5 21 16.5 20C16.5 18.5 15.5 17 14.5 15.5C13.5 14 13.5 12.5 14 11C14.5 9.5 15 7.5 14.5 5.5C14 3.5 12 2 12 2Z',
            }),
          }),
          i.jsx('svg', {
            'code-path': 'src/sections/Hero.tsx:141:9',
            className:
              'absolute bottom-32 right-[20%] w-10 h-10 text-yellow-300/40 animate-bounce-soft',
            style: { animationDelay: '1s' },
            viewBox: '0 0 24 24',
            fill: 'currentColor',
            children: i.jsx('path', {
              'code-path': 'src/sections/Hero.tsx:142:11',
              d: 'M12 2C9.5 2 7.5 3.5 7 5.5C6.5 7.5 7 9.5 7.5 11C8 12.5 8 14 7 15.5C6 17 5 18.5 5 20C5 21 5.5 22 6.5 22C7.5 22 8 21 8.5 20C9 19 9.5 18 10 17.5C10.5 17 11 17 11.5 17.5C12 18 12.5 19 13 20C13.5 21 14 22 15 22C16 22 16.5 21 16.5 20C16.5 18.5 15.5 17 14.5 15.5C13.5 14 13.5 12.5 14 11C14.5 9.5 15 7.5 14.5 5.5C14 3.5 12 2 12 2Z',
            }),
          }),
        ],
      }),
      i.jsx('div', {
        'code-path': 'src/sections/Hero.tsx:147:7',
        className: 'relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20',
        children: i.jsx('div', {
          'code-path': 'src/sections/Hero.tsx:148:9',
          className: 'max-w-7xl mx-auto',
          children: i.jsxs('div', {
            'code-path': 'src/sections/Hero.tsx:149:11',
            className: 'grid lg:grid-cols-2 gap-12 items-center',
            children: [
              i.jsxs('div', {
                'code-path': 'src/sections/Hero.tsx:151:13',
                className: `space-y-8 transition-all duration-1000 ${b ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
                children: [
                  i.jsxs('div', {
                    'code-path': 'src/sections/Hero.tsx:153:15',
                    className:
                      'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-soft',
                    children: [
                      i.jsx(H0, {
                        'code-path': 'src/sections/Hero.tsx:154:17',
                        className: 'w-4 h-4 text-yellow-500',
                      }),
                      i.jsx('span', {
                        'code-path': 'src/sections/Hero.tsx:155:17',
                        className: 'text-sm font-semibold text-sky-700',
                        children: 'Специализируемся на безопасности',
                      }),
                    ],
                  }),
                  i.jsxs('div', {
                    'code-path': 'src/sections/Hero.tsx:159:15',
                    className: 'space-y-4',
                    children: [
                      i.jsxs('h1', {
                        'code-path': 'src/sections/Hero.tsx:160:17',
                        className:
                          'text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight',
                        children: [
                          'Лечение зубов',
                          ' ',
                          i.jsxs('span', {
                            'code-path': 'src/sections/Hero.tsx:162:19',
                            className: 'relative inline-block',
                            children: [
                              i.jsx('span', {
                                'code-path': 'src/sections/Hero.tsx:163:21',
                                className: 'relative z-10 text-sky-600',
                                children: 'под наркозом',
                              }),
                              i.jsx('svg', {
                                'code-path': 'src/sections/Hero.tsx:164:21',
                                className:
                                  'absolute -bottom-2 left-0 w-full h-3 text-yellow-300 -z-0',
                                viewBox: '0 0 200 12',
                                preserveAspectRatio: 'none',
                                children: i.jsx('path', {
                                  'code-path': 'src/sections/Hero.tsx:165:23',
                                  d: 'M0,8 Q50,0 100,8 T200,8',
                                  stroke: 'currentColor',
                                  strokeWidth: '8',
                                  fill: 'none',
                                  strokeLinecap: 'round',
                                }),
                              }),
                            ],
                          }),
                          ' ',
                          'для детей',
                        ],
                      }),
                      i.jsx('p', {
                        'code-path': 'src/sections/Hero.tsx:170:17',
                        className: 'text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed',
                        children:
                          'Безболезненное и безопасное лечение детей для самых маленьких. Современное оборудование, опытные врачи-анестезиологи и забота о вашем ребёнке.',
                      }),
                    ],
                  }),
                  i.jsxs('div', {
                    'code-path': 'src/sections/Hero.tsx:177:15',
                    className: 'flex flex-wrap gap-4',
                    children: [
                      i.jsxs('div', {
                        'code-path': 'src/sections/Hero.tsx:178:17',
                        className:
                          'flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-sm',
                        children: [
                          i.jsx(uy, {
                            'code-path': 'src/sections/Hero.tsx:179:19',
                            className: 'w-5 h-5 text-green-500',
                          }),
                          i.jsx('span', {
                            'code-path': 'src/sections/Hero.tsx:180:19',
                            className: 'text-sm font-medium text-slate-700',
                            children: '100% безопасность',
                          }),
                        ],
                      }),
                      i.jsxs('div', {
                        'code-path': 'src/sections/Hero.tsx:182:17',
                        className:
                          'flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-sm',
                        children: [
                          i.jsx(Gx, {
                            'code-path': 'src/sections/Hero.tsx:183:19',
                            className: 'w-5 h-5 text-rose-500',
                          }),
                          i.jsx('span', {
                            'code-path': 'src/sections/Hero.tsx:184:19',
                            className: 'text-sm font-medium text-slate-700',
                            children: 'Без страха и боли',
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs('div', {
                    'code-path': 'src/sections/Hero.tsx:189:15',
                    className: 'flex flex-col sm:flex-row gap-4',
                    children: [
                      i.jsxs(ke, {
                        'code-path': 'src/sections/Hero.tsx:190:17',
                        size: 'lg',
                        className:
                          'gradient-primary text-white font-bold px-8 py-6 text-lg rounded-2xl shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300',
                        onClick: () => C('contact'),
                        children: [
                          i.jsx(qu, {
                            'code-path': 'src/sections/Hero.tsx:195:19',
                            className: 'w-5 h-5 mr-2',
                          }),
                          'Записаться на консультацию',
                        ],
                      }),
                      i.jsxs(ke, {
                        'code-path': 'src/sections/Hero.tsx:198:17',
                        variant: 'outline',
                        size: 'lg',
                        className:
                          'border-2 border-sky-400 text-sky-700 font-bold px-8 py-6 text-lg rounded-2xl hover:bg-sky-50 transition-all duration-300',
                        onClick: () => C('faq'),
                        children: [
                          i.jsx(ka, {
                            'code-path': 'src/sections/Hero.tsx:204:19',
                            className: 'w-5 h-5 mr-2',
                          }),
                          'Получить скидку на лечение',
                        ],
                      }),
                    ],
                  }),
                  i.jsxs('div', {
                    'code-path': 'src/sections/Hero.tsx:210:15',
                    className: 'flex flex-wrap gap-8 pt-4',
                    children: [
                      i.jsxs('div', {
                        'code-path': 'src/sections/Hero.tsx:211:17',
                        className: 'text-center',
                        children: [
                          i.jsx('div', {
                            'code-path': 'src/sections/Hero.tsx:212:19',
                            className: 'text-3xl font-bold text-sky-600',
                            children: '0-99',
                          }),
                          i.jsx('div', {
                            'code-path': 'src/sections/Hero.tsx:213:19',
                            className: 'text-sm text-slate-500',
                            children: 'Пациенты всех возрастов',
                          }),
                        ],
                      }),
                      i.jsxs('div', {
                        'code-path': 'src/sections/Hero.tsx:215:17',
                        className: 'text-center',
                        children: [
                          i.jsx('div', {
                            'code-path': 'src/sections/Hero.tsx:216:19',
                            className: 'text-3xl font-bold text-sky-600',
                            children: '15000+',
                          }),
                          i.jsx('div', {
                            'code-path': 'src/sections/Hero.tsx:217:19',
                            className: 'text-sm text-slate-500',
                            children: 'пролеченных детей',
                          }),
                        ],
                      }),
                      i.jsxs('div', {
                        'code-path': 'src/sections/Hero.tsx:219:17',
                        className: 'text-center',
                        children: [
                          i.jsx('div', {
                            'code-path': 'src/sections/Hero.tsx:220:19',
                            className: 'text-3xl font-bold text-sky-600',
                            children: '7',
                          }),
                          i.jsx('div', {
                            'code-path': 'src/sections/Hero.tsx:221:19',
                            className: 'text-sm text-slate-500',
                            children: 'лет успешной работы',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              i.jsx('div', {
                'code-path': 'src/sections/Hero.tsx:227:13',
                className: `relative transition-all duration-1000 delay-300 ${b ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`,
                children: i.jsxs('div', {
                  'code-path': 'src/sections/Hero.tsx:228:15',
                  className: 'relative',
                  children: [
                    i.jsxs('div', {
                      'code-path': 'src/sections/Hero.tsx:230:17',
                      className: 'relative rounded-3xl overflow-hidden shadow-2xl',
                      children: [
                        i.jsx('img', {
                          'code-path': 'src/sections/Hero.tsx:231:19',
                          src: '/hero-dentist.jpg',
                          alt: 'Детский стоматолог с пациентом',
                          className: 'w-full h-auto object-cover',
                        }),
                        i.jsx('div', {
                          'code-path': 'src/sections/Hero.tsx:236:19',
                          className:
                            'absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent',
                        }),
                      ],
                    }),
                    i.jsx('div', {
                      'code-path': 'src/sections/Hero.tsx:240:17',
                      className:
                        'absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-bounce-soft',
                      children: i.jsxs('div', {
                        'code-path': 'src/sections/Hero.tsx:241:19',
                        className: 'flex items-center gap-3',
                        children: [
                          i.jsx('div', {
                            'code-path': 'src/sections/Hero.tsx:242:21',
                            className:
                              'w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center',
                            children: i.jsx('svg', {
                              'code-path': 'src/sections/Hero.tsx:243:23',
                              className: 'w-6 h-6 text-amber-600',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              stroke: 'currentColor',
                              children: i.jsx('path', {
                                'code-path': 'src/sections/Hero.tsx:244:25',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: 2,
                                d: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
                              }),
                            }),
                          }),
                          i.jsxs('div', {
                            'code-path': 'src/sections/Hero.tsx:247:21',
                            children: [
                              i.jsx('div', {
                                'code-path': 'src/sections/Hero.tsx:248:23',
                                className: 'font-bold text-slate-800',
                                children: 'Амбассадоры',
                              }),
                              i.jsx('div', {
                                'code-path': 'src/sections/Hero.tsx:249:23',
                                className: 'text-sm text-slate-500',
                                children: 'лечения во сне',
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    i.jsx('div', {
                      'code-path': 'src/sections/Hero.tsx:254:17',
                      className:
                        'absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce-soft',
                      style: { animationDelay: '0.5s' },
                      children: i.jsxs('div', {
                        'code-path': 'src/sections/Hero.tsx:255:19',
                        className: 'flex items-center gap-2',
                        children: [
                          i.jsxs('div', {
                            'code-path': 'src/sections/Hero.tsx:256:21',
                            className: 'flex -space-x-2',
                            children: [
                              i.jsx('img', {
                                'code-path': 'src/sections/Hero.tsx:257:23',
                                src: '/happy-child.jpg',
                                alt: '',
                                className:
                                  'w-8 h-8 rounded-full border-2 border-white object-cover',
                              }),
                              i.jsx('div', {
                                'code-path': 'src/sections/Hero.tsx:258:23',
                                className:
                                  'w-8 h-8 rounded-full bg-sky-100 border-2 border-white flex items-center justify-center text-xs font-bold text-sky-600',
                                children: '+1.5к',
                              }),
                            ],
                          }),
                          i.jsx('div', {
                            'code-path': 'src/sections/Hero.tsx:260:21',
                            className: 'text-sm font-medium text-slate-700',
                            children: 'Довольных родителей',
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      i.jsx('div', {
        'code-path': 'src/sections/Hero.tsx:270:7',
        className: 'absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce',
        children: i.jsxs('button', {
          'code-path': 'src/sections/Hero.tsx:271:9',
          onClick: () => C('about'),
          className:
            'flex flex-col items-center gap-2 text-slate-400 hover:text-sky-600 transition-colors',
          children: [
            i.jsx('span', {
              'code-path': 'src/sections/Hero.tsx:275:11',
              className: 'text-sm font-medium',
              children: 'Узнать больше',
            }),
            i.jsx(_x, { 'code-path': 'src/sections/Hero.tsx:276:11', className: 'w-6 h-6' }),
          ],
        }),
      }),
    ],
  });
}
const Ay = [
  {
    icon: us,
    title: 'Индивидуальный подход',
    description:
      'Каждому ребёнку подбирается оптимальный план лечения с учетом возраста и индивидуальных показаний.',
  },
  {
    icon: vy,
    title: 'Опытная команда',
    description: 'Наши врачи имеют большой опыт в детской стоматологии и анестезиологии.',
  },
  {
    icon: D0,
    title: 'Всё за один визит',
    description:
      'Проводим полное лечение за одну процедуру под наркозом — без стресса для ребенка и родителей.',
  },
  {
    icon: Ax,
    title: 'Современное оборудование',
    description:
      'Используем сертифицированное оборудование и материалы последнего поколения для безопасной анестезии и единственные в Республике держим контроль над ситуацией с помощью BIS-мониторинга.',
  },
];
function jy() {
  const o = Z.useRef(null),
    [d, m] = Z.useState(!1);
  return (
    Z.useEffect(() => {
      const r = new IntersectionObserver(
        ([b]) => {
          b.isIntersecting && (m(!0), r.disconnect());
        },
        { threshold: 0.2 }
      );
      return o.current && r.observe(o.current), () => r.disconnect();
    }, []),
    i.jsxs('section', {
      'code-path': 'src/sections/About.tsx:50:5',
      id: 'about',
      ref: o,
      className: 'relative py-24 overflow-hidden',
      style: { background: 'linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)' },
      children: [
        i.jsx('div', {
          'code-path': 'src/sections/About.tsx:57:7',
          className:
            'absolute top-0 right-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2',
        }),
        i.jsx('div', {
          'code-path': 'src/sections/About.tsx:58:7',
          className:
            'absolute bottom-0 left-0 w-80 h-80 bg-yellow-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2',
        }),
        i.jsx('div', {
          'code-path': 'src/sections/About.tsx:60:7',
          className: 'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
          children: i.jsxs('div', {
            'code-path': 'src/sections/About.tsx:61:9',
            className: 'grid lg:grid-cols-2 gap-16 items-center',
            children: [
              i.jsx('div', {
                'code-path': 'src/sections/About.tsx:63:11',
                className: `relative transition-all duration-1000 ${d ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`,
                children: i.jsxs('div', {
                  'code-path': 'src/sections/About.tsx:64:13',
                  className: 'relative',
                  children: [
                    i.jsx('div', {
                      'code-path': 'src/sections/About.tsx:66:15',
                      className: 'rounded-3xl overflow-hidden shadow-2xl',
                      children: i.jsx('img', {
                        'code-path': 'src/sections/About.tsx:67:17',
                        src: '/clinic-interior.jpg',
                        alt: 'Интерьер детской стоматологической клиники',
                        className: 'w-full h-auto object-cover',
                      }),
                    }),
                    i.jsxs('div', {
                      'code-path': 'src/sections/About.tsx:75:15',
                      className:
                        'absolute -bottom-8 -right-8 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-6 text-white shadow-xl',
                      children: [
                        i.jsx('div', {
                          'code-path': 'src/sections/About.tsx:76:17',
                          className: 'text-5xl font-bold',
                          children: '7+',
                        }),
                        i.jsxs('div', {
                          'code-path': 'src/sections/About.tsx:77:17',
                          className: 'text-sky-100',
                          children: [
                            'лет опыта',
                            i.jsx('br', { 'code-path': 'src/sections/About.tsx:77:56' }),
                            'работы с детьми',
                          ],
                        }),
                      ],
                    }),
                    i.jsx('div', {
                      'code-path': 'src/sections/About.tsx:81:15',
                      className:
                        'absolute -top-4 -left-4 w-24 h-24 border-4 border-sky-200 rounded-2xl -z-10',
                    }),
                    i.jsx('div', {
                      'code-path': 'src/sections/About.tsx:82:15',
                      className:
                        'absolute -bottom-4 right-20 w-16 h-16 bg-yellow-300 rounded-full -z-10 opacity-60',
                    }),
                  ],
                }),
              }),
              i.jsxs('div', {
                'code-path': 'src/sections/About.tsx:87:11',
                className: `space-y-8 transition-all duration-1000 delay-200 ${d ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`,
                children: [
                  i.jsxs('div', {
                    'code-path': 'src/sections/About.tsx:88:13',
                    className: 'space-y-4',
                    children: [
                      i.jsxs('div', {
                        'code-path': 'src/sections/About.tsx:89:15',
                        className:
                          'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm',
                        children: [
                          i.jsx('span', {
                            'code-path': 'src/sections/About.tsx:90:17',
                            className: 'w-2 h-2 rounded-full bg-sky-500 animate-pulse',
                          }),
                          'О нашей клинике',
                        ],
                      }),
                      i.jsxs('h2', {
                        'code-path': 'src/sections/About.tsx:93:15',
                        className:
                          'text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight',
                        children: [
                          'Заботимся о здоровье',
                          ' ',
                          i.jsx('span', {
                            'code-path': 'src/sections/About.tsx:95:17',
                            className: 'text-sky-600',
                            children: 'маленьких улыбок',
                          }),
                        ],
                      }),
                      i.jsx('p', {
                        'code-path': 'src/sections/About.tsx:97:15',
                        className: 'text-lg text-slate-600 leading-relaxed',
                        children:
                          'Мы понимаем, как важно сделать визит к стоматологу комфортным и безопасным. Команда клиники работает с 2019 года и за это время помогла уже более 15000 маленьким пациентам и их родителям. Передовые технологии, применяемые в клинике, позволяют помогать даже в самых непростых ситуациях и дарить своим пациентам здоровье на долгие годы.',
                      }),
                      i.jsx('p', {
                        'code-path': 'src/sections/About.tsx:104:15',
                        className: 'text-lg text-slate-600 leading-relaxed',
                        children:
                          'Со словами: «Вам только в Африке помогут» — врачи многих стоматологических клиник, в том числе и иногородних, отправляют к нам пациентов, потому что мы используем только современные методы анестезии с полным контролем жизненных показателей.',
                      }),
                    ],
                  }),
                  i.jsx('div', {
                    'code-path': 'src/sections/About.tsx:112:13',
                    className: 'grid sm:grid-cols-2 gap-6',
                    children: Ay.map((r, b) =>
                      i.jsxs(
                        'div',
                        {
                          'code-path': 'src/sections/About.tsx:114:17',
                          className:
                            'group p-5 rounded-2xl bg-white shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1',
                          style: { transitionDelay: `${b * 100}ms` },
                          children: [
                            i.jsx('div', {
                              'code-path': 'src/sections/About.tsx:119:19',
                              className:
                                'w-12 h-12 rounded-xl bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform',
                              children: i.jsx(r.icon, {
                                'code-path': 'src/sections/About.tsx:120:21',
                                className: 'w-6 h-6 text-sky-600',
                              }),
                            }),
                            i.jsx('h3', {
                              'code-path': 'src/sections/About.tsx:122:19',
                              className: 'font-bold text-slate-800 mb-2',
                              children: r.title,
                            }),
                            i.jsx('p', {
                              'code-path': 'src/sections/About.tsx:123:19',
                              className: 'text-sm text-slate-500 leading-relaxed',
                              children: r.description,
                            }),
                          ],
                        },
                        r.title
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const m0 = [
  {
    icon: Ux,
    number: '01',
    title: 'Консультация',
    description:
      'Осмотр стоматолога, рентген-диагностика и составление плана лечения. Обсуждаем все детали с родителями.',
    color: 'from-sky-400 to-sky-500',
    bgColor: 'bg-sky-50',
  },
  {
    icon: fy,
    number: '02',
    title: 'Осмотр анестезиолога',
    description:
      'Оценка состояния здоровья ребенка, сбор анамнеза, назначение необходимых анализов.',
    color: 'from-teal-400 to-teal-500',
    bgColor: 'bg-teal-50',
  },
  {
    icon: Ex,
    number: '03',
    title: 'Подготовка к процедуре',
    description: 'Ребёнок засыпает. Подключаем мониторинг всех жизненных показателей.',
    color: 'from-violet-400 to-violet-500',
    bgColor: 'bg-violet-50',
  },
  {
    icon: H0,
    number: '04',
    title: 'Лечение под наркозом',
    description:
      'Проводим все необходимые манипуляции: лечение кариеса, удаление, герметизацию, коронки и другое.',
    color: 'from-amber-400 to-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Lx,
    number: '05',
    title: 'Пробуждение и восстановление',
    description:
      'Ребёнок просыпается в течение 10-15 минут и остается в комнате восстановления под наблюдением врача. Через 1 час можно ехать домой.',
    color: 'from-rose-400 to-rose-500',
    bgColor: 'bg-rose-50',
  },
];
function Ey() {
  const o = Z.useRef(null),
    [d, m] = Z.useState(!1),
    [r, b] = Z.useState(0);
  return (
    Z.useEffect(() => {
      const p = new IntersectionObserver(
        ([C]) => {
          C.isIntersecting && (m(!0), p.disconnect());
        },
        { threshold: 0.1 }
      );
      return o.current && p.observe(o.current), () => p.disconnect();
    }, []),
    i.jsxs('section', {
      'code-path': 'src/sections/Process.tsx:71:5',
      id: 'process',
      ref: o,
      className: 'relative py-24 overflow-hidden bg-white',
      children: [
        i.jsxs('div', {
          'code-path': 'src/sections/Process.tsx:77:7',
          className: 'absolute inset-0 opacity-30',
          children: [
            i.jsx('div', {
              'code-path': 'src/sections/Process.tsx:78:9',
              className: 'absolute top-20 left-10 w-4 h-4 rounded-full bg-sky-200',
            }),
            i.jsx('div', {
              'code-path': 'src/sections/Process.tsx:79:9',
              className: 'absolute top-40 right-20 w-3 h-3 rounded-full bg-yellow-200',
            }),
            i.jsx('div', {
              'code-path': 'src/sections/Process.tsx:80:9',
              className: 'absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-teal-200',
            }),
            i.jsx('div', {
              'code-path': 'src/sections/Process.tsx:81:9',
              className: 'absolute bottom-20 right-1/3 w-5 h-5 rounded-full bg-rose-200',
            }),
          ],
        }),
        i.jsxs('div', {
          'code-path': 'src/sections/Process.tsx:84:7',
          className: 'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
          children: [
            i.jsxs('div', {
              'code-path': 'src/sections/Process.tsx:86:9',
              className: `text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${d ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
              children: [
                i.jsxs('div', {
                  'code-path': 'src/sections/Process.tsx:87:11',
                  className:
                    'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm mb-6',
                  children: [
                    i.jsx('span', {
                      'code-path': 'src/sections/Process.tsx:88:13',
                      className: 'w-2 h-2 rounded-full bg-sky-500',
                    }),
                    'Как проходит лечение',
                  ],
                }),
                i.jsxs('h2', {
                  'code-path': 'src/sections/Process.tsx:91:11',
                  className: 'text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6',
                  children: [
                    'Обдумать ',
                    i.jsx('span', {
                      'code-path': 'src/sections/Process.tsx:92:22',
                      className: 'text-sky-600',
                      children: 'шаг за шагом',
                    }),
                  ],
                }),
                i.jsx('p', {
                  'code-path': 'src/sections/Process.tsx:94:11',
                  className: 'text-lg text-slate-600',
                  children:
                    'Мы сделали процесс лечения максимально простым и понятным для родителей. Каждый этап контролируется опытными специалистами.',
                }),
              ],
            }),
            i.jsxs('div', {
              'code-path': 'src/sections/Process.tsx:101:9',
              className: 'relative',
              children: [
                i.jsx('div', {
                  'code-path': 'src/sections/Process.tsx:103:11',
                  className:
                    'hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-sky-200 via-teal-200 to-rose-200 rounded-full',
                }),
                i.jsx('div', {
                  'code-path': 'src/sections/Process.tsx:105:11',
                  className: 'grid md:grid-cols-2 lg:grid-cols-5 gap-8',
                  children: m0.map((p, C) =>
                    i.jsxs(
                      'div',
                      {
                        'code-path': 'src/sections/Process.tsx:107:15',
                        className: `relative transition-all duration-700 ${d ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
                        style: { transitionDelay: `${C * 150}ms` },
                        onMouseEnter: () => b(C),
                        children: [
                          i.jsxs('div', {
                            'code-path': 'src/sections/Process.tsx:114:17',
                            className: `relative p-6 rounded-3xl ${p.bgColor} border-2 border-transparent hover:border-sky-200 transition-all duration-300 group cursor-pointer ${r === C ? 'scale-105 shadow-xl' : ''}`,
                            children: [
                              i.jsx('div', {
                                'code-path': 'src/sections/Process.tsx:116:19',
                                className: `absolute -top-4 left-6 w-10 h-10 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`,
                                children: p.number,
                              }),
                              i.jsx('div', {
                                'code-path': 'src/sections/Process.tsx:121:19',
                                className: `w-16 h-16 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4 mt-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`,
                                children: i.jsx(p.icon, {
                                  'code-path': 'src/sections/Process.tsx:122:21',
                                  className: 'w-8 h-8 text-white',
                                }),
                              }),
                              i.jsx('h3', {
                                'code-path': 'src/sections/Process.tsx:126:19',
                                className: 'font-bold text-slate-800 text-lg mb-3',
                                children: p.title,
                              }),
                              i.jsx('p', {
                                'code-path': 'src/sections/Process.tsx:127:19',
                                className: 'text-sm text-slate-600 leading-relaxed',
                                children: p.description,
                              }),
                            ],
                          }),
                          C < m0.length - 1 &&
                            i.jsx('div', {
                              'code-path': 'src/sections/Process.tsx:132:19',
                              className:
                                'hidden lg:flex absolute top-24 -right-4 w-8 h-8 bg-white rounded-full shadow-md items-center justify-center z-10',
                              children: i.jsx('svg', {
                                'code-path': 'src/sections/Process.tsx:133:21',
                                className: 'w-4 h-4 text-sky-400',
                                fill: 'none',
                                viewBox: '0 0 24 24',
                                stroke: 'currentColor',
                                children: i.jsx('path', {
                                  'code-path': 'src/sections/Process.tsx:134:23',
                                  strokeLinecap: 'round',
                                  strokeLinejoin: 'round',
                                  strokeWidth: 2,
                                  d: 'M9 5l7 7-7 7',
                                }),
                              }),
                            }),
                        ],
                      },
                      p.number
                    )
                  ),
                }),
              ],
            }),
            i.jsx('div', {
              'code-path': 'src/sections/Process.tsx:144:9',
              className: `mt-16 text-center transition-all duration-1000 delay-700 ${d ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
              children: i.jsxs('div', {
                'code-path': 'src/sections/Process.tsx:145:11',
                className:
                  'inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200',
                children: [
                  i.jsx('div', {
                    'code-path': 'src/sections/Process.tsx:146:13',
                    className:
                      'w-10 h-10 rounded-full bg-green-100 flex items-center justify-center',
                    children: i.jsx('svg', {
                      'code-path': 'src/sections/Process.tsx:147:15',
                      className: 'w-5 h-5 text-green-600',
                      fill: 'none',
                      viewBox: '0 0 24 24',
                      stroke: 'currentColor',
                      children: i.jsx('path', {
                        'code-path': 'src/sections/Process.tsx:148:17',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: 2,
                        d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                      }),
                    }),
                  }),
                  i.jsxs('div', {
                    'code-path': 'src/sections/Process.tsx:151:13',
                    className: 'text-left',
                    children: [
                      i.jsx('div', {
                        'code-path': 'src/sections/Process.tsx:152:15',
                        className: 'font-semibold text-green-800',
                        children: 'Безопасность превыше всего',
                      }),
                      i.jsx('div', {
                        'code-path': 'src/sections/Process.tsx:153:15',
                        className: 'text-sm text-green-600',
                        children:
                          'Все процедуры проводятся с соблюдением международных стандартов.',
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
}
const be = [
    {
      id: 1,
      question: 'Для чего используется BIS-мониторинг при лечении во сне в стоматологии?',
      options: [
        { label: 'А', text: 'Для измерения артериального давления' },
        {
          label: 'Б',
          text: 'Для измерения уровня седации и предотвращения пробуждения или дополнительной седации',
        },
        { label: 'В', text: 'Для измерения сердечного ритма' },
      ],
      correctAnswer: 1,
      explanation:
        'BIS-мониторинг (Биспектральный индекс) измеряет электрическую активность мозга, что помогает анестезиологу анализировать и контролировать уровень седации и обеспечивает безопасность пациента.',
    },
    {
      id: 2,
      question:
        'Может ли во время наркоза выявиться осложнения что приведет к критическому состоянию ребенка?',
      options: [
        { label: 'А', text: 'Нет такого быть не может, наркоз абсолютно не влияет на организм' },
        {
          label: 'Б',
          text: 'Всегда во время наркоза пациент находится на грани между жизнью и смертью',
        },
        {
          label: 'В',
          text: 'Наркоз как и любая медицинская процедура имеет свои преимущества и риски',
        },
      ],
      correctAnswer: 2,
      explanation:
        'Наркоз как и любая медицинская процедура имеет свои преимущества и риски, которые предупреждают опытные врачи анестезиологи и педиатры проверяя внимательно анализы перед тем как допустить ребенка в лечение во сне. Кроме того, только у нашей клиники заключен договор с РДКБ. Такой договор обуславливает, что в непредвиденных ситуациях клиника может мгновенно привлечь специалистов многопрофильного детского стационара, включая реанимацию, что важно для безопасности.',
    },
    {
      id: 3,
      question: 'Почему у детей кариес развивается быстрее?',
      options: [
        { label: 'А', text: 'Дети едят больше сладкого, поэтому кариес развивается быстрее.' },
        {
          label: 'Б',
          text: 'Эмаль у детей тоньше и менее минерализована, кариес прогрессирует быстрее',
        },
        { label: 'В', text: 'Дети лучше ухаживают за зубами, поэтому кариес встречается редко' },
      ],
      correctAnswer: 1,
      explanation:
        'Детская эмаль более уязвима, а кариес у детей проявляется агрессивно. Без наркоза лечение зачастую невозможно из-за психологического барьера, что приводит к массовому удалению.',
    },
    {
      id: 4,
      question: 'Зачем перед лечением под наркозом включать множество анализов?',
      options: [
        { label: 'А', text: 'Чтобы увеличить стоимость лечения' },
        {
          label: 'Б',
          text: 'Оценить общее состояние здоровья пациента и минимизировать риски во время седации',
        },
        { label: 'В', text: 'Чтобы занять время пациента' },
      ],
      correctAnswer: 1,
      explanation:
        'Анализы (кровь, моча, ЭКГ и др.) позволяют выявить скрытое заболевание, подобрать медицинские препараты и предотвратить осложнения во время лечения.',
    },
    {
      id: 5,
      question:
        'Почему важно, чтобы анестезиологи-реаниматологи имели опыт работы именно с детьми при выдаче зубов во сне?',
      options: [
        {
          label: 'А',
          text: 'Дети требуют особых мер, дозировок препаратов и управления реакциями, в любом случае от взрослых',
        },
        { label: 'Б', text: 'Дети легче переносят наркоз, поэтому опыт не важен' },
        { label: 'В', text: 'Анестезиологи для детей менее квалификации' },
      ],
      correctAnswer: 0,
      explanation:
        'Детский организм имеет анатомо-физиологические особенности (метаболизм, дыхание, сердечно-сосудистая система). Опытный анестезиолог знает, как безопасно провести наркоз для ребенка.',
    },
    {
      id: 6,
      question:
        'С какого возраста и для каких детей возможно лечение зубов под наркозом в вашей клинике?',
      options: [
        { label: 'А', text: 'Только с 5 лет и только здоровых детей' },
        { label: 'Б', text: 'С 0 лет, включая детей с особыми потребностями (особенных детей)' },
        { label: 'В', text: 'Только с 12 лет' },
      ],
      correctAnswer: 1,
      explanation:
        'Современные методы седации позволяют безопасно лечить даже новорожденных и детей с нарушениями развития, аутизмом, синдромом Дауна и другими особенностями, вызывающими у них доступ к стоматологической помощи.',
    },
    {
      id: 7,
      question:
        'Какие негативные последствия могут возникнуть при лечении зубов в условиях принуждения (удержания) без наркоза или седации?',
      options: [
        { label: 'А', text: 'Улучшение поведения и снижение страховки' },
        {
          label: 'Б',
          text: 'Развитие энуреза, заикания, денталофобии и других психологических проблем',
        },
        { label: 'В', text: 'Быстрое заживление ранки' },
      ],
      correctAnswer: 1,
      explanation:
        'Физическое или психологическое принуждение во время лечения травмирует, что может привести к долгосрочным последствиям: ночным недержаниям (энурезу), речевым нарушениям (заиканию) и стойкому страху перед стоматологами (денталофобией).',
    },
    {
      id: 8,
      question:
        'Зачем ставить коронки на временные (молочные) зубы у детей, если они вскоре сменятся на постоянные?',
      options: [
        { label: 'А', text: 'Это не нужно, коронки делают только на постоянные зубы' },
        {
          label: 'Б',
          text: 'Сохранение функции жевания, эстетики и предотвращение проблем с прикусом до смены зубов',
        },
        { label: 'В', text: 'Чтобы увеличить стоимость лечения' },
      ],
      correctAnswer: 1,
      explanation:
        'Молочные зубы играют ключевую роль в развитии челюстей, правильном расположении постоянных зубов и питании. Коронки защищают разрушенные зубы от их естественной смены, предотвращая преждевременную травму и возникновение ортодонтических проблем.',
    },
    {
      id: 9,
      question: 'Каковы долгосрочные последствия преждевременного удаления зубов у детей?',
      options: [
        { label: 'А', text: 'Никакие, новые зубы вырастут правильно' },
        {
          label: 'Б',
          text: 'Нарушение развития челюсти, усталости зубов и необходимость дорогостоящего ортодонтического лечения в будущем',
        },
        { label: 'В', text: 'Ускоренная смена зубов' },
      ],
      correctAnswer: 1,
      explanation:
        'Раннее удаление молочных зубов приводит к потере пространства на длительное время, что вызывает смещение, скученность, нарушение прикуса и часто требует сложного и дорогого ортодонтического лечения (брекеты, расширители и т.д.).',
    },
    {
      id: 10,
      question: 'Что используется как антидот при реакции организма на севоран во время наркоза?',
      options: [
        { label: 'А', text: 'Адреналин' },
        { label: 'Б', text: 'Дантролен' },
        { label: 'В', text: 'Антигистаминные препараты' },
      ],
      correctAnswer: 1,
      explanation:
        'Дантролен — основной антидот при раковой гипертермии, редких, но опасных осложнениях, связанных с некоторыми ингаляционными анестетиками, включая севофлюран. Он нейтрализует человека и спасает жизнь. И конечно же он есть в нашей клинике.',
    },
  ],
  Ty = [
    {
      q: 'Как долго ребёнок будет спать после наркоза?',
      a: 'Обычно дети просыпаются через 10-20 минут после окончания процедуры. Полное восстановление занимает 1-2 часа.',
    },
    {
      q: 'Можно ли присутствовать родителям?',
      a: 'Да, родители присутствуют до момента засыпания ребёнка и сразу после пробуждения.',
    },
    {
      q: 'Какие анализы нужны перед наркозом?',
      a: 'Обычно требуется общий анализ крови, ЭКГ и осмотр педиатра. Точный список назначит анестезиолог.',
    },
    {
      q: 'Что если у ребёнка аллергия?',
      a: 'Обязательно сообщите об этом анестезиологу на консультации — мы подберём безопасные препараты.',
    },
  ];
function My() {
  const o = Z.useRef(null),
    [d, m] = Z.useState(!1),
    [r, b] = Z.useState('intro'),
    [p, C] = Z.useState(0),
    [w, A] = Z.useState(null),
    [S, R] = Z.useState(!1),
    [U, B] = Z.useState(0),
    [k, yt] = Z.useState([]);
  Z.useEffect(() => {
    const ct = new IntersectionObserver(
      ([ht]) => {
        ht.isIntersecting && (m(!0), ct.disconnect());
      },
      { threshold: 0.1 }
    );
    return o.current && ct.observe(o.current), () => ct.disconnect();
  }, []);
  const nt = () => {
      b('playing'), C(0), B(0), yt([]), A(null), R(!1);
    },
    ot = (ct) => {
      if (w !== null) return;
      A(ct);
      const ht = ct === be[p].correctAnswer;
      ht && B(U + 1), yt([...k, { questionId: be[p].id, correct: ht }]), R(!0);
    },
    Et = () => {
      p < be.length - 1 ? (C(p + 1), A(null), R(!1)) : b('finished');
    },
    Ot = () => {
      b('intro'), C(0), A(null), R(!1), B(0), yt([]);
    },
    pt = () =>
      U === be.length
        ? { title: 'Отлично!', message: 'Вы настоящий эксперт! Получите скидку 10%!', emoji: '🏆' }
        : U >= be.length * 0.7
          ? {
              title: 'Хороший результат!',
              message: 'Вы хорошо разбираетесь в теме! Получите скидку 10%!',
              emoji: '👍',
            }
          : {
              title: 'Неплохо!',
              message: 'Теперь вы знаете больше о лечении под наркозом! Получите скидку 10%!',
              emoji: '📚',
            };
  return i.jsxs('section', {
    'code-path': 'src/sections/FAQQuiz.tsx:210:5',
    id: 'faq',
    ref: o,
    className: 'relative py-24 overflow-hidden',
    style: { background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)' },
    children: [
      i.jsx('div', {
        'code-path': 'src/sections/FAQQuiz.tsx:217:7',
        className: 'absolute top-20 right-10 w-32 h-32 bg-yellow-200/30 rounded-full blur-2xl',
      }),
      i.jsx('div', {
        'code-path': 'src/sections/FAQQuiz.tsx:218:7',
        className: 'absolute bottom-20 left-10 w-40 h-40 bg-sky-200/30 rounded-full blur-2xl',
      }),
      i.jsxs('div', {
        'code-path': 'src/sections/FAQQuiz.tsx:220:7',
        className: 'relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
        children: [
          i.jsxs('div', {
            'code-path': 'src/sections/FAQQuiz.tsx:222:9',
            className: `text-center mb-12 transition-all duration-1000 ${d ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
            children: [
              i.jsxs('div', {
                'code-path': 'src/sections/FAQQuiz.tsx:223:11',
                className:
                  'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm mb-6',
                children: [
                  i.jsx(wx, {
                    'code-path': 'src/sections/FAQQuiz.tsx:224:13',
                    className: 'w-4 h-4',
                  }),
                  'Интерактивная викторина',
                ],
              }),
              i.jsxs('h2', {
                'code-path': 'src/sections/FAQQuiz.tsx:227:11',
                className: 'text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6',
                children: [
                  'Проверьте свои ',
                  i.jsx('span', {
                    'code-path': 'src/sections/FAQQuiz.tsx:228:28',
                    className: 'text-sky-600',
                    children: 'знания',
                  }),
                ],
              }),
              i.jsx('p', {
                'code-path': 'src/sections/FAQQuiz.tsx:230:11',
                className: 'text-lg text-slate-600 max-w-2xl mx-auto',
                children:
                  'Ответьте на часто задаваемые вопросы о лечении зубов под наркозом и узнайте, как хорошо вы разбираетесь в теме и получите скидку 10%!',
              }),
            ],
          }),
          i.jsx('div', {
            'code-path': 'src/sections/FAQQuiz.tsx:237:9',
            className: `transition-all duration-1000 delay-300 ${d ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
            children: i.jsxs('div', {
              'code-path': 'src/sections/FAQQuiz.tsx:238:11',
              className: 'bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100',
              children: [
                r === 'intro' &&
                  i.jsxs('div', {
                    'code-path': 'src/sections/FAQQuiz.tsx:241:15',
                    className: 'p-8 sm:p-12 text-center',
                    children: [
                      i.jsx('div', {
                        'code-path': 'src/sections/FAQQuiz.tsx:242:17',
                        className:
                          'w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center animate-bounce-soft',
                        children: i.jsx(d0, {
                          'code-path': 'src/sections/FAQQuiz.tsx:243:19',
                          className: 'w-12 h-12 text-white',
                        }),
                      }),
                      i.jsx('h3', {
                        'code-path': 'src/sections/FAQQuiz.tsx:245:17',
                        className: 'text-2xl font-bold text-slate-800 mb-4',
                        children: 'Готовы проверить свои знания?',
                      }),
                      i.jsx('p', {
                        'code-path': 'src/sections/FAQQuiz.tsx:246:17',
                        className: 'text-slate-600 mb-8 max-w-md mx-auto',
                        children:
                          '10 вопросов о необходимости ухода за зубами и интересных фактах о лечении зубов под наркозом. Найдите полезную информацию в игровой форме!',
                      }),
                      i.jsxs(ke, {
                        'code-path': 'src/sections/FAQQuiz.tsx:250:17',
                        size: 'lg',
                        onClick: nt,
                        className:
                          'gradient-primary text-white font-bold px-8 py-6 text-lg rounded-2xl shadow-glow hover:shadow-lg hover:scale-105 transition-all',
                        children: [
                          'Начать викторину',
                          i.jsx(Uu, {
                            'code-path': 'src/sections/FAQQuiz.tsx:256:19',
                            className: 'w-5 h-5 ml-2',
                          }),
                        ],
                      }),
                    ],
                  }),
                r === 'playing' &&
                  i.jsxs('div', {
                    'code-path': 'src/sections/FAQQuiz.tsx:263:15',
                    className: 'p-6 sm:p-8',
                    children: [
                      i.jsxs('div', {
                        'code-path': 'src/sections/FAQQuiz.tsx:265:17',
                        className: 'flex items-center justify-between mb-6',
                        children: [
                          i.jsxs('div', {
                            'code-path': 'src/sections/FAQQuiz.tsx:266:19',
                            className: 'text-sm font-medium text-slate-500',
                            children: ['Вопрос ', p + 1, ' из ', be.length],
                          }),
                          i.jsxs('div', {
                            'code-path': 'src/sections/FAQQuiz.tsx:269:19',
                            className: 'flex items-center gap-2',
                            children: [
                              i.jsx(hy, {
                                'code-path': 'src/sections/FAQQuiz.tsx:270:21',
                                className: 'w-4 h-4 text-yellow-500',
                              }),
                              i.jsxs('span', {
                                'code-path': 'src/sections/FAQQuiz.tsx:271:21',
                                className: 'text-sm font-bold text-slate-700',
                                children: [U, ' правильных'],
                              }),
                            ],
                          }),
                        ],
                      }),
                      i.jsx('div', {
                        'code-path': 'src/sections/FAQQuiz.tsx:276:17',
                        className: 'w-full h-2 bg-slate-100 rounded-full mb-8 overflow-hidden',
                        children: i.jsx('div', {
                          'code-path': 'src/sections/FAQQuiz.tsx:277:19',
                          className:
                            'h-full bg-gradient-to-r from-sky-400 to-sky-600 transition-all duration-500',
                          style: { width: `${((p + 1) / be.length) * 100}%` },
                        }),
                      }),
                      i.jsx('div', {
                        'code-path': 'src/sections/FAQQuiz.tsx:284:17',
                        className: 'mb-8',
                        children: i.jsx('h3', {
                          'code-path': 'src/sections/FAQQuiz.tsx:285:19',
                          className: 'text-xl sm:text-2xl font-bold text-slate-800',
                          children: be[p].question,
                        }),
                      }),
                      i.jsx('div', {
                        'code-path': 'src/sections/FAQQuiz.tsx:291:17',
                        className: 'space-y-3 mb-6',
                        children: be[p].options.map((ct, ht) => {
                          const At = w === ht,
                            $ = ht === be[p].correctAnswer,
                            X = w !== null;
                          return i.jsx(
                            'button',
                            {
                              'code-path': 'src/sections/FAQQuiz.tsx:298:23',
                              onClick: () => ot(ht),
                              disabled: w !== null,
                              className: `w-full p-4 rounded-2xl border-2 text-left transition-all duration-300 ${X ? ($ ? 'border-green-400 bg-green-50' : At ? 'border-red-400 bg-red-50' : 'border-slate-100 bg-slate-50 opacity-50') : 'border-slate-200 hover:border-sky-300 hover:bg-sky-50'} ${w === null ? 'hover:scale-[1.02] active:scale-[0.98]' : ''}`,
                              children: i.jsxs('div', {
                                'code-path': 'src/sections/FAQQuiz.tsx:312:25',
                                className: 'flex items-center gap-3',
                                children: [
                                  i.jsx('div', {
                                    'code-path': 'src/sections/FAQQuiz.tsx:313:27',
                                    className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${X ? ($ ? 'bg-green-500 text-white' : At ? 'bg-red-500 text-white' : 'bg-slate-200 text-slate-500') : 'bg-sky-100 text-sky-600'}`,
                                    children: X
                                      ? $
                                        ? i.jsx(us, {
                                            'code-path': 'src/sections/FAQQuiz.tsx:323:43',
                                            className: 'w-5 h-5',
                                          })
                                        : At
                                          ? i.jsx(f0, {
                                              'code-path': 'src/sections/FAQQuiz.tsx:323:94',
                                              className: 'w-5 h-5',
                                            })
                                          : ct.label
                                      : ct.label,
                                  }),
                                  i.jsx('span', {
                                    'code-path': 'src/sections/FAQQuiz.tsx:328:27',
                                    className: `font-medium ${X ? ($ ? 'text-green-800' : At ? 'text-red-800' : 'text-slate-500') : 'text-slate-700'}`,
                                    children: ct.text,
                                  }),
                                ],
                              }),
                            },
                            ht
                          );
                        }),
                      }),
                      S &&
                        i.jsx('div', {
                          'code-path': 'src/sections/FAQQuiz.tsx:345:19',
                          className: 'mb-6 p-4 rounded-2xl bg-sky-50 border border-sky-200',
                          children: i.jsxs('div', {
                            'code-path': 'src/sections/FAQQuiz.tsx:346:21',
                            className: 'flex items-start gap-3',
                            children: [
                              i.jsx(d0, {
                                'code-path': 'src/sections/FAQQuiz.tsx:347:23',
                                className: 'w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0',
                              }),
                              i.jsxs('div', {
                                'code-path': 'src/sections/FAQQuiz.tsx:348:23',
                                children: [
                                  i.jsx('div', {
                                    'code-path': 'src/sections/FAQQuiz.tsx:349:25',
                                    className: 'font-semibold text-sky-800 mb-1',
                                    children: 'Правильный ответ:',
                                  }),
                                  i.jsx('div', {
                                    'code-path': 'src/sections/FAQQuiz.tsx:350:25',
                                    className: 'text-sky-700',
                                    children: be[p].explanation,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      S &&
                        i.jsx('div', {
                          'code-path': 'src/sections/FAQQuiz.tsx:358:19',
                          className: 'flex justify-end',
                          children: i.jsxs(ke, {
                            'code-path': 'src/sections/FAQQuiz.tsx:359:21',
                            onClick: Et,
                            className: 'gradient-primary text-white font-bold px-6 py-3 rounded-xl',
                            children: [
                              p < be.length - 1 ? 'Следующий вопрос' : 'Узнать результат',
                              i.jsx(Uu, {
                                'code-path': 'src/sections/FAQQuiz.tsx:364:23',
                                className: 'w-4 h-4 ml-2',
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                r === 'finished' &&
                  i.jsxs('div', {
                    'code-path': 'src/sections/FAQQuiz.tsx:373:15',
                    className: 'p-8 sm:p-12 text-center',
                    children: [
                      i.jsx('div', {
                        'code-path': 'src/sections/FAQQuiz.tsx:374:17',
                        className:
                          'w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center animate-bounce-soft',
                        children: i.jsx('span', {
                          'code-path': 'src/sections/FAQQuiz.tsx:375:19',
                          className: 'text-6xl',
                          children: pt().emoji,
                        }),
                      }),
                      i.jsx('h3', {
                        'code-path': 'src/sections/FAQQuiz.tsx:378:17',
                        className: 'text-3xl font-bold text-slate-800 mb-2',
                        children: pt().title,
                      }),
                      i.jsx('p', {
                        'code-path': 'src/sections/FAQQuiz.tsx:379:17',
                        className: 'text-slate-600 mb-4',
                        children: pt().message,
                      }),
                      i.jsxs('div', {
                        'code-path': 'src/sections/FAQQuiz.tsx:382:17',
                        className:
                          'inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 mb-8',
                        children: [
                          i.jsx(kx, {
                            'code-path': 'src/sections/FAQQuiz.tsx:383:19',
                            className: 'w-8 h-8 text-amber-600',
                          }),
                          i.jsxs('div', {
                            'code-path': 'src/sections/FAQQuiz.tsx:384:19',
                            className: 'text-left',
                            children: [
                              i.jsx('div', {
                                'code-path': 'src/sections/FAQQuiz.tsx:385:21',
                                className: 'text-2xl font-bold text-amber-700',
                                children: 'Скидка 10%',
                              }),
                              i.jsx('div', {
                                'code-path': 'src/sections/FAQQuiz.tsx:386:21',
                                className: 'text-sm text-amber-600',
                                children: 'на первое посещение',
                              }),
                            ],
                          }),
                        ],
                      }),
                      i.jsxs('div', {
                        'code-path': 'src/sections/FAQQuiz.tsx:390:17',
                        className: 'bg-slate-50 rounded-2xl p-6 mb-8',
                        children: [
                          i.jsxs('div', {
                            'code-path': 'src/sections/FAQQuiz.tsx:391:19',
                            className: 'text-5xl font-bold text-sky-600 mb-2',
                            children: [U, '/', be.length],
                          }),
                          i.jsx('div', {
                            'code-path': 'src/sections/FAQQuiz.tsx:394:19',
                            className: 'text-slate-500',
                            children: 'правильных ответов',
                          }),
                        ],
                      }),
                      i.jsx('div', {
                        'code-path': 'src/sections/FAQQuiz.tsx:398:17',
                        className: 'flex flex-wrap justify-center gap-2 mb-8',
                        children: k.map((ct, ht) =>
                          i.jsx(
                            'div',
                            {
                              'code-path': 'src/sections/FAQQuiz.tsx:400:21',
                              className: `w-10 h-10 rounded-xl flex items-center justify-center ${ct.correct ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`,
                              children: ct.correct
                                ? i.jsx(us, {
                                    'code-path': 'src/sections/FAQQuiz.tsx:406:41',
                                    className: 'w-5 h-5',
                                  })
                                : i.jsx(f0, {
                                    'code-path': 'src/sections/FAQQuiz.tsx:406:79',
                                    className: 'w-5 h-5',
                                  }),
                            },
                            ht
                          )
                        ),
                      }),
                      i.jsxs('div', {
                        'code-path': 'src/sections/FAQQuiz.tsx:411:17',
                        className: 'flex flex-col sm:flex-row gap-4 justify-center',
                        children: [
                          i.jsxs(ke, {
                            'code-path': 'src/sections/FAQQuiz.tsx:412:19',
                            variant: 'outline',
                            onClick: Ot,
                            className:
                              'border-2 border-sky-400 text-sky-700 font-bold px-6 py-3 rounded-xl hover:bg-sky-50',
                            children: [
                              i.jsx(ny, {
                                'code-path': 'src/sections/FAQQuiz.tsx:417:21',
                                className: 'w-4 h-4 mr-2',
                              }),
                              'Пройти ещё раз',
                            ],
                          }),
                          i.jsxs(ke, {
                            'code-path': 'src/sections/FAQQuiz.tsx:420:19',
                            onClick: () =>
                              document
                                .getElementById('contact')
                                ?.scrollIntoView({ behavior: 'smooth' }),
                            className: 'gradient-primary text-white font-bold px-6 py-3 rounded-xl',
                            children: [
                              'Записаться на консультацию',
                              i.jsx(Uu, {
                                'code-path': 'src/sections/FAQQuiz.tsx:425:21',
                                className: 'w-4 h-4 ml-2',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          }),
          i.jsxs('div', {
            'code-path': 'src/sections/FAQQuiz.tsx:434:9',
            className: `mt-16 transition-all duration-1000 delay-500 ${d ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
            children: [
              i.jsx('h3', {
                'code-path': 'src/sections/FAQQuiz.tsx:435:11',
                className: 'text-2xl font-bold text-slate-800 text-center mb-8',
                children: 'Ещё вопросы?',
              }),
              i.jsx('div', {
                'code-path': 'src/sections/FAQQuiz.tsx:436:11',
                className: 'grid md:grid-cols-2 gap-6',
                children: Ty.map((ct, ht) =>
                  i.jsxs(
                    'div',
                    {
                      'code-path': 'src/sections/FAQQuiz.tsx:438:15',
                      className:
                        'p-6 rounded-2xl bg-white shadow-soft hover:shadow-md transition-shadow',
                      children: [
                        i.jsx('h4', {
                          'code-path': 'src/sections/FAQQuiz.tsx:439:17',
                          className: 'font-bold text-slate-800 mb-2',
                          children: ct.q,
                        }),
                        i.jsx('p', {
                          'code-path': 'src/sections/FAQQuiz.tsx:440:17',
                          className: 'text-sm text-slate-600',
                          children: ct.a,
                        }),
                      ],
                    },
                    ht
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function cs({ className: o, type: d, ...m }) {
  return i.jsx('input', {
    'code-path': 'src/components/ui/input.tsx:7:5',
    type: d,
    'data-slot': 'input',
    className: os(
      'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
      o
    ),
    ...m,
  });
}
function _y({ className: o, ...d }) {
  return i.jsx('textarea', {
    'code-path': 'src/components/ui/textarea.tsx:7:5',
    'data-slot': 'textarea',
    className: os(
      'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      o
    ),
    ...d,
  });
}
x0();
var Cy = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul',
  ],
  Oy = Cy.reduce((o, d) => {
    const m = v0(`Primitive.${d}`),
      r = Z.forwardRef((b, p) => {
        const { asChild: C, ...w } = b,
          A = C ? m : d;
        return (
          typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0), i.jsx(A, { ...w, ref: p })
        );
      });
    return (r.displayName = `Primitive.${d}`), { ...o, [d]: r };
  }, {}),
  wy = 'Label',
  U0 = Z.forwardRef((o, d) =>
    i.jsx(Oy.label, {
      ...o,
      ref: d,
      onMouseDown: (m) => {
        m.target.closest('button, input, select, textarea') ||
          (o.onMouseDown?.(m), !m.defaultPrevented && m.detail > 1 && m.preventDefault());
      },
    })
  );
U0.displayName = wy;
var Dy = U0;
function Bn({ className: o, ...d }) {
  return i.jsx(Dy, {
    'code-path': 'src/components/ui/label.tsx:13:5',
    'data-slot': 'label',
    className: os(
      'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
      o
    ),
    ...d,
  });
}
function Hy() {
  const o = Z.useRef(null),
    [d, m] = Z.useState(!1),
    [r, b] = Z.useState(!1),
    [p, C] = Z.useState(!1),
    [w, A] = Z.useState({ name: '', phone: '', email: '', childAge: '', message: '' });
  Z.useEffect(() => {
    const B = new IntersectionObserver(
      ([k]) => {
        k.isIntersecting && (m(!0), B.disconnect());
      },
      { threshold: 0.1 }
    );
    return o.current && B.observe(o.current), () => B.disconnect();
  }, []);
  const S = async (B) => {
      B.preventDefault(), b(!0), await new Promise((k) => setTimeout(k, 1500)), b(!1), C(!0);
    },
    R = (B) => {
      A({ ...w, [B.target.name]: B.target.value });
    },
    U = [
      { icon: ka, label: 'Телефон', value: '8 (8352) 37-02-55', href: 'tel:88352370255' },
      {
        icon: Bu,
        label: 'Электронная почта',
        value: 'info@vafrike21.ru',
        href: 'mailto:info@vafrike21.ru',
      },
      { icon: ku, label: 'Адрес', value: 'г. Чебоксары, ул. Ю. Гагарина, 35 Б', href: '#' },
      { icon: D0, label: 'Режим работы', value: 'Без выходных с 8:00 до 20:00', href: '#' },
    ];
  return i.jsxs('section', {
    'code-path': 'src/sections/Contact.tsx:62:5',
    id: 'contact',
    ref: o,
    className: 'relative py-24 overflow-hidden bg-white',
    children: [
      i.jsx('div', {
        'code-path': 'src/sections/Contact.tsx:68:7',
        className: 'absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-sky-50 to-transparent',
      }),
      i.jsx('div', {
        'code-path': 'src/sections/Contact.tsx:69:7',
        className: 'absolute bottom-20 right-10 w-64 h-64 bg-sky-100/30 rounded-full blur-3xl',
      }),
      i.jsx('div', {
        'code-path': 'src/sections/Contact.tsx:70:7',
        className: 'absolute top-40 left-10 w-48 h-48 bg-yellow-100/30 rounded-full blur-3xl',
      }),
      i.jsxs('div', {
        'code-path': 'src/sections/Contact.tsx:72:7',
        className: 'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        children: [
          i.jsxs('div', {
            'code-path': 'src/sections/Contact.tsx:74:9',
            className: `text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${d ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
            children: [
              i.jsxs('div', {
                'code-path': 'src/sections/Contact.tsx:75:11',
                className:
                  'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm mb-6',
                children: [
                  i.jsx(qu, {
                    'code-path': 'src/sections/Contact.tsx:76:13',
                    className: 'w-4 h-4',
                  }),
                  'Записаться на приём',
                ],
              }),
              i.jsxs('h2', {
                'code-path': 'src/sections/Contact.tsx:79:11',
                className: 'text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6',
                children: [
                  'Свяжитесь с ',
                  i.jsx('span', {
                    'code-path': 'src/sections/Contact.tsx:80:25',
                    className: 'text-sky-600',
                    children: 'нами',
                  }),
                ],
              }),
              i.jsx('p', {
                'code-path': 'src/sections/Contact.tsx:82:11',
                className: 'text-lg text-slate-600',
                children:
                  'Оставьте заявку, и мы свяжемся с вами в ближайшее время. Ответим на все вопросы и поможем записаться на консультацию.',
              }),
            ],
          }),
          i.jsxs('div', {
            'code-path': 'src/sections/Contact.tsx:88:9',
            className: 'grid lg:grid-cols-5 gap-12',
            children: [
              i.jsxs('div', {
                'code-path': 'src/sections/Contact.tsx:90:11',
                className: `lg:col-span-2 space-y-8 transition-all duration-1000 delay-200 ${d ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`,
                children: [
                  i.jsx('div', {
                    'code-path': 'src/sections/Contact.tsx:91:13',
                    className: 'space-y-6',
                    children: U.map((B, k) =>
                      i.jsxs(
                        'a',
                        {
                          'code-path': 'src/sections/Contact.tsx:93:17',
                          href: B.href,
                          className:
                            'flex items-start gap-4 p-4 rounded-2xl hover:bg-sky-50 transition-colors group',
                          style: { animationDelay: `${0.3 + k * 0.1}s` },
                          children: [
                            i.jsx('div', {
                              'code-path': 'src/sections/Contact.tsx:99:19',
                              className:
                                'w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center group-hover:bg-sky-200 transition-colors',
                              children: i.jsx(B.icon, {
                                'code-path': 'src/sections/Contact.tsx:100:21',
                                className: 'w-5 h-5 text-sky-600',
                              }),
                            }),
                            i.jsxs('div', {
                              'code-path': 'src/sections/Contact.tsx:102:19',
                              children: [
                                i.jsx('div', {
                                  'code-path': 'src/sections/Contact.tsx:103:21',
                                  className: 'text-sm text-slate-500 mb-1',
                                  children: B.label,
                                }),
                                i.jsx('div', {
                                  'code-path': 'src/sections/Contact.tsx:104:21',
                                  className:
                                    'font-semibold text-slate-800 group-hover:text-sky-600 transition-colors',
                                  children: B.value,
                                }),
                              ],
                            }),
                          ],
                        },
                        B.label
                      )
                    ),
                  }),
                  i.jsx('div', {
                    'code-path': 'src/sections/Contact.tsx:111:13',
                    className:
                      'rounded-2xl overflow-hidden shadow-lg bg-slate-100 h-48 flex items-center justify-center',
                    children: i.jsxs('div', {
                      'code-path': 'src/sections/Contact.tsx:112:15',
                      className: 'text-center',
                      children: [
                        i.jsx(ku, {
                          'code-path': 'src/sections/Contact.tsx:113:17',
                          className: 'w-8 h-8 text-sky-400 mx-auto mb-2',
                        }),
                        i.jsx('span', {
                          'code-path': 'src/sections/Contact.tsx:114:17',
                          className: 'text-slate-500 text-sm',
                          children: 'Карта проезда',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              i.jsx('div', {
                'code-path': 'src/sections/Contact.tsx:120:11',
                className: `lg:col-span-3 transition-all duration-1000 delay-400 ${d ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`,
                children: i.jsx('div', {
                  'code-path': 'src/sections/Contact.tsx:121:13',
                  className: 'bg-white rounded-3xl shadow-xl p-8 border border-slate-100',
                  children: p
                    ? i.jsxs('div', {
                        'code-path': 'src/sections/Contact.tsx:232:17',
                        className: 'text-center py-12 animate-fade-in',
                        children: [
                          i.jsx('div', {
                            'code-path': 'src/sections/Contact.tsx:233:19',
                            className:
                              'w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center animate-scale-in',
                            children: i.jsx(us, {
                              'code-path': 'src/sections/Contact.tsx:234:21',
                              className: 'w-10 h-10 text-green-600',
                            }),
                          }),
                          i.jsx('h3', {
                            'code-path': 'src/sections/Contact.tsx:236:19',
                            className: 'text-2xl font-bold text-slate-800 mb-3',
                            children: 'Заявка отправлена!',
                          }),
                          i.jsx('p', {
                            'code-path': 'src/sections/Contact.tsx:237:19',
                            className: 'text-slate-600 mb-6',
                            children: 'Спасибо за обращение! Мы свяжемся с вами в ближайшее время.',
                          }),
                          i.jsx(ke, {
                            'code-path': 'src/sections/Contact.tsx:240:19',
                            onClick: () => {
                              C(!1),
                                A({ name: '', phone: '', email: '', childAge: '', message: '' });
                            },
                            variant: 'outline',
                            className: 'border-sky-400 text-sky-700 hover:bg-sky-50',
                            children: 'Отправить ещё одну заявку',
                          }),
                        ],
                      })
                    : i.jsxs('form', {
                        'code-path': 'src/sections/Contact.tsx:123:17',
                        onSubmit: S,
                        className: 'space-y-6',
                        children: [
                          i.jsxs('div', {
                            'code-path': 'src/sections/Contact.tsx:127:19',
                            className: 'grid sm:grid-cols-2 gap-6',
                            children: [
                              i.jsxs('div', {
                                'code-path': 'src/sections/Contact.tsx:128:21',
                                className: 'space-y-2',
                                children: [
                                  i.jsxs(Bn, {
                                    'code-path': 'src/sections/Contact.tsx:129:23',
                                    htmlFor: 'name',
                                    className: 'text-slate-700 font-medium flex items-center gap-2',
                                    children: [
                                      i.jsx(xy, {
                                        'code-path': 'src/sections/Contact.tsx:130:25',
                                        className: 'w-4 h-4 text-sky-500',
                                      }),
                                      'Ваше имя',
                                    ],
                                  }),
                                  i.jsx(cs, {
                                    'code-path': 'src/sections/Contact.tsx:133:23',
                                    id: 'name',
                                    name: 'name',
                                    value: w.name,
                                    onChange: R,
                                    placeholder: 'Иван Иванов',
                                    required: !0,
                                    className:
                                      'rounded-xl border-slate-200 focus:border-sky-400 focus:ring-sky-400 h-12',
                                  }),
                                ],
                              }),
                              i.jsxs('div', {
                                'code-path': 'src/sections/Contact.tsx:143:21',
                                className: 'space-y-2',
                                children: [
                                  i.jsxs(Bn, {
                                    'code-path': 'src/sections/Contact.tsx:144:23',
                                    htmlFor: 'phone',
                                    className: 'text-slate-700 font-medium flex items-center gap-2',
                                    children: [
                                      i.jsx(ka, {
                                        'code-path': 'src/sections/Contact.tsx:145:25',
                                        className: 'w-4 h-4 text-sky-500',
                                      }),
                                      'Телефон',
                                    ],
                                  }),
                                  i.jsx(cs, {
                                    'code-path': 'src/sections/Contact.tsx:148:23',
                                    id: 'phone',
                                    name: 'phone',
                                    type: 'tel',
                                    value: w.phone,
                                    onChange: R,
                                    placeholder: '8 (999) 123-45-67',
                                    required: !0,
                                    className:
                                      'rounded-xl border-slate-200 focus:border-sky-400 focus:ring-sky-400 h-12',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          i.jsxs('div', {
                            'code-path': 'src/sections/Contact.tsx:161:19',
                            className: 'grid sm:grid-cols-2 gap-6',
                            children: [
                              i.jsxs('div', {
                                'code-path': 'src/sections/Contact.tsx:162:21',
                                className: 'space-y-2',
                                children: [
                                  i.jsxs(Bn, {
                                    'code-path': 'src/sections/Contact.tsx:163:23',
                                    htmlFor: 'email',
                                    className: 'text-slate-700 font-medium flex items-center gap-2',
                                    children: [
                                      i.jsx(Bu, {
                                        'code-path': 'src/sections/Contact.tsx:164:25',
                                        className: 'w-4 h-4 text-sky-500',
                                      }),
                                      'Email',
                                    ],
                                  }),
                                  i.jsx(cs, {
                                    'code-path': 'src/sections/Contact.tsx:167:23',
                                    id: 'email',
                                    name: 'email',
                                    type: 'email',
                                    value: w.email,
                                    onChange: R,
                                    placeholder: 'example@mail.ru',
                                    className:
                                      'rounded-xl border-slate-200 focus:border-sky-400 focus:ring-sky-400 h-12',
                                  }),
                                ],
                              }),
                              i.jsxs('div', {
                                'code-path': 'src/sections/Contact.tsx:177:21',
                                className: 'space-y-2',
                                children: [
                                  i.jsxs(Bn, {
                                    'code-path': 'src/sections/Contact.tsx:178:23',
                                    htmlFor: 'childAge',
                                    className: 'text-slate-700 font-medium flex items-center gap-2',
                                    children: [
                                      i.jsx(qu, {
                                        'code-path': 'src/sections/Contact.tsx:179:25',
                                        className: 'w-4 h-4 text-sky-500',
                                      }),
                                      'Возраст ребёнка',
                                    ],
                                  }),
                                  i.jsx(cs, {
                                    'code-path': 'src/sections/Contact.tsx:182:23',
                                    id: 'childAge',
                                    name: 'childAge',
                                    value: w.childAge,
                                    onChange: R,
                                    placeholder: 'Например: 5 лет',
                                    className:
                                      'rounded-xl border-slate-200 focus:border-sky-400 focus:ring-sky-400 h-12',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          i.jsxs('div', {
                            'code-path': 'src/sections/Contact.tsx:193:19',
                            className: 'space-y-2',
                            children: [
                              i.jsxs(Bn, {
                                'code-path': 'src/sections/Contact.tsx:194:21',
                                htmlFor: 'message',
                                className: 'text-slate-700 font-medium flex items-center gap-2',
                                children: [
                                  i.jsx(ey, {
                                    'code-path': 'src/sections/Contact.tsx:195:23',
                                    className: 'w-4 h-4 text-sky-500',
                                  }),
                                  'Сообщение',
                                ],
                              }),
                              i.jsx(_y, {
                                'code-path': 'src/sections/Contact.tsx:198:21',
                                id: 'message',
                                name: 'message',
                                value: w.message,
                                onChange: R,
                                placeholder: 'Расскажите о проблеме или задайте вопрос...',
                                rows: 4,
                                className:
                                  'rounded-xl border-slate-200 focus:border-sky-400 focus:ring-sky-400 resize-none',
                              }),
                            ],
                          }),
                          i.jsx(ke, {
                            'code-path': 'src/sections/Contact.tsx:209:19',
                            type: 'submit',
                            disabled: r,
                            className:
                              'w-full gradient-primary text-white font-bold py-6 text-lg rounded-xl shadow-glow hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed',
                            children: r
                              ? i.jsxs(i.Fragment, {
                                  children: [
                                    i.jsx(Fx, {
                                      'code-path': 'src/sections/Contact.tsx:216:25',
                                      className: 'w-5 h-5 mr-2 animate-spin',
                                    }),
                                    'Отправка...',
                                  ],
                                })
                              : i.jsxs(i.Fragment, {
                                  children: [
                                    i.jsx(sy, {
                                      'code-path': 'src/sections/Contact.tsx:221:25',
                                      className: 'w-5 h-5 mr-2',
                                    }),
                                    'Отправить заявку',
                                  ],
                                }),
                          }),
                          i.jsx('p', {
                            'code-path': 'src/sections/Contact.tsx:227:19',
                            className: 'text-xs text-slate-400 text-center',
                            children:
                              'Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.',
                          }),
                        ],
                      }),
                }),
              }),
            ],
          }),
        ],
      }),
      i.jsx('style', {
        'code-path': 'src/sections/Contact.tsx:257:7',
        children: `
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
      `,
      }),
    ],
  });
}
const Qu = {
  services: [
    { label: 'Лечение под наркозом', href: '#process' },
    { label: 'Консультация', href: '#contact' },
    { label: 'Диагностика', href: '#about' },
    { label: 'Профилактика', href: '#faq' },
  ],
  company: [
    { label: 'О клинике', href: '#about' },
    { label: 'Врачи', href: '#about' },
    { label: 'Акции', href: '#faq' },
    { label: 'Контакты', href: '#contact' },
  ],
  info: [
    { label: 'Политика конфиденциальности', href: '#' },
    { label: 'Пользовательское соглашение', href: '#' },
    { label: 'Лицензии', href: '#' },
  ],
};
function Uy() {
  const o = (d) => {
    d.startsWith('#') &&
      document.getElementById(d.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };
  return i.jsxs('footer', {
    'code-path': 'src/sections/Footer.tsx:32:5',
    className: 'relative bg-slate-900 text-white overflow-hidden',
    children: [
      i.jsx('div', {
        'code-path': 'src/sections/Footer.tsx:34:7',
        className:
          'absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2',
      }),
      i.jsx('div', {
        'code-path': 'src/sections/Footer.tsx:35:7',
        className:
          'absolute bottom-0 left-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2',
      }),
      i.jsxs('div', {
        'code-path': 'src/sections/Footer.tsx:37:7',
        className: 'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16',
        children: [
          i.jsxs('div', {
            'code-path': 'src/sections/Footer.tsx:38:9',
            className: 'grid md:grid-cols-2 lg:grid-cols-4 gap-12',
            children: [
              i.jsxs('div', {
                'code-path': 'src/sections/Footer.tsx:40:11',
                className: 'space-y-6',
                children: [
                  i.jsxs('div', {
                    'code-path': 'src/sections/Footer.tsx:41:13',
                    className: 'flex items-center gap-3',
                    children: [
                      i.jsx('div', {
                        'code-path': 'src/sections/Footer.tsx:42:15',
                        className:
                          'w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center',
                        children: i.jsx('svg', {
                          'code-path': 'src/sections/Footer.tsx:43:17',
                          className: 'w-7 h-7 text-white',
                          viewBox: '0 0 24 24',
                          fill: 'currentColor',
                          children: i.jsx('path', {
                            'code-path': 'src/sections/Footer.tsx:44:19',
                            d: 'M12 2C9.5 2 7.5 3.5 7 5.5C6.5 7.5 7 9.5 7.5 11C8 12.5 8 14 7 15.5C6 17 5 18.5 5 20C5 21 5.5 22 6.5 22C7.5 22 8 21 8.5 20C9 19 9.5 18 10 17.5C10.5 17 11 17 11.5 17.5C12 18 12.5 19 13 20C13.5 21 14 22 15 22C16 22 16.5 21 16.5 20C16.5 18.5 15.5 17 14.5 15.5C13.5 14 13.5 12.5 14 11C14.5 9.5 15 7.5 14.5 5.5C14 3.5 12 2 12 2Z',
                          }),
                        }),
                      }),
                      i.jsxs('div', {
                        'code-path': 'src/sections/Footer.tsx:47:15',
                        children: [
                          i.jsx('div', {
                            'code-path': 'src/sections/Footer.tsx:48:17',
                            className: 'text-xl font-bold',
                            children: 'в Африке',
                          }),
                          i.jsx('div', {
                            'code-path': 'src/sections/Footer.tsx:49:17',
                            className: 'text-xs text-slate-400',
                            children: 'Стоматология для детей',
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx('p', {
                    'code-path': 'src/sections/Footer.tsx:52:13',
                    className: 'text-slate-400 text-sm leading-relaxed',
                    children:
                      'Специализируется на безболезненном лечении зубов у детей под наркозом. Более 7 лет заботимся о маленьких улыбках.',
                  }),
                  i.jsxs('div', {
                    'code-path': 'src/sections/Footer.tsx:56:13',
                    className: 'flex gap-4',
                    children: [
                      i.jsx('a', {
                        'code-path': 'src/sections/Footer.tsx:57:15',
                        href: '#',
                        className:
                          'w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors',
                        children: i.jsx(Zx, {
                          'code-path': 'src/sections/Footer.tsx:58:17',
                          className: 'w-5 h-5',
                        }),
                      }),
                      i.jsx('a', {
                        'code-path': 'src/sections/Footer.tsx:60:15',
                        href: '#',
                        className:
                          'w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors',
                        children: i.jsx(qx, {
                          'code-path': 'src/sections/Footer.tsx:61:17',
                          className: 'w-5 h-5',
                        }),
                      }),
                      i.jsx('a', {
                        'code-path': 'src/sections/Footer.tsx:63:15',
                        href: '#',
                        className:
                          'w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors',
                        children: i.jsx(Sy, {
                          'code-path': 'src/sections/Footer.tsx:64:17',
                          className: 'w-5 h-5',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs('div', {
                'code-path': 'src/sections/Footer.tsx:70:11',
                children: [
                  i.jsx('h4', {
                    'code-path': 'src/sections/Footer.tsx:71:13',
                    className: 'font-bold text-lg mb-6',
                    children: 'Услуги',
                  }),
                  i.jsx('ul', {
                    'code-path': 'src/sections/Footer.tsx:72:13',
                    className: 'space-y-3',
                    children: Qu.services.map((d) =>
                      i.jsx(
                        'li',
                        {
                          'code-path': 'src/sections/Footer.tsx:74:17',
                          children: i.jsx('button', {
                            'code-path': 'src/sections/Footer.tsx:75:19',
                            onClick: () => o(d.href),
                            className:
                              'text-slate-400 hover:text-sky-400 transition-colors text-sm',
                            children: d.label,
                          }),
                        },
                        d.label
                      )
                    ),
                  }),
                ],
              }),
              i.jsxs('div', {
                'code-path': 'src/sections/Footer.tsx:87:11',
                children: [
                  i.jsx('h4', {
                    'code-path': 'src/sections/Footer.tsx:88:13',
                    className: 'font-bold text-lg mb-6',
                    children: 'О нас',
                  }),
                  i.jsx('ul', {
                    'code-path': 'src/sections/Footer.tsx:89:13',
                    className: 'space-y-3',
                    children: Qu.company.map((d) =>
                      i.jsx(
                        'li',
                        {
                          'code-path': 'src/sections/Footer.tsx:91:17',
                          children: i.jsx('button', {
                            'code-path': 'src/sections/Footer.tsx:92:19',
                            onClick: () => o(d.href),
                            className:
                              'text-slate-400 hover:text-sky-400 transition-colors text-sm',
                            children: d.label,
                          }),
                        },
                        d.label
                      )
                    ),
                  }),
                ],
              }),
              i.jsxs('div', {
                'code-path': 'src/sections/Footer.tsx:104:11',
                children: [
                  i.jsx('h4', {
                    'code-path': 'src/sections/Footer.tsx:105:13',
                    className: 'font-bold text-lg mb-6',
                    children: 'Контакты',
                  }),
                  i.jsxs('ul', {
                    'code-path': 'src/sections/Footer.tsx:106:13',
                    className: 'space-y-4',
                    children: [
                      i.jsxs('li', {
                        'code-path': 'src/sections/Footer.tsx:107:15',
                        className: 'flex items-start gap-3',
                        children: [
                          i.jsx(ka, {
                            'code-path': 'src/sections/Footer.tsx:108:17',
                            className: 'w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0',
                          }),
                          i.jsxs('div', {
                            'code-path': 'src/sections/Footer.tsx:109:17',
                            children: [
                              i.jsx('a', {
                                'code-path': 'src/sections/Footer.tsx:110:19',
                                href: 'tel:88352370255',
                                className: 'text-white hover:text-sky-400 transition-colors',
                                children: '8 (8352) 37-02-55',
                              }),
                              i.jsx('p', {
                                'code-path': 'src/sections/Footer.tsx:113:19',
                                className: 'text-xs text-slate-500 mt-1',
                                children: 'Без выходных с 8:00 до 20:00',
                              }),
                            ],
                          }),
                        ],
                      }),
                      i.jsxs('li', {
                        'code-path': 'src/sections/Footer.tsx:116:15',
                        className: 'flex items-start gap-3',
                        children: [
                          i.jsx(Bu, {
                            'code-path': 'src/sections/Footer.tsx:117:17',
                            className: 'w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0',
                          }),
                          i.jsx('a', {
                            'code-path': 'src/sections/Footer.tsx:118:17',
                            href: 'mailto:info@vafrike21.ru',
                            className: 'text-white hover:text-sky-400 transition-colors',
                            children: 'info@vafrike21.ru',
                          }),
                        ],
                      }),
                      i.jsxs('li', {
                        'code-path': 'src/sections/Footer.tsx:122:15',
                        className: 'flex items-start gap-3',
                        children: [
                          i.jsx(ku, {
                            'code-path': 'src/sections/Footer.tsx:123:17',
                            className: 'w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0',
                          }),
                          i.jsx('span', {
                            'code-path': 'src/sections/Footer.tsx:124:17',
                            className: 'text-slate-400 text-sm',
                            children: 'г. Чебоксары, ул. Ю. Гагарина, 35 Б',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          i.jsx('div', {
            'code-path': 'src/sections/Footer.tsx:133:9',
            className: 'mt-16 pt-8 border-t border-slate-800',
            children: i.jsxs('div', {
              'code-path': 'src/sections/Footer.tsx:134:11',
              className: 'flex flex-col md:flex-row justify-between items-center gap-4',
              children: [
                i.jsx('p', {
                  'code-path': 'src/sections/Footer.tsx:135:13',
                  className: 'text-slate-500 text-sm text-center md:text-left',
                  children: '© 2024 в Африке. Все права защищены.',
                }),
                i.jsx('div', {
                  'code-path': 'src/sections/Footer.tsx:138:13',
                  className: 'flex flex-wrap justify-center gap-4',
                  children: Qu.info.map((d) =>
                    i.jsx(
                      'button',
                      {
                        'code-path': 'src/sections/Footer.tsx:140:17',
                        onClick: () => o(d.href),
                        className: 'text-slate-500 hover:text-slate-300 transition-colors text-xs',
                        children: d.label,
                      },
                      d.label
                    )
                  ),
                }),
                i.jsx('p', {
                  'code-path': 'src/sections/Footer.tsx:149:13',
                  className: 'text-slate-500 text-sm flex items-center gap-1',
                  children: 'Сделано для детей',
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Qy() {
  return i.jsxs('div', {
    'code-path': 'src/App.tsx:11:5',
    className: 'min-h-screen bg-background',
    children: [
      i.jsx(Ny, { 'code-path': 'src/App.tsx:12:7' }),
      i.jsxs('main', {
        'code-path': 'src/App.tsx:13:7',
        children: [
          i.jsx(zy, { 'code-path': 'src/App.tsx:14:9' }),
          i.jsx(jy, { 'code-path': 'src/App.tsx:15:9' }),
          i.jsx(Ey, { 'code-path': 'src/App.tsx:16:9' }),
          i.jsx(My, { 'code-path': 'src/App.tsx:17:9' }),
          i.jsx(Hy, { 'code-path': 'src/App.tsx:18:9' }),
        ],
      }),
      i.jsx(Uy, { 'code-path': 'src/App.tsx:20:7' }),
    ],
  });
}
vm.createRoot(document.getElementById('root')).render(
  i.jsx(Z.StrictMode, {
    'code-path': 'src/main.tsx:7:3',
    children: i.jsx(Qy, { 'code-path': 'src/main.tsx:8:5' }),
  })
);
