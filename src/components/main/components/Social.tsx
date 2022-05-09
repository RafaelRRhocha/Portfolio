import github from '../../../assets/icons/github.svg';
import linkedin from '../../../assets/icons/linkedin.svg';
import gmail from '../../../assets/icons/gmail.svg';
import instagram from '../../../assets/icons/instagram.svg';
import steam from '../../../assets/icons/steam.svg';

export function Social() {
  return (
    <section className='redes-sociais p-20' id='redes-sociais'>
      <h1 className='text-4xl'>
        <strong>Social Networks:</strong>
      </h1>
      <br />
      <div className='flex justify-center'>
        <a
          className='zoom'
          href='https://github.com/RafaelRRhocha'
          target='_blank'
        >
          <img src={github} alt='github' className='w-20'/>
        </a>
        <a
          className='zoom'
          href='https://www.linkedin.com/in/rafael-rhocha/'
          target='_blank'
        >
          <img src={linkedin} alt='linkedin' className='w-20'/>
        </a>
        <a
          className='zoom'
          href='mailto:1rafaelrocha2@gmail.com'
          target='_blank'
        >
          <img src={gmail} alt='gmail'className='w-20'/>
        </a>
        <a
          className='zoom'
          href='https://www.instagram.com/rafaelrhocha/'
          target='_blank'
        >
          <img src={instagram} alt='instagram' className='w-20'/>
        </a>
        <a
          className='zoom'
          href='https://steamcommunity.com/id/GoldenCooler/'
          target='_blank'
        >
          <img src={steam} alt='steam' className='w-20'/>
        </a>
      </div>
    </section>
  );
}
