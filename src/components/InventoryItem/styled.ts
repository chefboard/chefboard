import styled from 'styled-components'

interface filledBarProps {
  quantity: number;
}

export const  InventoryItemContainer = styled.div`
  width: 90%;
  padding: 15px;
  margin: 0 auto;
`

export const ContentBar = styled.div`
  width: 100%;
  height: 15px;
  position: relative;
  background-color: gray;
  border-radius: 10px;
`

export const FilledBar = styled.div<filledBarProps>`
  width: ${(props) => props.quantity}%;
  height: 100%;
  height: 100%;
  background-color: yellow;
  border-radius: 10px;
`


