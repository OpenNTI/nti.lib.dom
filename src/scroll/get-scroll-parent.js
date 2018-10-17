import { parents } from '../nodes/parents';

import { canScroll } from './is-scroller';

const WINDOW = typeof window === 'undefined' ? global : window;
const ROOT_ELEMENTS = /body|html/i;

function scrollParent (node) {
	if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
		return ;
	}

	return parents(node.parentNode).find(p => canScroll(p))
		|| document.scrollingElement
		|| document.documentElement;
}

const shouldBeWindow = el => !el || (ROOT_ELEMENTS.test(el.tagName) && el.clientHeight <= el.scrollHeight);

export const getScrollParent = el => (x => shouldBeWindow(x) ? WINDOW : x)(scrollParent(el));
