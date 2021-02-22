// https://css-tricks.com/how-to-get-all-custom-properties-on-a-page-in-javascript/

/*
 Check if the stylesheet is internal or hosted on the current domain.
 If it isn't, attempting to access sheet.cssRules will throw a cross origin error.
 See https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet#Notes

 NOTE: One problem this could raise is hosting stylesheets on a CDN with a
 different domain. Those would be cross origin, so you can't access them.
*/
const isSameDomain = styleSheet =>
	!styleSheet.href || // Internal style blocks won't have an href value
	styleSheet.href.indexOf(window.location.origin) === 0;

/*
 Determine if the given rule is a CSSStyleRule
 See: https://developer.mozilla.org/en-US/docs/Web/API/CSSRule#Type_constants
*/
const isStyleRule = rule => rule.type === 1;

export const getAllCustomProperties = () =>
	Array.from(
		new Set(
			[...document.styleSheets].filter(isSameDomain).reduce(
				(out, sheet) => [
					...out,
					// cssRules is array-like, so we convert it to an array
					...[...sheet.cssRules]
						.filter(isStyleRule)
						.reduce(
							(props, rule) => [
								...props,
								...[...rule.style]
									.map(name => name.trim())
									.filter(name => name.indexOf('--') === 0),
							],
							[]
						),
				],
				[]
			)
		)
	);
