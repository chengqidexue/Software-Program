"use strict";
! function(e, s, a) {
    function n(a, n, t) {
        var o = a.url,
            c = a.isAsync,
            i = s.createElement("script");
        if (i.type = "text/javascript", c && (i.defer = !0, i.async = !0), t)
            for (var d in t) i[d] = t[d];
        return i.src = o, s.body.appendChild(i), n && ((e.ActiveXObject || "ActiveXObject" in e) && i.readyState ? i.onreadystatechange = function() {
            "loaded" != this.readyState && "complete" != this.readyState || n && n()
        } : i.onload = function() {
            n && n()
        }), i
    }

    function t() {
        var e, s;
        AWSC.use("uab", function(s, a) {
            "loaded" === s && (e = a, V.aliData.uaToken = e.getUA() || "")
        }), AWSC.use("um", function(e, a) {
            "loaded" === e && a.init({
                appName: "saf-aliyun-com"
            }, function(e, a) {
                "success" === e && (s = a.tn, V.aliData.webUmidToken = s || "")
            })
        })
    }

    function o(e) {
        var a = s.createElement("div");
        a.className = "csdn_mask" + e, s.body.appendChild(a)
    }

    function c() {
        o("6");
        var e = a("<div class='csdn_modal account_modal'><div class='top_content'>" + L + "<span class='tips fl'>此账号处于冻结状态</span><span class='close_modal fr'>×</span></div><a class='concat' href='https://url.cn/5epoHIm?_type=wpa&qidian=true' target='_blank'>联系客服</a></div>");
        a(".csdn_mask6").append(e)
    }

    function i() {
        o("2");
        var e = a("<div class='csdn_modal assess_modal'><div class='top_content'>" + L + "<span class='tips fl'>此手机号已绑定CSDN帐号</span><span class='close_modal fr'>×</span></div><div class='bot_content'><div class='merge_btn fl'>合并账号</div><div class='change_phone fl'>更换手机号</div></div></div>");
        a(".csdn_mask2").append(e)
    }

    function d(s) {
        o("4");
        var n = a("<div class='csdn_modal bind_modal'><div class='top_content'><span class='tips fl'>此操作需要绑定手机号</span><span class='close_modal fr'>×</span></div><div class='ul_code-text-info'>如果验证码获取失败，请确认手机是否屏蔽？</div><div class='mid_cont'><div class='seas'>海外手机号</div><div class='changeBtn fl'>国内手机号</div></div><div class='bot_content'><div class='top_con'><ul  class='pull_list'>\n<li data-text='86' class='item china-code'><span data-text='86'>+ 86</span> <em data-text='86'>中国</em></li>\n <li data-text='1' class='item sea-code'><span data-text='1'>+ 1</span> <em data-text='1'>美国</em></li> \n<li data-text='1' class='item sea-code'><span data-text='1'>+ 1</span> <em data-text='1'>加拿大</em></li>\n <li data-text='852' class='item sea-code'><span data-text='852'>+ 852</span> <em data-text='852'>中国香港</em></li>\n <li data-text='886' class='item sea-code'><span data-text='886'>+ 886</span> <em data-text='886'>中国台湾</em></li>\n <li data-text='81' class='item sea-code'><span data-text='81'>+ 81</span> <em data-text='81'>日本</em></li>\n <li data-text='65' class='item sea-code'><span data-text='65'>+ 65</span> <em data-text='65'>新加坡</em></li>\n</ul><span class='area' id='area'>86</span><input type='text' placeholder='请输入手机号' class='phone_box' /></div><div class='bot'><input type='text' style='font-size:12px;' placeholder='请输入语音验证码' class='msg_box msg_box1' maxLength='6'/><span class='ul_get_code_word word1'>获取语音验证码</span></div><p class='phone_code_box'> <span class='letter letter1'>海外手机号</span> <span id='ul_send_code'  class='ul_send_code_next'>获取语音验证码失败？</span> </p><div class='bt_group '><div class='fr confirm'>确定</div></div></div></div>");
        a(".csdn_mask4").append(n);
        var t = e.navigator.userAgent.toLowerCase(),
            c = e.navigator.userAgent.indexOf("CSDN"),
            i = !1;
        (/Android|webOS| iPhone | iPad | iPod |BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i.test(e.navigator.userAgent) || "micromessenger" === t.match(/MicroMessenger/i) || c > -1) && (i = !0), a(".letter1").text() && a(".letter1").text().indexOf("海外") > -1 && "4" !== s && a(".sea-code").css("display", "none"), "4" === s ? (i || a(".changeBtn").css("display", "block"), a(".seas").css("display", "block"), a(".bind_modal").addClass("scan_modal1")) : (a(".bind_modal").removeClass("scan_modal1"), a(".changeBtn").css("display", "none"), a(".seas").css("display", "none"))
    }

    function l() {
        o("6");
        var e = a("<div class='csdn_modal bind_modal bind_modal1'><div class='top_content'><span class='tips fl'></span><span class='close_modal fr'>×</span></div><div class='getcode_fail_text'>如果验证码获取失败，请确认手机是否屏蔽？</div><div class='bot_content'><div class='bot'><input type='text' placeholder='请输入语音验证码' class='msg_box msg_box1' maxLength='6'/><span class='ul_get_code_word word1'>获取语音验证码</span><div class='fail_text get_code_fail'>获取语音验证码失败？</div></div><div class='bt_group confirm'>确定</div></div></div>");
        a(".csdn_mask6").append(e);
        var s = "账号异常，请通过" + V.userMobile + "获取验证码校验";
        a(".tips").text(s)
    }

    function r() {
        o("6");
        var e = a("<div class='csdn_modal bind_modal bind_modal1'><div class='top_content'><span class='tips fl'></span><span class='close_modal fr'>×</span></div><div class='bot_content'><div class='bot'><input type='text' placeholder='请输入短信验证码' class='msg_box msg_box1' maxLength='6'/><span class='ul_get_code_word word1'>获取短信验证码</span></div><div class='bt_group confirm'>确定</div></div></div>");
        a(".csdn_mask6").append(e);
        var s = "账号异常，请通过" + V.userMobile + "获取验证码校验";
        a(".tips").text(s)
    }

    function p() {
        o("5");
        var e = a("<div class='csdn_modal scan_modal'><div class='top_content'><span class='tips fl'>此操作需要绑定手机号</span><span class='close_modal fr'>×</span></div><div class='mid_con'><span class='cur_word fl'>大陆手机号</span><span class='cur_word1 fr'>海外手机号</span></div><div class='message'>1.请扫码关注下方任意公众号，发送手机号给该公众号，获取短信验证码</div><div class='pic_box'><img class='code_pic' src=''/><p class='title'>CSDN公众号</p></div><div class='message message1'>2.请填写短信验证码</div><input type='text' placeholder='请输入短信验证码' class='msg_box' maxLength='6'/><div class='process-text'><label><input disabled='disabled' type='checkbox' checked='checked'></label>\n                    我已仔细阅读并接受  <a href='https://passport.csdn.net/service' target='_blank'><em>CSDN用户服务条款</em></a></div><div class='bot_btn'>下一步</div></div>");
        a(".csdn_mask5").append(e), a(".code_pic").attr("src", V.qrUrl)
    }

    function m(e) {
        var n = s.createElement("script");
        n.type = "text/javascript", n.async = !0, n.src = "https://g.csdnimg.cn/user-login/" + e + "/js/??toast.script.js";
        var t = s.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(n, t), a("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://g.csdnimg.cn/user-login/" + e + "/css/??index.css,toast.style.css"
        }).appendTo("head")
    }

    function _(s) {
        V.canClick && (V.canClick = !1, a(".ul_get_code_word").text(V.downTime + "s"), V.timer = e.setInterval(function() {
            if (V.downTime--, a(".ul_get_code_word").text(V.downTime + "s"), V.downTime <= 0) {
                e.clearInterval(V.timer), V.timer = null;
                var n = s > -1 ? "获取短信验证码" : "获取语音验证码";
                a(".ul_get_code_word").text(n), V.downTime = 60, V.canClick = !0
            }
        }, 1e3))
    }

    function u() {
        e.clearInterval(V.timer), V.timer = null, (a(".msg_box1").attr("placeholder") && a(".msg_box1").attr("placeholder").indexOf("短信") || 0) > -1 ? a(".ul_get_code_word").text("获取短信验证码") : a(".ul_get_code_word").text("获取语音验证码"), V.downTime = 60, V.canClick = !0
    }

    function v(s, a) {
        var n = e.navigator.userAgent.toLowerCase(),
            t = e.navigator.userAgent.indexOf("CSDN"),
            o = "toast-top-center";
        (/Android|webOS| iPhone | iPad | iPod |BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i.test(e.navigator.userAgent) || "micromessenger" === n.match(/MicroMessenger/i) || t > -1) && (o = "toast-top-right"), e.csdn.userLogin.Toast("提示", s, a, {
            stack: !0,
            has_icon: !1,
            has_close_btn: !0,
            fullscreen: !1,
            timeout: 3e3,
            sticky: !1,
            rtl: !1,
            position_class: o
        })
    }

    function f() {
        try {
            V.phoneNumber = a(".phone_box") && a(".phone_box").val().replace(/(^\s*)|(\s*$)/g, "") || ""
        } catch (e) {
            V.phoneNumber = ""
        }
        var e = /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
            s = /^((\d{10})|(0?(7|8|9)0\d{8})|([569]\d{7})|((09|9)\d{8})|([89]\d{7})|([1][3,4,5,6,7,8,9][0-9]{9}))$/;
        return V.phoneNumber ? (V.curCode = a(".area").text() || "", "86" !== V.curCode && "1" !== V.curCode || (!!("86" === V.curCode ? e : s).test(V.phoneNumber) || (v("请输入正确的手机号码", "error"), !1))) : (v("手机号不能为空", "error"), !1)
    }

    function k(e) {
        try {
            V.veriCode = e ? a(".msg_box1").val().replace(/(^\s*)|(\s*$)/g, "") : a(".msg_box").val().replace(/(^\s*)|(\s*$)/g, "")
        } catch (e) {
            V.veriCode = ""
        }
        var s = /^\d{6}$/;
        return V.veriCode ? !!s.test(V.veriCode) || (v("请输入6位数字验证码", "error"), !1) : (v("验证码不能为空", "error"), !1)
    }

    function b(s, n, t, o) {
        var c = s && s.indexOf("chooseOfficeAccount") > -1 ? "https://passport.csdn.net/v1/register/" : "https://passport.csdn.net/v1/api/";
        a.ajax({
            url: c + s,
            type: n,
            dataType: "json",
            contentType: "application/json",
            async: !1,
            xhrFields: {
                withCredentials: !0
            },
            data: o ? JSON.stringify(o) : "",
            success: function(e) {
                console.log("---------success", e), t(e)
            },
            error: function(s) {
                if (console.log("---------error", s), u(), s && s.responseText) {
                    var a = JSON.parse(s.responseText);
                    a.message = a.message || "接口异常", v(a.message, "error"), a.code && "1021" === a.code && (e.location.href = "https://passport.csdn.net/account/login"), t(a)
                } else t({})
            }
        })
    }

    function g() {
        b("riskControl/sendVerifyCode", "POST", function(s) {
            s.code && "1021" === s.code && (e.location.href = "https://passport.csdn.net/account/login")
        })
    }

    function h() {
        b("riskControl/sendVoiceVerifyCode", "POST", function(s) {
            s.code && "1021" === s.code && (e.location.href = "https://passport.csdn.net/account/login")
        })
    }

    function x() {
        var e = {
            verifyCode: V.veriCode || ""
        };
        b("riskControl/checkVerifyCode", "POST", function(e) {
            e.status && 404 !== e.status && (a(".csdn_mask4").remove(), a(".csdn_mask5").remove(), a(".csdn_mask6").remove(), u(), V.callback && V.callback(e), V.callback || (E.result = e))
        }, e)
    }

    function C() {
        var e = {
            verifyCode: V.veriCode || ""
        };
        b("riskControl/checkVoiceVerifyCode", "POST", function(e) {
            e.status && 404 !== e.status && (a(".csdn_mask4").remove(), a(".csdn_mask5").remove(), a(".csdn_mask6").remove(), V.callback && V.callback(e), V.callback || (E.result = e), u())
        }, e)
    }

    function y() {
        var e = {
            mobile: V.phoneNumber || "",
            code: V.curCode ? "00" + V.curCode : ""
        };
        b("riskControl/sendBindVerifyCode", "POST", function(e) {}, e)
    }

    function w() {
        var e = {
            mobile: V.phoneNumber || "",
            code: V.curCode ? "00" + V.curCode : "",
            verifyCode: V.veriCode || "",
            uaToken: V.aliData.uaToken || "",
            webUmidToken: V.aliData.webUmidToken || ""
        };
        b("riskControl/checkBindVerifyCode", "POST", function(e) {
            e.status && 404 !== e.status ? (V.callback && V.callback(e), V.callback || (E.result = e), a(".csdn_mask4").remove(), a(".csdn_mask5").remove(), a(".csdn_mask6").remove(), u()) : e.code && "1028" === e.code && i()
        }, e)
    }

    function T() {
        var e = {
            mobile: V.phoneNumber || ""
        };
        b("riskControl/sendBindVoiceCode", "POST", function(e) {}, e)
    }

    function S() {
        var e = {
            mobile: V.phoneNumber || "",
            code: V.curCode ? "00" + V.curCode : "",
            verifyCode: V.veriCode || "",
            uaToken: V.aliData.uaToken || "",
            webUmidToken: V.aliData.webUmidToken || ""
        };
        b("riskControl/checkVoiceCodeAndBind", "POST", function(e) {
            e.status && 404 !== e.status ? (V.callback && V.callback(e), V.callback || (E.result = e), a(".csdn_mask4").remove(), a(".csdn_mask5").remove(), a(".csdn_mask6").remove(), u()) : e.code && "1028" === e.code && i()
        }, e)
    }

    function O() {
        var e = {
            mobile: V.phoneNumber || "",
            code: V.curCode ? "00" + V.curCode : "",
            verifyCode: V.veriCode || "",
            uaToken: V.aliData.uaToken || "",
            webUmidToken: V.aliData.webUmidToken || ""
        };
        b("riskControl/weixin/checkCodeAndBind", "POST", function(e) {
            e.status && 404 !== e.status ? (V.callback && V.callback(e), V.callback || (E.result = e), a(".csdn_mask4").remove(), a(".csdn_mask5").remove(), a(".csdn_mask6").remove(), u()) : e.code && "1028" === e.code && i()
        }, e)
    }

    function A() {
        var e = a(".msg_box").val() || "";
        V.veriCode = e;
        var s = /^\d{6}$/;
        return !(!e || !s.test(e)) || (v("请输入6位验证码", "error"), !1)
    }

    function N(e) {
        b("chooseOfficeAccount?num=1", "GET", function(s) {
            if (s && s.status) {
                var a = s.data && s.data.items.length && s.data.items[0].officialAccountsImgUrl || "https://csdnimg.cn/release/passport/history/images/jingpinke.jpg";
                V.qrUrl = a
            } else V.qrUrl = "https://csdnimg.cn/release/passport/history/images/jingpinke.jpg";
            e && e(V)
        })
    }

    function P(s) {
        if (s) d();
        else {
            var n = e.navigator.userAgent.toLowerCase(),
                t = e.navigator.userAgent.indexOf("CSDN");
            /Android|webOS| iPhone | iPad | iPod |BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i.test(e.navigator.userAgent) || "micromessenger" === n.match(/MicroMessenger/i) || t > -1 ? (d("4"), a(".letter1").css("display", "none"), a(".msg_box1").attr("placeholder", "请输入短信验证码"), a(".word1").text("获取短信验证码"), a(".seas").css("display", "none")) : p()
        }
    }

    function D() {
        var e = {
            code: "0086",
            unionid: "",
            openid: "o9Y-ajsgTwv2MvFz9qNdnKYt1-HE",
            appid: "gh_d45429d1a396",
            mobile: a(".mock_phone").val() || "15321575546"
        };
        b("internal/weixin/sendVerifyCode", "POST", function(e) {
            e.status && v(e.msg, "success")
        }, e)
    }

    function M() {
        b("riskControl/getUserMobile", "POST", function(e) {
            e.status && (e.data.mobile && (V.userMobile = e.data.mobile), e.data.code && (V.userCode = e.data.code), V.userCode ? "0086" === V.userCode ? l() : r() : l())
        })
    }

    function B(e) {
        b("riskControl/getUpstreamSMSCode", "POST", function(s) {
            s.status ? (V.smsData = s.data, e && e()) : s.code && "1028" === s.code && i()
        })
    }

    function U() {
        String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        })
    }

    function j(e) {
        U(), void 0 != a("#phone_for_send_code").val() && (V.phoneForSendCode = a("#phone_for_send_code").val().trim() || "");
        var s = V.userMobile ? V.userMobile : V.phoneForSendCode,
            n = {
                mobile: s || "",
                uaToken: V.aliData.uaToken || "",
                webUmidToken: V.aliData.webUmidToken || ""
            };
        b("riskControl/checkUpstreamSMSCode", "POST", function(s) {
            s.status ? e && e() : s.code && "1028" === s.code ? i() : console.log("checkSMScode error")
        }, n)
    }

    function F() {
        var s = {
            username: W("UserName") || "",
            isI: "true"
        };
        console.log("param:", s), b("check/userstatus", "POST", function(s) {
            if (s.status)
                if (s.detail) switch (s.detail) {
                    case "deleted":
                        c();
                        break;
                    case "riskControl":
                        M();
                        break;
                    case "activateAndRisk":
                        P(1), V.isFeed = 1;
                        break;
                    case "activate":
                        N(function() {
                            P(0), V.isFeed = 0
                        });
                        break;
                    default:
                        return V.callback || (E.result = s), !0
                } else V.callback && V.callback(s), V.callback || (E.result = s);
                else e.location.href = "https://passport.csdn.net/account/login"
        }, s)
    }
    var L = '<svg class="icon_user_login warn_icon fl" viewBox="0 0 1024 1024"><path d="M512.874667 938.474667c-235.434667 0-426.261333-190.848-426.261334-426.261334 0-235.434667 190.848-426.261333 426.261334-426.261333s426.261333 190.848 426.261333 426.261333c-0.021333 235.413333-190.848 426.261333-426.261333 426.261334z m0-85.248c188.352 0 341.013333-152.682667 341.013333-341.013334 0-188.352-152.661333-341.013333-341.013333-341.013333S171.861333 323.861333 171.861333 512.213333c0 188.330667 152.661333 341.013333 341.013334 341.013334z m-42.645334-511.530667a42.624 42.624 0 1 1 85.290667 0v204.586667a42.666667 42.666667 0 0 1-85.290667 0v-204.586667zM512.874667 725.333333a42.666667 42.666667 0 1 1 0.042666-85.290666A42.666667 42.666667 0 0 1 512.874667 725.333333z" fill=""></path></svg>',
        V = {
            timer: "",
            downTime: 60,
            canClick: !0,
            phoneNumber: "",
            curCode: "86",
            veriCode: "",
            callback: function() {},
            isFeed: 0,
            qrUrl: "https://csdnimg.cn/release/passport/history/images/csdnnews.jpg",
            userMobile: "",
            userCode: "",
            version: "2.2.4",
            smsData: "",
            phoneForSendCode: "",
            aliData: {}
        };
    e.onload = function() {
        n({
            url: "https://g.alicdn.com/AWSC/AWSC/awsc.js"
        }, t)
    };
    var $ = {
            init: function() {
                function n() {
                    o(8);
                    var e = a("<div class='csdn_modal bind_modal bind_modal1'><div class='top_content'>请输入要绑定的手机号<span class='tips fl'></span><span class='close_modal fr'>×</span></div><div class='bot_content'><div class='top_con'><ul class='pull_list'></ul><span class='area'>86</span><input id='phone_for_send_code' type='text' placeholder='请输入手机号' class='phone_box'></div><div class='bt_group csdn_btn8'><span class='red_text close_modal_forcode'>返回</span><span id='next_step' class='red_text'>下一步</span></div></div></div>");
                    a(".csdn_mask8").html(e), B()
                }

                function t() {
                    var e = a("#phone_for_send_code") && a("#phone_for_send_code").val().trim();
                    if (/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(e)) return function() {
                        o(7);
                        var s = "<div class='csdn_modal bind_modal bind_modal1'><div class='top_content'>此操作需要绑定手机号<span class='tips fl'></span><span class='close_modal fr'>×</span></div><div class='bot_content'>请使用需要绑定的手机号 " + e + "（国内）编辑短信内容 <span class='red_text'>" + V.smsData.verifyCode + "</span>   发送至  <span class='red_text'>" + V.smsData.mobile + "</span>进行短信验证，发送完成后请点击   <span class='red_text'>我已发送</span>   按钮  <div class='bt_group csdn_btn7'><span class='red_text back_btn_for_china'>返回</span><span class='red_text  send_code_btn'>我已发送</span></div></div></div>",
                            n = a(s);
                        a(".csdn_mask7").html(n)
                    }(), !0;
                    v("请输入正确的手机号码", "error")
                }
                m(V.version), a(s).on("click", ".test_send", function() {
                    D()
                }), a(s).on("click", ".close_modal", function() {
                    a(this).parent().parent().parent().remove(), a(".csdn_mask5") && a(".csdn_mask5").remove(), a(".csdn_mask3") && a(".csdn_mask3").remove()
                }), a(s).on("click", ".merge_btn", function() {
                    a(".csdn_mask5") && a(".csdn_mask5").remove(), a(".csdn_mask2") && a(".csdn_mask2").remove(), a(".csdn_mask3") && a(".csdn_mask3").remove(), a(".csdn_mask4") && a(".csdn_mask4").remove(), a(".csdn_mask6") && a(".csdn_mask6").remove(), a(".csdn_mask7") && a(".csdn_mask7").remove(), a(".csdn_mask8") && a(".csdn_mask8").remove(), e.open("https://i.csdn.net/#/account/merge?isKey=1")
                }), a(s).on("click", "body", function(e) {
                    "area" === e.target.id ? "block" === a(".pull_list").css("display") ? a(".pull_list").css("display", "none") : a(".pull_list").css("display", "block") : a(".pull_list").css("display", "none")
                }), a(s).on("click", ".letter", function() {
                    var e = a(this).text();
                    u(), "海外手机号" === e ? (a("#ul_send_code").css("display", "none"), a(".china-code").css("display", "none"), a(".sea-code").css("display", "block"), a(this).text("国内手机号"), a(".msg_box1").attr("placeholder", "请输入短信验证码"), a(".word1").text("获取短信验证码"), a(".phone_box").val(""), a(".msg_box").val(""), a("#area").text("1")) : (a("#ul_send_code").css("display", "inline-block"), a(".china-code").css("display", "block"), a(".sea-code").css("display", "none"), a(this).text("海外手机号"), a(".phone_box").val(""), a(".msg_box").val(""), a("#area").text("86"), a(".msg_box1").attr("placeholder", "请输入语音验证码"), a(".word1").text("获取语音验证码"))
                }), a(s).on("click", ".pull_list", function(e) {
                    if ("em" === e.target.tagName.toLowerCase() || "li" === e.target.tagName.toLowerCase() || "span" === e.target.tagName.toLowerCase()) {
                        var s = e.target.dataset.text || "";
                        a(".area").text(s)
                    }
                }), a(s).on("click", ".ul_get_code_word", function(e) {
                    var s = a(".msg_box1").attr("placeholder").indexOf("短信"),
                        n = a(".tips").text().indexOf("校验");
                    n > -1 ? (_(s), s > -1 ? n > -1 ? g() : y() : n > -1 ? h() : T()) : f() && (_(s), s > -1 ? n > -1 ? g() : y() : n > -1 ? h() : T())
                }), a(s).on("click", ".ul_send_code_next", n), a(s).on("click", "#next_step", t), a(s).on("click", ".get_code_fail", function(e) {
                    function s() {
                        o(7);
                        var e = "<div class='csdn_modal bind_modal bind_modal1'><div class='top_content'>此操作需要绑定手机号<span class='tips fl'></span><span class='close_modal fr'>×</span></div><div class='bot_content'>请使用需要绑定的手机号 " + V.userMobile + "（国内）编辑短信内容 <span class='red_text'>" + V.smsData.verifyCode + "</span>   发送至  <span class='red_text'>" + V.smsData.mobile + "</span>进行短信验证，发送完成后请点击   <span class='red_text'>我已发送</span>   按钮  <div class='bt_group csdn_btn7'><span class='red_text close_modal_forcode'>返回</span><span class='red_text send_code_btn'>我已发送</span></div></div></div>",
                            s = a(e),
                            n = "账号异常，请通过" + V.userMobile + "获取验证码校验";
                        a(".tips").text(n), a(".csdn_mask7").html(s)
                    }
                    B(s)
                }), a(s).on("click", ".back_btn_for_china", function() {
                    a(this).parent().parent().parent().remove(), a(".csdn_mask7") && a(".csdn_mask7").remove(), a(".csdn_mask8") && a(".csdn_mask8").show()
                }), a(s).on("click", ".close_modal_forcode", function() {
                    a(this).parent().parent().parent().remove(), a(".csdn_mask7") && a(".csdn_mask7").remove(), a(".csdn_mask8") && a(".csdn_mask8").remove()
                }), a(s).on("click", ".send_code_btn", function() {
                    function e() {
                        a(this).parent().parent().parent().remove(), a(".csdn_mask7") && a(".csdn_mask7").remove(), a(".csdn_mask6") && a(".csdn_mask6").remove(), a(".csdn_mask4") && a(".csdn_mask4").remove(), a(".csdn_mask8") && a(".csdn_mask8").remove()
                    }
                    j(e)
                }), a(s).on("click", ".confirm", function(e) {
                    var s = a(".msg_box1").attr("placeholder").indexOf("短信"),
                        n = a(".tips").text().indexOf("校验");
                    n > -1 ? k(1) && (s > -1 ? n > -1 ? x() : w() : n > -1 ? C() : S()) : f() && k(1) && (s > -1 ? n > -1 ? x() : w() : n > -1 ? C() : S())
                }), a(s).on("click", ".confirmBind", function(e) {
                    f() && k() && S()
                }), a(s).on("click", ".cur_word1", function(e) {
                    d("4"), a(".csdn_mask5") && a(".csdn_mask5").remove(), a(".letter1").css("display", "none"), a(".china-code").css("display", "none"), a(".area").text("1"), a(".msg_box1").attr("placeholder", "请输入短信验证码"), a(".word1").text("获取短信验证码"), a("#ul_send_code").css("display", "none")
                }), a(s).on("click", ".bot_btn", function(e) {
                    A() && O()
                }), a(s).on("click", ".to_bind", function(s) {
                    if (a(".csdn_mask0").remove(), V.isFeed) d();
                    else {
                        var n = e.navigator.userAgent.toLowerCase(),
                            t = e.navigator.userAgent.indexOf("CSDN");
                        /Android|webOS| iPhone | iPad | iPod |BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i.test(e.navigator.userAgent) || "micromessenger" === n.match(/MicroMessenger/i) || t > -1 ? (d("4"), a(".letter1").css("display", "none"), a(".msg_box1").attr("placeholder", "请输入短信验证码"), a(".word1").text("获取短信验证码")) : p()
                    }
                }), a(s).on("click", ".change_phone", function(e) {
                    a(".csdn_mask2") && a(".csdn_mask2").remove(), a(".csdn_mask7") && a(".csdn_mask7").remove(), a(".csdn_mask8") && a(".csdn_mask8").remove(), a(".msg_box") && a(".msg_box").val(""), a(".mock_phone") && a(".mock_phone").val("")
                }), a(s).on("click", ".changeBtn", function(e) {
                    V.curCode = "86", N(function() {
                        a(".csdn_mask4").remove(), P(0), V.isFeed = 0
                    })
                })
            }
        },
        E = {
            loadAjax: function(e) {
                V.callback = e || "", F()
            },
            result: {}
        },
        W = function(e) {
            var a, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            return (a = s.cookie.match(n)) ? unescape(a[2]) : ""
        };
    if (void 0 === e.csdn && (e.csdn = {}), csdn.userLogin) return void console.warn("user-login组件重复，请检查！");
    $.init(), e.csdn.userLogin = E
}(window, document, jQuery);