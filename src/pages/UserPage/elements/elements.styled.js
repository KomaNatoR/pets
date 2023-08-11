import styled from "@emotion/styled";


export const InputStyled = styled.div`
position: relative;

    display: flex;
    justify-content: space-between;

    input {
        padding: 6px 12px;
        // background: 
        border: 1px solid ${({ theme }) => theme.colors.blue};
        border-radius: 40px;
    }
    svg {
        position: absolute;
        right: 12px;
    }
`;