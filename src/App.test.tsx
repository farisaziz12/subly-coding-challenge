import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders app title", () => {
    render(<App />);
    const titleElement = screen.getByText(/Subly/i);
    expect(titleElement).toBeInTheDocument();
  });
});
