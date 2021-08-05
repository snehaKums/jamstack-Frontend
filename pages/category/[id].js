import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import styles from '../../components/Product/product.module.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export const getStaticPaths = async () => {
    const res = await axios.get(process.env.API_CATEGORY_URL);
    const products = res.data;
    let arr=[]
    for(let i=0;i<products[0].categories.length;i++){
      arr.push(products[0].categories[i]);
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
  const categoryId = context.params.id;
  const res = await axios.get(process.env.API_CATEGORY_URL);
  const products = res.data;
  const resp = await axios.get(process.env.API_MAIN_URL);
  const mainData= resp.data
    for(let i=0;i<products[0].categories.length;i++){
      const data = products[0].categories[i]
      if(categoryId == data.id ){
        return{
          props:{data,mainData}
        }}
    }
}

const Details = ({data,mainData}) => {
  return (
    <div>
      <Header data={mainData.Header} />
        <Container fluid >
        <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
            <Row style={{marginTop:'2%'}}>                    
                {data.products.map(item => (
                <Col key={item.id} md={4} lg={3}>
                    <div className={styles.card}>
                    <Image
                        alt={item.image.name}
                        src={'https://pure-dawn-42818.herokuapp.com'+item.image.formats.small.url}
                        width={200}
                        height={200}
                        />
                        <h1 className={styles.cardText}>{item.title}</h1>
                        <p className={styles.cardSubtext}>Price: $ {item.price}</p>
                        <a href={'/detail/' + item.id}>
                            <button className={styles.detailButton}>Detail</button>
                        </a>
                    </div>
                </Col>
                ))}
            </Row>
            </Col>
        </Row>
      </Container>
    <Footer data={mainData.Footer} />
  </div>
  );

}

export default Details;
