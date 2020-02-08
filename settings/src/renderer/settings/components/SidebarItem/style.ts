import styled, { css } from 'styled-components';

export const StyledSidebarItem = styled.div`
    height: 52px;
    padding-left: 32px;
    transition: 0.3s opacity, 0.2s background-color;
    display: flex;
    width: calc(400px - 32px);
    padding-left: 32px;
    margin-bottom: 4px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
    }

    ${({ visible }: { visible?: boolean }) => css`
        opacity: ${visible ? 1 : 0};
        pointer-events: ${visible ? 'all' : 'none'};
    `} 
`;

export const Icon = styled.div`
    background-repeat: no-repeat;
    background-size: cover;

    width: 24px;
    height: 24px;
    display: inline-block;
    margin-top: 13px;

    ${({ icon }: { icon: any }) => css`
        background-image: url(${icon});
    `}
`;

export const Name = styled.div`
    font-size: 18px;
    font-family: Roboto;
    font-weight: 400;
    color: #404040;
    margin-top: 15px;
    padding-left: 28px;
`;