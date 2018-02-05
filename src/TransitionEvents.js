/**
 * Originally from react/lib/ReactTransitionEvents... rewritten here since they dropped it
 */

const endEvents = (typeof window === 'undefined')
	? []
	: ((map => {
		const {style} = document.createElement('div');

		// On some platforms, in particular some releases of Android 4.x,
		// the un-prefixed "animation" and "transition" properties are defined on the
		// style object but the events that fire will still be prefixed, so we need
		// to check if the un-prefixed events are useable, and if not remove them
		// from the map
		if (!('AnimationEvent' in window)) {
			delete map.animationend.animation;
		}

		if (!('TransitionEvent' in window)) {
			delete map.transitionend.transition;
		}


		return Object.values(map)
			.map(baseEvents => Object.entries(baseEvents)
				.filter(([styleName]) => (styleName in style))
				.map(([, name]) => name))
			.reduce((a, b) => [...a, ...b], []);
	})({
		transitionend: {
			transition: 'transitionend',
			WebkitTransition: 'webkitTransitionEnd',
			MozTransition: 'mozTransitionEnd',
			OTransition: 'oTransitionEnd',
			msTransition: 'MSTransitionEnd'
		},

		animationend: {
			animation: 'animationend',
			WebkitAnimation: 'webkitAnimationEnd',
			MozAnimation: 'mozAnimationEnd',
			OAnimation: 'oAnimationEnd',
			msAnimation: 'MSAnimationEnd'
		}
	}));

const addEventListener = (node, eventName, eventListener) => node.addEventListener(eventName, eventListener, false);
const removeEventListener = (node, eventName, eventListener) => node.removeEventListener(eventName, eventListener, false);

export const TransitionEvents = {
	addEndEventListener (node, eventListener) {
		if (endEvents.length === 0) {
			// If CSS transitions are not supported, trigger an "end animation" event immediately.
			window.setTimeout(eventListener, 0);
			return;
		}

		endEvents.forEach(endEvent =>
			addEventListener(node, endEvent, eventListener));
	},

	endEvents,

	removeEndEventListener (node, eventListener) {
		if (endEvents.length === 0) {
			return;
		}

		endEvents.forEach(endEvent =>
			removeEventListener(node, endEvent, eventListener));
	}
};
