import Carrossel from "../components/home/Carrossel";
import Listagem from "../components/home/Listagem";
import "../styles/home/Home.css";
import MelhoresAvaliados from "../components/home/MelhoresAvaliados";
import MaisPopulares from "../styles/home/MaisPopulares";

const Home = () => {
  return (
    <div className="home">
      <Carrossel />
      <Listagem />
      <MelhoresAvaliados />
      <MaisPopulares />
    </div>
  );
};

export default Home;
