import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import PokemonsPage from "../pokemon/pages/PokemonsPage/PokemonsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PokemonFormPage from "../pokemon/pages/PokemonFormPage/PokemonFormPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to={"/pokemons"} />} />
        <Route path="pokemons" element={<PokemonsPage />} />
        <Route path="add-pokemon" element={<PokemonFormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
