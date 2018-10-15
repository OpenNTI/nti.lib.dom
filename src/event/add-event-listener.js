export function addEventListener (el, event, handler) {
	if (el.addEventListener) {
		el.addEventListener(event, handler, true);
	}

	else if (el.attachEvent) {
		el.attachEvent('on' + event, handler);
	}

	else {
		throw new Error('Unsupported Operation');
	}
}
