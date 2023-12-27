import { useEffect, useState } from "react";
import IconHeart from "../../icons/IconHeart";
import IconMenu from "../../icons/IconMenu";

import Icon135Search from "../../icons/IconSearch";
import "../../styles/layout/Header.css";
import HeaderMobile from "./HeaderMobile";
import InputMobile from "./InputMobile";
import { NavLink, useNavigate } from "react-router-dom";
import IconBookmarkFill from "../../icons/IconBookMarkCheio";

const Header = () => {
  const [search, setSearch] = useState<string>("");
  const [menu, setMenu] = useState(false);
  const [input, setInput] = useState(false);

  const navigate = useNavigate()

  function handleSubmit() {
    event?.preventDefault();

    if (!search) return

    navigate(`/search?q=${search}`)
    setSearch("")
  }

  useEffect(() => {
    if(input) setMenu(false)

  }, [input])

  useEffect(() => {
    if(menu) setInput(false)

  }, [menu])


  return (
    <header className="cabecalho">
      <nav className="nav-desktop">
        <NavLink to="/">
          <img src="logo-cinedisc.png" alt="Logo CineDisc" />
        </NavLink>

        <div
          className="icon-menu"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <IconMenu />
        </div>

        <div className="links-header">
          <NavLink to={"/favoritos"}>
            <IconHeart width={25} height={25} color="#ff0000" />
            Favoritos
          </NavLink>
          <NavLink to={"/assistirDepois"}>
          <IconBookmarkFill width={19} height={18} />
            Assistir Depois
            </NavLink>
        </div>
      </nav>

      <div className="busca">
        <form className="input-busca" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite o nome de algum filme para buscar"
            className="input-desktop"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          />

          {input && <InputMobile 
            search={search}
            setSearch={setSearch}
          />}
          <button
          type="submit"
            onClick={() => {
              setInput(!input);
            }}
          >
            <Icon135Search width={20} height={20} color="#fff" />
          </button>
        </form>

      </div>
      {menu && <HeaderMobile />}
    </header>
  );
};

export default Header;
