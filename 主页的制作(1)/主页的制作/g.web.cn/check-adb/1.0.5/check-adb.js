! function() {
    var e, c;

    function n() {}

    function t() {
        var e;
        ! function(e, c) {
            var n = window.location.protocol + "//statistic.csdn.net/";
            $.get(n + e, c)
        }("adblock", {
            step: "install"
        }), (e = new Date).setHours(e.getHours() + 1), document.cookie = "c_adb=1; expires=" + e.toGMTString() + "; domain=csdn.net; path=/", "function" == typeof window.csdn.insertcallbackBlock && window.csdn.insertcallbackBlock()
    }
    if (void 0 === window.csdn && (window.csdn = {}), e = "https://g.csdnimg.cn/check-adb/1.0.5/css/check-adb.css", (c = document.createElement("link")).rel = "stylesheet", c.type = "text/css", c.href = e, document.getElementsByTagName("head")[0].appendChild(c), "undefined" != typeof blockAdBlock || "undefined" != typeof BlockAdBlock) t();
    else {
        var o = document.createElement("script");
        o.onload = function() {
            blockAdBlock.onDetected(t), blockAdBlock.onNotDetected(n)
        }, o.onerror = function() {
            t()
        }, o.type = "text/javascript", o.src = "https://g.csdnimg.cn/lib/blockadblock/3.2.1/blockadblock.min.js", document.head.appendChild(o)
    }
}();