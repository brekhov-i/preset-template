import type { Component } from 'vue';

//MenuItem
import type { MenuItem } from 'primevue/menuitem';

export type TMenuItem = Omit<MenuItem, 'icon'> & {
	icon?: Component | string;
	headerContentClass?: string | string[];
};
