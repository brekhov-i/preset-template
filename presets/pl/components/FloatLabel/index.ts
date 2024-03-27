import type { PassThrough } from 'primevue/ts-helpers';
import type { FloatLabelPassThroughOptions } from 'primevue/floatlabel';

export default {
	root: {
		class: [
			'block relative',

			// Base Label Appearance
			'[&>*:last-child]:text-neutral-60',
			'[&>*:last-child]:text-sm',
			'[&>*:last-child]:bg-white',
			'[&>*:last-child]:absolute',
			'[&>*:last-child]:top-0',
			'[&>*:last-child]:-translate-y-1/2',
			'[&>*:last-child]:left-3',
			'[&>*:last-child]:pointer-events-none',
			'[&>*:last-child]:transition-all',
			'[&>*:last-child]:duration-200',
			'[&>*:last-child]:ease',

			// Focus Label Appearance
			'[&>*:last-child]:has-[:focus]:-top-3',
			'[&>*:last-child]:has-[:focus]:text-sm',

			// Filled Input Label Appearance
			'[&>*:last-child]:has-[.filled]:-top-3',
			'[&>*:last-child]:has-[.filled]:text-sm',

			//small
			'[&>small]:row-start-2',
			'[&>small]:!-mt-4',
		],
	},
} as PassThrough<FloatLabelPassThroughOptions>;
