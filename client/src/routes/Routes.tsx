import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Search from "../pages/Search";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
