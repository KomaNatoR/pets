import styled from "@emotion/styled";

export const PaginStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    width: 280px;
    height: 40px;
    padding: 6px 0;
    margin-right: auto;
    margin-left: auto;
    border-radius: 45px;
    background: ${({ theme }) => theme.colors.pureWhite};
    box-shadow: ${({ theme }) => theme.shadows.small};
    
    .current_page {
        width: 36px;
        height: 36px;
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.blue};
    }
    svg {cursor: pointer;}
    svg:first-of-type {
        transform: rotateZ(90deg);
    }
    svg:last-of-type {
        transform: rotateZ(-90deg);
    }
`;