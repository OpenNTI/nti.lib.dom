const defaultOptions = { capture: true };

export function addEventListener(el, event, handler, options = {}) {
	//eslint-disable-next-line no-console
	console.warn(
		'addEventListener in lib-dom is deprecated. We no longer support browsers that use attachEvent. Invoke addEventListener on the element directly.'
	);
	if (el.addEventListener) {
		el.addEventListener(event, handler, { ...defaultOptions, ...options });
	} else if (el.attachEvent) {
		el.attachEvent('on' + event, handler);
	} else {
		throw new Error('Unsupported Operation');
	}
}
