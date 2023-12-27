import { useEffect, useRef } from 'react';
import '../../styles/home/CarrosselFilmes.css'
import IconBxLeftArrow from '../../icons/IconArrowLeft';
import IconBxRightArrow from '../../icons/IconArrowRight';

interface Teste {
    poster_path: string;
    title: string;
    vote_average: string;
    id: string;
  }

interface props {
    children: React.ReactNode;
    popMovies: Array<Teste>;
}

const CarrosselFilmes = ({children, popMovies}:props) => {

    const melhores = useRef<HTMLElement>(null)
    
    function avancar(){
        const largura = melhores.current!.scrollWidth;
        melhores.current!.scrollLeft += largura / popMovies.length;
    }


    function recuar(){

        const largura = melhores.current!.scrollWidth;
        melhores.current!.scrollLeft -= largura / popMovies.length;

    }


    useEffect(() => {


    }, [])

    return ( 
        <section className='carrosselFilmes' ref={melhores}>
            {
                children
            }
              <div className="arrow-left"  onClick={recuar}>
            <IconBxLeftArrow color="#fff" />
          </div>
          <div className="arrow-right" onClick={avancar}>
            <IconBxRightArrow color="#fff" />
          </div>
        </section>
        
     );
}
 
export default CarrosselFilmes;