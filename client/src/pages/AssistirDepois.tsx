import { useContext} from "react";
import { pointContext } from "../context/context";
import ListagemFilmes from "../components/layout/Listagem";

const AssistirDepois = () => {

const {maisTarde} = useContext(pointContext)



    return(
        <>
            <ListagemFilmes
                lista={maisTarde}
                titulo="Sua lista de filmes salvos está vazia."
            />
        </>
    )
}

export default AssistirDepois