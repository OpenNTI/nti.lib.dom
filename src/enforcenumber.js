import inRange from './inrange';

export default function enforceNumber (e) {

	let input = e.target,
		maxLength = parseInt(input.getAttribute('size'), 10) || -1,
		tooLong = (input.value || '').length + 1 > maxLength,

		letter = e.charCode || 13,
		isArrow = inRange(letter, 37, 40, true),//left arrow, and down arrow
		isNumber = inRange(letter, 48, 57, true) || inRange(letter, 95, 105, true),//numbers across the top and num pad
		isAllowedCtrl = inRange(letter, 8, 9, true) || letter === 13, //backspace, tab, or enter
		hasSelection = Math.abs(input.selectionStart - input.selectionEnd) !== 0,
		ctrlPressed = e.ctrlKey; //ext maps the metaKey to ctrlKey

	// if the character entered is
	//	1.) pushing the size of the input value over the limit, there is a
	//		size limit, and the character is a number, and there is no
	//		selection or
	//	2.) not an arrow, number, or allowed control key and
	//	3.) the ctrl or meta key is not pressed then stop the event and do
	//		not put the character in the input
	if (!ctrlPressed &&
		((maxLength >= 0 && tooLong && isNumber && !hasSelection) ||
		!(isArrow || isNumber || isAllowedCtrl))) {
		e.preventDefault();
		e.stopPropagation();
		return false;
	}
}
