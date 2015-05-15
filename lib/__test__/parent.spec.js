import parent from '../parent';

const make = (n, p, c) => {
	let e = document.createElement(n);
	e.className = c;
	if(p) { p.appendChild(e); }
	return e;
};

describe('parent', () => {

	it('should return the imediate parent node if no selector given', () => {

		let m = make('a', make('li'));

		expect(parent(m)).toBe(m.parentNode);
	});


	it('should return the first parent that matches the selector', () => {

		let target = make('div', make('body', null, 'foo'), 'foo');
		let m = make('a', make('li', make('ul', target)));

		let el = parent(m, '.foo');

		expect(el).toBe(target);
	});
});
