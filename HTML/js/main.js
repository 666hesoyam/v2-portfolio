var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1200);
        return false;
    });




// Our Projects Section Slider
$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        rows: 2,
        prevArrow: "<img src='img/left-arrow.svg' class='prev' alt='prev'>",
        nextArrow: "<img src='img/right-arrow.svg' class='next' alt='next'>",
        slidesToScroll: 1
        // responsive: [
        //                 {
        //                     breakpoint: 900,
        //                     settings: {
        //                     slidesToShow: 1
        //                     }
        //                 },
        //             ]
    });
});

// Our Projects Section Slider
$(document).ready(function(){
    $('.slider-two').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        rows: 2,
        prevArrow: "<img src='img/left-arrow.svg' class='prev' alt='prev'>",
        nextArrow: "<img src='img/right-arrow.svg' class='next' alt='next'>",
        slidesToScroll: 1
    });
});