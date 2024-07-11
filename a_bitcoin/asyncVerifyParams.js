// window = global

window = {
    utils: undefined,
    location: {
        pathname : "/zh-hans/btc/tx-list"
    }
}

var traceId = undefined

var sent = undefined;

document = {
    cookie: undefined
}
const crypto = require('crypto');
const timers = require("timers");
t = {
    "tryEntries": [
        {
            "tryLoc": "root",
            "completion": {
                "type": "normal"
            }
        }
    ],
    "prev": 0,
    "next": 4,
    "done": false,
    "delegate": null,
    "method": "next",
    "sent": undefined
}


localStorage = {
    "ok_oklink_web_explorer": "{\"_expire\":{}}",
    "amplitude_unsent_d77757dff7616a060069e378595de0f7_oklink": "[]",
    "__error__": "[\"undefined__undefined__undefined\"]",
    "i18nDBversion": "10006",
    "ok_oklink-nav": "{\"_expire\":{},\"accept_cookie\":\"1\"}",
    "amplitude_unsent_identify_d77757dff7616a060069e378595de0f7_oklink": "[]",
    "ok_default": "{\"_expire\":{}}",
    "ok_global": "{\"_expire\":{},\"oklink_stay_duration_info\":{\"page\":\"tradeList\",\"time\":803000},\"okI18nVersion\":{\"oklink_web_explorer\":{\"zh_CN\":\"1719817166\"},\"oklink_web_main\":{\"zh_CN\":\"1719551720\"}}}"
}

