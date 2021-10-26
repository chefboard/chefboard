import styled from 'styled-components'


export const Container = styled.div`
  position: relative;
  width: 217px;
  height: 311px;  
  overflow: hidden;
`

export const ProductImage = styled.img`

` 

export const ProductInfo = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 14px;
  justify-content: center;
  width: 217px;
  height: 107px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.112) 0%, rgba(0, 0, 0, 0.122974) 0.01%, rgba(0, 0, 0, 0) 0.02%, rgba(0, 0, 0, 0.7375) 89.06%);

`

export const ProductName = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 8px;
`

export const ProductPrice = styled.p`
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  text-align: left;
`