import {isPointWithin} from '../layout';

export function addClickOutListener (node, fn, target = global.document) {
	if (!node) { throw new Error(`Cannot add click-out listener to ${node}`); }
	if (!target) { throw new Error('Cannot add click-out listener without a target.'); }

	const isInNode = (el) => el === node || node.contains(el);

	let mouseDownTarget = null;

	const onMouseDown = (e) => mouseDownTarget = e.target;

	const onClick = (e) => {
		const startedInNode = isInNode(mouseDownTarget);
		const endedInNode = isInNode(e.target);
		const pointerInNode = isPointWithin(node, e.clientX, e.clientY);

		if (!startedInNode && !endedInNode && !pointerInNode) {
			fn(e);
		}
	};

	target.addEventListener('mousedown', onMouseDown);
	target.addEventListener('click', onClick, true);

	return () => {
		target.removeEventListener('mousedown', onMouseDown);
		target.removeEventListener('click', onClick, true);
	};
}
