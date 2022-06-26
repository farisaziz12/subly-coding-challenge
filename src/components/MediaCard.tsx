import React from "react";
import styled from "styled-components";
import { Cover } from "./Cover";
import { capitalize, timeSince } from "../utils";
import { Media } from "../types";

const Card = styled.div`
  height: 210px;
  width: 300px;
  border-radius: 5px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  margin: 0 5px;

  transition: 0.2s ease-in-out;

  &:hover {
    box-shadow: -5px 5px 15px 5px rgba(0, 0, 0, 0.2);
  }
`;

const Header = styled.h1`
  font-size: 16px;
  margin: 5px 0;
`;

const MetadataContainer = styled.div`
  margin: 15px 0 0 10px;
`;

const Description = styled.p`
  color: grey;
  font-size: 12px;
  font-weight: 600;
  margin: 0;
`;

const resolveDescription = ({ status, updatedAt }: Media): string => {
  switch (status) {
    case "ready":
      return "Edited " + timeSince(updatedAt);
    case "error":
      return "Error in processing";
    default:
      return capitalize(status);
  }
};

export function MediaCard(media: Media) {
  const { name, cover, status, languages } = media;
  return (
    <Card>
      <Cover src={cover} alt={name} status={status} languages={languages} />
      <MetadataContainer>
        <Header>{name}</Header>
        <Description>{resolveDescription(media)}</Description>
      </MetadataContainer>
    </Card>
  );
}
