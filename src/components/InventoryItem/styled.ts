import styled from 'styled-components'

interface filledBarProps {
  quantity: string;
}

export const  InventoryItemContainer = styled.li`
  width: 100%;
  padding: 15px;
  list-style: none;
  text-transform: capitalize;
`

export const QuantityContainer = styled.div`
  display: flex;

`

export const ContentBar = styled.div`
  width: 70%;
  height: 15px;
  position: relative;
  background-color: #C4C4C459;
  border-radius: 10px;
  margin-top: 5px;
  margin-right: 8px;
`

export const FilledBar = styled.div<filledBarProps>`
  width: ${(props) => Number(props.quantity) < 100 ? props.quantity : 100}%;
  height: 100%;
  height: 100%;
  background-color: ${(props) => Number(props.quantity) <= 100 ? "#4DD363": "#f39c12"};
  border-radius: 10px;
`

export const Estimate = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  color: #000000EB;
  white-space: nowrap;
`


export const Percentage = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  color: #9CA39B;
  margin-right: 11px;
`

