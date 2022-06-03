import datafoxLogo from '../../../assets/icons/datafox_logo.png';
import trybe from'../../../assets/icons/trybe-png.png'

export function Training() {
  return (
    <section className='flex flex-col justify-center font-semibold' id='formacoes'>
      <h1 className='text-4xl'>
        <strong>Training:</strong>
      </h1>
      <br />
      <nav className='itens-formacoes flex justify-center'>
        <a
          className='zoom'
          href='https://drive.google.com/file/d/1kvqlPQDmbvX_4H40O9n96eOTxLlLs4wn/view'
          target='_blank'
        >
          <img
            className='m-auto w-40 h-36'
            src={trybe}
            alt='desenvolvimento web - trybe'
          />
          <p className='text-center'>
            Trybe <br />
            Web development
          </p>
        </a>

        <a
          className='zoom ml-9'
          href='https://drive.google.com/file/d/19CBUErmCBtMIa8FKlsoqO9uwyXgTfo9b/view?usp=sharing'
          target='_blank'
        >
          <img
            className='m-auto w-44 h-36'
            src={datafoxLogo}
            alt='Montagem e Manutenção - DataFox'
          />
          <p className='text-center'>
            Data Fox <br />
            Assembly and maintenance
          </p>
        </a>
      </nav>
    </section>
  );
}
