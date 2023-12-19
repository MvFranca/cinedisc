import Carrossel from "../components/home/Carrossel";
import Listagem from "../components/home/Listagem";
import "../styles/home/Home.css";
import MelhoresAvaliados from "../components/home/MelhoresAvaliados";
import MaisPopulares from "../styles/home/MaisPopulares";
import { useState } from "react";
import Generos from "../components/home/Generos";

const Home = () => {

  const [escolha, setEscolha] = useState<boolean>(true)

  return (
    <div className="home">
      <Carrossel />
      <Listagem 
      setEscolha = {setEscolha}
      />

      {
        escolha ?
        <>
          <MelhoresAvaliados />
          <MaisPopulares />
        </>
      :
        <Generos/>
      }
      


    </div>
  );
};

export default Home;
