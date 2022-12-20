import { Link } from 'react-router-dom'
import styles from './Testimonials.module.css'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { useEffect, useState } from 'react';

export default function Testimonials({ title, subtitle, testimonials }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // Use the useEffect hook to start an interval that changes the current testimonial every 5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [currentTestimonial, testimonials.length]);
  
    // Render the current testimonial
    const { name, country, remark, image } = testimonials[currentTestimonial];



  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.testimonials}>
          <div className={styles.testimonial}>
            <img src={image} alt={name} />
            <div className={styles.testimonialInfo}>
              <h3>{name}</h3>
              <p>{country}</p>
              <p className={styles.remark}>{remark}</p>
              <div className={styles.social}>
                <Link to="#"><FaTwitter /></Link>
                <Link to="#"><FaFacebookF /></Link>
                <Link to="#"><AiFillInstagram /></Link>
                <Link to="#"><FaLinkedinIn /></Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
