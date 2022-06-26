import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MediaCard } from "./MediaCard";
import { Media } from "../types";

jest.useFakeTimers().setSystemTime(new Date("2021-08-03T22:11:00.000Z"));
describe("MediaCard", () => {
  const props = {
    id: 1,
    name: "Test",
    cover: "https://via.placeholder.com/300",
    status: "ready" as Media["status"],
    languages: ["en", "es"],
    updatedAt: "2021-05-03T22:11:00.000Z",
    createdAt: "2021-04-03T22:11:00.000Z",
  };

  test("renders MediaCard with correct elements", () => {
    render(<MediaCard {...props} />);
    const nameElement = screen.getByText(/Test/i);
    const descriptionElement = screen.getByText(/Edited 3 months ago/i);
    const coverElement = screen.getByAltText(/Test/i);

    [nameElement, descriptionElement, coverElement].forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });

  test("renders edit button on hover for card with 'ready' status", async () => {
    render(<MediaCard {...props} />);
    const coverElement = screen.getByAltText(/Test/i);

    fireEvent.mouseOver(coverElement);
    await waitFor(() => {
      const editButton = screen.getByText("Edit");
      expect(editButton).toBeInTheDocument();
    });
  });

  test("renders error overlay 'error' status", async () => {
    render(<MediaCard {...{ ...props, status: "error" }} />);

    const errorOverlay = screen.getByText(/An error occurred/i);
    expect(errorOverlay).toBeInTheDocument();
  });
});
