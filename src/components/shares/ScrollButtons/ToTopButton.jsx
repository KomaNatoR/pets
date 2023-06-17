import React, { useState, useEffect } from 'react';

import { ToTopButtStyled } from "./ScrollButtons.styled";
import Icon from '../Icon/Icon';


const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
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
          <ToTopButtStyled>
            <Icon onClick={scrollToTop} id="wing_arrow" colorFill="trans" />
          </ToTopButtStyled>
        }
      </>
    )
};


export default ToTopButton;