export function addKeyboardBlurListener(node, fn, target = global.document) {
	if (!node) {
		throw new Error(`Cannot add keyboard-blur listener to ${node}`);
	}
	if (!target) {
		throw new Error('Cannot add keyboard-blur without a target.');
	}

	let keyDown = false;
	let blurTimeout = null;

	const onKeyDown = () => (keyDown = true);
	const onKeyUp = () => (keyDown = false);

	const onFocusIn = () => {
		clearTimeout(blurTimeout);
	};
	const onFocusOut = () => {
		if (keyDown) {
			clearTimeout(blurTimeout);
			//setImmediate happens to quickly for focusIn to stop the blur
			blurTimeout = setTimeout(() => {
				fn();
			}, 100);
		}
	};

	target.addEventListener('keydown', onKeyDown);
	target.addEventListener('keyup', onKeyUp);

	node.addEventListener('focusin', onFocusIn);
	node.addEventListener('focusout', onFocusOut);

	return () => {
		target.removeEventListener('keydown', onKeyDown);
		target.removeEventListener('keyup', onKeyUp);

		node.removeEventListener('focusin', onFocusIn);
		node.removeEventListener('focusout', onFocusOut);
	};
}
