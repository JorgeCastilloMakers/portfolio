import React from 'react';
import PictureHero from '../../../public/picture-hero.png';
import { Button } from '../button/Button';
import './hero.scss';

export const Hero = () => {
    return (
        <div className='hero' id='home'>
            <div className='hero_title'>
                <h2 className='hero_title_part-One'>Simple,</h2>
                <h2 className='hero_title_part-Two'>Creativo...</h2>
                <h3 className='hero_title_name'>Jorge Castillo, Frontend Developer / Web Designer</h3>
            </div>
            <div className='hero_image'>
                <img className='hero_image_picture' src={PictureHero} alt="picture-jorge-castillo" />
            </div>
            <Button text={'Descargar CV'} />
        </div>
    )
};
