
import { useState } from "react";
import IconHeart from "../../icons/IconHeart";
import IconMenu from "../../icons/IconMenu";

import Icon135Search from "../../icons/IconSearch";
import IconSettings from "../../icons/IconSettings";
import "../../styles/layout/Header.css";

const Header = () => {
  const [search, setSearch] = useState('');

  function handleSubmit() {
    event?.preventDefault()

    if(!search) return alert("Digite algo para pesquisar")


  }

  return (
    <header className="cabecalho">
      <nav>
        <a href="/">
          <img src="logo-cinedisc.png" alt="Logo CineDisc" />
        </a>

        <div className="icon-menu">
          <IconMenu />
        </div>

        <div className="links-header">
          <a href={"/favoritos"}>
            <IconHeart width={25} height={25} color="#ff0000" />
            Favoritos
          </a>
          <a href={"/salvo"}>Assistir Depois</a>
        </div>
      </nav>

      <div className="busca">
        <form className="input-busca" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite o nome de algum filme para buscar"
            value={search}
            onChange={ (e) => setSearch(e.currentTarget.value) }
          />
          <button>
            <Icon135Search width={20} height={20} color="#fff" />
          </button>
        </form>

        <IconSettings color="#aeaeae" className="icone-config" />
      </div>
    </header>
  );
};

export default Header;
