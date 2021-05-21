import styled from "styled-components";

export const FormEmailContainer = styled.section`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;

  h2 {
    font-size: 3.8rem;
    font-weight: bold;
    color: #3c6e71;
    text-shadow: 0px 0px 8px -5px rgba(0, 0, 0, 0.8);
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
    &__input-container {
      display: flex;
      flex-direction: column;

      &:not(:first-child) {
        margin-top: 1.4rem;
      }

      label {
        font-size: 1.6rem;
        font-family: "Roboto";
        color: ${(props) => props.theme.colors.primary};
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
