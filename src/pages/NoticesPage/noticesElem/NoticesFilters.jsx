import MediaQuery from "react-responsive";
import { toast } from 'react-toastify';

import { NotFilterStyled } from "./noticesElem.styled";
import Icon from "../../../components/shares/Icon/Icon";
import Button from "../../../components/shares/Button/Button";


// import { getNoticesSearch } from "API/ApiNotices";
// onClick={()=>getNoticesSearch("sell",{ page: 1, limit:12, search: "c" }).then(data=>console.log(data))}

const NoticesFilters = () => {

    const toastHeart = () => {
        toast.error('Sorry still not completed!', {
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
        <NotFilterStyled>
            <MediaQuery maxWidth={767}>
                <button onClick={toastHeart} type="button" className="filter_butt_mob">
                    <Icon id="filter"/>
                </button>
            </MediaQuery>

            <MediaQuery minWidth={768}>
                <Button onClick={toastHeart}>
                    {"Filter"}
                    <Icon id="filter" style={{marginLeft: "8px"}} />
                </Button>
            </MediaQuery>
        </NotFilterStyled>
    )
};


export default NoticesFilters;