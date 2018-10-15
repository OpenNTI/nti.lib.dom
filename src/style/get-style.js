export function getStyle (el, ...properties) {
	const {length} = properties;
	const getStyles = x => {
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements (see jQuery source)
		/* istanbul ignore next */
		if ( x.ownerDocument.defaultView.opener ) {
			return x.ownerDocument.defaultView.getComputedStyle( x, null );
		}
		return global.getComputedStyle( x, null );
	};

	const styles = getStyles(el);
	const values = styles
		? properties.map(property => styles[property])
		/* istanbul ignore next */
		: [];

	return length === 1
		? values[0]
		: length === 0
			? styles
			: values;
}
