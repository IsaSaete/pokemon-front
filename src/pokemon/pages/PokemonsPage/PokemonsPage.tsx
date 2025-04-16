import PokemonList from "../../components/PokemonList/PokemonList";
import "./PokemonsPage.css";
import usePokemons from "../../hooks/usePokemons";
import { useEffect } from "react";

const PokemonsPage: React.FC = () => {
  const { pokemons, loadPokemons } = usePokemons();

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  const pokedexCount = pokemons.length;

  return (
    <main className="main-content">
      <div className="title-containt">
        <h2 className="title">
          Pokémon<span className="subtitle"> ¡Hazte con todos!</span>
        </h2>
        <h3 className="count">
          Pokedex - {pokedexCount} Pokémon{pokedexCount !== 1 ? "s" : ""}
        </h3>
      </div>
      <PokemonList />
    </main>
  );
};

export default PokemonsPage;
