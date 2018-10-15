/* eslint-env jest */
import { getStyle } from '../get-style';
import { createDOM } from '../../parsing/create-dom';

test ('getStyle', () => {
	expect(() => getStyle(document.body)).not.toThrow();

	const node = createDOM({style: 'display:inline;margin:10px'});

	expect(getStyle(node, 'display')).toEqual('inline');
	expect(getStyle(node, 'display', 'margin')).toEqual(['inline','10px']);
});
