// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

  // Кнопка НАЗАД
if ( document.querySelector('.button-back') ) {  // Проверяем наличие элемента на странице
	document.querySelector('.button-back').onclick = function(){ // Клик по кнопке НАЗАД
		window.history.go(-1); return false;// возвращаемся назад
	};
}

