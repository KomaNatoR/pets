import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { SearchStyled, IconsBoxStyled } from "./search.styled";
import Icon from "../Icon/Icon";


// const initialValue = { search: "" };
const Search = ({ setKeyWord, setCurrentPage }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {                                        // Завантажується один раз і зчитує дані строки! 
        const searchLineData = searchParams.get("search");
        setKeyWord(searchLineData || "");
    }, []);


    const searchLine = searchParams.get("search") ?? "";     // Якщо нема записує порожню строку в Інпут!
    const onInputChange = (e) => {
        const { value } = e.target;
        const inputData = value !== "" ? {search:value} : {};// Якщо порожня строка очищає строку!
        setSearchParams(inputData); 
    }
    const onSearchClick = () => {
        const searchLineData = searchParams.get("search");
        // console.log(searchLineData);
        setKeyWord(searchLineData || "");
        setCurrentPage(1);
    }
    const onCrossClick = () => {
        setSearchParams({});
        // LoadSearchData("");
    }


    return (
        <SearchStyled>
            <input onChange={onInputChange} value={searchLine} type="text" placeholder="Search" />

            <IconsBoxStyled>
                <Icon  onClick={onSearchClick} id="search" colorFill="blue" />
                {searchParams.get("search") &&
                    <Icon onClick={onCrossClick} id="cross_big" colorStroke="yellow" colorFill="white" />
                }
            </IconsBoxStyled>
        </SearchStyled>
    )
};


export default Search;