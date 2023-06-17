import { Link } from "react-router-dom";
import { useContext } from "react";
import {ModalContext} from "../../../../shares/Modal/utils/ModalProvider";

import { AuthNavStyled } from "./authNav.styled";
import Button from "../../../../shares/Button/Button";
import { ReactComponent as Paw } from '../../../../../img/icons/paw.svg';

const AuthNav = (props) => {
    const { close } = useContext(ModalContext);

    return (
        <AuthNavStyled>
            <Link to="/login">
                <Button className="two" onClick={close} buttonView="yellow">
                    {"Log IN"}
                    <Paw/>
                </Button>
            </Link>
            <Link to="/registration">
                <Button className="three" onClick={close} buttonView="yellow">Registration</Button>
            </Link>
        </AuthNavStyled>
    )
};


export default AuthNav;