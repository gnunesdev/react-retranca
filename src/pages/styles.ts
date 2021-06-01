import styled from "styled-components";

export const HomeContainer = styled.section`
  margin: 6rem auto 10rem;
  display: grid;

  .home {
    &__intro {
      position: relative;
      width: 100%;
      height: calc(100vh - 10.4rem);
      overflow: hidden;

      @media screen and (max-width: 768px) {
        height: 100vh;
      }

      &:hover {
        &:before {
          transform: scale(1.02);
        }
      }

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background-position: center;
        background-size: cover;
        background-image: url("/images/background-blured.jpg");
        width: 100%;
        height: 100%;
        transition: transform 0.35s ease;
      }
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

    &__section-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 6rem;
    }

    &__section {
      margin: 0 auto;
      width: 100%;

      &:not(:first-child) {
        margin-top: 7rem;
      }

      &.has--container {
        max-width: 1280px;
      }

      &.has--background {
        padding: 7rem 0 7rem;
        background: ${(props) => props.theme.colors.backgroundHarder};
      }
    }

    &__section-title {
      font-size: 4.2rem;
      font-weight: bold;
      margin-bottom: 2rem;
      color: ${(props) => props.theme.colors.primary};
      position: relative;
    }
  }
`;
