import { useRef } from 'react';
import '../../styles/home/Listagem.css'


type props ={
  setEscolha: (valor: boolean) => void
}


const Listagem = ({setEscolha}: props) => {

  const genero = useRef<HTMLDivElement>(null)
  const categoria = useRef<HTMLDivElement>(null)

  function genre(){
    setEscolha(false)
    genero.current!.style.borderBottom = " 4px solid rgb(255, 0, 0)"

    categoria.current!.style.borderBottom = 'none'
  }

  function category(){
    setEscolha(true)
    categoria.current!.style.borderBottom = " 4px solid rgb(255, 0, 0)"
    genero.current!.style.borderBottom = 'none'
  }


  return (
    <div className='listagem'>
      <div className='titulo'>
          <h2>Busque os itens por Gênero ou Categoria</h2>
          <p>Selecione uma das opções abaixo para ter uma busca personalizada:</p>
      </div>
      <div className='escolha' 
      >
            <div  onClick={category} ref={categoria}>
                <p>
                    Categorias
                </p>
            </div>

            <div className='generos' onClick={genre} ref={genero}>
                <p >
                    Gêneros
                </p>
            </div>
      </div>
    
      
    </div>
  );
};

export default Listagem;
