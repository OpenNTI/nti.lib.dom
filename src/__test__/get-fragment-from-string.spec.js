import getFragmentFromString from '../get-fragment-from-string';

describe('getFragmentFromString', () => {
	it ('return value has querySelector', () => {
		debugger;
		const frag = getFragmentFromString('<a name="id"/> This is a fragment <strong>string</strong>.');

		expect(frag.querySelector).toBeTruthy();

		let a = frag.querySelector('a');

		expect(a.getAttribute('name')).toEqual('id');
	});
});
