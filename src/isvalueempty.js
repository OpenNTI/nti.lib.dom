const re = /((&nbsp;)|(\u2060)|(\u200B)|(<br\/?>)|(<\/?div>))*/ig;

export default function isDomAsStringEmpty (value) {
	value = (Array.isArray(value) && value.join('')) || String(value == null ? '' : value);
	return value.replace(re, '') === '';
}
