import React from 'react';
import { MyLinks } from '../myLinks/MyLinks';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <h3 className='footer_text'>Copyright © 2023 - Jorge Castillo</h3>
      <MyLinks></MyLinks>  
    </footer>
  )
};
