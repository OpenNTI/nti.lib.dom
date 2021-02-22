/* eslint-env jest */
import { createDOM } from '../create-dom';

test('createDOM', () => {
	expect(() => createDOM()).not.toThrow();

	expect(createDOM({})).toMatchSnapshot();
	expect(
		createDOM({
			tag: 'span',
			cls: 'foobar',
			style: 'display: block',
			for: 'lala',
			cn: [
				{ class: 'baz', style: { color: 'red' } },
				{ cls: 'boo' },
				{ html: 'hi' },
				'sup',
			],
		})
	).toMatchSnapshot();
});
