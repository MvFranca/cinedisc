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

const CardFilme = ({vote_average, poster_path, title, id}: props) => {



  return (
    <a href={`/${id}`} className="card-filme">
      <img src={imageUrl + poster_path} alt={title} />

      <div className="inform-filme">
        <span>
          <IconStar width={22} height={22} color="#9dff00" />
          {vote_average}
        </span>
        <div>
          <IconHeart width={23} height={23} color="#d14c4c" />
          <IconIconBookmark width={20} height={23} />
        </div>
      </div>
    </a>
  );
};

export default CardFilme;
