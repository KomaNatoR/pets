import styled from "@emotion/styled";

import { whiteBtnStyles, blueBtnStyles, yellowBtnStyles, closeBtnStyles } from "./buttonStyles";


const switchTheme = ({buttonView, theme}) => {

    switch (buttonView) {
        case "white":
            return whiteBtnStyles(theme);
        case "blue":
            return blueBtnStyles(theme);
        case "yellow":
            return yellowBtnStyles(theme);
        case "close":
            return closeBtnStyles();
    
        default:
            return whiteBtnStyles(theme);
    };
};

export const ButtonTag = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width:${({width})=>width};

    border-radius: 40px;
    font-family: inherit;
    font-weight: 600;
    font-size: 16px;
    line-height: calc(22 / 16);
    letter-spacing: 0.04em;
    cursor: pointer;

    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
    ${switchTheme}


    :active {
    }
    :hover, :focus {
        transform: scale(${({scale})=>scale});
    }
`;