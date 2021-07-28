import React from 'react';
import {NavLink} from 'reactstrap';
import Image from 'next/image';
import styles from './header.module.css'

const Header = () => {
  
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
                <NavLink href={'/'} className={styles.headerLink} >
                    Home
                </NavLink>
                <NavLink href={'/products'} className={styles.headerLink} >
                  Products
                </NavLink>
                <NavLink href={'/about'} className={styles.headerLink} >
                    About Us
                </NavLink>
                
    </div>
  );
}


export default Header;