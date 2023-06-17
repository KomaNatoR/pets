import MediaQuery from "react-responsive";

import { BurgerMainStyled } from "./burgerMain.styled";
import NavList from "../Header/NavigationMain/NavList/NavList";
import AuthNav from "../Header/NavigationMain/AuthNav/AuthNav";

const BurgerMain = () => {

    return (
        <BurgerMainStyled>

            <MediaQuery maxWidth={767}>
                <AuthNav/>
            </MediaQuery>
            <NavList/>
            
        </BurgerMainStyled>
    )
};


export default BurgerMain;