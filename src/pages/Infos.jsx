import React, { useEffect } from 'react';
import MenuHamburger from '../components/MenuHamburger';
import '../css/planets.css'

export function Infos() {
  useEffect(() => {
    let scene = document.getElementById("scene");
    // eslint-disable-next-line no-undef
    new Parallax(scene);
  }, []);

  return (
    <>
      <MenuHamburger />
      <div className="bg-no-repeat bg-cover bg-imagebg h-[100vh] overflow-hidden">
        <ul id="scene">
          <li className="layer" data-depth="1"><img className="planet" src="https://i.postimg.cc/44LxkHX9/Space-BP.png"/></li>
          <li className="layer" data-depth="-1"><img className="planet" src="https://i.postimg.cc/vH4HQ8mS/Space-RP.png"/></li>
          <li className="layer" data-depth="2"><img className="planet" src="https://i.postimg.cc/RV2Cqr6C/Space-PP.png"/></li>
          <li className="layer" data-depth="0.5"><img className="planet" src="https://i.postimg.cc/fyrzxp8K/Space-Meteors.png"/></li>
          <li className="layer" data-depth=".1"><p className="rafael-name sm:top-[300px] sm:text-[2rem] md:text-[3rem] lg:text-[5rem] xl:text-[5rem]">Rafael Rocha <br /> Front End Developer</p></li>
        </ul>
      </div>
    </>
  );
}
