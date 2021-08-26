/**
 * @param {Document} d
 * @returns {HTMLHeadElement}
 */
const getHeadElement = d => d.head || d.getElementsByTagName('head')[0];

/**
 * @typedef {object} SourceDescription
 * @property {string} url
 * @property {Document} document
 */

/**
 *
 * @param {string|SourceDescription} source
 * @param {string=} replace
 * @returns {HTMLLinkElement}
 */
export function addStyleSheet(source, replace) {
	let url = source;
	let doc = document;

	if (typeof source === 'object') {
		doc = source.document;
		url = source.url;
	}

	if (typeof doc === 'undefined') {
		throw new Error('Document not defined');
	}

	const head = getHeadElement(doc);

	let old, id;
	if (replace) {
		old =
			typeof replace === 'string' ? doc.getElementById(replace) : replace;
		if (old) {
			id = old.id;
		}
	}

	const link = doc.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = url;
	if (id) {
		link.id = id;
	}

	if (old) {
		head.insertBefore(link, old);
		head.removeChild(old);
	} else {
		head.appendChild(link);
	}

	return link;
}
