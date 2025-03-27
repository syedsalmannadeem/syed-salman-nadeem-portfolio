function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLiketeToArray(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0;
    }
}
function _iterableToArray(e) {
    if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
}
function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
    return a;
}
function ownKeys(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
            (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
    }
    return r;
}
function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ownKeys(Object(r), !0).forEach(function (t) {
                  _defineProperty(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
    }
    return e;
}
function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
        var a = t[r];
        (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
}
function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Default = { alwaysOpen: !1, activeClasses: "bg-transparent text-[#4D71FF]", inactiveClasses: "bg-transparent text-[#222E3A] dark:text-gray-400", onOpen: function () {}, onClose: function () {}, onToggle: function () {} },
    Accordion = (function () {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            _classCallCheck(this, e), (this._items = t), (this._options = _objectSpread(_objectSpread({}, Default), r)), this._init();
        }
        return (
            _createClass(e, [
                {
                    key: "_init",
                    value: function () {
                        var e = this;
                        this._items.length &&
                            this._items.map(function (t) {
                                t.active && e.open(t.id),
                                    t.triggerEl.addEventListener("click", function () {
                                        e.toggle(t.id);
                                    });
                            });
                    },
                },
                {
                    key: "getItem",
                    value: function (e) {
                        return this._items.filter(function (t) {
                            return t.id === e;
                        })[0];
                    },
                },
                {
                    key: "open",
                    value: function (e) {
                        var t,
                            r,
                            a = this,
                            n = this.getItem(e);
                        this._options.alwaysOpen ||
                            this._items.map(function (e) {
                                var t, r;
                                e !== n &&
                                    ((t = e.triggerEl.classList).remove.apply(t, _toConsumableArray(a._options.activeClasses.split(" "))),
                                    (r = e.triggerEl.classList).add.apply(r, _toConsumableArray(a._options.inactiveClasses.split(" "))),
                                    e.targetEl.classList.add("hidden"),
                                    e.triggerEl.setAttribute("aria-expanded", !1),
                                    (e.active = !1),
                                    e.iconEl && e.iconEl.classList.remove("rotate-180"));
                            }),
                            (t = n.triggerEl.classList).add.apply(t, _toConsumableArray(this._options.activeClasses.split(" "))),
                            (r = n.triggerEl.classList).remove.apply(r, _toConsumableArray(this._options.inactiveClasses.split(" "))),
                            n.triggerEl.setAttribute("aria-expanded", !0),
                            n.targetEl.classList.remove("hidden"),
                            (n.active = !0),
                            n.iconEl && n.iconEl.classList.add("rotate-180"),
                            this._options.onOpen(this, n);
                    },
                },
                {
                    key: "toggle",
                    value: function (e) {
                        var t = this.getItem(e);
                        t.active ? this.close(e) : this.open(e), this._options.onToggle(this, t);
                    },
                },
                {
                    key: "close",
                    value: function (e) {
                        var t,
                            r,
                            a = this.getItem(e);
                        (t = a.triggerEl.classList).remove.apply(t, _toConsumableArray(this._options.activeClasses.split(" "))),
                            (r = a.triggerEl.classList).add.apply(r, _toConsumableArray(this._options.inactiveClasses.split(" "))),
                            a.targetEl.classList.add("hidden"),
                            a.triggerEl.setAttribute("aria-expanded", !1),
                            (a.active = !1),
                            a.iconEl && a.iconEl.classList.remove("rotate-180"),
                            this._options.onClose(this, a);
                    },
                },
            ]),
            e
        );
    })();
(window.Accordion = Accordion),
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll("[data-accordion]").forEach(function (e) {
            var t = e.getAttribute("data-accordion"),
                r = e.getAttribute("data-active-classes"),
                a = e.getAttribute("data-inactive-classes"),
                n = [];
            e.querySelectorAll("[data-accordion-target]").forEach(function (e) {
                var t = {
                    id: e.getAttribute("data-accordion-target"),
                    triggerEl: e,
                    targetEl: document.querySelector(e.getAttribute("data-accordion-target")),
                    iconEl: e.querySelector("[data-accordion-icon]"),
                    active: "true" === e.getAttribute("aria-expanded"),
                };
                n.push(t);
            }),
                new Accordion(n, { alwaysOpen: "open" === t, activeClasses: r || Default.activeClasses, inactiveClasses: a || Default.inactiveClasses });
        });
    });
