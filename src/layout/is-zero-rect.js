export function isZeroRect(r) {
	return !r || r.top + r.left + r.height + r.width === 0;
}
