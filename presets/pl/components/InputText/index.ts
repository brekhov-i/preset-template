import type { PassThrough } from 'primevue/ts-helpers';
import type { InputTextPassThroughOptions } from 'primevue/inputtext';

export default {
	root: ({ props, context }) => ({
		class: [
			'bg-neutral-0 h-9 rounded-xl min-w-52.5 outline-none px-4 py-2 text-3.75 leading-none text-neutral-60 border border-transparent',
			'hover:border-main-30 focus:border-main-50',
			{ '!border-error-50 text-error-50': props.invalid },
			{ 'bg-neutral-0 hover:border-neutral-0 focus:border-neutral-0 text-neutral-50 cursor-default': context.disabled },

			//label
			'[&~label]:text-3.75 [&~label]:leading-none [&~label]:text-neutral-60 [&~label]:row-start-1',
			'[&~label]:mb-2',
			{ 'hover:[&~label]:text-main-30 focus:[&~label]:text-main-50': !context.disabled },
			{ '[&~label]:text-error-50': props.invalid },
			{ '[&~label]:text-neutral-50': context.disabled },

			//small
			'[&~small]:text-xs [&~small]:text-neutral-70 [&~small]:mt-1 [&~small]:ml-4',
			{ '[&~small]:text-error-50': props.invalid },
			{ '[&~small]:text-neutral-50': context.disabled },
		],
	}),
} as PassThrough<InputTextPassThroughOptions>;