try {
   !(()=>{
    "use strict";
    var e = {
        d: (t,n)=>{
            for (var r in n)
                e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: n[r]
                })
        }
    };
    e.g = function() {
        if ("object" === typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (I) {
            if ("object" === typeof window)
                return window
        }
    }(),
    e.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t);
    var t = {};
    function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        n(e)
    }
    function r() {
        r = function() {
            return t
        }
        ;
        var e, t = {}, o = Object.prototype, i = o.hasOwnProperty, a = Object.defineProperty || function(e, t, n) {
            e[t] = n.value
        }
        , c = "function" == typeof Symbol ? Symbol : {}, u = c.iterator || "@@iterator", s = c.asyncIterator || "@@asyncIterator", l = c.toStringTag || "@@toStringTag";
        function f(e, t, n) {
            return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            e[t]
        }
        try {
            f({}, "")
        } catch (e) {
            f = function(e, t, n) {
                return e[t] = n
            }
        }
        function d(e, t, n, r) {
            var o = t && t.prototype instanceof w ? t : w
              , i = Object.create(o.prototype)
              , c = new P(r || []);
            return a(i, "_invoke", {
                value: I(e, n, c)
            }),
            i
        }
        function p(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        t.wrap = d;
        var v = "suspendedStart"
          , h = "suspendedYield"
          , g = "executing"
          , y = "completed"
          , m = {};
        function w() {}
        function b() {}
        function k() {}
        var x = {};
        f(x, u, (function() {
            return this
        }
        ));
        var j = Object.getPrototypeOf
          , S = j && j(j(N([])));
        S && S !== o && i.call(S, u) && (x = S);
        var E = k.prototype = w.prototype = Object.create(x);
        function _(e) {
            ["next", "throw", "return"].forEach((function(t) {
                f(e, t, (function(e) {
                    return this._invoke(t, e)
                }
                ))
            }
            ))
        }
        function O(e, t) {
            function r(o, a, c, u) {
                var s = p(e[o], e, a);
                if ("throw" !== s.type) {
                    var l = s.arg
                      , f = l.value;
                    return f && "object" == n(f) && i.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                        r("next", e, c, u)
                    }
                    ), (function(e) {
                        r("throw", e, c, u)
                    }
                    )) : t.resolve(f).then((function(e) {
                        l.value = e,
                        c(l)
                    }
                    ), (function(e) {
                        return r("throw", e, c, u)
                    }
                    ))
                }
                u(s.arg)
            }
            var o;
            a(this, "_invoke", {
                value: function(e, n) {
                    function i() {
                        return new t((function(t, o) {
                            r(e, n, t, o)
                        }
                        ))
                    }
                    return o = o ? o.then(i, i) : i()
                }
            })
        }
        function I(t, n, r) {
            var o = v;
            return function(i, a) {
                if (o === g)
                    throw new Error("Generator is already running");
                if (o === y) {
                    if ("throw" === i)
                        throw a;
                    return {
                        value: e,
                        done: !0
                    }
                }
                for (r.method = i,
                r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = C(c, r);
                        if (u) {
                            if (u === m)
                                continue;
                            return u
                        }
                    }
                    if ("next" === r.method)
                        r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === v)
                            throw o = y,
                            r.arg;
                        r.dispatchException(r.arg)
                    } else
                        "return" === r.method && r.abrupt("return", r.arg);
                    o = g;
                    var s = p(t, n, r);
                    if ("normal" === s.type) {
                        if (o = r.done ? y : h,
                        s.arg === m)
                            continue;
                        return {
                            value: s.arg,
                            done: r.done
                        }
                    }
                    "throw" === s.type && (o = y,
                    r.method = "throw",
                    r.arg = s.arg)
                }
            }
        }
        function C(t, n) {
            var r = n.method
              , o = t.iterator[r];
            if (o === e)
                return n.delegate = null,
                "throw" === r && t.iterator.return && (n.method = "return",
                n.arg = e,
                C(t, n),
                "throw" === n.method) || "return" !== r && (n.method = "throw",
                n.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                m;
            var i = p(o, t.iterator, n.arg);
            if ("throw" === i.type)
                return n.method = "throw",
                n.arg = i.arg,
                n.delegate = null,
                m;
            var a = i.arg;
            return a ? a.done ? (n[t.resultName] = a.value,
            n.next = t.nextLoc,
            "return" !== n.method && (n.method = "next",
            n.arg = e),
            n.delegate = null,
            m) : a : (n.method = "throw",
            n.arg = new TypeError("iterator result is not an object"),
            n.delegate = null,
            m)
        }
        function T(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]),
            2 in e && (t.finallyLoc = e[2],
            t.afterLoc = e[3]),
            this.tryEntries.push(t)
        }
        function A(e) {
            var t = e.completion || {};
            t.type = "normal",
            delete t.arg,
            e.completion = t
        }
        function P(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            e.forEach(T, this),
            this.reset(!0)
        }
        function N(t) {
            if (t || "" === t) {
                var r = t[u];
                if (r)
                    return r.call(t);
                if ("function" == typeof t.next)
                    return t;
                if (!isNaN(t.length)) {
                    var o = -1
                      , a = function n() {
                        for (; ++o < t.length; )
                            if (i.call(t, o))
                                return n.value = t[o],
                                n.done = !1,
                                n;
                        return n.value = e,
                        n.done = !0,
                        n
                    };
                    return a.next = a
                }
            }
            throw new TypeError(n(t) + " is not iterable")
        }
        return b.prototype = k,
        a(E, "constructor", {
            value: k,
            configurable: !0
        }),
        a(k, "constructor", {
            value: b,
            configurable: !0
        }),
        b.displayName = f(k, l, "GeneratorFunction"),
        t.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
        }
        ,
        t.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, k) : (e.__proto__ = k,
            f(e, l, "GeneratorFunction")),
            e.prototype = Object.create(E),
            e
        }
        ,
        t.awrap = function(e) {
            return {
                __await: e
            }
        }
        ,
        _(O.prototype),
        f(O.prototype, s, (function() {
            return this
        }
        )),
        t.AsyncIterator = O,
        t.async = function(e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new O(d(e, n, r, o),i);
            return t.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                return e.done ? e.value : a.next()
            }
            ))
        }
        ,
        _(E),
        f(E, l, "Generator"),
        f(E, u, (function() {
            return this
        }
        )),
        f(E, "toString", (function() {
            return "[object Generator]"
        }
        )),
        t.keys = function(e) {
            var t = Object(e)
              , n = [];
            for (var r in t)
                n.push(r);
            return n.reverse(),
            function e() {
                for (; n.length; ) {
                    var r = n.pop();
                    if (r in t)
                        return e.value = r,
                        e.done = !1,
                        e
                }
                return e.done = !0,
                e
            }
        }
        ,
        t.values = N,
        P.prototype = {
            constructor: P,
            reset: function(t) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = e,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = e,
                this.tryEntries.forEach(A),
                !t)
                    for (var n in this)
                        "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type)
                    throw e.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done)
                    throw t;
                var n = this;
                function r(r, o) {
                    return c.type = "throw",
                    c.arg = t,
                    n.next = r,
                    o && (n.method = "next",
                    n.arg = e),
                    !!o
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var a = this.tryEntries[o]
                      , c = a.completion;
                    if ("root" === a.tryLoc)
                        return r("end");
                    if (a.tryLoc <= this.prev) {
                        var u = i.call(a, "catchLoc")
                          , s = i.call(a, "finallyLoc");
                        if (u && s) {
                            if (this.prev < a.catchLoc)
                                return r(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc)
                                return r(a.finallyLoc)
                        } else if (u) {
                            if (this.prev < a.catchLoc)
                                return r(a.catchLoc, !0)
                        } else {
                            if (!s)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc)
                                return r(a.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var o = r;
                        break
                    }
                }
                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var a = o ? o.completion : {};
                return a.type = e,
                a.arg = t,
                o ? (this.method = "next",
                this.next = o.finallyLoc,
                m) : this.complete(a)
            },
            complete: function(e, t) {
                if ("throw" === e.type)
                    throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                this.method = "return",
                this.next = "end") : "normal" === e.type && t && (this.next = t),
                m
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e)
                        return this.complete(n.completion, n.afterLoc),
                        A(n),
                        m
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            A(n)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, n, r) {
                return this.delegate = {
                    iterator: N(t),
                    resultName: n,
                    nextLoc: r
                },
                "next" === this.method && (this.arg = e),
                m
            }
        },
        t
    }
    function o(e, t, n, r, o, i, a) {
        try {
            var c = e[i](a)
              , u = c.value
        } catch (s) {
            return void n(s)
        }
        c.done ? t(u) : Promise.resolve(u).then(r, o)
    }
    function i(e) {
        return function() {
            var t = this
              , n = arguments;
            return new Promise((function(r, i) {
                var a = e.apply(t, n);
                function c(e) {
                    // if (e === undefined) {
                        o(a, r, i, c, u, "next", e)
                    // } else {
                    //     if (e['Ok-Verify-Sign'] === undefined) {
                    //         o(a, r, i, c, u, "next", e)
                    //     } else {
                    //        return  window.sent = e,
                    //         sent = e, e
                    //     }
                    // }
                }
                function u(e) {
                    o(a, r, i, c, u, "return", e)
                }
                c(void 0)
            }
            ))
        }
    }
    function a(e) {
        var t = function(e, t) {
            if ("object" !== n(e) || null === e)
                return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var o = r.call(e, t || "default");
                if ("object" !== n(o))
                    return o;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" === n(t) ? t : String(t)
    }
    function c(e, t, n) {
        return (t = a(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? u(Object(n), !0).forEach((function(t) {
                c(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function l() {
        for (var e = arguments, t = arguments.length <= 0 ? void 0 : arguments[0], n = function() {
            var n = r < 0 || e.length <= r ? void 0 : e[r];
            n && Object.keys(n).forEach((function(e) {
                t[e] = n[e]
            }
            ))
        }, r = 1; r < arguments.length; r++)
            n();
        return t
    }
    e.d(t, {
        default: ()=>Ot
    });
    const f = {
        read: function(e) {
            var t = e;
            return '"' === t[0] && (t = t.slice(1, -1)),
            t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(e) {
            return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
    };
    var d = function() {
        return Boolean("undefined" === typeof window || void 0)
    }
      , p = {
        "<": "&lt;",
        ">": "&gt;"
    };
    function v(e) {
        return e.replace(/(javascript:|vbscript:|view-source:)*/gi, "").replace(/(expression|eval|alert|function|setTimeout|setInterval)/gi, "").replace(/(window\.location|window\.|\.location|document\.cookie|window\.cookie|cookie|document\.|alert\(.*?\)|window\.open\(.*?\)|document\.write\(.*?\))/gi, "").replace(/<!ENTITY|<!DOCTYPE|<\?xml/gi, "")
    }
    function h(e) {
        return e && "string" === typeof e ? function(e) {
            return e.replace(/[<>]/g, (function(e) {
                return p[e]
            }
            ))
        }(v(e)) : e
    }
    var g = d()
      , y = _();
    const m = function e(t, n) {
        function r(e, r, o) {
            if (!g) {
                var i, a = s({}, o);
                "number" === typeof (a = l({}, n, a)).expires && (a.expires = new Date(Date.now() + 864e5 * a.expires)),
                a.expires && (a.expires = a.expires.toUTCString()),
                i = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var c = "";
                return Object.keys(a).forEach((function(e) {
                    a[e] && (c += "; ".concat(e),
                    !0 !== a[e] && (c += "=".concat(a[e].split(";")[0])))
                }
                )),
                document.cookie = "".concat(i, "=").concat(t.write(r, i)).concat(c)
            }
        }
        return Object.create({
            set: r,
            get: function(e) {
                if (!arguments.length || e) {
                    var n, r;
                    if (g)
                        return null === y || void 0 === y || null === (n = y.ssrUtils) || void 0 === n || null === (r = n.cookies) || void 0 === r ? void 0 : r.get(e);
                    for (var o = document.cookie ? document.cookie.split("; ") : [], i = {}, a = 0; a < o.length; a++) {
                        var c = o[a].split("=")
                          , u = c.slice(1).join("=");
                        try {
                            var s = decodeURIComponent(c[0]);
                            if (i[s] = t.read(u, s),
                            e === s)
                                break
                        } catch (I) {}
                    }
                    return h(e ? i[e] : i)
                }
            },
            remove: function(e, t) {
                r(e, "", l({}, t, {
                    expires: -1
                }))
            },
            withAttributes: function(t) {
                return e(this.converter, l({}, this.attributes, t))
            },
            withConverter: function(t) {
                return e(l({}, this.converter, t), this.attributes)
            }
        }, {
            attributes: {
                value: Object.freeze(n)
            },
            converter: {
                value: Object.freeze(t)
            }
        })
    }(f, {
        path: "/"
    });
    var w = "ok_site_info"
      , b = _()
      , k = d()
      , x = function(e) {
        return e.split("").reverse().join("")
    }
      , j = function() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          , t = m.get(w);
        if (!t)
            return e ? {} : "";
        try {
            return e ? JSON.parse(function(e) {
                var t = x(e);
                return k ? Buffer.from(t, "base64").toString("utf-8") : window.atob(t)
            }(t)) : t
        } catch (I) {}
        return {}
    }
      , S = function(e) {
        var t = j();
        Object.keys(e).forEach((function(n) {
            t[n] = e[n]
        }
        ));
        var n, r, o, i = (n = JSON.stringify(t),
        x(k ? Buffer.from(n).toString("base64") : window.btoa(n)));
        k ? null === b || void 0 === b || null === (r = b.ssrUtils) || void 0 === r || null === (o = r.cookies) || void 0 === o || o.set(w, i) : m.set(w, i)
    }
      , E = {};
    function _() {
        var t;
        if ("undefined" !== typeof globalThis)
            t = globalThis;
        else if ("undefined" !== typeof window)
            t = window;
        else {
            if ("undefined" === typeof e.g)
                throw new Error("unable to locate global object");
            t = e.g
        }
        return t.addEventListener = t.addEventListener || function() {}
        ,
        t
    }
    const O = new Proxy({
        _global_subscribe_list: {},
        _global_message_list: {},
        locale: "en_US"
    },{
        get: function(e, t, n) {
            if ("toJSON" === t)
                return function() {
                    return s(s(s({}, _().okGlobal), _()._okGlobal), E)
                }
                ;
            if ("toString" === t)
                return function() {
                    return JSON.stringify(n.toJSON())
                }
                ;
            var r = [E, _()._okGlobal, _().okGlobal, {
                getSiteInfo: j,
                setSiteInfo: S
            }].find((function(e) {
                return e && Object.prototype.hasOwnProperty.call(e, t)
            }
            ));
            return null === r || void 0 === r ? void 0 : r[t]
        },
        set: function(e, t, n) {
            return E[t] = n,
            !0
        }
    });
    function I(e) {
        this.message = e
    }
    I.prototype = new Error,
    I.prototype.name = "InvalidCharacterError";
    var C = "undefined" != typeof window && window.atob && window.atob.bind(window) || function(e) {
        var t = String(e).replace(/=+$/, "");
        if (t.length % 4 == 1)
            throw new I("'atob' failed: The string to be decoded is not correctly encoded.");
        for (var n, r, o = 0, i = 0, a = ""; r = t.charAt(i++); ~r && (n = o % 4 ? 64 * n + r : r,
        o++ % 4) ? a += String.fromCharCode(255 & n >> (-2 * o & 6)) : 0)
            r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);
        return a
    }
    ;
    function T(e) {
        var t = e.replace(/-/g, "+").replace(/_/g, "/");
        switch (t.length % 4) {
        case 0:
            break;
        case 2:
            t += "==";
            break;
        case 3:
            t += "=";
            break;
        default:
            throw "Illegal base64url string!"
        }
        try {
            return function(e) {
                return decodeURIComponent(C(e).replace(/(.)/g, (function(e, t) {
                    var n = t.charCodeAt(0).toString(16).toUpperCase();
                    return n.length < 2 && (n = "0" + n),
                    "%" + n
                }
                )))
            }(t)
        } catch (e) {
            return C(t)
        }
    }
    function A(e) {
        this.message = e
    }
    A.prototype = new Error,
    A.prototype.name = "InvalidTokenError";
    const P = function(e, t) {
        if ("string" != typeof e)
            throw new A("Invalid token specified");
        var n = !0 === (t = t || {}).header ? 0 : 1;
        try {
            return JSON.parse(T(e.split(".")[n]))
        } catch (e) {
            throw new A("Invalid token specified: " + e.message)
        }
    };
    var N = ["/support/", "/docs/", "/docs-v5/", "/academy/"]
      , L = ["http", "//", "\\/", "/\\", "\\"];
    function R(e) {
        return !(e && "string" === typeof e && (t = e,
        !L.some((function(e) {
            return t.startsWith(e)
        }
        ))) && e.startsWith("/") && !e.startsWith("/\\"));
        var t
    }
    function D(e) {
        return "/" === e ? e : e.endsWith("/") ? e.slice(0, -1) : e
    }
    function U(e) {
        if (!e || "string" !== typeof e)
            return e;
        try {
            var t, n = O.langPath, r = void 0 === n ? "" : n, o = O.localeMap, i = void 0 === o ? {} : o, a = O.locale, c = void 0 === a ? "" : a, u = O.pathCorrection, s = void 0 === u ? {} : u, l = null === c || void 0 === c || null === (t = c.toLowerCase()) || void 0 === t ? void 0 : t.replace("-", "_"), f = e, d = function(e) {
                var t = "";
                return Object.keys(e).forEach((function(n) {
                    e[n] || (t = n)
                }
                )),
                t
            }(i), p = {
                localeMap: i,
                langPath: r,
                path: e,
                locale: l,
                pathCorrection: s,
                defaultLocale: d
            }, v = !R(e) && function(e) {
                var t = e.localeMap
                  , n = e.langPath
                  , r = e.path
                  , o = e.pathCorrection
                  , i = e.defaultLocale
                  , a = "";
                return Object.keys(t).forEach((function(e) {
                    if (e !== i) {
                        var c = "/".concat(t[e]);
                        r.startsWith("".concat(c, "/")) && n !== c ? a = "".concat(c, "/") : r === c && (a = "".concat(c))
                    }
                    e === i && Object.keys(o).forEach((function(e) {
                        var t = e.replace(/\//g, "");
                        r.startsWith("/".concat(t, "/")) ? a = "/".concat(t, "/") : r === "/".concat(t) && (a = "/".concat(t))
                    }
                    ))
                }
                )),
                a
            }(p);
            return v && (f = f.replace(v, "/")),
            function(e) {
                var t = O.okUtilsConfig
                  , n = (void 0 === t ? {} : t).prefixLangPathFilter;
                return !!R(e) || (n || N).some((function(t) {
                    return e.startsWith(t)
                }
                ))
            }(f) || !r && l !== d ? D(e) : D(f.startsWith("".concat(r, "/")) ? f : "".concat(r).concat(f))
        } catch (h) {
            return e
        }
    }
    var z = 864e5
      , F = "token"
      , K = "devId"
      , J = "token"
      , W = "_eid"
      , B = {
        project: {
            id: 206,
            token: "77d51bf92a0501485bb541a2ec96517e"
        }
    }
      , G = {
        ERR_CANCELED: "ERR_CANCELED",
        ERR_NETWORK: "ERR_NETWORK",
        ERR_TIMEOUT: "ERR_TIMEOUT"
    }
      , M = {
        useNativeTokenInApp: !0,
        dexEnv: 0,
        isBlocked: !1
    };
    function q(e) {
        Object.keys(e).forEach((function(t) {
            void 0 !== M[t] && (M[t] = e[t])
        }
        ))
    }
    const X = M;
    var H, V = "isLogin", Y = function() {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            fromInner: !1
        };
        if (void 0 !== H)
            return H;
        "prod" !== O.envSign && null !== (e = window) && void 0 !== e && e.jsbridge && !t.fromInner && console.warn("ont: please use 'ont.checkIsLogin()' to replace 'ont.isLogin()'");
        var n = Boolean(m.get(F) && m.get(V));
        return H = n,
        n
    }, Z = function() {
        return null //localStorage.getItem(J)
    }, $ = function() {
        var e = i(r().mark((function e() {
            var t, n, o;
            return r().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (t = window,
                        !(n = t.jsbridge) || !n.getToken) {
                            e.next = 12;
                            break
                        }
                        return e.prev = 2,
                        e.next = 5,
                        n.getToken();
                    case 5:
                        return o = e.sent,
                        e.abrupt("return", o);
                    case 9:
                        return e.prev = 9,
                        e.t0 = e.catch(2),
                        e.abrupt("return", void 0);
                    case 12:
                        return e.abrupt("return", void 0);
                    case 13:
                    case "end":
                        return e.stop()
                    }
            }
            ), e, null, [[2, 9]])
        }
        )));
        return function() {
            return e.apply(this, arguments)
        }
    }(), Q = function() {
        var e = i(r().mark((function e() {
            var t, n, o = arguments;
            return r().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (t = o.length > 0 && void 0 !== o[0] ? o[0] : X,
                        !O.isApp || !t.useNativeTokenInApp) {
                            e.next = 6;
                            break
                        }
                        return e.next = 4,
                        $();
                    case 4:
                        return n = e.sent,
                        e.abrupt("return", n);
                    case 6:
                        return e.abrupt("return", Z());
                    case 7:
                    case "end":
                        return e.stop()
                    }
            }
            ), e)
        }
        )));
        return function() {
            return e.apply(this, arguments)
        }
    }(), ee = function(e) {
        var t = e ? function(e) {
            try {
                return P(e).eid
            } catch (t) {
                return ""
            }
        }(e) : void 0;
        t && t !== O.getSiteInfo().entity && (O.setSiteInfo({
            entity: t
        }),
        localStorage.setItem(W, t))
    }, te = function() {
        var e = Z();
        ee(e)
    }, ne = function() {
        var e = i(r().mark((function e() {
            var t;
            return r().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        $();
                    case 2:
                        t = e.sent,
                        ee(t);
                    case 4:
                    case "end":
                        return e.stop()
                    }
            }
            ), e)
        }
        )));
        return function() {
            return e.apply(this, arguments)
        }
    }(), re = function(e) {
        var t = "object" === typeof e ? e : {
            token: e
        }
          , n = t.token
          , r = t.expireTime
          , o = void 0 === r ? 0 : r;
        n && (!function(e) {
            m.set(F, e, {
                expires: 7
            }),
            localStorage.setItem(J, e)
        }(n),
        te());
        var i = {
            duration: 6048e5
        }
          , a = Date.now();
        o > a && (localStorage.setItem("token_expire_time", o),
        i.duration = o - a),
        m.set(V, "1", {
            expires: i.duration / z
        }),
        H = !0
    }, oe = function() {
        localStorage.removeItem(J),
        localStorage.removeItem(W),
        m.remove(F),
        localStorage.removeItem("token_expire_time"),
        m.remove(V),
        H = !1
    }, ie = function() {
        var e, t;
        if (oe(),
        null !== O && void 0 !== O && null !== (e = O.site) && void 0 !== e && null !== (t = e.is) && void 0 !== t && t.oklink || !O.isApp) {
            var n = window.location
              , r = n.pathname
              , o = n.search
              , i = n.hash
              , a = encodeURIComponent("".concat(r).concat(o).concat(i));
            n.href = U("/account/login?logout=true&forward=".concat(a))
        }
    }, ae = function(e) {
        m.set(K, e, {
            expires: 730
        })
    };
    const ce = {
        getDeviceId: function() {
            var e = m.get(K);
            return e || (e = function() {
                var e = Date.now();
                if (!d()) {
                    var t = window.performance;
                    "undefined" !== typeof t && "function" === typeof t.now && (e += t.now())
                }
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                    var n = (e + 16 * Math.random()) % 16 | 0;
                    return ("x" === t ? n : 3 & n | 8).toString(16)
                }
                ))
            }(),
            ae(e)),
            e
        },
        setDeviceId: ae
    };
    var ue = 0
      , se = function(e, t) {
        delete window[t],
        document.head.removeChild(e)
    };
    const le = {
        ar_EH: "\u0634\u0628\u0643\u0629 \u063a\u064a\u0631 \u0637\u0628\u064a\u0639\u064a\u0629 \u060c \u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u062d\u0642\u0642 \u0648\u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649",
        cs_CZ: "Neobvykl\xe1 s\xed\u0165, zkontrolujte a zkuste to pros\xedm znovu",
        de_DE: "Netzwerk ist ungew\xf6hnlich, bitte \xfcberpr\xfcfen und erneut versuchen",
        en_US: "Network is abnormal, please check and try again",
        en: "Network is abnormal, please check and try again",
        es_419: "Red anormal, por favor verifique y vuelva a intentarlo",
        es_ES: "Red anormal, por favor verifique y vuelva a intentarlo",
        fr_FR: "R\xe9seau anormal, veuillez v\xe9rifier et r\xe9essayer",
        id_ID: "Jaringan tidak normal, silakan periksa dan coba lagi",
        it_IT: "Rete anomala, si prega di controllare e riprovare",
        nl_NL: "Netwerk is abnormaal, controleer en probeer opnieuw",
        pl_PL: "Sie\u0107 jest nieprawid\u0142owa, sprawd\u017a i spr\xf3buj ponownie",
        pt_BR: "Rede anormal, por favor verifique e tente novamente",
        pt_PT: "Rede anormal, por favor verifique e tente novamente",
        ro_RO: "Re\u021bea anormal\u0103, v\u0103 rug\u0103m s\u0103 verifica\u021bi \u0219i s\u0103 \xeencerca\u021bi din nou",
        ru_RU: "\u0421\u0435\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0435\u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437",
        tr_TR: "A\u011f anormal, l\xfctfen kontrol edin ve tekrar deneyin",
        uk_UA: "\u041c\u0435\u0440\u0435\u0436\u0430 \u043d\u0435\u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u0430, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0442\u0430 \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437",
        vi_VN: "M\u1ea1ng kh\xf4ng b\xecnh th\u01b0\u1eddng, vui l\xf2ng ki\u1ec3m tra v\xe0 th\u1eed l\u1ea1i",
        zh_CN: "\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u68c0\u67e5\u540e\u91cd\u8bd5",
        zh_TW: "\u7db2\u8def\u7570\u5e38\uff0c\u8acb\u6aa2\u67e5\u5f8c\u91cd\u8a66"
    };
    const fe = {
        ar_EH: "\u0627\u0644\u062e\u0627\u062f\u0645 \u0645\u0634\u063a\u0648\u0644 \u060c \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 \u0644\u0627\u062d\u0642\u064b\u0627",
        cs_CZ: "Server je zanepr\xe1zdn\u011bn\xfd, zkuste to pros\xedm pozd\u011bji",
        de_DE: "Server ist besch\xe4ftigt, bitte versuchen Sie es sp\xe4ter erneut",
        en_US: "Server is busy, please try again later",
        en: "Server is busy, please try again later",
        es_419: "El servidor est\xe1 ocupado, por favor intente de nuevo m\xe1s tarde",
        es_ES: "El servidor est\xe1 ocupado, por favor intente de nuevo m\xe1s tarde",
        fr_FR: "Le serveur est occup\xe9, veuillez r\xe9essayer plus tard",
        id_ID: "Server sibuk, silakan coba lagi nanti",
        it_IT: "Il server \xe8 occupato, si prega di riprovare pi\xf9 tardi",
        nl_NL: "Server is bezet, probeer het later opnieuw",
        pl_PL: "Serwer jest zaj\u0119ty, spr\xf3buj ponownie p\xf3\u017aniej",
        pt_BR: "O servidor est\xe1 ocupado, por favor tente novamente mais tarde",
        pt_PT: "O servidor est\xe1 ocupado, por favor tente novamente mais tarde",
        ro_RO: "Serverul este ocupat, v\u0103 rug\u0103m s\u0103 \xeencerca\u021bi din nou mai t\xe2rziu",
        ru_RU: "\u0421\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u043d\u044f\u0442, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435",
        tr_TR: "Sunucu me\u015fgul, l\xfctfen daha sonra tekrar deneyin",
        uk_UA: "\u0421\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u0439\u043d\u044f\u0442\u0438\u0439, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0456\u0437\u043d\u0456\u0448\u0435",
        vi_VN: "M\xe1y ch\u1ee7 \u0111ang b\u1eadn, vui l\xf2ng th\u1eed l\u1ea1i sau",
        zh_CN: "\u670d\u52a1\u5668\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
        zh_TW: "\u4f3a\u670d\u5668\u5fd9\u788c\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66"
    };
    const de = function(e) {
        var t = e / 1e3;
        return {
            ar_EH: "\u062a\u0648\u0642\u0641 \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0627\u0644\u0634\u0628\u0643\u0629 \u060c \u0648\u0642\u062f \u062a\u062c\u0627\u0648\u0632 \u0648\u0642\u062a \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631 ".concat(t, " \u062b\u0627\u0646\u064a\u0629"),
            cs_CZ: "P\u0159ipojen\xed k s\xedti vypr\u0161elo, doba \u010dek\xe1n\xed p\u0159ekro\u010dila ".concat(t, " sekund"),
            de_DE: "Netzwerkverbindung abgelaufen, Wartezeit hat ".concat(t, " Sekunden \xfcberschritten"),
            en_US: "Network connection timed out, wait time has exceeded ".concat(t, " seconds"),
            en: "Network connection timed out, wait time has exceeded ".concat(t, " seconds"),
            es_419: "La conexi\xf3n de red ha expirado, el tiempo de espera ha superado los ".concat(t, " segundos"),
            es_ES: "La conexi\xf3n de red ha expirado, el tiempo de espera ha superado los ".concat(t, " segundos"),
            fr_FR: "La connexion r\xe9seau a expir\xe9, le temps d'attente a d\xe9pass\xe9 ".concat(t, " secondes"),
            id_ID: "Koneksi jaringan telah habis waktu, waktu tunggu telah melebihi ".concat(t, " detik"),
            it_IT: "La connessione di rete \xe8 scaduta, il tempo di attesa ha superato i ".concat(t, " secondi"),
            nl_NL: "Netwerkverbinding is verlopen, wachttijd heeft ".concat(t, " seconden overschreden"),
            pl_PL: "Po\u0142\u0105czenie sieciowe przekroczy\u0142o limit czasu, czas oczekiwania przekroczy\u0142 ".concat(t, " sekund"),
            pt_BR: "A conex\xe3o de rede expirou, o tempo de espera excedeu ".concat(t, " segundos"),
            pt_PT: "A conex\xe3o de rede expirou, o tempo de espera excedeu ".concat(t, " segundos"),
            ro_RO: "Conexiunea la re\u021bea a expirat, timpul de a\u0219teptare a dep\u0103\u0219it ".concat(t, " secunde"),
            ru_RU: "\u0421\u0435\u0442\u0435\u0432\u043e\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0438\u0441\u0442\u0435\u043a\u043b\u043e, \u0432\u0440\u0435\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u043f\u0440\u0435\u0432\u044b\u0441\u0438\u043b\u043e ".concat(t, " \u0441\u0435\u043a\u0443\u043d\u0434"),
            tr_TR: "A\u011f ba\u011flant\u0131s\u0131 zaman a\u015f\u0131m\u0131na u\u011frad\u0131, bekleme s\xfcresi ".concat(t, " saniyeyi a\u015ft\u0131"),
            uk_UA: "\u0427\u0430\u0441 \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u043d\u0430 \u0437'\u0454\u0434\u043d\u0430\u043d\u043d\u044f \u0437 \u043c\u0435\u0440\u0435\u0436\u0435\u044e \u0432\u0438\u0439\u0448\u043e\u0432, \u0447\u0430\u0441 \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u0435\u0440\u0435\u0432\u0438\u0449\u0438\u0432 ".concat(t, " \u0441\u0435\u043a\u0443\u043d\u0434"),
            vi_VN: "K\u1ebft n\u1ed1i m\u1ea1ng \u0111\xe3 h\u1ebft h\u1ea1n, th\u1eddi gian ch\u1edd \u0111\xe3 v\u01b0\u1ee3t qu\xe1 ".concat(t, " gi\xe2y"),
            zh_CN: "\u7f51\u7edc\u8fde\u63a5\u8d85\u65f6\uff0c\u7b49\u5f85\u65f6\u957f\u5df2\u8d85\u8fc7".concat(t, "\u79d2"),
            zh_TW: "\u7db2\u8def\u9023\u63a5\u903e\u6642\uff0c\u7b49\u5f85\u6642\u9593\u5df2\u8d85\u904e".concat(t, "\u79d2")
        }
    };
    function pe() {
        return fe[O.locale] || fe.en
    }
    function ve() {
        var e = de(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4);
        return e[O.locale] || e.en
    }
    function he(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function ge(e, t) {
        if (e) {
            if ("string" === typeof e)
                return he(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? he(e, t) : void 0
        }
    }
    function ye(e) {
        return function(e) {
            if (Array.isArray(e))
                return he(e)
        }(e) || function(e) {
            if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || ge(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function me(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, o, i, a, c = [], u = !0, s = !1;
                try {
                    if (i = (n = n.call(e)).next,
                    0 === t) {
                        if (Object(n) !== n)
                            return;
                        u = !1
                    } else
                        for (; !(u = (r = i.call(n)).done) && (c.push(r.value),
                        c.length !== t); u = !0)
                            ;
                } catch (e) {
                    s = !0,
                    o = e
                } finally {
                    try {
                        if (!u && null != n.return && (a = n.return(),
                        Object(a) !== a))
                            return
                    } finally {
                        if (s)
                            throw o
                    }
                }
                return c
            }
        }(e, t) || ge(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var we = d()
      , be = _()
      , ke = {
        debug: function() {},
        info: function() {},
        warn: function() {},
        error: function() {},
        timeStart: function() {},
        timeEnd: function() {},
        init: function() {}
    }
      , xe = function() {
        var e = i(r().mark((function e(t) {
            var n, o, i, a, c, u, l, f, d, p;
            return r().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (o = t.message,
                        i = t.level,
                        a = t.data,
                        "prod" !== O.envSign && (null === (c = (u = console)[i]) || void 0 === c || c.call(u, o, a)),
                        l = {},
                        l = a instanceof Error ? {
                            error: a
                        } : s({
                            message: o
                        }, a),
                        f = Object.keys(l).find((function(e) {
                            return l[e]instanceof Error
                        }
                        )),
                        !(d = l[f])) {
                            e.next = 11;
                            break
                        }
                        return delete l[f],
                        d.message = "".concat(o, " - ").concat(d.message),
                        null === (p = window.Sentry) || void 0 === p || p.captureException(d, s(s({}, l), {}, {
                            message: o,
                            contexts: {
                                report: {
                                    info: JSON.stringify(l)
                                }
                            }
                        })),
                        e.abrupt("return");
                    case 11:
                        null === (n = window.Sentry) || void 0 === n || n.captureEvent(s(s({}, l), {}, {
                            message: o,
                            level: i,
                            contexts: {
                                report: {
                                    info: JSON.stringify(l)
                                }
                            }
                        }));
                    case 12:
                    case "end":
                        return e.stop()
                    }
            }
            ), e)
        }
        )));
        return function(t) {
            return e.apply(this, arguments)
        }
    }();
    ke.init = we ? function() {
        if (be.ssrUtils && be.ssrUtils.logger) {
            var e = be.ssrUtils.logger;
            ke.debug = function() {
                for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                return null === (t = e.debug) || void 0 === t ? void 0 : t.call.apply(t, [e].concat(r))
            }
            ,
            ke.info = function() {
                for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                return null === (t = e.info) || void 0 === t ? void 0 : t.call.apply(t, [e].concat(r))
            }
            ,
            ke.warn = function() {
                for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                return null === (t = e.warn) || void 0 === t ? void 0 : t.call.apply(t, [e].concat(r))
            }
            ,
            ke.error = function() {
                for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                return null === (t = e.error) || void 0 === t ? void 0 : t.call.apply(t, [e].concat(r))
            }
            ,
            ke.timeStart = function() {
                for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                return null === (t = e.timeStart) || void 0 === t ? void 0 : t.call.apply(t, [e].concat(r))
            }
            ,
            ke.timeEnd = function() {
                for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                return null === (t = e.timeEnd) || void 0 === t ? void 0 : t.call.apply(t, [e].concat(r))
            }
        }
    }
    : function(e) {
        var t, n, r, o = (null === (t = window.__INIT_STATE__) || void 0 === t ? void 0 : t.appContext) || {}, i = o.dsn, a = o.version, c = o.traceId;
        (i || null !== e && void 0 !== e && e.dsn) && (null === (n = window.Sentry) || void 0 === n || n.init(s({
            dsn: i,
            release: a
        }, e), {
            debug: ["dev", "daily"].includes(O.envSign)
        }),
        null === (r = window.Sentry) || void 0 === r || r.setTag("traceId", c),
        ke.debug = function() {
            return xe({
                message: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                level: "debug",
                data: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            })
        }
        ,
        ke.info = function() {
            return xe({
                message: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                level: "info",
                data: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            })
        }
        ,
        ke.warn = function() {
            return xe({
                message: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                level: "warn",
                data: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            })
        }
        ,
        ke.error = function() {
            return xe({
                message: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                level: "error",
                data: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            })
        }
        ,
        ke.timeStart = console.time,
        ke.timeEnd = console.timeEnd)
    }
    ,
    ke.init();
    var je = function(){
        var e = null; //localStorage.getItem(J);
        e && e !== m.get(F) && m.set(F, e, {
            expires: 7
        })
    }
      , Se = function(e) {
        if (null === e || void 0 === e)
            return {};
        var t = {};
        return Object.keys(e).forEach((function(n) {
            var r = n.split("-").map((function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
            }
            )).join("-");
            t[r] = e[n]
        }
        )),
        t
    }
      , Ee = function() {
        var e, t = window.location;
        if (/^(\/[a-z]{2})?\/account/.test(t.pathname)) {
            var n = (e = t.host,
            window.btoa(e).replace(/=+$/, "").split("").map((function(e, t) {
                var n = t % 2 === 0;
                if (/\d/.test(e))
                    return n ? e : 9 - e;
                if (/[a-z]/i.test(e) && n) {
                    var r = e.charCodeAt(0);
                    return r >= 97 ? r -= 32 : r += 32,
                    String.fromCharCode(r)
                }
                return e
            }
            )).join(""));
            m.set("u_pid", n)
        }
    }
      , _e = function() {
        var e = i(r().mark((function e(t) {
            var n, o, a, c, u, s, l, f, d, p;
            return r().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return n = t.url,
                        o = t.fetchConfig,
                        a = t.timestampForTest,
                        c = t.tokenForTest,
                        u = function() {
                            return crypto.randomUUID ? crypto.randomUUID() : (new Date).getTime()
                        }
                        ,
                        s = function() {
                            var e = i(r().mark((function e(t) {
                                var n, o, i, a, c, u, s, l, f, d, p, v;
                                return r().wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.token,
                                            o = t.timestampForTest,
                                            i = "",
                                            e.next = 4,
                                            crypto.subtle.digest("SHA-256", (new TextEncoder).encode(n));
                                        case 4:
                                            for (a = e.sent,
                                            c = Array.from(new Uint8Array(a)),
                                            u = c.map((function(e) {
                                                return e.toString(16).padStart(2, "0")
                                            }
                                            )).join(""),
                                            s = o || Math.floor(Date.now() / 1e3),
                                            l = Math.floor(s / 600 % 32),
                                            f = Math.floor(s / 3600 % 32),
                                            d = 0; d < 32; d++)
                                                p = u[(l + (f + d) * d) % 32],
                                                i += p;
                                            return e.next = 13,
                                            crypto.subtle.importKey("raw", (new TextEncoder).encode(i), {
                                                name: "HMAC",
                                                hash: "SHA-256"
                                            }, !1, ["sign"]);
                                        case 13:
                                            return v = e.sent,
                                            e.abrupt("return", v);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        l = function(e) {
                            var t = e.url
                              , n = e.fetchConfig
                              , r = t.replace("?", "");
                            if (["post", "put"].includes(n.method)) {
                                var o = t.split("?")[0]
                                  , i = n.body;
                                if (i instanceof FormData) {
                                    var a = Array.from(i.entries()).map((function(e) {
                                        var t = me(e, 2)
                                          , n = t[0]
                                          , r = t[1];
                                        return "".concat(n, "=").concat(r)
                                    }
                                    )).join(",");
                                    r = "".concat(o, "{").concat(a, "}")
                                } else
                                    r = "".concat(o).concat(n.body)
                            }
                            return r
                        }
                        ,
                        f = function() {
                            var e = i(r().mark((function e(t) {
                                var n, o, i, c, u, f, d;
                                return r().wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.url,
                                            o = t.fetchConfig,
                                            i = t.token,
                                            e.next = 3,
                                            s({
                                                token: i,
                                                timestampForTest: a
                                            });
                                        case 3:
                                            return c = e.sent,
                                            u = l({
                                                url: n,
                                                fetchConfig: o
                                            }),
                                            e.next = 7,
                                            crypto.subtle.sign("HMAC", c, (new TextEncoder).encode(u));
                                        case 7:
                                            return f = e.sent,
                                            d = btoa(String.fromCharCode.apply(String, ye(new Uint8Array(f)))),
                                            e.abrupt("return", d);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        d = c || u(),
                        e.next = 8,
                        f({
                            url: n,
                            fetchConfig: o,
                            token: d
                        });
                    case 8:
                        return p = e.sent,
                        e.abrupt("return", {
                            token: d,
                            signature: p
                        });
                    case 10:
                    case "end":
                        return e.stop()
                    }
            }
            ), e)
        }
        )));
        return function(t) {
            return e.apply(this, arguments)
        }
    }()
      , Oe = traceId
      , Ie = function() {
        var e = i(r().mark((function e(t) {
            var n, o, i, a, c, u, l, f, d, p, v, h, g, y, m, w;
            return r().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (n = t.requestUrl,
                        o = t.fetchConfig,
                        i = t.ontConfig,
                        a = t.requestNumber,
                        c = 0 - (new Date).getTimezoneOffset() / 60,
                        u = {
                            "App-Type": "web",
                            Accept: "application/json",
                            "X-Utc": c,
                            "X-Locale": O.locale,
                            "X-Zkdex-Env": i.dexEnv,
                            "X-Cdn": O.cdnBaseUrl
                        },
                        !i.needSign) {
                            e.next = 14;
                            break
                        }
                        return l = n,
                        window.inOKXExtension && (f = new URL(n),
                        l = f.pathname + f.search),
                        e.next = 8,
                        _e({
                            url: l,
                            fetchConfig: o
                        });
                    case 8:
                        d = e.sent,
                        p = d.token,
                        v = d.signature,
                        u["Ok-Verify-Token"] = p,
                        h = ["O", "k", "-", "V", "e", "r", "i", "f", "y", "-", "S", "i", "g", "n"].join(""),
                        u[h] = v;
                    case 14:
                        if (window.inOKXExtension) {
                            e.next = 25;
                            break
                        }
                        return "1" === localStorage.simulatedTrading && (u["X-Simulated-Trading"] = 1),
                        g = ce.getDeviceId(),
                        u.Devid = g,
                        e.next = 20,
                        Q(i);
                    case 20:
                        (y = e.sent) && (u.Authorization = y),
                        (m = O.getSiteInfo ? O.getSiteInfo(!1) : void 0) && (u["X-Site-Info"] = m),
                        u["X-Id-Group"] = "".concat(traceId, "-c-").concat(a);
                    case 25:
                        return w = Se(i.headers),
                        e.abrupt("return", s(s(s({}, u), o.headers), w));
                    case 27:
                    case "end":
                        return e.stop()
                    }
            }
            ), e)
        }
        )));
        return function(t) {
            return e.apply(this, arguments)
        }
    }()
      , Ce = function(e, t) {
        var n = {};
        Object.keys(t).forEach((function(e) {
            null !== t[e] && void 0 !== t[e] && (n[e] = t[e])
        }
        ));
        var r = new URLSearchParams(n).toString();
        return "".concat(e, "?").concat(r)
    }
      , Te = function(e) {
        var t = Date.now()
          , n = e.indexOf("?") > -1 ? "&" : "?";
        return "".concat(e).concat(n, "t=").concat(t)
    }
      , Ae = function() {
        var e = i(r().mark((function e(t, n) {
            var o, i, a, c;
            return r().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        o = t.status,
                        i = {
                            data: {},
                            status: o
                        },
                        e.t0 = !0,
                        e.next = e.t0 === (404 === o) ? 5 : e.t0 === (401 === o || 403 === o) ? 7 : e.t0 === o >= 500 ? 10 : e.t0 === (o >= 400 && o < 500) ? 12 : e.t0 === (o >= 200 && o < 300) ? 14 : 23;
                        break;
                    case 5:
                        return i.data.msg = t.statusText,
                        e.abrupt("return", Promise.reject(i));
                    case 7:
                        return (n.customToLogin || ie)(i),
                        e.abrupt("return", Promise.reject(i));
                    case 10:
                        return i.data.msg = "".concat(pe(), "."),
                        e.abrupt("return", Promise.reject(i));
                    case 12:
                        return i.data.msg = pe(),
                        e.abrupt("return", Promise.reject(i));
                    case 14:
                        if (!((null === t || void 0 === t || null === (a = t.headers) || void 0 === a ? void 0 : a.get("Content-Type")) || "").includes("json")) {
                            e.next = 22;
                            break
                        }
                        return e.next = 18,
                        t.json();
                    case 18:
                        return i.data = e.sent,
                        c = t.headers.get("x-ok-token"),
                        d() || window.inOKXExtension || !c || (re(c),
                        n.onUpdateTokenDone && n.onUpdateTokenDone(i)),
                        e.abrupt("return", Promise.resolve(i));
                    case 22:
                        return e.abrupt("return", t);
                    case 23:
                        return e.abrupt("return", Promise.reject(i));
                    case 24:
                    case "end":
                        return e.stop()
                    }
            }
            ), e)
        }
        )));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    }()
      , Pe = function(e) {
        var t = {
            data: {
                code: G.ERR_TIMEOUT,
                msg: ve(e.timeout)
            },
            status: G.ERR_TIMEOUT
        };
        return Promise.reject(t)
    }
      , Ne = function() {
        var e = {
            data: {
                code: G.ERR_CANCELED
            },
            status: G.ERR_CANCELED
        };
        return Promise.reject(e)
    }
      , Le = function() {
        var e = {
            data: {
                code: G.ERR_NETWORK,
                msg: le[O.locale] || le.en
            },
            status: G.ERR_NETWORK
        };
        return Promise.reject(e)
    }
      , Re = 0
      , De = function() {
        var e = i(r().mark((function e(t) {
            var n, o, i, a, c, u, s, l, f, d, p;
            return r().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (n = t.url,
                        o = t.fetchConfig,
                        i = t.ontConfig,
                        a = t.callbackWhenFinished,
                        !i.isBlocked) {
                            e.next = 3;
                            break
                        }
                        return e.abrupt("return", Promise.reject(new Error("switching to demo trading")));
                    case 3:
                        return i.switchingDemoTrading && q({
                            isBlocked: !0
                        }),
                        c = n,
                        i.withoutTimestamp || (c = Te(n)),
                        u = i.signal,
                        s = {
                            controller: null,
                            timeoutId: null,
                            isTriggered: !1
                        },
                        u || (s.controller = new AbortController,
                        1e4,
                        l = i.timeout || 1e4,
                        s.timeoutId = setTimeout((function() {
                            s.isTriggered = !0,
                            s.controller.abort()
                        }
                        ), l)),
                        e.prev = 9,
                        Re++,
                        e.next = 13,
                        Ie({
                            requestUrl: c,
                            fetchConfig: o,
                            ontConfig: i,
                            requestNumber: Re
                        });
                    case 13:
                        console.log(e.sent)
                        sent = e.sent
                        return d = e.sent
                            ,
                        e.next = 16
                            ,
                        fetch(c, {
                            method: o.method,
                            headers: d,
                            body: o.body,
                            signal: u || s.controller.signal
                        });
                    case 16:
                        p = e.sent,
                        f = Ae(p, i),
                        e.next = 23;
                        break;
                    case 20:
                        e.prev = 20,
                        e.t0 = e.catch(9),
                        f = s.isTriggered ? Pe(i) : "AbortError" === e.t0.name ? Ne() : Le();
                    case 23:
                        return e.prev = 23,
                        s.timeoutId && (clearTimeout(s.timeoutId),
                        s = {}),
                        a && "function" === typeof a && a(f),
                        e.finish(23);
                    case 27:
                        return e.abrupt("return", f);
                    case 28:
                    case "end":
                        return e.stop()
                    }
            }
            ), e, null, [[9, 20, 23, 27]])
        }
        )));
        return function(t) {
            return e.apply(this, arguments)
        }
    }()
      , Ue = {}
      , ze = function() {
        var e = i(r().mark((function e(t) {
            var n, o, i, a, c, u, l, f, d;
            return r().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (n = t.url,
                        o = t.options,
                        i = void 0 === o ? {} : o,
                        a = t.method,
                        c = {
                            method: a
                        },
                        u = n,
                        (l = i).params && (u = Ce(n, i.params),
                        delete l.params),
                        !(f = s(s({}, X), l)).isolate) {
                            e.next = 8;
                            break
                        }
                        return e.abrupt("return", De({
                            url: u,
                            fetchConfig: c,
                            ontConfig: f
                        }));
                    case 8:
                        if (!Ue[u]) {
                            e.next = 10;
                            break
                        }
                        return e.abrupt("return", Ue[u]);
                    case 10:
                        return d = De({
                            url: u,
                            fetchConfig: c,
                            ontConfig: f,
                            callbackWhenFinished: function() {
                                delete Ue[u]
                            }
                        }),
                        Ue[u] = d,
                        e.abrupt("return", d);
                    case 14:
                    case "end":
                        return e.stop()
                    }
            }
            ), e)
        }
        )));
        return function(t) {
            return e.apply(this, arguments)
        }
    }()
      , Fe = function() {
        var e = i(r().mark((function e(t) {
            var n, o = arguments;
            return r().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return n = o.length > 1 && void 0 !== o[1] ? o[1] : {},
                        e.abrupt("return", ze({
                            url: t,
                            options: n,
                            method: "get"
                        }));
                    case 2:
                    case "end":
                        return e.stop()
                    }
            }
            ), e)
        }
        )));
        return function(t) {
            return e.apply(this, arguments)
        }
    }()
      , Ke = function(e) {
        var t = e.url
          , n = e.data
          , r = e.ontConfig
          , o = {
            method: e.method,
            body: n
        };
        n instanceof FormData || (n instanceof Blob ? o.headers = {
            "Content-Type": n.type
        } : "object" === typeof n && (o.body = JSON.stringify(n),
        o.headers = {
            "Content-Type": "application/json"
        }));
        var i = s(s({}, X), r);
        return De({
            url: t,
            fetchConfig: o,
            ontConfig: i
        })
    }
      , Je = function() {
        var e = i(r().mark((function e(t) {
            var n, o, i, a = arguments;
            return r().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (!(o = n = a.length > 1 && void 0 !== a[1] ? a[1] : {}).data) {
                            e.next = 6;
                            break
                        }
                        return i = o.data,
                        delete o.data,
                        e.abrupt("return", Ke({
                            url: t,
                            data: i,
                            ontConfig: o,
                            method: "delete"
                        }));
                    case 6:
                        return e.abrupt("return", ze({
                            url: t,
                            options: n,
                            method: "delete"
                        }));
                    case 7:
                    case "end":
                        return e.stop()
                    }
            }
            ), e)
        }
        )));
        return function(t) {
            return e.apply(this, arguments)
        }
    }();
    function We(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function Be(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, a(r.key), r)
        }
    }
    function Ge(e, t, n) {
        return t && Be(e.prototype, t),
        n && Be(e, n),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function Me(e, t) {
        return Me = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t,
            e
        }
        ,
        Me(e, t)
    }
    function qe(e, t) {
        if ("function" !== typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        t && Me(e, t)
    }
    function Xe(e) {
        return Xe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        ,
        Xe(e)
    }
    function He(e, t) {
        if (t && ("object" === n(t) || "function" === typeof t))
            return t;
        if (void 0 !== t)
            throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e)
    }
    function Ve(e) {
        var t = function() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (I) {
                return !1
            }
        }();
        return function() {
            var n, r = Xe(e);
            if (t) {
                var o = Xe(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else
                n = r.apply(this, arguments);
            return He(this, n)
        }
    }
    var Ye = "_expire";
    const Ze = function() {
        function e(t, n) {
            We(this, e),
            this.storageKey = t,
            this.projectKey = n
        }
        return Ge(e, [{
            key: "isCorrectExpire",
            value: function(e) {
                return "undefined" !== typeof e && Number.isInteger(Number(e)) && Number.isSafeInteger(e) && e > (new Date).getTime()
            }
        }, {
            key: "isCorrectExpireSeconds",
            value: function(e) {
                return "undefined" !== typeof e && Number.isInteger(e) && Number.isSafeInteger(e) && e > 0
            }
        }, {
            key: "getExpire",
            value: function(e) {
                return (new Date).getTime() + 1e3 * e
            }
        }, {
            key: "getProjectData",
            value: function(e) {
                var t = this;
                if (d())
                    return {};
                var n = window[this.storageKey].getItem(this.projectKey)
                  , r = {};
                try {
                    r = JSON.parse(n || "{}")
                } catch (I) {
                    r = {}
                }
                var o = c({}, Ye, {})
                  , i = r[Ye] || {};
                return Object.keys(r).forEach((function(e) {
                    e !== Ye && (void 0 === i[e] || t.isCorrectExpire(i[e])) && (o[e] = r[e],
                    o[Ye][e] = i[e])
                }
                )),
                e && delete o[Ye],
                o
            }
        }, {
            key: "get",
            value: function(e) {
                if (!(null === e || void 0 === e || e instanceof Function || e instanceof Array || e instanceof Object))
                    return this.getProjectData()[e]
            }
        }, {
            key: "set",
            value: function(e, t, n) {
                if (d())
                    return !1;
                if (null === e || void 0 === e || e instanceof Function || e instanceof Array)
                    return !1;
                if (e === Ye)
                    return !1;
                var r = this.getProjectData();
                return e instanceof Object ? this.setAll(e, t) : (r[e] = t,
                "undefined" !== typeof n && this.isCorrectExpireSeconds(n) ? r[Ye][e] = this.getExpire(n) : delete r[Ye][e],
                window[this.storageKey].setItem(this.projectKey, JSON.stringify(r)),
                !0)
            }
        }, {
            key: "setAll",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (d())
                    return !1;
                var r = this.getProjectData();
                return Object.entries(t).forEach((function(t) {
                    var o = t[0];
                    if (o !== Ye) {
                        var i = n[o];
                        r[o] = t[1],
                        e.isCorrectExpireSeconds(i) ? r[Ye][o] = e.getExpire(i) : delete r[Ye][o]
                    }
                }
                )),
                window[this.storageKey].setItem(this.projectKey, JSON.stringify(r)),
                !0
            }
        }, {
            key: "remove",
            value: function(e) {
                if (d())
                    return !1;
                if (null === e || void 0 === e || e instanceof Function)
                    return !1;
                if (e.constructor && e.constructor === Object)
                    return !1;
                var t = [];
                e instanceof Array ? t = e : t.push(e);
                var n = this.getProjectData();
                return t.forEach((function(e) {
                    delete n[e],
                    delete n[Ye][e]
                }
                )),
                window[this.storageKey].setItem(this.projectKey, JSON.stringify(n)),
                !0
            }
        }, {
            key: "getAll",
            value: function() {
                return this.getProjectData(!0)
            }
        }, {
            key: "cleanAll",
            value: function() {
                d() || window[this.storageKey].setItem(this.projectKey, JSON.stringify({}))
            }
        }]),
        e
    }();
    var $e = "".concat("ok_", "global")
      , Qe = "localStorage";
    const et = function(e) {
        qe(n, e);
        var t = Ve(n);
        function n(e) {
            var r;
            return We(this, n),
            (r = t.call(this, Qe, "ok_" + e)).global = new Ze(Qe,$e),
            r.g = new Ze(Qe,$e),
            r
        }
        return Ge(n)
    }(Ze);
    var tt = "sessionStorage"
      , nt = "".concat("ok_", "global");
    const rt = function(e) {
        qe(n, e);
        var t = Ve(n);
        function n(e) {
            var r;
            return We(this, n),
            (r = t.call(this, tt, "ok_" + e)).global = new Ze(tt,nt),
            r.g = new Ze(tt,nt),
            r
        }
        return Ge(n)
    }(Ze);
    const ot = new (function() {
        function e() {
            We(this, e),
            this.local = {},
            this.session = {}
        }
        return Ge(e, [{
            key: "localProject",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!this.local[e]) {
                    if (t)
                        return null;
                    this.local[e] = new et(e)
                }
                return this.local[e]
            }
        }, {
            key: "sessionProject",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!this.session[e]) {
                    if (t)
                        return null;
                    this.session[e] = new rt(e)
                }
                return this.session[e]
            }
        }]),
        e
    }());
    var it = "ok_"
      , at = "default"
      , ct = "global"
      , ut = "localStorage"
      , st = "sessionStorage"
      , lt = it + at
      , ft = it + ct
      , dt = "_expire";
    function pt(e) {
        return "undefined" !== typeof e && Number.isInteger(e) && Number.isSafeInteger(e) && e > 0
    }
    function vt(e) {
        return (new Date).getTime() + 1e3 * e
    }
    function ht(e, t, n) {
        if (d())
            return {};
        var r = window[e].getItem(t)
          , o = {};
        try {
            o = JSON.parse(r || "{}")
        } catch (I) {
            o = {}
        }
        var i = c({}, dt, {})
          , a = o[dt] || {};
        return Object.keys(o).forEach((function(e) {
            var t;
            e !== dt && ((void 0 === a[e] || "undefined" !== typeof (t = a[e]) && Number.isInteger(Number(t)) && Number.isSafeInteger(t) && t > (new Date).getTime()) && (i[e] = o[e],
            i[dt][e] = a[e]))
        }
        )),
        n && delete i[dt],
        i
    }
    function gt(e, t) {
        d() || window[e].setItem(t, JSON.stringify(ht(e, t)))
    }
    var yt = {
        get: function(e, t, n) {
            if (!(null === n || void 0 === n || n instanceof Function || n instanceof Array || n instanceof Object))
                return ht(e, t)[n]
        },
        set: function(e, t, n, r, o) {
            if (d())
                return !1;
            if (null === n || void 0 === n || n instanceof Function || n instanceof Array)
                return !1;
            if (n === dt)
                return !1;
            var i = ht(e, t);
            return n instanceof Object ? yt.setAll(e, t, n, r) : (i[n] = r,
            "undefined" !== typeof o && pt(o) ? i[dt][n] = vt(o) : delete i[dt][n],
            window[e].setItem(t, JSON.stringify(i)),
            !0)
        },
        setAll: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (d())
                return !1;
            var o = ht(e, t);
            return Object.entries(n).forEach((function(e) {
                var t = e[0];
                if (t !== dt) {
                    var n = r[t];
                    o[t] = e[1],
                    pt(n) ? o[dt][t] = vt(n) : delete o[dt][t]
                }
            }
            )),
            window[e].setItem(t, JSON.stringify(o)),
            !0
        },
        remove: function(e, t, n) {
            if (d())
                return !1;
            if (null === n || void 0 === n || n instanceof Function)
                return !1;
            if (n.constructor && n.constructor === Object)
                return !1;
            var r = [];
            n instanceof Array ? r = n : r.push(n);
            var o = ht(e, t);
            return r.forEach((function(e) {
                delete o[e],
                delete o[dt][e]
            }
            )),
            window[e].setItem(t, JSON.stringify(o)),
            !0
        },
        getAll: function(e, t) {
            return ht(e, t, !0)
        },
        cleanAll: function(e, t) {
            d() || window[e].setItem(t, JSON.stringify({}))
        }
    };
    function mt(e) {
        var t = e.isLocal
          , n = e.isGlobal;
        function r() {
            return t ? ut : st
        }
        function o() {
            return n ? ft : lt
        }
        return {
            set: function(e, t, n) {
                return yt.set(r(), o(), e, t, n)
            },
            get: function(e) {
                return yt.get(r(), o(), e)
            },
            remove: function(e) {
                return yt.remove(r(), o(), e)
            },
            getAll: function() {
                return yt.getAll(r(), o())
            },
            cleanAll: function() {
                return yt.cleanAll(r(), o())
            }
        }
    }
    var wt = function() {
        var e = s({}, mt({
            isLocal: !0,
            isGlobal: !0
        }));
        return s(s({}, mt({
            isLocal: !0,
            isGlobal: !1
        })), {}, {
            getProjectStorage: function(e) {
                return ht(ut, it + e, !0)
            },
            global: e,
            g: e
        })
    }();
    function bt(e) {
        var t = e.project
          , n = t === ct ? at : t;
        return gt(st, lt = it + n),
        gt(st, ft),
        n !== at && gt(st, it + at),
        ot.sessionProject(n)
    }
    function kt(e) {
        var t = e === ct ? at : e;
        return ot.sessionProject(t, !0)
    }
    var xt = function() {
        var e = s({}, mt({
            isLocal: !1,
            isGlobal: !0
        }));
        return s(s({}, mt({
            isLocal: !1,
            isGlobal: !1
        })), {}, {
            getProjectStorage: function(e) {
                return ht(st, it + e, !0)
            },
            global: e,
            g: e,
            init: bt,
            getInstance: kt
        })
    }();
    const jt = s(s({
        getInstance: function(e) {
            var t = e === ct ? at : e;
            return ot.localProject(t, !0)
        },
        init: function(e) {
            var t = e.project
              , n = t === ct ? at : t;
            return gt(ut, lt = it + n),
            gt(ut, ft),
            n !== at && gt(ut, it + at),
            ot.localProject(n)
        },
        session: xt
    }, wt), {}, {
        local: wt
    });
    var St = {
        method: "get"
    }
      , Et = "reqCaches";
    const _t = {
        get: Fe,
        getWithCache: function() {
            var e = i(r().mark((function e(t) {
                var n, o, a, u, l, f, d = arguments;
                return r().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = t,
                            (o = d.length > 1 && void 0 !== d[1] ? d[1] : {}).cacheSeconds || (o.cacheSeconds = 60),
                            null !== o && void 0 !== o && o.params && (n = Ce(t, o.params),
                            delete o.params),
                            a = s(s({}, X), o),
                            !(u = jt.session.get(Et) || {})[n]) {
                                e.next = 9;
                                break
                            }
                            return e.abrupt("return", u[n]);
                        case 9:
                            return l = function() {
                                var e = i(r().mark((function e(t) {
                                    var i, a, u;
                                    return r().wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0,
                                                e.next = 3,
                                                t;
                                            case 3:
                                                i = e.sent,
                                                e.next = 9;
                                                break;
                                            case 6:
                                                e.prev = 6,
                                                e.t0 = e.catch(0),
                                                i = e.t0;
                                            case 9:
                                                return e.prev = 9,
                                                a = jt.session.get(Et) || {},
                                                u = s(s({}, a), {}, c({}, n, i)),
                                                jt.session.set(Et, u, o.cacheSeconds),
                                                e.finish(9);
                                            case 14:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e, null, [[0, 6, 9, 14]])
                                }
                                )));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            f = De({
                                url: n,
                                fetchConfig: St,
                                ontConfig: a,
                                callbackWhenFinished: l
                            }),
                            e.abrupt("return", f);
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        delete: Je,
        post: function(e, t) {
            return Ke({
                url: e,
                data: t,
                ontConfig: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                method: "post"
            })
        },
        put: function(e, t) {
            return Ke({
                url: e,
                data: t,
                options: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                method: "put"
            })
        },
        patch: function(e, t) {
            return Ke({
                url: e,
                data: t,
                ontConfig: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                method: "patch"
            })
        },
        jsonp: function(e) {
            var t = e.url
              , n = e.func;
            return new Promise((function(e, r) {
                var o = document.createElement("script")
                  , i = "";
                i = n || "ont_jsonp_".concat(++ue),
                window[i] = function(t) {
                    e(t),
                    se(o, i)
                }
                ;
                var a = t.indexOf("?") > -1 ? "&" : "?"
                  , c = "".concat(t).concat(a, "callback=").concat(i, "&t=").concat(Date.now());
                o.setAttribute("type", "text/javascript"),
                o.setAttribute("src", c),
                o.addEventListener("error", (function() {
                    r(new Error("Fail to load: ".concat(c))),
                    se(o, i)
                }
                )),
                document.head.appendChild(o)
            }
            ))
        },
        isLogin: Y,
        checkIsLogin: function() {
            return O.isApp ? window.jsbridge.isLogin() : Promise.resolve(Y({
                fromInner: !0
            }))
        },
        toLogin: ie,
        saveLoginState: re,
        clearLoginState: oe,
        getLoginRemainingTime: function() {
            var e = Date.now()
              , t = Number(localStorage.token_expire_time);
            return !t || t < e ? 0 : t - e
        },
        getEid: function() {
            return O.getSiteInfo().entity
        },
        setOntConfig: function(e) {
            !function(e) {
                var t = e.msg
                  , n = e.errInfo
                  , r = void 0 === n ? {} : n;
                try {
                    ke.info("ontLog: ".concat(t), s(s({}, r), {}, {
                        customConfig: B
                    }))
                } catch (o) {}
            }({
                msg: "setOntConfig",
                errInfo: e
            }),
            q(e)
        },
        dangerouslySetOntConfig: q,
        getDeviceId: ce.getDeviceId,
        STATUS_CODE: G
    };
    (function() {
        var e = i(r().mark((function e() {
            return r().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (Ee(),
                        ce.getDeviceId(),
                        je(),
                        !O.isApp) {
                            e.next = 8;
                            break
                        }
                        return e.next = 6,
                        ne();
                    case 6:
                        e.next = 9;
                        break;
                    case 8:
                        te();
                    case 9:
                    case "end":
                        return e.stop()
                    }
            }
            ), e)
        }
        )));
        return function() {
            return e.apply(this, arguments)
        }
    }
    )()();
    const Ot = _t;
    (window.utils = window.utils || {}).ont = t.default

              //  --------------------------------------
        e = {
            "STATUS_CODE": {
                "ERR_CANCELED": "ERR_CANCELED",
                "ERR_NETWORK": "ERR_NETWORK",
                "ERR_TIMEOUT": "ERR_TIMEOUT"
            },
            "checkIsLogin": _t.checkIsLogin,
            'clearLoginState': _t.clearLoginState,
            "dangerouslySetOntConfig": _t.dangerouslySetOntConfig,
            "delete": _t.delete,
            "get": _t.get,
            "getDeviceId": _t.getDeviceId,
            "getEid": _t.getEid,
            "getLoginRemainingTime": _t.getLoginRemainingTime,
            "getWithCache": _t.getWithCache,
            "isLogin": _t.isLogin,
            "jsonp": _t.jsonp,
            "patch": _t.patch,
            "put": _t.put,
            "saveLoginState": _t.saveLoginState,
            "setOntConfig": _t.setOntConfig,
            "toLogin": _t.toLogin
        };

        function AZ(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(n), !0).forEach((function(e) {
                    (0,
                    r.Z)(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        };

        function IZ(t, e, n) {
            return (e = (0,
            r.Z)(e))in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }

        var comb = function (t, e) {
            var n = "".concat(t, "|").concat(e);
            return btoa(n)
        }

        var encryptApiKey = function () {
            var API_KEY = "a2c903cc-b31e-4547-9299-b6d07b7631ab"
            var t = API_KEY
                , e = t.split("")
                , n = e.splice(0, 8);
            return t = e.concat(n).join("")
        }

        var encryptTime = function (t) {
            var e = (1 * t + 1111111111111).toString().split("")
                , n = parseInt(10 * Math.random(), 10)
                , r = parseInt(10 * Math.random(), 10)
                , o = parseInt(10 * Math.random(), 10);
            return e.concat([n, r, o]).join("")
        }
        var getApiKey = function (requets_t) {
            var t1 = requets_t
                , e = encryptApiKey();

            console.log(t1)
            return t1 = encryptTime(t1),
                comb(e, t1)
        }

        var zdyfun =  function (requets_time, offset, limit) {
            e.get.apply(() => e,
            [
                "/api/explorer/v1/btc/transactionsNoRestrict",
                {
                    "params": {
                        "offset": offset,
                        "limit": limit
                    },
                    "headers": {
                        "x-apiKey": requets_time
                    },
                    "needSign": true
                }
            ])}

        window.getApiKey = getApiKey
        window.zdyfun = zdyfun
}
)();
}catch (error) {
   console.log(error.message)
}


