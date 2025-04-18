import { render, screen } from "@testing-library/react";
import PokemonFormPage from "./PokemonFormPage";

describe("Given a PokemonFormPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Añade un Pokemon' inside a heading", () => {
      render(<PokemonFormPage />);

      const pageTitle = screen.getByRole("heading", {
        name: /añade un Pokémon/i,
      });

      expect(pageTitle).toBeVisible();
    });
  });
});
