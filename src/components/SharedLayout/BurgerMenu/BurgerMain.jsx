import MediaQuery from "react-responsive";
import { useSelector } from "react-redux";

import { BurgerMainStyled } from "./burgerMain.styled";
import NavList from "../Header/NavigationMain/NavList/NavList";
import AuthNav from "../Header/NavigationMain/AuthNav/AuthNav";
import UserNav from "../Header/NavigationMain/UserNav/UserNav";


const BurgerMain = () => {
    const { isLogin } = useSelector(state => state.auth);

    return (
        <BurgerMainStyled>

            <MediaQuery maxWidth={767}>
                {!isLogin && <AuthNav />}
                {isLogin && <UserNav />}
            </MediaQuery>
            <NavList />
            
        </BurgerMainStyled>
    )
};


export default BurgerMain;