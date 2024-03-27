import type { PassThrough } from 'primevue/ts-helpers';
import type { IconFieldPassThroughOptions } from 'primevue/iconfield';

export default {
	root: ({ props }) => {
		return {
			class: [
				'relative',
				'[&>input]:w-full',

				'[&>*:first-child]:absolute',
				'[&>*:first-child]:top-1/2',
				'[&>*:first-child]:-mt-2',
				'[&>*:first-child]:leading-none',
				'[&>*:first-child]:text-neutral-30',
				{
					'[&>*:first-child]:right-3': props.iconPosition === 'right',
					'[&>*:first-child]:left-3': props.iconPosition === 'left',
				},
				{
					'[&>*:last-child]:pr-10': props.iconPosition === 'right',
					'[&>*:last-child]:pl-10': props.iconPosition === 'left',
				},
			],
		};
	},
} as PassThrough<IconFieldPassThroughOptions>;
