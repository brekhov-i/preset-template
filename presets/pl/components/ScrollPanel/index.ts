import type { PassThrough } from 'primevue/ts-helpers';
import type { ScrollPanelPassThroughOptions } from 'primevue/scrollpanel';

export default {
	root: {
		class: ['h-max'],
	},
	wrapper: {
		class: [
			// Size & Position
			'h-full w-full',

			// Layering
			'z-[1]',

			// Spacing
			'overflow-hidden',

			// Misc
			'relative',

			'[&:hover~.barx]:visible',
			'[&:hover~.bary]:visible',
		],
	},
	content: {
		class: [
			// Size & Spacing
			'h-[calc(100%+18px)] w-[calc(100%+18px)] pr-[4px] pb-[0px] pl-0 pt-0',

			// Overflow & Scrollbar
			'overflow-scroll scrollbar-none',

			// Box Model
			'box-border',

			// Position
			'relative',

			// Webkit Specific
			'[&::-webkit-scrollbar]:hidden',
		],
	},
	barX: {
		class: [
			// Size & Position
			'barx h-[4px] !bottom-0',

			// Appearance
			'bg-main-40 rounded-xl',

			// Interactivity
			'cursor-pointer',

			// Visibility & Layering
			'invisible z-20',

			// Transition
			'transition duration-[250ms] ease-linear',

			// Misc
			'relative',
		],
	},
	barY: {
		class: [
			// Size & Position
			'bary w-[4px] top-0 !right-0',

			// Appearance
			'bg-main-40 rounded-xl',

			// Interactivity
			'cursor-pointer',

			// Visibility & Layering
			'invisible z-[51]',

			// Transition
			'transition duration-[250ms] ease-linear',

			// Misc
			'absolute',
		],
	},
} as PassThrough<ScrollPanelPassThroughOptions>;
