(function () {/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    'use strict';
    var N = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        Oa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (g, r, R) {
            g != Array.prototype && g != Object.prototype && (g[r] = R.value)
        };

    function Pb() {
        Pb = function () {
        };
        N.Symbol || (N.Symbol = Qb)
    }

    var Qb = function () {
        var g = 0;
        return function (r) {
            return "jscomp_symbol_" + (r || "") + g++
        }
    }();

    function Pd() {
        Pb();
        var g = N.Symbol.iterator;
        g || (g = N.Symbol.iterator = N.Symbol("iterator"));
        "function" != typeof Array.prototype[g] && Oa(Array.prototype, g, {
            configurable: !0,
            writable: !0,
            value: function () {
                return Qd(this)
            }
        });
        Pd = function () {
        }
    }

    function Qd(g) {
        var r = 0;
        return Rd(function () {
            return r < g.length ? {done: !1, value: g[r++]} : {done: !0}
        })
    }

    function Rd(g) {
        Pd();
        g = {next: g};
        g[N.Symbol.iterator] = function () {
            return this
        };
        return g
    }

    function Sd(g) {
        Pd();
        var r = g[Symbol.iterator];
        return r ? r.call(g) : Qd(g)
    }

    function Td(g) {
        for (var r, R = []; !(r = g.next()).done;) R.push(r.value);
        return R
    }

    (function () {
        function g() {
            var a = this;
            this.s = {};
            this.g = document.documentElement;
            var b = new Pa;
            b.rules = [];
            this.h = w.set(this.g, new w(b));
            this.i = !1;
            this.b = this.a = null;
            Rb(function () {
                a.c()
            })
        }

        function r() {
            this.customStyles = [];
            this.enqueued = !1
        }

        function R() {
        }

        function ta(a) {
            this.cache = {};
            this.c = void 0 === a ? 100 : a
        }

        function n() {
        }

        function w(a, b, c, d, e) {
            this.G = a || null;
            this.b = b || null;
            this.va = c || [];
            this.S = null;
            this.$ = e || "";
            this.a = this.C = this.M = null
        }

        function u() {
        }

        function Pa() {
            this.end = this.start = 0;
            this.rules = this.parent =
                this.previous = null;
            this.cssText = this.parsedCssText = "";
            this.atRule = !1;
            this.type = 0;
            this.parsedSelector = this.selector = this.keyframesName = ""
        }

        function Ud(a) {
            function b(b, c) {
                Object.defineProperty(b, "innerHTML", {
                    enumerable: c.enumerable, configurable: !0, get: c.get, set: function (b) {
                        var d = this, e = void 0;
                        t(this) && (e = [], S(this, function (a) {
                            a !== d && e.push(a)
                        }));
                        c.set.call(this, b);
                        if (e) for (var f = 0; f < e.length; f++) {
                            var h = e[f];
                            1 === h.__CE_state && a.disconnectedCallback(h)
                        }
                        this.ownerDocument.__CE_hasRegistry ? a.f(this) : a.l(this);
                        return b
                    }
                })
            }

            function c(b, c) {
                x(b, "insertAdjacentElement", function (b, d) {
                    var e = t(d);
                    b = c.call(this, b, d);
                    e && a.a(d);
                    t(b) && a.b(d);
                    return b
                })
            }

            Sb && x(Element.prototype, "attachShadow", function (a) {
                return this.__CE_shadowRoot = a = Sb.call(this, a)
            });
            if (Qa && Qa.get) b(Element.prototype, Qa); else if (Ra && Ra.get) b(HTMLElement.prototype, Ra); else {
                var d = Sa.call(document, "div");
                a.v(function (a) {
                    b(a, {
                        enumerable: !0, configurable: !0, get: function () {
                            return Tb.call(this, !0).innerHTML
                        }, set: function (a) {
                            var b = "template" === this.localName ?
                                this.content : this;
                            for (d.innerHTML = a; 0 < b.childNodes.length;) Ta.call(b, b.childNodes[0]);
                            for (; 0 < d.childNodes.length;) ua.call(b, d.childNodes[0])
                        }
                    })
                })
            }
            x(Element.prototype, "setAttribute", function (b, c) {
                if (1 !== this.__CE_state) return Ub.call(this, b, c);
                var d = Ua.call(this, b);
                Ub.call(this, b, c);
                c = Ua.call(this, b);
                a.attributeChangedCallback(this, b, d, c, null)
            });
            x(Element.prototype, "setAttributeNS", function (b, c, d) {
                if (1 !== this.__CE_state) return Vb.call(this, b, c, d);
                var e = va.call(this, b, c);
                Vb.call(this, b, c, d);
                d = va.call(this,
                    b, c);
                a.attributeChangedCallback(this, c, e, d, b)
            });
            x(Element.prototype, "removeAttribute", function (b) {
                if (1 !== this.__CE_state) return Wb.call(this, b);
                var c = Ua.call(this, b);
                Wb.call(this, b);
                null !== c && a.attributeChangedCallback(this, b, c, null, null)
            });
            x(Element.prototype, "removeAttributeNS", function (b, c) {
                if (1 !== this.__CE_state) return Xb.call(this, b, c);
                var d = va.call(this, b, c);
                Xb.call(this, b, c);
                var e = va.call(this, b, c);
                d !== e && a.attributeChangedCallback(this, c, d, e, b)
            });
            Yb ? c(HTMLElement.prototype, Yb) : Zb ? c(Element.prototype,
                Zb) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
            Va(a, Element.prototype, {fa: Vd, append: Wd});
            Xd(a, {sa: Yd, kb: Zd, replaceWith: $d, remove: ae})
        }

        function Xd(a, b) {
            var c = Element.prototype;

            function d(b) {
                return function (c) {
                    for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                    e = [];
                    for (var f = [], m = 0; m < d.length; m++) {
                        var g = d[m];
                        g instanceof Element && t(g) && f.push(g);
                        if (g instanceof DocumentFragment) for (g = g.firstChild; g; g = g.nextSibling) e.push(g); else e.push(g)
                    }
                    b.apply(this,
                        d);
                    for (d = 0; d < f.length; d++) a.a(f[d]);
                    if (t(this)) for (d = 0; d < e.length; d++) f = e[d], f instanceof Element && a.b(f)
                }
            }

            void 0 !== b.sa && (c.before = d(b.sa));
            void 0 !== b.sa && (c.after = d(b.kb));
            void 0 !== b.replaceWith && x(c, "replaceWith", function (c) {
                for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                e = [];
                for (var k = [], v = 0; v < d.length; v++) {
                    var g = d[v];
                    g instanceof Element && t(g) && k.push(g);
                    if (g instanceof DocumentFragment) for (g = g.firstChild; g; g = g.nextSibling) e.push(g); else e.push(g)
                }
                v = t(this);
                b.replaceWith.apply(this,
                    d);
                for (d = 0; d < k.length; d++) a.a(k[d]);
                if (v) for (a.a(this), d = 0; d < e.length; d++) k = e[d], k instanceof Element && a.b(k)
            });
            void 0 !== b.remove && x(c, "remove", function () {
                var c = t(this);
                b.remove.call(this);
                c && a.a(this)
            })
        }

        function be(a) {
            function b(b, d) {
                Object.defineProperty(b, "textContent", {
                    enumerable: d.enumerable, configurable: !0, get: d.get, set: function (b) {
                        if (this.nodeType === Node.TEXT_NODE) d.set.call(this, b); else {
                            var c = void 0;
                            if (this.firstChild) {
                                var e = this.childNodes, k = e.length;
                                if (0 < k && t(this)) {
                                    c = Array(k);
                                    for (var v =
                                        0; v < k; v++) c[v] = e[v]
                                }
                            }
                            d.set.call(this, b);
                            if (c) for (b = 0; b < c.length; b++) a.a(c[b])
                        }
                    }
                })
            }

            x(Node.prototype, "insertBefore", function (b, d) {
                if (b instanceof DocumentFragment) {
                    var c = Array.prototype.slice.apply(b.childNodes);
                    b = $b.call(this, b, d);
                    if (t(this)) for (d = 0; d < c.length; d++) a.b(c[d]);
                    return b
                }
                c = t(b);
                d = $b.call(this, b, d);
                c && a.a(b);
                t(this) && a.b(b);
                return d
            });
            x(Node.prototype, "appendChild", function (b) {
                if (b instanceof DocumentFragment) {
                    var c = Array.prototype.slice.apply(b.childNodes);
                    b = ua.call(this, b);
                    if (t(this)) for (var e =
                        0; e < c.length; e++) a.b(c[e]);
                    return b
                }
                c = t(b);
                e = ua.call(this, b);
                c && a.a(b);
                t(this) && a.b(b);
                return e
            });
            x(Node.prototype, "cloneNode", function (b) {
                b = Tb.call(this, b);
                this.ownerDocument.__CE_hasRegistry ? a.f(b) : a.l(b);
                return b
            });
            x(Node.prototype, "removeChild", function (b) {
                var c = t(b), e = Ta.call(this, b);
                c && a.a(b);
                return e
            });
            x(Node.prototype, "replaceChild", function (b, d) {
                if (b instanceof DocumentFragment) {
                    var c = Array.prototype.slice.apply(b.childNodes);
                    b = ac.call(this, b, d);
                    if (t(this)) for (a.a(d), d = 0; d < c.length; d++) a.b(c[d]);
                    return b
                }
                c = t(b);
                var f = ac.call(this, b, d), h = t(this);
                h && a.a(d);
                c && a.a(b);
                h && a.b(b);
                return f
            });
            Wa && Wa.get ? b(Node.prototype, Wa) : a.v(function (a) {
                b(a, {
                    enumerable: !0, configurable: !0, get: function () {
                        for (var a = [], b = 0; b < this.childNodes.length; b++) a.push(this.childNodes[b].textContent);
                        return a.join("")
                    }, set: function (a) {
                        for (; this.firstChild;) Ta.call(this, this.firstChild);
                        ua.call(this, document.createTextNode(a))
                    }
                })
            })
        }

        function ce(a) {
            x(Document.prototype, "createElement", function (b) {
                if (this.__CE_hasRegistry) {
                    var c =
                        a.c(b);
                    if (c) return new c.constructor
                }
                b = Sa.call(this, b);
                a.g(b);
                return b
            });
            x(Document.prototype, "importNode", function (b, c) {
                b = de.call(this, b, c);
                this.__CE_hasRegistry ? a.f(b) : a.l(b);
                return b
            });
            x(Document.prototype, "createElementNS", function (b, c) {
                if (this.__CE_hasRegistry && (null === b || "http://www.w3.org/1999/xhtml" === b)) {
                    var d = a.c(c);
                    if (d) return new d.constructor
                }
                b = ee.call(this, b, c);
                a.g(b);
                return b
            });
            Va(a, Document.prototype, {fa: fe, append: ge})
        }

        function Va(a, b, c) {
            function d(b) {
                return function (c) {
                    for (var d =
                        [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                    e = [];
                    for (var f = [], g = 0; g < d.length; g++) {
                        var p = d[g];
                        p instanceof Element && t(p) && f.push(p);
                        if (p instanceof DocumentFragment) for (p = p.firstChild; p; p = p.nextSibling) e.push(p); else e.push(p)
                    }
                    b.apply(this, d);
                    for (d = 0; d < f.length; d++) a.a(f[d]);
                    if (t(this)) for (d = 0; d < e.length; d++) f = e[d], f instanceof Element && a.b(f)
                }
            }

            void 0 !== c.fa && (b.prepend = d(c.fa));
            void 0 !== c.append && (b.append = d(c.append))
        }

        function he(a) {
            window.HTMLElement = function () {
                function b() {
                    var b = this.constructor,
                        d = a.B(b);
                    if (!d) throw Error("The custom element being constructed was not registered with `customElements`.");
                    var e = d.constructionStack;
                    if (0 === e.length) return e = Sa.call(document, d.localName), Object.setPrototypeOf(e, b.prototype), e.__CE_state = 1, e.__CE_definition = d, a.g(e), e;
                    d = e.length - 1;
                    var f = e[d];
                    if (f === bc) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
                    e[d] = bc;
                    Object.setPrototypeOf(f, b.prototype);
                    a.g(f);
                    return f
                }

                b.prototype = ie.prototype;
                return b
            }()
        }

        function y(a) {
            this.c = !1;
            this.a = a;
            this.h = new Map;
            this.f = function (a) {
                return a()
            };
            this.b = !1;
            this.g = [];
            this.i = new Xa(a, document)
        }

        function cc() {
            var a = this;
            this.b = this.a = void 0;
            this.c = new Promise(function (b) {
                a.b = b;
                a.a && b(a.a)
            })
        }

        function Xa(a, b) {
            this.b = a;
            this.a = b;
            this.P = void 0;
            this.b.f(this.a);
            "loading" === this.a.readyState && (this.P = new MutationObserver(this.f.bind(this)), this.P.observe(this.a, {
                childList: !0,
                subtree: !0
            }))
        }

        function B() {
            this.u = new Map;
            this.s = new Map;
            this.j = [];
            this.h = !1
        }

        function l(a,
                   b, c) {
            if (a !== dc) throw new TypeError("Illegal constructor");
            a = document.createDocumentFragment();
            a.__proto__ = l.prototype;
            a.H(b, c);
            return a
        }

        function wa(a) {
            if (!a.__shady || void 0 === a.__shady.firstChild) {
                a.__shady = a.__shady || {};
                a.__shady.firstChild = Ya(a);
                a.__shady.lastChild = Za(a);
                ec(a);
                for (var b = a.__shady.childNodes = X(a), c = 0, d; c < b.length && (d = b[c]); c++) d.__shady = d.__shady || {}, d.__shady.parentNode = a, d.__shady.nextSibling = b[c + 1] || null, d.__shady.previousSibling = b[c - 1] || null, fc(d)
            }
        }

        function je(a) {
            var b = a && a.P;
            b && (b.da.delete(a.bb), b.da.size || (a.gb.__shady.Y = null))
        }

        function ke(a, b) {
            a.__shady = a.__shady || {};
            a.__shady.Y || (a.__shady.Y = new xa);
            a.__shady.Y.da.add(b);
            var c = a.__shady.Y;
            return {
                bb: b, P: c, gb: a, takeRecords: function () {
                    return c.takeRecords()
                }
            }
        }

        function xa() {
            this.a = !1;
            this.addedNodes = [];
            this.removedNodes = [];
            this.da = new Set
        }

        function T(a, b) {
            Y[Z] = a;
            Y[Z + 1] = b;
            Z += 2;
            2 === Z && ($a ? $a(aa) : le())
        }

        function me() {
            return function () {
                return process.Ib(aa)
            }
        }

        function ne() {
            return "undefined" !== typeof ab ? function () {
                ab(aa)
            } : bb()
        }

        function oe() {
            var a = 0, b = new gc(aa), c = document.createTextNode("");
            b.observe(c, {characterData: !0});
            return function () {
                c.data = a = ++a % 2
            }
        }

        function pe() {
            var a = new MessageChannel;
            a.port1.onmessage = aa;
            return function () {
                return a.port2.postMessage(0)
            }
        }

        function bb() {
            var a = setTimeout;
            return function () {
                return a(aa, 1)
            }
        }

        function aa() {
            for (var a = 0; a < Z; a += 2) (0, Y[a])(Y[a + 1]), Y[a] = void 0, Y[a + 1] = void 0;
            Z = 0
        }

        function qe() {
            try {
                var a = require("vertx");
                ab = a.Kb || a.Jb;
                return ne()
            } catch (b) {
                return bb()
            }
        }

        function cb(a, b) {
            var c = this,
                d = new this.constructor(ba);
            void 0 === d[ya] && hc(d);
            var e = c.o;
            if (e) {
                var f = arguments[e - 1];
                T(function () {
                    return ic(e, d, f, c.m)
                })
            } else db(c, d, a, b);
            return d
        }

        function eb(a) {
            if (a && "object" === typeof a && a.constructor === this) return a;
            var b = new this(ba);
            ja(b, a);
            return b
        }

        function ba() {
        }

        function jc(a) {
            try {
                return a.then
            } catch (b) {
                return ka.error = b, ka
            }
        }

        function re(a, b, c, d) {
            try {
                a.call(b, c, d)
            } catch (e) {
                return e
            }
        }

        function se(a, b, c) {
            T(function (a) {
                var d = !1, f = re(c, b, function (c) {
                    d || (d = !0, b !== c ? ja(a, c) : L(a, c))
                }, function (b) {
                    d ||
                    (d = !0, C(a, b))
                });
                !d && f && (d = !0, C(a, f))
            }, a)
        }

        function te(a, b) {
            1 === b.o ? L(a, b.m) : 2 === b.o ? C(a, b.m) : db(b, void 0, function (b) {
                return ja(a, b)
            }, function (b) {
                return C(a, b)
            })
        }

        function kc(a, b, c) {
            b.constructor === a.constructor && c === cb && b.constructor.resolve === eb ? te(a, b) : c === ka ? (C(a, ka.error), ka.error = null) : void 0 === c ? L(a, b) : "function" === typeof c ? se(a, b, c) : L(a, b)
        }

        function ja(a, b) {
            if (a === b) C(a, new TypeError("You cannot resolve a promise with itself")); else {
                var c = typeof b;
                null === b || "object" !== c && "function" !== c ? L(a, b) :
                    kc(a, b, jc(b))
            }
        }

        function ue(a) {
            a.Ea && a.Ea(a.m);
            fb(a)
        }

        function L(a, b) {
            void 0 === a.o && (a.m = b, a.o = 1, 0 !== a.U.length && T(fb, a))
        }

        function C(a, b) {
            void 0 === a.o && (a.o = 2, a.m = b, T(ue, a))
        }

        function db(a, b, c, d) {
            var e = a.U, f = e.length;
            a.Ea = null;
            e[f] = b;
            e[f + 1] = c;
            e[f + 2] = d;
            0 === f && a.o && T(fb, a)
        }

        function fb(a) {
            var b = a.U, c = a.o;
            if (0 !== b.length) {
                for (var d, e, f = a.m, h = 0; h < b.length; h += 3) d = b[h], e = b[h + c], d ? ic(c, d, e, f) : e(f);
                a.U.length = 0
            }
        }

        function lc() {
            this.error = null
        }

        function ic(a, b, c, d) {
            var e = "function" === typeof c;
            if (e) {
                try {
                    var f = c(d)
                } catch (m) {
                    gb.error =
                        m, f = gb
                }
                if (f === gb) {
                    var h = !0;
                    var k = f.error;
                    f.error = null
                } else var v = !0;
                if (b === f) {
                    C(b, new TypeError("A promises callback cannot return that same promise."));
                    return
                }
            } else f = d, v = !0;
            void 0 === b.o && (e && v ? ja(b, f) : h ? C(b, k) : 1 === a ? L(b, f) : 2 === a && C(b, f))
        }

        function ve(a, b) {
            try {
                b(function (b) {
                    ja(a, b)
                }, function (b) {
                    C(a, b)
                })
            } catch (c) {
                C(a, c)
            }
        }

        function hc(a) {
            a[ya] = mc++;
            a.o = void 0;
            a.m = void 0;
            a.U = []
        }

        function la(a, b) {
            this.fb = a;
            this.L = new a(ba);
            this.L[ya] || hc(this.L);
            nc(b) ? (this.aa = this.length = b.length, this.m = Array(this.length),
                0 === this.length ? L(this.L, this.m) : (this.length = this.length || 0, this.eb(b), 0 === this.aa && L(this.L, this.m))) : C(this.L, Error("Array Methods must be provided an Array"))
        }

        function D(a) {
            this[ya] = mc++;
            this.m = this.o = void 0;
            this.U = [];
            if (ba !== a) {
                if ("function" !== typeof a) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                if (this instanceof D) ve(this, a); else throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            }
        }

        function ca(a) {
            return a.__shady && void 0 !== a.__shady.firstChild
        }

        function J(a) {
            return "ShadyRoot" === a.Xa
        }

        function ma(a) {
            a = a.getRootNode();
            if (J(a)) return a
        }

        function hb(a, b) {
            if (a && b) for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length && (e = c[d]); d++) {
                var f = Object.getOwnPropertyDescriptor(b, e);
                f && Object.defineProperty(a, e, f)
            }
        }

        function ib(a, b) {
            for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
            for (d = 0; d < c.length; d++) hb(a, c[d]);
            return a
        }

        function we(a, b) {
            for (var c in b) a[c] = b[c]
        }

        function oc(a) {
            jb.push(a);
            kb.textContent = pc++
        }

        function qc(a, b) {
            for (; b;) {
                if (b == a) return !0;
                b = b.parentNode
            }
            return !1
        }

        function rc(a) {
            lb || (lb = !0, oc(za));
            na.push(a)
        }

        function za() {
            lb = !1;
            for (var a = !!na.length; na.length;) na.shift()();
            return a
        }

        function xe(a, b) {
            var c = b.getRootNode();
            return a.map(function (a) {
                var b = c === a.target.getRootNode();
                if (b && a.addedNodes) {
                    if (b = Array.from(a.addedNodes).filter(function (a) {
                            return c === a.getRootNode()
                        }), b.length) return a = Object.create(a), Object.defineProperty(a, "addedNodes", {
                        value: b,
                        configurable: !0
                    }),
                        a
                } else if (b) return a
            }).filter(function (a) {
                return a
            })
        }

        function sc(a) {
            switch (a) {
                case "&":
                    return "&amp;";
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case '"':
                    return "&quot;";
                case "\u00a0":
                    return "&nbsp;"
            }
        }

        function tc(a) {
            for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;
            return b
        }

        function mb(a, b) {
            "template" === a.localName && (a = a.content);
            for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, h; e < f && (h = d[e]); e++) {
                a:{
                    var k = h;
                    var v = a;
                    var g = b;
                    switch (k.nodeType) {
                        case Node.ELEMENT_NODE:
                            for (var p = k.localName, l = "<" + p, r = k.attributes,
                                     n = 0; v = r[n]; n++) l += " " + v.name + '="' + v.value.replace(ye, sc) + '"';
                            l += ">";
                            k = ze[p] ? l : l + mb(k, g) + "</" + p + ">";
                            break a;
                        case Node.TEXT_NODE:
                            k = k.data;
                            k = v && Ae[v.localName] ? k : k.replace(Be, sc);
                            break a;
                        case Node.COMMENT_NODE:
                            k = "\x3c!--" + k.data + "--\x3e";
                            break a;
                        default:
                            throw window.console.error(k), Error("not implemented");
                    }
                }
                c += k
            }
            return c
        }

        function da(a) {
            E.currentNode = a;
            return E.parentNode()
        }

        function Ya(a) {
            E.currentNode = a;
            return E.firstChild()
        }

        function Za(a) {
            E.currentNode = a;
            return E.lastChild()
        }

        function uc(a) {
            E.currentNode =
                a;
            return E.previousSibling()
        }

        function vc(a) {
            E.currentNode = a;
            return E.nextSibling()
        }

        function X(a) {
            var b = [];
            E.currentNode = a;
            for (a = E.firstChild(); a;) b.push(a), a = E.nextSibling();
            return b
        }

        function wc(a) {
            F.currentNode = a;
            return F.parentNode()
        }

        function xc(a) {
            F.currentNode = a;
            return F.firstChild()
        }

        function yc(a) {
            F.currentNode = a;
            return F.lastChild()
        }

        function zc(a) {
            F.currentNode = a;
            return F.previousSibling()
        }

        function Ac(a) {
            F.currentNode = a;
            return F.nextSibling()
        }

        function Bc(a) {
            var b = [];
            F.currentNode = a;
            for (a = F.firstChild(); a;) b.push(a),
                a = F.nextSibling();
            return b
        }

        function Cc(a) {
            return mb(a, function (a) {
                return X(a)
            })
        }

        function Dc(a) {
            switch (a.nodeType) {
                case Node.ELEMENT_NODE:
                case Node.DOCUMENT_FRAGMENT_NODE:
                    a = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1);
                    for (var b = "", c; c = a.nextNode();) b += c.nodeValue;
                    return b;
                default:
                    return a.nodeValue
            }
        }

        function O(a, b, c) {
            for (var d in b) {
                var e = Object.getOwnPropertyDescriptor(a, d);
                e && e.configurable || !e && c ? Object.defineProperty(a, d, b[d]) : c && console.warn("Could not define", d, "on", a)
            }
        }

        function U(a) {
            O(a,
                Ec);
            O(a, nb);
            O(a, ob)
        }

        function Fc(a, b, c) {
            fc(a);
            c = c || null;
            a.__shady = a.__shady || {};
            b.__shady = b.__shady || {};
            c && (c.__shady = c.__shady || {});
            a.__shady.previousSibling = c ? c.__shady.previousSibling : b.lastChild;
            var d = a.__shady.previousSibling;
            d && d.__shady && (d.__shady.nextSibling = a);
            (d = a.__shady.nextSibling = c) && d.__shady && (d.__shady.previousSibling = a);
            a.__shady.parentNode = b;
            c ? c === b.__shady.firstChild && (b.__shady.firstChild = a) : (b.__shady.lastChild = a, b.__shady.firstChild || (b.__shady.firstChild = a));
            b.__shady.childNodes =
                null
        }

        function pb(a, b, c) {
            if (b === a) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
            if (c) {
                var d = c.__shady && c.__shady.parentNode;
                if (void 0 !== d && d !== a || void 0 === d && da(c) !== a) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
            }
            if (c === b) return b;
            b.parentNode && qb(b.parentNode, b);
            d = ma(a);
            var e;
            if (e = d) a:{
                if (!b.__noInsertionPoint) {
                    var f;
                    "slot" === b.localName ? f = [b] : b.querySelectorAll &&
                        (f = b.querySelectorAll("slot"));
                    if (f && f.length) {
                        e = f;
                        break a
                    }
                }
                e = void 0
            }
            (f = e) && d.ab(f);
            d && ("slot" === a.localName || f) && d.O();
            if (ca(a)) {
                d = c;
                ec(a);
                a.__shady = a.__shady || {};
                void 0 !== a.__shady.firstChild && (a.__shady.childNodes = null);
                if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                    f = b.childNodes;
                    for (e = 0; e < f.length; e++) Fc(f[e], a, d);
                    b.__shady = b.__shady || {};
                    d = void 0 !== b.__shady.firstChild ? null : void 0;
                    b.__shady.firstChild = b.__shady.lastChild = d;
                    b.__shady.childNodes = d
                } else Fc(b, a, d);
                if (rb(a)) {
                    a.__shady.root.O();
                    var h =
                        !0
                } else a.__shady.root && (h = !0)
            }
            h || (h = J(a) ? a.host : a, c ? (c = Gc(c), sb.call(h, b, c)) : Hc.call(h, b));
            Ic(a, b);
            return b
        }

        function qb(a, b) {
            if (b.parentNode !== a) throw Error("The node to be removed is not a child of this node: " + b);
            var c = ma(b);
            if (ca(a)) {
                b.__shady = b.__shady || {};
                a.__shady = a.__shady || {};
                b === a.__shady.firstChild && (a.__shady.firstChild = b.__shady.nextSibling);
                b === a.__shady.lastChild && (a.__shady.lastChild = b.__shady.previousSibling);
                var d = b.__shady.previousSibling;
                var e = b.__shady.nextSibling;
                d && (d.__shady =
                    d.__shady || {}, d.__shady.nextSibling = e);
                e && (e.__shady = e.__shady || {}, e.__shady.previousSibling = d);
                b.__shady.parentNode = b.__shady.previousSibling = b.__shady.nextSibling = void 0;
                void 0 !== a.__shady.childNodes && (a.__shady.childNodes = null);
                if (rb(a)) {
                    a.__shady.root.O();
                    var f = !0
                }
            }
            Jc(b);
            c && ((e = a && "slot" === a.localName) && (f = !0), ((d = c.hb(b)) || e) && c.O());
            f || (f = J(a) ? a.host : a, (!a.__shady.root && "slot" !== b.localName || f === da(b)) && oa.call(f, b));
            Ic(a, null, b);
            return b
        }

        function Jc(a) {
            if (a.__shady && void 0 !== a.__shady.wa) for (var b =
                a.childNodes, c = 0, d = b.length, e; c < d && (e = b[c]); c++) Jc(e);
            a.__shady && (a.__shady.wa = void 0)
        }

        function Gc(a) {
            var b = a;
            a && "slot" === a.localName && (b = (b = a.__shady && a.__shady.W) && b.length ? b[0] : Gc(a.nextSibling));
            return b
        }

        function rb(a) {
            return (a = a && a.__shady && a.__shady.root) && a.Da()
        }

        function Kc(a, b) {
            "slot" === b ? (a = a.parentNode, rb(a) && a.__shady.root.O()) : "slot" === a.localName && "name" === b && (b = ma(a)) && (b.jb(a), b.O())
        }

        function Ic(a, b, c) {
            if (a = a.__shady && a.__shady.Y) b && a.addedNodes.push(b), c && a.removedNodes.push(c), a.vb()
        }

        function Lc(a) {
            if (a && a.nodeType) {
                a.__shady = a.__shady || {};
                var b = a.__shady.wa;
                void 0 === b && (J(a) ? b = a : b = (b = a.parentNode) ? Lc(b) : a, pa.call(document.documentElement, a) && (a.__shady.wa = b));
                return b
            }
        }

        function Aa(a, b, c) {
            var d = [];
            Mc(a.childNodes, b, c, d);
            return d
        }

        function Mc(a, b, c, d) {
            for (var e = 0, f = a.length, h; e < f && (h = a[e]); e++) {
                var k;
                if (k = h.nodeType === Node.ELEMENT_NODE) {
                    k = h;
                    var v = b, g = c, p = d, l = v(k);
                    l && p.push(k);
                    g && g(l) ? k = l : (Mc(k.childNodes, v, g, p), k = void 0)
                }
                if (k) break
            }
        }

        function Nc(a) {
            a = a.getRootNode();
            J(a) && a.Ga()
        }

        function Oc(a, b, c) {
            Ba || (Ba = window.ShadyCSS && window.ShadyCSS.ScopingShim);
            Ba && "class" === b ? Ba.setElementClass(a, c) : (Pc.call(a, b, c), Kc(a, b))
        }

        function Qc(a, b) {
            if (a.ownerDocument !== document) return tb.call(document, a, b);
            var c = tb.call(document, a, !1);
            if (b) {
                a = a.childNodes;
                b = 0;
                for (var d; b < a.length; b++) d = Qc(a[b], !0), c.appendChild(d)
            }
            return c
        }

        function ub(a, b) {
            var c = [], d = a;
            for (a = a === window ? window : a.getRootNode(); d;) c.push(d), d = d.assignedSlot ? d.assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b ||
                d !== a) ? d.host : d.parentNode;
            c[c.length - 1] === document && c.push(window);
            return c
        }

        function Rc(a, b) {
            if (!J) return a;
            a = ub(a, !0);
            for (var c = 0, d, e, f, h; c < b.length; c++) if (d = b[c], f = d === window ? window : d.getRootNode(), f !== e && (h = a.indexOf(f), e = f), !J(f) || -1 < h) return d
        }

        function vb(a) {
            function b(b, d) {
                b = new a(b, d);
                b.la = d && !!d.composed;
                return b
            }

            we(b, a);
            b.prototype = a.prototype;
            return b
        }

        function Sc(a, b, c) {
            if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && a.target !== a.relatedTarget &&
            (e.call(b, a), !a.Va); d++) ;
        }

        function Ce(a) {
            var b = a.composedPath();
            Object.defineProperty(a, "currentTarget", {
                get: function () {
                    return d
                }, configurable: !0
            });
            for (var c = b.length - 1; 0 <= c; c--) {
                var d = b[c];
                Sc(a, d, "capture");
                if (a.ma) return
            }
            Object.defineProperty(a, "eventPhase", {
                get: function () {
                    return Event.AT_TARGET
                }
            });
            var e;
            for (c = 0; c < b.length; c++) {
                d = b[c];
                var f = d.__shady && d.__shady.root;
                if (0 === c || f && f === e) if (Sc(a, d, "bubble"), d !== window && (e = d.getRootNode()), a.ma) break
            }
        }

        function Tc(a, b, c, d, e, f) {
            for (var h = 0; h < a.length; h++) {
                var k =
                    a[h], v = k.type, g = k.capture, p = k.once, l = k.passive;
                if (b === k.node && c === v && d === g && e === p && f === l) return h
            }
            return -1
        }

        function Uc(a, b, c) {
            if (b) {
                if ("object" === typeof c) {
                    var d = !!c.capture;
                    var e = !!c.once;
                    var f = !!c.passive
                } else d = !!c, f = e = !1;
                var h = c && c.na || this, k = b[qa];
                if (k) {
                    if (-1 < Tc(k, h, a, d, e, f)) return
                } else b[qa] = [];
                k = function (d) {
                    e && this.removeEventListener(a, b, c);
                    d.__target || Vc(d);
                    if (h !== this) {
                        var f = Object.getOwnPropertyDescriptor(d, "currentTarget");
                        Object.defineProperty(d, "currentTarget", {
                            get: function () {
                                return h
                            },
                            configurable: !0
                        })
                    }
                    if (d.composed || -1 < d.composedPath().indexOf(h)) if (d.target === d.relatedTarget) d.eventPhase === Event.BUBBLING_PHASE && d.stopImmediatePropagation(); else if (d.eventPhase === Event.CAPTURING_PHASE || d.bubbles || d.target === h) {
                        var k = "object" === typeof b && b.handleEvent ? b.handleEvent(d) : b.call(h, d);
                        h !== this && (f ? (Object.defineProperty(d, "currentTarget", f), f = null) : delete d.currentTarget);
                        return k
                    }
                };
                b[qa].push({node: this, type: a, capture: d, once: e, passive: f, zb: k});
                wb[a] ? (this.__handlers = this.__handlers ||
                    {}, this.__handlers[a] = this.__handlers[a] || {
                    capture: [],
                    bubble: []
                }, this.__handlers[a][d ? "capture" : "bubble"].push(k)) : (this instanceof Window ? Wc : Xc).call(this, a, k, c)
            }
        }

        function Yc(a, b, c) {
            if (b) {
                if ("object" === typeof c) {
                    var d = !!c.capture;
                    var e = !!c.once;
                    var f = !!c.passive
                } else d = !!c, f = e = !1;
                var h = c && c.na || this, k = void 0;
                var g = null;
                try {
                    g = b[qa]
                } catch (m) {
                }
                g && (e = Tc(g, h, a, d, e, f), -1 < e && (k = g.splice(e, 1)[0].zb, g.length || (b[qa] = void 0)));
                (this instanceof Window ? Zc : $c).call(this, a, k || b, c);
                k && wb[a] && this.__handlers && this.__handlers[a] &&
                (a = this.__handlers[a][d ? "capture" : "bubble"], k = a.indexOf(k), -1 < k && a.splice(k, 1))
            }
        }

        function De() {
            for (var a in wb) window.addEventListener(a, function (a) {
                a.__target || (Vc(a), Ce(a))
            }, !0)
        }

        function Vc(a) {
            a.__target = a.target;
            a.Ba = a.relatedTarget;
            if (G.X) {
                var b = ad, c = Object.getPrototypeOf(a);
                if (!c.hasOwnProperty("__patchProto")) {
                    var d = Object.create(c);
                    d.Bb = c;
                    hb(d, b);
                    c.__patchProto = d
                }
                a.__proto__ = c.__patchProto
            } else hb(a, ad)
        }

        function ra(a, b) {
            return {index: a, Z: [], ca: b}
        }

        function Ee(a, b, c, d) {
            var e = 0, f = 0, h = 0, k = 0, g = Math.min(b -
                e, d - f);
            if (0 == e && 0 == f) a:{
                for (h = 0; h < g; h++) if (a[h] !== c[h]) break a;
                h = g
            }
            if (b == a.length && d == c.length) {
                k = a.length;
                for (var m = c.length, p = 0; p < g - h && Fe(a[--k], c[--m]);) p++;
                k = p
            }
            e += h;
            f += h;
            b -= k;
            d -= k;
            if (0 == b - e && 0 == d - f) return [];
            if (e == b) {
                for (b = ra(e, 0); f < d;) b.Z.push(c[f++]);
                return [b]
            }
            if (f == d) return [ra(e, b - e)];
            g = e;
            h = f;
            d = d - h + 1;
            k = b - g + 1;
            b = Array(d);
            for (m = 0; m < d; m++) b[m] = Array(k), b[m][0] = m;
            for (m = 0; m < k; m++) b[0][m] = m;
            for (m = 1; m < d; m++) for (p = 1; p < k; p++) if (a[g + p - 1] === c[h + m - 1]) b[m][p] = b[m - 1][p - 1]; else {
                var l = b[m - 1][p] + 1, n = b[m][p - 1] +
                    1;
                b[m][p] = l < n ? l : n
            }
            g = b.length - 1;
            h = b[0].length - 1;
            d = b[g][h];
            for (a = []; 0 < g || 0 < h;) 0 == g ? (a.push(2), h--) : 0 == h ? (a.push(3), g--) : (k = b[g - 1][h - 1], m = b[g - 1][h], p = b[g][h - 1], l = m < p ? m < k ? m : k : p < k ? p : k, l == k ? (k == d ? a.push(0) : (a.push(1), d = k), g--, h--) : l == m ? (a.push(3), g--, d = m) : (a.push(2), h--, d = p));
            a.reverse();
            b = void 0;
            g = [];
            for (h = 0; h < a.length; h++) switch (a[h]) {
                case 0:
                    b && (g.push(b), b = void 0);
                    e++;
                    f++;
                    break;
                case 1:
                    b || (b = ra(e, 0));
                    b.ca++;
                    e++;
                    b.Z.push(c[f]);
                    f++;
                    break;
                case 2:
                    b || (b = ra(e, 0));
                    b.ca++;
                    e++;
                    break;
                case 3:
                    b || (b = ra(e, 0)), b.Z.push(c[f]),
                        f++
            }
            b && g.push(b);
            return g
        }

        function Fe(a, b) {
            return a === b
        }

        function bd(a) {
            var b = [];
            do b.unshift(a); while (a = a.parentNode);
            return b
        }

        function cd(a) {
            Nc(a);
            return a.__shady && a.__shady.assignedSlot || null
        }

        function P(a, b) {
            for (var c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++) {
                var e = c[d], f = Object.getOwnPropertyDescriptor(b, e);
                f.value ? a[e] = f.value : Object.defineProperty(a, e, f)
            }
        }

        function Ge() {
            var a = window.customElements && window.customElements.nativeHTMLElement || HTMLElement;
            P(window.Node.prototype, He);
            P(window.Window.prototype,
                Ie);
            P(window.Text.prototype, Je);
            P(window.DocumentFragment.prototype, xb);
            P(window.Element.prototype, dd);
            P(window.Document.prototype, ed);
            window.HTMLSlotElement && P(window.HTMLSlotElement.prototype, fd);
            P(a.prototype, Ke);
            G.X && (U(window.Node.prototype), U(window.Text.prototype), U(window.DocumentFragment.prototype), U(window.Element.prototype), U(a.prototype), U(window.Document.prototype), window.HTMLSlotElement && U(window.HTMLSlotElement.prototype))
        }

        function gd(a) {
            var b = Le.has(a);
            a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);
            return !b && a
        }

        function t(a) {
            var b = a.isConnected;
            if (void 0 !== b) return b;
            for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
            return !(!a || !(a.__CE_isImportDocument || a instanceof Document))
        }

        function yb(a, b) {
            for (; b && b !== a && !b.nextSibling;) b = b.parentNode;
            return b && b !== a ? b.nextSibling : null
        }

        function S(a, b, c) {
            c = c ? c : new Set;
            for (var d = a; d;) {
                if (d.nodeType === Node.ELEMENT_NODE) {
                    var e = d;
                    b(e);
                    var f = e.localName;
                    if ("link" === f && "import" ===
                        e.getAttribute("rel")) {
                        d = e.import;
                        if (d instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling) S(d, b, c);
                        d = yb(a, e);
                        continue
                    } else if ("template" === f) {
                        d = yb(a, e);
                        continue
                    }
                    if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) S(e, b, c)
                }
                d = d.firstChild ? d.firstChild : yb(a, d)
            }
        }

        function x(a, b, c) {
            a[b] = c
        }

        function zb(a) {
            a = a.replace(I.mb, "").replace(I.port, "");
            var b = hd, c = a, d = new Pa;
            d.start = 0;
            d.end = c.length;
            for (var e = d, f = 0, h = c.length; f < h; f++) if ("{" === c[f]) {
                e.rules || (e.rules = []);
                var k = e, g = k.rules[k.rules.length -
                1] || null;
                e = new Pa;
                e.start = f + 1;
                e.parent = k;
                e.previous = g;
                k.rules.push(e)
            } else "}" === c[f] && (e.end = f + 1, e = e.parent || d);
            return b(d, a)
        }

        function hd(a, b) {
            var c = b.substring(a.start, a.end - 1);
            a.parsedCssText = a.cssText = c.trim();
            a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = Me(c), c = c.replace(I.Ma, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = M.MEDIA_RULE : c.match(I.rb) && (a.type = M.ka,
                a.keyframesName = a.selector.split(I.Ma).pop()) : a.type = 0 === c.indexOf("--") ? M.xa : M.STYLE_RULE);
            if (c = a.rules) for (var d = 0, e = c.length, f; d < e && (f = c[d]); d++) hd(f, b);
            return a
        }

        function Me(a) {
            return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, c) {
                a = c;
                for (c = 6 - a.length; c--;) a = "0" + a;
                return "\\" + a
            })
        }

        function id(a, b, c) {
            c = void 0 === c ? "" : c;
            var d = "";
            if (a.cssText || a.rules) {
                var e = a.rules, f;
                if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));
                if (f) {
                    f = 0;
                    for (var h = e.length, k; f < h && (k = e[f]); f++) d = id(k, b, d)
                } else b ? b =
                    a.cssText : (b = a.cssText, b = b.replace(I.Ha, "").replace(I.La, ""), b = b.replace(I.sb, "").replace(I.xb, "")), (d = b.trim()) && (d = "  " + d + "\n")
            }
            d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));
            return c
        }

        function jd(a) {
            A = a && a.shimcssproperties ? !1 : z || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"))
        }

        function ea(a, b) {
            if (!a) return "";
            "string" === typeof a && (a = zb(a));
            b && fa(a, b);
            return id(a, A)
        }

        function Ca(a) {
            !a.__cssRules &&
            a.textContent && (a.__cssRules = zb(a.textContent));
            return a.__cssRules || null
        }

        function kd(a) {
            return !!a.parent && a.parent.type === M.ka
        }

        function fa(a, b, c, d) {
            if (a) {
                var e = !1, f = a.type;
                if (d && f === M.MEDIA_RULE) {
                    var h = a.selector.match(Ne);
                    h && (window.matchMedia(h[1]).matches || (e = !0))
                }
                f === M.STYLE_RULE ? b(a) : c && f === M.ka ? c(a) : f === M.xa && (e = !0);
                if ((a = a.rules) && !e) {
                    e = 0;
                    f = a.length;
                    for (var k; e < f && (k = a[e]); e++) fa(k, b, c, d)
                }
            }
        }

        function Ab(a, b, c, d) {
            var e = document.createElement("style");
            b && e.setAttribute("scope", b);
            e.textContent =
                a;
            ld(e, c, d);
            return e
        }

        function ld(a, b, c) {
            b = b || document.head;
            b.insertBefore(a, c && c.nextSibling || b.firstChild);
            V ? a.compareDocumentPosition(V) === Node.DOCUMENT_POSITION_PRECEDING && (V = a) : V = a
        }

        function md(a, b) {
            var c = a.indexOf("var(");
            if (-1 === c) return b(a, "", "", "");
            a:{
                var d = 0;
                var e = c + 3;
                for (var f = a.length; e < f; e++) if ("(" === a[e]) d++; else if (")" === a[e] && 0 === --d) break a;
                e = -1
            }
            d = a.substring(c + 4, e);
            c = a.substring(0, c);
            a = md(a.substring(e + 1), b);
            e = d.indexOf(",");
            return -1 === e ? b(c, d.trim(), "", a) : b(c, d.substring(0, e).trim(),
                d.substring(e + 1).trim(), a)
        }

        function Da(a, b) {
            z ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b)
        }

        function W(a) {
            var b = a.localName, c = "";
            b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);
            return {is: b, $: c}
        }

        function nd(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
                    var e = c.addedNodes[d];
                    if (e.nodeType === Node.ELEMENT_NODE) {
                        var f = e.getRootNode();
                        var h = e;
                        var k = [];
                        h.classList ? k = Array.from(h.classList) : h instanceof window.SVGElement && h.hasAttribute("class") && (k = h.getAttribute("class").split(/\s+/));
                        h = k;
                        k = h.indexOf(q.a);
                        if ((h = -1 < k ? h[k + 1] : "") && f === e.ownerDocument) q.b(e, h, !0); else if (f.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (f = f.host)) if (f = W(f).is, h === f) for (e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + q.a + ")"), f = 0; f < e.length; f++) q.h(e[f], h); else h && q.b(e, h, !0), q.b(e, f)
                    }
                }
            }
        }

        function Oe(a) {
            if (a = Ea[a]) a._applyShimCurrentVersion =
                a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1
        }

        function od(a) {
            return a._applyShimCurrentVersion === a._applyShimNextVersion
        }

        function Pe(a) {
            a._applyShimValidatingVersion = a._applyShimNextVersion;
            a.b || (a.b = !0, Qe.then(function () {
                a._applyShimCurrentVersion = a._applyShimNextVersion;
                a.b = !1
            }))
        }

        function Rb(a) {
            requestAnimationFrame(function () {
                pd ? pd(a) : (Bb || (Bb = new Promise(function (a) {
                    Cb = a
                }), "complete" === document.readyState ?
                    Cb() : document.addEventListener("readystatechange", function () {
                        "complete" === document.readyState && Cb()
                    })), Bb.then(function () {
                    a && a()
                }))
            })
        }

        (function () {
            if (!function () {
                    var a = document.createEvent("Event");
                    a.initEvent("foo", !0, !0);
                    a.preventDefault();
                    return a.defaultPrevented
                }()) {
                var a = Event.prototype.preventDefault;
                Event.prototype.preventDefault = function () {
                    this.cancelable && (a.call(this), Object.defineProperty(this, "defaultPrevented", {
                        get: function () {
                            return !0
                        }, configurable: !0
                    }))
                }
            }
            var b = /Trident/.test(navigator.userAgent);
            if (!window.CustomEvent || b && "function" !== typeof window.CustomEvent) window.CustomEvent = function (a, b) {
                b = b || {};
                var c = document.createEvent("CustomEvent");
                c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);
                return c
            }, window.CustomEvent.prototype = window.Event.prototype;
            if (!window.Event || b && "function" !== typeof window.Event) {
                var c = window.Event;
                window.Event = function (a, b) {
                    b = b || {};
                    var c = document.createEvent("Event");
                    c.initEvent(a, !!b.bubbles, !!b.cancelable);
                    return c
                };
                if (c) for (var d in c) window.Event[d] =
                    c[d];
                window.Event.prototype = c.prototype
            }
            if (!window.MouseEvent || b && "function" !== typeof window.MouseEvent) {
                b = window.MouseEvent;
                window.MouseEvent = function (a, b) {
                    b = b || {};
                    var c = document.createEvent("MouseEvent");
                    c.initMouseEvent(a, !!b.bubbles, !!b.cancelable, b.view || window, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget);
                    return c
                };
                if (b) for (d in b) window.MouseEvent[d] = b[d];
                window.MouseEvent.prototype = b.prototype
            }
            Array.from || (Array.from = function (a) {
                return [].slice.call(a)
            });
            Object.assign || (Object.assign = function (a, b) {
                for (var c = [].slice.call(arguments, 1), d = 0, e; d < c.length; d++) if (e = c[d]) for (var f = a, g = e, l = Object.getOwnPropertyNames(g), n = 0; n < l.length; n++) e = l[n], f[e] = g[e];
                return a
            })
        })(window.WebComponents);
        (function () {
            function a() {
            }

            var b = "undefined" === typeof HTMLTemplateElement;
            /Trident/.test(navigator.userAgent) && function () {
                var a = Document.prototype.importNode;
                Document.prototype.importNode = function () {
                    var b = a.apply(this, arguments);
                    if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                        var c =
                            this.createDocumentFragment();
                        c.appendChild(b);
                        return c
                    }
                    return b
                }
            }();
            var c = Node.prototype.cloneNode, d = Document.prototype.createElement, e = Document.prototype.importNode,
                f = function () {
                    if (!b) {
                        var a = document.createElement("template"), c = document.createElement("template");
                        c.content.appendChild(document.createElement("div"));
                        a.content.appendChild(c);
                        a = a.cloneNode(!0);
                        return 0 === a.content.childNodes.length || 0 === a.content.firstChild.content.childNodes.length || !(document.createDocumentFragment().cloneNode() instanceof
                            DocumentFragment)
                    }
                }();
            if (b) {
                var h = document.implementation.createHTMLDocument("template"), k = !0,
                    g = document.createElement("style");
                g.textContent = "template{display:none;}";
                var m = document.head;
                m.insertBefore(g, m.firstElementChild);
                a.prototype = Object.create(HTMLElement.prototype);
                var l = !document.createElement("div").hasOwnProperty("innerHTML");
                a.R = function (b) {
                    if (!b.content) {
                        b.content = h.createDocumentFragment();
                        for (var c; c = b.firstChild;) b.content.appendChild(c);
                        if (l) b.__proto__ = a.prototype; else if (b.cloneNode =
                                function (b) {
                                    return a.a(this, b)
                                }, k) try {
                            n(b), r(b)
                        } catch (sf) {
                            k = !1
                        }
                        a.V(b.content)
                    }
                };
                var n = function (b) {
                    Object.defineProperty(b, "innerHTML", {
                        get: function () {
                            for (var a = "", b = this.content.firstChild; b; b = b.nextSibling) a += b.outerHTML || b.data.replace(t, u);
                            return a
                        }, set: function (b) {
                            h.body.innerHTML = b;
                            for (a.V(h); this.content.firstChild;) this.content.removeChild(this.content.firstChild);
                            for (; h.body.firstChild;) this.content.appendChild(h.body.firstChild)
                        }, configurable: !0
                    })
                }, r = function (a) {
                    Object.defineProperty(a, "outerHTML",
                        {
                            get: function () {
                                return "<template>" + this.innerHTML + "</template>"
                            }, set: function (a) {
                            if (this.parentNode) {
                                h.body.innerHTML = a;
                                for (a = document.createDocumentFragment(); h.body.firstChild;) a.appendChild(h.body.firstChild);
                                this.parentNode.replaceChild(a, this)
                            } else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");
                        }, configurable: !0
                        })
                };
                n(a.prototype);
                r(a.prototype);
                a.V = function (b) {
                    b = b.querySelectorAll("template");
                    for (var c = 0, d = b.length, e; c < d && (e = b[c]); c++) a.R(e)
                };
                document.addEventListener("DOMContentLoaded", function () {
                    a.V(document)
                });
                Document.prototype.createElement = function () {
                    var b = d.apply(this, arguments);
                    "template" === b.localName && a.R(b);
                    return b
                };
                var t = /[&\u00A0<>]/g, u = function (a) {
                    switch (a) {
                        case "&":
                            return "&amp;";
                        case "<":
                            return "&lt;";
                        case ">":
                            return "&gt;";
                        case "\u00a0":
                            return "&nbsp;"
                    }
                }
            }
            if (b || f) a.a = function (a, b) {
                var d = c.call(a, !1);
                this.R && this.R(d);
                b && (d.content.appendChild(c.call(a.content, !0)), this.ua(d.content, a.content));
                return d
            }, a.prototype.cloneNode =
                function (b) {
                    return a.a(this, b)
                }, a.ua = function (a, b) {
                if (b.querySelectorAll) {
                    b = b.querySelectorAll("template");
                    a = a.querySelectorAll("template");
                    for (var c = 0, d = a.length, e, f; c < d; c++) f = b[c], e = a[c], this.R && this.R(f), e.parentNode.replaceChild(f.cloneNode(!0), e)
                }
            }, Node.prototype.cloneNode = function (b) {
                if (this instanceof DocumentFragment) if (b) var d = this.ownerDocument.importNode(this, !0); else return this.ownerDocument.createDocumentFragment(); else d = c.call(this, b);
                b && a.ua(d, this);
                return d
            }, Document.prototype.importNode =
                function (b, c) {
                    if ("template" === b.localName) return a.a(b, c);
                    var d = e.call(this, b, c);
                    c && a.ua(d, b);
                    return d
                }, f && (window.HTMLTemplateElement.prototype.cloneNode = function (b) {
                return a.a(this, b)
            });
            b && (window.HTMLTemplateElement = a)
        })();
        var Db;
        Array.isArray ? Db = Array.isArray : Db = function (a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        };
        var nc = Db, Z = 0, ab, $a, qd = "undefined" !== typeof window ? window : void 0, rd = qd || {},
            gc = rd.MutationObserver || rd.WebKitMutationObserver, Re = "undefined" !== typeof Uint8ClampedArray &&
            "undefined" !== typeof importScripts && "undefined" !== typeof MessageChannel, Y = Array(1E3);
        var le = "undefined" === typeof self && "undefined" !== typeof process && "[object process]" === {}.toString.call(process) ? me() : gc ? oe() : Re ? pe() : qd || "function" !== typeof require ? bb() : qe();
        var ya = Math.random().toString(36).substring(16), ka = new lc, gb = new lc, mc = 0;
        la.prototype.eb = function (a) {
            for (var b = 0; void 0 === this.o && b < a.length; b++) this.cb(a[b], b)
        };
        la.prototype.cb = function (a, b) {
            var c = this.fb, d = c.resolve;
            d === eb ? (d = jc(a), d === cb &&
            void 0 !== a.o ? this.qa(a.o, b, a.m) : "function" !== typeof d ? (this.aa--, this.m[b] = a) : c === D ? (c = new c(ba), kc(c, a, d), this.ra(c, b)) : this.ra(new c(function (b) {
                return b(a)
            }), b)) : this.ra(d(a), b)
        };
        la.prototype.qa = function (a, b, c) {
            var d = this.L;
            void 0 === d.o && (this.aa--, 2 === a ? C(d, c) : this.m[b] = c);
            0 === this.aa && L(d, this.m)
        };
        la.prototype.ra = function (a, b) {
            var c = this;
            db(a, void 0, function (a) {
                return c.qa(1, b, a)
            }, function (a) {
                return c.qa(2, b, a)
            })
        };
        D.all = function (a) {
            return (new la(this, a)).L
        };
        D.race = function (a) {
            var b = this;
            return nc(a) ?
                new b(function (c, d) {
                    for (var e = a.length, f = 0; f < e; f++) b.resolve(a[f]).then(c, d)
                }) : new b(function (a, b) {
                    return b(new TypeError("You must pass an array to race."))
                })
        };
        D.resolve = eb;
        D.reject = function (a) {
            var b = new this(ba);
            C(b, a);
            return b
        };
        D.Gb = function (a) {
            $a = a
        };
        D.Fb = function (a) {
            T = a
        };
        D.Cb = T;
        D.prototype = {
            constructor: D, then: cb, a: function (a) {
                return this.then(null, a)
            }
        };
        window.Promise || (window.Promise = D, D.prototype["catch"] = D.prototype.a);
        (function (a) {
            function b(a, b) {
                if ("function" === typeof window.CustomEvent) return new CustomEvent(a,
                    b);
                var c = document.createEvent("CustomEvent");
                c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);
                return c
            }

            function c(a) {
                if (l) return a.ownerDocument !== document ? a.ownerDocument : null;
                var b = a.__importDoc;
                if (!b && a.parentNode) {
                    b = a.parentNode;
                    if ("function" === typeof b.closest) b = b.closest("link[rel=import]"); else for (; !k(b) && (b = b.parentNode);) ;
                    a.__importDoc = b
                }
                return b
            }

            function d(a) {
                var b = document.querySelectorAll("link[rel=import]:not([import-dependency])"), c = b.length;
                c ? m(b, function (b) {
                    return h(b, function () {
                        0 ===
                        --c && a()
                    })
                }) : a()
            }

            function e(a) {
                function b() {
                    "loading" !== document.readyState && document.body && (document.removeEventListener("readystatechange", b), a())
                }

                document.addEventListener("readystatechange", b);
                b()
            }

            function f(a) {
                e(function () {
                    return d(function () {
                        return a && a()
                    })
                })
            }

            function h(a, b) {
                if (a.__loaded) b && b(); else if ("script" === a.localName && !a.src || "style" === a.localName && !a.firstChild) a.__loaded = !0, b && b(); else {
                    var c = function (d) {
                        a.removeEventListener(d.type, c);
                        a.__loaded = !0;
                        b && b()
                    };
                    a.addEventListener("load",
                        c);
                    z && "style" === a.localName || a.addEventListener("error", c)
                }
            }

            function k(a) {
                return a.nodeType === Node.ELEMENT_NODE && "link" === a.localName && "import" === a.rel
            }

            function g() {
                var a = this;
                this.a = {};
                this.b = 0;
                this.f = new MutationObserver(function (b) {
                    return a.l(b)
                });
                this.f.observe(document.head, {childList: !0, subtree: !0});
                this.c(document)
            }

            function m(a, b, c) {
                var d = a ? a.length : 0, e = c ? -1 : 1;
                for (c = c ? d - 1 : 0; c < d && 0 <= c; c += e) b(a[c], c)
            }

            var l = "import" in document.createElement("link"), n = null;
            !1 === "currentScript" in document && Object.defineProperty(document,
                "currentScript", {
                    get: function () {
                        return n || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null)
                    }, configurable: !0
                });
            var r = /(url\()([^)]*)(\))/g, t = /(@import[\s]+(?!url\())([^;]*)(;)/g,
                u = /(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g, q = {
                    nb: function (a, b) {
                        a.href && a.setAttribute("href", q.ga(a.getAttribute("href"), b));
                        a.src && a.setAttribute("src", q.ga(a.getAttribute("src"), b));
                        if ("style" === a.localName) {
                            var c = q.Na(a.textContent, b, r);
                            a.textContent = q.Na(c, b, t)
                        }
                    }, Na: function (a,
                                     b, c) {
                        return a.replace(c, function (a, c, d, e) {
                            a = d.replace(/["']/g, "");
                            b && (a = q.ga(a, b));
                            return c + "'" + a + "'" + e
                        })
                    }, ga: function (a, b) {
                        if (void 0 === q.oa) {
                            q.oa = !1;
                            try {
                                var c = new URL("b", "http://a");
                                c.pathname = "c%20d";
                                q.oa = "http://a/c%20d" === c.href
                            } catch (tf) {
                            }
                        }
                        if (q.oa) return (new URL(a, b)).href;
                        c = q.$a;
                        c || (c = document.implementation.createHTMLDocument("temp"), q.$a = c, c.za = c.createElement("base"), c.head.appendChild(c.za), c.ya = c.createElement("a"));
                        c.za.href = b;
                        c.ya.href = a;
                        return c.ya.href || a
                    }
                }, w = {
                    async: !0, load: function (a,
                                               b, c) {
                        if (a) if (a.match(/^data:/)) {
                            a = a.split(",");
                            var d = a[1];
                            d = -1 < a[0].indexOf(";base64") ? atob(d) : decodeURIComponent(d);
                            b(d)
                        } else {
                            var e = new XMLHttpRequest;
                            e.open("GET", a, w.async);
                            e.onload = function () {
                                var a = e.responseURL || e.getResponseHeader("Location");
                                a && 0 === a.indexOf("/") && (a = (location.origin || location.protocol + "//" + location.host) + a);
                                var d = e.response || e.responseText;
                                304 === e.status || 0 === e.status || 200 <= e.status && 300 > e.status ? b(d, a) : c(d)
                            };
                            e.send()
                        } else c("error: href must be specified")
                    }
                }, z = /Trident/.test(navigator.userAgent) ||
                /Edge\/\d./i.test(navigator.userAgent);
            g.prototype.c = function (a) {
                var b = this;
                a = a.querySelectorAll("link[rel=import]");
                m(a, function (a) {
                    return b.h(a)
                })
            };
            g.prototype.h = function (a) {
                var b = this, c = a.href;
                if (void 0 !== this.a[c]) {
                    var d = this.a[c];
                    d && d.__loaded && (a.import = d, this.g(a))
                } else this.b++, this.a[c] = "pending", w.load(c, function (a, d) {
                    a = b.s(a, d || c);
                    b.a[c] = a;
                    b.b--;
                    b.c(a);
                    b.i()
                }, function () {
                    b.a[c] = null;
                    b.b--;
                    b.i()
                })
            };
            g.prototype.s = function (a, b) {
                if (!a) return document.createDocumentFragment();
                z && (a = a.replace(u,
                    function (a, b, c) {
                        return -1 === a.indexOf("type=") ? b + " type=import-disable " + c : a
                    }));
                var c = document.createElement("template");
                c.innerHTML = a;
                if (c.content) a = c.content; else for (a = document.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
                if (c = a.querySelector("base")) b = q.ga(c.getAttribute("href"), b), c.removeAttribute("href");
                c = a.querySelectorAll('link[rel=import], link[rel=stylesheet][href][type=import-disable],\n    style:not([type]), link[rel=stylesheet][href]:not([type]),\n    script:not([type]), script[type="application/javascript"],\n    script[type="text/javascript"]');
                var d = 0;
                m(c, function (a) {
                    h(a);
                    q.nb(a, b);
                    a.setAttribute("import-dependency", "");
                    "script" === a.localName && !a.src && a.textContent && (a.setAttribute("src", "data:text/javascript;charset=utf-8," + encodeURIComponent(a.textContent + ("\n//# sourceURL=" + b + (d ? "-" + d : "") + ".js\n"))), a.textContent = "", d++)
                });
                return a
            };
            g.prototype.i = function () {
                var a = this;
                if (!this.b) {
                    this.f.disconnect();
                    this.flatten(document);
                    var b = !1, c = !1, d = function () {
                        c && b && (a.c(document), a.b || (a.f.observe(document.head, {
                            childList: !0,
                            subtree: !0
                        }), a.j()))
                    };
                    this.v(function () {
                        c = !0;
                        d()
                    });
                    this.u(function () {
                        b = !0;
                        d()
                    })
                }
            };
            g.prototype.flatten = function (a) {
                var b = this;
                a = a.querySelectorAll("link[rel=import]");
                m(a, function (a) {
                    var c = b.a[a.href];
                    (a.import = c) && c.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (b.a[a.href] = a, a.readyState = "loading", a.import = a, b.flatten(c), a.appendChild(c))
                })
            };
            g.prototype.u = function (a) {
                function b(e) {
                    if (e < d) {
                        var f = c[e], g = document.createElement("script");
                        f.removeAttribute("import-dependency");
                        m(f.attributes, function (a) {
                            return g.setAttribute(a.name,
                                a.value)
                        });
                        n = g;
                        f.parentNode.replaceChild(g, f);
                        h(g, function () {
                            n = null;
                            b(e + 1)
                        })
                    } else a()
                }

                var c = document.querySelectorAll("script[import-dependency]"), d = c.length;
                b(0)
            };
            g.prototype.v = function (a) {
                var b = document.querySelectorAll("style[import-dependency],\n    link[rel=stylesheet][import-dependency]"),
                    d = b.length;
                if (d) {
                    var e = z && !!document.querySelector("link[rel=stylesheet][href][type=import-disable]");
                    m(b, function (b) {
                        h(b, function () {
                            b.removeAttribute("import-dependency");
                            0 === --d && a()
                        });
                        if (e && b.parentNode !==
                            document.head) {
                            var f = document.createElement(b.localName);
                            f.__appliedElement = b;
                            f.setAttribute("type", "import-placeholder");
                            b.parentNode.insertBefore(f, b.nextSibling);
                            for (f = c(b); f && c(f);) f = c(f);
                            f.parentNode !== document.head && (f = null);
                            document.head.insertBefore(b, f);
                            b.removeAttribute("type")
                        }
                    })
                } else a()
            };
            g.prototype.j = function () {
                var a = this, b = document.querySelectorAll("link[rel=import]");
                m(b, function (b) {
                    return a.g(b)
                }, !0)
            };
            g.prototype.g = function (a) {
                a.__loaded || (a.__loaded = !0, a.import && (a.import.readyState =
                    "complete"), a.dispatchEvent(b(a.import ? "load" : "error", {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                })))
            };
            g.prototype.l = function (a) {
                var b = this;
                m(a, function (a) {
                    return m(a.addedNodes, function (a) {
                        a && a.nodeType === Node.ELEMENT_NODE && (k(a) ? b.h(a) : b.c(a))
                    })
                })
            };
            if (l) {
                var x = document.querySelectorAll("link[rel=import]");
                m(x, function (a) {
                    a.import && "loading" === a.import.readyState || (a.__loaded = !0)
                });
                x = function (a) {
                    a = a.target;
                    k(a) && (a.__loaded = !0)
                };
                document.addEventListener("load", x, !0);
                document.addEventListener("error",
                    x, !0)
            } else {
                var y = Object.getOwnPropertyDescriptor(Node.prototype, "baseURI");
                Object.defineProperty((!y || y.configurable ? Node : Element).prototype, "baseURI", {
                    get: function () {
                        var a = k(this) ? this : c(this);
                        return a ? a.href : y && y.get ? y.get.call(this) : (document.querySelector("base") || window.location).href
                    }, configurable: !0, enumerable: !0
                });
                e(function () {
                    return new g
                })
            }
            f(function () {
                return document.dispatchEvent(b("HTMLImportsLoaded", {cancelable: !0, bubbles: !0, detail: void 0}))
            });
            a.useNative = l;
            a.whenReady = f;
            a.importForElement =
                c
        })(window.HTMLImports = window.HTMLImports || {});
        window.WebComponents = window.WebComponents || {flags: {}};
        var sd = document.querySelector('script[src*="webcomponents-lite.js"]'), Se = /wc-(.+)/, H = {};
        if (!H.noOpts) {
            location.search.slice(1).split("&").forEach(function (a) {
                a = a.split("=");
                var b;
                a[0] && (b = a[0].match(Se)) && (H[b[1]] = a[1] || !0)
            });
            if (sd) for (var td = 0, Fa; Fa = sd.attributes[td]; td++) "src" !== Fa.name && (H[Fa.name] = Fa.value || !0);
            if (H.log && H.log.split) {
                var Te = H.log.split(",");
                H.log = {};
                Te.forEach(function (a) {
                    H.log[a] =
                        !0
                })
            } else H.log = {}
        }
        window.WebComponents.flags = H;
        var ud = H.shadydom;
        ud && (window.ShadyDOM = window.ShadyDOM || {}, window.ShadyDOM.force = ud);
        var vd = H.register || H.ce;
        vd && window.customElements && (window.customElements.forcePolyfill = vd);
        var G = window.ShadyDOM || {};
        G.ob = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
        var Eb = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
        G.X = !!(Eb && Eb.configurable && Eb.get);
        G.Ka = G.force || !G.ob;
        var ha = Element.prototype, wd = ha.matches || ha.matchesSelector ||
            ha.mozMatchesSelector || ha.msMatchesSelector || ha.oMatchesSelector || ha.webkitMatchesSelector,
            kb = document.createTextNode(""), pc = 0, jb = [];
        (new MutationObserver(function () {
            for (; jb.length;) try {
                jb.shift()()
            } catch (a) {
                throw kb.textContent = pc++, a;
            }
        })).observe(kb, {characterData: !0});
        var Ue = !!document.contains, na = [], lb;
        za.list = na;
        xa.prototype.vb = function () {
            var a = this;
            this.a || (this.a = !0, oc(function () {
                a.b()
            }))
        };
        xa.prototype.b = function () {
            if (this.a) {
                this.a = !1;
                var a = this.takeRecords();
                a.length && this.da.forEach(function (b) {
                    b(a)
                })
            }
        };
        xa.prototype.takeRecords = function () {
            if (this.addedNodes.length || this.removedNodes.length) {
                var a = [{addedNodes: this.addedNodes, removedNodes: this.removedNodes}];
                this.addedNodes = [];
                this.removedNodes = [];
                return a
            }
            return []
        };
        var Hc = Element.prototype.appendChild, sb = Element.prototype.insertBefore, oa = Element.prototype.removeChild,
            Pc = Element.prototype.setAttribute, xd = Element.prototype.removeAttribute,
            Fb = Element.prototype.cloneNode, tb = Document.prototype.importNode,
            Xc = Element.prototype.addEventListener, $c = Element.prototype.removeEventListener,
            Wc = Window.prototype.addEventListener, Zc = Window.prototype.removeEventListener,
            Gb = Element.prototype.dispatchEvent, pa = Node.prototype.contains || HTMLElement.prototype.contains,
            Ve = Object.freeze({
                appendChild: Hc,
                insertBefore: sb,
                removeChild: oa,
                setAttribute: Pc,
                removeAttribute: xd,
                cloneNode: Fb,
                importNode: tb,
                addEventListener: Xc,
                removeEventListener: $c,
                Lb: Wc,
                Mb: Zc,
                dispatchEvent: Gb,
                querySelector: Element.prototype.querySelector,
                querySelectorAll: Element.prototype.querySelectorAll,
                contains: pa
            }), ye = /[&\u00A0"]/g, Be =
                /[&\u00A0<>]/g,
            ze = tc("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
            Ae = tc("style script xmp iframe noembed noframes plaintext noscript".split(" ")),
            E = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
            F = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1), We = Object.freeze({
                parentNode: da,
                firstChild: Ya,
                lastChild: Za,
                previousSibling: uc,
                nextSibling: vc,
                childNodes: X,
                parentElement: wc,
                firstElementChild: xc,
                lastElementChild: yc,
                previousElementSibling: zc,
                nextElementSibling: Ac,
                children: Bc,
                innerHTML: Cc,
                textContent: Dc
            }),
            Hb = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML") || Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML"),
            Ga = document.implementation.createHTMLDocument("inert").createElement("div"),
            Ib = Object.getOwnPropertyDescriptor(Document.prototype, "activeElement"), Ec = {
                parentElement: {
                    get: function () {
                        var a = this.__shady && this.__shady.parentNode;
                        a && a.nodeType !== Node.ELEMENT_NODE && (a = null);
                        return void 0 !== a ? a : wc(this)
                    }, configurable: !0
                },
                parentNode: {
                    get: function () {
                        var a = this.__shady && this.__shady.parentNode;
                        return void 0 !== a ? a : da(this)
                    }, configurable: !0
                }, nextSibling: {
                    get: function () {
                        var a = this.__shady && this.__shady.nextSibling;
                        return void 0 !== a ? a : vc(this)
                    }, configurable: !0
                }, previousSibling: {
                    get: function () {
                        var a = this.__shady && this.__shady.previousSibling;
                        return void 0 !== a ? a : uc(this)
                    }, configurable: !0
                }, className: {
                    get: function () {
                        return this.getAttribute("class") || ""
                    }, set: function (a) {
                        this.setAttribute("class", a)
                    }, configurable: !0
                }, nextElementSibling: {
                    get: function () {
                        if (this.__shady &&
                            void 0 !== this.__shady.nextSibling) {
                            for (var a = this.nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.nextSibling;
                            return a
                        }
                        return Ac(this)
                    }, configurable: !0
                }, previousElementSibling: {
                    get: function () {
                        if (this.__shady && void 0 !== this.__shady.previousSibling) {
                            for (var a = this.previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.previousSibling;
                            return a
                        }
                        return zc(this)
                    }, configurable: !0
                }
            }, nb = {
                childNodes: {
                    get: function () {
                        if (ca(this)) {
                            if (!this.__shady.childNodes) {
                                this.__shady.childNodes = [];
                                for (var a = this.firstChild; a; a =
                                    a.nextSibling) this.__shady.childNodes.push(a)
                            }
                            var b = this.__shady.childNodes
                        } else b = X(this);
                        b.item = function (a) {
                            return b[a]
                        };
                        return b
                    }, configurable: !0
                }, childElementCount: {
                    get: function () {
                        return this.children.length
                    }, configurable: !0
                }, firstChild: {
                    get: function () {
                        var a = this.__shady && this.__shady.firstChild;
                        return void 0 !== a ? a : Ya(this)
                    }, configurable: !0
                }, lastChild: {
                    get: function () {
                        var a = this.__shady && this.__shady.lastChild;
                        return void 0 !== a ? a : Za(this)
                    }, configurable: !0
                }, textContent: {
                    get: function () {
                        if (ca(this)) {
                            for (var a =
                                [], b = 0, c = this.childNodes, d; d = c[b]; b++) d.nodeType !== Node.COMMENT_NODE && a.push(d.textContent);
                            return a.join("")
                        }
                        return Dc(this)
                    }, set: function (a) {
                        switch (this.nodeType) {
                            case Node.ELEMENT_NODE:
                            case Node.DOCUMENT_FRAGMENT_NODE:
                                for (; this.firstChild;) this.removeChild(this.firstChild);
                                (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.appendChild(document.createTextNode(a));
                                break;
                            default:
                                this.nodeValue = a
                        }
                    }, configurable: !0
                }, firstElementChild: {
                    get: function () {
                        if (this.__shady && void 0 !== this.__shady.firstChild) {
                            for (var a =
                                this.firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.nextSibling;
                            return a
                        }
                        return xc(this)
                    }, configurable: !0
                }, lastElementChild: {
                    get: function () {
                        if (this.__shady && void 0 !== this.__shady.lastChild) {
                            for (var a = this.lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.previousSibling;
                            return a
                        }
                        return yc(this)
                    }, configurable: !0
                }, children: {
                    get: function () {
                        var a;
                        ca(this) ? a = Array.prototype.filter.call(this.childNodes, function (a) {
                            return a.nodeType === Node.ELEMENT_NODE
                        }) : a = Bc(this);
                        a.item = function (b) {
                            return a[b]
                        };
                        return a
                    },
                    configurable: !0
                }, innerHTML: {
                    get: function () {
                        var a = "template" === this.localName ? this.content : this;
                        return ca(this) ? mb(a) : Cc(a)
                    }, set: function (a) {
                        for (var b = "template" === this.localName ? this.content : this; b.firstChild;) b.removeChild(b.firstChild);
                        for (Hb && Hb.set ? Hb.set.call(Ga, a) : Ga.innerHTML = a; Ga.firstChild;) b.appendChild(Ga.firstChild)
                    }, configurable: !0
                }
            }, yd = {
                shadowRoot: {
                    get: function () {
                        return this.__shady && this.__shady.tb || null
                    }, configurable: !0
                }
            }, ob = {
                activeElement: {
                    get: function () {
                        var a = Ib && Ib.get ? Ib.get.call(document) :
                            G.X ? void 0 : document.activeElement;
                        if (a && a.nodeType) {
                            var b = !!J(this);
                            if (this === document || b && this.host !== a && pa.call(this.host, a)) {
                                for (b = ma(a); b && b !== this;) a = b.host, b = ma(a);
                                a = this === document ? b ? null : a : b === this ? a : null
                            } else a = null
                        } else a = null;
                        return a
                    }, set: function () {
                    }, configurable: !0
                }
            }, fc = G.X ? function () {
            } : function (a) {
                a.__shady && a.__shady.Ya || (a.__shady = a.__shady || {}, a.__shady.Ya = !0, O(a, Ec, !0))
            }, ec = G.X ? function () {
            } : function (a) {
                a.__shady && a.__shady.Wa || (a.__shady = a.__shady || {}, a.__shady.Wa = !0, O(a, nb, !0),
                    O(a, yd, !0))
            }, Ba = null, qa = "__eventWrappers" + Date.now(), Xe = {
                blur: !0,
                focus: !0,
                focusin: !0,
                focusout: !0,
                click: !0,
                dblclick: !0,
                mousedown: !0,
                mouseenter: !0,
                mouseleave: !0,
                mousemove: !0,
                mouseout: !0,
                mouseover: !0,
                mouseup: !0,
                wheel: !0,
                beforeinput: !0,
                input: !0,
                keydown: !0,
                keyup: !0,
                compositionstart: !0,
                compositionupdate: !0,
                compositionend: !0,
                touchstart: !0,
                touchend: !0,
                touchmove: !0,
                touchcancel: !0,
                pointerover: !0,
                pointerenter: !0,
                pointerdown: !0,
                pointermove: !0,
                pointerup: !0,
                pointercancel: !0,
                pointerout: !0,
                pointerleave: !0,
                gotpointercapture: !0,
                lostpointercapture: !0,
                dragstart: !0,
                drag: !0,
                dragenter: !0,
                dragleave: !0,
                dragover: !0,
                drop: !0,
                dragend: !0,
                DOMActivate: !0,
                DOMFocusIn: !0,
                DOMFocusOut: !0,
                keypress: !0
            }, ad = {
                get composed() {
                    !1 !== this.isTrusted && void 0 === this.la && (this.la = Xe[this.type]);
                    return this.la || !1
                }, composedPath: function () {
                    this.Aa || (this.Aa = ub(this.__target, this.composed));
                    return this.Aa
                }, get target() {
                    return Rc(this.currentTarget, this.composedPath())
                }, get relatedTarget() {
                    if (!this.Ba) return null;
                    this.Ca || (this.Ca = ub(this.Ba, !0));
                    return Rc(this.currentTarget,
                        this.Ca)
                }, stopPropagation: function () {
                    Event.prototype.stopPropagation.call(this);
                    this.ma = !0
                }, stopImmediatePropagation: function () {
                    Event.prototype.stopImmediatePropagation.call(this);
                    this.ma = this.Va = !0
                }
            }, wb = {focus: !0, blur: !0}, Ye = vb(window.Event), Ze = vb(window.CustomEvent), $e = vb(window.MouseEvent),
            dc = {};
        l.prototype = Object.create(DocumentFragment.prototype);
        l.prototype.H = function (a, b) {
            this.Xa = "ShadyRoot";
            wa(a);
            wa(this);
            this.host = a;
            this.J = b && b.mode;
            a.__shady = a.__shady || {};
            a.__shady.root = this;
            a.__shady.tb =
                "closed" !== this.J ? this : null;
            this.ba = !1;
            this.b = [];
            this.a = {};
            this.c = [];
            b = X(a);
            for (var c = 0, d = b.length; c < d; c++) oa.call(a, b[c])
        };
        l.prototype.O = function () {
            var a = this;
            this.ba || (this.ba = !0, rc(function () {
                return a.Ga()
            }))
        };
        l.prototype.N = function () {
            for (var a, b = this; b;) b.ba && (a = b), b = b.ib();
            return a
        };
        l.prototype.ib = function () {
            var a = this.host.getRootNode();
            if (J(a)) for (var b = this.host.childNodes, c = 0, d; c < b.length; c++) if (d = b[c], this.j(d)) return a
        };
        l.prototype.Ga = function () {
            var a = this.N();
            a && a._renderRoot()
        };
        l.prototype._renderRoot =
            function () {
                this.ba = !1;
                this.D();
                this.v()
            };
        l.prototype.D = function () {
            this.f();
            for (var a = 0, b; a < this.b.length; a++) b = this.b[a], this.u(b);
            for (b = this.host.firstChild; b; b = b.nextSibling) this.h(b);
            for (a = 0; a < this.b.length; a++) {
                b = this.b[a];
                if (!b.__shady.assignedNodes.length) for (var c = b.firstChild; c; c = c.nextSibling) this.h(c, b);
                c = b.parentNode;
                (c = c.__shady && c.__shady.root) && c.Da() && c._renderRoot();
                this.g(b.__shady.W, b.__shady.assignedNodes);
                if (c = b.__shady.Fa) {
                    for (var d = 0; d < c.length; d++) c[d].__shady.pa = null;
                    b.__shady.Fa =
                        null;
                    c.length > b.__shady.assignedNodes.length && (b.__shady.ta = !0)
                }
                b.__shady.ta && (b.__shady.ta = !1, this.i(b))
            }
        };
        l.prototype.h = function (a, b) {
            a.__shady = a.__shady || {};
            var c = a.__shady.pa;
            a.__shady.pa = null;
            b || (b = (b = this.a[a.slot || "__catchall"]) && b[0]);
            b ? (b.__shady.assignedNodes.push(a), a.__shady.assignedSlot = b) : a.__shady.assignedSlot = void 0;
            c !== a.__shady.assignedSlot && a.__shady.assignedSlot && (a.__shady.assignedSlot.__shady.ta = !0)
        };
        l.prototype.u = function (a) {
            var b = a.__shady.assignedNodes;
            a.__shady.assignedNodes =
                [];
            a.__shady.W = [];
            if (a.__shady.Fa = b) for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.__shady.pa = d.__shady.assignedSlot;
                d.__shady.assignedSlot === a && (d.__shady.assignedSlot = null)
            }
        };
        l.prototype.g = function (a, b) {
            for (var c = 0, d; c < b.length && (d = b[c]); c++) if ("slot" == d.localName) {
                var e = d.__shady.assignedNodes;
                e && e.length && this.g(a, e)
            } else a.push(b[c])
        };
        l.prototype.i = function (a) {
            Gb.call(a, new Event("slotchange"));
            a.__shady.assignedSlot && this.i(a.__shady.assignedSlot)
        };
        l.prototype.v = function () {
            for (var a = this.b, b = [], c =
                0; c < a.length; c++) {
                var d = a[c].parentNode;
                d.__shady && d.__shady.root || !(0 > b.indexOf(d)) || b.push(d)
            }
            for (a = 0; a < b.length; a++) c = b[a], this.T(c === this ? this.host : c, this.B(c))
        };
        l.prototype.B = function (a) {
            var b = [];
            a = a.childNodes;
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                if (this.j(d)) {
                    d = d.__shady.W;
                    for (var e = 0; e < d.length; e++) b.push(d[e])
                } else b.push(d)
            }
            return b
        };
        l.prototype.j = function (a) {
            return "slot" == a.localName
        };
        l.prototype.T = function (a, b) {
            for (var c = X(a), d = Ee(b, b.length, c, c.length), e = 0, f = 0, h; e < d.length && (h = d[e]); e++) {
                for (var g =
                    0, l; g < h.Z.length && (l = h.Z[g]); g++) da(l) === a && oa.call(a, l), c.splice(h.index + f, 1);
                f -= h.ca
            }
            for (e = 0; e < d.length && (h = d[e]); e++) for (f = c[h.index], g = h.index; g < h.index + h.ca; g++) l = b[g], sb.call(a, l, f), c.splice(g, 0, l)
        };
        l.prototype.ab = function (a) {
            this.c.push.apply(this.c, [].concat(a instanceof Array ? a : Td(Sd(a))))
        };
        l.prototype.f = function () {
            this.c.length && (this.I(this.c), this.c = [])
        };
        l.prototype.I = function (a) {
            for (var b, c = 0; c < a.length; c++) {
                var d = a[c];
                d.__shady = d.__shady || {};
                wa(d);
                wa(d.parentNode);
                var e = this.l(d);
                this.a[e] ?
                    (b = b || {}, b[e] = !0, this.a[e].push(d)) : this.a[e] = [d];
                this.b.push(d)
            }
            if (b) for (var f in b) this.a[f] = this.s(this.a[f])
        };
        l.prototype.l = function (a) {
            var b = a.name || a.getAttribute("name") || "__catchall";
            return a.Za = b
        };
        l.prototype.s = function (a) {
            return a.sort(function (a, c) {
                a = bd(a);
                for (var b = bd(c), e = 0; e < a.length; e++) {
                    c = a[e];
                    var f = b[e];
                    if (c !== f) return a = Array.from(c.parentNode.childNodes), a.indexOf(c) - a.indexOf(f)
                }
            })
        };
        l.prototype.hb = function (a) {
            this.f();
            var b = this.a, c;
            for (c in b) for (var d = b[c], e = 0; e < d.length; e++) {
                var f =
                    d[e];
                if (qc(a, f)) {
                    d.splice(e, 1);
                    var h = this.b.indexOf(f);
                    0 <= h && this.b.splice(h, 1);
                    e--;
                    this.K(f);
                    h = !0
                }
            }
            return h
        };
        l.prototype.jb = function (a) {
            var b = a.Za, c = this.l(a);
            if (c !== b) {
                b = this.a[b];
                var d = b.indexOf(a);
                0 <= d && b.splice(d, 1);
                b = this.a[c] || (this.a[c] = []);
                b.push(a);
                1 < b.length && (this.a[c] = this.s(b))
            }
        };
        l.prototype.K = function (a) {
            if (a = a.__shady.W) for (var b = 0; b < a.length; b++) {
                var c = a[b], d = da(c);
                d && oa.call(d, c)
            }
        };
        l.prototype.Da = function () {
            this.f();
            return !!this.b.length
        };
        l.prototype.addEventListener = function (a,
                                                 b, c) {
            "object" !== typeof c && (c = {capture: !!c});
            c.na = this;
            this.host.addEventListener(a, b, c)
        };
        l.prototype.removeEventListener = function (a, b, c) {
            "object" !== typeof c && (c = {capture: !!c});
            c.na = this;
            this.host.removeEventListener(a, b, c)
        };
        l.prototype.getElementById = function (a) {
            return Aa(this, function (b) {
                return b.id == a
            }, function (a) {
                return !!a
            })[0] || null
        };
        (function (a) {
            O(a, nb, !0);
            O(a, ob, !0)
        })(l.prototype);
        var Ie = {addEventListener: Uc.bind(window), removeEventListener: Yc.bind(window)}, He = {
            addEventListener: Uc, removeEventListener: Yc,
            appendChild: function (a) {
                return pb(this, a)
            }, insertBefore: function (a, b) {
                return pb(this, a, b)
            }, removeChild: function (a) {
                return qb(this, a)
            }, replaceChild: function (a, b) {
                pb(this, a, b);
                qb(this, b);
                return a
            }, cloneNode: function (a) {
                if ("template" == this.localName) var b = Fb.call(this, a); else if (b = Fb.call(this, !1), a) {
                    a = this.childNodes;
                    for (var c = 0, d; c < a.length; c++) d = a[c].cloneNode(!0), b.appendChild(d)
                }
                return b
            }, getRootNode: function () {
                return Lc(this)
            }, contains: function (a) {
                return qc(this, a)
            }, get isConnected() {
                var a = this.ownerDocument;
                if (Ue && pa.call(a, this) || a.documentElement && pa.call(a.documentElement, this)) return !0;
                for (a = this; a && !(a instanceof Document);) a = a.parentNode || (a instanceof l ? a.host : void 0);
                return !!(a && a instanceof Document)
            }, dispatchEvent: function (a) {
                za();
                return Gb.call(this, a)
            }
        }, Je = {
            get assignedSlot() {
                return cd(this)
            }
        }, xb = {
            querySelector: function (a) {
                return Aa(this, function (b) {
                    return wd.call(b, a)
                }, function (a) {
                    return !!a
                })[0] || null
            }, querySelectorAll: function (a) {
                return Aa(this, function (b) {
                    return wd.call(b, a)
                })
            }
        }, fd = {
            assignedNodes: function (a) {
                if ("slot" ===
                    this.localName) return Nc(this), this.__shady ? (a && a.flatten ? this.__shady.W : this.__shady.assignedNodes) || [] : []
            }
        }, dd = ib({
            setAttribute: function (a, b) {
                Oc(this, a, b)
            }, removeAttribute: function (a) {
                xd.call(this, a);
                Kc(this, a)
            }, attachShadow: function (a) {
                if (!this) throw"Must provide a host.";
                if (!a) throw"Not enough arguments.";
                return new l(dc, this, a)
            }, get slot() {
                return this.getAttribute("slot")
            }, set slot(a) {
                Oc(this, "slot", a)
            }, get assignedSlot() {
                return cd(this)
            }
        }, xb, fd);
        Object.defineProperties(dd, yd);
        var ed = ib({
            importNode: function (a,
                                  b) {
                return Qc(a, b)
            }, getElementById: function (a) {
                return Aa(this, function (b) {
                    return b.id == a
                }, function (a) {
                    return !!a
                })[0] || null
            }
        }, xb);
        Object.defineProperties(ed, {_activeElement: ob.activeElement});
        var af = HTMLElement.prototype.blur, Ke = ib({
            blur: function () {
                var a = this.__shady && this.__shady.root;
                (a = a && a.activeElement) ? a.blur() : af.call(this)
            }
        });
        G.Ka && (window.ShadyDOM = {
            inUse: G.Ka,
            patch: function (a) {
                return a
            },
            isShadyRoot: J,
            enqueue: rc,
            flush: za,
            settings: G,
            filterMutations: xe,
            observeChildren: ke,
            unobserveChildren: je,
            nativeMethods: Ve,
            nativeTree: We
        }, window.Event = Ye, window.CustomEvent = Ze, window.MouseEvent = $e, De(), Ge(), window.ShadowRoot = l);
        var Le = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
        B.prototype.D = function (a, b) {
            this.u.set(a, b);
            this.s.set(b.constructor, b)
        };
        B.prototype.c = function (a) {
            return this.u.get(a)
        };
        B.prototype.B = function (a) {
            return this.s.get(a)
        };
        B.prototype.v = function (a) {
            this.h = !0;
            this.j.push(a)
        };
        B.prototype.l = function (a) {
            var b =
                this;
            this.h && S(a, function (a) {
                return b.g(a)
            })
        };
        B.prototype.g = function (a) {
            if (this.h && !a.__CE_patched) {
                a.__CE_patched = !0;
                for (var b = 0; b < this.j.length; b++) this.j[b](a)
            }
        };
        B.prototype.b = function (a) {
            var b = [];
            S(a, function (a) {
                return b.push(a)
            });
            for (a = 0; a < b.length; a++) {
                var c = b[a];
                1 === c.__CE_state ? this.connectedCallback(c) : this.i(c)
            }
        };
        B.prototype.a = function (a) {
            var b = [];
            S(a, function (a) {
                return b.push(a)
            });
            for (a = 0; a < b.length; a++) {
                var c = b[a];
                1 === c.__CE_state && this.disconnectedCallback(c)
            }
        };
        B.prototype.f = function (a,
                                  b) {
            var c = this;
            b = b ? b : {};
            var d = b.yb || new Set, e = b.Oa || function (a) {
                return c.i(a)
            }, f = [];
            S(a, function (a) {
                if ("link" === a.localName && "import" === a.getAttribute("rel")) {
                    var b = a.import;
                    b instanceof Node && "complete" === b.readyState ? (b.__CE_isImportDocument = !0, b.__CE_hasRegistry = !0) : a.addEventListener("load", function () {
                        var b = a.import;
                        if (!b.__CE_documentLoadHandled) {
                            b.__CE_documentLoadHandled = !0;
                            b.__CE_isImportDocument = !0;
                            b.__CE_hasRegistry = !0;
                            var f = new Set(d);
                            f.delete(b);
                            c.f(b, {yb: f, Oa: e})
                        }
                    })
                } else f.push(a)
            }, d);
            if (this.h) for (a = 0; a < f.length; a++) this.g(f[a]);
            for (a = 0; a < f.length; a++) e(f[a])
        };
        B.prototype.i = function (a) {
            if (void 0 === a.__CE_state) {
                var b = this.c(a.localName);
                if (b) {
                    b.constructionStack.push(a);
                    var c = b.constructor;
                    try {
                        try {
                            if (new c !== a) throw Error("The custom element constructor did not produce the element being upgraded.");
                        } finally {
                            b.constructionStack.pop()
                        }
                    } catch (f) {
                        throw a.__CE_state = 2, f;
                    }
                    a.__CE_state = 1;
                    a.__CE_definition = b;
                    if (b.attributeChangedCallback) for (b = b.observedAttributes, c = 0; c < b.length; c++) {
                        var d =
                            b[c], e = a.getAttribute(d);
                        null !== e && this.attributeChangedCallback(a, d, null, e, null)
                    }
                    t(a) && this.connectedCallback(a)
                }
            }
        };
        B.prototype.connectedCallback = function (a) {
            var b = a.__CE_definition;
            b.connectedCallback && b.connectedCallback.call(a)
        };
        B.prototype.disconnectedCallback = function (a) {
            var b = a.__CE_definition;
            b.disconnectedCallback && b.disconnectedCallback.call(a)
        };
        B.prototype.attributeChangedCallback = function (a, b, c, d, e) {
            var f = a.__CE_definition;
            f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) &&
            f.attributeChangedCallback.call(a, b, c, d, e)
        };
        Xa.prototype.c = function () {
            this.P && this.P.disconnect()
        };
        Xa.prototype.f = function (a) {
            var b = this.a.readyState;
            "interactive" !== b && "complete" !== b || this.c();
            for (b = 0; b < a.length; b++) for (var c = a[b].addedNodes, d = 0; d < c.length; d++) this.b.f(c[d])
        };
        cc.prototype.resolve = function (a) {
            if (this.a) throw Error("Already resolved.");
            this.a = a;
            this.b && this.b(a)
        };
        y.prototype.define = function (a, b) {
            var c = this;
            if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
            if (!gd(a)) throw new SyntaxError("The element name '" + a + "' is not valid.");
            if (this.a.c(a)) throw Error("A custom element with name '" + a + "' has already been defined.");
            if (this.c) throw Error("A custom element is already being defined.");
            this.c = !0;
            try {
                var d = function (a) {
                    var b = e[a];
                    if (void 0 !== b && !(b instanceof Function)) throw Error("The '" + a + "' callback must be a function.");
                    return b
                }, e = b.prototype;
                if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
                var f = d("connectedCallback");
                var g = d("disconnectedCallback");
                var k = d("adoptedCallback");
                var l = d("attributeChangedCallback");
                var m = b.observedAttributes || []
            } catch (p) {
                return
            } finally {
                this.c = !1
            }
            b = {
                localName: a,
                constructor: b,
                connectedCallback: f,
                disconnectedCallback: g,
                adoptedCallback: k,
                attributeChangedCallback: l,
                observedAttributes: m,
                constructionStack: []
            };
            this.a.D(a, b);
            this.g.push(b);
            this.b || (this.b = !0, this.f(function () {
                return c.j()
            }))
        };
        y.prototype.j = function () {
            var a = this;
            if (!1 !== this.b) {
                this.b = !1;
                for (var b =
                    this.g, c = [], d = new Map, e = 0; e < b.length; e++) d.set(b[e].localName, []);
                this.a.f(document, {
                    Oa: function (b) {
                        if (void 0 === b.__CE_state) {
                            var e = b.localName, f = d.get(e);
                            f ? f.push(b) : a.a.c(e) && c.push(b)
                        }
                    }
                });
                for (e = 0; e < c.length; e++) this.a.i(c[e]);
                for (; 0 < b.length;) {
                    var f = b.shift();
                    e = f.localName;
                    f = d.get(f.localName);
                    for (var g = 0; g < f.length; g++) this.a.i(f[g]);
                    (e = this.h.get(e)) && e.resolve(void 0)
                }
            }
        };
        y.prototype.get = function (a) {
            if (a = this.a.c(a)) return a.constructor
        };
        y.prototype.whenDefined = function (a) {
            if (!gd(a)) return Promise.reject(new SyntaxError("'" +
                a + "' is not a valid custom element name."));
            var b = this.h.get(a);
            if (b) return b.c;
            b = new cc;
            this.h.set(a, b);
            this.a.c(a) && !this.g.some(function (b) {
                return b.localName === a
            }) && b.resolve(void 0);
            return b.c
        };
        y.prototype.l = function (a) {
            this.i.c();
            var b = this.f;
            this.f = function (c) {
                return a(function () {
                    return b(c)
                })
            }
        };
        window.CustomElementRegistry = y;
        y.prototype.define = y.prototype.define;
        y.prototype.get = y.prototype.get;
        y.prototype.whenDefined = y.prototype.whenDefined;
        y.prototype.polyfillWrapFlushCallback = y.prototype.l;
        var Sa = window.Document.prototype.createElement, ee = window.Document.prototype.createElementNS,
            de = window.Document.prototype.importNode, fe = window.Document.prototype.prepend,
            ge = window.Document.prototype.append, bf = window.DocumentFragment.prototype.prepend,
            cf = window.DocumentFragment.prototype.append, Tb = window.Node.prototype.cloneNode,
            ua = window.Node.prototype.appendChild, $b = window.Node.prototype.insertBefore,
            Ta = window.Node.prototype.removeChild, ac = window.Node.prototype.replaceChild,
            Wa = Object.getOwnPropertyDescriptor(window.Node.prototype,
                "textContent"), Sb = window.Element.prototype.attachShadow,
            Qa = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
            Ua = window.Element.prototype.getAttribute, Ub = window.Element.prototype.setAttribute,
            Wb = window.Element.prototype.removeAttribute, va = window.Element.prototype.getAttributeNS,
            Vb = window.Element.prototype.setAttributeNS, Xb = window.Element.prototype.removeAttributeNS,
            Zb = window.Element.prototype.insertAdjacentElement, Vd = window.Element.prototype.prepend,
            Wd = window.Element.prototype.append,
            Yd = window.Element.prototype.before, Zd = window.Element.prototype.after,
            $d = window.Element.prototype.replaceWith, ae = window.Element.prototype.remove, ie = window.HTMLElement,
            Ra = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
            Yb = window.HTMLElement.prototype.insertAdjacentElement, bc = new function () {
            }, Ha = window.customElements;
        if (!Ha || Ha.forcePolyfill || "function" != typeof Ha.define || "function" != typeof Ha.get) {
            var ia = new B;
            he(ia);
            ce(ia);
            Va(ia, DocumentFragment.prototype, {fa: bf, append: cf});
            be(ia);
            Ud(ia);
            document.__CE_hasRegistry = !0;
            var df = new y(ia);
            Object.defineProperty(window, "customElements", {configurable: !0, enumerable: !0, value: df})
        }
        var M = {STYLE_RULE: 1, ka: 7, MEDIA_RULE: 4, xa: 1E3}, I = {
                mb: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
                port: /@import[^;]*;/gim,
                Ha: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
                La: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
                sb: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
                xb: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
                rb: /^@[^\s]*keyframes/,
                Ma: /\s+/g
            },
            z = !(window.ShadyDOM && window.ShadyDOM.inUse);
        if (window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss) var A = window.ShadyCSS.nativeCss; else window.ShadyCSS ? (jd(window.ShadyCSS), window.ShadyCSS = void 0) : jd(window.WebComponents && window.WebComponents.flags);
        var Ia = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
            Ja = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi, ef = /(--[\w-]+)\s*([:,;)]|$)/gi,
            ff = /(animation\s*:)|(animation-name\s*:)/, Ne = /@media\s(.*)/,
            gf = /\{[^}]*\}/g, V = null;
        u.prototype.b = function (a, b, c) {
            a.__styleScoped ? a.__styleScoped = null : this.j(a, b || "", c)
        };
        u.prototype.j = function (a, b, c) {
            a.nodeType === Node.ELEMENT_NODE && this.h(a, b, c);
            if (a = "template" === a.localName ? (a.content || a.Db).childNodes : a.children || a.childNodes) for (var d = 0; d < a.length; d++) this.j(a[d], b, c)
        };
        u.prototype.h = function (a, b, c) {
            if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b)); else if (a.getAttribute) {
                var d =
                    a.getAttribute(hf);
                c ? d && (b = d.replace("style-scope", "").replace(b, ""), Da(a, b)) : Da(a, (d ? d + " " : "") + "style-scope " + b)
            }
        };
        u.prototype.c = function (a, b, c) {
            var d = a.__cssBuild;
            z || "shady" === d ? b = ea(b, c) : (a = W(a), b = this.I(b, a.is, a.$, c) + "\n\n");
            return b.trim()
        };
        u.prototype.I = function (a, b, c, d) {
            var e = this.f(b, c);
            b = this.i(b);
            var f = this;
            return ea(a, function (a) {
                a.c || (f.K(a, b, e), a.c = !0);
                d && d(a, b, e)
            })
        };
        u.prototype.i = function (a) {
            return a ? jf + a : ""
        };
        u.prototype.f = function (a, b) {
            return b ? "[is=" + a + "]" : a
        };
        u.prototype.K = function (a,
                                  b, c) {
            this.l(a, this.g, b, c)
        };
        u.prototype.l = function (a, b, c, d) {
            a.selector = a.A = this.s(a, b, c, d)
        };
        u.prototype.s = function (a, b, c, d) {
            var e = a.selector.split(zd);
            if (!kd(a)) {
                a = 0;
                for (var f = e.length, g; a < f && (g = e[a]); a++) e[a] = b.call(this, g, c, d)
            }
            return e.join(zd)
        };
        u.prototype.v = function (a) {
            return a.replace(Jb, function (a, c, d) {
                -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));
                return ":" + c + "(" + d + ")"
            })
        };
        u.prototype.g = function (a, b, c) {
            var d = this, e = !1;
            a = a.trim();
            var f = Jb.test(a);
            f &&
            (a = a.replace(Jb, function (a, b, c) {
                return ":" + b + "(" + c.replace(/\s/g, "") + ")"
            }), a = this.v(a));
            a = a.replace(kf, Kb + " $1");
            a = a.replace(lf, function (a, f, g) {
                e || (a = d.D(g, f, b, c), e = e || a.stop, f = a.lb, g = a.value);
                return f + g
            });
            f && (a = this.v(a));
            return a
        };
        u.prototype.D = function (a, b, c, d) {
            var e = a.indexOf(Lb);
            0 <= a.indexOf(Kb) ? a = this.H(a, d) : 0 !== e && (a = c ? this.u(a, c) : a);
            c = !1;
            0 <= e && (b = "", c = !0);
            if (c) {
                var f = !0;
                c && (a = a.replace(mf, function (a, b) {
                    return " > " + b
                }))
            }
            a = a.replace(nf, function (a, b, c) {
                return '[dir="' + c + '"] ' + b + ", " + b + '[dir="' +
                    c + '"]'
            });
            return {value: a, lb: b, stop: f}
        };
        u.prototype.u = function (a, b) {
            a = a.split(Ad);
            a[0] += b;
            return a.join(Ad)
        };
        u.prototype.H = function (a, b) {
            var c = a.match(Bd);
            return (c = c && c[2].trim() || "") ? c[0].match(Cd) ? a.replace(Bd, function (a, c, f) {
                return b + f
            }) : c.split(Cd)[0] === b ? c : of : a.replace(Kb, b)
        };
        u.prototype.J = function (a) {
            a.selector = a.parsedSelector;
            this.B(a);
            this.l(a, this.N)
        };
        u.prototype.B = function (a) {
            a.selector === pf && (a.selector = "html")
        };
        u.prototype.N = function (a) {
            return a.match(Lb) ? this.g(a, Dd) : this.u(a.trim(), Dd)
        };
        N.Object.defineProperties(u.prototype, {
            a: {
                configurable: !0, enumerable: !0, get: function () {
                    return "style-scope"
                }
            }
        });
        var Jb = /:(nth[-\w]+)\(([^)]+)\)/, Dd = ":not(.style-scope)", zd = ",",
            lf = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g, Cd = /[[.:#*]/, Kb = ":host", pf = ":root", Lb = "::slotted",
            kf = new RegExp("^(" + Lb + ")"), Bd = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
            mf = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, nf = /(.*):dir\((?:(ltr|rtl))\)/, jf = ".", Ad = ":",
            hf = "class", of = "should_not_match", q = new u;
        w.get = function (a) {
            return a ?
                a.__styleInfo : null
        };
        w.set = function (a, b) {
            return a.__styleInfo = b
        };
        w.prototype.c = function () {
            return this.G
        };
        w.prototype._getStyleRules = w.prototype.c;
        var Ed = function (a) {
            return a.matches || a.matchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.webkitMatchesSelector
        }(window.Element.prototype), qf = navigator.userAgent.match("Trident");
        n.prototype.J = function (a) {
            var b = this, c = {}, d = [], e = 0;
            fa(a, function (a) {
                b.c(a);
                a.index = e++;
                b.I(a.w.cssText, c)
            }, function (a) {
                d.push(a)
            });
            a.b = d;
            a = [];
            for (var f in c) a.push(f);
            return a
        };
        n.prototype.c = function (a) {
            if (!a.w) {
                var b = {}, c = {};
                this.b(a, c) && (b.F = c, a.rules = null);
                b.cssText = this.H(a);
                a.w = b
            }
        };
        n.prototype.b = function (a, b) {
            var c = a.w;
            if (c) {
                if (c.F) return Object.assign(b, c.F), !0
            } else {
                c = a.parsedCssText;
                for (var d; a = Ia.exec(c);) {
                    d = (a[2] || a[3]).trim();
                    if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;
                    d = !0
                }
                return d
            }
        };
        n.prototype.H = function (a) {
            return this.N(a.parsedCssText)
        };
        n.prototype.N = function (a) {
            return a.replace(gf, "").replace(Ia, "")
        };
        n.prototype.I = function (a, b) {
            for (var c; c = ef.exec(a);) {
                var d =
                    c[1];
                ":" !== c[2] && (b[d] = !0)
            }
        };
        n.prototype.ha = function (a) {
            for (var b = Object.getOwnPropertyNames(a), c = 0, d; c < b.length; c++) d = b[c], a[d] = this.a(a[d], a)
        };
        n.prototype.a = function (a, b) {
            if (a) if (0 <= a.indexOf(";")) a = this.f(a, b); else {
                var c = this;
                a = md(a, function (a, e, f, g) {
                    if (!e) return a + g;
                    (e = c.a(b[e], b)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = c.a(b[f] || f, b) || f;
                    return a + (e || "") + g
                })
            }
            return a && a.trim() || ""
        };
        n.prototype.f = function (a, b) {
            a = a.split(";");
            for (var c = 0, d, e; c < a.length; c++) if (d = a[c]) {
                Ja.lastIndex =
                    0;
                if (e = Ja.exec(d)) d = this.a(b[e[1]], b); else if (e = d.indexOf(":"), -1 !== e) {
                    var f = d.substring(e);
                    f = f.trim();
                    f = this.a(f, b) || f;
                    d = d.substring(0, e) + f
                }
                a[c] = d && d.lastIndexOf(";") === d.length - 1 ? d.slice(0, -1) : d || ""
            }
            return a.join(";")
        };
        n.prototype.D = function (a, b) {
            var c = "";
            a.w || this.c(a);
            a.w.cssText && (c = this.f(a.w.cssText, b));
            a.cssText = c
        };
        n.prototype.B = function (a, b) {
            var c = a.cssText, d = a.cssText;
            null == a.Ja && (a.Ja = ff.test(c));
            if (a.Ja) if (null == a.ea) {
                a.ea = [];
                for (var e in b) d = b[e], d = d(c), c !== d && (c = d, a.ea.push(e))
            } else {
                for (e =
                         0; e < a.ea.length; ++e) d = b[a.ea[e]], c = d(c);
                d = c
            }
            a.cssText = d
        };
        n.prototype.T = function (a, b) {
            var c = {}, d = this, e = [];
            fa(a, function (a) {
                a.w || d.c(a);
                var f = a.A || a.parsedSelector;
                b && a.w.F && f && Ed.call(b, f) && (d.b(a, c), a = a.index, f = parseInt(a / 32, 10), e[f] = (e[f] || 0) | 1 << a % 32)
            }, null, !0);
            return {F: c, key: e}
        };
        n.prototype.ja = function (a, b, c, d) {
            b.w || this.c(b);
            if (b.w.F) {
                var e = W(a);
                a = e.is;
                e = e.$;
                e = a ? q.f(a, e) : "html";
                var f = b.parsedSelector, g = ":host > *" === f || "html" === f, k = 0 === f.indexOf(":host") && !g;
                "shady" === c && (g = f === e + " > *." + e || -1 !==
                    f.indexOf("html"), k = !g && 0 === f.indexOf(e));
                "shadow" === c && (g = ":host > *" === f || "html" === f, k = k && !g);
                if (g || k) c = e, k && (z && !b.A && (b.A = q.s(b, q.g, q.i(a), e)), c = b.A || e), d({
                    wb: c,
                    qb: k,
                    Hb: g
                })
            }
        };
        n.prototype.K = function (a, b) {
            var c = {}, d = {}, e = this, f = b && b.__cssBuild;
            fa(b, function (b) {
                e.ja(a, b, f, function (f) {
                    Ed.call(a.Eb || a, f.wb) && (f.qb ? e.b(b, c) : e.b(b, d))
                })
            }, null, !0);
            return {ub: d, pb: c}
        };
        n.prototype.ia = function (a, b, c) {
            var d = this, e = W(a), f = q.f(e.is, e.$),
                g = new RegExp("(?:^|[^.#[:])" + (a.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])");
            e = w.get(a).G;
            var k = this.h(e, c);
            return q.c(a, e, function (a) {
                d.D(a, b);
                z || kd(a) || !a.cssText || (d.B(a, k), d.l(a, g, f, c))
            })
        };
        n.prototype.h = function (a, b) {
            a = a.b;
            var c = {};
            if (!z && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) this.j(e, b), c[e.keyframesName] = this.i(e);
            return c
        };
        n.prototype.i = function (a) {
            return function (b) {
                return b.replace(a.f, a.a)
            }
        };
        n.prototype.j = function (a, b) {
            a.f = new RegExp(a.keyframesName, "g");
            a.a = a.keyframesName + "-" + b;
            a.A = a.A || a.selector;
            a.selector = a.A.replace(a.keyframesName, a.a)
        };
        n.prototype.l = function (a,
                                  b, c, d) {
            a.A = a.A || a.selector;
            d = "." + d;
            for (var e = a.A.split(","), f = 0, g = e.length, k; f < g && (k = e[f]); f++) e[f] = k.match(b) ? k.replace(c, d) : d + " " + k;
            a.selector = e.join(",")
        };
        n.prototype.u = function (a, b, c) {
            var d = a.getAttribute("class") || "", e = d;
            c && (e = d.replace(new RegExp("\\s*x-scope\\s*" + c + "\\s*", "g"), " "));
            e += (e ? " " : "") + "x-scope " + b;
            d !== e && Da(a, e)
        };
        n.prototype.v = function (a, b, c, d) {
            b = d ? d.textContent || "" : this.ia(a, b, c);
            var e = w.get(a), f = e.a;
            f && !z && f !== d && (f._useCount--, 0 >= f._useCount && f.parentNode && f.parentNode.removeChild(f));
            z ? e.a ? (e.a.textContent = b, d = e.a) : b && (d = Ab(b, c, a.shadowRoot, e.b)) : d ? d.parentNode || (qf && -1 < b.indexOf("@media") && (d.textContent = b), ld(d, null, e.b)) : b && (d = Ab(b, c, null, e.b));
            d && (d._useCount = d._useCount || 0, e.a != d && d._useCount++, e.a = d);
            return d
        };
        n.prototype.s = function (a, b) {
            var c = Ca(a), d = this;
            a.textContent = ea(c, function (a) {
                var c = a.cssText = a.parsedCssText;
                a.w && a.w.cssText && (c = c.replace(I.Ha, "").replace(I.La, ""), a.cssText = d.f(c, b))
            })
        };
        N.Object.defineProperties(n.prototype, {
            g: {
                configurable: !0, enumerable: !0, get: function () {
                    return "x-scope"
                }
            }
        });
        var Q = new n, Mb = {}, Ka = window.customElements;
        if (Ka && !z) {
            var rf = Ka.define;
            Ka.define = function (a, b, c) {
                var d = document.createComment(" Shady DOM styles for " + a + " "), e = document.head;
                e.insertBefore(d, (V ? V.nextSibling : null) || e.firstChild);
                V = d;
                Mb[a] = d;
                return rf.call(Ka, a, b, c)
            }
        }
        ta.prototype.a = function (a, b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                if (a.F[e] !== b[e]) return !1
            }
            return !0
        };
        ta.prototype.b = function (a, b, c, d) {
            var e = this.cache[a] || [];
            e.push({F: b, styleElement: c, C: d});
            e.length > this.c && e.shift();
            this.cache[a] =
                e
        };
        ta.prototype.fetch = function (a, b, c) {
            if (a = this.cache[a]) for (var d = a.length - 1; 0 <= d; d--) {
                var e = a[d];
                if (this.a(e, b, c)) return e
            }
        };
        if (!z) {
            var Fd = new MutationObserver(nd), Gd = function (a) {
                Fd.observe(a, {childList: !0, subtree: !0})
            };
            if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Gd(document); else {
                var Nb = function () {
                    Gd(document.body)
                };
                window.HTMLImports ? window.HTMLImports.whenReady(Nb) : requestAnimationFrame(function () {
                    if ("loading" === document.readyState) {
                        var a = function () {
                            Nb();
                            document.removeEventListener("readystatechange",
                                a)
                        };
                        document.addEventListener("readystatechange", a)
                    } else Nb()
                })
            }
            R = function () {
                nd(Fd.takeRecords())
            }
        }
        var Ea = {}, Qe = Promise.resolve(), Bb = null, pd = window.HTMLImports && window.HTMLImports.whenReady || null,
            Cb, La = null, sa = null;
        r.prototype.Ia = function () {
            !this.enqueued && sa && (this.enqueued = !0, Rb(sa))
        };
        r.prototype.b = function (a) {
            a.__seenByShadyCSS || (a.__seenByShadyCSS = !0, this.customStyles.push(a), this.Ia())
        };
        r.prototype.a = function (a) {
            return a.__shadyCSSCachedStyle ? a.__shadyCSSCachedStyle : a.getStyle ? a.getStyle() : a
        };
        r.prototype.c = function () {
            for (var a = this.customStyles, b = 0; b < a.length; b++) {
                var c = a[b];
                if (!c.__shadyCSSCachedStyle) {
                    var d = this.a(c);
                    d && (d = d.__appliedElement || d, La && La(d), c.__shadyCSSCachedStyle = d)
                }
            }
            return a
        };
        r.prototype.addCustomStyle = r.prototype.b;
        r.prototype.getStyleForCustomStyle = r.prototype.a;
        r.prototype.processStyles = r.prototype.c;
        Object.defineProperties(r.prototype, {
            transformCallback: {
                get: function () {
                    return La
                }, set: function (a) {
                    La = a
                }
            }, validateCallback: {
                get: function () {
                    return sa
                }, set: function (a) {
                    var b =
                        !1;
                    sa || (b = !0);
                    sa = a;
                    b && this.Ia()
                }
            }
        });
        var Hd = new ta;
        g.prototype.B = function () {
            R()
        };
        g.prototype.K = function (a) {
            var b = this.s[a] = (this.s[a] || 0) + 1;
            return a + "-" + b
        };
        g.prototype.Sa = function (a) {
            return Ca(a)
        };
        g.prototype.Ua = function (a) {
            return ea(a)
        };
        g.prototype.J = function (a) {
            a = a.content.querySelectorAll("style");
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c];
                b.push(d.textContent);
                d.parentNode.removeChild(d)
            }
            return b.join("").trim()
        };
        g.prototype.ha = function (a) {
            return (a = a.content.querySelector("style")) ? a.getAttribute("css-build") ||
                "" : ""
        };
        g.prototype.prepareTemplate = function (a, b, c) {
            if (!a.f) {
                a.f = !0;
                a.name = b;
                a.extends = c;
                Ea[b] = a;
                var d = this.ha(a), e = this.J(a);
                c = {is: b, extends: c, Ab: d};
                z || q.b(a.content, b);
                this.c();
                var f = Ja.test(e) || Ia.test(e);
                Ja.lastIndex = 0;
                Ia.lastIndex = 0;
                e = zb(e);
                f && A && this.a && this.a.transformRules(e, b);
                a._styleAst = e;
                a.g = d;
                d = [];
                A || (d = Q.J(a._styleAst));
                if (!d.length || A) b = this.T(c, a._styleAst, z ? a.content : null, Mb[b]), a.a = b;
                a.c = d
            }
        };
        g.prototype.T = function (a, b, c, d) {
            b = q.c(a, b);
            if (b.length) return Ab(b, a.is, c, d)
        };
        g.prototype.ja =
            function (a) {
                var b = W(a), c = b.is;
                b = b.$;
                var d = Mb[c];
                c = Ea[c];
                if (c) {
                    var e = c._styleAst;
                    var f = c.c
                }
                return w.set(a, new w(e, d, f, 0, b))
            };
        g.prototype.H = function () {
            !this.a && window.ShadyCSS && window.ShadyCSS.ApplyShim && (this.a = window.ShadyCSS.ApplyShim, this.a.invalidCallback = Oe)
        };
        g.prototype.I = function () {
            var a = this;
            !this.b && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (this.b = window.ShadyCSS.CustomStyleInterface, this.b.transformCallback = function (b) {
                a.v(b)
            }, this.b.validateCallback = function () {
                requestAnimationFrame(function () {
                    (a.b.enqueued ||
                        a.i) && a.f()
                })
            })
        };
        g.prototype.c = function () {
            this.H();
            this.I()
        };
        g.prototype.f = function () {
            this.c();
            if (this.b) {
                var a = this.b.processStyles();
                this.b.enqueued && (A ? this.Qa(a) : (this.u(this.g, this.h), this.D(a)), this.b.enqueued = !1, this.i && !A && this.styleDocument())
            }
        };
        g.prototype.styleElement = function (a, b) {
            var c = W(a).is, d = w.get(a);
            d || (d = this.ja(a));
            this.j(a) || (this.i = !0);
            b && (d.S = d.S || {}, Object.assign(d.S, b));
            if (A) {
                if (d.S) {
                    b = d.S;
                    for (var e in b) null === e ? a.style.removeProperty(e) : a.style.setProperty(e, b[e])
                }
                if (((e =
                        Ea[c]) || this.j(a)) && e && e.a && !od(e)) {
                    if (od(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) this.c(), this.a && this.a.transformRules(e._styleAst, c), e.a.textContent = q.c(a, d.G), Pe(e);
                    z && (c = a.shadowRoot) && (c.querySelector("style").textContent = q.c(a, d.G));
                    d.G = e._styleAst
                }
            } else this.u(a, d), d.va && d.va.length && this.N(a, d)
        };
        g.prototype.l = function (a) {
            return (a = a.getRootNode().host) ? w.get(a) ? a : this.l(a) : this.g
        };
        g.prototype.j = function (a) {
            return a === this.g
        };
        g.prototype.N = function (a, b) {
            var c = W(a).is, d =
                Hd.fetch(c, b.M, b.va), e = d ? d.styleElement : null, f = b.C;
            b.C = d && d.C || this.K(c);
            e = Q.v(a, b.M, b.C, e);
            z || Q.u(a, b.C, f);
            d || Hd.b(c, b.M, e, b.C)
        };
        g.prototype.u = function (a, b) {
            var c = this.l(a), d = w.get(c);
            c = Object.create(d.M || null);
            var e = Q.K(a, b.G);
            a = Q.T(d.G, a).F;
            Object.assign(c, e.pb, a, e.ub);
            this.ia(c, b.S);
            Q.ha(c);
            b.M = c
        };
        g.prototype.ia = function (a, b) {
            for (var c in b) {
                var d = b[c];
                if (d || 0 === d) a[c] = d
            }
        };
        g.prototype.styleDocument = function (a) {
            this.styleSubtree(this.g, a)
        };
        g.prototype.styleSubtree = function (a, b) {
            var c = a.shadowRoot;
            (c || this.j(a)) && this.styleElement(a, b);
            if (b = c && (c.children || c.childNodes)) for (a = 0; a < b.length; a++) this.styleSubtree(b[a]); else if (a = a.children || a.childNodes) for (b = 0; b < a.length; b++) this.styleSubtree(a[b])
        };
        g.prototype.Qa = function (a) {
            for (var b = 0; b < a.length; b++) {
                var c = this.b.getStyleForCustomStyle(a[b]);
                c && this.Pa(c)
            }
        };
        g.prototype.D = function (a) {
            for (var b = 0; b < a.length; b++) {
                var c = this.b.getStyleForCustomStyle(a[b]);
                c && Q.s(c, this.h.M)
            }
        };
        g.prototype.v = function (a) {
            var b = this, c = Ca(a);
            fa(c, function (a) {
                z ? q.B(a) :
                    q.J(a);
                A && (b.c(), b.a && b.a.transformRule(a))
            });
            A ? a.textContent = ea(c) : this.h.G.rules.push(c)
        };
        g.prototype.Pa = function (a) {
            if (A && this.a) {
                var b = Ca(a);
                this.c();
                this.a.transformRules(b);
                a.textContent = ea(b)
            }
        };
        g.prototype.getComputedStyleValue = function (a, b) {
            var c;
            A || (c = (w.get(a) || w.get(this.l(a))).M[b]);
            return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : ""
        };
        g.prototype.Ta = function (a, b) {
            var c = a.getRootNode();
            b = b ? b.split(/\s/) : [];
            c = c.host && c.host.localName;
            if (!c) {
                var d = a.getAttribute("class");
                if (d) {
                    d = d.split(/\s/);
                    for (var e = 0; e < d.length; e++) if (d[e] === q.a) {
                        c = d[e + 1];
                        break
                    }
                }
            }
            c && b.push(q.a, c);
            A || (c = w.get(a)) && c.C && b.push(Q.g, c.C);
            Da(a, b.join(" "))
        };
        g.prototype.Ra = function (a) {
            return w.get(a)
        };
        g.prototype.flush = g.prototype.B;
        g.prototype.prepareTemplate = g.prototype.prepareTemplate;
        g.prototype.styleElement = g.prototype.styleElement;
        g.prototype.styleDocument = g.prototype.styleDocument;
        g.prototype.styleSubtree = g.prototype.styleSubtree;
        g.prototype.getComputedStyleValue = g.prototype.getComputedStyleValue;
        g.prototype.setElementClass = g.prototype.Ta;
        g.prototype._styleInfoForNode = g.prototype.Ra;
        g.prototype.transformCustomStyleForDocument = g.prototype.v;
        g.prototype.getStyleAst = g.prototype.Sa;
        g.prototype.styleAstToString = g.prototype.Ua;
        g.prototype.flushCustomStyles = g.prototype.f;
        Object.defineProperties(g.prototype, {
            nativeShadow: {
                get: function () {
                    return z
                }
            }, nativeCss: {
                get: function () {
                    return A
                }
            }
        });
        var K = new g;
        if (window.ShadyCSS) {
            var Id = window.ShadyCSS.ApplyShim;
            var Jd = window.ShadyCSS.CustomStyleInterface
        }
        window.ShadyCSS =
            {
                ScopingShim: K, prepareTemplate: function (a, b, c) {
                K.f();
                K.prepareTemplate(a, b, c)
            }, styleSubtree: function (a, b) {
                K.f();
                K.styleSubtree(a, b)
            }, styleElement: function (a) {
                K.f();
                K.styleElement(a)
            }, styleDocument: function (a) {
                K.f();
                K.styleDocument(a)
            }, getComputedStyleValue: function (a, b) {
                return K.getComputedStyleValue(a, b)
            }, nativeCss: A, nativeShadow: z
            };
        Id && (window.ShadyCSS.ApplyShim = Id);
        Jd && (window.ShadyCSS.CustomStyleInterface = Jd);
        var Ob = window.customElements, Ma = window.HTMLImports, Kd = window.HTMLTemplateElement;
        window.WebComponents =
            window.WebComponents || {};
        if (Ob && Ob.polyfillWrapFlushCallback) {
            var Na, Ld = function () {
                if (Na) {
                    Kd.V && Kd.V(window.document);
                    var a = Na;
                    Na = null;
                    a();
                    return !0
                }
            }, Md = Ma.whenReady;
            Ob.polyfillWrapFlushCallback(function (a) {
                Na = a;
                Md(Ld)
            });
            Ma.whenReady = function (a) {
                Md(function () {
                    Ld() ? Ma.whenReady(a) : a()
                })
            }
        }
        Ma.whenReady(function () {
            requestAnimationFrame(function () {
                window.WebComponents.ready = !0;
                document.dispatchEvent(new CustomEvent("WebComponentsReady", {bubbles: !0}))
            })
        });
        var Nd = document.createElement("style");
        Nd.textContent =
            "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
        var Od = document.querySelector("head");
        Od.insertBefore(Nd, Od.firstChild)
    })();
}).call(this);

//# sourceMappingURL=webcomponents-lite.js.map
