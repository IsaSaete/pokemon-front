import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import PokemonsPage from "../pokemon/Pages/PokemonsPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to={"/pokemons"} />} />
        <Route path="pokemons" element={<PokemonsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
