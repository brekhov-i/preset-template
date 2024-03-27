import type { PassThrough } from 'primevue/ts-helpers';
import type { DialogPassThroughOptions } from 'primevue/dialog';

export default {
	root: () => {
		return {
			class: ['!flex !flex-row bg-neutral-70 rounded-xl py-4 px-6'],
		};
	},
	footer: {
		class: ['flex flex-row-reverse gap-3'],
	},
	acceptButton: {
		class: ['bg-main-40'],
	},
	rejectButton: {
		class: ['bg-main-40'],
	},
	mask: ({ props }) => {
		return {
			class: [
				'p-3',
				{
					'!w-auto !h-auto !top-auto !left-1/2 bottom-0 -translate-x-1/2': props.position === 'bottom' || !props.modal,
				},
			],
		};
	},
	transition: ({ props }) => {
		return props.position === 'top'
			? {
					enterFromClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active',
					enterActiveClass: 'transition-all duration-200 ease-out',
					leaveActiveClass: 'transition-all duration-200 ease-out',
					leaveToClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active',
				}
			: props.position === 'bottom'
				? {
						enterFromClass: 'opacity-0 scale-75 translate-y-full mask-active',
						enterActiveClass: 'transition-all duration-200 ease-out',
						leaveActiveClass: 'transition-all duration-200 ease-out',
						leaveToClass: 'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0 mask-active',
					}
				: {
						enterFromClass: 'opacity-0 scale-75 mask-active',
						enterActiveClass: 'transition-all duration-200 ease-out',
						leaveActiveClass: 'transition-all duration-200 ease-out',
						leaveToClass: 'opacity-0 scale-75 mask-active',
					};
	},
} as PassThrough<DialogPassThroughOptions>;
