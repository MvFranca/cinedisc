import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Search from "../pages/Search";
import Layout from "../components/layout/Layout";
import Favoritos from "../pages/Favoritos";
import AssistirDepois from "../pages/AssistirDepois";

const Rotas = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/assistirDepois" element={<AssistirDepois />} />
      </Routes>
    </Layout>
  );
};

export default Rotas;
