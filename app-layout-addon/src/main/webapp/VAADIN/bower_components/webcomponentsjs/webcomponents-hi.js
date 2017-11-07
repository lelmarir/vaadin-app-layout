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
        (function (h) {
            function l(a, b) {
                if ("function" === typeof window.CustomEvent) return new CustomEvent(a, b);
                var c = document.createEvent("CustomEvent");
                c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);
                return c
            }

            function q(a) {
                if (z) return a.ownerDocument !== document ? a.ownerDocument : null;
                var b = a.__importDoc;
                if (!b && a.parentNode) {
                    b = a.parentNode;
                    if ("function" === typeof b.closest) b = b.closest("link[rel=import]"); else for (; !u(b) && (b = b.parentNode);) ;
                    a.__importDoc = b
                }
                return b
            }

            function p(a) {
                var b =
                    document.querySelectorAll("link[rel=import]:not([import-dependency])"), c = b.length;
                c ? k(b, function (b) {
                    return v(b, function () {
                        0 === --c && a()
                    })
                }) : a()
            }

            function m(a) {
                function b() {
                    "loading" !== document.readyState && document.body && (document.removeEventListener("readystatechange", b), a())
                }

                document.addEventListener("readystatechange", b);
                b()
            }

            function t(a) {
                m(function () {
                    return p(function () {
                        return a && a()
                    })
                })
            }

            function v(a, b) {
                if (a.__loaded) b && b(); else if ("script" === a.localName && !a.src || "style" === a.localName && !a.firstChild) a.__loaded =
                    !0, b && b(); else {
                    var c = function (d) {
                        a.removeEventListener(d.type, c);
                        a.__loaded = !0;
                        b && b()
                    };
                    a.addEventListener("load", c);
                    A && "style" === a.localName || a.addEventListener("error", c)
                }
            }

            function u(a) {
                return a.nodeType === Node.ELEMENT_NODE && "link" === a.localName && "import" === a.rel
            }

            function e() {
                var a = this;
                this.a = {};
                this.b = 0;
                this.h = new MutationObserver(function (b) {
                    return a.B(b)
                });
                this.h.observe(document.head, {childList: !0, subtree: !0});
                this.c(document)
            }

            function k(a, b, c) {
                var d = a ? a.length : 0, f = c ? -1 : 1;
                for (c = c ? d - 1 : 0; c < d &&
                0 <= c; c += f) b(a[c], c)
            }

            var z = "import" in document.createElement("link"), B = null;
            !1 === "currentScript" in document && Object.defineProperty(document, "currentScript", {
                get: function () {
                    return B || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null)
                }, configurable: !0
            });
            var w = /(url\()([^)]*)(\))/g, x = /(@import[\s]+(?!url\())([^;]*)(;)/g,
                y = /(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g, g = {
                    w: function (a, b) {
                        a.href && a.setAttribute("href", g.f(a.getAttribute("href"), b));
                        a.src && a.setAttribute("src",
                            g.f(a.getAttribute("src"), b));
                        if ("style" === a.localName) {
                            var c = g.s(a.textContent, b, w);
                            a.textContent = g.s(c, b, x)
                        }
                    }, s: function (a, b, c) {
                        return a.replace(c, function (a, c, n, e) {
                            a = n.replace(/["']/g, "");
                            b && (a = g.f(a, b));
                            return c + "'" + a + "'" + e
                        })
                    }, f: function (a, b) {
                        if (void 0 === g.g) {
                            g.g = !1;
                            try {
                                var c = new URL("b", "http://a");
                                c.pathname = "c%20d";
                                g.g = "http://a/c%20d" === c.href
                            } catch (d) {
                            }
                        }
                        if (g.g) return (new URL(a, b)).href;
                        c = g.u;
                        c || (c = document.implementation.createHTMLDocument("temp"), g.u = c, c.j = c.createElement("base"), c.head.appendChild(c.j),
                            c.i = c.createElement("a"));
                        c.j.href = b;
                        c.i.href = a;
                        return c.i.href || a
                    }
                }, C = {
                    async: !0, load: function (a, b, c) {
                        if (a) if (a.match(/^data:/)) {
                            a = a.split(",");
                            var d = a[1];
                            d = -1 < a[0].indexOf(";base64") ? atob(d) : decodeURIComponent(d);
                            b(d)
                        } else {
                            var f = new XMLHttpRequest;
                            f.open("GET", a, C.async);
                            f.onload = function () {
                                var a = f.responseURL || f.getResponseHeader("Location");
                                a && 0 === a.indexOf("/") && (a = (location.origin || location.protocol + "//" + location.host) + a);
                                var d = f.response || f.responseText;
                                304 === f.status || 0 === f.status || 200 <= f.status &&
                                300 > f.status ? b(d, a) : c(d)
                            };
                            f.send()
                        } else c("error: href must be specified")
                    }
                }, A = /Trident/.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent);
            e.prototype.c = function (a) {
                var b = this;
                k(a.querySelectorAll("link[rel=import]"), function (a) {
                    return b.m(a)
                })
            };
            e.prototype.m = function (a) {
                var b = this, c = a.href;
                if (void 0 !== this.a[c]) {
                    var d = this.a[c];
                    d && d.__loaded && (a.import = d, this.l(a))
                } else this.b++, this.a[c] = "pending", C.load(c, function (a, d) {
                    a = b.C(a, d || c);
                    b.a[c] = a;
                    b.b--;
                    b.c(a);
                    b.o()
                }, function () {
                    b.a[c] =
                        null;
                    b.b--;
                    b.o()
                })
            };
            e.prototype.C = function (a, b) {
                if (!a) return document.createDocumentFragment();
                A && (a = a.replace(y, function (a, b, c) {
                    return -1 === a.indexOf("type=") ? b + " type=import-disable " + c : a
                }));
                var c = document.createElement("template");
                c.innerHTML = a;
                if (c.content) a = c.content; else for (a = document.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
                if (c = a.querySelector("base")) b = g.f(c.getAttribute("href"), b), c.removeAttribute("href");
                var d = 0;
                k(a.querySelectorAll('link[rel=import], link[rel=stylesheet][href][type=import-disable],\n    style:not([type]), link[rel=stylesheet][href]:not([type]),\n    script:not([type]), script[type="application/javascript"],\n    script[type="text/javascript"]'),
                    function (a) {
                        v(a);
                        g.w(a, b);
                        a.setAttribute("import-dependency", "");
                        "script" === a.localName && !a.src && a.textContent && (a.setAttribute("src", "data:text/javascript;charset=utf-8," + encodeURIComponent(a.textContent + ("\n//# sourceURL=" + b + (d ? "-" + d : "") + ".js\n"))), a.textContent = "", d++)
                    });
                return a
            };
            e.prototype.o = function () {
                var a = this;
                if (!this.b) {
                    this.h.disconnect();
                    this.flatten(document);
                    var b = !1, c = !1, d = function () {
                        c && b && (a.c(document), a.b || (a.h.observe(document.head, {
                            childList: !0,
                            subtree: !0
                        }), a.A()))
                    };
                    this.F(function () {
                        c =
                            !0;
                        d()
                    });
                    this.D(function () {
                        b = !0;
                        d()
                    })
                }
            };
            e.prototype.flatten = function (a) {
                var b = this;
                k(a.querySelectorAll("link[rel=import]"), function (a) {
                    var c = b.a[a.href];
                    (a.import = c) && c.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (b.a[a.href] = a, a.readyState = "loading", a.import = a, b.flatten(c), a.appendChild(c))
                })
            };
            e.prototype.D = function (a) {
                function b(f) {
                    if (f < d) {
                        var n = c[f], e = document.createElement("script");
                        n.removeAttribute("import-dependency");
                        k(n.attributes, function (a) {
                            return e.setAttribute(a.name, a.value)
                        });
                        B = e;
                        n.parentNode.replaceChild(e,
                            n);
                        v(e, function () {
                            B = null;
                            b(f + 1)
                        })
                    } else a()
                }

                var c = document.querySelectorAll("script[import-dependency]"), d = c.length;
                b(0)
            };
            e.prototype.F = function (a) {
                var b = document.querySelectorAll("style[import-dependency],\n    link[rel=stylesheet][import-dependency]"),
                    c = b.length;
                if (c) {
                    var d = A && !!document.querySelector("link[rel=stylesheet][href][type=import-disable]");
                    k(b, function (b) {
                        v(b, function () {
                            b.removeAttribute("import-dependency");
                            0 === --c && a()
                        });
                        if (d && b.parentNode !== document.head) {
                            var e = document.createElement(b.localName);
                            e.__appliedElement = b;
                            e.setAttribute("type", "import-placeholder");
                            b.parentNode.insertBefore(e, b.nextSibling);
                            for (e = q(b); e && q(e);) e = q(e);
                            e.parentNode !== document.head && (e = null);
                            document.head.insertBefore(b, e);
                            b.removeAttribute("type")
                        }
                    })
                } else a()
            };
            e.prototype.A = function () {
                var a = this;
                k(document.querySelectorAll("link[rel=import]"), function (b) {
                    return a.l(b)
                }, !0)
            };
            e.prototype.l = function (a) {
                a.__loaded || (a.__loaded = !0, a.import && (a.import.readyState = "complete"), a.dispatchEvent(l(a.import ? "load" : "error", {
                    bubbles: !1,
                    cancelable: !1, detail: void 0
                })))
            };
            e.prototype.B = function (a) {
                var b = this;
                k(a, function (a) {
                    return k(a.addedNodes, function (a) {
                        a && a.nodeType === Node.ELEMENT_NODE && (u(a) ? b.m(a) : b.c(a))
                    })
                })
            };
            if (z) {
                k(document.querySelectorAll("link[rel=import]"), function (a) {
                    a.import && "loading" === a.import.readyState || (a.__loaded = !0)
                });
                var D = function (a) {
                    a = a.target;
                    u(a) && (a.__loaded = !0)
                };
                document.addEventListener("load", D, !0);
                document.addEventListener("error", D, !0)
            } else {
                var r = Object.getOwnPropertyDescriptor(Node.prototype, "baseURI");
                Object.defineProperty((!r || r.configurable ? Node : Element).prototype, "baseURI", {
                    get: function () {
                        var a = u(this) ? this : q(this);
                        return a ? a.href : r && r.get ? r.get.call(this) : (document.querySelector("base") || window.location).href
                    }, configurable: !0, enumerable: !0
                });
                m(function () {
                    return new e
                })
            }
            t(function () {
                return document.dispatchEvent(l("HTMLImportsLoaded", {cancelable: !0, bubbles: !0, detail: void 0}))
            });
            h.useNative = z;
            h.whenReady = t;
            h.importForElement = q
        })(window.HTMLImports = window.HTMLImports || {});
        var l = window.customElements,
            p = window.HTMLImports, t = window.HTMLTemplateElement;
        window.WebComponents = window.WebComponents || {};
        if (l && l.polyfillWrapFlushCallback) {
            var m, w = function () {
                if (m) {
                    t.v && t.v(window.document);
                    var h = m;
                    m = null;
                    h();
                    return !0
                }
            }, x = p.whenReady;
            l.polyfillWrapFlushCallback(function (h) {
                m = h;
                x(w)
            });
            p.whenReady = function (h) {
                x(function () {
                    w() ? p.whenReady(h) : h()
                })
            }
        }
        p.whenReady(function () {
            requestAnimationFrame(function () {
                window.WebComponents.ready = !0;
                document.dispatchEvent(new CustomEvent("WebComponentsReady", {bubbles: !0}))
            })
        });
        l = document.createElement("style");
        l.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
        var y = document.querySelector("head");
        y.insertBefore(l, y.firstChild)
    })();
}).call(this);

//# sourceMappingURL=webcomponents-hi.js.map
