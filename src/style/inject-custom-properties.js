/**
 * Injects css vars into a document
 *
 * @param {Document} document - The document to inject to.
 * @param {Array.<string[]>} properties - array of name/value pairs to inject
 * @returns {void}
 */
export function injectCustomProperties(document, properties) {
	const styleEl = document.createElement('style');
	document.head.appendChild(styleEl);
	const { sheet } = styleEl;

	properties = properties.reduce(
		(set, [name, value]) => `${set}${name}: ${value};`,
		''
	);

	sheet.insertRule(':root {' + properties + '}');
}
