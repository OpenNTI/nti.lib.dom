/**
 * Replace a node in the DOM Tree
 *
 * @param {Element} oldNode The node that will be replaced.
 * @param {Element} [newNode] The node to replace the with.
 * @returns {Element} The node that was replaced.
 */
export function replaceNode(oldNode, newNode) {
	let parentNode = oldNode && oldNode.parentNode;
	if (!parentNode) {
		throw new Error('Invalid Arguments');
	}

	if (newNode) {
		parentNode.insertBefore(newNode, oldNode);
	}

	parentNode.removeChild(oldNode);
	return oldNode;
}
