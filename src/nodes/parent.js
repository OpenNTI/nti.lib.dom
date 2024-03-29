import { isTextNode } from './is-text-node';
import { matches } from './matches';

//some browsers do not define these constants.
// ALSO, Node is not defined in node.js
const ELEMENT_NODE = 1; //Node.ELEMENT_NODE || 1;

const isEmpty = e => e == null || e === '';

export function parent(el, selector) {
	if (isTextNode(el)) {
		el = el.parentNode;

		if (isEmpty(selector)) {
			return el;
		}
	}

	if (el) {
		if (isEmpty(selector)) {
			el = el.parentNode;
		} else {
			if (typeof el.closest === 'function') {
				return el.closest(selector);
			}

			while (el && !matches(el, selector)) {
				el = el.parentNode;
			}
		}
	}

	//this will return null for any node/falsy value of el where el's NodeType
	// is not an Element.
	return (el && el.nodeType === ELEMENT_NODE && el) || null;
}
