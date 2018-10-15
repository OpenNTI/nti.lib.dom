/*global Node*/
//Node.ELEMENT_NODE -- we can't trust the constant to be defined, but we can trust
// the spec's value: 1 === ELEMENT_NODE
// ALSO, Node is not defined in node.js
const ELEMENT_NODE = 1;//Node.ELEMENT_NODE || 1;


export function isElement (node) {
	return node && node.nodeType === ELEMENT_NODE;
}
