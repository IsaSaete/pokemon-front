import "./PokemonsPage.css";
import { Pokemon } from "../types";

const PokemonsPage: React.FC = () => {
  const pokemons: Pokemon[] = [];
  const pokemonsCount = pokemons.length;

  return (
    <div className="main-content">
      <div className="title-containt">
        <h2 className="title">
          Pokémon<span className="subtitle"> ¡Hazte con todos!</span>
        </h2>
        <h3 className="count">
          Pokedex - {pokemonsCount} Pokémon{pokemonsCount !== 1 ? "s" : ""}
        </h3>
      </div>
    </div>
  );
};

export default PokemonsPage;
