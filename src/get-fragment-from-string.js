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

	return document.createRange().createContextualFragment(str);
}