// 调用示例
const express = require('express');
const app = express();
const port = 3000;  // 设定服务器端口号

// 定义一个 GET 请求的路由
app.get('/get', async (req, res) => {
    const requets_time = req.query.requets_time;  // 获取查询参数 requets_time
    const offset = req.query.offset;  // 获取查询参数 offset
    const limit = req.query.limit;    // 获取查询参数 limit
    traceId = req.query.trace_id

    // 定义一个 Promise 用于延迟返回结果
    const delayedPromise = new Promise((resolve, reject) => {
        const api_key = window.getApiKey(requets_time);
        // 假设 window.zdyfun 是同步函数
        window.zdyfun(api_key, offset, limit);
        timeoutRef = setTimeout(() => {
            try {
                resolve(sent);  // 返回异步操作的结果
            } catch (error) {
                reject(error);  // 处理错误情况
            }
        }, 20); // 20 毫秒
    });

    try {
         // 等待延迟 Promise 执行完成
        sent = await delayedPromise;
        console.log("sent:", sent);
        lsbl= sent;
        res.send(lsbl);  // 返回异步操作的结果

         // 在异步操作完成后清除 setTimeout
        clearTimeout(timeoutRef);

    } catch (error) {
         console.error("Error:", error);
        res.status(500).send("Error occurred.");  // 返回错误响应
    }
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});