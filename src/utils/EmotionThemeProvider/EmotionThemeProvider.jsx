import { ThemeProvider } from "@emotion/react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeProviderContext";
import { themeLight,themeDark } from "../../constants";

const EmotionThemeProvider = ({ children }) => {
    const { isLight } = useContext(ThemeContext);
    
    return (
        <ThemeProvider theme={isLight ? themeLight : themeDark}>
            {children}
        </ThemeProvider>
    )
};


export default EmotionThemeProvider;