import hasClass from './hasclass';

export default function addClass  (el, className) {
	if (el.classList) {
		return el.classList.add(className);
	}

	let classes;
	if (!hasClass(el, className)) {
		classes = (el.className || '').split(' ');
		classes.push(className);
		el.className = classes.join(' ');
	}
}
