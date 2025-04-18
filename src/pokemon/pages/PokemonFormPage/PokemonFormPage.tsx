import PokemonForm from "../../components/PokemonForm/PokemonForm";
import "./PokemonFormPage.css";

const PokemonFormPage: React.FC = () => {
  return (
    <div className="main-content">
      <h2 className="title-page">Añade un Pokémon</h2>
      <PokemonForm />
    </div>
  );
};
export default PokemonFormPage;
