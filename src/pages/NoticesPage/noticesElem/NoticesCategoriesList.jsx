import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MediaQuery from "react-responsive";

import { getNotices } from "../../../API/Api";

import { NotListStyled } from "./noticesElem.styled";
import NoticesAdd from "./NoticesAdd";
import NoticesCategoriesItem from "./NoticesCategoriesItem";


const NoticesCategoriesList = () => {
    const [noticesData, setNoticesData] = useState([]);
    const {categoryName} = useParams();

    useEffect(() => {

        getNotices(categoryName, { page: 1 }).then((data) => setNoticesData(data.notices)).catch(err=>setNoticesData([]));
    }, [categoryName]);

    const notList =noticesData.map(it => it &&
        <li key={it._id}>
            <NoticesCategoriesItem itemData={it} />
        </li>
    );


    return (
        <NotListStyled>
            <MediaQuery maxWidth={767}>
                <NoticesAdd/>
            </MediaQuery>

            <ul className="not_list_ul">
                {notList}
            </ul>
        </NotListStyled>
    )
};


export default NoticesCategoriesList;