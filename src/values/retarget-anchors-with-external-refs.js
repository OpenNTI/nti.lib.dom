/* CU: A function that adjust links displayed to the user.
 * Note this is different then any content reference cleanup that happens
 * when content loads. Right now the purpose is to detect links that are
 * external (absolute and aren't the same base path) and set their target
 * to _blank.  The base url check allows us to just do fragment navigation
 * in the same tab so if people get clever and insert links to things like
 * profile we do the right thing.
 */
export function retargetAnchorsWithExternalRefs(markup, baseUrl) {
	let string = typeof markup === 'string',
		tempDom;

	if (!markup) {
		return;
	}

	if (string) {
		tempDom = document.createElement('div');
		tempDom.innerHTML = markup;
		markup = tempDom;
	}

	Array.from(markup.querySelectorAll('a[href]')).forEach(link => {
		let href = link.href || '',
			base = baseUrl.split('#')[0],
			changeTarget = href.indexOf(base) !== 0;

		if (changeTarget) {
			link.setAttribute('target', '_blank');
		}
	});

	return string ? markup.innerHTML : markup;
}
