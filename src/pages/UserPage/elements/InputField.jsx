import { useMemo } from "react";
import { nanoid } from "nanoid";

import { InputStyled } from "./elements.styled";
import Icon from "components/shares/Icon/Icon";


const InputField = ({ label, name, ...props }) => {
    const id = useMemo(() => nanoid(), []);

    return (
        <InputStyled>
            <label htmlFor={id}>{label}:</label>
            <input id={id} name={name} {...props}
                // value={name} 
                // type="text"
                // name="name"
                // placeholder="input your name!"
                // required
            />
            <Icon id="edit"/>
        </InputStyled>
    )
};


export default InputField;