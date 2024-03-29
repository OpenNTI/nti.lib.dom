import { addClass, removeClass } from './style';

function handler(component) {
	let { body } = document;
	let state = 'portrait';
	let w = global; //window
	if (Math.abs(w.orientation) === 90 || w.innerWidth > w.innerHeight) {
		state = 'landscape';
	}

	removeClass(body, 'portrait');
	removeClass(body, 'landscape');
	addClass(body, state);

	//console.debug('Window is now: %s', state);
	if (component) {
		component.setState({ orientation: state });
	}
}

export default {
	init(component) {
		global.addEventListener(
			'orientationchange',
			this.changeHandler.bind(this, component)
		);
		this.changeHandler(component);
	},

	changeHandler(component) {
		// delay this handler because on android the innerWidth and innerHeight
		// properties may not be updated yet, and because on android the height
		// of the nav drawer doesn't update if we fire immediately.
		setTimeout(() => handler(component), 500);
	},
};
