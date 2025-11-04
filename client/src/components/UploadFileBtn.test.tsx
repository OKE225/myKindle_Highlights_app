import { render, screen } from "@testing-library/react";
import UploadFileBtn from "./UploadFileBtn";

test("render input and button", () => {
  render(<UploadFileBtn />);

  const input = screen.getByTestId("file-input");
  const button = screen.getByRole("button");

  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("type", "file");
  expect(input).toHaveAttribute("accept", ".txt");

  expect(button).toBeInTheDocument();
});

// sprawdzić czy button jest disabled jak fetchIsLoading jest true
