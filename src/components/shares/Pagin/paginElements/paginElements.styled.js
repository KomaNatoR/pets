import styled from "@emotion/styled";

export const PaginButtStyled = styled.button`
    min-width: 35px;
    min-height: 35px;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
    background: ${({ theme }) => theme.colors.white};
`;