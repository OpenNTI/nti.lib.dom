export default function hasClass (el, className) {
	if (el.classList && el.classList.has) {
		return el.classList.has(className);
	}

	let classes = (el.className || '').split(' ');
	return classes.indexOf(className) !== -1;
}
