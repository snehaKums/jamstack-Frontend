import React from 'react';
import {NavLink} from 'reactstrap';
import Image from 'next/image';
import styles from './header.module.css'

const Header = ({data}) => {
  
  return (
<div className={styles.header}>
            <div className={styles.imgDiv}>
                   <Image
                        alt='Logo img'
                        src="/logo.png"
                        width={100}
                        height={100}
                  />
            </div>
     {data.map( data => (
       <NavLink href={'/content/' + data.id} className={styles.headerLink} key={data.id}>
         {data.title}
       </NavLink>
      ))}
     
</div>
  );
}


export default Header;