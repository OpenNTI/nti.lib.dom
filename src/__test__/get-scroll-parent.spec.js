/* eslint-env jest */
import getScrollParent from '../getscrollparent';

describe('getScrollParent', () => {

	test ('base case', () => {
		expect(getScrollParent()).toBe(window);
		expect(getScrollParent(document)).toBe(window);
		expect(getScrollParent(document.body)).toBe(window);
		expect(getScrollParent(document.body.parentNode)).toBe(window);
	});

	test ('nested scroll zone', () => {

		document.body.innerHTML = '<div style="overflow: auto"><div><div id="1">test</div></div></div>';

		expect(getScrollParent(document.getElementById('1'))).toBe(document.body.firstChild);

	});
});
