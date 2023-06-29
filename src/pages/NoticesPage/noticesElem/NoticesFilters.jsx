import MediaQuery from "react-responsive";

import { NotFilterStyled } from "./noticesElem.styled";
import Icon from "../../../components/shares/Icon/Icon";
import Button from "../../../components/shares/Button/Button";


// import { getNoticesSearch } from "API/ApiNotices";
// onClick={()=>getNoticesSearch("sell",{ page: 1, limit:12, search: "c" }).then(data=>console.log(data))}

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