import type { PassThrough } from 'primevue/ts-helpers';
import type { PanelMenuPassThroughOptions } from 'primevue/panelmenu';

export default {
	headerContent: ({ props, context }) => ({
		class: [
			'py-2.5 px-6',
			'[&>a]:flex [&>a]:justify-start [&>a]:items-center [&>a]:gap-3 [&>a]:text-neutral-20 [&>a]:relative [&>a]:hover:text-main-30 [&>a]:focus:text-main-15',
			'[&>a]:before:content-[""] [&>a]:before:absolute [&>a]:before:-left-4 [&>a]:before:top-1/2 [&>a]:before:-translate-y-1/2 [&>a]:before:bg-main-40 [&>a]:before:w-[3px] [&>a]:before:h-8 [&>a]:before:rounded [&>a]:before:hidden',
			'[&>.router-link-active]:text-main-40 [&>.router-link-active]:before:block',
			props.model && props.model[context.index].headerContentClass ? props.model[context.index].headerContentClass : '',
		],
	}),
} as PassThrough<PanelMenuPassThroughOptions>;
