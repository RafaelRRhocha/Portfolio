import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import MenuHamburger from './MenuHamburger';

export function BackEndProjects() {
  return(
    <div className="color">
      <Header />
      <div className="lg:hidden xl:hidden">
        <MenuHamburger />
      </div>
      <h1 className="text-center">Coming Soon!</h1>
      <Footer />
    </div>
  )
}