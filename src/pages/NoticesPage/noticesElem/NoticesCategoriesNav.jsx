import { NavLink } from "react-router-dom";

import noticesNavData from "../data/noticesCategoriesNav.json";
import { NotNavStyled } from "./noticesElem.styled";


const token = false;
const NoticesCategoriesNav = () => {
    const navListUser = noticesNavData.map(({ id, name, path }) =>
        <NavLink key={id} to={path}>
            <button type="button">{name}</button>
        </NavLink>
    );
    const navListForAll = noticesNavData.filter(({ access }) => access === "forAll").map(({ id, name, path }) =>
        <NavLink key={id} to={path}>
            <button type="button">{name}</button>
        </NavLink>
    );
    // console.log(navListForAll);

    
    return (
        <NotNavStyled>
            {token ? navListUser : navListForAll}
        </NotNavStyled>
    )
};


export default NoticesCategoriesNav;