import React from 'react';
// import PictureHero from '../../assets/picture-hero.png';
import NewPictureHero from '../../assets/new-picture-hero.png';
import { Reveal } from '../motions/Reveal';
import './hero.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { MyLinks } from '../myLinks/MyLinks';

export const Hero = () => {
    return (
                
        <section className='hero' id='home'>
            <div className='hero_title'>
                <Reveal width='100%' justifyContent='flex-start'>
                    <h2 className='hero_title_part-One'>Simple,</h2>
                </Reveal>
                <Reveal width='100%' justifyContent='flex-end' delay={0.50}>
                    <h2 className='hero_title_part-Two'>Creativo
                        <div className='loading-dots'>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div></h2>
                </Reveal>
                <Reveal width='100%' delay={0.80}>
                    <h3 className='hero_title_name'>Jorge Castillo, Frontend Developer | Web Designer</h3>
                </Reveal>
                <Reveal width='100%' delay={0.80}>
                <div className='links'>
                    <h4 className='links_text'>Mis Links <AiOutlineArrowRight /> </h4><MyLinks></MyLinks>
                </div>                     
                </Reveal>

            </div>

            <div className='hero_image'>
                <img className='hero_image_picture' src={NewPictureHero} alt="picture-jorge-castillo" />
            </div>
        </section >
                       

    )
};
