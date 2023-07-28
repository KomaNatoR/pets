// import { FC } from "react";
// import { FormProps } from "./types/types";:FC<FormProps>

import { AuthPageStyled, FormStyled } from "./authPage.styled";
import Title from "components/shares/Title/Title";


import { Formik } from 'formik';
import { fields } from "./data";//, initialValues, regSchema
import TextField from "./elements/TextField";
import Button from "components/shares/Button/Button";


const AuthBox = ({ children, forWhat }) => {
    return (
        <AuthPageStyled>
            <div>
                <Title titleStyle="h2_auth">{forWhat}</Title>

                <Formik>
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