import styled from "@emotion/styled";


const colorFillChoise = ({ colorFill, theme }) => {

    switch (colorFill) {
        case "lightBlue":
            return theme.colors.lightBlue;
        case "blue":
            return theme.colors.blue;
        case "white":
            return theme.colors.white;
        case "yellow":
            return '#FFC107';
        case "red":
            return theme.colors.red;
        case "trans":
            return `transparent`;
    
        default:
            return `transparent`;
    }
};

const colorStrokeChoise = ({ colorStroke, theme }) => {

    switch (colorStroke) {
        case "blue":
            return theme.colors.blue;
        case "white":
            return theme.colors.white;
        case "yellow":
            return '#FFC107';
        case "red":
            return theme.colors.red;
    
        default:
            return theme.colors.blue;
    }
};

export const IconStyled = styled.svg`
    width: 24px;
    height: 24px;

    fill: ${colorFillChoise};
    stroke: ${colorStrokeChoise};
`;