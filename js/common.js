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

    var navList = $('.aside__nav-list');

    $(window).resize(function() {
        if(document.documentElement.clientWidth >= 1280) {
            navList.show();
        } else {
            navList.hide();
        }
    });

    $('.aside__but').on('click', function () {
        var elem = $(this);

        elem.toggleClass('menu_btn_active');
        if(elem.hasClass('menu_btn_active')) {
            navList.slideDown(500);
        } else {
            navList.slideUp(300);
        }

    });


    /* News-buttons
    =========================*/

    var news = $('.news__item-mob'),
        newsButtons = $('.news__buttons');

    news.each(function (indx, element){
        newsButtons.append("<div class='news__button'></div>");
    });
    newsButtons.children().first().addClass('news__button--active');

    $('.news__button').each(function (index, element) {
        $(element).on('click', function () {
            newsButtons.children().removeClass('news__button--active');
            $(this).addClass('news__button--active');
            $(news).hide();
            $(news[index]).show(500);
        })
    });


    /* Footer-Accordion
    =========================*/
    var allAccordions = $('.footer__list');
    var allAccordionItems = $('.footer__section-wrap .footer__title');

    if(document.documentElement.clientWidth < 768) {

            $('.footer__title').click(function() {
                if($(this).hasClass('open')) {
                    $(this).removeClass('open');
                    $(this).next().slideUp("slow");
                }
                else {
                    allAccordions.slideUp("slow");
                    allAccordionItems.removeClass('open');
                    $(this).addClass('open');
                    $(this).next().slideDown("slow");
                }
            });

    } else {
        allAccordions.show();
    }

});