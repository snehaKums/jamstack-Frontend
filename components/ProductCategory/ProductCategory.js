import styles from '../Product/product.module.css'
import Image from 'next/image';

const ProductCategory =({products}) => {
    return(
    <div>
    {products.map((data,index)=>(
        index % 2 ?
        <div className="articleComponent">
          <div className="imgStyle">
              <Image
                alt={data.image.name}
                src={data.image.formats.medium.url}
                width={600}
                height={400}
              />
          </div>
          <div className="textStyle">
                 <p className="descp">{data.detail}</p>
              <a href={'/category/' + data.id}>
                <button className="pb">{data.title}</button>
              </a>
          </div>
        </div>
        :
        <div className="heroComponent">
          <div className="textStyle">
              <p className="descp">{data.detail}</p>
              <a href={'/category/' + data.id}>
                <button className="pb">{data.title}</button>
              </a>
          </div>
          <div className="imgStyle">
               <Image
                alt={data.image.name}
                src={data.image.formats.medium.url}
                width={600}
                height={400}
              />
          </div>
        </div>
    ))}
     </div>
    )
}

export default ProductCategory;
