import { useEffect, useState } from "react";
import { MainImage, EditButton} from "./styled";
import { PageTitle, Content } from '../../styles/global'

import ProductIngredient from '../../components/ProductIngredient'

interface ingredientsProps {
  name: string;
  quantity: string
}

const Product: React.FC = () => {
  const [ingredients, setIngredients] = useState<ingredientsProps[]>([])

  useEffect(() => {
    const ingredientsMock = [
      {name: 'queijo', quantity: '10g', },
      {name: 'alface', quantity: '20g'},
      {name: 'tomate', quantity: '30g'},
    ]
    setIngredients(ingredientsMock)
  },[])

  return (
    <div className="App">
      <div className="">
        <PageTitle>Produto</PageTitle>
      </div> 
      <MainImage>
        <img src="" alt=''/>
      </MainImage> 
      <Content>
        <ul>
        {ingredients.map((ingredient) => 
          <ProductIngredient ingredient={ingredient} />
        )}
        </ul>
      </Content>
      <EditButton/>
    </div>
  );
};

export default Product;
