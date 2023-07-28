import styled from "@emotion/styled";

export const AuthPageStyled = styled.div`
    display:flex;
    align-items: center;

    min-height: calc(100vh - 60px);

    > div {
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        align-items: center;

        width: 280px;
        // height: 400px;
        padding: 40px 12px;
        margin-left: auto;
        margin-right: auto;

        text-align: center;

        border-radius: 20px;
        background: ${({ theme }) => theme.colors.pureWhite};
        box-shadow: ${({ theme }) => theme.shadows.small};
        
        .auth_bottom_text {
            margin: 0;
            margin-top: auto;

            font-weight: 500;
            font-size: 12px;
            line-height: 1.37;
            letter-spacing: 0.04em;
            color: ${({ theme }) => theme.colors.gray};

            a {
                color: ${({ theme }) => theme.colors.blue};
            }
        }
    }
@media (min-width: 768px) {

    div {
        width: 608px;
        height: 482px;
    }
}
`;

export const FormStyled = styled.form`
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 250px;
    margin: 40px 0;

    > div {
        display: flex;
        flex-direction: column;
        gap:24px;
        margin-bottom: 40px;

        input {
            box-sizing: border-box;

            width: 256px;
            height: 48px;
            padding: 0 16px;
            color: ${({ theme }) => theme.colors.gray};
            border: 1px solid ${({ theme }) => theme.colors.blue};
            border-radius: 40px;

            ::placeholder {
                font-size: 16px;
                color: ${({ theme }) => theme.colors.gray};
            }
        }
    }
    button {
        width: 256px;
    }
`;
//padding: 60px 75px;