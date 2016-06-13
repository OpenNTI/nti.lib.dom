import scrollParent from 'scrollparent';

const WINDOW = typeof window === 'undefined' ? global : window;
const shouldBeWindow = el => !el || el.tagName === 'BODY' && el.clientHeight <= el.scrollHeight;
export default el => (x => shouldBeWindow(x) ? WINDOW : x)(scrollParent(el));
