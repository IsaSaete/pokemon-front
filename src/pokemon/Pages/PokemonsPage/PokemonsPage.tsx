import { Pokemon } from "../../types";
import PokemonList from "../../components/PokemonList/PokemonList";
import "./PokemonsPage.css";

const PokemonsPage: React.FC = () => {
  const pokemons: Pokemon[] = [];
  const pokedexCount = pokemons.length;

  return (
    <div className="main-content">
      <div className="title-containt">
        <h2 className="title">
          Pokémon<span className="subtitle"> ¡Hazte con todos!</span>
        </h2>
        <h3 className="count">
          Pokedex - {pokedexCount} Pokémon{pokedexCount !== 1 ? "s" : ""}
        </h3>
      </div>
      <PokemonList />
    </div>
  );
};

export default PokemonsPage;
