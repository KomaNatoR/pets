import { UserNavStyled } from "./userNav.styled";
import Icon from "components/shares/Icon/Icon";

const UserNav = () => {
    return (
        <UserNavStyled>
            <Icon id="user" colorStroke="yellow" />
            <p>Name</p>
        </UserNavStyled>
    )
};


export default UserNav;