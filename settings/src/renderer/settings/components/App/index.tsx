import React from 'react';
import { observer } from 'mobx-react';
import { StyledApp } from './style';
import 'glamor/reset';

export const App = observer(() => (
    <StyledApp>
        <h1>Test</h1>
    </StyledApp>
))