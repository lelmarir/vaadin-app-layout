(function () {/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
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

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    'use strict';
    (function () {
        function ca(b) {
            function a(a, d) {
                Object.defineProperty(a, "innerHTML", {
                    enumerable: d.enumerable,
                    configurable: !0,
                    get: d.get,
                    set: function (a) {
                        var e = this, c = void 0;
                        g(this) && (c = [], w(this, function (b) {
                            b !== e && c.push(b)
                        }));
                        d.set.call(this, a);
                        if (c) for (var v = 0; v < c.length; v++) {
                            var f = c[v];
                            1 === f.__CE_state && b.disconnectedCallback(f)
                        }
                        this.ownerDocument.__CE_hasRegistry ? b.f(this) : b.l(this);
                        return a
                    }
                })
            }

            function d(a, d) {
                m(a, "insertAdjacentElement", function (a, e) {
                    var c = g(e);
                    a = d.call(this, a, e);
                    c && b.a(e);
                    g(a) && b.b(e);
                    return a
                })
            }

            M && m(Element.prototype, "attachShadow", function (b) {
                return this.__CE_shadowRoot = b = M.call(this, b)
            });
            if (D && D.get) a(Element.prototype, D); else if (E && E.get) a(HTMLElement.prototype, E); else {
                var c = F.call(document, "div");
                b.v(function (b) {
                    a(b, {
                        enumerable: !0, configurable: !0, get: function () {
                            return N.call(this, !0).innerHTML
                        }, set: function (b) {
                            var a = "template" === this.localName ? this.content : this;
                            for (c.innerHTML = b; 0 < a.childNodes.length;) G.call(a, a.childNodes[0]);
                            for (; 0 < c.childNodes.length;) y.call(a,
                                c.childNodes[0])
                        }
                    })
                })
            }
            m(Element.prototype, "setAttribute", function (a, d) {
                if (1 !== this.__CE_state) return O.call(this, a, d);
                var e = H.call(this, a);
                O.call(this, a, d);
                d = H.call(this, a);
                b.attributeChangedCallback(this, a, e, d, null)
            });
            m(Element.prototype, "setAttributeNS", function (a, d, c) {
                if (1 !== this.__CE_state) return P.call(this, a, d, c);
                var e = z.call(this, a, d);
                P.call(this, a, d, c);
                c = z.call(this, a, d);
                b.attributeChangedCallback(this, d, e, c, a)
            });
            m(Element.prototype, "removeAttribute", function (a) {
                if (1 !== this.__CE_state) return Q.call(this,
                    a);
                var d = H.call(this, a);
                Q.call(this, a);
                null !== d && b.attributeChangedCallback(this, a, d, null, null)
            });
            m(Element.prototype, "removeAttributeNS", function (a, d) {
                if (1 !== this.__CE_state) return R.call(this, a, d);
                var c = z.call(this, a, d);
                R.call(this, a, d);
                var e = z.call(this, a, d);
                c !== e && b.attributeChangedCallback(this, d, c, e, a)
            });
            S ? d(HTMLElement.prototype, S) : T ? d(Element.prototype, T) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
            I(b, Element.prototype, {s: da, append: ea});
            fa(b, {
                A: ha, H: ia,
                replaceWith: ja, remove: ka
            })
        }

        function fa(b, a) {
            var d = Element.prototype;

            function c(a) {
                return function (d) {
                    for (var c = [], e = 0; e < arguments.length; ++e) c[e - 0] = arguments[e];
                    e = [];
                    for (var f = [], h = 0; h < c.length; h++) {
                        var l = c[h];
                        l instanceof Element && g(l) && f.push(l);
                        if (l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) e.push(l); else e.push(l)
                    }
                    a.apply(this, c);
                    for (c = 0; c < f.length; c++) b.a(f[c]);
                    if (g(this)) for (c = 0; c < e.length; c++) f = e[c], f instanceof Element && b.b(f)
                }
            }

            void 0 !== a.A && (d.before = c(a.A));
            void 0 !==
            a.A && (d.after = c(a.H));
            void 0 !== a.replaceWith && m(d, "replaceWith", function (d) {
                for (var c = [], e = 0; e < arguments.length; ++e) c[e - 0] = arguments[e];
                e = [];
                for (var n = [], k = 0; k < c.length; k++) {
                    var h = c[k];
                    h instanceof Element && g(h) && n.push(h);
                    if (h instanceof DocumentFragment) for (h = h.firstChild; h; h = h.nextSibling) e.push(h); else e.push(h)
                }
                k = g(this);
                a.replaceWith.apply(this, c);
                for (c = 0; c < n.length; c++) b.a(n[c]);
                if (k) for (b.a(this), c = 0; c < e.length; c++) n = e[c], n instanceof Element && b.b(n)
            });
            void 0 !== a.remove && m(d, "remove", function () {
                var d =
                    g(this);
                a.remove.call(this);
                d && b.a(this)
            })
        }

        function la(b) {
            function a(a, c) {
                Object.defineProperty(a, "textContent", {
                    enumerable: c.enumerable,
                    configurable: !0,
                    get: c.get,
                    set: function (a) {
                        if (this.nodeType === Node.TEXT_NODE) c.set.call(this, a); else {
                            var d = void 0;
                            if (this.firstChild) {
                                var e = this.childNodes, n = e.length;
                                if (0 < n && g(this)) {
                                    d = Array(n);
                                    for (var k = 0; k < n; k++) d[k] = e[k]
                                }
                            }
                            c.set.call(this, a);
                            if (d) for (a = 0; a < d.length; a++) b.a(d[a])
                        }
                    }
                })
            }

            m(Node.prototype, "insertBefore", function (a, c) {
                if (a instanceof DocumentFragment) {
                    var d =
                        Array.prototype.slice.apply(a.childNodes);
                    a = U.call(this, a, c);
                    if (g(this)) for (c = 0; c < d.length; c++) b.b(d[c]);
                    return a
                }
                d = g(a);
                c = U.call(this, a, c);
                d && b.a(a);
                g(this) && b.b(a);
                return c
            });
            m(Node.prototype, "appendChild", function (a) {
                if (a instanceof DocumentFragment) {
                    var c = Array.prototype.slice.apply(a.childNodes);
                    a = y.call(this, a);
                    if (g(this)) for (var d = 0; d < c.length; d++) b.b(c[d]);
                    return a
                }
                c = g(a);
                d = y.call(this, a);
                c && b.a(a);
                g(this) && b.b(a);
                return d
            });
            m(Node.prototype, "cloneNode", function (a) {
                a = N.call(this, a);
                this.ownerDocument.__CE_hasRegistry ?
                    b.f(a) : b.l(a);
                return a
            });
            m(Node.prototype, "removeChild", function (a) {
                var c = g(a), d = G.call(this, a);
                c && b.a(a);
                return d
            });
            m(Node.prototype, "replaceChild", function (a, c) {
                if (a instanceof DocumentFragment) {
                    var d = Array.prototype.slice.apply(a.childNodes);
                    a = V.call(this, a, c);
                    if (g(this)) for (b.a(c), c = 0; c < d.length; c++) b.b(d[c]);
                    return a
                }
                d = g(a);
                var f = V.call(this, a, c), v = g(this);
                v && b.a(c);
                d && b.a(a);
                v && b.b(a);
                return f
            });
            J && J.get ? a(Node.prototype, J) : b.v(function (b) {
                a(b, {
                    enumerable: !0, configurable: !0, get: function () {
                        for (var a =
                            [], b = 0; b < this.childNodes.length; b++) a.push(this.childNodes[b].textContent);
                        return a.join("")
                    }, set: function (a) {
                        for (; this.firstChild;) G.call(this, this.firstChild);
                        y.call(this, document.createTextNode(a))
                    }
                })
            })
        }

        function ma(b) {
            m(Document.prototype, "createElement", function (a) {
                if (this.__CE_hasRegistry) {
                    var d = b.c(a);
                    if (d) return new d.constructor
                }
                a = F.call(this, a);
                b.g(a);
                return a
            });
            m(Document.prototype, "importNode", function (a, d) {
                a = na.call(this, a, d);
                this.__CE_hasRegistry ? b.f(a) : b.l(a);
                return a
            });
            m(Document.prototype,
                "createElementNS", function (a, d) {
                    if (this.__CE_hasRegistry && (null === a || "http://www.w3.org/1999/xhtml" === a)) {
                        var c = b.c(d);
                        if (c) return new c.constructor
                    }
                    a = oa.call(this, a, d);
                    b.g(a);
                    return a
                });
            I(b, Document.prototype, {s: pa, append: qa})
        }

        function I(b, a, d) {
            function c(a) {
                return function (c) {
                    for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                    e = [];
                    for (var f = [], h = 0; h < d.length; h++) {
                        var l = d[h];
                        l instanceof Element && g(l) && f.push(l);
                        if (l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) e.push(l);
                        else e.push(l)
                    }
                    a.apply(this, d);
                    for (d = 0; d < f.length; d++) b.a(f[d]);
                    if (g(this)) for (d = 0; d < e.length; d++) f = e[d], f instanceof Element && b.b(f)
                }
            }

            void 0 !== d.s && (a.prepend = c(d.s));
            void 0 !== d.append && (a.append = c(d.append))
        }

        function ra(b) {
            window.HTMLElement = function () {
                function a() {
                    var a = this.constructor, c = b.K(a);
                    if (!c) throw Error("The custom element being constructed was not registered with `customElements`.");
                    var e = c.constructionStack;
                    if (0 === e.length) return e = F.call(document, c.localName), Object.setPrototypeOf(e,
                        a.prototype), e.__CE_state = 1, e.__CE_definition = c, b.g(e), e;
                    c = e.length - 1;
                    var f = e[c];
                    if (f === W) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
                    e[c] = W;
                    Object.setPrototypeOf(f, a.prototype);
                    b.g(f);
                    return f
                }

                a.prototype = sa.prototype;
                return a
            }()
        }

        function p(b) {
            this.c = !1;
            this.a = b;
            this.h = new Map;
            this.f = function (a) {
                return a()
            };
            this.b = !1;
            this.g = [];
            this.i = new K(b, document)
        }

        function X() {
            var b = this;
            this.b = this.a = void 0;
            this.f = new Promise(function (a) {
                b.b =
                    a;
                b.a && a(b.a)
            })
        }

        function K(b, a) {
            this.c = b;
            this.a = a;
            this.b = void 0;
            this.c.f(this.a);
            "loading" === this.a.readyState && (this.b = new MutationObserver(this.g.bind(this)), this.b.observe(this.a, {
                childList: !0,
                subtree: !0
            }))
        }

        function q() {
            this.o = new Map;
            this.m = new Map;
            this.j = [];
            this.h = !1
        }

        function Y(b) {
            var a = ta.has(b);
            b = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(b);
            return !a && b
        }

        function g(b) {
            var a = b.isConnected;
            if (void 0 !== a) return a;
            for (; b && !(b.__CE_isImportDocument || b instanceof Document);) b = b.parentNode || (window.ShadowRoot &&
            b instanceof ShadowRoot ? b.host : void 0);
            return !(!b || !(b.__CE_isImportDocument || b instanceof Document))
        }

        function L(b, a) {
            for (; a && a !== b && !a.nextSibling;) a = a.parentNode;
            return a && a !== b ? a.nextSibling : null
        }

        function w(b, a, d) {
            d = d ? d : new Set;
            for (var c = b; c;) {
                if (c.nodeType === Node.ELEMENT_NODE) {
                    var e = c;
                    a(e);
                    var f = e.localName;
                    if ("link" === f && "import" === e.getAttribute("rel")) {
                        c = e.import;
                        if (c instanceof Node && !d.has(c)) for (d.add(c), c = c.firstChild; c; c = c.nextSibling) w(c, a, d);
                        c = L(b, e);
                        continue
                    } else if ("template" === f) {
                        c =
                            L(b, e);
                        continue
                    }
                    if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) w(e, a, d)
                }
                c = c.firstChild ? c.firstChild : L(b, c)
            }
        }

        function m(b, a, d) {
            b[a] = d
        }

        (function (b) {
            function a(a, b) {
                if ("function" === typeof window.CustomEvent) return new CustomEvent(a, b);
                var c = document.createEvent("CustomEvent");
                c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);
                return c
            }

            function d(a) {
                if (l) return a.ownerDocument !== document ? a.ownerDocument : null;
                var b = a.__importDoc;
                if (!b && a.parentNode) {
                    b = a.parentNode;
                    if ("function" === typeof b.closest) b =
                        b.closest("link[rel=import]"); else for (; !n(b) && (b = b.parentNode);) ;
                    a.__importDoc = b
                }
                return b
            }

            function c(a) {
                var b = document.querySelectorAll("link[rel=import]:not([import-dependency])"), c = b.length;
                c ? h(b, function (b) {
                    return v(b, function () {
                        0 === --c && a()
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
                    return c(function () {
                        return a && a()
                    })
                })
            }

            function v(a, b) {
                if (a.__loaded) b && b(); else if ("script" === a.localName && !a.src || "style" === a.localName && !a.firstChild) a.__loaded = !0, b && b(); else {
                    var c = function (d) {
                        a.removeEventListener(d.type, c);
                        a.__loaded = !0;
                        b && b()
                    };
                    a.addEventListener("load", c);
                    r && "style" === a.localName || a.addEventListener("error", c)
                }
            }

            function n(a) {
                return a.nodeType === Node.ELEMENT_NODE && "link" === a.localName && "import" === a.rel
            }

            function k() {
                var a = this;
                this.a = {};
                this.b = 0;
                this.f = new MutationObserver(function (b) {
                    return a.l(b)
                });
                this.f.observe(document.head,
                    {childList: !0, subtree: !0});
                this.c(document)
            }

            function h(a, b, c) {
                var d = a ? a.length : 0, e = c ? -1 : 1;
                for (c = c ? d - 1 : 0; c < d && 0 <= c; c += e) b(a[c], c)
            }

            var l = "import" in document.createElement("link"), g = null;
            !1 === "currentScript" in document && Object.defineProperty(document, "currentScript", {
                get: function () {
                    return g || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null)
                }, configurable: !0
            });
            var m = /(url\()([^)]*)(\))/g, p = /(@import[\s]+(?!url\())([^;]*)(;)/g,
                q = /(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g,
                u = {
                    J: function (a, b) {
                        a.href && a.setAttribute("href", u.u(a.getAttribute("href"), b));
                        a.src && a.setAttribute("src", u.u(a.getAttribute("src"), b));
                        if ("style" === a.localName) {
                            var c = u.D(a.textContent, b, m);
                            a.textContent = u.D(c, b, p)
                        }
                    }, D: function (a, b, c) {
                        return a.replace(c, function (a, c, d, e) {
                            a = d.replace(/["']/g, "");
                            b && (a = u.u(a, b));
                            return c + "'" + a + "'" + e
                        })
                    }, u: function (a, b) {
                        if (void 0 === u.w) {
                            u.w = !1;
                            try {
                                var c = new URL("b", "http://a");
                                c.pathname = "c%20d";
                                u.w = "http://a/c%20d" === c.href
                            } catch (ua) {
                            }
                        }
                        if (u.w) return (new URL(a, b)).href;
                        c = u.G;
                        c || (c = document.implementation.createHTMLDocument("temp"), u.G = c, c.C = c.createElement("base"), c.head.appendChild(c.C), c.B = c.createElement("a"));
                        c.C.href = b;
                        c.B.href = a;
                        return c.B.href || a
                    }
                }, t = {
                    async: !0, load: function (a, b, c) {
                        if (a) if (a.match(/^data:/)) {
                            a = a.split(",");
                            var d = a[1];
                            d = -1 < a[0].indexOf(";base64") ? atob(d) : decodeURIComponent(d);
                            b(d)
                        } else {
                            var e = new XMLHttpRequest;
                            e.open("GET", a, t.async);
                            e.onload = function () {
                                var a = e.responseURL || e.getResponseHeader("Location");
                                a && 0 === a.indexOf("/") && (a = (location.origin ||
                                    location.protocol + "//" + location.host) + a);
                                var d = e.response || e.responseText;
                                304 === e.status || 0 === e.status || 200 <= e.status && 300 > e.status ? b(d, a) : c(d)
                            };
                            e.send()
                        } else c("error: href must be specified")
                    }
                }, r = /Trident/.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent);
            k.prototype.c = function (a) {
                var b = this;
                h(a.querySelectorAll("link[rel=import]"), function (a) {
                    return b.h(a)
                })
            };
            k.prototype.h = function (a) {
                var b = this, c = a.href;
                if (void 0 !== this.a[c]) {
                    var d = this.a[c];
                    d && d.__loaded && (a.import = d, this.g(a))
                } else this.b++,
                    this.a[c] = "pending", t.load(c, function (a, d) {
                    a = b.m(a, d || c);
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
            k.prototype.m = function (a, b) {
                if (!a) return document.createDocumentFragment();
                r && (a = a.replace(q, function (a, b, c) {
                    return -1 === a.indexOf("type=") ? b + " type=import-disable " + c : a
                }));
                var c = document.createElement("template");
                c.innerHTML = a;
                if (c.content) a = c.content; else for (a = document.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
                if (c = a.querySelector("base")) b = u.u(c.getAttribute("href"),
                    b), c.removeAttribute("href");
                var d = 0;
                h(a.querySelectorAll('link[rel=import], link[rel=stylesheet][href][type=import-disable],\n    style:not([type]), link[rel=stylesheet][href]:not([type]),\n    script:not([type]), script[type="application/javascript"],\n    script[type="text/javascript"]'), function (a) {
                    v(a);
                    u.J(a, b);
                    a.setAttribute("import-dependency", "");
                    "script" === a.localName && !a.src && a.textContent && (a.setAttribute("src", "data:text/javascript;charset=utf-8," + encodeURIComponent(a.textContent + ("\n//# sourceURL=" +
                        b + (d ? "-" + d : "") + ".js\n"))), a.textContent = "", d++)
                });
                return a
            };
            k.prototype.i = function () {
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
                    this.o(function () {
                        b = !0;
                        d()
                    })
                }
            };
            k.prototype.flatten = function (a) {
                var b = this;
                h(a.querySelectorAll("link[rel=import]"), function (a) {
                    var c = b.a[a.href];
                    (a.import = c) && c.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (b.a[a.href] =
                        a, a.readyState = "loading", a.import = a, b.flatten(c), a.appendChild(c))
                })
            };
            k.prototype.o = function (a) {
                function b(e) {
                    if (e < d) {
                        var f = c[e], k = document.createElement("script");
                        f.removeAttribute("import-dependency");
                        h(f.attributes, function (a) {
                            return k.setAttribute(a.name, a.value)
                        });
                        g = k;
                        f.parentNode.replaceChild(k, f);
                        v(k, function () {
                            g = null;
                            b(e + 1)
                        })
                    } else a()
                }

                var c = document.querySelectorAll("script[import-dependency]"), d = c.length;
                b(0)
            };
            k.prototype.v = function (a) {
                var b = document.querySelectorAll("style[import-dependency],\n    link[rel=stylesheet][import-dependency]"),
                    c = b.length;
                if (c) {
                    var e = r && !!document.querySelector("link[rel=stylesheet][href][type=import-disable]");
                    h(b, function (b) {
                        v(b, function () {
                            b.removeAttribute("import-dependency");
                            0 === --c && a()
                        });
                        if (e && b.parentNode !== document.head) {
                            var f = document.createElement(b.localName);
                            f.__appliedElement = b;
                            f.setAttribute("type", "import-placeholder");
                            b.parentNode.insertBefore(f, b.nextSibling);
                            for (f = d(b); f && d(f);) f = d(f);
                            f.parentNode !== document.head && (f = null);
                            document.head.insertBefore(b, f);
                            b.removeAttribute("type")
                        }
                    })
                } else a()
            };
            k.prototype.j = function () {
                var a = this;
                h(document.querySelectorAll("link[rel=import]"), function (b) {
                    return a.g(b)
                }, !0)
            };
            k.prototype.g = function (b) {
                b.__loaded || (b.__loaded = !0, b.import && (b.import.readyState = "complete"), b.dispatchEvent(a(b.import ? "load" : "error", {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                })))
            };
            k.prototype.l = function (a) {
                var b = this;
                h(a, function (a) {
                    return h(a.addedNodes, function (a) {
                        a && a.nodeType === Node.ELEMENT_NODE && (n(a) ? b.h(a) : b.c(a))
                    })
                })
            };
            if (l) {
                h(document.querySelectorAll("link[rel=import]"),
                    function (a) {
                        a.import && "loading" === a.import.readyState || (a.__loaded = !0)
                    });
                var w = function (a) {
                    a = a.target;
                    n(a) && (a.__loaded = !0)
                };
                document.addEventListener("load", w, !0);
                document.addEventListener("error", w, !0)
            } else {
                var x = Object.getOwnPropertyDescriptor(Node.prototype, "baseURI");
                Object.defineProperty((!x || x.configurable ? Node : Element).prototype, "baseURI", {
                    get: function () {
                        var a = n(this) ? this : d(this);
                        return a ? a.href : x && x.get ? x.get.call(this) : (document.querySelector("base") || window.location).href
                    }, configurable: !0,
                    enumerable: !0
                });
                e(function () {
                    return new k
                })
            }
            f(function () {
                return document.dispatchEvent(a("HTMLImportsLoaded", {cancelable: !0, bubbles: !0, detail: void 0}))
            });
            b.useNative = l;
            b.whenReady = f;
            b.importForElement = d
        })(window.HTMLImports = window.HTMLImports || {});
        var ta = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
        q.prototype.L = function (b, a) {
            this.o.set(b, a);
            this.m.set(a.constructor, a)
        };
        q.prototype.c = function (b) {
            return this.o.get(b)
        };
        q.prototype.K = function (b) {
            return this.m.get(b)
        };
        q.prototype.v = function (b) {
            this.h = !0;
            this.j.push(b)
        };
        q.prototype.l = function (b) {
            var a = this;
            this.h && w(b, function (b) {
                return a.g(b)
            })
        };
        q.prototype.g = function (b) {
            if (this.h && !b.__CE_patched) {
                b.__CE_patched = !0;
                for (var a = 0; a < this.j.length; a++) this.j[a](b)
            }
        };
        q.prototype.b = function (b) {
            var a = [];
            w(b, function (b) {
                return a.push(b)
            });
            for (b = 0; b < a.length; b++) {
                var d = a[b];
                1 === d.__CE_state ? this.connectedCallback(d) : this.i(d)
            }
        };
        q.prototype.a = function (b) {
            var a = [];
            w(b, function (b) {
                return a.push(b)
            });
            for (b = 0; b < a.length; b++) {
                var d = a[b];
                1 === d.__CE_state && this.disconnectedCallback(d)
            }
        };
        q.prototype.f = function (b, a) {
            var d = this;
            a = a ? a : {};
            var c = a.M || new Set, e = a.F || function (a) {
                return d.i(a)
            }, f = [];
            w(b, function (a) {
                if ("link" === a.localName && "import" === a.getAttribute("rel")) {
                    var b = a.import;
                    b instanceof Node && "complete" === b.readyState ? (b.__CE_isImportDocument = !0, b.__CE_hasRegistry = !0) : a.addEventListener("load", function () {
                        var b = a.import;
                        if (!b.__CE_documentLoadHandled) {
                            b.__CE_documentLoadHandled = !0;
                            b.__CE_isImportDocument =
                                !0;
                            b.__CE_hasRegistry = !0;
                            var f = new Set(c);
                            f.delete(b);
                            d.f(b, {M: f, F: e})
                        }
                    })
                } else f.push(a)
            }, c);
            if (this.h) for (b = 0; b < f.length; b++) this.g(f[b]);
            for (b = 0; b < f.length; b++) e(f[b])
        };
        q.prototype.i = function (b) {
            if (void 0 === b.__CE_state) {
                var a = this.c(b.localName);
                if (a) {
                    a.constructionStack.push(b);
                    var d = a.constructor;
                    try {
                        try {
                            if (new d !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
                        } finally {
                            a.constructionStack.pop()
                        }
                    } catch (f) {
                        throw b.__CE_state = 2, f;
                    }
                    b.__CE_state = 1;
                    b.__CE_definition =
                        a;
                    if (a.attributeChangedCallback) for (a = a.observedAttributes, d = 0; d < a.length; d++) {
                        var c = a[d], e = b.getAttribute(c);
                        null !== e && this.attributeChangedCallback(b, c, null, e, null)
                    }
                    g(b) && this.connectedCallback(b)
                }
            }
        };
        q.prototype.connectedCallback = function (b) {
            var a = b.__CE_definition;
            a.connectedCallback && a.connectedCallback.call(b)
        };
        q.prototype.disconnectedCallback = function (b) {
            var a = b.__CE_definition;
            a.disconnectedCallback && a.disconnectedCallback.call(b)
        };
        q.prototype.attributeChangedCallback = function (b, a, d, c, e) {
            var f =
                b.__CE_definition;
            f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(a) && f.attributeChangedCallback.call(b, a, d, c, e)
        };
        K.prototype.f = function () {
            this.b && this.b.disconnect()
        };
        K.prototype.g = function (b) {
            var a = this.a.readyState;
            "interactive" !== a && "complete" !== a || this.f();
            for (a = 0; a < b.length; a++) for (var d = b[a].addedNodes, c = 0; c < d.length; c++) this.c.f(d[c])
        };
        X.prototype.c = function () {
            if (this.a) throw Error("Already resolved.");
            this.a = void 0;
            this.b && this.b(void 0)
        };
        p.prototype.define = function (b, a) {
            var d =
                this;
            if (!(a instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
            if (!Y(b)) throw new SyntaxError("The element name '" + b + "' is not valid.");
            if (this.a.c(b)) throw Error("A custom element with name '" + b + "' has already been defined.");
            if (this.c) throw Error("A custom element is already being defined.");
            this.c = !0;
            try {
                var c = function (a) {
                    var b = e[a];
                    if (void 0 !== b && !(b instanceof Function)) throw Error("The '" + a + "' callback must be a function.");
                    return b
                }, e = a.prototype;
                if (!(e instanceof
                        Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
                var f = c("connectedCallback");
                var g = c("disconnectedCallback");
                var n = c("adoptedCallback");
                var k = c("attributeChangedCallback");
                var h = a.observedAttributes || []
            } catch (l) {
                return
            } finally {
                this.c = !1
            }
            a = {
                localName: b,
                constructor: a,
                connectedCallback: f,
                disconnectedCallback: g,
                adoptedCallback: n,
                attributeChangedCallback: k,
                observedAttributes: h,
                constructionStack: []
            };
            this.a.L(b, a);
            this.g.push(a);
            this.b || (this.b = !0, this.f(function () {
                return d.j()
            }))
        };
        p.prototype.j = function () {
            var b = this;
            if (!1 !== this.b) {
                this.b = !1;
                for (var a = this.g, d = [], c = new Map, e = 0; e < a.length; e++) c.set(a[e].localName, []);
                this.a.f(document, {
                    F: function (a) {
                        if (void 0 === a.__CE_state) {
                            var e = a.localName, f = c.get(e);
                            f ? f.push(a) : b.a.c(e) && d.push(a)
                        }
                    }
                });
                for (e = 0; e < d.length; e++) this.a.i(d[e]);
                for (; 0 < a.length;) {
                    var f = a.shift();
                    e = f.localName;
                    f = c.get(f.localName);
                    for (var g = 0; g < f.length; g++) this.a.i(f[g]);
                    (e = this.h.get(e)) && e.c()
                }
            }
        };
        p.prototype.get = function (b) {
            if (b = this.a.c(b)) return b.constructor
        };
        p.prototype.whenDefined = function (b) {
            if (!Y(b)) return Promise.reject(new SyntaxError("'" + b + "' is not a valid custom element name."));
            var a = this.h.get(b);
            if (a) return a.f;
            a = new X;
            this.h.set(b, a);
            this.a.c(b) && !this.g.some(function (a) {
                return a.localName === b
            }) && a.c();
            return a.f
        };
        p.prototype.l = function (b) {
            this.i.f();
            var a = this.f;
            this.f = function (d) {
                return b(function () {
                    return a(d)
                })
            }
        };
        window.CustomElementRegistry = p;
        p.prototype.define = p.prototype.define;
        p.prototype.get = p.prototype.get;
        p.prototype.whenDefined =
            p.prototype.whenDefined;
        p.prototype.polyfillWrapFlushCallback = p.prototype.l;
        var F = window.Document.prototype.createElement, oa = window.Document.prototype.createElementNS,
            na = window.Document.prototype.importNode, pa = window.Document.prototype.prepend,
            qa = window.Document.prototype.append, r = window.DocumentFragment.prototype.prepend,
            A = window.DocumentFragment.prototype.append, N = window.Node.prototype.cloneNode,
            y = window.Node.prototype.appendChild, U = window.Node.prototype.insertBefore,
            G = window.Node.prototype.removeChild,
            V = window.Node.prototype.replaceChild,
            J = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
            M = window.Element.prototype.attachShadow,
            D = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
            H = window.Element.prototype.getAttribute, O = window.Element.prototype.setAttribute,
            Q = window.Element.prototype.removeAttribute, z = window.Element.prototype.getAttributeNS,
            P = window.Element.prototype.setAttributeNS, R = window.Element.prototype.removeAttributeNS,
            T = window.Element.prototype.insertAdjacentElement,
            da = window.Element.prototype.prepend, ea = window.Element.prototype.append,
            ha = window.Element.prototype.before, ia = window.Element.prototype.after,
            ja = window.Element.prototype.replaceWith, ka = window.Element.prototype.remove, sa = window.HTMLElement,
            E = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
            S = window.HTMLElement.prototype.insertAdjacentElement, W = new function () {
            }, t = window.customElements;
        if (!t || t.forcePolyfill || "function" != typeof t.define || "function" != typeof t.get) t = new q, ra(t),
            ma(t), I(t, DocumentFragment.prototype, {
            s: r,
            append: A
        }), la(t), ca(t), document.__CE_hasRegistry = !0, r = new p(t), Object.defineProperty(window, "customElements", {
            configurable: !0,
            enumerable: !0,
            value: r
        });
        r = window.customElements;
        var B = window.HTMLImports, Z = window.HTMLTemplateElement;
        window.WebComponents = window.WebComponents || {};
        if (r && r.polyfillWrapFlushCallback) {
            var C, aa = function () {
                if (C) {
                    Z.I && Z.I(window.document);
                    var b = C;
                    C = null;
                    b();
                    return !0
                }
            }, ba = B.whenReady;
            r.polyfillWrapFlushCallback(function (b) {
                C = b;
                ba(aa)
            });
            B.whenReady = function (b) {
                ba(function () {
                    aa() ? B.whenReady(b) : b()
                })
            }
        }
        B.whenReady(function () {
            requestAnimationFrame(function () {
                window.WebComponents.ready = !0;
                document.dispatchEvent(new CustomEvent("WebComponentsReady", {bubbles: !0}))
            })
        });
        r = document.createElement("style");
        r.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
        A = document.querySelector("head");
        A.insertBefore(r, A.firstChild)
    })();
}).call(this);

//# sourceMappingURL=webcomponents-hi-ce.js.map
