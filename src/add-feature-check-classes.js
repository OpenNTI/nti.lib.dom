import isTouch from 'nti-util-detection-touch';

import addClass from './addclass';
import removeClass from './removeclass';

export default function addFeatureCheckClasses () {
	const RootNode = document.querySelector('html');
	removeClass(RootNode, 'no-js');
	addClass(RootNode, 'js');
	addClass(RootNode, isTouch ? 'touch' : 'no-touch');
}
