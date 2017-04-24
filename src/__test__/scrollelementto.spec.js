import scrollElementTo from '../scrollelementto';

describe('scrollelementto', () => {
	it ('should call scrollTo on window', () => {
		spyOn(window, 'scrollTo');
		scrollElementTo(window, 100, 100);
		expect(window.scrollTo).toHaveBeenCalled();
	});

	it ('should set scrollTop and scrollLeft on DOM elements', () => {
		const top = 100;
		const left = 200;
		const parent = document.createElement('div');
		const child = document.createElement('div');

		// size elements to ensure parent is scrollable
		parent.setAttribute('style', 'width: 100px; height: 100px; overflow: auto');
		child.setAttribute('style', 'width: 900px; height: 900px');

		parent.appendChild(child);
		document.body.appendChild(parent);

		scrollElementTo(parent, left, top);
		expect(parent.scrollTop).toEqual(top);
		expect(parent.scrollLeft).toEqual(left);
	});

	it ('should not call window.scrollTo when passed a DOM element', () => {
		spyOn(window, 'scrollTo');
		const div = document.createElement('div');
		scrollElementTo(div, 100, 100);
		expect(window.scrollTo).not.toHaveBeenCalled();
	});

	it ('should not throw when no element is provided', () => {
		expect(() => scrollElementTo()).not.toThrow();
		expect(() => scrollElementTo(null)).not.toThrow();
	});
});