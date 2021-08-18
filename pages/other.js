import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CarouselComponent from '../components/Carousel/CarouselComponent';
// import ProductCategory from '../components/ProductCategory/ProductCategory';

export default function Other({aboutData,mainData,fun}) {
        return (
            <Layout pageTitle="ShopSite">
                <Header data={mainData} />
                <div>
                    <h2>{fun.title}</h2>
                </div>
                {aboutData.map( data => (
                    (data.__component == "select.rich-text") ? 
                        <div>
                            <p className="subHeader">{data.heading}</p>
                            <p className="desp">{data.description}</p>
                        </div>
                    : 
                    <CarouselComponent data={data} />
                 ))}
                {aboutData.map( data => (
                    (data.__component == "select.footer") ? 
                        <Footer data={data} /> 
                    : 
                    null
                 ))}
               
            </Layout>
        
        )
    
}
