import styled from "@emotion/styled";

import { defaultModalStyles, customModalStyles, customAuthStyles } from "./styles";

export const BackdropDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(43, 43, 43, 0.5);
  backdrop-filter: blur(0px);
  overflow-y: scroll;
`;


const choseStyles = ({ customStyles, theme }) => {
  // console.log("customStyles-->", customStyles);
  switch (customStyles) {
    case "default":
      return defaultModalStyles(theme);
    case "custom":
      return customModalStyles(theme);
    case "custom_auth":
      return customAuthStyles(theme);
  
    default:
      return defaultModalStyles(theme);
  }

  // if (!customStyles) return defaultModalStyles(theme);
  // if (customStyles) return customStyles;
};
export const ModalDiv = styled.div`
  ${choseStyles}
`;