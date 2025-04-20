import { Pokemon } from "../../types";
import "./PokemonCard.css";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon: { imageUrl, imageAlt, name, types, pokedexPosition },
}) => {
  return (
    <article className="pokemon">
      <span className="pokemon__pokedex-position">#{pokedexPosition}</span>
      <img
        className="pokemon__image"
        src={imageUrl}
        alt={imageAlt}
        width={220}
        height={220}
      />
      <h4 className="pokemon__name">{name}</h4>
      <div className="pokemon__types">
        {types.map((type) => (
          <span key={type} className="pokemon__type">
            {type}
          </span>
        ))}
      </div>
    </article>
  );
};

export default PokemonCard;
