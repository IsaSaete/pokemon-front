import { NavLink } from "react-router";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="navigation-list">
        <li>
          <NavLink className="navigation-list__link" to="/pokemons">
            Pokémons
          </NavLink>
        </li>
        <NavLink className="navigation-list__link" to="/add-pokemon">
          Añadir Pokemon
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
