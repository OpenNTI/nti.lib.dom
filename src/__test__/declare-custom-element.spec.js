/** @jest-environment node */
/* eslint-env jest */
import declareCustomElement from '../declarecustomelement';

test ('declareCustomElement', () => {
	expect(() => declareCustomElement('foobar1')).not.toThrow();

	const fn = jest.fn();
	global.document = {createElement: fn};

	expect(() => declareCustomElement('foobar2')).not.toThrow();
	expect(fn).toHaveBeenCalledWith('foobar2');
});
