import React from 'react'
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import { DivTag } from './errorPage.styled';
import Title from '../../components/shares/Title/Title';
import Button from '../../components/shares/Button/Button';
import { ReactComponent as Paw } from '../../img/icons/paw.svg';


const ErrorPage = () => {

  return (
    <DivTag>

      <Title titleStyle="h2_404">{`Ooops! This page not found :(`}</Title>

      <div className='cat_div'>
        <MediaQuery minWidth={1280}>
          <div className='yellow_round_div'></div>
          {/* <div className='yellow_round_back_div'></div> */}
        </MediaQuery>
      </div>

      <Link to="/">
        <Button type="button" buttonView="blue" width="248px">
          {"To main page"}
          <Paw></Paw>
        </Button>
      </Link>
    </DivTag>
  )
};


export default ErrorPage;