import { applyStyles } from '../style/apply-styles';

const isConfig = RegExp.prototype.test.bind(/^(?:tag|children|cn|html)$/i);

/**
 * Creates new DOM element(s)
 *
 * @param {Object/String} o DOM spec
 * @param {HTMLElement} [parentNode] Optional DOM node to append the generated elements.
 * @returns {HTMLElement} The new node
 */
export function createDOM (o, parentNode) {
	let el;
	let doc = parentNode ? parentNode.ownerDocument : document;

	if (Array.isArray(o)) { // Allow Arrays of siblings to be inserted
		el = doc.createDocumentFragment(); // in one shot using a DocumentFragment

		for (let i = 0, l = o.length; i < l; i++) {
			createDOM(o[i], el);
		}

	}

	else if (typeof o === 'string') {
		el = doc.createTextNode(o);
	}

	else {
		el = doc.createElement(o.tag || 'div');

		for (let attr in o) {
			if (!isConfig(attr)) {
				let val = o[attr];
				if (attr === 'cls' || attr === 'class') {
					el.className = val;
				}
				else {
					if (el.setAttribute) {
						el.setAttribute(attr, val);
					}
					else {
						el[attr] = val;
					}
				}
			}
		}

		applyStyles(el, o.style);

		let cn = o.children || o.cn;
		if (cn) {
			createDOM(cn, el);
		}
		else if (o.html) {
			el.innerHTML = o.html;
		}
	}

	if (parentNode) {
		parentNode.appendChild(el);
	}

	return el;
}
