import { ButtonContainer } from "./styles";

interface ButtonProps {
  onClick: () => void;
  description?: string;
  width: number;
  fontSize?: number;
  disabled?: true | false;
  hasIcon?: true | false;
  children?: React.ReactChild;
}

export function Button({
  onClick,
  description,
  width,
  fontSize,
  disabled,
  hasIcon,
  children,
}: ButtonProps) {
  return (
    <ButtonContainer
      width={width}
      onClick={onClick}
      fontSize={fontSize}
      disabled={disabled}
    >
      {hasIcon ? children : description}
    </ButtonContainer>
  );
}
