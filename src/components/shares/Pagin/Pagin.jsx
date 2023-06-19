import { useEffect, useState } from "react";

import { PaginStyled } from "./pagin.styled";
import PaginButt from "./paginElements/PaginButt";
import Icon from "../Icon/Icon";


const Pagin = (props) => {
    const { totalCount, elementsPerPage, setCurrentPage, keyWord } = props;
    const [pageNumber, setPageNumber] = useState(1);
// ----------------------------------------------------------| Реагує на зміну ключового слова і скидає на першу кнопку!
    useEffect(() => {
        setPageNumber(1);
    }, [keyWord]);
// ----------------------------------------------------------| Скрол до верху !
    const scrollUp = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };
// ----------------------------------------------------------| Реакція на нажим кнопки!
    const onButtClick = (e) => {
        const buttNumber = e.target.innerText;
        if (pageNumber === buttNumber) return;
        setPageNumber(Number(buttNumber));
        setCurrentPage(buttNumber);
        scrollUp();
    }
// ----------------------------------------------------------| Обрахунок загальної кількості сторінок! 
    const PageCount = totalCount % elementsPerPage > 0 ? Math.floor(totalCount / elementsPerPage) + 1 : totalCount / elementsPerPage;
// ----------------------------------------------------------| Створення масиву з PageCount!
    const arrOfPagesNumber = [];
    for (let i = 1; i <= PageCount; i++) {
        arrOfPagesNumber.push(i);
    };
// ----------------------------------------------------------| Логіка формування видимих кнопок!
    let buttRow = [];
    if (PageCount <= 5) buttRow = arrOfPagesNumber;
    if (PageCount > 5  && pageNumber <= 3) buttRow = arrOfPagesNumber.slice(0, 5);
    if (PageCount > 5  && pageNumber > 3) buttRow = arrOfPagesNumber.slice( pageNumber - 3, pageNumber + 2);
    
    const resultButtRow = buttRow.map((it, i) => {
        let buttClass = it === pageNumber ? "current_page" : null;
        
        return <PaginButt onClick={onButtClick} key={it} buttNumber={buttClass}>{it}</PaginButt>}
    );
    // console.log(totalCount);
    // console.log(elementsPerPage);
    // console.log(keyWord);
    // console.log(Math.floor(totalCount / elementsPerPage));

    
    return (
        <PaginStyled>
            <Icon onClick={() => { setPageNumber(1); setCurrentPage(1); scrollUp(); }}  id="wing_arrow" colorFill="white"/>
                {resultButtRow}
            <Icon onClick={() => { setPageNumber(PageCount); setCurrentPage(PageCount); scrollUp(); }}  id="wing_arrow" colorFill="white"/>
        </PaginStyled>
    )
};
Pagin.defaultProps = {
    totalCount: 0,
    keyWord: "",
    elementsPerPage: 0,
};


export default Pagin;