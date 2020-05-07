/*!
 * Cropper v3.1.6
 * https://github.com/fengyuanchen/cropper
 *
 * Copyright (c) 2014-2018 Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-03-01T13:33:48.179Z
 */
! function(t, i) {
    "object" == typeof exports && "undefined" != typeof module ? i(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], i) : i(t.jQuery)
}(this, function(t) {
    "use strict";
    t = t && t.hasOwnProperty("default") ? t.default : t;
    var i = "undefined" != typeof window ? window : {},
        e = "cropper",
        a = "all",
        n = "crop",
        h = "move",
        o = "zoom",
        s = "e",
        r = "w",
        d = "s",
        c = "n",
        l = "ne",
        p = "nw",
        g = "se",
        m = "sw",
        u = e + "-crop",
        f = e + "-disabled",
        v = e + "-hidden",
        w = e + "-hide",
        x = e + "-modal",
        b = e + "-move",
        y = "action",
        C = "preview",
        M = "crop",
        $ = "move",
        B = "none",
        k = "crop",
        W = "cropend",
        D = "cropmove",
        T = "cropstart",
        Y = "dblclick",
        H = "error",
        X = "load",
        O = i.PointerEvent ? "pointerdown" : "touchstart mousedown",
        E = i.PointerEvent ? "pointermove" : "touchmove mousemove",
        N = i.PointerEvent ? "pointerup pointercancel" : "touchend touchcancel mouseup",
        R = "ready",
        z = "resize",
        L = "wheel mousewheel DOMMouseScroll",
        P = "zoom",
        I = /^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,
        U = /^data:/,
        A = /^data:image\/jpeg;base64,/,
        F = /^(img|canvas)$/i,
        j = {
            viewMode: 0,
            dragMode: M,
            aspectRatio: NaN,
            data: null,
            preview: "",
            responsive: !0,
            restore: !0,
            checkCrossOrigin: !0,
            checkOrientation: !0,
            modal: !0,
            guides: !0,
            center: !0,
            highlight: !0,
            background: !0,
            autoCrop: !0,
            autoCropArea: .8,
            movable: !0,
            rotatable: !0,
            scalable: !0,
            zoomable: !0,
            zoomOnTouch: !0,
            zoomOnWheel: !0,
            wheelZoomRatio: .1,
            cropBoxMovable: !0,
            cropBoxResizable: !0,
            toggleDragModeOnDblclick: !0,
            minCanvasWidth: 0,
            minCanvasHeight: 0,
            minCropBoxWidth: 0,
            minCropBoxHeight: 0,
            minContainerWidth: 200,
            minContainerHeight: 100,
            ready: null,
            cropstart: null,
            cropmove: null,
            cropend: null,
            crop: null,
            zoom: null
        },
        S = function(t, i) {
            if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
        },
        q = function() {
            function t(t, i) {
                for (var e = 0; e < i.length; e++) {
                    var a = i[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(i, e, a) {
                return e && t(i.prototype, e), a && t(i, a), i
            }
        }(),
        Q = function(t) {
            if (Array.isArray(t)) {
                for (var i = 0, e = Array(t.length); i < t.length; i++) e[i] = t[i];
                return e
            }
            return Array.from(t)
        };
    var K = Number.isNaN || i.isNaN;

    function Z(t) {
        return "number" == typeof t && !K(t)
    }

    function V(t) {
        return void 0 === t
    }

    function G(t, i) {
        for (var e = arguments.length, a = Array(e > 2 ? e - 2 : 0), n = 2; n < e; n++) a[n - 2] = arguments[n];
        return function() {
            for (var e = arguments.length, n = Array(e), h = 0; h < e; h++) n[h] = arguments[h];
            return t.apply(i, a.concat(n))
        }
    }
    var J = Object.keys || function(i) {
            var e = [];
            return t.each(i, function(t) {
                e.push(t)
            }), e
        },
        _ = /\.\d*(?:0|9){12}\d*$/i;

    function tt(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e11;
        return _.test(t) ? Math.round(t * i) / i : t
    }
    var it = i.location,
        et = /^(https?:)\/\/([^:/?#]+):?(\d*)/i;

    function at(t) {
        var i = t.match(et);
        return i && (i[1] !== it.protocol || i[2] !== it.hostname || i[3] !== it.port)
    }

    function nt(t) {
        var i = "timestamp=" + (new Date).getTime();
        return t + (-1 === t.indexOf("?") ? "?" : "&") + i
    }

    function ht(t) {
        var i = t.rotate,
            e = t.scaleX,
            a = t.scaleY,
            n = t.translateX,
            h = t.translateY,
            o = [];
        return Z(n) && 0 !== n && o.push("translateX(" + n + "px)"), Z(h) && 0 !== h && o.push("translateY(" + h + "px)"), Z(i) && 0 !== i && o.push("rotate(" + i + "deg)"), Z(e) && 1 !== e && o.push("scaleX(" + e + ")"), Z(a) && 1 !== a && o.push("scaleY(" + a + ")"), o.length ? o.join(" ") : "none"
    }
    var ot = i.navigator,
        st = ot && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(ot.userAgent);

    function rt(i, e) {
        var a = i.pageX,
            n = i.pageY,
            h = {
                endX: a,
                endY: n
            };
        return e ? h : t.extend({
            startX: a,
            startY: n
        }, h)
    }
    var dt = Number.isFinite || i.isFinite;

    function ct(t) {
        var i = t.aspectRatio,
            e = t.height,
            a = t.width,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "contain",
            h = function(t) {
                return dt(t) && t > 0
            };
        if (h(a) && h(e)) {
            var o = e * i;
            "contain" === n && o > a || "cover" === n && o < a ? e = a / i : a = e * i
        } else h(a) ? e = a / i : h(e) && (a = e * i);
        return {
            width: a,
            height: e
        }
    }
    var lt = String.fromCharCode;
    var pt = /^data:.*,/;

    function gt(t) {
        var i = new DataView(t),
            e = void 0,
            a = void 0,
            n = void 0,
            h = void 0;
        if (255 === i.getUint8(0) && 216 === i.getUint8(1))
            for (var o = i.byteLength, s = 2; s < o;) {
                if (255 === i.getUint8(s) && 225 === i.getUint8(s + 1)) {
                    n = s;
                    break
                }
                s += 1
            }
        if (n) {
            var r = n + 10;
            if ("Exif" === function(t, i, e) {
                    var a = "",
                        n = void 0;
                    for (e += i, n = i; n < e; n += 1) a += lt(t.getUint8(n));
                    return a
                }(i, n + 4, 4)) {
                var d = i.getUint16(r);
                if (((a = 18761 === d) || 19789 === d) && 42 === i.getUint16(r + 2, a)) {
                    var c = i.getUint32(r + 4, a);
                    c >= 8 && (h = r + c)
                }
            }
        }
        if (h) {
            var l = i.getUint16(h, a),
                p = void 0,
                g = void 0;
            for (g = 0; g < l; g += 1)
                if (p = h + 12 * g + 2, 274 === i.getUint16(p, a)) {
                    p += 8, e = i.getUint16(p, a), i.setUint16(p, 1, a);
                    break
                }
        }
        return e
    }
    var mt = {
            render: function() {
                this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox()
            },
            initContainer: function() {
                var t = this.$element,
                    i = this.options,
                    e = this.$container,
                    a = this.$cropper;
                a.addClass(v), t.removeClass(v), a.css(this.container = {
                    width: Math.max(e.width(), Number(i.minContainerWidth) || 200),
                    height: Math.max(e.height(), Number(i.minContainerHeight) || 100)
                }), t.addClass(v), a.removeClass(v)
            },
            initCanvas: function() {
                var i = this.container,
                    e = this.image,
                    a = this.options.viewMode,
                    n = Math.abs(e.rotate) % 180 == 90,
                    h = n ? e.naturalHeight : e.naturalWidth,
                    o = n ? e.naturalWidth : e.naturalHeight,
                    s = h / o,
                    r = i.width,
                    d = i.height;
                i.height * s > i.width ? 3 === a ? r = i.height * s : d = i.width / s : 3 === a ? d = i.width / s : r = i.height * s;
                var c = {
                    aspectRatio: s,
                    naturalWidth: h,
                    naturalHeight: o,
                    width: r,
                    height: d
                };
                c.left = (i.width - r) / 2, c.top = (i.height - d) / 2, c.oldLeft = c.left, c.oldTop = c.top, this.canvas = c, this.limited = 1 === a || 2 === a, this.limitCanvas(!0, !0), this.initialImage = t.extend({}, e), this.initialCanvas = t.extend({}, c)
            },
            limitCanvas: function(t, i) {
                var e = this.options,
                    a = this.container,
                    n = this.canvas,
                    h = this.cropBox,
                    o = e.viewMode,
                    s = n.aspectRatio,
                    r = this.cropped && h;
                if (t) {
                    var d = Number(e.minCanvasWidth) || 0,
                        c = Number(e.minCanvasHeight) || 0;
                    o > 0 && (o > 1 ? (d = Math.max(d, a.width), c = Math.max(c, a.height), 3 === o && (c * s > d ? d = c * s : c = d / s)) : d ? d = Math.max(d, r ? h.width : 0) : c ? c = Math.max(c, r ? h.height : 0) : r && (d = h.width, (c = h.height) * s > d ? d = c * s : c = d / s));
                    var l = ct({
                        aspectRatio: s,
                        width: d,
                        height: c
                    });
                    d = l.width, c = l.height, n.minWidth = d, n.minHeight = c, n.maxWidth = 1 / 0, n.maxHeight = 1 / 0
                }
                if (i)
                    if (o > 0) {
                        var p = a.width - n.width,
                            g = a.height - n.height;
                        n.minLeft = Math.min(0, p), n.minTop = Math.min(0, g), n.maxLeft = Math.max(0, p), n.maxTop = Math.max(0, g), r && this.limited && (n.minLeft = Math.min(h.left, h.left + h.width - n.width), n.minTop = Math.min(h.top, h.top + h.height - n.height), n.maxLeft = h.left, n.maxTop = h.top, 2 === o && (n.width >= a.width && (n.minLeft = Math.min(0, p), n.maxLeft = Math.max(0, p)), n.height >= a.height && (n.minTop = Math.min(0, g), n.maxTop = Math.max(0, g))))
                    } else n.minLeft = -n.width, n.minTop = -n.height, n.maxLeft = a.width, n.maxTop = a.height
            },
            renderCanvas: function(t, i) {
                var e = this.canvas,
                    a = this.image;
                if (i) {
                    var n = function(t) {
                            var i = t.width,
                                e = t.height,
                                a = t.degree;
                            if (90 == (a = Math.abs(a) % 180)) return {
                                width: e,
                                height: i
                            };
                            var n = a % 90 * Math.PI / 180,
                                h = Math.sin(n),
                                o = Math.cos(n),
                                s = i * o + e * h,
                                r = i * h + e * o;
                            return a > 90 ? {
                                width: r,
                                height: s
                            } : {
                                width: s,
                                height: r
                            }
                        }({
                            width: a.naturalWidth * Math.abs(a.scaleX || 1),
                            height: a.naturalHeight * Math.abs(a.scaleY || 1),
                            degree: a.rotate || 0
                        }),
                        h = n.width,
                        o = n.height,
                        s = e.width * (h / e.naturalWidth),
                        r = e.height * (o / e.naturalHeight);
                    e.left -= (s - e.width) / 2, e.top -= (r - e.height) / 2, e.width = s, e.height = r, e.aspectRatio = h / o, e.naturalWidth = h, e.naturalHeight = o, this.limitCanvas(!0, !1)
                }(e.width > e.maxWidth || e.width < e.minWidth) && (e.left = e.oldLeft), (e.height > e.maxHeight || e.height < e.minHeight) && (e.top = e.oldTop), e.width = Math.min(Math.max(e.width, e.minWidth), e.maxWidth), e.height = Math.min(Math.max(e.height, e.minHeight), e.maxHeight), this.limitCanvas(!1, !0), e.left = Math.min(Math.max(e.left, e.minLeft), e.maxLeft), e.top = Math.min(Math.max(e.top, e.minTop), e.maxTop), e.oldLeft = e.left, e.oldTop = e.top, this.$canvas.css({
                    width: e.width,
                    height: e.height,
                    transform: ht({
                        translateX: e.left,
                        translateY: e.top
                    })
                }), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0)
            },
            renderImage: function(i) {
                var e = this.canvas,
                    a = this.image,
                    n = a.naturalWidth * (e.width / e.naturalWidth),
                    h = a.naturalHeight * (e.height / e.naturalHeight);
                t.extend(a, {
                    width: n,
                    height: h,
                    left: (e.width - n) / 2,
                    top: (e.height - h) / 2
                }), this.$clone.css({
                    width: a.width,
                    height: a.height,
                    transform: ht(t.extend({
                        translateX: a.left,
                        translateY: a.top
                    }, a))
                }), i && this.output()
            },
            initCropBox: function() {
                var i = this.options,
                    e = this.canvas,
                    a = i.aspectRatio,
                    n = Number(i.autoCropArea) || .8,
                    h = {
                        width: e.width,
                        height: e.height
                    };
                a && (e.height * a > e.width ? h.height = h.width / a : h.width = h.height * a), this.cropBox = h, this.limitCropBox(!0, !0), h.width = Math.min(Math.max(h.width, h.minWidth), h.maxWidth), h.height = Math.min(Math.max(h.height, h.minHeight), h.maxHeight), h.width = Math.max(h.minWidth, h.width * n), h.height = Math.max(h.minHeight, h.height * n), h.left = e.left + (e.width - h.width) / 2, h.top = e.top + (e.height - h.height) / 2, h.oldLeft = h.left, h.oldTop = h.top, this.initialCropBox = t.extend({}, h)
            },
            limitCropBox: function(t, i) {
                var e = this.options,
                    a = this.container,
                    n = this.canvas,
                    h = this.cropBox,
                    o = this.limited,
                    s = e.aspectRatio;
                if (t) {
                    var r = Number(e.minCropBoxWidth) || 0,
                        d = Number(e.minCropBoxHeight) || 0,
                        c = Math.min(a.width, o ? n.width : a.width),
                        l = Math.min(a.height, o ? n.height : a.height);
                    r = Math.min(r, a.width), d = Math.min(d, a.height), s && (r && d ? d * s > r ? d = r / s : r = d * s : r ? d = r / s : d && (r = d * s), l * s > c ? l = c / s : c = l * s), h.minWidth = Math.min(r, c), h.minHeight = Math.min(d, l), h.maxWidth = c, h.maxHeight = l
                }
                i && (o ? (h.minLeft = Math.max(0, n.left), h.minTop = Math.max(0, n.top), h.maxLeft = Math.min(a.width, n.left + n.width) - h.width, h.maxTop = Math.min(a.height, n.top + n.height) - h.height) : (h.minLeft = 0, h.minTop = 0, h.maxLeft = a.width - h.width, h.maxTop = a.height - h.height))
            },
            renderCropBox: function() {
                var t = this.options,
                    i = this.container,
                    e = this.cropBox;
                (e.width > e.maxWidth || e.width < e.minWidth) && (e.left = e.oldLeft), (e.height > e.maxHeight || e.height < e.minHeight) && (e.top = e.oldTop), e.width = Math.min(Math.max(e.width, e.minWidth), e.maxWidth), e.height = Math.min(Math.max(e.height, e.minHeight), e.maxHeight), this.limitCropBox(!1, !0), e.left = Math.min(Math.max(e.left, e.minLeft), e.maxLeft), e.top = Math.min(Math.max(e.top, e.minTop), e.maxTop), e.oldLeft = e.left, e.oldTop = e.top, t.movable && t.cropBoxMovable && this.$face.data(y, e.width >= i.width && e.height >= i.height ? h : a), this.$cropBox.css({
                    width: e.width,
                    height: e.height,
                    transform: ht({
                        translateX: e.left,
                        translateY: e.top
                    })
                }), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output()
            },
            output: function() {
                this.preview(), this.completed && this.trigger(k, this.getData())
            }
        },
        ut = {
            initPreview: function() {
                var i = this.crossOrigin,
                    e = i ? this.crossOriginUrl : this.url,
                    a = document.createElement("img");
                i && (a.crossOrigin = i), a.src = e;
                var n = t(a);
                this.$preview = t(this.options.preview), this.$clone2 = n, this.$viewBox.html(n), this.$preview.each(function(a, n) {
                    var h = t(n),
                        o = document.createElement("img");
                    h.data(C, {
                        width: h.width(),
                        height: h.height(),
                        html: h.html()
                    }), i && (o.crossOrigin = i), o.src = e, o.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', h.html(o)
                })
            },
            resetPreview: function() {
                this.$preview.each(function(i, e) {
                    var a = t(e),
                        n = a.data(C);
                    a.css({
                        width: n.width,
                        height: n.height
                    }).html(n.html).removeData(C)
                })
            },
            preview: function() {
                var i = this.image,
                    e = this.canvas,
                    a = this.cropBox,
                    n = a.width,
                    h = a.height,
                    o = i.width,
                    s = i.height,
                    r = a.left - e.left - i.left,
                    d = a.top - e.top - i.top;
                this.cropped && !this.disabled && (this.$clone2.css({
                    width: o,
                    height: s,
                    transform: ht(t.extend({
                        translateX: -r,
                        translateY: -d
                    }, i))
                }), this.$preview.each(function(e, a) {
                    var c = t(a),
                        l = c.data(C),
                        p = l.width,
                        g = l.height,
                        m = p,
                        u = g,
                        f = 1;
                    n && (u = h * (f = p / n)), h && u > g && (m = n * (f = g / h), u = g), c.css({
                        width: m,
                        height: u
                    }).find("img").css({
                        width: o * f,
                        height: s * f,
                        transform: ht(t.extend({
                            translateX: -r * f,
                            translateY: -d * f
                        }, i))
                    })
                }))
            }
        },
        ft = {
            bind: function() {
                var i = this.$element,
                    e = this.options,
                    a = this.$cropper;
                t.isFunction(e.cropstart) && i.on(T, e.cropstart), t.isFunction(e.cropmove) && i.on(D, e.cropmove), t.isFunction(e.cropend) && i.on(W, e.cropend), t.isFunction(e.crop) && i.on(k, e.crop), t.isFunction(e.zoom) && i.on(P, e.zoom), a.on(O, G(this.cropStart, this)), e.zoomable && e.zoomOnWheel && a.on(L, G(this.wheel, this)), e.toggleDragModeOnDblclick && a.on(Y, G(this.dblclick, this)), t(this.element.ownerDocument).on(E, this.onCropMove = G(this.cropMove, this)).on(N, this.onCropEnd = G(this.cropEnd, this)), e.responsive && t(window).on(z, this.onResize = G(this.resize, this))
            },
            unbind: function() {
                var i = this.$element,
                    e = this.options,
                    a = this.$cropper;
                t.isFunction(e.cropstart) && i.off(T, e.cropstart), t.isFunction(e.cropmove) && i.off(D, e.cropmove), t.isFunction(e.cropend) && i.off(W, e.cropend), t.isFunction(e.crop) && i.off(k, e.crop), t.isFunction(e.zoom) && i.off(P, e.zoom), a.off(O, this.cropStart), e.zoomable && e.zoomOnWheel && a.off(L, this.wheel), e.toggleDragModeOnDblclick && a.off(Y, this.dblclick), t(this.element.ownerDocument).off(E, this.onCropMove).off(N, this.onCropEnd), e.responsive && t(window).off(z, this.onResize)
            }
        },
        vt = {
            resize: function() {
                var i = this.options,
                    e = this.$container,
                    a = this.container,
                    n = Number(i.minContainerWidth) || 200,
                    h = Number(i.minContainerHeight) || 100;
                if (!(this.disabled || a.width <= n || a.height <= h)) {
                    var o = e.width() / a.width;
                    if (1 !== o || e.height() !== a.height) {
                        var s = void 0,
                            r = void 0;
                        i.restore && (s = this.getCanvasData(), r = this.getCropBoxData()), this.render(), i.restore && (this.setCanvasData(t.each(s, function(t, i) {
                            s[t] = i * o
                        })), this.setCropBoxData(t.each(r, function(t, i) {
                            r[t] = i * o
                        })))
                    }
                }
            },
            dblclick: function() {
                this.disabled || this.options.dragMode === B || this.setDragMode(this.$dragBox.hasClass(u) ? $ : M)
            },
            wheel: function(t) {
                var i = this,
                    e = t.originalEvent || t,
                    a = Number(this.options.wheelZoomRatio) || .1;
                if (!this.disabled && (t.preventDefault(), !this.wheeling)) {
                    this.wheeling = !0, setTimeout(function() {
                        i.wheeling = !1
                    }, 50);
                    var n = 1;
                    e.deltaY ? n = e.deltaY > 0 ? 1 : -1 : e.wheelDelta ? n = -e.wheelDelta / 120 : e.detail && (n = e.detail > 0 ? 1 : -1), this.zoom(-n * a, t)
                }
            },
            cropStart: function(i) {
                if (!this.disabled) {
                    var e = this.options,
                        a = this.pointers,
                        h = i.originalEvent,
                        s = void 0;
                    h && h.changedTouches ? t.each(h.changedTouches, function(t, i) {
                        a[i.identifier] = rt(i)
                    }) : a[h && h.pointerId || 0] = rt(h || i), s = J(a).length > 1 && e.zoomable && e.zoomOnTouch ? o : t(i.target).data(y), I.test(s) && (this.trigger(T, {
                        originalEvent: h,
                        action: s
                    }).isDefaultPrevented() || (i.preventDefault(), this.action = s, this.cropping = !1, s === n && (this.cropping = !0, this.$dragBox.addClass(x))))
                }
            },
            cropMove: function(i) {
                var e = this.action;
                if (!this.disabled && e) {
                    var a = this.pointers,
                        n = i.originalEvent;
                    i.preventDefault(), this.trigger(D, {
                        originalEvent: n,
                        action: e
                    }).isDefaultPrevented() || (n && n.changedTouches ? t.each(n.changedTouches, function(i, e) {
                        t.extend(a[e.identifier], rt(e, !0))
                    }) : t.extend(a[n && n.pointerId || 0], rt(n || i, !0)), this.change(i))
                }
            },
            cropEnd: function(i) {
                if (!this.disabled) {
                    var e = this.action,
                        a = this.pointers,
                        n = i.originalEvent;
                    n && n.changedTouches ? t.each(n.changedTouches, function(t, i) {
                        delete a[i.identifier]
                    }) : delete a[n && n.pointerId || 0], e && (i.preventDefault(), J(a).length || (this.action = ""), this.cropping && (this.cropping = !1, this.$dragBox.toggleClass(x, this.cropped && this.options.modal)), this.trigger(W, {
                        originalEvent: n,
                        action: e
                    }))
                }
            }
        },
        wt = {
            change: function(i) {
                var e = this.options,
                    u = this.pointers,
                    f = this.container,
                    w = this.canvas,
                    x = this.cropBox,
                    b = this.action,
                    y = e.aspectRatio,
                    C = x.left,
                    M = x.top,
                    $ = x.width,
                    B = x.height,
                    k = C + $,
                    W = M + B,
                    D = 0,
                    T = 0,
                    Y = f.width,
                    H = f.height,
                    X = !0,
                    O = void 0;
                !y && i.shiftKey && (y = $ && B ? $ / B : 1), this.limited && (D = x.minLeft, T = x.minTop, Y = D + Math.min(f.width, w.width, w.left + w.width), H = T + Math.min(f.height, w.height, w.top + w.height));
                var E, N, R, z = u[J(u)[0]],
                    L = {
                        x: z.endX - z.startX,
                        y: z.endY - z.startY
                    },
                    P = function(t) {
                        switch (t) {
                            case s:
                                k + L.x > Y && (L.x = Y - k);
                                break;
                            case r:
                                C + L.x < D && (L.x = D - C);
                                break;
                            case c:
                                M + L.y < T && (L.y = T - M);
                                break;
                            case d:
                                W + L.y > H && (L.y = H - W)
                        }
                    };
                switch (b) {
                    case a:
                        C += L.x, M += L.y;
                        break;
                    case s:
                        if (L.x >= 0 && (k >= Y || y && (M <= T || W >= H))) {
                            X = !1;
                            break
                        }
                        P(s), $ += L.x, y && (B = $ / y, M -= L.x / y / 2), $ < 0 && (b = r, $ = 0);
                        break;
                    case c:
                        if (L.y <= 0 && (M <= T || y && (C <= D || k >= Y))) {
                            X = !1;
                            break
                        }
                        P(c), B -= L.y, M += L.y, y && ($ = B * y, C += L.y * y / 2), B < 0 && (b = d, B = 0);
                        break;
                    case r:
                        if (L.x <= 0 && (C <= D || y && (M <= T || W >= H))) {
                            X = !1;
                            break
                        }
                        P(r), $ -= L.x, C += L.x, y && (B = $ / y, M += L.x / y / 2), $ < 0 && (b = s, $ = 0);
                        break;
                    case d:
                        if (L.y >= 0 && (W >= H || y && (C <= D || k >= Y))) {
                            X = !1;
                            break
                        }
                        P(d), B += L.y, y && ($ = B * y, C -= L.y * y / 2), B < 0 && (b = c, B = 0);
                        break;
                    case l:
                        if (y) {
                            if (L.y <= 0 && (M <= T || k >= Y)) {
                                X = !1;
                                break
                            }
                            P(c), B -= L.y, M += L.y, $ = B * y
                        } else P(c), P(s), L.x >= 0 ? k < Y ? $ += L.x : L.y <= 0 && M <= T && (X = !1) : $ += L.x, L.y <= 0 ? M > T && (B -= L.y, M += L.y) : (B -= L.y, M += L.y);
                        $ < 0 && B < 0 ? (b = m, B = 0, $ = 0) : $ < 0 ? (b = p, $ = 0) : B < 0 && (b = g, B = 0);
                        break;
                    case p:
                        if (y) {
                            if (L.y <= 0 && (M <= T || C <= D)) {
                                X = !1;
                                break
                            }
                            P(c), B -= L.y, M += L.y, $ = B * y, C += L.y * y
                        } else P(c), P(r), L.x <= 0 ? C > D ? ($ -= L.x, C += L.x) : L.y <= 0 && M <= T && (X = !1) : ($ -= L.x, C += L.x), L.y <= 0 ? M > T && (B -= L.y, M += L.y) : (B -= L.y, M += L.y);
                        $ < 0 && B < 0 ? (b = g, B = 0, $ = 0) : $ < 0 ? (b = l, $ = 0) : B < 0 && (b = m, B = 0);
                        break;
                    case m:
                        if (y) {
                            if (L.x <= 0 && (C <= D || W >= H)) {
                                X = !1;
                                break
                            }
                            P(r), $ -= L.x, C += L.x, B = $ / y
                        } else P(d), P(r), L.x <= 0 ? C > D ? ($ -= L.x, C += L.x) : L.y >= 0 && W >= H && (X = !1) : ($ -= L.x, C += L.x), L.y >= 0 ? W < H && (B += L.y) : B += L.y;
                        $ < 0 && B < 0 ? (b = l, B = 0, $ = 0) : $ < 0 ? (b = g, $ = 0) : B < 0 && (b = p, B = 0);
                        break;
                    case g:
                        if (y) {
                            if (L.x >= 0 && (k >= Y || W >= H)) {
                                X = !1;
                                break
                            }
                            P(s), B = ($ += L.x) / y
                        } else P(d), P(s), L.x >= 0 ? k < Y ? $ += L.x : L.y >= 0 && W >= H && (X = !1) : $ += L.x, L.y >= 0 ? W < H && (B += L.y) : B += L.y;
                        $ < 0 && B < 0 ? (b = p, B = 0, $ = 0) : $ < 0 ? (b = m, $ = 0) : B < 0 && (b = l, B = 0);
                        break;
                    case h:
                        this.move(L.x, L.y), X = !1;
                        break;
                    case o:
                        this.zoom((E = u, N = t.extend({}, E), R = [], t.each(E, function(i, e) {
                            delete N[i], t.each(N, function(t, i) {
                                var a = Math.abs(e.startX - i.startX),
                                    n = Math.abs(e.startY - i.startY),
                                    h = Math.abs(e.endX - i.endX),
                                    o = Math.abs(e.endY - i.endY),
                                    s = Math.sqrt(a * a + n * n),
                                    r = (Math.sqrt(h * h + o * o) - s) / s;
                                R.push(r)
                            })
                        }), R.sort(function(t, i) {
                            return Math.abs(t) < Math.abs(i)
                        }), R[0]), i.originalEvent), X = !1;
                        break;
                    case n:
                        if (!L.x || !L.y) {
                            X = !1;
                            break
                        }
                        O = this.$cropper.offset(), C = z.startX - O.left, M = z.startY - O.top, $ = x.minWidth, B = x.minHeight, L.x > 0 ? b = L.y > 0 ? g : l : L.x < 0 && (C -= $, b = L.y > 0 ? m : p), L.y < 0 && (M -= B), this.cropped || (this.$cropBox.removeClass(v), this.cropped = !0, this.limited && this.limitCropBox(!0, !0))
                }
                X && (x.width = $, x.height = B, x.left = C, x.top = M, this.action = b, this.renderCropBox()), t.each(u, function(t, i) {
                    i.startX = i.endX, i.startY = i.endY
                })
            }
        },
        xt = {
            crop: function() {
                this.ready && !this.disabled && (this.cropped || (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && this.$dragBox.addClass(x), this.$cropBox.removeClass(v)), this.setCropBoxData(this.initialCropBox))
            },
            reset: function() {
                this.ready && !this.disabled && (this.image = t.extend({}, this.initialImage), this.canvas = t.extend({}, this.initialCanvas), this.cropBox = t.extend({}, this.initialCropBox), this.renderCanvas(), this.cropped && this.renderCropBox())
            },
            clear: function() {
                this.cropped && !this.disabled && (t.extend(this.cropBox, {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0
                }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), this.$dragBox.removeClass(x), this.$cropBox.addClass(v))
            },
            replace: function(t, i) {
                !this.disabled && t && (this.isImg && this.$element.attr("src", t), i ? (this.url = t, this.$clone.attr("src", t), this.ready && this.$preview.find("img").add(this.$clone2).attr("src", t)) : (this.isImg && (this.replaced = !0), this.options.data = null, this.load(t)))
            },
            enable: function() {
                this.ready && (this.disabled = !1, this.$cropper.removeClass(f))
            },
            disable: function() {
                this.ready && (this.disabled = !0, this.$cropper.addClass(f))
            },
            destroy: function() {
                var t = this.$element;
                this.loaded ? (this.isImg && this.replaced && t.attr("src", this.originalUrl), this.unbuild(), t.removeClass(v)) : this.isImg ? t.off(X, this.start) : this.$clone && this.$clone.remove(), t.removeData(e)
            },
            move: function(t, i) {
                var e = this.canvas,
                    a = e.left,
                    n = e.top;
                this.moveTo(V(t) ? t : a + Number(t), V(i) ? i : n + Number(i))
            },
            moveTo: function(t, i) {
                var e = this.canvas,
                    a = !1;
                V(i) && (i = t), t = Number(t), i = Number(i), this.ready && !this.disabled && this.options.movable && (Z(t) && (e.left = t, a = !0), Z(i) && (e.top = i, a = !0), a && this.renderCanvas(!0))
            },
            zoom: function(t, i) {
                var e = this.canvas;
                t = (t = Number(t)) < 0 ? 1 / (1 - t) : 1 + t, this.zoomTo(e.width * t / e.naturalWidth, i)
            },
            zoomTo: function(i, e) {
                var a, n, h, o, s = this.options,
                    r = this.pointers,
                    d = this.canvas,
                    c = d.width,
                    l = d.height,
                    p = d.naturalWidth,
                    g = d.naturalHeight;
                if ((i = Number(i)) >= 0 && this.ready && !this.disabled && s.zoomable) {
                    var m = p * i,
                        u = g * i,
                        f = void 0;
                    if (e && (f = e.originalEvent), this.trigger(P, {
                            originalEvent: f,
                            oldRatio: c / p,
                            ratio: m / p
                        }).isDefaultPrevented()) return;
                    if (f) {
                        var v = this.$cropper.offset(),
                            w = r && J(r).length ? (a = r, n = 0, h = 0, o = 0, t.each(a, function(t, i) {
                                var e = i.startX,
                                    a = i.startY;
                                n += e, h += a, o += 1
                            }), {
                                pageX: n /= o,
                                pageY: h /= o
                            }) : {
                                pageX: e.pageX || f.pageX || 0,
                                pageY: e.pageY || f.pageY || 0
                            };
                        d.left -= (m - c) * ((w.pageX - v.left - d.left) / c), d.top -= (u - l) * ((w.pageY - v.top - d.top) / l)
                    } else d.left -= (m - c) / 2, d.top -= (u - l) / 2;
                    d.width = m, d.height = u, this.renderCanvas(!0)
                }
            },
            rotate: function(t) {
                this.rotateTo((this.image.rotate || 0) + Number(t))
            },
            rotateTo: function(t) {
                Z(t = Number(t)) && this.ready && !this.disabled && this.options.rotatable && (this.image.rotate = t % 360, this.renderCanvas(!0, !0))
            },
            scaleX: function(t) {
                var i = this.image.scaleY;
                this.scale(t, Z(i) ? i : 1)
            },
            scaleY: function(t) {
                var i = this.image.scaleX;
                this.scale(Z(i) ? i : 1, t)
            },
            scale: function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                    e = this.image,
                    a = !1;
                t = Number(t), i = Number(i), this.ready && !this.disabled && this.options.scalable && (Z(t) && (e.scaleX = t, a = !0), Z(i) && (e.scaleY = i, a = !0), a && this.renderCanvas(!0, !0))
            },
            getData: function() {
                var i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    e = this.options,
                    a = this.image,
                    n = this.canvas,
                    h = this.cropBox,
                    o = void 0;
                if (this.ready && this.cropped) {
                    o = {
                        x: h.left - n.left,
                        y: h.top - n.top,
                        width: h.width,
                        height: h.height
                    };
                    var s = a.width / a.naturalWidth;
                    t.each(o, function(t, e) {
                        e /= s, o[t] = i ? Math.round(e) : e
                    })
                } else o = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
                return e.rotatable && (o.rotate = a.rotate || 0), e.scalable && (o.scaleX = a.scaleX || 1, o.scaleY = a.scaleY || 1), o
            },
            setData: function(i) {
                var e = this.options,
                    a = this.image,
                    n = this.canvas,
                    h = {};
                if (t.isFunction(i) && (i = i.call(this.element)), this.ready && !this.disabled && t.isPlainObject(i)) {
                    var o = !1;
                    e.rotatable && Z(i.rotate) && i.rotate !== a.rotate && (a.rotate = i.rotate, o = !0), e.scalable && (Z(i.scaleX) && i.scaleX !== a.scaleX && (a.scaleX = i.scaleX, o = !0), Z(i.scaleY) && i.scaleY !== a.scaleY && (a.scaleY = i.scaleY, o = !0)), o && this.renderCanvas(!0, !0);
                    var s = a.width / a.naturalWidth;
                    Z(i.x) && (h.left = i.x * s + n.left), Z(i.y) && (h.top = i.y * s + n.top), Z(i.width) && (h.width = i.width * s), Z(i.height) && (h.height = i.height * s), this.setCropBoxData(h)
                }
            },
            getContainerData: function() {
                return this.ready ? t.extend({}, this.container) : {}
            },
            getImageData: function() {
                return this.loaded ? t.extend({}, this.image) : {}
            },
            getCanvasData: function() {
                var i = this.canvas,
                    e = {};
                return this.ready && t.each(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(t, a) {
                    e[a] = i[a]
                }), e
            },
            setCanvasData: function(i) {
                var e = this.canvas,
                    a = e.aspectRatio;
                t.isFunction(i) && (i = i.call(this.$element)), this.ready && !this.disabled && t.isPlainObject(i) && (Z(i.left) && (e.left = i.left), Z(i.top) && (e.top = i.top), Z(i.width) ? (e.width = i.width, e.height = i.width / a) : Z(i.height) && (e.height = i.height, e.width = i.height * a), this.renderCanvas(!0))
            },
            getCropBoxData: function() {
                var t = this.cropBox;
                return this.ready && this.cropped ? {
                    left: t.left,
                    top: t.top,
                    width: t.width,
                    height: t.height
                } : {}
            },
            setCropBoxData: function(i) {
                var e = this.cropBox,
                    a = this.options.aspectRatio,
                    n = void 0,
                    h = void 0;
                t.isFunction(i) && (i = i.call(this.$element)), this.ready && this.cropped && !this.disabled && t.isPlainObject(i) && (Z(i.left) && (e.left = i.left), Z(i.top) && (e.top = i.top), Z(i.width) && i.width !== e.width && (n = !0, e.width = i.width), Z(i.height) && i.height !== e.height && (h = !0, e.height = i.height), a && (n ? e.height = e.width / a : h && (e.width = e.height * a)), this.renderCropBox())
            },
            getCroppedCanvas: function() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!this.ready || !window.HTMLCanvasElement) return null;
                var e, a, n, h, o, s, r, d, c, l, p, g, m, u, f, v, w, x, b, y, C, M, $, B, k, W, D, T, Y, H, X, O, E, N, R = this.canvas,
                    z = (e = this.$clone[0], a = this.image, n = R, h = i, o = a.rotate, s = void 0 === o ? 0 : o, r = a.scaleX, d = void 0 === r ? 1 : r, c = a.scaleY, l = void 0 === c ? 1 : c, p = n.aspectRatio, g = n.naturalWidth, m = n.naturalHeight, u = h.fillColor, f = void 0 === u ? "transparent" : u, v = h.imageSmoothingEnabled, w = void 0 === v || v, x = h.imageSmoothingQuality, b = void 0 === x ? "low" : x, y = h.maxWidth, C = void 0 === y ? 1 / 0 : y, M = h.maxHeight, $ = void 0 === M ? 1 / 0 : M, B = h.minWidth, k = void 0 === B ? 0 : B, W = h.minHeight, D = void 0 === W ? 0 : W, T = document.createElement("canvas"), Y = T.getContext("2d"), H = ct({
                        aspectRatio: p,
                        width: C,
                        height: $
                    }), X = ct({
                        aspectRatio: p,
                        width: k,
                        height: D
                    }, "cover"), O = Math.min(H.width, Math.max(X.width, g)), E = Math.min(H.height, Math.max(X.height, m)), N = [-O / 2, -E / 2, O, E], T.width = tt(O), T.height = tt(E), Y.fillStyle = f, Y.fillRect(0, 0, O, E), Y.save(), Y.translate(O / 2, E / 2), Y.rotate(s * Math.PI / 180), Y.scale(d, l), Y.imageSmoothingEnabled = w, Y.imageSmoothingQuality = b, Y.drawImage.apply(Y, [e].concat(Q(t.map(N, function(t) {
                        return Math.floor(tt(t))
                    })))), Y.restore(), T);
                if (!this.cropped) return z;
                var L = this.getData(),
                    P = L.x,
                    I = L.y,
                    U = L.width,
                    A = L.height,
                    F = z.width / Math.floor(R.naturalWidth);
                1 !== F && (P *= F, I *= F, U *= F, A *= F);
                var j = U / A,
                    S = ct({
                        aspectRatio: j,
                        width: i.maxWidth || 1 / 0,
                        height: i.maxHeight || 1 / 0
                    }),
                    q = ct({
                        aspectRatio: j,
                        width: i.minWidth || 0,
                        height: i.minHeight || 0
                    }, "cover"),
                    K = ct({
                        aspectRatio: j,
                        width: i.width || (1 !== F ? z.width : U),
                        height: i.height || (1 !== F ? z.height : A)
                    }),
                    Z = K.width,
                    V = K.height;
                Z = Math.min(S.width, Math.max(q.width, Z)), V = Math.min(S.height, Math.max(q.height, V));
                var G = document.createElement("canvas"),
                    J = G.getContext("2d");
                G.width = tt(Z), G.height = tt(V), J.fillStyle = i.fillColor || "transparent", J.fillRect(0, 0, Z, V);
                var _ = i.imageSmoothingEnabled,
                    it = void 0 === _ || _,
                    et = i.imageSmoothingQuality;
                J.imageSmoothingEnabled = it, et && (J.imageSmoothingQuality = et);
                var at = z.width,
                    nt = z.height,
                    ht = P,
                    ot = I,
                    st = void 0,
                    rt = void 0,
                    dt = void 0,
                    lt = void 0,
                    pt = void 0,
                    gt = void 0;
                ht <= -U || ht > at ? (ht = 0, st = 0, dt = 0, pt = 0) : ht <= 0 ? (dt = -ht, ht = 0, pt = st = Math.min(at, U + ht)) : ht <= at && (dt = 0, pt = st = Math.min(U, at - ht)), st <= 0 || ot <= -A || ot > nt ? (ot = 0, rt = 0, lt = 0, gt = 0) : ot <= 0 ? (lt = -ot, ot = 0, gt = rt = Math.min(nt, A + ot)) : ot <= nt && (lt = 0, gt = rt = Math.min(A, nt - ot));
                var mt = [ht, ot, st, rt];
                if (pt > 0 && gt > 0) {
                    var ut = Z / U;
                    mt.push(dt * ut, lt * ut, pt * ut, gt * ut)
                }
                return J.drawImage.apply(J, [z].concat(Q(t.map(mt, function(t) {
                    return Math.floor(tt(t))
                })))), G
            },
            setAspectRatio: function(t) {
                var i = this.options;
                this.disabled || V(t) || (i.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox()))
            },
            setDragMode: function(t) {
                var i = this.options,
                    e = void 0,
                    a = void 0;
                this.loaded && !this.disabled && (e = t === M, a = i.movable && t === $, t = e || a ? t : B, this.$dragBox.data(y, t).toggleClass(u, e).toggleClass(b, a), i.cropBoxMovable || this.$face.data(y, t).toggleClass(u, e).toggleClass(b, a))
            }
        },
        bt = function() {
            function i(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (S(this, i), !e || !F.test(e.tagName)) throw new Error("The first argument is required and must be an <img> or <canvas> element.");
                this.element = e, this.$element = t(e), this.options = t.extend({}, j, t.isPlainObject(a) && a), this.completed = !1, this.cropped = !1, this.disabled = !1, this.isImg = !1, this.limited = !1, this.loaded = !1, this.ready = !1, this.replaced = !1, this.wheeling = !1, this.originalUrl = "", this.canvas = null, this.cropBox = null, this.pointers = {}, this.init()
            }
            return q(i, [{
                key: "init",
                value: function() {
                    var t = this.$element,
                        i = void 0;
                    if (t.is("img")) {
                        if (this.isImg = !0, i = t.attr("src") || "", this.originalUrl = i, !i) return;
                        i = t.prop("src")
                    } else t.is("canvas") && window.HTMLCanvasElement && (i = t[0].toDataURL());
                    this.load(i)
                }
            }, {
                key: "trigger",
                value: function(i, e) {
                    var a = t.Event(i, e);
                    return this.$element.trigger(a), a
                }
            }, {
                key: "load",
                value: function(i) {
                    var e = this;
                    if (i) {
                        this.url = i, this.image = {};
                        var a = this.$element,
                            n = this.options;
                        if (n.checkOrientation && window.ArrayBuffer)
                            if (U.test(i)) A.test(i) ? this.read((h = i.replace(pt, ""), o = atob(h), s = new ArrayBuffer(o.length), r = new Uint8Array(s), t.each(r, function(t) {
                                r[t] = o.charCodeAt(t)
                            }), s)) : this.clone();
                            else {
                                var h, o, s, r, d = new XMLHttpRequest;
                                d.onerror = function() {
                                    e.clone()
                                }, d.onload = function() {
                                    e.read(d.response)
                                }, n.checkCrossOrigin && at(i) && !a.prop("crossOrigin") && (i = nt(i)), d.open("get", i), d.responseType = "arraybuffer", d.withCredentials = "use-credentials" === a.prop("crossOrigin"), d.send()
                            }
                        else this.clone()
                    }
                }
            }, {
                key: "read",
                value: function(i) {
                    var e, a, n, h = this.options,
                        o = this.image,
                        s = gt(i),
                        r = 0,
                        d = 1,
                        c = 1;
                    if (s > 1) {
                        this.url = (e = "image/jpeg", a = new Uint8Array(i), n = "", t.each(a, function(t, i) {
                            n += lt(i)
                        }), "data:" + e + ";base64," + btoa(n));
                        var l = function(t) {
                            var i = 0,
                                e = 1,
                                a = 1;
                            switch (t) {
                                case 2:
                                    e = -1;
                                    break;
                                case 3:
                                    i = -180;
                                    break;
                                case 4:
                                    a = -1;
                                    break;
                                case 5:
                                    i = 90, a = -1;
                                    break;
                                case 6:
                                    i = 90;
                                    break;
                                case 7:
                                    i = 90, e = -1;
                                    break;
                                case 8:
                                    i = -90
                            }
                            return {
                                rotate: i,
                                scaleX: e,
                                scaleY: a
                            }
                        }(s);
                        r = l.rotate, d = l.scaleX, c = l.scaleY
                    }
                    h.rotatable && (o.rotate = r), h.scalable && (o.scaleX = d, o.scaleY = c), this.clone()
                }
            }, {
                key: "clone",
                value: function() {
                    var i = this.$element,
                        e = this.options,
                        a = this.url,
                        n = "",
                        h = void 0;
                    e.checkCrossOrigin && at(a) && ((n = i.prop("crossOrigin")) ? h = a : (n = "anonymous", h = nt(a))), this.crossOrigin = n, this.crossOriginUrl = h;
                    var o = document.createElement("img");
                    n && (o.crossOrigin = n), o.src = h || a;
                    var s = t(o);
                    this.$clone = s, this.isImg ? this.element.complete ? this.start() : i.one(X, t.proxy(this.start, this)) : s.one(X, t.proxy(this.start, this)).one(H, t.proxy(this.stop, this)).addClass(w).insertAfter(i)
                }
            }, {
                key: "start",
                value: function() {
                    var i = this,
                        e = this.$clone,
                        a = this.$element;
                    this.isImg || (e.off(H, this.stop), a = e),
                        function(t, i) {
                            if (!t.naturalWidth || st) {
                                var e = document.createElement("img");
                                e.onload = function() {
                                    i(e.width, e.height)
                                }, e.src = t.src
                            } else i(t.naturalWidth, t.naturalHeight)
                        }(a[0], function(e, a) {
                            t.extend(i.image, {
                                naturalWidth: e,
                                naturalHeight: a,
                                aspectRatio: e / a
                            }), i.loaded = !0, i.build()
                        })
                }
            }, {
                key: "stop",
                value: function() {
                    this.$clone.remove(), this.$clone = null
                }
            }, {
                key: "build",
                value: function() {
                    var i = this;
                    if (this.loaded) {
                        this.ready && this.unbuild();
                        var n = this.$element,
                            h = this.options,
                            o = this.$clone,
                            s = t('<div class="cropper-container"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-action="e"></span><span class="cropper-line line-n" data-action="n"></span><span class="cropper-line line-w" data-action="w"></span><span class="cropper-line line-s" data-action="s"></span><span class="cropper-point point-e" data-action="e"></span><span class="cropper-point point-n" data-action="n"></span><span class="cropper-point point-w" data-action="w"></span><span class="cropper-point point-s" data-action="s"></span><span class="cropper-point point-ne" data-action="ne"></span><span class="cropper-point point-nw" data-action="nw"></span><span class="cropper-point point-sw" data-action="sw"></span><span class="cropper-point point-se" data-action="se"></span></div></div>'),
                            r = s.find("." + e + "-crop-box"),
                            d = r.find("." + e + "-face");
                        this.$container = n.parent(), this.$cropper = s, this.$canvas = s.find("." + e + "-canvas").append(o), this.$dragBox = s.find("." + e + "-drag-box"), this.$cropBox = r, this.$viewBox = s.find("." + e + "-view-box"), this.$face = d, n.addClass(v).after(s), this.isImg || o.removeClass(w), this.initPreview(), this.bind(), h.aspectRatio = Math.max(0, h.aspectRatio) || NaN, h.viewMode = Math.max(0, Math.min(3, Math.round(h.viewMode))) || 0, this.cropped = h.autoCrop, h.autoCrop ? h.modal && this.$dragBox.addClass(x) : r.addClass(v), h.guides || r.find("." + e + "-dashed").addClass(v), h.center || r.find("." + e + "-center").addClass(v), h.cropBoxMovable && d.addClass(b).data(y, a), h.highlight || d.addClass("cropper-invisible"), h.background && s.addClass(e + "-bg"), h.cropBoxResizable || r.find("." + e + "-line,." + e + "-point").addClass(v), this.setDragMode(h.dragMode), this.render(), this.ready = !0, this.setData(h.data), this.completing = setTimeout(function() {
                            t.isFunction(h.ready) && n.one(R, h.ready), i.trigger(R), i.trigger(k, i.getData()), i.completed = !0
                        }, 0)
                    }
                }
            }, {
                key: "unbuild",
                value: function() {
                    this.ready && (this.completed || clearTimeout(this.completing), this.ready = !1, this.completed = !1, this.initialImage = null, this.initialCanvas = null, this.initialCropBox = null, this.container = null, this.canvas = null, this.cropBox = null, this.unbind(), this.resetPreview(), this.$preview = null, this.$viewBox = null, this.$cropBox = null, this.$dragBox = null, this.$canvas = null, this.$container = null, this.$cropper.remove(), this.$cropper = null)
                }
            }], [{
                key: "setDefaults",
                value: function(i) {
                    t.extend(j, t.isPlainObject(i) && i)
                }
            }]), i
        }();
    if (t.extend && t.extend(bt.prototype, mt, ut, ft, vt, wt, xt), t.fn) {
        var yt = t.fn.cropper;
        t.fn.cropper = function(i) {
            for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), h = 1; h < a; h++) n[h - 1] = arguments[h];
            var o = void 0;
            return this.each(function(a, h) {
                var s = t(h),
                    r = s.data(e);
                if (!r) {
                    if (/destroy/.test(i)) return;
                    var d = t.extend({}, s.data(), t.isPlainObject(i) && i);
                    r = new bt(h, d), s.data(e, r)
                }
                if ("string" == typeof i) {
                    var c = r[i];
                    t.isFunction(c) && (o = c.apply(r, n))
                }
            }), V(o) ? this : o
        }, t.fn.cropper.Constructor = bt, t.fn.cropper.setDefaults = bt.setDefaults, t.fn.cropper.noConflict = function() {
            return t.fn.cropper = yt, this
        }
    }
});