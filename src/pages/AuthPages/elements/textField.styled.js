import styled from "@emotion/styled";

export const TextFieldStyled = styled.div`
    position: relative;

    color: ${({ theme }) => theme.colors.red};

    svg {
        position: absolute;
        top: 12px;
        right: 12px;
    }
`;