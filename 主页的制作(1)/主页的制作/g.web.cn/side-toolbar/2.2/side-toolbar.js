"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
    return typeof n
} : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
};
! function(n, t) {
    function o(n, t) {
        Object.getOwnPropertyNames(n).forEach(function(s) {
            void 0 !== t[s] && ("object" === _typeof(t[s]) ? o(n[s], t[s]) : n[s] = t[s])
        }, null)
    }

    function s() {
        var t = n.scrollY,
            o = t / 100,
            s = setInterval(function() {
                t -= o, n.scrollTo(0, t), t <= 0 && clearInterval(s)
            }, 10)
    }
    var c = (location.protocol.substr(0, 4), {
            url: "https://g.csdnimg.cn/side-toolbar/2.2",
            opinion: {
                isShow: !1
            },
            qr: {
                isShow: !0,
                btnImgSrc: "https://g.csdnimg.cn/side-toolbar/2.2/images/qr.png",
                data: [{
                    imgSrc: "https://g.csdnimg.cn/side-toolbar/2.2/images/qr_wechat.png",
                    desc: "关注公众号"
                }, {
                    imgSrc: "https://g.csdnimg.cn/side-toolbar/2.2/images/qr_app.png",
                    desc: "下载APP"
                }]
            },
            cs: {
                isShow: !0,
                btnImgSrc: "https://g.csdnimg.cn/side-toolbar/2.2/images/kefu.png",
                clickUrl: "https://url.cn/5epoHIm?_type=wpa&qidian=true",
                clickFun: null
            },
            help: {
                isShow: !1,
                btnImgSrc: "https://g.csdnimg.cn/side-toolbar/2.2/images/bangzhucopy.png",
                clickUrl: "",
                clickFun: null
            },
            report: {
                isShow: !1,
                btnImgSrc: "https://g.csdnimg.cn/side-toolbar/2.2/images/jubaocopy.png"
            },
            goTop: {
                isShow: !0,
                btnImgSrc: "https://g.csdnimg.cn/side-toolbar/2.2/images/fanhuidingbucopy.png"
            },
            afterFinished: null
        }),
        e = {
            options: {},
            goTop: s
        };
    void 0 === n.csdn && (n.csdn = {}), n.csdn.sideToolbar = Object.assign(e, n.csdn.sideToolbar);
    var i = n.csdn.sideToolbar.options;
    ! function() {
        o(c, i)
    }(),
    function(n) {
        var o = t.createElement("link");
        o.rel = "stylesheet", o.type = "text/css", o.href = n, t.getElementsByTagName("head")[0].appendChild(o)
    }(c.url + "/side-toolbar.css");
    var a = "",
        l = "",
        r = "",
        p = "",
        d = "",
        g = "";
    if (c.opinion.isShow && (a = '\n    <a class="option-box" data-type="feedback">\n      <img src="' + c.opinion.btnImgSrc + '" alt="" srcset="">\n      <span class="show-txt">意见<br>反馈</span>\n    </a>\n    '), c.qr.isShow) {
        var b = "";
        c.qr.data.forEach(function(n) {
            b += '\n      <div class="qr-item-box">\n        <img src="' + n.imgSrc + '" alt="' + n.desc + '">\n        <p class="desc">' + n.desc + "</p>\n      </div>\n      "
        }), l = '\n    <a class="option-box" data-type="app">\n      <img src="' + c.qr.btnImgSrc + '" alt="" srcset="">\n      <span class="show-txt">手机看</span>\n      <div class="app-qr-box">\n        <div class="bg-box">\n          ' + b + "\n        </div>\n      </div>\n    </a>\n    "
    }
    c.cs.isShow && (r = '\n    <a class="option-box" data-type="cs">\n      <img src="' + c.cs.btnImgSrc + '" alt="" srcset="">\n      <span class="show-txt">客服</span>\n    </a>\n    '), c.help.isShow && (p = '\n    <a class="option-box" data-type="help">\n      <img src="' + c.help.btnImgSrc + '" alt="" srcset="">\n      <span class="show-txt">帮助</span>\n    </a>\n    '), c.report.isShow && (d = '\n    <a class="option-box" data-type="report">\n      <span class="show-txt" style=\'display:flex;opacity:100;\'>举报</span>\n    </a>\n    '), c.goTop.isShow && (g = '\n    <a class="option-box go-top-hide" data-type="gotop">\n      <img src="' + c.goTop.btnImgSrc + '" alt="" srcset="">\n      <span class="show-txt">返回<br>顶部</span>\n    </a>\n    ');
    var h = '\n  <div class="csdn-side-toolbar">\n    ' + a + "\n    " + l + "\n    " + r + "\n    " + p + "\n    " + d + "\n    " + g + "\n  </div>\n  ",
        m = t.createElement("div");
    m.innerHTML = h, t.body.appendChild(m), null !== c.afterFinished && c.afterFinished(), t.body.onload = function() {
        if (c.goTop.isShow) {
            var o = function() {
                    n.scrollY >= i ? e.classList.remove("go-top-hide") : e.classList.add("go-top-hide")
                },
                e = t.querySelector("a.option-box[data-type='gotop']"),
                i = n.outerHeight,
                a = t.body.scrollHeight;
            o(), n.addEventListener("scroll", o, !1), n.addEventListener("resize", function() {
                i = n.outerHeight, a = t.body.scrollHeight, o()
            }), e.addEventListener("click", s, !1)
        }
        if (c.cs.isShow) {
            t.querySelector("a.option-box[data-type='cs']").addEventListener("click", function() {
                null !== c.cs.clickFun ? c.cs.clickFun() : n.open(c.cs.clickUrl, "_blank")
            }, !1)
        }
        if (c.help.isShow) {
            t.querySelector("a.option-box[data-type='cs']").addEventListener("click", function() {
                null !== c.help.clickFun ? c.help.clickFun() : n.open(c.help.clickUrl, "_blank")
            }, !1)
        }
    }
}(window, document);