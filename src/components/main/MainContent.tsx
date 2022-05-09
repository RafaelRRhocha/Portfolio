import '../../components/main/css/cards.css'
import '../../components/main/css/mobile.css'
import '../../components/main/css/style.css'
import { AboutMe } from './components/AboutMe'
import { Infos } from './components/Infos'
import { Social } from './components/Social'
import { Training } from './components/Training'
import { Technologies } from './components/Technologies'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

export function CreatePag() {
  return (
    <section className="bg-[#000312] text-[#E6F4F1]">
    <Infos />
    <AboutMe />
    <Social />
    <Training />
    <Technologies />
    <Projects />
    <Footer />
    </section>
  );
}