import styled from "@emotion/styled";


export const UserDataStyled = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap:20px;

    width: 280px;
    min-height: 520px;
    padding: 20px 8px;

    border-radius: 20px;
    background: ${({ theme }) => theme.colors.pureWhite};
    box-shadow: ${({ theme }) => theme.shadows.big};

    .user_photo {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            display: inline-block;
            width: 182px;
            height: 182px;

            border-radius: 40px;
            background: ${({ theme }) => theme.colors.gray};
        }
        div {
            display: flex;
            align-items: center;
            gap: 8px;
        }
    }

    .user_data {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .user_logout {
        display: flex;
        align-items: center;
        gap: 8px;

        svg {cursor: pointer;}
    }
`;