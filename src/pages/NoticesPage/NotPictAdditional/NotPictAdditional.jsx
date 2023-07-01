import { toast } from 'react-toastify';

import { TypeStyled, HeartStyled, DeleteStyled, InformListStyled } from "./notPictAdditional.styled";
import Icon from "../../../components/shares/Icon/Icon";


const token = true;
const NotPictAdditional = ({ itemData }) => {
    const { category, location, birthday, sex } = itemData;

    const age = () => {
        const birthDate = new Date(birthday);
        const currentDate = new Date();
        const ageMonth = (currentDate.getFullYear() - birthDate.getFullYear()) * 12 + (currentDate.getMonth() - birthDate.getMonth());
        const ageYear = Math.round(ageMonth / 12);

        if (ageYear < 1) return ageMonth === 1 ? `${ageMonth} month` : `${ageMonth} months`;
        if (ageYear === 1) return "1 year";
        if (ageYear > 1) return `${ageYear} years`;
    };

    const toastHeart = () => {
        toast.info('Only after login!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <>
            <TypeStyled>{category}</TypeStyled>
            <HeartStyled onClick={toastHeart} type="button">
                <Icon id="heart" />
            </HeartStyled>
            {token && <DeleteStyled onClick={toastHeart}>
                <Icon id="trash_bin" />
            </DeleteStyled>}

            <InformListStyled>
                <li>
                    <Icon id="location" />
                    <p>{location}</p>
                </li>
                <li>
                    <Icon id="clock" />
                    <p>{age()}</p>
                </li>
                <li>
                    {sex === "male" ? <Icon id="male" /> : <Icon id="female" />}
                    <p>{sex}</p>
                </li>
            </InformListStyled>
        </>
    )
};


export default NotPictAdditional;