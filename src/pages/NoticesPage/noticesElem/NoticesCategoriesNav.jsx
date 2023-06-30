import { NavLink, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setKeyWord } from "../Redux/search/noticSearch_slice";

import noticesNavData from "../data/noticesCategoriesNav.json";
import { NotNavStyled } from "./noticesElem.styled";


const token = false;
const NoticesCategoriesNav = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const onHandleClick = () => {
        dispatch(setKeyWord({ keyWord: "", currentPage: 1, }));
    }

    const navListUser = noticesNavData.map(({ id, name, path }) =>
        <NavLink key={id} to={path} state={location}>
            <button onClick={onHandleClick} type="button">{name}</button>
        </NavLink>
    );
    const navListForAll = noticesNavData.filter(({ access }) => access === "forAll").map(({ id, name, path }) =>
        <NavLink key={id} to={path} state={location}>
            <button onClick={onHandleClick} type="button">{name}</button>
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