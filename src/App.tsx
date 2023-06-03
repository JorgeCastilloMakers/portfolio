import React from 'react';
import { AboutMe } from './components/about/AboutMe';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Hero } from './components/hero/Hero';
import { Navbar } from './components/navbar/Navbar';
import { ProjectsSection } from './components/projectsSection/ProjectsSection';
import { Layout } from './layout/Layout';

export const App = () => {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <AboutMe />
      <ProjectsSection />
      <Contact />
      <Footer/>
    </Layout>
  )
};

export default App;
