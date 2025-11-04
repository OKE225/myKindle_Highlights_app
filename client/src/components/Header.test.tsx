import { render, screen } from "@testing-library/react";

import Header from "./Header.tsx";

test("check render heading", () => {
  render(<Header />);

  const header = screen.getByRole("heading", { name: /mykindle highlights/i });

  expect(header).toBeInTheDocument();
  // expect(header).toHaveClass("text-5xl font-light");
});
