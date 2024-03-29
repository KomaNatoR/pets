import { useState } from "react";

import { LoaderStyled } from "./loader.styled";
import paw from "../../../img/icons/svg_sprite.svg"


const Loader = ({ isUndefind = true }) => {
    const [stepOne, setStepOne] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);
    const [stepFour, setStepFour] = useState(false);

    setTimeout(() => {
        setStepOne(true);
    }, 300);
    setTimeout(() => {
        setStepTwo(true);
    }, 600);
    setTimeout(() => {
        setStepThree(true);
    }, 900);
    setTimeout(() => {
        setStepFour(true);
    }, 1200);
    // console.log("isUndefind|-->",isUndefind);

    return (
        <LoaderStyled>
            {/* {!Boolean(isUndefind) && <p>Sorry, something goin wrong with backend! It's need some time...</p>} */}

            {stepOne &&
                <svg className="loader loader_one">
                    <use href={`${paw}#icon-paw_full_stright`}></use>
                </svg>
            }
            {stepTwo &&
                <svg className="loader loader_two">
                    <use href={`${paw}#icon-paw_full_stright`}></use>
                </svg>
            }
            {stepThree &&
                <svg className="loader loader_three">
                    <use href={`${paw}#icon-paw_full_stright`}></use>
                </svg>
            }
            {stepFour &&
                <svg className="loader loader_four">
                    <use href={`${paw}#icon-paw_full_stright`}></use>
                </svg>
            }
        </LoaderStyled>
    )
};


export default Loader;