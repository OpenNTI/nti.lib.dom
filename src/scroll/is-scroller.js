import { getStyle } from '../style/get-style';

const overflow = node =>
	getStyle(node, 'overflow', 'overflow-y', 'overflow-x').join();
const hasScrollOverflow = RegExp.prototype.test.bind(/(auto|scroll)/);

export const canScroll = node => hasScrollOverflow(overflow(node));

export const isScroller = node =>
	node.scrollHeight > node.offsetHeight && canScroll(node);
