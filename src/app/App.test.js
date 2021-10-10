import { render, screen } from "@testing-library/react";
import App from "./App.js";

describe("App", () => {
  it("works", () => {
    render(<App />);
    expect(screen.getByText(/app works/i)).toBeInTheDocument();
  });
});
