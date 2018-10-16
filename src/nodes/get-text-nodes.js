import { isTextNode } from './is-text-node';

export function getTextNodes (root) {
	let textNodes = [];

	function getNodes (node) {
		let child;

		if (isTextNode(node)) {
			textNodes.push(node);
		}
		/* istanbul ignore else */
		else if (node && node.firstChild) {
			for (child = node.firstChild; child; child = child.nextSibling) {
				getNodes(child);
			}
		}
	}

	getNodes(root.body || root);
	return textNodes;
}
