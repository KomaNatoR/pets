import styled from "@emotion/styled";

export const NoticesStyled = styled.div`
    min-height: calc(100vh - 20px - 25px - 40px);
    padding-top: 40px;
    text-align: center;

    font-weight: 500;
    font-size: 14px;
    line-height: calc(19 / 14);


    h2 {
        // margin-top: 40px;
        margin-bottom: 24px;
    }
    .pet_navigate {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        margin-bottom: 24px;
    }

@media (min-width: 768px) {
    
    .pet_navigate {
        width: calc(768px - 32px - 32px);
        margin-left: auto;
        margin-right: auto;

        div {
            display: flex;
            gap: 12px;
        }
    }
}

@media (min-width: 1280px) {
    
    .pet_navigate {
        width: calc(1280px - 16px - 16px);
    }
}
`;