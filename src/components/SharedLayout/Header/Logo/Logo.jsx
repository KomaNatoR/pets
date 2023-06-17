import { LinkLogoStyles } from "./logo.styled";
// import logo from "../../../../img/logo/logo_pet_big_2x.png";
// import { ReactComponent as LogoSvg } from '../../../../img/icons/logo.svg';
import LogoSvg from '../../../../img/icons/svg_sprite.svg';

const Logo = (props) => {
    return (
        <LinkLogoStyles {...props} to="/">
            {/* <LogoSvg /> */}
            <svg>
                <use href={`${LogoSvg}#icon-logo`}></use>
            </svg>
            {/* <img src={logo} alt="logo" /> */}
        </LinkLogoStyles>
    )
}


export default Logo;