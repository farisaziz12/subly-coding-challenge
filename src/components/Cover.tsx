import React from "react";
import styled from "styled-components";
import { ErrorOverlay } from "./ErrorOverlay";
import { TranscribingOverlay } from "./TranscribingOverlay";
import { Media } from "../types";

const mockError =
  "An error occurred while processing your file. Delete file to try again, and report issue if the problem persists.";

type Props = {
  src: string;
  alt: string;
  status: Media["status"];
  languages: Media["languages"];
};

type StyleProps = {
  status: Media["status"];
};

const Img = styled.img`
  position: absolute;
  height: 140px;
  width: 300px;
  object-fit: cover;
  transition: 0.2s ease-in-out;
`;

const EditButton = styled.button<StyleProps>`
  position: relative;
  visibility: hidden;
  display: block;
  height: 30px;
  width: 80px;
  font-weight: 600;
  background: none;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  top: 40%;
  margin: auto;
  cursor: pointer;
`;

const CoverContainer = styled.div<StyleProps>`
  height: 140px;
  width: 300px;

  &:hover > img {
    ${({ status }) =>
      status === "ready" &&
      "filter: brightness(50%);"}// Only darken image for edit button overlay on "ready" cards
  }

  &:hover > button,
  &:hover > span {
    ${({ status }) =>
      status === "ready" &&
      "visibility: visible;"}// Only show edit button and languages for "ready" cards on hover
  }
`;

const Languages = styled.span<StyleProps>`
  position: absolute;
  visibility: hidden;
  display: block;
  text-align: center;
  line-height: 30px;
  height: 30px;
  width: 120px;
  font-weight: 600;
  background-color: white;
  color: grey;
  border-radius: 5px;
  margin: 7px;
`;

const errorButtons = [
  {
    onClick: () => window.alert("Delete file"),
    text: "Delete file",
  },
  {
    onClick: () => window.alert("Report issue"),
    backgroundColor: "rgb(130, 83, 238)",
    whiteText: true,
    text: "Report issue",
  },
];

export function Cover({ src, alt, status, languages }: Props) {
  const renderCover = (): JSX.Element => {
    if (status === "error") {
      return <ErrorOverlay error={mockError} ctaButtons={errorButtons} />;
    }

    if (status === "transcribing") {
      return (
        <>
          <TranscribingOverlay />
          <Img src={src} alt={alt} />
        </>
      );
    }

    return <Img src={src} alt={alt} />;
  };

  return (
    <CoverContainer status={status}>
      {renderCover()}
      <>
        <Languages status={status}>
          {languages.length} language{languages.length > 1 && "s"}
        </Languages>
        <EditButton onClick={() => window.alert("edit button clicked")} status={status}>
          Edit
        </EditButton>
      </>
    </CoverContainer>
  );
}
