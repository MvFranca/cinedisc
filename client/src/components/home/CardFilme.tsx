import IconIconBookmark from "../../icons/IconBookMark";
import IconHeart from "../../icons/IconHeart";
import IconStar from "../../icons/IconStar";
import "../../styles/home/CardFilme.css";



const imageUrl = import.meta.env.VITE_IMG   

type props = {
  poster_path: string;
  title: string;
  vote_average: string;
  id: string;
} 


import { pointContext } from "../../context/context";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconHeartVazio from "../../icons/IconsHeartVazio";
import IconBookmarkFill from "../../icons/IconBookMarkCheio";

const CardFilme = ({vote_average, poster_path, title, id}: props) => {

  const [favoritado, setFavoritado] = useState(false)
  const [salvo, setSalvo] = useState(false)

  const {setFavoritos, favoritos, setMaisTarde, maisTarde} = useContext(pointContext)

 

  useEffect(() => {

    favoritos.map((item) => {
      if( item.id == id) setFavoritado(true)
    })

  }, [favoritos])

  useEffect(() => {

    maisTarde.map((item) => {
      if( item.id == id) setSalvo(true)
    })

  }, [salvo])


  function favoritar(vote_average: string, poster_path: string, title: string, id:string){
    
    if(favoritado) {
      setFavoritado(false)
      let newArray = favoritos.filter((item) => item.id !== id)
      setFavoritos(newArray)
      return
    } 

    let newItem = {vote_average: vote_average, poster_path: poster_path, title: title, id: id}
    setFavoritos([...favoritos, newItem])
   
  }

  function assistirDepois(vote_average: string, poster_path: string, title: string, id:string){

    if(salvo) {
      setSalvo(false)
      let newArray = maisTarde.filter((item) => item.id !== id)
      setMaisTarde(newArray)
      return
    }
    
    let newItem = {vote_average: vote_average, poster_path: poster_path, title: title, id: id}
    setMaisTarde([...maisTarde, newItem])
    setSalvo(true)
  }


  return (
    <div className="card-filme">
      
    <Link to={`/${id}`} >
      <img src={imageUrl + poster_path} alt={title} />
    </Link>

    <div className="inform-filme">
      <span>
        <IconStar width={22} height={22} color="#9dff00" />
        {vote_average}
      </span>
      <div>

        {
          favoritado ?
          <IconHeart width={23} height={23} color="red" onClick={() => favoritar(vote_average, poster_path, title, id)}/>
          :
          <IconHeartVazio width={23} height={23} color="#fff" onClick={() => favoritar(vote_average, poster_path, title, id)}/>
        }

        {
          salvo ?
          <IconBookmarkFill width={19} height={18} onClick={() => assistirDepois(vote_average, poster_path, title, id)} />
          :
          <IconIconBookmark width={20} height={23} onClick={() => assistirDepois(vote_average, poster_path, title, id)}/>
        }

        
      </div>
    </div>
  </div>
  );
};

export default CardFilme;