const accordion = Accordion;
function collapse_ownKeys(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
            (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
    }
    return r;
}
function collapse_objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? collapse_ownKeys(Object(r), !0).forEach(function (t) {
                  collapse_defineProperty(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : collapse_ownKeys(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
    }
    return e;
}
function collapse_defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function collapse_classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function collapse_defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
        var a = t[r];
        (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
}
function collapse_createClass(e, t, r) {
    return t && collapse_defineProperties(e.prototype, t), r && collapse_defineProperties(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var collapse_Default = { triggerEl: null, onCollapse: function () {}, onExpand: function () {}, onToggle: function () {} },
    Collapse = (function () {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                r = arguments.length > 1 ? arguments[1] : void 0;
            collapse_classCallCheck(this, e),
                (this._targetEl = t),
                (this._triggerEl = r ? r.triggerEl : collapse_Default.triggerEl),
                (this._options = collapse_objectSpread(collapse_objectSpread({}, collapse_Default), r)),
                (this._visible = !1),
                this._init();
        }
        return (
            collapse_createClass(e, [
                {
                    key: "_init",
                    value: function () {
                        var e = this;
                        this._triggerEl &&
                            (this._triggerEl.hasAttribute("aria-expanded") ? (this._visible = "true" === this._triggerEl.getAttribute("aria-expanded")) : (this._visible = !this._targetEl.classList.contains("hidden")),
                            this._triggerEl.addEventListener("click", function () {
                                e._visible ? e.collapse() : e.expand();
                            }));
                    },
                },
                {
                    key: "collapse",
                    value: function () {
                        this._targetEl.classList.add("hidden"), this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "false"), (this._visible = !1), this._options.onCollapse(this);
                    },
                },
                {
                    key: "expand",
                    value: function () {
                        this._targetEl.classList.remove("hidden"), this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "true"), (this._visible = !0), this._options.onExpand(this);
                    },
                },
                {
                    key: "toggle",
                    value: function () {
                        this._visible ? this.collapse() : this.expand();
                    },
                },
            ]),
            e
        );
    })();
(window.Collapse = Collapse),
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll("[data-collapse-toggle]").forEach(function (e) {
            var t = document.getElementById(e.getAttribute("data-collapse-toggle"));
            new Collapse(t, { triggerEl: e });
        });
    });
