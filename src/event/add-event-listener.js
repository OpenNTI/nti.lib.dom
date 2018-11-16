const defaultOptions = {capture: true};

export function addEventListener (el, event, handler, options = {}) {
	console.warn('addEventListener in lib-dom is deprecated. We no longer support browsers that use attachEvent. Invoke addEventListener on the element directly.'); //eslint-disable-line no-console
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
