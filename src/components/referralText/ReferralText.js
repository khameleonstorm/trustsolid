import styles from './ReferralText.module.css';
import useAuth from '../../hooks/useAuth';

export default function ReferralText() {
  const { user } = useAuth();



  return (
    <div className={styles.container}>
      <h1 className={styles.title1}>Refer & Earn</h1>
      <p className={styles.text1}>
        Cashout as high as 25% Per Referred Person
        On their 1st Investment with us
      </p>
      <p className={styles.text2}>
        Simply tell them to Register with Your Username
      </p>
      <h1 className={styles.title2}>"{user?.displayName}"</h1>
      <p className={styles.text2}>Or simply Copy Your Referral Link & Start Sharing</p>
      <button>COPY REFERRAL LINK</button>
      <p className={styles.note}>
        Referred Person must have made at least 1 Investment before You will be Credited
        Any Successfully Referral Earnings will be Auto-added
        to Your Saving Balance & can be Cashed-out Automatically
        For more Info Contact on Live-Chat
      </p>
    </div>
  )
}
