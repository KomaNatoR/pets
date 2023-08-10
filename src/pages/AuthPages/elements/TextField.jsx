import { Field, ErrorMessage, useFormikContext, getIn } from "formik";
import { useMemo, useState } from "react";
import { nanoid } from "nanoid";

import { TextFieldStyled } from "./elements.styled";
import Icon from "components/shares/Icon/Icon";
import { ErrField } from "./elements.styled";


const TextField = ({ name, type, ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [toggleEye, setToggleEye] = useState(false);
    const { values, setFieldValue, errors, setErrors, validateForm } = useFormikContext();//setTouched touched
    const id = useMemo(() => nanoid(), []);


    const toggleEyeView = () => {
        setToggleEye(prev => !prev);
    }
    const onHandleChange = (e) => {
        const { value } = e.target;

        setFieldValue(name, value);
        // setTouched({ ...setTouched, [name]: "" });
        setErrors({ ...errors, [name]: "" });
    };
    const onHandleFocus = () => {
        setIsVisible(true);
        setErrors({ ...errors, [name]: "" });
    }
    const onHandleBlur = () => {
        validateForm()
        setTimeout(() => {
            setIsVisible(false);
        }, 100);
    }
    const deleteValue = () => {
        setFieldValue(name, "");
        // setTouched({ ...setTouched, [name]: "" });
        setErrors({ ...errors, [name]: "" });
        setToggleEye(false);
    };

    const isError = Boolean(getIn(errors, name));// && getIn(touched, name)
    const isEmptyField = Boolean(values[name] === "");
    const hasEyeClosed = name !== "email";
    const isEyeClosed = !toggleEye;
    const isPasswordVisible = !toggleEye ? "password" : "text";
    const isValidField = errors[name] === undefined;

    // console.log("isEmptyField|-->", isEmptyField,name);
    // console.log("isError     |-->", isError,name);
    // console.log("errors      |-->", errors);
    // console.log("getIn(touched, name)|-->", useFormikContext());

    return (
        <TextFieldStyled
            isError={!isEmptyField ? isError : null}
            isValidField={isEmptyField ? false : isValidField}
        >
            <Field id={id} {...props}
                onChange={onHandleChange}
                onFocus={onHandleFocus}
                onBlur={onHandleBlur}
                name={name}
                type={type === "email" ? type : isPasswordVisible}
                value={values[name]}
            />
            <div>
                {!isEmptyField && !isVisible && isValidField && <Icon onClick={deleteValue} id="okey" colorStroke="green" />}
                {!isEmptyField && isVisible && <Icon onClick={deleteValue} id="cross_big" colorStroke="red" />}

                {hasEyeClosed && isEyeClosed && <Icon onClick={toggleEyeView} id="eye_closed" />}
                {hasEyeClosed && !isEyeClosed && <Icon onClick={toggleEyeView} id="eye_open" />}
            </div>
                
            {!isEmptyField && isError && <ErrorMessage name={name} component={ErrField} />}
        </TextFieldStyled>
    )
};
//

export default TextField;