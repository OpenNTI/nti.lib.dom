/* eslint-env jest */
import { getStyle } from '../get-style';

test ('getStyle', () => {
	const { body } = document;
	expect(() => getStyle(body)).not.toThrow();

	body.innerHTML = '<div style="display:inline;margin:10px"></div>';
	const node = body.firstChild;

	expect(getStyle(node, 'display')).toEqual('inline');
	expect(getStyle(node, 'display', 'margin')).toEqual(['inline','10px']);
});
