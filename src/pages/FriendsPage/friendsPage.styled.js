import styled from "@emotion/styled";

export const FriendsStyled = styled.div`
    min-height: calc(100vh - 20px - 25px);
    margin-left: auto;
    margin-right: auto;

    text-align: center;

    h2 {
        padding-top: 40px;
        padding-bottom: 24px;
    }
    
@media (min-width: 768px) {
    max-width: calc(768px - 32px);
}
    
@media (min-width: 1280px) {
    max-width: calc(1280px - 32px);
}
`;