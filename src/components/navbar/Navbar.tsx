import React, { useState } from 'react';
import './navbar.scss';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='navbar'>
            <h2 className='navbar_logo'>Jorge<span className='navbar_logo_s'>Castillo</span></h2>
                    <ul className='navbar_list'>
                        <a className='navbar_list_item' href="#home">Home</a>
                        <a className='navbar_list_item' href="#about">Acerca de mí</a>
                        <a className='navbar_list_item' href="#projects">Proyectos</a>
                        <a className='navbar_list_item' href="#contact">Contacto</a>
                    </ul>
            
                <div id="burger-menu" className={isMenuOpen ? 'close' : ''} onClick={toggleMenu}>
                    <span></span>
                </div>
                <div id="menu" className={isMenuOpen ? 'overlay' : ''}>
                    <ul>
                        <a href="#home">Home</a>
                        <a href="#about">Acerca de mí</a>
                        <a href="#projects">Proyectos</a>
                        <a href="#contact">Contacto</a>
                    </ul>
                </div>
        </nav> 

  );
}
