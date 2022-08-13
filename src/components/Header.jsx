import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return(
    <header className='hidden align-center justify-around lg:flex xl:flex'>
      <nav className='cabecalho-menu flex gap-11 m-auto'>
        <Link to="/aboutme">
          <p className='leading-[2.5] font-semibold hover:text-[#e6ba23] transition-transform cursor-pointer'>About Me</p>
        </Link>
        <Link to="/social">
          <p className='leading-[2.5] font-semibold hover:text-[#e6ba23] transition-transform cursor-pointer'>Social Networks</p>
        </Link>
        <Link to="/training">
          <p className='leading-[2.5] font-semibold hover:text-[#e6ba23] transition-transform cursor-pointer'>Training</p>
        </Link>
        <Link to="/technologies">
          <p className='leading-[2.5] font-semibold hover:text-[#e6ba23] transition-transform cursor-pointer'>Technologies</p>
        </Link>
        <Link to="/projects">
          <p className='leading-[2.5] font-semibold hover:text-[#e6ba23] transition-transform hover:cursor-pointer'>Projects</p>
        </Link>
      </nav>
  </header>
  )
}
