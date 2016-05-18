import addClass from './addclass';
import applyStyles from './applystyles';
import createDOM from './createdom';
import getEventTarget from './geteventtarget';
import getTextNodes from './gettextnodes';
import hasClass from './hasclass';
import isElement from './iselement';
import isTextNode from './istextnode';
import isValueEmpty from './isvalueempty';
import matches from './matches';
import parent from './parent';
import removeClass from './removeclass';
import removeNode from './removenode';
import replaceNode from './replacenode';
import toCSSClassName from './tocssclassname';

import getElementRect from './getelementrect';
import isZeroRect from './iszerorect';
import safeBoundingBoxForRange from './safeboundingboxforrange';

import addEventListener from './addeventlistener';
import removeEventListener from './removeeventlistener';

import declareCustomElement from './declarecustomelement';
import enforceNumber from './enforcenumber';
import filterNodeList from './filternodelist';
import getScrollPosition from './getscrollposition';
import getStyle from './getstyle';
import isMultiTouch from './ismultitouch';
import isPointWithin from './ispointwithin';
import retargetAnchorsWithExternalRefs from './retargetanchorswithexternalrefs';
import sanitizeExternalContentForInput from './sanitizeexternalcontentforinput';
import scrollElementBy from './scrollelementby';

import {
	getDocument,
	getHeight as getViewportHeight,
	getWidth as getViewportWidth,
	getScreenHeight,
	getScreenWidth
} from './viewport';

import getScrollParent from 'scrollparent';

export {
	addEventListener,
	removeEventListener,

	getDocument,
	getViewportHeight,
	getViewportWidth,
	getScreenHeight,
	getScreenWidth,

	addClass,
	applyStyles,
	createDOM,
	getEventTarget,
	getTextNodes,
	hasClass,
	isElement,
	isTextNode,
	isValueEmpty,
	matches,
	parent,
	removeClass,
	removeNode,
	replaceNode,
	toCSSClassName,

	declareCustomElement,
	enforceNumber,
	filterNodeList,
	getScrollPosition,
	getStyle,
	isMultiTouch,
	isPointWithin,
	retargetAnchorsWithExternalRefs,
	sanitizeExternalContentForInput,
	scrollElementBy,

	getElementRect,
	isZeroRect,
	safeBoundingBoxForRange,


	getScrollParent
};
