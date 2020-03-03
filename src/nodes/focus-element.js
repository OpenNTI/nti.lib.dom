import {matches} from './matches';

//Taken from: https://gomakethings.com/how-to-get-the-first-and-last-focusable-elements-in-the-dom/
const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function focusElement (el) {
	if (el && el.focus) {
		el.focus();
	}
}

export function getFocusableDescendant (el) {
	if (el?.querySelectorAll) {
		return el.querySelectorAll(focusableSelector);
	}

	return [];
}

export function isFocusable (el) {
	return matches(el, focusableSelector);
}

export function focusDescendant (el) {
	const descendants = Array.from(getFocusableDescendant(el));
	const first = descendants ? descendants[0] : null;

	if (first) {
		focusElement(first);
	}
}

export function focusDescendantOrElement (el) {
	const descendants = Array.from(getFocusableDescendant(el));
	const first = descendants ? descendants[0] : null;

	if (first) {
		focusElement(first);
	} else if (isFocusable(el)) {
		focusElement(el);
	}
}
