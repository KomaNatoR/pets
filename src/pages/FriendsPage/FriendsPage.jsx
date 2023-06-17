
import { FriendsStyled } from "./friendsPage.styled";
import Title from "../../components/shares/Title/Title";
import FriendsList from "./friendsElem/FriendsList";


const FriendsPage = () => {
    return (
        <FriendsStyled>
            <Title>Our friends</Title>
            <FriendsList/>
        </FriendsStyled>
    )
};


export default FriendsPage;