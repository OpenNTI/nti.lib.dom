export function removeEventListener (el, event, handler) {
	if (el.removeEventListener) {
		el.removeEventListener(event, handler, true);
	}

	else if (el.detachEvent) {
		el.detachEvent('on' + event, handler);
	}

	else {
		throw new Error('Unsupported Operation');
	}
}
