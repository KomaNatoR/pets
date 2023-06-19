import { useState, useEffect } from "react";

import { getFriends } from "../../../API/Api";
import { FrListStyled } from "./friendsElem.styled";
import FriendsItem from "./FriendsItem";
import Loader from "components/shares/Loader/Loader";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {

        getFriends().then((data) => setFriends(data.friends)).catch(err => setFriends([]));
    }, []);

    const frList = friends.map(it => it &&
        <li key={it._id}>
            <FriendsItem it={it} />
        </li>
    );
    // console.log(frList);
    

    return (
        <FrListStyled>
            {frList.length === 0 ? <Loader /> : frList}
        </FrListStyled>
    )
};


export default FriendsList;