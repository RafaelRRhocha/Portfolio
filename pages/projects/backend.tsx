import type { FC } from 'react';
import Footer from '../../components/Footer';
import MenuHamburger from '../../components/MenuHamburger';
import Header from '../../components/Header';

interface backendProps {}

const Backend: FC<backendProps> = ({}) => {
  return(
    <div className="color">
      <Header />
      <div className="lg:hidden xl:hidden">
        <MenuHamburger />
      </div>
      <h1 className="text-center p-10">Coming Soon!</h1>
      <Footer />
    </div>
  )
}
export default Backend;