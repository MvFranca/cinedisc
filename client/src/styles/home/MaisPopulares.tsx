import { useEffect, useState } from "react";
import CarrosselFilmes from "../../components/home/CarrosselFilmes";
import Titulo from "../../components/layout/Titulo";
import "../../styles/home/MelhoresAvaliados.css";
import CardFilme from "../../components/home/CardFilme";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

interface Teste {
  poster_path: string;
  title: string;
  vote_average: string;
}



const MaisPopulares = () => {
  const [popMovies, setPopMovies] = useState<Array<Teste>>([]);

  async function conteudo(moviesURL: string) {
    const api = await fetch(moviesURL);
    const json = await api.json();
    setPopMovies(json.results);
  }

  useEffect(() => {
    const urlFull = `${moviesURL}popular?${apiKey}&language=pt-BR`;

    conteudo(urlFull);
  }, []);

  console.log(popMovies);

  return (
    <div className="melhores-avaliados">
      <Titulo>Mais Populares</Titulo>
      <CarrosselFilmes>
        {popMovies.length === 0 && <p>carregando...</p>}

        {popMovies.length > 0 &&
          popMovies.map((filme) => (
            <CardFilme
              poster_path={filme.poster_path}
              title={filme.title}
              vote_average={filme.vote_average}
            />
          ))}
      </CarrosselFilmes>
    </div>
  );
};

export default MaisPopulares;
