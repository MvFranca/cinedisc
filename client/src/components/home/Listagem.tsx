import '../../styles/home/Listagem.css'

const Listagem = () => {
  return (
    <div className='listagem'>
      <div className='titulo'>
          <h2>Busque os itens por Gênero ou Categoria</h2>
          <p>Selecione uma das opções abaixo para ter uma busca personalizada:</p>
      </div>

      <div className='escolha'>
            <div>
                <p>
                    Categorias
                </p>
            </div>

            <div className='generos'>
                <p >
                    Gêneros
                </p>
            </div>
      </div>
    </div>
  );
};

export default Listagem;
