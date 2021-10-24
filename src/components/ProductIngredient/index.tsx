import {ProductName ,Quantity, ProductIngredientContainer} from  './styled';

interface ProductIngredientProps {
  ingredient: any
}

const ProductIngredient: React.FC<ProductIngredientProps> = ({ingredient}) => {
  return (
    <ProductIngredientContainer>
      <ProductName>{ingredient.name}</ProductName>
      <Quantity>{ingredient.quantity}</Quantity>
    </ProductIngredientContainer>
  )
}

export default ProductIngredient;