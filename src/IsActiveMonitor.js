import EventEmitter from 'events';

import {Tasks, defineProtected, updateValue} from 'nti-commons';

const INACTIVE_TIMEOUT = 900000;//15 minutes
const CHANGE_EVENT = 'change';

export class InactiveMonitor extends EventEmitter {
	constructor (element) {
		super();

		Object.assignProperties(this, {
			...defineProtected({
				active: true,
				monitor: new Tasks.Idle({
					element,
					timeout: INACTIVE_TIMEOUT
				})
			})
		});


		this.monitor.on('active', () => this.onActive());
		this.monitor.on('idle', () => this.onIdle());
	}


	onActive () {
		if (!this.active) {
			updateValue(this, 'active', true);
			this.emit(CHANGE_EVENT, true);
		}
	}


	onIdle () {
		if (this.active) {
			updateValue(this, 'active', false);
			this.emit(CHANGE_EVENT, false);
		}
	}


	addChangeListener (fn) {
		this.addListener(CHANGE_EVENT, fn);

		return () => {
			this.removeListener(CHANGE_EVENT, fn);
		};
	}


	removeChangeListener (fn) {
		this.removeListener(CHANGE_EVENT, fn);
	}
}
