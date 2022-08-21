import { FC, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import MenuHamburger from '../components/MenuHamburger';
import Header from '../components/Header';
import Loading from '../components/Loading';

interface skillsProps {}

const Skills: FC<skillsProps> = ({}) => {
  const [mySkills, setMySkills] = useState<any>(null)

  useEffect(() => {
    fetch('/api/skills')
    .then(resp => resp.json())
    .then(setMySkills)
  }, [])

  return (
    <div className='color'>
      <Header />
      <div className='lg:hidden xl:hidden'>
        <MenuHamburger />
      </div>
      <div className='flex flex-col justify-center items-center sm:pt-20 sm:p-10 md:p-10 md:pt-20'>
        <h1 className='text-4xl'>
          <strong>My Skills:</strong>
        </h1>
        <div className="flex sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-2 flex-row flex-wrap justify-center items-center w-[800px]">
          {!mySkills ? <Loading /> : (
            mySkills.map((e: any, i: number) => (
              <div key={ i } className='flex flex-col justify-center items-center'>
                <a
                  data-tip={e.name}
                  className='scale-100 hover:scale-110 transition-transform tooltip tooltip-bottom tooltip-error'
                  href={e.ref}
                  target='_blank'
                  rel='noreferrer'
                >
                  <picture>
                    <img
                      src={e.image}
                      alt={e.name}
                      className="sm:m-auto h-24 md:ml-11 md:mt-16 md:mr-11 lg:ml-11 lg:mt-16 lg:mr-11 xl:ml-11 xl:mt-16 xl:mr-11"
                    />
                  </picture>
                  <p className='text-[35px] m-auto md:hidden lg:hidden xl:hidden sm:flex'>{e.name}</p>
                </a>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
