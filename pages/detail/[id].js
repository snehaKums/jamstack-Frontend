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
  const res = await axios.get(process.env.API_PRODUCTS_URL+'/'+productId);
  const data = res.data;
  const resp = await axios.get(process.env.API_MAIN_URL);
  const mainData= resp.data
  return{
    props:{data,mainData}
  }
}

const Details = ({data,mainData}) => {
  let url= 'https://pure-dawn-42818.herokuapp.com'
  return (
    <div>
        <Header data={mainData.Header} />
          <div className={styles.detail}>
            <h1 className={styles.detailHeading}>{data.title}</h1>
            <div className={styles.detailImg}>
            <Image
                   alt={data.image.name}
                   src={url+data.image.formats.small.url}
                  width={400}
                  height={400}
            />
            </div>
            <p className={styles.detailPrice}>Price : $ {data.price}</p>
            <p className={styles.description}>{data. description}</p>
          </div>
        <Footer data={mainData.Footer} />
    </div>
  );

}

export default Details;
