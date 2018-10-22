/* eslint-env jest */
import {
	getDocument,
	getViewportHeight,
	getViewportWidth,
	getScreenWidth,
	getScreenHeight
} from '../viewport';

const set = (o, k, value) => Object.defineProperty(o, k, {configurable: true, value});

describe('viewport measuring', () => {

	beforeEach(() => {
		global.innerHeight = 768;
		global.innerWidth = 1024;
	});

	test ('getViewportHeight', () => {
		const doc = getDocument();
		const {document} = global;
		global.document = void 0;

		try {
			expect(getViewportHeight()).toEqual(768);
		} finally {
			global.document = document;
		}

		try {
			set(doc, 'clientHeight', 2);
			expect(getViewportHeight()).toEqual(2);
		} finally {
			delete doc.clientHeight;
		}
	});

	test ('getViewportWidth', () => {
		const doc = getDocument();
		const {document} = global;
		global.document = void 0;

		try {
			expect(getViewportWidth()).toEqual(1024);
		} finally {
			global.document = document;
		}

		try {
			set(doc, 'clientWidth', 2);
			expect(getViewportWidth()).toEqual(2);
		} finally {
			delete doc.clientWidth;
		}
	});

	test ('getScreenWidth', () => {
		expect(getScreenWidth()).toEqual(1024);

		try {
			set(global.screen, 'width', 123);
			expect(getScreenWidth()).toEqual(123);
		} finally {
			delete global.screen.width;
		}
	});

	test ('getScreenHeight', () => {
		expect(getScreenHeight()).toEqual(768);

		try {
			set(global.screen, 'height', 123);
			expect(getScreenHeight()).toEqual(123);
		} finally {
			delete global.screen.height;
		}
	});
});
