import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function MenuHamburger() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  return (
    <div className="flex items-center justify-end p-8">
    <nav>
      <section className="MOBILE-MENU flex">
        <div
          className="HAMBURGER-ICON space-y-2 animate-pulse hover:cursor-pointer"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
           <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8 hover:cursor-pointer"
            onClick={() => setIsNavOpen(false)}
          >
          <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
          </div>
          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
            <Link to="/aboutme">
              <li className="border-b border-gray-400 my-6 uppercase scale-100 hover:scale-105 transition-all">About Me</li>
            </Link>
            <Link to="/social">
              <li className="border-b border-gray-400 my-6 uppercase scale-100 hover:scale-105 transition-all">Social</li>
            </Link>
            <Link to="/training">
              <li className="border-b border-gray-400 my-6 uppercase scale-100 hover:scale-105 transition-all">Training</li>
            </Link>
            <Link to="/technologies">
              <li className="border-b border-gray-400 my-6 uppercase scale-100 hover:scale-105 transition-all">Technologies</li>
            </Link>
            <Link to="/projects">
              <li className="border-b border-gray-400 my-6 uppercase scale-100 hover:scale-105 transition-all">Projects</li>
            </Link>
          </ul>
        </div>
      </section>
    </nav>
    <style>{`
    .hideMenuNav {
      display: none;
    }
    .showMenuNav {
      display: block;
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: #171212;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  `}</style>
  </div>
  );
}