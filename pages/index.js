import React from 'react';
import axios from 'axios';
import ProductCategory from '../components/ProductCategory/ProductCategory';
import CarouselComponent from '../components/Carousel/CarouselComponent';

const Home = ({products}) => {
  return (
    <div style={{marginTop:'-2%'}}>
        <CarouselComponent />
        <ProductCategory products={products} />
    </div>
  );
}
export default Home;
export async function getStaticProps(){
    const res = await axios.get(process.env.API_CATEGORY_URL);
    const products = res.data;
    return {  
      props:{
        products
      }
    };
  }