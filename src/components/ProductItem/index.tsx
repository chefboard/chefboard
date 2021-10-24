import {ProductName ,ProductItemContainer} from  './styled';

interface ProductItemProps {
  product: any
}

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
  return (
    <ProductItemContainer to={`/dashboard/produto/${product.id}`}>
      <ProductName>{product.name}</ProductName>
    </ProductItemContainer>
  )
}

export default ProductItem;