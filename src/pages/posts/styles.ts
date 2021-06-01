import styled from "styled-components";

export const Container = styled.div`
  max-width: 720px;
  margin: 10rem auto 10rem;

  @media screen and (max-width: 768px) {
    margin: 8rem auto 8rem;
    padding: 0 2rem;
    justify-content: space-between;
  }
`;
