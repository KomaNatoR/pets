import styled from "@emotion/styled";

export const TitleOneStyles = styled.h1`
    margin: 0;

    @media (min-width: 768px) {
        font-size: 68px;
        line-height: calc(100 / 68);
    }

    @media (min-width: 1280px) {
        font-weight: 800;
        line-height: 130%;
    }
`;

export const TitleTwoStyles = styled.h2`
    margin: 0;

    // font-weight: 700; -
    // font-size: 24px; -
    // line-height: 33px -

@media (min-width: 768px) {
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
}
@media (min-width: 1280px) {}
`;

export const TitleTwoMainStyles = styled.h2`
    margin: 0;

    // font-weight: 700; -
    // font-size: 24px; -
    // line-height: 33px; -

@media (min-width: 768px) {
    // font-weight: 700; -
    font-size: 48px;
    line-height: calc(66 / 48);
}
@media (min-width: 1280px) {
    // font-weight: 700;
    // font-size: 48px;
    // line-height: 66px;
}
`;

export const TitleTwoAuthStyles = styled.h2`
    margin: 0;

    font-weight: 500;
    // font-size: 24px; -
    // line-height: 33px; -

@media (min-width: 768px) {
    // font-weight: 500;
    font-size: 36px;
    line-height: 49px;
}
@media (min-width: 1280px) {
    // font-weight: 500;
    // font-size: 36px;
    // line-height: 49px;
    letter-spacing: 0.04em;
}
`;

export const TitleThreeUserStyles = styled.h3`
    margin: 0;

    font-weight: 500;
    font-size: 20px;
    line-height: calc(27 / 20);

@media (min-width: 768px) {
    // font-weight: 500;
    font-size: 28px;
    line-height: calc(38 / 28);
}
@media (min-width: 1280px) {
    // font-weight: 500;
    // font-size: 28px;
    // line-height: 38px;
}
`;

export const TitleThreeCardStyles = styled.h3`
    margin: 0;
    text-align: left;

    font-size: 24px; 
    letter-spacing: -0.01em;

@media (min-width: 768px) {
}
@media (min-width: 1280px) {
}
`;