import * as Styled from './styled';
import Chefboard from '../../assets/icons/Chefboard.svg'

const Header: React.FC = () => {
  return (
    <Styled.Logo to='/'>
      <img src={Chefboard} alt="Chefboard"/>
    </Styled.Logo>
  )
}

export default Header;