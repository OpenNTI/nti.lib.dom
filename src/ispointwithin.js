import inRange from './inrange';
import getElementRect from './getelementrect';

export default function isPointWithin (el, x, y) {
	let rect = getElementRect(el);

	return (
		inRange(x, rect.left, rect.right, true) &&
		inRange(y, rect.top, rect.bottom, true)
	);
}
