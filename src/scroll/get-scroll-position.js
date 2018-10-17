import { isScroller } from './is-scroller';
import { getScrollParent } from './get-scroll-parent';

const getDocEl = (win) => (win.document && win.document.documentElement) || document.body;
const getWindowScrollTop = (win) => getDocEl(win).scrollTop;
const getWindowScrollLeft = (win) => getDocEl(win).scrollLeft;
const getWindowScrollHeight = (win) => getDocEl(win).scrollHeight;
const getWindowScrollWidth = (win) => getDocEl(win).scrollWidth;

export function getScrollPosition (el) {
	const scrolls = e =>
		isScroller(e) || (e.tagName === 'BODY' && e.scrollHeight === e.offsetHeight);

	if (!scrolls(el)) {
		el = getScrollParent(el);
	}

	return {
		top: el.scrollTop || el.scrollY || getWindowScrollTop(el),
		left: el.scrollLeft || el.scrollX || getWindowScrollLeft(el),

		height: el.scrollHeight || getWindowScrollHeight(el),
		width: el.scrollWidth || getWindowScrollWidth(el),
	};
}
