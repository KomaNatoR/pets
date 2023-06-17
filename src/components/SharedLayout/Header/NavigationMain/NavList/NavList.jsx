import { NavLink } from "react-router-dom";
import { useContext } from "react";
import {ModalContext} from "../../../../shares/Modal/utils/ModalProvider";

import navListData from "../../../../../data/headerNavList.json";
import { NavListStyled } from "./navList.styled";


const NavList = () => {
    const { close } = useContext(ModalContext);

    const navList = navListData.map(({id, name, path, className}) => (
        <NavLink className={className}  onClick={close} key={id} to={path}>{name}</NavLink>
    ));


    return (
        <NavListStyled>
            {navList}
        </NavListStyled>
    )
};


export default NavList;