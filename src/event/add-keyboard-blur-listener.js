export function addKeyboardBlurListener (node, fn, target = global.document) {
	if (!node) { throw new Error(`Cannot add keyboard-blur listener to ${node}`); }
	if (!target) { throw new Error('Cannot add keyboard-blur without a target.'); }

	let mouseDown = false;
	let blurTimeout = null;

	const onMouseDown = () => mouseDown = true;
	const onMouseUp = () => mouseDown = false;

	const onFocusIn = () => {
		clearTimeout(blurTimeout);
	};
	const onFocusOut = () => {
		if (!mouseDown) {
			clearTimeout(blurTimeout);
			//setImmediate happens to quickly for focusIn to stop the blur
			blurTimeout = setTimeout(() => {
				fn();
			}, 100);
		}
	};

	target.addEventListener('mousedown', onMouseDown);
	target.addEventListener('mouseup', onMouseUp);

	node.addEventListener('focusin', onFocusIn);
	node.addEventListener('focusout', onFocusOut);

	return () => {
		target.removeEventListener('mousedown', onMouseDown);
		target.removeEventListener('mouseup', onMouseUp);

		node.removeEventListener('focusin', onFocusIn);
		node.removeEventListener('focusout', onFocusOut);
	};
}