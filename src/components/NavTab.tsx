import {Link} from 'react-router-dom'
import menu from "../assets/icons/menu.svg";
import invoice from "../assets/icons/invoice.svg";
import food from '../assets/icons/food.svg';

import './styles.css';

const NavTab: React.FC = () => {
  return <div className='nav-tab'>
    <Link to="/" className="nav-item">
      <img src={menu} alt="cardapio" width="35px" height="35px" />
    </Link>
    <Link to="/fila" className="nav-item">
      <img src={food} alt="fila" width="35px" height="35px" />
    </Link>
    <Link to="/comanda" className="nav-item">
      <img src={invoice} alt="comanda" width="35px" height="35px" />
    </Link>
  </div>;
}

export default NavTab;