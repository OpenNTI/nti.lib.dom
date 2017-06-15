/* eslint-env jest */
import addClass from '../addclass';

describe('addClass', () => {

	test ('should add a class to an element', () => {

		let el = document.createElement('div');

		expect(el.className).toBe('');

		addClass(el, 'test');

		expect(el.className).toBe('test');
	});


	test ('should not duplicate classes', () => {

		let el = document.createElement('div');

		expect(el.className).toBe('');

		addClass(el, 'test');
		addClass(el, 'test');

		expect(el.className).toBe('test');
	});


	test ('should not corrupt classes', () => {
		let test = 'new-class';
		let classes = ['a', 'b', 'c', 'd'];

		let el = document.createElement('div');

		el.className = classes.join(' ');

		addClass(el, test);

		let expected = classes.concat(test);

		let actual = el.className.split(' ');

		expected.forEach(e=> expect(actual).toContain(e));
	});
});
