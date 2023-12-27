import "../styles/movie/Movie.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IconStar from "../icons/IconStar";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
//const imageUrl = import.meta.env.VITE_IMG;

interface typeObject {
  poster_path: string;
  title: string;
  vote_average: string;
  id: string;
  budget: string;
  revenue: string;
  overview: string;
  backdrop_path: string;
}

interface TypesCategorias {
  name: string;
  id: string;
}

const Movie = () => {
  const [movie, setMovie] = useState<typeObject>();
  const [categorias, setCategorias] = useState<Array<TypesCategorias>>([]);

  const { id } = useParams();

  async function conteudo(url: string) {
    const dados = await fetch(url);
    const json = await dados.json();
    setMovie(json);
    setCategorias(json.genres);
  }

  useEffect(() => {
    const url = `${moviesURL}${id}?${apiKey}&language=pt-BR`;
    conteudo(url);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(movie);

  return (
    <div className="movie-page">
      {movie ? (
        <div className="capa">
          <div className="infos-filme">
            <div className="imagem-menor">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={`${movie.title}`}
              />
            </div>

            <div className="descricao-filme">
              <h2>{movie.title}</h2>

              <div className="especificacoes">
                <span className="generos">
                  {categorias.map((categoria, index) => {
                    if(index <= 2){
                      if(index == 2 ||categoria.id == categorias[categorias.length - 1].id )
                      return <span key={categoria.id}>{categoria.name}</span>;
                    
                    return <span key={categoria.id}>{categoria.name}, </span>;}
                  })}
                </span>

                <span className="pontos">•</span>

                <span>
                  <h4>Orçamento:</h4>
                  <span>US$ {movie.budget}</span>
                </span>

                <span className="pontos">•</span>

                <span>
                  <h4>Receita:</h4>
                  <span>US$ {movie.revenue}</span>
                </span>
                <span className="pontos">•</span>
                <span>
                  <IconStar color="yellow" />
                  {movie.vote_average}
                </span>
              </div>

              <div>
                <h3>Sinopse</h3>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>

          <div className="teste">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt=""
            />
          </div>
        </div>
      ) : (
        <p>carregando...</p>
      )}
    </div>
  );
};

export default Movie;
