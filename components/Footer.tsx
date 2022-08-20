import OptionsBar from './OptionsBar';

import type { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="color sm:py-10 md:py-10">
      <div className="flex justify-center sm:ml-[5px] md:ml-[5px] ml-[1200px]">
        <OptionsBar />
      </div>
      <div className="flex items-center justify-center sm:mt-[17px] md:mt-[17px]">
        <p className="text-[1.2rem]">Developed by Rafael Rocha with TypeScript, Next.js, Tailwind and Lots of Love ❤️</p>
      </div>
  </div>
  );
}

export default Footer;