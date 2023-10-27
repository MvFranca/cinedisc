import { PropsWithChildren } from 'react';
import '../../styles/home/CarrosselFilmes.css'

const CarrosselFilmes = ({children}: PropsWithChildren) => {
    return ( 
        <section className='carrosselFilmes'>
            {
                children
            }
        </section>
        
     );
}
 
export default CarrosselFilmes;