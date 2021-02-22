/* eslint-env jest */
import { replaceNode } from '../replace-node';

const make = (n, p, c) => {
	let e = document.createElement(n);
	e.className = c;
	if (p) {
		p.appendChild(e);
	}
	return e;
};

describe('replaceNode', () => {
	test('replace a node in the dom', () => {
		let replacement = make('span');
		let li = make('li');
		let el1 = make('a', li);
		let el2 = make('b', li);
		let el3 = make('i', li);

		expect(el1.parentNode).toBeTruthy();
		expect(el2.parentNode).toBeTruthy();
		expect(el3.parentNode).toBeTruthy();

		expect(li.childNodes.length).toBe(3);
		expect(li.firstChild).toBe(el1);
		expect(li.firstChild.nextSibling).toBe(el2);
		expect(li.lastChild).toBe(el3);

		expect(() => replaceNode(li)).toThrow();
		expect(replaceNode(el2, replacement)).toBe(el2);

		expect(el2.parentNode).toBeFalsy();

		expect(li.childNodes.length).toBe(3);
		expect(li.firstChild).toBe(el1);
		expect(li.firstChild.nextSibling).toBe(replacement);
		expect(li.lastChild).toBe(el3);

		expect(replaceNode(el1)).toBe(el1);
	});
});
