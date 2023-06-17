import React, { useState, useEffect } from 'react';

import { ToDownButtStyled } from "./ScrollButtons.styled";
import Icon from '../Icon/Icon';


const ToDownButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    // console.log("scrollTop   |-->",scrollTop);
    // console.log("windowHeight|-->", windowHeight);
    // console.log("fullHeight  |-->",fullHeight);

    if (scrollTop > 30 && scrollTop < fullHeight - windowHeight - 31) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
      <>
        { isVisible&&
          <ToDownButtStyled>
            <Icon onClick={scrollToDown} id="wing_arrow" colorFill="trans" />
          </ToDownButtStyled>
        }
      </>
    )
};


export default ToDownButton;

// const fullHeight = document.documentElement.scrollHeight;
// const windowHeight = document.documentElement.clientHeight;
// const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
// const bottomPosition = fullHeight - (windowHeight + scrollPosition);

// console.log(bottomPosition); // Положення нижнього краю документа
