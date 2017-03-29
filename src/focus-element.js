export default function focusElement (el) {
	if (el && el.focus) {
		el.focus();
	}
}
