import isTouch from '@nti/util-detection-touch';

import { addClass } from './add-class';
import { removeClass } from './remove-class';

export function addFeatureCheckClasses () {
	const RootNode = document.querySelector('html');
	removeClass(RootNode, 'no-js');
	addClass(RootNode, 'js');
	addClass(RootNode, isTouch ? 'touch' : 'no-touch');
	const browser = identifyBrowser();
	if(browser) {
		addClass(RootNode, browser);
		calculateVH();
		global.addEventListener('resize', calculateVH);
	}
}

// http://stackoverflow.com/a/9851769/636077
function identifyBrowser () {

	// Opera 8.0+
	const isOpera = (!!global.opr && !!global.opr.addons) || !!global.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

	// Firefox 1.0+
	const isFirefox = typeof InstallTrigger !== 'undefined';

	// Safari 3.0+ "[object HTMLElementConstructor]"
	const isSafari = Object.prototype.toString.call(global.HTMLElement).indexOf('Constructor') > 0 || (((p) => p.toString() === '[object SafariRemoteNotification]')(!global['safari'] || global['safari'].pushNotification));

	// Internet Explorer 6-11
	const isIE = /*@cc_on!@*/false || !!document.documentMode;

	// Edge 20+
	const isEdge = !isIE && !!global.StyleMedia;

	// Chrome 1+
	const isChrome = !!global.chrome && !!global.chrome.webstore;

	// Blink engine detection
	const isBlink = (isChrome || isOpera) && !!global.CSS;

	return isOpera ? 'is-opera'
		: isFirefox ? 'is-firefox'
			: isSafari ? 'is-safari'
				: isIE ? 'is-ie'
					: isEdge ? 'is-edge'
						: isChrome ? 'is-chrome'
							: isBlink ? 'is-blink'
								: '';
}


function calculateVH () {
	try {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	} catch {
		global.removeEventListener('resize', calculateVH);
	}
}
