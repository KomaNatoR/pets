import styled from "@emotion/styled";

export const UserNavStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    // min-height: 180px;
    margin-top: 8px;
    margin-bottom: 148px;

    p {
        margin: 0;

        color: ${({theme})=>theme.colors.yellow};
    }
`;