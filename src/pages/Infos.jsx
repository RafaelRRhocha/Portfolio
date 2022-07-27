import React from 'react';
import Typewriter from "typewriter-effect";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Infos() {
  return (
    <div className="color">
      <Header />
      <section className='flex justify-center pt-[4%] text-[4.5rem]'>
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
