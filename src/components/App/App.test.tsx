import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "./App";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it should show a title 'Pokedex' inside a level 1 heading", () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const appTitle = screen.getByRole("heading", {
        name: /pokedex/i,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });

    test("Then it should show a 'Pokémon' link", () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const pokemonLink = screen.getByRole("link", { name: /pokémon/i });

      expect(pokemonLink).toBeVisible();
    });
  });
});
