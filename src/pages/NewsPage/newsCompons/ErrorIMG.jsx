import { ErrorImgStyled } from "./newsList.styled";
import Title from "../../../components/shares/Title/Title";
import img from "../../../img/bg/errorPage/404_mob_origin.png";

const ErrorIMG = ({searchData}) => {
    return (
        <ErrorImgStyled>
            <Title titleStyle="h2_404">Sorry "{searchData}" news not found!</Title>
            <img src={img} alt="404" />
        </ErrorImgStyled>
    )
};


export default ErrorIMG;