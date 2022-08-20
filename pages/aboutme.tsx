import type { FC } from 'react';
import Footer from '../components/Footer';
import MenuHamburger from '../components/MenuHamburger';
import Header from '../components/Header';

interface aboutmeProps {}

const Aboutme: FC<aboutmeProps> = ({}) => {
    return (
        <div className="color">
            <Header />
            <div className="lg:hidden xl:hidden">
                <MenuHamburger />
            </div>
            <div className='text margin-auto flex flex-col gap-2'>
                <h1 className='text-4xl'>
                    <strong>About Me:</strong>
                </h1>
                <p>
                    Hi! How nice to see you here! My name is Rafael Rocha, Im 19 years
                    old. and i tell you a little about myself! <br />
                    I am from Campos dos Goytacazes - RJ, I really like my city but I have
                    plans to move when a good opportunity!
                    <br />
                    I have lived in other places in my city and also lived in Rio de
                    Janeiro <br />I have a very hectic life story, when I was 12 I had
                    <a
                    href='https://www.rededorsaoluiz.com.br/doencas/insuficiencia-renal-cronica'
                    target='_blank' rel="noreferrer"
                    >
                    <strong> chronic kidney failure </strong>
                    </a>
                    at 8 months I had the transplant and everything seemed relatively
                    well, at 3 months I ended up having one
                    <a
                    href='https://endoscopiaterapeutica.com.br/assuntosgerais/manejo-do-linfoma-malt/#:~:text=Os%20linfomas%20gástricos%20são%20neoplasias,mais%20de%2090%25%20dos%20casos.'
                    target='_blank' rel="noreferrer"
                    >
                    <strong> gastric lymphoma </strong>
                    </a>
                    <br />
                    Because of that I ended up undergoing 11 months of chemotherapy and
                    that its all been 5 years! <br />
                    From there to here it was just evolution, I went back to school I
                    graduated in some courses such as assembly and maintenance of
                    electronics <br />
                    And there I was introduced to the most professional area of
                    technology.
                    <br />
                    To this day I really like hardware and I love this area! <br />
                    My favorite hobbies are: Hiking in my city, going to gym, watch movies
                    and love old games! <br />I am currently studying at
                    <a href='https://www.betrybe.com' target='_blank' rel="noreferrer">
                    <strong> Trybe! </strong>
                    </a>
                    <br />
                    <br />
                    Some fun facts about me:
                    <br />
                    <br />
                    My favorite blog is:
                    <a href='https://www.clubedohardware.com.br' target='_blank' rel="noreferrer">
                    <strong> Hardware Club </strong>
                    </a>
                    <br />
                    <br />
                    My personality is:
                    <a
                    href='https://www.16personalities.com/br/personalidade-intj'
                    target='_blank' rel="noreferrer"
                    >
                    <strong> INTJ-A </strong>
                    </a>
                    <br />
                    <br />
                    My Soft Skills are: <br />
                    <strong>- Communication</strong> <br />
                    <strong>- Team work</strong> <br />
                    <strong>- Good interpersonal relationship</strong> <br />
                    <strong>- Commitment</strong> <br />
                    <strong>- Organization</strong> <br />
                    <strong>- Subject</strong> <br />
                    <br />
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default Aboutme;