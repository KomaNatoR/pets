import { UserPageStyled } from "./userPage.styled";
import UserData from "./UserData/UserData";


const UserPage = () => {
    return (
        <UserPageStyled>
            <p>My information:</p>
            
            <UserData/>
        </UserPageStyled>
    )
};


export default UserPage;