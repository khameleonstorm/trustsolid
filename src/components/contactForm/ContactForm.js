import styles from './ContactForm.module.css';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import TextField from '@mui/material/TextField';

export default function ContactForm() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }



  return (
    <div className={styles.container} id="contact">
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.subtitle}>Get In Touch</p>
      <div className={styles.formContainer}>
        <div className={styles.left}>
          <div className={styles.address}>
            <div className={styles.loc}>
              <div className={styles.iconWrapper}>
                <IoLocationSharp size="1.2rem" className={styles.icon}/>
              </div>
              <div className={styles.locText}>
                <h3>Location</h3>
                <p>Evri ParcelShop, 28-30 W Ham Ln, London E15 4SA, United Kingdom</p>
              </div>
            </div>
            <div className={styles.email}>
            <div className={styles.iconWrapper}>
              <MdEmail size="1.2rem" className={styles.icon}/>
            </div>
              <div className={styles.emailText}>
                <h3>Email</h3>
                <p>help@trustsolidinvestment.com</p>
              </div>
            </div>
          </div>
          <div className={styles.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2746.3701215884003!2d0.002015165224205466!3d51.53872738954454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7b80ce62653%3A0xe40dc1e14447fb14!2sEvri%20ParcelShop!5e0!3m2!1sen!2sng!4v1667830223793!5m2!1sen!2sng" allowFullScreen="yes" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='officeAddress' className={styles.iframe}></iframe>
          </div>
        </div>
        <div className={styles.right}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <TextField id="outlined-basic" label="Full Name" variant="outlined" className={styles.input1}/>
              <TextField id="outlined-basic" label="Email" variant="outlined" className={styles.input1}/>
            </div>
            <TextField id="outlined-basic" label="Subject" variant="outlined" className={styles.input}/>
            <TextField id="outlined-multiline-flexible" multiline maxRows={10} minRows={10} label="Message" variant="outlined" className={styles.input}/>
            <button className={styles.btn}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
