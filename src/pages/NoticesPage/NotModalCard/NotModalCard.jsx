import { toast } from 'react-toastify';

import { ModalCardStyled, ModalCardImgStyled, ModalCardDataStyled, ModalCardButtStyled } from "./notModalCard.styled";
import { TypeStyled } from "../NotPictAdditional/notPictAdditional.styled";
import Title from "../../../components/shares/Title/Title";
import Button from "../../../components/shares/Button/Button";
import Icon from "../../../components/shares/Icon/Icon";

const NotModalCard = (props) => {
    const { category, photo, breed, location, birthday, sex, title, name, owner, comments } = props.itemData;
    const { toggleModal } = props;
    // console.log("IM MODAL!!!");

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
        <ModalCardStyled>
            <Button onClick={toggleModal} className="not_card_close" buttonView="close">
                <Icon id="cross_big" className="not_card_close_svg"/>
            </Button>
            <ModalCardImgStyled>
                <TypeStyled>{category}</TypeStyled>
                <img src={photo} alt={name} />
            </ModalCardImgStyled>

            <ModalCardDataStyled>
                <Title titleStyle="h3_main_card">
                    {title}
                </Title>

                    <ul>
                        <li>
                            <p>Name:</p>
                            <p>{name}</p>
                        </li>
                        <li>
                            <p>Birthday:</p>
                            <p>{birthday}</p>
                        </li>
                        <li>
                            <p>Breed:</p>
                            <p>{breed}</p>
                        </li>
                        <li>
                            <p>Place:</p>
                            <p>{location}</p>
                        </li>
                        <li>
                            <p>The sex:</p>
                            <p>{sex}</p>
                        </li>
                        <li>
                            <p>Email:</p>
                            <p><a href={owner.email}>{owner.email}</a></p>
                        </li>
                        <li>
                            <p>Phone:</p>
                            <p><a href={owner.phone?owner.phone:"no data"}>{owner.phone?owner.phone:"no data"}</a></p>
                        </li>
                    </ul>
            </ModalCardDataStyled>

            <p className="not_modalcard_text">
                <span>Comments: </span>
                {comments}
            </p>

            <ModalCardButtStyled>
                <Button width="256px">Contact</Button>
                <Button onClick={toastHeart} buttonView="blue" width="256px">
                    {"Add to"}
                    <Icon id="heart" colorStroke="white"/>
                </Button>
            </ModalCardButtStyled>
        </ModalCardStyled>
    )
};


export default NotModalCard;