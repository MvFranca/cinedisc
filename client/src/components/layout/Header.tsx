import IconHeart from "../../icons/IconHeart";

import Icon135Search from "../../icons/IconSearch";
import IconSettings from "../../icons/IconSettings";
import "../../styles/layout/Header.css";


const Header = () => {
  return (
    <header className="cabecalho">
      <div>

            <a href="/"><img src="logo-cinedisc.png" alt="Logo CineDisc" /></a>

            <a href={'/favoritos'}>
              <IconHeart width={25} height={25} color="#ff0000" />
              Favoritos
            </a>

            <a href={'/salvo'}>Assistir Depois</a>
      </div>

      <div className="busca">
        
        <div className="input-busca">
          <input
            type="text"
            placeholder="Digite o nome de algum filme para buscar"
          />
          <div>
            <Icon135Search width={20} height={20} color="#fff" />
          </div>
        </div>

        <IconSettings width={30} height={30} color="#aeaeae" />
      </div>

    </header>
  );
};

export default Header;
