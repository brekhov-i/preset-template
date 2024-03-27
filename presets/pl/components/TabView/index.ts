import type { PassThrough } from 'primevue/ts-helpers';
import type { TabViewPassThroughOptions } from 'primevue/tabview';
import type { TabPanelPassThroughOptions } from 'primevue/tabpanel';

export default {
	root: {
		class: ['h-full flex flex-col gap-6'],
	},
	nav: () => ({
		class: ['flex justify-start items-center border-b border-b-[#DCDCDC66] px-3'],
	}),
	panelContainer: {
		class: ['h-full'],
	},
	tabPanel: {
		root: {
			class: ['h-full'],
		},
		header: {
			class: ['flex'],
		},
		headerAction: ({ props, parent, context }) => ({
			class: [
				'w-max text-sm font-normal text-neutral-50 py-2 px-3 cursor-pointer border-b-2 border-b-transparent',
				'hover:shadow-tabitem active:text-main-15 active:!border-b-main-15 transition duration-300',
				{ 'text-neutral-20 hover:!shadow-none': props.disabled },
				{ ' border-b-neutral-20': props.disabled && parent.state.d_activeIndex === context.index },
				{ '!border-b-main-50 text-neutral-95 !font-medium': parent.state.d_activeIndex === context.index },
			],
		}),
	} as PassThrough<TabPanelPassThroughOptions>,
} as PassThrough<TabViewPassThroughOptions>;
