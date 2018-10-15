import { isElement } from '../nodes/is-element';

export function getEffectiveZIndex (el) {
	let zindex = 0;

	while (el && isElement(el)) {
		const style = getComputedStyle(el);
		const z = style && parseInt(style.getPropertyValue('z-index'), 10);

		if (z > zindex) {
			zindex = z;
		}

		el = el.parentNode;
	}

	return zindex;
}
