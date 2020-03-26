import {matches} from './matches';

//Taken from: https://gomakethings.com/how-to-get-the-first-and-last-focusable-elements-in-the-dom/
const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function focusElement (el) {
	if (el && el.focus) {
		el.focus();
	}
}

export function getFocusableDescendants (el, filterHidden = true) {
	if (el?.querySelectorAll) {
		return Array
			.from(el.querySelectorAll(focusableSelector))
			.filter(n => n.getAttribute('aria-hidden') !== 'true');
	}

	return [];
}

export function isFocusable (el) {
	return matches(el, focusableSelector);
}

export function focusDescendant (el) {
	const descendants = Array.from(getFocusableDescendants(el));
	const first = descendants ? descendants[0] : null;

	if (first) {
		focusElement(first);
	}
}

export function focusDescendantOrElement (el, filter) {
	const descendants = Array.from(getFocusableDescendants(el), filter);
	const first = descendants ? descendants[0] : null;

	if (first) {
		focusElement(first);
	} else if (isFocusable(el)) {
		focusElement(el);
	}
}
