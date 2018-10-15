/*global Node*/
//Node.TEXT_NODE -- we can't trust the constant to be defined, but we can trust
// the spec's value: 3 === TEXT_NODE
// ALSO, Node is not defined in node.js
const TEXT_NODE = 3;//Node.TEXT_NODE || 3;


export function isTextNode (node) {
	return node && node.nodeType === TEXT_NODE;
}
