import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Infos } from './pages/Infos';
import { AboutMe } from './pages/AboutMe';
import { Social } from './pages/Social';
import { Training } from './pages/Training';
import { Technologies } from './pages/Technologies';
import { Projects } from './pages/Projects';
import { FrontEndProjects } from './components/FrontEndProjects';
import { BackEndProjects } from './components/BackEndProjects';
import { NotFound } from './components/NotFound';
import { Forms } from './pages/Forms';
import './css/cards.css';
import './css/style.css';

export default function App() {
  return (
    <Router>
      <React.StrictMode>
        <Routes>
          <Route path="/" >
            <Route index element={ <Infos /> } />
            <Route path="aboutme" element={ <AboutMe /> } />
            <Route path="social" element={ <Social />} />
            <Route path="training" element={ <Training /> } />
            <Route path="technologies" element={ <Technologies /> } />
            <Route path="projects" element={ <Projects /> } />
            <Route path="frontend" element={ <FrontEndProjects /> } />
            <Route path="backend" element={ <BackEndProjects /> } />
            <Route path="contact" element={ <Forms /> } />
            <Route path="*" element={ <NotFound /> } />
          </Route>
        </Routes>
      </React.StrictMode>
    </Router>
  );
}
