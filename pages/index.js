import React from 'react';
import axios from 'axios';
import ProductCategory from '../components/ProductCategory/ProductCategory';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import Layout from '../components/Layout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Image from 'next/image';

const Home = ({homeData,mainData}) => {
  return (
    <Layout pageTitle="ShopSite">
        <Header data={mainData} />
      <div style={{marginTop:'-2%'}}>
      {homeData.map( data => (
         (data.__component == "select.carousel") ? 
         <CarouselComponent data={data} />
         : 
         (data.__component == "select.categories") ?
         <ProductCategory data={data}  />
         :
         <div>
           <h3>{data.heading}</h3>
           <h2>{data.subHeading}</h2>
           <p>{data.description}</p>
           {/* <Image
              alt={data.image.name}
              src={data.image.formats.small.url}
              width={50}
              height={70}
            /> */}
         </div>
       ))}
     </div>
      {homeData.map( data => (
          (data.__component == "select.footer") ? 
              <Footer data={data} /> 
                : 
              null
      ))}
    </Layout>
   );
}
export default Home;
export async function getStaticProps(){
    const res = await axios.get(process.env.API_MAIN_URL);
    const mainData = res.data;
    const resp = await axios.get(process.env.API_HOME_URL);
    const homeData = resp.data.components;
   return {  
      props:{
        mainData,homeData
      }
    };
  }