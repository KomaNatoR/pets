import styled from "@emotion/styled";
import { Link } from "react-router-dom";


export const LinkLogoStyles = styled(Link)`
    svg {
        width: 119px;
        height: 20px;
        fill: ${({ theme }) => theme.logo.black};
    }
    img {
        width: 119px;
        height: 20px;
    }

    
    @media (min-width: 767px) {
        svg {
            width: 162px;
            height: 28px;
        }
        img {
            width: 162px;
            height: 28px;
        }
    }
`;