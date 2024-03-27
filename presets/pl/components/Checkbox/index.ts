import type { PassThrough } from 'primevue/ts-helpers';
import type { CheckboxPassThroughOptions } from 'primevue/checkbox';

export default {
	root: ({  context }) => ({
		class: [
			'relative',

			// Alignment
			'inline-flex justify-center items-center',
			'align-bottom',

			// Size
			'w-5',
			'h-5',

			// Misc
			'cursor-pointer',
			'select-none',
			'rounded-full',

			//before
			'before:w-10 before:h-10 before:absolute before:-top-1/2 before:-left-1/2 before:-translate-1/2 before:content-[""] before:bg-main-translate z-0 before:rounded-full',

			//State
			'focus-within:before:bg-main-0',
			'[&>:last-child]:z-10',
			'[&>:last-child]:hover:border-main-30 [&>:last-child]:active:border-main-70',
			context.disabled
				? 'focus:before:bg-main-transparent active:before:bg-main-transparent'
				: 'hover:before:bg-main-0 active:before:bg-main-0',
			{
				'[&>:last-child]:border-neutral-10 [&>:last-child]:hover:border-neutral-10 [&>:last-child]:active:border-neutral-10 !cursor-default':
					context.disabled,
			},
			{ '[&>:last-child]:hover:!bg-main-30 [&>:last-child]:focus:!bg-main-30': context.checked },
			{ '[&>:last-child]:active:bg-main-70 [&>:last-child]:active:!border-main-70': context.checked },
			{
				'[&>:last-child]:bg-neutral-10 [&>:last-child]:hover:bg-neutral-10 [&>:last-child]:focus:bg-neutral-10 [&>:last-child]:active:bg-neutral-10 [&>:last-child]:active:border-neutral-10':
					context.disabled && context.checked,
			},

			//label
			'[&~label]:ml-3',
			'[&~label]:hover:text-main-70',
			'active:[&~label]:text-main-70',
			{ '[&~label]:hover:text-main-30 [&~label]:cursor-pointer': !context.disabled },
			{ '[&~label]:text-neutral-10': context.disabled },

			//Animations
			'transition duration-300',
		],
	}),
	box: ({ context }) => ({
		class: [
			// Alignment
			'flex relative',
			'items-center',
			'justify-center',

			// Size
			'w-5',
			'h-5',

			// Shape
			'rounded',
			'border',

			// Colors
			{
				'border-neutral-20 bg-white': !context.checked,
				'border-main-50 bg-main-50': context.checked,
			},

			// States
			// {
			// 	'peer-hover:border-main-50': !props.disabled && !context.checked,
			// 	'peer-hover:bg-main-60 peer-hover:border-main-70': !props.disabled && context.checked,
			// 	'peer-focus-visible:border-main-50 peer-focus-visible:ring-2 peer-focus-visible:ring-main-40/20': !props.disabled,
			// 	'cursor-default opacity-60': props.disabled,
			// },

			// Transitions
			'transition-colors',
			'duration-200',
		],
	}),
	input: ({ context }) => ({
		class: [
			'peer',

			// Size
			'w-full ',
			'h-full',

			// Position
			'absolute',
			'top-0 left-0',
			'z-20',

			// Spacing
			'p-0',
			'm-0',

			// Shape
			'opacity-0',
			'rounded-md',
			'outline-none',
			'border border-neutral-20',

			// Misc
			'appareance-none',
			context.disabled ? 'cursor-default' : 'cursor-pointer',
		],
	}),
	icon: {
		class: [
			// Font
			'text-base leading-none',

			// Size
			'w-4',
			'h-4',

			// Colors
			'text-white dark:text-surface-900',

			// Transitions
			'transition-all',
			'duration-200',
		],
	},
} as PassThrough<CheckboxPassThroughOptions>;
