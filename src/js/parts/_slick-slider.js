$('.slider-promo_1').slick({
    //autoplay: true,
    //autoplaySpeed: 10000,
    arrows: false,
    swipe: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.slider-promo_2').slick({
    //autoplay: true,
    //autoplaySpeed: 10000,
    arrows: false,
    swipe: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.slider__slide').click(function(e) {
    e.preventDefault();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});

$('.slide_appartments').click(function(e) {
    e.preventDefault();
    $('.slider-promo_1').slick('slickGoTo', 0 );
});

$('.slide_parking').click(function(e) {
    e.preventDefault();
    $('.slider-promo_1').slick('slickGoTo', 1 );
});

$('.slide_safety').click(function(e) {
    e.preventDefault();
    $('.slider-promo_1').slick('slickGoTo', 2 );
});

$('.slide_architecture').click(function(e) {
    e.preventDefault();
    $('.slider-promo_2').slick('slickGoTo', 0 );
});

$('.slide_interior').click(function(e) {
    e.preventDefault();
    $('.slider-promo_2').slick('slickGoTo', 1 );
});

$('.slide_materials').click(function(e) {
    e.preventDefault();
    $('.slider-promo_2').slick('slickGoTo', 2 );
});
