
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import styles from '../Product/product.module.css'

export default function ProductCategory({data}){
    return(
       <div>
        {data.id % 2 ?
        <Container fluid>
        <Row>                    
          <Col key={data.id} lg={6} className={styles.colContainer}>
                <div className={styles.card}>
                  <h1 className={styles.cardTitle}>{data.title}</h1>
                  <Image
                    alt={data.image.name}
                    src={data.image.formats.small.url}
                    width={600}
                    height={300}
                  />
                  <p className={styles.cardDetail}>{data.detail}</p>
                  <a href={'/category/' + data.id}>
                    <button className={styles.exploreButton}>Explore {data.title}</button>
                  </a>
                </div>
          </Col>
        </Row>
    </Container>
    :
    <Container fluid>
            <Row>                    
              <Col key={data.id} lg={6}>
                    <div className={styles.card}>
                      <h1 className={styles.cardTitle}>{data.title}</h1>
                      <Image
                        alt={data.image.name}
                        src={data.image.formats.medium.url}
                        width={600}
                        height={300}
                      />
                      <p className={styles.cardDetail}>{data.detail}</p>
                      <a href={'/category/' + data.id}>
                        <button className={styles.exploreButton}>Explore {data.title}</button>
                      </a>
                    </div>
              </Col>
            </Row>
        </Container>}
      </div>
    )
}
