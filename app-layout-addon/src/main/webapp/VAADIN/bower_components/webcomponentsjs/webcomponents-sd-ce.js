(function () {/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
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

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    'use strict';
    var I = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        xa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (g, p, M) {
            g != Array.prototype && g != Object.prototype && (g[p] = M.value)
        };

    function pb() {
        pb = function () {
        };
        I.Symbol || (I.Symbol = qb)
    }

    var qb = function () {
        var g = 0;
        return function (p) {
            return "jscomp_symbol_" + (p || "") + g++
        }
    }();

    function Zc() {
        pb();
        var g = I.Symbol.iterator;
        g || (g = I.Symbol.iterator = I.Symbol("iterator"));
        "function" != typeof Array.prototype[g] && xa(Array.prototype, g, {
            configurable: !0,
            writable: !0,
            value: function () {
                return $c(this)
            }
        });
        Zc = function () {
        }
    }

    function $c(g) {
        var p = 0;
        return ad(function () {
            return p < g.length ? {done: !1, value: g[p++]} : {done: !0}
        })
    }

    function ad(g) {
        Zc();
        g = {next: g};
        g[I.Symbol.iterator] = function () {
            return this
        };
        return g
    }

    function bd(g) {
        Zc();
        var p = g[Symbol.iterator];
        return p ? p.call(g) : $c(g)
    }

    function cd(g) {
        for (var p, M = []; !(p = g.next()).done;) M.push(p.value);
        return M
    }

    (function () {
        function g() {
            var a = this;
            this.m = {};
            this.g = document.documentElement;
            var b = new ya;
            b.rules = [];
            this.h = v.set(this.g, new v(b));
            this.i = !1;
            this.b = this.a = null;
            rb(function () {
                a.c()
            })
        }

        function p() {
            this.customStyles = [];
            this.enqueued = !1
        }

        function M() {
        }

        function fa(a) {
            this.cache = {};
            this.c = void 0 === a ? 100 : a
        }

        function n() {
        }

        function v(a, b, c, d, e) {
            this.D = a || null;
            this.b = b || null;
            this.ja = c || [];
            this.N = null;
            this.U = e || "";
            this.a = this.A = this.J = null
        }

        function r() {
        }

        function ya() {
            this.end = this.start = 0;
            this.rules = this.parent =
                this.previous = null;
            this.cssText = this.parsedCssText = "";
            this.atRule = !1;
            this.type = 0;
            this.parsedSelector = this.selector = this.keyframesName = ""
        }

        function dd(a) {
            function b(b, c) {
                Object.defineProperty(b, "innerHTML", {
                    enumerable: c.enumerable, configurable: !0, get: c.get, set: function (b) {
                        var d = this, e = void 0;
                        q(this) && (e = [], N(this, function (a) {
                            a !== d && e.push(a)
                        }));
                        c.set.call(this, b);
                        if (e) for (var f = 0; f < e.length; f++) {
                            var k = e[f];
                            1 === k.__CE_state && a.disconnectedCallback(k)
                        }
                        this.ownerDocument.__CE_hasRegistry ? a.f(this) : a.l(this);
                        return b
                    }
                })
            }

            function c(b, c) {
                x(b, "insertAdjacentElement", function (b, d) {
                    var e = q(d);
                    b = c.call(this, b, d);
                    e && a.a(d);
                    q(b) && a.b(d);
                    return b
                })
            }

            sb && x(Element.prototype, "attachShadow", function (a) {
                return this.__CE_shadowRoot = a = sb.call(this, a)
            });
            if (za && za.get) b(Element.prototype, za); else if (Aa && Aa.get) b(HTMLElement.prototype, Aa); else {
                var d = Ba.call(document, "div");
                a.u(function (a) {
                    b(a, {
                        enumerable: !0, configurable: !0, get: function () {
                            return tb.call(this, !0).innerHTML
                        }, set: function (a) {
                            var b = "template" === this.localName ?
                                this.content : this;
                            for (d.innerHTML = a; 0 < b.childNodes.length;) Ca.call(b, b.childNodes[0]);
                            for (; 0 < d.childNodes.length;) ha.call(b, d.childNodes[0])
                        }
                    })
                })
            }
            x(Element.prototype, "setAttribute", function (b, c) {
                if (1 !== this.__CE_state) return ub.call(this, b, c);
                var d = Da.call(this, b);
                ub.call(this, b, c);
                c = Da.call(this, b);
                a.attributeChangedCallback(this, b, d, c, null)
            });
            x(Element.prototype, "setAttributeNS", function (b, c, d) {
                if (1 !== this.__CE_state) return vb.call(this, b, c, d);
                var e = ia.call(this, b, c);
                vb.call(this, b, c, d);
                d = ia.call(this,
                    b, c);
                a.attributeChangedCallback(this, c, e, d, b)
            });
            x(Element.prototype, "removeAttribute", function (b) {
                if (1 !== this.__CE_state) return wb.call(this, b);
                var c = Da.call(this, b);
                wb.call(this, b);
                null !== c && a.attributeChangedCallback(this, b, c, null, null)
            });
            x(Element.prototype, "removeAttributeNS", function (b, c) {
                if (1 !== this.__CE_state) return xb.call(this, b, c);
                var d = ia.call(this, b, c);
                xb.call(this, b, c);
                var e = ia.call(this, b, c);
                d !== e && a.attributeChangedCallback(this, c, d, e, b)
            });
            yb ? c(HTMLElement.prototype, yb) : zb ? c(Element.prototype,
                zb) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
            Ea(a, Element.prototype, {Z: ed, append: fd});
            gd(a, {ha: hd, Qa: id, replaceWith: jd, remove: kd})
        }

        function gd(a, b) {
            var c = Element.prototype;

            function d(b) {
                return function (c) {
                    for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                    e = [];
                    for (var f = [], g = 0; g < d.length; g++) {
                        var m = d[g];
                        m instanceof Element && q(m) && f.push(m);
                        if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) e.push(m); else e.push(m)
                    }
                    b.apply(this,
                        d);
                    for (d = 0; d < f.length; d++) a.a(f[d]);
                    if (q(this)) for (d = 0; d < e.length; d++) f = e[d], f instanceof Element && a.b(f)
                }
            }

            void 0 !== b.ha && (c.before = d(b.ha));
            void 0 !== b.ha && (c.after = d(b.Qa));
            void 0 !== b.replaceWith && x(c, "replaceWith", function (c) {
                for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                e = [];
                for (var h = [], u = 0; u < d.length; u++) {
                    var g = d[u];
                    g instanceof Element && q(g) && h.push(g);
                    if (g instanceof DocumentFragment) for (g = g.firstChild; g; g = g.nextSibling) e.push(g); else e.push(g)
                }
                u = q(this);
                b.replaceWith.apply(this,
                    d);
                for (d = 0; d < h.length; d++) a.a(h[d]);
                if (u) for (a.a(this), d = 0; d < e.length; d++) h = e[d], h instanceof Element && a.b(h)
            });
            void 0 !== b.remove && x(c, "remove", function () {
                var c = q(this);
                b.remove.call(this);
                c && a.a(this)
            })
        }

        function ld(a) {
            function b(b, d) {
                Object.defineProperty(b, "textContent", {
                    enumerable: d.enumerable, configurable: !0, get: d.get, set: function (b) {
                        if (this.nodeType === Node.TEXT_NODE) d.set.call(this, b); else {
                            var c = void 0;
                            if (this.firstChild) {
                                var e = this.childNodes, h = e.length;
                                if (0 < h && q(this)) {
                                    c = Array(h);
                                    for (var u =
                                        0; u < h; u++) c[u] = e[u]
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
                    b = Ab.call(this, b, d);
                    if (q(this)) for (d = 0; d < c.length; d++) a.b(c[d]);
                    return b
                }
                c = q(b);
                d = Ab.call(this, b, d);
                c && a.a(b);
                q(this) && a.b(b);
                return d
            });
            x(Node.prototype, "appendChild", function (b) {
                if (b instanceof DocumentFragment) {
                    var c = Array.prototype.slice.apply(b.childNodes);
                    b = ha.call(this, b);
                    if (q(this)) for (var e =
                        0; e < c.length; e++) a.b(c[e]);
                    return b
                }
                c = q(b);
                e = ha.call(this, b);
                c && a.a(b);
                q(this) && a.b(b);
                return e
            });
            x(Node.prototype, "cloneNode", function (b) {
                b = tb.call(this, b);
                this.ownerDocument.__CE_hasRegistry ? a.f(b) : a.l(b);
                return b
            });
            x(Node.prototype, "removeChild", function (b) {
                var c = q(b), e = Ca.call(this, b);
                c && a.a(b);
                return e
            });
            x(Node.prototype, "replaceChild", function (b, d) {
                if (b instanceof DocumentFragment) {
                    var c = Array.prototype.slice.apply(b.childNodes);
                    b = Bb.call(this, b, d);
                    if (q(this)) for (a.a(d), d = 0; d < c.length; d++) a.b(c[d]);
                    return b
                }
                c = q(b);
                var f = Bb.call(this, b, d), k = q(this);
                k && a.a(d);
                c && a.a(b);
                k && a.b(b);
                return f
            });
            Fa && Fa.get ? b(Node.prototype, Fa) : a.u(function (a) {
                b(a, {
                    enumerable: !0, configurable: !0, get: function () {
                        for (var a = [], b = 0; b < this.childNodes.length; b++) a.push(this.childNodes[b].textContent);
                        return a.join("")
                    }, set: function (a) {
                        for (; this.firstChild;) Ca.call(this, this.firstChild);
                        ha.call(this, document.createTextNode(a))
                    }
                })
            })
        }

        function md(a) {
            x(Document.prototype, "createElement", function (b) {
                if (this.__CE_hasRegistry) {
                    var c =
                        a.c(b);
                    if (c) return new c.constructor
                }
                b = Ba.call(this, b);
                a.g(b);
                return b
            });
            x(Document.prototype, "importNode", function (b, c) {
                b = nd.call(this, b, c);
                this.__CE_hasRegistry ? a.f(b) : a.l(b);
                return b
            });
            x(Document.prototype, "createElementNS", function (b, c) {
                if (this.__CE_hasRegistry && (null === b || "http://www.w3.org/1999/xhtml" === b)) {
                    var d = a.c(c);
                    if (d) return new d.constructor
                }
                b = od.call(this, b, c);
                a.g(b);
                return b
            });
            Ea(a, Document.prototype, {Z: pd, append: qd})
        }

        function Ea(a, b, c) {
            function d(b) {
                return function (c) {
                    for (var d = [],
                             e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                    e = [];
                    for (var f = [], g = 0; g < d.length; g++) {
                        var m = d[g];
                        m instanceof Element && q(m) && f.push(m);
                        if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) e.push(m); else e.push(m)
                    }
                    b.apply(this, d);
                    for (d = 0; d < f.length; d++) a.a(f[d]);
                    if (q(this)) for (d = 0; d < e.length; d++) f = e[d], f instanceof Element && a.b(f)
                }
            }

            void 0 !== c.Z && (b.prepend = d(c.Z));
            void 0 !== c.append && (b.append = d(c.append))
        }

        function rd(a) {
            window.HTMLElement = function () {
                function b() {
                    var b = this.constructor,
                        d = a.w(b);
                    if (!d) throw Error("The custom element being constructed was not registered with `customElements`.");
                    var e = d.constructionStack;
                    if (0 === e.length) return e = Ba.call(document, d.localName), Object.setPrototypeOf(e, b.prototype), e.__CE_state = 1, e.__CE_definition = d, a.g(e), e;
                    d = e.length - 1;
                    var f = e[d];
                    if (f === Cb) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
                    e[d] = Cb;
                    Object.setPrototypeOf(f, b.prototype);
                    a.g(f);
                    return f
                }

                b.prototype = sd.prototype;
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
            this.i = new Ga(a, document)
        }

        function Db() {
            var a = this;
            this.b = this.a = void 0;
            this.f = new Promise(function (b) {
                a.b = b;
                a.a && b(a.a)
            })
        }

        function Ga(a, b) {
            this.b = a;
            this.a = b;
            this.M = void 0;
            this.b.f(this.a);
            "loading" === this.a.readyState && (this.M = new MutationObserver(this.f.bind(this)), this.M.observe(this.a, {
                childList: !0,
                subtree: !0
            }))
        }

        function A() {
            this.o = new Map;
            this.m = new Map;
            this.j = [];
            this.h = !1
        }

        function l(a,
                   b, c) {
            if (a !== Eb) throw new TypeError("Illegal constructor");
            a = document.createDocumentFragment();
            a.__proto__ = l.prototype;
            a.F(b, c);
            return a
        }

        function ja(a) {
            if (!a.__shady || void 0 === a.__shady.firstChild) {
                a.__shady = a.__shady || {};
                a.__shady.firstChild = Ha(a);
                a.__shady.lastChild = Ia(a);
                Fb(a);
                for (var b = a.__shady.childNodes = R(a), c = 0, d; c < b.length && (d = b[c]); c++) d.__shady = d.__shady || {}, d.__shady.parentNode = a, d.__shady.nextSibling = b[c + 1] || null, d.__shady.previousSibling = b[c - 1] || null, Gb(d)
            }
        }

        function td(a) {
            var b = a && a.M;
            b && (b.X.delete(a.La), b.X.size || (a.Ma.__shady.S = null))
        }

        function ud(a, b) {
            a.__shady = a.__shady || {};
            a.__shady.S || (a.__shady.S = new ka);
            a.__shady.S.X.add(b);
            var c = a.__shady.S;
            return {
                La: b, M: c, Ma: a, takeRecords: function () {
                    return c.takeRecords()
                }
            }
        }

        function ka() {
            this.a = !1;
            this.addedNodes = [];
            this.removedNodes = [];
            this.X = new Set
        }

        function S(a) {
            return a.__shady && void 0 !== a.__shady.firstChild
        }

        function F(a) {
            return "ShadyRoot" === a.Ha
        }

        function Y(a) {
            a = a.getRootNode();
            if (F(a)) return a
        }

        function Ja(a, b) {
            if (a && b) for (var c =
                Object.getOwnPropertyNames(b), d = 0, e; d < c.length && (e = c[d]); d++) {
                var f = Object.getOwnPropertyDescriptor(b, e);
                f && Object.defineProperty(a, e, f)
            }
        }

        function Ka(a, b) {
            for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
            for (d = 0; d < c.length; d++) Ja(a, c[d]);
            return a
        }

        function vd(a, b) {
            for (var c in b) a[c] = b[c]
        }

        function Hb(a) {
            La.push(a);
            Ma.textContent = Ib++
        }

        function Jb(a, b) {
            for (; b;) {
                if (b == a) return !0;
                b = b.parentNode
            }
            return !1
        }

        function Kb(a) {
            Na || (Na = !0, Hb(la));
            Z.push(a)
        }

        function la() {
            Na = !1;
            for (var a = !!Z.length; Z.length;) Z.shift()();
            return a
        }

        function wd(a, b) {
            var c = b.getRootNode();
            return a.map(function (a) {
                var b = c === a.target.getRootNode();
                if (b && a.addedNodes) {
                    if (b = Array.from(a.addedNodes).filter(function (a) {
                            return c === a.getRootNode()
                        }), b.length) return a = Object.create(a), Object.defineProperty(a, "addedNodes", {
                        value: b,
                        configurable: !0
                    }), a
                } else if (b) return a
            }).filter(function (a) {
                return a
            })
        }

        function Lb(a) {
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

        function Mb(a) {
            for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;
            return b
        }

        function Oa(a, b) {
            "template" === a.localName && (a = a.content);
            for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, k; e < f && (k = d[e]); e++) {
                a:{
                    var h = k;
                    var u = a;
                    var g = b;
                    switch (h.nodeType) {
                        case Node.ELEMENT_NODE:
                            for (var m = h.localName, l = "<" + m, p = h.attributes, n = 0; u = p[n]; n++) l += " " + u.name + '="' + u.value.replace(xd, Lb) + '"';
                            l += ">";
                            h = yd[m] ? l : l + Oa(h, g) + "</" + m + ">";
                            break a;
                        case Node.TEXT_NODE:
                            h = h.data;
                            h = u && zd[u.localName] ? h : h.replace(Ad, Lb);
                            break a;
                        case Node.COMMENT_NODE:
                            h =
                                "\x3c!--" + h.data + "--\x3e";
                            break a;
                        default:
                            throw window.console.error(h), Error("not implemented");
                    }
                }
                c += h
            }
            return c
        }

        function T(a) {
            B.currentNode = a;
            return B.parentNode()
        }

        function Ha(a) {
            B.currentNode = a;
            return B.firstChild()
        }

        function Ia(a) {
            B.currentNode = a;
            return B.lastChild()
        }

        function Nb(a) {
            B.currentNode = a;
            return B.previousSibling()
        }

        function Ob(a) {
            B.currentNode = a;
            return B.nextSibling()
        }

        function R(a) {
            var b = [];
            B.currentNode = a;
            for (a = B.firstChild(); a;) b.push(a), a = B.nextSibling();
            return b
        }

        function Pb(a) {
            C.currentNode =
                a;
            return C.parentNode()
        }

        function Qb(a) {
            C.currentNode = a;
            return C.firstChild()
        }

        function Rb(a) {
            C.currentNode = a;
            return C.lastChild()
        }

        function Sb(a) {
            C.currentNode = a;
            return C.previousSibling()
        }

        function Tb(a) {
            C.currentNode = a;
            return C.nextSibling()
        }

        function Ub(a) {
            var b = [];
            C.currentNode = a;
            for (a = C.firstChild(); a;) b.push(a), a = C.nextSibling();
            return b
        }

        function Vb(a) {
            return Oa(a, function (a) {
                return R(a)
            })
        }

        function Wb(a) {
            switch (a.nodeType) {
                case Node.ELEMENT_NODE:
                case Node.DOCUMENT_FRAGMENT_NODE:
                    a = document.createTreeWalker(a,
                        NodeFilter.SHOW_TEXT, null, !1);
                    for (var b = "", c; c = a.nextNode();) b += c.nodeValue;
                    return b;
                default:
                    return a.nodeValue
            }
        }

        function J(a, b, c) {
            for (var d in b) {
                var e = Object.getOwnPropertyDescriptor(a, d);
                e && e.configurable || !e && c ? Object.defineProperty(a, d, b[d]) : c && console.warn("Could not define", d, "on", a)
            }
        }

        function O(a) {
            J(a, Xb);
            J(a, Pa);
            J(a, Qa)
        }

        function Yb(a, b, c) {
            Gb(a);
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
            b.__shady.childNodes = null
        }

        function Ra(a, b, c) {
            if (b === a) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
            if (c) {
                var d = c.__shady && c.__shady.parentNode;
                if (void 0 !== d &&
                    d !== a || void 0 === d && T(c) !== a) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
            }
            if (c === b) return b;
            b.parentNode && Sa(b.parentNode, b);
            d = Y(a);
            var e;
            if (e = d) a:{
                if (!b.__noInsertionPoint) {
                    var f;
                    "slot" === b.localName ? f = [b] : b.querySelectorAll && (f = b.querySelectorAll("slot"));
                    if (f && f.length) {
                        e = f;
                        break a
                    }
                }
                e = void 0
            }
            (f = e) && d.Ka(f);
            d && ("slot" === a.localName || f) && d.L();
            if (S(a)) {
                d = c;
                Fb(a);
                a.__shady = a.__shady || {};
                void 0 !== a.__shady.firstChild &&
                (a.__shady.childNodes = null);
                if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                    f = b.childNodes;
                    for (e = 0; e < f.length; e++) Yb(f[e], a, d);
                    b.__shady = b.__shady || {};
                    d = void 0 !== b.__shady.firstChild ? null : void 0;
                    b.__shady.firstChild = b.__shady.lastChild = d;
                    b.__shady.childNodes = d
                } else Yb(b, a, d);
                if (Ta(a)) {
                    a.__shady.root.L();
                    var k = !0
                } else a.__shady.root && (k = !0)
            }
            k || (k = F(a) ? a.host : a, c ? (c = Zb(c), Ua.call(k, b, c)) : $b.call(k, b));
            ac(a, b);
            return b
        }

        function Sa(a, b) {
            if (b.parentNode !== a) throw Error("The node to be removed is not a child of this node: " +
                b);
            var c = Y(b);
            if (S(a)) {
                b.__shady = b.__shady || {};
                a.__shady = a.__shady || {};
                b === a.__shady.firstChild && (a.__shady.firstChild = b.__shady.nextSibling);
                b === a.__shady.lastChild && (a.__shady.lastChild = b.__shady.previousSibling);
                var d = b.__shady.previousSibling;
                var e = b.__shady.nextSibling;
                d && (d.__shady = d.__shady || {}, d.__shady.nextSibling = e);
                e && (e.__shady = e.__shady || {}, e.__shady.previousSibling = d);
                b.__shady.parentNode = b.__shady.previousSibling = b.__shady.nextSibling = void 0;
                void 0 !== a.__shady.childNodes && (a.__shady.childNodes =
                    null);
                if (Ta(a)) {
                    a.__shady.root.L();
                    var f = !0
                }
            }
            bc(b);
            c && ((e = a && "slot" === a.localName) && (f = !0), ((d = c.Na(b)) || e) && c.L());
            f || (f = F(a) ? a.host : a, (!a.__shady.root && "slot" !== b.localName || f === T(b)) && aa.call(f, b));
            ac(a, null, b);
            return b
        }

        function bc(a) {
            if (a.__shady && void 0 !== a.__shady.ka) for (var b = a.childNodes, c = 0, d = b.length, e; c < d && (e = b[c]); c++) bc(e);
            a.__shady && (a.__shady.ka = void 0)
        }

        function Zb(a) {
            var b = a;
            a && "slot" === a.localName && (b = (b = a.__shady && a.__shady.P) && b.length ? b[0] : Zb(a.nextSibling));
            return b
        }

        function Ta(a) {
            return (a =
                a && a.__shady && a.__shady.root) && a.pa()
        }

        function cc(a, b) {
            "slot" === b ? (a = a.parentNode, Ta(a) && a.__shady.root.L()) : "slot" === a.localName && "name" === b && (b = Y(a)) && (b.Pa(a), b.L())
        }

        function ac(a, b, c) {
            if (a = a.__shady && a.__shady.S) b && a.addedNodes.push(b), c && a.removedNodes.push(c), a.$a()
        }

        function dc(a) {
            if (a && a.nodeType) {
                a.__shady = a.__shady || {};
                var b = a.__shady.ka;
                void 0 === b && (F(a) ? b = a : b = (b = a.parentNode) ? dc(b) : a, ba.call(document.documentElement, a) && (a.__shady.ka = b));
                return b
            }
        }

        function ma(a, b, c) {
            var d = [];
            ec(a.childNodes,
                b, c, d);
            return d
        }

        function ec(a, b, c, d) {
            for (var e = 0, f = a.length, k; e < f && (k = a[e]); e++) {
                var h;
                if (h = k.nodeType === Node.ELEMENT_NODE) {
                    h = k;
                    var u = b, g = c, m = d, l = u(h);
                    l && m.push(h);
                    g && g(l) ? h = l : (ec(h.childNodes, u, g, m), h = void 0)
                }
                if (h) break
            }
        }

        function fc(a) {
            a = a.getRootNode();
            F(a) && a.ra()
        }

        function gc(a, b, c) {
            na || (na = window.ShadyCSS && window.ShadyCSS.ScopingShim);
            na && "class" === b ? na.setElementClass(a, c) : (hc.call(a, b, c), cc(a, b))
        }

        function ic(a, b) {
            if (a.ownerDocument !== document) return Va.call(document, a, b);
            var c = Va.call(document,
                a, !1);
            if (b) {
                a = a.childNodes;
                b = 0;
                for (var d; b < a.length; b++) d = ic(a[b], !0), c.appendChild(d)
            }
            return c
        }

        function Wa(a, b) {
            var c = [], d = a;
            for (a = a === window ? window : a.getRootNode(); d;) c.push(d), d = d.assignedSlot ? d.assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.parentNode;
            c[c.length - 1] === document && c.push(window);
            return c
        }

        function jc(a, b) {
            if (!F) return a;
            a = Wa(a, !0);
            for (var c = 0, d, e, f, k; c < b.length; c++) if (d = b[c], f = d === window ? window : d.getRootNode(), f !== e && (k = a.indexOf(f), e = f), !F(f) ||
                -1 < k) return d
        }

        function Xa(a) {
            function b(b, d) {
                b = new a(b, d);
                b.da = d && !!d.composed;
                return b
            }

            vd(b, a);
            b.prototype = a.prototype;
            return b
        }

        function kc(a, b, c) {
            if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && a.target !== a.relatedTarget && (e.call(b, a), !a.Fa); d++) ;
        }

        function Bd(a) {
            var b = a.composedPath();
            Object.defineProperty(a, "currentTarget", {
                get: function () {
                    return d
                }, configurable: !0
            });
            for (var c = b.length - 1; 0 <= c; c--) {
                var d = b[c];
                kc(a, d, "capture");
                if (a.ea) return
            }
            Object.defineProperty(a,
                "eventPhase", {
                    get: function () {
                        return Event.AT_TARGET
                    }
                });
            var e;
            for (c = 0; c < b.length; c++) {
                d = b[c];
                var f = d.__shady && d.__shady.root;
                if (0 === c || f && f === e) if (kc(a, d, "bubble"), d !== window && (e = d.getRootNode()), a.ea) break
            }
        }

        function lc(a, b, c, d, e, f) {
            for (var k = 0; k < a.length; k++) {
                var h = a[k], g = h.type, l = h.capture, m = h.once, n = h.passive;
                if (b === h.node && c === g && d === l && e === m && f === n) return k
            }
            return -1
        }

        function mc(a, b, c) {
            if (b) {
                if ("object" === typeof c) {
                    var d = !!c.capture;
                    var e = !!c.once;
                    var f = !!c.passive
                } else d = !!c, f = e = !1;
                var k = c && c.fa ||
                    this, h = b[ca];
                if (h) {
                    if (-1 < lc(h, k, a, d, e, f)) return
                } else b[ca] = [];
                h = function (d) {
                    e && this.removeEventListener(a, b, c);
                    d.__target || nc(d);
                    if (k !== this) {
                        var f = Object.getOwnPropertyDescriptor(d, "currentTarget");
                        Object.defineProperty(d, "currentTarget", {
                            get: function () {
                                return k
                            }, configurable: !0
                        })
                    }
                    if (d.composed || -1 < d.composedPath().indexOf(k)) if (d.target === d.relatedTarget) d.eventPhase === Event.BUBBLING_PHASE && d.stopImmediatePropagation(); else if (d.eventPhase === Event.CAPTURING_PHASE || d.bubbles || d.target === k) {
                        var h =
                            "object" === typeof b && b.handleEvent ? b.handleEvent(d) : b.call(k, d);
                        k !== this && (f ? (Object.defineProperty(d, "currentTarget", f), f = null) : delete d.currentTarget);
                        return h
                    }
                };
                b[ca].push({node: this, type: a, capture: d, once: e, passive: f, eb: h});
                Ya[a] ? (this.__handlers = this.__handlers || {}, this.__handlers[a] = this.__handlers[a] || {
                    capture: [],
                    bubble: []
                }, this.__handlers[a][d ? "capture" : "bubble"].push(h)) : (this instanceof Window ? oc : pc).call(this, a, h, c)
            }
        }

        function qc(a, b, c) {
            if (b) {
                if ("object" === typeof c) {
                    var d = !!c.capture;
                    var e =
                        !!c.once;
                    var f = !!c.passive
                } else d = !!c, f = e = !1;
                var k = c && c.fa || this, h = void 0;
                var g = null;
                try {
                    g = b[ca]
                } catch (ne) {
                }
                g && (e = lc(g, k, a, d, e, f), -1 < e && (h = g.splice(e, 1)[0].eb, g.length || (b[ca] = void 0)));
                (this instanceof Window ? rc : sc).call(this, a, h || b, c);
                h && Ya[a] && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][d ? "capture" : "bubble"], h = a.indexOf(h), -1 < h && a.splice(h, 1))
            }
        }

        function Cd() {
            for (var a in Ya) window.addEventListener(a, function (a) {
                a.__target || (nc(a), Bd(a))
            }, !0)
        }

        function nc(a) {
            a.__target = a.target;
            a.na =
                a.relatedTarget;
            if (D.R) {
                var b = tc, c = Object.getPrototypeOf(a);
                if (!c.hasOwnProperty("__patchProto")) {
                    var d = Object.create(c);
                    d.gb = c;
                    Ja(d, b);
                    c.__patchProto = d
                }
                a.__proto__ = c.__patchProto
            } else Ja(a, tc)
        }

        function da(a, b) {
            return {index: a, T: [], W: b}
        }

        function Dd(a, b, c, d) {
            var e = 0, f = 0, k = 0, h = 0, g = Math.min(b - e, d - f);
            if (0 == e && 0 == f) a:{
                for (k = 0; k < g; k++) if (a[k] !== c[k]) break a;
                k = g
            }
            if (b == a.length && d == c.length) {
                h = a.length;
                for (var l = c.length, m = 0; m < g - k && Ed(a[--h], c[--l]);) m++;
                h = m
            }
            e += k;
            f += k;
            b -= h;
            d -= h;
            if (0 == b - e && 0 == d - f) return [];
            if (e == b) {
                for (b = da(e, 0); f < d;) b.T.push(c[f++]);
                return [b]
            }
            if (f == d) return [da(e, b - e)];
            g = e;
            k = f;
            d = d - k + 1;
            h = b - g + 1;
            b = Array(d);
            for (l = 0; l < d; l++) b[l] = Array(h), b[l][0] = l;
            for (l = 0; l < h; l++) b[0][l] = l;
            for (l = 1; l < d; l++) for (m = 1; m < h; m++) if (a[g + m - 1] === c[k + l - 1]) b[l][m] = b[l - 1][m - 1]; else {
                var n = b[l - 1][m] + 1, p = b[l][m - 1] + 1;
                b[l][m] = n < p ? n : p
            }
            g = b.length - 1;
            k = b[0].length - 1;
            d = b[g][k];
            for (a = []; 0 < g || 0 < k;) 0 == g ? (a.push(2), k--) : 0 == k ? (a.push(3), g--) : (h = b[g - 1][k - 1], l = b[g - 1][k], m = b[g][k - 1], n = l < m ? l < h ? l : h : m < h ? m : h, n == h ? (h == d ? a.push(0) : (a.push(1),
                d = h), g--, k--) : n == l ? (a.push(3), g--, d = l) : (a.push(2), k--, d = m));
            a.reverse();
            b = void 0;
            g = [];
            for (k = 0; k < a.length; k++) switch (a[k]) {
                case 0:
                    b && (g.push(b), b = void 0);
                    e++;
                    f++;
                    break;
                case 1:
                    b || (b = da(e, 0));
                    b.W++;
                    e++;
                    b.T.push(c[f]);
                    f++;
                    break;
                case 2:
                    b || (b = da(e, 0));
                    b.W++;
                    e++;
                    break;
                case 3:
                    b || (b = da(e, 0)), b.T.push(c[f]), f++
            }
            b && g.push(b);
            return g
        }

        function Ed(a, b) {
            return a === b
        }

        function uc(a) {
            var b = [];
            do b.unshift(a); while (a = a.parentNode);
            return b
        }

        function vc(a) {
            fc(a);
            return a.__shady && a.__shady.assignedSlot || null
        }

        function K(a,
                   b) {
            for (var c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++) {
                var e = c[d], f = Object.getOwnPropertyDescriptor(b, e);
                f.value ? a[e] = f.value : Object.defineProperty(a, e, f)
            }
        }

        function Fd() {
            var a = window.customElements && window.customElements.nativeHTMLElement || HTMLElement;
            K(window.Node.prototype, Gd);
            K(window.Window.prototype, Hd);
            K(window.Text.prototype, Id);
            K(window.DocumentFragment.prototype, Za);
            K(window.Element.prototype, wc);
            K(window.Document.prototype, xc);
            window.HTMLSlotElement && K(window.HTMLSlotElement.prototype,
                yc);
            K(a.prototype, Jd);
            D.R && (O(window.Node.prototype), O(window.Text.prototype), O(window.DocumentFragment.prototype), O(window.Element.prototype), O(a.prototype), O(window.Document.prototype), window.HTMLSlotElement && O(window.HTMLSlotElement.prototype))
        }

        function zc(a) {
            var b = Kd.has(a);
            a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);
            return !b && a
        }

        function q(a) {
            var b = a.isConnected;
            if (void 0 !== b) return b;
            for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ?
                a.host : void 0);
            return !(!a || !(a.__CE_isImportDocument || a instanceof Document))
        }

        function $a(a, b) {
            for (; b && b !== a && !b.nextSibling;) b = b.parentNode;
            return b && b !== a ? b.nextSibling : null
        }

        function N(a, b, c) {
            c = c ? c : new Set;
            for (var d = a; d;) {
                if (d.nodeType === Node.ELEMENT_NODE) {
                    var e = d;
                    b(e);
                    var f = e.localName;
                    if ("link" === f && "import" === e.getAttribute("rel")) {
                        d = e.import;
                        if (d instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling) N(d, b, c);
                        d = $a(a, e);
                        continue
                    } else if ("template" === f) {
                        d = $a(a, e);
                        continue
                    }
                    if (e =
                            e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) N(e, b, c)
                }
                d = d.firstChild ? d.firstChild : $a(a, d)
            }
        }

        function x(a, b, c) {
            a[b] = c
        }

        function ab(a) {
            a = a.replace(E.Sa, "").replace(E.port, "");
            var b = Ac, c = a, d = new ya;
            d.start = 0;
            d.end = c.length;
            for (var e = d, f = 0, k = c.length; f < k; f++) if ("{" === c[f]) {
                e.rules || (e.rules = []);
                var h = e, g = h.rules[h.rules.length - 1] || null;
                e = new ya;
                e.start = f + 1;
                e.parent = h;
                e.previous = g;
                h.rules.push(e)
            } else "}" === c[f] && (e.end = f + 1, e = e.parent || d);
            return b(d, a)
        }

        function Ac(a, b) {
            var c = b.substring(a.start,
                a.end - 1);
            a.parsedCssText = a.cssText = c.trim();
            a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = Ld(c), c = c.replace(E.xa, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = H.MEDIA_RULE : c.match(E.Wa) && (a.type = H.ca, a.keyframesName = a.selector.split(E.xa).pop()) : a.type = 0 === c.indexOf("--") ? H.la : H.STYLE_RULE);
            if (c = a.rules) for (var d = 0, e = c.length, f; d < e && (f = c[d]); d++) Ac(f, b);
            return a
        }

        function Ld(a) {
            return a.replace(/\\([0-9a-f]{1,6})\s/gi,
                function (a, c) {
                    a = c;
                    for (c = 6 - a.length; c--;) a = "0" + a;
                    return "\\" + a
                })
        }

        function Bc(a, b, c) {
            c = void 0 === c ? "" : c;
            var d = "";
            if (a.cssText || a.rules) {
                var e = a.rules, f;
                if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));
                if (f) {
                    f = 0;
                    for (var k = e.length, h; f < k && (h = e[f]); f++) d = Bc(h, b, d)
                } else b ? b = a.cssText : (b = a.cssText, b = b.replace(E.sa, "").replace(E.wa, ""), b = b.replace(E.Xa, "").replace(E.bb, "")), (d = b.trim()) && (d = "  " + d + "\n")
            }
            d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));
            return c
        }

        function Cc(a) {
            z =
                a && a.shimcssproperties ? !1 : w || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"))
        }

        function U(a, b) {
            if (!a) return "";
            "string" === typeof a && (a = ab(a));
            b && V(a, b);
            return Bc(a, z)
        }

        function oa(a) {
            !a.__cssRules && a.textContent && (a.__cssRules = ab(a.textContent));
            return a.__cssRules || null
        }

        function Dc(a) {
            return !!a.parent && a.parent.type === H.ca
        }

        function V(a, b, c, d) {
            if (a) {
                var e = !1, f = a.type;
                if (d && f === H.MEDIA_RULE) {
                    var k = a.selector.match(Md);
                    k && (window.matchMedia(k[1]).matches || (e = !0))
                }
                f === H.STYLE_RULE ? b(a) : c && f === H.ca ? c(a) : f === H.la && (e = !0);
                if ((a = a.rules) && !e) {
                    e = 0;
                    f = a.length;
                    for (var h; e < f && (h = a[e]); e++) V(h, b, c, d)
                }
            }
        }

        function bb(a, b, c, d) {
            var e = document.createElement("style");
            b && e.setAttribute("scope", b);
            e.textContent = a;
            Ec(e, c, d);
            return e
        }

        function Ec(a, b, c) {
            b = b || document.head;
            b.insertBefore(a, c && c.nextSibling || b.firstChild);
            P ? a.compareDocumentPosition(P) === Node.DOCUMENT_POSITION_PRECEDING && (P = a) : P = a
        }

        function Fc(a, b) {
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
            a = Fc(a.substring(e + 1), b);
            e = d.indexOf(",");
            return -1 === e ? b(c, d.trim(), "", a) : b(c, d.substring(0, e).trim(), d.substring(e + 1).trim(), a)
        }

        function pa(a, b) {
            w ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b)
        }

        function Q(a) {
            var b = a.localName, c = "";
            b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") ||
                "") : (b = a.is, c = a.extends);
            return {is: b, U: c}
        }

        function Gc(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
                    var e = c.addedNodes[d];
                    if (e.nodeType === Node.ELEMENT_NODE) {
                        var f = e.getRootNode();
                        var k = e;
                        var h = [];
                        k.classList ? h = Array.from(k.classList) : k instanceof window.SVGElement && k.hasAttribute("class") && (h = k.getAttribute("class").split(/\s+/));
                        k = h;
                        h = k.indexOf(t.a);
                        if ((k = -1 < h ? k[h + 1] : "") && f === e.ownerDocument) t.b(e,
                            k, !0); else if (f.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (f = f.host)) if (f = Q(f).is, k === f) for (e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + t.a + ")"), f = 0; f < e.length; f++) t.h(e[f], k); else k && t.b(e, k, !0), t.b(e, f)
                    }
                }
            }
        }

        function Nd(a) {
            if (a = qa[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1
        }

        function Hc(a) {
            return a._applyShimCurrentVersion === a._applyShimNextVersion
        }

        function Od(a) {
            a._applyShimValidatingVersion = a._applyShimNextVersion;
            a.b || (a.b = !0, Pd.then(function () {
                a._applyShimCurrentVersion = a._applyShimNextVersion;
                a.b = !1
            }))
        }

        function rb(a) {
            requestAnimationFrame(function () {
                Ic ? Ic(a) : (cb || (cb = new Promise(function (a) {
                    db = a
                }), "complete" === document.readyState ? db() : document.addEventListener("readystatechange", function () {
                    "complete" === document.readyState && db()
                })), cb.then(function () {
                    a && a()
                }))
            })
        }

        function Jc() {
            requestAnimationFrame(function () {
                window.WebComponents.ready = !0;
                window.document.dispatchEvent(new CustomEvent("WebComponentsReady", {bubbles: !0}))
            })
        }

        function Kc() {
            Jc();
            eb.removeEventListener("readystatechange", Kc)
        }

        var D = window.ShadyDOM || {};
        D.Ta = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
        var fb = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
        D.R = !!(fb && fb.configurable && fb.get);
        D.va = D.force || !D.Ta;
        var W = Element.prototype,
            Lc = W.matches || W.matchesSelector || W.mozMatchesSelector || W.msMatchesSelector || W.oMatchesSelector || W.webkitMatchesSelector,
            Ma = document.createTextNode(""), Ib = 0, La = [];
        (new MutationObserver(function () {
            for (; La.length;) try {
                La.shift()()
            } catch (a) {
                throw Ma.textContent = Ib++, a;
            }
        })).observe(Ma, {characterData: !0});
        var Qd = !!document.contains, Z = [], Na;
        la.list = Z;
        ka.prototype.$a = function () {
            var a = this;
            this.a || (this.a = !0, Hb(function () {
                a.b()
            }))
        };
        ka.prototype.b = function () {
            if (this.a) {
                this.a = !1;
                var a = this.takeRecords();
                a.length && this.X.forEach(function (b) {
                    b(a)
                })
            }
        };
        ka.prototype.takeRecords = function () {
            if (this.addedNodes.length || this.removedNodes.length) {
                var a =
                    [{addedNodes: this.addedNodes, removedNodes: this.removedNodes}];
                this.addedNodes = [];
                this.removedNodes = [];
                return a
            }
            return []
        };
        var $b = Element.prototype.appendChild, Ua = Element.prototype.insertBefore, aa = Element.prototype.removeChild,
            hc = Element.prototype.setAttribute, Mc = Element.prototype.removeAttribute,
            gb = Element.prototype.cloneNode, Va = Document.prototype.importNode,
            pc = Element.prototype.addEventListener, sc = Element.prototype.removeEventListener,
            oc = Window.prototype.addEventListener, rc = Window.prototype.removeEventListener,
            hb = Element.prototype.dispatchEvent, ba = Node.prototype.contains || HTMLElement.prototype.contains,
            Rd = Object.freeze({
                appendChild: $b,
                insertBefore: Ua,
                removeChild: aa,
                setAttribute: hc,
                removeAttribute: Mc,
                cloneNode: gb,
                importNode: Va,
                addEventListener: pc,
                removeEventListener: sc,
                kb: oc,
                lb: rc,
                dispatchEvent: hb,
                querySelector: Element.prototype.querySelector,
                querySelectorAll: Element.prototype.querySelectorAll,
                contains: ba
            }), xd = /[&\u00A0"]/g, Ad = /[&\u00A0<>]/g,
            yd = Mb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
            zd = Mb("style script xmp iframe noembed noframes plaintext noscript".split(" ")),
            B = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
            C = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1), Sd = Object.freeze({
                parentNode: T,
                firstChild: Ha,
                lastChild: Ia,
                previousSibling: Nb,
                nextSibling: Ob,
                childNodes: R,
                parentElement: Pb,
                firstElementChild: Qb,
                lastElementChild: Rb,
                previousElementSibling: Sb,
                nextElementSibling: Tb,
                children: Ub,
                innerHTML: Vb,
                textContent: Wb
            }), ib = Object.getOwnPropertyDescriptor(Element.prototype,
            "innerHTML") || Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML"),
            ra = document.implementation.createHTMLDocument("inert").createElement("div"),
            jb = Object.getOwnPropertyDescriptor(Document.prototype, "activeElement"), Xb = {
                parentElement: {
                    get: function () {
                        var a = this.__shady && this.__shady.parentNode;
                        a && a.nodeType !== Node.ELEMENT_NODE && (a = null);
                        return void 0 !== a ? a : Pb(this)
                    }, configurable: !0
                }, parentNode: {
                    get: function () {
                        var a = this.__shady && this.__shady.parentNode;
                        return void 0 !== a ? a : T(this)
                    }, configurable: !0
                },
                nextSibling: {
                    get: function () {
                        var a = this.__shady && this.__shady.nextSibling;
                        return void 0 !== a ? a : Ob(this)
                    }, configurable: !0
                }, previousSibling: {
                    get: function () {
                        var a = this.__shady && this.__shady.previousSibling;
                        return void 0 !== a ? a : Nb(this)
                    }, configurable: !0
                }, className: {
                    get: function () {
                        return this.getAttribute("class") || ""
                    }, set: function (a) {
                        this.setAttribute("class", a)
                    }, configurable: !0
                }, nextElementSibling: {
                    get: function () {
                        if (this.__shady && void 0 !== this.__shady.nextSibling) {
                            for (var a = this.nextSibling; a && a.nodeType !==
                            Node.ELEMENT_NODE;) a = a.nextSibling;
                            return a
                        }
                        return Tb(this)
                    }, configurable: !0
                }, previousElementSibling: {
                    get: function () {
                        if (this.__shady && void 0 !== this.__shady.previousSibling) {
                            for (var a = this.previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.previousSibling;
                            return a
                        }
                        return Sb(this)
                    }, configurable: !0
                }
            }, Pa = {
                childNodes: {
                    get: function () {
                        if (S(this)) {
                            if (!this.__shady.childNodes) {
                                this.__shady.childNodes = [];
                                for (var a = this.firstChild; a; a = a.nextSibling) this.__shady.childNodes.push(a)
                            }
                            var b = this.__shady.childNodes
                        } else b =
                            R(this);
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
                        return void 0 !== a ? a : Ha(this)
                    }, configurable: !0
                }, lastChild: {
                    get: function () {
                        var a = this.__shady && this.__shady.lastChild;
                        return void 0 !== a ? a : Ia(this)
                    }, configurable: !0
                }, textContent: {
                    get: function () {
                        if (S(this)) {
                            for (var a = [], b = 0, c = this.childNodes, d; d = c[b]; b++) d.nodeType !== Node.COMMENT_NODE &&
                            a.push(d.textContent);
                            return a.join("")
                        }
                        return Wb(this)
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
                            for (var a = this.firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.nextSibling;
                            return a
                        }
                        return Qb(this)
                    }, configurable: !0
                }, lastElementChild: {
                    get: function () {
                        if (this.__shady && void 0 !== this.__shady.lastChild) {
                            for (var a = this.lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.previousSibling;
                            return a
                        }
                        return Rb(this)
                    }, configurable: !0
                }, children: {
                    get: function () {
                        var a;
                        S(this) ? a = Array.prototype.filter.call(this.childNodes, function (a) {
                            return a.nodeType === Node.ELEMENT_NODE
                        }) : a = Ub(this);
                        a.item = function (b) {
                            return a[b]
                        };
                        return a
                    }, configurable: !0
                }, innerHTML: {
                    get: function () {
                        var a = "template" ===
                        this.localName ? this.content : this;
                        return S(this) ? Oa(a) : Vb(a)
                    }, set: function (a) {
                        for (var b = "template" === this.localName ? this.content : this; b.firstChild;) b.removeChild(b.firstChild);
                        for (ib && ib.set ? ib.set.call(ra, a) : ra.innerHTML = a; ra.firstChild;) b.appendChild(ra.firstChild)
                    }, configurable: !0
                }
            }, Nc = {
                shadowRoot: {
                    get: function () {
                        return this.__shady && this.__shady.Ya || null
                    }, configurable: !0
                }
            }, Qa = {
                activeElement: {
                    get: function () {
                        var a = jb && jb.get ? jb.get.call(document) : D.R ? void 0 : document.activeElement;
                        if (a && a.nodeType) {
                            var b =
                                !!F(this);
                            if (this === document || b && this.host !== a && ba.call(this.host, a)) {
                                for (b = Y(a); b && b !== this;) a = b.host, b = Y(a);
                                a = this === document ? b ? null : a : b === this ? a : null
                            } else a = null
                        } else a = null;
                        return a
                    }, set: function () {
                    }, configurable: !0
                }
            }, Gb = D.R ? function () {
            } : function (a) {
                a.__shady && a.__shady.Ia || (a.__shady = a.__shady || {}, a.__shady.Ia = !0, J(a, Xb, !0))
            }, Fb = D.R ? function () {
            } : function (a) {
                a.__shady && a.__shady.Ga || (a.__shady = a.__shady || {}, a.__shady.Ga = !0, J(a, Pa, !0), J(a, Nc, !0))
            }, na = null, ca = "__eventWrappers" + Date.now(), Td = {
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
            }, tc = {
                get composed() {
                    !1 !== this.isTrusted && void 0 === this.da && (this.da = Td[this.type]);
                    return this.da || !1
                }, composedPath: function () {
                    this.ma || (this.ma = Wa(this.__target, this.composed));
                    return this.ma
                }, get target() {
                    return jc(this.currentTarget, this.composedPath())
                }, get relatedTarget() {
                    if (!this.na) return null;
                    this.oa || (this.oa = Wa(this.na, !0));
                    return jc(this.currentTarget, this.oa)
                }, stopPropagation: function () {
                    Event.prototype.stopPropagation.call(this);
                    this.ea = !0
                }, stopImmediatePropagation: function () {
                    Event.prototype.stopImmediatePropagation.call(this);
                    this.ea = this.Fa = !0
                }
            }, Ya = {focus: !0, blur: !0}, Ud = Xa(window.Event), Vd = Xa(window.CustomEvent), Wd = Xa(window.MouseEvent),
            Eb = {};
        l.prototype = Object.create(DocumentFragment.prototype);
        l.prototype.F = function (a, b) {
            this.Ha = "ShadyRoot";
            ja(a);
            ja(this);
            this.host = a;
            this.H = b && b.mode;
            a.__shady = a.__shady || {};
            a.__shady.root = this;
            a.__shady.Ya = "closed" !== this.H ? this : null;
            this.V = !1;
            this.b = [];
            this.a = {};
            this.c = [];
            b = R(a);
            for (var c =
                0, d = b.length; c < d; c++) aa.call(a, b[c])
        };
        l.prototype.L = function () {
            var a = this;
            this.V || (this.V = !0, Kb(function () {
                return a.ra()
            }))
        };
        l.prototype.K = function () {
            for (var a, b = this; b;) b.V && (a = b), b = b.Oa();
            return a
        };
        l.prototype.Oa = function () {
            var a = this.host.getRootNode();
            if (F(a)) for (var b = this.host.childNodes, c = 0, d; c < b.length; c++) if (d = b[c], this.j(d)) return a
        };
        l.prototype.ra = function () {
            var a = this.K();
            a && a._renderRoot()
        };
        l.prototype._renderRoot = function () {
            this.V = !1;
            this.B();
            this.u()
        };
        l.prototype.B = function () {
            this.f();
            for (var a = 0, b; a < this.b.length; a++) b = this.b[a], this.o(b);
            for (b = this.host.firstChild; b; b = b.nextSibling) this.h(b);
            for (a = 0; a < this.b.length; a++) {
                b = this.b[a];
                if (!b.__shady.assignedNodes.length) for (var c = b.firstChild; c; c = c.nextSibling) this.h(c, b);
                c = b.parentNode;
                (c = c.__shady && c.__shady.root) && c.pa() && c._renderRoot();
                this.g(b.__shady.P, b.__shady.assignedNodes);
                if (c = b.__shady.qa) {
                    for (var d = 0; d < c.length; d++) c[d].__shady.ga = null;
                    b.__shady.qa = null;
                    c.length > b.__shady.assignedNodes.length && (b.__shady.ia = !0)
                }
                b.__shady.ia &&
                (b.__shady.ia = !1, this.i(b))
            }
        };
        l.prototype.h = function (a, b) {
            a.__shady = a.__shady || {};
            var c = a.__shady.ga;
            a.__shady.ga = null;
            b || (b = (b = this.a[a.slot || "__catchall"]) && b[0]);
            b ? (b.__shady.assignedNodes.push(a), a.__shady.assignedSlot = b) : a.__shady.assignedSlot = void 0;
            c !== a.__shady.assignedSlot && a.__shady.assignedSlot && (a.__shady.assignedSlot.__shady.ia = !0)
        };
        l.prototype.o = function (a) {
            var b = a.__shady.assignedNodes;
            a.__shady.assignedNodes = [];
            a.__shady.P = [];
            if (a.__shady.qa = b) for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.__shady.ga = d.__shady.assignedSlot;
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
            hb.call(a, new Event("slotchange"));
            a.__shady.assignedSlot && this.i(a.__shady.assignedSlot)
        };
        l.prototype.u = function () {
            for (var a = this.b, b = [], c = 0; c < a.length; c++) {
                var d = a[c].parentNode;
                d.__shady && d.__shady.root || !(0 > b.indexOf(d)) ||
                b.push(d)
            }
            for (a = 0; a < b.length; a++) c = b[a], this.O(c === this ? this.host : c, this.w(c))
        };
        l.prototype.w = function (a) {
            var b = [];
            a = a.childNodes;
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                if (this.j(d)) {
                    d = d.__shady.P;
                    for (var e = 0; e < d.length; e++) b.push(d[e])
                } else b.push(d)
            }
            return b
        };
        l.prototype.j = function (a) {
            return "slot" == a.localName
        };
        l.prototype.O = function (a, b) {
            for (var c = R(a), d = Dd(b, b.length, c, c.length), e = 0, f = 0, k; e < d.length && (k = d[e]); e++) {
                for (var h = 0, g; h < k.T.length && (g = k.T[h]); h++) T(g) === a && aa.call(a, g), c.splice(k.index +
                    f, 1);
                f -= k.W
            }
            for (e = 0; e < d.length && (k = d[e]); e++) for (f = c[k.index], h = k.index; h < k.index + k.W; h++) g = b[h], Ua.call(a, g, f), c.splice(h, 0, g)
        };
        l.prototype.Ka = function (a) {
            this.c.push.apply(this.c, [].concat(a instanceof Array ? a : cd(bd(a))))
        };
        l.prototype.f = function () {
            this.c.length && (this.G(this.c), this.c = [])
        };
        l.prototype.G = function (a) {
            for (var b, c = 0; c < a.length; c++) {
                var d = a[c];
                d.__shady = d.__shady || {};
                ja(d);
                ja(d.parentNode);
                var e = this.l(d);
                this.a[e] ? (b = b || {}, b[e] = !0, this.a[e].push(d)) : this.a[e] = [d];
                this.b.push(d)
            }
            if (b) for (var f in b) this.a[f] =
                this.m(this.a[f])
        };
        l.prototype.l = function (a) {
            var b = a.name || a.getAttribute("name") || "__catchall";
            return a.Ja = b
        };
        l.prototype.m = function (a) {
            return a.sort(function (a, c) {
                a = uc(a);
                for (var b = uc(c), e = 0; e < a.length; e++) {
                    c = a[e];
                    var f = b[e];
                    if (c !== f) return a = Array.from(c.parentNode.childNodes), a.indexOf(c) - a.indexOf(f)
                }
            })
        };
        l.prototype.Na = function (a) {
            this.f();
            var b = this.a, c;
            for (c in b) for (var d = b[c], e = 0; e < d.length; e++) {
                var f = d[e];
                if (Jb(a, f)) {
                    d.splice(e, 1);
                    var k = this.b.indexOf(f);
                    0 <= k && this.b.splice(k, 1);
                    e--;
                    this.I(f);
                    k = !0
                }
            }
            return k
        };
        l.prototype.Pa = function (a) {
            var b = a.Ja, c = this.l(a);
            if (c !== b) {
                b = this.a[b];
                var d = b.indexOf(a);
                0 <= d && b.splice(d, 1);
                b = this.a[c] || (this.a[c] = []);
                b.push(a);
                1 < b.length && (this.a[c] = this.m(b))
            }
        };
        l.prototype.I = function (a) {
            if (a = a.__shady.P) for (var b = 0; b < a.length; b++) {
                var c = a[b], d = T(c);
                d && aa.call(d, c)
            }
        };
        l.prototype.pa = function () {
            this.f();
            return !!this.b.length
        };
        l.prototype.addEventListener = function (a, b, c) {
            "object" !== typeof c && (c = {capture: !!c});
            c.fa = this;
            this.host.addEventListener(a, b, c)
        };
        l.prototype.removeEventListener =
            function (a, b, c) {
                "object" !== typeof c && (c = {capture: !!c});
                c.fa = this;
                this.host.removeEventListener(a, b, c)
            };
        l.prototype.getElementById = function (a) {
            return ma(this, function (b) {
                return b.id == a
            }, function (a) {
                return !!a
            })[0] || null
        };
        (function (a) {
            J(a, Pa, !0);
            J(a, Qa, !0)
        })(l.prototype);
        var Hd = {addEventListener: mc.bind(window), removeEventListener: qc.bind(window)}, Gd = {
            addEventListener: mc, removeEventListener: qc, appendChild: function (a) {
                return Ra(this, a)
            }, insertBefore: function (a, b) {
                return Ra(this, a, b)
            }, removeChild: function (a) {
                return Sa(this,
                    a)
            }, replaceChild: function (a, b) {
                Ra(this, a, b);
                Sa(this, b);
                return a
            }, cloneNode: function (a) {
                if ("template" == this.localName) var b = gb.call(this, a); else if (b = gb.call(this, !1), a) {
                    a = this.childNodes;
                    for (var c = 0, d; c < a.length; c++) d = a[c].cloneNode(!0), b.appendChild(d)
                }
                return b
            }, getRootNode: function () {
                return dc(this)
            }, contains: function (a) {
                return Jb(this, a)
            }, get isConnected() {
                var a = this.ownerDocument;
                if (Qd && ba.call(a, this) || a.documentElement && ba.call(a.documentElement, this)) return !0;
                for (a = this; a && !(a instanceof Document);) a =
                    a.parentNode || (a instanceof l ? a.host : void 0);
                return !!(a && a instanceof Document)
            }, dispatchEvent: function (a) {
                la();
                return hb.call(this, a)
            }
        }, Id = {
            get assignedSlot() {
                return vc(this)
            }
        }, Za = {
            querySelector: function (a) {
                return ma(this, function (b) {
                    return Lc.call(b, a)
                }, function (a) {
                    return !!a
                })[0] || null
            }, querySelectorAll: function (a) {
                return ma(this, function (b) {
                    return Lc.call(b, a)
                })
            }
        }, yc = {
            assignedNodes: function (a) {
                if ("slot" === this.localName) return fc(this), this.__shady ? (a && a.flatten ? this.__shady.P : this.__shady.assignedNodes) ||
                    [] : []
            }
        }, wc = Ka({
            setAttribute: function (a, b) {
                gc(this, a, b)
            }, removeAttribute: function (a) {
                Mc.call(this, a);
                cc(this, a)
            }, attachShadow: function (a) {
                if (!this) throw"Must provide a host.";
                if (!a) throw"Not enough arguments.";
                return new l(Eb, this, a)
            }, get slot() {
                return this.getAttribute("slot")
            }, set slot(a) {
                gc(this, "slot", a)
            }, get assignedSlot() {
                return vc(this)
            }
        }, Za, yc);
        Object.defineProperties(wc, Nc);
        var xc = Ka({
            importNode: function (a, b) {
                return ic(a, b)
            }, getElementById: function (a) {
                return ma(this, function (b) {
                    return b.id ==
                        a
                }, function (a) {
                    return !!a
                })[0] || null
            }
        }, Za);
        Object.defineProperties(xc, {_activeElement: Qa.activeElement});
        var Xd = HTMLElement.prototype.blur, Jd = Ka({
            blur: function () {
                var a = this.__shady && this.__shady.root;
                (a = a && a.activeElement) ? a.blur() : Xd.call(this)
            }
        });
        D.va && (window.ShadyDOM = {
            inUse: D.va,
            patch: function (a) {
                return a
            },
            isShadyRoot: F,
            enqueue: Kb,
            flush: la,
            settings: D,
            filterMutations: wd,
            observeChildren: ud,
            unobserveChildren: td,
            nativeMethods: Rd,
            nativeTree: Sd
        }, window.Event = Ud, window.CustomEvent = Vd, window.MouseEvent =
            Wd, Cd(), Fd(), window.ShadowRoot = l);
        var Kd = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
        A.prototype.B = function (a, b) {
            this.o.set(a, b);
            this.m.set(b.constructor, b)
        };
        A.prototype.c = function (a) {
            return this.o.get(a)
        };
        A.prototype.w = function (a) {
            return this.m.get(a)
        };
        A.prototype.u = function (a) {
            this.h = !0;
            this.j.push(a)
        };
        A.prototype.l = function (a) {
            var b = this;
            this.h && N(a, function (a) {
                return b.g(a)
            })
        };
        A.prototype.g = function (a) {
            if (this.h &&
                !a.__CE_patched) {
                a.__CE_patched = !0;
                for (var b = 0; b < this.j.length; b++) this.j[b](a)
            }
        };
        A.prototype.b = function (a) {
            var b = [];
            N(a, function (a) {
                return b.push(a)
            });
            for (a = 0; a < b.length; a++) {
                var c = b[a];
                1 === c.__CE_state ? this.connectedCallback(c) : this.i(c)
            }
        };
        A.prototype.a = function (a) {
            var b = [];
            N(a, function (a) {
                return b.push(a)
            });
            for (a = 0; a < b.length; a++) {
                var c = b[a];
                1 === c.__CE_state && this.disconnectedCallback(c)
            }
        };
        A.prototype.f = function (a, b) {
            var c = this;
            b = b ? b : {};
            var d = b.cb || new Set, e = b.ya || function (a) {
                return c.i(a)
            }, f =
                [];
            N(a, function (a) {
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
                            c.f(b, {cb: f, ya: e})
                        }
                    })
                } else f.push(a)
            }, d);
            if (this.h) for (a = 0; a < f.length; a++) this.g(f[a]);
            for (a = 0; a < f.length; a++) e(f[a])
        };
        A.prototype.i =
            function (a) {
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
                            var d = b[c], e = a.getAttribute(d);
                            null !== e && this.attributeChangedCallback(a, d, null, e, null)
                        }
                        q(a) &&
                        this.connectedCallback(a)
                    }
                }
            };
        A.prototype.connectedCallback = function (a) {
            var b = a.__CE_definition;
            b.connectedCallback && b.connectedCallback.call(a)
        };
        A.prototype.disconnectedCallback = function (a) {
            var b = a.__CE_definition;
            b.disconnectedCallback && b.disconnectedCallback.call(a)
        };
        A.prototype.attributeChangedCallback = function (a, b, c, d, e) {
            var f = a.__CE_definition;
            f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) && f.attributeChangedCallback.call(a, b, c, d, e)
        };
        Ga.prototype.c = function () {
            this.M && this.M.disconnect()
        };
        Ga.prototype.f = function (a) {
            var b = this.a.readyState;
            "interactive" !== b && "complete" !== b || this.c();
            for (b = 0; b < a.length; b++) for (var c = a[b].addedNodes, d = 0; d < c.length; d++) this.b.f(c[d])
        };
        Db.prototype.c = function () {
            if (this.a) throw Error("Already resolved.");
            this.a = void 0;
            this.b && this.b(void 0)
        };
        y.prototype.define = function (a, b) {
            var c = this;
            if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
            if (!zc(a)) throw new SyntaxError("The element name '" + a + "' is not valid.");
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
                var k = d("disconnectedCallback");
                var g = d("adoptedCallback");
                var l = d("attributeChangedCallback");
                var n = b.observedAttributes || []
            } catch (m) {
                return
            } finally {
                this.c = !1
            }
            b = {
                localName: a,
                constructor: b,
                connectedCallback: f,
                disconnectedCallback: k,
                adoptedCallback: g,
                attributeChangedCallback: l,
                observedAttributes: n,
                constructionStack: []
            };
            this.a.B(a, b);
            this.g.push(b);
            this.b || (this.b = !0, this.f(function () {
                return c.j()
            }))
        };
        y.prototype.j = function () {
            var a = this;
            if (!1 !== this.b) {
                this.b = !1;
                for (var b = this.g, c = [], d = new Map, e = 0; e < b.length; e++) d.set(b[e].localName, []);
                this.a.f(document, {
                    ya: function (b) {
                        if (void 0 ===
                            b.__CE_state) {
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
                    for (var k = 0; k < f.length; k++) this.a.i(f[k]);
                    (e = this.h.get(e)) && e.c()
                }
            }
        };
        y.prototype.get = function (a) {
            if (a = this.a.c(a)) return a.constructor
        };
        y.prototype.whenDefined = function (a) {
            if (!zc(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
            var b = this.h.get(a);
            if (b) return b.f;
            b = new Db;
            this.h.set(a,
                b);
            this.a.c(a) && !this.g.some(function (b) {
                return b.localName === a
            }) && b.c();
            return b.f
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
        var Ba = window.Document.prototype.createElement, od = window.Document.prototype.createElementNS,
            nd = window.Document.prototype.importNode,
            pd = window.Document.prototype.prepend, qd = window.Document.prototype.append,
            Yd = window.DocumentFragment.prototype.prepend, Zd = window.DocumentFragment.prototype.append,
            tb = window.Node.prototype.cloneNode, ha = window.Node.prototype.appendChild,
            Ab = window.Node.prototype.insertBefore, Ca = window.Node.prototype.removeChild,
            Bb = window.Node.prototype.replaceChild,
            Fa = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
            sb = window.Element.prototype.attachShadow, za = Object.getOwnPropertyDescriptor(window.Element.prototype,
            "innerHTML"), Da = window.Element.prototype.getAttribute, ub = window.Element.prototype.setAttribute,
            wb = window.Element.prototype.removeAttribute, ia = window.Element.prototype.getAttributeNS,
            vb = window.Element.prototype.setAttributeNS, xb = window.Element.prototype.removeAttributeNS,
            zb = window.Element.prototype.insertAdjacentElement, ed = window.Element.prototype.prepend,
            fd = window.Element.prototype.append, hd = window.Element.prototype.before,
            id = window.Element.prototype.after, jd = window.Element.prototype.replaceWith,
            kd = window.Element.prototype.remove, sd = window.HTMLElement,
            Aa = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
            yb = window.HTMLElement.prototype.insertAdjacentElement, Cb = new function () {
            }, sa = window.customElements;
        if (!sa || sa.forcePolyfill || "function" != typeof sa.define || "function" != typeof sa.get) {
            var X = new A;
            rd(X);
            md(X);
            Ea(X, DocumentFragment.prototype, {Z: Yd, append: Zd});
            ld(X);
            dd(X);
            document.__CE_hasRegistry = !0;
            var $d = new y(X);
            Object.defineProperty(window, "customElements", {
                configurable: !0,
                enumerable: !0, value: $d
            })
        }
        var H = {STYLE_RULE: 1, ca: 7, MEDIA_RULE: 4, la: 1E3}, E = {
            Sa: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
            port: /@import[^;]*;/gim,
            sa: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
            wa: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
            Xa: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
            bb: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
            Wa: /^@[^\s]*keyframes/,
            xa: /\s+/g
        }, w = !(window.ShadyDOM && window.ShadyDOM.inUse);
        if (window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss) var z = window.ShadyCSS.nativeCss;
        else window.ShadyCSS ? (Cc(window.ShadyCSS), window.ShadyCSS = void 0) : Cc(window.WebComponents && window.WebComponents.flags);
        var ta = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
            ua = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi, ae = /(--[\w-]+)\s*([:,;)]|$)/gi,
            be = /(animation\s*:)|(animation-name\s*:)/, Md = /@media\s(.*)/, ce = /\{[^}]*\}/g, P = null;
        r.prototype.b = function (a, b, c) {
            a.__styleScoped ? a.__styleScoped = null : this.j(a, b || "", c)
        };
        r.prototype.j =
            function (a, b, c) {
                a.nodeType === Node.ELEMENT_NODE && this.h(a, b, c);
                if (a = "template" === a.localName ? (a.content || a.hb).childNodes : a.children || a.childNodes) for (var d = 0; d < a.length; d++) this.j(a[d], b, c)
            };
        r.prototype.h = function (a, b, c) {
            if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b)); else if (a.getAttribute) {
                var d = a.getAttribute(de);
                c ? d && (b = d.replace("style-scope", "").replace(b, ""), pa(a, b)) : pa(a, (d ? d + " " : "") + "style-scope " + b)
            }
        };
        r.prototype.c =
            function (a, b, c) {
                var d = a.__cssBuild;
                w || "shady" === d ? b = U(b, c) : (a = Q(a), b = this.G(b, a.is, a.U, c) + "\n\n");
                return b.trim()
            };
        r.prototype.G = function (a, b, c, d) {
            var e = this.f(b, c);
            b = this.i(b);
            var f = this;
            return U(a, function (a) {
                a.c || (f.I(a, b, e), a.c = !0);
                d && d(a, b, e)
            })
        };
        r.prototype.i = function (a) {
            return a ? ee + a : ""
        };
        r.prototype.f = function (a, b) {
            return b ? "[is=" + a + "]" : a
        };
        r.prototype.I = function (a, b, c) {
            this.l(a, this.g, b, c)
        };
        r.prototype.l = function (a, b, c, d) {
            a.selector = a.v = this.m(a, b, c, d)
        };
        r.prototype.m = function (a, b, c, d) {
            var e =
                a.selector.split(Oc);
            if (!Dc(a)) {
                a = 0;
                for (var f = e.length, k; a < f && (k = e[a]); a++) e[a] = b.call(this, k, c, d)
            }
            return e.join(Oc)
        };
        r.prototype.u = function (a) {
            return a.replace(kb, function (a, c, d) {
                -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));
                return ":" + c + "(" + d + ")"
            })
        };
        r.prototype.g = function (a, b, c) {
            var d = this, e = !1;
            a = a.trim();
            var f = kb.test(a);
            f && (a = a.replace(kb, function (a, b, c) {
                return ":" + b + "(" + c.replace(/\s/g, "") + ")"
            }), a = this.u(a));
            a = a.replace(fe, lb + " $1");
            a = a.replace(ge, function (a,
                                        f, g) {
                e || (a = d.B(g, f, b, c), e = e || a.stop, f = a.Ra, g = a.value);
                return f + g
            });
            f && (a = this.u(a));
            return a
        };
        r.prototype.B = function (a, b, c, d) {
            var e = a.indexOf(mb);
            0 <= a.indexOf(lb) ? a = this.F(a, d) : 0 !== e && (a = c ? this.o(a, c) : a);
            c = !1;
            0 <= e && (b = "", c = !0);
            if (c) {
                var f = !0;
                c && (a = a.replace(he, function (a, b) {
                    return " > " + b
                }))
            }
            a = a.replace(ie, function (a, b, c) {
                return '[dir="' + c + '"] ' + b + ", " + b + '[dir="' + c + '"]'
            });
            return {value: a, Ra: b, stop: f}
        };
        r.prototype.o = function (a, b) {
            a = a.split(Pc);
            a[0] += b;
            return a.join(Pc)
        };
        r.prototype.F = function (a, b) {
            var c =
                a.match(Qc);
            return (c = c && c[2].trim() || "") ? c[0].match(Rc) ? a.replace(Qc, function (a, c, f) {
                return b + f
            }) : c.split(Rc)[0] === b ? c : je : a.replace(lb, b)
        };
        r.prototype.H = function (a) {
            a.selector = a.parsedSelector;
            this.w(a);
            this.l(a, this.K)
        };
        r.prototype.w = function (a) {
            a.selector === ke && (a.selector = "html")
        };
        r.prototype.K = function (a) {
            return a.match(mb) ? this.g(a, Sc) : this.o(a.trim(), Sc)
        };
        I.Object.defineProperties(r.prototype, {
            a: {
                configurable: !0, enumerable: !0, get: function () {
                    return "style-scope"
                }
            }
        });
        var kb = /:(nth[-\w]+)\(([^)]+)\)/,
            Sc = ":not(.style-scope)", Oc = ",", ge = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g, Rc = /[[.:#*]/,
            lb = ":host", ke = ":root", mb = "::slotted", fe = new RegExp("^(" + mb + ")"),
            Qc = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, he = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
            ie = /(.*):dir\((?:(ltr|rtl))\)/, ee = ".", Pc = ":", de = "class", je = "should_not_match", t = new r;
        v.get = function (a) {
            return a ? a.__styleInfo : null
        };
        v.set = function (a, b) {
            return a.__styleInfo = b
        };
        v.prototype.c = function () {
            return this.D
        };
        v.prototype._getStyleRules = v.prototype.c;
        var Tc = function (a) {
            return a.matches || a.matchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.webkitMatchesSelector
        }(window.Element.prototype), le = navigator.userAgent.match("Trident");
        n.prototype.H = function (a) {
            var b = this, c = {}, d = [], e = 0;
            V(a, function (a) {
                b.c(a);
                a.index = e++;
                b.G(a.s.cssText, c)
            }, function (a) {
                d.push(a)
            });
            a.b = d;
            a = [];
            for (var f in c) a.push(f);
            return a
        };
        n.prototype.c = function (a) {
            if (!a.s) {
                var b = {}, c = {};
                this.b(a, c) && (b.C = c, a.rules = null);
                b.cssText = this.F(a);
                a.s = b
            }
        };
        n.prototype.b =
            function (a, b) {
                var c = a.s;
                if (c) {
                    if (c.C) return Object.assign(b, c.C), !0
                } else {
                    c = a.parsedCssText;
                    for (var d; a = ta.exec(c);) {
                        d = (a[2] || a[3]).trim();
                        if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;
                        d = !0
                    }
                    return d
                }
            };
        n.prototype.F = function (a) {
            return this.K(a.parsedCssText)
        };
        n.prototype.K = function (a) {
            return a.replace(ce, "").replace(ta, "")
        };
        n.prototype.G = function (a, b) {
            for (var c; c = ae.exec(a);) {
                var d = c[1];
                ":" !== c[2] && (b[d] = !0)
            }
        };
        n.prototype.$ = function (a) {
            for (var b = Object.getOwnPropertyNames(a), c = 0, d; c < b.length; c++) d =
                b[c], a[d] = this.a(a[d], a)
        };
        n.prototype.a = function (a, b) {
            if (a) if (0 <= a.indexOf(";")) a = this.f(a, b); else {
                var c = this;
                a = Fc(a, function (a, e, f, g) {
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
                ua.lastIndex = 0;
                if (e = ua.exec(d)) d = this.a(b[e[1]], b); else if (e = d.indexOf(":"), -1 !== e) {
                    var f = d.substring(e);
                    f = f.trim();
                    f = this.a(f, b) ||
                        f;
                    d = d.substring(0, e) + f
                }
                a[c] = d && d.lastIndexOf(";") === d.length - 1 ? d.slice(0, -1) : d || ""
            }
            return a.join(";")
        };
        n.prototype.B = function (a, b) {
            var c = "";
            a.s || this.c(a);
            a.s.cssText && (c = this.f(a.s.cssText, b));
            a.cssText = c
        };
        n.prototype.w = function (a, b) {
            var c = a.cssText, d = a.cssText;
            null == a.ua && (a.ua = be.test(c));
            if (a.ua) if (null == a.Y) {
                a.Y = [];
                for (var e in b) d = b[e], d = d(c), c !== d && (c = d, a.Y.push(e))
            } else {
                for (e = 0; e < a.Y.length; ++e) d = b[a.Y[e]], c = d(c);
                d = c
            }
            a.cssText = d
        };
        n.prototype.O = function (a, b) {
            var c = {}, d = this, e = [];
            V(a, function (a) {
                a.s ||
                d.c(a);
                var f = a.v || a.parsedSelector;
                b && a.s.C && f && Tc.call(b, f) && (d.b(a, c), a = a.index, f = parseInt(a / 32, 10), e[f] = (e[f] || 0) | 1 << a % 32)
            }, null, !0);
            return {C: c, key: e}
        };
        n.prototype.ba = function (a, b, c, d) {
            b.s || this.c(b);
            if (b.s.C) {
                var e = Q(a);
                a = e.is;
                e = e.U;
                e = a ? t.f(a, e) : "html";
                var f = b.parsedSelector, g = ":host > *" === f || "html" === f, h = 0 === f.indexOf(":host") && !g;
                "shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));
                "shadow" === c && (g = ":host > *" === f || "html" === f, h = h && !g);
                if (g || h) c = e, h && (w && !b.v && (b.v =
                    t.m(b, t.g, t.i(a), e)), c = b.v || e), d({ab: c, Va: h, jb: g})
            }
        };
        n.prototype.I = function (a, b) {
            var c = {}, d = {}, e = this, f = b && b.__cssBuild;
            V(b, function (b) {
                e.ba(a, b, f, function (f) {
                    Tc.call(a.ib || a, f.ab) && (f.Va ? e.b(b, c) : e.b(b, d))
                })
            }, null, !0);
            return {Za: d, Ua: c}
        };
        n.prototype.aa = function (a, b, c) {
            var d = this, e = Q(a), f = t.f(e.is, e.U),
                g = new RegExp("(?:^|[^.#[:])" + (a.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])");
            e = v.get(a).D;
            var h = this.h(e, c);
            return t.c(a, e, function (a) {
                d.B(a, b);
                w || Dc(a) || !a.cssText || (d.w(a, h), d.l(a, g, f, c))
            })
        };
        n.prototype.h = function (a, b) {
            a = a.b;
            var c = {};
            if (!w && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) this.j(e, b), c[e.keyframesName] = this.i(e);
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
            a.v = a.v || a.selector;
            a.selector = a.v.replace(a.keyframesName, a.a)
        };
        n.prototype.l = function (a, b, c, d) {
            a.v = a.v || a.selector;
            d = "." + d;
            for (var e = a.v.split(","), f = 0, g = e.length, h; f < g && (h = e[f]); f++) e[f] = h.match(b) ?
                h.replace(c, d) : d + " " + h;
            a.selector = e.join(",")
        };
        n.prototype.o = function (a, b, c) {
            var d = a.getAttribute("class") || "", e = d;
            c && (e = d.replace(new RegExp("\\s*x-scope\\s*" + c + "\\s*", "g"), " "));
            e += (e ? " " : "") + "x-scope " + b;
            d !== e && pa(a, e)
        };
        n.prototype.u = function (a, b, c, d) {
            b = d ? d.textContent || "" : this.aa(a, b, c);
            var e = v.get(a), f = e.a;
            f && !w && f !== d && (f._useCount--, 0 >= f._useCount && f.parentNode && f.parentNode.removeChild(f));
            w ? e.a ? (e.a.textContent = b, d = e.a) : b && (d = bb(b, c, a.shadowRoot, e.b)) : d ? d.parentNode || (le && -1 < b.indexOf("@media") &&
            (d.textContent = b), Ec(d, null, e.b)) : b && (d = bb(b, c, null, e.b));
            d && (d._useCount = d._useCount || 0, e.a != d && d._useCount++, e.a = d);
            return d
        };
        n.prototype.m = function (a, b) {
            var c = oa(a), d = this;
            a.textContent = U(c, function (a) {
                var c = a.cssText = a.parsedCssText;
                a.s && a.s.cssText && (c = c.replace(E.sa, "").replace(E.wa, ""), a.cssText = d.f(c, b))
            })
        };
        I.Object.defineProperties(n.prototype, {
            g: {
                configurable: !0, enumerable: !0, get: function () {
                    return "x-scope"
                }
            }
        });
        var L = new n, nb = {}, va = window.customElements;
        if (va && !w) {
            var me = va.define;
            va.define =
                function (a, b, c) {
                    var d = document.createComment(" Shady DOM styles for " + a + " "), e = document.head;
                    e.insertBefore(d, (P ? P.nextSibling : null) || e.firstChild);
                    P = d;
                    nb[a] = d;
                    return me.call(va, a, b, c)
                }
        }
        fa.prototype.a = function (a, b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                if (a.C[e] !== b[e]) return !1
            }
            return !0
        };
        fa.prototype.b = function (a, b, c, d) {
            var e = this.cache[a] || [];
            e.push({C: b, styleElement: c, A: d});
            e.length > this.c && e.shift();
            this.cache[a] = e
        };
        fa.prototype.fetch = function (a, b, c) {
            if (a = this.cache[a]) for (var d = a.length - 1; 0 <=
            d; d--) {
                var e = a[d];
                if (this.a(e, b, c)) return e
            }
        };
        if (!w) {
            var Uc = new MutationObserver(Gc), Vc = function (a) {
                Uc.observe(a, {childList: !0, subtree: !0})
            };
            if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Vc(document); else {
                var ob = function () {
                    Vc(document.body)
                };
                window.HTMLImports ? window.HTMLImports.whenReady(ob) : requestAnimationFrame(function () {
                    if ("loading" === document.readyState) {
                        var a = function () {
                            ob();
                            document.removeEventListener("readystatechange", a)
                        };
                        document.addEventListener("readystatechange",
                            a)
                    } else ob()
                })
            }
            M = function () {
                Gc(Uc.takeRecords())
            }
        }
        var qa = {}, Pd = Promise.resolve(), cb = null, Ic = window.HTMLImports && window.HTMLImports.whenReady || null,
            db, wa = null, ea = null;
        p.prototype.ta = function () {
            !this.enqueued && ea && (this.enqueued = !0, rb(ea))
        };
        p.prototype.b = function (a) {
            a.__seenByShadyCSS || (a.__seenByShadyCSS = !0, this.customStyles.push(a), this.ta())
        };
        p.prototype.a = function (a) {
            return a.__shadyCSSCachedStyle ? a.__shadyCSSCachedStyle : a.getStyle ? a.getStyle() : a
        };
        p.prototype.c = function () {
            for (var a = this.customStyles,
                     b = 0; b < a.length; b++) {
                var c = a[b];
                if (!c.__shadyCSSCachedStyle) {
                    var d = this.a(c);
                    d && (d = d.__appliedElement || d, wa && wa(d), c.__shadyCSSCachedStyle = d)
                }
            }
            return a
        };
        p.prototype.addCustomStyle = p.prototype.b;
        p.prototype.getStyleForCustomStyle = p.prototype.a;
        p.prototype.processStyles = p.prototype.c;
        Object.defineProperties(p.prototype, {
            transformCallback: {
                get: function () {
                    return wa
                }, set: function (a) {
                    wa = a
                }
            }, validateCallback: {
                get: function () {
                    return ea
                }, set: function (a) {
                    var b = !1;
                    ea || (b = !0);
                    ea = a;
                    b && this.ta()
                }
            }
        });
        var Wc = new fa;
        g.prototype.w = function () {
            M()
        };
        g.prototype.I = function (a) {
            var b = this.m[a] = (this.m[a] || 0) + 1;
            return a + "-" + b
        };
        g.prototype.Ca = function (a) {
            return oa(a)
        };
        g.prototype.Ea = function (a) {
            return U(a)
        };
        g.prototype.H = function (a) {
            a = a.content.querySelectorAll("style");
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c];
                b.push(d.textContent);
                d.parentNode.removeChild(d)
            }
            return b.join("").trim()
        };
        g.prototype.$ = function (a) {
            return (a = a.content.querySelector("style")) ? a.getAttribute("css-build") || "" : ""
        };
        g.prototype.prepareTemplate =
            function (a, b, c) {
                if (!a.f) {
                    a.f = !0;
                    a.name = b;
                    a.extends = c;
                    qa[b] = a;
                    var d = this.$(a), e = this.H(a);
                    c = {is: b, extends: c, fb: d};
                    w || t.b(a.content, b);
                    this.c();
                    var f = ua.test(e) || ta.test(e);
                    ua.lastIndex = 0;
                    ta.lastIndex = 0;
                    e = ab(e);
                    f && z && this.a && this.a.transformRules(e, b);
                    a._styleAst = e;
                    a.g = d;
                    d = [];
                    z || (d = L.H(a._styleAst));
                    if (!d.length || z) b = this.O(c, a._styleAst, w ? a.content : null, nb[b]), a.a = b;
                    a.c = d
                }
            };
        g.prototype.O = function (a, b, c, d) {
            b = t.c(a, b);
            if (b.length) return bb(b, a.is, c, d)
        };
        g.prototype.ba = function (a) {
            var b = Q(a), c = b.is;
            b =
                b.U;
            var d = nb[c];
            c = qa[c];
            if (c) {
                var e = c._styleAst;
                var f = c.c
            }
            return v.set(a, new v(e, d, f, 0, b))
        };
        g.prototype.F = function () {
            !this.a && window.ShadyCSS && window.ShadyCSS.ApplyShim && (this.a = window.ShadyCSS.ApplyShim, this.a.invalidCallback = Nd)
        };
        g.prototype.G = function () {
            var a = this;
            !this.b && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (this.b = window.ShadyCSS.CustomStyleInterface, this.b.transformCallback = function (b) {
                a.u(b)
            }, this.b.validateCallback = function () {
                requestAnimationFrame(function () {
                    (a.b.enqueued ||
                        a.i) && a.f()
                })
            })
        };
        g.prototype.c = function () {
            this.F();
            this.G()
        };
        g.prototype.f = function () {
            this.c();
            if (this.b) {
                var a = this.b.processStyles();
                this.b.enqueued && (z ? this.Aa(a) : (this.o(this.g, this.h), this.B(a)), this.b.enqueued = !1, this.i && !z && this.styleDocument())
            }
        };
        g.prototype.styleElement = function (a, b) {
            var c = Q(a).is, d = v.get(a);
            d || (d = this.ba(a));
            this.j(a) || (this.i = !0);
            b && (d.N = d.N || {}, Object.assign(d.N, b));
            if (z) {
                if (d.N) {
                    b = d.N;
                    for (var e in b) null === e ? a.style.removeProperty(e) : a.style.setProperty(e, b[e])
                }
                if (((e =
                        qa[c]) || this.j(a)) && e && e.a && !Hc(e)) {
                    if (Hc(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) this.c(), this.a && this.a.transformRules(e._styleAst, c), e.a.textContent = t.c(a, d.D), Od(e);
                    w && (c = a.shadowRoot) && (c.querySelector("style").textContent = t.c(a, d.D));
                    d.D = e._styleAst
                }
            } else this.o(a, d), d.ja && d.ja.length && this.K(a, d)
        };
        g.prototype.l = function (a) {
            return (a = a.getRootNode().host) ? v.get(a) ? a : this.l(a) : this.g
        };
        g.prototype.j = function (a) {
            return a === this.g
        };
        g.prototype.K = function (a, b) {
            var c = Q(a).is, d =
                Wc.fetch(c, b.J, b.ja), e = d ? d.styleElement : null, f = b.A;
            b.A = d && d.A || this.I(c);
            e = L.u(a, b.J, b.A, e);
            w || L.o(a, b.A, f);
            d || Wc.b(c, b.J, e, b.A)
        };
        g.prototype.o = function (a, b) {
            var c = this.l(a), d = v.get(c);
            c = Object.create(d.J || null);
            var e = L.I(a, b.D);
            a = L.O(d.D, a).C;
            Object.assign(c, e.Ua, a, e.Za);
            this.aa(c, b.N);
            L.$(c);
            b.J = c
        };
        g.prototype.aa = function (a, b) {
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
        g.prototype.Aa = function (a) {
            for (var b = 0; b < a.length; b++) {
                var c = this.b.getStyleForCustomStyle(a[b]);
                c && this.za(c)
            }
        };
        g.prototype.B = function (a) {
            for (var b = 0; b < a.length; b++) {
                var c = this.b.getStyleForCustomStyle(a[b]);
                c && L.m(c, this.h.J)
            }
        };
        g.prototype.u = function (a) {
            var b = this, c = oa(a);
            V(c, function (a) {
                w ? t.w(a) :
                    t.H(a);
                z && (b.c(), b.a && b.a.transformRule(a))
            });
            z ? a.textContent = U(c) : this.h.D.rules.push(c)
        };
        g.prototype.za = function (a) {
            if (z && this.a) {
                var b = oa(a);
                this.c();
                this.a.transformRules(b);
                a.textContent = U(b)
            }
        };
        g.prototype.getComputedStyleValue = function (a, b) {
            var c;
            z || (c = (v.get(a) || v.get(this.l(a))).J[b]);
            return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : ""
        };
        g.prototype.Da = function (a, b) {
            var c = a.getRootNode();
            b = b ? b.split(/\s/) : [];
            c = c.host && c.host.localName;
            if (!c) {
                var d = a.getAttribute("class");
                if (d) {
                    d = d.split(/\s/);
                    for (var e = 0; e < d.length; e++) if (d[e] === t.a) {
                        c = d[e + 1];
                        break
                    }
                }
            }
            c && b.push(t.a, c);
            z || (c = v.get(a)) && c.A && b.push(L.g, c.A);
            pa(a, b.join(" "))
        };
        g.prototype.Ba = function (a) {
            return v.get(a)
        };
        g.prototype.flush = g.prototype.w;
        g.prototype.prepareTemplate = g.prototype.prepareTemplate;
        g.prototype.styleElement = g.prototype.styleElement;
        g.prototype.styleDocument = g.prototype.styleDocument;
        g.prototype.styleSubtree = g.prototype.styleSubtree;
        g.prototype.getComputedStyleValue = g.prototype.getComputedStyleValue;
        g.prototype.setElementClass = g.prototype.Da;
        g.prototype._styleInfoForNode = g.prototype.Ba;
        g.prototype.transformCustomStyleForDocument = g.prototype.u;
        g.prototype.getStyleAst = g.prototype.Ca;
        g.prototype.styleAstToString = g.prototype.Ea;
        g.prototype.flushCustomStyles = g.prototype.f;
        Object.defineProperties(g.prototype, {
            nativeShadow: {
                get: function () {
                    return w
                }
            }, nativeCss: {
                get: function () {
                    return z
                }
            }
        });
        var G = new g;
        if (window.ShadyCSS) {
            var Xc = window.ShadyCSS.ApplyShim;
            var Yc = window.ShadyCSS.CustomStyleInterface
        }
        window.ShadyCSS =
            {
                ScopingShim: G, prepareTemplate: function (a, b, c) {
                G.f();
                G.prepareTemplate(a, b, c)
            }, styleSubtree: function (a, b) {
                G.f();
                G.styleSubtree(a, b)
            }, styleElement: function (a) {
                G.f();
                G.styleElement(a)
            }, styleDocument: function (a) {
                G.f();
                G.styleDocument(a)
            }, getComputedStyleValue: function (a, b) {
                return G.getComputedStyleValue(a, b)
            }, nativeCss: z, nativeShadow: w
            };
        Xc && (window.ShadyCSS.ApplyShim = Xc);
        Yc && (window.ShadyCSS.CustomStyleInterface = Yc);
        var eb = window.document;
        window.WebComponents = window.WebComponents || {};
        "loading" !== eb.readyState ?
            Jc() : eb.addEventListener("readystatechange", Kc)
    })();
}).call(this);

//# sourceMappingURL=webcomponents-sd-ce.js.map
