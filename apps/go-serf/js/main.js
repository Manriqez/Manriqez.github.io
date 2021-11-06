$(function(){

    $('.header__slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrow">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrow">',
        asNavFor: '.slider-dotshead'
    });
    $('.slider-dotshead').slick({
        slidesToShow: 4,
        infinite: true,
        asNavFor: ".header__slider"
    });
    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrow">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrow">',
        asNavFor: ".slider-map"
    });
    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: ".surf-slider",
        focusOnSelect: true
    });
    $('.holder__slider, .shop__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrow">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrow">'
    });

    $('.surfboard-box__circle').on('click', function(){
        if($('.surfboard-box__circle').hasClass('active') && !$(this).hasClass('active')) {
            
            $('.surfboard-box__content').removeClass('visibleBlock');
            $('.surfboard-box__circle').removeClass('active');
            $(this).toggleClass('active');
            setTimeout(function () {
                $('.surfboard-box__content').toggleClass('visibleBlock');
              }, 20);
            
        } else {
            $(this).toggleClass('active');
            setTimeout(function () {
                $('.surfboard-box__content').toggleClass('visibleBlock');
              }, 20);
            
        }
    });
    
    $('.menu-btn').on('click', function(){
        $('.menu').toggleClass('active');
    });
});