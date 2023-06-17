import { Outlet } from "react-router-dom";
// import { useContext } from "react";
// import { ThemeContext } from "../../utils/ThemeContext/themeProvider";

// import { ThemeProvider } from "@emotion/react";
// import { themeLight, themeDark } from "../../constants";
import EmotionThemeProvider from "../../utils/EmotionThemeProvider/EmotionThemeProvider";
import { ModalProvider } from "../shares/Modal/utils/ModalProvider";
import { Container } from "./sharedLayout.styled";
import Header from "./Header/Header";

const SharedLayout = () => {
    // const { isLight } = useContext(ThemeContext);

    return (
        <EmotionThemeProvider>
            <ModalProvider>
                <Container>
                    <Header />
                    <main>
                        <Outlet />
                    </main>
                </Container>
            </ModalProvider>
        </EmotionThemeProvider>
    )
};


export default SharedLayout;