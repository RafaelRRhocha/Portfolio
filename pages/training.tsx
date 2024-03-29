import type { FC } from 'react';
import Footer from '../components/Footer';
import MenuHamburger from '../components/MenuHamburger';
import Header from '../components/Header';

interface trainingProps {}

const Training: FC<trainingProps> = ({}) => {
  return (
    <div className='color'>
      <Header />
      <div className='lg:hidden xl:hidden'>
        <MenuHamburger />
      </div>
      <div className='flex flex-col gap-2 sm:pt-20 sm:p-10 md:p-10 md:pt-20'>
        <h1 className='text-4xl'>
          <strong>Training:</strong>
        </h1>
        <div className='flex justify-center font-semibold pt-[60px]'>
          <nav className='flex sm:flex-col md:flex-col lg:flex-row xl:flex-row sm:gap-10 md:gap-10 text-center sm:text-[20px] justify-center'>
            <a
              className='scale-100 hover:scale-110 transition-transform'
              href='https://drive.google.com/file/d/1kvqlPQDmbvX_4H40O9n96eOTxLlLs4wn/view'
              target='_blank'
              rel='noreferrer'
            >
              <picture>
                <img
                  className='m-auto w-36 h-36'
                  src='https://user-images.githubusercontent.com/99758843/178768997-eb8c4286-1401-4a66-acb3-bda305d9b7b1.png'
                  alt='desenvolvimento web - trybe'
                />
              </picture>
              <p>
                Trybe <br />
                Web development
              </p>
            </a>

            <a
              className='scale-100 hover:scale-110 transition-transform ml-9'
              href='https://drive.google.com/file/d/19CBUErmCBtMIa8FKlsoqO9uwyXgTfo9b/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <picture>
                <img
                  className='m-auto w-44 h-36'
                  src='https://user-images.githubusercontent.com/99758843/178768991-81be69eb-ee8c-44a9-b86b-85e51f8e6120.png'
                  alt='Montagem e Manutenção - DataFox'
                />
              </picture>
              <p>
                Data Fox <br />
                Mounting and maintenance
              </p>
            </a>
          </nav>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Training;
