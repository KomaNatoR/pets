import { Field, ErrorMessage, useFormikContext, getIn } from "formik";
import { useMemo } from "react";
import { nanoid } from "nanoid";

import { TextFieldStyled } from "./textField.styled";
import Icon from "components/shares/Icon/Icon";
import { ErrField } from "./errorField.styled";

const TextField = ({ name, ...props }) => {
    const { values, setFieldValue, errors, touched } = useFormikContext();
    const id = useMemo(() => nanoid(), []);

    const onHandleChange = (e) => {
        const { value } = e.target;
        setFieldValue(name, value);
    };
    const deleteValue = () => {
        setFieldValue(name, "");
    };

    const hasError = getIn(errors, name) && getIn(touched, name);
    console.log("hasError|-->", hasError);
    // console.log("errors  |-->", errors);
    // console.log("touched |-->", touched);
    return (
        <TextFieldStyled hasError={hasError}>
            <Field id={id} name={name} {...props}
                value={values[name]}
                onChange={onHandleChange}
            />
            {values[name] && <Icon onClick={deleteValue} id="cross_big" colorStroke="red" />}
            <ErrorMessage name={name} component={ErrField} />
        </TextFieldStyled>
    )
};
export default TextField;