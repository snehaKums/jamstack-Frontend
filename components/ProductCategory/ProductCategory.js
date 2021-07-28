import styles from '../Product/product.module.css'
import Image from 'next/image';

const ProductCategory =({products}) => {

    return(
    <div className="row" style={{margin:'2%',justifyContent:'center'}}>
                    <div className="col">
                            <Image
                                alt='Logo img'
                                src="/men.jpg"
                                width={250}
                                height={250}
                            />
                            <a href={'/category/' + products[1].id}>
                                <button className={styles.button} style={{marginLeft:'13%'}}>Explore Men clothing</button>
                            </a> 
                    </div>
                    <div className="col">
                        <Image
                            alt='Logo img'
                            src="/jwel.jpg"
                            width={250}
                            height={250}
                        />
                        <a href={'/category/' + products[3].id}>
                            <button className={styles.button} style={{marginLeft:'13%'}}>Explore Jewellery</button>
                        </a> 
                    </div>
                    <div className="col">
                                    <Image
                                        alt='Logo img'
                                        src="/Electr.jpg"
                                        width={250}
                                        height={250}
                                        />
                                    <a href={'/category/' + products[2].id}>
                    <button className={styles.button} style={{marginLeft:'13%'}}>Explore Electronics</button>
                </a> 
                    </div>
                    <div className="col">
                                    <Image
                                        alt='Logo img'
                                        src="/women.jpg"
                                        width={250}
                                        height={250}
                                        />
                                    <a href={'/category/' + products[0].id}>
                    <button className={styles.button} style={{marginLeft:'13%'}}>Explore Women clothing</button>
                </a> 
                    </div>
    </div>
                 
    )
}

export default ProductCategory;
