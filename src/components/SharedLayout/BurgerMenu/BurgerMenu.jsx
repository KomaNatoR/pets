import ThemeSwitcher from '../../../utils/ThemeContext/ThemeSwitcher/ThemeSwitcher';

import Logo from "../Header/Logo/Logo";
import { BurgerMenuStyled } from "./burgerMenu.styled";
import Button from "../../shares/Button/Button";
import Icon from '../../shares/Icon/Icon';
// import { ReactComponent as MenuCross } from '../../../img/icons/cross_big.svg';
import BurgerMain from "./BurgerMain";

const BurgerMenu = (props) => {

    return (
        <BurgerMenuStyled>

            <Logo className="logo_link" {...props} />
            <Button {...props} className="btn_close" buttonView="close">
                <Icon id="cross_big" colorStroke="yellow"/>
                {/* <MenuCross  width="24" height="24"/> */}
            </Button>
            <BurgerMain />
            
            <ThemeSwitcher />
            
        </BurgerMenuStyled>
    )
};


export default BurgerMenu;