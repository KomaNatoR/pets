import styled from "@emotion/styled";

import bg_mobile_pets from "../../img/bg/MainPage/pets/bg_mob_pets_original.png";
import bg_mobile_pets_2x from "../../img/bg/MainPage/pets/bg_mob_pets_2x_original.png";
import bg_tab_pets from "../../img/bg/MainPage/pets/bg_tab_pets_original.png";
import bg_tab_pets_2x from "../../img/bg/MainPage/pets/bg_tab_pets_2x_original.png";
import bg_desc_pets from "../../img/bg/MainPage/pets/bg_desc_pets_original.png";
import bg_desc_pets_2x from "../../img/bg/MainPage/pets/bg_desc_pets_2x_original.png";


export const MainStyled = styled.div`
    height: calc(100vh - 60px - 45px);
    min-height: calc(600px - 60px - 45px);
    padding-top: 60px;

    div {position: absolute;}
    h1 {
        // background: red;
    }
    .bg_div {
        position: absolute;
        top: 216px;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        min-height: 384px;

        background-image: url(${bg_mobile_pets});
        background-repeat:no-repeat;
        background-position: 58% -54px;
        background-size: 475px 457px;
        @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image:
            url(${bg_mobile_pets_2x});
        }
    }

@media (min-width: 768px) {
    height: calc(100vh - 60px - 45px - 43px);
    min-height: calc(768px - 60px - 45px - 43px);
    padding-top: 80px;
        
    .bg_div {
        top: 375px;
        // min-height: 684px;

        background-image:url(${bg_tab_pets});
        background-position: 46% -112px;
        background-size: 986px 982px;
        @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image:
            url(${bg_tab_pets_2x});
        } 
    } 
}
@media (min-width: 1280px) {
    // height: calc(100vh - 20px - 48px);
    min-height: calc(100vh - 68px);
    max-width:1280px;
    // padding-top: 188px;
    padding: 0;
    margin-right: auto;
    margin-left: auto;

    h1 {
        position: absolute;
        top: 256px;
        z-index: 2;
        width: 505px;
    }
    .bg_div {
        top: 100px;
        left:322px;
        min-height: calc(100vh - 100px);

        // background-color: red;
        background-image:url(${bg_desc_pets});
        background-position: 50% -104px;
        background-size: 954px 975px;
        @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image:
            url(${bg_desc_pets_2x});
        }
    }
}
`;