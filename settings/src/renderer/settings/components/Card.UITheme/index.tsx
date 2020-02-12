import React from 'react';
import { Flexy, Theme } from './style';
import store from '../../store';
import { observer } from 'mobx-react';

const onSelectTheme = (theme) => {
    store.settings.theme = theme;
}

export const UITheme = observer(() => (
    <Flexy ref={store.themeFlexyRef}>
        <Theme tone={"light"} title={"Dot Browser Light Theme"} onClick={() => onSelectTheme("light")} selected={store.settings ? store.settings.theme == "light" ? true : false : false} />
        <Theme tone={"dark"} title={"Dot Browser Dark Theme"} onClick={() => onSelectTheme("dark")} selected={store.settings ? store.settings.theme == "dark" ? true : false : false} />
        <Theme tone={"oled"} title={"Dot Browser OLED Theme"} onClick={() => onSelectTheme("oled")} selected={store.settings ? store.settings.theme == "oled" ? true : false : false} />
    </Flexy>
))

