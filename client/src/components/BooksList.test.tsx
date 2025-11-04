import { render, screen } from "@testing-library/react";

import BooksList from "./BooksList";

test("check render heading and paragraph", () => {
  render(<BooksList />);

  const heading = screen.getByRole("heading", { name: /books/i });
  const paragraph = screen.getByText(/don't have/i);

  expect(heading).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
});
