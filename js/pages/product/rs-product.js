/* ====================================
Инициализация слайдера в блоке rs-product
==================================== */
function initProductSliders() {
	// Перечень слайдеров
	const thumbsSlider = new Swiper('.rs-thumbs__slider', {
		// // Автовысота
		// autoHeight: true,

		// // Бесконечность
		// loop: true,

		// // Предзагрузка изоражений
		// preloadImages: false,

		// // Ленивая загрузка
		// lazy: true,

		// Слежка за слайдером
		watchOverflow: true,

		// // Автопрокрутка
		// autoplay: {
		// 	// Пауза между прокруткой
		// 	delay: 5000,
		// 	// Закончить на последнем слайде
		// 	stopOnLastSlide: false,
		// 	// Отключить после ручного переключения
		// 	disableOnInteraction: false,
		// },

		// Кол-во показываемых слайдов
		slidesPerView: 8,

		// Отступ между слайдами
		spaceBetween: 20,

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

		direction: 'vertical',
	});

	const productSlider = new Swiper('.rs-product__slider', {
		// Слияние слайдеров
		thumbs: {
			swiper: thumbsSlider
		},

		// // Автовысота
		// autoHeight: true,

		// // Бесконечность
		// loop: true,

		// // Предзагрузка изоражений
		// preloadImages: false,

		// // Ленивая загрузка
		// lazy: true,

		// Слежка за слайдером
		watchOverflow: true,

		// // Автопрокрутка
		// autoplay: {
		// 	// Пауза между прокруткой
		// 	delay: 5000,
		// 	// Закончить на последнем слайде
		// 	stopOnLastSlide: false,
		// 	// Отключить после ручного переключения
		// 	disableOnInteraction: false,
		// },

		// Управлениt колесом мыши
		mousewheel: {
			// Чувствительность колеса мыши
			sensitivity: 1,
		},

		// Кол-во показываемых слайдов
		slidesPerView: 1,

		// Отступ между слайдами
		spaceBetween: 30,

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

		pagination: {
			el: '.rs-product__pagination',
			clickable: true,
		},

		// Брейкпоинты(адаптив)
		// Шрина экрана
		breakpoints: {
			320: {
				direction: 'horizontal',
			},
			992: {
				direction: 'vertical',
			},
		},
	});

	if (document.querySelector('.rs-product__pagination')) {
		const sliderPagination = document.querySelector('.rs-product__pagination')
		window.addEventListener('resize', function () {
			if (window.innerWidth <= 992) {
				sliderPagination.classList.remove('swiper-pagination-vertical')
				sliderPagination.classList.add('swiper-pagination-horizontal')
			} else {
				sliderPagination.classList.add('swiper-pagination-vertical')
				sliderPagination.classList.remove('swiper-pagination-horizontal')
			}
		})
	}
}
initProductSliders();

/* ====================================
Фильтры
==================================== */
function selectColor() {
	const color = document.querySelector('.color');
	const colorTitle = color.querySelector('[data-title]');
	const colorSelects = color.querySelectorAll('[data-select]');

	colorSelects.forEach(color => {
		color.addEventListener('click', function () {
			colorTitle.textContent = color.dataset.select
		})
	});
}
selectColor()

function selectSize() {
	const size = document.querySelector('.size');
	const sizeTitle = size.querySelector('[data-title]');
	const sizeSelects = size.querySelectorAll('[data-select]');

	sizeSelects.forEach(size => {
		size.addEventListener('click', function () {
			sizeTitle.textContent = size.dataset.select
		})
	});
}
selectSize()
