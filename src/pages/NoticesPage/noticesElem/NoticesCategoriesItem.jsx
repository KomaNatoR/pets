import { NotItemStyled } from "./noticesElem.styled";
import NotPictAdditional from "../NotPictAdditional/NotPictAdditional";
import Title from "../../../components/shares/Title/Title";
import Button from "../../../components/shares/Button/Button";

import Modal from "../../../components/shares/Modal/Modal";
import { useToggleModal } from "../../../components/shares/Modal/utils/useToggleModal";
import NotModalCard from "../NotModalCard/NotModalCard";

const NoticesCategoriesItem = ({ itemData }) => {
    const { _id, photo, title, name } = itemData;
    const { isOpen, toggle } = useToggleModal(false);

    return (
        <NotItemStyled>

            <div className="not_img_div">
                <NotPictAdditional itemData={itemData} />
                <img src={photo} alt={name} />
            </div>

            <div className="not_bottom_div">
                <Title titleStyle="h3_main_card">
                    {title}
                </Title>

                <Button onClick={toggle} width="248px">
                    {"Learn more"}
                </Button>
            </div>

            {isOpen &&
                <Modal toggleModal={toggle} customStyles="custom">
                    <NotModalCard toggleModal={toggle} itemData={itemData} />
                </Modal>
            }
        </NotItemStyled>
    )
};


export default NoticesCategoriesItem;