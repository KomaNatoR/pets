import { useState, useEffect } from "react";
import { useSearchParams, Outlet } from "react-router-dom";
import MediaQuery from "react-responsive";

import { useDispatch } from "react-redux";
import { setKeyWord as setNoticeKeyWord } from "./Redux/search/noticSearch_slice";

import { NoticesStyled } from "./noticesPage.styled";
import Title from "../../components/shares/Title/Title";
import Search from "../../components/shares/Search/Search";
import NoticesCategoriesNav from "./noticesElem/NoticesCategoriesNav";
import NoticesFilters from "./noticesElem/NoticesFilters";
import NoticesAdd from "./noticesElem/NoticesAdd";

const NoticesPage = () => {
    const [searchParams] = useSearchParams();
    const searchLine = searchParams.get("search") ?? "";
    const [keyWord, setKeyWord] = useState(searchLine);
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    // console.log("NoticesPage");
    // console.log("keyWord|-->", keyWord);

    useEffect(() => {
        dispatch(setNoticeKeyWord({ keyWord, currentPage }));
    }, [currentPage, dispatch, keyWord]);


    return (
        <NoticesStyled>
            <Title>Find your favorite pet</Title>
            <Search
                setKeyWord={setKeyWord}
                setCurrentPage={setCurrentPage}
            />

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