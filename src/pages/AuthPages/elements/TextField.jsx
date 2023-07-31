import { Field, ErrorMessage, useFormikContext, getIn } from "formik";
import { useMemo, useState } from "react";
import { nanoid } from "nanoid";

import { TextFieldStyled } from "./textField.styled";
import Icon from "components/shares/Icon/Icon";
import { ErrField } from "./errorField.styled";


const TextField = ({ name, ...props }) => {
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
    };

    const isError = getIn(errors, name) && getIn(touched, name);
    const isCross = values[name];
    const isEyeClosed = !isOpenEye;
    const hasEyeClosed = name !== "email";

    // console.log("errors   |-->", errors);
    // console.log("values |-->", values);

    return (
        <TextFieldStyled hasError={isError}>
            <Field id={id} name={name} {...props}
                value={values[name]}
                onChange={onHandleChange}
            />
            {hasEyeClosed && isEyeClosed && <Icon onClick={toggleEyeView} id="eye_closed" />}
            {hasEyeClosed && !isEyeClosed && <Icon onClick={toggleEyeView} id="eye_open" />}
            {isCross && <Icon onClick={deleteValue} id="cross_big" colorStroke="red" />}
            {isError && <ErrorMessage name={name} component={ErrField} />}
        </TextFieldStyled>
    )
};


export default TextField;