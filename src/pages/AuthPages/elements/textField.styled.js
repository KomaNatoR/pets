import styled from "@emotion/styled";

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
        border: 1px solid ${({ theme, hasError }) => hasError ? theme.colors.red : theme.colors.blue};
        border-radius: 40px;

        ::placeholder {
            font-size: 16px;
            color: ${({ theme }) => theme.colors.grayInput};
        }
    }
    svg {
        position: absolute;
        top: 12px;

        cursor: pointer;
    }
    #cross_big {
        right: 12px;
    }
    #eye_closed, #eye_open {
        right: 48px;
    }
@media (min-width: 768px) {
    
    input {
        width: 458px;
    }
}
`;