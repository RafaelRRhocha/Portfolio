import React from 'react';
import Typewriter from "typewriter-effect";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import MenuHamburger from '../components/MenuHamburger';

export function Infos() {
  return (
    <div className="sm:h-[100vh] sm:w-[100vw]">
      <Header />
      <div className="flex flex-col lg:hidden xl:hidden">
        <MenuHamburger />
        <div className="text-[99%]">
          <span>{`Rafael Rocha`}</span>
          <div className="text-[#e6ba23]">
            <Typewriter
              onInit={(typewriter)=> {
                typewriter
                .typeString("Front End,")

                .pauseFor(1000)
                .deleteAll()
                .typeString("Back End,")

                .pauseFor(1000)
                .deleteAll()
                .typeString("Full Stack Developer.")
                .start();
              }}
            />
          </div>
        </div>
      </div>
      <section className='hidden lg:flex xl:flex justify-center pt-[4%] text-[4.5rem]'>
        <div className="text-left">
          <span>{`Rafael Rocha = {`}</span> <br/>
          <span className="text-[4rem]">{`Web Developer: `}</span> <br/>
          <div className="text-[#e6ba23] text-[4rem] ml-[450px] mt-[-97px]">
            <Typewriter
              onInit={(typewriter)=> {
                typewriter
                .typeString("Front End.")

                .pauseFor(1000)
                .deleteAll()
                .typeString("Back End.")

                .pauseFor(1000)
                .deleteAll()
                .typeString("Full Stack.")
                .start();
              }}
            />
          </div>
          <span>{`}`}</span>
        </div>
      </section>
      <Footer />
    </div>
  );
}
