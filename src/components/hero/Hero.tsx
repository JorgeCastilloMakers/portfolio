import React from 'react';
import PictureHero from '../../assets/picture-hero.png';
import { Button } from '../button/Button';
import { Reveal } from '../motions/Reveal';
import './hero.scss';

export const Hero = () => {
    return (
                
        <section className='hero' id='home'>
            <div className='hero_title'>
                <Reveal width='100%' justifyContent='flex-start'>
                    <h2 className='hero_title_part-One'>Simple,</h2>
                </Reveal>
                <Reveal width='100%' justifyContent='flex-end' delay={0.50}>
                    <h2 className='hero_title_part-Two'>Creativo...</h2>
                </Reveal>
                <Reveal width='100%' delay={0.80}>
                    <h3 className='hero_title_name'>Jorge Castillo, Frontend Developer | Web Designer</h3>
                </Reveal>
            </div>

            <div className='hero_image'>
                <img className='hero_image_picture' src={PictureHero} alt="picture-jorge-castillo" />
            </div>
            <Reveal width='100%' delay={1}>
                <Button text={'Descargar CV'} />
            </Reveal>
        </section >
                       

    )
};
