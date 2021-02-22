export function getMaxZIndex(scope = document) {
	return [...(scope.querySelectorAll('body *') || [])].reduce(
		(max, e) =>
			Math.max(
				max,
				parseInt(getComputedStyle(e).getPropertyValue('z-index'), 10) ||
					0
			),
		0
	);
}
