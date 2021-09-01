/* eslint-env jest */
import { getCookie, setCookie } from '../cookies';

function mockCookies(cookies = 'test') {
	const original = document.cookie;

	const get = jest.fn().mockImplementation(() => cookies);
	const set = jest.fn();

	Object.defineProperty(document, 'cookie', {
		configurable: true,
		get,
		set,
	});

	return { get, set, unmock: () => (document.cookie = original) };
}

describe('Cookies', () => {
	describe('setCookie', () => {
		test('set with default options', () => {
			const cookies = mockCookies();

			setCookie('foo', 'test');

			expect(cookies.set).toHaveBeenCalledTimes(1);
			expect(cookies.set).toHaveBeenCalledWith('foo=test;path=/');

			cookies.unmock();
		});

		test('set with custom path', () => {
			const cookies = mockCookies();

			setCookie('foo', 'test', { path: '/app' });

			expect(cookies.set).toHaveBeenCalledTimes(1);
			expect(cookies.set).toHaveBeenCalledWith('foo=test;path=/app');

			cookies.unmock();
		});

		test('set with expiration date', () => {
			const cookies = mockCookies();
			const date = new Date('1/1/2020');

			setCookie('foo', 'test', { expires: date });

			expect(cookies.set).toHaveBeenCalledTimes(1);
			expect(cookies.set).toHaveBeenCalledWith(
				`foo=test;expires=${date.toGMTString()};path=/`
			);

			cookies.unmock();
		});
	});

	describe('getCookie', () => {
		test('gets cookie by name', () => {
			const cookies = mockCookies('foo=test');

			expect(getCookie('foo')).toBe('test');

			cookies.unmock();
		});
	});

	test.todo('waitForCookie');
});
