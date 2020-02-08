import React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';

if(process.env.ENV == "dev") {
    ReactDOM.render(<App />, document.getElementById("app"));
}

export const Settings = App;