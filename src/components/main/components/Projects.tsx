import agenda from '../../../assets/icons/agenda-icon.svg';
import bomberman from '../../../assets/icons/bomberman.png';
import carrinho from '../../../assets/icons/carrinho.svg';
import color from '../../../assets/icons/color.svg';
import mario from '../../../assets/icons/mario.svg';
import pixel from '../../../assets/icons/pixel-icon.svg';
import pokebola from '../../../assets/icons/pokebola-icon.svg';
import trybewarts from '../../../assets/icons/trybewarts-colored.svg';
import zelda from '../../../assets/icons/zelda-img.png';

export function Projects() {
  return (
    <section className='Projetos' id='projetos'>
      <h1 className='text-4xl'>
        <strong>Projects:</strong>
      </h1>
      <nav className='box-geral'>
        <div className='box'>
          <div className='text-content'>
            <img src={pokebola} alt='pokebola' className='h-14' />
            <h2>Pokedex</h2>
            <p>
              Pokedex Made using the PokeApi. Project that lists all Pokemon
              From the Kanto Region. <br />
              <strong>Technologies Used:</strong> <br /> Html, Css, Js
            </p>
            <a
              target='_blank'
              href='https://rafaelrrhocha.github.io/Projetos/Pokedex/'
            >
              See More
            </a>
          </div>
        </div>

        <div className='box'>
          <div className='text-content'>
            <img src={pixel} alt='pixel-art' className='h-14' />
            <h2>Pixel Art</h2>
            <p>
              Project that simulates a 'frame' of drawings, where you can change
              the frame size, colors and customize the frame as you see fit.{' '}
              <br />
              <strong>Technologies Used:</strong> <br /> Html, Css, Js, Jest
            </p>
            <a
              target='_blank'
              href='https://rafaelrrhocha.github.io/Projetos/02-PixelArt/'
            >
              See More
            </a>
          </div>
        </div>

        <div className='box'>
          <div className='text-content'>
            <img src={agenda} alt='agenda' className='h-14' />
            <h2>To-Do List</h2>
            <p>
              A list of Tasks with various Features, from adding content,
              remove, remove selected and save in browser. <br />
              <strong>Technologies Used:</strong> <br /> Html, Css, Js, Jest,
              Bootstrap
            </p>
            <a
              target='_blank'
              href='https://rafaelrrhocha.github.io/Projetos/03-listaDeTarefas/'
            >
              See More
            </a>
          </div>
        </div>
      </nav>

      <nav className='box-geral'>
        <div className='box'>
          <div className='text-content'>
            <img src={color} alt='color' className='h-14' />
            <h2>Color Guess</h2>
            <p>
              Project that simulates a game of colors, in which the aim is to
              hit the color in the corresponding frame to the RGB name. <br />
              <strong>Technologies Used:</strong> <br /> Html, Css, Js, Jest,
              Bootstrap
            </p>
            <a
              target='_blank'
              href='https://rafaelrrhocha.github.io/Projetos/04-ColorGuess/'
            >
              See More
            </a>
          </div>
        </div>

        <div className='box'>
          <div className='text-content'>
            <img src={trybewarts} alt='trybewarts' className='h-14' />
            <h2>TrybeWarts</h2>
            <p>
              Complete form for the purpose to get user information and send to
              a database. <br />
              <strong>Technologies Used:</strong> <br /> Html, Css, Js, Jest,
              Bootstrap
            </p>
            <a
              target='_blank'
              href='https://rafaelrrhocha.github.io/Projetos/05-Trybewarts/'
            >
              See More
            </a>
          </div>
        </div>

        <div className='box'>
          <div className='text-content'>
            <img src={carrinho} alt='carrinho' className='h-14' />
            <h2>Shopping Cart</h2>
            <p>
              Full shopping cart, simulation of purchase in a store online,
              working with requisition of API. <br />
              <strong>Technologies Used:</strong> <br /> Html, Css, Js, Jest,
              Bootstrap
            </p>
            <a
              target='_blank'
              href='https://rafaelrrhocha.github.io/Projetos/shoppingCart/'
            >
              See More
            </a>
          </div>
        </div>
      </nav>

      <nav className='box-geral'>
        <div className='box'>
          <div className='text-content'>
            <img src={mario} alt='mario' className='h-14' />
            <h2>Super Mario</h2>
            <p>
              A little retelling of the first mario game made with Pure
              JavaScript. <br />
              <strong>Technologies Used:</strong> <br /> Js, Kaboom.js
            </p>
            <a
              target='_blank'
              href='https://rafaelrrhocha.github.io/Projetos/superMario/'
            >
              See More
            </a>
          </div>
        </div>

        <div className='box'>
          <div className='text-content'>
            <img src={bomberman} alt='bomberman' className='w-14 h-14 png' />
            <h2>Bomberman</h2>
            <p>
              A small retelling of one of the Bomberman franchise games. Made
              with pure JavaScript. <br />
              <strong>Technologies Used:</strong> <br /> Js, Kaboom.js
            </p>
            <a
              target='_blank'
              href='https://rafaelrrhocha.github.io/Projetos/bomberman/'
            >
              See More
            </a>
          </div>
        </div>

        <div className='box'>
          <div className='text-content'>
            <img src={zelda} alt='zelda' className='w-14 h-14 png' />
            <h2>Zelda 1986</h2>
            <p>
              Game based minigame 1986 Zelda, Made with pure JavaScript. <br />
              <strong>Technologies Used:</strong> <br /> Js, Kaboom.js
            </p>
            <a
              target='_blank'
              href='https://rafaelrrhocha.github.io/Projetos/zelda-1986/'
            >
              See More
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}
