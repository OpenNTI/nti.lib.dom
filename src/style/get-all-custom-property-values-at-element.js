import { getAllCustomProperties } from './get-all-custom-properties';

/**
 *
 * @param {Element} el - DOM Element to compute custom properties from
 */
export const getAllCustomPropertyValuesAtElement = (el) => {
	const style = getComputedStyle(el);
	return getAllCustomProperties().map(x => [x, style.getPropertyValue(x)]);
};
