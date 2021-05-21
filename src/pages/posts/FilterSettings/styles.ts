import styled from "styled-components";

export const FilterSettingsContainer = styled.div`
  .filter-settings {
    &__search {
      display: flex;
      margin-bottom: 1rem;
    }

    &__input {
      width: 100%;
      position: relative;
      margin-right: 0.6rem;

      input {
        font-size: 1.4rem;
        padding: 0 1rem;
        width: 100%;
        height: 100%;
      }

      button {
        top: 0;
        right: 0;
        position: absolute;
        background: transparent;
      }
    }
  }
`;
