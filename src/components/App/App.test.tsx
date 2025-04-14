import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it should show a title 'Pokedex' inside a heading", () => {
      render(<App />);

      const appTitle = screen.getByRole("heading", {
        name: /pokedex/i,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });
  });
});
