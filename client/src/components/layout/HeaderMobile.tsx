import { Link } from 'react-router-dom';
import '../../styles/layout/HeaderMobile.css'

const HeaderMobile = () => {
    return ( 
        <nav className="header-mobile">
            <Link to="/favoritos">Favoritos</Link>
            <Link to="/assistirDepois">Assistir Depois</Link>
        </nav>
     );
}
 
export default HeaderMobile;