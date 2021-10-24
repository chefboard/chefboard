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
      {name: 'queijo', id: '1'},
      {name: 'alface', id: '2'},
      {name: 'tomate', id: '3'},
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
