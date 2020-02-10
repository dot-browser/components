import styled, { css } from 'styled-components';

export const Flexy = styled.div`
    display: flex;
`;

export const Avatar = styled.div`
    background-repeat: no-repeat;
    background-size: cover;

    width: 48px;
    height: 48px;
    display: inline-block;
    border-radius: 50px;

    ${({ icon }: { icon: any }) => css`
        background-image: url(${icon});
    `}
`;

export const Value = styled.div`
    font-family: Roboto;
    font-weight: 400;
    font-size: 22px;
    color: #202020;
`;

export const InformationsContainer = styled.div`
    display: inline-block;
    vertical-align: top;
    padding-left: 15px;
`;

export const Sync = styled.div`
    background-repeat: no-repeat;

    width: 18px;
    height: 18px;
    display: inline-block;
    border-radius: 50px;

    background-color: #ff60ad;
    border: 1.5px solid rgb(255, 255, 255, 0.14);
    background-size: 14px;
    background-position: center;

    margin-left: 5px;
    vertical-align: -3px;

    filter: invert(1);

    animation: spin 2s linear infinite;

    @keyframes spin {
        100% {
          transform: rotate(360deg);
        }
    }

    ${({ icon }: { icon: any }) => css`
        background-image: url(${icon});
    `}
`;

export const Button = styled.div`
    background-color: #FAFAFA;
    font-family: Roboto;
    font-weight: 300;
    font-size: 15px;
    border-radius: 3px;
    padding: 7px 18px;
    height: fit-content;
    transition: 0.2s background-color;
    margin-left: 10px;

    ${({ icon }: { icon?: any }) => css`
        ${icon ? `
            padding: 16px 16px;
            background-image: url(${icon});
            background-size: 21px;
            background-position: center;
            background-repeat: no-repeat;
        ` : ''};
    `}

    &:hover {
        background-color: rgba(0, 0, 0, 0.07);
    }
`;

export const Buttons = styled.div`
    display: inline-flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    user-select: none;
`;