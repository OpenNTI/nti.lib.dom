export default function declareCustomElement (name) {
	if (typeof document !== 'undefined') {
		document.createElement(name);
	}
}
