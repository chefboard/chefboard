import { useEffect, useState } from "react";
import { MainImage, EditButton} from "./styled";
import { PageTitle, Content } from '../../styles/global'

import ProductIngredient from '../../components/ProductIngredient'
import { useParams } from "react-router-dom";

interface ProductProps {
  nome: string;
  ingredientes: Array<{name: string;quantity: string}>
}

const Product: React.FC = () => {
  const [product, setProduct] = useState<ProductProps>()
  let { id } = useParams() as any ;

  useEffect(() => {
    fetch(`https://upxptycof6.execute-api.us-east-1.amazonaws.com/Dev/dynamodbmanager/prato`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: `{
        "operation": "read",
        "payload": {
          "Key": {
            "pratoId": "1"
          }
        }
      }`
    }).then(response => response.json()).then(response => setProduct(response.Item))


    // const ingredientsMock = [
    //   {name: 'queijo', quantity: '10g', },
    //   {name: 'alface', quantity: '20g'},
    //   {name: 'tomate', quantity: '30g'},
    // ]
    // setIngredients(ingredientsMock)

  },[])

  console.log(product)

  return (
    <div className="App">
      <div className="">
        <PageTitle>{product?.nome}</PageTitle>
      </div> 
      <MainImage>
        <img src="" alt=''/>
      </MainImage> 
      <Content>
        <ul>
        {product?.ingredientes?.map((ingredient, index) => 
          <ProductIngredient key={index} ingredient={ingredient} />
        )}
        </ul>
      </Content>
      <EditButton/>
    </div>
  );
};

export default Product;
