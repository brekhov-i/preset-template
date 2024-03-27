import type { PassThrough } from 'primevue/ts-helpers';
import type { TabMenuPassThroughOptions } from 'primevue/tabmenu';

export default {
	root: {
		class: ['w-full flex flex-col gap-6'],
	},
	menu: {
		class: ['w-max sm:w-full flex justify-start items-center border-b border-b-[#DCDCDC66]'],
	},
	menuitem: ({ context, state }) => ({
		class: [
			'text-sm font-normal text-neutral-50 py-2 px-3 cursor-pointer border-b-2 border-b-transparent',
			'hover:shadow-tabitem focus:text-main-15 focus:!border-b-main-15 transition duration-300',
			{ 'text-neutral-20 hover:!shadow-none': context.item.disabled },
			{ ' border-b-neutral-20': context.item.disabled && state.d_activeIndex === context.index },
			{ '!border-b-main-50 text-neutral-95 !font-medium': state.d_activeIndex === context.index },
		],
	}),
	action: {
		class: ['flex w-max'],
	},
	label: {
		class: ['w-max'],
	},
} as PassThrough<TabMenuPassThroughOptions>;
