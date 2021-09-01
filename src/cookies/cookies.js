/**
 * Return a value for a given cookie name
 * https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
 *
 * @param  {string} name the cookie to look up
 * @returns {string}      the cookie value
 */
export function getCookie(name) {
	const { cookie } = global?.document || {};

	if (!cookie) {
		return null;
	}

	const match = cookie.match(`(^|[^;]+)\\s*${name}\\s*=\\s*([^;]+)`);

	return match ? match.pop() : null;
}

/**
 * Set a cookie on the document
 *
 * @param {string} name name of the cookie to set
 * @param {string} value value of the cookie to set
 * @param {object} options
 * @param {Date} options.expires when the cookie should expire
 * @param {string} [options.path='/'] paths to make the cookie available to
 * @returns {void}
 */
export function setCookie(name, value, options = {}) {
	if (!global?.document) {
		return;
	}

	const { expires, path = '/' } = options;

	let cookie = `${name}=${encodeURIComponent(value)}`;

	if (expires) {
		cookie = `${cookie};expires=${expires.toGMTString()}`;
	}

	cookie = `${cookie};path=${path}`;

	global.document.cookie = cookie;
}

/**
 * Poll for a cookie to be set on the document
 *
 * @param {string} name cookie to look for
 * @param {object} options
 * @param {number} [options.interval=1000] how frequently to check for the cookie
 * @param {number} [options.timeout=30000] how long to wait before rejecting
 * @returns {Promise} fulfills with the cookie value or rejects if the poll timed out
 */
export function waitForCookie(name, options) {
	const { interval = 1000, timeout = 30000 } = options;

	let intervalId = null;
	const stop = clearInterval(intervalId);

	const poll = new Promise((fulfill, reject) => {
		const maybeFinish = () => {
			const current = getCookie(name);

			if (current) {
				fulfill(current);
				stop();
				return true;
			}

			return false;
		};

		//Check if the cookie is there before we start polling
		if (maybeFinish()) {
			return;
		}

		const started = new Date();

		intervalId = setInterval(() => {
			if (maybeFinish()) {
				return;
			}

			if (new Date() - started >= timeout) {
				reject(new Error('Cookie timed out'));
				stop();
			}
		}, interval);
	});

	Object.defineProperty(poll, 'stop', {
		value: stop,
	});

	return poll;
}
