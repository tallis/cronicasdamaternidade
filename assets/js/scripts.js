! function (a) {
    "use strict";
    a.addEventListener("DOMContentLoaded", function () {
        var b = a.getElementById("mobile-menu"),
            c = a.getElementById("site-wrapper"),
            d = a.getElementById("site-content"),
            e = "data-menu-visible";
        b && c && d && (d.addEventListener("click", function (a) {
            c.getAttribute(e) && (c.removeAttribute(e), a.preventDefault(), a.stopPropagation())
        }), b.addEventListener("click", function (a) {
            c.getAttribute(e) ? c.removeAttribute(e) : c.setAttribute(e, "1"), a.preventDefault(), a.stopPropagation()
        }))
    })
}(document);