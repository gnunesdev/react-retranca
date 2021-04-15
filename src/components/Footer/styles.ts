import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 0px 8px -5px rgba(0, 0, 0, 0.8);

  width: 100%;
  height: 4rem;

  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
  nav {
    ul {
      display: flex;

      li {
        &:not(:first-child) {
          margin-left: 1.6rem;
        }

        svg {
          height: 4rem;
        }
      }
    }
  }
`;
