import React from 'react';
import { observable } from "mobx";
import { icons } from '../constants/icons';

interface IUser {
    username: string,
    avatar: any,
    email: string
}

class Store {
    @observable
    public inputRef = React.createRef<HTMLInputElement>();

    @observable
    public indicatorPosition: number = 10;

    @observable
    public selectedCategory: string;

    @observable
    public session: IUser = {
        username: "Guest",
        avatar: icons.defaultAvatar,
        email: "guest@dothq.co"
    }

    public onInputChange = (e) => {
        const stripped = window.location.href.split("?")[0];

        if(this.inputRef.current.value.length == 0) {
            return window.history.replaceState(null, null, stripped);
        }

        window.history.replaceState(null, null, `${stripped}?q=${this.inputRef.current.value}`);
    }
}

export default new Store();