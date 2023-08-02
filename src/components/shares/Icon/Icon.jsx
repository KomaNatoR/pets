import { IconStyled } from "./icon.styled";
import iconsBox from "./icons/svg_sprite.svg";
import iconsId from "./icons/icons.json";


const Icon = (props) => {
    const { id, colorFill, colorStroke } = props;
    let checkId = iconsId.find(it => it === id);
    if (!checkId) checkId = `search`;
    // console.log("ID     |-->",id);
    // console.log("checkId|-->",checkId);

    return (
        <IconStyled colorFill={colorFill} colorStroke={colorStroke} {...props}>
            <use href={`${iconsBox}#icon-${checkId}`}></use>
        </IconStyled>
    )
};
Icon.defaultProps = {
    id: 'search',
    colorFill: "trans",
    colorStroke: "blue",
};


export default Icon;