const collapse = Collapse;
function tabs_toConsumableArray(e) {
    return tabs_arrayWithoutHoles(e) || tabs_iterableToArray(e) || tabs_unsupportedIterableToArray(e) || tabs_nonIterableSpread();
}
function tabs_nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function tabs_unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return tabs_arrayLikeToArray(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? tabs_arrayLikeToArray(e, t) : void 0;
    }
}
function tabs_iterableToArray(e) {
    if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
}
function tabs_arrayWithoutHoles(e) {
    if (Array.isArray(e)) return tabs_arrayLikeToArray(e);
}
function tabs_arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
    return a;
}
function tabs_ownKeys(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
            (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
    }
    return r;
}
function tabs_objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tabs_ownKeys(Object(r), !0).forEach(function (t) {
                  tabs_defineProperty(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : tabs_ownKeys(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
    }
    return e;
}
function tabs_defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function tabs_classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function tabs_defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
        var a = t[r];
        (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
}
function tabs_createClass(e, t, r) {
    return t && tabs_defineProperties(e.prototype, t), r && tabs_defineProperties(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var tabs_Default = { defaultTabId: null, activeClasses: "text-[#f2ab02] hover:text-[#f2ab02]", inactiveClasses: "text-[#000000]", onShow: function () {} },
    Tabs = (function () {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            tabs_classCallCheck(this, e), (this._items = t), (this._activeTab = r ? this.getTab(r.defaultTabId) : null), (this._options = tabs_objectSpread(tabs_objectSpread({}, tabs_Default), r)), this._init();
        }
        return (
            tabs_createClass(e, [
                {
                    key: "_init",
                    value: function () {
                        var e = this;
                        this._items.length &&
                            (this._activeTab || this._setActiveTab(this._items[0]),
                            this.show(this._activeTab.id, !0),
                            this._items.map(function (t) {
                                t.triggerEl.addEventListener("click", function () {
                                    e.show(t.id);
                                });
                            }));
                    },
                },
                {
                    key: "getActiveTab",
                    value: function () {
                        return this._activeTab;
                    },
                },
                {
                    key: "_setActiveTab",
                    value: function (e) {
                        this._activeTab = e;
                    },
                },
                {
                    key: "getTab",
                    value: function (e) {
                        return this._items.filter(function (t) {
                            return t.id === e;
                        })[0];
                    },
                },
                {
                    key: "show",
                    value: function (e) {
                        var t,
                            r,
                            a = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = this.getTab(e);
                        (i !== this._activeTab || n) &&
                            (this._items.map(function (e) {
                                var t, r;
                                e !== i &&
                                    ((t = e.triggerEl.classList).remove.apply(t, tabs_toConsumableArray(a._options.activeClasses.split(" "))),
                                    (r = e.triggerEl.classList).add.apply(r, tabs_toConsumableArray(a._options.inactiveClasses.split(" "))),
                                    e.targetEl.classList.add("hidden"),
                                    e.triggerEl.setAttribute("aria-selected", !1));
                            }),
                            (t = i.triggerEl.classList).add.apply(t, tabs_toConsumableArray(this._options.activeClasses.split(" "))),
                            (r = i.triggerEl.classList).remove.apply(r, tabs_toConsumableArray(this._options.inactiveClasses.split(" "))),
                            i.triggerEl.setAttribute("aria-selected", !0),
                            i.targetEl.classList.remove("hidden"),
                            this._setActiveTab(i),
                            this._options.onShow(this, i));
                    },
                },
            ]),
            e
        );
    })();
(window.Tabs = Tabs),
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll("[data-tabs-toggle]").forEach(function (e) {
            var t = [],
                r = null;
            e.querySelectorAll('[role="tab"]').forEach(function (e) {
                var a = "true" === e.getAttribute("aria-selected"),
                    n = { id: e.getAttribute("data-tabs-target"), triggerEl: e, targetEl: document.querySelector(e.getAttribute("data-tabs-target")) };
                t.push(n), a && (r = n.id);
            }),
                new Tabs(t, { defaultTabId: r });
        });
    });
const tabs = Tabs;
document.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelectorAll(".counter-value"),
        t = (e) => {
            const r = +e.getAttribute("data-count"),
                a = +e.innerText,
                n = r / 300;
            a < r ? ((e.innerText = Math.ceil(a + n)), setTimeout(() => t(e), 10)) : (e.innerText = r);
        },
        r = new IntersectionObserver(
            (e, r) => {
                e.forEach((e) => {
                    if (e.isIntersecting) {
                        const a = e.target;
                        t(a), r.unobserve(a);
                    }
                });
            },
            { threshold: 0.5 }
        );
    e.forEach((e) => {
        r.observe(e);
    });
}),
    document.addEventListener("DOMContentLoaded", function () {
        const e = document.querySelector(".custom-select");
        e &&
            e.addEventListener("click", function () {
                const e = document.querySelector(".custom-arrow");
                e.classList.toggle("opened"), e.classList.toggle("rotate-180");
            });
    });
const headings = document.querySelectorAll(".typewriter-heading");
function initTypewriter(e, t) {
    let r = !1,
        a = 0;
    !(function n() {
        const i = t.substring(0, a);
        (e.textContent = i), r ? (a--, 0 === a && (r = !1)) : (a++, a > t.length && ((r = !0), (a = t.length))), setTimeout(n, r ? 100 : 200);
    })();
}
function setResponsiveImgAttributes(e) {
    var t = e.getAttribute("src"),
        r = e.getAttribute("data-src"),
        a = new Image();
    (a.src = t || r),
        (a.onload = function () {
            var r = a.width,
                n = a.height;
            (e.width = r), (e.height = n);
            var i = t.split("/").pop().split(".")[0];
            e.alt = i;
        }),
        (a.onerror = function () {
            console.error("Error loading image: " + (t || r));
        }),
        (e.loading = "eager");
}
headings.forEach((e) => {
    const t = e.getAttribute("data-default-text");
    initTypewriter(e.querySelector(".typewriter"), t);
});
var imgElements = document.getElementsByTagName("img");
for (let e = 0; e < imgElements.length; e++) setResponsiveImgAttributes(imgElements[e]);
function openModal(e) {
    (modal = document.getElementById(e)), modal.classList.remove("hidden");
}
function closeModal(e) {
    (modal = document.getElementById(e)), modal.classList.add("hidden");
}
$(".owl-testimonial").owlCarousel({ loop: !0, nav: !1, dots: !1, margin: 0, autoplay: !0, autoplayTimeout: 5e3, autoplaySpeed: 1200, responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 1 } } }),
    $(".testimonial-next-button").click(function () {
        $(".owl-testimonial").trigger("next.owl.carousel");
    }),
    $(".testimonial-prev-button").click(function () {
        $(".owl-testimonial").trigger("prev.owl.carousel");
    });
