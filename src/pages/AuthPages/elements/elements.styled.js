import styled from "@emotion/styled";

const fieldColor = ({theme, isError, isValidField}) => {
    if (isValidField) return theme.colors.green;
    else return isError ? theme.colors.red : theme.colors.blue;
};
// const inputTextColor = ({theme, isError, isValidField}) => {
//     if (isValidField) return theme.colors.green;
//     else return isError ? theme.colors.red : theme.colors.gray;
// };

export const TextFieldStyled = styled.div`
    position: relative;

    color: ${({ theme }) => theme.colors.red};

    input {
        box-sizing: border-box;

        width: 256px;
        height: 48px;
        padding: 0 16px;

        font-size: 16px;

        color: ${({ theme }) => theme.colors.gray};
        background: ${({ theme }) => theme.colors.whiteInput};
        border: 1px solid ${fieldColor};
        border-radius: 40px;

        ::placeholder {
            font-size: 16px;
            color: ${({ theme }) => theme.colors.grayInput};
        }
        :focus {
            outline-color: ${({ theme }) => theme.colors.yellow};
        }
    }
    > div:first-of-type {
        position: absolute;
        top: 12px;
        right: 12px;

        display: flex;
        gap: 8px;

        svg {
            cursor: pointer;
        }
    }
@media (min-width: 768px) {
    
    input {
        width: 458px;
    }
}
`;

export const ErrField = styled.div`
    position: absolute;
    left: 16px;

    font-size: 12px;

    color: ${({ theme }) => theme.colors.red};
`;

export const CongratsStyled = styled.div`
    width: 280px;
    height: 288px;
`;