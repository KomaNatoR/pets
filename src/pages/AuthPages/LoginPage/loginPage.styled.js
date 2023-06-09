import styled from "@emotion/styled";

export const LoginPageStyled = styled.div`
    display:flex;
    // flex-direction:column;
    align-items: center;

    min-height: calc(100vh - 60px);

    div {
        width: 280px;
        height: 400px;
        
        text-align: center;

        border-radius: 20px;
        background: ${({ theme }) => theme.colors.pureWhite};
        box-shadow: ${({ theme }) => theme.shadows.small};
    }
`;