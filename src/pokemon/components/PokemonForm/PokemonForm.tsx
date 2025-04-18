import "./PokemonForm.css";

const PokemonForm: React.FC = () => {
  return (
    <form className="form">
      <div className="form__group">
        <label htmlFor="name" className="form__label">
          Nombre
        </label>
        <input type="text" id="name" className="form__input" required />
      </div>
      <button type="submit" className="form__button">
        Añadir Pokémon
      </button>
    </form>
  );
};

export default PokemonForm;
