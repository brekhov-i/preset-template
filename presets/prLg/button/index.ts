import type { PassThrough } from 'primevue/ts-helpers';
import type { ButtonPassThroughOptions } from 'primevue/button';

export default {
	root: () => ({
		class: ['bg-primary-400 px-4 py-2 rounded'],
	}),
} as PassThrough<ButtonPassThroughOptions>;
