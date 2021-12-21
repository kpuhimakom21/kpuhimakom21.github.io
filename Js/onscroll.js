window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var navbarNav = document.getElementById("navbarNav");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add("shadow");
        navbar.classList.add("bg-white");
        navbar.classList.remove("mt-1");
        navbar.classList.add("fixed-top");

    } else {
        navbar.classList.remove("shadow");
        navbar.classList.remove("bg-white");
        navbar.classList.add("mt-1");
        navbar.classList.remove("fixed-top");
    }

}

(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });
})(jQuery);