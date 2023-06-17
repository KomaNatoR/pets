import styled from "@emotion/styled";

export const NavListStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
    width: 260px;

    // margin-top: 40px;

    // a:first-of-type {
    //     color: red;
    // }
    a {
        color: ${({ theme }) => theme.colors.black};
        // text-transform: capitalize;
        font-weight: 500;
        font-size: 32px;
        line-height: calc(44 / 33);

        transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
        :hover, :focus {
            color:${({ theme }) => theme.colors.yellow};
        }
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
    .four {
        animation-name: rotateXItems;
        animation-duration: 900ms;
        animation-timing-function: linear;
    }
    .five {
        animation-name: rotateXItems;
        animation-duration: 1000ms;
        animation-timing-function: linear;
    }
    .six {
        animation-name: rotateXItems;
        animation-duration: 1100ms;
        animation-timing-function: linear;
    }

    
@media (min-width: 768px) {
    gap:60px;
    width: auto;

    a {
        font-size: 48px;
        line-height: calc(66 / 48);
        letter-spacing: 0.04em;
    }
}   
@media (min-width: 1280px) {
    flex-direction: row;
    gap: 40px;
    margin-top: 0px;

    a {
        font-size: 20px;
        line-height: calc(27 / 20);
        letter-spacing: 0.04em;
    }
}
`;