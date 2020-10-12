import {getAllCustomPropertyValuesAtElement} from './get-all-custom-property-values-at-element';
import {injectCustomProperties} from './inject-custom-properties';

export function copyCustomPropertiesIntoIFrame (iframeElement) {
	const properties = getAllCustomPropertyValuesAtElement(iframeElement);
	injectCustomProperties(iframeElement.contentDocument, properties);
}
