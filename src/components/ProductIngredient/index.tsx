import {ProductName ,Quantity, ProductIngredientContainer} from  './styled';

interface ProductIngredientProps {
  ingredient: any
}

const ProductIngredient: React.FC<ProductIngredientProps> = ({ingredient}) => {
  return (
    <ProductIngredientContainer>
      <ProductName>{ingredient.nome}</ProductName>
      <Quantity>{ingredient.quantidade}</Quantity>
    </ProductIngredientContainer>
  )
}

export default ProductIngredient;