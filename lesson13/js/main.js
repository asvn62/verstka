// Menu

$(document).ready(function() {
    $('.button__open').click(function() {
        $('.menu__collaps').toggleClass('d-none');
    });

    // 

    // Scroling
    $('.go_to').click(function() { // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });

    // ArcticModal
    $('.button__phone').click(function(e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });




    // Slider


    $('.review__slider').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa  fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa   fa-angle-right"></i></button>',
        dots: true
    });


});