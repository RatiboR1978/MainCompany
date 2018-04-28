$(function () {
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
    })





});