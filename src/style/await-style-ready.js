import { wait } from '@nti/lib-commons';

/**
 * @param {HTMLLinkElement} link
 * @returns {Promise<HTMLLinkElement>}
 */
export async function awaitStyleReady(link) {
	await wait.for(() => {
		if (!link.style) {
			throw new Error('not ready');
		}
	});
	return link;
}
