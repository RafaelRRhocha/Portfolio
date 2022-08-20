import { UserCirclePlus, SignOut } from 'phosphor-react';
import React from 'react';
import Link from 'next/link';
import DarkMode from './DarkMode';

import type { FC } from 'react';

interface OptionsBarProps {}

const OptionsBar: FC<OptionsBarProps> = ({}) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row md:flex-row items-center gap-[20px]">
        <Link href="/">
          <SignOut className="w-8 h-8 cursor-pointer" />
        </Link>
        <Link href="/contact">
          <UserCirclePlus className="w-8 h-8 cursor-pointer" />
        </Link>
        <DarkMode />
      </div>
    </div>
  );
}

export default OptionsBar;