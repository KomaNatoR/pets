import { Link } from "react-router-dom";

// import { RegPageStyled } from "./regPage.styled";
import AuthBox from "../AuthBox";


const RegPage = () => {
    return (
        <AuthBox forWhat="Registration">
            <p className="auth_bottom_text">Already have an account?<Link to="/login"> Login</Link></p>
        </AuthBox>
    )
};


export default RegPage;