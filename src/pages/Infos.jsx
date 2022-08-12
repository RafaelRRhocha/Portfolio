import React from 'react';
import Typewriter from "typewriter-effect";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import MenuHamburger from '../components/MenuHamburger';

export function Infos() {
  return (
    <div className="sm:h-[100vh] sm:w-[100vw] color">
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
      <div className='hidden lg:flex xl:flex justify-center pt-[4%] text-[4.5rem]'>
        <div className="flex flex-col text-left">
          <p>{`Rafael Rocha = {`}</p>
          <div className="text-[4rem] flex items-center gap-4 ml-7">
            <p>{`Web Developer:`}</p>
            <div className="text-[#e6ba23]">
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
          </div>
          <p>{`}`}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
