import { render, screen } from "@testing-library/react";
import PokemonCard from "./PokemonCard";
import { butterfree } from "../../fixtures";

describe("Given the PokemonCard component", () => {
  describe("When it receives 'Butterfree'", () => {
    test("Then it should show a 'Butterfree' inside a heading", () => {
      render(<PokemonCard pokemon={butterfree} />);

      const expectedPokemonName = screen.getByRole("heading", {
        name: /butterfree/i,
      });

      expect(expectedPokemonName).toBeVisible();
    });
  });

  test("Then it should show an image of 'Butterfree'", () => {
    render(<PokemonCard pokemon={butterfree} />);

    const expectedImageText = screen.getByAltText(butterfree.imageAlt);

    expect(expectedImageText).toBeVisible();
  });
});
