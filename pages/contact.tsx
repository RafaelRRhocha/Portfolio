import { FC, useState } from 'react';
import Footer from '../components/Footer';
import MenuHamburger from '../components/MenuHamburger';
import Header from '../components/Header';
import Image from 'next/image';
// import ptbr from '../files/Rafael Rocha - Currículo.pdf';
// import enus from '../files/Rafael Rocha - Resume.pdf';

interface contactProps {}

const Contact: FC<contactProps> = ({}) => {
  const [sendRequest, setSendRequest] = useState(false);
  const [disable, setDisable] = useState(true);
  const [email, setEmail] = useState('');

  const verifyInputEmail = ({ target: { value } }: any) => {
    const regexValidation = /\S+@\w+\.\w+/i;
    const finalValidation = regexValidation.test(email);
    setDisable(finalValidation);
    setEmail(value);
  };

  return (
    <div className="color">
      <Header />
      <div className="lg:hidden xl:hidden">
        <MenuHamburger />
      </div>
      <div className="flex justify-center sm:pt-20 sm:p-10 md:p-10 md:pt-20">
        <div className="flex sm:flex-col md:flex-col lg:flex-row xl:flex-row gap-7 items-center justify-center mt-[3%] border-[#d4d4d8] border sm:p-5 md:p-10 lg:p-10 xl:p-10 rounded-lg">
            <div className="flex gap-10">
              <div className="flex flex-col items-center gap-5">
                  <p className="text-[20px] w-[320px]">
                    If you want to contact me,
                    please fill this form and i will enter
                    contact us as soon as possible!
                  </p>
                  <p className="text-[20px]">Download my Resume!</p>
                  <div className="flex gap-2">
                    <a href={`../files/Rafael Rocha - Currículo.pdf`} download>
                      <button className="btn btn-error hover:animate-pulse">CV - PT BR</button>
                    </a>
                    <a href={`../files/Rafael Rocha - Resume.pdf`} download>
                      <button className="btn btn-error hover:animate-pulse">CV - EN US</button>
                    </a>
                  </div>
              </div>
            </div>
            <div>
              {!sendRequest ? (
                <form className="flex flex-col gap-3">
                  <input
                    type="text"
                    className="input bg-[#d4d4d8] w-full max-w-xs text-black placeholder:text-black placeholder:opacity-[0.5]"
                    placeholder="email"
                    name="email"
                    value={ email }
                    onChange={ verifyInputEmail }
                  />
                  <input
                    type="text"
                    className="input bg-[#d4d4d8] w-full max-w-xs text-black placeholder:text-black placeholder:opacity-[0.5]"
                    placeholder="name"
                  />
                  <textarea
                    className="textarea bg-[#d4d4d8] w-full max-w-xs text-black placeholder:text-black placeholder:opacity-[0.5]"
                    placeholder="message"
                  />
                  <button disabled={ !disable || email.length < 2 } onClick={() => { setSendRequest(!sendRequest); setEmail('') }} className="btn btn-success">Send Email</button>
                </form>
              ) : (
                <div className="flex flex-col gap-2 items-center justify-center">
                  <Image width="80px" height="80px" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/344/external-success-user-interface-flatart-icons-lineal-color-flatarticons.png" alt="send contact" />
                  <p>Thanks For The Contact!</p>
                  <button onClick={() => setSendRequest(!sendRequest)} className="btn btn-success">Send Another One</button>
                </div>
              )}
            </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;