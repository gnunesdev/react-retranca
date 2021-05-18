import { ButtonContainer } from "./styles";

interface ButtonProps {
  onClick: () => void;
  description: string;
  width: number;
  fontSize?: number;
  disabled?: true | false;
}

export function Button({
  onClick,
  description,
  width,
  fontSize,
  disabled,
}: ButtonProps) {
  return (
    <ButtonContainer
      width={width}
      onClick={onClick}
      fontSize={fontSize}
      disabled={disabled}
    >
      {description}
    </ButtonContainer>
  );
}
