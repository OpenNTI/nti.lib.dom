/* eslint-env jest */
import { getEventTarget } from '../get-event-target';

const make = (n, p, c) => {
	let e = document.createElement(n);
	e.className = c;
	if (p) {
		p.appendChild(e);
	}
	return e;
};

describe('getEventTarget', () => {
	test('should retrieve target node', () => {
		let target = make('a');
		let e = { target };

		let d = getEventTarget(e);

		expect(d).toBe(target);
	});

	test('should retrieve target node that matches selector', () => {
		let div = make('div', make('body'), 'foo');
		let target = make('a', make('span', div));

		let e = { target };

		let d = getEventTarget(e, '.foo');

		expect(d).toBe(div);
	});

	test('should return null for selector that does not match', () => {
		let div = make('div', make('body'), 'foo');
		let target = make('a', make('span', div));

		let e = { target };

		let d = getEventTarget(e, '.baz');
		expect(d).toBe(null);

		d = getEventTarget(e, '.foo2');
		expect(d).toBe(null);
	});
});
