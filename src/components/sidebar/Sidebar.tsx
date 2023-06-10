import React, { useState } from 'react';
import './navbar.scss';

export const Sidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
      const closeMenu = () => {
    setIsMenuOpen(false);
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
            
                {/* <div id="burger-menu" className={isMenuOpen ? 'close' : ''} onClick={toggleMenu}>
                    <span></span>
                </div>
                <div id="menu" className={isMenuOpen ? 'overlay' : ''}>
                    <ul>
                        <a href="#home" onClick={closeMenu}>Home</a>
                        <a href="#about" onClick={closeMenu}>Acerca de mí</a>
                        <a href="#projects" onClick={closeMenu}>Proyectos</a>
                        <a href="#contact" onClick={closeMenu}>Contacto</a>
                    </ul>
                </div> */}
        </nav> 

  );
}
