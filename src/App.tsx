import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MediaCard } from "./components";
import { unique } from "./utils";
import { Media } from "./types";
import { fetchMedia } from "./api";

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  text-align: center;
`;

const Select = styled.select`
  width: 100px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    text-align: center;
    font-size: 20px;
  }
`;

const handleFilterChange = (
  event: React.ChangeEvent<HTMLSelectElement>,
  callback: (value: string) => void
) => {
  const { value } = event.target;

  callback(value);
};

function App() {
  const [media, setMedia] = useState<Media[]>([]);
  const [statusFilter, setStatusFilter] = useState<Media["status"] | null>(null);
  const [langFilter, setLangFilter] = useState<string | null>(null);

  // fetch media from API on component mount
  useEffect(() => {
    fetchMedia()
      .then((mediaData) => setMedia(mediaData))
      .catch((error) => console.log(error));
  }, []);

  const statusFilterOptions = [
    "all",
    ...media.map(({ status }) => status).filter(unique),
  ];
  const languageFilterOptions = [
    "all",
    ...media.flatMap(({ languages }) => languages).filter(unique),
  ];

  const filteredMedia =
    statusFilter || langFilter
      ? media.filter(({ status, languages }) => {
          const statusMatch = statusFilter === null || status === statusFilter;
          const langMatch = langFilter === null || languages.includes(langFilter);

          // combine filters
          return statusMatch && langMatch;
        })
      : media;

    console.log(filteredMedia);
  return (
    <>
      <Title>Subly</Title>
      <FilterContainer>
        <div>
          <h2>Status</h2>
          <Select
            onChange={(event) => {
              if (event.target.value === "all") {
                setStatusFilter(null);
                return;
              }
              handleFilterChange(event, (value) =>
                setStatusFilter(value as Media["status"])
              );
            }}
          >
            {statusFilterOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <h2>Language</h2>
          <Select
            onChange={(event) => {
              if (event.target.value === "all") {
                setLangFilter(null);
                return;
              }
              handleFilterChange(event, (value) => setLangFilter(value as string));
            }}
          >
            {languageFilterOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </Select>
        </div>
      </FilterContainer>
      <CardsContainer>
        {filteredMedia.map((data) => (
          <MediaCard key={data.id} {...data} />
        ))}
      </CardsContainer>
    </>
  );
}

export default App;
