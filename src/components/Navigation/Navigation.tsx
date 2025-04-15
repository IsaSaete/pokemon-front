import { NavLink } from "react-router";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="navigation-list__link" to="/pokemon">
            Pokémons
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
