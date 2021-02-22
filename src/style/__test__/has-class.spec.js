/* eslint-env jest */
import { hasClass } from '../has-class';

describe('hasClass', () => {
	test('should identify existing classes', () => {
		let el = document.createElement('div');

		el.className = 'test';

		expect(hasClass(el, 'test')).toBeTruthy();
		expect(hasClass(el, 'notthere')).toBeFalsy();
	});

	test('should not corrupt classes', () => {
		let test = 'a';
		let classes = ['a', 'b', 'c', 'd'];

		let el = document.createElement('div');

		el.className = classes.join(' ');

		hasClass(el, test);

		let actual = el.className.split(' ');

		classes.forEach(e => expect(actual).toContain(e));
	});
});
