import { FC, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import MenuHamburger from '../components/MenuHamburger';
import Header from '../components/Header';
import Loading from '../components/Loading';

interface socialProps {}

const Social: FC<socialProps> = ({}) => {
  const [mySocials, setMySocials] = useState<any>(null)

  useEffect(() => {
    fetch('/api/social')
    .then(resp => resp.json())
    .then(setMySocials)
  }, [])

  return (
    <div className='color'>
      <div className='lg:hidden xl:hidden'>
        <MenuHamburger />
      </div>
      <Header />
      <div className='flex flex-col gap-10 sm:pt-[110px] sm:p-10 md:p-10 md:pt-20'>
        <h1 className='text-4xl'>
          <strong>Social Networks:</strong>
        </h1>
        {!mySocials ? <Loading /> : (
          <div className="flex gap-3 justify-center">
            {mySocials.map((e: any, i: number) => (
              <div key={ i } className='flex items-center justify-center'>
                <a
                  className='scale-100 hover:scale-110 transition-transform'
                  href={e.ref}
                  target='_blank'
                  rel='noreferrer'
                >
                  <picture>
                      <img
                      src={e.image}
                      alt={e.name}
                      className='w-[80px]'
                      />
                  </picture>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Social;
