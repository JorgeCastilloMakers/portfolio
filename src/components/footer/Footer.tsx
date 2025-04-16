import React from 'react';
import { MyLinks } from '../myLinks/MyLinks';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <h3 className='footer_text'>Copyright © {new Date().getFullYear()} - Hecho con ❤️ por Jorge Castillo</h3>
      <MyLinks></MyLinks>  
    </footer>
  )
};
