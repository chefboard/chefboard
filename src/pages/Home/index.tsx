import {useState, useEffect} from 'react'
import NavTab from "../../components/NavBar";
import { Content, PageTitle } from '../../styles/global'
import ProductCard, {Product} from '../../components/ProductCard'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/swiper.min.css';

interface ProductList {
  categories: Array<{
    name: string;
    products: Array<Product>;
  }>
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductList>()

  useEffect(() => {
    const productsMock = {
      categories: [
        {
          name: "hamburgers",
          products: [
            {produtoId:1, name: "Cheese Egg Burguer", price: 22.5, image: `${process.env.PUBLIC_URL}/image/Cheese-Egg-Burguer.png`},
            {produtoId:1, name: "Cheese Bacon Burguer DarkBurguer", price: 22.5,image: `${process.env.PUBLIC_URL}/image/Cheese-Egg-Burguer.png`}
          ]
        },
        {
          name: "sorvetes",
          products: [
            {produtoId:1, name: "Sorvete de Chocolate", price: 12.9, image: `${process.env.PUBLIC_URL}/image/Cheese-Egg-Burguer.png`},
            {produtoId:1, name: "Sorvete de Menta", price: 12.9, image: `${process.env.PUBLIC_URL}/image/Cheese-Egg-Burguer.png`}
          ]
        }
      ]
    }

    setProducts(productsMock)

  },[])

  return (
    <div className="App">
      <div className="">
        <PageTitle>Cardápio</PageTitle>
      </div>
      <Content>
        {products?.categories.map((category) => 
          <div>
            <h2>{category.name}</h2>
            <div>
              <Swiper slidesPerView="auto" freeMode={true} freeModeMomentumBounce={true} spaceBetween={25}>
                {category.products.map(product => <SwiperSlide style={{width: '217px'}}><ProductCard product={product} /></SwiperSlide>)}
              </Swiper>
            </div>
          </div>
        )}
      </Content>
      <NavTab />
    </div>
  );
};

export default Home;
