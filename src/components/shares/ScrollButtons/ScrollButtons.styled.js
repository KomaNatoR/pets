import styled from "@emotion/styled";

export const ToTopButtStyled = styled.div`
    position: fixed;
    right: 20px;
    bottom: 50px;
    z-index: 998;

    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(136, 136, 136, 0.3);

    svg {
        transform: rotateZ(180deg);
    }
`;

export const ToDownButtStyled = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 998;

    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(136, 136, 136, 0.3);

    svg {
        transform: rotateZ(360deg);
    }
`;