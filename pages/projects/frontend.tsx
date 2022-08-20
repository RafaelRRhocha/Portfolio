import { FC, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import MenuHamburger from '../../components/MenuHamburger';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

interface frontendProps {}

const Frontend: FC<frontendProps> = ({}) => {
  const [frontEndProjects, setFrontEndProjects] = useState<any>(null)

  useEffect(() => {
    fetch('/api/frontendprojects')
    .then(resp => resp.json())
    .then(setFrontEndProjects)
  }, [])

  return (
    <div className="color">
     <Header />
     <div className="lg:hidden xl:hidden">
       <MenuHamburger />
     </div>
     <div className='pt-[120px]'>
       <h1 className='text-4xl'>
         <strong>Front End Projects:</strong>
       </h1>
       {!frontEndProjects ? <Loading /> : (
        <div className="flex sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap justify-center">
          {frontEndProjects.map((e: any, i: number) => (
            <div key={ i } className='box-geral p-7'>
              <div className='box'>
                <div className='text-content'>
                    <picture>
                      <img src={e.image} alt={e.name} className='h-14 m-auto' />
                    </picture>
                    <h2>{e.name}</h2>
                    <p>{e.description}</p>
                    <p className="font-semibold">Technologies Used:</p>
                    <p>{e.technologies}</p>
                    <a
                      target='_blank'
                      href={e.ref} rel="noreferrer"
                    >
                      See More
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
       )}
      </div>
    <Footer />
    </div>
  );
}

export default Frontend;