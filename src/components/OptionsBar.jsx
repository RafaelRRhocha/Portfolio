import { UserCirclePlus, SignOut } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { DarkMode } from './DarkMode';

export function OptionsBar() {
  return(
    <div>
      <div className="flex flex-col sm:flex-row md:flex-row items-center gap-[20px]">
        <Link to="/">
          <SignOut className="w-8 h-8" />
        </Link>
        <Link to="/contact">
          <UserCirclePlus className="w-8 h-8" />
        </Link>
        <DarkMode />
      </div>
    </div>
  )
}