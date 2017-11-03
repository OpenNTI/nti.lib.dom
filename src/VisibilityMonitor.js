import EventEmitter from 'events'; //builtin

const prefix = (()=> {
	try {
		const prefixes = ['webkit', 'moz', 'ms', 'o'];
		if (document.hidden !== undefined) {
			return '';
		}
		// Test all vendor prefixes
		for(let i = 0; i < prefixes.length; i++) {
			if (document[prefixes[i] + 'Hidden'] !== undefined) {
				return prefixes[i];
			}
		}
	}
	catch(e) {/**/}
	return null;
})();

const CHANGE_EVENT = 'visibilitychange';
const eventName = prefix + 'visibilitychange';
const propertyName = prefix === '' ? 'hidden' : (prefix + 'Hidden');


export class VisibilityMonitor extends EventEmitter {

	views = 0

	constructor () {
		super();

		const doc = typeof document !== 'undefined' ? document : null;

		if (prefix !== null && doc) {

			const handleVisibilityChange = () => {
				const hidden = doc[propertyName];

				// The page is in foreground and visible
				if (hidden === false) {
					this.views++;
				}
				//console.debug('Emitting: Visibility Change: hidden? ', hidden);
				this.emit(CHANGE_EVENT, !hidden);
			};

			doc.addEventListener(eventName, handleVisibilityChange);
			handleVisibilityChange();
		}
	}


	getViews () { return this.views; }


	addChangeListener (callback) {
		this.addEventListener(CHANGE_EVENT, callback);
		const unsubscribe = () => this.removeEventListener(CHANGE_EVENT, callback);
		return unsubscribe;
	}


	removeChangeListener (callback) {
		this.removeEventListener(callback);
	}
}

export default new VisibilityMonitor();
