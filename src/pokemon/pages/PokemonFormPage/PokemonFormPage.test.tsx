import { render, screen } from "@testing-library/react";
import PokemonFormPage from "./PokemonFormPage";
import PokemonContextProvider from "../../context/PokemonsContextProvider";
import { MemoryRouter } from "react-router";

describe("Given a PokemonFormPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Añade un Pokemon' inside a heading", () => {
      render(
        <PokemonContextProvider>
          <MemoryRouter>
            <PokemonFormPage />
          </MemoryRouter>
        </PokemonContextProvider>,
      );

      const pageTitle = screen.getByRole("heading", {
        name: /añade un Pokémon/i,
      });

      expect(pageTitle).toBeVisible();
    });
  });
});
