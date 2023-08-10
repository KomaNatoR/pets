import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../redux/auth-operations";

// import { RegPageStyled } from "./regPage.styled";
import AuthBox from "../AuthBox";
import Loader from "components/shares/Loader/Loader";


const RegPage = () => {
    const { loading, error } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleSignup = (data) => {
        dispatch(signUp(data));
    };

    const errStroke = (error) => {
        if (!error) return;
        
        switch (error.status) {
            case 400:
                return <p style={{ color: "#F43F5E", marginTop:"0px" }}>{`Sorry! ${error.status}: Invalid request body`}</p>
            case 409:
                return <p style={{ color: "#F43F5E", marginTop:"0px" }}>{`Sorry! ${error.status}: Email in use`}</p>
            case 500:
                return <p style={{ color: "#F43F5E", marginTop:"0px" }}>{`Sorry! ${error.status}: Server error`}</p>

            default:
                break;
        }
    };

    return (
        <>
            <AuthBox forWhat="Registration" handleSignup={handleSignup}>
                {errStroke(error)}
                {loading && <Loader />}
                <p className="auth_bottom_text">Already have an account?<Link to="/login"> Login</Link></p>
            </AuthBox>
        </>
    )
};


export default RegPage;