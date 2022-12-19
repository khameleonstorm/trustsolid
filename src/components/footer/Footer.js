import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';


export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.address}>
        <h1>TRUSTSOLID</h1>
        <p>Evri ParcelShop, 28-30 W Ham Ln, London E15 4SA, United Kingdom</p>
        <h2>Email</h2>
        <p>trustsolidinvestment@gmail.com<br/>help@trustsolidinvestment.com</p>
      </div>
      <div className={styles.links}>
        <h2>Useful Links</h2>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="#contact">Contact</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/policies">T&C</Link>
      </div>
      <div className={styles.services}>
        <h2>Services</h2>
        <Link to="#services">Trading</Link>
        <Link to="/plans">Investment</Link>
        <Link to="#contact">Consultancy</Link>
        <Link to="#contact">Signals</Link>
      </div>
      <div className={styles.socials}>
        <h2>Our Social Networks</h2>
        <p>connect with us on our social network.</p>
        <div className={styles.icons}>
          <Link to="#"><FaFacebookF /></Link>
          <Link to="#"><FaTwitter /></Link>
          <Link to="#"><FaLinkedinIn /></Link>
          <Link to="#"><FaTelegramPlane /></Link>
          <Link to="#"><AiFillInstagram /></Link>    
        </div>
      </div>
    </div>
  )
}
