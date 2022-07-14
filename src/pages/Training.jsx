import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function Training() {
  return (
    <div className="color">
      <Header />
      <section className='flex flex-col justify-center font-semibold pt-[60px]'>
        <h1 className='text-4xl'>
          <strong>Training:</strong>
        </h1>
        <br />
        <nav className='itens-formacoes flex justify-center'>
          <a
            className='zoom'
            href='https://drive.google.com/file/d/1kvqlPQDmbvX_4H40O9n96eOTxLlLs4wn/view'
            target='_blank' rel="noreferrer"
          >
            <img
              className='m-auto w-36 h-36'
              src="https://user-images.githubusercontent.com/99758843/178768997-eb8c4286-1401-4a66-acb3-bda305d9b7b1.png"
              alt='desenvolvimento web - trybe'
            />
            <p className='text-center'>
              Trybe <br />
              Web development
            </p>
          </a>

          <a
            className='zoom ml-9'
            href='https://drive.google.com/file/d/19CBUErmCBtMIa8FKlsoqO9uwyXgTfo9b/view?usp=sharing'
            target='_blank' rel="noreferrer"
          >
            <img
              className='m-auto w-44 h-36'
              src="https://user-images.githubusercontent.com/99758843/178768991-81be69eb-ee8c-44a9-b86b-85e51f8e6120.png"
              alt='Montagem e Manutenção - DataFox'
            />
            <p className='text-center'>
              Data Fox <br />
              Assembly and maintenance
            </p>
          </a>
        </nav>
      </section>
      <Footer />
    </div>
  );
}
