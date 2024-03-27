import type { PassThrough } from 'primevue/ts-helpers';
import type { CalendarPassThroughOptions } from 'primevue/calendar';

export default {
	root: ({ state }) => ({
		class: [
			'flex items-center',
			'bg-neutral-0 px-3 py-1.5 rounded-xl h-9 w-[210px]',
			'text-sm text-neutral-60',
			'outline-main-50 focus:border-main-50 hover:border-main-50 transition duration-300 border border-transparent',
			{ 'border !border-main-50 transition duration-300': state.overlayVisible },
		],
	}),
	input: ({ props }) => ({
		class: ['w-full bg-transparent outline-none', props.disabled ? 'cursor-default' : 'cursor-pointer'],
	}),
	inputicon: {
		class: ['text-neutral-40'],
	},
	panel: () => ({
		class: ['shadow-card p-4 rounded-xl !mt-2 z-10 bg-white'],
	}),
	header: () => ({
		class: ['w-full flex justify-between'],
	}),
	monthTitle: () => ({
		class: ['mr-1'],
	}),
	tableHeaderCell: () => ({
		class: ['p-2 text-center'],
	}),
	day: ({ context }) => ({
		class: ['p-2 text-center rounded-3xl', context.disabled ? 'cursor-default' : 'cursor-pointer'],
	}),
	dayLabel: ({ context }) => ({
		class: [
			'flex justify-center items-center w-6 h-6 rounded-xl',
			{ 'text-white !bg-main-50': context.selected },
			{ 'font-bold bg-main-0': context.today },
			{ 'text-neutral-30': context.disabled },
		],
	}),
} as PassThrough<CalendarPassThroughOptions>;
