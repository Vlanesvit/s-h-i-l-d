/* ====================================
Инициализация слайдера в блоке product
==================================== */
function initProductSliders() {
	const productSlider = document.querySelectorAll('.product__slider');
	productSlider.forEach(product => {
		// Перечень слайдеров
		const productSlider = new Swiper(product, {
			// Автопрокрутка
			autoplay: {
				// Пауза между прокруткой
				delay: 10000,
				// Закончить на последнем слайде
				stopOnLastSlide: false,
				// Отключить после ручного переключения
				disableOnInteraction: false,
			},

			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,
			// при изменении родительских элементов слайдера
			observeParents: true,
			// при изменении дочерних элементов слайдера
			observeSlideChildren: true,

			// Скорость смены слайдов
			speed: 500,

			// Включение/отключение
			// перетаскивание на ПК
			simulateTouch: true,
			// Чувствительность свайпа
			touchRadio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,

			slidesPerView: 1,
			effect: 'fade',
		});

		const productSliders = product.querySelectorAll('.swiper-slide');

		productSliders.forEach(slide => {
			slide.addEventListener('mouseenter', function () {
				productSlider.slideNext();
			});
			slide.addEventListener('mouseleave', function (e) {
				productSlider.slidePrev();
			})
		});
	});
}
window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initProductSliders();
});