import '../../styles/home/Generos.css'
import { useEffect, useState } from 'react';
import CardFilme from './CardFilme';
import Listagem from './Listagem';
import ListagemFilmes from '../layout/Listagem';


interface typeGenres {
    id: string
    name: string
  }

  interface typeMovies {
    poster_path: string;
    title: string;
    vote_average: string;
    id: string;
  }
  

function Generos () {
    const [genres, setGenres] = useState<Array<typeGenres>>([])
    const [generoEscolhido, setGeneroEscolhido] = useState<Array<typeMovies>>([])

    async function generos() {
        const api = (await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=6f31d3e83712370a49380bf91bdc6d43&language=pt-BR'))
        const json = await api.json()
        setGenres(json.genres)
    }
  
    useEffect(() => {
  
      generos()
  
    }, [])

    async function escolhaGenero(nome: string, id: string){
        const api = (await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=6f31d3e83712370a49380bf91bdc6d43&with_genres=${id}&language=pt-BR`))
        const json = await api.json()
        setGeneroEscolhido(json.results)
    }


    return(

        <div className='full-generos'>
    
        {
          genres[0] ?
          genres.map((item) => {
           return(
            <span onClick={() => escolhaGenero(item.name, item.id)}>
              {item.name}
            </span>
           ) 
          })
          :
          <p>carregando...</p>
        }
        
        {
            generoEscolhido[0] &&
            <ListagemFilmes
            lista={generoEscolhido}
            titulo='teste'
            />
        }
        
    </div>
    )
}

export default Generos