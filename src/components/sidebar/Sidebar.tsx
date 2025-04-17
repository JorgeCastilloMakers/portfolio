import React, { useState } from 'react';
import './navbar.scss';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

    return (
        <nav className='navbar'>
            <div className='navbar_logo_container'>
            <h2 className='navbar_logo'>JC<span className='navbar_logo_s'>.</span></h2>
            </div>
                    <ul className='navbar_list'>
                        <a className='navbar_list_item' href="#home">Home</a>
                        <a className='navbar_list_item' href="#about">Acerca de mí</a>
                        <a className='navbar_list_item' href="#projects">Proyectos</a>
                        <a className='navbar_list_item' href="#contact">Contacto</a>
                    </ul>
            
        </nav> 

  );
}
