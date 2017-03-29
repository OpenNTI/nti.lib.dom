import focusElement from '../focus-element';

describe('focus-element', () => {
	it('doesn\'t blow up with null', () => {
		const call = () => {
			focusElement(null);
		};

		expect(call).not.toThrow();
	});

	it('does\'t with no focus method', () => {
		const call = () => {
			focusElement({});
		};

		expect(call).not.toThrow();
	});

	it('Calls focus method', () => {
		const el = {focus: () => {}};
		const spy = jest.spyOn(el, 'focus');
		const call = () => {
			focusElement(el);
		};



		expect(call).not.toThrow();

		call();
		expect(spy).toHaveBeenCalled();
	});
});
