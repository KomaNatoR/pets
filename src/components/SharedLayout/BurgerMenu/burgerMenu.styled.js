import styled from "@emotion/styled";

export const BurgerMenuStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    a {
        text-decoration: none;
    }
    
    @keyframes openModal {
        0% {
            height: 0vh;
            // min-height:0;
        }
        60% {
            height: 0vh;
            // min-height:0;
        }
        100% {
            height: 100vh;
            // min-height:500px;
        }
    }
    animation-name: openModal;
    animation-duration: 400ms;
    animation-timing-function: linear;

    .logo_link {
        position: absolute;
        top: 20px;
        left: 20px;
        
        @keyframes dropHeader {
            0% {
                // top: -22px;
                // opacity: 0;
                transform: rotateX(90deg);
            }
            80% {
                // top: -22px;
                // opacity: 0;
                transform: rotateX(90deg);
            }
            100% {
                // top: 20px;
                // opacity: 1;
                transform: rotateX(0deg);
            }
        }
        animation-name: dropHeader;
        animation-duration: 800ms;
        animation-timing-function: linear;
    }
    .btn_close {
        position: absolute;
        top: 20px;
        right: 20px;
        
        @keyframes opacityCross {
            0% {
                opacity: 0;
            }
            95% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        animation-name: opacityCross;
        animation-duration: 1400ms;
        animation-timing-function: linear;
    }    
@media (min-width: 768px) {
    .logo_link {
        top: 32px;
        left: 32px;
    }
    .btn_close {
        top: 33px;
        right: 32px;
    }
}
`;