import React from 'react';
import { useState } from "react";
import Link from 'next/link';
import type { FC } from 'react';

interface MenuHamburgerProps {}

const MenuHamburger: FC<MenuHamburgerProps> = ({}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-end">
      <div className="flex">
        <div
          className="hover:cursor-pointer absolute top-0 right-0 p-8"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
        </div>

        <div className={isNavOpen ? "absolute w-[100vw] h-[100vh] top-0 left-0 color z-10 flex flex-col justify-evenly items-center" : "hidden"}>
          <div
            className="absolute top-0 right-0 p-8 hover:cursor-pointer"
            onClick={() => setIsNavOpen(false)}
          >
          <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
          </div>
          <ul className="flex flex-col gap-16">
            <Link href="/aboutme">
              <li className="border-b border-gray-400 uppercase scale-100 hover:scale-105 transition-all cursor-pointer">About Me</li>
            </Link>
            <Link href="/social">
              <li className="border-b border-gray-400 uppercase scale-100 hover:scale-105 transition-all cursor-pointer">Social</li>
            </Link>
            <Link href="/training">
              <li className="border-b border-gray-400 uppercase scale-100 hover:scale-105 transition-all cursor-pointer">Socials</li>
            </Link>
            <Link href="/skills">
              <li className="border-b border-gray-400 uppercase scale-100 hover:scale-105 transition-all cursor-pointer">Skills</li>
            </Link>
            <Link href="/projects">
              <li className="border-b border-gray-400 uppercase scale-100 hover:scale-105 transition-all cursor-pointer">Projects</li>
            </Link>
            <Link href="/contact">
              <li className="border-b border-gray-400 uppercase scale-100 hover:scale-105 transition-all cursor-pointer">Contact Me</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuHamburger;