import styled from 'styled-components';

export const HomeContainer = styled.section`
  margin: 10rem auto 10rem;
  display: grid;

  .home {
    &__section {
      margin: 0 auto;
      width: 100%;

      &:not(:first-child) {
        margin-top: 4rem;
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
        text-shadow: 0px 0px 8px -5px rgba(0, 0, 0, 0.8);
        position: relative;
      }
    }
  }
`;
