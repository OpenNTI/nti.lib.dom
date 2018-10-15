/**
 * This is used to define HTML5 elements in older browsers. (and will eventually be the
 * place we add Real Custom Elements)
 *
 * The reason for declaring HTML5 elements is that some browsers (old) will not match CSS selectors
 * until they've been created with document.createElement.
 *
 * @method declareCustomElement
 * @param  {String} name The element name to define. Ex: 'dialog', 'section', 'header', 'footer', 'nav', etc...
 * @return {void}
 */
export function declareCustomElement (name) {
	if (typeof document !== 'undefined') {
		document.createElement(name);
	}
}
