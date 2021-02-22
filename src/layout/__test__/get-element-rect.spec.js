/* eslint-env jest */
import { getElementRect } from '../get-element-rect';

test('getElementRect', () => {
	expect(() => getElementRect()).not.toThrow();

	// calls getBoundingClientRect... jsdom inits to zeros
	expect(getElementRect(document.body)).toEqual({
		bottom: 0,
		height: 0,
		left: 0,
		right: 0,
		top: 0,
		width: 0,
	});

	//fake a non-element, jsdom inits screen size to 1024x768
	expect(getElementRect({})).toEqual({
		bottom: 768,
		height: 768,
		left: 0,
		right: 1024,
		top: 0,
		width: 1024,
	});
});
