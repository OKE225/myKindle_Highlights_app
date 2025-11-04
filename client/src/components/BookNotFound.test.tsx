import { render, screen } from "@testing-library/react";
import BookNotFound from "./BookNotFound";
import { MemoryRouter } from "react-router";

test("render heading and link", () => {
  render(
    <MemoryRouter>
      <BookNotFound />
    </MemoryRouter>
  );

  const heading = screen.getByRole("heading", { name: /not found/i });
  const link = screen.getByRole("link", { name: /home page/i });

  expect(heading).toBeInTheDocument();
  expect(link).toBeInTheDocument();
});
