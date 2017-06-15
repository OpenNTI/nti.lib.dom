/* eslint-env jest */
import isElement from '../iselement';

describe ('isElement', () => {

	test ('should identify an element', () => {

		let el = document.createElement('div');
		let text = document.createTextNode('text');
		let object = {};
		let string = 'str';
		let number = 1;
		let array = [];

		expect(isElement(el)).toBeTruthy();
		expect(isElement(text)).toBeFalsy();
		expect(isElement(object)).toBeFalsy();
		expect(isElement(string)).toBeFalsy();
		expect(isElement(number)).toBeFalsy();
		expect(isElement(array)).toBeFalsy();
		expect(isElement()).toBeFalsy();
		expect(isElement(null)).toBeFalsy();
		expect(isElement(undefined)).toBeFalsy();
	});
});
