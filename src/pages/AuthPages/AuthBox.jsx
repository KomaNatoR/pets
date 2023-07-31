import { AuthPageStyled, FormStyled } from "./authPage.styled";
import Title from "components/shares/Title/Title";

import { Formik } from 'formik';
import { fields, initialValues, regSchema } from "./data";
import TextField from "./elements/TextField";
import Button from "components/shares/Button/Button";


const AuthBox = ({ children, forWhat }) => {

    const onSubmitSignup = (data, actions) => {
        // let { email, password, confirm } = data;
        // console.log("RegData:", data);

        // dispatch(signUp(personData));
        // actions.resetForm();
    };

    return (
        <AuthPageStyled>
            <div>
                <Title titleStyle="h2_auth">{forWhat}</Title>

                <Formik
                    onSubmit={onSubmitSignup}
                    initialValues={initialValues}
                    validationSchema={regSchema}
                    validateOnChange={false}
                    validateOnBlur={true}
                >
                    <FormStyled>
                        <div>
                            <TextField {...fields.email} />
                            <TextField {...fields.password} />
                            {forWhat === "Registration" && <TextField {...fields.confirmPassword} />}
                        </div>

                        <Button buttonView="blue" type="submit">{forWhat}</Button>
                    </FormStyled>
                </Formik>

                {children}
            </div>
        </AuthPageStyled>
    )
};


export default AuthBox;