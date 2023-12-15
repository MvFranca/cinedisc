import CarrosselFilmes from "./CarrosselFilmes";
import Titulo from "../layout/Titulo";
import "../../styles/home/MelhoresAvaliados.css";
import CardFilme from "./CardFilme";
import { useEffect, useRef, useState } from "react";


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

interface Teste {
  poster_path: string;
  title: string;
  vote_average: string;
  id: string;
}

const MelhoresAvaliados = () => {
  const [topMovies, setTopMovies] = useState<Array<Teste>>([]);

  async function conteudo(moviesURL: string) {
    const api = await fetch(`${moviesURL}`);
    const json = await api.json();
    setTopMovies(json.results);
  }


  useEffect(() => {
    const urlFull = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;

    conteudo(urlFull);
  }, []);

  return (
    <div className="melhores-avaliados">
      <Titulo>Melhores Avaliados</Titulo>
      <CarrosselFilmes 
      topMovies={topMovies}
      >
        {topMovies.length === 0 && <p>carregando...</p>}

        {topMovies.length > 0 &&
          topMovies.map((filme, index) => (
            <CardFilme
              poster_path={filme.poster_path}
              title={filme.title}
              vote_average={filme.vote_average}
              id = {filme.id}
              key={index}
              />
          ))}
        
      </CarrosselFilmes>
    </div>
  );
};

export default MelhoresAvaliados;
