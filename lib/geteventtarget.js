import parent from './parent';

/**
 * Much like the Sencha ExtJS EventObject.getTarget() method. This will
 * resolve an event target based on the selector.  If the selector does
 * not match it will not return anything. If no selector is given, it will
 * simply return the target.(normalized)
 *
 * @param {Event} event    The browser/synthetic event. (Must have a
 *                         `target` property to used duck-typed)
 * @param {String} selector A CSS selector.
 */
export default function getEventTarget (event, selector) {
	let t = event.target || event.srcElement;
	return parent(t, selector);
}
