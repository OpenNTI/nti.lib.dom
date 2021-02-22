/* eslint-env jest */
import { isTextNode } from '../is-text-node';

describe('isTextNode', () => {
	test('should identify a text node', () => {
		let el = document.createElement('div');
		let text = document.createTextNode('text');
		let object = {};
		let string = 'str';
		let number = 1;
		let array = [];

		expect(isTextNode(el)).toBeFalsy();
		expect(isTextNode(text)).toBeTruthy();
		expect(isTextNode(object)).toBeFalsy();
		expect(isTextNode(string)).toBeFalsy();
		expect(isTextNode(number)).toBeFalsy();
		expect(isTextNode(array)).toBeFalsy();
		expect(isTextNode()).toBeFalsy();
		expect(isTextNode(null)).toBeFalsy();
		expect(isTextNode(undefined)).toBeFalsy();
	});
});
