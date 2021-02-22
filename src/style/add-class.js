import { hasClass } from './has-class';

const SPACE = /\s+/;

export function addClass(el, className = []) {
	if (!Array.isArray(className)) {
		className = className.split(SPACE);
	}

	for (let cls of className) {
		if (el.classList) {
			el.classList.add(cls);
		} else if (!hasClass(el, cls)) {
			el.className = (el.className || '')
				.split(SPACE)
				.concat(cls)
				.join(' ');
		}
	}
}
