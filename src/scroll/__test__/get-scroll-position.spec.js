/* eslint-env jest */
import { getScrollPosition } from '../get-scroll-position';
import { createDOM } from '../../parsing/create-dom';

test ('getScrollPosition', () => {
	const div = createDOM({
		cn: [{
			id: 'foo'
		}]
	}, document.body);

	const foo = div.firstChild;

	Object.defineProperty(foo, 'scrollHeight', { value: 100 });

	expect(getScrollPosition(document.body)).toEqual({
		'height': 0, 'left': 0, 'top': 0, 'width': 0
	});

	expect(getScrollPosition(div)).toEqual({
		'height': 0, 'left': 0, 'top': 0, 'width': 0
	});

	expect(getScrollPosition(div.firstChild)).toEqual({
		'height': 0, 'left': 0, 'top': 0, 'width': 0
	});
});
