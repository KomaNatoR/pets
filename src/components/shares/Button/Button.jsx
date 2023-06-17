
import { ButtonTag } from "./button.styled";

const Button = (props) => {
    const { type, buttonView, width, scale, children } = props;

    return (
        <ButtonTag  {...props} type={type} buttonView={buttonView} width={width} scale={scale}>
            {children}
        </ButtonTag>
    )
};
Button.defaultProps = {
    type: 'button',
    buttonView: "white",
    width:"auto",
    scale: "1",
    children: 'NO TEXT ON BUTTON!!!',
};


export default Button;