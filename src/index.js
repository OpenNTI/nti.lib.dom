export addClass from './addclass';
export addFeatureCheckClasses from './add-feature-check-classes';
export applyStyles from './applystyles';
export createDOM from './createdom';
export getEventTarget from './geteventtarget';
export getTextNodes from './gettextnodes';
export hasClass from './hasclass';
export isElement from './iselement';
export isTextNode from './istextnode';
export isValueEmpty from './isvalueempty';
export matches from './matches';
export parent from './parent';
export removeClass from './removeclass';
export removeNode from './removenode';
export replaceNode from './replacenode';
export toCSSClassName from './tocssclassname';

export getElementRect from './getelementrect';
export isZeroRect from './iszerorect';
export safeBoundingBoxForRange from './safeboundingboxforrange';

export addEventListener from './addeventlistener';
export removeEventListener from './removeeventlistener';

export declareCustomElement from './declarecustomelement';
export enforceNumber from './enforcenumber';
export filterNodeList from './filternodelist';
export getScrollPosition from './getscrollposition';
export getStyle from './getstyle';
export isMultiTouch from './ismultitouch';
export isPointWithin from './ispointwithin';
export retargetAnchorsWithExternalRefs from './retargetanchorswithexternalrefs';
export sanitizeExternalContentForInput from './sanitizeexternalcontentforinput';
export scrollElementBy from './scrollelementby';

export getFragmentFromString from './get-fragment-from-string';
export getEffectiveZIndex from './get-effective-z-index';

export {
	getDocument,
	getHeight as getViewportHeight,
	getWidth as getViewportWidth,
	getScreenHeight,
	getScreenWidth
} from './viewport';

export getScrollParent from './getscrollparent';

export const URL = global.URL && global.URL.createObjectURL ?
				global.URL :
				global.webkitURL && global.webkitURL.createObjectURL ?
					global.webkitURL :
					null;
