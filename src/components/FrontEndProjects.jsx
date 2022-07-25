import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export function FrontEndProjects() {
  return (
   <div className="color">
    <Header />
      <section className='Projetos pt-20'>
        <h1 className='text-4xl'>
          <strong>Front End Projects:</strong>
        </h1>
        <nav className='box-geral'>
          <div className='box'>
            <div className='text-content'>
              <img src="https://user-images.githubusercontent.com/99758843/178772396-7737bcce-9276-4a20-9dbd-8c1d5afb62b0.svg" alt='pokebola' className='h-14' />
              <h2>Pokedex</h2>
              <p>
                Pokedex Made using the PokeApi. Project that lists all Pokemon
                From the Kanto Region. <br />
                <strong>Technologies Used:</strong> <br /> Html, Css, Js
              </p>
              <a
                target='_blank'
                href='https://rafaelrrhocha.github.io/Projetos/Pokedex/' rel="noreferrer"
              >
                See More
              </a>
            </div>
          </div>

          <div className='box'>
            <div className='text-content'>
              <img src="https://user-images.githubusercontent.com/99758843/178772393-562c6fb6-c582-4c40-bc6f-bd8c6013fa03.svg" alt='pixel-art' className='h-14' />
              <h2>Pixel Art</h2>
              <p>
                Project that simulates a frame of drawings, where you can change
                the frame size, colors and customize the frame as you see fit.{' '}
                <br />
                <strong>Technologies Used:</strong> <br /> Html, Css, Js
              </p>
              <a
                target='_blank'
                href='https://rafaelrrhocha.github.io/Projetos/02-PixelArt/' rel="noreferrer"
              >
                See More
              </a>
            </div>
          </div>

          <div className='box'>
            <div className='text-content'>
              <img src="https://user-images.githubusercontent.com/99758843/178772402-3a6be876-cc90-4e89-b60e-0bdb70401b30.svg" alt='agenda' className='h-14' />
              <h2>To-Do List</h2>
              <p>
                A list of Tasks with various Features, from adding content,
                remove, remove selected and save in browser. <br />
                <strong>Technologies Used:</strong> <br /> Html, Css, Js
              </p>
              <a
                target='_blank'
                href='https://rafaelrrhocha.github.io/Projetos/03-listaDeTarefas/' rel="noreferrer"
              >
                See More
              </a>
            </div>
          </div>
        </nav>

        <nav className='box-geral'>
          <div className='box'>
            <div className='text-content'>
              <img src="https://user-images.githubusercontent.com/99758843/178772380-b06f5cdf-f36c-48c1-9995-e49d6dbdc87b.svg" alt='color' className='h-14' />
              <h2>Color Guess</h2>
              <p>
                Project that simulates a game of colors, in which the aim is to
                hit the color in the corresponding frame to the RGB name. <br />
                <strong>Technologies Used:</strong> <br /> Html, Css, Js, Bootstrap
              </p>
              <a
                target='_blank'
                href='https://rafaelrrhocha.github.io/Projetos/04-ColorGuess/' rel="noreferrer"
              >
                See More
              </a>
            </div>
          </div>

          <div className='box'>
            <div className='text-content'>
              <img src="https://user-images.githubusercontent.com/99758843/178772398-be9e0edf-0239-414d-9dba-8d87a2fb11a9.svg" alt='trybewarts' className='h-14' />
              <h2>TrybeWarts</h2>
              <p>
                Complete form for the purpose to get user information and send to
                a database. <br />
                <strong>Technologies Used:</strong> <br /> Html, Css, Js, Jest,
                Bootstrap
              </p>
              <a
                target='_blank'
                href='https://rafaelrrhocha.github.io/Projetos/05-Trybewarts/' rel="noreferrer"
              >
                See More
              </a>
            </div>
          </div>

          <div className='box'>
            <div className='text-content'>
              <img src="https://user-images.githubusercontent.com/99758843/178772409-140ee5fa-2f94-4421-95ee-d8c3994bd5be.svg" alt='carrinho' className='h-14' />
              <h2>Shopping Cart</h2>
              <p>
                Full shopping cart, simulation of purchase in a store online,
                working with requisition of API. <br />
                <strong>Technologies Used:</strong> <br /> Html, Css, Js, Jest
              </p>
              <a
                target='_blank'
                href='https://rafaelrrhocha.github.io/Projetos/shoppingCart/' rel="noreferrer"
              >
                See More
              </a>
            </div>
          </div>
        </nav>

        <nav className='box-geral'>
          <div className='box'>
            <div className='text-content'>
              <img src="https://user-images.githubusercontent.com/99758843/178772407-6d19772c-a353-4015-b359-26109fb4523c.svg" alt='color' className='h-14' />
              <h2>Card Generator</h2>
              <p>
                A project that the user can define name, description, properties,
                image and set as a favorite, all with a preview of what he is
                doing, after which it can be added and filtered.
                <br />
                <strong>Technologies Used:</strong> <br /> React, Jest
              </p>
              <a
                target='_blank'
                href='https://card-generator-rafaelrrhocha.vercel.app' rel="noreferrer"
              >
                See More
              </a>
            </div>
          </div>

          <div className='box'>
            <div className='text-content'>
              <img src="https://user-images.githubusercontent.com/99758843/178772388-c24eabdc-f97a-4723-8631-ad7ddfa1a264.svg" alt='PreviewTunes' className='h-14' />
              <h2>Preview Songs</h2>
              <p>
                A project that the user can enter in the application, interact
                between routes, listen to previews of songs by their favorite
                artists and listen at will, favorite the songs and edit the
                profile.
                <br />
                <strong>Technologies Used:</strong> <br /> React, React-Router,
                Tailwind, Jest
              </p>
              <a
                target='_blank'
                href='https://preview-songs-rafaelrrhocha.vercel.app' rel="noreferrer"
              >
                See More
              </a>
            </div>
          </div>

          <div className='box'>
            <div className='text-content'>
              <img src="https://user-images.githubusercontent.com/99758843/178772411-339f49d0-9ae7-4618-bcc4-4d9834b7dce8.svg" alt='carts' className='h-14' />
              <h2>Online Store</h2>
              <p>
                An online store where the user can interact, select the product,
                see which ones have free shipping, select by category and search
                for products, as well as view details, cart and checkout.
                <br />
                <strong>Technologies Used:</strong> <br /> React, React-Router,
                Tailwind, Jest
              </p>
              <a
                target='_blank'
                href='https://online-store-rafaelrrhocha.vercel.app' rel="noreferrer"
              >
                See More
              </a>
            </div>
          </div>
        </nav>

        <nav className='box-geral'>
          <div className='box'>
            <div className='text-content flex flex-col items-center'>
              <img src="https://user-images.githubusercontent.com/99758843/180787757-108c0f58-e8e4-484d-a495-76b4864b2c57.png" alt='wallet' className='h-14 w-14' />
              <h2>Portfolio of Expenses</h2>
              <p>
                A spreadsheet of expenses so you can create columns for the month,
                description of the expense or income,
                in short, its a CRUD-based application <br />
                <strong>Technologies Used:</strong> <br /> React, Redux, RTL, CRUD
              </p>
              <a
                target='_blank'
                href='https://carteira-de-gastos-rafaelrrhocha.vercel.app' rel="noreferrer"
              >
                See More
              </a>
            </div>
          </div>

          <div className='box'>
            <div className='text-content flex flex-col items-center'>
              <img src="https://user-images.githubusercontent.com/99758843/180788642-925e62b1-d9a6-4a18-b6df-493e0870e13a.png" alt='trivia' className='h-14 w-[130px]' />
              <h2>Trivia Game</h2>
              <p>
                Quiz trivia games: the ultimate quiz website!
                Here you will find a selection of quizzes including trivia,
                multiple choice!<br />
                <strong>Technologies Used:</strong> <br /> React, Redux, RTL, Tailwind
              </p>
              <a
                target='_blank'
                href='https://trivia-rafaelrrhocha.vercel.app' rel="noreferrer"
              >
                See More
              </a>
            </div>
          </div>

          <div className='box'>
            <div className='text-content'>
              <img src="https://img.icons8.com/color/288/star-wars.png" alt='star wars' className='w-14 h-14 png' />
              <h2>Star Wars Planets</h2>
              <p>
                This is a list of planets.
                Where in the galaxy are the worlds of Star Wars
                we can filter and choose different planets <br />
                <strong>Technologies Used:</strong> <br /> React, Context API, RTL, Tailwind
              </p>
              <a
                target='_blank'
                href='https://star-wars-planets-rafaelrrhocha.vercel.app' rel="noreferrer"
              >
                See More
              </a>
            </div>
          </div>
        </nav>

        <nav className='box-geral'>
          <div className='box'>
            <div className='text-content flex flex-col items-center'>
              <img src="https://img.icons8.com/color/192/netflix.png" alt='Netflix' className='h-14 w-14' />
              <h2>Netflix Clone</h2>
              <p>
                This project constitutes a visual clone of the netflix platform,
                where the user can edit the profile and navigate between the movies <br />
                <strong>Technologies Used:</strong> <br /> React, Tailwind
              </p>
              <a
                target='_blank'
                href='https://clone-netflix-rafaelrrhocha.vercel.app' rel="noreferrer"
              >
                See More
              </a>
            </div>
          </div>

          <div className='box'>
            <div className='text-content'>
              <img src="https://img.icons8.com/color/344/slack.png" alt='slack' className='w-14 h-14 png' />
              <h2>Slack Clone</h2>
              <p>...<br />
                <strong>Technologies Used:</strong> <br /> ...
              </p>
              <a
                target='_blank'
                href='#' rel="noreferrer"
              >
                See More
              </a>
            </div>
          </div>

          <div className='box'>
            <div className='text-content flex flex-col items-center'>
              <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-recipes-foodies-flaticons-lineal-color-flat-icons-3.png" alt='recipes' className='h-14' />
              <h2>Recipe Website/App</h2>
              <p>
                This is a recipe app, where the user can browse different recipes,
                favorite, finish, edit the profile and much more!! <br />
                <strong>Technologies Used:</strong> <br /> Redux, Context API, RTL, Tailwind
              </p>
              <a
                target='_blank'
                href='https://recipes-app-trybe.vercel.app' rel="noreferrer"
              >
                See More
              </a>
            </div>
          </div>
        </nav>

        <nav className='box-geral'>
          <div className='box'>
            <div className='text-content'>
              <img src="https://user-images.githubusercontent.com/99758843/178772385-b1885cd7-46b1-4024-bd20-eacd1a467be3.svg" alt='Super Mario' className='h-14' />
              <h2>Super Mario</h2>
              <p>
                A little retelling of the first mario game made with kaboom.js <br />
                <strong>Technologies Used:</strong> <br /> Js, Kaboom.js
              </p>
              <a
                target='_blank'
                href='https://rafaelrrhocha.github.io/Projetos/superMario/' rel="noreferrer"
              >
                See More
              </a>
            </div>
          </div>

          <div className='box'>
            <div className='text-content'>
              <img src="https://user-images.githubusercontent.com/99758843/178772405-0c4b68e5-6a0f-49e8-8309-37be6a4845d2.png" alt='bomberman' className='w-14 h-14 png' />
              <h2>Bomberman</h2>
              <p>
                A small retelling of one of the Bomberman franchise games. Made
                with kaboom.js. <br />
                <strong>Technologies Used:</strong> <br /> Js, Kaboom.js
              </p>
              <a
                target='_blank'
                href='https://rafaelrrhocha.github.io/Projetos/bomberman/' rel="noreferrer"
              >
                See More
              </a>
            </div>
          </div>

          <div className='box'>
            <div className='text-content'>
              <img src="https://user-images.githubusercontent.com/99758843/178772399-62f96376-a998-44b2-8928-4afad18dedcc.png" alt='zelda' className='w-14 h-14 png' />
              <h2>Zelda 1986</h2>
              <p>
                Game based minigame 1986 Zelda, Made with kaboom.js <br />
                <strong>Technologies Used:</strong> <br /> Js, Kaboom.js
              </p>
              <a
                target='_blank'
                href='https://rafaelrrhocha.github.io/Projetos/zelda-1986/' rel="noreferrer"
              >
                See More
              </a>
            </div>
          </div>
        </nav>
      </section>
      <Footer />
   </div>
  );
}
