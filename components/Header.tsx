import Link from 'next/link';
import type { FC } from 'react';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className='hidden align-center justify-around lg:flex xl:flex'>
      <nav className='cabecalho-menu flex gap-11 m-auhref'>
        <Link href="/aboutme">
          <p className='leading-[2.5] font-semibold hover:text-[#e6ba23] transition-transform cursor-pointer'>About Me</p>
        </Link>
        <Link href="/social">
          <p className='leading-[2.5] font-semibold hover:text-[#e6ba23] transition-transform cursor-pointer'>Socials</p>
        </Link>
        <Link href="/training">
          <p className='leading-[2.5] font-semibold hover:text-[#e6ba23] transition-transform cursor-pointer'>Training</p>
        </Link>
        <Link href="/skills">
          <p className='leading-[2.5] font-semibold hover:text-[#e6ba23] transition-transform cursor-pointer'>Skills</p>
        </Link>
        <Link href="/projects">
          <p className='leading-[2.5] font-semibold hover:text-[#e6ba23] transition-transform hover:cursor-pointer'>Projects</p>
        </Link>
      </nav>
    </header>
  );
}

export default Header;