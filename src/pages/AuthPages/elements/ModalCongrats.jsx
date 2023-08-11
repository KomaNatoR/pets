import { useLocation } from 'react-router-dom';

import { CongratsStyled } from "./elements.styled";
import Title from "components/shares/Title/Title";
import Button from "components/shares/Button/Button";
import Icon from "components/shares/Icon/Icon";

import Modal from "components/shares/Modal/Modal";
import { useToggleModal } from "components/shares/Modal/utils/useToggleModal";


const ModalCongrats = () => {
    const { isOpen, close } = useToggleModal(true);
    const { state } = useLocation();

    
    if (!state) return;
    return (
        <>
            {state.pathname === "/register" && isOpen &&
                <Modal customStyles="custom_auth">
                    <CongratsStyled>
                        <Button onClick={close} className="btn_close" buttonView="close">
                            <Icon id="cross_big" colorStroke="blue" />
                        </Button>

                        <Title titleStyle="h2_auth">Congrats!</Title>
                        <p>Youre registration is success</p>

                        <Button onClick={close} buttonView="blue">
                            {"Go to profile"}
                            <Icon id="paw" />
                        </Button>
                    </CongratsStyled>
                </Modal>
            }
        </>
    )
};


export default ModalCongrats;