import React from "react";
import styled from "styled-components";

type Props = {
  error: string;
  ctaButtons?: Array<{ onClick: () => void; backgroundColor?: string; text: string, whiteText?: boolean }>;
};

const OverlayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  font-size: 12px;
  color: grey;
  font-weight: bold;
  background-color: rgb(248, 231, 230);
  padding: 0 15px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

const CTAButton = styled.button<{ backgroundColor?: string, whiteText?: boolean }>`
    background-color: ${({ backgroundColor }) => backgroundColor || "white"};
    color: ${({ whiteText }) => (whiteText ? "white" : "grey")};
    font-weight: 600;
    border: grey solid 1px;
    border-radius: 5px;
    padding: 8px 12px;
    margin: 5px;
    cursor: pointer;
`;

const CTAButtons = ({ buttons }: { buttons?: Props["ctaButtons"] }) => {
  if (!buttons) {
    return null;
  }

  return (
    <ButtonsContainer>
      {buttons.map(({ text, ...props }) => (
        <CTAButton key={text} {...props}>
          {text}
        </CTAButton>
      ))}
    </ButtonsContainer>
  );
};

export function ErrorOverlay({ error, ctaButtons }: Props) {
  return (
    <OverlayContainer>
      <p>{error}</p>
      <CTAButtons buttons={ctaButtons} />
    </OverlayContainer>
  );
}
