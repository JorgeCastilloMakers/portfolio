import React from 'react';
import { ProjectCard } from '../projectCard/ProjectCard';
import './projects.scss';
import { projects } from './projects';
import { Reveal } from '../motions/Reveal';

export const ProjectsSection = () => {
  return (
      <section className='projects' id='projects'>
          <Reveal width='100%' justifyContent='flex-start'>
            <h2 className='projects_title'>Proyectos</h2>              
          </Reveal>

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
    </section>
  )
}
