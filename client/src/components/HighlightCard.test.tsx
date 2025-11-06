import { render, screen } from "@testing-library/react";
import HighlightCard from "./HighlightCard";

test("render heading and paragraph", () => {
  render(<HighlightCard text="highlight text" metadata="highlight info" />);

  const heading = screen.getByRole("heading");
  const paragraph = screen.getByRole("paragraph");

  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent("highlight text");

  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveTextContent("highlight info");
});
