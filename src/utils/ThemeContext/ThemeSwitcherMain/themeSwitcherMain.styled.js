import styled from "@emotion/styled";

export const SwitcherMainStyled = styled.p`
    position: absolute;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0;
    cursor: pointer;

    span {font-weight: 600;}
    
@media (min-width: 768px) {
    top: 80px;
    right: 32px;
}
@media (min-width: 1280px) {

    @keyframes sunMoving {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes moonMoving {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.25);
        }
        100% {
            transform: scale(1);
        }
    }

    :hover, :focus {
        svg {
            animation: ${({ isLight }) => isLight ? "moonMoving" : "sunMoving"} 2000ms linear infinite;
        }
    }
}
`;