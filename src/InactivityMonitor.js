import EventEmitter from 'events';

import {Tasks, defineProtected, updateValue} from '@nti/lib-commons';

import VisibilityMonitor from './VisibilityMonitor';

const INACTIVE_TIMEOUT = 900000;//15 minutes
const CHANGE_EVENT = 'change';

const call = x => typeof x === 'function' && x();

export default class InactivityMonitor extends EventEmitter {
	constructor (element) {
		super();
		this.setMaxListeners(0);//don't test for memory leaks.

		Object.defineProperties(this, {
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


	monitorVisibility () {
		call(this.stopMonitoringVisibility);

		VisibilityMonitor.addChangeListener(this.onVisibilityChange);

		this.stopMonitoringVisibility = () => {
			VisibilityMonitor.removeChangeListener(this.onVisibilityChange);
		};
	}


	onVisibilityChange = (visible) => {
		if (visible) {
			this.onActive();
			if (this.listenerCount(CHANGE_EVENT) > 0) {
				this.monitor.start();
			}
		} else {
			this.monitor.stop();
			this.onIdle();
		}
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
		this.monitorVisibility();
		this.monitor.start();

		return () => this.removeChangeListener(fn);
	}


	removeChangeListener (fn) {
		this.removeListener(CHANGE_EVENT, fn);

		if (this.listenerCount(CHANGE_EVENT) === 0) {
			call(this.stopMonitoringVisibility);
			this.monitor.stop();
		}
	}
}
