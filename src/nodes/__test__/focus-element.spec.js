/* eslint-env jest */
import { focusElement } from '../focus-element';

describe('focus-element', () => {
	test("doesn't blow up with null", () => {
		const call = () => {
			focusElement(null);
		};

		expect(call).not.toThrow();
	});

	test("does't with no focus method", () => {
		const call = () => {
			focusElement({});
		};

		expect(call).not.toThrow();
	});

	test('Calls focus method', () => {
		const el = { focus: () => {} };
		const spy = jest.spyOn(el, 'focus');
		const call = () => {
			focusElement(el);
		};

		expect(call).not.toThrow();

		call();
		expect(spy).toHaveBeenCalled();
	});
});
