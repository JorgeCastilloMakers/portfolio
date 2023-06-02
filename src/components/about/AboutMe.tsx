import React from 'react';
import PictureAbout from '../../../public/picture-about.png'
import { Slider } from '../slider/Slider';
import './about.scss';
import Lottie from "lottie-react";
import Chevron from '../../../public/chevron-down.json';

const style = {
    width: 100,
}

export const AboutMe = () => {
    return (
        <div className='about' id='about'>
            <h2 className='about_title'>Acerca de mí</h2>
            <div className='about_section'>
                <div className='about_section_image'>
                    <img className='about_section_img' src={PictureAbout} alt="jorge-y-justi" />
                </div>
                <h3 className='about_section_text'>
                    Hola, soy Jorge 👋🏻
                    Me apasiona el diseño y soy muy creativo en la creación de componentes visuales.
                    Curioso, proactivo, dispuesto a la resolución de problemas.
                    Siempre tuve en mis pasiones lo IT pero la vida me llevo por otros lados, los cuales me dieron experiencia en otras aptitudes, como el manejo de equipos de trabajo.
                    Siempre estuve ligado al diseño por haber estudiado diseño gráfico, pero desde el 2020 comencé a diseñar paginas webs, en un principio con CMS, pero con el correr del tiempo y proyectos un CMS o una app No Code no cubría la problemática que quería resolver, lo que me hizo entrar en el mundo de la programación para que pueda descubrir mi verdadera vocación, el Frontend.
                </h3>
            </div>
            <h2 className='about_title'>Stack Tecnológico</h2>
            <Slider></Slider>
            <div className='arrow'>
                <Lottie animationData={Chevron} style={style} loop={true} />                
            </div>

        </div>
    )
};
