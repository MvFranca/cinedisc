import "../../styles/home/CarrosselPrincipal.css";

type props = {
  overview: string;
  title: string;
  backdrop_path: string;
};

const imageUrl = 'https://image.tmdb.org/t/p/original/';

const CarrosselPrincipal = ({ title, overview, backdrop_path }: props) => {
  return (
    <div className="item-carrossel">
      <div className="imagem-carrossel">
        <img src={imageUrl + backdrop_path} alt={title} />
      </div>

      <div className="descricao-item-carrosel">
        <div>
          <h3>{title}</h3>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default CarrosselPrincipal;
