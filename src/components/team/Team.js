import { Link } from 'react-router-dom'
import styles from './Team.module.css'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

export default function Team({ title, subtitle, members }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.members}>
        {members.map((member, i) => (
          <div className={styles.member} key={i}>
            <img src={member.image} alt={member.name} />
            <div className={styles.memberInfo}>
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <p className={styles.remark}>{member.remark}</p>
              <div className={styles.social}>
                <Link to="#"><FaTwitter /></Link>
                <Link to="#"><FaFacebookF /></Link>
                <Link to="#"><AiFillInstagram /></Link>
                <Link to="#"><FaLinkedinIn /></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
