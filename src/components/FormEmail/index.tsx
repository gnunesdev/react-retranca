import { useState } from 'react';
import { FormEmailContainer } from './styles';

export function FormEmail() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [emailText, setEmailText] = useState('');

  function handleChangeInput(
    event: React.ChangeEvent<HTMLInputElement>,
    setFunction: any
  ) {
    setFunction(event.target.value);
  }

  return (
    <FormEmailContainer>
      <h2>.Entre em contato comigo!</h2>
      <form>
        <div className="form__input-container">
          <label htmlFor="">Digite seu nome:</label>
          <input
            type="text"
            onChange={(e) => handleChangeInput(e, setName)}
            placeholder="Nome"
            value={name}
          />
        </div>
        <div className="form__input-container">
          <label htmlFor="">Selecione o assunto:</label>
          <input
            type="text"
            onChange={(e) => handleChangeInput(e, setSubject)}
            placeholder="Assunto"
            value={subject}
          />
        </div>
        <div className="form__input-container">
          <label htmlFor="">Digite o corpo do e-mail:</label>
          <textarea
            rows={8}
            id=""
            onChange={(e) => handleChangeInput(e, setEmailText)}
            placeholder="Texto"
            value={emailText}
          ></textarea>
        </div>
        <button>Enviar e-mail</button>
      </form>
    </FormEmailContainer>
  );
}