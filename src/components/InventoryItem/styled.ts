import styled from 'styled-components'

interface filledBarProps {
  quantity: number;
}

export const ContentBar = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 15px;
  position: relative;
  background-color: gray;
  border-radius: 10px;
`

export const FilledBar = styled.div<filledBarProps>`
  width: 50%;
  height: 100%;
  height: 100%;
  background-color: yellow;
  border-radius: 10px;
`
