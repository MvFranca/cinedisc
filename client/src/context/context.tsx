
import { createContext, PropsWithChildren, useState } from "react";



interface Teste {
    poster_path: string;
    title: string;
    vote_average: string;
    id: string;
  }
  


interface pontuacao {

  favoritos: Array<Teste>;
  setFavoritos: ([]: any) => void;
  maisTarde: Array<Teste>;
  setMaisTarde: ([]: any) => void;

}

const initialValue = {
  
  favoritos: [],
  setFavoritos: () => {},


  maisTarde: [],
  setMaisTarde: () => {},
};


export const pointContext = createContext<pontuacao>(initialValue);

const Context = ({children}: PropsWithChildren) => {

  const [favoritos, setFavoritos] = useState([])

  const [maisTarde, setMaisTarde] = useState([])

  

  return (
    <pointContext.Provider value={{favoritos, setFavoritos, maisTarde, setMaisTarde}}>
        {children}
    </pointContext.Provider>
  );
};

export default Context;
