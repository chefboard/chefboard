import { useEffect, useState } from "react";
import { PageTitle, Content } from '../../styles/global'

import ProductItem from '../../components/ProductItem'

interface ProductProps {
  name: string;
  id: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    const productsMock = [
      {name: 'Cheese Egg Burguer', id: '1', image: `${process.env.PUBLIC_URL}/image/Cheese-Egg-Burguer.png`, ingredients: [{name: 'queijo'}, {name: 'tomate'}], status: "ativo"},
      {name: 'Cheese Egg Bacon Burguer', id: '2', image: `${process.env.PUBLIC_URL}/image/Cheese-Egg-Burguer.png`, status: "inativo"},
      {name: 'Green Chili Bacon Burguer', id: '3', image: `${process.env.PUBLIC_URL}/image/Cheese-Egg-Burguer.png`},
    ]
    setProducts(productsMock)
  },[])

  return (
    <div className="App">
      <div className="">
        <PageTitle>Produto</PageTitle>
      </div> 
      <Content>
        <ul>
        {products.map((product) => 
          <ProductItem  product={product}/>
        )}
        </ul>
      </Content>
    </div>
  );
};

export default Products;
