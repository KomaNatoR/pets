import { useState } from "react";

import { LoaderStyled } from "./loader.styled";
import paw from "../../../img/icons/svg_sprite.svg"


const Loader = () => {
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

    return (
        <LoaderStyled>
            {stepOne &&
                <svg className="loader_one loader">
                    <use href={`${paw}#icon-paw_full_stright`}></use>
                </svg>
            }
            {stepTwo &&
                <svg className="loader_two loader">
                    <use href={`${paw}#icon-paw_full_stright`}></use>
                </svg>
            }
            {stepThree &&
                <svg className="loader_three loader">
                    <use href={`${paw}#icon-paw_full_stright`}></use>
                </svg>
            }
            {stepFour&&
                <svg className="loader_four loader">
                    <use href={`${paw}#icon-paw_full_stright`}></use>
                </svg>
            }
        </LoaderStyled>
    )
};


export default Loader;