import type { PassThrough } from 'primevue/ts-helpers';
import type { TagPassThroughOptions } from 'primevue/tag';

export default {
	root: ({ props }) => ({
		class: [
			'flex justify-center items-center gap-2 py-1 px-3 rounded-xl min-w-23 text-xs',
			{ 'bg-main-0 text-main-50': props.severity === undefined || props.severity === 'success' },
			{ 'bg-neutral-0 text-neutral-40': props.severity === 'secondary' },
			{ 'bg-warning-5 text-warning-40': props.severity === 'warning' },
			{ 'bg-error-5 text-error-40': props.severity === 'danger' },
			{ 'bg-violet-5 text-violet-40': props.severity === 'info' },
		],
	}),
	icon: {
		class: ['text-[4px]'],
	},
} as PassThrough<TagPassThroughOptions>;
