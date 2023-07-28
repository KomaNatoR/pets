import { Field, ErrorMessage } from "formik";
import { useMemo } from "react";
import { nanoid } from "nanoid";

import { ErrField } from "./errorField.styled";

const TextField = ({ name, ...props }) => {
    const id = useMemo(() => nanoid(), []);

    return (
        <div>
            <Field id={id} name={name} {...props}
                // value={name} 
                // type="text"
                // placeholder="input your name!"
                // required
            />
            <ErrorMessage name={name} component={ErrField} />
        </div>
    )
};
export default TextField;