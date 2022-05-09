import bootstrap from '../../../assets/icons/bootstrap.svg';
import kaboom from '../../../assets/icons/kaboom.png';
import jest from '../../../assets/icons/jest.svg';
import react from '../../../assets/icons/react.svg';
// import redux from'../../../assets/icons/redux.svg'

export function Technologies() {
  return (
    <section className='p-36' id='tecnologias'>
      <h1 className='text-4xl'>
        <strong>Most used Languages:</strong>
      </h1>{' '}
      <div>
        <img
          className='m-auto h-44'
          src='https://github-readme-stats.vercel.app/api/top-langs/?username=RafaelRRhocha&theme=great-gatsby&bg_color=000312&border_color=000312&hide_title=true&layout=compact'
        />
      </div>{' '}

      <h1 className='text-4xl mt-36'>
        <strong>Frameworks/Libs:</strong>
      </h1>{' '}
      <div className='tecnologias'>
        <nav className='mt-10 flex justify-center'>
          <a
            data-tooltip='Bootstrap'
            className='zoom frames m-11'
            href='https://getbootstrap.com'
            target='_blank'
          >
            <img src={bootstrap} alt='Bootstrap' className='h-24' />
          </a>

          <a
            data-tooltip='Kaboom.js'
            className='zoom frames m-11'
            href='https://kaboomjs.com'
            target='_blank'
          >
            <img src={kaboom} alt='kaboom' className='h-28'/>
          </a>

          <a
            data-tooltip='Jest'
            className='zoom frames-2 m-11'
            href='https://jestjs.io/pt-BR/docs/getting-started'
            target='_blank'
          >
            <img src={jest} alt='jest' className='h-24'/>
          </a>

          <a
            data-tooltip='React'
            className='zoom frames-2 m-11'
            href='https://pt-br.reactjs.org/docs/getting-started.html'
            target='_blank'
          >
            <img src={react} alt='react' className='h-24'/>
          </a>
        </nav>
      </div>
    </section>
  );
}
