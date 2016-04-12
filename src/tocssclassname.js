export default function toCSSClass (txt) {
	return txt.toLowerCase()
			.replace(/[^a-z0-9]/ig, '-')
			.replace(/-+/g, '-')
			.replace(/-$/, '')
			.replace(/^-/, '');
}
