import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MediaQuery from "react-responsive";

import { useSelector, useDispatch } from "react-redux";
import { fetchNotices, fetchNoticesSearch } from "../Redux/notices/notices_operations";

import { NotListStyled } from "./noticesElem.styled";
import NoticesAdd from "./NoticesAdd";
import NoticesCategoriesItem from "./NoticesCategoriesItem";
import Pagin from "components/shares/Pagin/Pagin";
import Loader from "components/shares/Loader/Loader";


const NoticesCategoriesList = () => {
    const [paginPage, setPaginPage] = useState(1);

    const { categoryName } = useParams();
    const dispatch = useDispatch();
    const { notices, total } = useSelector(({ notices }) => notices.items);
    const { keyWord } = useSelector((state) => state.noticesSearch);
    // currentPage

    useEffect(() => {
        if (keyWord !== "") return;

        dispatch(fetchNotices({ categorie: categoryName, page: paginPage }));
    }, [categoryName, dispatch, keyWord, paginPage]);
    useEffect(() => {
        if (keyWord === "") return;

        dispatch(fetchNoticesSearch({ categorie: categoryName, page: paginPage, search: keyWord }));
    }, [categoryName, dispatch, keyWord, paginPage]);
    // console.log("notices|-->",notices);


    const notItem = notices && notices.map(it => it &&
        <li key={it._id}>
            <NoticesCategoriesItem itemData={it} />
        </li>
    );
    const notList =
        <ul className="not_list_ul">
            {notItem}
        </ul>
        ;
    const totalCard = total ? total : 0;


    return (
        <NotListStyled>
            <MediaQuery maxWidth={767}>
                <NoticesAdd />
            </MediaQuery>

            {notices ? notList : <Loader />}

            {totalCard > 12 &&
                <Pagin setCurrentPage={setPaginPage} totalCount={totalCard} elementsPerPage={12} />
            }
        </NotListStyled>
    )
};


export default NoticesCategoriesList;