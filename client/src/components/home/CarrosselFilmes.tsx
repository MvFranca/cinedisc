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

        const teste = melhores.current!.scrollWidth;
        if((teste - teste/popMovies.length) <= melhores.current!.scrollLeft) return melhores.current!.scrollLeft = 0
        melhores.current!.scrollLeft += teste / popMovies.length;
        console.log(`Largura: ${teste - teste/popMovies.length}\nPosição Atual: ${melhores.current!.scrollLeft }`)
    }

    useEffect(() => {
        console.log( melhores.current!.scrollWidth)

    }, [])

    return ( 
        <section className='carrosselFilmes' ref={melhores}>
            {
                children
            }
              <div className="arrow-left" >
            <IconBxLeftArrow color="#fff" />
          </div>
          <div className="arrow-right" onClick={avancar}>
            <IconBxRightArrow color="#fff" />
          </div>
        </section>
        
     );
}
 
export default CarrosselFilmes;