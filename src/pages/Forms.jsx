import React, { useState } from 'react';
import cvPTBR from "../files/CV-PTBR.pdf";
import cvENUS from "../files/CV-ENUS.pdf";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import MenuHamburger from '../components/MenuHamburger';

export function Forms() {
  const [disable, setDisable] = useState(true);
  const [email, setEmail] = useState('');

  const verifyInputEmail = ({ target: { value } }) => {
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
      <div className="flex justify-center">
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
                    <a href={cvPTBR} download>
                      <button className="btn btn-error hover:animate-pulse">CV - PT BR</button>
                    </a>
                    <a href={cvENUS} download>
                      <button className="btn btn-error hover:animate-pulse">CV - EN US</button>
                    </a>
                  </div>
              </div>
            </div>
            <div>
              <form action="https://api.staticforms.xyz/submit" method="post" className="flex flex-col gap-3">
                <input type="hidden" name="accessKey" value="cefcaba4-47bb-4c09-9a6e-b4a5dc52aca8" />
                <input type="hidden" name="redirectTo" value={window.location.href} />
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
                  name="name"
                />
                <textarea
                  name="message"
                  type="text"
                  className="textarea bg-[#d4d4d8] w-full max-w-xs text-black placeholder:text-black placeholder:opacity-[0.5]"
                  placeholder="message"
                />
                <button disabled={ !disable } onClick={() => alert('Thanks for the Feedback!')} className="btn btn-success">Send Email</button>
              </form>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}
