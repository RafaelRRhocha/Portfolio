import type { FC } from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';
import MenuHamburger from '../../components/MenuHamburger';
import Header from '../../components/Header';

interface projectsProps {}

const Projects: FC<projectsProps> = ({}) => {
  return(
    <div className="color">
      <Header />
      <div className="lg:hidden xl:hidden">
        <MenuHamburger />
      </div>
      <div className="flex sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-center sm:pt-20 sm:p-10 md:p-10 md:pt-20 gap-10">
        <div className="card card-side shadow-xl max-w-lg max-h-[400px]">
          <picture>
            <img className="w-[140px] h-[100%]" src="https://placeimg.com/200/280/tech" alt="projects cards" />
          </picture>
          <div className="card-body">
            <h2 className="card-title">Front End Projects</h2>
            <p className="sm:hidden md:hidden lg:flex xl:flex">See all my projects as a Front End developer</p>
            <div className="card-actions justify-end">
              <Link href="/projects/frontend">
                <button className="btn btn-primary">See Projects</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-side shadow-xl max-w-lg max-h-[400px]">
          <picture>
            <img className="w-[140px] h-[100%]" src="https://placeimg.com/200/280/tech/grayscale" alt="projects cards" />
          </picture>
          <div className="card-body">
            <h2 className="card-title">Back End Projects</h2>
            <p className="sm:hidden md:hidden lg:flex xl:flex">See all my projects as a Back End Developer</p>
            <div className="card-actions justify-end">
              <Link href="/projects/backend">
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

export default Projects;