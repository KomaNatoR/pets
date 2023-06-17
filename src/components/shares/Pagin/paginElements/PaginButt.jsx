import { PaginButtStyled } from "./paginElements.styled";

const PaginButt = (props) => {
    const { children, buttNumber } = props;
    // let buttClass = "";
    // if (buttNumber === 1) buttClass = "one";
    // if (buttNumber === 2) buttClass = "two";
    // if (buttNumber === 3) buttClass = "three";
    // if (buttNumber === 4) buttClass = "four";
    // if (buttNumber === 5) buttClass = "five";
    

    return (
        <PaginButtStyled className={buttNumber} {...props}>
            {children}
        </PaginButtStyled>
    )
};


export default PaginButt;