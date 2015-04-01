import matches from '../matches';

const make = (n, c) => {
	let e = document.createElement(n);
	e.className = c;
	return e;
};

describe('matches', () => {

	it('should normalize the vender-prefixes', () => {

		let div = make('div');
		let divWithClassFoo = make('div', 'foo');
		let divWithClassBar = make('div', 'bar');

		expect(matches(div, 'div')).toBeTruthy();
		expect(matches(divWithClassFoo, 'div')).toBeTruthy();
		expect(matches(divWithClassBar, 'div')).toBeTruthy();

		expect(matches(div, '.baz')).toBeFalsy();
		expect(matches(divWithClassFoo, '.foo')).toBeTruthy();
		expect(matches(divWithClassFoo, '.bar')).toBeFalsy();
		expect(matches(divWithClassBar, '.bar')).toBeTruthy();
		expect(matches(divWithClassBar, '.foo')).toBeFalsy();
	});
});
