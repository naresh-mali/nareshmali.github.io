fetch('https://ejekanshjain.herokuapp.com/api')
    .then(res => res.text())
    .then(text => console.log(text))
    .catch(err => console.log(err))
$("#status").fadeOut(), $("#preloader").delay(350).fadeOut("slow"), $("body").delay(350).css({
    overflow: "visible"
}), $(window).on("scroll", () => {
    $(window).scrollTop() >= 50 ? $(".sticky").addClass("stickyadd") : $(".sticky").removeClass("stickyadd")
}), $(".navbar-nav a, .scroll_down a").on("click", function (e) {
    var t = $(this);
    $("html, body").stop().animate({
        scrollTop: $(t.attr("href")).offset().top - 0
    }, 1500, "easeInOutExpo"), e.preventDefault()
}), $("#navbarCollapse").scrollspy({
    offset: 20
});
var a = 0;
$(window).on("scroll", function () {
    var e = $("#counter").offset().top - window.innerHeight;
    0 == a && $(window).scrollTop() > e && ($(".lan_fun_value").each(function () {
        var e = $(this),
            t = e.attr("data-count");
        $({
            countNum: e.text()
        }).animate({
            countNum: t
        }, {
            duration: 2e3,
            easing: "swing",
            step: function () {
                e.text(Math.floor(this.countNum))
            },
            complete: function () {
                e.text(this.countNum)
            }
        })
    }), a = 1)
}), $(window).on("load", function () {
    var e = $(".work-filter"),
        t = $("#menu-filter");
    e.isotope({
        filter: "*",
        layoutMode: "masonry",
        animationOptions: {
            duration: 750,
            easing: "linear"
        }
    }), t.find("a").on("click", function () {
        var o = $(this).attr("data-filter");
        return t.find("a").removeClass("active"), $(this).addClass("active"), e.isotope({
            filter: o,
            animationOptions: {
                animationDuration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
}), $(".img-zoom").magnificPopup({
    type: "image",
    closeOnContentClick: !0,
    mainClass: "mfp-fade",
    gallery: {
        enabled: !0,
        navigateByImgClick: !0,
        preload: [0, 1]
    }
}), $("#owl-demo").owlCarousel({
    autoPlay: 7e3,
    stopOnHover: !0,
    navigation: !1,
    paginationSpeed: 1e3,
    goToFirstSpeed: 2e3,
    singleItem: !0,
    autoHeight: !0
}), $(".blog_play").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: !1,
    fixedContentPos: !1
}), $(window).on("scroll", function () {
    $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut()
}), $(".back_top").click(function () {
    return $("html, body").animate({
        scrollTop: 0
    }, 1e3), !1
}), $(".element").each(function () {
    var e = $(this);
    e.typed({
        strings: e.attr("data-elements").split(","),
        typeSpeed: 100,
        backDelay: 3e3
    })
}), $("body").bind("cut copy paste", function (e) {
    e.preventDefault()
}), window.onload = function () {
    function e(e) {
        return e.stopPropagation ? e.stopPropagation() : window.event && (window.event.cancelBubble = !0), e.preventDefault(), !1
    }
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault()
    }, !1), document.addEventListener("keydown", function (t) {
        t.ctrlKey && t.shiftKey && 73 == t.keyCode && e(t), t.ctrlKey && t.shiftKey && 74 == t.keyCode && e(t), 83 == t.keyCode && (navigator.platform.match("Mac") ? t.metaKey : t.ctrlKey) && e(t), t.ctrlKey && 85 == t.keyCode && e(t), 123 == event.keyCode && e(t)
    }, !1)
};
$(".element").each(function () {
    var $this = $(this);
    $this.typed({
        strings: $this.attr('data-elements').split(','),
        typeSpeed: 100,
        backDelay: 3000
    });
});
$('form').submit(e => {
    e.preventDefault();
    const data = {
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#comments').val().trim()
    }
    if (data.message == '') return iziToast.warning({ title: 'Message cannot be empty!', position: 'topCenter' });
    $('#contact-button').attr('disabled', true)
    fetch('https://ejekanshjain.herokuapp.com/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(json => {
            $('#contact-button').attr('disabled', false)
            if (json.status == 201) {
                iziToast.success({
                    title: 'Thank You!',
                    position: 'topCenter'
                });
                $('#name').val('');
                $('#email').val('');
                $('#comments').val('');
            } else if (json.status == 400) {
                iziToast.warning({
                    title: json.message,
                    position: 'topCenter'
                });
            } else {
                iziToast.error({
                    title: json.message,
                    position: 'topCenter'
                });
            }
        }).catch(err => {
            $('#contact-button').attr('disabled', false)
            iziToast.error({
                title: 'Something went wrong!',
                position: 'topCenter'
            });
        })
});
function scrollWaypointInit(items, trigger) {
    items.each(function () {
        var element = $(this),
            osAnimationClass = element.data("animation"),
            osAnimationDelay = element.attr('data-animation-delay');
        element.css({
            '-webkit-animation-delay': osAnimationDelay,
            '-moz-animation-delay': osAnimationDelay,
            'animation-delay': osAnimationDelay
        });
        var trigger = (trigger) ? trigger : element;
        trigger.waypoint(function () {
            element.addClass('animated').addClass(osAnimationClass);
        }, {
            // triggerOnce: true,
            offset: '90%'
        });
    });
}
$(document).ready(function () {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    } else {
        $('.scroll-animate').css('opacity', '0');
        $('.scroll-animate .animated').css('opacity', '1');
        scrollWaypointInit($('.scroll-animate'));
    }
});