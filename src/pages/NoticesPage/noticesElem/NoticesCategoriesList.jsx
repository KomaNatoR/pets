import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MediaQuery from "react-responsive";

import { getNotices } from "../../../API/Api";

import { NotListStyled } from "./noticesElem.styled";
import NoticesAdd from "./NoticesAdd";
import NoticesCategoriesItem from "./NoticesCategoriesItem";
import Pagin from "components/shares/Pagin/Pagin";
import Loader from "components/shares/Loader/Loader";


const NoticesCategoriesList = () => {
    const [noticesData, setNoticesData] = useState([]);
    const [paginPage, setPaginPage] = useState(1);
    const { categoryName } = useParams();

    useEffect(() => {
        if(categoryName)

        getNotices(categoryName, { page: paginPage }).then((data) => setNoticesData(data)).catch(err => setNoticesData([]));
    }, [categoryName, paginPage]);

    const notItem = noticesData.length !==0 && noticesData.notices.map(it => it &&
        <li key={it._id}>
            <NoticesCategoriesItem itemData={it} />
        </li>
    );
    const notList =
        <ul className="not_list_ul">
            {notItem}
        </ul>
    ;
    const totalCard = noticesData.total ? noticesData.total : 0;
    // console.log(noticesData);


    return (
        <NotListStyled>
            <MediaQuery maxWidth={767}>
                <NoticesAdd />
            </MediaQuery>

            {noticesData.length === 0 ? <Loader /> : notList}

            {totalCard > 12 &&
                <Pagin setCurrentPage={setPaginPage} totalCount={totalCard} elementsPerPage={12} />
            }
        </NotListStyled>
    )
};


export default NoticesCategoriesList;