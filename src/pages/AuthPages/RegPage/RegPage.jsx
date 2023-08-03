import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/auth-operations";

// import { RegPageStyled } from "./regPage.styled";
import AuthBox from "../AuthBox";


const RegPage = () => {
    const dispatch = useDispatch();
    const handleSignup = (data) => {
        dispatch(signUp(data));
    }

    return (
        <AuthBox forWhat="Registration" handleSignup={handleSignup}>
            <p className="auth_bottom_text">Already have an account?<Link to="/login"> Login</Link></p>
        </AuthBox>
    )
};


export default RegPage;