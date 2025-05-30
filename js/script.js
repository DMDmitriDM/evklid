window.addEventListener('DOMContentLoaded', function () {

  // ------------------- burger ------------------------ //

  let burger = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__nav');

  burger.addEventListener('click', function() {
    burger.classList.toggle('header__burger--active');
    menu.classList.toggle('header__nav--active');
    // document.body.classList.toggle('stop-scroll');

    // if ( burger.getAttribute('aria-label') === 'Открыть меню' ) {
    //   burger.setAttribute('aria-label', 'Закрыть меню');
    // } else {
    //   burger.setAttribute('aria-label', 'Открыть меню');
    // }

    if ( burger.getAttribute('aria-label') === 'Открыть меню' ) {
      burger.setAttribute('aria-label', 'Закрыть меню');
      return;
    }
    burger.setAttribute('aria-label', 'Открыть меню');

  });

  let menuLinks = menu.querySelectorAll('.header__item-link');

  menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
      burger.classList.remove('header__burger--active');
      menu.classList.remove('header__nav--active');
      // document.body.classList.remove('stop-scroll');
    });
  });

// ------------------- search ------------------------ //

let searchBtn = document.querySelector('.header__button-search');
let searchWin = document.querySelector('.header__window-search');
let searchBtnP = document.querySelector('.header__button-search-post');
let searchBtnC = document.querySelector('.header__button-search-close');

// Открываем окно поиска
searchBtn.addEventListener('click', function() {
  searchBtn.classList.toggle('header__button-search--active');
  searchWin.classList.toggle('header__window-search--active');
});
// Закрываем окно поиска
searchBtnC.addEventListener('click', function() {
  searchBtn.classList.toggle('header__button-search--active');
  searchWin.classList.toggle('header__window-search--active');
});

searchBtnP.addEventListener('click', function() {
  alert('Поиск');
});

// ------------------- swiper ------------------------ //

const swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
  loop: true,
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true
  },
});

// -------------------- tab ------------------------- //

let tabsBtn = document.querySelectorAll('.steps__btn')
let tabsItem = this.document.querySelectorAll('.steps__content');

tabsBtn.forEach(function(element) {

  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) { btn.classList.remove('steps__btn--actived')});
    e.currentTarget.classList.add('steps__btn--actived');

    tabsItem.forEach(function(item) { item.classList.remove('steps__content--actived')});
    document.querySelector(`[data-target="${path}"]`).classList.add('steps__content--actived');
  });

});

// ----------------- accordion --------------------- //

new Accordion('.accordion', {
	elementClass: 'question__item',
	triggerClass: 'question__button',
	panelClass: 'question__item-content',
	activeClass: 'accordion--active',
  duration: 600
});

let qwsBtn = document.querySelectorAll('.question__button');

// qwsBtn.forEach(function (qwBtn) {
//   qwBtn.addEventListener ('click', function() {
//     qwsBtn.forEach(function (qwBtnNew) {

//       if ( qwBtnNew.getAttribute('aria-expanded') === 'true' ) {
//         qwBtn.setAttribute('aria-label', 'Свернуть ответ');
//       }
//       else {
//         qwBtnNew.setAttribute('aria-label', 'Развернуть ответ');
//       }

//     });
//   });
// });

qwsBtn.forEach(function (qwBtn) {
  qwBtn.addEventListener ('click', function() {
    qwsBtn.forEach(function (qwBtnNew) {

      if ( qwBtnNew.getAttribute('aria-expanded') === 'true' ) {
        qwBtn.setAttribute('aria-label', 'Свернуть ответ');
        return;
      }
      qwBtnNew.setAttribute('aria-label', 'Развернуть ответ');

    });
  });
});

// - end - DOMContentLoaded - //
});
