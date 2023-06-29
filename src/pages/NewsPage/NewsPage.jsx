import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";


import { getNews } from "../../API/Api";
import { NewsStyled } from "./newsPage.styled";
import Title from "../../components/shares/Title/Title";
import Search from "../../components/shares/Search/Search";
import NewsList from "./newsCompons/NewsList";
import Pagin from "../../components/shares/Pagin/Pagin";


const NewsPage = () => {
    const [searchParams] = useSearchParams();
    const searchLine = searchParams.get("search") ?? "";
    const [keyWord, setKeyWord] = useState(searchLine);
    const [newsState, setNewsState] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    // console.log("NewsPage|-->");
    

    useEffect(() => {

        getNews({ page: currentPage, search: keyWord }).then((data) => setNewsState(data));
    }, [currentPage, keyWord]);
    const totalNews = newsState ? newsState.total : 0;


    return (
        <NewsStyled>
            <Title>News</Title>
            <Search setKeyWord={setKeyWord} setCurrentPage={setCurrentPage} />
            <NewsList searchData={newsState} keyWord={keyWord} />
            {totalNews > 6 &&
                <Pagin keyWord={keyWord} setCurrentPage={setCurrentPage} totalCount={totalNews} elementsPerPage={6} />
            }
        </NewsStyled>
    )
};


export default NewsPage;