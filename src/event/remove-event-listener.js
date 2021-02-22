export function removeEventListener(el, event, handler) {
	console.warn(
		'removeEventListener in lib-dom is deprecated. We no longer support browsers that use detachEvent. Invoke removeEventListener on the element directly.'
	); //eslint-disable-line no-console
	if (el.removeEventListener) {
		el.removeEventListener(event, handler, true);
	} else if (el.detachEvent) {
		el.detachEvent('on' + event, handler);
	} else {
		throw new Error('Unsupported Operation');
	}
}
