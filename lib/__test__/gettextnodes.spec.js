import isTextNode from '../istextnode';
import getTextNodes from '../gettextnodes';

describe('getTextNodes', () => {

	it('should retrieve the text nodes from a dom structure', () => {

		let el = document.createElement('div');
		el.innerHTML = 'A<span>B</span><a><span>C</span></a>D <b>E</b> F<br/>G';

		let expected = ['A', 'B', 'C', 'D ', 'E', ' F', 'G'];

		let textNodes = getTextNodes(el);

		let actual = textNodes.map(n=> {
			expect(isTextNode(n)).toBeTruthy();
			return n.nodeValue;
		});

		expect(actual).toEqual(jasmine.arrayContaining(expected));
		expect(actual.length).toBe(expected.length);
	});
});
