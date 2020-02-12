import styled, { css } from 'styled-components';
import { icons } from '../../constants/icons';

export const Flexy = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding-bottom: 8px;

    ::-webkit-scrollbar {
        height: 10px;
    }
      
    ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0); 
    }
          
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.25); 
    }
    
    ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.15); 
        border-radius: 6px;
    }
`;

export const Theme = styled.div`
    background-repeat: no-repeat;
    background-size: cover;

    width: 300px;
    height: 160px;
    display: inline-block;
    border-radius: 3px;

    background-color: white;

    flex: 1;
    justify-content: space-between;
    margin-right: 18px;
    max-width: 300px;
    max-height: 160px;
    min-height: 160px;
    min-width: 300px;
    transition: 0.2s box-shadow;

    ${({ tone, selected }: { tone: 'light' | 'dark' | 'oled'; selected: boolean }) => css`
        background-image: url(${icons.themes[tone]});

        ${tone == "light" ? `
            &:hover {
                ${selected == false ? `box-shadow: inset 0 0 0 3px #dddddd` : ''};
                
            }

            border: 1px solid #d0d0d0;
        ` : `
            &:hover {
                ${selected == false ? `box-shadow: inset 0 0 0 3px #515151` : ''};
            }
        `}

        ${selected ? `
            position: relative;

            ${tone == "light" ? `box-shadow: inset 0 0 0 4px rgba(0, 0, 0, 0.85);` : `box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.3);`}
            

            &:after {
                content: "";
                position: absolute;
                left: calc(100% / 2.3);
                top: calc(100% / 2.4);
                width: 40px;
                height: 40px;
                background-image: url(https://fonts.gstatic.com/s/i/materialicons/check/v4/24px.svg);
                background-size: 26px;
                background-position: center;
                backdrop-filter: blur(2px);
                background-color: rgba(255, 255, 255, 0.55);
                ${tone == "light" ? `filter: invert(1)` : ``};
                background-repeat: no-repeat;
                border-radius: 26px;
                animation: 0.3s zoom;

                @keyframes zoom {
                    0% {
                        transform: scale(0)
                    },
                    100% {
                        transform: scale(1)
                    }
                }
            }
        ` : ''}
    `}
`;