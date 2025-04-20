import PokemonForm from "../../components/PokemonForm/PokemonForm";
import usePokemons from "../../hooks/usePokemons";
import "./PokemonFormPage.css";

const PokemonFormPage: React.FC = () => {
  const { createNewPokemon } = usePokemons();

  return (
    <div className="main-content">
      <h2 className="title-page">Añade un Pokémon</h2>
      <PokemonForm action={createNewPokemon} />
    </div>
  );
};
export default PokemonFormPage;
