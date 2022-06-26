import React, { useState, useEffect } from "react";
import styled from "styled-components";

const OverlayContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 140px;
  width: 300px;
  font-size: 7px;
  font-weight: bold;
  color: grey;
  opacity: 0.9;
  background-color: white;
  z-index: 1;
`;

const ProgressBar = styled.div`
  display: block;
  height: 10px;
  width: 220px;

  margin-left: auto;
  margin-right: auto;

  border: solid #2d2f3b 2px;
  border-radius: 15px;
`;

const Progress = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background-color: rgb(130, 83, 238);
  border-radius: 15px;
  transition: width 1.5s;
`;

export function TranscribingOverlay() {
  const [progress, setProgress] = useState<number>(0);

  // mock transcribing progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((progress) => (progress + 1) % 100);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <OverlayContainer>
      <h1>Transcribing subtitles</h1>
      <ProgressBar>
        <Progress progress={progress} />
      </ProgressBar>
    </OverlayContainer>
  );
}
