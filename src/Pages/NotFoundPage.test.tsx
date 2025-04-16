import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it renders", () => {
    test("Then it should show an an image with a 404 number and a text page not found", () => {
      render(<NotFoundPage />);

      const imageAlt = screen.getByAltText(
        "Error 404: Página no encontrada (diseño de una pokeball en el número 0)",
      );

      expect(imageAlt).toBeVisible();
    });
  });
});
