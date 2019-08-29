import { isElement } from '../nodes/is-element';

import { getViewportWidth, getViewportHeight } from './viewport';


export function getElementRect (el) {
	let rect, w, h;
	if (el && el.getBoundingClientRect) {
		//getBoundingClientRect returns a ClientRect which is not a "normal" JSO.
		//So Object operations or mutations do not work on it. Pull the values
		//out and returna JSO.
		const {top, left, bottom, right, width, height} = el.getBoundingClientRect();
		rect = {top, left, bottom, right, width, height};
	}

	/* istanbul ignore else */
	if (!rect && el) {
		/* istanbul ignore else */
		if (!isElement(el)) {
			//
			h = getViewportHeight();
			w = getViewportWidth();
			rect = {
				top: 0, left: 0,
				right: w, bottom: h,
				width: w, height: h
			};
		}
		// else {
		// 	rect = {
		// 		top: el.offsetTop,
		// 		left: el.offsetLeft,
		// 		bottom: el.offsetTop + el.offsetHeight,
		// 		right: el.offsetLeft + el.offsetWidth,
		// 		width: el.offsetWidth,
		// 		height: el.offsetHeight
		// 	};
		// }
	}

	return rect;
}
