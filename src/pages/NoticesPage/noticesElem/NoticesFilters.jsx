import MediaQuery from "react-responsive";

import { NotFilterStyled } from "./noticesElem.styled";
import Icon from "../../../components/shares/Icon/Icon";
import Button from "../../../components/shares/Button/Button";


const NoticesFilters = () => {
    return (
        <NotFilterStyled>
            <MediaQuery maxWidth={767}>
                <button type="button" className="filter_butt_mob">
                    <Icon id="filter"/>
                </button>
            </MediaQuery>

            <MediaQuery minWidth={768}>
                <Button>
                    {"Filter"}
                    <Icon id="filter" style={{marginLeft: "8px"}} />
                </Button>
            </MediaQuery>
        </NotFilterStyled>
    )
};


export default NoticesFilters;