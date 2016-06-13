import scrollParent from './getscrollparent';
import getStyle from './getstyle';

export default function getScrollPosition (el) {
	const overflow = /auto|scroll/i;
	const isScroller = e =>
				(e.scrollHeight > e.offsetHeight && overflow.test(getStyle(e, 'overflow', 'overflow-x', 'overflow-y').join(''))) ||
				(e.tagName === 'BODY' && e.scrollHeight === e.offsetHeight);

	if (!isScroller(el)) {
		el = scrollParent(el);
	}

	return {
		top: el.scrollTop,
		left: el.scrollLeft
	};
}
