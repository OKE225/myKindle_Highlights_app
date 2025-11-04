import { render, screen } from "@testing-library/react";
import BookHighlightsPage from "./BookHighlightsPage";
import { MemoryRouter } from "react-router";

test("check render heading", () => {
  render(
    <MemoryRouter>
      <BookHighlightsPage />
    </MemoryRouter>
  );

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
