import { useContext } from 'react';
import { ThemeContext } from '../ThemeProviderContext';

import { SwitcherMainStyled } from './themeSwitcherMain.styled';
import Icon from '../../../components/shares/Icon/Icon';


const ThemeSwitcherMain = (props) => {
    const { isLight, toggleTheme } = useContext(ThemeContext);

    return (
        <SwitcherMainStyled onClick={toggleTheme} {...props} isLight={isLight}>
            {!isLight&&<Icon id="sun_fill" colorStroke="yellow" colorFill="yellow"/>}
            {!isLight&&<span>Light on</span>}
            {isLight&&<Icon id="moon_fill" colorFill="blue"/>}
            {isLight&&<span style={{color:"#54ADFF"}}>Light off</span>}
        </SwitcherMainStyled>
    )
};


export default ThemeSwitcherMain;