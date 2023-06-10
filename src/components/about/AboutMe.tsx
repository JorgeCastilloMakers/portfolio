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
                        

                        Me apasiona el diseño y tengo habilidades para la creación de componentes visuales.
                        Curioso, proactivo, dispuesto a la resolución de problemas.
                        Siempre tuve en mis pasiones lo IT pero la vida me llevo por otros lados, los cuales me dieron experiencia en otras aptitudes, como el manejo de equipos de trabajo.
                        Siempre estuve ligado al diseño por haber estudiado diseño gráfico, pero desde el 2020 comencé a diseñar paginas webs, en un principio con CMS, pero con el correr del tiempo y proyectos un CMS o una app No Code no cubría la problemática que quería resolver, lo que me hizo entrar en el mundo de la programación para que pueda descubrir mi verdadera vocación, el Frontend.

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
