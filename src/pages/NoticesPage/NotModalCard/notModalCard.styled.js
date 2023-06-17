import styled from "@emotion/styled";

export const ModalCardStyled = styled.div`
    padding: 44px 12px 16px 12px;

    border-radius: 20px;
    background: ${({ theme }) => theme.colors.pureWhite};

    .not_card_close {
        position: absolute;
        top: 12px;
        right: 12px;

        // svg {border-radius: 50%;}
    }
    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
    }
    .not_modalcard_text {
        text-align: left;

        font-weight: 500;
        color: ${({ theme }) => theme.colors.pureBlack};

        span {
            font-weight: 600;
            color: ${({ theme }) => theme.colors.black};
        }
    }

@media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;

    width: 680px;
    height: 540px;
    padding: 32px 32px 24px 32px;

    .not_modalcard_text {
        font-size: 16px;
        line-height: calc(24 / 16);
        letter-spacing: 0.04em;
    }
}

@media (min-width: 1280px) {

    .not_card_close {
        :hover, :focus {
            transform: scale(1.3) rotateZ(90deg);
        }
    }
}
`;

export const ModalCardImgStyled = styled.div`
    position: relative;
    width: 240px;
    height: 240px;
    margin-left: auto;
    margin-right: auto;
    
    img {
        width: 240px;
        height: 240px;
        border-radius: 0px 0px 40px 40px;

        object-fit: cover;
        background: lightgray;
    }

@media (min-width: 768px) {
    width: 262px;
    height: 300px;
    margin-left: 0;
    margin-right: 24px;

    img {
        width: 262px;
        height: 300px;
    }
}
`;

export const ModalCardDataStyled = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        width: 200px;
        margin-top: 12px;
        color: ${({ theme }) => theme.colors.black};
    }
    ul {
        list-style: none;
        margin: 0;
        margin-top: 20px;

        display: flex;
        flex-wrap: wrap;
        gap: 11px;

        padding: 0;
        text-align: left;

        li {
            display: flex;
            
            p:first-of-type {
                width: 80px;
            }
            p:last-of-type {
                width: 160px;

                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
            }
        }
        p {
            margin: 0;
            color: ${({ theme }) => theme.colors.black};
        }
        a {
            text-decoration: none;
            color: ${({ theme }) => theme.colors.yellow};
        }
    }

@media (min-width: 768px) {
    width: 360px;

    h3 {
        width: auto;
    }
    ul {
        p {
            font-size: 16px;
            line-height: 22px;
        }
        li {
            p:first-of-type {
            }
            p:last-of-type {
                font-size: 16px;
                line-height: 22px;
            }
        }
    }
}
`;

export const ModalCardButtStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

@media (min-width: 768px) {
    flex-direction: row;
    margin-top: auto;
    margin-left: auto;

    button {
        width: 130px;
        height: 40px;
    }
}

@media (min-width: 1280px) {

    button {
        svg {
            transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
            fill 1500ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        :hover, :focus {

            svg {
                transform: scale(1.3);
                fill: ${({ theme }) => theme.colors.white};
                transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
                fill 500ms cubic-bezier(0.4, 0, 0.2, 1);
            }
        }
    }
}
`;