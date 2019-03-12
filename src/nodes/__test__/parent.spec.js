/* eslint-env jest */
import { parent } from '../parent';

const make = (n, p, c) => {
	let e = document.createElement(n);
	e.className = c;
	if(p) { p.appendChild(e); }
	return e;
};

describe ('parent', () => {

	test ('No args', () => {
		expect(() => parent()).not.toThrow();
	});

	test ('should return the immediate parent node if no selector given', () => {

		let m = make('a', make('li'));
		let t = document.createTextNode('sup');
		m.appendChild(t);

		expect(parent(t)).toBe(m);
		expect(parent(m)).toBe(m.parentNode);
	});

	test ('should return the first parent that matches the selector', () => {

		let target = make('div', make('body', null, 'foo'), 'foo');
		let m = make('a', make('li', make('ul', target)));
		let t = document.createTextNode('sup');
		m.appendChild(t);

		expect(parent(m, '.foo')).toBe(target);
		expect(parent(t, '.foo')).toBe(target);
	});
});
