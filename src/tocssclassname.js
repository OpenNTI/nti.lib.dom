export default function toCSSClass (txt) {
	if (typeof txt !== 'string') {
		return null;
	}

	return txt
		.replace(/([a-z])([A-Z])/g, '$1-$2') //split camelCase to camel-case
		.toLowerCase()
		.replace(/[^a-z0-9]/ig, '-')
		.replace(/-+/g, '-')
		.replace(/-$/, '')
		.replace(/^-/, '');
}
