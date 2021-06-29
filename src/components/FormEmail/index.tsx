import React, { useEffect, useRef, useState } from "react";
import { FormEmailContainer } from "./styles";

import { regexValidateEmail } from "../../utils/usefulFunctions";

import { api } from "./../../services/api";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// UTILIZAR QUANDO ENTENDER A VALIDAÇÃO INDIVIDUAL DO YUP
// const emailSchema = yup.object().shape({
//   name: yup
//     .string()
//     .min(2, "Nome muito curto")
//     .max(50, "Nome muito longo")
//     .required("Digite um nome"),
//   email: yup
//     .string()
//     .email("Digite um e-mail válido")
//     .required("Digite um e-mail"),
//   message: yup.string().required("Digite uma mensagem"),
// });

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
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  function handleChangeInput(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setFunction: any
  ) {
    setFunction(event.target.value);
  }

  function validateForm(dataForm: {
    name: string;
    email: string;
    message: string;
  }) {
    const { name, email, message } = dataForm;

    debugger;

    if (!name) {
      setErrors({ ...errors, name: "Digite um nome" });
    }
    if (!email) {
      setErrors({ ...errors, email: "Digite um e-mail" });
    }
    if (!regexValidateEmail.test(email)) {
      setErrors({ ...errors, email: "Digite um e-mail válido" });
    }
    if (!message) {
      setErrors({ ...errors, message: "Digite uma mensagem" });
    }

    console.log("errors", errors);

    return errors.name || errors.email || errors.message;
  }

  async function handleSubmit(event: any) {
    event.preventDefault();

    const data = { name, email, message };

    try {
      const teste = validateForm(data);
      console.log(teste);

      const response = await api.post("/contact", { data });

      if (response.status === 200) {
      }
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
