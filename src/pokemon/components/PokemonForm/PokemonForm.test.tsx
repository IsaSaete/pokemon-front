import { render, screen } from "@testing-library/react";
import PokemonForm from "./PokemonForm";

describe("Given a PokemonForm componten", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Nombre' text box", () => {
      render(<PokemonForm />);

      const nameTextBox = screen.getByLabelText(/nombre/i);

      expect(nameTextBox).toBeVisible();
    });

    test("Then it should show a 'Añadir Pokémon' inside a button", () => {
      render(<PokemonForm />);

      const addButton = screen.getByRole("button", { name: /añadir pokémon/i });

      expect(addButton).toBeVisible();
    });
  });
});
