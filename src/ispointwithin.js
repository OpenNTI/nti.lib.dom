import inRange from './inrange';
import getElementRect from './getelementrect';

export default function isPointWithIn (el, x, y) {
	let rect = getElementRect(el);

	return (
		inRange(x, rect.left, rect.right) &&
		inRange(y, rect.top, rect.bottom)
	);
}
