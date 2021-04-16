import styled from 'styled-components';

export const PostContainer = styled.div`
  max-width: 720px;
  margin: 10rem auto 10rem;

  .post {
    &__header {
      > span {
        width: 100%;
        height: 1px;

        display: block;

        margin: 3rem 0 5rem;

        background-color: ${(props) => props.theme.colors.gray200};
      }

      h1 {
        font-size: 4.2rem;
        color: ${(props) => props.theme.colors.text};
      }
    }

    &__subtitle {
      margin-top: 1rem;
      font-size: 1.8rem;
      color: ${(props) => props.theme.colors.gray};
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
        height: 4.2rem;
        margin-right: 1.4rem;
      }

      span {
        display: block;
        font-size: 1.6rem;
      }

      time {
        font-size: 1.6rem;
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
        color: ${(props) => props.theme.colors.gray};
        margin-top: 3vmin !important;
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
        color: ${(props) => props.theme.colors.primary};
        text-decoration: underline;
        word-break: break-word;
      }

      li {
        padding-left: 0.3em;
        line-height: 1.6em;
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
        border-top: 1px solid ${(props) => props.theme.colors.grayLight};
      }
    }
  }
`;
