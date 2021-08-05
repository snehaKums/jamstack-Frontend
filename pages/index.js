import React from 'react';
import axios from 'axios';
import ProductCategory from '../components/ProductCategory/ProductCategory';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import Layout from '../components/Layout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Home = ({homeData,mainData}) => {
  let mainUrl = 'https://pure-dawn-42818.herokuapp.com';
  return (
   <Layout pageTitle="ShopSite">
     <Header data={mainData.Header} />
     <div style={{marginTop:'-2%'}}>
        <CarouselComponent data={homeData[0].carousel} url={mainUrl} />
        <ProductCategory products={homeData[0].categories} url={mainUrl} />
    </div>
     <Footer data={mainData.Footer} />
   </Layout>
  );
}
export default Home;
export async function getStaticProps(){
    const res = await axios.get(process.env.API_CATEGORY_URL);
    const homeData = res.data;
    const resp = await axios.get(process.env.API_MAIN_URL);
    const mainData = resp.data;
    return {  
      props:{
        homeData,mainData
      }
    };
  }