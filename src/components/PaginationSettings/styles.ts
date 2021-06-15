import styled from "styled-components";

export const PaginationsPostsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  ul {
    display: flex;
    margin: 0 1rem;
  }

  li {
    &:not(:first-child) {
      margin-left: 0.4rem;
    }

    span {
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: ${(props) => props.theme.colors.primary};
      opacity: 0.5;

      &.is--active {
        opacity: 1;
      }
    }
  }
`;
