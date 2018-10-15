const WINDOW = typeof window === 'undefined' ? global : window;
const TAG = /body|html/i;

const style = (node, prop) => getComputedStyle(node, null).getPropertyValue(prop);

const overflow = (node) => ''
	+ style(node, 'overflow')
	+ style(node, 'overflow-y')
	+ style(node, 'overflow-x');

const hasScroll = RegExp.prototype.test.bind(/(auto|scroll)/);
const scrolls = (node) => hasScroll(overflow(node));

const parents = (node, acc = []) => (!node || node.parentNode === null)
	? acc
	: parents(node.parentNode, [...acc, node]);

function scrollParent (node) {
	if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
		return ;
	}

	return parents(node.parentNode).find(p => scrolls(p))
		|| document.scrollingElement
		|| document.documentElement;
}

const shouldBeWindow = el => !el || TAG.test(el.tagName) && el.clientHeight <= el.scrollHeight;

export default el => (x => shouldBeWindow(x) ? WINDOW : x)(scrollParent(el));
