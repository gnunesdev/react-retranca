import styled from "styled-components";

export const RecentPostsContainer = styled.section`
  ul {
    margin-top: 4rem;

    li {
      &:not(:first-child) {
        margin-top: 3rem;
      }

      a {
        display: flex;

        @media screen and (max-width: 768px) {
          flex-direction: column;
        }

        > div {
          margin-left: 2rem;

          @media screen and (max-width: 768px) {
            margin: 2rem 0 0;
          }
        }
      }

      p {
        font-size: 1.6rem;
        color: ${(props) => props.theme.colors.text};
        margin-top: 0.8rem;
        line-height: 2.2rem;

        @media screen and (max-width: 768px) {
          display: inline-block;
          overflow: hidden;
          width: 100%;
          max-height: 80px;
          text-overflow: initial;
          white-space: nowrap;
        }
      }

      time {
        font-size: 1.2rem;
        margin-top: 0.6rem;
        display: block;
        color: ${(props) => props.theme.colors.coloredText};
      }

      img {
        width: 300px;
        max-height: 200px;
        object-fit: cover;

        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }

      h3 {
        color: ${(props) => props.theme.colors.coloredText};
        font-size: 2.2rem;
      }
    }
  }
`;
