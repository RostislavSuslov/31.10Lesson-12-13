$(document).ready(function () {

    $('.first-screen-slider').slick({
        dots: true,
        appendArrows: ".first-screen__container-arrow",
        responsive: [
            {
              breakpoint: 767,
              settings: {
                    arrows: false,
              }
            } 
        ]
    });


    mobileOnlySlider(".advantages-slider", true, false, 991);
    function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
        var slider = $($slidername);
        var settings = {
            mobileFirst: true,
            dots: $dots,
            arrows: $arrows,
            responsive: [{
                breakpoint: $breakpoint,
                settings: "unslick"
            }]
        };

        slider.slick(settings);

        $(window).on("resize", function () {
            if ($(window).width() > $breakpoint) {
                return;
            }
            if (!slider.hasClass("slick-initialized")) {
                return slider.slick(settings);
            }
        });
    } // Mobile Only Slider

});