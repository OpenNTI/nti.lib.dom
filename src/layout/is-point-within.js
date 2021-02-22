import { inRange } from '../values/in-range';

import { getElementRect } from './get-element-rect';

export function isPointWithin(el, x, y) {
	let rect = getElementRect(el);

	return (
		inRange(x, rect.left, rect.right, true) &&
		inRange(y, rect.top, rect.bottom, true)
	);
}
