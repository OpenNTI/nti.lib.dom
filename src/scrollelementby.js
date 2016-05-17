export default function scrollElementBy (el, x, y) {
	x = x || 0;
	y = y || 0;


	if (el.scrollBy) {
		return el.scrollBy(x, y);
	} else if ('scrollTop' in el) {
		el.scrollTop += y;
		el.scrollLeft += x;
		return;
	}

	return window.scrollBy(x, y);
}
