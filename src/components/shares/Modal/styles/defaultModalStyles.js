// ДЕФОЛТНІ стилі!

//  НІЧОГО НЕ ЗМІНЮВАТИ!!!
//            НІЧОГО НЕ ЗМІНЮВАТИ!!!
//                      НІЧОГО НЕ ЗМІНЮВАТИ!!!


export const defaultModalStyles = ({colors}) => `
    position: absolute;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    top: 50%;
    left: 50%;
    background:  ${colors.white};
    transform: translate(-50%, -50%);
    // min-height: 354px;
    // max-width: 608px;
    // width: 100%;
    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
`;