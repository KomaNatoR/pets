import { TypeStyled, HeartStyled, DeleteStyled, InformListStyled } from "./notPictAdditional.styled";
import Icon from "../../../components/shares/Icon/Icon";


const token = false;
const NotPictAdditional = ({ itemData }) => {
    const { category, location, birthday, sex } = itemData;

    return (
        <>
            <TypeStyled>{category}</TypeStyled>
            <HeartStyled type="button">
                <Icon id="heart"/>
            </HeartStyled>
            {token && <DeleteStyled>
                <Icon id="trash_bin"/>
            </DeleteStyled>}

            <InformListStyled>
                <li>
                    <Icon id="location"/>
                    <p>{location}</p>
                </li>
                <li>
                    <Icon id="clock"/>
                    <p>{birthday}</p>
                </li>
                <li>
                    {
                        sex === "male" ?
                        <Icon id="male" /> :
                        <Icon id="female" />
                    }
                    <p>{sex}</p>
                </li>
            </InformListStyled>
        </>
    )
};


export default NotPictAdditional;