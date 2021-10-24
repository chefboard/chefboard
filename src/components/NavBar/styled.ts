import styled from 'styled-components'
import {Link} from 'react-router-dom' 

export const NavBarContainer = styled.div` 
  position: fixed;
  bottom: 0;
  background: #fff;
  width: 100vw;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: -1px 1px 5px 0px #000;
  left: 0;
  right: 0;
`

export const NavItem = styled(Link)` 
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
