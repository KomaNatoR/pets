import MediaQuery from "react-responsive";
import { useContext } from 'react';
import {ModalContext} from "../../../shares/Modal/utils/ModalProvider";

import { NavMainStyled } from "./navigationMain.styled";
import NavList from "./NavList/NavList";
import AuthNav from "./AuthNav/AuthNav";
import { ReactComponent as MenuBurgerYellowSvg } from '../../../../img/icons/menu_burger.svg';

const NavigationMain = () => {
    const { toggleContext } = useContext(ModalContext);
    
    return (
        <NavMainStyled>

            <MediaQuery minWidth={1280}>
                <NavList/>
            </MediaQuery>
            <MediaQuery minWidth={768}>
                <AuthNav/>
            </MediaQuery>

            <MediaQuery maxWidth={1279}>
                <MenuBurgerYellowSvg onClick={toggleContext} width="24" height="24"/>
            </MediaQuery>
            
        </NavMainStyled>
    )
};


export default NavigationMain;