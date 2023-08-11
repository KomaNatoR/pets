import { Link } from "react-router-dom";

// import { LoginPageStyled } from "./loginPage.styled";
import AuthBox from "../AuthBox";


const LoginPage = () => {
    return (
        <AuthBox forWhat="Login">
            <p className="auth_bottom_text">
                {"Don't have an account?"}
                <Link to="/register"> Register</Link>
            </p>
        </AuthBox>
    )
};


export default LoginPage;