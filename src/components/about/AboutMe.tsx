import React from 'react';
import './about.scss';
import Lottie from "lottie-react";
import Chevron from '../../assets/chevron-down.json';
import { Reveal } from '../motions/Reveal';
import { MyLinks } from '../myLinks/MyLinks';
import {AiOutlineArrowRight} from "react-icons/ai";
import { Stack } from '../stacks/Stack';
import { Skills } from '../skills/Skills';
import { Title } from '../titles/Title';

const style = {
    width: 100,
}

export const AboutMe = () => {
    return (
        
        <section className='about' id='about'>
            <Reveal width='100%' justifyContent='flex-start'>
                <Title title='Acerca de mí'/>
            </Reveal>
            <div className='about_section'>
                <Reveal width='100%' justifyContent='flex-start'>
                    {<div className='about_section_text_container'>
                    <p className='about_section_text'>Hola, soy Jorge<span className='about_section_text_dot'>.</span></p>
                        <p className='about_section_text'>
Desarrollador web con una sólida orientación en frontend y más de tres años de experiencia en diseño y desarrollo de sitios web.
                        </p>
                        <p className='about_section_text'>
Como freelancer, he trabajado en la creación de prototipos, diseño visual y lanzamiento de sitios en WordPress, desarrollando habilidades en trato con clientes y en la implementación de soluciones atractivas y funcionales.
En mi posición actual como Frontend Developer, utilizo tecnologías como HTML5, CSS3, JavaScript, React, Next.js, Redux Toolkit, Router, Axios, Sass, Material UI y Firebase para construir interfaces intuitivas y eficientes. También he integrado PHP a mis conocimientos en WordPress para personalizar y optimizar experiencias web.
                        </p>
                        <p className='about_section_text'>
La creatividad es mi motor en el diseño de interfaces, donde busco siempre mejorar la experiencia de usuario. Me apoyo en herramientas como Adobe Illustrator, Figma y Canva para llevar a cabo un diseño profesional y funcional. Además, sigo mejorando mi nivel de inglés para continuar expandiendo mis habilidades en este campo en constante evolución.
                        </p>
                        <div className='links'>
                            <h4 className='links_text'>Mis Links <AiOutlineArrowRight /> </h4><MyLinks></MyLinks>
                        </div>   
                    </div>}

                </Reveal>
                <div className='about_section_techs'>
                    <Reveal width='100%' justifyContent='flex-start'>
                        <h2 className='about_subtitle'>Stack Tecnológico</h2>
                    </Reveal>
                    <Reveal width='100%' justifyContent='flex-start'>
                        <div className='stacks'>
                            {<Stack></Stack>}
                        </div>
                    </Reveal>
                    <Reveal width='100%' justifyContent='flex-start'>
                        <h2 className='about_subtitle'>Soft Skills</h2>
                    </Reveal>
                    <Reveal width='100%' justifyContent='flex-start'>
                        <div className='stacks'>
                            {<Skills/>}
                        </div>
                    </Reveal>
                </div>
            </div>

            <div className='arrow'>
                <Lottie animationData={Chevron} style={style} loop={true} />
            </div>

        </section>
        

    )
};
