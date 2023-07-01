import MediaQuery from "react-responsive";
import { toast } from 'react-toastify';

import { NotAddStyled } from "./noticesElem.styled";
import Icon from "../../../components/shares/Icon/Icon";
import Button from "../../../components/shares/Button/Button";

const NoticesAdd = () => {

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
        <NotAddStyled>
            <MediaQuery maxWidth={767}>
                <button type="button" className="add_butt_mob">
                    <Icon id="plus" colorStroke="white" />
                    <p>Add pet</p>
                </button>
            </MediaQuery>

            <MediaQuery minWidth={768}>
                <Button onClick={toastHeart} buttonView="blue" width="130px">
                    {"Add Pet"}
                    <Icon id="plus" colorStroke="white" style={{marginLeft: "8px"}} />
                </Button>
            </MediaQuery>
        </NotAddStyled>
    )
};


export default NoticesAdd;