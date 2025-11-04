import { render, screen } from "@testing-library/react";
import BookCard from "./BookCard";
import { MemoryRouter } from "react-router";

test("check render link, photo and heading", () => {
  render(
    <MemoryRouter>
      <BookCard book={{ title: "Book Name", highlights: [] }} />
    </MemoryRouter>
  );

  const link = screen.getByRole("link");
  const heading = screen.getByRole("heading");

  expect(link).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent("Book Name");
});
// photo in the future
