import { render, screen } from "@testing-library/react";
import HighlightsCount from "./HighlightsCount";

test("render paragraph", () => {
  render(<HighlightsCount count={225} />);

  const paragraph = screen.getByRole("paragraph");

  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveTextContent(/225/i);
});
