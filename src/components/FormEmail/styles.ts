import styled from 'styled-components';

export const FormEmailContainer = styled.section`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;

  h2 {
    font-size: 4.2rem;
    font-weight: bold;
    color: #3c6e71;
    text-shadow: 0px 0px 8px -5px rgba(0, 0, 0, 0.8);
    position: relative;
    text-align: center;
  }

  form {
    margin-top: 3rem;
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
        font-size: 1.8rem;
        font-family: 'Roboto';
        font-weight: bold;
        color: ${(props) => props.theme.colors.text};
      }

      input,
      textarea {
        margin-top: 0.8rem;
        font-size: 1.6rem;
        padding-bottom: 0.6rem;
        padding-left: 0.1rem;
        color: ${(props) => props.theme.colors.gray};
        resize: none;

        background: none;
        border: 0;
        border-bottom: 2px solid ${(props) => props.theme.colors.primary};

        &::placeholder {
          color: ${(props) => props.theme.colors.gray};
        }
      }
    }
  }
`;
