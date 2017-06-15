/* eslint-env jest */
import removeNode from '../removenode';

const make = (n, p, c) => {
	let e = document.createElement(n);
	e.className = c;
	if(p) { p.appendChild(e); }
	return e;
};

describe ('removeNode', () => {

	test ('remove a node from the dom', () => {

		let el = make('a', make('li', make('ul', make('div', make('body')))));
		let li = el.parentNode;

		expect(el.parentNode).toBeTruthy();
		expect(li.childNodes.length).toBe(1);

		removeNode(el);

		expect(el.parentNode).toBeFalsy();
		expect(li.childNodes.length).toBe(0);
	});
});
