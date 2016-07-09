function getDocument () {
	return typeof document === 'undefined' ? {} :
		document.documentElement || {};
}

export function getHeight () {
	return getDocument().clientHeight || global.innerHeight;
}

export function getWidth () {
	return getDocument().clientWidth || global.innerWidth;
}

export function getScreenWidth () {
	let fallback = getWidth();
	return (global.screen || {}).width || fallback;
}

export function getScreenHeight () {
	let fallback = getHeight();
	return (global.screen || {}).height || fallback;
}
