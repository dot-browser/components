import React from 'react';
import { observer } from 'mobx-react';
import { createGlobalStyle } from 'styled-components';
import { StyledApp, Style } from './style';
import 'glamor/reset';

import { Toolbar } from '../Toolbar';
import { Sidebar } from '../Sidebar';
import { View } from '../View';

import { icons } from '../../constants/icons';

const favicon = document.createElement("link");
favicon.setAttribute("type", "image/x-icon");
favicon.setAttribute("rel", "icon");
favicon.setAttribute("href", icons.favicon);

document.head.appendChild(favicon);

const GlobalStyle = createGlobalStyle`${Style}`;

export const App = observer(() => (
    <StyledApp>
        <Toolbar />
        <Sidebar />
        <View />
        <GlobalStyle />
    </StyledApp>
))