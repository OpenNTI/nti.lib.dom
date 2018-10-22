/* eslint-env jest */
import { getEffectiveZIndex } from '../get-effective-z-index';

test ('getEffectiveZIndex', () => {
	const { body } = document;
	expect(() => getEffectiveZIndex()).not.toThrow();
	expect(getEffectiveZIndex()).toEqual(0);

	body.innerHTML = '<div style="z-index:10"><div style="z-index:1"></div></div>';

	const el = body.firstChild.firstChild;

	expect(getEffectiveZIndex(el)).toEqual(10);
});
