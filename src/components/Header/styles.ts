import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme.colors.primary};
  width: 100%;
  box-shadow: 0px 0px 8px -5px rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  z-index: 1;

  header {
    height: 6rem;
    max-width: 1120px;
    color: white;
    display: flex;
    align-items: center;
    margin: 0 auto;

    @media screen and (max-width: 1180px) {
      padding: 0 8rem;
    }
  }

  .header {
    &__switch-button {
      margin-left: auto;
    }
  }

  nav {
    margin-left: 8rem;
  }

  ul {
    display: flex;
    height: 6rem;

    li {
      &:not(:first-child) {
        margin-left: 2rem;
      }

      a {
        font-size: 1.5rem;
        line-height: 6rem;
        display: block;
        height: 100%;
        position: relative;
        transition: color 0.2s;

        &:after {
          content: '';
          position: absolute;
          height: 4px;
          border-radius: 3px 3px 0 0;
          width: 0;
          transition: width 0.4s;
          bottom: 0;
          left: 0;
          background: ${(props) => props.theme.colors.text};
        }

        &:hover {
          transition: color 0;

          &:after {
            width: 100%;
          }
        }
      }
    }
  }
`;
