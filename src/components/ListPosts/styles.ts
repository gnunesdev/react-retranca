import styled from "styled-components";

export const Container = styled.section`
  .post {
    &__container {
      padding: 2rem;
      box-shadow: 0px 0px 6px -5px rgba(0, 0, 0, 0.2);
      position: relative;
      cursor: pointer;
      color: ${(props) => props.theme.colors.gray};

      &:after {
        content: "";
        width: 100%;
        height: 100%;
        background: transparent;
        border: 1px solid;
        ${(props) =>
          props.theme.title === "light"
            ? "border-color: #dedede;"
            : `border-color: rgb(45, 45, 45);`}
        border-radius: 4px;

        position: absolute;
        left: 0;
        top: 0;
        transition: border-color ease-in-out 0.15s;
      }

      &:hover {
        &:after {
          border-color: ${(props) => props.theme.colors.primary};
        }
      }

      &:not(:last-child) {
        margin-bottom: 1.8rem;
      }
    }

    &__head {
      display: flex;
      color: ${(props) => props.theme.colors.text};

      img {
        border-radius: 50%;
        width: 4.2rem;
        min-width: 4.2rem;
        height: 4.2rem;
        margin-right: 1.4rem;
        display: block;

        @media screen and (max-width: 768px) {
          display: none;
        }
      }

      time {
        font-size: 1.4rem;
      }

      h2 {
        margin-top: 0.4rem;
        font-size: 2rem;
      }
    }

    &__content {
      margin-top: 1rem;

      p {
        font-size: 1.6rem;
      }
    }

    &__tags {
      margin-top: 1.6rem;
      display: flex;

      li {
        display: block;
        padding: 1rem 1.4rem;
        font-size: 1.2rem;
        color: white;
        background-color: ${(props) => props.theme.colors.primary};
        border-radius: 1.6rem;

        &:not(:first-child) {
          margin-left: 0.8rem;
        }
      }
    }
  }
`;
