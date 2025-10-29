import { render, screen } from "@testing-library/react";

import Header from "./Header.tsx";

test("render heading with correct classes", () => {
  render(<Header />);

  const header = screen.getByRole("heading");

  expect(header).toBeInTheDocument();
  expect(header).toHaveClass("text-5xl font-light");
});
