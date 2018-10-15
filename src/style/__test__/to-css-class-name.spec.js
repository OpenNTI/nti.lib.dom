/* eslint-env jest */
import { toCSSClassName } from '../to-css-class-name';

describe ('toCSSClassName', () => {

	test ('only a-z, 0-9 characters', () => {

		expect(toCSSClassName('i2 Online')).toBe('i2-online');
		expect(toCSSClassName('tag:nextthought.com,2011-10:Root')).toBe('tag-nextthought-com-2011-10-root');
		expect(toCSSClassName(':.,-Foo  bar Baz ^$&%&^%&^%')).toBe('foo-bar-baz');
	});

	test ('should return null if not passed a string', () => {
		expect(toCSSClassName()).toBeNull();
		expect(toCSSClassName(null)).toBeNull();
		expect(toCSSClassName(1234)).toBeNull();
		expect(toCSSClassName({test: '1234'})).toBeNull();
	});

});
