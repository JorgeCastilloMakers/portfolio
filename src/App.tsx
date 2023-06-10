import React from 'react';
import { AboutMe } from './components/about/AboutMe';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Hero } from './components/hero/Hero';
import { Sidebar } from './components/sidebar/Sidebar';
import { ProjectsSection } from './components/projectsSection/ProjectsSection';
import { Layout } from './layout/Layout';
import './app.scss';
import { Heading } from './components/heading/Heading';

export const App = () => {
  return (
    <Layout>
      {/* <div className='container'> */}
        <Sidebar />
        <main className='container_main'>
          <Heading/>
          <Hero />
          <AboutMe />
          <ProjectsSection />
          <Contact />
          <Footer/>          
        </main>
      {/* </div> */}
    </Layout>
  )
};

export default App;
