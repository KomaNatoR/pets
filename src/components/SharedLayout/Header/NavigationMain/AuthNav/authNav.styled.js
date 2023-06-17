import styled from "@emotion/styled";

export const AuthNavStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:12px;
    width: 260px;
    margin-top: 40px;
    margin-bottom: 40px;
    // height: 100px;

    button {
        gap:8px;
        min-width: 165px;
        min-height: 44px;

        :hover,:focus {
            svg path {
                fill: ${({theme})=>theme.colors.white};
            }
        }
    }
    svg path {
        fill: ${({theme})=>theme.colors.yellow};
    }

    @keyframes rotateXItems {
        0% {
            transform: rotateX(90deg);
        }
        80% {
            transform: rotateX(90deg);
        }
        100% {
            transform: rotateX(0deg);
        }
    }
    .two {
        animation-name: rotateXItems;
        animation-duration: 700ms;
        animation-timing-function: linear;
    }
    .three {
        animation-name: rotateXItems;
        animation-duration: 800ms;
        animation-timing-function: linear;
    }

@media (min-width: 768px) {
    flex-direction: row;
    width: auto;
    // height: auto;
    margin-top: auto;
    margin-bottom: auto;
}
`;