import { useState, useEffect } from "react";

import { getFriends } from "../../../API/Api";
import { FrListStyled } from "./friendsElem.styled";
import FriendsItem from "./FriendsItem";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {

        getFriends().then((data) => setFriends(data.friends)).catch(err=>setFriends([]));
    }, []);

    const frList =friends.map(it => it &&
        <li key={it._id}>
            <FriendsItem it={it} />
        </li>
    );
    

    return (
        <FrListStyled>
            {frList}
        </FrListStyled>
    )
};


export default FriendsList;