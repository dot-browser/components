import React from 'react';
import { observable } from "mobx";
import { icons } from '../constants/icons';

import Mark from 'mark.js';

interface IUser {
    username: string,
    avatar: any,
    email: string
}

class Store {
    @observable
    public inputRef: HTMLInputElement = React.createRef<HTMLInputElement>();

    @observable
    public themeFlexyRef: HTMLDivElement = React.createRef<HTMLDivElement>();
    
    @observable
    public indicatorPosition: number = 10;

    @observable
    public selectedCategory: string;

    @observable
    public isToggled: boolean = false;

    @observable
    public isSearchToggled: boolean = false;

    @observable
    public fssValue: string = '';

    @observable
    public sections: { id: string, scrollPos: number, element: HTMLElement }[] = [];

    @observable
    public settings: any = {
        theme: "light"
    };

    public mark;

    public constructor() {
        const performanceStart = Date.now();

        window.addEventListener('resize', () => {
            calculateSectionPositions()

            if(window.innerWidth >= 1601) {
                this.isToggled = false;
                this.isSearchToggled = false;

                const node: HTMLInputElement = this.inputRef.current;

                node.value = this.fssValue;
            }
        })

        window.addEventListener('keydown', (e) => {
            calculateSectionPositions()

            if(e.keyCode == 27) {
                this.isToggled = false;
            }
        })

        window.addEventListener('DOMContentLoaded', () => {
            this.mark = new Mark(document.querySelector("#mount-view"));

            calculateSectionPositions()
            console.log(`Loaded settings in ${Date.now() - performanceStart}ms`)

            this.themeFlexyRef.current.addEventListener('wheel', (e: WheelEvent) => {
                this.themeFlexyRef.current.scrollLeft -= (e.deltaY*1.5);
                e.preventDefault();
            })
        })

        const calculateSectionPositions = () => {
            this.sections = []

            document.getElementById("mount-view").childNodes.forEach((node: HTMLElement) => {
                let scrollPos = node.getBoundingClientRect().top+150

                if(node.id.split("mount-")[1] == "id") scrollPos = node.getBoundingClientRect().top-125

                return this.sections.push({
                    id: node.id.split("mount-")[1],
                    scrollPos: Math.round(scrollPos),
                    element: node
                })
            });

        }
    }

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

        this.fssValue = this.inputRef.current.value

        window.history.replaceState(null, null, `${stripped}?q=${this.inputRef.current.value}`);

        console.log(this.mark.mark)

        this.mark.unmark({
            done: function(mark) {
                mark.mark(this.inputRef.current.value, {});
          }
        });
    }

}

export default new Store();