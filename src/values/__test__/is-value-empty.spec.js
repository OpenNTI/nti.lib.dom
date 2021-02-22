/* eslint-env jest */
import { isValueEmpty } from '../is-value-empty';

describe('isValueEmpty', () => {
	test('should identify empty value', () => {
		expect(isValueEmpty(undefined)).toBeTruthy();
		expect(isValueEmpty(null)).toBeTruthy();
		expect(isValueEmpty('')).toBeTruthy();
		expect(isValueEmpty('&nbsp;')).toBeTruthy();
		expect(isValueEmpty('\u2060')).toBeTruthy();
		expect(isValueEmpty('\u200B')).toBeTruthy();
		expect(isValueEmpty('<br/>')).toBeTruthy();
		expect(isValueEmpty('<br>')).toBeTruthy();
		expect(isValueEmpty('<div><br/><br/></div>')).toBeTruthy();
		expect(isValueEmpty('<div></div>')).toBeTruthy();
		expect(isValueEmpty('<div>&nbsp;</div>')).toBeTruthy();
		expect(isValueEmpty('<div></div>')).toBeTruthy();
		expect(isValueEmpty('<div>\u200B</div>')).toBeTruthy();
		expect(isValueEmpty('<div>\u2060</div>')).toBeTruthy();
	});
});
