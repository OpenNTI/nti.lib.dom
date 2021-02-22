import { isElement } from './is-element';

export function matches(el, selector) {
	let fn = matches.nativeFn;
	if (!isElement(el)) {
		//guard against null/undefined/documents/documentFragments/etc
		return false;
	}

	if (fn === undefined) {
		//Figure out what the native function is called... (if any)
		// If none, it should set it to 'null' and prevent the above
		// strict equality from passing in the future.
		fn = matches.nativeFn = [
			'matches',
			'webkitMatchesSelector',
			'mozMatchesSelector',
			'msMatchesSelector',
		].reduce((f, name) => f || (el[name] && name), null);
	}

	if (fn) {
		return el[fn] && el[fn](selector);
	}

	throw new Error('Unsupported API: matches()');
}
