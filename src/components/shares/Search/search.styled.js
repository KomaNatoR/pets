import styled from "@emotion/styled";

export const SearchStyled = styled.div`
    position: relative;
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;

    input {
        width: calc(100vw - 40px - 40px);
        max-width: 560px;
        height: 44px;
        padding: 0 20px;
        border: none;
        border-radius: 24px;

        color: ${({ theme }) => theme.colors.black};
        box-shadow: ${({ theme }) => theme.shadows.small};
        background: ${({ theme }) => theme.colors.pureWhite};
        
        ::placeholder {
            font-weight: 400;
            font-size: 14px;
            line-height: calc(17 / 14);
            color: #888888;
        }
    }
`;

export const IconsBoxStyled = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;

    display: flex;
    gap:5px;

    cursor: pointer;
`;