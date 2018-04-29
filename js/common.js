$(function () {

    /* Accordion
    =========================*/
    var accordionItem, info;

    $(".accordion-block__title-item").on("click", function() {
        accordionItem = $(this).parents(".accordion-block__item");
        info = accordionItem.find(".accordion-block__info");

        if (accordionItem.hasClass("accordion-block__item--active")) {
            accordionItem.removeClass("accordion-block__item--active");
            info.slideUp();
        } else {
            accordionItem.addClass("accordion-block__item--active");
            info.slideDown();
            accordionItem.siblings(".accordion-block__item--active").removeClass("accordion-block__item--active").children(".accordion-block__info").slideUp()
        }
    });

    /* Hamburger
    =========================*/

    $(".menu").on('click',function(){
        var elem = $(this);
        $('.header__phone-js').toggleClass('hidden');
        $('.header__icon-comparison-js').toggleClass('header__icon-comparison-js--active');

        elem.toggleClass('menu_btn_active');
        if(elem.hasClass('menu_btn_active')) {
            $('.header__menu-mob').slideDown(500);
        } else {
            $('.header__menu-mob').slideUp(300);
        }
    });

    /* Aside
    =========================*/

    var width = $(window).width();

    $(window).resize(function(){
        width = $(this).width();
        if (width >= 1280) {
            $('.aside__nav-list').slideDown();
        } else {
            $('.aside__nav-list').slideUp();
        }
    });

    $('.aside__but').on('click', function () {
        var elem = $(this),
            list = $('.aside__nav-list');

        elem.toggleClass('menu_btn_active');
        if(elem.hasClass('menu_btn_active')) {
            list.slideDown(500);
        } else {
            list.slideUp(300);
        }

    });



    



});