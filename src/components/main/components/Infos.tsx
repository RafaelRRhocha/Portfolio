import { CaretDoubleDown } from "phosphor-react";

export function Infos() {
  return (
    <>
      <header className='flex align-center justify-around'>
        <nav className='cabecalho-menu flex gap-11 m-auto'>
          <a className='leading-[2.5] font-semibold hover:text-[#61A6F4] transition-transform' href='#sobre-mim'>About Me</a>
          <a className='leading-[2.5] font-semibold hover:text-[#61A6F4] transition-transform' href='#redes-sociais'>Social Networks</a>
          <a className='leading-[2.5] font-semibold hover:text-[#61A6F4] transition-transform' href='#formacoes'>Training</a>
          <a className='leading-[2.5] font-semibold hover:text-[#61A6F4] transition-transform' href='#tecnologias'>Technologies</a>
          <a className='leading-[2.5] font-semibold hover:text-[#61A6F4] transition-transform' href='#projetos'>Projects</a>
        </nav>
      </header>

      <section className='rafael-nome'>
        <p>
          Rafael <span className='colorH'>Rocha.</span>
          <br />
          Web <span className='colorH'>Developer</span> <br />
        </p>
      </section>

      <CaretDoubleDown className='animate-icons m-auto text-[4rem] opacity-100 text-[#61A6F4]'/>

    </>
  );
}
