import styles from './ForgotPassword.module.css';
import Nav from '../../components/nav/Nav';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useResetPassword from '../../hooks/useResetPassword';
import { PulseLoader } from 'react-spinners';

export default function ForgotPassword() {
  const { authIsReady, user } = useAuth()
  const { resetPassword, isPending, errorMessage, successMessage } = useResetPassword()
  const [formError, setFormError] = useState({
    email: null,
  })
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setFormError({ ...formError, [prop]: null })
  };

  // handling reset
  const handleReset = (e) => {
    e.preventDefault()

    if(values.email === "" || !values.email.includes("@") || values.email.length < 5) {
      setFormError({...formError, email: "Email is invalid"});
      return
    }
    resetPassword(values.email)
  }

  useEffect(() => {
    if(user) {
      navigate('/')
    }
  }, [user, navigate])


  return ((authIsReady && !user) &&
    <div className={styles.container}>
      <Nav black={true}/>
      <form className={styles.form} onSubmit={handleReset}>
        <h1>Reset Password</h1>
        <TextField id="email" label="Email" variant="outlined" onChange={handleChange("email")}/>

        {!isPending && <button className={styles.btn}>Reset</button>}
        {isPending && <button disabled className={styles.btn} style={{opacity: "50%"}}><PulseLoader color='#000000' size={10}/> </button>}
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        {successMessage && <p className={styles.success}>{successMessage}</p>}
        {formError.email && <p className={styles.error}>{formError.email}</p>}
        
      <Link to="/login" className={styles.link}>Back to Login?</Link>
      </form>

    </div>
  )
}
