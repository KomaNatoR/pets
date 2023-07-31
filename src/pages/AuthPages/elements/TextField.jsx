import { Field, ErrorMessage, useFormikContext, getIn } from "formik";
import { useMemo, useState } from "react";
import { nanoid } from "nanoid";

import { TextFieldStyled } from "./textField.styled";
import Icon from "components/shares/Icon/Icon";
import { ErrField } from "./errorField.styled";


const TextField = ({ name, type, ...props }) => {
    const [isOpenEye, setIsOpenEye] = useState(false);
    const { values, setFieldValue, errors, touched, setErrors, } = useFormikContext();//setTouched
    const id = useMemo(() => nanoid(), []);


    const toggleEyeView = () => {
        setIsOpenEye(prev => !prev);
    }
    const onHandleChange = (e) => {
        const { value } = e.target;

        setFieldValue(name, value);
        // setTouched({ ...setTouched, [name]: "" });
        setErrors({ ...errors, [name]: "" });
    };
    const deleteValue = () => {
        setFieldValue(name, "");
        // setTouched({ ...setTouched, [name]: "" });
        setErrors({ ...errors, [name]: "" });
        setIsOpenEye(false);
    };

    const isError = getIn(errors, name) && getIn(touched, name);
    const isVisible = values[name];
    const hasEyeClosed = name !== "email";
    const isEyeClosed = !isOpenEye;
    const isPasswordVisible = !isOpenEye ? "password" : "text";

    // console.log("isVisible   |-->", isVisible);
    // console.log("values |-->", values);

    return (
        <TextFieldStyled hasError={isVisible ? isError : null}>
            <Field id={id} {...props}
                onChange={onHandleChange}
                name={name}
                type={type === "email" ? type : isPasswordVisible}
                value={values[name]}
            />
            {isVisible && hasEyeClosed && isEyeClosed && <Icon onClick={toggleEyeView} id="eye_closed" />}
            {isVisible && hasEyeClosed && !isEyeClosed && <Icon onClick={toggleEyeView} id="eye_open" />}
            {isVisible && <Icon onClick={deleteValue} id="cross_big" colorStroke="red" />}
            {isVisible && isError && <ErrorMessage name={name} component={ErrField} />}
        </TextFieldStyled>
    )
};


export default TextField;