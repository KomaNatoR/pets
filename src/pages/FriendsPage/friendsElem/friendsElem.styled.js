import styled from "@emotion/styled";

export const FrListStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap:20px;

    list-style: none;
    padding: 0;

    li {
        margin-left: auto;
        margin-right: auto;
    }
`;

export const FrItemStyled = styled.div`
    width: calc(280px - 24px);
    // height: calc(240px - 32px);
    padding: 16px 12px;

    background: ${({ theme }) => theme.colors.pureWhite};
    box-shadow: ${({ theme }) => theme.shadows.small};
    border-radius: 40px;

    h3 {
        margin: 0;
        margin-bottom: 16px;

        font-size: 20px;
        line-height: calc(27 / 20);

        color: ${({ theme }) => theme.colors.blue};
    }
    > div {
        display: flex;

        img {
            width: 100px;
            height: 68px;
            margin-right: 12px;

            object-fit: cover;
            background: #888888;
        }
        > div {
            display: flex;
            flex-direction: column;
            gap: 12px;

            p {
                margin: 0;
                text-align: left;
                font-size: 12px;
                line-height: calc(16 / 12);
                color: ${({ theme }) => theme.colors.black};
            }
            p:first-of-type {
                font-weight: 600;
                color: ${({ theme }) => theme.colors.pureBlack};
            }
            p:last-of-type {
                font-weight: 400;
            }
        }
    }
    
@media (min-width: 768px) {
    width: calc(336px - 24px);
    min-height: calc(275px - 32px);
    height: calc(100% - 32px);

    > div {
        img {
            width: 124px;
            height: 88px;
        }
        > div {
            p {
                font-size: 14px;
                line-height: calc(19 / 14);
            }
        }
    }
}
    
@media (min-width: 1280px) {
    width: calc(395px - 24px);
    min-height: calc(288px - 32px);

    > div {
        img {
            width: 146px;
            height: 104px;
        }
        > div {
            p {
                font-size: 16px;
                line-height: calc(22 / 16);
            }
        }
    }
}
`;


// export const FriendsStyled = styled.div`