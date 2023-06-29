// import { useEffect } from "react";
// import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { SearchStyled, IconsBoxStyled } from "./search.styled";
import Icon from "../Icon/Icon";


// const initialValue = { search: "" };
const Search = ({ setKeyWord, setCurrentPage }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log("Search|-->");

    const searchLine = searchParams.get("search") ?? "";     // Якщо нема записує порожню строку в Інпут!
    // useEffect(() => {                                        // Завантажується один раз і зчитує дані строки!
    //     if (searchLine === "") return;
        
    //     setSearchParams({search:searchLine});
    // }, [searchLine, setSearchParams]);

    const onInputChange = (e) => {
        const { value } = e.target;
        const inputData = value !== "" ? { search: value } : {};// Якщо порожня строка очищає строку!
        setSearchParams(inputData);
    }
    const onSearchClick = () => {
        const searchLineData = searchParams.get("search");
        setKeyWord(searchLineData || "");
        setCurrentPage(1);
    }
    const onCrossClick = () => {
        setSearchParams({});
    }


    return (
        <SearchStyled>
            <input onChange={onInputChange} value={searchLine} type="text" placeholder="Search" />

            <IconsBoxStyled>
                <Icon onClick={onSearchClick} id="search" colorFill="blue" />
                {searchParams.get("search") &&
                    <Icon onClick={onCrossClick} id="cross_big" colorStroke="yellow" colorFill="white" />
                }
            </IconsBoxStyled>
        </SearchStyled>
    )
};


export default Search;