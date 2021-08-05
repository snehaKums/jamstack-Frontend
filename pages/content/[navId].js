import axios from 'axios';
import Index from '../index';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Products from '../products';

export const getStaticPaths = async () => {
  const res = await axios.get(process.env.API_MAIN_URL);
  const navData = res.data.Header;

  let arr= [];
  for(let i=0;i<navData.length;i++){
    arr.push(navData[i]);
  }
  const paths = arr.map(data=>{
      return {
        params: {navId:data.navId.toString()}
      }
  })
  return{
    paths,
    fallback: false
  }
}

export const getStaticProps = async(context) =>{
  const navUrl = context.params.navId;
  const res = await axios.get(process.env.API_URL+'/'+navUrl);
  const resp = await axios.get(process.env.API_MAIN_URL);
  const data = res.data;
  const mainData= resp.data
  return{
    props:{data,mainData}
  }
}

const Details = ({data,mainData}) => {
  if(data[0].id == 1){
    return(
      <Index homeData={data} mainData={mainData} />
    )
  }
  if(data[0].category == 'womenwear'|| 'electronics' || 'jewelery' || 'menswear'){
    return(
        <Products products={data} mainData={mainData} />
    )
  }
  return (
    <div>
    <Header data={mainData.Header} />
      <p className="subHeader">{data[0].title}</p>
      <p className="desp">{data[0].description}</p>
    <Footer data={mainData.Footer} />
  </div>
  );

}

export default Details;