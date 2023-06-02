import React from 'react';
import './projectcard.scss';
import { RxVercelLogo } from 'react-icons/rx';
import { AiFillGithub } from 'react-icons/ai';

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
          <img className='card_image' src={image} alt={name} />
          <div className='card_titles'>
              <h3 className='card_titles_first'>{ name }</h3>
              <h3 className='card_titles_second'>{ meta }</h3>
          </div>
          <div className='card_links'>
              <a className='card_links_link' target="_blank" href={vercel}><span className='card_links_link_icon'><RxVercelLogo /></span> Deploy</a>
              {github &&
                  <a className='card_links_link' target="_blank" href={github}><span className='card_links_link_icon'><AiFillGithub /></span> Repositorio</a>
              }
              </div>
          <h3 className='card_text'>
              {description}
          </h3>
    </div>
  )
}
