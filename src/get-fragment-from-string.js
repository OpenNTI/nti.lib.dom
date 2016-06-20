const getElementWithContent = (tag, x) => (tag = document.createElement(tag), tag.innerHTML = x, tag);

/**
 * Given a string return a fragment.
 *
 * For now if document does not exist throw an error
 * If needed we can add a fallback for older browsers and server rendering
 *
 * @throws {Error} If document is not defined
 * @param  {String} str the string to parse
 * @return {Fragment}    the parsed fragment
 */
export default function getFragmentFromString (str) {
	if (typeof document === 'undefined') {
		throw new Error('Document is not defined');
	}

	const range = document.createRange && document.createRange();
	if (range && range.createContextualFragment) {
		//return early for the fast and convenient path...
		try {
			return range.createContextualFragment(str);
		} catch (e) {
			if(!/NotSupportedError/i.test(e.message)) {
				throw e;
			}
		}
	}

	const frag = document.createDocumentFragment();
	const tmp = getElementWithContent('div', str);

	//tmp.firstElementChild isn't supported before IE9...and that skips text nodes...we probably want those...
	for (let child = tmp.firstChild; child; child = tmp.firstChild) {
		// appendChild removes child from its current tree into the new tree...
		// so the next read from tmp.firstChild will be different.
		frag.appendChild(child);
	}

	return frag;
}
