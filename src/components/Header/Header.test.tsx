import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show a title 'Pokedex' inside a heading", () => {
      render(<Header />);

      const appTitle = screen.getByRole("heading", {
        name: /pokedex/i,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });
  });
});
