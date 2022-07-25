import React from 'react';
import '../css/style.css';
import { OptionsBar } from './OptionsBar';

export function Footer() {
  return (
    <div className="color">
      <div className="flex justify-center ml-[1200px]">
        <OptionsBar />
      </div>
      <div className="flex items-center justify-center">
        <p className="text-[1.2rem]">Developed by Rafael Rocha with React, Tailwind and Lots of Love ❤️</p>
      </div>
    </div>
  )
}
