import styled, { css } from 'styled-components';

export const StyledToolbar = styled.div`
    height: 72px;
    width: 100%;
    background-color: #fafafa;
    align-items: center;
    display: flex;
`;

export const Container = styled.div`
    padding: 0 32px;
    user-select: none;
    align-items: center;
    display: flex;
    flex: 1;

    ${({ isSearchToggled }: { isSearchToggled?: boolean }) => css`
        ${isSearchToggled ? `
            display: none;
        ` : ''}
    `}
`;

export const FullSizeContainer = styled(Container)`
    display: none;

    ${({ isSearchToggled }: { isSearchToggled?: boolean }) => css`
        ${isSearchToggled ? `
            display: flex;
        ` : ''}
    `}
`;

export const SearchContainer = styled.div`
    display: flex;
    flex: 1 1 0;
    justify-content: center;
`;

export const AvatarContainer = styled.div`
    display: flex;
    flex: 1 1 1;
    justify-content: center;
`;

export const Title = styled.div`
    font-family: Roboto;
    font-weight: 300;
    font-size: 28px;
`;

export const AvatarIcon = styled.div`
    background-repeat: no-repeat;
    background-size: cover;

    width: 42px;
    height: 42px;
    display: inline-block;
    border-radius: 50px;

    ${({ icon }: { icon: any }) => css`
        background-image: url(${icon});
    `}
`;

export const SearchIcon = styled(AvatarIcon)`
    background-size: 24px;
    background-position: center;
    transition: 0.2s background-color;
    margin-right: 18px;
    opacity: 0;
    pointer-events: none;

    &:hover {
        background-color: rgba(0, 0, 0, 0.09);
    }

    @media only screen and (max-width: 1600px) {
        opacity: 1;
        pointer-events: all;
    }
`;

export const MenuIcon = styled(AvatarIcon)`
    background-size: 24px;
    background-position: center;
    transition: 0.2s background-color;
    opacity: 0;
    pointer-events: none;
    width: 0px;
    margin: 0;

    &:hover {
        background-color: rgba(0, 0, 0, 0.09);
    }

    @media only screen and (max-width: 1600px) {
        opacity: 1;
        pointer-events: all;
        width: 42px;
        margin-right: 12px;
        margin-left: -9px;
    }
`;

export const BackIcon = styled(AvatarIcon)`
    background-size: 24px;
    background-position: center;
    transition: 0.2s background-color;
    opacity: 0;
    pointer-events: none;

    &:hover {
        background-color: rgba(0, 0, 0, 0.09);
    }

    ${({ isSearchToggled }: { isSearchToggled?: boolean }) => css`
        ${isSearchToggled ? `
            opacity: 1 !important;
            pointer-events: all !important;
        ` : ''}
    `}
`;