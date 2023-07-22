
/* ====================================
Открытие окона фильтров
==================================== */
function modalFilter() {
	const filterBtnShow = document.querySelector('.filter-show');
	const filterBtnClose = document.querySelector('.filter-close');
	const filter = document.getElementById('filters');

	filterBtnShow.addEventListener('click', function () {
		filter.classList.toggle('_filters-show');
		filterBtnShow.classList.toggle('_filters-active');
	})

	filterBtnClose.addEventListener('click', function () {
		filter.classList.remove('_filters-show')
	})
}
if (document.querySelector('.filter-show') && document.getElementById('filters')) {
	modalFilter()
}

/* ====================================
Подсчет активных фильтров и отчистка
==================================== */
function filterClear() {
	const filter = document.getElementById('filters');
	const clearBtn = document.querySelector('.filter-clear');
	const inputs = filter.querySelectorAll('input');

	clearBtn.addEventListener('click', function () {
		inputs.forEach(input => {
			input.checked = false;
		});
	})
}
if (document.getElementById('filters')) {
	filterClear();
}

/* ====================================
Смена отображения списка
==================================== */
function viewList() {
	const catalogContent = document.querySelector('.rs-catalog__list');
	const oneViewBtns = document.querySelector('.rs-filters__view-1 > button');
	const fourViewBtns = document.querySelector('.rs-filters__view-4 > button');

	oneViewBtns.addEventListener('click', function () {
		catalogContent.classList.remove('_view-4');
		catalogContent.classList.add('_view-1');
		fourViewBtns.classList.remove('_active-view');
		oneViewBtns.classList.add('_active-view');
	})

	fourViewBtns.addEventListener('click', function () {
		catalogContent.classList.remove('_view-1');
		catalogContent.classList.add('_view-4');
		oneViewBtns.classList.remove('_active-view');
		fourViewBtns.classList.add('_active-view');
	})
}
if (document.querySelector('.rs-catalog__list')) {
	viewList();
}

/* ====================================
Кастомный селект
==================================== */
function select() {
	const selectSingle = document.querySelector('.select');
	const selectSingle_title = selectSingle.querySelector('.select__title');
	const selectSingle_labels = selectSingle.querySelectorAll('.select__label');

	// Переключить меню
	selectSingle_title.addEventListener('click', () => {
		if ('active' === selectSingle.getAttribute('data-state')) {
			selectSingle.setAttribute('data-state', '');
		} else {
			selectSingle.setAttribute('data-state', 'active');
		}
	});

	// Закрыть при нажатии на опцию
	for (let i = 0; i < selectSingle_labels.length; i++) {
		selectSingle_labels[i].addEventListener('click', (evt) => {
			// selectSingle_title.textContent = evt.target.textContent;
			selectSingle.setAttribute('data-state', '');
		});
	}
}
if (document.querySelector('.select')) {
	select();
}