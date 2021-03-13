$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'linear', // картинка перемещения
        infinite: true,
        initialSlide: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggabale: true, // свайп на ПК
        swipe: true, // свайп на телефоне
        touchThreshold: 20, // протяженность движения для переключения слайдера
        touchMove: true, // для передвижения слайдер пальцем
        waitForAnimate: false, // переключать анимации с любой скоростью при нажатии кнопкой мыши
        centerMode: true, //сделать акцент на слайде по центру
        variableWidth: true, //убирает ширину между слайдерами (часто используется с centerMode )
        rows: 1, // колличество рядов
        slidesPerRow: 1,
        vertical: false, // для движения вертикально
        verticalSwiping: false, //для прокрутки вертикально
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

// $(document).ready(function() {
//     $('.slider').slick({


$(document).ready(function() {
    $('.slider_video').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1500,
        autoplaySpeed: 800,
        responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,


                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: true
                }
            }
        ]
    });
});

// $(document).ready(function() {
//     $('.slider').slick({