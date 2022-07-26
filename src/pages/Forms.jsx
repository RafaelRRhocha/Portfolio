import React, { useState } from 'react';
import cvPTBR from "../files/CV-PTBR.pdf";
import cvENUS from "../files/CV-ENUS.pdf";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Forms() {
  const [sendRequest, setSendRequest] = useState(false);
  const [forms, setForms] = useState({
    email: '',
  });
  const { email } = forms;

  const onInputChange = ({target: { name, value }}) => setForms((prevState) => ({...prevState, [name]: value}));

  return (
    <>
      <Header />
      <div className="flex flex-col gap-3 items-center justify-center mt-[3%]">
          <div className="flex gap-10 items-center justify-center border-sky-700 border p-2 rounded-lg w-[800px] h-[300px]">
            <div className="flex flex-col items-center gap-5">
                <p className="text-[20px] w-[320px]">
                  If you want to contact me,
                  please fill this form and i will enter
                  contact us as soon as possible!
                </p>
                <p className="text-[20px]">Download my Resume!</p>
                <div className="flex gap-2">
                  <a href={cvPTBR} download>
                    <button className="btn btn-primary">CV - PT BR</button>
                  </a>
                  <a href={cvENUS} download>
                    <button className="btn btn-primary">CV - EN US</button>
                  </a>
                </div>
            </div>
            {!sendRequest ? (
              <form className="flex flex-col gap-3">
                <input
                  type="text"
                  className="input bg-indigo-900 w-full max-w-xs"
                  placeholder="email"
                  name="email"
                  value={ email }
                  onChange={ onInputChange }
                />
                <input
                  type="text"
                  className="input bg-indigo-900 w-full max-w-xs"
                  placeholder="name"
                />
                <textarea
                  type="text"
                  className="textarea bg-indigo-900 w-full max-w-xs"
                  placeholder="message"
                />
                <button disabled={ email.length < 5 } onClick={() => { setSendRequest(!sendRequest); setForms({ email: '' }) }} className="btn btn-success">Send Email</button>
              </form>
            ) : (
              <div className="flex flex-col gap-2 items-center justify-center">
                <img className="w-20" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/344/external-success-user-interface-flatart-icons-lineal-color-flatarticons.png" alt="send contact" />
                <p>Thanks For The Contact!</p>
                <button onClick={() => setSendRequest(!sendRequest)} className="btn btn-success">Send Other</button>
              </div>
            )}
          </div>
      </div>
      <Footer />
    </>
  )
}