import React, { useEffect } from 'react';
import MenuHamburger from '../components/MenuHamburger';

export function Infos() {
  useEffect(() => {
    let scene = document.getElementById("scene");
    // eslint-disable-next-line no-undef
    new Parallax(scene);
  }, []);

  return (
    <>
      <MenuHamburger />
      <div className="bg-no-repeat bg-cover bg-imagebg h-[100vh] overflow-hidden flex items-center justify-center">
        <ul id="scene" className="w-full h-full">
          <li className="w-full h-full" data-depth="1"><img className="transform-translate w-auto h-auto absolute top-[50%] left-[50%]" src="https://i.postimg.cc/44LxkHX9/Space-BP.png"/></li>
          <li className="w-full h-full" data-depth="-1"><img className="transform-translate w-auto h-auto absolute top-[50%] left-[50%]" src="https://i.postimg.cc/vH4HQ8mS/Space-RP.png"/></li>
          <li className="w-full h-full" data-depth="2"><img className="transform-translate w-auto h-auto absolute top-[50%] left-[50%]" src="https://i.postimg.cc/RV2Cqr6C/Space-PP.png"/></li>
          <li className="w-full h-full" data-depth="0.5"><img className="transform-translate w-auto h-auto absolute top-[50%] left-[50%]" src="https://i.postimg.cc/fyrzxp8K/Space-Meteors.png"/></li>
          <li className="w-full h-full" data-depth=".1"><p className="text-shadow flex justify-center mt-[12%] text-white uppercase font-extrabold sm:mt-[300px] sm:text-[2rem] md:text-[3rem] lg:text-[5rem] xl:text-[5rem]">Rafael Rocha <br /> Front End Developer</p></li>
        </ul>
      </div>
    </>
  );
}
