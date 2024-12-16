document.addEventListener("DOMContentLoaded", function () {
    $('.gallery__slider').slick({
        infinite: true, // Бесконечная прокрутка
        slidesToShow: 1, // Показывать по 1 слайду за раз
        slidesToScroll: 1, // Прокручивать по 1 слайду
        adaptiveHeight: true, // Автоматическая подстройка высоты под содержимое
        dots: true, // Навигационные точки
        arrows: true // Кнопки "вперед" и "назад"
    });
});