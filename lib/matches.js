import isElement from './iselement';

export default function matches(el, selector) {
	let fn = matches.nativeFn;
	if (!isElement(el)) {//guard against null/undefined/documents/documentFragments/etc
		return false;
	}

	if(fn === undefined) {
		//Figure out what the native function is called... (if any)
		// If none, it should set it to 'null' and prevent the above
		// strict equality from passing in the future.
		fn = matches.nativeFn = [
			'matches',
			'webkitMatchesSelector',
			'mozMatchesSelector',
			'msMatchesSelector'
		].reduce((fn, name) => fn || (el[name] && name) || null, null);
	}

	if (fn) {
		return el[fn] && el[fn](selector);
	}

	//In the fallback case, and there happens to be no `parentNode`... we're screwed. :|
	//Maybe create a DocumentFragment and append el to that and use that as the parent?
	return !!Array.from(el.parentNode.querySelectorAll(selector))
		.reduce((match, potential) => {
			return match || (el === potential && potential);
		});
}
