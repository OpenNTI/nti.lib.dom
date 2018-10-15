export function inRange (i, a, b, inclusive = false) {
	const x = Math.min(a, b);
	const y = Math.max(a, b);
	return inclusive
		? (i >= x && i <= y)
		: (i > x && i < y);
}
