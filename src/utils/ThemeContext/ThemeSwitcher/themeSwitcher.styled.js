import styled from "@emotion/styled";

export const SwitcherStyled = styled.p`
    display: flex;
    position: absolute;
    bottom: 24px;
    right: auto;
    left: auto;
    margin: 0;
    cursor: pointer;

    svg path {
        fill: ${({pawColor})=>pawColor};
    }
    span {
        font-weight: 500;
        font-size: 12px;
        line-height: calc(16 / 12);
        color: ${({ theme }) => theme.colors.pureBlack};
    }
    
@media (min-width: 768px) {
    bottom: 64px;
}
@media (min-width: 1280px) {
    // flex-direction: row-reverse;
    top: 80px;
    bottom: auto;
    left: auto;
    right: 16px;
    svg {
        transform: rotateY(180deg);
    }
}
`;