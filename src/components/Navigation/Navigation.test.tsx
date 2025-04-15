import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Pokémons' link", () => {
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>,
      );

      const pokemonLink = screen.getByRole("link", { name: /pokémon/i });

      expect(pokemonLink).toBeVisible();
    });
  });
});
