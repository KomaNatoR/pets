import { format } from 'date-fns'

import { NewsItemStyled } from "./newsList.styled";
import Title from "../../../components/shares/Title/Title";


const NewsCard = ({ _id, imgUrl, title, text, date, url }) => {
    const needDateView = format(Date.parse( date ), 'dd/MM/yyyy');

    return (
        <NewsItemStyled>
            <img src={imgUrl} alt="" />
            <div className="first_child">
                <Title titleStyle="h3_main_card">{title}</Title>
                <p>{text}</p>

                <div className="last_child">
                    <p>{needDateView}</p>
                    <a href={url}  target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            </div>
        </NewsItemStyled>
    )
    
};


export default NewsCard;