import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import MenuHamburger from '../components/MenuHamburger';

export function Projects() {
  return(
    <div className="color">
      <Header />
      <div className="lg:hidden xl:hidden">
        <MenuHamburger />
      </div>
      <div className="flex sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-center p-[72px] gap-10">
        <div className="card card-side shadow-xl max-w-lg max-h-[400px]">
          <figure><img className="h-[100%] w-[140px]" src="https://placeimg.com/200/280/tech" alt="projects cards" /></figure>
          <div className="card-body">
            <h2 className="card-title">Front End Projects</h2>
            <p className="sm:hidden md:hidden lg:flex xl:flex">See all my projects as a Front End developer</p>
            <div className="card-actions justify-end">
              <Link to="/frontend">
                <button className="btn btn-primary">See Projects</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-side shadow-xl max-w-lg max-h-[400px]">
          <figure><img className="h-[100%] w-[140px]" src="https://placeimg.com/200/280/tech/grayscale" alt="projects cards" /></figure>
          <div className="card-body">
            <h2 className="card-title">Back End Projects</h2>
            <p className="sm:hidden md:hidden lg:flex xl:flex">See all my projects as a Back End Developer</p>
            <div className="card-actions justify-end">
              <Link to="/backend">
                <button className="btn btn-primary">See Projects</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}