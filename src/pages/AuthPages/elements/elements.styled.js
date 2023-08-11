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

        color: ${({ theme }) => theme.colors.grayInput};
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
box-sizing: border-box;
    position: relative;

    display: flex;
    flex-direction: column;
    width: 280px;
    height: 288px;
    padding: 60px 16px;

    border-radius: 20px;

    p {
        margin-top: 24px;
        margin-bottom: 40px;
    }
    .btn_close {
        position: absolute;
        top: 20px;
        right: 20px;
        
        
        :hover, :focus {
            transform: scale(1.3) rotateZ(90deg);
        }
    }  
`;