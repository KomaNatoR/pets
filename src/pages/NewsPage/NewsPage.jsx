import { useState, useEffect } from "react";


import { getNews } from "../../API/Api";
import { NewsStyled } from "./newsPage.styled";
import Title from "../../components/shares/Title/Title";
import Search from "../../components/shares/Search/Search";
import NewsList from "./newsCompons/NewsList";
import Pagin from "../../components/shares/Pagin/Pagin";


const NewsPage = () => {
    const [keyWord, setKeyWord] = useState("");
    const [newsState, setNewsState] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    

    useEffect(() => {
        // --------------------------| Перевіка, щоб при введеному слові, при обнові стоінки не смикало "новини порожньої строки"!
        if (keyWord === false) return;
        // --------------------------|

        getNews({ page: currentPage, search: keyWord }).then((data) => setNewsState(data));
    }, [keyWord, currentPage]);
    const totalNews = newsState ? newsState.total : 0;


    return (
        <NewsStyled>
            <Title>News</Title>
            <Search setKeyWord={setKeyWord} setCurrentPage={setCurrentPage} />
            <NewsList searchData={newsState} keyWord={keyWord} />
            {totalNews > 6 &&
                <Pagin keyWord={keyWord} setCurrentPage={setCurrentPage} totalCount={totalNews} elementsPerPage={6} />
            }
            {/* <Pagin totalNews={totalNews} newsPerPage={16} /> */}
        </NewsStyled>
    )
};


export default NewsPage;