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
    $('.app__btn').click(function(e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });




    $('[data-submit]').on('click', function(e) {
        e.preventDefault();
        $(this).parent('form').submit();
    })
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );

    function valEl(el) {

        el.validate({
            rules: {
                tel: {
                    required: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                },
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                tel: {
                    required: 'Поле обязательно для заполнения',
                    regex: 'Телефон может содержать символы + - ()'
                },
                name: {
                    required: 'Поле обязательно для заполнения',
                },
                email: {
                    required: 'Поле обязательно для заполнения',
                    email: 'Неверный формат E-mail'
                }
            },
            submitHandler: function(form) {
                $('#loader').fadeIn();
                var $form = $(form);
                var $formId = $(form).attr('id');
                switch ($formId) {
                    case 'goToNewPage':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                            .always(function(response) {
                                //ссылка на страницу "спасибо" - редирект
                                location.href = 'https://wayup.in/lm/landing-page-marathon/success';
                                //отправка целей в Я.Метрику и Google Analytics
                                ga('send', 'event', 'masterklass7', 'register');
                                yaCounter27714603.reachGoal('lm17lead');
                            });
                        break;
                    case 'popupResult':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                            .always(function(response) {
                                setTimeout(function() {
                                    $('#exampleModal').arcticmodal('close');
                                    $('#loader').fadeOut();
                                }, 800);
                                setTimeout(function() {
                                    $('#overlay').fadeIn();
                                    $form.trigger('reset');
                                    //строки для остлеживания целей в Я.Метрике и Google Analytics
                                }, 1100);
                                $('#overlay').on('click', function(e) {
                                    $('#overlay').fadeOut();
                                });

                            });
                        break;
                }
                return false;
            }
        })
    }

    $('.js-form').each(function() {
        valEl($(this));
    });
    $('[data-scroll]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'data-scroll')).offset().top
        }, 2000);
        event.preventDefault();
    })
});


// Slider
$(document).ready(function() {
    $('.review__slider').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa  fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa   fa-angle-right"></i></button>',
        dots: true
    })
});