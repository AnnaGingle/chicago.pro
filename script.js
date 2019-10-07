window.addEventListener("scroll", function () {
    parallax("header", window.scrollY, 0.5);
    parallax("nav", window.scrollY, 1);
    parallax(".intro-text", window.scrollY, 0.6);

    //parallax(".small-rose", window.scrollY, 0.4);
    //parallax(".big-rose", window.scrollY, 0.2);
});


navSlide();