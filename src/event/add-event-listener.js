const defaultOptions = {capture: true};

export function addEventListener (el, event, handler, options = {}) {
	if (el.addEventListener) {
		el.addEventListener(event, handler, {...defaultOptions, ...options});
	}

	else if (el.attachEvent) {
		el.attachEvent('on' + event, handler);
	}

	else {
		throw new Error('Unsupported Operation');
	}
}
