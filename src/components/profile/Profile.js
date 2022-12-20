import styles from './Profile.module.css'
import useAuth from '../../hooks/useAuth'
import { useEffect, useState } from 'react'

export default function Profile({ document }) {
  const { user,  authIsReady} = useAuth()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    if(document){
      // filter and set profile
      let filteredDoc = document.filter((doc) => doc.email === user.email)
      setProfile(filteredDoc[0])
    }
  }, [document, user])

  return ((authIsReady && user) &&
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.cover}>
          <img className={styles.img} src={user.photoURL} alt="avatar"/>
          <img className={styles.avatar} src={user.photoURL} alt="avatar"/>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.name}>
          <h1>@{user.displayName}</h1>
          <p>{user.email}</p>
          <div className={styles.equity}>
            <p>Total Assets</p>
            <h1>${profile?.bal.balance + profile?.bal.investment + profile?.bal.profit}</h1>
          </div>
        </div>
        <div className={styles.referral}>
          <div className={styles.referralCode}>
            <p>Referral Code</p>
            <h1>{user.displayName}</h1>
          </div>
          <div className={styles.referred}>
            <div className={styles.referCount}>
              <p>Referred</p>
              <h1>0</h1>
            </div>
            <div className={styles.referEarn}>
              <p>Bonus</p>
              <h1>$0</h1>
            </div>
          </div>
        </div>
        <div className={styles.moreDetails}>
          <h1>Profile Imformation</h1>
          <div className={styles.details}>
            <p>Full Name: <span>{profile?.fullName}</span></p>
            <p>Email: <span>{profile?.email}</span></p>
            <p>Email: <span>{profile?.email}</span></p>
            <p>Phone Number: <span>{profile?.phoneNumber}</span></p>
            <p>Country: <span>{profile?.country}</span></p>
            <p>UserID: <span>{profile?.uid}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
