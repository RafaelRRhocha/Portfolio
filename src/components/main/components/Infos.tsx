import { CaretDoubleDown } from "phosphor-react";
import Typewriter from "typewriter-effect";

export function Infos() {
  return (
    <>
      <header className='flex align-center justify-around'>
        <nav className='cabecalho-menu flex gap-11 m-auto'>
          <a className='leading-[2.5] font-semibold hover:text-[#61A6F4] transition-transform mobileHeader' href='#sobre-mim'>About Me</a>
          <a className='leading-[2.5] font-semibold hover:text-[#61A6F4] transition-transform mobileHeader' href='#redes-sociais'>Social Networks</a>
          <a className='leading-[2.5] font-semibold hover:text-[#61A6F4] transition-transform mobileHeader' href='#formacoes'>Training</a>
          <a className='leading-[2.5] font-semibold hover:text-[#61A6F4] transition-transform mobileHeader' href='#tecnologias'>Technologies</a>
          <a className='leading-[2.5] font-semibold hover:text-[#61A6F4] transition-transform mobileHeader' href='#projetos'>Projects</a>
        </nav>
      </header>

      <section className='rafael-nome'>
        <p>
          Rafael <span>Rocha.</span>
          <br />
          <div className="text-[#00A9FF]">
            <Typewriter
              onInit={(typewriter)=> {
                typewriter
                .typeString("Front End.")

                .pauseFor(1000)
                .deleteAll()
                .typeString("Back End.")

                .pauseFor(1000)
                .deleteAll()
                .typeString("Full Stack")
                .start();
              }}
            />
          </div>
        </p>
      </section>

      <CaretDoubleDown className='animate-icons m-auto text-[4rem] opacity-100 text-[#61A6F4]'/>

    </>
  );
}
