import { getAllCustomProperties } from './get-all-custom-properties';

/**
 *
 * @param {Element} el - DOM Element to compute custom properties from
 * @returns {Array.<string[]>} - Array of [name:string, value: string] pairs.
 */
export const getAllCustomPropertyValuesAtElement = (el) => {
	const style = getComputedStyle(el);
	return getAllCustomProperties().map(x => [x, style.getPropertyValue(x)]);
};
