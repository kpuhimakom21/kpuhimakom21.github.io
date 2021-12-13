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