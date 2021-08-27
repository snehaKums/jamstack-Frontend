import Image from 'next/image';

const ProductCategory =({data}) => {
    return(
    <div>
    {
        data.id % 2 ?
        <div className="articleComponent">
          <div className="imgStyle">
              <Image
                alt={data.image.name}
                src={data.image.formats.small.url}
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
                src={data.image.formats.small.url}
                width={600}
                height={400}
              />
          </div>
        </div>
    }
     </div>
    )
}

export default ProductCategory;
