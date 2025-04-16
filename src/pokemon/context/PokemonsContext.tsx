import { createContext } from "react";
import { PokemonsContextStructure } from "./types";

const PokemonsContext = createContext<PokemonsContextStructure | null>(null);

PokemonsContext.displayName = "PokemonsContext";

export default PokemonsContext;
