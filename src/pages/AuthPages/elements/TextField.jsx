import { Field, ErrorMessage, useFormikContext, getIn } from "formik";
import { useMemo } from "react";
import { nanoid } from "nanoid";

import { TextFieldStyled } from "./textField.styled";
import Icon from "components/shares/Icon/Icon";
import { ErrField } from "./errorField.styled";


const TextField = ({ name, ...props }) => {
    const { values, setFieldValue, errors, touched, setErrors, } = useFormikContext();//setTouched
    const id = useMemo(() => nanoid(), []);

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

    const hasError = getIn(errors, name) && getIn(touched, name);
    // console.log("hasError|-->", hasError);
    // console.log("errors   |-->", errors);
    // console.log("touched |-->", touched);
    return (
        <TextFieldStyled hasError={hasError}>
            <Field id={id} name={name} {...props}
                value={values[name]}
                onChange={onHandleChange}
            />
            {values[name] && <Icon onClick={deleteValue} id="cross_big" colorStroke="red" />}
            {hasError && <ErrorMessage name={name} component={ErrField} />}
        </TextFieldStyled>
    )
};


export default TextField;