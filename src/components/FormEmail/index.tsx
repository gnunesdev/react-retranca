import React, { useEffect, useRef, useState } from "react";
import { FormEmailContainer } from "./styles";

import { api } from "./../../services/api";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function FormEmail() {
  const formEmailTitleRef = useRef(null);
  const formEmailContentRef = useRef(null);

  function createAnimation() {
    gsap
      .timeline({
        scrollTrigger: {
          // @ts-ignore
          trigger: formEmailTitleRef.current,
          start: "top 75%",
        },
      })
      .from(formEmailTitleRef.current, {
        opacity: 0,
        duration: 1,
      })
      .from(formEmailContentRef.current, {
        opacity: 0,
        y: 20,
        ease: "ease",
      });
  }

  useEffect(() => {
    createAnimation();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleChangeInput(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      <h2 ref={formEmailTitleRef}>.Entre em contato comigo</h2>
      <form ref={formEmailContentRef}>
        <div className="form__input-row">
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
