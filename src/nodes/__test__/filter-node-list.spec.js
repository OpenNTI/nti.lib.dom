/** @jest-environment node */
/* eslint-env jest */
import { filterNodeList } from '../filter-node-list';

test ('filterNodeList', () => {
	expect(() => filterNodeList([], '..')).toThrow('Not Implemented');
	expect(() => filterNodeList([], jest.fn())).not.toThrow('Not Implemented');
	expect(() => filterNodeList([], new Date())).toThrow();
	expect(() => filterNodeList([], true)).toThrow();
	expect(() => filterNodeList([], 1)).toThrow();
	expect(() => filterNodeList([], 0)).toThrow();
	expect(() => filterNodeList([], {})).toThrow();
});
