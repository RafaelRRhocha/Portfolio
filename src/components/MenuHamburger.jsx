import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function MenuHamburger() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  return (
    <div className="flex items-center justify-end">
      <div className="flex">
        <div
          className="hover:cursor-pointer absolute top-0 right-0 p-8"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
           <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
        </div>

        <div className={isNavOpen ? "absolute w-[100vw] h-[100vh] top-0 left-0 bg-[#171212] z-10 flex flex-col justify-evenly items-center" : "hidden"}>
          <div
            className="absolute top-0 right-0 p-8 hover:cursor-pointer"
            onClick={() => setIsNavOpen(false)}
          >
          <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
          </div>
          <ul className="flex flex-col items-center justify-around">
            <Link to="/aboutme">
              <li className="border-b border-gray-400 uppercase scale-100 hover:scale-105 transition-all">About Me</li>
            </Link>
            <Link to="/social">
              <li className="border-b border-gray-400 uppercase scale-100 hover:scale-105 transition-all">Social</li>
            </Link>
            <Link to="/training">
              <li className="border-b border-gray-400 uppercase scale-100 hover:scale-105 transition-all">Training</li>
            </Link>
            <Link to="/technologies">
              <li className="border-b border-gray-400 uppercase scale-100 hover:scale-105 transition-all">Technologies</li>
            </Link>
            <Link to="/projects">
              <li className="border-b border-gray-400 uppercase scale-100 hover:scale-105 transition-all">Projects</li>
            </Link>
            <Link to="/contact">
              <li className="border-b border-gray-400 uppercase scale-100 hover:scale-105 transition-all">Contact Me</li>
            </Link>
          </ul>
        </div>
      </div>
  </div>
  );
}