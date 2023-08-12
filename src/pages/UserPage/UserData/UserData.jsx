import { useNavigate } from "react-router-dom";

import { UserDataStyled } from "./userData.styled";
import Icon from "components/shares/Icon/Icon";
import ModalCongrats from "pages/AuthPages/elements/ModalCongrats";

import { fields } from "../data";
import InputField from "../elements/InputField";


const UserData = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }

    return (
        <>
            <UserDataStyled>
                <div className="user_photo">
                    <img src="#" alt="face" />
                    <div>
                        <Icon id="camera" />
                        <p>Edit photo</p>
                    </div>
                </div>

                <div className="user_data">
                    <InputField {...fields.name} />
                    <InputField {...fields.email} />
                    <InputField {...fields.birthday} />
                    <InputField {...fields.phone} />
                    <InputField {...fields.city} />
                </div>

                <div className="user_logout">
                    <Icon id="logout" onClick={handleClick} />
                    <p>Log Out</p>
                </div>
            </UserDataStyled>

            <ModalCongrats/>
        </>
    )
};


export default UserData;