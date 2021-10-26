import Product from '../../pages/Product';
import * as S  from  './styled';

interface ProductItemProps {
  product: any
}

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
  return (
    <S.ProductItemContainer to={`/dashboard/produto/${product.id}`}>
      <S.ProductImage src={product.image}/>
      <S.ProductInfo>
        <S.ProductName>{product.name}</S.ProductName>
        <S.ProductIngredients>{product.ingredients?.map((ingredient: any, index: number)=> {
          if(index !== product.ingredients.length - 1){
            return `${ingredient.name},`
          }
          return ingredient.name
        })}</S.ProductIngredients>
        <S.StatusBadge status={product.status}>{product.status}</S.StatusBadge>
      </S.ProductInfo>
    </S.ProductItemContainer>
  )
}

export default ProductItem;