import { parent } from './parent';

export const parents = (node, selector, acc = []) =>
	!node || node.parentNode === null
		? acc
		: parents(parent(node, selector), selector, [...acc, node]);
