/** @jest-environment node */
/* eslint-env jest */
import { applyStyles } from '../apply-styles';

test('applyStyles', () => {
	const style = {};

	expect(() => applyStyles()).not.toThrow();
	expect(() => applyStyles({ style }, null)).not.toThrow();

	expect(() => applyStyles({ style }, 'foo-bar:123;;va')).not.toThrow();
	expect(style).toEqual({ fooBar: '123' });

	expect(() => applyStyles({ style }, { baz: 'bar' })).not.toThrow();
	expect(style).toEqual({ baz: 'bar', fooBar: '123' });
});
