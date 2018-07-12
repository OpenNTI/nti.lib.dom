import scrollParent from 'scrollparent';

const WINDOW = typeof window === 'undefined' ? global : window;
const TAG = /body|html/i;
const shouldBeWindow = el => !el || TAG.test(el.tagName) && el.clientHeight <= el.scrollHeight;

export default el => (x => shouldBeWindow(x) ? WINDOW : x)(scrollParent(el));
