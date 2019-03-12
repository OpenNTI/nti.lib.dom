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

	test ('should use element.closest when available', () => {
		const closest = jest.fn();
		parent({closest}, '.some-selector');
		expect(closest).toHaveBeenCalled();
	});

	test ('should walk the tree when element.closest is not available', () => {
		const DEPTH = 3;
		const node = Object.defineProperties({count: 0}, {
			parentNode: {
				get: jest.fn(() => ++node.count < DEPTH ? node : null)
			}
		});

		parent(node, '.some-selector');
		expect(Object.getOwnPropertyDescriptor(node, 'parentNode').get).toHaveBeenCalledTimes(DEPTH);
	});
});
