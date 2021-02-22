import { parent } from '../nodes/parent';

const isEmpty = v => v == null || v === '';

/**
 * Much like the Sencha ExtJS EventObject.getTarget() method. This will
 * resolve an event target based on the selector.  If the selector does
 * not match it will not return anything. If no selector is given, it will
 * simply return the target.(normalized)
 *
 * @param {Event} event    The browser/synthetic event. (Must have a
 *                         `target` property to used duck-typed)
 * @param {string} selector A CSS selector.
 * @returns {Element} the target element or undefined if not found.
 */
export function getEventTarget(event, selector) {
	let t = event.target || event.srcElement;
	return isEmpty(selector) ? t : parent(t, selector);
}
