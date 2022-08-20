import React, { useEffect } from 'react';
const Parallax = require('parallax-js')
import type { NextPage } from 'next';
import MenuHamburger from '../components/MenuHamburger';

const Home: NextPage = () => {
  useEffect(() => {
    let scene = document.getElementById("scene");
    new Parallax(scene);
  }, []);

  return (
    <>
      <MenuHamburger />
      <div className="bg-no-repeat bg-cover bg-imagebg h-[100vh] overflow-hidden flex items-center justify-center">
        <ul id="scene" className="w-full h-full">
          <li className="w-full h-full" data-depth="1"><picture><img className="transform-translate w-auto h-auto absolute top-[50%] left-[50%]" src="https://i.postimg.cc/44LxkHX9/Space-BP.png" alt="p-1"/></picture></li>
          <li className="w-full h-full" data-depth="-1"><picture><img className="transform-translate w-auto h-auto absolute top-[50%] left-[50%]" src="https://i.postimg.cc/vH4HQ8mS/Space-RP.png" alt="p-2"/></picture></li>
          <li className="w-full h-full" data-depth="2"><picture><img className="transform-translate w-auto h-auto absolute top-[50%] left-[50%]" src="https://i.postimg.cc/RV2Cqr6C/Space-PP.png" alt="p-3"/></picture></li>
          <li className="w-full h-full" data-depth="0.5"><picture><img className="transform-translate w-auto h-auto absolute top-[50%] left-[50%]" src="https://i.postimg.cc/fyrzxp8K/Space-Meteors.png" alt="p-4"/></picture></li>
          <li className="w-full h-full text-center" data-depth=".1"><p className="text-shadow flex justify-center mt-[12%] text-white uppercase font-extrabold sm:mt-[300px] sm:text-[2rem] md:text-[3rem] lg:text-[5rem] xl:text-[5rem]">Rafael Rocha <br /> Front End Developer</p></li>
        </ul>
      </div>
    </>
  );
}

export default Home

