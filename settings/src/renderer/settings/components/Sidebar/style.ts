import styled, { css } from 'styled-components'

export const StyledSidebar = styled.div`
    height: calc(100% - 72px);
    width: 400px;
    background-color: #fafafa;
    position: absolute;
    overflow: hidden;

    * {
        user-select: none;
    }
`;

export const Indicator = styled.div`
    height: 28px;
    width: 5px;
    position: absolute;
    background-color: #313131;
    border-radius: 0 50px 50px 0;
    transition: 0.5s margin-top;
    transition-timing-function: cubic-bezier(0.42, 0, 0.46, 1.07);
    will-change: margin-top;

    ${({ position }: { position: number }) => css`
        margin-top: ${position}px;
    `} 
`;
