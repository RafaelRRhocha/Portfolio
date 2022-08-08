import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function Technologies() {
  return (
    <div className="color">
      <Header />
      <section>
        <h1 className='text-4xl mt-36'>
          <strong>My Skills:</strong>
        </h1>{' '}
        <div className='tecnologias'>
        <nav className='mt-10 flex justify-center'>
            <a
              data-tooltip='Git'
              className='zoom frames m-11'
              href='https://git-scm.com'
              target='_blank' rel="noreferrer"
            >
              <img src="https://user-images.githubusercontent.com/99758843/178770610-65f7917f-0482-4d0d-9d0a-17b343e29ebc.svg" alt='git' className='h-28 ml-2'/>
            </a>

            <a
              data-tooltip='GitHub'
              className='zoom frames m-11'
              href='https://github.com'
              target='_blank' rel="noreferrer"
            >
              <img src="https://user-images.githubusercontent.com/99758843/178770614-99730f1e-534d-46ce-b7f7-673c76bfae68.svg" alt='GitHub' className='ml-4 w-[105px] h-[105px]'/>
            </a>

            <a
              data-tooltip='Html'
              className='zoom frames m-11'
              href='https://developer.mozilla.org/pt-BR/docs/Web/HTML'
              target='_blank' rel="noreferrer"
            >
              <img src="https://user-images.githubusercontent.com/99758843/178770615-f16772a0-20ab-49bd-9518-3c0b54fa06e3.svg" alt='html' className='h-24 ml-4'/>
            </a>

            <a
              data-tooltip='Css'
              className='zoom frames m-11'
              href='https://developer.mozilla.org/pt-BR/docs/Web/CSS'
              target='_blank' rel="noreferrer"
            >
              <img src="https://user-images.githubusercontent.com/99758843/178770604-a7f60871-e37c-4f76-ac15-40b635f295b7.svg" alt='css' className='h-24 ml-4'/>
            </a>
          </nav>

          <nav className='mt-10 flex justify-center'>
            <a
                data-tooltip='JavaScript'
                className='zoom frames m-11'
                href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
                target='_blank' rel="noreferrer"
              >
                <img src="https://user-images.githubusercontent.com/99758843/178770617-aa9288f6-619d-449d-b6ac-afa89761edf1.svg" alt='javaScript' className='h-24 ml-4' />
            </a>

            <a
                data-tooltip='TypeScript'
                className='zoom frames m-11'
                href='https://www.typescriptlang.org'
                target='_blank' rel="noreferrer"
              >
                <img src="https://user-images.githubusercontent.com/99758843/178770630-a6f6c0bc-a718-4cde-b794-46735acd9af7.svg" alt='typeScript' className='h-24 ml-4' />
            </a>

            <a
              data-tooltip='Tailwind'
              className='zoom frames m-11'
              href='https://tailwindcss.com/docs/installation'
              target='_blank' rel="noreferrer"
            >
              <img src="https://user-images.githubusercontent.com/99758843/178770625-43ca658e-63b3-477d-831a-43c8b7ab5d4d.svg" alt='Tailwind Css' className='h-24 ml-4' />
            </a>

            <a
                data-tooltip='Jest'
                className='zoom frames m-11'
                href='https://jestjs.io/pt-BR/docs/getting-started'
                target='_blank' rel="noreferrer"
              >
                <img src="https://user-images.githubusercontent.com/99758843/178770619-48843414-5e90-4405-b81b-2ec96a4d8827.svg" alt='jest' className='h-24 ml-4'/>
            </a>
          </nav>

          <nav className='mt-10 flex justify-center'>
            <a
              data-tooltip='React'
              className='zoom frames m-11'
              href='https://pt-br.reactjs.org/docs/getting-started.html'
              target='_blank' rel="noreferrer"
            >
              <img src="https://user-images.githubusercontent.com/99758843/178770622-34ccb59e-527e-4c2d-9e22-2c29946cf3eb.svg" alt='react' className='h-24 ml-2'/>
            </a>

            <a
              data-tooltip='RTL'
              className='zoom frames m-11'
              href='https://testing-library.com/docs/react-testing-library/intro/'
              target='_blank' rel="noreferrer"
            >
              <img src="https://user-images.githubusercontent.com/99758843/178770624-d723b893-4f6a-41c8-bdee-99ce79946626.png" alt='React Testing Library' className='h-24 ml-4' />
            </a>

            <a
              data-tooltip='Redux'
              className='zoom frames m-11'
              href='https://redux.js.org'
              target='_blank' rel="noreferrer"
            >
              <img src="https://user-images.githubusercontent.com/99758843/178771208-02115902-024f-4156-bd96-f8eadeadd453.svg" alt='redux' className='h-24 ml-4' />
            </a>

            <a
              data-tooltip='MySQL'
              className='zoom frames m-11'
              href='https://www.mysql.com/'
              target='_blank' rel="noreferrer"
              >
                <img src="https://user-images.githubusercontent.com/99758843/183508361-75dbbdbe-e309-401c-b0cc-8e2b51458146.png" alt='mySql' className='h-24 ml-3' />
            </a>
          </nav>

          <nav className='mt-10 flex justify-center'>
            <a
              data-tooltip='NodeJS'
              className='zoom frames m-11'
              href='https://nodejs.org/en/'
              target='_blank' rel="noreferrer"
            >
              <img src="https://img.icons8.com/fluency/192/node-js.png" alt='nodeJS' className='h-24 ml-4'/>
            </a>

            <a
              data-tooltip='ExpressJs'
              className='zoom frames m-11'
              href='http://expressjs.com/pt-br/'
              target='_blank' rel="noreferrer"
            >
              <img src="https://user-images.githubusercontent.com/99758843/183512381-7c8fc1a1-79db-4d46-8489-fe23d4e661ad.png" alt='express' className='h-24 ml-4' />
            </a>

            <a
              data-tooltip='MongoDB'
              className='zoom frames m-11'
              href='https://testing-library.com/docs/react-testing-library/intro/'
              target='_blank' rel="noreferrer"
            >
              <img src="https://img.icons8.com/color/288/mongodb.png" alt='MongoDB' className='h-24 ml-4' />
            </a>


            <a
              data-tooltip='Python'
              className='zoom frames m-11'
              href='https://www.python.org/'
              target='_blank' rel="noreferrer"
              >
                <img src="https://img.icons8.com/color/288/python--v1.png" alt='python' className='h-24 ml-3' />
            </a>
          </nav>
        </div>
        <h1 className='text-4xl pt-[100px]'>
          <strong>Most used Languages:</strong>
        </h1>{' '}
        <div>
          <img
            className='m-auto h-44'
            src='https://github-readme-stats.vercel.app/api/top-langs/?username=RafaelRRhocha&theme=great-gatsby&bg_color=171212&border_color=171212&hide_title=true&layout=compact'
          />
        </div>{' '}
      </section>
      <Footer />
    </div>
  );
}
