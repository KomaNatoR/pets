import { useState } from "react";

import { CongratsStyled } from "./elements.styled";
import Modal from "components/shares/Modal/Modal";
import Title from "components/shares/Title/Title";
import Button from "components/shares/Button/Button";
import Icon from "components/shares/Icon/Icon";


const ModalCongrats = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            {isOpen &&
                <Modal>
                    <CongratsStyled>
                        <Button onClick={()=>setIsOpen(false)} buttonView="close">
                            <Icon id="cross_big" colorStroke="blue" />
                        </Button>

                        <Title titleStyle="h2_auth">Congrats!</Title>
                        <p>Youre registration is success</p>

                        <Button buttonView="blue">
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