const prevButton = document.getElementById("prevButton"),
    nextButton = document.getElementById("nextButton");
if (prevButton && nextButton) {
    function setActiveButton(e, t) {
        e.classList.add("bg-[#212A79]"), e.classList.remove("bg-transparent"), t.classList.add("bg-transparent"), t.classList.remove("bg-[#212A79]");
    }
    prevButton.addEventListener("click", function () {
        setActiveButton(prevButton, nextButton);
    }),
        nextButton.addEventListener("click", function () {
            setActiveButton(nextButton, prevButton);
        });
}
$.ajax({
    method: "get",
    url: "https://ipwhois.pro/json/?key=LLjAABw4K0gjEPw6",
    success: function (e) {
        e &&
            $("input[name=ip2loc_ip]").length > 0 &&
            ($("input[name=ip2loc_ip]").val(e.ip),
            $("input[name=ip2loc_isp]").val(e.isp),
            $("input[name=ip2loc_org]").val(e.org),
            $("input[name=ip2loc_country]").val(e.country),
            $("input[name=ip2loc_region]").val(e.region),
            $("input[name=ip2loc_city]").val(e.city));
    },
});
const video = document.getElementById("myVideo"),
    playPauseBtn = document.getElementById("playPauseBtn");
function setResponsiveImgAttributes(e) {
    if (!e.hasAttribute("width") || !e.hasAttribute("height")) {
        var t = e.getAttribute("src"),
            r = e.getAttribute("data-src"),
            a = new Image();
        (a.src = r || t),
            (a.onload = function () {
                var n = a.width,
                    i = a.height;
                if ((e.hasAttribute("width") || (e.width = n), e.hasAttribute("height") || (e.height = i), !e.alt)) {
                    var o = (r || t).split("/").pop().split(".")[0];
                    e.alt = o;
                }
            }),
            (a.onerror = function () {
                console.error("Error loading image: " + (r || t));
            }),
            (e.loading = "eager");
    }
}
video &&
    playPauseBtn &&
    (playPauseBtn.addEventListener("click", () => {
        video.paused && (video.play(), (playPauseBtn.disabled = !0));
    }),
    video.addEventListener("click", () => {
        video.paused || video.pause();
    }),
    video.addEventListener("pause", () => {
        (playPauseBtn.style.display = "block"), (playPauseBtn.disabled = !1);
    }),
    video.addEventListener("play", () => {
        playPauseBtn.style.display = "none";
    })),
    document.querySelectorAll("a, button").forEach(function (e) {
        if (!e.hasAttribute("aria-label")) {
            let t = "";
            if ("A" === e.tagName) {
                let r = e.getAttribute("href");
                r && (t = r);
            } else "BUTTON" === e.tagName && (t = e.innerText.trim());
            t && e.setAttribute("aria-label", t);
        }
    });
imgElements = document.getElementsByTagName("img");
for (let t = 0; t < imgElements.length; t++) setResponsiveImgAttributes(imgElements[t]);

$('[data-fancybox]').fancybox();
$('.owl-portfolio').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,   // Enable autoplay
    autoplayTimeout: 3000, // Time between slides (in milliseconds)
    autoplayHoverPause: true, // Pause autoplay on mouse hover
    responsive:{
        0:{
            items:1.2
        },
        600:{
            items:1.6
        },
        1000:{
            items:2.5
        }
    }
})