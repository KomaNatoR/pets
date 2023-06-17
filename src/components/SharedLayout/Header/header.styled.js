import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg > path {
        stroke: ${({theme})=>theme.colors.yellow};
    }
    a {
        text-decoration: none;
    }

@media (min-width: 768px) {
    min-height: 44px;
}
@media (min-width: 1280px) {
    // justify-content: flex-start;
    // gap: 160px;
    width: 1280px;
    min-height: 48px;
    margin-left: auto;
    margin-right: auto;
}
`;