/** @jest-environment node */
/* eslint-env jest */
import { applyStyles } from '../apply-styles';

test ('applyStyles', () => {
	const styles = {};

	expect(() => applyStyles()).not.toThrow();
	expect(() => applyStyles({styles}, null)).not.toThrow();

	expect(() => applyStyles({styles}, 'foo-bar:123;;va')).not.toThrow();
	expect(styles).toEqual({fooBar: '123'});

	expect(() => applyStyles({styles}, {baz: 'bar'})).not.toThrow();
	expect(styles).toEqual({baz: 'bar', fooBar: '123'});
});
