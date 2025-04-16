import React from 'react';
import './about.scss';
import Lottie from "lottie-react";
import Chevron from '../../assets/chevron-down.json';
import { Reveal } from '../motions/Reveal';
import { MyLinks } from '../myLinks/MyLinks';
import {AiOutlineArrowRight} from "react-icons/ai";
import { Stack } from '../stacks/Stack';
import { Skills, Tools } from '../skills/Skills';
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
                <Reveal width='100%' height='100%' justifyContent='flex-start'>
                    {<div className='about_section_text_container'>
                    <p className='about_section_text'>Hola, soy Jorge<span className='about_section_text_dot'>.</span></p>
                        <p className='about_section_text'>
Diseñador y desarrollador web con más de 5 años de experiencia, especializado en crear interfaces intuitivas y funcionales que mejoran la experiencia del usuario.
                        </p>
                        <p className='about_section_text'>
A lo largo de mi carrera, he combinado habilidades técnicas y creativas para desarrollar soluciones digitales efectivas. Como freelancer, he liderado proyectos desde la conceptualización hasta el lanzamiento, utilizando WordPress y PHP para construir sitios personalizados que responden a las necesidades específicas de cada cliente.
                        </p>
                        <p className='about_section_text'>
En mi rol actual como Frontend Developer, trabajo con tecnologías modernas como React, Next.js, Redux Toolkit, Tailwind CSS, ShadCN y Firebase para desarrollar aplicaciones web dinámicas y escalables. Esta experiencia me ha permitido comprender profundamente tanto el diseño como la implementación técnica de productos digitales.
                        </p>
                        <p className='about_section_text'>
                            Mi enfoque en el diseño está impulsado por la creatividad y una comprensión sólida de los principios de UX/UI. Utilizo herramientas como Figma, Adobe Illustrator y Canva para diseñar interfaces que no solo son estéticamente agradables, sino también centradas en el usuario.
                        </p>
                        <p className='about_section_text'>
                            Actualmente, estoy enfocado en expandir mis habilidades en el diseño de productos digitales, buscando oportunidades que me permitan colaborar en equipos multidisciplinarios y contribuir al desarrollo de soluciones innovadoras que generen valor tanto para los usuarios como para el negocio.
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
                    <Reveal width='100%' justifyContent='flex-start'>
                        <h2 className='about_subtitle'>Herramientas</h2>
                    </Reveal>
                    <Reveal width='100%' justifyContent='flex-start'>
                        <div className='stacks'>
                            {<Tools/>}
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
