import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Infos } from './pages/Infos';
import { AboutMe } from './pages/AboutMe';
import { Social } from './pages/Social';
import { Training } from './pages/Training';
import { Technologies } from './pages/Technologies';
import { Projects } from './pages/Projects';
import { FrontEndProjects } from './components/FrontEndProjects';
import { BackEndProjects } from './components/BackEndProjects';
import { NotFound } from './components/NotFound';
import './css/cards.css';
import './css/style.css';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Infos } />
      <Route path="/aboutme" component={ AboutMe } />
      <Route path="/social" component={ Social } />
      <Route path="/training" component={ Training } />
      <Route path="/technologies" component={ Technologies } />
      <Route path="/projects" component={ Projects } />
      <Route path="/frontend" component={ FrontEndProjects } />
      <Route path="/backend" component={ BackEndProjects } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}
