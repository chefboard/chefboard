import menu from "../../assets/icons/menu.svg";
import invoice from "../../assets/icons/invoice.svg";
import food from '../../assets/icons/food.svg';

import { NavBarContainer, NavItem } from './styled';

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <NavItem to="/" cy-data='nav-item--cardapio'>
        <img src={menu} alt="cardapio" width="35px" height="35px" />
      </NavItem>
      <NavItem to="/fila" cy-data='nav-item--fila'>
        <img src={food} alt="fila" width="35px" height="35px" />
      </NavItem>
      <NavItem to="/comanda" cy-data='nav-item--comanda'>
        <img src={invoice} alt="comanda" width="35px" height="35px" />
      </NavItem>
    </NavBarContainer>
  )
}

export default NavBar;