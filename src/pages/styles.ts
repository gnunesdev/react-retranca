import styled from 'styled-components';

export const HomeContainer = styled.section`
  max-width: 1280px;
  margin: 10rem auto 10rem;
  display: grid;

  .home {
    &__section {
      max-width: 80%;
      margin: 0 auto;

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
