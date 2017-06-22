/**
 * @param {string|Node} html Un-tamed wild markup.
 * @returns {string} html
 */
export default function sanitizeExternalContentForInput (html) {
	//html = html.trim().replace(/[\n\r]+/g, ' ');

	let offScreenBuffer = document.createElement('div'),
		toRemove, i;

	if (typeof html === 'string') {
		offScreenBuffer.innerHTML = html.replace(/[\n\r]+/ig, ' ');
	} else {
		offScreenBuffer.appendChild(html.cloneNode(true));
	}

	toRemove = pickUnsanitaryElements(offScreenBuffer, true);

	//Data gathered, do the remove (in reverse)
	for (i = toRemove.length - 1; i >= 0; i--) {
		removeNodeRecursively(toRemove[i]);
	}

	//get the new html content...
	html = offScreenBuffer.innerHTML;
	offScreenBuffer.innerHTML = ''; //free up
	return html;//return;
}


/**
 * Select the nodes we might want to remove.
 *
 * WARNING: this will MODIFY children of `root` if `cleanAttributes` is true.
 *
 * @param {Node} root - Root Node to select unwanted elements
 * @param {boolean} cleanAttributes - if true, will remove all attributes that
 *                                    are not white listed. (See KEEP_ATTRS)
 * @return {Node[]} Array of Nodes
 * @private
 */
function pickUnsanitaryElements (root, cleanAttributes) {
	let namespaced = /:/,
		picked = [], tw, name, value, el, i,
		notJs = /^(?!javascript:).*/i,
		present = /.*/,
		KEEP_ATTR_IF = {
			style: present,
			href: notJs,
			src: notJs
		},
		BAD_NODES = {
			LINK: 1, STYLE: 1, META: 1, TITLE: 1, HEAD: 1,
			SCRIPT: 1, OBJECT: 1, EMBED: 1, APPLET: 1
		};

	tw = document.createTreeWalker(root, NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_ELEMENT, null, false);// eslint-disable-line no-bitwise
	do {
		el = tw.nextNode();
		if (!el) { continue; }

		//Remove comments
		if ((el.nodeType === Node.COMMENT_NODE) ||
			//remove nodes we deem bad
			(BAD_NODES[el.tagName]) ||
			//remove empty nodes (maybe dangerous, images?, is there a way to know if an element is meant to be unary?)
			//allow img and br tags
			(el.childNodes.length === 0 && !/^(IMG|BR)$/i.test(el.tagName)) ||
			//remove elements that are effectively empty (whitespace only text node as their only child)
			(el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE && el.childNodes[0].nodeValue.trim() === '') ||
			//remove Office (xml namespaced) elements (that are empty)... need an would be nice to just
			// find all patterns <(/?)FOO:BAR( ...?)> and delete them and leave the content they surround.
			(namespaced.test(el.tagName) && el.childNodes.length === 0)) {

			picked.push(el);

		} else if (cleanAttributes) {
			//Clean attributes of elements we will not remove
			i = el.attributes.length - 1;
			for (i; i >= 0; i--) {
				name = el.attributes[i].name;
				value = el.getAttribute(name);
				if (!KEEP_ATTR_IF[name] || !KEEP_ATTR_IF[name].test(value)) {
					el.removeAttribute(name);
				}
			}
		}
	} while (el);

	return picked;
}


/**
 * recursively remove an elment (if removing a node produces an empty parent
 * node, remove it too...until we get to the root)
 *
 * @param {Node} el element to remove
 * @return {void}
 * @private
 */
function removeNodeRecursively (el) {
	let pn = el && el.parentNode;
	if (!pn) { return; }
	pn.removeChild(el);
	if (pn.childNodes.length === 0) {
		removeNodeRecursively(pn);
	}
}
