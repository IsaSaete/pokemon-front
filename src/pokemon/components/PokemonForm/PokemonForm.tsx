import React, { useState } from "react";
import { useNavigate } from "react-router";
import { PokemonFormData } from "../../types";
import { Pokemon } from "../../types";
import "./PokemonForm.css";

interface PokemonFormProps {
  action: (pokemonData: PokemonFormData) => Promise<Pokemon>;
}

const PokemonForm: React.FC<PokemonFormProps> = ({ action }) => {
  const intialPokemon: PokemonFormData = {
    name: "",
    imageUrl: "",
    pokedexPosition: 0,
  };

  const [pokemonData, setPokemonData] = useState(intialPokemon);

  const modifyPokemonData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const propertyName = event.target.id;

    setPokemonData((pokemonData) => ({
      ...pokemonData,
      [propertyName]: newValue,
    }));
  };

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      await action(pokemonData);

      navigate("/");
    } catch {
      setErrorMessage("⚠️ ¡Lo siento, este Pokemon no existe! ⚠️");
    }
  };

  const isFormValid =
    pokemonData.name !== "" &&
    pokemonData.imageUrl !== "" &&
    pokemonData.pokedexPosition > 0;

  return (
    <form className="form" onSubmit={onSubmitForm}>
      {errorMessage && <p className="form__error">{errorMessage}</p>}
      <div className="form__group">
        <label htmlFor="name" className="form__label">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          className="form__input"
          value={pokemonData.name}
          onChange={modifyPokemonData}
          required
        />
      </div>
      <div className="form__group">
        <label htmlFor="imageUrl" className="form__label">
          URL de la imagen
        </label>
        <input
          type="url"
          id="imageUrl"
          className="form__input"
          value={pokemonData.imageUrl}
          onChange={modifyPokemonData}
        />
      </div>
      <div className="form__group">
        <label htmlFor="pokedexPosition" className="form__label">
          Número de Pokédex
        </label>
        <input
          type="number"
          id="pokedexPosition"
          className="form__input"
          value={pokemonData.pokedexPosition || ""}
          onChange={modifyPokemonData}
          min={1}
        />
      </div>
      <button type="submit" className="form__button" disabled={!isFormValid}>
        Añadir Pokémon
      </button>
    </form>
  );
};

export default PokemonForm;
