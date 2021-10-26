import styled from 'styled-components'
import {Link} from 'react-router-dom'

type StatusBadgeType = {
  status: string
}

export const ProductItemContainer = styled(Link)` 
  display: flex;
  text-decoration: none;
  color: #2e2e2e;
  margin-bottom: 12px;
`

export const ProductImage = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
`

export const ProductInfo = styled.div`
  margin-left: 24px;
`

export const ProductName = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #000000EB;

`

export const ProductIngredients = styled.span`
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
  color: #8F8E8E;

`

export const StatusBadge = styled.span<StatusBadgeType>`
  background-color: ${(props) => props.status === 'ativo'? '#4DD363' : 'FF2137'};
  display: flex;
  width: 49px;
  font-size: 10px;
  color: #fff;
  justify-content:center;


`