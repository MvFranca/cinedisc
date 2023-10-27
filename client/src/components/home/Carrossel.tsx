import "../../styles/home/Carrossel.css";
import CarrosselPrincipal from "./CarrosselPrincipal";
import { useEffect, useState } from "react";

interface Teste {
  overview: string;
  title: string;
  backdrop_path: string;
}

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Carrossel = () => {
  const [newMovies, setNewMovies] = useState<Array<Teste>>([]);

  async function conteudo(moviesURL: string) {
    const api = await fetch(moviesURL);
    const json = await api.json();
    setNewMovies(json.results);
  }

  useEffect(() => {
    const urlFull = `${moviesURL}now_playing?${apiKey}&language=pt-BR`;

    conteudo(urlFull);
  }, []);

  return (
    <div className="carrossel-principal">
      {newMovies.length === 0 && <p>carregando...</p>}

      {newMovies.length > 0 &&
        newMovies.map((filme) => (
          <CarrosselPrincipal
            backdrop_path={filme.backdrop_path}
            title={filme.title}
            overview={filme.overview}
          />
        ))}
    </div>
  );
};

export default Carrossel;
