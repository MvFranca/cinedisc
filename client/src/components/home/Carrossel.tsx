import { Link } from "react-router-dom";
import IconBxLeftArrow from "../../icons/IconArrowLeft";
import IconBxRightArrow from "../../icons/IconArrowRight";
import "../../styles/home/Carrossel.css";
import CarrosselPrincipal from "./CarrosselPrincipal";
import { useEffect, useRef, useState } from "react";

interface Teste {
  overview: string;
  title: string;
  id: string;
  backdrop_path: string;
}

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Carrossel = () => {
  const [newMovies, setNewMovies] = useState<Array<Teste>>([]);
  const carrossel = useRef<HTMLDivElement>(null);
 
  async function conteudo(moviesURL: string) {
    const api = await fetch(moviesURL);
    const json = await api.json();
    setNewMovies(json.results);
  }

  const avancar = () => {

    const teste = carrossel.current!.scrollWidth;

    
    if((teste - teste/newMovies.length) <= carrossel.current!.scrollLeft) return carrossel.current!.scrollLeft = 0

    carrossel.current!.scrollLeft += teste / newMovies.length;

    console.log(`Largura: ${teste - teste/newMovies.length}\nPosição Atual: ${carrossel.current!.scrollLeft }`)

  };

  const voltar = () => {
    const teste = carrossel.current!.scrollWidth;

    carrossel.current!.scrollLeft -= teste / newMovies.length;
  };

  useEffect(() => {
    const urlFull = `${moviesURL}now_playing?${apiKey}&language=pt-BR`;

    conteudo(urlFull);
  }, []);

 

  return (
    <div className="carrossel-principal" ref={carrossel}>
      {newMovies.length === 0 && <p>carregando...</p>}

      {newMovies.length > 0 &&
        newMovies.map((filme) => (
          <Link to={`/${filme.id}`}>
            <section>
              <CarrosselPrincipal
                backdrop_path={filme.backdrop_path}
                title={filme.title}
                overview={filme.overview}
              />
            </section>
          </Link >
        ))}
      <div className="arrow-left" onClick={voltar}>
        <IconBxLeftArrow color="#fff" />
      </div>
      <div className="arrow-right" onClick={avancar}>
        <IconBxRightArrow color="#fff" />
      </div>
    </div>
  );
};

export default Carrossel;
