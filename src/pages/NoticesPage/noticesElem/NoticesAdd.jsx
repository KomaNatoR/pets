import MediaQuery from "react-responsive";

import { NotAddStyled } from "./noticesElem.styled";
import Icon from "../../../components/shares/Icon/Icon";
import Button from "../../../components/shares/Button/Button";

const NoticesAdd = () => {
    return (
        <NotAddStyled>
            <MediaQuery maxWidth={767}>
                <button type="button" className="add_butt_mob">
                    <Icon id="plus" colorStroke="white" />
                    <p>Add pet</p>
                </button>
            </MediaQuery>

            <MediaQuery minWidth={768}>
                <Button buttonView="blue" width="130px">
                    {"Add Pet"}
                    <Icon id="plus" colorStroke="white" style={{marginLeft: "8px"}} />
                </Button>
            </MediaQuery>
        </NotAddStyled>
    )
};


export default NoticesAdd;