
import CardFilme from "../home/CardFilme";
import '../../styles/layout/Listagem.css'

interface lista {
    poster_path: string;
    title: string;
    vote_average: string;
    id: string;
}

interface props {
    lista: Array<lista>
    titulo: string
}

function ListagemFilmes({ lista, titulo }:props){
   
    return(
        <div className="listagemFilmes">
            {   
                !lista[0] ?
                <h2>{titulo}</h2>
                :
                lista.map((item) => {
                    return(
                    <CardFilme
                        id={item.id}
                        poster_path={item.poster_path}
                        title={item.title}
                        vote_average = {item.vote_average}  
                        key={item.id}              
                    />
                    )
                })
            }
        </div>
    )
}

export default ListagemFilmes