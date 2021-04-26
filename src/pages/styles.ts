import styled from 'styled-components';

export const HomeContainer = styled.section`
  margin: 6rem auto 10rem;
  display: grid;

  .home {
    &__intro {
      position: relative;
      width: 100%;
      height: calc(100vh - 10.4rem);
      background-size: cover;
      background-image: url('/images/background-blured.jpg');
    }

    &__intro-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      h1 {
        font-size: 6.4rem;
        font-weight: 900;
        color: white;
        text-align: center;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
      }

      p {
        font-weight: bold;
        text-align: center;
        color: white;
        font-size: 2rem;
        display: block;
        max-width: 400px;
      }
    }

    &__section {
      margin: 0 auto;
      width: 100%;

      &:not(:first-child) {
        margin-top: 7rem;
      }

      &.has--container {
        max-width: 1280px;
        padding: 0 6rem;
      }

      > h2 {
        font-size: 4.2rem;
        font-weight: bold;
        margin-bottom: 2rem;
        color: ${(props) => props.theme.colors.primary};
        position: relative;
      }
    }
  }
`;
