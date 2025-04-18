import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouter from "./Router/AppRouter";
import PokemonContextProvider from "./pokemon/context/PokemonsContextProvider";
import "@fontsource/mochiy-pop-one/index.css";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PokemonContextProvider>
        <AppRouter />
      </PokemonContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
