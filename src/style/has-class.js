export function hasClass(el, className) {
	if (el.classList && el.classList.contains) {
		return el.classList.contains(className);
	}

	let classes = (el.className || '').split(' ');
	return classes.indexOf(className) !== -1;
}
