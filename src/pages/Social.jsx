import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function Social() {
  return (
    <div className="color">
     <Header />
      <section className='redes-sociais p-[112px]'>
        <h1 className='text-4xl'>
          <strong>Social Networks:</strong>
        </h1>
        <br />
        <div className='flex items-center justify-center'>
          <a
            className='zoom'
            href='https://github.com/RafaelRRhocha'
            target='_blank' rel="noreferrer"
          >
            <img src="https://user-images.githubusercontent.com/99758843/178845303-26391362-11f3-4fc3-97d6-e3af37bf1b0c.png" alt='github' className='w-[75px]'/>
          </a>
          <a
            className='zoom'
            href='https://www.linkedin.com/in/rafael-rhocha/'
            target='_blank' rel="noreferrer"
          >
            <img src="https://user-images.githubusercontent.com/99758843/178768113-4cb5112f-44db-42e8-810d-d3214eaed70d.svg" alt='linkedin' className='w-20'/>
          </a>
          <a
            className='zoom'
            href='mailto:1rafaelrocha2@gmail.com'
            target='_blank' rel="noreferrer"
          >
            <img src="https://user-images.githubusercontent.com/99758843/178768125-f186d0ee-dc66-47f1-a342-a811cf5c847a.svg" alt='gmail'className='w-20'/>
          </a>
          <a
            className='zoom'
            href='https://www.instagram.com/rafaelrhocha/'
            target='_blank' rel="noreferrer"
          >
            <img src="https://user-images.githubusercontent.com/99758843/178768107-6ee5c365-6535-4530-a2d5-51efe8180728.svg" alt='instagram' className='w-20'/>
          </a>
          <a
            className='zoom'
            href='https://steamcommunity.com/id/GoldenCooler/'
            target='_blank' rel="noreferrer"
          >
            <img src="https://user-images.githubusercontent.com/99758843/178768116-4e8ba850-9348-4d46-971c-dbaeb94d8dbd.svg" alt='steam' className='w-20'/>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
