import styled from "@emotion/styled";
import { Form } from "formik";

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
                
                :focus {
                    outline-color: ${({ theme }) => theme.colors.yellow};
                }
            }
        }
    }
@media (min-width: 768px) {

    > div {
        width: 608px;
        height: 482px;
    }
}
`;

export const FormStyled = styled(Form)`
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
    }
    button {
        width: 256px;

        :focus {
            outline-color: ${({ theme }) => theme.colors.yellow};
        }
    }
    a {
        text-decoration: none;
    }
@media (min-width: 768px) {

    button {
        width: 458px;
    }
}
`;
//padding: 60px 75px;