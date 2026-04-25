// __tests__/Hello.test.tsx
import { render, screen } from "@testing-library/react";
import Hello from "../app/components/Hello";

test("renders hello text", () => {
  render(<Hello />);
  expect(screen.getByText("Hello CI/CD")).toBeInTheDocument();
});