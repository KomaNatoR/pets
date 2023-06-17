import { useState } from "react";
import { Outlet } from "react-router-dom";
import MediaQuery from "react-responsive";

import { NoticesStyled } from "./noticesPage.styled";
import Title from "../../components/shares/Title/Title";
import Search from "../../components/shares/Search/Search";
import NoticesCategoriesNav from "./noticesElem/NoticesCategoriesNav";
import NoticesFilters from "./noticesElem/NoticesFilters";
import NoticesAdd from "./noticesElem/NoticesAdd";

const NoticesPage = () => {
    const [keyWord, setKeyWord] = useState();

    return (
        <NoticesStyled>
            <Title>Find your favorite pet</Title>
            <Search setKeyWord={setKeyWord} setCurrentPage={"setCurrentPage"} />
            <div className="pet_navigate">
                <NoticesCategoriesNav />
                <div>
                    <NoticesFilters />
                    <MediaQuery minWidth={768}>
                        <NoticesAdd />
                    </MediaQuery>
                </div>
            </div>
            <Outlet/>
        </NoticesStyled>
    )
};


export default NoticesPage;