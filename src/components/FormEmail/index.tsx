import React, { useState } from "react";
import { FormEmailContainer } from "./styles";

import { api } from "./../../services/api";

export function FormEmail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleChangeInput(
    event: React.ChangeEvent<HTMLInputElement>,
    setFunction: any
  ) {
    setFunction(event.target.value);
  }

  async function handleSubmit(event: any) {
    event.preventDefault();

    const data = { name, email, message };

    try {
      const response = await api.post("/contact", { data });
      console.log(response);
    } catch (error) {}
  }

  return (
    <FormEmailContainer>
      <h2>.Entre em contato comigo!</h2>
      <form>
        <div className="form__input-container">
          <label htmlFor="">Qual o seu nome?</label>
          <input
            type="text"
            onChange={(e) => handleChangeInput(e, setName)}
            value={name}
          />
        </div>
        <div className="form__input-container">
          <label htmlFor="">Qual o seu e-mail?</label>
          <input
            type="text"
            onChange={(event) => handleChangeInput(event, setEmail)}
            value={email}
          />
        </div>
        <div className="form__input-container">
          <label htmlFor="">O que você gostaria de conversar?</label>
          <textarea
            rows={8}
            id=""
            onChange={(event) => handleChangeInput(event, setMessage)}
            value={message}
          ></textarea>
        </div>
        <button onClick={(event) => handleSubmit(event)}>Enviar e-mail</button>
      </form>
    </FormEmailContainer>
  );
}
