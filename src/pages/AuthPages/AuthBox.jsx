import { Link, useLocation } from "react-router-dom";//useNavigate

import { AuthPageStyled, FormStyled } from "./authPage.styled";
import Title from "components/shares/Title/Title";

import { Formik } from 'formik';
import { fields, initialValues, regSchema, logSchema } from "./data";
import TextField from "./elements/TextField";
import Button from "components/shares/Button/Button";


const AuthBox = ({ children, forWhat, handleSignup }) => {
    const location = useLocation();
    // const navigate = useNavigate();

    const onSubmitSignup = (data, actions) => {
        // let { email, password } = data;
        console.log("SubmData:", data);

        // handleSignup({ email, password });
        // navigate('/user');
        // actions.resetForm();
    };

    return (
        <AuthPageStyled>
            <div>
                <Title titleStyle="h2_auth">{forWhat}</Title>

                <Formik
                    onSubmit={onSubmitSignup}
                    initialValues={initialValues}
                    validationSchema={forWhat === "Registration" ? regSchema : logSchema}
                    validateOnChange={false}
                    validateOnBlur={true}
                >
                    <FormStyled>
                        <div>
                            <TextField {...fields.email} />
                            <TextField {...fields.password} />
                            {forWhat === "Registration" && <TextField {...fields.confirmPassword} />}
                        </div>

                        <Link to="/user" state={location}>
                            <Button buttonView="blue" type="submit">{forWhat}</Button>
                        </Link>
                    </FormStyled>
                </Formik>

                {children}
            </div>
        </AuthPageStyled>
    )
};


export default AuthBox;