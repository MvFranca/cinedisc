import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Search from "../pages/Search";
import Layout from "../components/layout/Layout";

const Rotas = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </Layout>
  );
};

export default Rotas;
