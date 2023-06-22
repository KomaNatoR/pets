import MediaQuery from "react-responsive";
import { useDispatch } from "react-redux";
import { increment } from "store/REDUX_SLICE/counter/counterSlice";

import { NotFilterStyled } from "./noticesElem.styled";
import Icon from "../../../components/shares/Icon/Icon";
import Button from "../../../components/shares/Button/Button";


const NoticesFilters = () => {
    const dispatch = useDispatch();

    return (
        <NotFilterStyled>
            <MediaQuery maxWidth={767}>
                <button type="button" className="filter_butt_mob">
                    <Icon id="filter"/>
                </button>
            </MediaQuery>

            <MediaQuery minWidth={768}>
                <Button onClick={()=>dispatch(increment(1))}>
                    {"Filter"}
                    <Icon id="filter" style={{marginLeft: "8px"}} />
                </Button>
            </MediaQuery>
        </NotFilterStyled>
    )
};


export default NoticesFilters;