// import { useState, useEffect } from "react";

import { NewsListStyled } from "./newsList.styled";
import NewsCard from "./NewsCard";
import ErrorIMG from "./ErrorIMG";
import Loader from "../../../components/shares/Loader/Loader";


const NewsList = ({ searchData, keyWord }) => {
    // console.log("searchData_LIST|-->", searchData);

    const isVisible404 = searchData && searchData.news.length === 0 && keyWord !== "";
    const listItems = searchData && searchData.news.map(it => <NewsCard key={it._id} {...it} />);
    // console.log("listItems|-->", listItems);


    // if (!searchData) return <Loader />;
    // if (searchData.news.length === 0) return <ErrorIMG searchData={keyWord} />;
    // if (searchData.news.length !== 0) return {listItems};

    return (
        <NewsListStyled>
            {!searchData && <Loader />}
            {listItems}
            {isVisible404 && <ErrorIMG searchData={keyWord} />}
        </NewsListStyled>
    )
};


export default NewsList;