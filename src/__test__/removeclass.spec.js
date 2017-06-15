/* eslint-env jest */
import removeClass from '../removeclass';

describe ('removeClass', () => {

	test ('should remove a class from an element', () => {

		let el = document.createElement('div');

		el.className = 'test';

		removeClass(el, 'test');

		expect(el.className).toBe('');
	});


	test ('should not throw an error removing a non-existing class', () => {

		let el = document.createElement('div');

		removeClass(el, 'test');
		expect(el.className).toBe('');

		el.className = 'something';

		removeClass(el, 'test');
		expect(el.className).toBe('something');
	});


	test ('should not corrupt classes', () => {
		let test = 'a';
		let classes = ['a', 'b', 'c', 'd'];

		let el = document.createElement('div');

		el.className = classes.join(' ');

		removeClass(el, test);

		let expected = classes.slice(1);

		let actual = el.className.split(' ');

		expected.forEach(e=> expect(actual).toContain(e));
	});
});
