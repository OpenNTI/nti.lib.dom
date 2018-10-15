/* eslint-env jest */
import { createDOM } from '../create-dom';

test ('createDOM', () => {

	expect(() => createDOM()).not.toThrow();

	expect(createDOM({})).toMatchSnapshot();

	expect(createDOM({
		tag: 'span',
		cls: 'foobar',
		for: 'lala',
		cn: [
			{class: 'baz'},
			{cls: 'boo'},
			{html: 'hi'},
			'sup'
		]
	})).toMatchSnapshot();
});
