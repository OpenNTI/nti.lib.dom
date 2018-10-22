export function getDocument () {
	return typeof document === 'undefined'
		/* istanbul ignore next */
		? {}
		: document.documentElement;
}

function getScreen () {
	/* istanbul ignore next */
	return global.screen || {};
}

export function getViewportHeight () {
	return getDocument().clientHeight || global.innerHeight;
}

export function getViewportWidth () {
	return getDocument().clientWidth || global.innerWidth;
}

export function getScreenWidth () {
	let fallback = getViewportWidth();
	return getScreen().width || fallback;
}

export function getScreenHeight () {
	let fallback = getViewportHeight();
	return getScreen().height || fallback;
}
