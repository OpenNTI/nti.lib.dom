/* eslint-env jest */
import { getScrollPosition } from '../get-scroll-position';

test('getScrollPosition', () => {
	const { body } = document;
	body.innerHTML = '<div><div id="foo"></div></div>';
	const div = body.firstChild;
	const foo = div.firstChild;

	Object.defineProperty(foo, 'scrollHeight', { value: 100 });

	expect(getScrollPosition(document.body)).toEqual({
		height: 0,
		left: 0,
		top: 0,
		width: 0,
	});

	expect(getScrollPosition(div)).toEqual({
		height: 0,
		left: 0,
		top: 0,
		width: 0,
	});

	expect(getScrollPosition(div.firstChild)).toEqual({
		height: 0,
		left: 0,
		top: 0,
		width: 0,
	});
});
