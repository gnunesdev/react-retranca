import styled from "styled-components";

export const PostContainer = styled.div`
  max-width: 720px;
  margin: 10rem auto 10rem;

  .publisher-nav-color {
    color: white;
  }

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }

  .post {
    &__background {
      @media screen and (min-width: 769px) {
        position: absolute;
        background: green;
        width: 100vh;
        height: 20rem;
        top: -4rem;
        left: 0;
      }
    }

    &__header {
      > span {
        display: block;
        margin-top: 2rem;
        margin-bottom: 6rem;
        border-bottom: 1px solid ${(props) => props.theme.colors.text};

        @media screen and (max-width: 768px) {
          margin-bottom: 4rem;
        }
      }

      h1 {
        font-size: 5.2rem;
        color: ${(props) => props.theme.colors.text};

        @media screen and (max-width: 768px) {
          font-size: 3rem;
        }
      }
    }

    &__subtitle {
      margin-top: 1rem;
      font-size: 2.2rem;
      color: ${(props) => props.theme.colors.text};
    }

    &__credits {
      margin-top: 3.2rem;
      display: flex;
      color: ${(props) => props.theme.colors.text};

      > div {
        height: 4.2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      img {
        border-radius: 50%;
        width: 4.2rem;
        min-width: 4.2rem;
        height: 4.2rem;
        margin-right: 1.4rem;
      }

      span {
        display: block;
        font-size: 1.6rem;

        @media screen and (max-width: 768px) {
          font-size: 1.6rem;
        }
      }

      time {
        font-size: 1.6rem;

        @media screen and (max-width: 768px) {
          font-size: 1.4rem;
        }
      }
    }

    &__content {
      h2 {
        font-size: 2.8rem;
        color: ${(props) => props.theme.colors.text};
        margin: 4vmin 0 0;
      }

      strong {
        color: ${(props) => props.theme.colors.text};
      }

      p {
        font-weight: 400;
        font-size: 1.9rem;
        line-height: 1.6em;
        color: ${(props) => props.theme.colors.text};
        margin-top: 3vmin !important;

        @media screen and (max-width: 768px) {
          font-size: 1.8rem;
          margin-top: 2.2rem !important;
        }
      }

      ul {
        margin-top: 1.5rem;
        font-size: 1.9rem;
        line-height: 1.6em;
        padding: 0 2.2rem;
      }

      ul,
      li {
        list-style-type: disc;
      }

      a {
        color: ${(props) => props.theme.colors.coloredText};
        text-decoration: underline;
        word-break: break-word;
      }

      li {
        padding-left: 0.3em;
        line-height: 1.6em;
        color: ${(props) => props.theme.colors.coloredText};
      }

      img {
        width: 100%;
        height: auto;
        margin: 6vmin 0 0;
      }

      figcaption {
        color: ${(props) => props.theme.colors.text};
        font-size: 1.2rem;
        margin-top: 0.8rem;
      }

      hr {
        display: block;
        width: 100%;
        margin: 3rem 0 3.5rem;
        padding: 0;
        height: 1px;
        border: 0;
      }
    }

    &__footer {
      margin-top: 7rem;
    }
  }
`;
