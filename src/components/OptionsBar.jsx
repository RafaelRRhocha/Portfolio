import React from 'react';
import { BackToHome } from './BackToHome';
import { DarkMode } from './DarkMode';

export function OptionsBar() {
  return(
    <div>
      <div className="flex flex-col items-center gap-[20px]">
        <BackToHome />
        <DarkMode />
      </div>
    </div>
  )
}