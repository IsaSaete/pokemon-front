import "@fontsource/slackey/index.css";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="app-title">pokedex</h1>
      <Navigation />
    </header>
  );
};

export default Header;
