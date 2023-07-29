import MediaQuery from 'react-responsive';
import { useContext } from 'react';
import { ModalContext } from '../../shares/Modal/utils/ModalProvider';
import Modal from "../../shares/Modal/Modal";

import Logo from "./Logo/Logo";
import { HeaderStyled } from "./header.styled";
import NavigationMain from "./NavigationMain/NavigationMain";
// import ThemeSwitcher from '../../../utils/ThemeContext/ThemeSwitcher/ThemeSwitcher';
import ThemeSwitcherMain from '../../../utils/ThemeContext/ThemeSwitcherMain/ThemeSwitcherMain';
import {ToTopButton, ToDownButton} from '../../shares/ScrollButtons';

import BurgerMenu from "../BurgerMenu/BurgerMenu";


const Header = () => {
    const { isOpenContext, toggleContext } = useContext(ModalContext);

    return (
        <HeaderStyled>
            <Logo />

            <NavigationMain />
            
            <MediaQuery minWidth={1280}>
                {/* <ThemeSwitcher className="" /> */}
                <ThemeSwitcherMain className="" />
            </MediaQuery>

            <ToTopButton/>
            <ToDownButton/>

            {isOpenContext &&
                <Modal toggleModal={toggleContext} customStyles="default">
                    <BurgerMenu onClick={toggleContext} />
                </Modal>
            }
        </HeaderStyled>
    )
};


export default Header;