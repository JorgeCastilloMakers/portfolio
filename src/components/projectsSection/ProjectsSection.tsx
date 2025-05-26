import React from 'react';
import { ProjectCard } from '../projectCard/ProjectCard';
import './projects.scss';
import { projects } from './projects';
import { Reveal } from '../motions/Reveal';
import { Title } from '../titles/Title';

export const ProjectsSection = () => {
  return (
      <section className='projects' id='projects'>
          <Reveal width='100%' justifyContent='flex-start'>
            <Title title='Proyectos'/>            
          </Reveal>

          <div className="card-container">
              {projects.sort((a, b) => b.id - a.id).map(({image, name, meta, vercel, github, description, id}) => (
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
