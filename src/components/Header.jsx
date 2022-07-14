import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return(
    <header className='flex align-center justify-around'>
    <nav className='cabecalho-menu flex gap-11 m-auto'>
      <Link to="/aboutme">
        <a className='leading-[2.5] font-semibold hover:text-[#61A6F4] transition-transform hover:cursor-pointer'>About Me</a>
      </Link>
      <Link to="social">
        <a className='leading-[2.5] font-semibold hover:text-[#61A6F4] transition-transform hover:cursor-pointer'>Social Networks</a>
      </Link>
      <Link to="training">
        <a className='leading-[2.5] font-semibold hover:text-[#61A6F4] transition-transform hover:cursor-pointer'>Training</a>
      </Link>
      <Link to="technologies">
        <a className='leading-[2.5] font-semibold hover:text-[#61A6F4] transition-transform hover:cursor-pointer'>Technologies</a>
      </Link>
      <Link to="projects">
        <a className='leading-[2.5] font-semibold hover:text-[#61A6F4] transition-transform hover:cursor-pointer'>Projects</a>
      </Link>
    </nav>
  </header>
  )
}
