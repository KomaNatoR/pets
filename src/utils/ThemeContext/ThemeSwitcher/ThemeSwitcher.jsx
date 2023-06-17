import { useContext } from 'react';
import { ThemeContext } from '../ThemeProviderContext';

import { SwitcherStyled } from './themeSwitcher.styled';
import { ReactComponent as Paw } from '../../../img/icons/paw.svg';

const ThemeSwitcher = (props) => {
    const { isLight, toggleTheme } = useContext(ThemeContext);
    const pawColor = isLight ? "#54ADFF" : "#FFC107";

    return (
        <SwitcherStyled onClick={toggleTheme} pawColor={pawColor} {...props}>
            <span>{isLight ? "Dark pet" : "Light pet"}</span>
            <Paw />
        </SwitcherStyled>
    )
};
ThemeSwitcher.defaultProps = {
    isLight: false,
};


export default ThemeSwitcher;