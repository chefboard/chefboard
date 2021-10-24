// import {Link} from 'react-router-dom'

import * as Styled from './styled';

const Card: React.FC = ({children}) => {
  return (
    <Styled.Card>
      {children}
    </Styled.Card>
  )
}

export default Card;