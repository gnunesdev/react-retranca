import styled from "styled-components";

interface ButtonContainerProps {
  width: number;
  fontSize?: number;
  disabled?: true | false;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: ${(props) => props.width};
  font-size: ${(props) => `${props.fontSize}rem` || "1.8rem"};
  padding: 1.4rem;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  border-radius: 0.25rem;
  border: 0;
  font-weight: 600;
  transition: filter 0.2s;
  border-radius: 8px;
  display: block;

  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    filter: brightness(0.9);
  }
`;
