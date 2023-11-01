import IconBxLeftArrow from "../../icons/IconArrowLeft";
import IconBxRightArrow from "../../icons/IconArrowRight";
import "../../styles/home/Carrossel.css";
import CarrosselPrincipal from "./CarrosselPrincipal";
import { useEffect, useRef, useState } from "react";

interface Teste {
  overview: string;
  title: string;
  backdrop_path: string;
}

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Carrossel = () => {
  const [newMovies, setNewMovies] = useState<Array<Teste>>([]);
  const carrossel = useRef<HTMLDivElement>(null);
  /*
  const [scroll, setScroll] = useState(0);
  const [intervalo, setIntervalo] = useState();
  */

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

  /*
  useEffect(() => {
    let time = 0;

    if (carrossel.current!.scrollLeft == 0) {
      time = 2000;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      time = 4000;
    }

    let teste = setTimeout(() => {
      setScroll(scroll + 1);
      console.log(teste);
      avancar();
    }, time);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);

*/

  return (
    <div className="carrossel-principal" ref={carrossel}>
      {newMovies.length === 0 && <p>carregando...</p>}

      {newMovies.length > 0 &&
        newMovies.map((filme) => (
          <section>
            <CarrosselPrincipal
              backdrop_path={filme.backdrop_path}
              title={filme.title}
              overview={filme.overview}
            />
          </section>
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
