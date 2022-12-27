import styles from './DashboardNav.module.css';
import { MdKeyboardArrowDown, MdOutlinePendingActions, MdPending, MdCheckCircle, MdArrowBack } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { HiOutlineLogout } from "react-icons/hi";
import { useLogout } from "../../hooks/useLogout"
import useAuth from "../../hooks/useAuth"
import useCollection from '../../hooks/useCollection';
import { TextField } from '@mui/material';
import { updateDoc, doc, addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { MoonLoader } from 'react-spinners';
import emailjs from '@emailjs/browser';
import dateFormat from "dateformat";

export default function DashboardNav({admin}) {
  const { authIsReady, user } = useAuth()
  const { logout } = useLogout()
  const [menu, setMenu] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);
  const [amount, setAmount] = useState(null);
  const [address, setAddress] = useState(null);
  const { document } = useCollection('profile', false, true);
  const { document: Doc2 } = useCollection('transactions', true, false);
  const [modalError, setModalError] = useState(null);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const ref = doc(db, "profile", user.email);
  


  const sendMessage = (amount, name, email) => {
    var templateParams = {
      amount,
      name,
      email,
      date: dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss"),
      title: "Withdrawal"
    };
 
    emailjs.send('service_er7xzjl', 'template_di1ueyc', templateParams, 'Sb5Ur8fiMBwCOBc7V')
    .then((result) => {
        console.log("result", result.text);
    }, (error) => {
        console.log("error", error.text);
    });
  }

  const openTransaction = () => {
    console.log("open", Doc2)
    setShowTransactions(true)
  }

  const handleTransaction = async (id, amount, fullName, email) => {
    const newRef = doc(db, "transactions", id);
    const response = prompt("Input 'yes' if you want to approve this transaction?")
    if(response === 'yes'){
      sendMessage(amount, fullName, email)
      updateDoc(newRef, {
        status: 'approved'
      })
    }
  }


  const handleClick = () => {
    if (menu) {
      setMenu(false)
    }
    if (!menu) {
      setMenu(true)
    }
  }


  const handleWithdraw = () => {
    setShowModal(true)
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    if(document){
      if(amount && address){
        // parse amount to number
        const amountNumber = Number(amount);
        const { bal, fullName } = document[0];
        const availableWithdraw = bal.investment + bal.profit
        if(availableWithdraw >= amountNumber){
          const newInvestment = bal.investment - amountNumber;
          const newProfit = bal.profit + newInvestment;
          const newBalances = {
            balance: bal.balance,
            investment: 0 >= newInvestment ? 0 : newInvestment,
            profit: newProfit >= bal.profit ? bal.profit : newProfit,
            savings: bal.savings,
            withdrawal: bal.withdrawal,
          }

          await updateDoc(ref, {
            "bal": newBalances
          });

          await addDoc(collection(db, "transactions"), {
            amount: amountNumber,
            address,
            date: dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss"),
            status: "pending",
            email: user.email,
            fullName: fullName
          });

          
          
          setModalSuccess(true)
          setTimeout(() => {
            setIsPending(false)
          }, 3000)
        } else {
          setModalError('Insufficient funds')
          setTimeout(() => {
            setModalError(null)
          }, 3000)
        }
      } else {
        setModalError('Please fill all fields')
        setTimeout(() => {
          setModalError(null)
        }, 3000)
      }
    }
  }

  const backToDashboard = () => {
    setModalSuccess(false)
    setShowModal(false)
    setAmount(null)
    setAddress(null)
    setModalError(null)
  }


  return ((authIsReady && user) &&
  <>
  {showTransactions && 
  <div className={styles.transaction}>
    <MdArrowBack className={styles.exit} onClick={() => setShowTransactions(false)}/>
    {Doc2?.map((doc, i) => (
      <div key={i} className={styles.transaction_item} onClick={() => handleTransaction(doc.id, doc.amount, doc.fullName, doc.email)}>
        <div className={styles.transaction_item_left}>
          <p>{doc.email}</p>
          <p>Address: {doc.address}</p>
          <p>{doc.date}</p>
        </div>
        <div className={styles.transaction_item_right}>
          <h3>${doc.amount}</h3>
          {doc.status === "pending" && <p>{doc.status}<MdPending color='#ffa200'/></p>}
          {doc.status === "approved" && <p>{doc.status}<MdCheckCircle color='#62ff00'/></p>}
        </div>
      </div>
    ))}

  </div>  
  }
      {(modalSuccess && isPending) && 
      <div className={styles.modalSuccess}>
        <div className={styles.modalSuccessContainer}>
          <MoonLoader color="#ffd016"/>
          <h1>Processing Your Withdrawal</h1>
        </div>
      </div>
      }
      {(modalSuccess && !isPending) && 
      <div className={styles.modalSuccess}>
        <div className={styles.modalSuccessContainer}>
          <MdOutlinePendingActions size="4rem" color="#ffd016"/>
          <h1>Withdrawal Is Pending</h1>
          <p>Contact Us For More Info!</p>
          <button className={styles.back} onClick={backToDashboard}>Back To Dashboard</button>
        </div>
      </div>
      }
      {showModal &&
      <div className={styles.modal}>
        <div className={styles.modalcontent}>
          <form onSubmit={handleSubmit}>
            <h1>Enter Amount & Address(USDT)</h1>
            <TextField 
              id="Amount" 
              label="Amount" 
              variant="outlined" 
              fullWidth
              type="number"
              onChange={(e) => setAmount(e.target.value)}
            />
            <TextField 
              id="Address" 
              label="USDT Wallet Address" 
              variant="outlined" 
              fullWidth
              type="text"
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className={styles.btns}>
              <Button 
              variant="contained"
              type="submit"
              className={styles.submit}
              >Withdraw</Button>
              <p className={styles.cancel} onClick={() => setShowModal(false)}>Cancel</p>
            </div>
            {modalError && <p className={styles.error}>{modalError}</p>}
          </form>
        </div>
      </div>
    }


    <div className={styles.container}>
      <div className={styles.hello} style={admin && {paddingLeft: "80px"}}>
        <p>Hello! </p>
        <p>{user.displayName}</p>
      </div>
      <div className={styles.logo}>
        <div className={styles.image}>
          <img src={user.photoURL ? user.photoURL : `https://robohash.org/${user.uid}`} alt="Avatar!" />
        </div>
        <MdKeyboardArrowDown size="1.8em" style={{cursor: 'pointer'}} onClick={handleClick}/>
        {menu && 
          <div className={styles.menu} onClick={handleClick}>
            {(user?.email !== "trustsolidfx@gmail.com") && 
            <>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/plans">Plans</Link>
              <Link to="#" onClick={handleWithdraw}>Withdraw</Link>
            </>
            }
            {(user?.email === "trustsolidfx@gmail.com") && <Link to="#" onClick={openTransaction}>Transactions</Link>}
            <Button variant="outlined" color="error" size="small" style={{fontSize: "0.7rem"}} onClick={logout}> Logout <HiOutlineLogout size="1.3em"
            style={{marginLeft: "1rem"}}
            /></Button>
          </div>
        }
      </div>
    </div>
  </>
  )
}
