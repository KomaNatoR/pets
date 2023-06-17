import styled from "@emotion/styled";

import bg_mobile from "../../img/bg/MainPage/paws/bg_mob_paws_original.png";
import bg_mobile_2x from "../../img/bg/MainPage/paws/bg_mob_paws_2x_original.png";
import bg_tab from "../../img/bg/MainPage/paws/bg_tab_paws_original.png";
import bg_tab_2x from "../../img/bg/MainPage/paws/bg_tab_paws_2x_original.png";
import bg_desc from "../../img/bg/MainPage/paws/bg_desc_paws_original.png";
import bg_desc_2x from "../../img/bg/MainPage/paws/bg_desc_paws_2x_original.png";



export const Container = styled.div`
    padding: 20px 20px 0 20px;
    font-family: 'Manrope', 'Segoe UI';

    color: ${({theme})=>theme.colors.black};
    background-color: ${({theme})=>theme.colors.white};
    background-image: url(${bg_mobile});
    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image:
        url(${bg_mobile_2x});
    }

    @media (min-width: 768px) {
        padding: 24px 32px 0 32px;

        background-image: url(${bg_tab});
        @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image:
            url(${bg_tab_2x});
        }
    }

    @media (min-width: 1280px) {
        padding: 20px 16px 0 16px;

        background-image: url(${bg_desc});
        @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image:
            url(${bg_desc_2x});
        }
    }
`;