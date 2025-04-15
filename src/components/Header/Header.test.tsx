import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show a title 'Pokedex' inside a level 1 heading", () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const appTitle = screen.getByRole("heading", {
        name: /pokedex/i,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });

    test("Then it should show a 'Pokémons' link", () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const pokemonsLink = screen.getByRole("link", { name: /pokémons/i });

      expect(pokemonsLink).toBeVisible();
    });
  });
});
