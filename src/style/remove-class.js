import { hasClass } from './has-class';

export function removeClass(el, className) {
	if (el.classList) {
		return el.classList.remove(className);
	}

	if (hasClass(el, className)) {
		let classes = (el.className || '').split(' ');
		classes.splice(classes.indexOf(className), 1);
		el.className = classes.join(' ');
	}
}
