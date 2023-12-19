
import { useContext} from "react";
import { pointContext } from "../context/context";
import ListagemFilmes from "../components/layout/Listagem";

const Favoritos = () => {

const {favoritos} = useContext(pointContext)
    
    return(
        <>
            <ListagemFilmes
                lista={favoritos}
                titulo="Sua lista de favoritos está vazia."
            />
        </>
    )
}

export default Favoritos