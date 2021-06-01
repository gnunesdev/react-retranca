import styled from "styled-components";

export const FormEmailContainer = styled.section`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;

  h2 {
    font-size: 4.2rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.coloredText};
    position: relative;
    text-align: center;
  }

  form {
    margin-top: 4rem;
  }

  button {
    width: 300px;
    padding: 2rem 1.5rem;
    background: ${(props) => props.theme.colors.primary};
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1.8rem;
    font-weight: 600;
    transition: filter 0.2s;
    border-radius: 8px;
    margin: 3rem auto 0;
    display: block;

    &:hover {
      filter: brightness(0.9);
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .form {
    &__input-row {
      margin-bottom: 1.8rem;
      display: grid;
      grid-template-columns: auto auto;
      grid-column-gap: 1rem;
      width: 100%;
    }

    &__input-container {
      display: flex;
      flex-direction: column;

      label {
        font-size: 1.6rem;
        font-weight: bold;
        font-family: "Roboto";
        color: ${(props) => props.theme.colors.coloredText};
      }

      input,
      textarea {
        margin-top: 0.8rem;
        font-size: 1.6rem;
        color: ${(props) => props.theme.colors.gray};
        resize: none;

        border: 1px solid ${(props) => props.theme.colors.gray100};
        border-radius: 6px;

        &::placeholder {
          color: ${(props) => props.theme.colors.gray};
        }
      }

      input {
        height: 3.8rem;
        padding-left: 1rem;
      }

      textarea {
        padding: 1rem;
      }
    }
  }
`;
