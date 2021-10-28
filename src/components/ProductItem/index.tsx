import Product from '../../pages/Product';
import * as S  from  './styled';

interface ProductItemProps {
  product: any
}

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
  return (
    <S.ProductItemContainer to={`/dashboard/produto/${product.pratoId}`}>
      <S.ProductImage src={product.image}/>
      <S.ProductInfo>
        <S.ProductName>{product.nome}</S.ProductName>
        <S.ProductIngredients>{product?.ingredientes?.map((ingredient: any, index: number)=> {
          if(index !== product.ingredientes.length - 1){
            return `${ingredient.nome},`
          }
          return ingredient.name
        })}</S.ProductIngredients>
        <S.StatusBadge status={product.status}>{product.status}</S.StatusBadge>
      </S.ProductInfo>
    </S.ProductItemContainer>
  )
}

export default ProductItem;