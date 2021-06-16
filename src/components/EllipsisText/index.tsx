interface EllipsisTextProps {
  text: string;
  maxLength: number;
}

export function EllipsisText({ text, maxLength }: EllipsisTextProps) {
  const textSplited: string[] = text.split(" ");
  const shouldHaveEllipsis = maxLength < textSplited.length;

  function convertText() {
    let textWithMaxLength = "";
    const realMaxLength =
      maxLength >= textSplited.length ? textSplited.length : maxLength;

    for (let i = 0; i < realMaxLength; i++) {
      let currentText = i !== 0 ? ` ${textSplited[i]}` : textSplited[i];

      textWithMaxLength += currentText;
    }

    return textWithMaxLength;
  }

  return (
    <>
      {convertText()}
      {shouldHaveEllipsis ? "..." : ""}
    </>
  );
}
