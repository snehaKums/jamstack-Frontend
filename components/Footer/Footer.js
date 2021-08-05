import styles from './footer.module.css'

const Footer = ({data}) => {

  return (
    <footer className={styles.footer}>
      <p className={styles.footerText} >{data.footerText}</p>
    </footer>
  );
};


export default Footer;