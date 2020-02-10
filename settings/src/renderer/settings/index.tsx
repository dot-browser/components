import React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import { fonts } from './constants/fonts';

if(process.env.ENV == "dev") {

    const styleElement = document.createElement("style");

    styleElement.textContent = `
        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 100;
            font-display: swap;
            src: url(${fonts.robotoThin}) format('ttf');
        }

        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: url(${fonts.robotoLight}) format('ttf');
        }

        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${fonts.robotoRegular}) format('ttf');
        }

        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(${fonts.robotoMedium}) format('ttf');
        }

        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(${fonts.robotoBold}) format('ttf');
        }

        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 800;
            font-display: swap;
            src: url(${fonts.robotoBlack}) format('ttf');
        }

        ::selection {
            background-color: #cfe8fc;
        }
    `

    document.head.appendChild(styleElement);

    ReactDOM.render(<App />, document.getElementById("app"));
}

export const Settings = App;