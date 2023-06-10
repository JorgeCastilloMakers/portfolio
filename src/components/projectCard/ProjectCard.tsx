import React from 'react';
import './projectcard.scss';
import { Reveal } from '../motions/Reveal';
import { ProjectLinks } from './projectLinks/ProjectLinks';

interface Props{
    image: string;
    name: string;
    meta: string;
    vercel: string;
    github?: string;
    description: string;

}

export const ProjectCard = ({image, name, meta, vercel, github, description}: Props) => {
  return (
      <div className='card'>
          <Reveal width='100%'>
              <div className='card_image_container'>
                <img className='card_image' src={image} alt={name} />                   
              </div>
          </Reveal>

          <div className='card_titles'>
              <Reveal width='100%' justifyContent='flex-start'>
              <h3 className='card_titles_first'>{ name }</h3>                  
              </Reveal>
              <Reveal width='100%'>
              <h3 className='card_titles_second'>{ meta }</h3>                  
                </Reveal>

          </div>
          <Reveal width='100%'>
          <div className='card_links'>
                <ProjectLinks github={github} vercel={vercel} />
              </div>              
          </Reveal>
          <Reveal width='100%'>
          <h3 className='card_text'>
              {description}
          </h3>              
            </Reveal>

    </div>
  )
}
