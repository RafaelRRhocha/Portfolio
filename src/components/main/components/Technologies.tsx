import vite from '../../../assets/icons/vite.svg';
import jest from '../../../assets/icons/jest.svg';
import react from '../../../assets/icons/react.svg';
import git from '../../../assets/icons/git.svg';
import gitHub from '../../../assets/icons/github.svg';
import html from '../../../assets/icons/html.svg';
import css from '../../../assets/icons/css.svg';
import javaScript from '../../../assets/icons/javascript.svg';
import RTL from '../../../assets/icons/RTL-Logotipo.png';
import redux from'../../../assets/icons/redux.svg';
import tailwind from'../../../assets/icons/tailwind.svg';
import typeScript from'../../../assets/icons/typescript.svg';

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
        <strong>My Skills:</strong>
      </h1>{' '}
      <div className='tecnologias'>
      <nav className='mt-10 flex justify-center'>
          <a
            data-tooltip='Git'
            className='zoom frames m-11'
            href='https://git-scm.com'
            target='_blank'
          >
            <img src={git} alt='git' className='h-28 ml-2'/>
          </a>

          <a
            data-tooltip='GitHub'
            className='zoom frames m-11'
            href='https://github.com'
            target='_blank'
          >
            <img src={gitHub} alt='GitHub' className='ml-4 w-[105px] h-[105px]'/>
          </a>

          <a
            data-tooltip='Html'
            className='zoom frames m-11'
            href='https://developer.mozilla.org/pt-BR/docs/Web/HTML'
            target='_blank'
          >
            <img src={html} alt='html' className='h-24 ml-4'/>
          </a>

          <a
            data-tooltip='Css'
            className='zoom frames m-11'
            href='https://developer.mozilla.org/pt-BR/docs/Web/CSS'
            target='_blank'
          >
            <img src={css} alt='css' className='h-24 ml-4'/>
          </a>
        </nav>

        <nav className='mt-10 flex justify-center'>
          <a
              data-tooltip='JavaScript'
              className='zoom frames m-11'
              href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
              target='_blank'
            >
              <img src={javaScript} alt='javaScript' className='h-24 ml-4' />
          </a>

          <a
              data-tooltip='TypeScript'
              className='zoom frames m-11'
              href='https://www.typescriptlang.org'
              target='_blank'
            >
              <img src={typeScript} alt='typeScript' className='h-24 ml-4' />
          </a>

          <a
            data-tooltip='Tailwind'
            className='zoom frames m-11'
            href='https://tailwindcss.com/docs/installation'
            target='_blank'
          >
            <img src={tailwind} alt='Tailwind Css' className='h-24 ml-4' />
          </a>

          <a
              data-tooltip='Jest'
              className='zoom frames m-11'
              href='https://jestjs.io/pt-BR/docs/getting-started'
              target='_blank'
            >
              <img src={jest} alt='jest' className='h-24 ml-4'/>
          </a>
        </nav>

        <nav className='mt-10 flex justify-center'>
          <a
            data-tooltip='React'
            className='zoom frames m-11'
            href='https://pt-br.reactjs.org/docs/getting-started.html'
            target='_blank'
          >
            <img src={react} alt='react' className='h-24 ml-2'/>
          </a>

          <a
            data-tooltip='RTL'
            className='zoom frames m-11'
            href='https://testing-library.com/docs/react-testing-library/intro/'
            target='_blank'
          >
            <img src={RTL} alt='React Testing Library' className='h-24 ml-4' />
          </a>

          <a
            data-tooltip='Vite'
            className='zoom frames m-11'
            href='https://vitejs.dev'
            target='_blank'
            >
              <img src={vite} alt='Vite' className='h-24 ml-3' />
          </a>


          <a
            data-tooltip='Redux'
            className='zoom frames m-11'
            href='https://redux.js.org'
            target='_blank'
          >
            <img src={redux} alt='redux' className='h-24 ml-4' />
          </a>
        </nav>
      </div>
    </section>
  );
}
