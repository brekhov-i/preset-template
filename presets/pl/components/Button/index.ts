import type { PassThrough } from 'primevue/ts-helpers';
import type { ButtonPassThroughOptions } from 'primevue/button';

export default {
	root: ({ props, parent }) => {
		return {
			class: [
				'flex justify-center items-center py-2 px-4 rounded-xl text-sm transition duration-300 relative gap-2',
				{ 'text-white bg-main-50 hover:bg-main-30': props.severity === undefined || props.severity === 'success' },
				{ 'text-black bg-neutral-15': props.severity === 'secondary' },
				{ 'text-white bg-error-50 hover:bg-error-30': props.severity === 'danger' },
				{
					'!text-main-50 !bg-transparent hover:!bg-main-0':
						props.text && (props.severity === undefined || props.severity === 'success'),
				},
				{ '!bg-transparent text-error-50 hover:!bg-error-10': props.text && props.severity === 'error' },
				{ '!text-neutral-15 !bg-transparent': props.text && props.severity === 'secondary' },
				{ '!p-0': props.icon && !props.label },

				//Only Icon
				'[&>.pi]:transition [&>.pi]:duration-300 [&>.pi]:relative',
				{
					'before:w-10 before:h-10 before:absolute before:-top-[45%] before:-left-[36%] before:content-[""] before:bg-main-translate z-0 before:rounded-full before:transition before:duration-300 before:pointer-events-none':
						props.icon && !props.label && !parent.instance.$slots.default,
					'hover:[&>.pi]:text-main-30 focus:[&>.pi]:text-main-30 hover:before:bg-main-0':
						props.icon && !props.label && !parent.instance.$slots.default,
				},

				//Outlined
				{ 'bg-transparent border': props.outlined },
				{
					'text-main-50 border-main-50 bg-transparent hover:bg-main-0':
						(props.severity === undefined || props.severity === 'success') && props.outlined,
				},
				{
					'!text-error-50 !border-error-50 bg-transparent hover:!bg-error-0 focus:!text-error-70 focus:!border-error-70':
						props.severity === 'danger',
				},

				//Link
				{ '!p-0 hover:text-main-50': props.link },
			],
		};
	},
} as PassThrough<ButtonPassThroughOptions>;
