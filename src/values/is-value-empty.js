const re = /((&nbsp;)|(\u2060)|(\u200B)|(<br\/?>)|(<\/?div>))*/gi;

export function isValueEmpty(value) {
	value =
		(Array.isArray(value) && value.join('')) ||
		String(value == null ? '' : value);
	return value.replace(re, '') === '';
}
