import { applyStyles } from '../style/apply-styles';

const isConfig = RegExp.prototype.test.bind(
	/^(?:xmlns|tag|children|cn|html|style)$/i
);

/**
 * Creates new DOM element(s)
 *
 * @param {Object/String} o DOM spec
 * @param {HTMLElement} [parentNode] Optional DOM node to append the generated elements.
 * @param {string} xmlns
 * @returns {HTMLElement} The new node
 */
export function createDOM(o, parentNode, xmlns = o?.xmlns) {
	let el;
	let doc = parentNode ? parentNode.ownerDocument : document;

	if (!o) {
		return o;
	}

	if (Array.isArray(o)) {
		// Allow Arrays of siblings to be inserted
		el = doc.createDocumentFragment(); // in one shot using a DocumentFragment

		for (let i of o) {
			createDOM(i, el, xmlns);
		}
	} else if (typeof o === 'string') {
		el = doc.createTextNode(o);
	} else {
		if (xmlns) {
			el = doc.createElementNS(xmlns, o.tag);
		} else {
			el = doc.createElement(o.tag || 'div');
		}

		for (let attr in o) {
			if (!isConfig(attr)) {
				el.setAttributeNS(
					null,
					attr === 'cls' ? 'class' : attr,
					o[attr]
				);
			}
		}

		applyStyles(el, o.style);

		let cn = o.children || o.cn;
		if (cn) {
			createDOM(cn, el, xmlns);
		} else if (o.html) {
			el.innerHTML = o.html;
		}
	}

	if (parentNode) {
		parentNode.appendChild(el);
	}

	return el;
}
