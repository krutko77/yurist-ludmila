// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Отключение transition до полной загрузки страницы
if ( document.querySelector('.action__link') ) {  //
	let elem = document.querySelector('.action__link'); 

			window.onload = function() {
			elem.classList.remove('preload');
		};	
}

  // Кнопка НАЗАД
if ( document.querySelector('.button-back') ) {  // Проверяем наличие элемента на странице
	document.querySelector('.button-back').onclick = function(){ // Клик по кнопке НАЗАД
		window.history.go(-1); return false;// возвращаемся назад
	};
}

