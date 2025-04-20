import { render, screen } from "@testing-library/react";
import PokemonForm from "./PokemonForm";
import PokemonContextProvider from "../../context/PokemonsContextProvider";
import { MemoryRouter } from "react-router";

describe("Given a PokemonForm componten", () => {
  const action = vitest.fn();

  beforeEach(() => {
    action.mockClear();
  });

  describe("When it renders", () => {
    test("Then it should show a 'Nombre' text box", () => {
      render(
        <PokemonContextProvider>
          <MemoryRouter>
            <PokemonForm action={action} />
          </MemoryRouter>
        </PokemonContextProvider>,
      );

      const nameTextBox = screen.getByLabelText(/nombre/i);

      expect(nameTextBox).toBeVisible();
    });

    test("Then it should show a 'Añadir Pokémon' inside a button", () => {
      render(
        <PokemonContextProvider>
          <MemoryRouter>
            <PokemonForm action={action} />
          </MemoryRouter>
        </PokemonContextProvider>,
      );

      const addButton = screen.getByRole("button", { name: /añadir pokémon/i });

      expect(addButton).toBeVisible();
    });
  });
});
