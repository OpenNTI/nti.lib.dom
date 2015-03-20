import isElement from './iselement';
import isTextNode from './istextnode';

export default function getTextNodes (root) {
   let textNodes = [];

   function getNodes(node) {
	   let child;

	   if (isTextNode(node)) {
		   textNodes.push(node);
	   }
	   else if (isElement(node)) {
		   for (child = node.firstChild; child; child = child.nextSibling) {
			   getNodes(child);
		   }
	   }
   }

   getNodes(root.body || root);
   return textNodes;
}
