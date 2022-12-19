import styles from './BalCard.module.css';

// importing icons
import { MdOutlineShowChart, MdSavings } from 'react-icons/md';
import { FaCoins } from 'react-icons/fa';
import { GiCash, GiReceiveMoney } from 'react-icons/gi';
import { TiChartBar } from 'react-icons/ti';

// importing components
import DashboardNav from '../../components/dashboardNav/DashboardNav';

//import useCollection hook
import useCollection from '../../hooks/useCollection';
import { useState, useEffect } from 'react';

//user and update
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import useAuth from '../../hooks/useAuth';

export default function BalCard() {
  const { user } = useAuth();
  const [balance, setBalance] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [showReader, setShowReader] = useState(false)
  const [localProfit, setLocalProfit] = useState(0)
  const { document } = useCollection('profile', false, true);




  useEffect(() => {
    const storedProfit = window.localStorage.getItem("trustsolid_profit")
    setLocalProfit( JSON.parse(storedProfit))
    const ref = doc(db, "profile", user.email);

    if(document){
      const doc = {...document[0]}
      const { bal } = doc
      const bals = [
        {title: "Balance", bal: bal?.balance},
        {title: "Investment", bal: bal?.investment},
        {title: "Profit", bal: bal?.profit},
        {title: "Savings", bal: bal?.savings},
        {title: "Withdrawal", bal: bal?.withdrawal},
      ]
      setBalance(bals)
      console.log(bals)

      if(bal?.balance > 0){
        setIsActive(true)
      } else {
        setIsActive(false)
      }

      if(bal?.investment === 0){
        setShowReader(false)
        return
      }
      
      if(bal?.investment === 0 && bal?.profit > 0){
        setShowReader(false)
        return
      }
      if(bal?.investment > 0 && bal?.profit > 0){
        setShowReader(false)
        return
      }

      if(bal?.investment >= 50){
        setShowReader(true)

        // first investment plan
        if(bal.investment >= 50 && bal.investment <= 300){
          const roi = bal.investment * 0.15
          const duration = 0.001 * 86400000 / roi

          const interval = setInterval(() => {
            let savedProfit = window.localStorage.getItem("trustsolid_profit")
            const newProfit = JSON.parse(savedProfit) + 0.001
            setLocalProfit(prev => prev + 0.001)
            window.localStorage.setItem("trustsolid_profit", JSON.stringify(newProfit))
            if(Math.trunc(newProfit) >= roi) {
              updateDoc(ref, { "bal.profit": roi})
              clearInterval(interval)
              return
            }
          }, duration);
        }

        //second investment plan
        if(bal.investment >= 300 && bal.investment <= 999){
          const roi = bal.investment * 0.45
          const duration = 0.001 * 86400000 / roi

          const interval = setInterval(() => {
            let savedProfit = window.localStorage.getItem("trustsolid_profit")
            const newProfit = JSON.parse(savedProfit) + 0.001
            setLocalProfit(prev => prev + 0.001)
            window.localStorage.setItem("trustsolid_profit", JSON.stringify(newProfit))
            if(Math.trunc(newProfit) >= roi) {
              updateDoc(ref, { "bal.profit": roi})
              clearInterval(interval)
              return
            }
          }, duration);
        }

        // third investment plan
        if(bal.investment >= 1000 && bal.investment <= 9999){
          const roi = bal.investment * 0.75
          const duration = 0.001 * 86400000 * 2 / roi

          const interval = setInterval(() => {
            let savedProfit = window.localStorage.getItem("trustsolid_profit")
            const newProfit = JSON.parse(savedProfit) + 0.001
            setLocalProfit(prev => prev + 0.001)
            window.localStorage.setItem("trustsolid_profit", JSON.stringify(newProfit))
            if(Math.trunc(newProfit) >= roi) {
              updateDoc(ref, { "bal.profit": roi})
              clearInterval(interval)
              return
            }
          }, duration);
        }

        // fourth investment plan
        if(bal.investment >= 10000){
          const roi = bal.investment * 100
          const duration = 0.001 * 86400000 * 3 / roi

          const interval = setInterval(() => {
            let savedProfit = window.localStorage.getItem("trustsolid_profit")
            const newProfit = JSON.parse(savedProfit) + 0.001
            setLocalProfit(prev => prev + 0.001)
            window.localStorage.setItem("trustsolid_profit", JSON.stringify(newProfit))
            if(Math.trunc(newProfit) >= roi) {
              updateDoc(ref, { "bal.profit": roi})
              clearInterval(interval)
              return
            }
          }, duration);
        }
        
      }
  
    }

  }, [document, user])

  console.log(showReader)



  return ((balance && balance !== undefined) &&
    <div className={styles.container}>
      <DashboardNav />
      <div className={styles.balCard}>
        {balance.map((bal, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.cardheader}>
              <div className={styles.cardtitle}>
                <h3>{bal.title}</h3>
              </div>
  
              <div className={styles.isactive}>
                {bal.title === "Balance" && <FaCoins className={styles.circle}/>}
                {bal.title === "Profit" && <GiCash className={styles.circle}/>}
                {bal.title === "Savings" && <MdSavings className={styles.circle}/>}
                {bal.title === "Withdrawal" && <GiReceiveMoney className={styles.circle}/>}
                {bal.title === "Investment" && <TiChartBar className={styles.circle}/>}
              </div>
            </div>
  
            <div className={styles.cardbody}>
              {bal.title !== "Profit" && <h1>${bal.bal}</h1>}
              {(bal.title === "Profit" && !showReader) && <h1>${bal.bal}</h1>}
              {(bal.title === "Profit" && showReader) && 
              <h1>${localProfit ? parseFloat(localProfit.toFixed(3)) : 0.000}</h1>}
              <MdOutlineShowChart className={styles.chart} style={isActive ?{color: "#00ffaa"} : {color: "#e90000"}}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}