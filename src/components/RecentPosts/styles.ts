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
            > div {
            margin-left: 2rem;
          }
        }
        
        p {
          font-size: 1.6rem;
          color: ${(props) => props.theme.colors.gray};
          margin-top: .8rem;
          line-height: 2.2rem;
        }

        time {
          font-size: 1.2rem;
          margin-top: .6rem;
          display: block;
        }

        img {
          width: 300px;
          max-height: 200px;
          object-fit: cover;
          border-radius:8px;
        }

        h3 {
          color: ${(props) => props.theme.colors.primary};
          font-size: 2.2rem;
        }

        
        
    }
  }

`