/** @jest-environment node */
/* eslint-env jest */
import * as nodes from '../index';

test ('index', () => {
	expect(Object.keys(nodes)).toMatchSnapshot();
});
