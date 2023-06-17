import styled from "@emotion/styled";

export const NewsListStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:44px;
    padding: 0;
    
@media (min-width: 768px) {
    gap:30px;
}
`;

export const NewsItemStyled = styled.li`
    list-style: none;

    position: relative;
    width: 280px;
    margin-top: 24px;
    padding-bottom: 48px;

    border-radius: 20px;
    background: ${({theme})=>theme.colors.pureWhite};
    box-shadow: ${({theme})=>theme.shadows.small};

    &::before {
        content: '';
        position: absolute;
        top: -20px;

        width: 280px;
        height: 8px;
        border-radius: 40px;
        background: ${({theme})=>theme.colors.gradBlue};
    }
    img {
        width: 280px;
        height: 252px;
        object-fit: cover;

        border-radius: 20px;
    }
    h3 {
        text-align: left;
        margin-bottom: 16px;
    }

    .first_child {

        padding: 16px 12px 12px 12px;
        > p {
            margin: 0;
            text-align: left;
            color: ${({theme})=>theme.colors.pureBlack};

            // font-weight: 400;
            // font-size: 16px;
            // line-height: calc(22 / 16);
        }
    }

    .last_child {
        position: absolute;
        bottom: 12px;

        display: flex;
        justify-content: space-between;
        width: 256px;
        margin-top: 16px;

        p {
            margin: 0;
            width: 80px;
            height: 22px;
            color: #888888;
        }
        a {
            width: 80px;
            height: 22px;
            text-decoration: none;
            color: ${({theme})=>theme.colors.blue};
        }
    }
    
@media (min-width: 768px) {
    width: 336px;
    
    img {
        width: 336px;
        // height: 252px;
    }
    &::before {
        width: 336px;
    }
    .last_child {
        width: 312px;
    }
}
    
@media (min-width: 1280px) {
    width: 395px;
    
    img {
        width: 395px;
        // height: 252px;
    }
    &::before {
        width: 395px;
    }
    .last_child {
        width: 371px;
    }
}
`;

export const ErrorImgStyled = styled.div`
    margin-top: 20vh;
    margin-right: auto;
    margin-left: auto;

    h2 {
        margin-bottom: 24px;
    }
`;