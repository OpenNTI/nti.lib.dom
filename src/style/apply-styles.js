function hyphenatedToCamel (s) {
	let re = hyphenatedToCamel.re = (hyphenatedToCamel.re || /-([a-z])/g);
	return s.replace(re, g=>g[1].toUpperCase());
}


function parse (styles) {
	let re = parse.re = (parse.re || /([a-z0-9-]+)\s*:\s*([^;\s]+(?:\s*[^;\s]+)*)?;?/gi);
	let out = {}, matches;

	re.lastIndex = 0;
	while ((matches = re.exec(styles))) {
		let [, name, value] = matches;

		name = hyphenatedToCamel(name)
			.replace(/^Ms/, 'ms');//-ms-foo is msFoo not MsFoo

		out[name] = value;
	}

	return out;
}

export function applyStyles (el, styles) {
	if (typeof styles === 'string') {
		styles = parse(styles);
	}

	if (styles && typeof styles === 'object') {
		Object.assign(el.style, styles);
	}
}
