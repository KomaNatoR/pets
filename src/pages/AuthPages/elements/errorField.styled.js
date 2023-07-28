import styled from "@emotion/styled";

export const ErrField = styled.div`
    position: absolute;
    left: 16px;

    font-size: 12px;

    color: ${({ theme }) => theme.colors.red};
`;