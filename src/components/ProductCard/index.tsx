import {Container, ProductImage, ProductInfo, ProductName, ProductPrice} from './styled'

export interface Product {
  produtoId: number,
  name: string, 
  price: number, 
  image: string
}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  return (
    <Container to={`${product.produtoId}`}>
      <ProductImage src={product.image} alt="imagem do produto"/>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
      </ProductInfo>
    </Container>
  );
}

export default ProductCard;