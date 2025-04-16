import { render, screen } from "@testing-library/react";
import PokemonsPage from "./PokemonsPage";
import PokemonContextProvider from "../../context/PokemonsContextProvider";

describe("Given the PokemonsPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Pokémon ¡Hazte con todos! inside a heading", () => {
      render(
        <PokemonContextProvider>
          <PokemonsPage />
        </PokemonContextProvider>,
      );

      const pokemonsPageTitle = screen.getByRole("heading", {
        name: /pokémon ¡hazte con todos!/i,
      });

      expect(pokemonsPageTitle).toBeVisible();
    });
  });
});
