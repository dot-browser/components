import styled, { css } from 'styled-components'

export const StyledSidebar = styled.div`
    height: calc(100% - 72px);
    width: 400px;
    background-color: #fafafa;
    position: absolute;
    overflow: hidden;
    transition: 0.2s width, 0.2s box-shadow, 0.2s opacity;
    z-index: 1;

    * {
        user-select: none;
    }

    @media only screen and (max-width: 1600px) {
        opacity: 0;
        pointer-events: none;
        width: 0px;
    }

    ${({ isToggled }: { isToggled?: boolean }) => css`
        ${isToggled ? `
            opacity: 1 !important;
            pointer-events: all !important;
            width: 400px !important;
            position: fixed !important;
            box-shadow: 0px 9999vh 0px 9999vh #00000040 !important;
        ` : ''}
    `} 


`;

export const Indicator = styled.div`
    height: 28px;
    width: 5px;
    position: absolute;
    background-color: #313131;
    border-radius: 0 50px 50px 0;
    transition: 0.3s margin-top;
    transition-timing-function: cubic-bezier(0.42, 0, 0.46, 1.07);
    will-change: margin-top;
    z-index: 1;

    ${({ position }: { position: number }) => css`
        margin-top: ${position}px;
    `} 
`;
