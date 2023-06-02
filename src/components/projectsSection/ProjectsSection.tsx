import React from 'react';
import { ProjectCard } from '../projectCard/ProjectCard';
import './projects.scss';
import { projects } from './projects';

export const ProjectsSection = () => {
  return (
      <div className='projects' id='projects'>
          <h2 className='projects_title'>Proyectos</h2>
          <div className="card-container">
              {projects.map(({image, name, meta, vercel, github, description, id}) => (
                  <ProjectCard
                      key={id}
                      image={image}
                      name={name}
                      meta={meta}
                      vercel={vercel}
                      github={github}
                      description={description}
                  />  
              ))}
              
          </div>
    </div>
  )
}
