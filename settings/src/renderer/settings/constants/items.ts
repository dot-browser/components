import * as React from 'react';
import { categories } from './categories';
import { icons } from './icons';
import { CardProfile } from '../components/Card.Profile';

export const items: Items = {
    id: [
        {
            type: "custom",
            name: "Profile",
            id: "id.profile.info",
            component: CardProfile,
            hideName: true,
        },
        {
            type: "spacer"
        },
        {
            type: "item",
            name: "Security settings",
            id: "id.profile.security",
            icon: icons.info
        },
        {
            type: "item",
            name: "Avatar and name settings",
            id: "id.profile.general.settings",
            icon: icons.info
        }
    ]
}

interface Items {
    id: Item[],
    appearance?: Item[],
    search?: Item[],
    download?: Item[],
    languages?: Item[],
    about?: Item[],
    feedback?: Item[]
}

export interface Item {
    type: "custom" | "item" | "spacer",
    name?: string,
    id?: string,
    component?: React.Component,
    icon?: any;
    hideName?: boolean;
    sandbox?: boolean;
}