export function getDocument () {
	return typeof document === 'undefined' ? {} :
		document.documentElement || {};
}

export function getViewportHeight () {
	return getDocument().clientHeight || global.innerHeight;
}

export function getViewportWidth () {
	return getDocument().clientWidth || global.innerWidth;
}

export function getScreenWidth () {
	let fallback = getViewportWidth();
	return (global.screen || {}).width || fallback;
}

export function getScreenHeight () {
	let fallback = getViewportHeight();
	return (global.screen || {}).height || fallback;
}
