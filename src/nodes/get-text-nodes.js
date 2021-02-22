import { isTextNode } from './is-text-node';

export function getTextNodes(root) {
	let textNodes = [];

	function getNodes(node) {
		let child;

		if (isTextNode(node)) {
			textNodes.push(node);
		} else if (node && node.firstChild) {
		/* istanbul ignore else */
			for (child = node.firstChild; child; child = child.nextSibling) {
				getNodes(child);
			}
		}
	}

	getNodes(root.body || root);
	return textNodes;
}
