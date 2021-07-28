import axios from 'axios';
import Image from 'next/image';
import styles from './detail.module.css'

export const getStaticPaths = async () => {
    const res = await axios.get(process.env.API_MAIN_URL);
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
  const res = await axios.get(process.env.API_MAIN_URL+'/'+productId);
  const data = res.data;
  return{
    props:{data}
  }
}

const Details = ({data}) => {
  return (
        <div className={styles.detail}>
        <h1 className={styles.detailHeading}>{data.title}</h1>
        <div className={styles.detailImg}>
        <Image
              alt='Logo img'
              src={data.image[0].name}
              width={400}
              height={400}
        />
        </div>
        <p className={styles.detailPrice}>Price : $ {data.price}</p>
        <p className={styles.description}>{data. description}</p>
        </div>
  );

}

export default Details;
