import axios from 'axios';
import Image from 'next/image';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout';
import styles from './detail.module.css'

export const getStaticPaths = async () => {
    const res = await axios.get(process.env.API_PRODUCTS_URL);
    const products = res.data;
    let arr=[]
    for(let i=0;i<products.length;i++){
      arr.push(products[i]);
    }
    const paths = arr.map(data=>{
        return {
          params: {id:data.id.toString()}
        }
    })
    return{
        paths,
        fallback: false
      }
}

export const getStaticProps = async(context) =>{
  const productId = context.params.id;
  const res = await axios.get(process.env.API_MAIN_URL+'/3');
  const data = res.data.products;
  console.log('000'+data[0].id)
  const resp = await axios.get(process.env.API_MAIN_URL);
  const mainData= resp.data
    for(let i=0;i<data.length;i++){
      const product = data[i]
      if(productId == product.id ){
        return{
          props:{product,mainData}
        }}
    }
}
const Details = ({product,mainData}) => {
  return (
    <div>
        <Header data={mainData} />
          <div className={styles.detail}>
            <h1 className={styles.detailHeading}>{product.title}</h1>
            <div className={styles.detailImg}>
            <Image
                  alt={product.image.name}
                  src={product.image.formats.medium.url}
                  width={500}
                  height={550}
            />
            </div>
            <p className={styles.detailPrice}>Price : Rs. {product.price}</p>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.contactDetails}>Contact Details of Seller</p>
            <div className={styles.contactDiv}>
              <p className={styles.addressLabel}>Address:</p>
              <p className={styles.address}>{product.address}</p>
            </div>
            <div className={styles.contactDiv}>
              <p className={styles.phoneNoLabel}>Phone No:</p>
              <p className={styles.phoneNo}>{product.phoneNo}</p>
            </div>
          </div>
          {mainData[0].components.map( data => (
              (data.__component == "select.footer") ? 
                <Footer data={data} /> 
              : 
              null
          ))}
    </div>
  );

}

export default Details;
