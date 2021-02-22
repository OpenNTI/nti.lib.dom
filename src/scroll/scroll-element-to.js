export function scrollElementTo(element, left, top) {
	if (!element) {
		return;
	}
	if (element.scrollTo) {
		// window
		element.scrollTo(left, top);
	} else {
		// DOM element
		element.scrollTop = top;
		element.scrollLeft = left;
	}
}
