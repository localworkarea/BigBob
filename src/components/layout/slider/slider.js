import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
/*
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
*/

import "./slider.scss";
// import 'swiper/css/bundle';

function initSliders() {
	if (document.querySelector('.swiper')) { 
		new Swiper('.swiper', {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			speed: 500,

			// Кут свайпа слайдера: реагує лише на більш горизонтальні рухи (за замовч. 45),
			// щоб не конфліктувати з вертикальним перемиканням секцій FullPage
			touchAngle: 40,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			
			// navigation: {
				// 	prevEl: '.swiper-button-prev',
				// 	nextEl: '.swiper-button-next',
				// 	addIcons: false,
				// },

			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
				
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					992: {
					spaceBetween: 40,
					slidesPerView: 2,
					initialSlide: 1,
				},
			},

			// Події
			on: {

			}
		});
	}
}
document.querySelector('[data-att-slider]') ?
	window.addEventListener("load", initSliders) : null