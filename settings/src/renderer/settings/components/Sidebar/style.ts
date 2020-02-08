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

    ${({ position }: { position: number }) => css`
        margin-top: ${position}px;
    `} 
`;
