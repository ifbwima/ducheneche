import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import '@testing-library/jest-dom'

test("renders header text", () => {
  render(<Home />);
  const headerElement = screen.getByText(/Test de test du test/i);
  expect(headerElement).toBeInTheDocument();
});