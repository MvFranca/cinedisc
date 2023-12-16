import { useEffect, useState } from "react"; 
import { useSearchParams } from "react-router-dom";
import CardFilme from "../components/home/CardFilme";
import '../styles/search/Search.css'
import Titulo from "../components/layout/Titulo";

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

interface Teste {
    poster_path: string;
    title: string;
    vote_average: string;
    id: string;
  }
  

const Search = () => {

    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState<Array<Teste>>([])
    const query = searchParams.get("q")

      
    async function conteudo(searchURL: string) {
        const api = await fetch(`${searchURL}`);
        const json = await api.json();
        console.log(json)
        setMovies(json.results);
    }
      
      

    useEffect(() => {
          const urlFull = `${searchURL}?${apiKey}&language=pt-BR&query=${query}`;
      
          conteudo(urlFull);
    }, [query]);


    return ( 
        <div className="search-page">
         
         <div className="titulo-search">
         <Titulo>Resultados para {query}:</Titulo>
         </div>
        
        <section className='carrosselFilmes'>
        {
        
        movies.length === 0 ? <p>carregando...</p>
        :
        movies.map((item, index) => (
            <CardFilme
            poster_path={item.poster_path}
            title={item.title}
            vote_average={item.vote_average}
            id = {item.id}
            key={index}
            />
        ))}

        </section>

            
        </div>
     );
}
 
export default Search;