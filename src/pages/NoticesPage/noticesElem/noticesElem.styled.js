import styled from "@emotion/styled";

export const NotNavStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:8px;
    width: 300px;

    .active {
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.blue};
    }
    a {
        height: 35px;
        text-decoration: none;
        border-radius: 40px;
        color: ${({ theme }) => theme.colors.blue};
        background: ${({ theme }) => theme.colors.lightBlue};
    }
    button {
        height: 35px;
        padding: 8px 16px;

        font-family: inherit;
        font-weight: 500;
        font-size: 14px;
        line-height: calc(19 / 14);
        letter-spacing: 0.04em;

        border: none;
        border-radius: 40px;
        color: inherit;
        background: inherit;
        cursor: pointer;
    }

@media (min-width: 768px) {
    gap:12px;
    width: 320px;
}

@media (min-width: 1280px) {
    width: 540px;
}
`;

export const NotFilterStyled = styled.div`
    .filter_butt_mob {
        width: 40px;
        height: 40px;
        padding: 0;

        border: none;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.lightBlue};
    }

@media (min-width: 768px) {
    button {
        width: 160px;
        height: 40px;

        font-weight: 700;

        svg {
            transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        :hover, :focus {
            svg {
                transform: rotateZ(-90deg);
                stroke: ${({ theme }) => theme.colors.white};
            }
        }
    }
}
`;

export const NotAddStyled = styled.div`
    .add_butt_mob {
        position: fixed;
        left: 20px;
        top: 502px;
        z-index: 2;

        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: none;
        background: ${({ theme }) => theme.colors.gradBlue};

        svg {
            position: absolute;
            top: 20px;
            right: 28px;
            left: 28px;
        }
        p {
            position: absolute;
            bottom: 12px;
            right: 16px;
            left: 16px;

            margin: 0;
            color: ${({ theme }) => theme.colors.white};
        }
    }

@media (min-width: 768px) {
    button {
        display: flex;
        justify-content: space-between;
        width: 135px;
        height: 40px;
        padding: 8px 16px;
        
        font-weight: 700;
        
        svg {
            transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        :hover, :focus {
            display: flex;
            justify-content: space-between;
            width: 135px;
            height: 40px;
            padding: 8px 18px;
        
            font-weight: 700;

            svg {
                transform: scale(1.3);
            }
        }
    }
}
`;

export const NotListStyled = styled.div`

    .not_list_ul {
        list-style: none;
        padding: 0;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap:24px;
        
        li{display: flex;}
    }

@media (min-width: 768px) {
    width: calc(336px + 336px + 24px);
    margin-left: auto;
    margin-right: auto;

    .not_list_ul {justify-content: flex-start;}
}

@media (min-width: 1280px) {
    width: calc((288px * 4) + (32px * 3));

}
`;

export const NotItemStyled = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 280px;
    min-height: 456px;
    margin-left: auto;
    margin-right: auto;
    
    border-radius: 0px 0px 40px 40px;
    box-shadow: ${({ theme }) => theme.shadows.small};
    background: ${({ theme }) => theme.colors.pureWhite};

    .not_img_div {
        position: relative;

        img {
            width: 280px;
            height: 288px;
            
            background: lightgray;
        }
    }
    .not_bottom_div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        padding: 20px 16px 20px 16px;

        h3 {
            margin-bottom: 20px;
        }
    }

@media (min-width: 768px) {
    width: 336px;
    min-height: 456px;

    .not_img_div {
        img {
            width: 336px;
        }
    }
    .not_bottom_div {
        button {
            margin-left: auto;
            margin-right: auto;
        }
    }
}

@media (min-width: 1280px) {
    width: 288px;

    .not_img_div {
        img {
            width: 288px;
        }
    }
}
`;