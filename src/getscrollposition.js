import scrollParent from './getscrollparent';
import getStyle from './getstyle';

const getDocEl = (win) => win.document && win.document.documentElement || document.body;
const getWindowScrollTop = (win) => getDocEl(win).scrollTop;
const getWindowScrollLeft = (win) => getDocEl(win).scrollLeft;

export default function getScrollPosition (el) {
	const overflow = /auto|scroll/i;
	const isScroller = e =>
				(e.scrollHeight > e.offsetHeight && overflow.test(getStyle(e, 'overflow', 'overflow-x', 'overflow-y').join(''))) ||
				(e.tagName === 'BODY' && e.scrollHeight === e.offsetHeight);

	if (!isScroller(el)) {
		el = scrollParent(el);
	}

	return {
		top: el.scrollTop || el.scrollY || getWindowScrollTop(el),
		left: el.scrollLeft || el.scrollX || getWindowScrollLeft(el),
	};
}
