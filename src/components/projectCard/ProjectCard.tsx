import React from 'react';
import './projectcard.scss';
import { RxVercelLogo } from 'react-icons/rx';
import { AiFillGithub } from 'react-icons/ai';
import { Reveal } from '../motions/Reveal';

interface Props{
    key?: number;
    image: string;
    name: string;
    meta: string;
    vercel: string;
    github?: string;
    description: string;

}

export const ProjectCard = ({image, name, meta, vercel, github, description, key}: Props) => {
  return (
      <div className='card' key={key}>
          <Reveal width='100%'>
          <img className='card_image' src={image} alt={name} />              
          </Reveal>

          <div className='card_titles'>
              <Reveal width='100%'>
              <h3 className='card_titles_first'>{ name }</h3>                  
              </Reveal>
              <Reveal width='100%'>
              <h3 className='card_titles_second'>{ meta }</h3>                  
                </Reveal>

          </div>
          <Reveal width='100%'>
          <div className='card_links'>
              <a className='card_links_link' target="_blank" href={vercel}><span className='card_links_link_icon'><RxVercelLogo /></span> Deploy</a>
              {github &&
                  <a className='card_links_link' target="_blank" href={github}><span className='card_links_link_icon'><AiFillGithub /></span> Repositorio</a>
              }
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
