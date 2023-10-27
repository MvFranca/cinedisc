import { PropsWithChildren } from "react";
import '../../styles/layout/Titulo.css'

const Titulo = ({children}: PropsWithChildren) => {
    return ( 
        <div className="titulo">
            <h2>{children}</h2>
            <aside />
        </div>
     );
}
 
export default Titulo;